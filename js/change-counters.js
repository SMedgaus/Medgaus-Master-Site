setTimeout(function() {
	if (document.getElementsByTagName("center").length > 0) {
		var countersTable = $('center > table').detach();
		// $('#counters-holder').replaceWith(countersTable);
		$('br').slice(-3).remove();
		$('hr').last().remove();
	}
}, 1000);