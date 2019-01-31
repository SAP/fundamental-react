/* eslint-disable no-console */

let isDebug = false;

const logDebug = (label, ...args) => {
    if (isDebug) {
        console.log(`\n${label}:\n`, ...args);
    }
};

const buildCommitMessage = (commit, pullRequests) => {
    const template = (msg, sha, url, prNumber, prUrl) => {
        logDebug('Template', msg, sha, url, prNumber, prUrl);
        return `${msg}${prNumber ? ` ([#${prNumber}](${prUrl}))` : ''} ([${sha}](${url}))`;
    };

    let message = commit.message;
    logDebug('Raw Message', message);
    let pos = message.indexOf(':');
    if (pos !== -1) {
        message = message.substring(pos + 1).trim();
    }

    if (message.match(/BREAKING CHANGE\:/)) {
        message = `**BREAKING CHANGE:** ${message}`;
    }

    pos = message.indexOf(commit.prNumber ? '(#' : '\n\n');
    if (pos !== -1) {
        message = message.substring(0, pos).trim();
    }

    return template(
        message,
        commit.sha.substring(0, 7),
        commit.url,
        commit.prNumber,
        pullRequests[`pr_${commit.prNumber}`]
    );
};

const buildMessages = (commits, pullRequests) => {
    let messages = {
        features: [],
        fixes: []
    };

    commits.forEach(commit => {
        if (commit.message.match(/^fix/)) {
            messages.fixes.push(buildCommitMessage(commit, pullRequests));
        }

        if (commit.message.match(/^feat/)) {
            messages.features.push(buildCommitMessage(commit, pullRequests));
        }
    });

    logDebug('Messages', messages);
    return messages;
};

const buildReleaseNotes = (messages) => {
    let notes = [];

    if (messages.features.length > 0) {
        notes.push('\n### Features\n');
        notes = notes.concat(messages.features.map(msg => `* ${msg}`));
    }

    if (messages.fixes.length > 0) {
        notes.push('\n### Bug Fixes\n');
        notes = notes.concat(messages.fixes.map(msg => `* ${msg}`));
    }

    return notes.join('\n');
};

const doesVersionMatchTag = (message, tag) => {
    const regex = /[0-9]+\.[0-9]+\.[0-9]+/;
    const messageMatch = message.match(regex);
    const tagMatch = tag.match(regex);
    return messageMatch && tagMatch && messageMatch[0] === tagMatch[0];
};

const getCommits = (ghRepo, tag) =>
    ghRepo.listCommits()
        .then(resp => {
            const commits = (!Array.isArray(resp.data) ? [resp.data] : resp.data);
            let filteredCommits = [];

            for (let i = 0; i < commits.length; i++) {
                const message = commits[i].commit.message;
                logDebug('Raw Commit Message', message);

                // continue until the first non-rc version is found
                if (message.match(/^chore\(release\):\sversion\s[0-9]+\.[0-9]+\.[0-9]+\s/)) {
                    // unless that match matches the tag just created
                    if (!doesVersionMatchTag(message, tag)) {
                        break;
                    }
                }

                // skip over system-generated commits
                if (message.match(/\[ci skip\]$/)) {
                    continue;
                }

                let prMatch = message.match(/\(\#\d+\)/);
                if (prMatch) {
                    prMatch = prMatch[0].match(/\d+/);
                }

                filteredCommits.push({
                    sha: commits[i].sha,
                    url: commits[i].html_url,
                    message: message,
                    prNumber: (prMatch ? parseInt(prMatch[0], 10) : null)
                });
            }

            return filteredCommits;
        })
        .catch(e => {
            console.error(e);
        });

const getPullRequest = (ghRepo, prNumber) =>
    ghRepo.getPullRequest(prNumber)
        .then(resp => {
            return { [`pr_${resp.data.number}`]: resp.data.html_url };
        })
        .catch(e => {
            console.error(e);
        });

module.exports = (ghRepo, argv) => {
    isDebug = argv.debug;

    return getCommits(ghRepo, argv.tag)
        .then(commits => {
            logDebug('Commits', commits);
            return Promise.all(commits.filter(commit => !!commit.prNumber).map(commit =>  // eslint-disable-line
                getPullRequest(ghRepo, commit.prNumber)
            ))
                .then(pullRequests => {
                    logDebug('Pull Requests', pullRequests);
                    let pullRequestLookup = {};
                    pullRequests.forEach(pullRequest => {
                        Object.assign(pullRequestLookup, pullRequest);
                    });

                    logDebug('Pull Request Object', pullRequestLookup);
                    return buildReleaseNotes(buildMessages(commits, pullRequestLookup));
                });
        })
        .catch(e => {
            console.error(e);
        });
};
