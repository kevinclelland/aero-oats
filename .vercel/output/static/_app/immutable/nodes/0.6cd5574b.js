import {
	C as pl,
	D as Tt,
	S as Se,
	i as Te,
	s as ve,
	E as te,
	k as D,
	a as N,
	l as A,
	m as L,
	c as z,
	h as _,
	n as f,
	b as U,
	F as m,
	g as C,
	v as ce,
	d as B,
	f as fe,
	G as le,
	H as re,
	I as oe,
	J as il,
	K as we,
	L as ke,
	M as J,
	N as Me,
	q as G,
	r as X,
	e as je,
	O as sl,
	P as yl,
	Q as wl,
	R as kl,
	T as dt,
	U as rt,
	V as vt,
	w as Pt,
	W as El,
	X as he,
	Y as Ll,
	Z as Rl,
	_ as ge,
	$ as ae,
	o as Dl,
	a0 as Al,
	a1 as cl,
	a2 as Sl,
	y as Ee,
	z as Le,
	A as Re,
	B as De
} from '../chunks/index.460b5f26.js';
import { w as fl } from '../chunks/index.8bec3548.js';
import {
	s as Tl,
	m as xt,
	a as Ht,
	g as Pl,
	b as xl,
	A as Hl
} from '../chunks/ProgressBar.svelte_svelte_type_style_lang.a411719e.js';
async function Il({ url: t }) {
	return { url: t.pathname };
}
const io = Object.freeze(
	Object.defineProperty({ __proto__: null, load: Il }, Symbol.toStringTag, { value: 'Module' })
);
const Cl = fl(void 0);
function Fl() {
	const { subscribe: t, set: e, update: l } = fl({});
	return {
		subscribe: t,
		set: e,
		update: l,
		open: (o) => l(() => ({ open: !0, ...o })),
		close: () => l((o) => ((o.open = !1), o))
	};
}
const Ne = Fl();
function Bl(t, e) {
	const l = 'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';
	let o, a;
	function r(c) {
		c.shiftKey && c.code === 'Tab' && (c.preventDefault(), a.focus());
	}
	function n(c) {
		!c.shiftKey && c.code === 'Tab' && (c.preventDefault(), o.focus());
	}
	const i = (c) => {
		if (e === !1) return;
		const b = Array.from(t.querySelectorAll(l));
		b.length &&
			((o = b[0]),
			(a = b[b.length - 1]),
			c || o.focus(),
			o.addEventListener('keydown', r),
			a.addEventListener('keydown', n));
	};
	i(!1);
	function s() {
		o && o.removeEventListener('keydown', r), a && a.removeEventListener('keydown', n);
	}
	const h = (c, b) => (c.length && (s(), i(!0)), b),
		y = new MutationObserver(h);
	return (
		y.observe(t, { childList: !0, subtree: !0 }),
		{
			update(c) {
				(e = c), c ? i(!1) : s();
			},
			destroy() {
				s(), y.disconnect();
			}
		}
	);
}
function Ol(t) {
	const e = t - 1;
	return e * e * e + 1;
}
function ht(t, { delay: e = 0, duration: l = 400, easing: o = pl } = {}) {
	const a = +getComputedStyle(t).opacity;
	return { delay: e, duration: l, easing: o, css: (r) => `opacity: ${r * a}` };
}
function It(
	t,
	{ delay: e = 0, duration: l = 400, easing: o = Ol, x: a = 0, y: r = 0, opacity: n = 0 } = {}
) {
	const i = getComputedStyle(t),
		s = +i.opacity,
		h = i.transform === 'none' ? '' : i.transform,
		y = s * (1 - n),
		[c, b] = Tt(a),
		[d, p] = Tt(r);
	return {
		delay: e,
		duration: l,
		easing: o,
		css: (g, u) => `
			transform: ${h} translate(${(1 - g) * c}${b}, ${(1 - g) * d}${p});
			opacity: ${s - y * u}`
	};
}
const Vl = (t) => ({}),
	Ct = (t) => ({}),
	Ml = (t) => ({}),
	Ft = (t) => ({}),
	Nl = (t) => ({}),
	Bt = (t) => ({});
function Ot(t) {
	let e, l, o;
	const a = t[22].lead,
		r = te(a, t, t[21], Bt);
	return {
		c() {
			(e = D('div')), r && r.c(), this.h();
		},
		l(n) {
			e = A(n, 'DIV', { class: !0 });
			var i = L(e);
			r && r.l(i), i.forEach(_), this.h();
		},
		h() {
			f(e, 'class', (l = 'app-bar-slot-lead ' + t[4]));
		},
		m(n, i) {
			U(n, e, i), r && r.m(e, null), (o = !0);
		},
		p(n, i) {
			r &&
				r.p &&
				(!o || i & 2097152) &&
				le(r, a, n, n[21], o ? oe(a, n[21], i, Nl) : re(n[21]), Bt),
				(!o || (i & 16 && l !== (l = 'app-bar-slot-lead ' + n[4]))) && f(e, 'class', l);
		},
		i(n) {
			o || (C(r, n), (o = !0));
		},
		o(n) {
			B(r, n), (o = !1);
		},
		d(n) {
			n && _(e), r && r.d(n);
		}
	};
}
function Vt(t) {
	let e, l, o;
	const a = t[22].trail,
		r = te(a, t, t[21], Ft);
	return {
		c() {
			(e = D('div')), r && r.c(), this.h();
		},
		l(n) {
			e = A(n, 'DIV', { class: !0 });
			var i = L(e);
			r && r.l(i), i.forEach(_), this.h();
		},
		h() {
			f(e, 'class', (l = 'app-bar-slot-trail ' + t[2]));
		},
		m(n, i) {
			U(n, e, i), r && r.m(e, null), (o = !0);
		},
		p(n, i) {
			r &&
				r.p &&
				(!o || i & 2097152) &&
				le(r, a, n, n[21], o ? oe(a, n[21], i, Ml) : re(n[21]), Ft),
				(!o || (i & 4 && l !== (l = 'app-bar-slot-trail ' + n[2]))) && f(e, 'class', l);
		},
		i(n) {
			o || (C(r, n), (o = !0));
		},
		o(n) {
			B(r, n), (o = !1);
		},
		d(n) {
			n && _(e), r && r.d(n);
		}
	};
}
function Mt(t) {
	let e, l, o;
	const a = t[22].headline,
		r = te(a, t, t[21], Ct);
	return {
		c() {
			(e = D('div')), r && r.c(), this.h();
		},
		l(n) {
			e = A(n, 'DIV', { class: !0 });
			var i = L(e);
			r && r.l(i), i.forEach(_), this.h();
		},
		h() {
			f(e, 'class', (l = 'app-bar-row-headline ' + t[5]));
		},
		m(n, i) {
			U(n, e, i), r && r.m(e, null), (o = !0);
		},
		p(n, i) {
			r &&
				r.p &&
				(!o || i & 2097152) &&
				le(r, a, n, n[21], o ? oe(a, n[21], i, Vl) : re(n[21]), Ct),
				(!o || (i & 32 && l !== (l = 'app-bar-row-headline ' + n[5]))) && f(e, 'class', l);
		},
		i(n) {
			o || (C(r, n), (o = !0));
		},
		o(n) {
			B(r, n), (o = !1);
		},
		d(n) {
			n && _(e), r && r.d(n);
		}
	};
}
function zl(t) {
	let e,
		l,
		o,
		a,
		r,
		n,
		i,
		s,
		h,
		y,
		c = t[8].lead && Ot(t);
	const b = t[22].default,
		d = te(b, t, t[21], null);
	let p = t[8].trail && Vt(t),
		g = t[8].headline && Mt(t);
	return {
		c() {
			(e = D('div')),
				(l = D('div')),
				c && c.c(),
				(o = N()),
				(a = D('div')),
				d && d.c(),
				(n = N()),
				p && p.c(),
				(s = N()),
				g && g.c(),
				this.h();
		},
		l(u) {
			e = A(u, 'DIV', {
				class: !0,
				'data-testid': !0,
				role: !0,
				'aria-label': !0,
				'aria-labelledby': !0
			});
			var v = L(e);
			l = A(v, 'DIV', { class: !0 });
			var w = L(l);
			c && c.l(w), (o = z(w)), (a = A(w, 'DIV', { class: !0 }));
			var x = L(a);
			d && d.l(x),
				x.forEach(_),
				(n = z(w)),
				p && p.l(w),
				w.forEach(_),
				(s = z(v)),
				g && g.l(v),
				v.forEach(_),
				this.h();
		},
		h() {
			f(a, 'class', (r = 'app-bar-slot-default ' + t[3])),
				f(l, 'class', (i = 'app-bar-row-main ' + t[6])),
				f(e, 'class', (h = 'app-bar ' + t[7])),
				f(e, 'data-testid', 'app-bar'),
				f(e, 'role', 'toolbar'),
				f(e, 'aria-label', t[0]),
				f(e, 'aria-labelledby', t[1]);
		},
		m(u, v) {
			U(u, e, v),
				m(e, l),
				c && c.m(l, null),
				m(l, o),
				m(l, a),
				d && d.m(a, null),
				m(l, n),
				p && p.m(l, null),
				m(e, s),
				g && g.m(e, null),
				(y = !0);
		},
		p(u, [v]) {
			u[8].lead
				? c
					? (c.p(u, v), v & 256 && C(c, 1))
					: ((c = Ot(u)), c.c(), C(c, 1), c.m(l, o))
				: c &&
				  (ce(),
				  B(c, 1, 1, () => {
						c = null;
				  }),
				  fe()),
				d &&
					d.p &&
					(!y || v & 2097152) &&
					le(d, b, u, u[21], y ? oe(b, u[21], v, null) : re(u[21]), null),
				(!y || (v & 8 && r !== (r = 'app-bar-slot-default ' + u[3]))) && f(a, 'class', r),
				u[8].trail
					? p
						? (p.p(u, v), v & 256 && C(p, 1))
						: ((p = Vt(u)), p.c(), C(p, 1), p.m(l, null))
					: p &&
					  (ce(),
					  B(p, 1, 1, () => {
							p = null;
					  }),
					  fe()),
				(!y || (v & 64 && i !== (i = 'app-bar-row-main ' + u[6]))) && f(l, 'class', i),
				u[8].headline
					? g
						? (g.p(u, v), v & 256 && C(g, 1))
						: ((g = Mt(u)), g.c(), C(g, 1), g.m(e, null))
					: g &&
					  (ce(),
					  B(g, 1, 1, () => {
							g = null;
					  }),
					  fe()),
				(!y || (v & 128 && h !== (h = 'app-bar ' + u[7]))) && f(e, 'class', h),
				(!y || v & 1) && f(e, 'aria-label', u[0]),
				(!y || v & 2) && f(e, 'aria-labelledby', u[1]);
		},
		i(u) {
			y || (C(c), C(d, u), C(p), C(g), (y = !0));
		},
		o(u) {
			B(c), B(d, u), B(p), B(g), (y = !1);
		},
		d(u) {
			u && _(e), c && c.d(), d && d.d(u), p && p.d(), g && g.d();
		}
	};
}
const Wl = 'flex flex-col',
	jl = 'grid items-center',
	ql = '',
	Ul = 'flex-none flex justify-between items-center',
	Kl = 'flex-auto',
	Gl = 'flex-none flex items-center space-x-4';
function Xl(t, e, l) {
	let o,
		a,
		r,
		n,
		i,
		s,
		{ $$slots: h = {}, $$scope: y } = e;
	const c = il(h);
	let { background: b = 'bg-surface-100-800-token' } = e,
		{ border: d = '' } = e,
		{ padding: p = 'p-4' } = e,
		{ shadow: g = '' } = e,
		{ spacing: u = 'space-y-4' } = e,
		{ gridColumns: v = 'grid-cols-[auto_1fr_auto]' } = e,
		{ gap: w = 'gap-4' } = e,
		{ regionRowMain: x = '' } = e,
		{ regionRowHeadline: P = '' } = e,
		{ slotLead: S = '' } = e,
		{ slotDefault: H = '' } = e,
		{ slotTrail: E = '' } = e,
		{ label: T = '' } = e,
		{ labelledby: I = '' } = e;
	return (
		(t.$$set = (k) => {
			l(23, (e = we(we({}, e), ke(k)))),
				'background' in k && l(9, (b = k.background)),
				'border' in k && l(10, (d = k.border)),
				'padding' in k && l(11, (p = k.padding)),
				'shadow' in k && l(12, (g = k.shadow)),
				'spacing' in k && l(13, (u = k.spacing)),
				'gridColumns' in k && l(14, (v = k.gridColumns)),
				'gap' in k && l(15, (w = k.gap)),
				'regionRowMain' in k && l(16, (x = k.regionRowMain)),
				'regionRowHeadline' in k && l(17, (P = k.regionRowHeadline)),
				'slotLead' in k && l(18, (S = k.slotLead)),
				'slotDefault' in k && l(19, (H = k.slotDefault)),
				'slotTrail' in k && l(20, (E = k.slotTrail)),
				'label' in k && l(0, (T = k.label)),
				'labelledby' in k && l(1, (I = k.labelledby)),
				'$$scope' in k && l(21, (y = k.$$scope));
		}),
		(t.$$.update = () => {
			l(7, (o = `${Wl} ${b} ${d} ${u} ${p} ${g} ${e.class ?? ''}`)),
				t.$$.dirty & 114688 && l(6, (a = `${jl} ${v} ${w} ${x}`)),
				t.$$.dirty & 131072 && l(5, (r = `${ql} ${P}`)),
				t.$$.dirty & 262144 && l(4, (n = `${Ul} ${S}`)),
				t.$$.dirty & 524288 && l(3, (i = `${Kl} ${H}`)),
				t.$$.dirty & 1048576 && l(2, (s = `${Gl} ${E}`));
		}),
		(e = ke(e)),
		[T, I, s, i, n, r, a, o, c, b, d, p, g, u, v, w, x, P, S, H, E, y, h]
	);
}
class Yl extends Se {
	constructor(e) {
		super(),
			Te(this, e, Xl, zl, ve, {
				background: 9,
				border: 10,
				padding: 11,
				shadow: 12,
				spacing: 13,
				gridColumns: 14,
				gap: 15,
				regionRowMain: 16,
				regionRowHeadline: 17,
				slotLead: 18,
				slotDefault: 19,
				slotTrail: 20,
				label: 0,
				labelledby: 1
			});
	}
}
const Jl = (t) => ({}),
	Nt = (t) => ({}),
	Ql = (t) => ({}),
	zt = (t) => ({}),
	Zl = (t) => ({}),
	Wt = (t) => ({}),
	$l = (t) => ({}),
	jt = (t) => ({}),
	er = (t) => ({}),
	qt = (t) => ({}),
	tr = (t) => ({}),
	Ut = (t) => ({});
function Kt(t) {
	let e, l, o;
	const a = t[18].header,
		r = te(a, t, t[17], Ut);
	return {
		c() {
			(e = D('header')), r && r.c(), this.h();
		},
		l(n) {
			e = A(n, 'HEADER', { id: !0, class: !0 });
			var i = L(e);
			r && r.l(i), i.forEach(_), this.h();
		},
		h() {
			f(e, 'id', 'shell-header'), f(e, 'class', (l = 'flex-none ' + t[7]));
		},
		m(n, i) {
			U(n, e, i), r && r.m(e, null), (o = !0);
		},
		p(n, i) {
			r && r.p && (!o || i & 131072) && le(r, a, n, n[17], o ? oe(a, n[17], i, tr) : re(n[17]), Ut),
				(!o || (i & 128 && l !== (l = 'flex-none ' + n[7]))) && f(e, 'class', l);
		},
		i(n) {
			o || (C(r, n), (o = !0));
		},
		o(n) {
			B(r, n), (o = !1);
		},
		d(n) {
			n && _(e), r && r.d(n);
		}
	};
}
function Gt(t) {
	let e, l;
	const o = t[18].sidebarLeft,
		a = te(o, t, t[17], qt);
	return {
		c() {
			(e = D('aside')), a && a.c(), this.h();
		},
		l(r) {
			e = A(r, 'ASIDE', { id: !0, class: !0 });
			var n = L(e);
			a && a.l(n), n.forEach(_), this.h();
		},
		h() {
			f(e, 'id', 'sidebar-left'), f(e, 'class', t[6]);
		},
		m(r, n) {
			U(r, e, n), a && a.m(e, null), (l = !0);
		},
		p(r, n) {
			a && a.p && (!l || n & 131072) && le(a, o, r, r[17], l ? oe(o, r[17], n, er) : re(r[17]), qt),
				(!l || n & 64) && f(e, 'class', r[6]);
		},
		i(r) {
			l || (C(a, r), (l = !0));
		},
		o(r) {
			B(a, r), (l = !1);
		},
		d(r) {
			r && _(e), a && a.d(r);
		}
	};
}
function Xt(t) {
	let e, l, o;
	const a = t[18].pageHeader,
		r = te(a, t, t[17], jt),
		n = r || lr();
	return {
		c() {
			(e = D('header')), n && n.c(), this.h();
		},
		l(i) {
			e = A(i, 'HEADER', { id: !0, class: !0 });
			var s = L(e);
			n && n.l(s), s.forEach(_), this.h();
		},
		h() {
			f(e, 'id', 'page-header'), f(e, 'class', (l = 'flex-none ' + t[4]));
		},
		m(i, s) {
			U(i, e, s), n && n.m(e, null), (o = !0);
		},
		p(i, s) {
			r && r.p && (!o || s & 131072) && le(r, a, i, i[17], o ? oe(a, i[17], s, $l) : re(i[17]), jt),
				(!o || (s & 16 && l !== (l = 'flex-none ' + i[4]))) && f(e, 'class', l);
		},
		i(i) {
			o || (C(n, i), (o = !0));
		},
		o(i) {
			B(n, i), (o = !1);
		},
		d(i) {
			i && _(e), n && n.d(i);
		}
	};
}
function lr(t) {
	let e;
	return {
		c() {
			e = G('(slot:header)');
		},
		l(l) {
			e = X(l, '(slot:header)');
		},
		m(l, o) {
			U(l, e, o);
		},
		d(l) {
			l && _(e);
		}
	};
}
function Yt(t) {
	let e, l, o;
	const a = t[18].pageFooter,
		r = te(a, t, t[17], Wt),
		n = r || rr();
	return {
		c() {
			(e = D('footer')), n && n.c(), this.h();
		},
		l(i) {
			e = A(i, 'FOOTER', { id: !0, class: !0 });
			var s = L(e);
			n && n.l(s), s.forEach(_), this.h();
		},
		h() {
			f(e, 'id', 'page-footer'), f(e, 'class', (l = 'flex-none ' + t[2]));
		},
		m(i, s) {
			U(i, e, s), n && n.m(e, null), (o = !0);
		},
		p(i, s) {
			r && r.p && (!o || s & 131072) && le(r, a, i, i[17], o ? oe(a, i[17], s, Zl) : re(i[17]), Wt),
				(!o || (s & 4 && l !== (l = 'flex-none ' + i[2]))) && f(e, 'class', l);
		},
		i(i) {
			o || (C(n, i), (o = !0));
		},
		o(i) {
			B(n, i), (o = !1);
		},
		d(i) {
			i && _(e), n && n.d(i);
		}
	};
}
function rr(t) {
	let e;
	return {
		c() {
			e = G('(slot:footer)');
		},
		l(l) {
			e = X(l, '(slot:footer)');
		},
		m(l, o) {
			U(l, e, o);
		},
		d(l) {
			l && _(e);
		}
	};
}
function Jt(t) {
	let e, l;
	const o = t[18].sidebarRight,
		a = te(o, t, t[17], zt);
	return {
		c() {
			(e = D('aside')), a && a.c(), this.h();
		},
		l(r) {
			e = A(r, 'ASIDE', { id: !0, class: !0 });
			var n = L(e);
			a && a.l(n), n.forEach(_), this.h();
		},
		h() {
			f(e, 'id', 'sidebar-right'), f(e, 'class', t[5]);
		},
		m(r, n) {
			U(r, e, n), a && a.m(e, null), (l = !0);
		},
		p(r, n) {
			a && a.p && (!l || n & 131072) && le(a, o, r, r[17], l ? oe(o, r[17], n, Ql) : re(r[17]), zt),
				(!l || n & 32) && f(e, 'class', r[5]);
		},
		i(r) {
			l || (C(a, r), (l = !0));
		},
		o(r) {
			B(a, r), (l = !1);
		},
		d(r) {
			r && _(e), a && a.d(r);
		}
	};
}
function Qt(t) {
	let e, l, o;
	const a = t[18].footer,
		r = te(a, t, t[17], Nt);
	return {
		c() {
			(e = D('footer')), r && r.c(), this.h();
		},
		l(n) {
			e = A(n, 'FOOTER', { id: !0, class: !0 });
			var i = L(e);
			r && r.l(i), i.forEach(_), this.h();
		},
		h() {
			f(e, 'id', 'shell-footer'), f(e, 'class', (l = 'flex-none ' + t[1]));
		},
		m(n, i) {
			U(n, e, i), r && r.m(e, null), (o = !0);
		},
		p(n, i) {
			r && r.p && (!o || i & 131072) && le(r, a, n, n[17], o ? oe(a, n[17], i, Jl) : re(n[17]), Nt),
				(!o || (i & 2 && l !== (l = 'flex-none ' + n[1]))) && f(e, 'class', l);
		},
		i(n) {
			o || (C(r, n), (o = !0));
		},
		o(n) {
			B(r, n), (o = !1);
		},
		d(n) {
			n && _(e), r && r.d(n);
		}
	};
}
function or(t) {
	let e,
		l,
		o,
		a,
		r,
		n,
		i,
		s,
		h,
		y,
		c,
		b,
		d,
		p,
		g,
		u = t[9].header && Kt(t),
		v = t[9].sidebarLeft && Gt(t),
		w = t[9].pageHeader && Xt(t);
	const x = t[18].default,
		P = te(x, t, t[17], null);
	let S = t[9].pageFooter && Yt(t),
		H = t[9].sidebarRight && Jt(t),
		E = t[9].footer && Qt(t);
	return {
		c() {
			(e = D('div')),
				u && u.c(),
				(l = N()),
				(o = D('div')),
				v && v.c(),
				(a = N()),
				(r = D('div')),
				w && w.c(),
				(n = N()),
				(i = D('main')),
				P && P.c(),
				(h = N()),
				S && S.c(),
				(c = N()),
				H && H.c(),
				(b = N()),
				E && E.c(),
				this.h();
		},
		l(T) {
			e = A(T, 'DIV', { id: !0, class: !0, 'data-testid': !0 });
			var I = L(e);
			u && u.l(I), (l = z(I)), (o = A(I, 'DIV', { class: !0 }));
			var k = L(o);
			v && v.l(k), (a = z(k)), (r = A(k, 'DIV', { id: !0, class: !0 }));
			var F = L(r);
			w && w.l(F), (n = z(F)), (i = A(F, 'MAIN', { id: !0, class: !0 }));
			var O = L(i);
			P && P.l(O),
				O.forEach(_),
				(h = z(F)),
				S && S.l(F),
				F.forEach(_),
				(c = z(k)),
				H && H.l(k),
				k.forEach(_),
				(b = z(I)),
				E && E.l(I),
				I.forEach(_),
				this.h();
		},
		h() {
			f(i, 'id', 'page-content'),
				f(i, 'class', (s = 'flex-auto ' + t[3])),
				f(r, 'id', 'page'),
				f(r, 'class', (y = t[0] + ' ' + Zt)),
				f(o, 'class', 'flex-auto ' + ar),
				f(e, 'id', 'appShell'),
				f(e, 'class', t[8]),
				f(e, 'data-testid', 'app-shell');
		},
		m(T, I) {
			U(T, e, I),
				u && u.m(e, null),
				m(e, l),
				m(e, o),
				v && v.m(o, null),
				m(o, a),
				m(o, r),
				w && w.m(r, null),
				m(r, n),
				m(r, i),
				P && P.m(i, null),
				m(r, h),
				S && S.m(r, null),
				m(o, c),
				H && H.m(o, null),
				m(e, b),
				E && E.m(e, null),
				(d = !0),
				p || ((g = J(r, 'scroll', t[19])), (p = !0));
		},
		p(T, [I]) {
			T[9].header
				? u
					? (u.p(T, I), I & 512 && C(u, 1))
					: ((u = Kt(T)), u.c(), C(u, 1), u.m(e, l))
				: u &&
				  (ce(),
				  B(u, 1, 1, () => {
						u = null;
				  }),
				  fe()),
				T[9].sidebarLeft
					? v
						? (v.p(T, I), I & 512 && C(v, 1))
						: ((v = Gt(T)), v.c(), C(v, 1), v.m(o, a))
					: v &&
					  (ce(),
					  B(v, 1, 1, () => {
							v = null;
					  }),
					  fe()),
				T[9].pageHeader
					? w
						? (w.p(T, I), I & 512 && C(w, 1))
						: ((w = Xt(T)), w.c(), C(w, 1), w.m(r, n))
					: w &&
					  (ce(),
					  B(w, 1, 1, () => {
							w = null;
					  }),
					  fe()),
				P &&
					P.p &&
					(!d || I & 131072) &&
					le(P, x, T, T[17], d ? oe(x, T[17], I, null) : re(T[17]), null),
				(!d || (I & 8 && s !== (s = 'flex-auto ' + T[3]))) && f(i, 'class', s),
				T[9].pageFooter
					? S
						? (S.p(T, I), I & 512 && C(S, 1))
						: ((S = Yt(T)), S.c(), C(S, 1), S.m(r, null))
					: S &&
					  (ce(),
					  B(S, 1, 1, () => {
							S = null;
					  }),
					  fe()),
				(!d || (I & 1 && y !== (y = T[0] + ' ' + Zt))) && f(r, 'class', y),
				T[9].sidebarRight
					? H
						? (H.p(T, I), I & 512 && C(H, 1))
						: ((H = Jt(T)), H.c(), C(H, 1), H.m(o, null))
					: H &&
					  (ce(),
					  B(H, 1, 1, () => {
							H = null;
					  }),
					  fe()),
				T[9].footer
					? E
						? (E.p(T, I), I & 512 && C(E, 1))
						: ((E = Qt(T)), E.c(), C(E, 1), E.m(e, null))
					: E &&
					  (ce(),
					  B(E, 1, 1, () => {
							E = null;
					  }),
					  fe()),
				(!d || I & 256) && f(e, 'class', T[8]);
		},
		i(T) {
			d || (C(u), C(v), C(w), C(P, T), C(S), C(H), C(E), (d = !0));
		},
		o(T) {
			B(u), B(v), B(w), B(P, T), B(S), B(H), B(E), (d = !1);
		},
		d(T) {
			T && _(e),
				u && u.d(),
				v && v.d(),
				w && w.d(),
				P && P.d(T),
				S && S.d(),
				H && H.d(),
				E && E.d(),
				(p = !1),
				g();
		}
	};
}
const nr = 'w-full h-full flex flex-col overflow-hidden',
	ar = 'w-full h-full flex overflow-hidden',
	Zt = 'flex-1 overflow-x-hidden flex flex-col',
	ir = 'flex-none overflow-x-hidden overflow-y-auto',
	sr = 'flex-none overflow-x-hidden overflow-y-auto';
function cr(t, e, l) {
	let o,
		a,
		r,
		n,
		i,
		s,
		h,
		y,
		{ $$slots: c = {}, $$scope: b } = e;
	const d = il(c);
	let { regionPage: p = '' } = e,
		{ slotHeader: g = 'z-10' } = e,
		{ slotSidebarLeft: u = 'w-auto' } = e,
		{ slotSidebarRight: v = 'w-auto' } = e,
		{ slotPageHeader: w = '' } = e,
		{ slotPageContent: x = '' } = e,
		{ slotPageFooter: P = '' } = e,
		{ slotFooter: S = '' } = e;
	function H(E) {
		Me.call(this, t, E);
	}
	return (
		(t.$$set = (E) => {
			l(20, (e = we(we({}, e), ke(E)))),
				'regionPage' in E && l(0, (p = E.regionPage)),
				'slotHeader' in E && l(10, (g = E.slotHeader)),
				'slotSidebarLeft' in E && l(11, (u = E.slotSidebarLeft)),
				'slotSidebarRight' in E && l(12, (v = E.slotSidebarRight)),
				'slotPageHeader' in E && l(13, (w = E.slotPageHeader)),
				'slotPageContent' in E && l(14, (x = E.slotPageContent)),
				'slotPageFooter' in E && l(15, (P = E.slotPageFooter)),
				'slotFooter' in E && l(16, (S = E.slotFooter)),
				'$$scope' in E && l(17, (b = E.$$scope));
		}),
		(t.$$.update = () => {
			l(8, (o = `${nr} ${e.class ?? ''}`)),
				t.$$.dirty & 1024 && l(7, (a = `${g}`)),
				t.$$.dirty & 2048 && l(6, (r = `${ir} ${u}`)),
				t.$$.dirty & 4096 && l(5, (n = `${sr} ${v}`)),
				t.$$.dirty & 8192 && l(4, (i = `${w}`)),
				t.$$.dirty & 16384 && l(3, (s = `${x}`)),
				t.$$.dirty & 32768 && l(2, (h = `${P}`)),
				t.$$.dirty & 65536 && l(1, (y = `${S}`));
		}),
		(e = ke(e)),
		[p, y, h, s, i, n, r, a, o, d, g, u, v, w, x, P, S, b, c, H]
	);
}
class fr extends Se {
	constructor(e) {
		super(),
			Te(this, e, cr, or, ve, {
				regionPage: 0,
				slotHeader: 10,
				slotSidebarLeft: 11,
				slotSidebarRight: 12,
				slotPageHeader: 13,
				slotPageContent: 14,
				slotPageFooter: 15,
				slotFooter: 16
			});
	}
}
const { window: ur } = wl;
function $t(t) {
	let e, l, o, a, r, n, i, s, h;
	const y = t[29].default,
		c = te(y, t, t[28], null);
	return {
		c() {
			(e = D('div')), (l = D('div')), c && c.c(), this.h();
		},
		l(b) {
			e = A(b, 'DIV', { class: !0, 'data-testid': !0 });
			var d = L(e);
			l = A(d, 'DIV', {
				class: !0,
				'data-testid': !0,
				role: !0,
				'aria-modal': !0,
				'aria-labelledby': !0,
				'aria-describedby': !0
			});
			var p = L(l);
			c && c.l(p), p.forEach(_), d.forEach(_), this.h();
		},
		h() {
			f(l, 'class', (o = 'drawer ' + t[6])),
				f(l, 'data-testid', 'drawer'),
				f(l, 'role', 'dialog'),
				f(l, 'aria-modal', 'true'),
				f(l, 'aria-labelledby', t[1]),
				f(l, 'aria-describedby', t[2]),
				f(e, 'class', (r = 'drawer-backdrop ' + t[7])),
				f(e, 'data-testid', 'drawer-backdrop');
		},
		m(b, d) {
			U(b, e, d),
				m(e, l),
				c && c.m(l, null),
				t[31](l),
				t[32](e),
				(i = !0),
				s ||
					((h = [
						J(e, 'mousedown', t[9]),
						J(e, 'touchstart', t[9]),
						J(e, 'keypress', t[30]),
						kl(Bl.call(null, e, !0))
					]),
					(s = !0));
		},
		p(b, d) {
			(t = b),
				c &&
					c.p &&
					(!i || d[0] & 268435456) &&
					le(c, y, t, t[28], i ? oe(y, t[28], d, null) : re(t[28]), null),
				(!i || (d[0] & 64 && o !== (o = 'drawer ' + t[6]))) && f(l, 'class', o),
				(!i || d[0] & 2) && f(l, 'aria-labelledby', t[1]),
				(!i || d[0] & 4) && f(l, 'aria-describedby', t[2]),
				(!i || (d[0] & 128 && r !== (r = 'drawer-backdrop ' + t[7]))) && f(e, 'class', r);
		},
		i(b) {
			i ||
				(C(c, b),
				b &&
					dt(() => {
						i && (a || (a = rt(l, It, { x: t[5].x, y: t[5].y, duration: t[0] }, !0)), a.run(1));
					}),
				b &&
					dt(() => {
						i && (n || (n = rt(e, ht, { duration: t[0] }, !0)), n.run(1));
					}),
				(i = !0));
		},
		o(b) {
			B(c, b),
				b && (a || (a = rt(l, It, { x: t[5].x, y: t[5].y, duration: t[0] }, !1)), a.run(0)),
				b && (n || (n = rt(e, ht, { duration: t[0] }, !1)), n.run(0)),
				(i = !1);
		},
		d(b) {
			b && _(e),
				c && c.d(b),
				t[31](null),
				b && a && a.end(),
				t[32](null),
				b && n && n.end(),
				(s = !1),
				vt(h);
		}
	};
}
function dr(t) {
	let e,
		l,
		o,
		a,
		r = t[8].open === !0 && $t(t);
	return {
		c() {
			r && r.c(), (e = je());
		},
		l(n) {
			r && r.l(n), (e = je());
		},
		m(n, i) {
			r && r.m(n, i), U(n, e, i), (l = !0), o || ((a = J(ur, 'keydown', t[10])), (o = !0));
		},
		p(n, i) {
			n[8].open === !0
				? r
					? (r.p(n, i), i[0] & 256 && C(r, 1))
					: ((r = $t(n)), r.c(), C(r, 1), r.m(e.parentNode, e))
				: r &&
				  (ce(),
				  B(r, 1, 1, () => {
						r = null;
				  }),
				  fe());
		},
		i(n) {
			l || (C(r), (l = !0));
		},
		o(n) {
			B(r), (l = !1);
		},
		d(n) {
			r && r.d(n), n && _(e), (o = !1), a();
		}
	};
}
const hr = 'fixed top-0 left-0 right-0 bottom-0 flex',
	gr = 'overflow-y-auto transition-transform';
function mr(t, e, l) {
	let o, a, r, n, i, s, h;
	sl(t, Ne, (R) => l(8, (h = R)));
	let { $$slots: y = {}, $$scope: c } = e;
	const b = yl();
	let { position: d = 'left' } = e,
		{ duration: p = 150 } = e,
		{ bgBackdrop: g = 'bg-surface-backdrop-token' } = e,
		{ blur: u = 'backdrop-blur-xs' } = e,
		{ padding: v = '' } = e,
		{ bgDrawer: w = 'bg-surface-100-800-token' } = e,
		{ border: x = '' } = e,
		{ rounded: P = '' } = e,
		{ shadow: S = 'shadow-xl' } = e,
		{ width: H = '' } = e,
		{ height: E = '' } = e,
		{ zIndex: T = 'z-40' } = e,
		{ regionBackdrop: I = '' } = e,
		{ regionDrawer: k = '' } = e,
		{ labelledby: F = '' } = e,
		{ describedby: O = '' } = e;
	const V = {
		top: {
			alignment: 'items-start',
			width: 'w-full',
			height: 'h-[50%]',
			rounded: 'rounded-bl-container-token rounded-br-container-token'
		},
		bottom: {
			alignment: 'items-end',
			width: 'w-full',
			height: ' h-[50%]',
			rounded: 'rounded-tl-container-token rounded-tr-container-token'
		},
		left: {
			alignment: 'justify-start',
			width: 'w-[90%]',
			height: 'h-full',
			rounded: 'rounded-tr-container-token rounded-br-container-token'
		},
		right: {
			alignment: 'justify-end',
			width: 'w-[90%]',
			height: 'h-full',
			rounded: 'rounded-tl-container-token rounded-bl-container-token'
		}
	};
	let W,
		K,
		M = { x: 0, y: 0 };
	const j = {
		position: d,
		duration: p,
		bgBackdrop: g,
		blur: u,
		padding: v,
		bgDrawer: w,
		border: x,
		rounded: P,
		shadow: S,
		width: H,
		height: E,
		labelledby: F,
		describedby: O,
		regionBackdrop: I,
		regionDrawer: k
	};
	function Z(R) {
		l(11, (d = R.position || j.position)),
			l(0, (p = R.duration || j.duration)),
			l(12, (g = R.bgBackdrop || j.bgBackdrop)),
			l(13, (u = R.blur || j.blur)),
			l(14, (v = R.padding || j.padding)),
			l(15, (w = R.bgDrawer || j.bgDrawer)),
			l(16, (x = R.border || j.border)),
			l(17, (P = R.rounded || j.rounded)),
			l(18, (S = R.shadow || j.shadow)),
			l(19, (H = R.width || j.width)),
			l(20, (E = R.height || j.height)),
			l(21, (I = R.regionBackdrop || j.regionBackdrop)),
			l(22, (k = R.regionDrawer || j.regionDrawer)),
			l(1, (F = R.labelledby || j.labelledby)),
			l(2, (O = R.describedby || j.describedby));
	}
	function Q() {
		switch (d) {
			case 'top':
				l(5, (M = { x: 0, y: -window.innerWidth }));
				break;
			case 'bottom':
				l(5, (M = { x: 0, y: window.innerWidth }));
				break;
			case 'left':
				l(5, (M = { x: -window.innerHeight, y: 0 }));
				break;
			case 'right':
				l(5, (M = { x: window.innerHeight, y: 0 }));
				break;
			default:
				console.error('Error: unknown position property value.');
				break;
		}
	}
	function Y(R) {
		R.target === W && Ne.close(), b('backdrop', R);
	}
	function ee(R) {
		h && R.code === 'Escape' && Ne.close();
	}
	Ne.subscribe((R) => {
		R.open === !0 && (Z(R), Q());
	});
	function se(R) {
		Me.call(this, t, R);
	}
	function $(R) {
		Pt[R ? 'unshift' : 'push'](() => {
			(K = R), l(4, K);
		});
	}
	function ne(R) {
		Pt[R ? 'unshift' : 'push'](() => {
			(W = R), l(3, W);
		});
	}
	return (
		(t.$$set = (R) => {
			l(38, (e = we(we({}, e), ke(R)))),
				'position' in R && l(11, (d = R.position)),
				'duration' in R && l(0, (p = R.duration)),
				'bgBackdrop' in R && l(12, (g = R.bgBackdrop)),
				'blur' in R && l(13, (u = R.blur)),
				'padding' in R && l(14, (v = R.padding)),
				'bgDrawer' in R && l(15, (w = R.bgDrawer)),
				'border' in R && l(16, (x = R.border)),
				'rounded' in R && l(17, (P = R.rounded)),
				'shadow' in R && l(18, (S = R.shadow)),
				'width' in R && l(19, (H = R.width)),
				'height' in R && l(20, (E = R.height)),
				'zIndex' in R && l(23, (T = R.zIndex)),
				'regionBackdrop' in R && l(21, (I = R.regionBackdrop)),
				'regionDrawer' in R && l(22, (k = R.regionDrawer)),
				'labelledby' in R && l(1, (F = R.labelledby)),
				'describedby' in R && l(2, (O = R.describedby)),
				'$$scope' in R && l(28, (c = R.$$scope));
		}),
		(t.$$.update = () => {
			t.$$.dirty[0] & 2048 && l(27, (o = V[d].alignment)),
				t.$$.dirty[0] & 526336 && l(26, (a = H || V[d].width)),
				t.$$.dirty[0] & 1050624 && l(25, (r = E || V[d].height)),
				t.$$.dirty[0] & 133120 && l(24, (n = P || V[d].rounded)),
				l(7, (i = `${hr} ${g} ${v} ${u} ${o} ${I} ${T} ${e.class ?? ''}`)),
				t.$$.dirty[0] & 122126336 && l(6, (s = `${gr} ${w} ${x} ${P} ${S} ${a} ${r} ${n} ${k}`));
		}),
		(e = ke(e)),
		[
			p,
			F,
			O,
			W,
			K,
			M,
			s,
			i,
			h,
			Y,
			ee,
			d,
			g,
			u,
			v,
			w,
			x,
			P,
			S,
			H,
			E,
			I,
			k,
			T,
			n,
			r,
			a,
			o,
			c,
			y,
			se,
			$,
			ne
		]
	);
}
class br extends Se {
	constructor(e) {
		super(),
			Te(
				this,
				e,
				mr,
				dr,
				ve,
				{
					position: 11,
					duration: 0,
					bgBackdrop: 12,
					blur: 13,
					padding: 14,
					bgDrawer: 15,
					border: 16,
					rounded: 17,
					shadow: 18,
					width: 19,
					height: 20,
					zIndex: 23,
					regionBackdrop: 21,
					regionDrawer: 22,
					labelledby: 1,
					describedby: 2
				},
				null,
				[-1, -1]
			);
	}
}
function _r(t) {
	let e,
		l = `<script nonce="%sveltekit.nonce%">(${Tl.toString()})();<\/script>`,
		o,
		a,
		r,
		n,
		i,
		s,
		h,
		y,
		c,
		b,
		d,
		p,
		g;
	return {
		c() {
			(e = new El(!1)),
				(o = je()),
				(a = N()),
				(r = D('div')),
				(n = D('div')),
				(i = he('svg')),
				(s = he('path')),
				this.h();
		},
		l(u) {
			const v = Ll('svelte-qwgpj2', document.head);
			(e = Rl(v, !1)),
				(o = je()),
				v.forEach(_),
				(a = z(u)),
				(r = A(u, 'DIV', {
					class: !0,
					role: !0,
					'aria-label': !0,
					'aria-checked': !0,
					title: !0,
					tabindex: !0
				}));
			var w = L(r);
			n = A(w, 'DIV', { class: !0 });
			var x = L(n);
			i = ge(x, 'svg', { class: !0, xmlns: !0, viewBox: !0 });
			var P = L(i);
			(s = ge(P, 'path', { d: !0 })),
				L(s).forEach(_),
				P.forEach(_),
				x.forEach(_),
				w.forEach(_),
				this.h();
		},
		h() {
			(e.a = o),
				f(s, 'd', (h = t[0] ? t[4].sun : t[4].moon)),
				f(i, 'class', (y = 'lightswitch-icon ' + t[1])),
				f(i, 'xmlns', 'http://www.w3.org/2000/svg'),
				f(i, 'viewBox', '0 0 512 512'),
				f(n, 'class', (c = 'lightswitch-thumb ' + t[2])),
				f(r, 'class', (b = 'lightswitch-track ' + t[3])),
				f(r, 'role', 'switch'),
				f(r, 'aria-label', 'Light Switch'),
				f(r, 'aria-checked', t[0]),
				f(r, 'title', (d = 'Toggle ' + (t[0] === !0 ? 'Dark' : 'Light') + ' Mode')),
				f(r, 'tabindex', '0');
		},
		m(u, v) {
			e.m(l, document.head),
				m(document.head, o),
				U(u, a, v),
				U(u, r, v),
				m(r, n),
				m(n, i),
				m(i, s),
				p ||
					((g = [
						J(r, 'click', t[5]),
						J(r, 'click', t[18]),
						J(r, 'keydown', wr),
						J(r, 'keydown', t[19]),
						J(r, 'keyup', t[20]),
						J(r, 'keypress', t[21])
					]),
					(p = !0));
		},
		p(u, [v]) {
			v & 1 && h !== (h = u[0] ? u[4].sun : u[4].moon) && f(s, 'd', h),
				v & 2 && y !== (y = 'lightswitch-icon ' + u[1]) && f(i, 'class', y),
				v & 4 && c !== (c = 'lightswitch-thumb ' + u[2]) && f(n, 'class', c),
				v & 8 && b !== (b = 'lightswitch-track ' + u[3]) && f(r, 'class', b),
				v & 1 && f(r, 'aria-checked', u[0]),
				v & 1 &&
					d !== (d = 'Toggle ' + (u[0] === !0 ? 'Dark' : 'Light') + ' Mode') &&
					f(r, 'title', d);
		},
		i: ae,
		o: ae,
		d(u) {
			_(o), u && e.d(), u && _(a), u && _(r), (p = !1), vt(g);
		}
	};
}
const vr = 'cursor-pointer',
	pr = 'aspect-square scale-[0.8] flex justify-center items-center',
	yr = 'w-[70%] aspect-square';
function wr(t) {
	['Enter', 'Space'].includes(t.code) && (t.preventDefault(), t.currentTarget.click());
}
function kr(t, e, l) {
	let o, a, r, n, i, s, h, y;
	sl(t, xt, (k) => l(0, (y = k)));
	let { bgLight: c = 'bg-surface-50' } = e,
		{ bgDark: b = 'bg-surface-900' } = e,
		{ fillLight: d = 'fill-surface-50' } = e,
		{ fillDark: p = 'fill-surface-900' } = e,
		{ width: g = 'w-12' } = e,
		{ height: u = 'h-6' } = e,
		{ ring: v = 'ring-[1px] ring-surface-500/30' } = e,
		{ rounded: w = 'rounded-token' } = e;
	const x = 'transition-all duration-[200ms]',
		P = {
			sun: 'M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z',
			moon: 'M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z'
		};
	function S() {
		Al(xt, (y = !y), y), xl(y), Ht(y);
	}
	Dl(() => {
		'modeCurrent' in localStorage || Ht(Pl());
	});
	function H(k) {
		Me.call(this, t, k);
	}
	function E(k) {
		Me.call(this, t, k);
	}
	function T(k) {
		Me.call(this, t, k);
	}
	function I(k) {
		Me.call(this, t, k);
	}
	return (
		(t.$$set = (k) => {
			l(23, (e = we(we({}, e), ke(k)))),
				'bgLight' in k && l(6, (c = k.bgLight)),
				'bgDark' in k && l(7, (b = k.bgDark)),
				'fillLight' in k && l(8, (d = k.fillLight)),
				'fillDark' in k && l(9, (p = k.fillDark)),
				'width' in k && l(10, (g = k.width)),
				'height' in k && l(11, (u = k.height)),
				'ring' in k && l(12, (v = k.ring)),
				'rounded' in k && l(13, (w = k.rounded));
		}),
		(t.$$.update = () => {
			t.$$.dirty & 193 && l(17, (o = y === !0 ? c : b)),
				t.$$.dirty & 193 && l(16, (a = y === !0 ? b : c)),
				t.$$.dirty & 1 && l(15, (r = y === !0 ? 'translate-x-[100%]' : '')),
				t.$$.dirty & 769 && l(14, (n = y === !0 ? d : p)),
				l(3, (i = `${vr} ${x} ${g} ${u} ${v} ${w} ${o} ${e.class ?? ''}`)),
				t.$$.dirty & 108544 && l(2, (s = `${pr} ${x} ${u} ${w} ${a} ${r}`)),
				t.$$.dirty & 16384 && l(1, (h = `${yr} ${n}`));
		}),
		(e = ke(e)),
		[y, h, s, i, P, S, c, b, d, p, g, u, v, w, n, r, a, o, H, E, T, I]
	);
}
class Er extends Se {
	constructor(e) {
		super(),
			Te(this, e, kr, _r, ve, {
				bgLight: 6,
				bgDark: 7,
				fillLight: 8,
				fillDark: 9,
				width: 10,
				height: 11,
				ring: 12,
				rounded: 13
			});
	}
}
function Lr(t) {
	let e,
		l,
		o,
		a,
		r,
		n,
		i,
		s,
		h,
		y,
		c,
		b,
		d,
		p,
		g,
		u,
		v,
		w,
		x,
		P,
		S,
		H,
		E,
		T,
		I,
		k,
		F,
		O,
		V,
		W,
		K,
		M,
		j,
		Z,
		Q,
		Y,
		ee,
		se,
		$,
		ne,
		R,
		pe,
		me;
	return {
		c() {
			(e = D('nav')),
				(l = D('ul')),
				(o = D('li')),
				(a = D('a')),
				(r = G('Homepage')),
				(n = N()),
				(i = D('li')),
				(s = D('a')),
				(h = G('Start Here')),
				(y = N()),
				(c = D('li')),
				(b = D('a')),
				(d = G('Athlete Profiles')),
				(p = N()),
				(g = D('li')),
				(u = D('a')),
				(v = G('Tools')),
				(w = N()),
				(x = D('li')),
				(P = D('a')),
				(S = G('Race Report Almanac')),
				(H = N()),
				(E = D('li')),
				(T = D('a')),
				(I = G('Forum')),
				(k = N()),
				(F = D('li')),
				(O = D('a')),
				(V = G('Blog')),
				(W = N()),
				(K = D('li')),
				(M = D('a')),
				(j = G('Resources')),
				(Z = N()),
				(Q = D('li')),
				(Y = D('a')),
				(ee = G('Almanac')),
				(se = N()),
				($ = D('li')),
				(ne = D('a')),
				(R = G('Contact')),
				this.h();
		},
		l(ye) {
			e = A(ye, 'NAV', { class: !0 });
			var Pe = L(e);
			l = A(Pe, 'UL', {});
			var q = L(l);
			o = A(q, 'LI', {});
			var Ue = L(o);
			a = A(Ue, 'A', { href: !0 });
			var Ke = L(a);
			(r = X(Ke, 'Homepage')), Ke.forEach(_), Ue.forEach(_), (n = z(q)), (i = A(q, 'LI', {}));
			var Ge = L(i);
			s = A(Ge, 'A', { href: !0 });
			var xe = L(s);
			(h = X(xe, 'Start Here')), xe.forEach(_), Ge.forEach(_), (y = z(q)), (c = A(q, 'LI', {}));
			var He = L(c);
			b = A(He, 'A', { href: !0 });
			var Xe = L(b);
			(d = X(Xe, 'Athlete Profiles')),
				Xe.forEach(_),
				He.forEach(_),
				(p = z(q)),
				(g = A(q, 'LI', {}));
			var Ie = L(g);
			u = A(Ie, 'A', { href: !0 });
			var Ce = L(u);
			(v = X(Ce, 'Tools')), Ce.forEach(_), Ie.forEach(_), (w = z(q)), (x = A(q, 'LI', {}));
			var Ye = L(x);
			P = A(Ye, 'A', { href: !0 });
			var Je = L(P);
			(S = X(Je, 'Race Report Almanac')),
				Je.forEach(_),
				Ye.forEach(_),
				(H = z(q)),
				(E = A(q, 'LI', {}));
			var Fe = L(E);
			T = A(Fe, 'A', { href: !0 });
			var Qe = L(T);
			(I = X(Qe, 'Forum')), Qe.forEach(_), Fe.forEach(_), (k = z(q)), (F = A(q, 'LI', {}));
			var Ze = L(F);
			O = A(Ze, 'A', { href: !0 });
			var kt = L(O);
			(V = X(kt, 'Blog')), kt.forEach(_), Ze.forEach(_), (W = z(q)), (K = A(q, 'LI', {}));
			var Et = L(K);
			M = A(Et, 'A', { href: !0 });
			var Lt = L(M);
			(j = X(Lt, 'Resources')), Lt.forEach(_), Et.forEach(_), (Z = z(q)), (Q = A(q, 'LI', {}));
			var Rt = L(Q);
			Y = A(Rt, 'A', { href: !0 });
			var Dt = L(Y);
			(ee = X(Dt, 'Almanac')), Dt.forEach(_), Rt.forEach(_), (se = z(q)), ($ = A(q, 'LI', {}));
			var At = L($);
			ne = A(At, 'A', { href: !0 });
			var St = L(ne);
			(R = X(St, 'Contact')), St.forEach(_), At.forEach(_), q.forEach(_), Pe.forEach(_), this.h();
		},
		h() {
			f(a, 'href', '/'),
				f(s, 'href', '/start'),
				f(b, 'href', '/athleteprofiles'),
				f(u, 'href', '/tools'),
				f(P, 'href', '/racereports'),
				f(T, 'href', '/forum'),
				f(O, 'href', '/blog'),
				f(M, 'href', '/resources'),
				f(Y, 'href', '/almanac'),
				f(ne, 'href', '/contact'),
				f(e, 'class', 'list-nav p-4');
		},
		m(ye, Pe) {
			U(ye, e, Pe),
				m(e, l),
				m(l, o),
				m(o, a),
				m(a, r),
				m(l, n),
				m(l, i),
				m(i, s),
				m(s, h),
				m(l, y),
				m(l, c),
				m(c, b),
				m(b, d),
				m(l, p),
				m(l, g),
				m(g, u),
				m(u, v),
				m(l, w),
				m(l, x),
				m(x, P),
				m(P, S),
				m(l, H),
				m(l, E),
				m(E, T),
				m(T, I),
				m(l, k),
				m(l, F),
				m(F, O),
				m(O, V),
				m(l, W),
				m(l, K),
				m(K, M),
				m(M, j),
				m(l, Z),
				m(l, Q),
				m(Q, Y),
				m(Y, ee),
				m(l, se),
				m(l, $),
				m($, ne),
				m(ne, R),
				pe ||
					((me = [
						J(a, 'click', t[0]),
						J(s, 'click', t[0]),
						J(b, 'click', t[0]),
						J(u, 'click', t[0]),
						J(P, 'click', t[0]),
						J(T, 'click', t[0]),
						J(O, 'click', t[0]),
						J(M, 'click', t[0]),
						J(Y, 'click', t[0]),
						J(ne, 'click', t[0])
					]),
					(pe = !0));
		},
		p: ae,
		i: ae,
		o: ae,
		d(ye) {
			ye && _(e), (pe = !1), vt(me);
		}
	};
}
function Rr(t) {
	function e() {
		Ne.close();
	}
	return [e];
}
class Dr extends Se {
	constructor(e) {
		super(), Te(this, e, Rr, Lr, ve, {});
	}
}
function Ar(t) {
	let e,
		l,
		o,
		a,
		r,
		n,
		i,
		s,
		h,
		y,
		c,
		b,
		d,
		p,
		g,
		u,
		v,
		w,
		x,
		P,
		S,
		H,
		E,
		T,
		I,
		k,
		F,
		O,
		V,
		W,
		K,
		M,
		j,
		Z,
		Q,
		Y,
		ee,
		se,
		$,
		ne;
	return {
		c() {
			(e = D('footer')),
				(l = D('div')),
				(o = D('div')),
				(a = D('div')),
				(r = D('a')),
				(n = D('img')),
				(s = N()),
				(h = D('span')),
				(y = N()),
				(c = D('span')),
				(b = G('Aero Oats')),
				(d = D('p')),
				(p = G('by')),
				(g = D('a')),
				(u = G('@kevinclelland')),
				(v = N()),
				(w = D('hr')),
				(x = N()),
				(P = D('div')),
				(S = D('span')),
				(H = G('© 2023 ')),
				(E = D('a')),
				(T = G('Aero Oats™')),
				(I = G('. All Rights Reserved.')),
				(k = N()),
				(F = D('div')),
				(O = D('a')),
				(V = he('svg')),
				(W = he('path')),
				(K = N()),
				(M = D('span')),
				(j = G('Instagram page')),
				(Z = N()),
				(Q = D('a')),
				(Y = he('svg')),
				(ee = he('path')),
				(se = N()),
				($ = D('span')),
				(ne = G('Twitter page')),
				this.h();
		},
		l(R) {
			e = A(R, 'FOOTER', { class: !0 });
			var pe = L(e);
			l = A(pe, 'DIV', { class: !0 });
			var me = L(l);
			o = A(me, 'DIV', { class: !0 });
			var ye = L(o);
			a = A(ye, 'DIV', { class: !0 });
			var Pe = L(a);
			r = A(Pe, 'A', { href: !0, class: !0 });
			var q = L(r);
			(n = A(q, 'IMG', { src: !0, class: !0, alt: !0 })),
				(s = z(q)),
				(h = A(q, 'SPAN', { class: !0 })),
				L(h).forEach(_),
				(y = z(q)),
				(c = A(q, 'SPAN', { class: !0 }));
			var Ue = L(c);
			(b = X(Ue, 'Aero Oats')), Ue.forEach(_), (d = A(q, 'P', { class: !0 }));
			var Ke = L(d);
			(p = X(Ke, 'by')), Ke.forEach(_), (g = A(q, 'A', { href: !0, class: !0 }));
			var Ge = L(g);
			(u = X(Ge, '@kevinclelland')),
				Ge.forEach(_),
				q.forEach(_),
				Pe.forEach(_),
				ye.forEach(_),
				(v = z(me)),
				(w = A(me, 'HR', { class: !0 })),
				(x = z(me)),
				(P = A(me, 'DIV', { class: !0 }));
			var xe = L(P);
			S = A(xe, 'SPAN', { class: !0 });
			var He = L(S);
			(H = X(He, '© 2023 ')), (E = A(He, 'A', { href: !0, class: !0 }));
			var Xe = L(E);
			(T = X(Xe, 'Aero Oats™')),
				Xe.forEach(_),
				(I = X(He, '. All Rights Reserved.')),
				He.forEach(_),
				(k = z(xe)),
				(F = A(xe, 'DIV', { class: !0 }));
			var Ie = L(F);
			O = A(Ie, 'A', { href: !0, class: !0 });
			var Ce = L(O);
			V = ge(Ce, 'svg', { class: !0, fill: !0, viewBox: !0, 'aria-hidden': !0 });
			var Ye = L(V);
			(W = ge(Ye, 'path', { 'fill-rule': !0, d: !0, 'clip-rule': !0 })),
				L(W).forEach(_),
				Ye.forEach(_),
				(K = z(Ce)),
				(M = A(Ce, 'SPAN', { class: !0 }));
			var Je = L(M);
			(j = X(Je, 'Instagram page')),
				Je.forEach(_),
				Ce.forEach(_),
				(Z = z(Ie)),
				(Q = A(Ie, 'A', { href: !0, class: !0 }));
			var Fe = L(Q);
			Y = ge(Fe, 'svg', { class: !0, fill: !0, viewBox: !0, 'aria-hidden': !0 });
			var Qe = L(Y);
			(ee = ge(Qe, 'path', { d: !0 })),
				L(ee).forEach(_),
				Qe.forEach(_),
				(se = z(Fe)),
				($ = A(Fe, 'SPAN', { class: !0 }));
			var Ze = L($);
			(ne = X(Ze, 'Twitter page')),
				Ze.forEach(_),
				Fe.forEach(_),
				Ie.forEach(_),
				xe.forEach(_),
				me.forEach(_),
				pe.forEach(_),
				this.h();
		},
		h() {
			cl(n.src, (i = '/images/logo.png')) || f(n, 'src', i),
				f(n, 'class', 'h-8 mr-3'),
				f(n, 'alt', 'Aero Oats Logo'),
				f(
					h,
					'class',
					'bg-gradient-to-br from-red-500 to-orange-300 bg-clip-text text-transparent box-decoration-clone'
				),
				f(
					c,
					'class',
					'uppercase self-center text-2xl font-semibold whitespace-nowrap bg-gradient-to-br from-ao-pink to-ao-orange bg-clip-text text-transparent box-decoration-clone'
				),
				f(d, 'class', 'px-2'),
				f(g, 'href', 'https://kevinclelland.com/'),
				f(g, 'class', 'bg-sky-600 px-3 py-1 rounded-full'),
				f(r, 'href', 'https://aerooats.com/'),
				f(r, 'class', 'flex items-center'),
				f(a, 'class', 'mb-4 md:mb-0'),
				f(o, 'class', 'md:flex md:justify-between'),
				f(w, 'class', 'my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4'),
				f(E, 'href', 'https://aerooats.com/'),
				f(E, 'class', 'hover:underline'),
				f(S, 'class', 'text-sm text-gray-500 sm:text-center dark:text-gray-400'),
				f(W, 'fill-rule', 'evenodd'),
				f(
					W,
					'd',
					'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
				),
				f(W, 'clip-rule', 'evenodd'),
				f(V, 'class', 'w-5 h-5'),
				f(V, 'fill', 'currentColor'),
				f(V, 'viewBox', '0 0 24 24'),
				f(V, 'aria-hidden', 'true'),
				f(M, 'class', 'sr-only'),
				f(O, 'href', 'https://www.instagram.com/aerooatstri/'),
				f(O, 'class', 'text-gray-500 hover:text-gray-900 dark:hover:text-white'),
				f(
					ee,
					'd',
					'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84'
				),
				f(Y, 'class', 'w-5 h-5'),
				f(Y, 'fill', 'currentColor'),
				f(Y, 'viewBox', '0 0 24 24'),
				f(Y, 'aria-hidden', 'true'),
				f($, 'class', 'sr-only'),
				f(Q, 'href', 'https://twitter.com/AeroOats'),
				f(Q, 'class', 'text-gray-500 hover:text-gray-900 dark:hover:text-white'),
				f(F, 'class', 'flex mt-4 space-x-6 sm:justify-center sm:mt-0'),
				f(P, 'class', 'sm:flex sm:items-center sm:justify-between'),
				f(l, 'class', 'mx-auto w-full max-w-screen-xl p-4 py-4 lg:py-6'),
				f(e, 'class', 'bg-surface-100-800-token');
		},
		m(R, pe) {
			U(R, e, pe),
				m(e, l),
				m(l, o),
				m(o, a),
				m(a, r),
				m(r, n),
				m(r, s),
				m(r, h),
				m(r, y),
				m(r, c),
				m(c, b),
				m(r, d),
				m(d, p),
				m(r, g),
				m(g, u),
				m(l, v),
				m(l, w),
				m(l, x),
				m(l, P),
				m(P, S),
				m(S, H),
				m(S, E),
				m(E, T),
				m(S, I),
				m(P, k),
				m(P, F),
				m(F, O),
				m(O, V),
				m(V, W),
				m(O, K),
				m(O, M),
				m(M, j),
				m(F, Z),
				m(F, Q),
				m(Q, Y),
				m(Y, ee),
				m(Q, se),
				m(Q, $),
				m($, ne);
		},
		p: ae,
		i: ae,
		o: ae,
		d(R) {
			R && _(e);
		}
	};
}
class Sr extends Se {
	constructor(e) {
		super(), Te(this, e, null, Ar, ve, {});
	}
}
function el(t) {
	let e, l, o;
	const a = t[2].default,
		r = te(a, t, t[1], null);
	return {
		c() {
			(e = D('div')), r && r.c(), this.h();
		},
		l(n) {
			e = A(n, 'DIV', { class: !0 });
			var i = L(e);
			r && r.l(i), i.forEach(_), this.h();
		},
		h() {
			f(e, 'class', 'transition svelte-vcdv4c');
		},
		m(n, i) {
			U(n, e, i), r && r.m(e, null), (o = !0);
		},
		p(n, i) {
			r && r.p && (!o || i & 2) && le(r, a, n, n[1], o ? oe(a, n[1], i, null) : re(n[1]), null);
		},
		i(n) {
			o ||
				(C(r, n),
				l ||
					dt(() => {
						(l = Sl(e, ht, {})), l.start();
					}),
				(o = !0));
		},
		o(n) {
			B(r, n), (o = !1);
		},
		d(n) {
			n && _(e), r && r.d(n);
		}
	};
}
function Tr(t) {
	let e = t[0],
		l,
		o,
		a = el(t);
	return {
		c() {
			a.c(), (l = je());
		},
		l(r) {
			a.l(r), (l = je());
		},
		m(r, n) {
			a.m(r, n), U(r, l, n), (o = !0);
		},
		p(r, [n]) {
			n & 1 && ve(e, (e = r[0]))
				? (ce(), B(a, 1, 1, ae), fe(), (a = el(r)), a.c(), C(a, 1), a.m(l.parentNode, l))
				: a.p(r, n);
		},
		i(r) {
			o || (C(a), (o = !0));
		},
		o(r) {
			B(a), (o = !1);
		},
		d(r) {
			r && _(l), a.d(r);
		}
	};
}
function Pr(t, e, l) {
	let { $$slots: o = {}, $$scope: a } = e,
		{ url: r } = e;
	return (
		(t.$$set = (n) => {
			'url' in n && l(0, (r = n.url)), '$$scope' in n && l(1, (a = n.$$scope));
		}),
		[r, a, o]
	);
}
class xr extends Se {
	constructor(e) {
		super(), Te(this, e, Pr, Tr, ve, { url: 0 });
	}
}
function et(t) {
	return t.split('-')[1];
}
function pt(t) {
	return t === 'y' ? 'height' : 'width';
}
function Be(t) {
	return t.split('-')[0];
}
function tt(t) {
	return ['top', 'bottom'].includes(Be(t)) ? 'x' : 'y';
}
function tl(t, e, l) {
	let { reference: o, floating: a } = t;
	const r = o.x + o.width / 2 - a.width / 2,
		n = o.y + o.height / 2 - a.height / 2,
		i = tt(e),
		s = pt(i),
		h = o[s] / 2 - a[s] / 2,
		y = i === 'x';
	let c;
	switch (Be(e)) {
		case 'top':
			c = { x: r, y: o.y - a.height };
			break;
		case 'bottom':
			c = { x: r, y: o.y + o.height };
			break;
		case 'right':
			c = { x: o.x + o.width, y: n };
			break;
		case 'left':
			c = { x: o.x - a.width, y: n };
			break;
		default:
			c = { x: o.x, y: o.y };
	}
	switch (et(e)) {
		case 'start':
			c[i] -= h * (l && y ? -1 : 1);
			break;
		case 'end':
			c[i] += h * (l && y ? -1 : 1);
	}
	return c;
}
const Hr = async (t, e, l) => {
	const { placement: o = 'bottom', strategy: a = 'absolute', middleware: r = [], platform: n } = l,
		i = r.filter(Boolean),
		s = await (n.isRTL == null ? void 0 : n.isRTL(e));
	let h = await n.getElementRects({ reference: t, floating: e, strategy: a }),
		{ x: y, y: c } = tl(h, o, s),
		b = o,
		d = {},
		p = 0;
	for (let g = 0; g < i.length; g++) {
		const { name: u, fn: v } = i[g],
			{
				x: w,
				y: x,
				data: P,
				reset: S
			} = await v({
				x: y,
				y: c,
				initialPlacement: o,
				placement: b,
				strategy: a,
				middlewareData: d,
				rects: h,
				platform: n,
				elements: { reference: t, floating: e }
			});
		(y = w ?? y),
			(c = x ?? c),
			(d = { ...d, [u]: { ...d[u], ...P } }),
			S &&
				p <= 50 &&
				(p++,
				typeof S == 'object' &&
					(S.placement && (b = S.placement),
					S.rects &&
						(h =
							S.rects === !0
								? await n.getElementRects({ reference: t, floating: e, strategy: a })
								: S.rects),
					({ x: y, y: c } = tl(h, b, s))),
				(g = -1));
	}
	return { x: y, y: c, placement: b, strategy: a, middlewareData: d };
};
function lt(t, e) {
	return typeof t == 'function' ? t(e) : t;
}
function ul(t) {
	return typeof t != 'number'
		? (function (e) {
				return { top: 0, right: 0, bottom: 0, left: 0, ...e };
		  })(t)
		: { top: t, right: t, bottom: t, left: t };
}
function nt(t) {
	return { ...t, top: t.y, left: t.x, right: t.x + t.width, bottom: t.y + t.height };
}
async function dl(t, e) {
	var l;
	e === void 0 && (e = {});
	const { x: o, y: a, platform: r, rects: n, elements: i, strategy: s } = t,
		{
			boundary: h = 'clippingAncestors',
			rootBoundary: y = 'viewport',
			elementContext: c = 'floating',
			altBoundary: b = !1,
			padding: d = 0
		} = lt(e, t),
		p = ul(d),
		g = i[b ? (c === 'floating' ? 'reference' : 'floating') : c],
		u = nt(
			await r.getClippingRect({
				element:
					(l = await (r.isElement == null ? void 0 : r.isElement(g))) == null || l
						? g
						: g.contextElement ||
						  (await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(i.floating))),
				boundary: h,
				rootBoundary: y,
				strategy: s
			})
		),
		v = c === 'floating' ? { ...n.floating, x: o, y: a } : n.reference,
		w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(i.floating)),
		x = ((await (r.isElement == null ? void 0 : r.isElement(w))) &&
			(await (r.getScale == null ? void 0 : r.getScale(w)))) || { x: 1, y: 1 },
		P = nt(
			r.convertOffsetParentRelativeRectToViewportRelativeRect
				? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
						rect: v,
						offsetParent: w,
						strategy: s
				  })
				: v
		);
	return {
		top: (u.top - P.top + p.top) / x.y,
		bottom: (P.bottom - u.bottom + p.bottom) / x.y,
		left: (u.left - P.left + p.left) / x.x,
		right: (P.right - u.right + p.right) / x.x
	};
}
const gt = Math.min,
	Ir = Math.max;
function mt(t, e, l) {
	return Ir(t, gt(e, l));
}
const Cr = (t) => ({
		name: 'arrow',
		options: t,
		async fn(e) {
			const { x: l, y: o, placement: a, rects: r, platform: n, elements: i } = e,
				{ element: s, padding: h = 0 } = lt(t, e) || {};
			if (s == null) return {};
			const y = ul(h),
				c = { x: l, y: o },
				b = tt(a),
				d = pt(b),
				p = await n.getDimensions(s),
				g = b === 'y',
				u = g ? 'top' : 'left',
				v = g ? 'bottom' : 'right',
				w = g ? 'clientHeight' : 'clientWidth',
				x = r.reference[d] + r.reference[b] - c[b] - r.floating[d],
				P = c[b] - r.reference[b],
				S = await (n.getOffsetParent == null ? void 0 : n.getOffsetParent(s));
			let H = S ? S[w] : 0;
			(H && (await (n.isElement == null ? void 0 : n.isElement(S)))) ||
				(H = i.floating[w] || r.floating[d]);
			const E = x / 2 - P / 2,
				T = H / 2 - p[d] / 2 - 1,
				I = gt(y[u], T),
				k = gt(y[v], T),
				F = I,
				O = H - p[d] - k,
				V = H / 2 - p[d] / 2 + E,
				W = mt(F, V, O),
				K =
					et(a) != null && V != W && r.reference[d] / 2 - (V < F ? I : k) - p[d] / 2 < 0
						? V < F
							? F - V
							: O - V
						: 0;
			return { [b]: c[b] - K, data: { [b]: W, centerOffset: V - W + K } };
		}
	}),
	Fr = ['top', 'right', 'bottom', 'left'];
Fr.reduce((t, e) => t.concat(e, e + '-start', e + '-end'), []);
const Br = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function at(t) {
	return t.replace(/left|right|bottom|top/g, (e) => Br[e]);
}
function Or(t, e, l) {
	l === void 0 && (l = !1);
	const o = et(t),
		a = tt(t),
		r = pt(a);
	let n =
		a === 'x' ? (o === (l ? 'end' : 'start') ? 'right' : 'left') : o === 'start' ? 'bottom' : 'top';
	return e.reference[r] > e.floating[r] && (n = at(n)), { main: n, cross: at(n) };
}
const Vr = { start: 'end', end: 'start' };
function ut(t) {
	return t.replace(/start|end/g, (e) => Vr[e]);
}
const Mr = function (t) {
		return (
			t === void 0 && (t = {}),
			{
				name: 'flip',
				options: t,
				async fn(e) {
					var l;
					const {
							placement: o,
							middlewareData: a,
							rects: r,
							initialPlacement: n,
							platform: i,
							elements: s
						} = e,
						{
							mainAxis: h = !0,
							crossAxis: y = !0,
							fallbackPlacements: c,
							fallbackStrategy: b = 'bestFit',
							fallbackAxisSideDirection: d = 'none',
							flipAlignment: p = !0,
							...g
						} = lt(t, e),
						u = Be(o),
						v = Be(n) === n,
						w = await (i.isRTL == null ? void 0 : i.isRTL(s.floating)),
						x =
							c ||
							(v || !p
								? [at(n)]
								: (function (F) {
										const O = at(F);
										return [ut(F), O, ut(O)];
								  })(n));
					c ||
						d === 'none' ||
						x.push(
							...(function (F, O, V, W) {
								const K = et(F);
								let M = (function (j, Z, Q) {
									const Y = ['left', 'right'],
										ee = ['right', 'left'],
										se = ['top', 'bottom'],
										$ = ['bottom', 'top'];
									switch (j) {
										case 'top':
										case 'bottom':
											return Q ? (Z ? ee : Y) : Z ? Y : ee;
										case 'left':
										case 'right':
											return Z ? se : $;
										default:
											return [];
									}
								})(Be(F), V === 'start', W);
								return K && ((M = M.map((j) => j + '-' + K)), O && (M = M.concat(M.map(ut)))), M;
							})(n, p, d, w)
						);
					const P = [n, ...x],
						S = await dl(e, g),
						H = [];
					let E = ((l = a.flip) == null ? void 0 : l.overflows) || [];
					if ((h && H.push(S[u]), y)) {
						const { main: F, cross: O } = Or(o, r, w);
						H.push(S[F], S[O]);
					}
					if (((E = [...E, { placement: o, overflows: H }]), !H.every((F) => F <= 0))) {
						var T, I;
						const F = (((T = a.flip) == null ? void 0 : T.index) || 0) + 1,
							O = P[F];
						if (O) return { data: { index: F, overflows: E }, reset: { placement: O } };
						let V =
							(I = E.filter((W) => W.overflows[0] <= 0).sort(
								(W, K) => W.overflows[1] - K.overflows[1]
							)[0]) == null
								? void 0
								: I.placement;
						if (!V)
							switch (b) {
								case 'bestFit': {
									var k;
									const W =
										(k = E.map((K) => [
											K.placement,
											K.overflows.filter((M) => M > 0).reduce((M, j) => M + j, 0)
										]).sort((K, M) => K[1] - M[1])[0]) == null
											? void 0
											: k[0];
									W && (V = W);
									break;
								}
								case 'initialPlacement':
									V = n;
							}
						if (o !== V) return { reset: { placement: V } };
					}
					return {};
				}
			}
		);
	},
	Nr = function (t) {
		return (
			t === void 0 && (t = 0),
			{
				name: 'offset',
				options: t,
				async fn(e) {
					const { x: l, y: o } = e,
						a = await (async function (r, n) {
							const { placement: i, platform: s, elements: h } = r,
								y = await (s.isRTL == null ? void 0 : s.isRTL(h.floating)),
								c = Be(i),
								b = et(i),
								d = tt(i) === 'x',
								p = ['left', 'top'].includes(c) ? -1 : 1,
								g = y && d ? -1 : 1,
								u = lt(n, r);
							let {
								mainAxis: v,
								crossAxis: w,
								alignmentAxis: x
							} = typeof u == 'number'
								? { mainAxis: u, crossAxis: 0, alignmentAxis: null }
								: { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...u };
							return (
								b && typeof x == 'number' && (w = b === 'end' ? -1 * x : x),
								d ? { x: w * g, y: v * p } : { x: v * p, y: w * g }
							);
						})(e, t);
					return { x: l + a.x, y: o + a.y, data: a };
				}
			}
		);
	};
function zr(t) {
	return t === 'x' ? 'y' : 'x';
}
const Wr = function (t) {
	return (
		t === void 0 && (t = {}),
		{
			name: 'shift',
			options: t,
			async fn(e) {
				const { x: l, y: o, placement: a } = e,
					{
						mainAxis: r = !0,
						crossAxis: n = !1,
						limiter: i = {
							fn: (u) => {
								let { x: v, y: w } = u;
								return { x: v, y: w };
							}
						},
						...s
					} = lt(t, e),
					h = { x: l, y: o },
					y = await dl(e, s),
					c = tt(Be(a)),
					b = zr(c);
				let d = h[c],
					p = h[b];
				if (r) {
					const u = c === 'y' ? 'bottom' : 'right';
					d = mt(d + y[c === 'y' ? 'top' : 'left'], d, d - y[u]);
				}
				if (n) {
					const u = b === 'y' ? 'bottom' : 'right';
					p = mt(p + y[b === 'y' ? 'top' : 'left'], p, p - y[u]);
				}
				const g = i.fn({ ...e, [c]: d, [b]: p });
				return { ...g, data: { x: g.x - l, y: g.y - o } };
			}
		}
	);
};
function ie(t) {
	var e;
	return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function ue(t) {
	return ie(t).getComputedStyle(t);
}
function hl(t) {
	return t instanceof ie(t).Node;
}
function Ae(t) {
	return hl(t) ? (t.nodeName || '').toLowerCase() : '#document';
}
function de(t) {
	return t instanceof ie(t).HTMLElement;
}
function be(t) {
	return t instanceof ie(t).Element;
}
function ll(t) {
	return typeof ShadowRoot < 'u' && (t instanceof ie(t).ShadowRoot || t instanceof ShadowRoot);
}
function $e(t) {
	const { overflow: e, overflowX: l, overflowY: o, display: a } = ue(t);
	return /auto|scroll|overlay|hidden|clip/.test(e + o + l) && !['inline', 'contents'].includes(a);
}
function jr(t) {
	return ['table', 'td', 'th'].includes(Ae(t));
}
function bt(t) {
	const e = yt(),
		l = ue(t);
	return (
		l.transform !== 'none' ||
		l.perspective !== 'none' ||
		(!e && !!l.backdropFilter && l.backdropFilter !== 'none') ||
		(!e && !!l.filter && l.filter !== 'none') ||
		['transform', 'perspective', 'filter'].some((o) => (l.willChange || '').includes(o)) ||
		['paint', 'layout', 'strict', 'content'].some((o) => (l.contain || '').includes(o))
	);
}
function yt() {
	return !(typeof CSS > 'u' || !CSS.supports) && CSS.supports('-webkit-backdrop-filter', 'none');
}
function ct(t) {
	return ['html', 'body', '#document'].includes(Ae(t));
}
const _t = Math.min,
	ze = Math.max,
	it = Math.round,
	ot = Math.floor,
	Oe = (t) => ({ x: t, y: t });
function gl(t) {
	const e = ue(t);
	let l = parseFloat(e.width) || 0,
		o = parseFloat(e.height) || 0;
	const a = de(t),
		r = a ? t.offsetWidth : l,
		n = a ? t.offsetHeight : o,
		i = it(l) !== r || it(o) !== n;
	return i && ((l = r), (o = n)), { width: l, height: o, $: i };
}
function wt(t) {
	return be(t) ? t : t.contextElement;
}
function We(t) {
	const e = wt(t);
	if (!de(e)) return Oe(1);
	const l = e.getBoundingClientRect(),
		{ width: o, height: a, $: r } = gl(e);
	let n = (r ? it(l.width) : l.width) / o,
		i = (r ? it(l.height) : l.height) / a;
	return (n && Number.isFinite(n)) || (n = 1), (i && Number.isFinite(i)) || (i = 1), { x: n, y: i };
}
const rl = Oe(0);
function ml(t, e, l) {
	var o, a;
	if ((e === void 0 && (e = !0), !yt())) return rl;
	const r = t ? ie(t) : window;
	return !l || (e && l !== r)
		? rl
		: {
				x: ((o = r.visualViewport) == null ? void 0 : o.offsetLeft) || 0,
				y: ((a = r.visualViewport) == null ? void 0 : a.offsetTop) || 0
		  };
}
function Ve(t, e, l, o) {
	e === void 0 && (e = !1), l === void 0 && (l = !1);
	const a = t.getBoundingClientRect(),
		r = wt(t);
	let n = Oe(1);
	e && (o ? be(o) && (n = We(o)) : (n = We(t)));
	const i = ml(r, l, o);
	let s = (a.left + i.x) / n.x,
		h = (a.top + i.y) / n.y,
		y = a.width / n.x,
		c = a.height / n.y;
	if (r) {
		const b = ie(r),
			d = o && be(o) ? ie(o) : o;
		let p = b.frameElement;
		for (; p && o && d !== b; ) {
			const g = We(p),
				u = p.getBoundingClientRect(),
				v = getComputedStyle(p),
				w = u.left + (p.clientLeft + parseFloat(v.paddingLeft)) * g.x,
				x = u.top + (p.clientTop + parseFloat(v.paddingTop)) * g.y;
			(s *= g.x), (h *= g.y), (y *= g.x), (c *= g.y), (s += w), (h += x), (p = ie(p).frameElement);
		}
	}
	return nt({ width: y, height: c, x: s, y: h });
}
function _e(t) {
	return ((hl(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function ft(t) {
	return be(t)
		? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
		: { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function bl(t) {
	return Ve(_e(t)).left + ft(t).scrollLeft;
}
function qe(t) {
	if (Ae(t) === 'html') return t;
	const e = t.assignedSlot || t.parentNode || (ll(t) && t.host) || _e(t);
	return ll(e) ? e.host : e;
}
function _l(t) {
	const e = qe(t);
	return ct(e) ? (t.ownerDocument ? t.ownerDocument.body : t.body) : de(e) && $e(e) ? e : _l(e);
}
function st(t, e) {
	var l;
	e === void 0 && (e = []);
	const o = _l(t),
		a = o === ((l = t.ownerDocument) == null ? void 0 : l.body),
		r = ie(o);
	return a ? e.concat(r, r.visualViewport || [], $e(o) ? o : []) : e.concat(o, st(o));
}
function ol(t, e, l) {
	let o;
	if (e === 'viewport')
		o = (function (a, r) {
			const n = ie(a),
				i = _e(a),
				s = n.visualViewport;
			let h = i.clientWidth,
				y = i.clientHeight,
				c = 0,
				b = 0;
			if (s) {
				(h = s.width), (y = s.height);
				const d = yt();
				(!d || (d && r === 'fixed')) && ((c = s.offsetLeft), (b = s.offsetTop));
			}
			return { width: h, height: y, x: c, y: b };
		})(t, l);
	else if (e === 'document')
		o = (function (a) {
			const r = _e(a),
				n = ft(a),
				i = a.ownerDocument.body,
				s = ze(r.scrollWidth, r.clientWidth, i.scrollWidth, i.clientWidth),
				h = ze(r.scrollHeight, r.clientHeight, i.scrollHeight, i.clientHeight);
			let y = -n.scrollLeft + bl(a);
			const c = -n.scrollTop;
			return (
				ue(i).direction === 'rtl' && (y += ze(r.clientWidth, i.clientWidth) - s),
				{ width: s, height: h, x: y, y: c }
			);
		})(_e(t));
	else if (be(e))
		o = (function (a, r) {
			const n = Ve(a, !0, r === 'fixed'),
				i = n.top + a.clientTop,
				s = n.left + a.clientLeft,
				h = de(a) ? We(a) : Oe(1);
			return { width: a.clientWidth * h.x, height: a.clientHeight * h.y, x: s * h.x, y: i * h.y };
		})(e, l);
	else {
		const a = ml(t);
		o = { ...e, x: e.x - a.x, y: e.y - a.y };
	}
	return nt(o);
}
function vl(t, e) {
	const l = qe(t);
	return !(l === e || !be(l) || ct(l)) && (ue(l).position === 'fixed' || vl(l, e));
}
function nl(t, e) {
	return de(t) && ue(t).position !== 'fixed' ? (e ? e(t) : t.offsetParent) : null;
}
function al(t, e) {
	const l = ie(t);
	if (!de(t)) return l;
	let o = nl(t, e);
	for (; o && jr(o) && ue(o).position === 'static'; ) o = nl(o, e);
	return o && (Ae(o) === 'html' || (Ae(o) === 'body' && ue(o).position === 'static' && !bt(o)))
		? l
		: o ||
				(function (a) {
					let r = qe(a);
					for (; de(r) && !ct(r); ) {
						if (bt(r)) return r;
						r = qe(r);
					}
					return null;
				})(t) ||
				l;
}
function qr(t, e, l) {
	const o = de(e),
		a = _e(e),
		r = l === 'fixed',
		n = Ve(t, !0, r, e);
	let i = { scrollLeft: 0, scrollTop: 0 };
	const s = Oe(0);
	if (o || (!o && !r))
		if (((Ae(e) !== 'body' || $e(a)) && (i = ft(e)), de(e))) {
			const h = Ve(e, !0, r, e);
			(s.x = h.x + e.clientLeft), (s.y = h.y + e.clientTop);
		} else a && (s.x = bl(a));
	return {
		x: n.left + i.scrollLeft - s.x,
		y: n.top + i.scrollTop - s.y,
		width: n.width,
		height: n.height
	};
}
const Ur = {
	getClippingRect: function (t) {
		let { element: e, boundary: l, rootBoundary: o, strategy: a } = t;
		const r =
				l === 'clippingAncestors'
					? (function (h, y) {
							const c = y.get(h);
							if (c) return c;
							let b = st(h).filter((u) => be(u) && Ae(u) !== 'body'),
								d = null;
							const p = ue(h).position === 'fixed';
							let g = p ? qe(h) : h;
							for (; be(g) && !ct(g); ) {
								const u = ue(g),
									v = bt(g);
								v || u.position !== 'fixed' || (d = null),
									(
										p
											? !v && !d
											: (!v &&
													u.position === 'static' &&
													d &&
													['absolute', 'fixed'].includes(d.position)) ||
											  ($e(g) && !v && vl(h, g))
									)
										? (b = b.filter((w) => w !== g))
										: (d = u),
									(g = qe(g));
							}
							return y.set(h, b), b;
					  })(e, this._c)
					: [].concat(l),
			n = [...r, o],
			i = n[0],
			s = n.reduce((h, y) => {
				const c = ol(e, y, a);
				return (
					(h.top = ze(c.top, h.top)),
					(h.right = _t(c.right, h.right)),
					(h.bottom = _t(c.bottom, h.bottom)),
					(h.left = ze(c.left, h.left)),
					h
				);
			}, ol(e, i, a));
		return { width: s.right - s.left, height: s.bottom - s.top, x: s.left, y: s.top };
	},
	convertOffsetParentRelativeRectToViewportRelativeRect: function (t) {
		let { rect: e, offsetParent: l, strategy: o } = t;
		const a = de(l),
			r = _e(l);
		if (l === r) return e;
		let n = { scrollLeft: 0, scrollTop: 0 },
			i = Oe(1);
		const s = Oe(0);
		if ((a || (!a && o !== 'fixed')) && ((Ae(l) !== 'body' || $e(r)) && (n = ft(l)), de(l))) {
			const h = Ve(l);
			(i = We(l)), (s.x = h.x + l.clientLeft), (s.y = h.y + l.clientTop);
		}
		return {
			width: e.width * i.x,
			height: e.height * i.y,
			x: e.x * i.x - n.scrollLeft * i.x + s.x,
			y: e.y * i.y - n.scrollTop * i.y + s.y
		};
	},
	isElement: be,
	getDimensions: function (t) {
		return gl(t);
	},
	getOffsetParent: al,
	getDocumentElement: _e,
	getScale: We,
	async getElementRects(t) {
		let { reference: e, floating: l, strategy: o } = t;
		const a = this.getOffsetParent || al,
			r = this.getDimensions;
		return { reference: qr(e, await a(l), o), floating: { x: 0, y: 0, ...(await r(l)) } };
	},
	getClientRects: (t) => Array.from(t.getClientRects()),
	isRTL: (t) => ue(t).direction === 'rtl'
};
function Kr(t, e, l, o) {
	o === void 0 && (o = {});
	const {
			ancestorScroll: a = !0,
			ancestorResize: r = !0,
			elementResize: n = !0,
			layoutShift: i = typeof IntersectionObserver == 'function',
			animationFrame: s = !1
		} = o,
		h = wt(t),
		y = a || r ? [...(h ? st(h) : []), ...st(e)] : [];
	y.forEach((g) => {
		a && g.addEventListener('scroll', l, { passive: !0 }), r && g.addEventListener('resize', l);
	});
	const c =
		h && i
			? (function (g, u) {
					let v,
						w = null;
					const x = _e(g);
					function P() {
						clearTimeout(v), w && w.disconnect(), (w = null);
					}
					return (
						(function S(H, E) {
							H === void 0 && (H = !1), E === void 0 && (E = 1), P();
							const { left: T, top: I, width: k, height: F } = g.getBoundingClientRect();
							if ((H || u(), !k || !F)) return;
							const O = ot(I),
								V = ot(x.clientWidth - (T + k)),
								W = ot(x.clientHeight - (I + F)),
								K = ot(T);
							let M = !0;
							(w = new IntersectionObserver(
								(j) => {
									const Z = j[0].intersectionRatio;
									if (Z !== E) {
										if (!M) return S();
										Z
											? S(!1, Z)
											: (v = setTimeout(() => {
													S(!1, 1e-7);
											  }, 100));
									}
									M = !1;
								},
								{
									rootMargin: -O + 'px ' + -V + 'px ' + -W + 'px ' + -K + 'px',
									threshold: ze(0, _t(1, E)) || 1
								}
							)),
								w.observe(g);
						})(!0),
						P
					);
			  })(h, l)
			: null;
	let b,
		d = null;
	n && ((d = new ResizeObserver(l)), h && !s && d.observe(h), d.observe(e));
	let p = s ? Ve(t) : null;
	return (
		s &&
			(function g() {
				const u = Ve(t);
				!p || (u.x === p.x && u.y === p.y && u.width === p.width && u.height === p.height) || l(),
					(p = u),
					(b = requestAnimationFrame(g));
			})(),
		l(),
		() => {
			y.forEach((g) => {
				a && g.removeEventListener('scroll', l), r && g.removeEventListener('resize', l);
			}),
				c && c(),
				d && d.disconnect(),
				(d = null),
				s && cancelAnimationFrame(b);
		}
	);
}
const Gr = (t, e, l) => {
	const o = new Map(),
		a = { platform: Ur, ...l },
		r = { ...a.platform, _c: o };
	return Hr(t, e, { ...a, platform: r });
};
function Xr(t) {
	let e, l, o, a, r, n, i;
	return (
		(n = new Dr({})),
		{
			c() {
				(e = D('h2')),
					(l = G('Navigation')),
					(o = N()),
					(a = D('hr')),
					(r = N()),
					Ee(n.$$.fragment),
					this.h();
			},
			l(s) {
				e = A(s, 'H2', { class: !0 });
				var h = L(e);
				(l = X(h, 'Navigation')),
					h.forEach(_),
					(o = z(s)),
					(a = A(s, 'HR', {})),
					(r = z(s)),
					Le(n.$$.fragment, s),
					this.h();
			},
			h() {
				f(e, 'class', 'p-4');
			},
			m(s, h) {
				U(s, e, h), m(e, l), U(s, o, h), U(s, a, h), U(s, r, h), Re(n, s, h), (i = !0);
			},
			p: ae,
			i(s) {
				i || (C(n.$$.fragment, s), (i = !0));
			},
			o(s) {
				B(n.$$.fragment, s), (i = !1);
			},
			d(s) {
				s && _(e), s && _(o), s && _(a), s && _(r), De(n, s);
			}
		}
	);
}
function Yr(t) {
	let e;
	const l = t[2].default,
		o = te(l, t, t[3], null);
	return {
		c() {
			o && o.c();
		},
		l(a) {
			o && o.l(a);
		},
		m(a, r) {
			o && o.m(a, r), (e = !0);
		},
		p(a, r) {
			o && o.p && (!e || r & 8) && le(o, l, a, a[3], e ? oe(l, a[3], r, null) : re(a[3]), null);
		},
		i(a) {
			e || (C(o, a), (e = !0));
		},
		o(a) {
			B(o, a), (e = !1);
		},
		d(a) {
			o && o.d(a);
		}
	};
}
function Jr(t) {
	let e, l;
	return (
		(e = new xr({ props: { url: t[0].url, $$slots: { default: [Yr] }, $$scope: { ctx: t } } })),
		{
			c() {
				Ee(e.$$.fragment);
			},
			l(o) {
				Le(e.$$.fragment, o);
			},
			m(o, a) {
				Re(e, o, a), (l = !0);
			},
			p(o, a) {
				const r = {};
				a & 1 && (r.url = o[0].url), a & 8 && (r.$$scope = { dirty: a, ctx: o }), e.$set(r);
			},
			i(o) {
				l || (C(e.$$.fragment, o), (l = !0));
			},
			o(o) {
				B(e.$$.fragment, o), (l = !1);
			},
			d(o) {
				De(e, o);
			}
		}
	);
}
function Qr(t) {
	let e, l, o, a, r, n, i, s, h, y, c, b;
	return {
		c() {
			(e = D('a')),
				(l = D('div')),
				(o = D('span')),
				(a = D('strong')),
				(r = G('aero')),
				(n = N()),
				(i = D('img')),
				(h = N()),
				(y = D('span')),
				(c = D('strong')),
				(b = G('oats')),
				this.h();
		},
		l(d) {
			e = A(d, 'A', { href: !0 });
			var p = L(e);
			l = A(p, 'DIV', { class: !0 });
			var g = L(l);
			o = A(g, 'SPAN', { class: !0 });
			var u = L(o);
			a = A(u, 'STRONG', { class: !0 });
			var v = L(a);
			(r = X(v, 'aero')),
				v.forEach(_),
				u.forEach(_),
				(n = z(g)),
				(i = A(g, 'IMG', { src: !0, class: !0, alt: !0 })),
				(h = z(g)),
				(y = A(g, 'SPAN', { class: !0 }));
			var w = L(y);
			c = A(w, 'STRONG', { class: !0 });
			var x = L(c);
			(b = X(x, 'oats')), x.forEach(_), w.forEach(_), g.forEach(_), p.forEach(_), this.h();
		},
		h() {
			f(a, 'class', 'text-3xl uppercase px-2'),
				f(
					o,
					'class',
					'invisible sm:visible bg-gradient-to-br from-ao-orange to-ao-pink bg-clip-text text-transparent box-decoration-clone'
				),
				cl(i.src, (s = '/images/aologosm.png')) || f(i, 'src', s),
				f(i, 'class', 'h-20'),
				f(i, 'alt', 'Aero Oats Logo'),
				f(c, 'class', 'text-3xl uppercase px-2'),
				f(
					y,
					'class',
					'invisible sm:visible bg-gradient-to-br from-ao-pink to-ao-orange bg-clip-text text-transparent box-decoration-clone'
				),
				f(l, 'class', 'flex items-center'),
				f(e, 'href', '/');
		},
		m(d, p) {
			U(d, e, p),
				m(e, l),
				m(l, o),
				m(o, a),
				m(a, r),
				m(l, n),
				m(l, i),
				m(l, h),
				m(l, y),
				m(y, c),
				m(c, b);
		},
		p: ae,
		d(d) {
			d && _(e);
		}
	};
}
function Zr(t) {
	let e, l, o, a, r, n, i, s, h, y, c, b, d, p, g, u;
	return {
		c() {
			(e = D('div')),
				(l = D('button')),
				(o = D('span')),
				(a = he('svg')),
				(r = he('rect')),
				(n = he('rect')),
				(i = he('rect')),
				(s = N()),
				(h = D('div')),
				(y = G('👈')),
				(c = D('span')),
				(b = D('strong')),
				(d = D('a')),
				(p = G('Start Here')),
				this.h();
		},
		l(v) {
			e = A(v, 'DIV', { class: !0 });
			var w = L(e);
			l = A(w, 'BUTTON', { class: !0 });
			var x = L(l);
			o = A(x, 'SPAN', {});
			var P = L(o);
			a = ge(P, 'svg', { viewBox: !0, class: !0 });
			var S = L(a);
			(r = ge(S, 'rect', { width: !0, height: !0 })),
				L(r).forEach(_),
				(n = ge(S, 'rect', { y: !0, width: !0, height: !0 })),
				L(n).forEach(_),
				(i = ge(S, 'rect', { y: !0, width: !0, height: !0 })),
				L(i).forEach(_),
				S.forEach(_),
				P.forEach(_),
				(s = z(x)),
				x.forEach(_),
				(h = A(w, 'DIV', { class: !0 }));
			var H = L(h);
			(y = X(H, '👈')), H.forEach(_), (c = A(w, 'SPAN', { class: !0 }));
			var E = L(c);
			b = A(E, 'STRONG', { class: !0 });
			var T = L(b);
			d = A(T, 'A', { href: !0 });
			var I = L(d);
			(p = X(I, 'Start Here')), I.forEach(_), T.forEach(_), E.forEach(_), w.forEach(_), this.h();
		},
		h() {
			f(r, 'width', '100'),
				f(r, 'height', '20'),
				f(n, 'y', '30'),
				f(n, 'width', '100'),
				f(n, 'height', '20'),
				f(i, 'y', '60'),
				f(i, 'width', '100'),
				f(i, 'height', '20'),
				f(a, 'viewBox', '0 0 100 80'),
				f(a, 'class', 'fill-token w-4 h-4'),
				f(l, 'class', 'btn btn-sm mr-1'),
				f(h, 'class', 'animate-pulse'),
				f(d, 'href', '/start'),
				f(b, 'class', 'text-base sm:text-xl uppercase px-1'),
				f(
					c,
					'class',
					'text-right bg-gradient-to-br from-ao-newpink to-ao-teal bg-clip-text text-transparent box-decoration-clone'
				),
				f(e, 'class', 'flex items-center');
		},
		m(v, w) {
			U(v, e, w),
				m(e, l),
				m(l, o),
				m(o, a),
				m(a, r),
				m(a, n),
				m(a, i),
				m(l, s),
				m(e, h),
				m(h, y),
				m(e, c),
				m(c, b),
				m(b, d),
				m(d, p),
				g || ((u = J(l, 'click', t[1])), (g = !0));
		},
		p: ae,
		d(v) {
			v && _(e), (g = !1), u();
		}
	};
}
function $r(t) {
	let e, l, o, a;
	return (
		(e = new Er({})),
		(o = new Hl({
			props: {
				src: 'https://1.gravatar.com/avatar/6da489c46ce4b9c37c7c73acd9a9e980?size=128',
				width: 'w-8 sm:w-12',
				rounded: 'rounded-full'
			}
		})),
		{
			c() {
				Ee(e.$$.fragment), (l = N()), Ee(o.$$.fragment);
			},
			l(r) {
				Le(e.$$.fragment, r), (l = z(r)), Le(o.$$.fragment, r);
			},
			m(r, n) {
				Re(e, r, n), U(r, l, n), Re(o, r, n), (a = !0);
			},
			p: ae,
			i(r) {
				a || (C(e.$$.fragment, r), C(o.$$.fragment, r), (a = !0));
			},
			o(r) {
				B(e.$$.fragment, r), B(o.$$.fragment, r), (a = !1);
			},
			d(r) {
				De(e, r), r && _(l), De(o, r);
			}
		}
	);
}
function eo(t) {
	let e, l;
	return (
		(e = new Yl({
			props: {
				gridColumns: 'grid-cols-3',
				slotDefault: 'place-self-center',
				slotTrail: 'place-content-end',
				$$slots: { trail: [$r], lead: [Zr], default: [Qr] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				Ee(e.$$.fragment);
			},
			l(o) {
				Le(e.$$.fragment, o);
			},
			m(o, a) {
				Re(e, o, a), (l = !0);
			},
			p(o, a) {
				const r = {};
				a & 8 && (r.$$scope = { dirty: a, ctx: o }), e.$set(r);
			},
			i(o) {
				l || (C(e.$$.fragment, o), (l = !0));
			},
			o(o) {
				B(e.$$.fragment, o), (l = !1);
			},
			d(o) {
				De(e, o);
			}
		}
	);
}
function to(t) {
	let e, l;
	return (
		(e = new Sr({})),
		{
			c() {
				Ee(e.$$.fragment);
			},
			l(o) {
				Le(e.$$.fragment, o);
			},
			m(o, a) {
				Re(e, o, a), (l = !0);
			},
			i(o) {
				l || (C(e.$$.fragment, o), (l = !0));
			},
			o(o) {
				B(e.$$.fragment, o), (l = !1);
			},
			d(o) {
				De(e, o);
			}
		}
	);
}
function lo(t) {
	let e, l, o, a;
	return (
		(e = new br({ props: { class: 'max-w-md', $$slots: { default: [Xr] }, $$scope: { ctx: t } } })),
		(o = new fr({
			props: {
				slotHeader: 'pb-4',
				slotPageFooter: 'pt-4',
				$$slots: { pageFooter: [to], header: [eo], default: [Jr] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				Ee(e.$$.fragment), (l = N()), Ee(o.$$.fragment);
			},
			l(r) {
				Le(e.$$.fragment, r), (l = z(r)), Le(o.$$.fragment, r);
			},
			m(r, n) {
				Re(e, r, n), U(r, l, n), Re(o, r, n), (a = !0);
			},
			p(r, [n]) {
				const i = {};
				n & 8 && (i.$$scope = { dirty: n, ctx: r }), e.$set(i);
				const s = {};
				n & 9 && (s.$$scope = { dirty: n, ctx: r }), o.$set(s);
			},
			i(r) {
				a || (C(e.$$.fragment, r), C(o.$$.fragment, r), (a = !0));
			},
			o(r) {
				B(e.$$.fragment, r), B(o.$$.fragment, r), (a = !1);
			},
			d(r) {
				De(e, r), r && _(l), De(o, r);
			}
		}
	);
}
function ro(t, e, l) {
	let { $$slots: o = {}, $$scope: a } = e;
	Cl.set({ computePosition: Gr, autoUpdate: Kr, offset: Nr, shift: Wr, flip: Mr, arrow: Cr });
	function r() {
		Ne.open();
	}
	let { data: n } = e;
	return (
		(t.$$set = (i) => {
			'data' in i && l(0, (n = i.data)), '$$scope' in i && l(3, (a = i.$$scope));
		}),
		[n, r, o, a]
	);
}
class so extends Se {
	constructor(e) {
		super(), Te(this, e, ro, lo, ve, { data: 0 });
	}
}
export { so as component, io as universal };
