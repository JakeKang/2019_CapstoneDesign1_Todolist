const insertHour=document.querySelector(".js-hour"),
      insertMin=document.querySelector(".js-min");


function intHour(){
    for (i=1 ; i <=23; i++){
        var option = document.createElement("option");
        if (i<10){
            option.text = `0${i.toString()}`;
        }else{
            option.text = i.toString();
        }
        insertHour.add(option);
    }
}

function intMin(){
    for (i=1 ; i <=60; i++){
        var option = document.createElement("option");
        if (i<10){
            option.text = `0${i.toString()}`;
        }else{
            option.text = i.toString();
        }
        insertMin.add(option);
    }
}


function init(){
    intHour();
    intMin();
}
init();