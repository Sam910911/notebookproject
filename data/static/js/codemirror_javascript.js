function showcode(){
			var text = edit.getValue();
			var output = document.getElementById('text');
			output.innerHTML = text;
			console.log(text)
		}

window.onload = function(){

	var btns = document.getElementsByClassName('button');
	var string = edit.getSelection();



	for(var i=0; i<btns.length; i++){
		btns[i].onclick = function(){
			var a = this.getAttribute('value');
			var index = string.indexOf('<b>');
			console.log(index)
			// console.log(a)
		}
	}

	console.log(btns.length)

	// for (var i = 0; i < btns.length; i++) {
		
	// }

}

// window.onload = function(){
// 	document.getElementById('button').onclick = function(){
		
// 		var a = this.getAttribute('value');
// 		console.log(a);
// 		var string = edit.getSelection();
// 		switch(a){
// 			case 'bold':
// 				// edit.replaceSelection('<b>' + string + '</b>');
// 				console.log(a)
// 				break;

// 			case 'italic':
// 				// edit.replaceSelection('<i>' + string + '</i>');
// 				console.log(a)
// 				break;
// 		}
// 	}
// }


