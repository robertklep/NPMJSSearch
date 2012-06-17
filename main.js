(function() {
	var match = location.search.match(/q=([^&]+)/);
	if (match)
	{
		// remove query from url
		window.history.pushState({}, "", "/");

		// get query
		var query = decodeURIComponent(match[1].replace(/\+/g, ' '));

		// set query as search input
		var input = document.getElementById('search-input');
		input.value = query;

		// send change event
		var evt = document.createEvent("HTMLEvents");
    evt.initEvent('change', true, true ); // event type,bubbling,cancelable
		input.dispatchEvent(evt);
	}
})();
