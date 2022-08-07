import ar, { ThemeProvider as ir } from "styled-components";
import Te from "react";
const or = {
  spacing: {
    unit: 4
  },
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px"
  }
};
var Ce = { exports: {} }, D = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var K, xe;
function Se() {
  if (xe)
    return K;
  xe = 1;
  var p = Object.getOwnPropertySymbols, j = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
  function w(R) {
    if (R == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(R);
  }
  function C() {
    try {
      if (!Object.assign)
        return !1;
      var R = new String("abc");
      if (R[5] = "de", Object.getOwnPropertyNames(R)[0] === "5")
        return !1;
      for (var O = {}, c = 0; c < 10; c++)
        O["_" + String.fromCharCode(c)] = c;
      var l = Object.getOwnPropertyNames(O).map(function(f) {
        return O[f];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var g = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        g[f] = f;
      }), Object.keys(Object.assign({}, g)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return K = C() ? Object.assign : function(R, O) {
    for (var c, l = w(R), g, f = 1; f < arguments.length; f++) {
      c = Object(arguments[f]);
      for (var m in c)
        j.call(c, m) && (l[m] = c[m]);
      if (p) {
        g = p(c);
        for (var _ = 0; _ < g.length; _++)
          E.call(c, g[_]) && (l[g[_]] = c[g[_]]);
      }
    }
    return l;
  }, K;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function ur() {
  if (Pe)
    return D;
  Pe = 1, Se();
  var p = Te, j = 60103;
  if (D.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var E = Symbol.for;
    j = E("react.element"), D.Fragment = E("react.fragment");
  }
  var w = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = Object.prototype.hasOwnProperty, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(c, l, g) {
    var f, m = {}, _ = null, T = null;
    g !== void 0 && (_ = "" + g), l.key !== void 0 && (_ = "" + l.key), l.ref !== void 0 && (T = l.ref);
    for (f in l)
      C.call(l, f) && !R.hasOwnProperty(f) && (m[f] = l[f]);
    if (c && c.defaultProps)
      for (f in l = c.defaultProps, l)
        m[f] === void 0 && (m[f] = l[f]);
    return { $$typeof: j, type: c, key: _, ref: T, props: m, _owner: w.current };
  }
  return D.jsx = O, D.jsxs = O, D;
}
var H = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function fr() {
  return je || (je = 1, function(p) {
    process.env.NODE_ENV !== "production" && function() {
      var j = Te, E = Se(), w = 60103, C = 60106;
      p.Fragment = 60107;
      var R = 60108, O = 60114, c = 60109, l = 60110, g = 60112, f = 60113, m = 60120, _ = 60115, T = 60116, Y = 60121, X = 60122, Z = 60117, Q = 60129, ee = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var d = Symbol.for;
        w = d("react.element"), C = d("react.portal"), p.Fragment = d("react.fragment"), R = d("react.strict_mode"), O = d("react.profiler"), c = d("react.provider"), l = d("react.context"), g = d("react.forward_ref"), f = d("react.suspense"), m = d("react.suspense_list"), _ = d("react.memo"), T = d("react.lazy"), Y = d("react.block"), X = d("react.server.block"), Z = d("react.fundamental"), d("react.scope"), d("react.opaque.id"), Q = d("react.debug_trace_mode"), d("react.offscreen"), ee = d("react.legacy_hidden");
      }
      var re = typeof Symbol == "function" && Symbol.iterator, ke = "@@iterator";
      function Ae(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = re && e[re] || e[ke];
        return typeof r == "function" ? r : null;
      }
      var S = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function b(e) {
        {
          for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
            t[n - 1] = arguments[n];
          De("error", e, t);
        }
      }
      function De(e, r, t) {
        {
          var n = S.ReactDebugCurrentFrame, o = n.getStackAddendum();
          o !== "" && (r += "%s", t = t.concat([o]));
          var u = t.map(function(i) {
            return "" + i;
          });
          u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
        }
      }
      var Ie = !1;
      function $e(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === p.Fragment || e === O || e === Q || e === R || e === f || e === m || e === ee || Ie || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === _ || e.$$typeof === c || e.$$typeof === l || e.$$typeof === g || e.$$typeof === Z || e.$$typeof === Y || e[0] === X));
      }
      function Ye(e, r, t) {
        var n = r.displayName || r.name || "";
        return e.displayName || (n !== "" ? t + "(" + n + ")" : t);
      }
      function te(e) {
        return e.displayName || "Context";
      }
      function y(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && b("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case p.Fragment:
            return "Fragment";
          case C:
            return "Portal";
          case O:
            return "Profiler";
          case R:
            return "StrictMode";
          case f:
            return "Suspense";
          case m:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case l:
              var r = e;
              return te(r) + ".Consumer";
            case c:
              var t = e;
              return te(t._context) + ".Provider";
            case g:
              return Ye(e, e.render, "ForwardRef");
            case _:
              return y(e.type);
            case Y:
              return y(e._render);
            case T: {
              var n = e, o = n._payload, u = n._init;
              try {
                return y(u(o));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var I = 0, ne, ae, ie, oe, ue, fe, ce;
      function se() {
      }
      se.__reactDisabledLog = !0;
      function We() {
        {
          if (I === 0) {
            ne = console.log, ae = console.info, ie = console.warn, oe = console.error, ue = console.group, fe = console.groupCollapsed, ce = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: se,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          I++;
        }
      }
      function Le() {
        {
          if (I--, I === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: E({}, e, {
                value: ne
              }),
              info: E({}, e, {
                value: ae
              }),
              warn: E({}, e, {
                value: ie
              }),
              error: E({}, e, {
                value: oe
              }),
              group: E({}, e, {
                value: ue
              }),
              groupCollapsed: E({}, e, {
                value: fe
              }),
              groupEnd: E({}, e, {
                value: ce
              })
            });
          }
          I < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var V = S.ReactCurrentDispatcher, F;
      function W(e, r, t) {
        {
          if (F === void 0)
            try {
              throw Error();
            } catch (o) {
              var n = o.stack.trim().match(/\n( *(at )?)/);
              F = n && n[1] || "";
            }
          return `
` + F + e;
        }
      }
      var M = !1, L;
      {
        var Ne = typeof WeakMap == "function" ? WeakMap : Map;
        L = new Ne();
      }
      function le(e, r) {
        if (!e || M)
          return "";
        {
          var t = L.get(e);
          if (t !== void 0)
            return t;
        }
        var n;
        M = !0;
        var o = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var u;
        u = V.current, V.current = null, We();
        try {
          if (r) {
            var i = function() {
              throw Error();
            };
            if (Object.defineProperty(i.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(i, []);
              } catch (P) {
                n = P;
              }
              Reflect.construct(e, [], i);
            } else {
              try {
                i.call();
              } catch (P) {
                n = P;
              }
              e.call(i.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (P) {
              n = P;
            }
            e();
          }
        } catch (P) {
          if (P && n && typeof P.stack == "string") {
            for (var a = P.stack.split(`
`), h = n.stack.split(`
`), s = a.length - 1, v = h.length - 1; s >= 1 && v >= 0 && a[s] !== h[v]; )
              v--;
            for (; s >= 1 && v >= 0; s--, v--)
              if (a[s] !== h[v]) {
                if (s !== 1 || v !== 1)
                  do
                    if (s--, v--, v < 0 || a[s] !== h[v]) {
                      var x = `
` + a[s].replace(" at new ", " at ");
                      return typeof e == "function" && L.set(e, x), x;
                    }
                  while (s >= 1 && v >= 0);
                break;
              }
          }
        } finally {
          M = !1, V.current = u, Le(), Error.prepareStackTrace = o;
        }
        var A = e ? e.displayName || e.name : "", ye = A ? W(A) : "";
        return typeof e == "function" && L.set(e, ye), ye;
      }
      function de(e, r, t) {
        return le(e, !1);
      }
      function Ue(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function N(e, r, t) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return le(e, Ue(e));
        if (typeof e == "string")
          return W(e);
        switch (e) {
          case f:
            return W("Suspense");
          case m:
            return W("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case g:
              return de(e.render);
            case _:
              return N(e.type, r, t);
            case Y:
              return de(e._render);
            case T: {
              var n = e, o = n._payload, u = n._init;
              try {
                return N(u(o), r, t);
              } catch {
              }
            }
          }
        return "";
      }
      var ve = {}, pe = S.ReactDebugCurrentFrame;
      function U(e) {
        if (e) {
          var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
          pe.setExtraStackFrame(t);
        } else
          pe.setExtraStackFrame(null);
      }
      function Ve(e, r, t, n, o) {
        {
          var u = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var i in e)
            if (u(e, i)) {
              var a = void 0;
              try {
                if (typeof e[i] != "function") {
                  var h = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw h.name = "Invariant Violation", h;
                }
                a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (s) {
                a = s;
              }
              a && !(a instanceof Error) && (U(o), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), U(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, U(o), b("Failed %s type: %s", t, a.message), U(null));
            }
        }
      }
      var $ = S.ReactCurrentOwner, q = Object.prototype.hasOwnProperty, Fe = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, ge, _e, B;
      B = {};
      function Me(e) {
        if (q.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function qe(e) {
        if (q.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Be(e, r) {
        if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
          var t = y($.current.type);
          B[t] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', y($.current.type), e.ref), B[t] = !0);
        }
      }
      function Ge(e, r) {
        {
          var t = function() {
            ge || (ge = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
          };
          t.isReactWarning = !0, Object.defineProperty(e, "key", {
            get: t,
            configurable: !0
          });
        }
      }
      function Je(e, r) {
        {
          var t = function() {
            _e || (_e = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
          };
          t.isReactWarning = !0, Object.defineProperty(e, "ref", {
            get: t,
            configurable: !0
          });
        }
      }
      var ze = function(e, r, t, n, o, u, i) {
        var a = {
          $$typeof: w,
          type: e,
          key: r,
          ref: t,
          props: i,
          _owner: u
        };
        return a._store = {}, Object.defineProperty(a._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(a, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: n
        }), Object.defineProperty(a, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
      };
      function Ke(e, r, t, n, o) {
        {
          var u, i = {}, a = null, h = null;
          t !== void 0 && (a = "" + t), qe(r) && (a = "" + r.key), Me(r) && (h = r.ref, Be(r, o));
          for (u in r)
            q.call(r, u) && !Fe.hasOwnProperty(u) && (i[u] = r[u]);
          if (e && e.defaultProps) {
            var s = e.defaultProps;
            for (u in s)
              i[u] === void 0 && (i[u] = s[u]);
          }
          if (a || h) {
            var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
            a && Ge(i, v), h && Je(i, v);
          }
          return ze(e, a, h, o, n, $.current, i);
        }
      }
      var G = S.ReactCurrentOwner, he = S.ReactDebugCurrentFrame;
      function k(e) {
        if (e) {
          var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
          he.setExtraStackFrame(t);
        } else
          he.setExtraStackFrame(null);
      }
      var J;
      J = !1;
      function z(e) {
        return typeof e == "object" && e !== null && e.$$typeof === w;
      }
      function Ee() {
        {
          if (G.current) {
            var e = y(G.current.type);
            if (e)
              return `

Check the render method of \`` + e + "`.";
          }
          return "";
        }
      }
      function He(e) {
        {
          if (e !== void 0) {
            var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
            return `

Check your code at ` + r + ":" + t + ".";
          }
          return "";
        }
      }
      var Re = {};
      function Xe(e) {
        {
          var r = Ee();
          if (!r) {
            var t = typeof e == "string" ? e : e.displayName || e.name;
            t && (r = `

Check the top-level render call using <` + t + ">.");
          }
          return r;
        }
      }
      function be(e, r) {
        {
          if (!e._store || e._store.validated || e.key != null)
            return;
          e._store.validated = !0;
          var t = Xe(r);
          if (Re[t])
            return;
          Re[t] = !0;
          var n = "";
          e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + y(e._owner.type) + "."), k(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
        }
      }
      function me(e, r) {
        {
          if (typeof e != "object")
            return;
          if (Array.isArray(e))
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              z(n) && be(n, r);
            }
          else if (z(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var o = Ae(e);
            if (typeof o == "function" && o !== e.entries)
              for (var u = o.call(e), i; !(i = u.next()).done; )
                z(i.value) && be(i.value, r);
          }
        }
      }
      function Ze(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var t;
          if (typeof r == "function")
            t = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === g || r.$$typeof === _))
            t = r.propTypes;
          else
            return;
          if (t) {
            var n = y(r);
            Ve(t, e.props, "prop", n, e);
          } else if (r.PropTypes !== void 0 && !J) {
            J = !0;
            var o = y(r);
            b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Qe(e) {
        {
          for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
            var n = r[t];
            if (n !== "children" && n !== "key") {
              k(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
              break;
            }
          }
          e.ref !== null && (k(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
        }
      }
      function Oe(e, r, t, n, o, u) {
        {
          var i = $e(e);
          if (!i) {
            var a = "";
            (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var h = He(o);
            h ? a += h : a += Ee();
            var s;
            e === null ? s = "null" : Array.isArray(e) ? s = "array" : e !== void 0 && e.$$typeof === w ? (s = "<" + (y(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
          }
          var v = Ke(e, r, t, o, u);
          if (v == null)
            return v;
          if (i) {
            var x = r.children;
            if (x !== void 0)
              if (n)
                if (Array.isArray(x)) {
                  for (var A = 0; A < x.length; A++)
                    me(x[A], e);
                  Object.freeze && Object.freeze(x);
                } else
                  b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                me(x, e);
          }
          return e === p.Fragment ? Qe(v) : Ze(v), v;
        }
      }
      function er(e, r, t) {
        return Oe(e, r, t, !0);
      }
      function rr(e, r, t) {
        return Oe(e, r, t, !1);
      }
      var tr = rr, nr = er;
      p.jsx = tr, p.jsxs = nr;
    }();
  }(H)), H;
}
(function(p) {
  process.env.NODE_ENV === "production" ? p.exports = ur() : p.exports = fr();
})(Ce);
const we = Ce.exports.jsx, cr = ar.div`
  box-sizing: border-box;
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 ${(p) => p.theme.spacing.unit * 4}px;
`, dr = ({
  children: p,
  style: j,
  className: E
}) => /* @__PURE__ */ we(ir, {
  theme: or,
  children: /* @__PURE__ */ we(cr, {
    className: E,
    style: j,
    children: p
  })
});
export {
  dr as Container
};
