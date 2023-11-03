class ChatList{
	static list = [];
	static add(imgurl, nickname, lastmessage, userid){
		let object = {
			"url": imgurl,
			"nickname": nickname,
			"last": lastmessage,
			"userid": userid
		};
	this.list.push(object);
	}
	static remove(id){
		this.list.splice(id, 1);
	}
	static getmark(){
		let i = 0;
		let obj;
		let elem;
		let elems;
		while (i < this.list.length){
			obj = this.list[i];
			elem = `<div id='chatf${i}' class='chatelem'>
				<img src='${obj.url}'>
				<div>${obj.nickname}</div>
				<span>${obj.last}</span>
			</div>`;
			elems = elems + elem;
			i += 1;


		}
		return elems;
	}
	static reload(){
		let mark = this.getmark();
		document.getElementById('chats').innerHTML = mark;
	}

};
