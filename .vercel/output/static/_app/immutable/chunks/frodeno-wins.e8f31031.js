import {
	S,
	i as I,
	s as M,
	k as f,
	q as h,
	a as E,
	l as d,
	m,
	r as _,
	h as e,
	c as H,
	n as O,
	b as n,
	F as i,
	$ as x
} from './index.460b5f26.js';
function q(b) {
	let s,
		v,
		p,
		a,
		w,
		o,
		k,
		g,
		c,
		l,
		T = '<code class="language-ts"></code>';
	return {
		c() {
			(s = f('h1')),
				(v = h('Markdown')),
				(p = E()),
				(a = f('p')),
				(w = h('Hey ')),
				(o = f('strong')),
				(k = h('friends')),
				(g = h('! 👋')),
				(c = E()),
				(l = f('pre')),
				this.h();
		},
		l(t) {
			s = d(t, 'H1', {});
			var r = m(s);
			(v = _(r, 'Markdown')), r.forEach(e), (p = H(t)), (a = d(t, 'P', {}));
			var u = m(a);
			(w = _(u, 'Hey ')), (o = d(u, 'STRONG', {}));
			var y = m(o);
			(k = _(y, 'friends')),
				y.forEach(e),
				(g = _(u, '! 👋')),
				u.forEach(e),
				(c = H(t)),
				(l = d(t, 'PRE', { class: !0 }));
			var F = m(l);
			F.forEach(e), this.h();
		},
		h() {
			O(l, 'class', 'language-ts');
		},
		m(t, r) {
			n(t, s, r),
				i(s, v),
				n(t, p, r),
				n(t, a, r),
				i(a, w),
				i(a, o),
				i(o, k),
				i(a, g),
				n(t, c, r),
				n(t, l, r),
				(l.innerHTML = T);
		},
		p: x,
		i: x,
		o: x,
		d(t) {
			t && e(s), t && e(p), t && e(a), t && e(c), t && e(l);
		}
	};
}
const G = {
	title: 'Frodeno wins Hamburg!',
	description: 'The GOAT is finally back to his winning ways at Ironman Hamburg.',
	date: '2022-4-14',
	categories: ['sveltekit', 'svelte'],
	published: !0,
	avatar: 'https://source.unsplash.com/YOErFW8AfkI/128x128',
	user: 'Jack Sparrow',
	photo: 'https://protriathletes.org/wp-content/uploads/2022/07/IKT_7549.jpg'
};
class P extends S {
	constructor(s) {
		super(), I(this, s, null, q, M, {});
	}
}
export { P as default, G as metadata };
