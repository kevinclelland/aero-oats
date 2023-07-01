function $() {}
const Z = (t) => t;
function $t(t, e) {
	for (const n in e) t[n] = e[n];
	return t;
}
function tt(t) {
	return t();
}
function U() {
	return Object.create(null);
}
function N(t) {
	t.forEach(tt);
}
function P(t) {
	return typeof t == 'function';
}
function It(t, e) {
	return t != t ? e == e : t !== e || (t && typeof t == 'object') || typeof t == 'function';
}
let H;
function Jt(t, e) {
	return H || (H = document.createElement('a')), (H.href = e), t === H.href;
}
function xt(t) {
	return Object.keys(t).length === 0;
}
function et(t, ...e) {
	if (t == null) return $;
	const n = t.subscribe(...e);
	return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Kt(t) {
	let e;
	return et(t, (n) => (e = n))(), e;
}
function Qt(t, e, n) {
	t.$$.on_destroy.push(et(e, n));
}
function Ut(t, e, n, i) {
	if (t) {
		const s = nt(t, e, n, i);
		return t[0](s);
	}
}
function nt(t, e, n, i) {
	return t[1] && i ? $t(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function Vt(t, e, n, i) {
	if (t[2] && i) {
		const s = t[2](i(n));
		if (e.dirty === void 0) return s;
		if (typeof s == 'object') {
			const l = [],
				r = Math.max(e.dirty.length, s.length);
			for (let o = 0; o < r; o += 1) l[o] = e.dirty[o] | s[o];
			return l;
		}
		return e.dirty | s;
	}
	return e.dirty;
}
function Xt(t, e, n, i, s, l) {
	if (s) {
		const r = nt(e, n, i, l);
		t.p(r, s);
	}
}
function Yt(t) {
	if (t.ctx.length > 32) {
		const e = [],
			n = t.ctx.length / 32;
		for (let i = 0; i < n; i++) e[i] = -1;
		return e;
	}
	return -1;
}
function Zt(t) {
	const e = {};
	for (const n in t) n[0] !== '$' && (e[n] = t[n]);
	return e;
}
function te(t, e) {
	const n = {};
	e = new Set(e);
	for (const i in t) !e.has(i) && i[0] !== '$' && (n[i] = t[i]);
	return n;
}
function ee(t) {
	const e = {};
	for (const n in t) e[n] = !0;
	return e;
}
function ne(t, e, n) {
	return t.set(n), e;
}
function ie(t) {
	return t && P(t.destroy) ? t.destroy : $;
}
function se(t) {
	const e = typeof t == 'string' && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return e ? [parseFloat(e[1]), e[2] || 'px'] : [t, 'px'];
}
const it = typeof window < 'u';
let st = it ? () => window.performance.now() : () => Date.now(),
	J = it ? (t) => requestAnimationFrame(t) : $;
const v = new Set();
function rt(t) {
	v.forEach((e) => {
		e.c(t) || (v.delete(e), e.f());
	}),
		v.size !== 0 && J(rt);
}
function ot(t) {
	let e;
	return (
		v.size === 0 && J(rt),
		{
			promise: new Promise((n) => {
				v.add((e = { c: t, f: n }));
			}),
			abort() {
				v.delete(e);
			}
		}
	);
}
const re = typeof window < 'u' ? window : typeof globalThis < 'u' ? globalThis : global;
let B = !1;
function bt() {
	B = !0;
}
function wt() {
	B = !1;
}
function Et(t, e, n, i) {
	for (; t < e; ) {
		const s = t + ((e - t) >> 1);
		n(s) <= i ? (t = s + 1) : (e = s);
	}
	return t;
}
function vt(t) {
	if (t.hydrate_init) return;
	t.hydrate_init = !0;
	let e = t.childNodes;
	if (t.nodeName === 'HEAD') {
		const c = [];
		for (let a = 0; a < e.length; a++) {
			const _ = e[a];
			_.claim_order !== void 0 && c.push(_);
		}
		e = c;
	}
	const n = new Int32Array(e.length + 1),
		i = new Int32Array(e.length);
	n[0] = -1;
	let s = 0;
	for (let c = 0; c < e.length; c++) {
		const a = e[c].claim_order,
			_ = (s > 0 && e[n[s]].claim_order <= a ? s + 1 : Et(1, s, (h) => e[n[h]].claim_order, a)) - 1;
		i[c] = n[_] + 1;
		const u = _ + 1;
		(n[u] = c), (s = Math.max(u, s));
	}
	const l = [],
		r = [];
	let o = e.length - 1;
	for (let c = n[s] + 1; c != 0; c = i[c - 1]) {
		for (l.push(e[c - 1]); o >= c; o--) r.push(e[o]);
		o--;
	}
	for (; o >= 0; o--) r.push(e[o]);
	l.reverse(), r.sort((c, a) => c.claim_order - a.claim_order);
	for (let c = 0, a = 0; c < r.length; c++) {
		for (; a < l.length && r[c].claim_order >= l[a].claim_order; ) a++;
		const _ = a < l.length ? l[a] : null;
		t.insertBefore(r[c], _);
	}
}
function Tt(t, e) {
	t.appendChild(e);
}
function ct(t) {
	if (!t) return document;
	const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
	return e && e.host ? e : t.ownerDocument;
}
function Nt(t) {
	const e = K('style');
	return At(ct(t), e), e.sheet;
}
function At(t, e) {
	return Tt(t.head || t, e), e.sheet;
}
function kt(t, e) {
	if (B) {
		for (
			vt(t),
				(t.actual_end_child === void 0 ||
					(t.actual_end_child !== null && t.actual_end_child.parentNode !== t)) &&
					(t.actual_end_child = t.firstChild);
			t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

		)
			t.actual_end_child = t.actual_end_child.nextSibling;
		e !== t.actual_end_child
			? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child)
			: (t.actual_end_child = e.nextSibling);
	} else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function Ct(t, e, n) {
	t.insertBefore(e, n || null);
}
function Mt(t, e, n) {
	B && !n ? kt(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function S(t) {
	t.parentNode && t.parentNode.removeChild(t);
}
function oe(t, e) {
	for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function K(t) {
	return document.createElement(t);
}
function lt(t) {
	return document.createElementNS('http://www.w3.org/2000/svg', t);
}
function Q(t) {
	return document.createTextNode(t);
}
function ce() {
	return Q(' ');
}
function le() {
	return Q('');
}
function ae(t, e, n, i) {
	return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function St(t, e, n) {
	n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const Dt = ['width', 'height'];
function ue(t, e) {
	const n = Object.getOwnPropertyDescriptors(t.__proto__);
	for (const i in e)
		e[i] == null
			? t.removeAttribute(i)
			: i === 'style'
			? (t.style.cssText = e[i])
			: i === '__value'
			? (t.value = t[i] = e[i])
			: n[i] && n[i].set && Dt.indexOf(i) === -1
			? (t[i] = e[i])
			: St(t, i, e[i]);
}
function fe(t) {
	let e;
	return {
		p(...n) {
			(e = n), e.forEach((i) => t.push(i));
		},
		r() {
			e.forEach((n) => t.splice(t.indexOf(n), 1));
		}
	};
}
function Ot(t) {
	return Array.from(t.childNodes);
}
function at(t) {
	t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function ut(t, e, n, i, s = !1) {
	at(t);
	const l = (() => {
		for (let r = t.claim_info.last_index; r < t.length; r++) {
			const o = t[r];
			if (e(o)) {
				const c = n(o);
				return c === void 0 ? t.splice(r, 1) : (t[r] = c), s || (t.claim_info.last_index = r), o;
			}
		}
		for (let r = t.claim_info.last_index - 1; r >= 0; r--) {
			const o = t[r];
			if (e(o)) {
				const c = n(o);
				return (
					c === void 0 ? t.splice(r, 1) : (t[r] = c),
					s ? c === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = r),
					o
				);
			}
		}
		return i();
	})();
	return (l.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), l;
}
function ft(t, e, n, i) {
	return ut(
		t,
		(s) => s.nodeName === e,
		(s) => {
			const l = [];
			for (let r = 0; r < s.attributes.length; r++) {
				const o = s.attributes[r];
				n[o.name] || l.push(o.name);
			}
			l.forEach((r) => s.removeAttribute(r));
		},
		() => i(e)
	);
}
function _e(t, e, n) {
	return ft(t, e, n, K);
}
function de(t, e, n) {
	return ft(t, e, n, lt);
}
function Pt(t, e) {
	return ut(
		t,
		(n) => n.nodeType === 3,
		(n) => {
			const i = '' + e;
			if (n.data.startsWith(i)) {
				if (n.data.length !== i.length) return n.splitText(i.length);
			} else n.data = i;
		},
		() => Q(e),
		!0
	);
}
function he(t) {
	return Pt(t, ' ');
}
function V(t, e, n) {
	for (let i = n; i < t.length; i += 1) {
		const s = t[i];
		if (s.nodeType === 8 && s.textContent.trim() === e) return i;
	}
	return t.length;
}
function me(t, e) {
	const n = V(t, 'HTML_TAG_START', 0),
		i = V(t, 'HTML_TAG_END', n);
	if (n === i) return new X(void 0, e);
	at(t);
	const s = t.splice(n, i - n + 1);
	S(s[0]), S(s[s.length - 1]);
	const l = s.slice(1, s.length - 1);
	for (const r of l)
		(r.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1);
	return new X(l, e);
}
function pe(t, e) {
	(e = '' + e), t.data !== e && (t.data = e);
}
function ye(t, e, n, i) {
	n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? 'important' : '');
}
function _t(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
	const s = document.createEvent('CustomEvent');
	return s.initCustomEvent(t, n, i, e), s;
}
function ge(t, e) {
	const n = [];
	let i = 0;
	for (const s of e.childNodes)
		if (s.nodeType === 8) {
			const l = s.textContent.trim();
			l === `HEAD_${t}_END`
				? ((i -= 1), n.push(s))
				: l === `HEAD_${t}_START` && ((i += 1), n.push(s));
		} else i > 0 && n.push(s);
	return n;
}
class jt {
	constructor(e = !1) {
		(this.is_svg = !1), (this.is_svg = e), (this.e = this.n = null);
	}
	c(e) {
		this.h(e);
	}
	m(e, n, i = null) {
		this.e ||
			(this.is_svg
				? (this.e = lt(n.nodeName))
				: (this.e = K(n.nodeType === 11 ? 'TEMPLATE' : n.nodeName)),
			(this.t = n.tagName !== 'TEMPLATE' ? n : n.content),
			this.c(e)),
			this.i(i);
	}
	h(e) {
		(this.e.innerHTML = e),
			(this.n = Array.from(
				this.e.nodeName === 'TEMPLATE' ? this.e.content.childNodes : this.e.childNodes
			));
	}
	i(e) {
		for (let n = 0; n < this.n.length; n += 1) Ct(this.t, this.n[n], e);
	}
	p(e) {
		this.d(), this.h(e), this.i(this.a);
	}
	d() {
		this.n.forEach(S);
	}
}
class X extends jt {
	constructor(e, n = !1) {
		super(n), (this.e = this.n = null), (this.l = e);
	}
	c(e) {
		this.l ? (this.n = this.l) : super.c(e);
	}
	i(e) {
		for (let n = 0; n < this.n.length; n += 1) Mt(this.t, this.n[n], e);
	}
}
function $e(t, e) {
	return new t(e);
}
const R = new Map();
let q = 0;
function Ht(t) {
	let e = 5381,
		n = t.length;
	for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
	return e >>> 0;
}
function Lt(t, e) {
	const n = { stylesheet: Nt(e), rules: {} };
	return R.set(t, n), n;
}
function F(t, e, n, i, s, l, r, o = 0) {
	const c = 16.666 / i;
	let a = `{
`;
	for (let p = 0; p <= 1; p += c) {
		const y = e + (n - e) * l(p);
		a +=
			p * 100 +
			`%{${r(y, 1 - y)}}
`;
	}
	const _ =
			a +
			`100% {${r(n, 1 - n)}}
}`,
		u = `__svelte_${Ht(_)}_${o}`,
		h = ct(t),
		{ stylesheet: f, rules: d } = R.get(h) || Lt(h, t);
	d[u] || ((d[u] = !0), f.insertRule(`@keyframes ${u} ${_}`, f.cssRules.length));
	const m = t.style.animation || '';
	return (t.style.animation = `${m ? `${m}, ` : ''}${u} ${i}ms linear ${s}ms 1 both`), (q += 1), u;
}
function G(t, e) {
	const n = (t.style.animation || '').split(', '),
		i = n.filter(e ? (l) => l.indexOf(e) < 0 : (l) => l.indexOf('__svelte') === -1),
		s = n.length - i.length;
	s && ((t.style.animation = i.join(', ')), (q -= s), q || Rt());
}
function Rt() {
	J(() => {
		q ||
			(R.forEach((t) => {
				const { ownerNode: e } = t.stylesheet;
				e && S(e);
			}),
			R.clear());
	});
}
let D;
function C(t) {
	D = t;
}
function j() {
	if (!D) throw new Error('Function called outside component initialization');
	return D;
}
function xe(t) {
	j().$$.on_mount.push(t);
}
function be(t) {
	j().$$.after_update.push(t);
}
function we() {
	const t = j();
	return (e, n, { cancelable: i = !1 } = {}) => {
		const s = t.$$.callbacks[e];
		if (s) {
			const l = _t(e, n, { cancelable: i });
			return (
				s.slice().forEach((r) => {
					r.call(t, l);
				}),
				!l.defaultPrevented
			);
		}
		return !0;
	};
}
function Ee(t, e) {
	return j().$$.context.set(t, e), e;
}
function ve(t) {
	return j().$$.context.get(t);
}
function Te(t, e) {
	const n = t.$$.callbacks[e.type];
	n && n.slice().forEach((i) => i.call(this, e));
}
const E = [],
	Y = [];
let T = [];
const W = [],
	dt = Promise.resolve();
let I = !1;
function ht() {
	I || ((I = !0), dt.then(mt));
}
function Ne() {
	return ht(), dt;
}
function O(t) {
	T.push(t);
}
function Ae(t) {
	W.push(t);
}
const z = new Set();
let w = 0;
function mt() {
	if (w !== 0) return;
	const t = D;
	do {
		try {
			for (; w < E.length; ) {
				const e = E[w];
				w++, C(e), qt(e.$$);
			}
		} catch (e) {
			throw ((E.length = 0), (w = 0), e);
		}
		for (C(null), E.length = 0, w = 0; Y.length; ) Y.pop()();
		for (let e = 0; e < T.length; e += 1) {
			const n = T[e];
			z.has(n) || (z.add(n), n());
		}
		T.length = 0;
	} while (E.length);
	for (; W.length; ) W.pop()();
	(I = !1), z.clear(), C(t);
}
function qt(t) {
	if (t.fragment !== null) {
		t.update(), N(t.before_update);
		const e = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(O);
	}
}
function Bt(t) {
	const e = [],
		n = [];
	T.forEach((i) => (t.indexOf(i) === -1 ? e.push(i) : n.push(i))), n.forEach((i) => i()), (T = e);
}
let k;
function pt() {
	return (
		k ||
			((k = Promise.resolve()),
			k.then(() => {
				k = null;
			})),
		k
	);
}
function M(t, e, n) {
	t.dispatchEvent(_t(`${e ? 'intro' : 'outro'}${n}`));
}
const L = new Set();
let g;
function ke() {
	g = { r: 0, c: [], p: g };
}
function Ce() {
	g.r || N(g.c), (g = g.p);
}
function zt(t, e) {
	t && t.i && (L.delete(t), t.i(e));
}
function Me(t, e, n, i) {
	if (t && t.o) {
		if (L.has(t)) return;
		L.add(t),
			g.c.push(() => {
				L.delete(t), i && (n && t.d(1), i());
			}),
			t.o(e);
	} else i && i();
}
const yt = { duration: 0 };
function Se(t, e, n) {
	const i = { direction: 'in' };
	let s = e(t, n, i),
		l = !1,
		r,
		o,
		c = 0;
	function a() {
		r && G(t, r);
	}
	function _() {
		const { delay: h = 0, duration: f = 300, easing: d = Z, tick: m = $, css: p } = s || yt;
		p && (r = F(t, 0, 1, f, h, d, p, c++)), m(0, 1);
		const y = st() + h,
			A = y + f;
		o && o.abort(),
			(l = !0),
			O(() => M(t, !0, 'start')),
			(o = ot((x) => {
				if (l) {
					if (x >= A) return m(1, 0), M(t, !0, 'end'), a(), (l = !1);
					if (x >= y) {
						const b = d((x - y) / f);
						m(b, 1 - b);
					}
				}
				return l;
			}));
	}
	let u = !1;
	return {
		start() {
			u || ((u = !0), G(t), P(s) ? ((s = s(i)), pt().then(_)) : _());
		},
		invalidate() {
			u = !1;
		},
		end() {
			l && (a(), (l = !1));
		}
	};
}
function De(t, e, n, i) {
	const s = { direction: 'both' };
	let l = e(t, n, s),
		r = i ? 0 : 1,
		o = null,
		c = null,
		a = null;
	function _() {
		a && G(t, a);
	}
	function u(f, d) {
		const m = f.b - r;
		return (
			(d *= Math.abs(m)),
			{ a: r, b: f.b, d: m, duration: d, start: f.start, end: f.start + d, group: f.group }
		);
	}
	function h(f) {
		const { delay: d = 0, duration: m = 300, easing: p = Z, tick: y = $, css: A } = l || yt,
			x = { start: st() + d, b: f };
		f || ((x.group = g), (g.r += 1)),
			o || c
				? (c = x)
				: (A && (_(), (a = F(t, r, f, m, d, p, A))),
				  f && y(0, 1),
				  (o = u(x, m)),
				  O(() => M(t, f, 'start')),
				  ot((b) => {
						if (
							(c &&
								b > c.start &&
								((o = u(c, m)),
								(c = null),
								M(t, o.b, 'start'),
								A && (_(), (a = F(t, r, o.b, o.duration, 0, p, l.css)))),
							o)
						) {
							if (b >= o.end)
								y((r = o.b), 1 - r),
									M(t, o.b, 'end'),
									c || (o.b ? _() : --o.group.r || N(o.group.c)),
									(o = null);
							else if (b >= o.start) {
								const gt = b - o.start;
								(r = o.a + o.d * p(gt / o.duration)), y(r, 1 - r);
							}
						}
						return !!(o || c);
				  }));
	}
	return {
		run(f) {
			P(l)
				? pt().then(() => {
						(l = l(s)), h(f);
				  })
				: h(f);
		},
		end() {
			_(), (o = c = null);
		}
	};
}
function Oe(t, e) {
	const n = {},
		i = {},
		s = { $$scope: 1 };
	let l = t.length;
	for (; l--; ) {
		const r = t[l],
			o = e[l];
		if (o) {
			for (const c in r) c in o || (i[c] = 1);
			for (const c in o) s[c] || ((n[c] = o[c]), (s[c] = 1));
			t[l] = o;
		} else for (const c in r) s[c] = 1;
	}
	for (const r in i) r in n || (n[r] = void 0);
	return n;
}
function Pe(t, e, n) {
	const i = t.$$.props[e];
	i !== void 0 && ((t.$$.bound[i] = n), n(t.$$.ctx[i]));
}
function je(t) {
	t && t.c();
}
function He(t, e) {
	t && t.l(e);
}
function Ft(t, e, n, i) {
	const { fragment: s, after_update: l } = t.$$;
	s && s.m(e, n),
		i ||
			O(() => {
				const r = t.$$.on_mount.map(tt).filter(P);
				t.$$.on_destroy ? t.$$.on_destroy.push(...r) : N(r), (t.$$.on_mount = []);
			}),
		l.forEach(O);
}
function Gt(t, e) {
	const n = t.$$;
	n.fragment !== null &&
		(Bt(n.after_update),
		N(n.on_destroy),
		n.fragment && n.fragment.d(e),
		(n.on_destroy = n.fragment = null),
		(n.ctx = []));
}
function Wt(t, e) {
	t.$$.dirty[0] === -1 && (E.push(t), ht(), t.$$.dirty.fill(0)),
		(t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function Le(t, e, n, i, s, l, r, o = [-1]) {
	const c = D;
	C(t);
	const a = (t.$$ = {
		fragment: null,
		ctx: [],
		props: l,
		update: $,
		not_equal: s,
		bound: U(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(e.context || (c ? c.$$.context : [])),
		callbacks: U(),
		dirty: o,
		skip_bound: !1,
		root: e.target || c.$$.root
	});
	r && r(a.root);
	let _ = !1;
	if (
		((a.ctx = n
			? n(t, e.props || {}, (u, h, ...f) => {
					const d = f.length ? f[0] : h;
					return (
						a.ctx &&
							s(a.ctx[u], (a.ctx[u] = d)) &&
							(!a.skip_bound && a.bound[u] && a.bound[u](d), _ && Wt(t, u)),
						h
					);
			  })
			: []),
		a.update(),
		(_ = !0),
		N(a.before_update),
		(a.fragment = i ? i(a.ctx) : !1),
		e.target)
	) {
		if (e.hydrate) {
			bt();
			const u = Ot(e.target);
			a.fragment && a.fragment.l(u), u.forEach(S);
		} else a.fragment && a.fragment.c();
		e.intro && zt(t.$$.fragment), Ft(t, e.target, e.anchor, e.customElement), wt(), mt();
	}
	C(c);
}
class Re {
	$destroy() {
		Gt(this, 1), (this.$destroy = $);
	}
	$on(e, n) {
		if (!P(n)) return $;
		const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
		return (
			i.push(n),
			() => {
				const s = i.indexOf(n);
				s !== -1 && i.splice(s, 1);
			}
		);
	}
	$set(e) {
		this.$$set && !xt(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
	}
}
export {
	$,
	Ft as A,
	Gt as B,
	Z as C,
	se as D,
	Ut as E,
	kt as F,
	Xt as G,
	Yt as H,
	Vt as I,
	ee as J,
	$t as K,
	Zt as L,
	ae as M,
	Te as N,
	Qt as O,
	we as P,
	re as Q,
	ie as R,
	Re as S,
	O as T,
	De as U,
	N as V,
	X as W,
	lt as X,
	ge as Y,
	me as Z,
	de as _,
	ce as a,
	ne as a0,
	Jt as a1,
	Se as a2,
	Ee as a3,
	fe as a4,
	ue as a5,
	Oe as a6,
	te as a7,
	ve as a8,
	oe as a9,
	Pe as aa,
	Ae as ab,
	Kt as ac,
	P as ad,
	Mt as b,
	he as c,
	Me as d,
	le as e,
	Ce as f,
	zt as g,
	S as h,
	Le as i,
	be as j,
	K as k,
	_e as l,
	Ot as m,
	St as n,
	xe as o,
	ye as p,
	Q as q,
	Pt as r,
	It as s,
	Ne as t,
	pe as u,
	ke as v,
	Y as w,
	$e as x,
	je as y,
	He as z
};
