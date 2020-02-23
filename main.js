if (window.showAds) {
    //Your user has no adblocker, good for them
    document.getElementById('status').innerHTML = 'you are a honest young man.'
} else {
    //your user uses adblocker, do something about it
    document.getElementById('status').innerHTML = 'you are a dishonest little internet troll!!'
}