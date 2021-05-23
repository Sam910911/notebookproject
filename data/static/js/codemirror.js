function showcode(){
	var text = edit.getValue();
	var output = document.getElementById('text')
	output.innerHTML = text;
	console.log(text);
}






	// var tagname = document.getElementsByTagName('a');
	// tagname[0].onclick = function(){
	// 	var string = edit.getSelection();
	// 	edit.replaceSelection('<b>' + string + '</b>'); 
 // 	}
// window.onload = function(){
// 	var id = document.getElementById('button');
// 	id.onclick = cases;
// 	function cases(){
// 		var value = document.getElementById(this).getAttribute('value');
// 		console.log(value)
// 	}
// }
window.onload = function(){
	document.getElementById('button').onclick = function(){
		
		var a = document.getElementById('button').getAttribute('value');
		switch(a){
			case 'bold':
				var string = edit.getSelection();
				edit.replaceSelection('<b>' + string + '</b>');

			// case 'italic':
		}
	}
}


