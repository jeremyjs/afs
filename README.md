# AFS
A Fresh Start is a platform to empower communities in supporting their local homeless shelters through campaigns to donate toiletries and other necessities.

# Setup
1. Install [Node.js](https://nodejs.org/)
2. Clone this repository on your local machine.
3. Install local NPM packages.
4. Install global NPM packages: express-generator, gulp, & nodemon.
5. Run gulp to build public files
6. Run the server.

```
git clone https://github.com/jjman505/afs.git
cd afs
npm install
npm install -g express-generator gulp nodemon
gulp &
nodemon bin/www
```

You may need to append `sudo` to the beginning of the npm -g command depending on how npm is installed on your system. e.g. `sudo npm install -g express-generator gulp nodemon`

Navigate to `localhost:3000` in your browser and you're good to go.

# Resources
Express is a framework built on top of Node.js to simplify things like routing, compiling and serving templates, and serving static files. This tutorial will help you create your own basic Node.js app to start getting comfortable with the technologies: [Dead Simple Step-By-Step Guide to Express](http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/)

Within the backend api, the Mongoose package is our interface with the database. Our database is hosted on [modulus.io](http://modulus.io). Follow this tutorial from [scotch.io](http://scotch.io) to learn how an Express API works using Mongoose: [Build a Restful API Using Node and Express](https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4). Follow this guide for more in-depth information about MongoDB: [Getting Started with MongoDB](https://docs.mongodb.org/getting-started/node/introduction/). You can learn more about Mongoose from the  [Mongoose documentation](http://mongoosejs.com/docs/index.html).

As you probably picked up from the previous tutorials, we're using the Jade templating language in this project. Here's a link to the Jade home page so you can start learning some more advanced functionality: http://jade-lang.com/

We'll be using LESS, which is a superset of CSS. If you get confused, look at the [LESS documentation](http://lesscss.org/features/). Remember, basic CSS is also valid LESS. Make sure you put all LESS code in the `stylesheets` folder in a `.less` file. The `public/css` folder is only for compiled css; don't modify those files by hand, run gulp to compile from LESS. You can use the `gulp build-css` command to recompile at any time, or just use `gulp &` to run the task in the background and automatically recompile when the files change.

Gulp is a task runner that works from the command line. It's not used a whole lot in this project, but if you're curious, you can learn more here: [Automate Your Tasks Easily with Gulp](https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js)
