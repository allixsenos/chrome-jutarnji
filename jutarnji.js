var r = /banner=true&foto=(\d+)/i; // banner matching regex
var url = document.location.href; // current url
var matches = url.match(r); // contains current page
if (matches && matches[1]) {
    var page = parseInt(matches[1]); // current page
    var r2 = /foto=(\d+)/i; // matches referer page
    var referrer = document.referrer; // referer url
    var r2matches = referrer.match(r2); // contains referring page

    // handle browsing in both directions
    var nextpage = (r2matches && r2matches[1] && (parseInt(r2matches[1]) > page)) ? page : page+1;
    
    location.href = url.replace(r, 'foto='+nextpage);
}
