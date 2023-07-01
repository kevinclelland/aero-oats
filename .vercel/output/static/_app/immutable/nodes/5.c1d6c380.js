import {
	S,
	i as z,
	s as D,
	k as v,
	l as g,
	m as $,
	h as m,
	n as f,
	b as P,
	g as E,
	f as F,
	d as w,
	a9 as L,
	y as M,
	a as I,
	q as N,
	z as R,
	c as q,
	r as T,
	F as p,
	A as V,
	u as j,
	B as y,
	v as G
} from '../chunks/index.460b5f26.js';
import { A as H } from '../chunks/ProgressBar.svelte_svelte_type_style_lang.a411719e.js';
function B(o, l, i) {
	const r = o.slice();
	return (r[1] = l[i]), r;
}
function C(o) {
	let l,
		i,
		r,
		e,
		d,
		a,
		s,
		t = o[1].title + '',
		h,
		A,
		k,
		u;
	return (
		(e = new H({
			props: {
				src: o[1].avatar,
				width: 'w-36',
				class: 'flex-none',
				'data-flip-id': 'cover-' + o[1].title
			}
		})),
		{
			c() {
				(l = v('article')),
					(i = v('a')),
					(r = v('div')),
					M(e.$$.fragment),
					(a = I()),
					(s = v('p')),
					(h = N(t)),
					(k = I()),
					this.h();
			},
			l(n) {
				l = g(n, 'ARTICLE', { class: !0 });
				var c = $(l);
				i = g(c, 'A', { href: !0 });
				var _ = $(i);
				r = g(_, 'DIV', { class: !0 });
				var b = $(r);
				R(e.$$.fragment, b),
					b.forEach(m),
					_.forEach(m),
					(a = q(c)),
					(s = g(c, 'P', { class: !0, 'data-flip-id': !0 }));
				var x = $(s);
				(h = T(x, t)), x.forEach(m), (k = q(c)), c.forEach(m), this.h();
			},
			h() {
				f(r, 'class', 'poster'),
					f(i, 'href', (d = '/athleteprofiles/movie/' + o[1].id)),
					f(s, 'class', 'title p-2 text-center'),
					f(s, 'data-flip-id', (A = 'title-' + o[1].title)),
					f(l, 'class', 'col-span-1 mx-auto');
			},
			m(n, c) {
				P(n, l, c), p(l, i), p(i, r), V(e, r, null), p(l, a), p(l, s), p(s, h), p(l, k), (u = !0);
			},
			p(n, c) {
				const _ = {};
				c & 1 && (_.src = n[1].avatar),
					c & 1 && (_['data-flip-id'] = 'cover-' + n[1].title),
					e.$set(_),
					(!u || (c & 1 && d !== (d = '/athleteprofiles/movie/' + n[1].id))) && f(i, 'href', d),
					(!u || c & 1) && t !== (t = n[1].title + '') && j(h, t),
					(!u || (c & 1 && A !== (A = 'title-' + n[1].title))) && f(s, 'data-flip-id', A);
			},
			i(n) {
				u || (E(e.$$.fragment, n), (u = !0));
			},
			o(n) {
				w(e.$$.fragment, n), (u = !1);
			},
			d(n) {
				n && m(l), y(e);
			}
		}
	);
}
function J(o) {
	let l,
		i,
		r = o[0].movies,
		e = [];
	for (let a = 0; a < r.length; a += 1) e[a] = C(B(o, r, a));
	const d = (a) =>
		w(e[a], 1, 1, () => {
			e[a] = null;
		});
	return {
		c() {
			l = v('main');
			for (let a = 0; a < e.length; a += 1) e[a].c();
			this.h();
		},
		l(a) {
			l = g(a, 'MAIN', { class: !0 });
			var s = $(l);
			for (let t = 0; t < e.length; t += 1) e[t].l(s);
			s.forEach(m), this.h();
		},
		h() {
			f(
				l,
				'class',
				'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 movies p-4 max-w-7xl mx-auto items-center'
			);
		},
		m(a, s) {
			P(a, l, s);
			for (let t = 0; t < e.length; t += 1) e[t] && e[t].m(l, null);
			i = !0;
		},
		p(a, [s]) {
			if (s & 1) {
				r = a[0].movies;
				let t;
				for (t = 0; t < r.length; t += 1) {
					const h = B(a, r, t);
					e[t]
						? (e[t].p(h, s), E(e[t], 1))
						: ((e[t] = C(h)), e[t].c(), E(e[t], 1), e[t].m(l, null));
				}
				for (G(), t = r.length; t < e.length; t += 1) d(t);
				F();
			}
		},
		i(a) {
			if (!i) {
				for (let s = 0; s < r.length; s += 1) E(e[s]);
				i = !0;
			}
		},
		o(a) {
			e = e.filter(Boolean);
			for (let s = 0; s < e.length; s += 1) w(e[s]);
			i = !1;
		},
		d(a) {
			a && m(l), L(e, a);
		}
	};
}
function K(o, l, i) {
	let { data: r } = l;
	return (
		(o.$$set = (e) => {
			'data' in e && i(0, (r = e.data));
		}),
		[r]
	);
}
class U extends S {
	constructor(l) {
		super(), z(this, l, K, J, D, { data: 0 });
	}
}
export { U as component };
