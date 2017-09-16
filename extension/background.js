/*! The background javascript for the extension
// here we use onClicked which will NOT work simultaneously with a default_popup in manifest.
// Fix conflicts and add if else logic to determine whether user is logged in (Check elements)
// If logged in > automatically open/close window in background and get student schedule info
// If not logged in > change to activetab/redirect to page and prompt user login, then get schedule info
*/
chrome.browserAction.onClicked.addListener(function(tabs.Tab tab) {
    chrome.windows.create({ 
        url: "https://mybackpack.punahou.edu/SeniorApps/studentParent/schedule.faces?selectedMenuId=true",
        width:  430,
        height: 150,
        top:    top_popup,
        left:   left_popup,
        active: false
    }, function(win) {
        chrome.windows.update(tab.windowId, { focused: true });
    });
});