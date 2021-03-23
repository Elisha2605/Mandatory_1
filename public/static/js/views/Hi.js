import AbstractView from "./AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Hi");
    }

    async getHtml() {

        return `
            <img src="/images/hello/hello.png" alt="" width="65%px">
            <h1>Hello! <br> Welcome to my Node.js dairy</h1>
            <p>
            On this diary I've written every thing I have learned about Node.js so far and more content are to be add.
            Please use the navigation bare on your left side to navigate between subjects.
            </p>

            <p>
                <a href="/poste" data-link>View recent posts</a>.
            </p> 
            
        `;
        
    }
}