import AbstractView from "./AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Express");
    }

    async getHtml() {

        return `

            <h1>Express</h1>
            <p>
            Express is a framework that runs within Node.js that provides the means 
            for a developer to create and maintain robust servers. It comes with many 
            built-in features, but also has a gigantic suite of third-party add-ons that developers can use to 
            provide better functionality, increased security, and improved speed.
            </p>

            <h2>What is Express used for?</h2>
            <p>
            The primary use of Express is to provide server-side 
            logic for web and mobile applications
            </p> 
            
            <h2>How to use Express?</h2>

            <p>
            First we are going to have to create a packge.json file
            a package.json file can be described as a manifest of 
            your project that includes the packages and applications 
            it depends on, information about its unique source control, 
            and specific metadata like the project's name, description, and 
            author.
            </p>

            <b><p>Now we are going to type "npm init" command as shown below:</p></b>
            
            <img src="/images/express/exp1.png" alt="" width="300px">
            <p>
            The npm init command helps to initialize your Project.
            </p>

            <b><p>Next step is to install express itself by using following commands:</p></b>

            <img src="/images/express/exp2.png" alt="" width="400px">

            <p>
            The above commands will install express in your project and add a 
            “node_modules” folder as well as a “package-lock.json”.
            </p>
            <p>
            <b>node_modules</b> : &nbsp this folder works as a cache for the external 
            modules that your project depends upon. When you npm intall them, 
            they are downloaded from the web and copied into the “node_modules” folder. 
            </p>
            <p>
            <b>Package-lock.json</b> : &nbsp it stores and keep track of the exact version of 
            every package that is installed.  
            </p>
            <p>
            After installing Express you can now create a JavaScript file where you will have to 
            run your application. You can call it for instance “app.js”
            </p>

            <b><p>After creating app.js you will have to import/require express to you file as following:</p></b>

            <img src="/images/express/exp3.png" alt="" width="600px">

            <p>
            And now you can enjoy and use express as you wish. Isn’t great?
            </p>



        `;
        
    }
}