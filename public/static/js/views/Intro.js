import AbstractView from "./AbstractView.js";



export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Intro");
    }

    async getHtml() {
        return `
            <h1>Intro</h1>
            <img src="/images/Intro/intro1.png" alt="" width="700px">
            <p>
            <b>First things first! What is node.js?</b><br><br>
            Node.js is a platform built on Chrome's JavaScript runtime for easily building 
            fast and scalable network applications. Node.js uses an event-driven, non-blocking 
            I/O model that makes it lightweight and efficient, perfect for data-intensive real-time 
            applications that run across distributed devices.
            </p>


            

    

        `;
    }
}

