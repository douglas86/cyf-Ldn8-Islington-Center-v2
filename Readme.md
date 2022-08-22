YouTube video on how to Deploy a PERN application on Heroku
https://www.youtube.com/watch?v=ZJxUOOND5_A

# Installing this project?

<ul>
    <li>git clone this project to your local machine</li>
    <li>then cd into this project</li>
    <li>Create all .env variables in the client and server directories</li>
    <li>then run npm start, it will install everything for you and run the server and client using concurrently</li>
</ul>

# Structure of this project?

## Front end - client side

### structure of my imports

<ul>
    <li>npm packages at the very top</li>
    <li>Followed by a space between</li>
    <li>pages</li>
    <li>Followed by a space between</li>
    <li>template</li>
    <li>organism</li>
    <li>molecule</li>
    <li>atoms</li>
    <li>utils</li>
    <li>Followed by a space between</li>
    <li>hooks</li>
    <li>assets</li>
    <li>context</li>
    <li>Followed by a space between</li>
    <li>styles</li>
    <li>media queries</li>
</ul>

### structure of components

<i>components - This is where the entire app resides and takes its shape</i><br>
<ul>
    <li>UI - User Interface, this is for the structure of the project where the ui is developed using the atomic structure by Brad Frost</li>
    <ul>
        <li>atoms - atoms are the smallest part of any ui component, such as a button, input tag etc.</li>
        <li>molecule - this is when you start assembling your atoms into action, this can consist of an input field or when you need to iterate over a component.</li>
        <li>organism - this is where your state is handled, can be used for something like a Form or a Card, passing data to its molecule counterpart</li>
        <li>template - this is where your page start taking shape, If you are wanting a specific design on multiple pages, you can pass data to a template which will then render that data like a Layout component, which could consist of a header with the main body and maybe even a footer at the bottom of the page</li>
    </ul>
    <li>utils - this stands for utilities, not quite sure what they normally use this one for, but in my case I am using this to store all of my helper functions</li>
    <ul>
        <li>toFunc - these helper functions are used for all helpers that start with the word to, the way in which I normally name a to function is that if I am taking it from one form and converting it to another, like toTitle, I am taking a string and capitalizing it with a bit of a style to go with it.</li> 
        <li>isFunc - these helper functions are used for all helpers that start with the word is, the way that I normally name an is function is when you want to see if something exists like isAuthenticated or isRoutes</li>
        <li>handlers - these helper functions are used for when I am working with a form, for example I write a component called Handler.jsx which would be my HOC(Higher Order Component) In that functions I will have lots of mini functions like handleSubmit, handleUpdate and handleDelete which can also pass its contents to the mini functions defined in this directory</li>
    </ul>
</ul>
<i>pages - as its name implies this is where all the pages of the project resides</i><br>
<i>construction - This is the main project files the App.jsx and the App.css files</i>
<ul>
    <li>App.jsx - this component will control the entire project all the routes will be placed here, As well as if you need a Layout template to wrap around the whole project</li>
    <li>App.css - this file will be used for all global css that I need for the entire project</li>
</ul>
<i>hooks - All of my custom hooks will be placed in this directory</i><br>
<i>assets - are for all the extra bits and pieces that don't really belong in any of the other directories like images or markdown files</i><br>
<i>Context - this directory is used for if I am wanting to use state management in my project</i>

## Back end - server side

### structure of my imports

    I am just giving the names of the directories, 
    whenever you import it doesn't matter the files within the directory

<ul>
    <li>npm packages at the very top</li>
    <li>Followed by a space</li>
    <li>lib</li>
    <li>utils</li>
    <li>Followed by a space</li>
    <li>routers</li>
    <li>controllers</li>
    <li>services</li>
    <li>Followed by a space</li>
    <li>Then all constants or lets variables</li>
</ul>

### structure of directories

<ul>
    <li><i>server.js</i> - this is the main entry point into the server, all middleware gets placed here. This is a no routes zone. Only if you are wanting a catch-all method then that will go here.</li>
    <li><i>router</i> - this is where all my router endpoints get placed</li>
    <li><i>controllers</i> - this is where the logic for my routes gets put together.</li>
    <li><i>services</i> - this is for all the helper functions of the routes</li>
    <li><i>lib</i> - lib stands for library, this is where the files that you use the most gets put together, like keys.js which is used for handling env variables or pool.js to connect to the db</li>
    <li><i>utils</i> - this stands for utilities this is where all miscellaneous helper functions gets placed, like if you are wanting to use a .then or .catch to keep it consistent throughout your api</li>
</ul>

## Team members that were involved in this project and what they did

### Douglas Maxton

I was one of the volunteers to help the trainees out in this project,
I had started this repo as a way in helping Saf out with the login,
It also gave me a chance to try out a new file structure that I wanted to get up and running.
I had always believed that the best way to learn a topic was to teach it.
Doing this repo was a way to see if Juniors could also understand what sort of message I was trying to conveyor and how
neat and clean we could design our code for a better understanding.

### Rahwa Ghebremichael

### Saf

### Saman

### Teniola









