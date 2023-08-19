document.querySelector("#button").addEventListener("click", function () {
  let dayInput = document.getElementById("day");
  let monthInput = document.getElementById("month");
  let yearInput = document.getElementById("year");

  //input value
  let day = document.querySelector("#day").value;
  let month = document.querySelector("#month").value;
  let year = document.querySelector("#year").value;

  

  // day=parseInt(day);
  // month=parseInt(month);

  //input labels
  let dayLabel = document.getElementById("dayLabel");
  let monthLabel = document.getElementById("monthLabel");
  let yearLabel = document.getElementById("yearLabel");

  //input error message
  let errorMessage1 = document.getElementById("errorMessage1");
  let errorMessage2 = document.getElementById("errorMessage2");
  let errorMessage3 = document.getElementById("errorMessage3");

  if (day=="") {
    dayInput.style.border = "1px solid red";
    dayLabel.style.color = "red";
    errorMessage1.innerHTML = "This field is required";
    errorMessage1.style.color = "red";
  }
  if (month == "") {
    monthInput.style.border = "1px solid red";
    monthLabel.style.color = "red";
    errorMessage2.innerHTML = "This field is required";
    errorMessage2.style.color = "red";
  }
  if (year == "") {
    yearInput.style.border = "1px solid red";
    yearLabel.style.color = "red";
    errorMessage3.innerHTML = "Required field";
    errorMessage3.style.color = "red";
  }
  if (day < 1 || day > 31) {
    dayInput.style.border = "1px solid red";
    dayLabel.style.color = "red";
    errorMessage1.innerHTML = "Enter a valid day!";
    errorMessage1.style.color = "red";
  }
  if (month < 1 || month > 12) {
    monthInput.style.border = "1px solid red";
    monthLabel.style.color = "red";
    errorMessage2.innerHTML = "Invalid month";
    errorMessage2.style.color = "red";
  }
  let currentYear = new Date().getFullYear();
  if (year > currentYear) {
    yearInput.style.border = "1px solid red";
    yearLabel.style.color = "red";
    errorMessage3.innerHTML = "Please enter a valid year";
    errorMessage3.style.color = "red";
  }

  if (checkValidDate(day, month) === false) {
    dayInput.style.border = "1px solid red";
    dayLabel.style.color = "red";
    errorMessage1.innerHTML = "Invalid date!";
    errorMessage1.style.color = "red";
  }

  if (day !== "" && month !== "" && year !== "") {
    if (day >= 1 || day <= 31) {
      if (month >= 1 || month <= 12) {
        if (year <= currentYear) {
          console.log("Day:", day);
console.log("Month:", month);
          if (checkValidDate(day, month) === true) {
            calculateAge();
          }
        }
      }
    }
  }

  dayInput.addEventListener("input", function () {
    applyDayStyle(this, dayLabel, errorMessage1);
  });

  monthInput.addEventListener("input", function () {
    applyMonthStyle(this, monthLabel, errorMessage2);
  });

  yearInput.addEventListener("input", function () {
    applyYearStyle(this, yearLabel, errorMessage3);
  });
});

//creating seperating functions for each styling and validation
function applyDayStyle(element, elementLabel, elementOutput) {
  if (element.value == "") {
    element.style.border = "1px solid red";
    elementLabel.style.color = "red";
    elementOutput.innerHTML = "This field is required ";
    elementOutput.style.color = "red";
  }
  if ((element.value < 1) | (element.value > 31)) {
    element.style.border = "1px solid red";
    elementLabel.style.color = "red";
    elementOutput.innerHTML = "Please enter a valid date!";
    elementOutput.style.color = "red";
  }
  let monthDate = document.querySelector("#month").value;
  if (checkValidDate(element.value, monthDate) == false) {
    dayInput.style.border = "1px solid red";
    dayLabel.style.color = "red";
    errorMessage1.innerHTML = "Please enter a valid date for this month!";
    errorMessage1.style.color = "red";
  }

  if (
    element.value !== "" &&
    element.value >= 1 &&
    element.value <= 31 &&
    checkValidDate(element.value, monthDate)
  ) {
    element.style.border = "1px solid green";
    elementLabel.style.color = "grey";
    elementOutput.innerHTML = "";
  }
}

function applyMonthStyle(element, elementLabel, elementOutput) {
  if (element.value == "") {
    element.style.border = "1px solid red";
    elementLabel.style.color = "red";
    elementOutput.innerHTML = "This field is required ";
    elementOutput.style.color = "red";
  }
  if (element.value < 1 || element.value > 12) {
    element.style.border = "1px solid red";
    elementLabel.style.color = "red";
    elementOutput.innerHTML = "Please enter a valid date!";
    elementOutput.style.color = "red";
  }
  if (element.value !== "") {
    if (element.value >= 1 && element.value <= 12) {
      element.style.border = "1px solid green";
      elementLabel.style.color = "grey";
      elementOutput.innerHTML = "";
    }
  }
}

function applyYearStyle(element, elementLabel, elementOutput) {
  if (element.value == "") {
    element.style.border = "1px solid red";
    elementLabel.style.color = "red";
    elementOutput.innerHTML = "This field is required ";
    elementOutput.style.color = "red";
  }
  let currentYear = new Date().getFullYear();
  if (element.value > currentYear) {
    element.style.border = "1px solid red";
    elementLabel.style.color = "red";
    elementOutput.innerHTML = "Please enter a valid date!";
    elementOutput.style.color = "red";
  }
  if (element.value !== "") {
    if (element.value < currentYear) {
      element.style.border = "1px solid green";
      elementLabel.style.color = "grey";
      elementOutput.innerHTML = "";
    }
  }
}

//a function to check the validity of a date(emphasis on the day)
function checkValidDate(day, month) {
  let newday = parseInt(day, 10);
  let newmonth = parseInt(month, 10);
  let valid = true;
  //using switch statement
  switch (newmonth) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (newday > 31) {
        valid = false;
      }
      break;
    case 2:
      //February day is assumed to be 28 days
      if (newday > 28) {
        valid = false;
      }
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      if (newday > 30) {
        valid = false;
      }
      break;
  }
  return valid;
}
function calculateAge() {
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
  if (month > monthDate || (month === monthDate && day > dayDate)) {
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
