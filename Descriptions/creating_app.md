# Basics

To get started with Angular the Node.js is needed to be installed.

##### More about installing the Node.js with npm in Ubuntu 18.04 under url:

https://hostadvice.com/how-to/how-to-install-node-js-on-ubuntu-18-04/ - some informations about installing Node.js and checking it's version and smth more.

### Just because Typescript is dedicated for Angular typescript is nice to have. - the command shich installs typescript globally is below

npm install -g typescript

### Angular CLI is a utility which allow users to create and manage projects from command line. It automates taskas like creating projects, adding new controllers etc. so it is good idea to use Angular ClI(CommandLine) which helps to create and maintain common paterns zcross our application. For installing Angular CLI run the command:

npm install -g @angular/cli

### And once it is instqaqlled you will be able to run it from the command line using the ng command.

##### Check if ng exist firstly:

ng --version

##### And to check some funcrions of ng write as below:

ng help [options]

# Finally we can create the angular application by:

ng new angular-hello-world - ng new - creqate new
angular - angular app
-hello-world - name of the application

ATTENTION - as you can see the type of application and it's name is needed to be written together separated by dashes '-'.

##### Than it is needed to switch the folder to created one ( angular-hello- world)

### If we want to check what was created just enter command as below:

tree -F -L 1

# To start the application after switch to app folder our angular-hello-world we execute the command:

ng serve - which starts the server for our appliction localhost 4200 is defined automatically so now after opening the link displayed after the command the application will be opened live.

### If we want to create another port we need to use the --port flag as below:

ng-serve -- port xxxx where x are nubmers port is 4 digit number.
