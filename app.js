let btn = document.getElementById("btn");
let loader = document.querySelector(".loader");
let userMarks = document.querySelector(".total-m");
let userPercentage = document.querySelector(".total-p");
let resultContainer = document.querySelector(".result");

btn.addEventListener("click",() => {
   let marks = document.getElementById("marks-input");
   let marksTotal = marks.value;
   marks = parseInt(marks)

   if(marksTotal == ""){
      alert("Please enter your marks ??")
   }
   else if(marksTotal > 500){
      alert("Please enter your marks less than: 500")
   }
   else if(isNaN(marksTotal)){
      alert("Please enter a valid marks ??")
   }
   else{
      loader.style.display = "block"
      setTimeout(() => {
         loader.style.display = "none"
         resultContainer.style.display = "block"
         let marksObtain = marksTotal;
         userMarks.innerHTML = `Total Marks : <b>${marksObtain}</b>`

         let percentage = Math.floor(marksObtain / 500 * 100);
         userPercentage.innerHTML = `Total Percentage : <b>${percentage}%</b>`

         timeOut()
      }, 4000);
   }

})

function timeOut(){
   setTimeout(() => {
      alert("Thank you for us :)")
      location.reload()
   },5000)
}