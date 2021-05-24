# Node Js Testing Strategies

Goal is to see what can be leveraged on Nodejs side to do unit testing


## Getting Started
1. "npm init" to create node project
2. "npm install mocha -g" to install mocha
3. "npm install --save-dev chai" to install chai
4. "npm install --save-dev -cross-env" for environment variables
5. "npm install --save-dev chai-as-promised" async await testing of promises
6. "npm install --save-dev sinon" stubbing  spying framework
7. "npm install --save-dev sinon-chai" stubbing spying framework different syntax with mocha
8. "npm install --save-dev rewire" allows testing of private functions
9. "npm install --save-dev mongoose" object data modelling library helps with stubbing

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

# Terminology

1. Spy: When you want to monitor code to understand what is happening inside but do not want to stub or change intrinisc behaviour within code flow
2. Stub: Isolating code to test a specific section while not for instance making a actually call to the DB and return controlled data that has no
relevance on focus of system or class under test


