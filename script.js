var script01 = function()
{
	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
		var url = tabs[0].url;
		//alert(url);
		chrome.tabs.create({'url': 'https://twitter.com/search?q=' + encodeURIComponent(url) + ''}, function(tab) {});
t(url) + '');
	});
};
 
(function()
{
    chrome.action.onClicked.addListener(script01);
})();
