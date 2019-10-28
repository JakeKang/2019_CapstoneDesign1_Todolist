const cal = document.querySelector(".js-Calendar"),
    calYear=document.querySelector(".js-year"),
    calDay=document.querySelector(".js-day");

    //table 기본 만들기    
var today=new Date(),
    cMonth=today.getMonth()+1,
    cYear=today.getFullYear(),
    days=["일","월","화","수","목","금","토"],
    monthDay=[31,29,31,30,31,30,31,31,30,31,30,31];

//윤년체크
function MonthDays(){
    if ((cYear%4==0 && cYear%100 !==0)||cYear%400==0 ){
        monthDay[1]=28
    }    
}
//달이동하기 함수
function caption(event){
    var beforeMonth=document.createElement("button");
    var afterMonth=document.createElement("button");
    var getMonYear="  "+cYear + "." + cMonth+"  ";
    var span = document.createElement("span");
    beforeMonth.innerText="<";
    beforeMonth.addEventListener("click",backMonth);
    afterMonth.innerText=">";
    afterMonth.addEventListener("click",afMonth);
    span.append(beforeMonth);
    span.append(getMonYear);
    span.append(afterMonth);
    beforeMonth.className="moveButton";
    afterMonth.className="moveButton";
    calYear.append(span);
    makeCells();   
    insertDay();
}

//caption 월 초기화
function removeItem (){
    var remove = document.querySelector(".js-year");
    remove.innerHTML="";
}
//저번달로가기
function backMonth(){
    cMonth -=1
    if (cMonth<=0){
        cYear-=1
        cMonth=12
    }
    clearCells();
    removeItem();
    caption();
}
//다음달로가기
function afMonth(){
    cMonth+=1
    if (cMonth>12){
        cYear+=1
        cMonth=1
    }
    clearCells();
    removeItem();
    caption()
}
//셀 만들기
function makeCells(){
    var stDay = new Date(`${cYear}/${cMonth}/1`);
    var stDayNum = stDay.getDay();
    var foOrFi = Math.ceil((stDayNum+monthDay[cMonth-1])/7);
    MonthDays(); 
    for (i=0;i<foOrFi;i++){
        calDay.insertRow(i);
        for (j=0;j<7;j++){
        calDay.rows[i].insertCell(j);
        }
    }
}
//셀에 값넣기
function insertDay(){
    let startDay = new Date(`${cYear}/${cMonth}/1`);
    let startDayNum = startDay.getDay()
    let dayNum=1
    for (i=0;i<=5;i++){
        for(i==0?j=startDayNum:j=0;j<7;j++){
            if (dayNum<=monthDay[cMonth-1]){
                var year=document.createElement("button");
                year.innerText=dayNum;
                year.value=dayNum;
                year.className="CalButton";
                calDay.rows[i].cells[j].append(year);
                dayNum+=1
            }
        }          
    }
}

//셀 초기화하기
function clearCells(){
    /*for (i=0;i<=foOrFi;i++){
        for (j=0;j<7;j++){
            calDay.rows[i].cells[j].innerText=""        
        }          
    }*/
    var getLength=calDay.rows.length
    for(i=0;i<=getLength-1;i++){
        calDay.deleteRow(0)    
    }
}

function cals(){
    caption();
}

function init(){
    cals();
}
init();