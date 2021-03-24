import AbstractView from "./AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
        <h1>JavaScript data type</h1>
        <p>
        <b>In JavaScript, there are 6 data types defined.</b> 
        </p>

        <style>
        table {
        width:80%;
        }
        table, th, td {
        border: 1px solid #126e4c;
        border-collapse: collapse;
        }
        th, td {
        padding: 15px;
        text-align: left;
        }
        #t01 tr:nth-child(even) {
        background-color: #eee;
        }
        #t01 tr:nth-child(odd) {
        background-color: #fff;
        }
        #t01 th {
        background-color: #126e4c;
        color: white;
        }
        </style>
        </head>
        <body>

        
        <h2>Premitives data type</h2>
        
        <table id="t01">
        <tr>
            <th>Data Types</th>
            <th>Description</th> 
            <th>Example</th>

        </tr>
        <tr>
            <td>String</td>
            <td>represents textual data</td>
            <td>‘hello’, “hello world”</td>                

        </tr>
        <tr>
            <td>Number</td>
            <td>an integer or  a floating-point number</td>
            <td>3,&nbsp &nbsp432,45</td>        
        </tr>
        <tr>
            <td>Boolean</td>
            <td>Any of two values: true or false</td>
            <td>true and false</td>            
        </tr>
        <tr>
            <td>undefined</td>
            <td>a data type whose variable is not initialized</td>
            <td>let a;</td>        
        </tr>
        <tr>
            <td>null</td>
            <td>denotes a null value</td>
            <td>let a = null;</td>       
        </tr>
        <tr>
            <td>Object</td>
            <td>key-value pairs of collection of data</td>
            <td>let student = { };</td>     
        </tr>
        </table>
        
        <p>
        If you are ever confused of which type a 
        data may have, you can use “typeof” operator to find out: 
        </p>
        
        <img src="/images/jsDataType/dat1.png" alt="" width="500px"><br><br>
        
        <h2>Object</h2>
        
        <p>
        Everything is almost an object in JavaScript.
        This is the easiest way to create a JavaScript object:
        </p>
        
        <img src="/images/jsDataType/dat2.png" alt="" width="500px">
        
        <p>
        An object in JavaScript is a list of "key:value” pairs inside curly braces. In this case 
        “firstName, lastName and age” are keys and "Napster, Hansen and 50" are values.
        </p>
        `;
    }
}