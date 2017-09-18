/*! The background javascript for the extension
// here we use onClicked which will NOT work simultaneously with a default_popup in manifest.
// Fix conflicts and add if else logic to determine whether user is logged in (Check elements)
// If logged in > automatically open/close window in background and get student schedule info
// If not logged in > change to activetab/redirect to page and prompt user login, then get schedule info
*/
chrome.browserAction.onClicked.addListener(function( tab) {
    // once clicked, open window
    var myWindow = window.open("https://mybackpack.punahou.edu/SeniorApps/studentParent/schedule.faces", "_blank", "width=500,height=400");
    // check if user is logged in or not
    var elem = document.getElementById("form");
    // if user is not logged in, leave window open
    if (elem !== "undefined") {
        continue;
    }
    // if user is logged in, close window
    else {
        n = 1;
        while(n == 1){
            if (document.readyState === "complete") {
                myWindow.close();
                n = 0;
            }
            else {
                continue;
            }
        }
    }
});