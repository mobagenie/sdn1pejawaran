var baseURL = "http://localhost:1313/livecounts/";
if (typeof isEmbed == 'undefined') isEmbed = 0;
if (typeof isCustomPage == 'undefined') isCustomPage = 0;
if (window.location.hostname.indexOf("local.localhost:1313") < 0) {
    if (window.location.protocol != "https:") window.location.replace("http:" + window.location.href.substring(window.location.protocol.length));
    if (location.hostname.indexOf("localhost:1313") == -1) window.location.replace(baseURL + location.hash);
    if ((window.top !== window.self) && isEmbed == 0) window.top.location.replace(window.self.location.href);
    if ((window.top == window.self) && isEmbed) window.top.location.replace(baseURL + location.hash);
}
Array.prototype.shuffle = function () {
    var i = this.length,
        j, temp;
    if (i == 0) return this;
    while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
}
var YT = {};