import AbstractView from "./AbstractView.js";



export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Js Functions");
    }

    async getHtml() {
        return `
            <h1>JavaScript Functions</h1>
            
            <p>
            There are many ways to define a 
            function in Node.js. Here is some examples<br>
            There is a special syntax for declaring functions as shown below:
            </p>
            
            <h2>Here are some examples of how to define a function in JavaScript</h2>
            
            <ul>
                <li><h3>The following example is a function declaration.</h3></li><br>
                
                <img src="/images/jsFunctions/func1.png" alt="" width="500px"><br>
                
                <p>Here we have a function that will return “This is my first function.”<p>
                
                <li><h3>Next we have a function expression.</h3></li><br>
                
                <img src="/images/jsFunctions/func2.png" alt="" width="700px">
                
                <p>
                In this example notice that we don’t start with the function keyword. Instead, we have 
                assigned our function to the variable "myFunctionExpression".
                </p>
                
                <li><h3>We also have arrow functions.</h3></li><br>

                <img src="/images/jsFunctions/func3.png" alt="" width="900px">
                
                <p>
                An arrow function expression has a shorter syntax and
                lexically declare the “this” value and 
                binds it to the scoop of the function.
                </p>
                
                <li><h3>And then we have callback functions.</h3></li><br>

                <img src="/images/jsFunctions/func4.png" alt="" width="600px">

                <p>
                A callback functions is an asynchronous equivalent for a function.
                It means whenever some task is done this function will be called automatically.
                In this case if we had some code running in the “sayHiLater” function scoop, and it took 
                longer time to execute, then “anyFuctionReference” will be executed(or called) without having 
                to await for the other code to finish executing and “Hi” will be printed out.
                </p>
            </ul>  


            

    

        `;
    }
}