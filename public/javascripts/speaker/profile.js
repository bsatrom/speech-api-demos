(function($, undefined) {
	var langs = ['JavaScript', 'Lua', 'Erlang', 'C#', 'Ruby', 'Java', 'PHP', 'Visual Basic', 'Pascal'];

	$('#bio').kendoEditor();
	$('#birthday').kendoDatePicker();
	$('#preferredSessionTime').kendoTimePicker();
	$('#languages').kendoComboBox({
		dataSource: langs
	});

	
}(jQuery));