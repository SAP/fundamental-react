#! /bin/bash

# publish releases (already tagged by publish_release.sh)
if [[ "$TRAVIS_COMMIT_MESSAGE" =~ chore\(release\):\sversion\s[0-9]+\.[0-9]+\.[0-9]+$.* ]]; then
    npm publish
# bump and publish rc
else
    git config --global user.email "fundamental@sap.com"
    git config --global user.name "fundamental-bot"

    git checkout master
    # update the package verion and commit to the git repository
    npm run std-version -- --prerelease rc --no-verify
    
    echo "travis repo slug: $TRAVIS_REPO_SLUG"
    git status
    # pushes changes to master
    git push --verbose --follow-tags "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG" origin master > /dev/null 2>&1;

    git status

    npm publish --tag prerelease
fi
