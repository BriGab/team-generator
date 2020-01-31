# Team Generator

The team generator is a command line application that allows the user to build their 
engineering team. The user can initiate the application by running *node app*. 

A series of questions will follow asking for the users name, email, ID, and position on the team. Depending on which position is picked one more question is asked that is unique to that position. 

This application has a focus on tests and classes. Each entry uses the Employee class then extends to a more specific class depending on the position chosen. There are also 17 tests for these four seperate js files containing the classes. The tests can be run by running *npm run test* in the command line. 

This application requires the following NPM modules to be installed: 

* Inquirer // *npm i inquirer*
* Jest // *npm i jest*

Other requirements are already included in node/the files provided. 

Once a user is done creating one employee, they can then choose to either add another employee or go ahead and build their team. Once the build team has been run the team.html is created/updated and will then show information for each team member all on one page. 

