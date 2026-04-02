const statusText = document.getElementById("status");
const explainText = document.getElementById("explain-text");

updateInfo(
  "🟢 Idle",
  "Click Run Code to start visualization"
);
let taskId = 0;
let isRunning = false;
let queue=[];
let completed = 0;

function updateCompleted() {
  completed++;
  document.getElementById("done-count").innerText = completed;
}

function updateQueueCount() {
  document.getElementById("queue-count").innerText = queue.length;
}


function runExample(){
  if(queue.length==0||isRunning){
     queue.push(true);
updateQueueCount();}
     if(isRunning){
      return;
     }
     
    isRunning = true;
    console.log("button clicked");
    const callstack = document.getElementById("callstack");
    const WebAPIs = document.getElementById("WebAPIs");
      const callbackQueue = document.getElementById("callbackQueue");
      
    const task = document.createElement("div");
     taskId++;
task.innerText = "Task " + taskId;
task.classList.add("task");

     callstack.appendChild(task);
statusText.innerText = "Running in Call Stack";
updateInfo(
  "🟢 Running in Call Stack",
  "Function enters Call Stack and starts executing immediately."
);
callstack.classList.add("highlight");
WebAPIs.classList.remove("highlight");
callbackQueue.classList.remove("highlight");

     setTimeout(function(){
      callstack.removeChild(task);
WebAPIs.appendChild(task);
statusText.innerText = "Waiting in Web APIs";
updateInfo(
  "🟡 In Web APIs",
  "Async operation moves to Web APIs, freeing the Call Stack."
);
callstack.classList.remove("highlight");
WebAPIs.classList.add("highlight");
callbackQueue.classList.remove("highlight");},1000
     );
     setTimeout(function(){
       WebAPIs.removeChild(task);
callbackQueue.appendChild(task);
statusText.innerText = "In Callback Queue";
updateInfo(
  "🔵 In Callback Queue",
  "Task is done and waiting in queue until Call Stack is empty."
);
callstack.classList.remove("highlight");
callbackQueue.classList.add("highlight");
WebAPIs.classList.remove("highlight");
},2000
     );

      setTimeout(function(){
  callbackQueue.removeChild(task);
  callstack.appendChild(task);
  statusText.innerText = "Executing Task";
  updateInfo(
  "🟣 Executing Again",
  "Event Loop pushes task back to Call Stack for execution."
);
  
  callstack.classList.add("highlight");
WebAPIs.classList.remove("highlight");
callbackQueue.classList.remove("highlight");
},3000);

setTimeout(function(){
callstack.removeChild(task); 
statusText.innerText = "Status : Idle";
updateInfo(
  "🟢 Idle",
  "Task Executed"
);
callstack.classList.remove("highlight");
updateCompleted();
  queue.shift();
  updateQueueCount();
if(queue.length>0){
    isRunning = false;          // ✅ reset BEFORE recursive call
    runExample();
  }else{
    isRunning = false;
  }
  
},4000);
}
     
function processQueue(){
 
if(isRunning) {
  return;}
  if(queue.length === 0){
    isRunning=false;
     return;
  }
   isRunning=true;
  const currentTask = queue.shift()
  currentTask();
}
function updateInfo(status, explanation) {
  statusText.innerText = status;

  explainText.style.opacity = "0";
  explainText.style.transform = "translateY(10px)";

  setTimeout(() => {
    explainText.innerText = explanation;
    explainText.style.opacity = "1";
    explainText.style.transform = "translateY(0)";
  }, 100);
}
