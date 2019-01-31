#!/usr/bin/env node

/* eslint-disable no-console */

const GitHub = require('github-api');
const releaseNotes = require('./release-notes');

const argv = require('yargs')
    .usage('Usage: $0 [options]')
    .option('tag', {
        alias: 't',
        description: 'Version tag to use for the release',
        type: 'string'
    })
    .option('prerelease', {
        alias: 'p',
        description: 'Mark as a pre-release',
        type: 'boolean'
    })
    .option('debug', {
        alias: 'd',
        description: 'Turn on console messages',
        type: 'boolean'
    })
    .demandOption(['tag'], 'Please provide the version tag to create this release')
    .alias('help', 'h')
    .version(false)
    .help()
    .argv;

const gh = new GitHub({
    token: process.env.GH_TOKEN
});

// even though we have the repo slug (owner_name/repo_name),
// the GitHub API requires them as separate parameters
const repoSlug = process.env.TRAVIS_REPO_SLUG.split('/');

const ghRepo = gh.getRepo(repoSlug[0], repoSlug[1]);

releaseNotes(ghRepo, argv)
    .then(notes => {
        if (argv.debug) {
            console.log('\nRelease Notes:\n', notes);
        }
        ghRepo.createRelease({
            'tag_name': argv.tag,
            'target_commitish': 'master',
            'name': `Release ${argv.tag}`,
            'body': notes,
            'prerelease': argv.prerelease
        })
            .then(resp => {
                console.log('\nCreated release', resp.data.id, resp.data.name, '\n\n');
            })
            .catch(e => {
                console.error(e);
            });
    })
    .catch(e => {
        console.error(e);
    });
