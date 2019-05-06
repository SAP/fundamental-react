#!/bin/bash

# Check for help flag
for arg in "$@"
do
    if [ "$arg" == "--help" ] || [ "$arg" == "-h" ]
    then
        echo Ex: gitcp original.js new.js
        exit 0
    fi
done

# Enforce two arguments
if [ $# != 2 ]
then
    echo Error, you need to provide two arguments
    echo Ex: gitcp original.js new.js
    exit 0
fi

original_path=$1
new_path=$2
branch=$(git symbolic-ref --short HEAD)
temp_branch=gitcp_temp_branch
temp_ext=.temp

# Create temp branch
echo
read -p "Press enter to create temp branch"
echo "Creating temp branch"
git checkout -b $temp_branch

# Move file to new name
echo
read -p "Press enter to move file to new name"
echo "Moving file to new name"
git mv $original_path $new_path

# Commit on temp branch
echo
read -p "Press enter to commit on temp branch"
echo "Committing on temp branch"
git commit -m "Rename file"

# Checkout original branch
echo
read -p "Press enter to check out original branch"
echo "Checking out original branch"
git checkout $branch

# Move original file to temp location
echo
read -p "Press enter to rename file to temp name"
echo "Renaming file to temp name"
git mv $original_path $original_path$temp_ext

# Commit temp file
echo
read -p "Press enter to commit temp file name"
echo "Committing temp file"
git commit -m "Rename temp"

# Merge temp branch
echo
read -p "Press enter to merge temp branch"
echo "Merging temp branch"
git merge $temp_branch

# Resolve merge conflicts
echo
read -p "Press enter to resolve merge conflicts"
echo "Resolving merge conflicts"
git add .

# Commit temp branch merge
echo
read -p "Press enter to commit temp branch merge"
echo "Committing temp branch merge"
git commit -m "Merge temp branch"

# Delete temp branch
echo
read -p "Press enter to delete temp branch"
echo "Deleting temp branch"
git branch -D $temp_branch

# Restore original file name
echo
read -p "Press enter to rename file to original name"
echo "Renaming file to original name"
git mv $original_path$temp_ext $original_path

# Commit original file Rename
echo
read -p "Press enter to commit original file name"
echo "Comitting original name"
git commit -m "Restore original"

echo
echo "-----------------------------------------------------------"
echo "Copy successful!"
echo "No changes were pushed. You may want to push your changes."
echo "-----------------------------------------------------------"