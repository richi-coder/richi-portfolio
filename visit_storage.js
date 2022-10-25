/* Setting the value (3) */
/*
async function setDate(namespace,id) {
    const visitDate = Date.now().toString();
    const urlSet = "https://api.countapi.xyz/set/" + namespace + "/" + id + "?value=" + visitDate;
    const data = await fetch(urlSet); // Setting the value (key) to the page loading date
    const json = await data.json();
    const { value: date } = json;
    console.log("THIRD: Date saved", new Date(date));
    return urlSet;
}
*/ // not using this part. Instead of fetching for setting the value(date), I can use data.created in the /info/ endpoint
//https://api.countapi.xyz/set/dassssshboard/visitttt?value


/* Creating the URL for dates, like visit88 = the date    (2) */
/*
async function createDate(urlCreate,namespace,visits) {
    
}
*/
/* Consult how many visits the page has for later creating a key like visit88 in which 88 is the visits */

async function storage(namespace, visits) {
        const url = "https://api.countapi.xyz/create?namespace=" + namespace + "&key=visit_" + visits; // without enable reset
        const id = "visit_" + visits;
        const data = await fetch(url); // Creating the actual storage
        const json = await data.json();
        //setDate(namespace,id);
        //createDate(url,namespace,visits);    
}

export { storage };
