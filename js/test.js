function generateRandomString(len) {
        chrs = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789';
        var str = '';
        for (var i = 0; i < len; i++) {
            var pos = Math.floor(Math.random() * chrs.length);
            str += chrs.substring(pos,pos+1);
        }
        return str;
    }
function abeme(){
let i = 0;
while (i < 21){
	ChatList.add('img/av.jpg',generateRandomString(10), generateRandomString(10), 'userid');
	i += 1;
}
ChatList.reload();
}

