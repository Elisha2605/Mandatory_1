import AbstractView from "./AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Hi");
    }

    

    async getHtml() {

        return `
            
            <h1 id="margin">Hello! <br> Welcome to my Node.js diary</h1>
            <img src="/images/hello/hello.png" alt="" width="65%px">
            <p>
            On this diary I've written every thing I have learned about Node.js so far and more content is to be added in the future.
            Please use the navigation bare on your left side to navigate between subjects.
            </p>

            
            
        `;
        
    }
}

            // <p>
            //     <a href="/poste" data-link>View recent posts</a>.
            // </p> 