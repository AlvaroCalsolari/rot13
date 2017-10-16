function generateRotCipher(string, rotValue) {
	string = string.split('');
	rotValue = Number(rotValue);

	string = string.map(function (element) {
		return rot13(element, rotValue);
	});
	string = string.join('');
	return string;
}

function rot13(char, rotateValue) {
	if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
		return String.fromCharCode((((char.charCodeAt() % 65) + rotateValue) % 26) + 65);
	} else if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
		return String.fromCharCode((((char.charCodeAt() % 97) + rotateValue) % 26) + 97);
	}
	return char;
}

$(document).ready(function () {

	$('#decrypted').on("input", function () {
		// Code goes here
		let text = $('#decrypted').val();
		let rotValue = $('#rot-value').val();
		let cipher = generateRotCipher(text, rotValue);
		$('#encrypted p').text(cipher);
	});

	$('#switch').on("click", function () {
		// code goes here
	})
});