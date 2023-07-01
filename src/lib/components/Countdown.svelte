<body>
	<div class="flex grid grid-cols-3 gap-4 p-4">
		<div class="col-span-3 mx-auto max-w-lg">
			<p class="text-center text-ao-pink dark:text-ao-orange text-3xl font-semibold p-4">
				The Countdown
			</p>
			<p class="text-center p-2">What's between you and your race?</p>
		</div>
	</div>

	<div class="flex grid grid-cols-3 gap-4 p-4">
		<div class="col-span-3 mx-auto max-w-lg">
			<h2 class="text-2xl font-semibold text-center">Inputs</h2>
			<br />

			<label class="label p-2 flex items-center justify-end" id="raceInputDiv">
				<div class="px-2 min-w-max">Input Racing Date</div>
				<input class="input text-lg p-2 max-w-xs" type="date" id="racedate" />
			</label>

			<label class="label p-2 flex items-center justify-end" id="trainInputDiv">
				<span class="px-2 min-w-max">Input Training Start</span>
				<input class="input text-lg p-2 max-w-xs" type="date" id="traindate" />
			</label>

			<br />
		</div>
	</div>

	<div class="flex grid grid-cols-3 gap-4 p-4">
		<div class="col-span-3 mx-auto max-w-lg" id="result1">
			<h2 class="text-2xl font-semibold text-center">Days till race</h2>

			<p class="text-center" id="outputdays" />
			<p class="text-center" id="outputdaysweeks" />
		</div>

		<div class="col-span-3 mx-auto max-w-lg" id="result2">
			<h2 class="text-2xl font-semibold text-center">Training start to race</h2>

			<p class="text-center" id="outputdaystrain" />
			<p class="text-center" id="outputdaystrainweeks" />
		</div>
	</div>

	<script>
		document.getElementById('result1').style.display = 'none';
		document.getElementById('result2').style.display = 'none';
		document.getElementById('racedate').addEventListener('input', update);
		document.getElementById('traindate').addEventListener('input', update2);

		var racedate = new Date(document.getElementById('racedate').value).getTime();
		var traindate = new Date(document.getElementById('traindate').value).getTime();
		var weeks;
		var weeks2;

		function update() {
			document.getElementById('result1').style.display = 'block';
			racedate = new Date(document.getElementById('racedate').value).getTime();

			var x = setInterval(function () {
				var now = new Date().getTime();
				var distance = racedate - now;

				var days = Math.floor(distance / (1000 * 60 * 60 * 24));
				var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
				var seconds = Math.floor((distance % (1000 * 60)) / 1000);
				weeks = days / 7;

				document.getElementById('outputdays').innerHTML =
					days + ' days ' + hours + ' Hours ' + minutes + ' Minutes ' + seconds + ' seconds.';
				document.getElementById('outputdaysweeks').innerHTML =
					"That's " + Math.round(weeks) + ' full weeks away.';

				if (distance < 0) {
					clearInterval(x);
					document.getElementById('outputdays').innerHTML = 'Hope the race went well!';
				}
			});
		}

		function update2() {
			document.getElementById('result2').style.display = 'block';
			racedate = new Date(document.getElementById('racedate').value).getTime();
			traindate = new Date(document.getElementById('traindate').value).getTime();

			var x = setInterval(function () {
				var distance2 = racedate - traindate;

				var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
				var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
				var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
				weeks2 = days2 / 7;
				document.getElementById('outputdaystrain').innerHTML = days2 + ' days.';
				document.getElementById('outputdaystrainweeks').innerHTML =
					"That's " + Math.round(weeks2) + ' full weeks to train.';
			});
		}
	</script>
</body>
