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
