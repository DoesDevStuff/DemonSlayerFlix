# DemonSlayerflix
DemonSlayerflix is a frontend Netflix clone but Demon Slayer-fied. It is built with React JS and uses the TMDB API to pull in data and images.

# Introduction
This is a practice project to brush up on my skills in creating a react application and deploying it with AWS. 

<details><summary>The basics</summary>

To create the skeleton of the react-app here are the commands to use (assuming you have node modules installed and up to date) :
1. `npx create-react-app <your-app-name>`   // This will load all the modules you will need
2. `cd <your-app-name>`
3. `npm start`

</details>

<details><summary>Firebase hosting</summary>

After setting up the basic react app we moved to hosting it, this allows us to then create the API key for TMDB as well.
<br>
Since we're hosting this on firebase we created a new project in Firebase and then navigated to setting up the hosting for our app. <br>
Set an appropriate name for you app and then follow the commands listed below - <br>

1. `npm install axios`
2. `npm install firebase`
3. `npm install -g firebase-tools`
4. `firebase login`

--=

After that we build our static site with :

5. `npm run build`

---

Once the build is successful we are ready to initialise the firebase, to do we run the following :

6. `firebase init`

---

This should give us a few options:

<i>Project Setup: </i>

- ? Are you ready to proceed? <b> Yes </b>      <br>

- ? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to
confirm your choices. <b> Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys </b>  <br>

---

<i>Hosting Setup: </i>
- ? Please select an option: <b> Use an existing project </b>  <br>

- ? What do you want to use as your public directory? <b>build</b> <br>

- ? Configure as a single-page app (rewrite all urls to /index.html)? <b>Yes</b> <br>

- ? Set up automatic builds and deploys with GitHub? <b>No</b> <br>

- ? File build/index.html already exists. Overwrite? <b>No</b> <br>

Finally we can deploy our app using :

7. `firebase deploy`

---

If you make any changes after this to your app remember to rebuild and the re-deploy the app using :
- `npm run build`
- `firebase deploy`

</details>

## Running the application yourself

Here's what you need to do to get this running locally on your computer.

1. Register for a TMDB API key by following the instructions [here](https://developers.themoviedb.org/3) to be able to use the API to pull in data and images displayed on the site
2. Add the API key in this line in the `request.js` file\
`const API_KEY = 'paste key in here'`
3. In the command line inside of the application's folder, run\
`npm start`
4. Open http://localhost:3000 to view it in a browser
<br>

<b> How to hide the API Key when uploading to any opensource platform : </b>
1. `npm install dotenv`
2. Create a .env file in the root directory here is where we store the secret key.
3. <b> IMP:  every variable you define should start with REACT_APP_ </b>  eg: `REACT_APP_ACCESS_KEY=<insert_your_api_token>`
4. Now you can use the variable in any of your components like so
`const API_KEY = process.env.REACT_APP_ACCESS_KEY;` <br>
The name should match the key given in the .env file
5.  Restart the local server using  `npm start`. This step applies whenever you make changes to the .env file.
6. Optionally, check if .env entry is present in .gitignore file. If the entry of .env exists in .gitignore then your .env file will not be pushed to github.






