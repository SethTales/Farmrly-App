THIS APP IS A WORK IN PROGRESS

Farmrly is a garden and small farm planning app. Users will be able to create visual garden plans, choose from a wide variety of vegetable crops, and then 'plant' them using a visual modelling system. Users will also be able to manage succession planting, crop rotations and more.

This repo is the front-end of Farmrly. Farmrly is a SPA that runs on NodeJS using ExpressJS framework, and jQuery to dynamically manipulate the HTML/CSS and perform asynchronous data access. The back-end will be a separate app(s), providing a series of API endpoints that are hit asynchronously, primarily to perfrom CRUD operations on a database, probably written in C# (but maybe Python, TBD).

The idea behind completely separating the UI/front-end from back-end APIs/database operations is to create a highly modular, scalable application that will be easy to add features to over months/years. The JavaScript will also be written in modules, so that each js file provides a small piece of functionality for the app. 

PROJECT STRUCTURE (subject to change)

Farmrly
----->node_modules
----->public
    ----->images
          contains button icons, crop icons and other visual assets
    ----->scripts
          contains JavaScript modules that provide functionality to a specific piece of the application
    ----->style
          css stylesheets
----->views
      html
----->app.js
      this is the entry point
      run 'node app.js' to launch Farmrly-App



