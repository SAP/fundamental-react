#! /bin/bash

git config --global user.email "fundamental@sap.com"
git config --global user.name "fundamental-bot"

git checkout master
npm install

# publish releases
if [[ "$TRAVIS_BRANCH" = "tmp_branch_for_automated_release_do_not_use" ]]; then
    # delete tmp_branch_for_automated_release_do_not_use branch from remote
    git push "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG" :tmp_branch_for_automated_release_do_not_use > /dev/null 2>&1;

    # update the package version and commit to the git repository
    std_ver=$(npm run std-version)
    release_tag=$(echo "$std_ver" | grep "tagging release" | awk '{print $4}')

    echo "$std_ver"

    # pushes changes to master
    git push --follow-tags "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG" master > /dev/null 2>&1;
  
    npm run release:create -- --tag $release_tag

    npm publish

    npm run deploy

# bump and publish rc
else
    # update the package rc version and commit to the git repository
    npm run std-version -- --prerelease rc --no-verify

    # pushes changes to master
    git push --verbose --follow-tags "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG" "$TRAVIS_BRANCH" > /dev/null 2>&1;

    npm publish --tag prerelease
fi
