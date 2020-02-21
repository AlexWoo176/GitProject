function convert() {
    let amount=parseInt(document.getElementById("amount").value);
    let from=document.getElementById("from").value;
    let to=document.getElementById("to").value;
    let fromvalue;
    let tovalue;
    if(from=='Vietnam'){
        fromvalue=1;}
    else if (from=='USD'){
        fromvalue=23160;}
    else if (from=='GBP'){
        fromvalue=29483;}
    else if (from=='EUR'){
        fromvalue=24780;}
    else {fromvalue=17242;}

    if(to=='Vietnam'){
        tovalue=1;}
    else if (to=='USD'){
        parseInt(tovalue=23160);}
    else if (to=='GBP'){
        tovalue=29483;}
    else if (to=='EUR'){
        tovalue=24780;}
    else {tovalue=17242;}

    let ketqua=Math.round(parseInt(amount*fromvalue/tovalue));

    document.getElementById("result").innerHTML = ketqua;
    document.getElementById("result-country").innerHTML = to;
}