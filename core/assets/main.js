const day = document.getElementById("jours");
const heure = document.getElementById("heure");
const minu = document.getElementById("min")
;
const sec = document.getElementById("sec");





// counters.forEach( counter => {
//    const animate = () => {
//       const value = +counter.getAttribute('akhi');
//       const data = +counter.innerText;
     
//       const time = value / speed;
//      if(data < value) {
//           counter.innerText = Math.ceil(data + time);
//           setTimeout(animate, 1);
//         }else{
//           counter.innerText = value;
//         }
     
//    }
   
//    animate();
// });




const currentYear=new Date().getFullYear();

const peaceDay= new Date(`November 15 ${currentYear} 00:00:00`);




// Update CountDowm 
function contDown() {
    const currenTime= new Date();
    const diff=peaceDay-currenTime

    const d= Math.floor(diff/1000/60/60 /24);
    const h= Math.floor(diff/1000/60/60 )%24;
    const min= Math.floor(diff/1000/60 )%60;
    const s= Math.floor(diff/1000)%60;

    day.innerHTML=d;
    heure.innerHTML=h;
    minu.innerHTML=min;
    sec.innerHTML=s


    
        
        
    

    // console.log(d+' |'+h+'|'+min+'|'+s)
}



setInterval(contDown,1000);




