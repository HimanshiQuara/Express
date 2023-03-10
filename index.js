const express=require("express");
const path=require("path"); // to deal with files
const moment=require("moment"); // to deal with dates and time
const logger=require("./middleware/logger")

const app=express();
// we need have started the server but we also need to create an endpoint for it
// a route in Express defines how your application will respond to a client request that matches a particular URL and HTTP request method. When a client makes a request that matches a defined route, Express will invoke the appropriate callback function that handles the request.
//Routes are defined using the app.METHOD() functions provided by Express, where METHOD is an HTTP request method in lowercase (e.g., get, post, put, delete, etc.).
// whenever we visit a webpage it is a get request

/*
app.get("/",(req,res)=>{
    // res.send("Hello World!!"); this will print hello world in the browswer
    // if we want to send a file
    res.sendFile(path.join(__dirname,"public","index.html"));
    // in the directory in which our file is there is a public folder inside that folder there is a file named index.html
});
// suppose if we don't want to create same thing again we create a static folder
*/
// the middleware function
//app.use(logger); // this will access the logger from logger.js file

// body parser middleware for post

app.use(express.json());
// to handle submissions
app.use(express.urlencoded({extended:false}));// by this we can handle urlencoded data
// here we are creating a static folder
app.use(express.static(path.join(__dirname,"public")));

// members API route
app.use("/api/members",require("./route/API/Members"))


// since we have the route above we don't need it in the othet file

const PORT=process.env.PORT || 5000;  // we're setting the port variable to the value of the PORT environment variable if it's defined, or 5000 if it's not
app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`);
}) // this will start the server and listens for incoming requests on a specified port
// this means we are telling our express application to start listening for the incoming HTTP requests.
// app.listen(port,callback);
// since the changes that we'll make will be visible when we restart our page
// so we'll use nodemon that is a dev dependency which will automatically make changes that are made in node js program




