import {
	S as fe,
	i as he,
	s as ue,
	a as $,
	k as p,
	q as H,
	Y as de,
	h as f,
	c as w,
	l as m,
	m as v,
	r as T,
	n,
	b as Z,
	F as s,
	g as N,
	f as _e,
	d as ee,
	a9 as pe,
	y as me,
	z as ve,
	a1 as oe,
	A as ge,
	u as G,
	B as Ee,
	v as be
} from '../chunks/index.460b5f26.js';
import { f as ce } from '../chunks/utils.9a66bb98.js';
import { A as Ae } from '../chunks/ProgressBar.svelte_svelte_type_style_lang.a411719e.js';
async function $e({ fetch: h }) {
	return { posts: await (await h('api/posts')).json() };
}
const ye = Object.freeze(
	Object.defineProperty({ __proto__: null, load: $e }, Symbol.toStringTag, { value: 'Module' })
);
function ne(h, l, o) {
	const r = h.slice();
	return (r[1] = l[o]), r;
}
function ie(h) {
	let l,
		o,
		r,
		E,
		D,
		d,
		b,
		_,
		a = h[1].title + '',
		S,
		e,
		i,
		t,
		g,
		I = h[1].description + '',
		O,
		Y,
		B,
		J,
		j,
		k,
		K,
		y,
		x,
		R = h[1].user + '',
		C,
		Q,
		P,
		U,
		V = ce(h[1].date) + '',
		L,
		W,
		A;
	return (
		(k = new Ae({ props: { src: h[1].avatar, width: 'w-8' } })),
		{
			c() {
				(l = p('div')),
					(o = p('header')),
					(r = p('img')),
					(D = $()),
					(d = p('div')),
					(b = p('h3')),
					(_ = p('a')),
					(S = H(a)),
					(i = $()),
					(t = p('article')),
					(g = p('p')),
					(O = H(I)),
					(Y = $()),
					(B = p('hr')),
					(J = $()),
					(j = p('footer')),
					me(k.$$.fragment),
					(K = $()),
					(y = p('div')),
					(x = p('h6')),
					(C = H(R)),
					(Q = $()),
					(P = p('small')),
					(U = H('On ')),
					(L = H(V)),
					(W = $()),
					this.h();
			},
			l(u) {
				l = m(u, 'DIV', { class: !0 });
				var c = v(l);
				o = m(c, 'HEADER', { class: !0 });
				var q = v(o);
				(r = m(q, 'IMG', { src: !0, class: !0, alt: !0 })),
					q.forEach(f),
					(D = w(c)),
					(d = m(c, 'DIV', { class: !0 }));
				var M = v(d);
				b = m(M, 'H3', { class: !0 });
				var te = v(b);
				_ = m(te, 'A', { href: !0, class: !0 });
				var ae = v(_);
				(S = T(ae, a)), ae.forEach(f), te.forEach(f), (i = w(M)), (t = m(M, 'ARTICLE', {}));
				var se = v(t);
				g = m(se, 'P', { class: !0 });
				var le = v(g);
				(O = T(le, I)),
					le.forEach(f),
					se.forEach(f),
					M.forEach(f),
					(Y = w(c)),
					(B = m(c, 'HR', { class: !0 })),
					(J = w(c)),
					(j = m(c, 'FOOTER', { class: !0 }));
				var z = v(j);
				ve(k.$$.fragment, z), (K = w(z)), (y = m(z, 'DIV', { class: !0 }));
				var F = v(y);
				x = m(F, 'H6', { class: !0 });
				var re = v(x);
				(C = T(re, R)), re.forEach(f), (Q = w(F)), (P = m(F, 'SMALL', { class: !0 }));
				var X = v(P);
				(U = T(X, 'On ')),
					(L = T(X, V)),
					X.forEach(f),
					F.forEach(f),
					z.forEach(f),
					(W = w(c)),
					c.forEach(f),
					this.h();
			},
			h() {
				oe(r.src, (E = h[1].photo)) || n(r, 'src', E),
					n(r, 'class', 'bg-black/50 max-h-80'),
					n(r, 'alt', 'Post'),
					n(o, 'class', 'flex justify-around'),
					n(_, 'href', (e = h[1].slug)),
					n(_, 'class', 'title'),
					n(b, 'class', 'h3'),
					n(g, 'class', 'description'),
					n(d, 'class', 'p-4 space-y-4'),
					n(B, 'class', 'opacity-50'),
					n(x, 'class', 'font-bold'),
					n(P, 'class', 'date'),
					n(y, 'class', 'flex-auto flex justify-between items-center'),
					n(j, 'class', 'p-4 flex justify-start items-center space-x-4'),
					n(l, 'class', 'col-span-1 card card-hover max-w-2xl overflow-hidden');
			},
			m(u, c) {
				Z(u, l, c),
					s(l, o),
					s(o, r),
					s(l, D),
					s(l, d),
					s(d, b),
					s(b, _),
					s(_, S),
					s(d, i),
					s(d, t),
					s(t, g),
					s(g, O),
					s(l, Y),
					s(l, B),
					s(l, J),
					s(l, j),
					ge(k, j, null),
					s(j, K),
					s(j, y),
					s(y, x),
					s(x, C),
					s(y, Q),
					s(y, P),
					s(P, U),
					s(P, L),
					s(l, W),
					(A = !0);
			},
			p(u, c) {
				(!A || (c & 1 && !oe(r.src, (E = u[1].photo)))) && n(r, 'src', E),
					(!A || c & 1) && a !== (a = u[1].title + '') && G(S, a),
					(!A || (c & 1 && e !== (e = u[1].slug))) && n(_, 'href', e),
					(!A || c & 1) && I !== (I = u[1].description + '') && G(O, I);
				const q = {};
				c & 1 && (q.src = u[1].avatar),
					k.$set(q),
					(!A || c & 1) && R !== (R = u[1].user + '') && G(C, R),
					(!A || c & 1) && V !== (V = ce(u[1].date) + '') && G(L, V);
			},
			i(u) {
				A || (N(k.$$.fragment, u), (A = !0));
			},
			o(u) {
				ee(k.$$.fragment, u), (A = !1);
			},
			d(u) {
				u && f(l), Ee(k);
			}
		}
	);
}
function we(h) {
	let l,
		o,
		r,
		E,
		D,
		d,
		b,
		_ = h[0].posts,
		a = [];
	for (let e = 0; e < _.length; e += 1) a[e] = ie(ne(h, _, e));
	const S = (e) =>
		ee(a[e], 1, 1, () => {
			a[e] = null;
		});
	return {
		c() {
			(l = $()), (o = p('section')), (r = p('h1')), (E = H('All Posts')), (D = $()), (d = p('div'));
			for (let e = 0; e < a.length; e += 1) a[e].c();
			this.h();
		},
		l(e) {
			de('svelte-1rbe4e4', document.head).forEach(f), (l = w(e)), (o = m(e, 'SECTION', {}));
			var t = v(o);
			r = m(t, 'H1', { class: !0 });
			var g = v(r);
			(E = T(g, 'All Posts')), g.forEach(f), (D = w(t)), (d = m(t, 'DIV', { class: !0 }));
			var I = v(d);
			for (let O = 0; O < a.length; O += 1) a[O].l(I);
			I.forEach(f), t.forEach(f), this.h();
		},
		h() {
			(document.title = 'The Blog'),
				n(r, 'class', 'text-2xl'),
				n(
					d,
					'class',
					'mx-auto text-token grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'
				);
		},
		m(e, i) {
			Z(e, l, i), Z(e, o, i), s(o, r), s(r, E), s(o, D), s(o, d);
			for (let t = 0; t < a.length; t += 1) a[t] && a[t].m(d, null);
			b = !0;
		},
		p(e, [i]) {
			if (i & 1) {
				_ = e[0].posts;
				let t;
				for (t = 0; t < _.length; t += 1) {
					const g = ne(e, _, t);
					a[t]
						? (a[t].p(g, i), N(a[t], 1))
						: ((a[t] = ie(g)), a[t].c(), N(a[t], 1), a[t].m(d, null));
				}
				for (be(), t = _.length; t < a.length; t += 1) S(t);
				_e();
			}
		},
		i(e) {
			if (!b) {
				for (let i = 0; i < _.length; i += 1) N(a[i]);
				b = !0;
			}
		},
		o(e) {
			a = a.filter(Boolean);
			for (let i = 0; i < a.length; i += 1) ee(a[i]);
			b = !1;
		},
		d(e) {
			e && f(l), e && f(o), pe(a, e);
		}
	};
}
function Ie(h, l, o) {
	let { data: r } = l;
	return (
		(h.$$set = (E) => {
			'data' in E && o(0, (r = E.data));
		}),
		[r]
	);
}
class De extends fe {
	constructor(l) {
		super(), he(this, l, Ie, we, ue, { data: 0 });
	}
}
export { De as component, ye as universal };
