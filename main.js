if (window.showAds) {
    //Your user has no adblocker, good for them
    document.getElementById('status').innerHTML = 'no adblocker detected.'
} else {
    //your user uses adblocker, do something about it
    document.getElementById('status').innerHTML = 'you have adblocker'
}