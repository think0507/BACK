temp = location.href.split("?")
UserName = unescape(temp[1]);
let apikey="RGAPI-1464151f-a2af-4f0b-af69-906847b51c90"
 $.ajax({
     type: 'GET',
     url: 'https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+UserName+'?api_key='+apikey,
    success: function (abc) {
        alert(abc.summonerLevel)
         }
 })