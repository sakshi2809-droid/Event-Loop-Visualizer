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

callstack.classList.add("highlight");
WebAPIs.classList.remove("highlight");
callbackQueue.classList.remove("highlight");

     setTimeout(function(){
      callstack.removeChild(task);
WebAPIs.appendChild(task);

callstack.classList.remove("highlight");
WebAPIs.classList.add("highlight");
callbackQueue.classList.remove("highlight");},1000
     );
     setTimeout(function(){
       WebAPIs.removeChild(task);
callbackQueue.appendChild(task);

callstack.classList.remove("highlight");
callbackQueue.classList.add("highlight");
WebAPIs.classList.remove("highlight");
},2000
     );

      setTimeout(function(){
  callbackQueue.removeChild(task);
  callstack.appendChild(task);
   // ✅ finish the task
  callstack.classList.add("highlight");
WebAPIs.classList.remove("highlight");
callbackQueue.classList.remove("highlight");
},3000);

setTimeout(function(){
callstack.removeChild(task); 
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