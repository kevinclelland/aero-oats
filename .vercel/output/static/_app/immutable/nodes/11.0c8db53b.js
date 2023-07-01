import {
	S as zn,
	i as Un,
	s as Rn,
	k as r,
	q as l,
	a as o,
	l as n,
	m as s,
	r as d,
	h as i,
	c as a,
	n as t,
	b as $n,
	F as e,
	$ as yt,
	y as Wn,
	z as Gn,
	A as Yn,
	g as qn,
	d as jn,
	B as Jn
} from '../chunks/index.460b5f26.js';
function Kn(bt) {
	let c,
		I,
		m,
		_,
		Et,
		xt,
		ve,
		It,
		Bt,
		ge,
		ye,
		Pt,
		Tt,
		w,
		x,
		L,
		_t,
		wt,
		F,
		Oe,
		Lt,
		Ft,
		B,
		k,
		kt,
		M,
		Mt,
		S,
		St,
		H,
		Ht,
		O,
		Ot,
		Dt,
		D,
		De,
		At,
		Nt,
		q,
		Vt,
		j,
		Ct,
		J,
		zt,
		Ut,
		f,
		A,
		Rt,
		$t,
		N,
		K,
		Wt,
		Q,
		Gt,
		Yt,
		V,
		X,
		qt,
		Z,
		jt,
		Jt,
		C,
		ee,
		Kt,
		te,
		Qt,
		Xt,
		z,
		re,
		Zt,
		ne,
		er,
		tr,
		U,
		ie,
		rr,
		se,
		nr,
		ir,
		R,
		oe,
		sr,
		ae,
		or,
		ar,
		$,
		le,
		lr,
		de,
		dr,
		cr,
		W,
		ce,
		fr,
		fe,
		pr,
		ur,
		be,
		Ee,
		G,
		hr,
		mr,
		xe,
		p,
		pe,
		Ie,
		vr,
		Be,
		gr,
		yr,
		Ae,
		br,
		Ne,
		Er,
		Ve,
		xr,
		Ce,
		Ir,
		ze,
		Br,
		Ue,
		Pr,
		Re,
		Tr,
		T,
		u,
		ue,
		Pe,
		_r,
		Te,
		wr,
		Lr,
		$e,
		Fr,
		We,
		kr,
		Ge,
		Mr,
		Ye,
		Sr,
		qe,
		Hr,
		je,
		Or,
		Je,
		Dr,
		P,
		he,
		_e,
		Ar,
		we,
		Nr,
		Vr,
		Ke,
		Cr,
		Qe,
		zr,
		h,
		me,
		Le,
		Ur,
		Fe,
		Rr,
		$r,
		Xe,
		Wr,
		Ze,
		Gr,
		et,
		Yr,
		tt,
		qr,
		rt,
		jr,
		nt,
		Jr,
		it,
		Kr,
		st,
		Qr;
	return {
		c() {
			(c = r('body')),
				(I = r('div')),
				(m = r('div')),
				(_ = r('p')),
				(Et = l('Unofficial PTO Points Calculator')),
				(xt = o()),
				(ve = r('p')),
				(It = l(
					`Get indicative PTO points for a race. Use cases: "What if Ali Brownlee started the race? What if the last place athlete didn't DNF and 16 athletes finished? What if I had gone 2min quicker?"`
				)),
				(Bt = o()),
				(ge = r('p')),
				(ye = r('a')),
				(Pt = l('Click here for more info on the calculations.')),
				(Tt = o()),
				(w = r('div')),
				(x = r('div')),
				(L = r('h2')),
				(_t = l('Pre Race Info')),
				(wt = o()),
				(F = r('label')),
				(Oe = r('span')),
				(Lt = l('Select Race Tier:')),
				(Ft = o()),
				(B = r('select')),
				(k = r('option')),
				(kt = l('Diamond')),
				(M = r('option')),
				(Mt = l('Platinum')),
				(S = r('option')),
				(St = l('Gold')),
				(H = r('option')),
				(Ht = l('Silver')),
				(O = r('option')),
				(Ot = l('Bronze')),
				(Dt = o()),
				(D = r('label')),
				(De = r('span')),
				(At = l('Enter Race SOF')),
				(Nt = o()),
				(q = r('input')),
				(Vt = o()),
				(j = r('span')),
				(Ct = l('The SOF and Tier can be found on the PTO website ')),
				(J = r('a')),
				(zt = l(
					'here. This single number is an average of the PTO points for the top 5 highest ranked athletes starting the race.'
				)),
				(Ut = o()),
				(f = r('div')),
				(A = r('h2')),
				(Rt = l('Results Info')),
				($t = o()),
				(N = r('div')),
				(K = r('input')),
				(Wt = o()),
				(Q = r('label')),
				(Gt = l('Number of finishers')),
				(Yt = o()),
				(V = r('div')),
				(X = r('input')),
				(qt = o()),
				(Z = r('label')),
				(jt = l('Winners Time')),
				(Jt = o()),
				(C = r('div')),
				(ee = r('input')),
				(Kt = o()),
				(te = r('label')),
				(Qt = l('Second Place')),
				(Xt = o()),
				(z = r('div')),
				(re = r('input')),
				(Zt = o()),
				(ne = r('label')),
				(er = l('Third Place')),
				(tr = o()),
				(U = r('div')),
				(ie = r('input')),
				(rr = o()),
				(se = r('label')),
				(nr = l('Fourth Place')),
				(ir = o()),
				(R = r('div')),
				(oe = r('input')),
				(sr = o()),
				(ae = r('label')),
				(or = l('Fifth Place')),
				(ar = o()),
				($ = r('div')),
				(le = r('input')),
				(lr = o()),
				(de = r('label')),
				(dr = l('Your Time')),
				(cr = o()),
				(W = r('div')),
				(ce = r('input')),
				(fr = o()),
				(fe = r('label')),
				(pr = l('Your Place')),
				(ur = o()),
				(be = r('div')),
				(Ee = r('div')),
				(G = r('button')),
				(hr = l('Calculate')),
				(mr = o()),
				(xe = r('div')),
				(p = r('div')),
				(pe = r('div')),
				(Ie = r('h2')),
				(vr = l('Total Points')),
				(Be = r('span')),
				(gr = l('Combination of Position, Strength of Field and Time.')),
				(yr = o()),
				(Ae = r('p')),
				(br = o()),
				(Ne = r('p')),
				(Er = o()),
				(Ve = r('p')),
				(xr = o()),
				(Ce = r('p')),
				(Ir = o()),
				(ze = r('p')),
				(Br = o()),
				(Ue = r('p')),
				(Pr = o()),
				(Re = r('p')),
				(Tr = o()),
				(T = r('div')),
				(u = r('div')),
				(ue = r('div')),
				(Pe = r('h2')),
				(_r = l('Position Points')),
				(Te = r('span')),
				(wr = l('Points allocated for placing in a particular tiered race.')),
				(Lr = o()),
				($e = r('p')),
				(Fr = o()),
				(We = r('p')),
				(kr = o()),
				(Ge = r('p')),
				(Mr = o()),
				(Ye = r('p')),
				(Sr = o()),
				(qe = r('p')),
				(Hr = o()),
				(je = r('p')),
				(Or = o()),
				(Je = r('p')),
				(Dr = o()),
				(P = r('div')),
				(he = r('div')),
				(_e = r('h2')),
				(Ar = l('Strength of Field Points')),
				(we = r('span')),
				(Nr = l('How strong the field is based on top 5 ranked athletes starting the race.')),
				(Vr = o()),
				(Ke = r('p')),
				(Cr = o()),
				(Qe = r('p')),
				(zr = o()),
				(h = r('div')),
				(me = r('div')),
				(Le = r('h2')),
				(Ur = l('Time Points')),
				(Fe = r('span')),
				(Rr = l(
					'Points allocated based on the calculated "average time", SOF and race tier. Number of finishers also impacts this.'
				)),
				($r = o()),
				(Xe = r('p')),
				(Wr = o()),
				(Ze = r('p')),
				(Gr = o()),
				(et = r('p')),
				(Yr = o()),
				(tt = r('p')),
				(qr = o()),
				(rt = r('p')),
				(jr = o()),
				(nt = r('p')),
				(Jr = o()),
				(it = r('p')),
				(Kr = o()),
				(st = r('script')),
				(Qr = l(`document.getElementById("result1").style.visibility = 'hidden';\r
  document.getElementById("result2").style.visibility = 'hidden';\r
  document.getElementById("result3").style.visibility = 'hidden';\r
  document.getElementById("result4").style.visibility = 'hidden';\r
  var racetier = document.getElementById("tier").value;\r
  var start1 = document.getElementById("start1").value;\r
  var numberfinishers = document.getElementById("numberfinishers").value;\r
  var firsttime = document.getElementById("finisher1").value;\r
  var secondtime = document.getElementById("finisher2").value;\r
  var thirdtime = document.getElementById("finisher3").value;\r
  var fourthtime = document.getElementById("finisher4").value;\r
  var fifthtime = document.getElementById("finisher5").value;\r
  var finishtimeyou = document.getElementById("finisheryou").value;\r
  var yourplace = document.getElementById("finisherplace").value;\r
  var button = document.getElementById('calculate')\r
  var diamondbase = 100;\r
  var platinumbase = 95;\r
  var goldbase = 90;\r
  var silverbase = 80;\r
  var bronzebase = 70;\r
  var thisbase;\r
  var diamonddropoff = 2;\r
  var platinumdropoff = 2;\r
  var golddropoff = 5;\r
  var silverdropoff = 8;\r
  var bronzedropoff = 11;\r
  var thisdropoff;\r
  var sof;\r
  var firstpositionpoints;\r
  var secondpositionpoints;\r
  var thirdpositionpoints;\r
  var fourthpositionpoints;\r
  var fifthpositionpoints;\r
  var youpositionpoints;\r
  var firsttimepoints;\r
  var secondtimepoints;\r
  var thirdtimepoints;\r
  var fourthtimepoints;\r
  var fifthtimepoints;\r
  var youtimepoints;\r
  var firsttotalpoints;\r
  var secondtotalpoints;\r
  var thirdtotalpoints;\r
  var fourthtotalpoints;\r
  var fifthtotalpoints;\r
  var youtotalpoints;\r
  var racebaseline;\r
  var raceaveragetime;\r
  var raceaveragetimeseconds;\r
  var firsttimeseconds;\r
  var secondtimeseconds;\r
  var thirdtimeseconds;\r
  var fourthtimeseconds;\r
  var fifthtimeseconds;\r
  var yourtimeseconds;\r
  var afirst;\r
  var asecond;\r
  var athird;\r
  var afourth;\r
  var afifth;\r
  var ayou;\r
  var firstdelta;\r
  var seconddelta;\r
  var thirddelta;\r
  var fourthdelta;\r
  var fifthdelta;\r
  var yourdelta;\r
  \r
  button.onclick = function() {\r
    document.getElementById("result1").style.visibility = 'visible';\r
    document.getElementById("result2").style.visibility = 'visible';\r
    document.getElementById("result3").style.visibility = 'visible';\r
    document.getElementById("result4").style.visibility = 'visible';\r
    racetier = document.getElementById("tier").value;\r
    start1 = document.getElementById("start1").value;\r
    numberfinishers = document.getElementById("numberfinishers").value;\r
    firsttime = document.getElementById("finisher1").value;\r
    secondtime = document.getElementById("finisher2").value;\r
    thirdtime = document.getElementById("finisher3").value;\r
    fourthtime = document.getElementById("finisher4").value;\r
    fifthtime = document.getElementById("finisher5").value;\r
    finishtimeyou = document.getElementById("finisheryou").value;\r
    yourplace = document.getElementById("finisherplace").value;\r
    \r
    //Calculate Position Points\r
  \r
    if (racetier == "Diamond") {\r
      thisbase = 100;\r
      thisdropoff = 2;\r
    } else if (racetier == "Platinum") {\r
      thisbase = 95;\r
      thisdropoff = 2;\r
    } else if (racetier == "Gold") {\r
      thisbase = 90;\r
      thisdropoff = 5;\r
    } else if (racetier == "Silver") {\r
      thisbase = 80;\r
      thisdropoff = 8;\r
    } else {\r
      thisbase = 70;\r
      thisdropoff = 11;\r
    }\r
    \r
    racetier = document.getElementById("tier").value;\r
  \r
    firstpositionpoints = thisbase*Math.pow((1-thisdropoff/100),(1-1));\r
    secondpositionpoints = thisbase*Math.pow((1-thisdropoff/100),(2-1));\r
    thirdpositionpoints = thisbase*Math.pow((1-thisdropoff/100),(3-1));\r
    fourthpositionpoints = thisbase*Math.pow((1-thisdropoff/100),(4-1));\r
    fifthpositionpoints = thisbase*Math.pow((1-thisdropoff/100),(5-1));\r
    youpositionpoints = thisbase*Math.pow((1-thisdropoff/100),(yourplace-1));\r
    \r
  \r
    //SOF Points\r
    sof = +start1\r
    //sof = (+start1 + +start2 + +start3 + +start4 + +start5)/5;\r
  \r
    //Calculate Baseline to go into Time Points\r
  \r
    racebaseline = (thisbase + sof) /2;\r
  \r
    //Calculate Race Average Time to go into Time Points\r
    if (numberfinishers <= 4) {\r
      afirst = firsttime.split(':');\r
      firsttimeseconds = (+afirst[0]) * 60 * 60 + (+afirst[1]) * 60 + (+afirst[2]);\r
      raceaveragetimeseconds = (firsttimeseconds)/1*1000;\r
      raceaveragetime = firsttime;\r
    } else if (numberfinishers < 8) {\r
  \r
      afirst = firsttime.split(':');\r
      firsttimeseconds = (+afirst[0]) * 60 * 60 + (+afirst[1]) * 60 + (+afirst[2]);\r
      asecond = secondtime.split(':');\r
      secondtimeseconds = (+asecond[0]) * 60 * 60 + (+asecond[1]) * 60 + (+asecond[2]);\r
      raceaveragetimeseconds = (firsttimeseconds + secondtimeseconds)/2*1000;\r
      raceaveragetime = new Date(raceaveragetimeseconds).toISOString().slice(11, 19);\r
     \r
  \r
    } else if (numberfinishers < 12) {\r
  \r
      afirst = firsttime.split(':');\r
      firsttimeseconds = (+afirst[0]) * 60 * 60 + (+afirst[1]) * 60 + (+afirst[2]);\r
      asecond = secondtime.split(':');\r
      secondtimeseconds = (+asecond[0]) * 60 * 60 + (+asecond[1]) * 60 + (+asecond[2]);\r
      athird = thirdtime.split(':');\r
      thirdtimeseconds = (+athird[0]) * 60 * 60 + (+athird[1]) * 60 + (+athird[2]);\r
      raceaveragetimeseconds = (firsttimeseconds + secondtimeseconds + thirdtimeseconds)/3*1000;\r
      raceaveragetime = new Date(raceaveragetimeseconds).toISOString().slice(11, 19);\r
  \r
    } else if (numberfinishers < 16) {\r
  \r
      afirst = firsttime.split(':');\r
      firsttimeseconds = (+afirst[0]) * 60 * 60 + (+afirst[1]) * 60 + (+afirst[2]);\r
      asecond = secondtime.split(':');\r
      secondtimeseconds = (+asecond[0]) * 60 * 60 + (+asecond[1]) * 60 + (+asecond[2]);\r
      athird = thirdtime.split(':');\r
      thirdtimeseconds = (+athird[0]) * 60 * 60 + (+athird[1]) * 60 + (+athird[2]);\r
      afourth = fourthtime.split(':');\r
      fourthtimeseconds = (+afourth[0]) * 60 * 60 + (+afourth[1]) * 60 + (+afourth[2]);\r
      raceaveragetimeseconds = (firsttimeseconds + secondtimeseconds + thirdtimeseconds + fourthtimeseconds)/4*1000;\r
      raceaveragetime = new Date(raceaveragetimeseconds).toISOString().slice(11, 19);\r
  \r
    } else {\r
  \r
      afirst = firsttime.split(':');\r
      firsttimeseconds = (+afirst[0]) * 60 * 60 + (+afirst[1]) * 60 + (+afirst[2]);\r
      asecond = secondtime.split(':');\r
      secondtimeseconds = (+asecond[0]) * 60 * 60 + (+asecond[1]) * 60 + (+asecond[2]);\r
      athird = thirdtime.split(':');\r
      thirdtimeseconds = (+athird[0]) * 60 * 60 + (+athird[1]) * 60 + (+athird[2]);\r
      afourth = fourthtime.split(':');\r
      fourthtimeseconds = (+afourth[0]) * 60 * 60 + (+afourth[1]) * 60 + (+afourth[2]);\r
      afifth = fifthtime.split(':');\r
      fifthtimeseconds = (+afifth[0]) * 60 * 60 + (+afifth[1]) * 60 + (+afifth[2]);\r
      raceaveragetimeseconds = (firsttimeseconds + secondtimeseconds + thirdtimeseconds + fourthtimeseconds + fifthtimeseconds)/5*1000;\r
      raceaveragetime = new Date(raceaveragetimeseconds).toISOString().slice(11, 19);\r
  \r
    }\r
    \r
  \r
    //Calculate Finishers Delta from Average\r
  \r
      afirst = firsttime.split(':');\r
      firsttimeseconds = (+afirst[0]) * 60 * 60 + (+afirst[1]) * 60 + (+afirst[2]);\r
      asecond = secondtime.split(':');\r
      secondtimeseconds = (+asecond[0]) * 60 * 60 + (+asecond[1]) * 60 + (+asecond[2]);\r
      athird = thirdtime.split(':');\r
      thirdtimeseconds = (+athird[0]) * 60 * 60 + (+athird[1]) * 60 + (+athird[2]);\r
      afourth = fourthtime.split(':');\r
      fourthtimeseconds = (+afourth[0]) * 60 * 60 + (+afourth[1]) * 60 + (+afourth[2]);\r
      afifth = fifthtime.split(':');\r
      fifthtimeseconds = (+afifth[0]) * 60 * 60 + (+afifth[1]) * 60 + (+afifth[2]);\r
      ayou = finishtimeyou.split(':');\r
      yourtimeseconds = (+ayou[0]) * 60 * 60 + (+ayou[1]) * 60 + (+ayou[2]);\r
      \r
      firstdelta = ((raceaveragetimeseconds / firsttimeseconds)-1000)/10;\r
      seconddelta = ((raceaveragetimeseconds / secondtimeseconds)-1000)/10;\r
      thirddelta = ((raceaveragetimeseconds / thirdtimeseconds)-1000)/10;\r
      fourthdelta = ((raceaveragetimeseconds / fourthtimeseconds)-1000)/10;\r
      fifthdelta = ((raceaveragetimeseconds / fifthtimeseconds)-1000)/10;\r
      yourdelta = ((raceaveragetimeseconds / yourtimeseconds)-1000)/10;\r
  \r
     //Calculate finishers Time Points \r
  \r
      firsttimepoints = firstdelta * 6 + racebaseline;\r
      secondtimepoints = seconddelta * 6 + racebaseline;\r
      thirdtimepoints = thirddelta * 6 + racebaseline;\r
      fourthtimepoints = fourthdelta * 6 + racebaseline;\r
      fifthtimepoints = fifthdelta * 6 + racebaseline;\r
      youtimepoints = yourdelta * 6 + racebaseline;\r
  \r
  \r
      //Calculate finishers Total Points\r
  \r
      firsttotalpoints = (firstpositionpoints * 0.4) + (sof * 0.3) + (firsttimepoints * 0.3);\r
      secondtotalpoints = (secondpositionpoints * 0.4) + (sof * 0.3) + (secondtimepoints * 0.3);\r
      thirdtotalpoints = (thirdpositionpoints * 0.4) + (sof * 0.3) + (thirdtimepoints * 0.3);\r
      fourthtotalpoints = (fourthpositionpoints * 0.4) + (sof * 0.3) + (fourthtimepoints * 0.3);\r
      fifthtotalpoints = (fifthpositionpoints * 0.4) + (sof * 0.3) + (fifthtimepoints * 0.3);\r
      youtotalpoints = (youpositionpoints * 0.4) + (sof * 0.3) + (youtimepoints * 0.3);\r
  \r
  \r
      document.getElementById("positionpoints1").innerHTML = "1st: " + firstpositionpoints.toFixed(2);\r
      document.getElementById("positionpoints2").innerHTML = "2nd: " + secondpositionpoints.toFixed(2);\r
      document.getElementById("positionpoints3").innerHTML = "3rd: " + thirdpositionpoints.toFixed(2);\r
      document.getElementById("positionpoints4").innerHTML = "4th: " + fourthpositionpoints.toFixed(2);\r
      document.getElementById("positionpoints5").innerHTML = "5th: " + fifthpositionpoints.toFixed(2);\r
      document.getElementById("positionpointsy").innerHTML = "you: " + youpositionpoints.toFixed(2);\r
      document.getElementById("sofpoints").innerHTML = sof.toFixed(2);\r
      document.getElementById("timepoints1").innerHTML = "1st: " + firsttimepoints.toFixed(2);\r
      document.getElementById("timepoints2").innerHTML = "2nd: " + secondtimepoints.toFixed(2);\r
      document.getElementById("timepoints3").innerHTML = "3rd: " + thirdtimepoints.toFixed(2);\r
      document.getElementById("timepoints4").innerHTML = "4th: " + fourthtimepoints.toFixed(2);\r
      document.getElementById("timepoints5").innerHTML = "5th: " + fifthtimepoints.toFixed(2);\r
      document.getElementById("timepointsy").innerHTML = "you: " + youtimepoints.toFixed(2);\r
      \r
      document.getElementById("totalpoints1").innerHTML = "1st: " + firsttotalpoints.toFixed(2);\r
      document.getElementById("totalpoints2").innerHTML = "2nd: " + secondtotalpoints.toFixed(2);\r
      document.getElementById("totalpoints3").innerHTML = "3rd: " + thirdtotalpoints.toFixed(2);\r
      document.getElementById("totalpoints4").innerHTML = "4th: " + fourthtotalpoints.toFixed(2);\r
      document.getElementById("totalpoints5").innerHTML = "5th: " + fifthtotalpoints.toFixed(2);\r
      document.getElementById("totalpointsy").innerHTML = "you: " + youtotalpoints.toFixed(2);\r
  \r
      document.getElementById("positionexplain").innerHTML = "Starting at " + thisbase + " with a drop off of " + thisdropoff + ". Based off of the race tier selected above.";\r
      document.getElementById("sofexplain").innerHTML = "Average of the top 5 PTO points of all the starters. All athletes get the same SOF score.";\r
      document.getElementById("timeexplain").innerHTML = "Finishers time is compared to the calculated average time of the races top finishers which is: " + raceaveragetime + ". The number of finishers impacts how the average time is calculated.";\r
      document.getElementById("totalexplain").innerHTML = "40% of the Position Points, 30% of the Strength of Field Points and 30% of the Time Points.";\r
  \r
  }`)),
				this.h();
		},
		l(ot) {
			c = n(ot, 'BODY', {});
			var E = s(c);
			I = n(E, 'DIV', { class: !0 });
			var nn = s(I);
			m = n(nn, 'DIV', { class: !0 });
			var ke = s(m);
			_ = n(ke, 'P', { class: !0 });
			var sn = s(_);
			(Et = d(sn, 'Unofficial PTO Points Calculator')),
				sn.forEach(i),
				(xt = a(ke)),
				(ve = n(ke, 'P', { class: !0 }));
			var on = s(ve);
			(It = d(
				on,
				`Get indicative PTO points for a race. Use cases: "What if Ali Brownlee started the race? What if the last place athlete didn't DNF and 16 athletes finished? What if I had gone 2min quicker?"`
			)),
				on.forEach(i),
				(Bt = a(ke)),
				(ge = n(ke, 'P', { class: !0 }));
			var an = s(ge);
			ye = n(an, 'A', { href: !0 });
			var ln = s(ye);
			(Pt = d(ln, 'Click here for more info on the calculations.')),
				ln.forEach(i),
				an.forEach(i),
				ke.forEach(i),
				nn.forEach(i),
				(Tt = a(E)),
				(w = n(E, 'DIV', { class: !0 }));
			var at = s(w);
			x = n(at, 'DIV', { class: !0 });
			var Y = s(x);
			L = n(Y, 'H2', { class: !0, 'data-te-toggle': !0, title: !0 });
			var dn = s(L);
			(_t = d(dn, 'Pre Race Info')), dn.forEach(i), (wt = a(Y)), (F = n(Y, 'LABEL', { class: !0 }));
			var lt = s(F);
			Oe = n(lt, 'SPAN', {});
			var cn = s(Oe);
			(Lt = d(cn, 'Select Race Tier:')),
				cn.forEach(i),
				(Ft = a(lt)),
				(B = n(lt, 'SELECT', { id: !0, class: !0 }));
			var Me = s(B);
			k = n(Me, 'OPTION', {});
			var fn = s(k);
			(kt = d(fn, 'Diamond')), fn.forEach(i), (M = n(Me, 'OPTION', {}));
			var pn = s(M);
			(Mt = d(pn, 'Platinum')), pn.forEach(i), (S = n(Me, 'OPTION', {}));
			var un = s(S);
			(St = d(un, 'Gold')), un.forEach(i), (H = n(Me, 'OPTION', {}));
			var hn = s(H);
			(Ht = d(hn, 'Silver')), hn.forEach(i), (O = n(Me, 'OPTION', {}));
			var mn = s(O);
			(Ot = d(mn, 'Bronze')),
				mn.forEach(i),
				Me.forEach(i),
				lt.forEach(i),
				(Dt = a(Y)),
				(D = n(Y, 'LABEL', { class: !0 }));
			var dt = s(D);
			De = n(dt, 'SPAN', {});
			var vn = s(De);
			(At = d(vn, 'Enter Race SOF')),
				vn.forEach(i),
				(Nt = a(dt)),
				(q = n(dt, 'INPUT', { class: !0, type: !0, placeholder: !0, id: !0 })),
				dt.forEach(i),
				(Vt = a(Y)),
				(j = n(Y, 'SPAN', { class: !0 }));
			var Xr = s(j);
			(Ct = d(Xr, 'The SOF and Tier can be found on the PTO website ')),
				(J = n(Xr, 'A', { href: !0, target: !0 }));
			var gn = s(J);
			(zt = d(
				gn,
				'here. This single number is an average of the PTO points for the top 5 highest ranked athletes starting the race.'
			)),
				gn.forEach(i),
				Xr.forEach(i),
				Y.forEach(i),
				(Ut = a(at)),
				(f = n(at, 'DIV', { class: !0 }));
			var v = s(f);
			A = n(v, 'H2', { class: !0, 'data-te-toggle': !0, title: !0 });
			var yn = s(A);
			(Rt = d(yn, 'Results Info')), yn.forEach(i), ($t = a(v)), (N = n(v, 'DIV', { class: !0 }));
			var ct = s(N);
			(K = n(ct, 'INPUT', { class: !0, type: !0, placeholder: !0, id: !0 })),
				(Wt = a(ct)),
				(Q = n(ct, 'LABEL', { for: !0, class: !0 }));
			var bn = s(Q);
			(Gt = d(bn, 'Number of finishers')),
				bn.forEach(i),
				ct.forEach(i),
				(Yt = a(v)),
				(V = n(v, 'DIV', { class: !0 }));
			var ft = s(V);
			(X = n(ft, 'INPUT', { class: !0, type: !0, step: !0, id: !0 })),
				(qt = a(ft)),
				(Z = n(ft, 'LABEL', { for: !0, class: !0 }));
			var En = s(Z);
			(jt = d(En, 'Winners Time')),
				En.forEach(i),
				ft.forEach(i),
				(Jt = a(v)),
				(C = n(v, 'DIV', { class: !0 }));
			var pt = s(C);
			(ee = n(pt, 'INPUT', { class: !0, type: !0, step: !0, id: !0 })),
				(Kt = a(pt)),
				(te = n(pt, 'LABEL', { for: !0, class: !0 }));
			var xn = s(te);
			(Qt = d(xn, 'Second Place')),
				xn.forEach(i),
				pt.forEach(i),
				(Xt = a(v)),
				(z = n(v, 'DIV', { class: !0 }));
			var ut = s(z);
			(re = n(ut, 'INPUT', { class: !0, type: !0, step: !0, id: !0 })),
				(Zt = a(ut)),
				(ne = n(ut, 'LABEL', { for: !0, class: !0 }));
			var In = s(ne);
			(er = d(In, 'Third Place')),
				In.forEach(i),
				ut.forEach(i),
				(tr = a(v)),
				(U = n(v, 'DIV', { class: !0 }));
			var ht = s(U);
			(ie = n(ht, 'INPUT', { class: !0, type: !0, step: !0, id: !0 })),
				(rr = a(ht)),
				(se = n(ht, 'LABEL', { for: !0, class: !0 }));
			var Bn = s(se);
			(nr = d(Bn, 'Fourth Place')),
				Bn.forEach(i),
				ht.forEach(i),
				(ir = a(v)),
				(R = n(v, 'DIV', { class: !0 }));
			var mt = s(R);
			(oe = n(mt, 'INPUT', { class: !0, type: !0, step: !0, id: !0 })),
				(sr = a(mt)),
				(ae = n(mt, 'LABEL', { for: !0, class: !0 }));
			var Pn = s(ae);
			(or = d(Pn, 'Fifth Place')),
				Pn.forEach(i),
				mt.forEach(i),
				(ar = a(v)),
				($ = n(v, 'DIV', { class: !0 }));
			var vt = s($);
			(le = n(vt, 'INPUT', { class: !0, type: !0, step: !0, id: !0 })),
				(lr = a(vt)),
				(de = n(vt, 'LABEL', { for: !0, class: !0 }));
			var Tn = s(de);
			(dr = d(Tn, 'Your Time')),
				Tn.forEach(i),
				vt.forEach(i),
				(cr = a(v)),
				(W = n(v, 'DIV', { class: !0 }));
			var gt = s(W);
			(ce = n(gt, 'INPUT', { class: !0, type: !0, placeholder: !0, id: !0 })),
				(fr = a(gt)),
				(fe = n(gt, 'LABEL', { for: !0, class: !0 }));
			var _n = s(fe);
			(pr = d(_n, 'Your Place')),
				_n.forEach(i),
				gt.forEach(i),
				v.forEach(i),
				at.forEach(i),
				(ur = a(E)),
				(be = n(E, 'DIV', { class: !0 }));
			var wn = s(be);
			Ee = n(wn, 'DIV', { class: !0 });
			var Ln = s(Ee);
			G = n(Ln, 'BUTTON', { type: !0, class: !0, id: !0 });
			var Fn = s(G);
			(hr = d(Fn, 'Calculate')),
				Fn.forEach(i),
				Ln.forEach(i),
				wn.forEach(i),
				(mr = a(E)),
				(xe = n(E, 'DIV', { class: !0 }));
			var kn = s(xe);
			p = n(kn, 'DIV', { class: !0, id: !0 });
			var g = s(p);
			pe = n(g, 'DIV', { class: !0 });
			var Zr = s(pe);
			Ie = n(Zr, 'H2', { class: !0 });
			var Mn = s(Ie);
			(vr = d(Mn, 'Total Points')), Mn.forEach(i), (Be = n(Zr, 'SPAN', { class: !0 }));
			var Sn = s(Be);
			(gr = d(Sn, 'Combination of Position, Strength of Field and Time.')),
				Sn.forEach(i),
				Zr.forEach(i),
				(yr = a(g)),
				(Ae = n(g, 'P', { id: !0 })),
				s(Ae).forEach(i),
				(br = a(g)),
				(Ne = n(g, 'P', { id: !0 })),
				s(Ne).forEach(i),
				(Er = a(g)),
				(Ve = n(g, 'P', { id: !0 })),
				s(Ve).forEach(i),
				(xr = a(g)),
				(Ce = n(g, 'P', { id: !0 })),
				s(Ce).forEach(i),
				(Ir = a(g)),
				(ze = n(g, 'P', { id: !0 })),
				s(ze).forEach(i),
				(Br = a(g)),
				(Ue = n(g, 'P', { id: !0 })),
				s(Ue).forEach(i),
				(Pr = a(g)),
				(Re = n(g, 'P', { id: !0 })),
				s(Re).forEach(i),
				g.forEach(i),
				kn.forEach(i),
				(Tr = a(E)),
				(T = n(E, 'DIV', { class: !0 }));
			var Se = s(T);
			u = n(Se, 'DIV', { class: !0, id: !0 });
			var y = s(u);
			ue = n(y, 'DIV', { class: !0 });
			var en = s(ue);
			Pe = n(en, 'H2', { class: !0 });
			var Hn = s(Pe);
			(_r = d(Hn, 'Position Points')), Hn.forEach(i), (Te = n(en, 'SPAN', { class: !0 }));
			var On = s(Te);
			(wr = d(On, 'Points allocated for placing in a particular tiered race.')),
				On.forEach(i),
				en.forEach(i),
				(Lr = a(y)),
				($e = n(y, 'P', { id: !0 })),
				s($e).forEach(i),
				(Fr = a(y)),
				(We = n(y, 'P', { id: !0 })),
				s(We).forEach(i),
				(kr = a(y)),
				(Ge = n(y, 'P', { id: !0 })),
				s(Ge).forEach(i),
				(Mr = a(y)),
				(Ye = n(y, 'P', { id: !0 })),
				s(Ye).forEach(i),
				(Sr = a(y)),
				(qe = n(y, 'P', { id: !0 })),
				s(qe).forEach(i),
				(Hr = a(y)),
				(je = n(y, 'P', { id: !0 })),
				s(je).forEach(i),
				(Or = a(y)),
				(Je = n(y, 'P', { id: !0 })),
				s(Je).forEach(i),
				y.forEach(i),
				(Dr = a(Se)),
				(P = n(Se, 'DIV', { class: !0, id: !0 }));
			var He = s(P);
			he = n(He, 'DIV', { class: !0 });
			var tn = s(he);
			_e = n(tn, 'H2', { class: !0 });
			var Dn = s(_e);
			(Ar = d(Dn, 'Strength of Field Points')), Dn.forEach(i), (we = n(tn, 'SPAN', { class: !0 }));
			var An = s(we);
			(Nr = d(An, 'How strong the field is based on top 5 ranked athletes starting the race.')),
				An.forEach(i),
				tn.forEach(i),
				(Vr = a(He)),
				(Ke = n(He, 'P', { id: !0 })),
				s(Ke).forEach(i),
				(Cr = a(He)),
				(Qe = n(He, 'P', { id: !0 })),
				s(Qe).forEach(i),
				He.forEach(i),
				(zr = a(Se)),
				(h = n(Se, 'DIV', { class: !0, id: !0 }));
			var b = s(h);
			me = n(b, 'DIV', { class: !0 });
			var rn = s(me);
			Le = n(rn, 'H2', { class: !0 });
			var Nn = s(Le);
			(Ur = d(Nn, 'Time Points')), Nn.forEach(i), (Fe = n(rn, 'SPAN', { class: !0 }));
			var Vn = s(Fe);
			(Rr = d(
				Vn,
				'Points allocated based on the calculated "average time", SOF and race tier. Number of finishers also impacts this.'
			)),
				Vn.forEach(i),
				rn.forEach(i),
				($r = a(b)),
				(Xe = n(b, 'P', { id: !0 })),
				s(Xe).forEach(i),
				(Wr = a(b)),
				(Ze = n(b, 'P', { id: !0 })),
				s(Ze).forEach(i),
				(Gr = a(b)),
				(et = n(b, 'P', { id: !0 })),
				s(et).forEach(i),
				(Yr = a(b)),
				(tt = n(b, 'P', { id: !0 })),
				s(tt).forEach(i),
				(qr = a(b)),
				(rt = n(b, 'P', { id: !0 })),
				s(rt).forEach(i),
				(jr = a(b)),
				(nt = n(b, 'P', { id: !0 })),
				s(nt).forEach(i),
				(Jr = a(b)),
				(it = n(b, 'P', { id: !0 })),
				s(it).forEach(i),
				b.forEach(i),
				Se.forEach(i),
				(Kr = a(E)),
				(st = n(E, 'SCRIPT', {}));
			var Cn = s(st);
			(Qr = d(
				Cn,
				`document.getElementById("result1").style.visibility = 'hidden';\r
  document.getElementById("result2").style.visibility = 'hidden';\r
  document.getElementById("result3").style.visibility = 'hidden';\r
  document.getElementById("result4").style.visibility = 'hidden';\r
  var racetier = document.getElementById("tier").value;\r
  var start1 = document.getElementById("start1").value;\r
  var numberfinishers = document.getElementById("numberfinishers").value;\r
  var firsttime = document.getElementById("finisher1").value;\r
  var secondtime = document.getElementById("finisher2").value;\r
  var thirdtime = document.getElementById("finisher3").value;\r
  var fourthtime = document.getElementById("finisher4").value;\r
  var fifthtime = document.getElementById("finisher5").value;\r
  var finishtimeyou = document.getElementById("finisheryou").value;\r
  var yourplace = document.getElementById("finisherplace").value;\r
  var button = document.getElementById('calculate')\r
  var diamondbase = 100;\r
  var platinumbase = 95;\r
  var goldbase = 90;\r
  var silverbase = 80;\r
  var bronzebase = 70;\r
  var thisbase;\r
  var diamonddropoff = 2;\r
  var platinumdropoff = 2;\r
  var golddropoff = 5;\r
  var silverdropoff = 8;\r
  var bronzedropoff = 11;\r
  var thisdropoff;\r
  var sof;\r
  var firstpositionpoints;\r
  var secondpositionpoints;\r
  var thirdpositionpoints;\r
  var fourthpositionpoints;\r
  var fifthpositionpoints;\r
  var youpositionpoints;\r
  var firsttimepoints;\r
  var secondtimepoints;\r
  var thirdtimepoints;\r
  var fourthtimepoints;\r
  var fifthtimepoints;\r
  var youtimepoints;\r
  var firsttotalpoints;\r
  var secondtotalpoints;\r
  var thirdtotalpoints;\r
  var fourthtotalpoints;\r
  var fifthtotalpoints;\r
  var youtotalpoints;\r
  var racebaseline;\r
  var raceaveragetime;\r
  var raceaveragetimeseconds;\r
  var firsttimeseconds;\r
  var secondtimeseconds;\r
  var thirdtimeseconds;\r
  var fourthtimeseconds;\r
  var fifthtimeseconds;\r
  var yourtimeseconds;\r
  var afirst;\r
  var asecond;\r
  var athird;\r
  var afourth;\r
  var afifth;\r
  var ayou;\r
  var firstdelta;\r
  var seconddelta;\r
  var thirddelta;\r
  var fourthdelta;\r
  var fifthdelta;\r
  var yourdelta;\r
  \r
  button.onclick = function() {\r
    document.getElementById("result1").style.visibility = 'visible';\r
    document.getElementById("result2").style.visibility = 'visible';\r
    document.getElementById("result3").style.visibility = 'visible';\r
    document.getElementById("result4").style.visibility = 'visible';\r
    racetier = document.getElementById("tier").value;\r
    start1 = document.getElementById("start1").value;\r
    numberfinishers = document.getElementById("numberfinishers").value;\r
    firsttime = document.getElementById("finisher1").value;\r
    secondtime = document.getElementById("finisher2").value;\r
    thirdtime = document.getElementById("finisher3").value;\r
    fourthtime = document.getElementById("finisher4").value;\r
    fifthtime = document.getElementById("finisher5").value;\r
    finishtimeyou = document.getElementById("finisheryou").value;\r
    yourplace = document.getElementById("finisherplace").value;\r
    \r
    //Calculate Position Points\r
  \r
    if (racetier == "Diamond") {\r
      thisbase = 100;\r
      thisdropoff = 2;\r
    } else if (racetier == "Platinum") {\r
      thisbase = 95;\r
      thisdropoff = 2;\r
    } else if (racetier == "Gold") {\r
      thisbase = 90;\r
      thisdropoff = 5;\r
    } else if (racetier == "Silver") {\r
      thisbase = 80;\r
      thisdropoff = 8;\r
    } else {\r
      thisbase = 70;\r
      thisdropoff = 11;\r
    }\r
    \r
    racetier = document.getElementById("tier").value;\r
  \r
    firstpositionpoints = thisbase*Math.pow((1-thisdropoff/100),(1-1));\r
    secondpositionpoints = thisbase*Math.pow((1-thisdropoff/100),(2-1));\r
    thirdpositionpoints = thisbase*Math.pow((1-thisdropoff/100),(3-1));\r
    fourthpositionpoints = thisbase*Math.pow((1-thisdropoff/100),(4-1));\r
    fifthpositionpoints = thisbase*Math.pow((1-thisdropoff/100),(5-1));\r
    youpositionpoints = thisbase*Math.pow((1-thisdropoff/100),(yourplace-1));\r
    \r
  \r
    //SOF Points\r
    sof = +start1\r
    //sof = (+start1 + +start2 + +start3 + +start4 + +start5)/5;\r
  \r
    //Calculate Baseline to go into Time Points\r
  \r
    racebaseline = (thisbase + sof) /2;\r
  \r
    //Calculate Race Average Time to go into Time Points\r
    if (numberfinishers <= 4) {\r
      afirst = firsttime.split(':');\r
      firsttimeseconds = (+afirst[0]) * 60 * 60 + (+afirst[1]) * 60 + (+afirst[2]);\r
      raceaveragetimeseconds = (firsttimeseconds)/1*1000;\r
      raceaveragetime = firsttime;\r
    } else if (numberfinishers < 8) {\r
  \r
      afirst = firsttime.split(':');\r
      firsttimeseconds = (+afirst[0]) * 60 * 60 + (+afirst[1]) * 60 + (+afirst[2]);\r
      asecond = secondtime.split(':');\r
      secondtimeseconds = (+asecond[0]) * 60 * 60 + (+asecond[1]) * 60 + (+asecond[2]);\r
      raceaveragetimeseconds = (firsttimeseconds + secondtimeseconds)/2*1000;\r
      raceaveragetime = new Date(raceaveragetimeseconds).toISOString().slice(11, 19);\r
     \r
  \r
    } else if (numberfinishers < 12) {\r
  \r
      afirst = firsttime.split(':');\r
      firsttimeseconds = (+afirst[0]) * 60 * 60 + (+afirst[1]) * 60 + (+afirst[2]);\r
      asecond = secondtime.split(':');\r
      secondtimeseconds = (+asecond[0]) * 60 * 60 + (+asecond[1]) * 60 + (+asecond[2]);\r
      athird = thirdtime.split(':');\r
      thirdtimeseconds = (+athird[0]) * 60 * 60 + (+athird[1]) * 60 + (+athird[2]);\r
      raceaveragetimeseconds = (firsttimeseconds + secondtimeseconds + thirdtimeseconds)/3*1000;\r
      raceaveragetime = new Date(raceaveragetimeseconds).toISOString().slice(11, 19);\r
  \r
    } else if (numberfinishers < 16) {\r
  \r
      afirst = firsttime.split(':');\r
      firsttimeseconds = (+afirst[0]) * 60 * 60 + (+afirst[1]) * 60 + (+afirst[2]);\r
      asecond = secondtime.split(':');\r
      secondtimeseconds = (+asecond[0]) * 60 * 60 + (+asecond[1]) * 60 + (+asecond[2]);\r
      athird = thirdtime.split(':');\r
      thirdtimeseconds = (+athird[0]) * 60 * 60 + (+athird[1]) * 60 + (+athird[2]);\r
      afourth = fourthtime.split(':');\r
      fourthtimeseconds = (+afourth[0]) * 60 * 60 + (+afourth[1]) * 60 + (+afourth[2]);\r
      raceaveragetimeseconds = (firsttimeseconds + secondtimeseconds + thirdtimeseconds + fourthtimeseconds)/4*1000;\r
      raceaveragetime = new Date(raceaveragetimeseconds).toISOString().slice(11, 19);\r
  \r
    } else {\r
  \r
      afirst = firsttime.split(':');\r
      firsttimeseconds = (+afirst[0]) * 60 * 60 + (+afirst[1]) * 60 + (+afirst[2]);\r
      asecond = secondtime.split(':');\r
      secondtimeseconds = (+asecond[0]) * 60 * 60 + (+asecond[1]) * 60 + (+asecond[2]);\r
      athird = thirdtime.split(':');\r
      thirdtimeseconds = (+athird[0]) * 60 * 60 + (+athird[1]) * 60 + (+athird[2]);\r
      afourth = fourthtime.split(':');\r
      fourthtimeseconds = (+afourth[0]) * 60 * 60 + (+afourth[1]) * 60 + (+afourth[2]);\r
      afifth = fifthtime.split(':');\r
      fifthtimeseconds = (+afifth[0]) * 60 * 60 + (+afifth[1]) * 60 + (+afifth[2]);\r
      raceaveragetimeseconds = (firsttimeseconds + secondtimeseconds + thirdtimeseconds + fourthtimeseconds + fifthtimeseconds)/5*1000;\r
      raceaveragetime = new Date(raceaveragetimeseconds).toISOString().slice(11, 19);\r
  \r
    }\r
    \r
  \r
    //Calculate Finishers Delta from Average\r
  \r
      afirst = firsttime.split(':');\r
      firsttimeseconds = (+afirst[0]) * 60 * 60 + (+afirst[1]) * 60 + (+afirst[2]);\r
      asecond = secondtime.split(':');\r
      secondtimeseconds = (+asecond[0]) * 60 * 60 + (+asecond[1]) * 60 + (+asecond[2]);\r
      athird = thirdtime.split(':');\r
      thirdtimeseconds = (+athird[0]) * 60 * 60 + (+athird[1]) * 60 + (+athird[2]);\r
      afourth = fourthtime.split(':');\r
      fourthtimeseconds = (+afourth[0]) * 60 * 60 + (+afourth[1]) * 60 + (+afourth[2]);\r
      afifth = fifthtime.split(':');\r
      fifthtimeseconds = (+afifth[0]) * 60 * 60 + (+afifth[1]) * 60 + (+afifth[2]);\r
      ayou = finishtimeyou.split(':');\r
      yourtimeseconds = (+ayou[0]) * 60 * 60 + (+ayou[1]) * 60 + (+ayou[2]);\r
      \r
      firstdelta = ((raceaveragetimeseconds / firsttimeseconds)-1000)/10;\r
      seconddelta = ((raceaveragetimeseconds / secondtimeseconds)-1000)/10;\r
      thirddelta = ((raceaveragetimeseconds / thirdtimeseconds)-1000)/10;\r
      fourthdelta = ((raceaveragetimeseconds / fourthtimeseconds)-1000)/10;\r
      fifthdelta = ((raceaveragetimeseconds / fifthtimeseconds)-1000)/10;\r
      yourdelta = ((raceaveragetimeseconds / yourtimeseconds)-1000)/10;\r
  \r
     //Calculate finishers Time Points \r
  \r
      firsttimepoints = firstdelta * 6 + racebaseline;\r
      secondtimepoints = seconddelta * 6 + racebaseline;\r
      thirdtimepoints = thirddelta * 6 + racebaseline;\r
      fourthtimepoints = fourthdelta * 6 + racebaseline;\r
      fifthtimepoints = fifthdelta * 6 + racebaseline;\r
      youtimepoints = yourdelta * 6 + racebaseline;\r
  \r
  \r
      //Calculate finishers Total Points\r
  \r
      firsttotalpoints = (firstpositionpoints * 0.4) + (sof * 0.3) + (firsttimepoints * 0.3);\r
      secondtotalpoints = (secondpositionpoints * 0.4) + (sof * 0.3) + (secondtimepoints * 0.3);\r
      thirdtotalpoints = (thirdpositionpoints * 0.4) + (sof * 0.3) + (thirdtimepoints * 0.3);\r
      fourthtotalpoints = (fourthpositionpoints * 0.4) + (sof * 0.3) + (fourthtimepoints * 0.3);\r
      fifthtotalpoints = (fifthpositionpoints * 0.4) + (sof * 0.3) + (fifthtimepoints * 0.3);\r
      youtotalpoints = (youpositionpoints * 0.4) + (sof * 0.3) + (youtimepoints * 0.3);\r
  \r
  \r
      document.getElementById("positionpoints1").innerHTML = "1st: " + firstpositionpoints.toFixed(2);\r
      document.getElementById("positionpoints2").innerHTML = "2nd: " + secondpositionpoints.toFixed(2);\r
      document.getElementById("positionpoints3").innerHTML = "3rd: " + thirdpositionpoints.toFixed(2);\r
      document.getElementById("positionpoints4").innerHTML = "4th: " + fourthpositionpoints.toFixed(2);\r
      document.getElementById("positionpoints5").innerHTML = "5th: " + fifthpositionpoints.toFixed(2);\r
      document.getElementById("positionpointsy").innerHTML = "you: " + youpositionpoints.toFixed(2);\r
      document.getElementById("sofpoints").innerHTML = sof.toFixed(2);\r
      document.getElementById("timepoints1").innerHTML = "1st: " + firsttimepoints.toFixed(2);\r
      document.getElementById("timepoints2").innerHTML = "2nd: " + secondtimepoints.toFixed(2);\r
      document.getElementById("timepoints3").innerHTML = "3rd: " + thirdtimepoints.toFixed(2);\r
      document.getElementById("timepoints4").innerHTML = "4th: " + fourthtimepoints.toFixed(2);\r
      document.getElementById("timepoints5").innerHTML = "5th: " + fifthtimepoints.toFixed(2);\r
      document.getElementById("timepointsy").innerHTML = "you: " + youtimepoints.toFixed(2);\r
      \r
      document.getElementById("totalpoints1").innerHTML = "1st: " + firsttotalpoints.toFixed(2);\r
      document.getElementById("totalpoints2").innerHTML = "2nd: " + secondtotalpoints.toFixed(2);\r
      document.getElementById("totalpoints3").innerHTML = "3rd: " + thirdtotalpoints.toFixed(2);\r
      document.getElementById("totalpoints4").innerHTML = "4th: " + fourthtotalpoints.toFixed(2);\r
      document.getElementById("totalpoints5").innerHTML = "5th: " + fifthtotalpoints.toFixed(2);\r
      document.getElementById("totalpointsy").innerHTML = "you: " + youtotalpoints.toFixed(2);\r
  \r
      document.getElementById("positionexplain").innerHTML = "Starting at " + thisbase + " with a drop off of " + thisdropoff + ". Based off of the race tier selected above.";\r
      document.getElementById("sofexplain").innerHTML = "Average of the top 5 PTO points of all the starters. All athletes get the same SOF score.";\r
      document.getElementById("timeexplain").innerHTML = "Finishers time is compared to the calculated average time of the races top finishers which is: " + raceaveragetime + ". The number of finishers impacts how the average time is calculated.";\r
      document.getElementById("totalexplain").innerHTML = "40% of the Position Points, 30% of the Strength of Field Points and 30% of the Time Points.";\r
  \r
  }`
			)),
				Cn.forEach(i),
				E.forEach(i),
				this.h();
		},
		h() {
			t(_, 'class', 'text-center text-ao-pink dark:text-ao-orange text-3xl font-semibold p-4'),
				t(ve, 'class', 'text-center p-2'),
				t(ye, 'href', 'https://protriathletes.org/pto-world-ranking-system/'),
				t(ge, 'class', 'italic text-center text-sm'),
				t(m, 'class', 'col-span-3 mx-auto max-w-lg'),
				t(I, 'class', 'flex grid grid-cols-3 gap-4 p-4'),
				t(
					L,
					'class',
					'text-2xl font-semibold underline decoration-dotted transition duration-150 ease-in-out'
				),
				t(L, 'data-te-toggle', 'tooltip'),
				t(
					L,
					'title',
					'Please enter the PTO points for the 5 athletes ranked the highest on the PTO rankings who will start this race.'
				),
				(k.__value = 'Diamond'),
				(k.value = k.__value),
				(M.__value = 'Platinum'),
				(M.value = M.__value),
				(S.__value = 'Gold'),
				(S.value = S.__value),
				(H.__value = 'Silver'),
				(H.value = H.__value),
				(O.__value = 'Bronze'),
				(O.value = O.__value),
				t(B, 'id', 'tier'),
				t(B, 'class', 'select variant-form-material'),
				t(F, 'class', 'label p-2'),
				t(q, 'class', 'input variant-form-material text-lg p-2'),
				t(q, 'type', 'number'),
				t(q, 'placeholder', 'Enter Race SOF'),
				t(q, 'id', 'start1'),
				t(D, 'class', 'label p-2'),
				t(J, 'href', 'https://protriathletes.org/'),
				t(J, 'target', '_blank'),
				t(j, 'class', 'italic'),
				t(x, 'class', 'col-span-1 mx-auto max-w-xl'),
				t(
					A,
					'class',
					'text-2xl font-semibold underline decoration-dotted transition duration-150 ease-in-out'
				),
				t(A, 'data-te-toggle', 'tooltip'),
				t(
					A,
					'title',
					'Please enter how many pro athletes finished the race as well as the top 5 finishers times. You can also insert your time and position to see how you stack up.'
				),
				t(
					K,
					'class',
					'block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
				),
				t(K, 'type', 'number'),
				t(K, 'placeholder', ' '),
				t(K, 'id', 'numberfinishers'),
				t(Q, 'for', 'numberfinishers'),
				t(
					Q,
					'class',
					'absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
				),
				t(N, 'class', 'relative py-2'),
				t(
					X,
					'class',
					'block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
				),
				t(X, 'type', 'time'),
				t(X, 'step', '1'),
				t(X, 'id', 'finisher1'),
				t(Z, 'for', 'finisher1'),
				t(
					Z,
					'class',
					'absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
				),
				t(V, 'class', 'relative py-2'),
				t(
					ee,
					'class',
					'block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
				),
				t(ee, 'type', 'time'),
				t(ee, 'step', '1'),
				t(ee, 'id', 'finisher2'),
				t(te, 'for', 'finisher2'),
				t(
					te,
					'class',
					'absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
				),
				t(C, 'class', 'relative py-2'),
				t(
					re,
					'class',
					'block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
				),
				t(re, 'type', 'time'),
				t(re, 'step', '1'),
				t(re, 'id', 'finisher3'),
				t(ne, 'for', 'finisher3'),
				t(
					ne,
					'class',
					'absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
				),
				t(z, 'class', 'relative py-2'),
				t(
					ie,
					'class',
					'block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
				),
				t(ie, 'type', 'time'),
				t(ie, 'step', '1'),
				t(ie, 'id', 'finisher4'),
				t(se, 'for', 'finisher4'),
				t(
					se,
					'class',
					'absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
				),
				t(U, 'class', 'relative py-2'),
				t(
					oe,
					'class',
					'block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
				),
				t(oe, 'type', 'time'),
				t(oe, 'step', '1'),
				t(oe, 'id', 'finisher5'),
				t(ae, 'for', 'finisher5'),
				t(
					ae,
					'class',
					'absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
				),
				t(R, 'class', 'relative py-2'),
				t(
					le,
					'class',
					'block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
				),
				t(le, 'type', 'time'),
				t(le, 'step', '1'),
				t(le, 'id', 'finisheryou'),
				t(de, 'for', 'finisheryou'),
				t(
					de,
					'class',
					'absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
				),
				t($, 'class', 'relative py-2'),
				t(
					ce,
					'class',
					'block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-ao-orange focus:outline-none focus:ring-0 focus:border-ao-orange peer'
				),
				t(ce, 'type', 'number'),
				t(ce, 'placeholder', ' '),
				t(ce, 'id', 'finisherplace'),
				t(fe, 'for', 'finisherplace'),
				t(
					fe,
					'class',
					'absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
				),
				t(W, 'class', 'relative py-2'),
				t(f, 'class', 'col-span-1 mx-auto max-w-xl'),
				t(w, 'class', 'flex grid grid-cols-2 gap-4 p-4'),
				t(G, 'type', 'button'),
				t(G, 'class', 'btn variant-filled btn-lg'),
				t(G, 'id', 'calculate'),
				t(Ee, 'class', 'col-span-3 mx-auto'),
				t(be, 'class', 'flex grid grid-cols-1 p-4'),
				t(Ie, 'class', 'text-2xl font-semibold'),
				t(Be, 'class', 'tooltiptext'),
				t(pe, 'class', 'tooltip'),
				t(Ae, 'id', 'totalpoints1'),
				t(Ne, 'id', 'totalpoints2'),
				t(Ve, 'id', 'totalpoints3'),
				t(Ce, 'id', 'totalpoints4'),
				t(ze, 'id', 'totalpoints5'),
				t(Ue, 'id', 'totalpointsy'),
				t(Re, 'id', 'totalexplain'),
				t(p, 'class', 'col-span-3 mx-auto text-center justify-center'),
				t(p, 'id', 'result4'),
				t(xe, 'class', 'flex grid grid-cols-3 gap-4 p-4'),
				t(Pe, 'class', 'text-2xl font-semibold underline decoration-dotted'),
				t(Te, 'class', 'tooltiptext'),
				t(ue, 'class', 'tooltip'),
				t($e, 'id', 'positionpoints1'),
				t(We, 'id', 'positionpoints2'),
				t(Ge, 'id', 'positionpoints3'),
				t(Ye, 'id', 'positionpoints4'),
				t(qe, 'id', 'positionpoints5'),
				t(je, 'id', 'positionpointsy'),
				t(Je, 'id', 'positionexplain'),
				t(u, 'class', 'col-span-1 mx-auto max-w-lg text-center p-4'),
				t(u, 'id', 'result1'),
				t(_e, 'class', 'text-2xl font-semibold underline decoration-dotted'),
				t(we, 'class', 'tooltiptext'),
				t(he, 'class', 'tooltip'),
				t(Ke, 'id', 'sofpoints'),
				t(Qe, 'id', 'sofexplain'),
				t(P, 'class', 'col-span-1 mx-auto max-w-lg text-center p-4'),
				t(P, 'id', 'result2'),
				t(Le, 'class', 'text-2xl font-semibold underline decoration-dotted'),
				t(Fe, 'class', 'tooltiptext'),
				t(me, 'class', 'tooltip'),
				t(Xe, 'id', 'timepoints1'),
				t(Ze, 'id', 'timepoints2'),
				t(et, 'id', 'timepoints3'),
				t(tt, 'id', 'timepoints4'),
				t(rt, 'id', 'timepoints5'),
				t(nt, 'id', 'timepointsy'),
				t(it, 'id', 'timeexplain'),
				t(h, 'class', 'col-span-1 mx-auto max-w-lg text-center p-4'),
				t(h, 'id', 'result3'),
				t(T, 'class', 'flex grid grid-cols-3 gap-4 p-4');
		},
		m(ot, E) {
			$n(ot, c, E),
				e(c, I),
				e(I, m),
				e(m, _),
				e(_, Et),
				e(m, xt),
				e(m, ve),
				e(ve, It),
				e(m, Bt),
				e(m, ge),
				e(ge, ye),
				e(ye, Pt),
				e(c, Tt),
				e(c, w),
				e(w, x),
				e(x, L),
				e(L, _t),
				e(x, wt),
				e(x, F),
				e(F, Oe),
				e(Oe, Lt),
				e(F, Ft),
				e(F, B),
				e(B, k),
				e(k, kt),
				e(B, M),
				e(M, Mt),
				e(B, S),
				e(S, St),
				e(B, H),
				e(H, Ht),
				e(B, O),
				e(O, Ot),
				e(x, Dt),
				e(x, D),
				e(D, De),
				e(De, At),
				e(D, Nt),
				e(D, q),
				e(x, Vt),
				e(x, j),
				e(j, Ct),
				e(j, J),
				e(J, zt),
				e(w, Ut),
				e(w, f),
				e(f, A),
				e(A, Rt),
				e(f, $t),
				e(f, N),
				e(N, K),
				e(N, Wt),
				e(N, Q),
				e(Q, Gt),
				e(f, Yt),
				e(f, V),
				e(V, X),
				e(V, qt),
				e(V, Z),
				e(Z, jt),
				e(f, Jt),
				e(f, C),
				e(C, ee),
				e(C, Kt),
				e(C, te),
				e(te, Qt),
				e(f, Xt),
				e(f, z),
				e(z, re),
				e(z, Zt),
				e(z, ne),
				e(ne, er),
				e(f, tr),
				e(f, U),
				e(U, ie),
				e(U, rr),
				e(U, se),
				e(se, nr),
				e(f, ir),
				e(f, R),
				e(R, oe),
				e(R, sr),
				e(R, ae),
				e(ae, or),
				e(f, ar),
				e(f, $),
				e($, le),
				e($, lr),
				e($, de),
				e(de, dr),
				e(f, cr),
				e(f, W),
				e(W, ce),
				e(W, fr),
				e(W, fe),
				e(fe, pr),
				e(c, ur),
				e(c, be),
				e(be, Ee),
				e(Ee, G),
				e(G, hr),
				e(c, mr),
				e(c, xe),
				e(xe, p),
				e(p, pe),
				e(pe, Ie),
				e(Ie, vr),
				e(pe, Be),
				e(Be, gr),
				e(p, yr),
				e(p, Ae),
				e(p, br),
				e(p, Ne),
				e(p, Er),
				e(p, Ve),
				e(p, xr),
				e(p, Ce),
				e(p, Ir),
				e(p, ze),
				e(p, Br),
				e(p, Ue),
				e(p, Pr),
				e(p, Re),
				e(c, Tr),
				e(c, T),
				e(T, u),
				e(u, ue),
				e(ue, Pe),
				e(Pe, _r),
				e(ue, Te),
				e(Te, wr),
				e(u, Lr),
				e(u, $e),
				e(u, Fr),
				e(u, We),
				e(u, kr),
				e(u, Ge),
				e(u, Mr),
				e(u, Ye),
				e(u, Sr),
				e(u, qe),
				e(u, Hr),
				e(u, je),
				e(u, Or),
				e(u, Je),
				e(T, Dr),
				e(T, P),
				e(P, he),
				e(he, _e),
				e(_e, Ar),
				e(he, we),
				e(we, Nr),
				e(P, Vr),
				e(P, Ke),
				e(P, Cr),
				e(P, Qe),
				e(T, zr),
				e(T, h),
				e(h, me),
				e(me, Le),
				e(Le, Ur),
				e(me, Fe),
				e(Fe, Rr),
				e(h, $r),
				e(h, Xe),
				e(h, Wr),
				e(h, Ze),
				e(h, Gr),
				e(h, et),
				e(h, Yr),
				e(h, tt),
				e(h, qr),
				e(h, rt),
				e(h, jr),
				e(h, nt),
				e(h, Jr),
				e(h, it),
				e(c, Kr),
				e(c, st),
				e(st, Qr);
		},
		p: yt,
		i: yt,
		o: yt,
		d(ot) {
			ot && i(c);
		}
	};
}
class Qn extends zn {
	constructor(c) {
		super(), Un(this, c, null, Kn, Rn, {});
	}
}
function Xn(bt) {
	let c, I;
	return (
		(c = new Qn({})),
		{
			c() {
				Wn(c.$$.fragment);
			},
			l(m) {
				Gn(c.$$.fragment, m);
			},
			m(m, _) {
				Yn(c, m, _), (I = !0);
			},
			p: yt,
			i(m) {
				I || (qn(c.$$.fragment, m), (I = !0));
			},
			o(m) {
				jn(c.$$.fragment, m), (I = !1);
			},
			d(m) {
				Jn(c, m);
			}
		}
	);
}
class ei extends zn {
	constructor(c) {
		super(), Un(this, c, null, Xn, Rn, {});
	}
}
export { ei as component };
