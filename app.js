const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2023, 9, 8, 24, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month]
const date = futureDate.getDate();
let weekday = futureDate.getDay();
weekday = weekdays[weekday]
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}`

// future time in ms
const futureTime = futureDate.getTime()

function getRemainingTime(){
   const today = new Date().getTime()
   const t = futureTime - today;
  //  values in ms
  const day = 24 * 60 * 60 * 1000;
  const hour = 60 * 60 * 1000;
  const minute = 60 * 1000;

  let days = t / day;
  days = Math.floor(days);
  let hours = Math.floor((t % day) / hour);
  let minutes = Math.floor((t % hour) / minute);
  let seconds = Math.floor((t % minute) / 1000);
  
  const values = [days, hours, minutes, seconds];

  function format(item){
    if(item < 10){
      return item = `0${item}`
    }
    else{
      return item;
    }
  }

  items.forEach((item, index) =>{
    item.innerHTML = format(values[index])
  });
  if(t < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`
  }

}
let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime()