function rot(string, rotValue) {
	let array;
	array = string.split('');
	rotValue = Number(rotValue);
	array = array.map(function (element) {
		if (element.charCodeAt() >= 65 && element.charCodeAt() <= 90) {
			return String.fromCharCode((((element.charCodeAt() % 65) + rotValue) % 26) + 65);
		} else if (element.charCodeAt() >= 97 && element.charCodeAt() <= 122) {
			return String.fromCharCode((((element.charCodeAt() % 97) + rotValue) % 26) + 97);
		}
		return element;
	});
	string = array.join('');
	return string;
}

$(document).ready(function () {
	var reset = function () {
		$('#decrypted').val('');
		$('#encrypted').val('');
	};

	$('#decrypted').on("focus", reset);
	$('#encrypted').on("focus", reset);
	$('#decrypted').on("input", function () {
		// Code goes here
		let text = $('#decrypted').val();
		let rotNum = $('#rot-value').val();
		let rotText = rot(text, rotNum);
		$('#encrypted').val(rotText);
	});

	$('#encrypted').on("input", function () {
		// Code goes here
		let text = $('#encrypted').val();
		let rotNum = $('#rot-value').val();
		let rotText = rot(text, rotNum);
		$('#decrypted').val(rotText);
	});
});