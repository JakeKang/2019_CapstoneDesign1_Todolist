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

//{&alramData[0].hour==hh&alramData[0].min==min)
    if (alramData!=null ){
        if(alramData[0].year==yyyy&alramData[0].month==mm&alramData[0].day==dd&alramData[0].hour==hh&alramData[0].min==min){
        window.open("POPUP.html","alram", "width=300,height=100,history=no,resizable=no,status=no,scrollbars=yes,menubar=no");
    }
}
}

function init(){
    showAlram();
    setInterval(showAlram,10000);
}
init()