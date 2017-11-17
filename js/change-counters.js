$( document ).ready(function() {
	if ($('center').length > 0) {
		var countersTable = $('center > table').hide();
		$('br').slice(-3).remove();
		$('hr').last().remove();
	}
});