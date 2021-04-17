var script01 = function()
{
	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
		var url = tabs[0].url;
		//alert(url);
		window.open('https://twitter.com/search?q=' + encodeURIComponent(url) + '');
	});
};
 
(function()
{
    chrome.browserAction.onClicked.addListener(script01);
})();
