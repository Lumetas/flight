function changeTheme(obj){
	keys = Object.keys(obj);
	let i = 0;
	while (i < keys.length){
		document.querySelector('body').style.setProperty(keys[i], obj[keys[i]]);
		i += 1;
	}
}







//Стандартная тема:
let lighttheme = {
    "--bg-main-color":"#D9D9D9",
	"--bg-2-color":"#EEE",
	"--bg-3-color":"#FFF",
	"--fg-main-color":"#000",
	"--fg-2-color":"rgba(0, 0, 0, 0.50)",
	"--scrollbar-1":"grey",
	"--scrollbar-2":"#00000000",
	"--list-of-chats-width":"30vh"
}




//Предложенная мной тёмная тема:
let darktheme = {
    "--bg-main-color":"#1c1c1c",
	"--bg-2-color":"#2e2e2e",
	"--bg-3-color":"#454444",
	"--fg-main-color":"#fff",
	"--fg-2-color":"lightgrey",
	"--scrollbar-1":"grey",
	"--scrollbar-2":"#00000000",
	"--list-of-chats-width":"30vh"
}


