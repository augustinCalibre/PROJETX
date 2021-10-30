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



// <!-- LIve streaming -->

            // <div class="views-element-container block block-views block-views-blockquotes-slider-block-1" id="block-views-block-quotes-slider-block-1">
            //     <div>
            //         <div class="quote-block module-m-y-2 view view-quotes-slider view-id-quotes_slider view-display-id-block_1 js-view-dom-id-13d621b12d91a93ec0800d506fb8c8538b32bedf2c0411b13a0210217a761df2">
            //             <div class="view-content">
            //                 <div class="views-view-grid horizontal cols-12 clearfix">
            //                     <div class="item views-row clearfix row-1">
            //                         <div>
            //                             <div class="views-field views-field-nothing">
            //                                 <span class="field-content">
            //                                     <div class="container-fluid_offset"  id="H">
            //                                         <iframe width="1500px" height="500px" src="https://www.youtube.com/embed/7RjPcCaqZgk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            //                                     </div>
            //                                 </span>
            //                             </div>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>




