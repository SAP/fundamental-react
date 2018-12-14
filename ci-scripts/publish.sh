git config --global user.email "EMAIL HERE"
git config --global user.name "USERNAME HERE"

# update the package verion and commit to the git repository
npm run std-version

git push --tags origin $TRAVIS_BRANCH

npm publish