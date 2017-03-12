jQuery(document).ready(function() {

	var _second = 1000;
	var _minute = _second * 60;
	var _hour = _minute * 60;
	var _day = _hour * 24;
	var timer;
	var end = new Date('04/19/2017 10:1 AM');

	timer = setInterval(getDate, 0);

	function getDate() {

		jQuery.get('api/get-date.php', function(data) {

			var ts = +data;
			var now = new Date(Date( ts ));
			var distance = end - now;

			if (distance < 0) {
						clearInterval(timer);
						$("#timer").html('Акция прошла');
						return;
				}
			var days = Math.floor(distance / _day);
			var hours = Math.floor((distance % _day) / _hour);
			var minutes = Math.floor((distance % _hour) / _minute);
			var seconds = Math.floor((distance % _minute) / _second);
			$("#timer").html(
				'<span class="timer-field">' + days + '<span class="timer-text">дней</span> </span> <span class="timer-field">' + hours + '<span class="timer-text">часов</span> </span> <span class="timer-field">' + minutes + '<span class="timer-text">минут</span> </span> <span class="timer-field">' + seconds + '<span class="timer-text">секунд</span> </span>'
			);
		});
	}
});