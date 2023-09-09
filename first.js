//SELECTING ELEMENTS
const myName = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentDay = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
const currentTime = document.querySelector('[data-testid="currentUTCTime"]');
const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thurssday',
  'Friday',
  'Saturday',
  'Sunday',
];

//CURRENT DAY AND TIME
const currentDayAndTime = function () {
  const date = new Date();
  const day = date.getUTCDay() - 1;
  const hour = String(date.getUTCHours()).padStart(2, 0);
  const minute = String(date.getUTCMinutes()).padStart(2, 0);
  const seconds = String(date.getUTCSeconds()).padStart(2, 0);

  currentTime.textContent = `${hour}:${minute}:${seconds}`;
  currentDay.textContent = weekDays[day];
};

//CALLING CURRENT DAY AND TIME FUNCTION
currentDayAndTime();

setInterval(currentDayAndTime, 1000);
