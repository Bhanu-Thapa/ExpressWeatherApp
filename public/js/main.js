const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');

const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;

  if (cityVal === '') {
    city_name.innerText = `Plz write the name before search`;
    datahide.classList.add('data_hide');
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=f778e965fda44430ddab0696ac1d9587`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];

      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp_real_val.innerText = `${arrData[0].main.temp}`;
      // temp_status.innerText = `${arrData[0].weather[0].main}`;

      const tempMood = arrData[0].weather[0].main;

      // condition to check sunny or cloudy
      if (tempMood == 'Clear') {
        temp_status.innerHTML =
          '<i class="fa-solid fa-sun" style="color: #eccc68;"></i>';
      } else if (tempMood == 'Clouds') {
        temp_status.innerHTML =
          '<i class="fa-solid fa-cloud" style="color: #f1f2f6;"></i>';
      } else if (tempMood == 'Rain') {
        temp_status.innerHTML =
          '<i class="fa-solid fa-cloud-rain" style="color: #f1f2f6;"></i>';
      } else {
        temp_status.innerHTML =
          '<i class="fa-solid fa-sun" style="color: #eccc68;"></i>';
      }

      datahide.classList.remove('data_hide');
    } catch {
      city_name.innerText = `Plz enter the city name properly`;
      datahide.classList.add('data_hide');
    }
  }
};

submitBtn.addEventListener('click', getInfo);

////////// Date /////////////
const cday = document.getElementById('cday');
const dm = document.getElementById('dm');

const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

let date = new Date();
var day = weekday[date.getDay()];
var tdate = date.getDate();
var month = months[date.getMonth()];

dm.innerHTML = `${tdate} ${month}`;
cday.innerHTML = `${day}`;
