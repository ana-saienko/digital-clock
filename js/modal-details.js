// Меню бургер

const iconMore = document.querySelector('.more-icon');
const btnMore = document.querySelector('.more');


if (btnMore) {
	btnMore.addEventListener("click", function(e){
		iconMore.classList.toggle('btn-active');
	});
}

// Bottom

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
document.getElementById("current-timezone").innerHTML = `${timezone}`;
