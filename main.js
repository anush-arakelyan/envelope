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
	var blablabla = {['name']: "Ani"},
		message =  'Hello!',
		age = 25,
	    user = 'John';
	alert(blablabla.lala === undefined);
	alert(blablabla.name === undefined);
	alert( message + age + user) ;
}
function age() {
	var age = prompt('How old are you ?');
	if (age) {
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
}
function years() {
	var age = prompt('years?', 18),
		message;
	if (age) {
		message = (age < 3) ? 'hello' : (age < 100) ? 'ooooo' : 'aaaaaaaa';
		alert( message);
	}
}
function netscape() {
	var company = prompt('What company do you work for?');
	if (company) {
		company == 'Instigate' ? alert('yes') : alert('no');
	}
}

function alertValue() {
	var sel = document.getElementById("multiselect");
	var val = sel.options[sel.selectedIndex].value;
	return val;
}

function selectedRegion() {
	var address, region;
	region = alertValue();
	address = {
		shen: "Հայաստան, 0026, Երևան Գարեգին Նժդեհի փող., 27 շենք Շենգավիթ վարչ. շրջան Երևանում)  • +374-10-440351",
		ar: "Հայաստան, 0014, Երևան Մամիկոնյանց փող., 1 շենք (Արաբկիր վարչ. շրջան Երևանում) • +374-10-282112 , +374-10-282629",
		nor: "Հայաստան, 0056, Երևա Նոր Նորքի 1-ին միկրոշրջան, Բորյան փող., 1 շենք (Նոր Նորք վարչ. շրջան Երևանում) • +374-10-642620 , +374-10-634120",
		av: "Հայաստան, 0060, Երևան Ավան, Իսահակյան թաղամաս, 2 շենք (Ավան վարչ. շրջան Երևանում) • +374-10-627907 • +374-10-627850",
		qa: "Հայաստան, 0014, Երևան Ահարոնյան փող., 3 շենք (Քանաքեռ-Զեյթուն վարչ. շրջան Երևանում) • +374-10-249465",
		ap: "Հայաստան, Արագածոտնի մարզ, Ապարան Գայի փող., 9 շենք (Ապարանի տարածաշրջան) • +374-252-23324",
		am: "Հայաստան, 0401, Արագածոտնի մարզ, Ծաղկահովիտ գյուղ Բժշկյան փող.(Արագածի տարածաշրջան) • +374-257-62458",
		ash: "Հայաստան, Արագածոտնի մարզ, Աշտարակ Տիգրան Մեծի փող., 46 շենք (Աշտարակի տարածաշրջան) • +374-232-32146",
		ta: "Հայաստան, Արագածոտնի մարզ, Թալին Գորկու փող., 14 շենք (Թալինի տարածաշրջան)• +374-249-22596",
	}
	document.getElementById("adress").innerHTML = address[region];
}
