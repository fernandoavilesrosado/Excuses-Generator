/*function Excuse() {

    /*var who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    var action = ['ate', 'peed', 'crushed', 'broke'];
    var what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

    var who = who[Math.round(Math.random() * (who.length - 1))];
    var action = action[Math.round(Math.random() * (action.length - 1))];
    var what = what[Math.round(Math.random() * (what.length - 1))];
    var when = when[Math.round(Math.random() * (when.length - 1))];

    document.getElementById('excuses').innerHTML = '<div>My ' + who + ' ' + did + '<br> my ' + what + '.</div>'
}*/

function Excuse() {
	
	var quien = ['The dog', 'My grandma', 'His turtle', 'My bird'];
	var accion = ['ate', 'peed', 'crushed', 'broke'];
    var que = ['my homework', 'the keys', 'the car'];
    var cuando = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];
	
	var who = quien[Math.round(Math.random()*(quien.length-1))];
	var did = accion[Math.round(Math.random()*(accion.length-1))];
    var what = que[Math.round(Math.random()*(que.length-1))];
    var when = cuando[Math.round(Math.random()*(cuando.length-1))];
	
	document.getElementById('excuses').innerHTML =  who + ' ' + did + ' ' + what + ' '+when
	
}
