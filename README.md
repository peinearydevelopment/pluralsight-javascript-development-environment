### **.editorconfig**

To work with VSCode, EditorConfig for VS Code extension must be installed.

### **package.json**

This is a copy of a file the author of the course has provided to get started. I hope to use this section to take notes on the various packages included and their uses.

- **nsp**
  - *Node Security Platform*: This provides a security check on node packages being utilized in a project. It will scan them and alert you to any known vulnerabilities that exist in any of the npm packages listed in your `package.json` file.
- **express**
  - server
- **localtunnel**
  - allows you to use your development machine as a server and expose work to the outside world. localtunnel allows anyone with the url access to your development site.
  - ngrok is another option. it is a little more setup work, but password protects your site.  both 'punch' a hole in your firewall.
  - now is another option that actually uploads your files so you don't need to 'punch' a hole in your firewall
- **browser sync**
  - NOTE TO SELF: investigate this more
- **chalk**
  - allows a user to specify the color of the text output to the console
- **npm-run-all**
  - runs multiple tasks for npm scripts in a cross platform way
- **babel-node**
  - allows a user to utilize babel sytax for all of their node scripts
- **eslint-watch**
  - wrapper around eslint that just adds a file watcher, lints all js files including webpack configs ensuring consistent linting across the project
- **eslint**
  - linter for es(current)
  - `eslint-loader` works with webpack and only lints built files
  - `babel-eslint` will lint experimental features that eslint won't on its own
- **mocha**
  - doesn't have an assertion library build it
  - `jasmine` and `jest` have assertion libraries build it
- **chai**
  - assertion library
- **jsdom**
  - simultates the DOM in node
  - `cheerio` is an alternative, 'jQuery' for the DOM
  - `karma` & `testum` test runners that utilize browser launchers
- **nock**
  - mock http requests
- **json-server**
  - creates a development webserver
  - create a fake db with static json files
  - actually saves data to file
- **json-schema-faker**
  - creates fake data for you when you specify the data type
- **cors**
  - package for cors with express

#### npm scripts
- **lint:w**
  - `-- --watch` is what tells the npm scripts to pass the `--watch` argument to the `npm run lint` script command

#### CI
- **travis**
  - runs on linux
  - configuration with `.travis.yml` file
- **appveyor**
  - runs on windows
  - configuration with `appveyor.yml` file

#### Fake data generators
**all come packaged with the json schema faker**
- **faker.js**
  - wide variety of functions for generating fake data including realistic names, phone numbers, emails, etc
- **chance.js**
  - wide variety of functions for generating fake data including realistic names, phone numbers, emails, etc
- **randexp.js**
  - creates random data based on regular expressions
