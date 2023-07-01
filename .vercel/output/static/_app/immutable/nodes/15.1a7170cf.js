import {
	S as sn,
	i as an,
	s as cn,
	k as n,
	q as m,
	a as c,
	l,
	m as a,
	r as p,
	h as s,
	c as r,
	n as t,
	b as rn,
	F as e,
	M as wt,
	$ as ke,
	V as dn,
	y as on,
	z as un,
	A as mn,
	g as pn,
	d as yn,
	B as vn
} from '../chunks/index.460b5f26.js';
function In(Pe) {
	let i,
		I,
		o,
		D,
		Te,
		we,
		C,
		Le,
		Ve,
		R,
		v,
		Se,
		Ae,
		f,
		_,
		E,
		Me,
		ae,
		Fe,
		Ne,
		k,
		g,
		Oe,
		ie,
		He,
		Ce,
		P,
		b,
		Re,
		ce,
		$e,
		Ue,
		Ye,
		je,
		$,
		re,
		qe,
		ze,
		d,
		U,
		Ge,
		Je,
		Ke,
		h,
		Y,
		Qe,
		We,
		T,
		Xe,
		B,
		j,
		Ze,
		et,
		N,
		tt,
		x,
		q,
		nt,
		lt,
		w,
		st,
		at,
		it,
		z,
		L,
		G,
		ct,
		de,
		rt,
		dt,
		ot,
		ut,
		J,
		K,
		V,
		mt,
		pt,
		Q,
		S,
		W,
		yt,
		vt,
		oe,
		It,
		X,
		A,
		O,
		Z,
		ft,
		ee,
		Et,
		gt,
		ue,
		bt,
		te,
		M,
		H,
		ne,
		ht,
		le,
		Bt,
		xt,
		me,
		Dt,
		pe,
		_t,
		kt,
		Lt;
	return {
		c() {
			(i = n('body')),
				(I = n('div')),
				(o = n('div')),
				(D = n('p')),
				(Te = m('Time Distance Pace')),
				(we = c()),
				(C = n('p')),
				(Le = m('Calculate your time, distance or pace')),
				(Ve = c()),
				(R = n('div')),
				(v = n('div')),
				(Se = n('br')),
				(Ae = c()),
				(f = n('div')),
				(_ = n('label')),
				(E = n('input')),
				(Me = c()),
				(ae = n('p')),
				(Fe = m('TIME given distance and pace')),
				(Ne = c()),
				(k = n('label')),
				(g = n('input')),
				(Oe = c()),
				(ie = n('p')),
				(He = m('DISTANCE given time and pace')),
				(Ce = c()),
				(P = n('label')),
				(b = n('input')),
				(Re = c()),
				(ce = n('p')),
				($e = m('PACE given time and distance')),
				(Ue = c()),
				(Ye = n('br')),
				(je = c()),
				($ = n('div')),
				(re = n('i')),
				(qe = m('Input your values below')),
				(ze = c()),
				(d = n('div')),
				(U = n('h2')),
				(Ge = m('Inputs')),
				(Je = n('br')),
				(Ke = c()),
				(h = n('label')),
				(Y = n('span')),
				(Qe = m('Input Time')),
				(We = c()),
				(T = n('input')),
				(Xe = c()),
				(B = n('label')),
				(j = n('span')),
				(Ze = m('Input Distance')),
				(et = c()),
				(N = n('input')),
				(tt = c()),
				(x = n('label')),
				(q = n('span')),
				(nt = m('Input Pace')),
				(lt = c()),
				(w = n('input')),
				(st = c()),
				(at = n('br')),
				(it = c()),
				(z = n('div')),
				(L = n('label')),
				(G = n('input')),
				(ct = c()),
				(de = n('p')),
				(rt = m('Check to use miles not kilometers')),
				(dt = c()),
				(ot = n('br')),
				(ut = c()),
				(J = n('div')),
				(K = n('div')),
				(V = n('button')),
				(mt = m('Calculate')),
				(pt = c()),
				(Q = n('div')),
				(S = n('div')),
				(W = n('h2')),
				(yt = m('Result Time')),
				(vt = c()),
				(oe = n('p')),
				(It = c()),
				(X = n('div')),
				(A = n('div')),
				(O = n('div')),
				(Z = n('h2')),
				(ft = m('Result Distance')),
				(ee = n('span')),
				(Et = m('How far you can go given a time and a pace.')),
				(gt = c()),
				(ue = n('p')),
				(bt = c()),
				(te = n('div')),
				(M = n('div')),
				(H = n('div')),
				(ne = n('h2')),
				(ht = m('Result Pace')),
				(le = n('span')),
				(Bt = m('How fast a distance can be covered given a time.')),
				(xt = c()),
				(me = n('p')),
				(Dt = c()),
				(pe = n('script')),
				(_t = m(`document.getElementById("result1").style.display = 'none';\r
        document.getElementById("result2").style.display = 'none';\r
        document.getElementById("result3").style.display = 'none';\r
        document.getElementById("timeInputDiv").style.display = 'none';\r
        \r
        var button = document.getElementById('calculate')\r
        \r
        var time = document.getElementById("time").value;\r
        var distance = document.getElementById("distance").value;\r
        var pace = document.getElementById("pace").value;\r
        \r
        \r
        function selectionFunction() {\r
         if (document.getElementById("timeselect").checked) {\r
        \r
        document.getElementById("timeInputDiv").style.display = 'none';\r
        document.getElementById("distanceInputDiv").style.visibility = 'visible';\r
        document.getElementById("distanceInputDiv").style.display = 'block';\r
        document.getElementById("paceInputDiv").style.visibility = 'visible';\r
        document.getElementById("paceInputDiv").style.display = 'block';\r
        \r
        } else if (document.getElementById("distanceselect").checked) {\r
        \r
        document.getElementById("timeInputDiv").style.display = 'block';\r
        document.getElementById("timeInputDiv").style.visibility = 'visible';\r
        document.getElementById("distanceInputDiv").style.display = 'none';\r
        document.getElementById("paceInputDiv").style.visibility = 'visible';\r
        document.getElementById("paceInputDiv").style.display = 'block';\r
        \r
        } else {\r
        document.getElementById("timeInputDiv").style.display = 'block';\r
        document.getElementById("timeInputDiv").style.visibility = 'visible';\r
        document.getElementById("distanceInputDiv").style.display = 'block';\r
        document.getElementById("distanceInputDiv").style.visibility = 'visible';\r
        document.getElementById("paceInputDiv").style.display = 'none';\r
        }\r
        }\r
        \r
        \r
        \r
        \r
        \r
        button.onclick = function() {\r
            \r
            var firsttime = document.getElementById("time").value;\r
            var firstdistance = document.getElementById("distance").value;\r
            var firstpace = document.getElementById("pace").value;\r
            \r
            \r
            \r
        \r
        if (document.getElementById("timeselect").checked) {\r
        \r
            document.getElementById("result1").style.display = 'block';\r
            document.getElementById("result2").style.display = 'none';\r
            document.getElementById("result3").style.display = 'none';\r
         //calculate time\r
            apace = firstpace.split(':');\r
            paceseconds = (+apace[0]) * 60 * 60 + (+apace[1]) * 60 + (+apace[2]);\r
            timeseconds = paceseconds * firstdistance * 1000;\r
            firsttime = new Date(timeseconds).toISOString().slice(11, 19);    \r
            document.getElementById("timeOutput").innerHTML = "Your time will be " + firsttime + " given a distance of " + firstdistance  + ((document.getElementById('checkForMiles').checked) ? " miles and a pace of " : " kilometers and a pace of ") + firstpace +".";\r
        \r
        } else if (document.getElementById("distanceselect").checked) {\r
            document.getElementById("result1").style.display = 'none';\r
            document.getElementById("result2").style.display = 'block';\r
            document.getElementById("result3").style.display = 'none';\r
        \r
         //calculate distance\r
            apace = firstpace.split(':');\r
            paceseconds = (+apace[0]) * 60 * 60 + (+apace[1]) * 60 + (+apace[2]);\r
            atime = firsttime.split(':');\r
            timeseconds = (+atime[0]) * 60 * 60 + (+atime[1]) * 60 + (+atime[2]);\r
            firstdistance = timeseconds / paceseconds;\r
            document.getElementById("distanceOutput").innerHTML = "You will run " + firstdistance.toFixed(2) + ((document.getElementById('checkForMiles').checked) ? " miles given a pace of " : " kilometers given a pace of ") + firstpace + " and a time of " + firsttime;\r
        \r
        } else {\r
            document.getElementById("result1").style.display = 'none';\r
            document.getElementById("result2").style.display = 'none';\r
            document.getElementById("result3").style.display = 'block';\r
        \r
            //calculate pace\r
            atime = firsttime.split(':');\r
            timeseconds = (+atime[0]) * 60 * 60 + (+atime[1]) * 60 + (+atime[2]);\r
            paceseconds = timeseconds / firstdistance * 1000;\r
            firstpace = new Date(paceseconds).toISOString().slice(11, 19);\r
            document.getElementById("paceOutput").innerHTML = "Your pace will be " + firstpace + " given a distance of " + firstdistance + ((document.getElementById('checkForMiles').checked) ? " miles and a time of " : " kilometers and a time of ") + firsttime;\r
        }\r
        \r
           \r
        \r
            \r
        }`)),
				this.h();
		},
		l(ye) {
			i = l(ye, 'BODY', {});
			var u = a(i);
			I = l(u, 'DIV', { class: !0 });
			var Vt = a(I);
			o = l(Vt, 'DIV', { class: !0 });
			var ve = a(o);
			D = l(ve, 'P', { class: !0 });
			var St = a(D);
			(Te = p(St, 'Time Distance Pace')),
				St.forEach(s),
				(we = r(ve)),
				(C = l(ve, 'P', { class: !0 }));
			var At = a(C);
			(Le = p(At, 'Calculate your time, distance or pace')),
				At.forEach(s),
				ve.forEach(s),
				Vt.forEach(s),
				(Ve = r(u)),
				(R = l(u, 'DIV', { class: !0 }));
			var Mt = a(R);
			v = l(Mt, 'DIV', { class: !0 });
			var F = a(v);
			(Se = l(F, 'BR', {})), (Ae = r(F)), (f = l(F, 'DIV', { class: !0 }));
			var se = a(f);
			_ = l(se, 'LABEL', { class: !0 });
			var Ie = a(_);
			(E = l(Ie, 'INPUT', { class: !0, type: !0, name: !0, id: !0 })),
				(Me = r(Ie)),
				(ae = l(Ie, 'P', {}));
			var Ft = a(ae);
			(Fe = p(Ft, 'TIME given distance and pace')),
				Ft.forEach(s),
				Ie.forEach(s),
				(Ne = r(se)),
				(k = l(se, 'LABEL', { class: !0 }));
			var fe = a(k);
			(g = l(fe, 'INPUT', { class: !0, type: !0, name: !0, id: !0 })),
				(Oe = r(fe)),
				(ie = l(fe, 'P', {}));
			var Nt = a(ie);
			(He = p(Nt, 'DISTANCE given time and pace')),
				Nt.forEach(s),
				fe.forEach(s),
				(Ce = r(se)),
				(P = l(se, 'LABEL', { class: !0 }));
			var Ee = a(P);
			(b = l(Ee, 'INPUT', { class: !0, type: !0, name: !0, id: !0 })),
				(Re = r(Ee)),
				(ce = l(Ee, 'P', {}));
			var Ot = a(ce);
			($e = p(Ot, 'PACE given time and distance')),
				Ot.forEach(s),
				Ee.forEach(s),
				se.forEach(s),
				(Ue = r(F)),
				(Ye = l(F, 'BR', {})),
				(je = r(F)),
				($ = l(F, 'DIV', { class: !0 }));
			var Ht = a($);
			re = l(Ht, 'I', {});
			var Ct = a(re);
			(qe = p(Ct, 'Input your values below')),
				Ct.forEach(s),
				Ht.forEach(s),
				F.forEach(s),
				Mt.forEach(s),
				(ze = r(u)),
				(d = l(u, 'DIV', { class: !0 }));
			var y = a(d);
			U = l(y, 'H2', { class: !0 });
			var Rt = a(U);
			(Ge = p(Rt, 'Inputs')),
				Rt.forEach(s),
				(Je = l(y, 'BR', {})),
				(Ke = r(y)),
				(h = l(y, 'LABEL', { class: !0, id: !0 }));
			var ge = a(h);
			Y = l(ge, 'SPAN', { class: !0 });
			var $t = a(Y);
			(Qe = p($t, 'Input Time')),
				$t.forEach(s),
				(We = r(ge)),
				(T = l(ge, 'INPUT', { class: !0, type: !0, step: !0, placeholder: !0, id: !0 })),
				ge.forEach(s),
				(Xe = r(y)),
				(B = l(y, 'LABEL', { class: !0, id: !0 }));
			var be = a(B);
			j = l(be, 'SPAN', { class: !0 });
			var Ut = a(j);
			(Ze = p(Ut, 'Input Distance')),
				Ut.forEach(s),
				(et = r(be)),
				(N = l(be, 'INPUT', { class: !0, type: !0, placeholder: !0, id: !0 })),
				be.forEach(s),
				(tt = r(y)),
				(x = l(y, 'LABEL', { class: !0, id: !0 }));
			var he = a(x);
			q = l(he, 'SPAN', { class: !0 });
			var Yt = a(q);
			(nt = p(Yt, 'Input Pace')),
				Yt.forEach(s),
				(lt = r(he)),
				(w = l(he, 'INPUT', { class: !0, type: !0, step: !0, placeholder: !0, id: !0 })),
				he.forEach(s),
				(st = r(y)),
				(at = l(y, 'BR', {})),
				(it = r(y)),
				(z = l(y, 'DIV', { class: !0 }));
			var jt = a(z);
			L = l(jt, 'LABEL', { class: !0 });
			var Be = a(L);
			(G = l(Be, 'INPUT', { class: !0, type: !0, id: !0 })), (ct = r(Be)), (de = l(Be, 'P', {}));
			var qt = a(de);
			(rt = p(qt, 'Check to use miles not kilometers')),
				qt.forEach(s),
				Be.forEach(s),
				jt.forEach(s),
				(dt = r(y)),
				(ot = l(y, 'BR', {})),
				y.forEach(s),
				(ut = r(u)),
				(J = l(u, 'DIV', { class: !0 }));
			var zt = a(J);
			K = l(zt, 'DIV', { class: !0 });
			var Gt = a(K);
			V = l(Gt, 'BUTTON', { type: !0, class: !0, id: !0 });
			var Jt = a(V);
			(mt = p(Jt, 'Calculate')),
				Jt.forEach(s),
				Gt.forEach(s),
				zt.forEach(s),
				(pt = r(u)),
				(Q = l(u, 'DIV', { class: !0 }));
			var Kt = a(Q);
			S = l(Kt, 'DIV', { id: !0 });
			var xe = a(S);
			W = l(xe, 'H2', { class: !0 });
			var Qt = a(W);
			(yt = p(Qt, 'Result Time')),
				Qt.forEach(s),
				(vt = r(xe)),
				(oe = l(xe, 'P', { id: !0 })),
				a(oe).forEach(s),
				xe.forEach(s),
				Kt.forEach(s),
				(It = r(u)),
				(X = l(u, 'DIV', { class: !0 }));
			var Wt = a(X);
			A = l(Wt, 'DIV', { id: !0 });
			var De = a(A);
			O = l(De, 'DIV', { class: !0 });
			var Pt = a(O);
			Z = l(Pt, 'H2', { class: !0 });
			var Xt = a(Z);
			(ft = p(Xt, 'Result Distance')), Xt.forEach(s), (ee = l(Pt, 'SPAN', { class: !0 }));
			var Zt = a(ee);
			(Et = p(Zt, 'How far you can go given a time and a pace.')),
				Zt.forEach(s),
				Pt.forEach(s),
				(gt = r(De)),
				(ue = l(De, 'P', { id: !0 })),
				a(ue).forEach(s),
				De.forEach(s),
				Wt.forEach(s),
				(bt = r(u)),
				(te = l(u, 'DIV', { class: !0 }));
			var en = a(te);
			M = l(en, 'DIV', { id: !0 });
			var _e = a(M);
			H = l(_e, 'DIV', { class: !0 });
			var Tt = a(H);
			ne = l(Tt, 'H2', { class: !0 });
			var tn = a(ne);
			(ht = p(tn, 'Result Pace')), tn.forEach(s), (le = l(Tt, 'SPAN', { class: !0 }));
			var nn = a(le);
			(Bt = p(nn, 'How fast a distance can be covered given a time.')),
				nn.forEach(s),
				Tt.forEach(s),
				(xt = r(_e)),
				(me = l(_e, 'P', { id: !0 })),
				a(me).forEach(s),
				_e.forEach(s),
				en.forEach(s),
				(Dt = r(u)),
				(pe = l(u, 'SCRIPT', {}));
			var ln = a(pe);
			(_t = p(
				ln,
				`document.getElementById("result1").style.display = 'none';\r
        document.getElementById("result2").style.display = 'none';\r
        document.getElementById("result3").style.display = 'none';\r
        document.getElementById("timeInputDiv").style.display = 'none';\r
        \r
        var button = document.getElementById('calculate')\r
        \r
        var time = document.getElementById("time").value;\r
        var distance = document.getElementById("distance").value;\r
        var pace = document.getElementById("pace").value;\r
        \r
        \r
        function selectionFunction() {\r
         if (document.getElementById("timeselect").checked) {\r
        \r
        document.getElementById("timeInputDiv").style.display = 'none';\r
        document.getElementById("distanceInputDiv").style.visibility = 'visible';\r
        document.getElementById("distanceInputDiv").style.display = 'block';\r
        document.getElementById("paceInputDiv").style.visibility = 'visible';\r
        document.getElementById("paceInputDiv").style.display = 'block';\r
        \r
        } else if (document.getElementById("distanceselect").checked) {\r
        \r
        document.getElementById("timeInputDiv").style.display = 'block';\r
        document.getElementById("timeInputDiv").style.visibility = 'visible';\r
        document.getElementById("distanceInputDiv").style.display = 'none';\r
        document.getElementById("paceInputDiv").style.visibility = 'visible';\r
        document.getElementById("paceInputDiv").style.display = 'block';\r
        \r
        } else {\r
        document.getElementById("timeInputDiv").style.display = 'block';\r
        document.getElementById("timeInputDiv").style.visibility = 'visible';\r
        document.getElementById("distanceInputDiv").style.display = 'block';\r
        document.getElementById("distanceInputDiv").style.visibility = 'visible';\r
        document.getElementById("paceInputDiv").style.display = 'none';\r
        }\r
        }\r
        \r
        \r
        \r
        \r
        \r
        button.onclick = function() {\r
            \r
            var firsttime = document.getElementById("time").value;\r
            var firstdistance = document.getElementById("distance").value;\r
            var firstpace = document.getElementById("pace").value;\r
            \r
            \r
            \r
        \r
        if (document.getElementById("timeselect").checked) {\r
        \r
            document.getElementById("result1").style.display = 'block';\r
            document.getElementById("result2").style.display = 'none';\r
            document.getElementById("result3").style.display = 'none';\r
         //calculate time\r
            apace = firstpace.split(':');\r
            paceseconds = (+apace[0]) * 60 * 60 + (+apace[1]) * 60 + (+apace[2]);\r
            timeseconds = paceseconds * firstdistance * 1000;\r
            firsttime = new Date(timeseconds).toISOString().slice(11, 19);    \r
            document.getElementById("timeOutput").innerHTML = "Your time will be " + firsttime + " given a distance of " + firstdistance  + ((document.getElementById('checkForMiles').checked) ? " miles and a pace of " : " kilometers and a pace of ") + firstpace +".";\r
        \r
        } else if (document.getElementById("distanceselect").checked) {\r
            document.getElementById("result1").style.display = 'none';\r
            document.getElementById("result2").style.display = 'block';\r
            document.getElementById("result3").style.display = 'none';\r
        \r
         //calculate distance\r
            apace = firstpace.split(':');\r
            paceseconds = (+apace[0]) * 60 * 60 + (+apace[1]) * 60 + (+apace[2]);\r
            atime = firsttime.split(':');\r
            timeseconds = (+atime[0]) * 60 * 60 + (+atime[1]) * 60 + (+atime[2]);\r
            firstdistance = timeseconds / paceseconds;\r
            document.getElementById("distanceOutput").innerHTML = "You will run " + firstdistance.toFixed(2) + ((document.getElementById('checkForMiles').checked) ? " miles given a pace of " : " kilometers given a pace of ") + firstpace + " and a time of " + firsttime;\r
        \r
        } else {\r
            document.getElementById("result1").style.display = 'none';\r
            document.getElementById("result2").style.display = 'none';\r
            document.getElementById("result3").style.display = 'block';\r
        \r
            //calculate pace\r
            atime = firsttime.split(':');\r
            timeseconds = (+atime[0]) * 60 * 60 + (+atime[1]) * 60 + (+atime[2]);\r
            paceseconds = timeseconds / firstdistance * 1000;\r
            firstpace = new Date(paceseconds).toISOString().slice(11, 19);\r
            document.getElementById("paceOutput").innerHTML = "Your pace will be " + firstpace + " given a distance of " + firstdistance + ((document.getElementById('checkForMiles').checked) ? " miles and a time of " : " kilometers and a time of ") + firsttime;\r
        }\r
        \r
           \r
        \r
            \r
        }`
			)),
				ln.forEach(s),
				u.forEach(s),
				this.h();
		},
		h() {
			t(D, 'class', 'text-center text-ao-pink dark:text-ao-orange text-3xl font-semibold p-4'),
				t(C, 'class', 'text-center p-2'),
				t(o, 'class', 'col-span-3 mx-auto max-w-lg'),
				t(I, 'class', 'flex grid grid-cols-3 gap-4 p-4'),
				t(E, 'class', 'radio'),
				t(E, 'type', 'radio'),
				(E.checked = !0),
				t(E, 'name', 'radio-direct'),
				(E.value = 'time'),
				t(E, 'id', 'timeselect'),
				t(_, 'class', 'flex items-center space-x-2'),
				t(g, 'class', 'radio'),
				t(g, 'type', 'radio'),
				t(g, 'name', 'radio-direct'),
				(g.value = 'distance'),
				t(g, 'id', 'distanceselect'),
				t(k, 'class', 'flex items-center space-x-2'),
				t(b, 'class', 'radio'),
				t(b, 'type', 'radio'),
				t(b, 'name', 'radio-direct'),
				(b.value = 'pace'),
				t(b, 'id', 'paceselect'),
				t(P, 'class', 'flex items-center space-x-2'),
				t(f, 'class', 'space-y-2'),
				t($, 'class', 'text-center'),
				t(v, 'class', 'col-span-3 mx-auto max-w-lg'),
				t(R, 'class', 'flex grid grid-cols-3 gap-4 p-4'),
				t(U, 'class', 'text-2xl font-semibold text-center'),
				t(Y, 'class', 'px-2'),
				t(T, 'class', 'input text-lg p-2 max-w-xs'),
				t(T, 'type', 'time'),
				t(T, 'step', '1'),
				t(T, 'placeholder', '00:00:00 '),
				t(T, 'id', 'time'),
				t(h, 'class', 'label p-2 flex items-center justify-end'),
				t(h, 'id', 'timeInputDiv'),
				t(j, 'class', 'px-2'),
				t(N, 'class', 'input text-lg p-2 max-w-xs'),
				t(N, 'type', 'number'),
				t(N, 'placeholder', 'Enter'),
				t(N, 'id', 'distance'),
				t(B, 'class', 'label p-2 flex items-center justify-end'),
				t(B, 'id', 'distanceInputDiv'),
				t(q, 'class', 'px-2'),
				t(w, 'class', 'input text-lg p-2 max-w-xs'),
				t(w, 'type', 'time'),
				t(w, 'step', '1'),
				t(w, 'placeholder', '00:00:00'),
				t(w, 'id', 'pace'),
				t(x, 'class', 'label p-2 flex items-center justify-end'),
				t(x, 'id', 'paceInputDiv'),
				t(G, 'class', 'checkbox'),
				t(G, 'type', 'checkbox'),
				t(G, 'id', 'checkForMiles'),
				t(L, 'class', 'flex items-center space-x-2'),
				t(z, 'class', 'space-y-2'),
				t(d, 'class', 'col-span-3 mx-auto max-w-lg'),
				t(V, 'type', 'button'),
				t(V, 'class', 'btn variant-filled btn-lg'),
				t(V, 'id', 'calculate'),
				t(K, 'class', 'col-span-3 mx-auto'),
				t(J, 'class', 'flex grid grid-cols-1 p-4'),
				t(W, 'class', 'text-2xl font-semibold p-4'),
				t(oe, 'id', 'timeOutput'),
				t(S, 'id', 'result1'),
				t(Q, 'class', 'col-span-3 mx-auto max-w-lg text-center'),
				t(Z, 'class', 'text-2xl font-semibold'),
				t(ee, 'class', 'tooltiptext'),
				t(O, 'class', 'tooltip'),
				t(ue, 'id', 'distanceOutput'),
				t(A, 'id', 'result2'),
				t(X, 'class', 'col-span-3 mx-auto max-w-lg text-center'),
				t(ne, 'class', 'text-2xl font-semibold'),
				t(le, 'class', 'tooltiptext'),
				t(H, 'class', 'tooltip'),
				t(me, 'id', 'paceOutput'),
				t(M, 'id', 'result3'),
				t(te, 'class', 'col-span-3 mx-auto max-w-lg text-center');
		},
		m(ye, u) {
			rn(ye, i, u),
				e(i, I),
				e(I, o),
				e(o, D),
				e(D, Te),
				e(o, we),
				e(o, C),
				e(C, Le),
				e(i, Ve),
				e(i, R),
				e(R, v),
				e(v, Se),
				e(v, Ae),
				e(v, f),
				e(f, _),
				e(_, E),
				e(_, Me),
				e(_, ae),
				e(ae, Fe),
				e(f, Ne),
				e(f, k),
				e(k, g),
				e(k, Oe),
				e(k, ie),
				e(ie, He),
				e(f, Ce),
				e(f, P),
				e(P, b),
				e(P, Re),
				e(P, ce),
				e(ce, $e),
				e(v, Ue),
				e(v, Ye),
				e(v, je),
				e(v, $),
				e($, re),
				e(re, qe),
				e(i, ze),
				e(i, d),
				e(d, U),
				e(U, Ge),
				e(d, Je),
				e(d, Ke),
				e(d, h),
				e(h, Y),
				e(Y, Qe),
				e(h, We),
				e(h, T),
				e(d, Xe),
				e(d, B),
				e(B, j),
				e(j, Ze),
				e(B, et),
				e(B, N),
				e(d, tt),
				e(d, x),
				e(x, q),
				e(q, nt),
				e(x, lt),
				e(x, w),
				e(d, st),
				e(d, at),
				e(d, it),
				e(d, z),
				e(z, L),
				e(L, G),
				e(L, ct),
				e(L, de),
				e(de, rt),
				e(d, dt),
				e(d, ot),
				e(i, ut),
				e(i, J),
				e(J, K),
				e(K, V),
				e(V, mt),
				e(i, pt),
				e(i, Q),
				e(Q, S),
				e(S, W),
				e(W, yt),
				e(S, vt),
				e(S, oe),
				e(i, It),
				e(i, X),
				e(X, A),
				e(A, O),
				e(O, Z),
				e(Z, ft),
				e(O, ee),
				e(ee, Et),
				e(A, gt),
				e(A, ue),
				e(i, bt),
				e(i, te),
				e(te, M),
				e(M, H),
				e(H, ne),
				e(ne, ht),
				e(H, le),
				e(le, Bt),
				e(M, xt),
				e(M, me),
				e(i, Dt),
				e(i, pe),
				e(pe, _t),
				kt ||
					((Lt = [
						wt(E, 'change', selectionFunction),
						wt(g, 'change', selectionFunction),
						wt(b, 'change', selectionFunction)
					]),
					(kt = !0));
		},
		p: ke,
		i: ke,
		o: ke,
		d(ye) {
			ye && s(i), (kt = !1), dn(Lt);
		}
	};
}
class fn extends sn {
	constructor(i) {
		super(), an(this, i, null, In, cn, {});
	}
}
function En(Pe) {
	let i, I;
	return (
		(i = new fn({})),
		{
			c() {
				on(i.$$.fragment);
			},
			l(o) {
				un(i.$$.fragment, o);
			},
			m(o, D) {
				mn(i, o, D), (I = !0);
			},
			p: ke,
			i(o) {
				I || (pn(i.$$.fragment, o), (I = !0));
			},
			o(o) {
				yn(i.$$.fragment, o), (I = !1);
			},
			d(o) {
				vn(i, o);
			}
		}
	);
}
class bn extends sn {
	constructor(i) {
		super(), an(this, i, null, En, cn, {});
	}
}
export { bn as component };
