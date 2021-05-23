function init(){
	document.getElementById('#username').addEventListener('input',function(){
		this.value = this.value.replace(/[^\x00-\x7F]+/ig, '');
	})
}

