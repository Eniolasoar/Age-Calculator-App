document.querySelector("#button").addEventListener("click", function () {
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
});
