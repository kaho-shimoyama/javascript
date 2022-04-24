'use strict';

{ 
  const display=document.getElementById("display");
  const start= document.getElementById("start");
  const stop= document.getElementById("stop");
  const reset= document.getElementById("reset");
  
  let startTime;
  let clearId;
  let elapsedTime = 0;
  
  function setBtnStateInitial(){
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
  }
  
  function setBtnStateRunning(){
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
  }
  
  function setBtnStateStop(){
    start.disabled = false;
    stop.disabled =  true;
    reset.disabled = false;
  }
  
  function countUp() {
    const d = new Date(Date.now() - startTime + elapsedTime);
　  const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
　  const ms = String(d.getMilliseconds()).padStart(3, '0');
    display.textContent = `${m} : ${s} . ${ms}`;
　  clearId = setTimeout(() => {
　  countUp();
　}, 10);
　}
 
  setBtnStateInitial();
  
  start.addEventListener("click", ()=>{
    startTime = Date.now();
    countUp();
    setBtnStateRunning();
  });

  stop.addEventListener("click", function(){
    clearTimeout(clearId);
    setBtnStateStop();
    elapsedTime += Date.now() - startTime;
   });
 	
  reset.addEventListener("click", function(){
    display.textContent = "００:００.０００";
    setBtnStateInitial();
    elapsedTime = 0;
   });

}

