import {
	S as n,
	i as o,
	s as i,
	q as c,
	r as l,
	b as m,
	$ as a,
	h as p
} from '../chunks/index.460b5f26.js';
function h(s) {
	let t;
	return {
		c() {
			t = c('Start here');
		},
		l(e) {
			t = l(e, 'Start here');
		},
		m(e, r) {
			m(e, t, r);
		},
		p: a,
		i: a,
		o: a,
		d(e) {
			e && p(t);
		}
	};
}
class f extends n {
	constructor(t) {
		super(), o(this, t, null, h, i, {});
	}
}
export { f as component };
