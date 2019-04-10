# Assignment 9 ( Using PUG and ExpressJS )

### Introduction:
Getting Hands on with PUG and ExpressJS.

### Tasks to be done:
1. Create a Login Page Using PUG Template Engine.
2. On Click of login button display details of user by retrieving from Cookie in NodeJS. 
3. Load CSS files using express.static() method.

### Task-1: Creating a login page using pug template Engine.
1) Created an Express Application using Webstorms.
2) Installed PUG using the command `npm install pug --save`
3) In app.js file we have imported express and also the PUG as view engine.
4) Specified the required JS files that are used in the application( contains the required routing information)
5) Configuring the application to listen on port number 3000
6) We have written the PUG file and rendered it from the index.js file.
7) After the login form is submitted by the user is redirected to users.js file.
Ran the Application using wither `node app.js` or `nodemon`
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-9/express_pug_login/Documentation/Screenshots/Index%20pug%20file.PNG)

![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-9/express_pug_login/Documentation/Screenshots/login%20page.png)

![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-9/express_pug_login/Documentation/Screenshots/login%20with%20errors.png)

### Task-2: Setting Cookie details and retrieving them in the page.
1) On Click of the login button -> user credentials are checked with the local JSON file and then user is authenticated.
2) The details of the user in the JSON file is saved in the cookie after logging in.
3) These cookie values are rendered to the HTML page ( ie users.pug file ) where the user details are displayed in the form of table.
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-9/express_pug_login/Documentation/Screenshots/user%20details.png)

![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-9/express_pug_login/Documentation/Screenshots/cookies%20data.PNG) 

### Task-3: Loading the CSS files using express.static function.
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-9/express_pug_login/Documentation/Screenshots/css%20import.PNG)

### Conclusion:
1) We have learnt how to create PUG files and render it from the JS files.
2) We have learnt how to set the cookie and retrieve them

### Team Members:
Sindhusha Tiyyagura (24)
Pradeepika Kolluru (12)
