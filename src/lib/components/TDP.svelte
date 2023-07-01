<body>
	<div class="flex grid grid-cols-3 gap-4 p-4">
		<div class="col-span-3 mx-auto max-w-lg">
			<p class="text-center text-ao-pink dark:text-ao-orange text-3xl font-semibold p-4">
				Time Distance Pace
			</p>
			<p class="text-center p-2">Calculate your time, distance or pace</p>
		</div>
	</div>

	<div class="flex grid grid-cols-3 gap-4 p-4">
		<div class="col-span-3 mx-auto max-w-lg">
			<!--
          <form action="/action_page.php" id="selections" onchange="selectionFunction()">
              <p>What do you want to calculate?</p>
             <input type="radio" id="timeselect" name="selection" value="time" checked >
             <label for="time">TIME given distance and pace</label><br>
             <input type="radio" id="distanceselect" name="selection" value="distance">
             <label for="distance">DISTANCE given time and pace</label><br>
             <input type="radio" id="paceselect" name="selection" value="pace">
             <label for="pace">PACE given time and distance</label>
            </form>
-->
			<br />

			<div class="space-y-2">
				<label class="flex items-center space-x-2">
					<!-- svelte-ignore missing-declaration -->
					<input
						class="radio"
						type="radio"
						checked
						name="radio-direct"
						value="time"
						id="timeselect"
						on:change={selectionFunction}
					/>
					<p>TIME given distance and pace</p>
				</label>
				<label class="flex items-center space-x-2">
					<!-- svelte-ignore missing-declaration -->
					<input
						class="radio"
						type="radio"
						name="radio-direct"
						value="distance"
						id="distanceselect"
						on:change={selectionFunction}
					/>
					<p>DISTANCE given time and pace</p>
				</label>
				<label class="flex items-center space-x-2">
					<!-- svelte-ignore missing-declaration -->
					<input
						class="radio"
						type="radio"
						name="radio-direct"
						value="pace"
						id="paceselect"
						on:change={selectionFunction}
					/>
					<p>PACE given time and distance</p>
				</label>
			</div>

			<br />
			<div class="text-center"><i>Input your values below</i></div>
		</div>
	</div>

	<div class="col-span-3 mx-auto max-w-lg">
		<h2 class="text-2xl font-semibold text-center">Inputs</h2>
		<br />

		<label class="label p-2 flex items-center justify-end" id="timeInputDiv">
			<span class="px-2">Input Time</span>
			<input
				class="input text-lg p-2 max-w-xs"
				type="time"
				step="1"
				placeholder="00:00:00 "
				id="time"
			/>
		</label>

		<label class="label p-2 flex items-center justify-end" id="distanceInputDiv">
			<span class="px-2">Input Distance</span>
			<input class="input text-lg p-2 max-w-xs" type="number" placeholder="Enter" id="distance" />
		</label>

		<label class="label p-2 flex items-center justify-end" id="paceInputDiv">
			<span class="px-2">Input Pace</span>
			<input
				class="input text-lg p-2 max-w-xs"
				type="time"
				step="1"
				placeholder="00:00:00"
				id="pace"
			/>
		</label>

		<br />
		<div class="space-y-2">
			<label class="flex items-center space-x-2">
				<input class="checkbox" type="checkbox" id="checkForMiles" />
				<p>Check to use miles not kilometers</p>
			</label>
		</div>
		<br />
	</div>

	<div class="flex grid grid-cols-1 p-4">
		<div class="col-span-3 mx-auto">
			<button type="button" class="btn variant-filled btn-lg" id="calculate">Calculate</button>
		</div>
	</div>

	<div class="col-span-3 mx-auto max-w-lg text-center">
		<div id="result1">
			<h2 class="text-2xl font-semibold p-4">Result Time</h2>

			<p id="timeOutput" />
		</div>
	</div>

	<div class="col-span-3 mx-auto max-w-lg text-center">
		<div id="result2">
			<div class="tooltip">
				<h2 class="text-2xl font-semibold">Result Distance</h2>
				<span class="tooltiptext">How far you can go given a time and a pace.</span>
			</div>

			<p id="distanceOutput" />
		</div>
	</div>

	<div class="col-span-3 mx-auto max-w-lg text-center">
		<div id="result3">
			<div class="tooltip">
				<h2 class="text-2xl font-semibold">Result Pace</h2>
				<span class="tooltiptext">How fast a distance can be covered given a time.</span>
			</div>

			<p id="paceOutput" />
		</div>
	</div>

	<script>
		document.getElementById('result1').style.display = 'none';
		document.getElementById('result2').style.display = 'none';
		document.getElementById('result3').style.display = 'none';
		document.getElementById('timeInputDiv').style.display = 'none';

		var button = document.getElementById('calculate');

		var time = document.getElementById('time').value;
		var distance = document.getElementById('distance').value;
		var pace = document.getElementById('pace').value;

		function selectionFunction() {
			if (document.getElementById('timeselect').checked) {
				document.getElementById('timeInputDiv').style.display = 'none';
				document.getElementById('distanceInputDiv').style.visibility = 'visible';
				document.getElementById('distanceInputDiv').style.display = 'block';
				document.getElementById('paceInputDiv').style.visibility = 'visible';
				document.getElementById('paceInputDiv').style.display = 'block';
			} else if (document.getElementById('distanceselect').checked) {
				document.getElementById('timeInputDiv').style.display = 'block';
				document.getElementById('timeInputDiv').style.visibility = 'visible';
				document.getElementById('distanceInputDiv').style.display = 'none';
				document.getElementById('paceInputDiv').style.visibility = 'visible';
				document.getElementById('paceInputDiv').style.display = 'block';
			} else {
				document.getElementById('timeInputDiv').style.display = 'block';
				document.getElementById('timeInputDiv').style.visibility = 'visible';
				document.getElementById('distanceInputDiv').style.display = 'block';
				document.getElementById('distanceInputDiv').style.visibility = 'visible';
				document.getElementById('paceInputDiv').style.display = 'none';
			}
		}

		button.onclick = function () {
			var firsttime = document.getElementById('time').value;
			var firstdistance = document.getElementById('distance').value;
			var firstpace = document.getElementById('pace').value;

			if (document.getElementById('timeselect').checked) {
				document.getElementById('result1').style.display = 'block';
				document.getElementById('result2').style.display = 'none';
				document.getElementById('result3').style.display = 'none';
				//calculate time
				apace = firstpace.split(':');
				paceseconds = +apace[0] * 60 * 60 + +apace[1] * 60 + +apace[2];
				timeseconds = paceseconds * firstdistance * 1000;
				firsttime = new Date(timeseconds).toISOString().slice(11, 19);
				document.getElementById('timeOutput').innerHTML =
					'Your time will be ' +
					firsttime +
					' given a distance of ' +
					firstdistance +
					(document.getElementById('checkForMiles').checked
						? ' miles and a pace of '
						: ' kilometers and a pace of ') +
					firstpace +
					'.';
			} else if (document.getElementById('distanceselect').checked) {
				document.getElementById('result1').style.display = 'none';
				document.getElementById('result2').style.display = 'block';
				document.getElementById('result3').style.display = 'none';

				//calculate distance
				apace = firstpace.split(':');
				paceseconds = +apace[0] * 60 * 60 + +apace[1] * 60 + +apace[2];
				atime = firsttime.split(':');
				timeseconds = +atime[0] * 60 * 60 + +atime[1] * 60 + +atime[2];
				firstdistance = timeseconds / paceseconds;
				document.getElementById('distanceOutput').innerHTML =
					'You will run ' +
					firstdistance.toFixed(2) +
					(document.getElementById('checkForMiles').checked
						? ' miles given a pace of '
						: ' kilometers given a pace of ') +
					firstpace +
					' and a time of ' +
					firsttime;
			} else {
				document.getElementById('result1').style.display = 'none';
				document.getElementById('result2').style.display = 'none';
				document.getElementById('result3').style.display = 'block';

				//calculate pace
				atime = firsttime.split(':');
				timeseconds = +atime[0] * 60 * 60 + +atime[1] * 60 + +atime[2];
				paceseconds = (timeseconds / firstdistance) * 1000;
				firstpace = new Date(paceseconds).toISOString().slice(11, 19);
				document.getElementById('paceOutput').innerHTML =
					'Your pace will be ' +
					firstpace +
					' given a distance of ' +
					firstdistance +
					(document.getElementById('checkForMiles').checked
						? ' miles and a time of '
						: ' kilometers and a time of ') +
					firsttime;
			}
		};
	</script>
</body>
