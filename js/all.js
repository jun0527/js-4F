const worldClockList = document.querySelector('.js-worldClockList');

const cityList = [
  {
    city: 'NEW YORK',
    timeZone: 'America/New_York',
  },
  {
    city: 'LONDON',
    timeZone: 'Europe/London',
  },
  {
    city: 'BANGKOK',
    timeZone: 'Asia/Bangkok',
  },
  {
    city: 'TAIWAN',
    timeZone: 'Asia/Taipei',
  },
  {
    city: 'SYDNEY',
    timeZone: 'Australia/Sydney',
  },
];
const options = {
  year: 'numeric',
  month: 'short',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
}
let date = '';
let str = '';

function getDate() {
  str = '';
  cityList.forEach((item) => {
    options.timeZone = item.timeZone;
    date = new Date().toLocaleString('en-AU', options);
    let dateArr = (date.split(', ')[0]).split(' ');
    let time = date.split(', ')[1];
    str += `<li class="worldClock">
              <div>
                <h2>${item.city}</h2>
                <p class="date">${dateArr[0]} ${dateArr[1]}. ${dateArr[2]}</p>
              </div>
              <p class="time">${time}</p>
            </li>`;
  })
  worldClockList.innerHTML = str;
}
getDate();
setInterval(() => {
  getDate();
}, 1000);