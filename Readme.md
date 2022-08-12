YouTube video on how to Deploy a PERN application on Heroku
https://www.youtube.com/watch?v=ZJxUOOND5_A

# Installing this project?

<ul>
    <li>git clone this project to your local machine</li>
    <li>then cd into this project</li>
    <li>then run npm start, it will install everything for you and run the server and client using concurrently</li>
</ul>

# Structure of this project?

![#f03c15](https://via.placeholder.com/15/f03c15/f03c15.png) `Front end - client side`

<i>components - This is where the entire app resides and takes shape</i><br>
<ul>
    <li>HOC - Higher Order Component, this will be used to bridge the gap between components and passing props or data</li>
    <li>UI - User Interface, this is for the structure of the project where the ui is developed</li>
    <ul>
        <li>atoms - this is for small items that I am wanting to share like buttons, links or headers<li>
        <li>molecule - these are for functions that are slightly bigger than atoms or when you are wanting to iterate over a component</li>
        <li>organism - this is where your state will be handled it starts bringing molecules and atoms together can be used for components like forms</li>
        <li>templates - this is used for giving shape to pages, if I am wanting to have a particular blueprint on a number of pages, such as a Layout.jsx component as I am wanting it on every page</li>
    </ul>
    <li>utils - This will be used for all helper functions</li>
    <ul>
        <li>toFunc - these helper function are used for all functions names that start with to</li>
        <li>isFunc - these helper function are used for all functions names that start with is</li>
        <li>handlers - this helper function is used for all handlers called from HOC such as handleUpdate or handleDelete etc</li>
    </ul>
</ul>
<i>pages - Whenever a route is called a page needs to be displayed</i><br>
<i>construction - This is where the main app sites, the App.jsx file</i><br>
<ul>
    <li>App.jsx - this is the main entry point into the website, all routes get done here and the Layout template will be called</li>
    <li>App.css - this is going to be used for all global css styling</li>
</ul>
<i>hooks - All custom hooks site here</i><br>
<i>assets - All assets gets placed from here, which would include all images</i><br>
<li>Context - this is used for if I am wanting to store my state somewhere for all components to see</li><br/>

![#f03c15](https://via.placeholder.com/15/f03c15/f03c15.png) `Back end - server side`

<i>server.js - this is the main file that will run the server, all middleware gets placed here</i><br>
<i>routes - this is the entry point into calling the endpoint</i><br>
<i>controllers - from routes to controllers this is where all the logic for the routes sites</i><br>
<i>services - this is where all the helper functions site for the routes</i><br>
<i>lib - this is where all the most important function will be placed like keys.js for handling process.env and pool.js
for connecting to db</i><br>
<i>utils - this is used for all miscellaneous functions</i><br>
