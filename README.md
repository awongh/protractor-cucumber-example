protractor-cucumber-example
===========================

example testing setup for angular protractor with cucumber.js

after npm install you have to run:
```
./node_modules/grunt-protractor-runner/node_modules/protractor/bin/webdriver-manager update
```

to debug these scripts with node-inspector run:
the webapp
```
grunt serve
```

then node-inspector
```
node-inspector
```

goto the url: http://127.0.0.1:3030/debug?port=5858

run protractor manually:

```
node --debug-brk ./node_modules/grunt-protractor-runner/node_modules/protractor/bin/protractor
```

