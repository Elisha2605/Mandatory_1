import AbstractView from "./AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Bonus");
    }

    

    async getHtml() {

        return `
            
            <h1>Bonus</h1>
            
            <p>
            As a bonus, I have learned to create a single page application 
            using vanilla JavaScript, which means, no framework required. 
            I’m going to explained in 10 steps the most important part of the app of how I did it.
            </p>

            <p>
            Before we start let’s have in mind that this application is served 
            with express, so every configurations necessary has already been set up. 
            </p>

            <p>
            Here is what’s in our app.js
            </p>

            <img src="/images/Bonus/bonus1.png" alt="" width="600px">

            <p>
            No matter what path we are sending to the server, we are going back to the root which is 
            index.html. And this is very import in order to make this single page application.
            </p>

            <h2>1. Creating a html template “index.html”</h2>

            <p>
            In our index.html we have:
            </p>
            <lu>
                <li>Navigation with links with anchor tags which have data-link as attribute.</li> 
                <li>Data-link: is used for the history api. Any anchor tag  with an attribute of</li> 
                “data-link” should use the history api. Then push states method to <br>navigate 
                to a particular resource to avoid a page refresh.
            </lu><br><br>
            
            <h2>2. In our index.js</h2>

            <p>
            Here we are going to create a client side router by creating an new array abject of 
            routes in where we will have the path as a key and the view as a value.
            </p>

            <img src="/images/Bonus/bonus13.png" alt="" width="500px"><br><br>

            <h2>3. Test each route for potential match</h2>

            <img src="/images/Bonus/bonus2.png" alt="" width="600px">

            <p>
            Now in our browser console, if we type “location.pathname” we can see the path name ex: “/index”
            </p>
            
            <h2>4. navigate by using the history api</h2>

            <p>
            This allows us to navigate without loading a new resource. Se the code bellow:
            </p>

            <img src="/images/Bonus/bonus3.png" alt="" width="600px">

            <p>
            We may add some event listeners for the actual links themselves, so basically whenever the link has 
            data-link we need to run the “navigateTo” instead of the default behavior of refreshing the page.
            </p>

            <p>
            And here is how you do it:
            </p>

            <img src="/images/Bonus/bonus4.png" alt="" width="600px">

            <p>
            Here we are simply saying if we click on one of the links, the e.target is going to refer to 
            the actual link element itself. Then we are checking if the link element has the “data-link” 
            attribute. If it does then preventDefault()  is going to prevent the default behavior of 
            following that link, but instead navigate to the actual “href” as sets on the element itself.
            </p>

            <h2>5. How to re-run the router when we are navigating through history?</h2>

            <p>
            Here we are using only one liner where we use a event listener that is going to listen 
            to a popstate. A popstate event is dispatched to the window every time the active history 
            entry changes between two history entries for the same document. 
            </p>

            <img src="/images/Bonus/bonus5.png" alt="" width="600px"><br><br>

            <h2>Abstract view</h2>

            <img src="/images/Bonus/bonus6.png" alt="" width="400px">

            <p>
            All the views are going to inherit the AbstractView.js.
            </p>

            <p>
            o	We have the getHtml() method which return nothing. So whenever we have a view that 
            extends the AbstractView.js, it’s going to override this getHtml() method, and instead 
            provide its own html for that view 
            </p>

            <h2>7. inside Hi.js file</h2>

            <p>
            In our view files we need to import and extend the AbstractView.js in order to use it’s methods.
            </p>

            <p>
            By extending the AbstractView.js, as we can see on the image bellow, we also define a constructor 
            so that we can set our view’s title as well as returning a template string using the back ticks 
            which is in other words the html of  Hi.js.
            </p>

            <img src="/images/Bonus/bonus8.png" alt="" width="600px"><br><br>

            <h2>8. Inject the html inside our router</h2>

            <p>
            In our index.js, we are going to first import our view, in our case Hi.js
            </p>

            <img src="/images/Bonus/bonus9.png" alt="" width="600px">

            <p>
            Next we need to instatiate our view by saying:  
            </p>

            <img src="/images/Bonus/bonus10.png" alt="" width="600px">

            <p>
            Here we are creating a new instance of the view at the match roots
            </p>

            <h2>9. Getting the html</h2>

            <img src="/images/Bonus/bonus11.png" alt="" width="700px">

            <p>
            Here we are getting the html from our views (let say Hi.js) and then 
            inject it inside the innerHTML of the selected element which is “app”.
            </p>

            <h2>10. how to see our html content</h2>

            <p>
            In order to display the our html content we need to go to our index.html 
            and create a div and give it app as an id.
            </p>

            <img src="/images/Bonus/bonus12.png" alt="" width="300px">

            <p>
            And then we are done :)
            </p>


            
            
        `;
        
    }
}

            // <p>
            //     <a href="/poste" data-link>View recent posts</a>.
            // </p> 