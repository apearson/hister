

function getURL() {
	return window.location.href.replace(window.location.hash, "");
}

function extractData() {
    let d = {
        "text": document.body.innerText,
        "title": document.querySelector("title").innerText,
        "url": getURL(),
        "html": document.documentElement.innerHTML,
    };
	let fu = new URL("/favicon.ico", d.url).href;
	let link = document.querySelector("link[rel~='icon']");
	if (link && link.getAttribute("href")) {
        fu = new URL(link.getAttribute("href"), d.url).href;
	}
    d['faviconURL'] = fu;
    return d;
}

export {
    extractData,
}
