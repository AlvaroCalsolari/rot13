function rot13Cipher(string) {
	string = string.split('');

	string = string.map(function (element) {
		return rot13(element);
	});
	string = string.join('');
	return string;
}

function rot13(char) {
	let isLowerCase = char.charCodeAt() >= 97 && char.charCodeAt() <= 122;
	let isUpperCase = char.charCodeAt() >= 65 && char.charCodeAt() <= 90;
	
	if (isUpperCase) {
		return String.fromCharCode((((char.charCodeAt() % 65) + 13) % 26) + 65);
	} else if (isLowerCase) {
		return String.fromCharCode((((char.charCodeAt() % 97) + 13) % 26) + 97);
	}
	return char;
}

$(document).ready(function () {
	$('#decrypted').on("input", function () {
		let text = $('#decrypted').val();
		let cipher = rot13Cipher(text);
		$('#encrypted').text(cipher);
	});
});