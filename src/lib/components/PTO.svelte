<body>
	<div class="flex grid grid-cols-3 gap-4 p-4">
		<div class="col-span-3 mx-auto max-w-lg">
			<p class="text-center text-ao-pink dark:text-ao-orange text-3xl font-semibold p-4">
				Unofficial PTO Points Calculator
			</p>
			<p class="text-center p-2">
				Get indicative PTO points for a race. Use cases: "What if Ali Brownlee started the race?
				What if the last place athlete didn't DNF and 16 athletes finished? What if I had gone 2min
				quicker?"
			</p>
			<p class="italic text-center text-sm">
				<a href="https://protriathletes.org/pto-world-ranking-system/" target="_blank"
					>Click here for more info on the calculations.</a
				>
			</p>
		</div>
	</div>

	<div class="flex grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-w-4xl mx-auto">
		<div class="col-span-1 mx-auto">
			<h2 class="text-2xl font-semibold text-center p-2">Pre Race Info</h2>

			<label class="label flex justify-end items-center">
				<span>Select Race Tier</span>
				<select id="tier" class="select variant-form-material mx-2 w-52">
					<option value="Diamond">Diamond</option>
					<option value="Platinum">Platinum</option>
					<option value="Gold">Gold</option>
					<option value="Silver">Silver</option>
					<option value="Bronze">Bronze</option>
				</select>
			</label>

			<label class="label flex justify-end items-center">
				<span>Enter Race SOF</span>
				<input class="input variant-form-material text-lg mx-2 w-52" type="number" placeholder="Enter Race SOF" id="start1"/>
			</label>

			<p class="italic text-center p-2 max-w-sm">The SOF and Tier can be found on the PTO website <a href="https://protriathletes.org/" target="_blank">here. This single number is an average of the PTO points for the top 5 highest ranked athletes starting the race.</a></p>
		</div>

		<div class="col-span-1 mx-auto items-end">
			<h2	class="text-2xl font-semibold text-center p-2">Results Info</h2>

			<label class="label flex justify-end items-center">
				<span>Finishers</span>
				<input class="input variant-form-material text-lg p-2 w-56 mx-2" type="number" placeholder="Number of Finishers" id="numberfinishers"/>
			</label>
			

			<label class="label flex justify-end items-center">
				<span>Winners Time</span>
				<input class="input variant-form-material text-lg p-2 w-56 mx-2"	type="time"	step="1" id="finisher1"/>
			</label>

			<label class="label flex justify-end items-center">
				<span>Second Place</span>
				<input class="input variant-form-material text-lg p-2 w-56 mx-2"	type="time"	step="1" id="finisher2"/>
			</label>

			<label class="label flex justify-end items-center">
				<span>Third Place</span>
				<input class="input variant-form-material text-lg p-2 w-56 mx-2"	type="time"	step="1" id="finisher3"/>
			</label>

			<label class="label flex justify-end items-center">
				<span>Fourth Place</span>
				<input class="input variant-form-material text-lg p-2 w-56 mx-2"	type="time"	step="1" id="finisher4"/>
			</label>

			<label class="label flex justify-end items-center">
				<span>Fifth Place</span>
				<input class="input variant-form-material text-lg p-2 w-56 mx-2"	type="time"	step="1" id="finisher5"/>
			</label>

			<label class="label flex justify-end items-center">
				<span>Your Time</span>
				<input class="input variant-form-material text-lg p-2 w-56 mx-2"	type="time"	step="1" id="finisheryou"/>
			</label>

			<label class="label flex justify-end items-center">
				<span>Your Place:</span>
				<input class="input variant-form-material text-lg p-2 w-56 mx-2" type="number" placeholder="6" id="finisherplace"/>
			</label>

		</div>
	</div>

	<div class="flex grid grid-cols-1 p-4">
		<div class="col-span-3 mx-auto">
			<button
				type="button"
				class="btn bg-gradient-to-br variant-gradient-primary-secondary btn-lg"
				id="calculate">Calculate</button
			>
		</div>
	</div>

	<div class="flex grid grid-cols-3 gap-4 p-4">
		<div class="col-span-3 mx-auto text-center justify-center" id="result4">
			<div class="tooltip">
				<h2 class="text-2xl font-semibold">Total Points</h2>
				<span class="tooltiptext">Combination of Position, Strength of Field and Time.</span>
			</div>

			<p id="totalpoints1" />
			<p id="totalpoints2" />
			<p id="totalpoints3" />
			<p id="totalpoints4" />
			<p id="totalpoints5" />
			<p id="totalpointsy" />
			<p id="totalexplain" />
		</div>
	</div>

	<div class="flex grid grid-cols-3 gap-4 p-4">
		<div class="col-span-1 mx-auto max-w-lg text-center p-4" id="result1">
			<div class="tooltip">
				<h2 class="text-2xl font-semibold underline decoration-dotted">Position Points</h2>
				<span class="tooltiptext">Points allocated for placing in a particular tiered race.</span>
			</div>

			<p id="positionpoints1" />
			<p id="positionpoints2" />
			<p id="positionpoints3" />
			<p id="positionpoints4" />
			<p id="positionpoints5" />
			<p id="positionpointsy" />
			<p id="positionexplain" />
		</div>

		<div class="col-span-1 mx-auto max-w-lg text-center p-4" id="result2">
			<div class="tooltip">
				<h2 class="text-2xl font-semibold underline decoration-dotted">Strength of Field Points</h2>
				<span class="tooltiptext"
					>How strong the field is based on top 5 ranked athletes starting the race.</span
				>
			</div>

			<p id="sofpoints" />
			<p id="sofexplain" />
		</div>

		<div class="col-span-1 mx-auto max-w-lg text-center p-4" id="result3">
			<div class="tooltip">
				<h2 class="text-2xl font-semibold underline decoration-dotted">Time Points</h2>
				<span class="tooltiptext"
					>Points allocated based on the calculated "average time", SOF and race tier. Number of
					finishers also impacts this.</span
				>
			</div>

			<p id="timepoints1" />
			<p id="timepoints2" />
			<p id="timepoints3" />
			<p id="timepoints4" />
			<p id="timepoints5" />
			<p id="timepointsy" />
			<p id="timeexplain" />
		</div>
	</div>

	<script>
		document.getElementById('result1').style.visibility = 'hidden';
		document.getElementById('result2').style.visibility = 'hidden';
		document.getElementById('result3').style.visibility = 'hidden';
		document.getElementById('result4').style.visibility = 'hidden';
		var racetier = document.getElementById('tier').value;
		var start1 = document.getElementById('start1').value;
		var numberfinishers = document.getElementById('numberfinishers').value;
		var firsttime = document.getElementById('finisher1').value;
		var secondtime = document.getElementById('finisher2').value;
		var thirdtime = document.getElementById('finisher3').value;
		var fourthtime = document.getElementById('finisher4').value;
		var fifthtime = document.getElementById('finisher5').value;
		var finishtimeyou = document.getElementById('finisheryou').value;
		var yourplace = document.getElementById('finisherplace').value;
		var button = document.getElementById('calculate');
		var diamondbase = 100;
		var platinumbase = 95;
		var goldbase = 90;
		var silverbase = 80;
		var bronzebase = 70;
		var thisbase;
		var diamonddropoff = 2;
		var platinumdropoff = 2;
		var golddropoff = 5;
		var silverdropoff = 8;
		var bronzedropoff = 11;
		var thisdropoff;
		var sof;
		var firstpositionpoints;
		var secondpositionpoints;
		var thirdpositionpoints;
		var fourthpositionpoints;
		var fifthpositionpoints;
		var youpositionpoints;
		var firsttimepoints;
		var secondtimepoints;
		var thirdtimepoints;
		var fourthtimepoints;
		var fifthtimepoints;
		var youtimepoints;
		var firsttotalpoints;
		var secondtotalpoints;
		var thirdtotalpoints;
		var fourthtotalpoints;
		var fifthtotalpoints;
		var youtotalpoints;
		var racebaseline;
		var raceaveragetime;
		var raceaveragetimeseconds;
		var firsttimeseconds;
		var secondtimeseconds;
		var thirdtimeseconds;
		var fourthtimeseconds;
		var fifthtimeseconds;
		var yourtimeseconds;
		var afirst;
		var asecond;
		var athird;
		var afourth;
		var afifth;
		var ayou;
		var firstdelta;
		var seconddelta;
		var thirddelta;
		var fourthdelta;
		var fifthdelta;
		var yourdelta;

		button.onclick = function () {
			document.getElementById('result1').style.visibility = 'visible';
			document.getElementById('result2').style.visibility = 'visible';
			document.getElementById('result3').style.visibility = 'visible';
			document.getElementById('result4').style.visibility = 'visible';
			racetier = document.getElementById('tier').value;
			start1 = document.getElementById('start1').value;
			numberfinishers = document.getElementById('numberfinishers').value;
			firsttime = document.getElementById('finisher1').value;
			secondtime = document.getElementById('finisher2').value;
			thirdtime = document.getElementById('finisher3').value;
			fourthtime = document.getElementById('finisher4').value;
			fifthtime = document.getElementById('finisher5').value;
			finishtimeyou = document.getElementById('finisheryou').value;
			yourplace = document.getElementById('finisherplace').value;

			//Calculate Position Points

			if (racetier == 'Diamond') {
				thisbase = 100;
				thisdropoff = 2;
			} else if (racetier == 'Platinum') {
				thisbase = 95;
				thisdropoff = 2;
			} else if (racetier == 'Gold') {
				thisbase = 90;
				thisdropoff = 5;
			} else if (racetier == 'Silver') {
				thisbase = 80;
				thisdropoff = 8;
			} else {
				thisbase = 70;
				thisdropoff = 11;
			}

			racetier = document.getElementById('tier').value;

			firstpositionpoints = thisbase * Math.pow(1 - thisdropoff / 100, 1 - 1);
			secondpositionpoints = thisbase * Math.pow(1 - thisdropoff / 100, 2 - 1);
			thirdpositionpoints = thisbase * Math.pow(1 - thisdropoff / 100, 3 - 1);
			fourthpositionpoints = thisbase * Math.pow(1 - thisdropoff / 100, 4 - 1);
			fifthpositionpoints = thisbase * Math.pow(1 - thisdropoff / 100, 5 - 1);
			youpositionpoints = thisbase * Math.pow(1 - thisdropoff / 100, yourplace - 1);

			//SOF Points
			sof = +start1;
			//sof = (+start1 + +start2 + +start3 + +start4 + +start5)/5;

			//Calculate Baseline to go into Time Points

			racebaseline = (thisbase + sof) / 2;

			//Calculate Race Average Time to go into Time Points
			if (numberfinishers <= 4) {
				afirst = firsttime.split(':');
				firsttimeseconds = +afirst[0] * 60 * 60 + +afirst[1] * 60 + +afirst[2];
				raceaveragetimeseconds = (firsttimeseconds / 1) * 1000;
				raceaveragetime = firsttime;
			} else if (numberfinishers < 8) {
				afirst = firsttime.split(':');
				firsttimeseconds = +afirst[0] * 60 * 60 + +afirst[1] * 60 + +afirst[2];
				asecond = secondtime.split(':');
				secondtimeseconds = +asecond[0] * 60 * 60 + +asecond[1] * 60 + +asecond[2];
				raceaveragetimeseconds = ((firsttimeseconds + secondtimeseconds) / 2) * 1000;
				raceaveragetime = new Date(raceaveragetimeseconds).toISOString().slice(11, 19);
			} else if (numberfinishers < 12) {
				afirst = firsttime.split(':');
				firsttimeseconds = +afirst[0] * 60 * 60 + +afirst[1] * 60 + +afirst[2];
				asecond = secondtime.split(':');
				secondtimeseconds = +asecond[0] * 60 * 60 + +asecond[1] * 60 + +asecond[2];
				athird = thirdtime.split(':');
				thirdtimeseconds = +athird[0] * 60 * 60 + +athird[1] * 60 + +athird[2];
				raceaveragetimeseconds =
					((firsttimeseconds + secondtimeseconds + thirdtimeseconds) / 3) * 1000;
				raceaveragetime = new Date(raceaveragetimeseconds).toISOString().slice(11, 19);
			} else if (numberfinishers < 16) {
				afirst = firsttime.split(':');
				firsttimeseconds = +afirst[0] * 60 * 60 + +afirst[1] * 60 + +afirst[2];
				asecond = secondtime.split(':');
				secondtimeseconds = +asecond[0] * 60 * 60 + +asecond[1] * 60 + +asecond[2];
				athird = thirdtime.split(':');
				thirdtimeseconds = +athird[0] * 60 * 60 + +athird[1] * 60 + +athird[2];
				afourth = fourthtime.split(':');
				fourthtimeseconds = +afourth[0] * 60 * 60 + +afourth[1] * 60 + +afourth[2];
				raceaveragetimeseconds =
					((firsttimeseconds + secondtimeseconds + thirdtimeseconds + fourthtimeseconds) / 4) *
					1000;
				raceaveragetime = new Date(raceaveragetimeseconds).toISOString().slice(11, 19);
			} else {
				afirst = firsttime.split(':');
				firsttimeseconds = +afirst[0] * 60 * 60 + +afirst[1] * 60 + +afirst[2];
				asecond = secondtime.split(':');
				secondtimeseconds = +asecond[0] * 60 * 60 + +asecond[1] * 60 + +asecond[2];
				athird = thirdtime.split(':');
				thirdtimeseconds = +athird[0] * 60 * 60 + +athird[1] * 60 + +athird[2];
				afourth = fourthtime.split(':');
				fourthtimeseconds = +afourth[0] * 60 * 60 + +afourth[1] * 60 + +afourth[2];
				afifth = fifthtime.split(':');
				fifthtimeseconds = +afifth[0] * 60 * 60 + +afifth[1] * 60 + +afifth[2];
				raceaveragetimeseconds =
					((firsttimeseconds +
						secondtimeseconds +
						thirdtimeseconds +
						fourthtimeseconds +
						fifthtimeseconds) /
						5) *
					1000;
				raceaveragetime = new Date(raceaveragetimeseconds).toISOString().slice(11, 19);
			}

			//Calculate Finishers Delta from Average

			afirst = firsttime.split(':');
			firsttimeseconds = +afirst[0] * 60 * 60 + +afirst[1] * 60 + +afirst[2];
			asecond = secondtime.split(':');
			secondtimeseconds = +asecond[0] * 60 * 60 + +asecond[1] * 60 + +asecond[2];
			athird = thirdtime.split(':');
			thirdtimeseconds = +athird[0] * 60 * 60 + +athird[1] * 60 + +athird[2];
			afourth = fourthtime.split(':');
			fourthtimeseconds = +afourth[0] * 60 * 60 + +afourth[1] * 60 + +afourth[2];
			afifth = fifthtime.split(':');
			fifthtimeseconds = +afifth[0] * 60 * 60 + +afifth[1] * 60 + +afifth[2];
			ayou = finishtimeyou.split(':');
			yourtimeseconds = +ayou[0] * 60 * 60 + +ayou[1] * 60 + +ayou[2];

			firstdelta = (raceaveragetimeseconds / firsttimeseconds - 1000) / 10;
			seconddelta = (raceaveragetimeseconds / secondtimeseconds - 1000) / 10;
			thirddelta = (raceaveragetimeseconds / thirdtimeseconds - 1000) / 10;
			fourthdelta = (raceaveragetimeseconds / fourthtimeseconds - 1000) / 10;
			fifthdelta = (raceaveragetimeseconds / fifthtimeseconds - 1000) / 10;
			yourdelta = (raceaveragetimeseconds / yourtimeseconds - 1000) / 10;

			//Calculate finishers Time Points

			firsttimepoints = firstdelta * 6 + racebaseline;
			secondtimepoints = seconddelta * 6 + racebaseline;
			thirdtimepoints = thirddelta * 6 + racebaseline;
			fourthtimepoints = fourthdelta * 6 + racebaseline;
			fifthtimepoints = fifthdelta * 6 + racebaseline;
			youtimepoints = yourdelta * 6 + racebaseline;

			//Calculate finishers Total Points

			firsttotalpoints = firstpositionpoints * 0.4 + sof * 0.3 + firsttimepoints * 0.3;
			secondtotalpoints = secondpositionpoints * 0.4 + sof * 0.3 + secondtimepoints * 0.3;
			thirdtotalpoints = thirdpositionpoints * 0.4 + sof * 0.3 + thirdtimepoints * 0.3;
			fourthtotalpoints = fourthpositionpoints * 0.4 + sof * 0.3 + fourthtimepoints * 0.3;
			fifthtotalpoints = fifthpositionpoints * 0.4 + sof * 0.3 + fifthtimepoints * 0.3;
			youtotalpoints = youpositionpoints * 0.4 + sof * 0.3 + youtimepoints * 0.3;

			document.getElementById('positionpoints1').innerHTML =
				'1st: ' + firstpositionpoints.toFixed(2);
			document.getElementById('positionpoints2').innerHTML =
				'2nd: ' + secondpositionpoints.toFixed(2);
			document.getElementById('positionpoints3').innerHTML =
				'3rd: ' + thirdpositionpoints.toFixed(2);
			document.getElementById('positionpoints4').innerHTML =
				'4th: ' + fourthpositionpoints.toFixed(2);
			document.getElementById('positionpoints5').innerHTML =
				'5th: ' + fifthpositionpoints.toFixed(2);
			document.getElementById('positionpointsy').innerHTML = 'you: ' + youpositionpoints.toFixed(2);
			document.getElementById('sofpoints').innerHTML = sof.toFixed(2);
			document.getElementById('timepoints1').innerHTML = '1st: ' + firsttimepoints.toFixed(2);
			document.getElementById('timepoints2').innerHTML = '2nd: ' + secondtimepoints.toFixed(2);
			document.getElementById('timepoints3').innerHTML = '3rd: ' + thirdtimepoints.toFixed(2);
			document.getElementById('timepoints4').innerHTML = '4th: ' + fourthtimepoints.toFixed(2);
			document.getElementById('timepoints5').innerHTML = '5th: ' + fifthtimepoints.toFixed(2);
			document.getElementById('timepointsy').innerHTML = 'you: ' + youtimepoints.toFixed(2);

			document.getElementById('totalpoints1').innerHTML = '1st: ' + firsttotalpoints.toFixed(2);
			document.getElementById('totalpoints2').innerHTML = '2nd: ' + secondtotalpoints.toFixed(2);
			document.getElementById('totalpoints3').innerHTML = '3rd: ' + thirdtotalpoints.toFixed(2);
			document.getElementById('totalpoints4').innerHTML = '4th: ' + fourthtotalpoints.toFixed(2);
			document.getElementById('totalpoints5').innerHTML = '5th: ' + fifthtotalpoints.toFixed(2);
			document.getElementById('totalpointsy').innerHTML = 'you: ' + youtotalpoints.toFixed(2);

			document.getElementById('positionexplain').innerHTML =
				'Starting at ' +
				thisbase +
				' with a drop off of ' +
				thisdropoff +
				'. Based off of the race tier selected above.';
			document.getElementById('sofexplain').innerHTML =
				'Average of the top 5 PTO points of all the starters. All athletes get the same SOF score.';
			document.getElementById('timeexplain').innerHTML =
				'Finishers time is compared to the calculated average time of the races top finishers which is: ' +
				raceaveragetime +
				'. The number of finishers impacts how the average time is calculated.';
			document.getElementById('totalexplain').innerHTML =
				'40% of the Position Points, 30% of the Strength of Field Points and 30% of the Time Points.';
		};
	</script>
</body>
