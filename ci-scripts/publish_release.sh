#! /bin/bash
NOCOLOR='\033[0m'
ERROR='\033[31m'

git fetch

# make sure we're on a releasable branch
git_branch=$(git rev-parse --abbrev-ref HEAD)
master=$(echo $git_branch | grep -cE "^master$")
archive=$(echo $git_branch | grep -cE "^archive\-v\d+$")
[[ "$master" = "0" && "$archive" = "0" ]] && echo -e "\n\t${ERROR}Sorry, this branch cannot be released.${NOCOLOR}\n\tReleases can only be published from 'master' and 'archive-v#' branches.\n\n" && exit 0

# make sure the current branch is a release candidate
rcVersion=$(grep '\"version\":' package.json | grep -c "\-rc.")
[ "$rcVersion" = "0" ] && echo -e "\n\t${ERROR}Sorry, this branch is not a release candidate.${NOCOLOR}\n\tIn order to publish a release, the package must be an 'rc' version.\n\n" && exit 0

# make sure the branch is clean
git_status=$(git status --porcelain)
[ -n "$git_status" ] && echo -e "\n\t${ERROR}Sorry, you have uncommitted changes.${NOCOLOR}\n\tIn order to publish a release, your working directory must be clean.\n\n" && exit 0

# make sure the branch is up-to-date
hash_head=$(git rev-parse HEAD)
hash_upstream=$(git rev-parse $git_branch@{upstream})
[ "$hash_head" != "$hash_upstream" ] && echo -e "\n\t${ERROR}Sorry, the branch is out of date.${NOCOLOR}\n\tIn order to publish a release, the branch must match the origin.\n\n" && exit 0

set -o errexit

githubEmail=`git config --get user.email`
githubName=`git config --get user.name`

git config --global user.email "fundamental@sap.com"
git config --global user.name "fundamental-bot"

npm run std-version:release
git push --follow-tags origin

git config --global user.email "$githubEmail"
git config --global user.name "$githubName"
