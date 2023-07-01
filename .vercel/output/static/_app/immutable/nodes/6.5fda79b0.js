import {
	S as U,
	i as W,
	s as X,
	e as O,
	b as P,
	$ as Y,
	h as p,
	O as Z,
	k as d,
	a as V,
	q as z,
	l as v,
	m as b,
	c as C,
	r as B,
	n as t,
	a1 as M,
	p as J,
	F as c,
	u as K
} from '../chunks/index.460b5f26.js';
import { p as $ } from '../chunks/stores.0965a988.js';
function Q(r) {
	let i,
		e,
		a,
		l,
		m,
		u,
		k,
		R,
		_,
		n,
		E = r[0].title + '',
		I,
		j,
		S,
		w,
		y = r[0].overview + '',
		q,
		T,
		f,
		A,
		D,
		h,
		F = `url(${r[0].backdrop_path})`;
	return {
		c() {
			(i = d('article')),
				(e = d('div')),
				(a = d('a')),
				(l = d('img')),
				(R = V()),
				(_ = d('div')),
				(n = d('h1')),
				(I = z(E)),
				(S = V()),
				(w = d('p')),
				(q = z(y)),
				(T = V()),
				(f = d('iframe')),
				(D = V()),
				(h = d('div')),
				this.h();
		},
		l(s) {
			i = v(s, 'ARTICLE', { class: !0 });
			var o = b(i);
			e = v(o, 'DIV', { class: !0 });
			var G = b(e);
			a = v(G, 'A', { href: !0 });
			var H = b(a);
			(l = v(H, 'IMG', { class: !0, src: !0, alt: !0, 'data-flip-id': !0 })),
				H.forEach(p),
				G.forEach(p),
				(R = C(o)),
				(_ = v(o, 'DIV', { class: !0 }));
			var g = b(_);
			n = v(g, 'H1', { class: !0, 'data-flip-id': !0 });
			var L = b(n);
			(I = B(L, E)), L.forEach(p), (S = C(g)), (w = v(g, 'P', { class: !0 }));
			var N = b(w);
			(q = B(N, y)),
				N.forEach(p),
				(T = C(g)),
				(f = v(g, 'IFRAME', {
					width: !0,
					height: !0,
					src: !0,
					title: !0,
					frameborder: !0,
					allow: !0
				})),
				b(f).forEach(p),
				g.forEach(p),
				o.forEach(p),
				(D = C(s)),
				(h = v(s, 'DIV', { class: !0 })),
				b(h).forEach(p),
				this.h();
		},
		h() {
			t(l, 'class', 'cover rounded-2xl max-w-lg'),
				M(l.src, (m = r[0].poster_path)) || t(l, 'src', m),
				t(l, 'alt', (u = r[0].title)),
				t(l, 'data-flip-id', (k = 'cover-' + r[0].title)),
				t(a, 'href', '/athleteprofiles'),
				t(e, 'class', 'poster p-4'),
				t(n, 'class', 'title text-7xl svelte-wljf2l'),
				t(n, 'data-flip-id', (j = 'title-' + r[0].title)),
				t(w, 'class', 'overview py-4 svelte-wljf2l'),
				t(f, 'width', '560'),
				t(f, 'height', '315'),
				M(f.src, (A = r[0].youtube)) || t(f, 'src', A),
				t(f, 'title', 'YouTube video player'),
				t(f, 'frameborder', '0'),
				t(
					f,
					'allow',
					'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				),
				(f.allowFullscreen = !0),
				t(_, 'class', 'details svelte-wljf2l'),
				t(i, 'class', 'svelte-wljf2l'),
				t(h, 'class', 'backdrop svelte-wljf2l'),
				J(h, '--bg-image', F);
		},
		m(s, o) {
			P(s, i, o),
				c(i, e),
				c(e, a),
				c(a, l),
				c(i, R),
				c(i, _),
				c(_, n),
				c(n, I),
				c(_, S),
				c(_, w),
				c(w, q),
				c(_, T),
				c(_, f),
				P(s, D, o),
				P(s, h, o);
		},
		p(s, o) {
			o & 1 && !M(l.src, (m = s[0].poster_path)) && t(l, 'src', m),
				o & 1 && u !== (u = s[0].title) && t(l, 'alt', u),
				o & 1 && k !== (k = 'cover-' + s[0].title) && t(l, 'data-flip-id', k),
				o & 1 && E !== (E = s[0].title + '') && K(I, E),
				o & 1 && j !== (j = 'title-' + s[0].title) && t(n, 'data-flip-id', j),
				o & 1 && y !== (y = s[0].overview + '') && K(q, y),
				o & 1 && !M(f.src, (A = s[0].youtube)) && t(f, 'src', A),
				o & 1 && F !== (F = `url(${s[0].backdrop_path})`) && J(h, '--bg-image', F);
		},
		d(s) {
			s && p(i), s && p(D), s && p(h);
		}
	};
}
function x(r) {
	let i,
		e = r[0] && Q(r);
	return {
		c() {
			e && e.c(), (i = O());
		},
		l(a) {
			e && e.l(a), (i = O());
		},
		m(a, l) {
			e && e.m(a, l), P(a, i, l);
		},
		p(a, [l]) {
			a[0]
				? e
					? e.p(a, l)
					: ((e = Q(a)), e.c(), e.m(i.parentNode, i))
				: e && (e.d(1), (e = null));
		},
		i: Y,
		o: Y,
		d(a) {
			e && e.d(a), a && p(i);
		}
	};
}
function ee(r, i, e) {
	let a, l;
	Z(r, $, (u) => e(2, (l = u)));
	let { data: m } = i;
	return (
		(r.$$set = (u) => {
			'data' in u && e(1, (m = u.data));
		}),
		(r.$$.update = () => {
			r.$$.dirty & 6 && e(0, (a = m.movies.find((u) => u.id === l.params.id)));
		}),
		[a, m, l]
	);
}
class le extends U {
	constructor(i) {
		super(), W(this, i, ee, x, X, { data: 1 });
	}
}
export { le as component };
