//your JS code here. If required.
function mapLetters(str) {
	//return
	let obj = {};
	for (let i = 0; i < str.length; i++) {
		let t = str[i];
		if(obj[t] == undefined){
			obj[t] = [i];
		}else{
			obj[t].push(i);
		}
	}
	return obj;
}
const str = prompt("Enter str: ");
alert(JSON.stringify(mapLetters(str)));