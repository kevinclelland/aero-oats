<script lang="ts">


</script>
<body>
<div class="flex grid grid-cols-3 gap-4 p-4">
    <div class="col-span-3 mx-auto max-w-2xl">
        <p class="text-center text-ao-pink dark:text-ao-orange text-5xl font-semibold p-4">
            📈 Race ROI Calculator
        </p>
        <p class="text-center text-lg p-2">
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
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Flights" id="flights"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Accommodation</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Accommodation" id="accommodation"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Car Hire</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Car Hire" id="carhire"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Other</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Other" id="otherexpenses"/>
        </label>

        <h2 class="text-2xl font-semibold text-center p-2">Income</h2>

        <label class="label flex justify-end items-center">
            <span>Prize Money</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Prize Money" id="prize"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Appearance Fees</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Appearance" id="appearance"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Sponsor Bonus</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Sponsor Bonus" id="sponsor"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Other</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Other" id="otherincome"/>
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
            <span>Top 5 avg race time</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2"	type="time"	step="1" id="finisher1"/>
        </label>


        <label class="label flex justify-end items-center">
            <span>Your Time</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2"	type="time"	step="1" id="finisheryou"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Your Placing:</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="6" id="finisherplace"/>
        </label>
    </div>

    
        
        <div class="col-span-1 mx-auto">
            <h2 class="text-2xl font-semibold text-center p-2">Race 2</h2>

            <h2 class="text-2xl font-semibold text-center p-2">Expenses</h2>

        <label class="label flex justify-end items-center">
            <span>Flights</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Flights" id="flights1"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Accommodation</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Accommodation" id="accommodation1"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Car Hire</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Car Hire" id="carhire1"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Other</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Other" id="otherexpenses1"/>
        </label>

        <h2 class="text-2xl font-semibold text-center p-2">Income</h2>

        <label class="label flex justify-end items-center">
            <span>Prize Money</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Prize Money" id="prize1"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Appearance Fees</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Appearance" id="appearance1"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Sponsor Bonus</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Sponsor Bonus" id="sponsor1"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Other</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Other" id="otherincome1"/>
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
                <span>Top 5 avg race time</span>
                <input class="input variant-form-material text-lg p-2 w-52 mx-2"	type="time"	step="1" id="finisher11"/>
            </label>


            <label class="label flex justify-end items-center">
                <span>Your Time</span>
                <input class="input variant-form-material text-lg p-2 w-52 mx-2"	type="time"	step="1" id="finisheryou1"/>
            </label>

            <label class="label flex justify-end items-center">
                <span>Your Placing:</span>
                <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="6" id="finisherplace1"/>
            </label>
        </div>

        <div class="col-span-1 mx-auto">
            <h2 class="text-2xl font-semibold text-center p-2">Race 3</h2>

            <h2 class="text-2xl font-semibold text-center p-2">Expenses</h2>

        <label class="label flex justify-end items-center">
            <span>Flights</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Flights" id="flights2"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Accommodation</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Accommodation" id="accommodation2"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Car Hire</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Car Hire" id="carhire2"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Other</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Other" id="otherexpenses2"/>
        </label>

        <h2 class="text-2xl font-semibold text-center p-2">Income</h2>

        <label class="label flex justify-end items-center">
            <span>Prize Money</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Prize Money" id="prize2"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Appearance Fees</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Appearance" id="appearance2"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Sponsor Bonus</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Sponsor Bonus" id="sponsor2"/>
        </label>

        <label class="label flex justify-end items-center">
            <span>Other</span>
            <input class="input variant-form-material text-lg p-2 w-52 mx-2" type="number" placeholder="Other" id="otherincome2"/>
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
                <span>Top 5 avg race Time</span>
                <input class="input variant-form-material text-lg p-2 w-52 mx-2"	type="time"	step="1" id="finisher12"/>
            </label>

            <label class="label flex justify-end items-center">
                <span>Your Time</span>
                <input class="input variant-form-material text-lg p-2 w-52 mx-2"	type="time"	step="1" id="finisheryou2"/>
            </label>

            <label class="label flex justify-end items-center">
                <span>Your Placing:</span>
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

<div class="flex grid grid-cols-3 gap-4 p-4 max-w-7xl mx-auto">
    <div class="col-span-1 mx-auto text-center justify-center" id="result4">
        
        <div>
            <h2 class="text-2xl font-semibold">Race 1 Results</h2>
            
        </div>

       
        
        <div>
            <h2 class="text-2xl font-semibold">ROI</h2>
            
        </div>

        <p id="roi" class="text-xl" />
        
        
        
        
        <div>
            <h2 class="text-2xl font-semibold">PTO Points</h2>
            
        </div>

        <p id="totalpointsy" class="text-xl" />
        
       
    

    </div>

    <div class="col-span-1 mx-auto text-center justify-center" id="result41">

        <div>
            <h2 class="text-2xl font-semibold">Race 2 Results</h2>
            
        </div>


        
        <div>
            <h2 class="text-2xl font-semibold">ROI</h2>
            
        </div>

        <p id="roi1" class="text-xl" />


        <div>
            <h2 class="text-2xl font-semibold">PTO Points</h2>
            
        </div>


        <p id="totalpointsy1" class="text-xl" />
       


    </div>

    <div class="col-span-1 mx-auto text-center justify-center" id="result42">

        <div>
            <h2 class="text-2xl font-semibold">Race 3 Results</h2>
            
        </div>

        
        <div>
            <h2 class="text-2xl font-semibold">ROI</h2>
            
        </div>

        <p id="roi2" class="text-xl" />

        <div>
            <h2 class="text-2xl font-semibold">PTO Points</h2>
           
        </div>

        <p id="totalpointsy2" class="text-xl" />
     
    </div>
    

</div>



<script>

//variables for Race 1
    document.getElementById('result4').style.visibility = 'hidden';
    var racetier = document.getElementById('tier').value;
    var start1 = document.getElementById('start1').value;
    var firsttime = document.getElementById('finisher1').value;
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
    var youpositionpoints;
    var youtimepoints;
    var youtotalpoints;
    var racebaseline;
    var raceaveragetime;
    var raceaveragetimeseconds;
    var firsttimeseconds;
    var yourtimeseconds;
    var afirst;
    var ayou;
    var yourdelta;

    var flights = document.getElementById('flights').value;
    var accommodation = document.getElementById('accommodation').value;
    var carhire = document.getElementById('carhire').value;
    var otherexpenses = document.getElementById('otherexpenses').value;
    var prize = document.getElementById('prize').value;
    var appearance = document.getElementById('appearance').value;
    var sponsor = document.getElementById('sponsor').value;
    var otherincome = document.getElementById('otherincome').value;
    var totalincome;
    var totalexpenses;
    var roi;



//variables for Race 2
    document.getElementById('result41').style.visibility = 'hidden';
    var racetier1 = document.getElementById('tier1').value;
    var start11 = document.getElementById('start11').value;
    var firsttime1 = document.getElementById('finisher11').value;
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
    var youpositionpoints1;
    var youtimepoints1;
    var youtotalpoints1;
    var racebaseline1;
    var raceaveragetime1;
    var raceaveragetimeseconds1;
    var firsttimeseconds1;
    var yourtimeseconds1;
    var afirst1;
    var ayou1;
    var yourdelta1;

    var flights1 = document.getElementById('flights1').value;
    var accommodation1 = document.getElementById('accommodation1').value;
    var carhire1 = document.getElementById('carhire1').value;
    var otherexpenses1 = document.getElementById('otherexpenses1').value;
    var prize1 = document.getElementById('prize1').value;
    var appearance1 = document.getElementById('appearance1').value;
    var sponsor1 = document.getElementById('sponsor1').value;
    var otherincome1 = document.getElementById('otherincome1').value;
    var totalincome1;
    var totalexpenses1;
    var roi1;


//variables for Race 3
    document.getElementById('result42').style.visibility = 'hidden';
    var racetier2 = document.getElementById('tier2').value;
    var start12 = document.getElementById('start12').value;
    var firsttime2 = document.getElementById('finisher12').value;
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
    var youpositionpoints2;
    var youtimepoints2;
    var youtotalpoints2;
    var racebaseline2;
    var raceaveragetime2;
    var raceaveragetimeseconds2;
    var firsttimeseconds2;
    var yourtimeseconds2;
    var afirst2;
    var ayou2;
    var yourdelta2;

    var flights2 = document.getElementById('flights2').value;
    var accommodation2 = document.getElementById('accommodation2').value;
    var carhire2 = document.getElementById('carhire2').value;
    var otherexpenses2 = document.getElementById('otherexpenses2').value;
    var prize2 = document.getElementById('prize2').value;
    var appearance2 = document.getElementById('appearance2').value;
    var sponsor2 = document.getElementById('sponsor2').value;
    var otherincome2 = document.getElementById('otherincome2').value;
    var totalincome2;
    var totalexpenses2;
    var roi2;



//one button to rule them all
    button.onclick = function () {
        //run logic for race 1
        document.getElementById('result4').style.visibility = 'visible';

        racetier = document.getElementById('tier').value;
        start1 = document.getElementById('start1').value;
        
        firsttime = document.getElementById('finisher1').value;
        
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

    
        youpositionpoints = thisbase * Math.pow(1 - thisdropoff / 100, yourplace - 1);

        //SOF Points
        sof = +start1;
        

        //Calculate Baseline to go into Time Points

        racebaseline = (thisbase + sof) / 2;

        //Calculate Race Average Time to go into Time Points
        
            afirst = firsttime.split(':');
            firsttimeseconds = +afirst[0] * 60 * 60 + +afirst[1] * 60 + +afirst[2];
            raceaveragetimeseconds = (firsttimeseconds / 1) * 1000;
            raceaveragetime = firsttime;
        

        //Calculate Finishers Delta from Average

        
        ayou = finishtimeyou.split(':');
        yourtimeseconds = +ayou[0] * 60 * 60 + +ayou[1] * 60 + +ayou[2];

        
        yourdelta = (raceaveragetimeseconds / yourtimeseconds - 1000) / 10;

        //Calculate finishers Time Points

        
        youtimepoints = yourdelta * 6 + racebaseline;

        //Calculate finishers Total Points

        
        youtotalpoints = youpositionpoints * 0.4 + sof * 0.3 + youtimepoints * 0.3;

        
        document.getElementById('totalpointsy').innerHTML = youtotalpoints.toFixed(2);

        flights = document.getElementById('flights').value;
        accommodation = document.getElementById('accommodation').value;
        carhire = document.getElementById('carhire').value;
        otherexpenses = document.getElementById('otherexpenses').value;
        prize = document.getElementById('prize').value;
        appearance = document.getElementById('appearance').value;
        sponsor = document.getElementById('sponsor').value;
        otherincome = document.getElementById('otherincome').value;

        totalincome = +prize + +appearance + +sponsor + +otherincome;
        totalexpenses = +flights + +accommodation + +carhire + +otherexpenses;
        roinum = ((totalincome - totalexpenses) / totalexpenses) * 100;
        roi = parseFloat(roinum).toFixed(2);
        document.getElementById('roi').innerHTML = roi + '%';
   

//run logic for race 2


        document.getElementById('result41').style.visibility = 'visible';
    
        racetier1 = document.getElementById('tier1').value;
        start11 = document.getElementById('start11').value;
       
        firsttime1 = document.getElementById('finisher11').value;
       
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

        
        youpositionpoints1 = thisbase1 * Math.pow(1 - thisdropoff1 / 100, yourplace1 - 1);

        //SOF Points
        sof1 = +start11;
        

        //Calculate Baseline to go into Time Points

        racebaseline1 = (thisbase1 + sof1) / 2;

        //Calculate Race Average Time to go into Time Points
        
            afirst1 = firsttime1.split(':');
            firsttimeseconds1 = +afirst1[0] * 60 * 60 + +afirst1[1] * 60 + +afirst1[2];
            raceaveragetimeseconds1 = (firsttimeseconds1 / 1) * 1000;
            raceaveragetime1 = firsttime1;
        

        //Calculate Finishers Delta from Average

        
        ayou1 = finishtimeyou1.split(':');
        yourtimeseconds1 = +ayou1[0] * 60 * 60 + +ayou1[1] * 60 + +ayou1[2];

       
        yourdelta1 = (raceaveragetimeseconds1 / yourtimeseconds1 - 1000) / 10;

        //Calculate finishers Time Points

        
        youtimepoints1 = yourdelta1 * 6 + racebaseline1;

        //Calculate finishers Total Points

        
        youtotalpoints1 = youpositionpoints1 * 0.4 + sof1 * 0.3 + youtimepoints1 * 0.3;

        
        document.getElementById('totalpointsy1').innerHTML = youtotalpoints1.toFixed(2);


        flights1 = document.getElementById('flights1').value;
        accommodation1 = document.getElementById('accommodation1').value;
        carhire1 = document.getElementById('carhire1').value;
        otherexpenses1 = document.getElementById('otherexpenses1').value;
        prize1 = document.getElementById('prize1').value;
        appearance1 = document.getElementById('appearance1').value;
        sponsor1 = document.getElementById('sponsor1').value;
        otherincome1 = document.getElementById('otherincome1').value;

        totalincome1 = +prize1 + +appearance1 + +sponsor1 + +otherincome1;
        totalexpenses1 = +flights1 + +accommodation1 + +carhire1 + +otherexpenses1;
        roinum1 = ((totalincome1 - totalexpenses1) / totalexpenses1) *100;
        roi1 = parseFloat(roinum1).toFixed(2);
        document.getElementById('roi1').innerHTML = roi1 + '%';


//run logic for race 3



        document.getElementById('result42').style.visibility = 'visible';
       
        racetier2 = document.getElementById('tier2').value;
        start12 = document.getElementById('start12').value;
       
        firsttime2 = document.getElementById('finisher12').value;
        
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

       
        youpositionpoints2 = thisbase2 * Math.pow(1 - thisdropoff2 / 100, yourplace2 - 1);

        //SOF Points
        sof2 = +start12;
      
        //Calculate Baseline to go into Time Points

        racebaseline2 = (thisbase2 + sof2) / 2;

        //Calculate Race Average Time to go into Time Points
        
            afirst2 = firsttime2.split(':');
            firsttimeseconds2 = +afirst2[0] * 60 * 60 + +afirst2[1] * 60 + +afirst2[2];
            raceaveragetimeseconds2 = (firsttimeseconds2 / 1) * 1000;
            raceaveragetime2 = firsttime2;
        

        //Calculate Finishers Delta from Average

        
        ayou2 = finishtimeyou2.split(':');
        yourtimeseconds2 = +ayou2[0] * 60 * 60 + +ayou2[1] * 60 + +ayou2[2];

        
        yourdelta2 = (raceaveragetimeseconds2 / yourtimeseconds2 - 1000) / 10;

        //Calculate finishers Time Points

        
        youtimepoints2 = yourdelta2 * 6 + racebaseline2;

        //Calculate finishers Total Points

        
        youtotalpoints2 = youpositionpoints2 * 0.4 + sof2 * 0.3 + youtimepoints2 * 0.3;

        
        document.getElementById('totalpointsy2').innerHTML = youtotalpoints2.toFixed(2);


        flights2 = document.getElementById('flights2').value;
        accommodation2 = document.getElementById('accommodation2').value;
        carhire2 = document.getElementById('carhire2').value;
        otherexpenses2 = document.getElementById('otherexpenses2').value;
        prize2 = document.getElementById('prize2').value;
        appearance2 = document.getElementById('appearance2').value;
        sponsor2 = document.getElementById('sponsor2').value;
        otherincome2 = document.getElementById('otherincome2').value;

        totalincome2 = +prize2 + +appearance2 + +sponsor2 + +otherincome2;
        totalexpenses2 = +flights2 + +accommodation2 + +carhire2 + +otherexpenses2;
        roinum2 = ((totalincome2 - totalexpenses2) / totalexpenses2) *100;
        roi2 = parseFloat(roinum2).toFixed(2);
        document.getElementById('roi2').innerHTML = roi2 + '%';


    };
</script>
</body>
