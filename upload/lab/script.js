function changeInputImage() {
	var el = document.getElementById("fileInput");
	var img = document.getElementById("imagePreview");
	img.src = window.URL.createObjectURL(el.files[0]);
}

function sendInput() {
	var name = document.getElementById("nameInput");
	var el = document.getElementById("fileInput");
	alert(
		`This doesn't actually send it to a server since it doesn't exist,
Though might as well display something for formalities.

Name: ${name.value}
Image path: ${el.value}
		`,
	);
}
