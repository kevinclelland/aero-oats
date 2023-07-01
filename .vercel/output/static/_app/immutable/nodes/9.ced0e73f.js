import {
	S as _e,
	i as Me,
	s as ke,
	k as n,
	q as w,
	a as o,
	l as a,
	m as d,
	r as I,
	h as s,
	c,
	n as t,
	b as De,
	F as e,
	$ as W,
	y as be,
	z as Le,
	A as He,
	g as Pe,
	d as $e,
	B as Ve
} from '../chunks/index.460b5f26.js';
function Se(z) {
	let r,
		u,
		l,
		g,
		F,
		O,
		x,
		Y,
		G,
		B,
		i,
		T,
		J,
		K,
		Q,
		y,
		_,
		X,
		Z,
		M,
		ee,
		h,
		k,
		te,
		ne,
		D,
		ae,
		re,
		se,
		E,
		m,
		b,
		de,
		le,
		L,
		oe,
		H,
		ce,
		p,
		P,
		ie,
		ue,
		$,
		me,
		V,
		pe,
		R,
		ve;
	return {
		c() {
			(r = n('body')),
				(u = n('div')),
				(l = n('div')),
				(g = n('p')),
				(F = w('The Countdown')),
				(O = o()),
				(x = n('p')),
				(Y = w("What's between you and your race?")),
				(G = o()),
				(B = n('div')),
				(i = n('div')),
				(T = n('h2')),
				(J = w('Inputs')),
				(K = n('br')),
				(Q = o()),
				(y = n('label')),
				(_ = n('div')),
				(X = w('Input Racing Date')),
				(Z = o()),
				(M = n('input')),
				(ee = o()),
				(h = n('label')),
				(k = n('span')),
				(te = w('Input Training Start')),
				(ne = o()),
				(D = n('input')),
				(ae = o()),
				(re = n('br')),
				(se = o()),
				(E = n('div')),
				(m = n('div')),
				(b = n('h2')),
				(de = w('Days till race')),
				(le = o()),
				(L = n('p')),
				(oe = o()),
				(H = n('p')),
				(ce = o()),
				(p = n('div')),
				(P = n('h2')),
				(ie = w('Training start to race')),
				(ue = o()),
				($ = n('p')),
				(me = o()),
				(V = n('p')),
				(pe = o()),
				(R = n('script')),
				(ve = w(`document.getElementById("result1").style.display = 'none';\r
  document.getElementById("result2").style.display = 'none';\r
  document.getElementById('racedate').addEventListener('input', update);\r
  document.getElementById('traindate').addEventListener('input', update2);\r
  \r
  var racedate = new Date(document.getElementById("racedate").value).getTime();\r
  var traindate = new Date(document.getElementById("traindate").value).getTime();\r
  var weeks;\r
  var weeks2;\r
  \r
  function update() {\r
  document.getElementById("result1").style.display = 'block';\r
  racedate = new Date(document.getElementById("racedate").value).getTime();\r
  \r
  var x = setInterval(function() {\r
  \r
    var now = new Date().getTime();\r
    var distance = racedate - now;\r
  \r
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));\r
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\r
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));\r
    var seconds = Math.floor((distance % (1000*60)) / 1000);\r
    weeks = days / 7;\r
  \r
    document.getElementById("outputdays").innerHTML = days + " days " + hours + " Hours " + minutes + " Minutes " + seconds + " seconds.";\r
    document.getElementById("outputdaysweeks").innerHTML = "That's " + Math.round(weeks) + " full weeks away.";\r
  \r
  if (distance < 0){\r
    clearInterval(x);\r
    document.getElementById("outputdays").innerHTML = "Hope the race went well!";\r
  }\r
  }\r
  )\r
      \r
  }\r
  \r
  function update2() {\r
  document.getElementById("result2").style.display = 'block';\r
  racedate = new Date(document.getElementById("racedate").value).getTime();\r
  traindate = new Date(document.getElementById("traindate").value).getTime();\r
  \r
  var x = setInterval(function() {\r
  \r
    var distance2 = racedate - traindate;\r
  \r
    var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));\r
    var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\r
    var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));\r
    var seconds2 = Math.floor((distance2 % (1000*60)) / 1000);\r
    weeks2 = days2 / 7;\r
    document.getElementById("outputdaystrain").innerHTML = days2 + " days.";\r
    document.getElementById("outputdaystrainweeks").innerHTML = "That's " + Math.round(weeks2) + " full weeks to train.";\r
  \r
  }\r
  )\r
      \r
  }`)),
				this.h();
		},
		l(A) {
			r = a(A, 'BODY', {});
			var v = d(r);
			u = a(v, 'DIV', { class: !0 });
			var ye = d(u);
			l = a(ye, 'DIV', { class: !0 });
			var N = d(l);
			g = a(N, 'P', { class: !0 });
			var he = d(g);
			(F = I(he, 'The Countdown')), he.forEach(s), (O = c(N)), (x = a(N, 'P', { class: !0 }));
			var fe = d(x);
			(Y = I(fe, "What's between you and your race?")),
				fe.forEach(s),
				N.forEach(s),
				ye.forEach(s),
				(G = c(v)),
				(B = a(v, 'DIV', { class: !0 }));
			var ge = d(B);
			i = a(ge, 'DIV', { class: !0 });
			var f = d(i);
			T = a(f, 'H2', { class: !0 });
			var Ee = d(T);
			(J = I(Ee, 'Inputs')),
				Ee.forEach(s),
				(K = a(f, 'BR', {})),
				(Q = c(f)),
				(y = a(f, 'LABEL', { class: !0, id: !0 }));
			var j = d(y);
			_ = a(j, 'DIV', { class: !0 });
			var we = d(_);
			(X = I(we, 'Input Racing Date')),
				we.forEach(s),
				(Z = c(j)),
				(M = a(j, 'INPUT', { class: !0, type: !0, id: !0 })),
				j.forEach(s),
				(ee = c(f)),
				(h = a(f, 'LABEL', { class: !0, id: !0 }));
			var q = d(h);
			k = a(q, 'SPAN', { class: !0 });
			var Ie = d(k);
			(te = I(Ie, 'Input Training Start')),
				Ie.forEach(s),
				(ne = c(q)),
				(D = a(q, 'INPUT', { class: !0, type: !0, id: !0 })),
				q.forEach(s),
				(ae = c(f)),
				(re = a(f, 'BR', {})),
				f.forEach(s),
				ge.forEach(s),
				(se = c(v)),
				(E = a(v, 'DIV', { class: !0 }));
			var U = d(E);
			m = a(U, 'DIV', { class: !0, id: !0 });
			var S = d(m);
			b = a(S, 'H2', { class: !0 });
			var xe = d(b);
			(de = I(xe, 'Days till race')),
				xe.forEach(s),
				(le = c(S)),
				(L = a(S, 'P', { class: !0, id: !0 })),
				d(L).forEach(s),
				(oe = c(S)),
				(H = a(S, 'P', { class: !0, id: !0 })),
				d(H).forEach(s),
				S.forEach(s),
				(ce = c(U)),
				(p = a(U, 'DIV', { class: !0, id: !0 }));
			var C = d(p);
			P = a(C, 'H2', { class: !0 });
			var Be = d(P);
			(ie = I(Be, 'Training start to race')),
				Be.forEach(s),
				(ue = c(C)),
				($ = a(C, 'P', { class: !0, id: !0 })),
				d($).forEach(s),
				(me = c(C)),
				(V = a(C, 'P', { class: !0, id: !0 })),
				d(V).forEach(s),
				C.forEach(s),
				U.forEach(s),
				(pe = c(v)),
				(R = a(v, 'SCRIPT', {}));
			var Te = d(R);
			(ve = I(
				Te,
				`document.getElementById("result1").style.display = 'none';\r
  document.getElementById("result2").style.display = 'none';\r
  document.getElementById('racedate').addEventListener('input', update);\r
  document.getElementById('traindate').addEventListener('input', update2);\r
  \r
  var racedate = new Date(document.getElementById("racedate").value).getTime();\r
  var traindate = new Date(document.getElementById("traindate").value).getTime();\r
  var weeks;\r
  var weeks2;\r
  \r
  function update() {\r
  document.getElementById("result1").style.display = 'block';\r
  racedate = new Date(document.getElementById("racedate").value).getTime();\r
  \r
  var x = setInterval(function() {\r
  \r
    var now = new Date().getTime();\r
    var distance = racedate - now;\r
  \r
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));\r
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\r
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));\r
    var seconds = Math.floor((distance % (1000*60)) / 1000);\r
    weeks = days / 7;\r
  \r
    document.getElementById("outputdays").innerHTML = days + " days " + hours + " Hours " + minutes + " Minutes " + seconds + " seconds.";\r
    document.getElementById("outputdaysweeks").innerHTML = "That's " + Math.round(weeks) + " full weeks away.";\r
  \r
  if (distance < 0){\r
    clearInterval(x);\r
    document.getElementById("outputdays").innerHTML = "Hope the race went well!";\r
  }\r
  }\r
  )\r
      \r
  }\r
  \r
  function update2() {\r
  document.getElementById("result2").style.display = 'block';\r
  racedate = new Date(document.getElementById("racedate").value).getTime();\r
  traindate = new Date(document.getElementById("traindate").value).getTime();\r
  \r
  var x = setInterval(function() {\r
  \r
    var distance2 = racedate - traindate;\r
  \r
    var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));\r
    var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\r
    var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));\r
    var seconds2 = Math.floor((distance2 % (1000*60)) / 1000);\r
    weeks2 = days2 / 7;\r
    document.getElementById("outputdaystrain").innerHTML = days2 + " days.";\r
    document.getElementById("outputdaystrainweeks").innerHTML = "That's " + Math.round(weeks2) + " full weeks to train.";\r
  \r
  }\r
  )\r
      \r
  }`
			)),
				Te.forEach(s),
				v.forEach(s),
				this.h();
		},
		h() {
			t(g, 'class', 'text-center text-ao-pink dark:text-ao-orange text-3xl font-semibold p-4'),
				t(x, 'class', 'text-center p-2'),
				t(l, 'class', 'col-span-3 mx-auto max-w-lg'),
				t(u, 'class', 'flex grid grid-cols-3 gap-4 p-4'),
				t(T, 'class', 'text-2xl font-semibold text-center'),
				t(_, 'class', 'px-2 min-w-max'),
				t(M, 'class', 'input text-lg p-2 max-w-xs'),
				t(M, 'type', 'date'),
				t(M, 'id', 'racedate'),
				t(y, 'class', 'label p-2 flex items-center justify-end'),
				t(y, 'id', 'raceInputDiv'),
				t(k, 'class', 'px-2 min-w-max'),
				t(D, 'class', 'input text-lg p-2 max-w-xs'),
				t(D, 'type', 'date'),
				t(D, 'id', 'traindate'),
				t(h, 'class', 'label p-2 flex items-center justify-end'),
				t(h, 'id', 'trainInputDiv'),
				t(i, 'class', 'col-span-3 mx-auto max-w-lg'),
				t(B, 'class', 'flex grid grid-cols-3 gap-4 p-4'),
				t(b, 'class', 'text-2xl font-semibold text-center'),
				t(L, 'class', 'text-center'),
				t(L, 'id', 'outputdays'),
				t(H, 'class', 'text-center'),
				t(H, 'id', 'outputdaysweeks'),
				t(m, 'class', 'col-span-3 mx-auto max-w-lg'),
				t(m, 'id', 'result1'),
				t(P, 'class', 'text-2xl font-semibold text-center'),
				t($, 'class', 'text-center'),
				t($, 'id', 'outputdaystrain'),
				t(V, 'class', 'text-center'),
				t(V, 'id', 'outputdaystrainweeks'),
				t(p, 'class', 'col-span-3 mx-auto max-w-lg'),
				t(p, 'id', 'result2'),
				t(E, 'class', 'flex grid grid-cols-3 gap-4 p-4');
		},
		m(A, v) {
			De(A, r, v),
				e(r, u),
				e(u, l),
				e(l, g),
				e(g, F),
				e(l, O),
				e(l, x),
				e(x, Y),
				e(r, G),
				e(r, B),
				e(B, i),
				e(i, T),
				e(T, J),
				e(i, K),
				e(i, Q),
				e(i, y),
				e(y, _),
				e(_, X),
				e(y, Z),
				e(y, M),
				e(i, ee),
				e(i, h),
				e(h, k),
				e(k, te),
				e(h, ne),
				e(h, D),
				e(i, ae),
				e(i, re),
				e(r, se),
				e(r, E),
				e(E, m),
				e(m, b),
				e(b, de),
				e(m, le),
				e(m, L),
				e(m, oe),
				e(m, H),
				e(E, ce),
				e(E, p),
				e(p, P),
				e(P, ie),
				e(p, ue),
				e(p, $),
				e(p, me),
				e(p, V),
				e(r, pe),
				e(r, R),
				e(R, ve);
		},
		p: W,
		i: W,
		o: W,
		d(A) {
			A && s(r);
		}
	};
}
class Ce extends _e {
	constructor(r) {
		super(), Me(this, r, null, Se, ke, {});
	}
}
function Re(z) {
	let r, u;
	return (
		(r = new Ce({})),
		{
			c() {
				be(r.$$.fragment);
			},
			l(l) {
				Le(r.$$.fragment, l);
			},
			m(l, g) {
				He(r, l, g), (u = !0);
			},
			p: W,
			i(l) {
				u || (Pe(r.$$.fragment, l), (u = !0));
			},
			o(l) {
				$e(r.$$.fragment, l), (u = !1);
			},
			d(l) {
				Ve(r, l);
			}
		}
	);
}
class Ne extends _e {
	constructor(r) {
		super(), Me(this, r, null, Re, ke, {});
	}
}
export { Ne as component };
