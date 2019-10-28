const calMake = document.querySelector(".cal"),
    makeEvent=document.querySelector(".js-day"),
    getinfo=document.querySelector(".js-calendar"),
    makeAl="saveAlram";
let pushAlram=[];

//locatStorage에 객체로 넣기위해 객체를 생성후 saveAlram이란 
//이름으로 localStorage에 저장한다.

function testShow(e){
    var target=e.target,
        alYear=cYear,
        alMonth=cMonth,
        alDay=parseInt(target.value);
        alHour=parseInt(insertHour.selectedIndex),
        alMin=parseInt(insertMin.selectedIndex);
    if (target.value != undefined){
        //console.log(alYear,alMonth,alDay,alHour,alMin);
        //toDos[i].text = localStorage의 key = i 의 text를 받아온다
        //toDos[i-1].text toDos의 마지막 값을 가져온다
        const setAlram = {
            year:alYear,
            month:alMonth,
            day:alDay,
            hour:alHour,
            min:alMin
    };
    pushAlram.push(setAlram);
    saveAlram();
    //알람
}
}

//알람 예약시 localStorage 에 집어넣는다.
function saveAlram(){
    localStorage.setItem(makeAl,JSON.stringify(pushAlram));
    pushAlram.length = 0;
}


//클릭이벤트
function ClickEvent(event){
    makeEvent.addEventListener("click",testShow);
}

function init(){
    ClickEvent();
}
init();