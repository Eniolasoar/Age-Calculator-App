document.querySelector("#button").addEventListener('click',function(){
    let dayInput=document.getElementById("day");
    let monthInput=document.getElementById("month");
    let yearInput=document.getElementById("year");

    let day=document.querySelector("#day").value;
    let  month=document.querySelector("#month").value;
    let year=document.querySelector("#year").value;

    let labelCollection=document.getElementsByClassName("label");
    let errorMessage=document.getElementsByClassName("errorMessage");

    let dayLabel=document.getElementById("dayLabel");
    let monthLabel=document.getElementById("monthLabel");
    let yearLabel =document.getElementById("yearLabel");

    let errorMessage1=document.getElementById("errorMessage1");
    let errorMessage2=document.getElementById("errorMessage2");
    let errorMessage3=document.getElementById("errorMessage3")

    if(day==""){
        dayInput.style.border="1px solid red";
        dayLabel.style.color="red";
        errorMessage1.innerHTML="This field is required";
        errorMessage1.style.color="red";
    }
    if(month =="" ){
        monthInput.style.border="1px solid red";
        monthLabel.style.color="red";
        errorMessage2.innerHTML="This field is required";
        errorMessage2.style.color="red";
    }
    if(year ==""){
        yearInput.style.border="1px solid red";
        yearLabel.style.color="red"
        errorMessage3.innerHTML="This field is required";
        errorMessage3.style.color="red";
    }

    if(day!=="" && month!=="" && year!==""){
        calculateAge();
    }

    let input=document.getElementsByTagName("input");
    for(let i=0;i<input.length;i++){
        input[i].addEventListener('input',function(){
            //how to check if the input is empty
            if(input[i].value==""){
                this.style.border="1px solid red";
            }

        })
    }
    
});

function applyStyle(element){
    if(element==""){
        element.style.border="1px solid red";
        
    }
}

function calculateAge(){
    let currentDate = new Date();

  //This is the output location
  let dayOutput = document.querySelector(".dayOutput");
  let monthOutput = document.querySelector(".monthOutput");
  let yearOutput = document.querySelector(".yearOutput");

  // Get user-provided values for day, month, and year from input fields.
  const day = parseInt(document.querySelector("#day").value, 10);
  const month = parseInt(document.querySelector("#month").value, 10) - 1; // Subtract 1 to get the correct month (0 to 11)
  const year = parseInt(document.querySelector("#year").value, 10);

  const yearDate = currentDate.getFullYear();
  const monthDate = currentDate.getMonth();
  const dayDate = currentDate.getDate();

  let calculatedYear = yearDate - year;
  let calculatedMonth = monthDate - month;
  let calculatedDay = dayDate - day;

  // Check if the birthday hasn't occurred yet this year
  //if current month is lesser than birth month
  if (month > monthDate|| (month === monthDate && day > dayDate)) {
    calculatedYear -= 1;
  }

  // Adjust the calculatedMonth and calculatedDays based on day and month comparison
  if (dayDate < day) {
    calculatedMonth -= 1;
    const prevMonthDate = new Date(yearDate, monthDate - 1, day);
    const daysInPrevMonth = (currentDate - prevMonthDate) / (1000 * 3600 * 24);
    calculatedDay += daysInPrevMonth;
  }



  yearOutput.innerHTML = calculatedYear;
  monthOutput.innerHTML = calculatedMonth;
  dayOutput.innerHTML = Math.floor(calculatedDay);
}