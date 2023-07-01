import { w as T } from './index.8bec3548.js';
import {
	ac as X,
	S as x,
	i as Q,
	s as W,
	k as R,
	l as V,
	m as U,
	h,
	n as g,
	b as E,
	M as _,
	$ as L,
	V as F,
	a7 as I,
	K as C,
	L as B,
	N as b,
	X as q,
	q as Y,
	_ as z,
	r as Z,
	F as O,
	u as p,
	a5 as j,
	R as $,
	a6 as ee,
	a1 as te,
	ad as ae
} from './index.460b5f26.js';
const M = {};
function A(a) {
	return a === 'local' ? localStorage : sessionStorage;
}
function w(a, e, t) {
	const c = (t == null ? void 0 : t.serializer) ?? JSON,
		d = (t == null ? void 0 : t.storage) ?? 'local';
	function u(r, l) {
		A(d).setItem(r, c.stringify(l));
	}
	if (!M[a]) {
		const r = T(e, (i) => {
				const m = A(d).getItem(a);
				m && i(c.parse(m));
				{
					const o = (f) => {
						f.key === a && i(f.newValue ? c.parse(f.newValue) : null);
					};
					return (
						window.addEventListener('storage', o), () => window.removeEventListener('storage', o)
					);
				}
			}),
			{ subscribe: l, set: n } = r;
		M[a] = {
			set(i) {
				u(a, i), n(i);
			},
			update(i) {
				const m = i(X(r));
				u(a, m), n(m);
			},
			subscribe: l
		};
	}
	return M[a];
}
const se = w('modeOsPrefers', !1),
	le = w('modeUserPrefers', void 0),
	re = w('modeCurrent', !1);
function ge() {
	const a = window.matchMedia('(prefers-color-scheme: light)').matches;
	return se.set(a), a;
}
function he(a) {
	le.set(a);
}
function _e(a) {
	const e = document.documentElement.classList,
		t = 'dark';
	a === !0 ? e.remove(t) : e.add(t), re.set(a);
}
function be() {
	const a = document.documentElement.classList,
		e = localStorage.getItem('modeUserPrefers') === 'false',
		t = !('modeUserPrefers' in localStorage),
		c = window.matchMedia('(prefers-color-scheme: dark)').matches;
	e || (t && c) ? a.add('dark') : a.remove('dark');
}
function ne(a) {
	let e,
		t,
		c = String(a[1]).substring(0, 2).toUpperCase() + '',
		d,
		u;
	return {
		c() {
			(e = q('svg')), (t = q('text')), (d = Y(c)), this.h();
		},
		l(r) {
			e = z(r, 'svg', { class: !0, viewBox: !0 });
			var l = U(e);
			t = z(l, 'text', {
				x: !0,
				y: !0,
				'dominant-baseline': !0,
				'text-anchor': !0,
				'font-weight': !0,
				'font-size': !0,
				class: !0
			});
			var n = U(t);
			(d = Z(n, c)), n.forEach(h), l.forEach(h), this.h();
		},
		h() {
			g(t, 'x', '50%'),
				g(t, 'y', '50%'),
				g(t, 'dominant-baseline', 'central'),
				g(t, 'text-anchor', 'middle'),
				g(t, 'font-weight', 'bold'),
				g(t, 'font-size', 150),
				g(t, 'class', (u = 'avatar-text ' + a[2])),
				g(e, 'class', 'avatar-initials w-full h-full'),
				g(e, 'viewBox', '0 0 512 512');
		},
		m(r, l) {
			E(r, e, l), O(e, t), O(t, d);
		},
		p(r, l) {
			l & 2 && c !== (c = String(r[1]).substring(0, 2).toUpperCase() + '') && p(d, c),
				l & 4 && u !== (u = 'avatar-text ' + r[2]) && g(t, 'class', u);
		},
		d(r) {
			r && h(e);
		}
	};
}
function ie(a) {
	let e,
		t,
		c,
		d,
		u,
		r,
		l,
		n,
		i = [
			{ class: (t = 'avatar-image ' + ue) },
			{ style: (c = a[8].style ?? '') },
			{ src: (d = a[0]) },
			{ alt: (u = a[8].alt || '') },
			a[7]()
		],
		m = {};
	for (let o = 0; o < i.length; o += 1) m = C(m, i[o]);
	return {
		c() {
			(e = R('img')), this.h();
		},
		l(o) {
			(e = V(o, 'IMG', { class: !0, style: !0, src: !0, alt: !0 })), this.h();
		},
		h() {
			j(e, m);
		},
		m(o, f) {
			E(o, e, f), l || ((n = [$((r = a[4].call(null, e, a[5]))), _(e, 'error', a[19])]), (l = !0));
		},
		p(o, f) {
			j(
				e,
				(m = ee(i, [
					{ class: t },
					f & 256 && c !== (c = o[8].style ?? '') && { style: c },
					f & 1 && !te(e.src, (d = o[0])) && { src: d },
					f & 256 && u !== (u = o[8].alt || '') && { alt: u },
					o[7]()
				]))
			),
				r && ae(r.update) && f & 32 && r.update.call(null, o[5]);
		},
		d(o) {
			o && h(e), (l = !1), F(n);
		}
	};
}
function ce(a) {
	let e, t, c, d;
	function u(n, i) {
		return n[0] ? ie : ne;
	}
	let r = u(a),
		l = r(a);
	return {
		c() {
			(e = R('figure')), l.c(), this.h();
		},
		l(n) {
			e = V(n, 'FIGURE', { class: !0, 'data-testid': !0 });
			var i = U(e);
			l.l(i), i.forEach(h), this.h();
		},
		h() {
			g(e, 'class', (t = 'avatar ' + a[6])), g(e, 'data-testid', 'avatar');
		},
		m(n, i) {
			E(n, e, i),
				l.m(e, null),
				c ||
					((d = [
						_(e, 'click', a[15]),
						_(e, 'keydown', a[16]),
						_(e, 'keyup', a[17]),
						_(e, 'keypress', a[18])
					]),
					(c = !0));
		},
		p(n, [i]) {
			r === (r = u(n)) && l ? l.p(n, i) : (l.d(1), (l = r(n)), l && (l.c(), l.m(e, null))),
				i & 64 && t !== (t = 'avatar ' + n[6]) && g(e, 'class', t);
		},
		i: L,
		o: L,
		d(n) {
			n && h(e), l.d(), (c = !1), F(d);
		}
	};
}
let oe =
		'flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate',
	ue = 'w-full h-full object-cover';
function de(a, e, t) {
	let c;
	const d = [
		'initials',
		'fill',
		'src',
		'fallback',
		'action',
		'actionParams',
		'background',
		'width',
		'border',
		'rounded',
		'shadow',
		'cursor'
	];
	let u = I(e, d),
		{ initials: r = 'AB' } = e,
		{ fill: l = 'fill-token' } = e,
		{ src: n = '' } = e,
		{ fallback: i = '' } = e,
		{ action: m = () => {} } = e,
		{ actionParams: o = '' } = e,
		{ background: f = 'bg-surface-400-500-token' } = e,
		{ width: k = 'w-16' } = e,
		{ border: v = '' } = e,
		{ rounded: P = 'rounded-full' } = e,
		{ shadow: S = '' } = e,
		{ cursor: y = '' } = e;
	function G() {
		return delete u.class, u;
	}
	function H(s) {
		b.call(this, a, s);
	}
	function N(s) {
		b.call(this, a, s);
	}
	function D(s) {
		b.call(this, a, s);
	}
	function J(s) {
		b.call(this, a, s);
	}
	const K = () => t(0, (n = i));
	return (
		(a.$$set = (s) => {
			t(8, (e = C(C({}, e), B(s)))),
				t(20, (u = I(e, d))),
				'initials' in s && t(1, (r = s.initials)),
				'fill' in s && t(2, (l = s.fill)),
				'src' in s && t(0, (n = s.src)),
				'fallback' in s && t(3, (i = s.fallback)),
				'action' in s && t(4, (m = s.action)),
				'actionParams' in s && t(5, (o = s.actionParams)),
				'background' in s && t(9, (f = s.background)),
				'width' in s && t(10, (k = s.width)),
				'border' in s && t(11, (v = s.border)),
				'rounded' in s && t(12, (P = s.rounded)),
				'shadow' in s && t(13, (S = s.shadow)),
				'cursor' in s && t(14, (y = s.cursor));
		}),
		(a.$$.update = () => {
			t(6, (c = `${oe} ${f} ${k} ${v} ${P} ${S} ${y} ${e.class ?? ''}`));
		}),
		(e = B(e)),
		[n, r, l, i, m, o, c, G, e, f, k, v, P, S, y, H, N, D, J, K]
	);
}
class ke extends x {
	constructor(e) {
		super(),
			Q(this, e, de, ce, W, {
				initials: 1,
				fill: 2,
				src: 0,
				fallback: 3,
				action: 4,
				actionParams: 5,
				background: 9,
				width: 10,
				border: 11,
				rounded: 12,
				shadow: 13,
				cursor: 14
			});
	}
}
export { ke as A, _e as a, he as b, ge as g, re as m, be as s };
