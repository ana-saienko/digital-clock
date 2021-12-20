// Меню бургер

const iconMore = document.querySelector('.more-icon');
const btnMore = document.querySelector('.more');
const menuBody = document.querySelector('.menu__body');


if (btnMore) {
	btnMore.addEventListener("click", function(e){
		iconMore.classList.toggle('btn-active');
		menuBody.classList.toggle('burger-active');
		btnMore.classList.toggle('btn-more-active');
	});
}

// Bottom

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
document.getElementById("current-timezone").innerHTML = `${timezone}`;

// Day of the year

var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);

document.getElementById("day-week").innerHTML = `${day}`;

let dayWeek = now.getDay();
document.getElementById("day-one-week").innerHTML = `${dayWeek}`;

// Week num

function getNumberOfWeek() {
	const today = new Date();
	const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
	const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
	return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}
let weekYear = getNumberOfWeek();

document.getElementById("week-num").innerHTML = `${weekYear}`;