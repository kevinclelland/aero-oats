import {
	S as F,
	i as V,
	s as z,
	k as h,
	l as d,
	m as f,
	h as o,
	n as _,
	b as q,
	$ as P,
	a9 as B,
	a as k,
	q as w,
	c as x,
	r as N,
	F as c
} from './index.460b5f26.js';
function O(r, t, s) {
	const e = r.slice();
	return (e[1] = t[s]), e;
}
function $(r) {
	let t,
		s,
		e,
		l,
		n,
		a,
		i,
		T = r[1].name + '',
		g,
		b,
		p,
		y = r[1].label + '',
		D,
		E;
	return {
		c() {
			(t = h('div')),
				(s = h('span')),
				(e = h('i')),
				(l = k()),
				(n = h('a')),
				(a = h('span')),
				(i = h('dt')),
				(g = w(T)),
				(b = k()),
				(p = h('dd')),
				(D = w(y)),
				(E = k()),
				this.h();
		},
		l(m) {
			t = d(m, 'DIV', {});
			var u = f(t);
			s = d(u, 'SPAN', { class: !0 });
			var A = f(s);
			(e = d(A, 'I', { class: !0 })),
				f(e).forEach(o),
				A.forEach(o),
				(l = x(u)),
				(n = d(u, 'A', { href: !0 }));
			var I = f(n);
			a = d(I, 'SPAN', { class: !0 });
			var v = f(a);
			i = d(v, 'DT', { class: !0 });
			var C = f(i);
			(g = N(C, T)), C.forEach(o), (b = x(v)), (p = d(v, 'DD', { class: !0 }));
			var S = f(p);
			(D = N(S, y)), S.forEach(o), v.forEach(o), I.forEach(o), (E = x(u)), u.forEach(o), this.h();
		},
		h() {
			_(e, 'class', 'fas fa-wrench'),
				_(s, 'class', 'badge-icon p-4 variant-soft-secondary'),
				_(i, 'class', 'font-bold'),
				_(p, 'class', 'text-sm opacity-50'),
				_(a, 'class', 'flex-auto'),
				_(n, 'href', '/' + r[1].link);
		},
		m(m, u) {
			q(m, t, u),
				c(t, s),
				c(s, e),
				c(t, l),
				c(t, n),
				c(n, a),
				c(a, i),
				c(i, g),
				c(a, b),
				c(a, p),
				c(p, D),
				c(t, E);
		},
		p: P,
		d(m) {
			m && o(t);
		}
	};
}
function K(r) {
	let t,
		s = r[0],
		e = [];
	for (let l = 0; l < s.length; l += 1) e[l] = $(O(r, s, l));
	return {
		c() {
			t = h('dl');
			for (let l = 0; l < e.length; l += 1) e[l].c();
			this.h();
		},
		l(l) {
			t = d(l, 'DL', { class: !0 });
			var n = f(t);
			for (let a = 0; a < e.length; a += 1) e[a].l(n);
			n.forEach(o), this.h();
		},
		h() {
			_(t, 'class', 'list-dl');
		},
		m(l, n) {
			q(l, t, n);
			for (let a = 0; a < e.length; a += 1) e[a] && e[a].m(t, null);
		},
		p(l, [n]) {
			if (n & 1) {
				s = l[0];
				let a;
				for (a = 0; a < s.length; a += 1) {
					const i = O(l, s, a);
					e[a] ? e[a].p(i, n) : ((e[a] = $(i)), e[a].c(), e[a].m(t, null));
				}
				for (; a < e.length; a += 1) e[a].d(1);
				e.length = s.length;
			}
		},
		i: P,
		o: P,
		d(l) {
			l && o(t), B(e, l);
		}
	};
}
function L(r) {
	return [
		[
			{ avatar: 'YOErFW8AfkI', name: 'PTO Points', label: 'Calculate PTO points', link: 'pto' },
			{
				avatar: 'z_X0PxmBuIQ',
				name: 'Time Distance Pace',
				label: 'Calculate running pace, distance or time',
				link: 'tdp'
			},
			{ avatar: '8vKVlNIbAc4', name: 'Countdown', label: 'Days til next race', link: 'countdown' }
		]
	];
}
class W extends F {
	constructor(t) {
		super(), V(this, t, L, K, z, {});
	}
}
export { W as T };
