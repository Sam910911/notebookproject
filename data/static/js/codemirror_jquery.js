$(function(){

	$('span[class="button"]').click(function(){

		var value = $(this).attr('value');
		var string = edit.getSelection();
		// var count = string.indexOf('<b>');

		switch(value){

			case 'bold':
				if(string.indexOf('<b>') > -1){
					edit.replaceSelection(string.replace('<b>','').replace('</b>',''))
				}
				else{
					edit.replaceSelection('<b>' + string + '</b>');
				}
			break;

			case 'italic':
				edit.replaceSelection('<i>' + string + '</i>');	
			break;

			case 'h1':
				edit.replaceSelection('<h1>' + string + '</h1>');
			break;

			case 'h2':
				edit.replaceSelection('<h2>' + string + '</h2>');
			break;

			case 'p':
				edit.replaceSelection('<p>' + string + '</p>');
			break;
			
			case 'blockquote':
				edit.replaceSelection('<blockquote>' + string + '</blockquote>');
			break;

		}

		// if(value == 'bold'){
		// 	edit.replaceSelection('<b>' + string + '</b>');
		// }
		// console.log(value)

	})


})