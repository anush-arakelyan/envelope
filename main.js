function clickButton() {
	alert('uraaaaaaaaaa');
}

function myFunction() {
	var str = "tparan";
	alert(str.length);
	str = str[2] + str[3] + str[4];
	alert(str.toUpperCase());
}

function upercase() {
	/*var str = "were4r esresr ere ido";
	alert(str.indexOf("ido"))*/;
	var blablabla = {['name']: "Ani"};
	alert(blablabla.lala === undefined);
	alert(blablabla.name === undefined);
	var message =  'Hello!', age = 25; user = 'John';
	alert( message + age + user) ;
}
function age() {
	var age = prompt('How old are you ?');
	if (age < 0 || age > 111) {
		alert('You enter the wrong age');
	} else if (age <= 6) {
		alert('Hello my little friend');
	} else if (age <= 18) {
		alert('Hello my young friend');
	} else if (age > 18) {
		alert('Hello my friend');
	}
}
function years() {
	var age = prompt('years?', 18);
	var message = (age < 3) ? 'hello' : (age < 100) ? 'ooooo' : 'aaaaaaaa';
	alert( message);
}
function netscape() {
	var company = prompt('What company do you work for?');
	company == 'Instigate' ? alert('yes') : alert('no');
}
