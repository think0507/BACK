let UserName;

function enterkey() {
    if (window.event.keyCode == 13) {
        UserName = document.getElementsByClassName("summoner-search-text")[0].value;
        location.href = "search.html?" + escape(UserName);
    }
}

document.getElementsByClassName("summoner-search-button")[0].onclick = function(){
    UserName = document.getElementsByClassName("summoner-search-text")[0].value;
    location.href = "search.html?" + escape(UserName);
}