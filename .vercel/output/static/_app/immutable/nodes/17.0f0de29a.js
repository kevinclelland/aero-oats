import { _ as kt } from '../chunks/preload-helper.41c905a7.js';
import { H as te } from '../chunks/control.f5b05b5f.js';
import {
	S as ee,
	i as ae,
	s as re,
	x as Kt,
	k as s,
	a as w,
	q as v,
	y as Rt,
	Y as oe,
	l,
	h as a,
	c as g,
	m as c,
	r as E,
	z as Qt,
	n as f,
	F as e,
	b as P,
	A as Ht,
	u as tt,
	d as St,
	f as se,
	g as Mt,
	a9 as le,
	B as Nt,
	v as ne
} from '../chunks/index.460b5f26.js';
import { f as Wt } from '../chunks/utils.9a66bb98.js';
import { A as ie } from '../chunks/ProgressBar.svelte_svelte_type_style_lang.a411719e.js';
const ce = (o, r) => {
	const d = o[r];
	return d
		? typeof d == 'function'
			? d()
			: Promise.resolve(d)
		: new Promise((u, p) => {
				(typeof queueMicrotask == 'function' ? queueMicrotask : setTimeout)(
					p.bind(null, new Error('Unknown variable dynamic import: ' + r))
				);
		  });
};
function fe(o, r) {
	return new te(o, r);
}
new TextEncoder();
async function ue({ params: o }) {
	try {
		const r = await ce(
			Object.assign({
				'../../posts/durban703.md': () =>
					kt(
						() => import('../chunks/durban703.4df4575c.js'),
						['..\\chunks\\durban703.4df4575c.js', '..\\chunks\\index.460b5f26.js'],
						import.meta.url
					),
				'../../posts/frodeno-wins.md': () =>
					kt(
						() => import('../chunks/frodeno-wins.e8f31031.js'),
						['..\\chunks\\frodeno-wins.e8f31031.js', '..\\chunks\\index.460b5f26.js'],
						import.meta.url
					),
				'../../posts/skipper-racing.md': () =>
					kt(
						() => import('../chunks/skipper-racing.e2cd331f.js'),
						['..\\chunks\\skipper-racing.e2cd331f.js', '..\\chunks\\index.460b5f26.js'],
						import.meta.url
					)
			}),
			`../../posts/${o.slug}.md`
		);
		return { content: r.default, meta: r.metadata };
	} catch {
		throw fe(404, `Could not find ${o.slug}`);
	}
}
const be = Object.freeze(
	Object.defineProperty({ __proto__: null, load: ue }, Symbol.toStringTag, { value: 'Module' })
);
function Xt(o, r, d) {
	const u = o.slice();
	return (u[1] = r[d]), u;
}
function Zt(o) {
	let r,
		d,
		u = o[1] + '',
		p;
	return {
		c() {
			(r = s('span')), (d = v('#')), (p = v(u)), this.h();
		},
		l(b) {
			r = l(b, 'SPAN', { class: !0 });
			var h = c(r);
			(d = E(h, '#')), (p = E(h, u)), h.forEach(a), this.h();
		},
		h() {
			f(r, 'class', 'surface-4 px-2 mx-2 border border-black rounded-md');
		},
		m(b, h) {
			P(b, r, h), e(r, d), e(r, p);
		},
		p(b, h) {
			h & 1 && u !== (u = b[1] + '') && tt(p, u);
		},
		d(b) {
			b && a(r);
		}
	};
}
function me(o) {
	let r,
		d,
		u,
		p,
		b,
		h,
		A,
		T,
		N,
		ut,
		mt,
		C,
		dt,
		_t,
		k,
		V,
		ht,
		pt,
		L,
		vt,
		Et,
		I,
		J,
		bt,
		wt,
		K,
		gt,
		et,
		y,
		j,
		yt,
		B,
		At,
		Q = Wt(o[0].meta.date) + '',
		at,
		$t,
		R,
		O,
		H,
		xt,
		W = o[0].meta.user + '',
		rt,
		ot,
		D,
		U,
		X = o[0].meta.title + '',
		st,
		Dt,
		q,
		Z = o[0].meta.description + '',
		lt,
		nt,
		S,
		Y,
		m,
		$;
	document.title = r = o[0].meta.title;
	let z = o[0].meta.categories,
		_ = [];
	for (let t = 0; t < z.length; t += 1) _[t] = Zt(Xt(o, z, t));
	O = new ie({ props: { src: o[0].meta.avatar, width: 'w-10' } });
	var G = o[0].content;
	function Ct(t) {
		return {};
	}
	return (
		G && (m = Kt(G, Ct())),
		{
			c() {
				(d = s('meta')),
					(u = s('meta')),
					(b = w()),
					(h = s('header')),
					(A = s('nav')),
					(T = s('div')),
					(N = s('p')),
					(ut = v('By Aero Oats.')),
					(mt = w()),
					(C = s('p')),
					(dt = v(
						'Bi-weekly triathlon newsletter for you to chew through while you munch your morning oats.'
					)),
					(_t = w()),
					(k = s('div')),
					(V = s('h1')),
					(ht = v('THE RACE REPORT ALMANAC')),
					(pt = w()),
					(L = s('h1')),
					(vt = v('Global Distribution')),
					(Et = w()),
					(I = s('div')),
					(J = s('h1')),
					(bt = v('COMMUNITY SUPPLIED')),
					(wt = w()),
					(K = s('h1')),
					(gt = v('AND TESTED!')),
					(et = w()),
					(y = s('section')),
					(j = s('div'));
				for (let t = 0; t < _.length; t += 1) _[t].c();
				(yt = w()),
					(B = s('span')),
					(At = v('Raced on ')),
					(at = v(Q)),
					($t = w()),
					(R = s('div')),
					Rt(O.$$.fragment),
					(H = s('p')),
					(xt = v('Author: ')),
					(rt = v(W)),
					(ot = w()),
					(D = s('section')),
					(U = s('h1')),
					(st = v(X)),
					(Dt = w()),
					(q = s('h1')),
					(lt = v(Z)),
					(nt = w()),
					(S = s('div')),
					(Y = s('p')),
					m && Rt(m.$$.fragment),
					this.h();
			},
			l(t) {
				const n = oe('svelte-ylbs26', document.head);
				(d = l(n, 'META', { property: !0, content: !0 })),
					(u = l(n, 'META', { property: !0, content: !0 })),
					n.forEach(a),
					(b = g(t)),
					(h = l(t, 'HEADER', { class: !0 }));
				var x = c(h);
				A = l(x, 'NAV', { class: !0 });
				var i = c(A);
				T = l(i, 'DIV', { class: !0 });
				var M = c(T);
				N = l(M, 'P', { class: !0 });
				var Vt = c(N);
				(ut = E(Vt, 'By Aero Oats.')), Vt.forEach(a), (mt = g(M)), (C = l(M, 'P', { class: !0 }));
				var Lt = c(C);
				(dt = E(
					Lt,
					'Bi-weekly triathlon newsletter for you to chew through while you munch your morning oats.'
				)),
					Lt.forEach(a),
					M.forEach(a),
					(_t = g(i)),
					(k = l(i, 'DIV', {}));
				var it = c(k);
				V = l(it, 'H1', { class: !0 });
				var jt = c(V);
				(ht = E(jt, 'THE RACE REPORT ALMANAC')),
					jt.forEach(a),
					(pt = g(it)),
					(L = l(it, 'H1', { class: !0 }));
				var Bt = c(L);
				(vt = E(Bt, 'Global Distribution')),
					Bt.forEach(a),
					it.forEach(a),
					(Et = g(i)),
					(I = l(i, 'DIV', { class: !0 }));
				var ct = c(I);
				J = l(ct, 'H1', {});
				var Ut = c(J);
				(bt = E(Ut, 'COMMUNITY SUPPLIED')), Ut.forEach(a), (wt = g(ct)), (K = l(ct, 'H1', {}));
				var qt = c(K);
				(gt = E(qt, 'AND TESTED!')),
					qt.forEach(a),
					ct.forEach(a),
					i.forEach(a),
					x.forEach(a),
					(et = g(t)),
					(y = l(t, 'SECTION', { class: !0 }));
				var F = c(y);
				j = l(F, 'DIV', {});
				var Yt = c(j);
				for (let Ot = 0; Ot < _.length; Ot += 1) _[Ot].l(Yt);
				Yt.forEach(a), (yt = g(F)), (B = l(F, 'SPAN', {}));
				var Pt = c(B);
				(At = E(Pt, 'Raced on ')),
					(at = E(Pt, Q)),
					Pt.forEach(a),
					($t = g(F)),
					(R = l(F, 'DIV', { class: !0 }));
				var Tt = c(R);
				Qt(O.$$.fragment, Tt), (H = l(Tt, 'P', { class: !0 }));
				var It = c(H);
				(xt = E(It, 'Author: ')),
					(rt = E(It, W)),
					It.forEach(a),
					Tt.forEach(a),
					F.forEach(a),
					(ot = g(t)),
					(D = l(t, 'SECTION', { class: !0 }));
				var ft = c(D);
				U = l(ft, 'H1', { class: !0 });
				var zt = c(U);
				(st = E(zt, X)), zt.forEach(a), (Dt = g(ft)), (q = l(ft, 'H1', { class: !0 }));
				var Gt = c(q);
				(lt = E(Gt, Z)),
					Gt.forEach(a),
					ft.forEach(a),
					(nt = g(t)),
					(S = l(t, 'DIV', { class: !0 }));
				var Ft = c(S);
				Y = l(Ft, 'P', {});
				var Jt = c(Y);
				m && Qt(m.$$.fragment, Jt), Jt.forEach(a), Ft.forEach(a), this.h();
			},
			h() {
				f(d, 'property', 'og:type'),
					f(d, 'content', 'article'),
					f(u, 'property', 'og:title'),
					f(u, 'content', (p = o[0].meta.title)),
					f(N, 'class', 'font-serif text-xl font-bold'),
					f(C, 'class', 'font-serif text-sm'),
					f(T, 'class', 'md:w-2/12 text-center md:text-left'),
					f(V, 'class', 'font-serif text-4xl font-bold text-center'),
					f(L, 'class', 'text-center text-2xl'),
					f(
						I,
						'class',
						'flex md:w-2/12 w-full flex-col items-center justify-center border border-black text-xl font-bold'
					),
					f(A, 'class', 'flex flex-col md:flex-row gap-3 items-center justify-around py-5 px-4'),
					f(h, 'class', 'w-full'),
					f(H, 'class', 'px-2'),
					f(R, 'class', 'flex items-center'),
					f(
						y,
						'class',
						'mx-auto flex items-center justify-between border-t border-b border-black py-3 px-5 font-thin'
					),
					f(U, 'class', 'text-center font-serif text-7xl p-2'),
					f(q, 'class', 'mt-5 text-center font-serif text-4xl italic p-2'),
					f(D, 'class', 'py-5'),
					f(S, 'class', 'p-10');
			},
			m(t, n) {
				e(document.head, d),
					e(document.head, u),
					P(t, b, n),
					P(t, h, n),
					e(h, A),
					e(A, T),
					e(T, N),
					e(N, ut),
					e(T, mt),
					e(T, C),
					e(C, dt),
					e(A, _t),
					e(A, k),
					e(k, V),
					e(V, ht),
					e(k, pt),
					e(k, L),
					e(L, vt),
					e(A, Et),
					e(A, I),
					e(I, J),
					e(J, bt),
					e(I, wt),
					e(I, K),
					e(K, gt),
					P(t, et, n),
					P(t, y, n),
					e(y, j);
				for (let x = 0; x < _.length; x += 1) _[x] && _[x].m(j, null);
				e(y, yt),
					e(y, B),
					e(B, At),
					e(B, at),
					e(y, $t),
					e(y, R),
					Ht(O, R, null),
					e(R, H),
					e(H, xt),
					e(H, rt),
					P(t, ot, n),
					P(t, D, n),
					e(D, U),
					e(U, st),
					e(D, Dt),
					e(D, q),
					e(q, lt),
					P(t, nt, n),
					P(t, S, n),
					e(S, Y),
					m && Ht(m, Y, null),
					($ = !0);
			},
			p(t, [n]) {
				if (
					((!$ || n & 1) && r !== (r = t[0].meta.title) && (document.title = r),
					(!$ || (n & 1 && p !== (p = t[0].meta.title))) && f(u, 'content', p),
					n & 1)
				) {
					z = t[0].meta.categories;
					let i;
					for (i = 0; i < z.length; i += 1) {
						const M = Xt(t, z, i);
						_[i] ? _[i].p(M, n) : ((_[i] = Zt(M)), _[i].c(), _[i].m(j, null));
					}
					for (; i < _.length; i += 1) _[i].d(1);
					_.length = z.length;
				}
				(!$ || n & 1) && Q !== (Q = Wt(t[0].meta.date) + '') && tt(at, Q);
				const x = {};
				if (
					(n & 1 && (x.src = t[0].meta.avatar),
					O.$set(x),
					(!$ || n & 1) && W !== (W = t[0].meta.user + '') && tt(rt, W),
					(!$ || n & 1) && X !== (X = t[0].meta.title + '') && tt(st, X),
					(!$ || n & 1) && Z !== (Z = t[0].meta.description + '') && tt(lt, Z),
					n & 1 && G !== (G = t[0].content))
				) {
					if (m) {
						ne();
						const i = m;
						St(i.$$.fragment, 1, 0, () => {
							Nt(i, 1);
						}),
							se();
					}
					G
						? ((m = Kt(G, Ct())), Rt(m.$$.fragment), Mt(m.$$.fragment, 1), Ht(m, Y, null))
						: (m = null);
				}
			},
			i(t) {
				$ || (Mt(O.$$.fragment, t), m && Mt(m.$$.fragment, t), ($ = !0));
			},
			o(t) {
				St(O.$$.fragment, t), m && St(m.$$.fragment, t), ($ = !1);
			},
			d(t) {
				a(d),
					a(u),
					t && a(b),
					t && a(h),
					t && a(et),
					t && a(y),
					le(_, t),
					Nt(O),
					t && a(ot),
					t && a(D),
					t && a(nt),
					t && a(S),
					m && Nt(m);
			}
		}
	);
}
function de(o, r, d) {
	let { data: u } = r;
	return (
		(o.$$set = (p) => {
			'data' in p && d(0, (u = p.data));
		}),
		[u]
	);
}
class we extends ee {
	constructor(r) {
		super(), ae(this, r, de, me, re, { data: 0 });
	}
}
export { we as component, be as universal };
