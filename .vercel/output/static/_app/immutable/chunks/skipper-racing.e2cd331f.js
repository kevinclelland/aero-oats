import {
	S as H,
	i as I,
	s as J,
	k as o,
	q as u,
	a as w,
	l as c,
	m as f,
	r as h,
	h as s,
	c as y,
	a1 as K,
	n as j,
	b as v,
	F as t,
	$ as B
} from './index.460b5f26.js';
function L(F) {
	let r, b, k, l, a, g, m, q, x, _, O, C, M, R, S, p, n, D;
	return {
		c() {
			(r = o('h1')),
				(b = u('Svelte')),
				(k = w()),
				(l = o('blockquote')),
				(a = o('p')),
				(g = u('Media inside the ')),
				(m = o('strong')),
				(q = u('static')),
				(x = u(' folder is served from ')),
				(_ = o('code')),
				(O = u('/')),
				(C = u('.')),
				(M = w()),
				(R = o('br')),
				(S = w()),
				(p = o('p')),
				(n = o('img')),
				this.h();
		},
		l(e) {
			r = c(e, 'H1', {});
			var i = f(r);
			(b = h(i, 'Svelte')), i.forEach(s), (k = y(e)), (l = c(e, 'BLOCKQUOTE', {}));
			var E = f(l);
			a = c(E, 'P', {});
			var d = f(a);
			(g = h(d, 'Media inside the ')), (m = c(d, 'STRONG', {}));
			var G = f(m);
			(q = h(G, 'static')),
				G.forEach(s),
				(x = h(d, ' folder is served from ')),
				(_ = c(d, 'CODE', {}));
			var P = f(_);
			(O = h(P, '/')),
				P.forEach(s),
				(C = h(d, '.')),
				d.forEach(s),
				(M = y(E)),
				(R = c(E, 'BR', {})),
				E.forEach(s),
				(S = y(e)),
				(p = c(e, 'P', {}));
			var T = f(p);
			(n = c(T, 'IMG', { src: !0, alt: !0 })), T.forEach(s), this.h();
		},
		h() {
			K(n.src, (D = 'favicon.ico')) || j(n, 'src', D), j(n, 'alt', 'Svelte');
		},
		m(e, i) {
			v(e, r, i),
				t(r, b),
				v(e, k, i),
				v(e, l, i),
				t(l, a),
				t(a, g),
				t(a, m),
				t(m, q),
				t(a, x),
				t(a, _),
				t(_, O),
				t(a, C),
				t(l, M),
				t(l, R),
				v(e, S, i),
				v(e, p, i),
				t(p, n);
		},
		p: B,
		i: B,
		o: B,
		d(e) {
			e && s(r), e && s(k), e && s(l), e && s(S), e && s(p);
		}
	};
}
const Q = {
	title: 'Skipper Racing',
	description: 'Joe Skipper is seeking redemption this weekend.',
	date: '2022-4-16',
	categories: ['sveltekit', 'svelte'],
	published: !0,
	avatar: 'https://i.pravatar.cc/',
	user: 'Dude Outrageous',
	photo: 'https://protriathletes.org/wp-content/uploads/2022/03/unnamed-682x1024.jpg'
};
class U extends H {
	constructor(r) {
		super(), I(this, r, null, L, J, {});
	}
}
export { U as default, Q as metadata };
