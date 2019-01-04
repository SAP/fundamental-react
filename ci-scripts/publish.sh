#! /bin/bash
git config --global user.email "fundamental@sap.com"
git config --global user.name "fundamental-bot"

git checkout master
npm install
npm run build

# update the package verion and commit to the git repository
npm run std-version

# pushes changes to master
git push --quiet --follow-tags "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG" "$TRAVIS_BRANCH" > /dev/null 2>&1;

# commit changes made by standard-version to develop branch
git checkout develop
# git merge master
# git commit -a -m "chore: merge master into develop [ci skip]"
git push --quiet --follow-tags "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG" develop > /dev/null 2>&1;
# publish master to npm
git checkout master
npm publish