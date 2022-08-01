  
 //for Wall clock
 setInterval(() => {
    let date = new Date();
     let h_Time = date.getHours();
     let m_Time = date.getMinutes();
     let s_Time = date.getSeconds();
      console.log( h_Time, m_Time, s_Time);
     
      // h_Time =  (h_Time < 12)?  h_Time : 12-h_Time ;  
    //   h_Time =  (h_Time > 12)?  12- h_Time: h_Time  ;  

    let Hour_rotation = (30*h_Time) + (m_Time/2);
    let Min_rotation = 6*m_Time;
    let Sec_rotation = 6*s_Time;
   
    let hour = document.getElementById("hour-hand");
    let min = document.getElementById("min-hand");
    let sec = document.getElementById("sec-hand");

    hour.style.transform = `rotate(${Hour_rotation}deg)`;
    min.style.transform = `rotate(${Min_rotation}deg)`;
    sec.style.transform = `rotate(${Sec_rotation}deg)`;

 }, 1000);




 //for Digital clock
 
let loadBody = document.querySelector("body");
 loadBody.addEventListener("load", digitalRun); 
 setInterval(digitalRun, 1000);

  function digitalRun(){
   let date = new Date();
     let hour = date.getHours();
     let min = date.getMinutes();
      // console.log(hour,min);

        hour = (hour < 10)? "0" + hour : hour;
        min = (min < 10)? "0" + min : min; 

      let Time = document.getElementById("Time");
          Time.innerHTML = `${hour}` + ":" + `${min}`;

      //Am/Pm include
      let timeOfDay = (hour < 12) ? "AM" : "PM";
      let am_pm = document.getElementById("am-pm");
        am_pm.innerHTML = timeOfDay;


        //Date include
        date = new Date();
        let getDate = date.getDate();
        let month = ["Jan","Feb","March","April","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
        let getMonth = month[date.getMonth()];
        let getFullYear = date.getFullYear();
        // console.log(getDate,getMonth,getFullYear);
        let currentDate = document.getElementById("Date");
            currentDate.innerHTML = `${getDate} ` + `${getMonth}` + ", " + `${getFullYear}`;
  }



//Dark/Black Theame
let icon = document.getElementById("icon");
icon.addEventListener("click", toggleTheame);
 function toggleTheame(){
   document.body.classList.toggle("Dark_theame");
   
   if (document.body.classList.contains("Dark_theame")){
     icon.classList.add("bi-moon-fill");
      icon.classList.remove("bi-brightness-high-fill");
   }
   else{
     icon.classList.add("bi-brightness-high-fill");
      icon.classList.remove("bi-moon-fill");
   }

 }





//  icon.onclick = function name(params) {
//   document.dody.classList.toggle("Dark_theame");
//  }

