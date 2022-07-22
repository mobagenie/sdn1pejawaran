	$.fn.GetParamURL = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null) {
       return null;
    }
    return decodeURI(results[1]) || 0;
}

// var Week  = $().GetParamURL('Week');
// var MatchNo  = $().GetParamURL('MatchNo');
// var Round  = $().GetParamURL('Round');
// var MatchDate  = $().GetParamURL('MatchDate');
// var Time  = $().GetParamURL('Time');
// var BattlefyEmbed  = $().GetParamURL('BattlefyEmbed');