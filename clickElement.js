document.getElementById("instructions").onclick = function() {
	var myUL = document.getElementById("myUL");
	if (myUL.style.display === "block" || myUL.style.display === "") {
		myUL.style.display = "none";
		console.log("hidden");
	} else {
		myUL.style.display = "block";
		console.log("visible");
	}
};
