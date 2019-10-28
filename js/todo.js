const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList"),
      alChecking = toDoForm.querySelector(".js-cheking");

const TODOS_LS = 'toDos';
let toDos = [];

function deleteToDo(event){
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo){
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  //JS 데이터를 local storage에 저장할 수 없으므로 JSON을 이용해서 String으로 변환
}

function paintToDo(text) {
  if(localStorage.saveAlram != null){
      const obj=JSON.parse(localStorage.saveAlram);
      const li = document.createElement("li");
      const delBtn = document.createElement("button");
      const revBtn = document.createElement("button");
      const alBtn = document.createElement("button");
      const toDoText = document.createElement("span");
      const week = document.createElement("week");
      const time = document.createElement("time");
      const newId = toDos.length + 1;
      const date = new Date();
      const minutes = date.getMinutes();
      const hours = date.getHours();
      const weekdata = new Array('일', '월', '화', '수', '목', '금', '토');
      delBtn.addEventListener("click", deleteToDo);
      revBtn.addEventListener("click", ReviseToDo);
      alBtn.addEventListener("click", alToDo);
      delBtn.classList.add('del-button'); 
      revBtn.classList.add('rev-button');
      alBtn.classList.add('bell-image');
      week.innerText = `${weekdata[date.getDay()] + '요일'}`;
      toDoText.innerText = text;
      time.innerText = `${hours < 10 ? `0${hours}` : hours}:${
          minutes < 10 ? `0${minutes}` : minutes}  `;
          li.appendChild(week);
          li.appendChild(time);
          li.appendChild(toDoText);
          li.appendChild(revBtn);
          li.appendChild(delBtn);
          li.appendChild(alBtn);
          toDoList.appendChild(li);
          li.id = newId;
          const toDoObj = {
              text: text,
              id: newId,
              obj:obj
          };
          toDos.push(toDoObj);
          saveToDos();
          localStorage.removeItem("saveAlram");
    }
  else{
        const li = document.createElement("li");
        const delBtn = document.createElement("button");
        const revBtn = document.createElement("button");
        const toDoText = document.createElement("span");
        const week = document.createElement("week");
        const time = document.createElement("time");
        const newId = toDos.length + 1;
        const date = new Date();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        const weekdata = new Array('일', '월', '화', '수', '목', '금', '토');

        delBtn.addEventListener("click", deleteToDo);
        revBtn.addEventListener("click", ReviseToDo);
        delBtn.classList.add('del-button'); 
        revBtn.classList.add('rev-button');
        week.innerText = `${weekdata[date.getDay()] + '요일'}`;
        toDoText.innerText = text;
        time.innerText = `${hours < 10 ? `0${hours}` : hours}:${
            minutes < 10 ? `0${minutes}` : minutes}  `;
            li.appendChild(week);
            li.appendChild(time);
            li.appendChild(toDoText);
            li.appendChild(revBtn);
            li.appendChild(delBtn);
            toDoList.appendChild(li);
            li.id = newId;
            const toDoObj = {
                text: text,
                id: newId,
            };
            toDos.push(toDoObj);
            saveToDos();
          }
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

/*function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null) {
    //JSON = JavaScript Objec Notation
    // 데이터를 전달할 때, 자바스크립트가 그걸 다룰 수 있도록 object로 바꿔주는 기능
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo){
      paintToDo(toDo.text);
    });
  }
}*/

function loadToDos(){
  const loadedToDos= localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null){
      const parsedToDos = JSON.parse(loadedToDos);
      parsedToDos.forEach(showToDO)
  }
}

//스토리지에 저장된 목록을 화면에 출력
function showToDO(toDo){
  if (toDo.obj !=null){
      loadPaint(toDo.text,toDo.obj);
  }else{
      paintToDo(toDo.text);
  }
}

//다시시작했을때 스토리지에 저장된 정보를 다시 입력시켜준다.
//만약 스토리지의 밸류에 obj파일이 저장되어있으면 실행되어짐.
function loadPaint(text,obj){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const revBtn = document.createElement("button");
    const alBtn = document.createElement("button");

    const toDoText = document.createElement("span");
    const week = document.createElement("week");
    const time = document.createElement("time");
    const newId = toDos.length + 1;
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const weekdata = new Array('일', '월', '화', '수', '목', '금', '토');
    delBtn.addEventListener("click", deleteToDo);
    revBtn.addEventListener("click", ReviseToDo);
    alBtn.addEventListener("click", alToDo);

    delBtn.classList.add('del-button'); 
    revBtn.classList.add('rev-button');
    alBtn.classList.add('bell-image');

    week.innerText = `${weekdata[date.getDay()] + '요일'}`;
    toDoText.innerText = text;
    time.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes}  `;
    li.appendChild(week);
    li.appendChild(time);
    li.appendChild(toDoText);
    li.appendChild(revBtn);
    li.appendChild(delBtn);
    li.appendChild(alBtn);

    toDoList.appendChild(li);
    li.id = newId;
    const toDoObj = {
    text: text,
    id: newId,
    obj:obj
    };
    toDos.push(toDoObj);
    saveToDos();
}

HTMLElement.prototype.hasClass = function(cls) {
  var i;
  var classes = this.className.split(" ");
  for(i = 0; i < classes.length; i++) {
      if(classes[i] == cls) {
          return true;
      }
  }
  return false;
};

// 클릭 이벤트
function todoClickEvent() {
  var match = document.querySelectorAll('ul'),
  result;
  for (var i = 0; i < match.length; i++) {
    result = match[i];
    result.addEventListener('click', function(event) {
      var ThisTarget = event.target;
      if(ThisTarget.classList.contains('checked')) {
        ThisTarget.classList.remove('checked');
      } else {
        ThisTarget.classList.add('checked');
        console.log(ThisTarget);
      }
    });
  }
}

// 수정 이벤트
function ReviseToDo(event){
  const btn = event.target;
  const li = btn.parentNode;
  var prompt = window.prompt("수정할 내용을 입력해주세요");
  const RevisToDo = toDos.filter(function(toDo){
    return toDo.id !== parseInt(li.id);
  });
  toDos = RevisToDo;
  if (prompt.length > 0) {
    const toDoObj = {
      text: prompt
  };
  toDos.push(toDoObj);
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  saveToDos();
  window.location.reload();
  } else {
    console.log(prompt);
  }
}

//알람이벤트
function alToDo(e){
  var target=e.target;
  const li = target.parentNode;
  const liId=li.id-1;
  var getData = JSON.parse(localStorage.toDos)
  var imgData = getData[liId].obj[0].year+"년"+getData[liId].obj[0].month +"월"+getData[liId].obj[0].day +"일"+getData[liId].obj[0].hour+"시"+getData[liId].obj[0].min+"분 에 예약되어 있습니다"
  if (target.value != undefined){
    alert(imgData);
  }
  
}






function init() {
  todoClickEvent();
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
