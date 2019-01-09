#! /bin/bash
git config --global user.email "fundamental@sap.com"
git config --global user.name "fundamental-bot"

git checkout master

# update the package verion and commit to the git repository
# npm run std-version

# pushes changes to master
# git push --quiet --follow-tags "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG" "$TRAVIS_BRANCH" > /dev/null 2>&1;

# commit changes made by standard-version to develop branch
# npm publish