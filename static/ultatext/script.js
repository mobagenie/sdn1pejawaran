var inputTxt=document.querySelector("#input");
var outputTxt=document.querySelector("#output");

inputTxt.onkeyup=function(){
outputTxt.value=transformString(inputTxt.value);
}

function transformString(input){
	input = input.toLowerCase();
	var output = "";
	for (var i = input.length - 1; i >= 0; --i){
		output += replaceCharacter(input.charAt(i));
	}
	return output;
}

function replaceCharacter(c){
	switch(c){
		case 'a':	return '\u0250';
		case 'b':	return 'q';
		case 'c':	return '\u0254';
		case 'd':	return 'p';
		case 'e':	return '\u01DD';
		case 'f':	return '\u025F';
		case 'g':	return 'b';
		case 'h':	return '\u0265';
		case 'i':	return '\u0131';
		case 'j':	return '\u0638';
		case 'k':	return '\u029E';
		case 'l':	return '\u05DF';
		case 'm':	return '\u026F';
		case 'n':	return 'u';
		case 'o':	return 'o';
		case 'p':	return 'd';
		case 'q':	return 'b';
		case 'r':	return '\u0279';
		case 's':	return 's';
		case 't':	return '\u0287';
		case 'u':	return 'n';
		case 'v':	return '\u028C';
		case 'w':	return '\u028D';
		case 'x':	return 'x';
		case 'y':	return '\u028E';
		case 'z':	return 'z';
		case '[':	return ']';
		case ']':	return '[';
		case '(':	return ')';
		case ')':	return '(';
		case '{':	return '}';
		case '}':	return '{';
		case '?':	return '\u00BF';
		case '!':	return '\u00A1';
		case ',':	return "\'";
		case '.':	return '\u02D9';
		case '_':	return '\u203E';
		case ';':	return '\u061B';
		case '9':	return '6';
		case '6':	return '9';
		case "\'":	return ',';
		case '\u00BF': return '?';
		default: return c;
	}
}

outputTxt.onclick = function() {
    this.parentElement.dataset.balloon = "Copied!";
};

outputTxt.onmouseout = function () {
    this.parentElement.dataset.balloon = "Click To Copy.";
};