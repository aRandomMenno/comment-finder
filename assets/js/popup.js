
async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await browser.tabs.query(queryOptions);
    return tab;
}

let noHTMLComments = document.getElementById('noHTMLcomments');
let HTMLcommentsElement = document.getElementById('HTMLcomments');

let noCSSComments = document.getElementById('noCSScomments');
let CSScommentsElement = document.getElementById('CSScomments');

let noJSComments = document.getElementById('noJScomments');
let JScommentsElement = document.getElementById('JScomments');

(async () => {
    let tab = await getCurrentTab();
    let comments = await browser.tabs.sendMessage(tab.id, { action: "get" });
    if (!comments) comments = [];

    noHTMLComments.hidden = comments.length > 0;
    HTMLcommentsElement.innerHTML = "";

    for (let comment of comments) {
        let li = document.createElement('li');
        li.innerText = comment;
        commentsElement.appendChild(li);
    }
})();
