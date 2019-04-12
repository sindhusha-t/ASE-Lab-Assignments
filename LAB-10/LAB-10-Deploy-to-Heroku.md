# Deploying to Heroku

## Team Members: 6-1
### Sindhusha Tiyyagura 24
### Pradeepika Kolluru 12

## Main Objective:
Is to deploy web application in Heroku.

## Steps followed to deploy the web application in Heroku.

1) Create an account and getting access to the Heroku web page.
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-10/Screenshots/account%20creation.png)
2) For command line access of Heroku cli downloaded and installed it from the website   
"https://devcenter.heroku.com/articles/heroku-cli#download-and-install".
3) Checking the existence of heroku by opening Git Bash and executing `heroku -v`.
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-10/Screenshots/verified%20heroku.png)
4) One can create an application in Heroku either using the command `heroku create app_name`    
or can create in the heroku website.
5) To setup the project correctly with the build and execution information which is necessary for the Heroku aplication.
6) So as the project is NodeJS and ExpressJS, we have created procfile specifying the web buildpack and the command to run by the heroku.
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-10/Screenshots/proc%20file.PNG)
7) Package.json file also contains the information about the engine versions of node and npm and also specifies which js file start/execute with. 
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-10/Screenshots/package.json%20file.PNG)
8) Next we have set the GIT remote repository in heroku using the command `heroku git:remote -a app_name`
9) I have initiated the git repository and versionised the files using the sequence of below commands.   
`git init`   
`git add .`   
`git commit`   
10) Next we have deployed the files to the heroku using the following command.
`git push heroku master`
11) The above command gives the link of the application deployed in heroku and can execute the code using the mentioned link.
12) Initially we faced an error while running the web application in heroku. So we checked the heroku logs to find out the issue using the command `heroku logs`
13) There is an issue with the port that is assigned in the localhost by the heroku. So, I have replaced the port number 3000 to process.env.PORT ( default port used by heroku).
14) And then deployed the changes back to the heroku.
15) It worked perfectly fine now.
Here are the screenshots for the execution of web application in heroku.
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-10/Screenshots/login%20page.png)
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-10/Screenshots/Invalid%20credentails.png)
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-10/Screenshots/details%20from%20cookie.png)

Credentials:
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-10/Screenshots/credentials%20for%20web%20app.PNG)

### Conclusion:
We have learnt how to deploy an application in heroku.

### Deployment link:
https://ase-lab-10.herokuapp.com
