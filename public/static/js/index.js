import Bonus from "./views/Bonus.js";
import Express from "./views/Express.js";
import Hi from "./views/Hi.js";
import Intro from "./views/Intro.js";
import JsDataType from "./views/JsDataType.js"
import JsFunctions from "./views/JsFunctions.js";
import RESTfulApi from "./views/RESTfulApi.js";



const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}


const router = async () => {
    const routes = [
        { path: "/", view: Hi },
        { path: "/intro", view: Intro },
        { path: "/jsdatatype", view: JsDataType },
        { path: "/jsfunctions", view: JsFunctions },
        { path: "/express", view: Express },
        { path: "/restful", view: RESTfulApi },
        { path: "/bonus", view: Bonus }
    ];   

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return{
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch);
    
    
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();
    

    // console.log(match.route.view())
    
};

window.addEventListener("popstate", router);


document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});