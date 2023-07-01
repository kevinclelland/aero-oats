import {
	S as g,
	i as x,
	s as $,
	k as d,
	q as y,
	a as T,
	y as D,
	l as p,
	m as u,
	r as E,
	h as l,
	c as I,
	z as V,
	n as f,
	b as q,
	F as i,
	A as S,
	$ as b,
	g as j,
	d as k,
	B as w
} from '../chunks/index.460b5f26.js';
import { T as z } from '../chunks/Tools.03abc7db.js';
function A(v) {
	let t, s, c, m, n, e, r;
	return (
		(e = new z({})),
		{
			c() {
				(t = d('div')),
					(s = d('div')),
					(c = y('Tools')),
					(m = T()),
					(n = d('div')),
					D(e.$$.fragment),
					this.h();
			},
			l(a) {
				t = p(a, 'DIV', { class: !0 });
				var o = u(t);
				s = p(o, 'DIV', { class: !0 });
				var _ = u(s);
				(c = E(_, 'Tools')), _.forEach(l), (m = I(o)), (n = p(o, 'DIV', { class: !0 }));
				var h = u(n);
				V(e.$$.fragment, h), h.forEach(l), o.forEach(l), this.h();
			},
			h() {
				f(s, 'class', 'col-span-1 text-7xl p-4'),
					f(n, 'class', 'col-span-1 p-4'),
					f(t, 'class', 'flex mx-auto grid grid-cols-1 p-4 justify-items-center');
			},
			m(a, o) {
				q(a, t, o), i(t, s), i(s, c), i(t, m), i(t, n), S(e, n, null), (r = !0);
			},
			p: b,
			i(a) {
				r || (j(e.$$.fragment, a), (r = !0));
			},
			o(a) {
				k(e.$$.fragment, a), (r = !1);
			},
			d(a) {
				a && l(t), w(e);
			}
		}
	);
}
class F extends g {
	constructor(t) {
		super(), x(this, t, null, A, $, {});
	}
}
export { F as component };
