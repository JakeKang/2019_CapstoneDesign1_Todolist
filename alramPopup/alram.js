const Exit=document.querySelector(".Js-Exit"),
      cInput1=document.querySelector(".js-cInput1"),
      cInput2=document.querySelector(".js-cInput2");
function eixt(){
    close();
}

function showAlram(){
    var getInfo = JSON.parse(localStorage.toDos);
    getInfo.forEach(Inalram);
}

function Inalram(toDoObj){
    var today=new Date(),
    dd = today.getDate(),
    mm =today.getMonth()+1,
    yyyy=today.getFullYear(),
    hh=today.getHours(),
    min=today.getMinutes();   
    const alramData =toDoObj.obj
//
    if (alramData!=null ){
        if(alramData[0].year==yyyy&alramData[0].month==mm&alramData[0].day==dd&alramData[0].hour==hh&alramData[0].min==min){
        cInput1.innerHTML=alramData[0].year+"년"+alramData[0].month+"월"+alramData[0].day+"일"+alramData[0].hour+"시"+alramData[0].min+"분"
        cInput2.innerHTML="예약하신 "+toDoObj.text+"이(가) 시작 5분전 입니다"
    }
}
}

function init(event){
    showAlram();
    Exit.addEventListener("click",eixt);
};
init();
