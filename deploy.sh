#!/bin/bash

if [[ "$1" == "development" ]]; then
    branch='master'
    ssh admin@dev.imas.lt "cd domains/domefront.dev.imas.lt/public_html/
        git fetch
        git checkout $branch -f
        git checkout .
        git pull origin $branch --force
        npm install
        gulp build"
else
    echo "Not deploying: no deployment environment provided."
fi