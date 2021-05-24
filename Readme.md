# Node Js Testing Strategies

Goal is to see what can be leveraged on Nodejs side to do unit testing


## Getting Started
1. "npm init" to create node project
2. "npm install mocha -g" to install mocha
3. "npm install --save-dev chai" to install chai
4. "npm install --save-dev -cross-env" for environment variables

# Running tests
1. mocha <<testgilename.js>>
2. npm test


# Gotcha

In playing around with things i sometimes got issues especially with  cross-env
these commands will clean up your space and get you back on track

rm -rf node_modules
rm package-lock.json yarn.lock
npm cache clear --force
npm install cross-env
npm install 
npm test