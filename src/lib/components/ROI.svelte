<script lang="ts">


</script>
<body>
<div class="flex grid grid-cols-3 gap-4 p-4">
    <div class="col-span-3 mx-auto max-w-lg">
        <p class="text-center text-ao-pink dark:text-ao-orange text-3xl font-semibold p-4">
            Triathlete ROI Calculator
        </p>
        <p class="text-center p-2">
            Calculate your Return on Investment (ROI) to help plan or review your year in Triathlon.
        </p>
     
    </div>
</div>

<div class="flex grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto">
    <div class="col-span-1 mx-auto">
        <h2 class="text-2xl font-semibold text-center p-2">Race 1</h2>

        <h2 class="text-2xl font-semibold text-center p-2">Expenses</h2>

        <label class="label flex justify-end items-center">
            <span>Flights</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Flights" id="numberfinishers"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Accommodation</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Accommodation" id="numberfinishers"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Car Hire</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Car Hire" id="numberfinishers"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Other</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Other" id="numberfinishers"/>
        </label>

        <h2 class="text-2xl font-semibold text-center p-2">Income</h2>

        <label class="label flex justify-end items-center">
            <span>Prize Money</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Prize Money" id="numberfinishers"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Appearance Fees</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Appearance" id="numberfinishers"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Sponsor Bonus</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Sponsor Bonus" id="numberfinishers"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Other</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Other" id="numberfinishers"/>
        </label>




        <h2 class="text-2xl font-semibold text-center p-2">PTO Points</h2>

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


        <label class="label flex justify-end items-center">
            <span>Finishers</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Number of Finishers" id="numberfinishers"/>
        </label>
        

        <label class="label flex justify-end items-center">
            <span>Winners Time</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2"	type="time"	step="1" id="finisher1"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Second Place</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2"	type="time"	step="1" id="finisher2"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Third Place</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2"	type="time"	step="1" id="finisher3"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Fourth Place</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2"	type="time"	step="1" id="finisher4"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Fifth Place</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2"	type="time"	step="1" id="finisher5"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Your Time</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2"	type="time"	step="1" id="finisheryou"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Your Place:</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="6" id="finisherplace"/>
        </label>
    </div>

    
        
        <div class="col-span-1 mx-auto">
            <h2 class="text-2xl font-semibold text-center p-2">Race 2</h2>

            <h2 class="text-2xl font-semibold text-center p-2">Expenses</h2>

        <label class="label flex justify-end items-center">
            <span>Flights</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Flights" id="numberfinishers"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Accommodation</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Accommodation" id="numberfinishers"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Car Hire</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Car Hire" id="numberfinishers"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Other</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Other" id="numberfinishers"/>
        </label>

        <h2 class="text-2xl font-semibold text-center p-2">Income</h2>

        <label class="label flex justify-end items-center">
            <span>Prize Money</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Prize Money" id="numberfinishers"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Appearance Fees</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Appearance" id="numberfinishers"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Sponsor Bonus</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Sponsor Bonus" id="numberfinishers"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Other</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Other" id="numberfinishers"/>
        </label>




        <h2 class="text-2xl font-semibold text-center p-2">PTO Points</h2>
            <label class="label flex justify-end items-center">
                <span>Select Race Tier</span>
                <select id="tier1" class="select variant-form-material mx-2 w-52">
                    <option value="Diamond">Diamond</option>
                    <option value="Platinum">Platinum</option>
                    <option value="Gold">Gold</option>
                    <option value="Silver">Silver</option>
                    <option value="Bronze">Bronze</option>
                </select>
            </label>

            <label class="label flex justify-end items-center">
                <span>Enter Race SOF</span>
                <input class="input variant-form-material text-lg mx-2 w-52" type="number" placeholder="Enter Race SOF" id="start11"/>
            </label>



            <label class="label flex justify-end items-center">
                <span>Finishers</span>
                <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Number of Finishers" id="numberfinishers1"/>
            </label>
            

            <label class="label flex justify-end items-center">
                <span>Winners Time</span>
                <input class="input variant-form-material text-lg p-2 w-52 mx-2"	type="time"	step="1" id="finisher11"/>
            </label>

            <label class="label flex justify-end items-center">
                <span>Second Place</span>
                <input class="input variant-form-material text-lg p-2 w-52 mx-2"	type="time"	step="1" id="finisher21"/>
            </label>

            <label class="label flex justify-end items-center">
                <span>Third Place</span>
                <input class="input variant-form-material text-lg p-2 w-52 mx-2"	type="time"	step="1" id="finisher31"/>
            </label>

            <label class="label flex justify-end items-center">
                <span>Fourth Place</span>
                <input class="input variant-form-material text-lg p-2 w-52 mx-2"	type="time"	step="1" id="finisher41"/>
            </label>

            <label class="label flex justify-end items-center">
                <span>Fifth Place</span>
                <input class="input variant-form-material text-lg p-2 w-52 mx-2"	type="time"	step="1" id="finisher51"/>
            </label>

            <label class="label flex justify-end items-center">
                <span>Your Time</span>
                <input class="input variant-form-material text-lg p-2 w-52 mx-2"	type="time"	step="1" id="finisheryou1"/>
            </label>

            <label class="label flex justify-end items-center">
                <span>Your Place:</span>
                <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="6" id="finisherplace1"/>
            </label>
        </div>

        <div class="col-span-1 mx-auto">
            <h2 class="text-2xl font-semibold text-center p-2">Race 3</h2>

            <h2 class="text-2xl font-semibold text-center p-2">Expenses</h2>

        <label class="label flex justify-end items-center">
            <span>Flights</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Flights" id="numberfinishers"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Accommodation</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Accommodation" id="numberfinishers"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Car Hire</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Car Hire" id="numberfinishers"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Other</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Other" id="numberfinishers"/>
        </label>

        <h2 class="text-2xl font-semibold text-center p-2">Income</h2>

        <label class="label flex justify-end items-center">
            <span>Prize Money</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Prize Money" id="numberfinishers"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Appearance Fees</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Appearance" id="numberfinishers"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Sponsor Bonus</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Sponsor Bonus" id="numberfinishers"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Other</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Other" id="numberfinishers"/>
        </label>




        <h2 class="text-2xl font-semibold text-center p-2">PTO Points</h2>
            <label class="label flex justify-end items-center">
                <span>Select Race Tier</span>
                <select id="tier2" class="select variant-form-material mx-2 w-52">
                    <option value="Diamond">Diamond</option>
                    <option value="Platinum">Platinum</option>
                    <option value="Gold">Gold</option>
                    <option value="Silver">Silver</option>
                    <option value="Bronze">Bronze</option>
                </select>
            </label>

            <label class="label flex justify-end items-center">
                <span>Enter Race SOF</span>
                <input class="input variant-form-material text-lg mx-2 w-52" type="number" placeholder="Enter Race SOF" id="start12"/>
            </label>


            <label class="label flex justify-end items-center">
                <span>Finishers</span>
                <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Number of Finishers" id="numberfinishers2"/>
            </label>
            

            <label class="label flex justify-end items-center">
                <span>Winners Time</span>
                <input class="input variant-form-material text-lg p-2 w-52 mx-2"	type="time"	step="1" id="finisher12"/>
            </label>

            <label class="label flex justify-end items-center">
                <span>Second Place</span>
                <input class="input variant-form-material text-lg p-2 w-52 mx-2"	type="time"	step="1" id="finisher22"/>
            </label>

            <label class="label flex justify-end items-center">
                <span>Third Place</span>
                <input class="input variant-form-material text-lg p-2 w-52 mx-2"	type="time"	step="1" id="finisher32"/>
            </label>

            <label class="label flex justify-end items-center">
                <span>Fourth Place</span>
                <input class="input variant-form-material text-lg p-2 w-52 mx-2"	type="time"	step="1" id="finisher42"/>
            </label>

            <label class="label flex justify-end items-center">
                <span>Fifth Place</span>
                <input class="input variant-form-material text-lg p-2 w-52 mx-2"	type="time"	step="1" id="finisher52"/>
            </label>

            <label class="label flex justify-end items-center">
                <span>Your Time</span>
                <input class="input variant-form-material text-lg p-2 w-52 mx-2"	type="time"	step="1" id="finisheryou2"/>
            </label>

            <label class="label flex justify-end items-center">
                <span>Your Place:</span>
                <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="6" id="finisherplace2"/>
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
    <div class="col-span-1 mx-auto text-center justify-center" id="result4">
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


        <div class="mx-auto max-w-lg text-center p-4" id="result1">
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

        <div class="mx-auto max-w-lg text-center p-4" id="result2">
            <div class="tooltip">
                <h2 class="text-2xl font-semibold underline decoration-dotted">Strength of Field Points</h2>
                <span class="tooltiptext"
                    >How strong the field is based on top 5 ranked athletes starting the race.</span
                >
            </div>

            <p id="sofpoints" />
            <p id="sofexplain" />
        </div>

        <div class="mx-auto max-w-lg text-center p-4" id="result3">
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

    <div class="col-span-1 mx-auto text-center justify-center" id="result41">
        <div class="tooltip">
            <h2 class="text-2xl font-semibold">Total Points</h2>
            <span class="tooltiptext">Combination of Position, Strength of Field and Time.</span>
        </div>

        <p id="totalpoints11" />
        <p id="totalpoints21" />
        <p id="totalpoints31" />
        <p id="totalpoints41" />
        <p id="totalpoints51" />
        <p id="totalpointsy1" />
        <p id="totalexplain1" />


        <div class="mx-auto max-w-lg text-center p-4" id="result11">
            <div class="tooltip">
                <h2 class="text-2xl font-semibold underline decoration-dotted">Position Points</h2>
                <span class="tooltiptext">Points allocated for placing in a particular tiered race.</span>
            </div>

            <p id="positionpoints11" />
            <p id="positionpoints21" />
            <p id="positionpoints31" />
            <p id="positionpoints41" />
            <p id="positionpoints51" />
            <p id="positionpointsy1" />
            <p id="positionexplain1" />
        </div>

        <div class="mx-auto max-w-lg text-center p-4" id="result21">
            <div class="tooltip">
                <h2 class="text-2xl font-semibold underline decoration-dotted">Strength of Field Points</h2>
                <span class="tooltiptext"
                    >How strong the field is based on top 5 ranked athletes starting the race.</span
                >
            </div>

            <p id="sofpoints1" />
            <p id="sofexplain1" />
        </div>

        <div class="mx-auto max-w-lg text-center p-4" id="result31">
            <div class="tooltip">
                <h2 class="text-2xl font-semibold underline decoration-dotted">Time Points</h2>
                <span class="tooltiptext"
                    >Points allocated based on the calculated "average time", SOF and race tier. Number of
                    finishers also impacts this.</span
                >
            </div>

            <p id="timepoints11" />
            <p id="timepoints21" />
            <p id="timepoints31" />
            <p id="timepoints41" />
            <p id="timepoints51" />
            <p id="timepointsy1" />
            <p id="timeexplain1" />
        </div>

    </div>

    <div class="col-span-1 mx-auto text-center justify-center" id="result42">
        <div class="tooltip">
            <h2 class="text-2xl font-semibold">Total Points</h2>
            <span class="tooltiptext">Combination of Position, Strength of Field and Time.</span>
        </div>

        <p id="totalpoints12" />
        <p id="totalpoints22" />
        <p id="totalpoints32" />
        <p id="totalpoints42" />
        <p id="totalpoints52" />
        <p id="totalpointsy2" />
        <p id="totalexplain2" />


        <div class="mx-auto max-w-lg text-center p-4" id="result12">
            <div class="tooltip">
                <h2 class="text-2xl font-semibold underline decoration-dotted">Position Points</h2>
                <span class="tooltiptext">Points allocated for placing in a particular tiered race.</span>
            </div>

            <p id="positionpoints12" />
            <p id="positionpoints22" />
            <p id="positionpoints32" />
            <p id="positionpoints42" />
            <p id="positionpoints52" />
            <p id="positionpointsy2" />
            <p id="positionexplain2" />
        </div>

        <div class="mx-auto max-w-lg text-center p-4" id="result22">
            <div class="tooltip">
                <h2 class="text-2xl font-semibold underline decoration-dotted">Strength of Field Points</h2>
                <span class="tooltiptext"
                    >How strong the field is based on top 5 ranked athletes starting the race.</span
                >
            </div>

            <p id="sofpoints2" />
            <p id="sofexplain2" />
        </div>

        <div class="mx-auto max-w-lg text-center p-4" id="result32">
            <div class="tooltip">
                <h2 class="text-2xl font-semibold underline decoration-dotted">Time Points</h2>
                <span class="tooltiptext"
                    >Points allocated based on the calculated "average time", SOF and race tier. Number of
                    finishers also impacts this.</span
                >
            </div>

            <p id="timepoints12" />
            <p id="timepoints22" />
            <p id="timepoints32" />
            <p id="timepoints42" />
            <p id="timepoints52" />
            <p id="timepointsy2" />
            <p id="timeexplain2" />
        </div>

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




    document.getElementById('result11').style.visibility = 'hidden';
    document.getElementById('result21').style.visibility = 'hidden';
    document.getElementById('result31').style.visibility = 'hidden';
    document.getElementById('result41').style.visibility = 'hidden';
    var racetier1 = document.getElementById('tier1').value;
    var start11 = document.getElementById('start11').value;
    var numberfinishers1 = document.getElementById('numberfinishers1').value;
    var firsttime1 = document.getElementById('finisher11').value;
    var secondtime1 = document.getElementById('finisher21').value;
    var thirdtime1 = document.getElementById('finisher31').value;
    var fourthtime1 = document.getElementById('finisher41').value;
    var fifthtime1 = document.getElementById('finisher51').value;
    var finishtimeyou1 = document.getElementById('finisheryou1').value;
    var yourplace1 = document.getElementById('finisherplace1').value;
    var diamondbase1 = 100;
    var platinumbase1 = 95;
    var goldbase1 = 90;
    var silverbase1 = 80;
    var bronzebase1 = 70;
    var thisbase1;
    var diamonddropoff1 = 2;
    var platinumdropoff1 = 2;
    var golddropoff1 = 5;
    var silverdropoff1 = 8;
    var bronzedropoff1 = 11;
    var thisdropoff1;
    var sof1;
    var firstpositionpoints1;
    var secondpositionpoints1;
    var thirdpositionpoints1;
    var fourthpositionpoints1;
    var fifthpositionpoints1;
    var youpositionpoints1;
    var firsttimepoints1;
    var secondtimepoints1;
    var thirdtimepoints1;
    var fourthtimepoints1;
    var fifthtimepoints1;
    var youtimepoints1;
    var firsttotalpoints1;
    var secondtotalpoints1;
    var thirdtotalpoints1;
    var fourthtotalpoints1;
    var fifthtotalpoints1;
    var youtotalpoints1;
    var racebaseline1;
    var raceaveragetime1;
    var raceaveragetimeseconds1;
    var firsttimeseconds1;
    var secondtimeseconds1;
    var thirdtimeseconds1;
    var fourthtimeseconds1;
    var fifthtimeseconds1;
    var yourtimeseconds1;
    var afirst1;
    var asecond1;
    var athird1;
    var afourth1;
    var afifth1;
    var ayou1;
    var firstdelta1;
    var seconddelta1;
    var thirddelta1;
    var fourthdelta1;
    var fifthdelta1;
    var yourdelta1;






    document.getElementById('result12').style.visibility = 'hidden';
    document.getElementById('result22').style.visibility = 'hidden';
    document.getElementById('result32').style.visibility = 'hidden';
    document.getElementById('result42').style.visibility = 'hidden';
    var racetier2 = document.getElementById('tier2').value;
    var start12 = document.getElementById('start12').value;
    var numberfinishers2 = document.getElementById('numberfinishers2').value;
    var firsttime2 = document.getElementById('finisher12').value;
    var secondtime2 = document.getElementById('finisher22').value;
    var thirdtime2 = document.getElementById('finisher32').value;
    var fourthtime2 = document.getElementById('finisher42').value;
    var fifthtime2 = document.getElementById('finisher52').value;
    var finishtimeyou2 = document.getElementById('finisheryou2').value;
    var yourplace2 = document.getElementById('finisherplace2').value;
    var diamondbase2 = 100;
    var platinumbase2 = 95;
    var goldbase2 = 90;
    var silverbase2 = 80;
    var bronzebase2 = 70;
    var thisbase2;
    var diamonddropoff2 = 2;
    var platinumdropoff2 = 2;
    var golddropoff2 = 5;
    var silverdropoff2 = 8;
    var bronzedropoff2 = 11;
    var thisdropoff2;
    var sof2;
    var firstpositionpoints2;
    var secondpositionpoints2;
    var thirdpositionpoints2;
    var fourthpositionpoints2;
    var fifthpositionpoints2;
    var youpositionpoints2;
    var firsttimepoints2;
    var secondtimepoints2;
    var thirdtimepoints2;
    var fourthtimepoints2;
    var fifthtimepoints2;
    var youtimepoints2;
    var firsttotalpoints2;
    var secondtotalpoints2;
    var thirdtotalpoints2;
    var fourthtotalpoints2;
    var fifthtotalpoints2;
    var youtotalpoints2;
    var racebaseline2;
    var raceaveragetime2;
    var raceaveragetimeseconds2;
    var firsttimeseconds2;
    var secondtimeseconds2;
    var thirdtimeseconds2;
    var fourthtimeseconds2;
    var fifthtimeseconds2;
    var yourtimeseconds2;
    var afirst2;
    var asecond2;
    var athird2;
    var afourth2;
    var afifth2;
    var ayou2;
    var firstdelta2;
    var seconddelta2;
    var thirddelta2;
    var fourthdelta2;
    var fifthdelta2;
    var yourdelta2;












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








        document.getElementById('result11').style.visibility = 'visible';
        document.getElementById('result21').style.visibility = 'visible';
        document.getElementById('result31').style.visibility = 'visible';
        document.getElementById('result41').style.visibility = 'visible';
        racetier1 = document.getElementById('tier1').value;
        start11 = document.getElementById('start11').value;
        numberfinishers1 = document.getElementById('numberfinishers1').value;
        firsttime1 = document.getElementById('finisher11').value;
        secondtime1 = document.getElementById('finisher21').value;
        thirdtime1 = document.getElementById('finisher31').value;
        fourthtime1 = document.getElementById('finisher41').value;
        fifthtime1 = document.getElementById('finisher51').value;
        finishtimeyou1 = document.getElementById('finisheryou1').value;
        yourplace1 = document.getElementById('finisherplace1').value;

        //Calculate Position Points

        if (racetier1 == 'Diamond') {
            thisbase1 = 100;
            thisdropoff1 = 2;
        } else if (racetier1 == 'Platinum') {
            thisbase1 = 95;
            thisdropoff1 = 2;
        } else if (racetier1 == 'Gold') {
            thisbase1 = 90;
            thisdropoff1 = 5;
        } else if (racetier1 == 'Silver') {
            thisbase1 = 80;
            thisdropoff1 = 8;
        } else {
            thisbase1 = 70;
            thisdropoff1 = 11;
        }

        racetier1 = document.getElementById('tier1').value;

        firstpositionpoints1 = thisbase1 * Math.pow(1 - thisdropoff1 / 100, 1 - 1);
        secondpositionpoints1 = thisbase1 * Math.pow(1 - thisdropoff1 / 100, 2 - 1);
        thirdpositionpoints1 = thisbase1 * Math.pow(1 - thisdropoff1 / 100, 3 - 1);
        fourthpositionpoints1 = thisbase1 * Math.pow(1 - thisdropoff1 / 100, 4 - 1);
        fifthpositionpoints1 = thisbase1 * Math.pow(1 - thisdropoff1 / 100, 5 - 1);
        youpositionpoints1 = thisbase1 * Math.pow(1 - thisdropoff1 / 100, yourplace1 - 1);

        //SOF Points
        sof1 = +start11;
        //sof = (+start1 + +start2 + +start3 + +start4 + +start5)/5;

        //Calculate Baseline to go into Time Points

        racebaseline1 = (thisbase1 + sof1) / 2;

        //Calculate Race Average Time to go into Time Points
        if (numberfinishers1 <= 4) {
            afirst1 = firsttime1.split(':');
            firsttimeseconds1 = +afirst1[0] * 60 * 60 + +afirst1[1] * 60 + +afirst1[2];
            raceaveragetimeseconds1 = (firsttimeseconds1 / 1) * 1000;
            raceaveragetime1 = firsttime1;
        } else if (numberfinishers1 < 8) {
            afirst1 = firsttime1.split(':');
            firsttimeseconds1 = +afirst1[0] * 60 * 60 + +afirst1[1] * 60 + +afirst1[2];
            asecond1 = secondtime1.split(':');
            secondtimeseconds1 = +asecond1[0] * 60 * 60 + +asecond1[1] * 60 + +asecond1[2];
            raceaveragetimeseconds1 = ((firsttimeseconds1 + secondtimeseconds1) / 2) * 1000;
            raceaveragetime1 = new Date(raceaveragetimeseconds1).toISOString().slice(11, 19);
        } else if (numberfinishers1 < 12) {
            afirst1 = firsttime1.split(':');
            firsttimeseconds1 = +afirst1[0] * 60 * 60 + +afirst1[1] * 60 + +afirst1[2];
            asecond1 = secondtime1.split(':');
            secondtimeseconds1 = +asecond1[0] * 60 * 60 + +asecond1[1] * 60 + +asecond1[2];
            athird1 = thirdtime1.split(':');
            thirdtimeseconds1 = +athird1[0] * 60 * 60 + +athird1[1] * 60 + +athird1[2];
            raceaveragetimeseconds1 =
                ((firsttimeseconds1 + secondtimeseconds1 + thirdtimeseconds1) / 3) * 1000;
            raceaveragetime1 = new Date(raceaveragetimeseconds1).toISOString().slice(11, 19);
        } else if (numberfinishers1 < 16) {
            afirst1 = firsttime1.split(':');
            firsttimeseconds1 = +afirst1[0] * 60 * 60 + +afirst1[1] * 60 + +afirst1[2];
            asecond1 = secondtime1.split(':');
            secondtimeseconds1 = +asecond1[0] * 60 * 60 + +asecond1[1] * 60 + +asecond1[2];
            athird1 = thirdtime1.split(':');
            thirdtimeseconds1 = +athird1[0] * 60 * 60 + +athird1[1] * 60 + +athird1[2];
            afourth1 = fourthtime1.split(':');
            fourthtimeseconds1 = +afourth1[0] * 60 * 60 + +afourth1[1] * 60 + +afourth1[2];
            raceaveragetimeseconds1 =
                ((firsttimeseconds1 + secondtimeseconds1 + thirdtimeseconds1 + fourthtimeseconds1) / 4) *
                1000;
            raceaveragetime1 = new Date(raceaveragetimeseconds1).toISOString().slice(11, 19);
        } else {
            afirst1 = firsttime1.split(':');
            firsttimeseconds1 = +afirst1[0] * 60 * 60 + +afirst1[1] * 60 + +afirst1[2];
            asecond1 = secondtime1.split(':');
            secondtimeseconds1 = +asecond1[0] * 60 * 60 + +asecond1[1] * 60 + +asecond1[2];
            athird1 = thirdtime1.split(':');
            thirdtimeseconds1 = +athird1[0] * 60 * 60 + +athird1[1] * 60 + +athird1[2];
            afourth1 = fourthtime1.split(':');
            fourthtimeseconds1 = +afourth1[0] * 60 * 60 + +afourth1[1] * 60 + +afourth1[2];
            afifth1 = fifthtime1.split(':');
            fifthtimeseconds1 = +afifth1[0] * 60 * 60 + +afifth1[1] * 60 + +afifth1[2];
            raceaveragetimeseconds1 =
                ((firsttimeseconds1 +
                    secondtimeseconds1 +
                    thirdtimeseconds1 +
                    fourthtimeseconds1 +
                    fifthtimeseconds1) /
                    5) *
                1000;
            raceaveragetime1 = new Date(raceaveragetimeseconds1).toISOString().slice(11, 19);
        }

        //Calculate Finishers Delta from Average

        afirst1 = firsttime1.split(':');
        firsttimeseconds1 = +afirst1[0] * 60 * 60 + +afirst1[1] * 60 + +afirst1[2];
        asecond1 = secondtime1.split(':');
        secondtimeseconds1 = +asecond1[0] * 60 * 60 + +asecond1[1] * 60 + +asecond1[2];
        athird1 = thirdtime1.split(':');
        thirdtimeseconds1 = +athird1[0] * 60 * 60 + +athird1[1] * 60 + +athird1[2];
        afourth1 = fourthtime1.split(':');
        fourthtimeseconds1 = +afourth1[0] * 60 * 60 + +afourth1[1] * 60 + +afourth1[2];
        afifth1 = fifthtime1.split(':');
        fifthtimeseconds1 = +afifth1[0] * 60 * 60 + +afifth1[1] * 60 + +afifth1[2];
        ayou1 = finishtimeyou1.split(':');
        yourtimeseconds1 = +ayou1[0] * 60 * 60 + +ayou1[1] * 60 + +ayou1[2];

        firstdelta1 = (raceaveragetimeseconds1 / firsttimeseconds1 - 1000) / 10;
        seconddelta1 = (raceaveragetimeseconds1 / secondtimeseconds1 - 1000) / 10;
        thirddelta1 = (raceaveragetimeseconds1 / thirdtimeseconds1 - 1000) / 10;
        fourthdelta1 = (raceaveragetimeseconds1 / fourthtimeseconds1 - 1000) / 10;
        fifthdelta1 = (raceaveragetimeseconds1 / fifthtimeseconds1 - 1000) / 10;
        yourdelta1 = (raceaveragetimeseconds1 / yourtimeseconds1 - 1000) / 10;

        //Calculate finishers Time Points

        firsttimepoints1 = firstdelta1 * 6 + racebaseline1;
        secondtimepoints1 = seconddelta1 * 6 + racebaseline1;
        thirdtimepoints1 = thirddelta1 * 6 + racebaseline1;
        fourthtimepoints1 = fourthdelta1 * 6 + racebaseline1;
        fifthtimepoints1 = fifthdelta1 * 6 + racebaseline1;
        youtimepoints1 = yourdelta1 * 6 + racebaseline1;

        //Calculate finishers Total Points

        firsttotalpoints1 = firstpositionpoints1 * 0.4 + sof1 * 0.3 + firsttimepoints1 * 0.3;
        secondtotalpoints1 = secondpositionpoints1 * 0.4 + sof1 * 0.3 + secondtimepoints1 * 0.3;
        thirdtotalpoints1 = thirdpositionpoints1 * 0.4 + sof1 * 0.3 + thirdtimepoints1 * 0.3;
        fourthtotalpoints1 = fourthpositionpoints1 * 0.4 + sof1 * 0.3 + fourthtimepoints1 * 0.3;
        fifthtotalpoints1 = fifthpositionpoints1 * 0.4 + sof1 * 0.3 + fifthtimepoints1 * 0.3;
        youtotalpoints1 = youpositionpoints1 * 0.4 + sof1 * 0.3 + youtimepoints1 * 0.3;

        document.getElementById('positionpoints11').innerHTML =
            '1st: ' + firstpositionpoints1.toFixed(2);
        document.getElementById('positionpoints21').innerHTML =
            '2nd: ' + secondpositionpoints1.toFixed(2);
        document.getElementById('positionpoints31').innerHTML =
            '3rd: ' + thirdpositionpoints1.toFixed(2);
        document.getElementById('positionpoints41').innerHTML =
            '4th: ' + fourthpositionpoints1.toFixed(2);
        document.getElementById('positionpoints51').innerHTML =
            '5th: ' + fifthpositionpoints1.toFixed(2);
        document.getElementById('positionpointsy1').innerHTML = 'you: ' + youpositionpoints1.toFixed(2);
        document.getElementById('sofpoints1').innerHTML = sof1.toFixed(2);
        document.getElementById('timepoints11').innerHTML = '1st: ' + firsttimepoints1.toFixed(2);
        document.getElementById('timepoints21').innerHTML = '2nd: ' + secondtimepoints1.toFixed(2);
        document.getElementById('timepoints31').innerHTML = '3rd: ' + thirdtimepoints1.toFixed(2);
        document.getElementById('timepoints41').innerHTML = '4th: ' + fourthtimepoints1.toFixed(2);
        document.getElementById('timepoints51').innerHTML = '5th: ' + fifthtimepoints1.toFixed(2);
        document.getElementById('timepointsy1').innerHTML = 'you: ' + youtimepoints1.toFixed(2);

        document.getElementById('totalpoints11').innerHTML = '1st: ' + firsttotalpoints1.toFixed(2);
        document.getElementById('totalpoints21').innerHTML = '2nd: ' + secondtotalpoints1.toFixed(2);
        document.getElementById('totalpoints31').innerHTML = '3rd: ' + thirdtotalpoints1.toFixed(2);
        document.getElementById('totalpoints41').innerHTML = '4th: ' + fourthtotalpoints1.toFixed(2);
        document.getElementById('totalpoints51').innerHTML = '5th: ' + fifthtotalpoints1.toFixed(2);
        document.getElementById('totalpointsy1').innerHTML = 'you: ' + youtotalpoints1.toFixed(2);

        document.getElementById('positionexplain1').innerHTML =
            'Starting at ' +
            thisbase1 +
            ' with a drop off of ' +
            thisdropoff1 +
            '. Based off of the race tier selected above.';
        document.getElementById('sofexplain1').innerHTML =
            'Average of the top 5 PTO points of all the starters. All athletes get the same SOF score.';
        document.getElementById('timeexplain1').innerHTML =
            'Finishers time is compared to the calculated average time of the races top finishers which is: ' +
            raceaveragetime1 +
            '. The number of finishers impacts how the average time is calculated.';
        document.getElementById('totalexplain1').innerHTML =
            '40% of the Position Points, 30% of the Strength of Field Points and 30% of the Time Points.';









//Start below here by adding 2 to each variable



            document.getElementById('result12').style.visibility = 'visible';
        document.getElementById('result22').style.visibility = 'visible';
        document.getElementById('result32').style.visibility = 'visible';
        document.getElementById('result42').style.visibility = 'visible';
        racetier2 = document.getElementById('tier2').value;
        start12 = document.getElementById('start12').value;
        numberfinishers2 = document.getElementById('numberfinishers2').value;
        firsttime2 = document.getElementById('finisher12').value;
        secondtime2 = document.getElementById('finisher22').value;
        thirdtime2 = document.getElementById('finisher32').value;
        fourthtime2 = document.getElementById('finisher42').value;
        fifthtime2 = document.getElementById('finisher52').value;
        finishtimeyou2 = document.getElementById('finisheryou2').value;
        yourplace2 = document.getElementById('finisherplace2').value;

        //Calculate Position Points

        if (racetier2 == 'Diamond') {
            thisbase2 = 100;
            thisdropoff2 = 2;
        } else if (racetier2 == 'Platinum') {
            thisbase2 = 95;
            thisdropoff2 = 2;
        } else if (racetier2 == 'Gold') {
            thisbase2 = 90;
            thisdropoff2 = 5;
        } else if (racetier2 == 'Silver') {
            thisbase2 = 80;
            thisdropoff2 = 8;
        } else {
            thisbase2 = 70;
            thisdropoff2 = 11;
        }

        racetier2 = document.getElementById('tier2').value;

        firstpositionpoints2 = thisbase2 * Math.pow(1 - thisdropoff2 / 100, 1 - 1);
        secondpositionpoints2 = thisbase2 * Math.pow(1 - thisdropoff2 / 100, 2 - 1);
        thirdpositionpoints2 = thisbase2 * Math.pow(1 - thisdropoff2 / 100, 3 - 1);
        fourthpositionpoints2 = thisbase2 * Math.pow(1 - thisdropoff2 / 100, 4 - 1);
        fifthpositionpoints2 = thisbase2 * Math.pow(1 - thisdropoff2 / 100, 5 - 1);
        youpositionpoints2 = thisbase2 * Math.pow(1 - thisdropoff2 / 100, yourplace2 - 1);

        //SOF Points
        sof2 = +start12;
        //sof = (+start1 + +start2 + +start3 + +start4 + +start5)/5;

        //Calculate Baseline to go into Time Points

        racebaseline2 = (thisbase2 + sof2) / 2;

        //Calculate Race Average Time to go into Time Points
        if (numberfinishers2 <= 4) {
            afirst2 = firsttime2.split(':');
            firsttimeseconds2 = +afirst2[0] * 60 * 60 + +afirst2[1] * 60 + +afirst2[2];
            raceaveragetimeseconds2 = (firsttimeseconds2 / 1) * 1000;
            raceaveragetime2 = firsttime2;
        } else if (numberfinishers2 < 8) {
            afirst2 = firsttime2.split(':');
            firsttimeseconds2 = +afirst2[0] * 60 * 60 + +afirst2[1] * 60 + +afirst2[2];
            asecond2 = secondtime2.split(':');
            secondtimeseconds2 = +asecond2[0] * 60 * 60 + +asecond2[1] * 60 + +asecond2[2];
            raceaveragetimeseconds2 = ((firsttimeseconds2 + secondtimeseconds2) / 2) * 1000;
            raceaveragetime2 = new Date(raceaveragetimeseconds2).toISOString().slice(11, 19);
        } else if (numberfinishers2 < 12) {
            afirst2 = firsttime2.split(':');
            firsttimeseconds2 = +afirst2[0] * 60 * 60 + +afirst2[1] * 60 + +afirst2[2];
            asecond2 = secondtime2.split(':');
            secondtimeseconds2 = +asecond2[0] * 60 * 60 + +asecond2[1] * 60 + +asecond2[2];
            athird2 = thirdtime2.split(':');
            thirdtimeseconds2 = +athird2[0] * 60 * 60 + +athird2[1] * 60 + +athird2[2];
            raceaveragetimeseconds2 =
                ((firsttimeseconds2 + secondtimeseconds2 + thirdtimeseconds2) / 3) * 1000;
            raceaveragetime2 = new Date(raceaveragetimeseconds2).toISOString().slice(11, 19);
        } else if (numberfinishers2 < 16) {
            afirst2 = firsttime2.split(':');
            firsttimeseconds2 = +afirst2[0] * 60 * 60 + +afirst2[1] * 60 + +afirst2[2];
            asecond2 = secondtime2.split(':');
            secondtimeseconds2 = +asecond2[0] * 60 * 60 + +asecond2[1] * 60 + +asecond2[2];
            athird2 = thirdtime2.split(':');
            thirdtimeseconds2 = +athird2[0] * 60 * 60 + +athird2[1] * 60 + +athird2[2];
            afourth2 = fourthtime2.split(':');
            fourthtimeseconds2 = +afourth2[0] * 60 * 60 + +afourth2[1] * 60 + +afourth2[2];
            raceaveragetimeseconds2 =
                ((firsttimeseconds2 + secondtimeseconds2 + thirdtimeseconds2 + fourthtimeseconds2) / 4) *
                1000;
            raceaveragetime2 = new Date(raceaveragetimeseconds2).toISOString().slice(11, 19);
        } else {
            afirst2 = firsttime2.split(':');
            firsttimeseconds2 = +afirst2[0] * 60 * 60 + +afirst2[1] * 60 + +afirst2[2];
            asecond2 = secondtime2.split(':');
            secondtimeseconds2 = +asecond2[0] * 60 * 60 + +asecond2[1] * 60 + +asecond2[2];
            athird2 = thirdtime2.split(':');
            thirdtimeseconds2 = +athird2[0] * 60 * 60 + +athird2[1] * 60 + +athird2[2];
            afourth2 = fourthtime2.split(':');
            fourthtimeseconds2 = +afourth2[0] * 60 * 60 + +afourth2[1] * 60 + +afourth2[2];
            afifth2 = fifthtime2.split(':');
            fifthtimeseconds2 = +afifth2[0] * 60 * 60 + +afifth2[1] * 60 + +afifth2[2];
            raceaveragetimeseconds2 =
                ((firsttimeseconds2 +
                    secondtimeseconds2 +
                    thirdtimeseconds2 +
                    fourthtimeseconds2 +
                    fifthtimeseconds2) /
                    5) *
                1000;
            raceaveragetime2 = new Date(raceaveragetimeseconds2).toISOString().slice(11, 19);
        }

        //Calculate Finishers Delta from Average

        afirst2 = firsttime2.split(':');
        firsttimeseconds2 = +afirst2[0] * 60 * 60 + +afirst2[1] * 60 + +afirst2[2];
        asecond2 = secondtime2.split(':');
        secondtimeseconds2 = +asecond2[0] * 60 * 60 + +asecond2[1] * 60 + +asecond2[2];
        athird2 = thirdtime2.split(':');
        thirdtimeseconds2 = +athird2[0] * 60 * 60 + +athird2[1] * 60 + +athird2[2];
        afourth2 = fourthtime2.split(':');
        fourthtimeseconds2 = +afourth2[0] * 60 * 60 + +afourth2[1] * 60 + +afourth2[2];
        afifth2 = fifthtime2.split(':');
        fifthtimeseconds2 = +afifth2[0] * 60 * 60 + +afifth2[1] * 60 + +afifth2[2];
        ayou2 = finishtimeyou2.split(':');
        yourtimeseconds2 = +ayou2[0] * 60 * 60 + +ayou2[1] * 60 + +ayou2[2];

        firstdelta2 = (raceaveragetimeseconds2 / firsttimeseconds2 - 1000) / 10;
        seconddelta2 = (raceaveragetimeseconds2 / secondtimeseconds2 - 1000) / 10;
        thirddelta2 = (raceaveragetimeseconds2 / thirdtimeseconds2 - 1000) / 10;
        fourthdelta2 = (raceaveragetimeseconds2 / fourthtimeseconds2 - 1000) / 10;
        fifthdelta2 = (raceaveragetimeseconds2 / fifthtimeseconds2 - 1000) / 10;
        yourdelta2 = (raceaveragetimeseconds2 / yourtimeseconds2 - 1000) / 10;

        //Calculate finishers Time Points

        firsttimepoints2 = firstdelta2 * 6 + racebaseline2;
        secondtimepoints2 = seconddelta2 * 6 + racebaseline2;
        thirdtimepoints2 = thirddelta2 * 6 + racebaseline2;
        fourthtimepoints2 = fourthdelta2 * 6 + racebaseline2;
        fifthtimepoints2 = fifthdelta2 * 6 + racebaseline2;
        youtimepoints2 = yourdelta2 * 6 + racebaseline2;

        //Calculate finishers Total Points

        firsttotalpoints2 = firstpositionpoints2 * 0.4 + sof2 * 0.3 + firsttimepoints2 * 0.3;
        secondtotalpoints2 = secondpositionpoints2 * 0.4 + sof2 * 0.3 + secondtimepoints2 * 0.3;
        thirdtotalpoints2 = thirdpositionpoints2 * 0.4 + sof2 * 0.3 + thirdtimepoints2 * 0.3;
        fourthtotalpoints2 = fourthpositionpoints2 * 0.4 + sof2 * 0.3 + fourthtimepoints2 * 0.3;
        fifthtotalpoints2 = fifthpositionpoints2 * 0.4 + sof2 * 0.3 + fifthtimepoints2 * 0.3;
        youtotalpoints2 = youpositionpoints2 * 0.4 + sof2 * 0.3 + youtimepoints2 * 0.3;

        document.getElementById('positionpoints12').innerHTML =
            '1st: ' + firstpositionpoints2.toFixed(2);
        document.getElementById('positionpoints22').innerHTML =
            '2nd: ' + secondpositionpoints2.toFixed(2);
        document.getElementById('positionpoints32').innerHTML =
            '3rd: ' + thirdpositionpoints2.toFixed(2);
        document.getElementById('positionpoints42').innerHTML =
            '4th: ' + fourthpositionpoints2.toFixed(2);
        document.getElementById('positionpoints52').innerHTML =
            '5th: ' + fifthpositionpoints2.toFixed(2);
        document.getElementById('positionpointsy2').innerHTML = 'you: ' + youpositionpoints2.toFixed(2);
        document.getElementById('sofpoints2').innerHTML = sof2.toFixed(2);
        document.getElementById('timepoints12').innerHTML = '1st: ' + firsttimepoints2.toFixed(2);
        document.getElementById('timepoints22').innerHTML = '2nd: ' + secondtimepoints2.toFixed(2);
        document.getElementById('timepoints32').innerHTML = '3rd: ' + thirdtimepoints2.toFixed(2);
        document.getElementById('timepoints42').innerHTML = '4th: ' + fourthtimepoints2.toFixed(2);
        document.getElementById('timepoints52').innerHTML = '5th: ' + fifthtimepoints2.toFixed(2);
        document.getElementById('timepointsy2').innerHTML = 'you: ' + youtimepoints2.toFixed(2);

        document.getElementById('totalpoints12').innerHTML = '1st: ' + firsttotalpoints2.toFixed(2);
        document.getElementById('totalpoints22').innerHTML = '2nd: ' + secondtotalpoints2.toFixed(2);
        document.getElementById('totalpoints32').innerHTML = '3rd: ' + thirdtotalpoints2.toFixed(2);
        document.getElementById('totalpoints42').innerHTML = '4th: ' + fourthtotalpoints2.toFixed(2);
        document.getElementById('totalpoints52').innerHTML = '5th: ' + fifthtotalpoints2.toFixed(2);
        document.getElementById('totalpointsy2').innerHTML = 'you: ' + youtotalpoints2.toFixed(2);

        document.getElementById('positionexplain2').innerHTML =
            'Starting at ' +
            thisbase2 +
            ' with a drop off of ' +
            thisdropoff2 +
            '. Based off of the race tier selected above.';
        document.getElementById('sofexplain2').innerHTML =
            'Average of the top 5 PTO points of all the starters. All athletes get the same SOF score.';
        document.getElementById('timeexplain2').innerHTML =
            'Finishers time is compared to the calculated average time of the races top finishers which is: ' +
            raceaveragetime2 +
            '. The number of finishers impacts how the average time is calculated.';
        document.getElementById('totalexplain2').innerHTML =
            '40% of the Position Points, 30% of the Strength of Field Points and 30% of the Time Points.';









    };
</script>
</body>
