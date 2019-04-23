document.addEventListener('DOMContentLoaded', function () {
    var open = document.getElementById('open');
        var save = document.getElementById('save');
            var download = document.getElementById('download');


    // onClick's logic below:
    open.addEventListener('click', function () {
        chrome.tabs.executeScript({
            file: 'open.js'
    });});
    
     save.addEventListener('click', function () {
        chrome.tabs.executeScript({
            file: 'save.js'
    });});
    
    download.addEventListener('click', function () {
        chrome.tabs.executeScript({
            file: 'download.js'
    });});
    
    
});
