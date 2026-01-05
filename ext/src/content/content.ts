import {
    extractData,
} from '../modules/extract';

window.addEventListener("load", extract, false);

function extract() {
    let d = extractData();
    chrome.runtime.sendMessage({data:  d}, resp => {
    });
}

// Get message from background page
// TODO check sender
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(!request) {
        return;
    }
    if(request.error) {
        alert(request.error);
        return;
    }
    if(request.action == "reindex") {
        extract();
        sendResponse({"action": "reindex", "status": "ok"});
		return;
    }
    console.log("message received", request)
});
