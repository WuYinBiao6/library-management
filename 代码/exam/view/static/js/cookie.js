function setCookie(key, val, time) {
    var date = new Date();
    var expiresDays = time ? time : 7;
    date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000);
    document.cookie = key + "=" + escape(val) + ";expires=" + date.toGMTString() + ";path=/";
}

/**

 * @param key
 * @returns {string}
 */
function getCookie(key) {
    var getCookie = document.cookie.replace(/[ ]/g, "");
    var arrCookie = getCookie.split(";")
    var tips;
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if (key == arr[0]) {
            tips = arr[1];
            break;
        }
    }
    return tips;
}

/**

 * @param key
 */
function delCookie(key){
    var date = new Date();
    date.setTime(date.getTime() - 10000);
    document.cookie = key + "=v; expires =" + date.toGMTString() + ";path=/";
    // document.cookie = key + "=v; expires =" + date.toGMTString() + ";path=/;domain=.xunjiecad.com";
}
