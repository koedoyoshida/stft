var script01 = function()
{
	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
		var url = tabs[0].url;
		var base_url = url.split("?")[0]
		//alert(url);
		chrome.tabs.create({'url': 'https://twitter.com/search?q=' + encodeURIComponent(base_url) + "%20OR%20" + encodeURIComponent(url) }, function(tab) {});
	});
};
 
(function()
{
    chrome.action.onClicked.addListener(script01);
})();
