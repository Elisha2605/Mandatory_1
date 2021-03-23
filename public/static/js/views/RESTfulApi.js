import AbstractView from "./AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("RESTful API");
    }

    async getHtml() {

        return `
            <h1>RESTful API</h1><br>
            <h2>What is a RESTful API?</h2>
            <p>
            A RESTful API is an architectural style for an application 
            program interface (API) that uses HTTP requests to access and 
            use data. That data can be used to GET, PUT, POST and DELETE 
            data types, which refers to the reading, updating, creating and 
            deleting of operations concerning resources.
            </p>

            <h2>How to build a simple RESTful API </h2>

            <p><b>
            The following example demonstrate a RESTful API that 
            has a GET method that returns a Student object.</b>
            </p> 

            <p>
            Let assume we have installed and imported/required Express in our app.js
            </p>
            
            <img src="/images/restfulApi/rest1.png" alt="" width="50%px">

            <p>
            On the above code. What we have done so far is that:
            </p>

            <ul>
                <li>on the first line as mentioned before, 
                    we require express and uses <br> the express variable 
                    to represent it.
                </li><br>
                <li>Second line are initializing express into the 
                    variable app. <br> So now whenever we want to use our 
                    express server, we would need <br> to use the app variable 
                    which represents our app.
                </li><br>
                <li>We then set our app to listen to port 8080 and 
                    create a callback <br>function that says with a condition 
                    that prints an error if there is one, <br> otherwise it will 
                    say where our server is running on.
                </li><br>
            </ul>

            <p>
            Our app now can be accessible using <b>http://localhost:8080</b>, 
            but the thing is, when we hit that endpoint it won’t get us 
            anything since we haven’t configure our server to listen to 
            any events.
            </p>

            <h2>How to setup a router?</h2>

            <p>
            A server receives requests, processes them and returns a 
            response. So you need to use routes to handle this requests.
            In our case we are going to use the GET request that will 
            get “Student” object.
            </p>

            <p>First let’s create our Student object:</p>

            <img src="/images/restfulApi/rest2.png" alt="" width="400px"><br><br>

            <p>Now let’s setup our router using a GET request: </p>

            <img src="/images/restfulApi/rest3.png" alt="" width="500px">

            <p>
            This function makes the express app to use the url handle “/student” 
            to trigger the callback that accepts three parameters, 
            </p>

            <ul>
                <li><b>“req”</b>:  is the request body 
                and carries information about the request.
                </li><br>
                <li><b>“res”</b>: is the response body and is 
                used to handle response functions and return json data.
                </li><br>
            </ul>

            <b><p>And this is how our final code looks like:</p></b>

            <img src="/images/restfulApi/rest4.png" alt="" width="500px"><br><br>

            <h2>How to run our application?</h2>

            <b><p>To run our application, we use the following command:</p></b>

            <img src="/images/restfulApi/rest5.png" alt="" width="200px">

            <p>
            This will command will run our application, but the only problem 
            is that we have to restart our server every time in order to see 
            changes in our web browser.
            </p>

            <p>
            Another alternative will be to use “nodemon” which is a great tool 
            that helps restarting your application automatically whenever you 
            make a change in your files.
            </p>

            <p><b>
            To get use of the nodemon you need to install it with npm as following:
            </b></p>

            <img src="/images/restfulApi/rest6.png" alt="" width="280px">

            <p><b>
            And now to run your application using nodemon you will need to 
            write the following command:
            </b></p>

            <img src="/images/restfulApi/rest7.png" alt="" width="250px">

            <p>
            I suppose now you would like to see the result on our client endpoint. 
            Now that we have setted up our router we can either use our browser or 
            Postman to get our data by using the “<b>http://localhost:8080/student</b>”. 
            </p>

            <p><b>
            This is how it looks in the browser:
            </b></p>

            <img src="/images/restfulApi/rest8.png">

            <p><b>
            And this is how it looks like when usingPostman:
            </b></p>

            <img src="/images/restfulApi/rest9.png" alt="" width="1000px"><br>
            <img src="/images/restfulApi/rest10.png" alt="" width="1000px">

        `;
        
    }
}


