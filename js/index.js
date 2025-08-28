console.log(55)
 /*coin and call history*/

   
     document.getElementById('call-btn1').
     addEventListener("click",function(){
          decrease('call-coin')
          console.log('call btn clicked')
          const data1 ={
               name:"fire service number",
               phoneNum:999,
               date:new Date().toLocaleTimeString()
          }

               const callHistory = []
               callHistory.push(data1)

          
           
                const container1 = document.getElementById('container1')
                
               
                    const div = document.createElement("div")
                    div.innerHTML=`

                     <div  class="flex justify-between items-center  shadow-xl my-3 p-2 bg-white rounded-lg">
               <div>
                    <h1 class="font-semibold text-[#111111] text-[18px]">${callHistory[0].name}</h1>
                    <p class="text-[#5c5c5c]">${callHistory[0].phoneNum}</p>
               </div>
               <div>
                    ${callHistory[0].date}
               </div>
            </div>
                    `
                    if(coin >= 20){ 
                    container1.appendChild(div)
                    }
                     
                    })
                    