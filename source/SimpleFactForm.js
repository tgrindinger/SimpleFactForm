$(document).ready(function () {
	$("#submit").click(onSubmit);
	$("#reset").click(onReset);
});

function onSubmit() {
	var name = $("#name").val();
	var fact = $("#fact").val();
	process(name, fact);
}

function onReset() {
	$("#name").val("");
	$("#fact").val("");
	$("#questions").slideDown("slow");
	$("#intro").slideUp("slow");
}

function display(name, fact) {
	$("#introName").text(name);
	$("#introFact").text(fact);
	$("#questions").slideUp("slow");
	$("#intro").slideDown("slow");
}

function process(name, fact, success) {
	if (name.length > 0 && fact.length > 0) {
		console.log("name: '" + name + "', fact: '" + fact + "'");
		display(name, fact);
	} else if (name.length === 0) {
		alert("Please enter a valid name!");
	} else if (fact.length === 0) {
		alert("Please enter a valid fact!");
	}
}
