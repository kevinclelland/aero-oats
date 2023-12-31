import {
	S as he,
	i as ge,
	s as me,
	E as De,
	k as p,
	a as L,
	l as v,
	m as y,
	h as g,
	c as B,
	n as u,
	b as M,
	F as o,
	M as Q,
	G as Ae,
	H as Pe,
	I as Se,
	g as j,
	v as Te,
	d as C,
	f as Ve,
	V as dt,
	J as ht,
	a3 as fe,
	K as ke,
	L as we,
	N as ee,
	a4 as gt,
	a5 as Ze,
	a6 as mt,
	a7 as xe,
	a8 as de,
	w as ye,
	$ as F,
	a9 as qe,
	q,
	r as G,
	a1 as Ge,
	p as Ne,
	y as te,
	Y as bt,
	z as ae,
	A as le,
	B as se,
	aa as je,
	ab as Oe,
	e as $e,
	u as Ce
} from '../chunks/index.460b5f26.js';
import { T as _t } from '../chunks/Tools.03abc7db.js';
import { A as pt } from '../chunks/ProgressBar.svelte_svelte_type_style_lang.a411719e.js';
import { f as et } from '../chunks/utils.9a66bb98.js';
const vt = (n) => ({}),
	tt = (n) => ({});
function at(n) {
	let e, t, l;
	const a = n[17].panel,
		r = De(a, n, n[16], tt);
	return {
		c() {
			(e = p('div')), r && r.c(), this.h();
		},
		l(s) {
			e = v(s, 'DIV', { class: !0, role: !0, 'aria-labelledby': !0, tabindex: !0 });
			var i = y(e);
			r && r.l(i), i.forEach(g), this.h();
		},
		h() {
			u(e, 'class', (t = 'tab-panel ' + n[2])),
				u(e, 'role', 'tabpanel'),
				u(e, 'aria-labelledby', n[1]),
				u(e, 'tabindex', '0');
		},
		m(s, i) {
			M(s, e, i), r && r.m(e, null), (l = !0);
		},
		p(s, i) {
			r && r.p && (!l || i & 65536) && Ae(r, a, s, s[16], l ? Se(a, s[16], i, vt) : Pe(s[16]), tt),
				(!l || (i & 4 && t !== (t = 'tab-panel ' + s[2]))) && u(e, 'class', t),
				(!l || i & 2) && u(e, 'aria-labelledby', s[1]);
		},
		i(s) {
			l || (j(r, s), (l = !0));
		},
		o(s) {
			C(r, s), (l = !1);
		},
		d(s) {
			s && g(e), r && r.d(s);
		}
	};
}
function kt(n) {
	let e, t, l, a, r, s, i, d;
	const c = n[17].default,
		k = De(c, n, n[16], null);
	let b = n[5].panel && at(n);
	return {
		c() {
			(e = p('div')), (t = p('div')), k && k.c(), (a = L()), b && b.c(), this.h();
		},
		l(_) {
			e = v(_, 'DIV', { class: !0, 'data-testid': !0 });
			var f = y(e);
			t = v(f, 'DIV', { class: !0, role: !0, 'aria-labelledby': !0 });
			var T = y(t);
			k && k.l(T), T.forEach(g), (a = B(f)), b && b.l(f), f.forEach(g), this.h();
		},
		h() {
			u(t, 'class', (l = 'tab-list ' + n[3])),
				u(t, 'role', 'tablist'),
				u(t, 'aria-labelledby', n[0]),
				u(e, 'class', (r = 'tab-group ' + n[4])),
				u(e, 'data-testid', 'tab-group');
		},
		m(_, f) {
			M(_, e, f),
				o(e, t),
				k && k.m(t, null),
				o(e, a),
				b && b.m(e, null),
				(s = !0),
				i ||
					((d = [
						Q(e, 'click', n[18]),
						Q(e, 'keypress', n[19]),
						Q(e, 'keydown', n[20]),
						Q(e, 'keyup', n[21])
					]),
					(i = !0));
		},
		p(_, [f]) {
			k &&
				k.p &&
				(!s || f & 65536) &&
				Ae(k, c, _, _[16], s ? Se(c, _[16], f, null) : Pe(_[16]), null),
				(!s || (f & 8 && l !== (l = 'tab-list ' + _[3]))) && u(t, 'class', l),
				(!s || f & 1) && u(t, 'aria-labelledby', _[0]),
				_[5].panel
					? b
						? (b.p(_, f), f & 32 && j(b, 1))
						: ((b = at(_)), b.c(), j(b, 1), b.m(e, null))
					: b &&
					  (Te(),
					  C(b, 1, 1, () => {
							b = null;
					  }),
					  Ve()),
				(!s || (f & 16 && r !== (r = 'tab-group ' + _[4]))) && u(e, 'class', r);
		},
		i(_) {
			s || (j(k, _), j(b), (s = !0));
		},
		o(_) {
			C(k, _), C(b), (s = !1);
		},
		d(_) {
			_ && g(e), k && k.d(_), b && b.d(), (i = !1), dt(d);
		}
	};
}
const Et = 'space-y-4',
	It = 'flex overflow-x-auto hide-scrollbar',
	yt = '';
function wt(n, e, t) {
	let l,
		a,
		r,
		{ $$slots: s = {}, $$scope: i } = e;
	const d = ht(s);
	let { justify: c = 'justify-start' } = e,
		{ border: k = 'border-b border-surface-400-500-token' } = e,
		{ active: b = 'border-b-2 border-surface-900-50-token' } = e,
		{ hover: _ = 'hover:variant-soft' } = e,
		{ flex: f = 'flex-none' } = e,
		{ padding: T = 'px-4 py-2' } = e,
		{ rounded: V = 'rounded-tl-container-token rounded-tr-container-token' } = e,
		{ spacing: m = 'space-y-1' } = e,
		{ regionList: D = '' } = e,
		{ regionPanel: w = '' } = e,
		{ labelledby: R = '' } = e,
		{ panel: A = '' } = e;
	fe('active', b),
		fe('hover', _),
		fe('flex', f),
		fe('padding', T),
		fe('rounded', V),
		fe('spacing', m);
	function E(h) {
		ee.call(this, n, h);
	}
	function P(h) {
		ee.call(this, n, h);
	}
	function N(h) {
		ee.call(this, n, h);
	}
	function S(h) {
		ee.call(this, n, h);
	}
	return (
		(n.$$set = (h) => {
			t(22, (e = ke(ke({}, e), we(h)))),
				'justify' in h && t(6, (c = h.justify)),
				'border' in h && t(7, (k = h.border)),
				'active' in h && t(8, (b = h.active)),
				'hover' in h && t(9, (_ = h.hover)),
				'flex' in h && t(10, (f = h.flex)),
				'padding' in h && t(11, (T = h.padding)),
				'rounded' in h && t(12, (V = h.rounded)),
				'spacing' in h && t(13, (m = h.spacing)),
				'regionList' in h && t(14, (D = h.regionList)),
				'regionPanel' in h && t(15, (w = h.regionPanel)),
				'labelledby' in h && t(0, (R = h.labelledby)),
				'panel' in h && t(1, (A = h.panel)),
				'$$scope' in h && t(16, (i = h.$$scope));
		}),
		(n.$$.update = () => {
			t(4, (l = `${Et} ${e.class ?? ''}`)),
				n.$$.dirty & 16576 && t(3, (a = `${It} ${c} ${k} ${D}`)),
				n.$$.dirty & 32768 && t(2, (r = `${yt} ${w}`));
		}),
		(e = we(e)),
		[R, A, r, a, l, d, c, k, b, _, f, T, V, m, D, w, i, s, E, P, N, S]
	);
}
class Dt extends he {
	constructor(e) {
		super(),
			ge(this, e, wt, kt, me, {
				justify: 6,
				border: 7,
				active: 8,
				hover: 9,
				flex: 10,
				padding: 11,
				rounded: 12,
				spacing: 13,
				regionList: 14,
				regionPanel: 15,
				labelledby: 0,
				panel: 1
			});
	}
}
const At = (n) => ({}),
	lt = (n) => ({});
function st(n) {
	let e, t;
	const l = n[21].lead,
		a = De(l, n, n[20], lt);
	return {
		c() {
			(e = p('div')), a && a.c(), this.h();
		},
		l(r) {
			e = v(r, 'DIV', { class: !0 });
			var s = y(e);
			a && a.l(s), s.forEach(g), this.h();
		},
		h() {
			u(e, 'class', 'tab-lead');
		},
		m(r, s) {
			M(r, e, s), a && a.m(e, null), (t = !0);
		},
		p(r, s) {
			a &&
				a.p &&
				(!t || s[0] & 1048576) &&
				Ae(a, l, r, r[20], t ? Se(l, r[20], s, At) : Pe(r[20]), lt);
		},
		i(r) {
			t || (j(a, r), (t = !0));
		},
		o(r) {
			C(a, r), (t = !1);
		},
		d(r) {
			r && g(e), a && a.d(r);
		}
	};
}
function Pt(n) {
	let e,
		t,
		l,
		a,
		r,
		s,
		i,
		d,
		c,
		k,
		b,
		_,
		f,
		T,
		V,
		m = [{ type: 'radio' }, { name: n[1] }, { __value: n[2] }, n[10](), { tabindex: '-1' }],
		D = {};
	for (let E = 0; E < m.length; E += 1) D = ke(D, m[E]);
	let w = n[11].lead && st(n);
	const R = n[21].default,
		A = De(R, n, n[20], null);
	return (
		(f = gt(n[29][0])),
		{
			c() {
				(e = p('label')),
					(t = p('div')),
					(l = p('div')),
					(a = p('input')),
					(r = L()),
					(s = p('div')),
					w && w.c(),
					(i = L()),
					(d = p('div')),
					A && A.c(),
					this.h();
			},
			l(E) {
				e = v(E, 'LABEL', { class: !0 });
				var P = y(e);
				t = v(P, 'DIV', {
					class: !0,
					'data-testid': !0,
					role: !0,
					'aria-controls': !0,
					'aria-selected': !0,
					tabindex: !0
				});
				var N = y(t);
				l = v(N, 'DIV', { class: !0 });
				var S = y(l);
				(a = v(S, 'INPUT', { type: !0, name: !0, tabindex: !0 })),
					S.forEach(g),
					(r = B(N)),
					(s = v(N, 'DIV', { class: !0 }));
				var h = y(s);
				w && w.l(h), (i = B(h)), (d = v(h, 'DIV', { class: !0 }));
				var U = y(d);
				A && A.l(U), U.forEach(g), h.forEach(g), N.forEach(g), P.forEach(g), this.h();
			},
			h() {
				Ze(a, D),
					u(l, 'class', 'h-0 w-0 overflow-hidden'),
					u(d, 'class', 'tab-label'),
					u(s, 'class', (c = 'tab-interface ' + n[7])),
					u(t, 'class', (k = 'tab ' + n[6])),
					u(t, 'data-testid', 'tab'),
					u(t, 'role', 'tab'),
					u(t, 'aria-controls', n[3]),
					u(t, 'aria-selected', n[4]),
					u(t, 'tabindex', (b = n[4] ? 0 : -1)),
					u(e, 'class', n[8]),
					f.p(a);
			},
			m(E, P) {
				M(E, e, P),
					o(e, t),
					o(t, l),
					o(l, a),
					a.autofocus && a.focus(),
					n[27](a),
					(a.checked = a.__value === n[0]),
					o(t, r),
					o(t, s),
					w && w.m(s, null),
					o(s, i),
					o(s, d),
					A && A.m(d, null),
					(_ = !0),
					T ||
						((V = [
							Q(a, 'change', n[28]),
							Q(a, 'click', n[25]),
							Q(a, 'change', n[26]),
							Q(t, 'keydown', n[9]),
							Q(t, 'keydown', n[22]),
							Q(t, 'keyup', n[23]),
							Q(t, 'keypress', n[24])
						]),
						(T = !0));
			},
			p(E, P) {
				Ze(
					a,
					(D = mt(m, [
						{ type: 'radio' },
						(!_ || P[0] & 2) && { name: E[1] },
						(!_ || P[0] & 4) && { __value: E[2] },
						E[10](),
						{ tabindex: '-1' }
					]))
				),
					P[0] & 1 && (a.checked = a.__value === E[0]),
					E[11].lead
						? w
							? (w.p(E, P), P[0] & 2048 && j(w, 1))
							: ((w = st(E)), w.c(), j(w, 1), w.m(s, i))
						: w &&
						  (Te(),
						  C(w, 1, 1, () => {
								w = null;
						  }),
						  Ve()),
					A &&
						A.p &&
						(!_ || P[0] & 1048576) &&
						Ae(A, R, E, E[20], _ ? Se(R, E[20], P, null) : Pe(E[20]), null),
					(!_ || (P[0] & 128 && c !== (c = 'tab-interface ' + E[7]))) && u(s, 'class', c),
					(!_ || (P[0] & 64 && k !== (k = 'tab ' + E[6]))) && u(t, 'class', k),
					(!_ || P[0] & 8) && u(t, 'aria-controls', E[3]),
					(!_ || P[0] & 16) && u(t, 'aria-selected', E[4]),
					(!_ || (P[0] & 16 && b !== (b = E[4] ? 0 : -1))) && u(t, 'tabindex', b),
					(!_ || P[0] & 256) && u(e, 'class', E[8]);
			},
			i(E) {
				_ || (j(w), j(A, E), (_ = !0));
			},
			o(E) {
				C(w), C(A, E), (_ = !1);
			},
			d(E) {
				E && g(e), n[27](null), w && w.d(), A && A.d(E), f.r(), (T = !1), dt(V);
			}
		}
	);
}
const St = 'text-center cursor-pointer transition-colors duration-100',
	Tt = '';
function Vt(n, e, t) {
	let l, a, r, s, i;
	const d = [
		'group',
		'name',
		'value',
		'controls',
		'regionTab',
		'active',
		'hover',
		'flex',
		'padding',
		'rounded',
		'spacing'
	];
	let c = xe(e, d),
		{ $$slots: k = {}, $$scope: b } = e;
	const _ = ht(k);
	let { group: f } = e,
		{ name: T } = e,
		{ value: V } = e,
		{ controls: m = '' } = e,
		{ regionTab: D = '' } = e,
		{ active: w = de('active') } = e,
		{ hover: R = de('hover') } = e,
		{ flex: A = de('flex') } = e,
		{ padding: E = de('padding') } = e,
		{ rounded: P = de('rounded') } = e,
		{ spacing: N = de('spacing') } = e,
		S;
	function h(I) {
		if (['Enter', 'Space'].includes(I.code)) I.preventDefault(), S.click();
		else if (I.code === 'ArrowRight') {
			const Z = S.closest('.tab-list');
			if (!Z) return;
			const z = Array.from(Z.querySelectorAll('.tab')),
				x = S.closest('.tab');
			if (!x) return;
			const $ = z.indexOf(x),
				J = $ + 1 >= z.length ? 0 : $ + 1,
				Y = z[J],
				K = Y == null ? void 0 : Y.querySelector('input');
			Y && K && (K.click(), Y.focus());
		} else if (I.code === 'ArrowLeft') {
			const Z = S.closest('.tab-list');
			if (!Z) return;
			const z = Array.from(Z.querySelectorAll('.tab')),
				x = S.closest('.tab');
			if (!x) return;
			const $ = z.indexOf(x),
				J = $ - 1 < 0 ? z.length - 1 : $ - 1,
				Y = z[J],
				K = Y == null ? void 0 : Y.querySelector('input');
			Y && K && (K.click(), Y.focus());
		}
	}
	function U() {
		return delete c.class, c;
	}
	const ne = [[]];
	function re(I) {
		ee.call(this, n, I);
	}
	function ie(I) {
		ee.call(this, n, I);
	}
	function W(I) {
		ee.call(this, n, I);
	}
	function oe(I) {
		ee.call(this, n, I);
	}
	function be(I) {
		ee.call(this, n, I);
	}
	function X(I) {
		ye[I ? 'unshift' : 'push'](() => {
			(S = I), t(5, S);
		});
	}
	function _e() {
		(f = this.__value), t(0, f);
	}
	return (
		(n.$$set = (I) => {
			t(31, (e = ke(ke({}, e), we(I)))),
				t(30, (c = xe(e, d))),
				'group' in I && t(0, (f = I.group)),
				'name' in I && t(1, (T = I.name)),
				'value' in I && t(2, (V = I.value)),
				'controls' in I && t(3, (m = I.controls)),
				'regionTab' in I && t(12, (D = I.regionTab)),
				'active' in I && t(13, (w = I.active)),
				'hover' in I && t(14, (R = I.hover)),
				'flex' in I && t(15, (A = I.flex)),
				'padding' in I && t(16, (E = I.padding)),
				'rounded' in I && t(17, (P = I.rounded)),
				'spacing' in I && t(18, (N = I.spacing)),
				'$$scope' in I && t(20, (b = I.$$scope));
		}),
		(n.$$.update = () => {
			n.$$.dirty[0] & 5 && t(4, (l = V === f)),
				n.$$.dirty[0] & 24592 && t(19, (a = l ? w : R)),
				t(8, (r = `${St} ${A} ${E} ${P} ${a} ${e.class ?? ''}`)),
				n.$$.dirty[0] & 262144 && t(7, (s = `${Tt} ${N}`)),
				n.$$.dirty[0] & 4096 && t(6, (i = `${D}`));
		}),
		(e = we(e)),
		[f, T, V, m, l, S, i, s, r, h, U, _, D, w, R, A, E, P, N, a, b, k, re, ie, W, oe, be, X, _e, ne]
	);
}
class Me extends he {
	constructor(e) {
		super(),
			ge(
				this,
				e,
				Vt,
				Pt,
				me,
				{
					group: 0,
					name: 1,
					value: 2,
					controls: 3,
					regionTab: 12,
					active: 13,
					hover: 14,
					flex: 15,
					padding: 16,
					rounded: 17,
					spacing: 18
				},
				null,
				[-1, -1]
			);
	}
}
async function Rt({ fetch: n }) {
	return { posts: await (await n('api/posts')).json() };
}
const ea = Object.freeze(
	Object.defineProperty({ __proto__: null, load: Rt }, Symbol.toStringTag, { value: 'Module' })
);
function nt(n, e, t) {
	const l = n.slice();
	return (l[1] = e[t]), l;
}
function rt(n) {
	let e,
		t,
		l,
		a,
		r,
		s,
		i,
		d = n[1].name + '',
		c,
		k,
		b,
		_ = n[1].label + '',
		f,
		T;
	return {
		c() {
			(e = p('div')),
				(t = p('span')),
				(l = p('i')),
				(a = L()),
				(r = p('a')),
				(s = p('span')),
				(i = p('dt')),
				(c = q(d)),
				(k = L()),
				(b = p('dd')),
				(f = q(_)),
				(T = L()),
				this.h();
		},
		l(V) {
			e = v(V, 'DIV', {});
			var m = y(e);
			t = v(m, 'SPAN', { class: !0 });
			var D = y(t);
			(l = v(D, 'I', { class: !0 })),
				y(l).forEach(g),
				D.forEach(g),
				(a = B(m)),
				(r = v(m, 'A', { href: !0 }));
			var w = y(r);
			s = v(w, 'SPAN', { class: !0 });
			var R = y(s);
			i = v(R, 'DT', { class: !0 });
			var A = y(i);
			(c = G(A, d)), A.forEach(g), (k = B(R)), (b = v(R, 'DD', { class: !0 }));
			var E = y(b);
			(f = G(E, _)), E.forEach(g), R.forEach(g), w.forEach(g), (T = B(m)), m.forEach(g), this.h();
		},
		h() {
			u(l, 'class', 'fas fa-calendar-alt'),
				u(t, 'class', 'badge-icon p-4 variant-soft-secondary'),
				u(i, 'class', 'font-bold'),
				u(b, 'class', 'text-sm opacity-50 text-ellipsis'),
				u(s, 'class', 'flex-auto'),
				u(r, 'href', '/' + n[1].link);
		},
		m(V, m) {
			M(V, e, m),
				o(e, t),
				o(t, l),
				o(e, a),
				o(e, r),
				o(r, s),
				o(s, i),
				o(i, c),
				o(s, k),
				o(s, b),
				o(b, f),
				o(e, T);
		},
		p: F,
		d(V) {
			V && g(e);
		}
	};
}
function Lt(n) {
	let e,
		t = n[0],
		l = [];
	for (let a = 0; a < t.length; a += 1) l[a] = rt(nt(n, t, a));
	return {
		c() {
			e = p('dl');
			for (let a = 0; a < l.length; a += 1) l[a].c();
			this.h();
		},
		l(a) {
			e = v(a, 'DL', { class: !0 });
			var r = y(e);
			for (let s = 0; s < l.length; s += 1) l[s].l(r);
			r.forEach(g), this.h();
		},
		h() {
			u(e, 'class', 'list-dl');
		},
		m(a, r) {
			M(a, e, r);
			for (let s = 0; s < l.length; s += 1) l[s] && l[s].m(e, null);
		},
		p(a, [r]) {
			if (r & 1) {
				t = a[0];
				let s;
				for (s = 0; s < t.length; s += 1) {
					const i = nt(a, t, s);
					l[s] ? l[s].p(i, r) : ((l[s] = rt(i)), l[s].c(), l[s].m(e, null));
				}
				for (; s < l.length; s += 1) l[s].d(1);
				l.length = t.length;
			}
		},
		i: F,
		o: F,
		d(a) {
			a && g(e), qe(l, a);
		}
	};
}
function Bt(n) {
	return [
		[
			{
				link: 'https://protriathletes.org/events/pto-tour/us-open/pro/',
				name: 'PTO US Open',
				label: '5 August - Milwaukee, USA'
			},
			{
				link: 'https://protriathletes.org/events/pto-tour/asian-open/pro/',
				name: 'PTO Asian Open',
				label: '20 August - Singapore'
			},
			{
				link: 'https://www.ironman.com/im703-world-championship-2023',
				name: 'Ironman 70.3 WC',
				label: '26/27 August - Lahti,Finland'
			},
			{
				link: 'https://www.ironman.com/im-world-championship-nice',
				name: 'Ironman WC Men',
				label: '10 September - Nice, France'
			},
			{
				link: 'https://www.ironman.com/im-world-championship-2023',
				name: 'Ironman WC Women',
				label: '14 October - Kona, Hawaii'
			}
		]
	];
}
class Ht extends he {
	constructor(e) {
		super(), ge(this, e, Bt, Lt, me, {});
	}
}
function Nt(n) {
	let e, t, l;
	return {
		c() {
			(e = p('div')), (t = p('iframe')), this.h();
		},
		l(a) {
			e = v(a, 'DIV', { class: !0 });
			var r = y(e);
			(t = v(r, 'IFRAME', {
				title: !0,
				src: !0,
				'data-test-id': !0,
				height: !0,
				frameborder: !0,
				scrolling: !0,
				style: !0
			})),
				y(t).forEach(g),
				r.forEach(g),
				this.h();
		},
		h() {
			u(t, 'title', 'Newsletter'),
				Ge(
					t.src,
					(l = 'https://embeds.beehiiv.com/64e6eb02-8ac9-4bd0-8635-7d73a6e10c57?slim=true')
				) || u(t, 'src', l),
				u(t, 'data-test-id', 'beehiiv-embed'),
				u(t, 'height', '52'),
				u(t, 'frameborder', '0'),
				u(t, 'scrolling', 'no'),
				Ne(t, 'margin', '0'),
				Ne(t, 'border-radius', '0px', 1),
				Ne(t, 'background-color', 'transparent'),
				u(e, 'class', 'p-2');
		},
		m(a, r) {
			M(a, e, r), o(e, t);
		},
		p: F,
		i: F,
		o: F,
		d(a) {
			a && g(e);
		}
	};
}
class jt extends he {
	constructor(e) {
		super(), ge(this, e, null, Nt, me, {});
	}
}
function it(n, e, t) {
	const l = n.slice();
	return (l[1] = e[t]), l;
}
function ot(n) {
	let e, t, l, a, r;
	return {
		c() {
			(e = p('div')), (t = p('a')), (l = p('img')), (r = L()), this.h();
		},
		l(s) {
			e = v(s, 'DIV', { class: !0 });
			var i = y(e);
			t = v(i, 'A', { href: !0 });
			var d = y(t);
			(l = v(d, 'IMG', { src: !0, alt: !0 })), d.forEach(g), (r = B(i)), i.forEach(g), this.h();
		},
		h() {
			Ge(l.src, (a = n[1].avatar)) || u(l, 'src', a),
				u(l, 'alt', 'profile'),
				u(t, 'href', '/' + n[1].link),
				u(e, 'class', 'col-span-1');
		},
		m(s, i) {
			M(s, e, i), o(e, t), o(t, l), o(e, r);
		},
		p: F,
		d(s) {
			s && g(e);
		}
	};
}
function Ot(n) {
	let e,
		t = n[0],
		l = [];
	for (let a = 0; a < t.length; a += 1) l[a] = ot(it(n, t, a));
	return {
		c() {
			e = p('div');
			for (let a = 0; a < l.length; a += 1) l[a].c();
			this.h();
		},
		l(a) {
			e = v(a, 'DIV', { class: !0 });
			var r = y(e);
			for (let s = 0; s < l.length; s += 1) l[s].l(r);
			r.forEach(g), this.h();
		},
		h() {
			u(e, 'class', 'flex grid grid-cols-3 md:grid-cols-4 gap-4');
		},
		m(a, r) {
			M(a, e, r);
			for (let s = 0; s < l.length; s += 1) l[s] && l[s].m(e, null);
		},
		p(a, [r]) {
			if (r & 1) {
				t = a[0];
				let s;
				for (s = 0; s < t.length; s += 1) {
					const i = it(a, t, s);
					l[s] ? l[s].p(i, r) : ((l[s] = ot(i)), l[s].c(), l[s].m(e, null));
				}
				for (; s < l.length; s += 1) l[s].d(1);
				l.length = t.length;
			}
		},
		i: F,
		o: F,
		d(a) {
			a && g(e), qe(l, a);
		}
	};
}
function Ct(n) {
	return [
		[
			{
				avatar:
					'https://content.protriathletes.org/content/images/2023/03/2731d991-06b4-47d9-8f7c-fa18ee7f48e7-w300.webp',
				name: 'Lionel Sanders',
				label: 'Youtube, Instagram, Discord',
				link: './athleteprofiles/movie/lionel-sanders'
			},
			{
				avatar:
					'https://content.protriathletes.org/content/images/2023/05/de470021-5e6d-4dc6-a008-7060dc46650b-w300.webp',
				name: 'Kristian Blummenfelt',
				label: 'Youtube, Instagram',
				link: './athleteprofiles/movie/kristian-blummenfelt'
			},
			{
				avatar:
					'https://content.protriathletes.org/content/images/2023/03/efa7f753-6a3d-4027-b118-b066f2377493-w300.webp',
				name: 'Joe Skipper',
				label: 'Youtube, Instagram, Podcast',
				link: './athleteprofiles/movie/joe-skipper'
			},
			{
				avatar:
					'https://content.protriathletes.org/content/images/2023/05/427e6abb-0bb0-4135-bf79-c00e422ae11d-w300.webp',
				name: 'Paula Findlay',
				label: 'Youtube, Instagram, Podcast',
				link: './athleteprofiles/movie/paula-findlay'
			},
			{
				avatar:
					'https://content.protriathletes.org/content/images/2023/05/6ba37123-6332-46eb-97de-3c13f30d19cb-w300.webp',
				name: 'Anne Haug',
				label: 'Instagram',
				link: './athleteprofiles/movie/anne-haug'
			},
			{
				avatar:
					'https://content.protriathletes.org/content/images/2023/03/91dc01ce-696c-4840-b54c-67c0186924f6-w300.webp',
				name: 'Gustav Iden',
				label: 'Instagram',
				link: './athleteprofiles/movie/gustav-iden'
			},
			{
				avatar:
					'https://content.protriathletes.org/content/images/2023/05/95a00981-61ff-4356-bb81-2874a89a0c00-w300.webp',
				name: 'Magnus Ditlev',
				label: 'Instagram',
				link: './athleteprofiles/movie/magnus-ditlev'
			},
			{
				avatar:
					'https://content.protriathletes.org/content/images/2023/03/ceee36f5-6532-4299-a0c8-3cba69d69429-w300.webp',
				name: 'Sam Laidlow',
				label: 'Instagram',
				link: './athleteprofiles/movie/sam-laidlow'
			},
			{
				avatar:
					'https://content.protriathletes.org/content/images/2023/05/dd4130db-bbbb-41c4-a125-07bd10a430ac-w300.webp',
				name: 'Ashleigh Gentle',
				label: 'Instagram',
				link: './athleteprofiles/movie/ashleigh-gentle'
			},
			{
				avatar:
					'https://content.protriathletes.org/content/images/2023/05/31ed8c21-2d5f-45ae-8b97-5e109be0228f-w300.webp',
				name: 'Lucy Charles-Barclay',
				label: 'Instagram',
				link: './athleteprofiles/movie/lucy-charles-barclay'
			},
			{
				avatar:
					'https://content.protriathletes.org/content/images/2023/03/5a9de8a7-3877-44bd-953b-361992721dbd-w300.webp',
				name: 'Taylor Knibb',
				label: 'Instagram',
				link: './athleteprofiles/movie/taylor-knibb'
			},
			{
				avatar:
					'https://content.protriathletes.org/content/images/2023/05/5ad53c5c-b684-42cb-8c49-f0aa8d910b42-w300.webp',
				name: 'Emma Pallant-Browne',
				label: 'Instagram',
				link: './athleteprofiles/movie/emma-pallant-browne'
			}
		]
	];
}
class Mt extends he {
	constructor(e) {
		super(), ge(this, e, Ct, Ot, me, {});
	}
}
const ct = 'Aero Oats';
function ut(n, e, t) {
	const l = n.slice();
	return (l[6] = e[t]), l;
}
function qt(n) {
	let e;
	return {
		c() {
			e = q('Race Reports');
		},
		l(t) {
			e = G(t, 'Race Reports');
		},
		m(t, l) {
			M(t, e, l);
		},
		d(t) {
			t && g(e);
		}
	};
}
function Gt(n) {
	let e;
	return {
		c() {
			e = q('News');
		},
		l(t) {
			e = G(t, 'News');
		},
		m(t, l) {
			M(t, e, l);
		},
		d(t) {
			t && g(e);
		}
	};
}
function Ut(n) {
	let e;
	return {
		c() {
			e = q('Blog');
		},
		l(t) {
			e = G(t, 'Blog');
		},
		m(t, l) {
			M(t, e, l);
		},
		d(t) {
			t && g(e);
		}
	};
}
function Yt(n) {
	let e, t, l, a, r, s, i, d, c;
	function k(m) {
		n[3](m);
	}
	let b = { name: 'books', value: 0, $$slots: { default: [qt] }, $$scope: { ctx: n } };
	n[1] !== void 0 && (b.group = n[1]), (e = new Me({ props: b })), ye.push(() => je(e, 'group', k));
	function _(m) {
		n[4](m);
	}
	let f = { name: 'movies', value: 1, $$slots: { default: [Gt] }, $$scope: { ctx: n } };
	n[1] !== void 0 && (f.group = n[1]), (a = new Me({ props: f })), ye.push(() => je(a, 'group', _));
	function T(m) {
		n[5](m);
	}
	let V = { name: 'tv', value: 2, $$slots: { default: [Ut] }, $$scope: { ctx: n } };
	return (
		n[1] !== void 0 && (V.group = n[1]),
		(i = new Me({ props: V })),
		ye.push(() => je(i, 'group', T)),
		{
			c() {
				te(e.$$.fragment), (l = L()), te(a.$$.fragment), (s = L()), te(i.$$.fragment);
			},
			l(m) {
				ae(e.$$.fragment, m), (l = B(m)), ae(a.$$.fragment, m), (s = B(m)), ae(i.$$.fragment, m);
			},
			m(m, D) {
				le(e, m, D), M(m, l, D), le(a, m, D), M(m, s, D), le(i, m, D), (c = !0);
			},
			p(m, D) {
				const w = {};
				D & 512 && (w.$$scope = { dirty: D, ctx: m }),
					!t && D & 2 && ((t = !0), (w.group = m[1]), Oe(() => (t = !1))),
					e.$set(w);
				const R = {};
				D & 512 && (R.$$scope = { dirty: D, ctx: m }),
					!r && D & 2 && ((r = !0), (R.group = m[1]), Oe(() => (r = !1))),
					a.$set(R);
				const A = {};
				D & 512 && (A.$$scope = { dirty: D, ctx: m }),
					!d && D & 2 && ((d = !0), (A.group = m[1]), Oe(() => (d = !1))),
					i.$set(A);
			},
			i(m) {
				c || (j(e.$$.fragment, m), j(a.$$.fragment, m), j(i.$$.fragment, m), (c = !0));
			},
			o(m) {
				C(e.$$.fragment, m), C(a.$$.fragment, m), C(i.$$.fragment, m), (c = !1);
			},
			d(m) {
				se(e, m), m && g(l), se(a, m), m && g(s), se(i, m);
			}
		}
	);
}
function Ft(n) {
	let e,
		t = n[2].following + '',
		l;
	return {
		c() {
			(e = p('p')), (l = q(t));
		},
		l(a) {
			e = v(a, 'P', {});
			var r = y(e);
			(l = G(r, t)), r.forEach(g);
		},
		m(a, r) {
			M(a, e, r), o(e, l);
		},
		p: F,
		i: F,
		o: F,
		d(a) {
			a && g(e);
		}
	};
}
function Kt(n) {
	let e,
		t = n[2].popular + '',
		l;
	return {
		c() {
			(e = p('p')), (l = q(t));
		},
		l(a) {
			e = v(a, 'P', {});
			var r = y(e);
			(l = G(r, t)), r.forEach(g);
		},
		m(a, r) {
			M(a, e, r), o(e, l);
		},
		p: F,
		i: F,
		o: F,
		d(a) {
			a && g(e);
		}
	};
}
function Wt(n) {
	let e,
		t,
		l,
		a = n[0].posts,
		r = [];
	for (let i = 0; i < a.length; i += 1) r[i] = ft(ut(n, a, i));
	const s = (i) =>
		C(r[i], 1, 1, () => {
			r[i] = null;
		});
	return {
		c() {
			(e = p('article')), (t = p('section'));
			for (let i = 0; i < r.length; i += 1) r[i].c();
		},
		l(i) {
			e = v(i, 'ARTICLE', {});
			var d = y(e);
			t = v(d, 'SECTION', {});
			var c = y(t);
			for (let k = 0; k < r.length; k += 1) r[k].l(c);
			c.forEach(g), d.forEach(g);
		},
		m(i, d) {
			M(i, e, d), o(e, t);
			for (let c = 0; c < r.length; c += 1) r[c] && r[c].m(t, null);
			l = !0;
		},
		p(i, d) {
			if (d & 1) {
				a = i[0].posts;
				let c;
				for (c = 0; c < a.length; c += 1) {
					const k = ut(i, a, c);
					r[c]
						? (r[c].p(k, d), j(r[c], 1))
						: ((r[c] = ft(k)), r[c].c(), j(r[c], 1), r[c].m(t, null));
				}
				for (Te(), c = a.length; c < r.length; c += 1) s(c);
				Ve();
			}
		},
		i(i) {
			if (!l) {
				for (let d = 0; d < a.length; d += 1) j(r[d]);
				l = !0;
			}
		},
		o(i) {
			r = r.filter(Boolean);
			for (let d = 0; d < r.length; d += 1) C(r[d]);
			l = !1;
		},
		d(i) {
			i && g(e), qe(r, i);
		}
	};
}
function ft(n) {
	let e,
		t,
		l,
		a,
		r = n[6].title + '',
		s,
		i,
		d,
		c,
		k,
		b,
		_ = et(n[6].date) + '',
		f,
		T,
		V,
		m = n[6].description + '',
		D,
		w,
		R,
		A,
		E,
		P,
		N;
	return (
		(c = new pt({ props: { src: n[6].avatar, width: 'w-10' } })),
		{
			c() {
				(e = p('div')),
					(t = p('span')),
					(l = p('h3')),
					(a = p('a')),
					(s = q(r)),
					(d = p('div')),
					te(c.$$.fragment),
					(k = L()),
					(b = p('p')),
					(f = q(_)),
					(T = L()),
					(V = p('p')),
					(D = q(m)),
					(w = L()),
					(R = p('br')),
					(A = L()),
					(E = p('hr')),
					(P = L()),
					this.h();
			},
			l(S) {
				e = v(S, 'DIV', { class: !0 });
				var h = y(e);
				t = v(h, 'SPAN', { class: !0 });
				var U = y(t);
				l = v(U, 'H3', { class: !0, 'data-toc-ignore': !0 });
				var ne = y(l);
				a = v(ne, 'A', { href: !0, class: !0 });
				var re = y(a);
				(s = G(re, r)), re.forEach(g), ne.forEach(g), (d = v(U, 'DIV', { class: !0 }));
				var ie = y(d);
				ae(c.$$.fragment, ie),
					ie.forEach(g),
					U.forEach(g),
					(k = B(h)),
					(b = v(h, 'P', { class: !0 }));
				var W = y(b);
				(f = G(W, _)), W.forEach(g), (T = B(h)), (V = v(h, 'P', { class: !0 }));
				var oe = y(V);
				(D = G(oe, m)),
					oe.forEach(g),
					(w = B(h)),
					(R = v(h, 'BR', {})),
					(A = B(h)),
					(E = v(h, 'HR', { class: !0 })),
					(P = B(h)),
					h.forEach(g),
					this.h();
			},
			h() {
				u(a, 'href', (i = n[6].slug)),
					u(a, 'class', 'title'),
					u(l, 'class', 'h3'),
					u(l, 'data-toc-ignore', ''),
					u(d, 'class', 'justify-around'),
					u(t, 'class', 'flex justify-between'),
					u(b, 'class', 'date'),
					u(V, 'class', 'description'),
					u(E, 'class', 'opacity-90'),
					u(e, 'class', 'p-4');
			},
			m(S, h) {
				M(S, e, h),
					o(e, t),
					o(t, l),
					o(l, a),
					o(a, s),
					o(t, d),
					le(c, d, null),
					o(e, k),
					o(e, b),
					o(b, f),
					o(e, T),
					o(e, V),
					o(V, D),
					o(e, w),
					o(e, R),
					o(e, A),
					o(e, E),
					o(e, P),
					(N = !0);
			},
			p(S, h) {
				(!N || h & 1) && r !== (r = S[6].title + '') && Ce(s, r),
					(!N || (h & 1 && i !== (i = S[6].slug))) && u(a, 'href', i);
				const U = {};
				h & 1 && (U.src = S[6].avatar),
					c.$set(U),
					(!N || h & 1) && _ !== (_ = et(S[6].date) + '') && Ce(f, _),
					(!N || h & 1) && m !== (m = S[6].description + '') && Ce(D, m);
			},
			i(S) {
				N || (j(c.$$.fragment, S), (N = !0));
			},
			o(S) {
				C(c.$$.fragment, S), (N = !1);
			},
			d(S) {
				S && g(e), se(c);
			}
		}
	);
}
function zt(n) {
	let e, t, l, a;
	const r = [Wt, Kt, Ft],
		s = [];
	function i(d, c) {
		return d[1] === 0 ? 0 : d[1] === 1 ? 1 : d[1] === 2 ? 2 : -1;
	}
	return (
		~(e = i(n)) && (t = s[e] = r[e](n)),
		{
			c() {
				t && t.c(), (l = $e());
			},
			l(d) {
				t && t.l(d), (l = $e());
			},
			m(d, c) {
				~e && s[e].m(d, c), M(d, l, c), (a = !0);
			},
			p(d, c) {
				let k = e;
				(e = i(d)),
					e === k
						? ~e && s[e].p(d, c)
						: (t &&
								(Te(),
								C(s[k], 1, 1, () => {
									s[k] = null;
								}),
								Ve()),
						  ~e
								? ((t = s[e]),
								  t ? t.p(d, c) : ((t = s[e] = r[e](d)), t.c()),
								  j(t, 1),
								  t.m(l.parentNode, l))
								: (t = null));
			},
			i(d) {
				a || (j(t), (a = !0));
			},
			o(d) {
				C(t), (a = !1);
			},
			d(d) {
				~e && s[e].d(d), d && g(l);
			}
		}
	);
}
function Jt(n) {
	let e,
		t,
		l,
		a,
		r,
		s,
		i,
		d,
		c,
		k,
		b,
		_,
		f,
		T,
		V,
		m,
		D,
		w,
		R,
		A,
		E,
		P,
		N,
		S,
		h,
		U,
		ne,
		re,
		ie,
		W,
		oe,
		be,
		X,
		_e,
		I,
		Z,
		z,
		x,
		$,
		J,
		Y,
		K,
		Re,
		Le,
		Be,
		He,
		ce,
		pe;
	return (
		(document.title = e = ct),
		(b = new Dt({ props: { $$slots: { panel: [zt], default: [Yt] }, $$scope: { ctx: n } } })),
		(N = new jt({})),
		(X = new _t({})),
		(J = new Mt({})),
		(ce = new Ht({})),
		{
			c() {
				(t = L()),
					(l = p('div')),
					(a = p('div')),
					(r = p('div')),
					(s = p('header')),
					(i = p('img')),
					(c = L()),
					(k = p('div')),
					te(b.$$.fragment),
					(_ = L()),
					(f = p('div')),
					(T = p('h3')),
					(V = q('Newsletter')),
					(m = L()),
					(D = p('hr')),
					(w = L()),
					(R = p('h6')),
					(A = q(
						'Bi-weekly bullet point triathlon newsletter for you to chew through while you munch your morning oats.'
					)),
					(E = L()),
					(P = p('div')),
					te(N.$$.fragment),
					(S = L()),
					(h = p('h3')),
					(U = q('Tools')),
					(ne = L()),
					(re = p('hr')),
					(ie = L()),
					(W = p('h6')),
					(oe = q('Some useful triathlon calculators.')),
					(be = L()),
					te(X.$$.fragment),
					(_e = L()),
					(I = p('h3')),
					(Z = q('Athlete Profiles')),
					(z = L()),
					(x = p('hr')),
					($ = L()),
					te(J.$$.fragment),
					(Y = L()),
					(K = p('h3')),
					(Re = q('Upcoming Races')),
					(Le = L()),
					(Be = p('hr')),
					(He = L()),
					te(ce.$$.fragment),
					this.h();
			},
			l(O) {
				bt('svelte-19mtgnf', document.head).forEach(g), (t = B(O)), (l = v(O, 'DIV', {}));
				var ve = y(l);
				a = v(ve, 'DIV', { class: !0 });
				var Ee = y(a);
				r = v(Ee, 'DIV', { class: !0 });
				var Ie = y(r);
				s = v(Ie, 'HEADER', {});
				var Ue = y(s);
				(i = v(Ue, 'IMG', { src: !0, class: !0, alt: !0 })),
					Ue.forEach(g),
					(c = B(Ie)),
					(k = v(Ie, 'DIV', { class: !0 }));
				var Ye = y(k);
				ae(b.$$.fragment, Ye),
					Ye.forEach(g),
					Ie.forEach(g),
					(_ = B(Ee)),
					(f = v(Ee, 'DIV', { class: !0 }));
				var H = y(f);
				T = v(H, 'H3', { class: !0 });
				var Fe = y(T);
				(V = G(Fe, 'Newsletter')),
					Fe.forEach(g),
					(m = B(H)),
					(D = v(H, 'HR', {})),
					(w = B(H)),
					(R = v(H, 'H6', { class: !0 }));
				var Ke = y(R);
				(A = G(
					Ke,
					'Bi-weekly bullet point triathlon newsletter for you to chew through while you munch your morning oats.'
				)),
					Ke.forEach(g),
					(E = B(H)),
					(P = v(H, 'DIV', { class: !0 }));
				var We = y(P);
				ae(N.$$.fragment, We), We.forEach(g), (S = B(H)), (h = v(H, 'H3', { class: !0 }));
				var ze = y(h);
				(U = G(ze, 'Tools')),
					ze.forEach(g),
					(ne = B(H)),
					(re = v(H, 'HR', {})),
					(ie = B(H)),
					(W = v(H, 'H6', { class: !0 }));
				var Je = y(W);
				(oe = G(Je, 'Some useful triathlon calculators.')),
					Je.forEach(g),
					(be = B(H)),
					ae(X.$$.fragment, H),
					(_e = B(H)),
					(I = v(H, 'H3', { class: !0 }));
				var Qe = y(I);
				(Z = G(Qe, 'Athlete Profiles')),
					Qe.forEach(g),
					(z = B(H)),
					(x = v(H, 'HR', {})),
					($ = B(H)),
					ae(J.$$.fragment, H),
					(Y = B(H)),
					(K = v(H, 'H3', { class: !0 }));
				var Xe = y(K);
				(Re = G(Xe, 'Upcoming Races')),
					Xe.forEach(g),
					(Le = B(H)),
					(Be = v(H, 'HR', {})),
					(He = B(H)),
					ae(ce.$$.fragment, H),
					H.forEach(g),
					Ee.forEach(g),
					ve.forEach(g),
					this.h();
			},
			h() {
				Ge(i.src, (d = '/images/banner2.png')) || u(i, 'src', d),
					u(i, 'class', 'bg-black/50 w-full '),
					u(i, 'alt', 'Post'),
					u(k, 'class', 'p-4 space-y-4'),
					u(r, 'class', 'col-span-3 card card-hover overflow-hidden'),
					u(T, 'class', 'p-4 h3'),
					u(R, 'class', 'h6 p-4'),
					u(P, 'class', 'flex justify-center'),
					u(h, 'class', 'p-4 h3'),
					u(W, 'class', 'h6 p-4'),
					u(I, 'class', 'p-4 h3'),
					u(K, 'class', 'p-4 h3'),
					u(f, 'class', 'col-span-2 card card-hover overflow-hidden'),
					u(
						a,
						'class',
						'mx-auto max-w-7xl text-token grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4'
					);
			},
			m(O, ue) {
				M(O, t, ue),
					M(O, l, ue),
					o(l, a),
					o(a, r),
					o(r, s),
					o(s, i),
					o(r, c),
					o(r, k),
					le(b, k, null),
					o(a, _),
					o(a, f),
					o(f, T),
					o(T, V),
					o(f, m),
					o(f, D),
					o(f, w),
					o(f, R),
					o(R, A),
					o(f, E),
					o(f, P),
					le(N, P, null),
					o(f, S),
					o(f, h),
					o(h, U),
					o(f, ne),
					o(f, re),
					o(f, ie),
					o(f, W),
					o(W, oe),
					o(f, be),
					le(X, f, null),
					o(f, _e),
					o(f, I),
					o(I, Z),
					o(f, z),
					o(f, x),
					o(f, $),
					le(J, f, null),
					o(f, Y),
					o(f, K),
					o(K, Re),
					o(f, Le),
					o(f, Be),
					o(f, He),
					le(ce, f, null),
					(pe = !0);
			},
			p(O, [ue]) {
				(!pe || ue & 0) && e !== (e = ct) && (document.title = e);
				const ve = {};
				ue & 515 && (ve.$$scope = { dirty: ue, ctx: O }), b.$set(ve);
			},
			i(O) {
				pe ||
					(j(b.$$.fragment, O),
					j(N.$$.fragment, O),
					j(X.$$.fragment, O),
					j(J.$$.fragment, O),
					j(ce.$$.fragment, O),
					(pe = !0));
			},
			o(O) {
				C(b.$$.fragment, O),
					C(N.$$.fragment, O),
					C(X.$$.fragment, O),
					C(J.$$.fragment, O),
					C(ce.$$.fragment, O),
					(pe = !1);
			},
			d(O) {
				O && g(t), O && g(l), se(b), se(N), se(X), se(J), se(ce);
			}
		}
	);
}
function Qt(n, e, t) {
	let { data: l } = e,
		a = 0,
		r = {
			popular: 'Right now in Triathlon.',
			newest: 'Race Reviews by You.',
			following: 'Posts by users you follow.'
		};
	function s(c) {
		(a = c), t(1, a);
	}
	function i(c) {
		(a = c), t(1, a);
	}
	function d(c) {
		(a = c), t(1, a);
	}
	return (
		(n.$$set = (c) => {
			'data' in c && t(0, (l = c.data));
		}),
		[l, a, r, s, i, d]
	);
}
class ta extends he {
	constructor(e) {
		super(), ge(this, e, Qt, Jt, me, { data: 0 });
	}
}
export { ta as component, ea as universal };
