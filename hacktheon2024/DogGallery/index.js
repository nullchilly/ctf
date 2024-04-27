(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload"))
      return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
      r(o);
  new MutationObserver(o=>{
      for (const l of o)
          if (l.type === "childList")
              for (const i of l.addedNodes)
                  i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
  }
  ).observe(document, {
      childList: !0,
      subtree: !0
  });
  function n(o) {
      const l = {};
      return o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials" ? l.credentials = "include" : o.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin",
      l
  }
  function r(o) {
      if (o.ep)
          return;
      o.ep = !0;
      const l = n(o);
      fetch(o.href, l)
  }
}
)();
function up(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var tc = {
  exports: {}
}
, wl = {}
, nc = {
  exports: {}
}
, O = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Jr = Symbol.for("react.element")
, sp = Symbol.for("react.portal")
, ap = Symbol.for("react.fragment")
, cp = Symbol.for("react.strict_mode")
, dp = Symbol.for("react.profiler")
, fp = Symbol.for("react.provider")
, pp = Symbol.for("react.context")
, hp = Symbol.for("react.forward_ref")
, vp = Symbol.for("react.suspense")
, mp = Symbol.for("react.memo")
, gp = Symbol.for("react.lazy")
, Ts = Symbol.iterator;
function yp(e) {
  return e === null || typeof e != "object" ? null : (e = Ts && e[Ts] || e["@@iterator"],
  typeof e == "function" ? e : null)
}
var rc = {
  isMounted: function() {
      return !1
  },
  enqueueForceUpdate: function() {},
  enqueueReplaceState: function() {},
  enqueueSetState: function() {}
}
, oc = Object.assign
, lc = {};
function Xn(e, t, n) {
  this.props = e,
  this.context = t,
  this.refs = lc,
  this.updater = n || rc
}
Xn.prototype.isReactComponent = {};
Xn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState")
}
;
Xn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function ic() {}
ic.prototype = Xn.prototype;
function yu(e, t, n) {
  this.props = e,
  this.context = t,
  this.refs = lc,
  this.updater = n || rc
}
var wu = yu.prototype = new ic;
wu.constructor = yu;
oc(wu, Xn.prototype);
wu.isPureReactComponent = !0;
var Ms = Array.isArray
, uc = Object.prototype.hasOwnProperty
, Su = {
  current: null
}
, sc = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function ac(e, t, n) {
  var r, o = {}, l = null, i = null;
  if (t != null)
      for (r in t.ref !== void 0 && (i = t.ref),
      t.key !== void 0 && (l = "" + t.key),
      t)
          uc.call(t, r) && !sc.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1)
      o.children = n;
  else if (1 < u) {
      for (var s = Array(u), a = 0; a < u; a++)
          s[a] = arguments[a + 2];
      o.children = s
  }
  if (e && e.defaultProps)
      for (r in u = e.defaultProps,
      u)
          o[r] === void 0 && (o[r] = u[r]);
  return {
      $$typeof: Jr,
      type: e,
      key: l,
      ref: i,
      props: o,
      _owner: Su.current
  }
}
function wp(e, t) {
  return {
      $$typeof: Jr,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner
  }
}
function xu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Jr
}
function Sp(e) {
  var t = {
      "=": "=0",
      ":": "=2"
  };
  return "$" + e.replace(/[=:]/g, function(n) {
      return t[n]
  })
}
var zs = /\/+/g;
function Hl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Sp("" + e.key) : t.toString(36)
}
function _o(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null)
      i = !0;
  else
      switch (l) {
      case "string":
      case "number":
          i = !0;
          break;
      case "object":
          switch (e.$$typeof) {
          case Jr:
          case sp:
              i = !0
          }
      }
  if (i)
      return i = e,
      o = o(i),
      e = r === "" ? "." + Hl(i, 0) : r,
      Ms(o) ? (n = "",
      e != null && (n = e.replace(zs, "$&/") + "/"),
      _o(o, t, n, "", function(a) {
          return a
      })) : o != null && (xu(o) && (o = wp(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(zs, "$&/") + "/") + e)),
      t.push(o)),
      1;
  if (i = 0,
  r = r === "" ? "." : r + ":",
  Ms(e))
      for (var u = 0; u < e.length; u++) {
          l = e[u];
          var s = r + Hl(l, u);
          i += _o(l, t, n, s, o)
      }
  else if (s = yp(e),
  typeof s == "function")
      for (e = s.call(e),
      u = 0; !(l = e.next()).done; )
          l = l.value,
          s = r + Hl(l, u++),
          i += _o(l, t, n, s, o);
  else if (l === "object")
      throw t = String(e),
      Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i
}
function ao(e, t, n) {
  if (e == null)
      return e;
  var r = []
    , o = 0;
  return _o(e, r, "", "", function(l) {
      return t.call(n, l, o++)
  }),
  r
}
function xp(e) {
  if (e._status === -1) {
      var t = e._result;
      t = t(),
      t.then(function(n) {
          (e._status === 0 || e._status === -1) && (e._status = 1,
          e._result = n)
      }, function(n) {
          (e._status === 0 || e._status === -1) && (e._status = 2,
          e._result = n)
      }),
      e._status === -1 && (e._status = 0,
      e._result = t)
  }
  if (e._status === 1)
      return e._result.default;
  throw e._result
}
var Se = {
  current: null
}
, To = {
  transition: null
}
, kp = {
  ReactCurrentDispatcher: Se,
  ReactCurrentBatchConfig: To,
  ReactCurrentOwner: Su
};
O.Children = {
  map: ao,
  forEach: function(e, t, n) {
      ao(e, function() {
          t.apply(this, arguments)
      }, n)
  },
  count: function(e) {
      var t = 0;
      return ao(e, function() {
          t++
      }),
      t
  },
  toArray: function(e) {
      return ao(e, function(t) {
          return t
      }) || []
  },
  only: function(e) {
      if (!xu(e))
          throw Error("React.Children.only expected to receive a single React element child.");
      return e
  }
};
O.Component = Xn;
O.Fragment = ap;
O.Profiler = dp;
O.PureComponent = yu;
O.StrictMode = cp;
O.Suspense = vp;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kp;
O.cloneElement = function(e, t, n) {
  if (e == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = oc({}, e.props)
    , o = e.key
    , l = e.ref
    , i = e._owner;
  if (t != null) {
      if (t.ref !== void 0 && (l = t.ref,
      i = Su.current),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
          var u = e.type.defaultProps;
      for (s in t)
          uc.call(t, s) && !sc.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s])
  }
  var s = arguments.length - 2;
  if (s === 1)
      r.children = n;
  else if (1 < s) {
      u = Array(s);
      for (var a = 0; a < s; a++)
          u[a] = arguments[a + 2];
      r.children = u
  }
  return {
      $$typeof: Jr,
      type: e.type,
      key: o,
      ref: l,
      props: r,
      _owner: i
  }
}
;
O.createContext = function(e) {
  return e = {
      $$typeof: pp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
  },
  e.Provider = {
      $$typeof: fp,
      _context: e
  },
  e.Consumer = e
}
;
O.createElement = ac;
O.createFactory = function(e) {
  var t = ac.bind(null, e);
  return t.type = e,
  t
}
;
O.createRef = function() {
  return {
      current: null
  }
}
;
O.forwardRef = function(e) {
  return {
      $$typeof: hp,
      render: e
  }
}
;
O.isValidElement = xu;
O.lazy = function(e) {
  return {
      $$typeof: gp,
      _payload: {
          _status: -1,
          _result: e
      },
      _init: xp
  }
}
;
O.memo = function(e, t) {
  return {
      $$typeof: mp,
      type: e,
      compare: t === void 0 ? null : t
  }
}
;
O.startTransition = function(e) {
  var t = To.transition;
  To.transition = {};
  try {
      e()
  } finally {
      To.transition = t
  }
}
;
O.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.")
}
;
O.useCallback = function(e, t) {
  return Se.current.useCallback(e, t)
}
;
O.useContext = function(e) {
  return Se.current.useContext(e)
}
;
O.useDebugValue = function() {}
;
O.useDeferredValue = function(e) {
  return Se.current.useDeferredValue(e)
}
;
O.useEffect = function(e, t) {
  return Se.current.useEffect(e, t)
}
;
O.useId = function() {
  return Se.current.useId()
}
;
O.useImperativeHandle = function(e, t, n) {
  return Se.current.useImperativeHandle(e, t, n)
}
;
O.useInsertionEffect = function(e, t) {
  return Se.current.useInsertionEffect(e, t)
}
;
O.useLayoutEffect = function(e, t) {
  return Se.current.useLayoutEffect(e, t)
}
;
O.useMemo = function(e, t) {
  return Se.current.useMemo(e, t)
}
;
O.useReducer = function(e, t, n) {
  return Se.current.useReducer(e, t, n)
}
;
O.useRef = function(e) {
  return Se.current.useRef(e)
}
;
O.useState = function(e) {
  return Se.current.useState(e)
}
;
O.useSyncExternalStore = function(e, t, n) {
  return Se.current.useSyncExternalStore(e, t, n)
}
;
O.useTransition = function() {
  return Se.current.useTransition()
}
;
O.version = "18.2.0";
nc.exports = O;
var g = nc.exports;
const H = up(g);
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Cp = g
, Ep = Symbol.for("react.element")
, Rp = Symbol.for("react.fragment")
, Pp = Object.prototype.hasOwnProperty
, Dp = Cp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
, Np = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function cc(e, t, n) {
  var r, o = {}, l = null, i = null;
  n !== void 0 && (l = "" + n),
  t.key !== void 0 && (l = "" + t.key),
  t.ref !== void 0 && (i = t.ref);
  for (r in t)
      Pp.call(t, r) && !Np.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
      for (r in t = e.defaultProps,
      t)
          o[r] === void 0 && (o[r] = t[r]);
  return {
      $$typeof: Ep,
      type: e,
      key: l,
      ref: i,
      props: o,
      _owner: Dp.current
  }
}
wl.Fragment = Rp;
wl.jsx = cc;
wl.jsxs = cc;
tc.exports = wl;
var ce = tc.exports
, ki = {}
, dc = {
  exports: {}
}
, Ae = {}
, fc = {
  exports: {}
}
, pc = {};
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function(e) {
  function t(D, T) {
      var z = D.length;
      D.push(T);
      e: for (; 0 < z; ) {
          var U = z - 1 >>> 1
            , A = D[U];
          if (0 < o(A, T))
              D[U] = T,
              D[z] = A,
              z = U;
          else
              break e
      }
  }
  function n(D) {
      return D.length === 0 ? null : D[0]
  }
  function r(D) {
      if (D.length === 0)
          return null;
      var T = D[0]
        , z = D.pop();
      if (z !== T) {
          D[0] = z;
          e: for (var U = 0, A = D.length, Ce = A >>> 1; U < Ce; ) {
              var ge = 2 * (U + 1) - 1
                , dt = D[ge]
                , Z = ge + 1
                , ft = D[Z];
              if (0 > o(dt, z))
                  Z < A && 0 > o(ft, dt) ? (D[U] = ft,
                  D[Z] = z,
                  U = Z) : (D[U] = dt,
                  D[ge] = z,
                  U = ge);
              else if (Z < A && 0 > o(ft, z))
                  D[U] = ft,
                  D[Z] = z,
                  U = Z;
              else
                  break e
          }
      }
      return T
  }
  function o(D, T) {
      var z = D.sortIndex - T.sortIndex;
      return z !== 0 ? z : D.id - T.id
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
      var l = performance;
      e.unstable_now = function() {
          return l.now()
      }
  } else {
      var i = Date
        , u = i.now();
      e.unstable_now = function() {
          return i.now() - u
      }
  }
  var s = []
    , a = []
    , d = 1
    , c = null
    , p = 3
    , m = !1
    , y = !1
    , w = !1
    , k = typeof setTimeout == "function" ? setTimeout : null
    , h = typeof clearTimeout == "function" ? clearTimeout : null
    , f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(D) {
      for (var T = n(a); T !== null; ) {
          if (T.callback === null)
              r(a);
          else if (T.startTime <= D)
              r(a),
              T.sortIndex = T.expirationTime,
              t(s, T);
          else
              break;
          T = n(a)
      }
  }
  function S(D) {
      if (w = !1,
      v(D),
      !y)
          if (n(s) !== null)
              y = !0,
              Rt(x);
          else {
              var T = n(a);
              T !== null && ue(S, T.startTime - D)
          }
  }
  function x(D, T) {
      y = !1,
      w && (w = !1,
      h(P),
      P = -1),
      m = !0;
      var z = p;
      try {
          for (v(T),
          c = n(s); c !== null && (!(c.expirationTime > T) || D && !L()); ) {
              var U = c.callback;
              if (typeof U == "function") {
                  c.callback = null,
                  p = c.priorityLevel;
                  var A = U(c.expirationTime <= T);
                  T = e.unstable_now(),
                  typeof A == "function" ? c.callback = A : c === n(s) && r(s),
                  v(T)
              } else
                  r(s);
              c = n(s)
          }
          if (c !== null)
              var Ce = !0;
          else {
              var ge = n(a);
              ge !== null && ue(S, ge.startTime - T),
              Ce = !1
          }
          return Ce
      } finally {
          c = null,
          p = z,
          m = !1
      }
  }
  var E = !1
    , C = null
    , P = -1
    , M = 5
    , _ = -1;
  function L() {
      return !(e.unstable_now() - _ < M)
  }
  function le() {
      if (C !== null) {
          var D = e.unstable_now();
          _ = D;
          var T = !0;
          try {
              T = C(!0, D)
          } finally {
              T ? ie() : (E = !1,
              C = null)
          }
      } else
          E = !1
  }
  var ie;
  if (typeof f == "function")
      ie = function() {
          f(le)
      }
      ;
  else if (typeof MessageChannel < "u") {
      var _e = new MessageChannel
        , Zt = _e.port2;
      _e.port1.onmessage = le,
      ie = function() {
          Zt.postMessage(null)
      }
  } else
      ie = function() {
          k(le, 0)
      }
      ;
  function Rt(D) {
      C = D,
      E || (E = !0,
      ie())
  }
  function ue(D, T) {
      P = k(function() {
          D(e.unstable_now())
      }, T)
  }
  e.unstable_IdlePriority = 5,
  e.unstable_ImmediatePriority = 1,
  e.unstable_LowPriority = 4,
  e.unstable_NormalPriority = 3,
  e.unstable_Profiling = null,
  e.unstable_UserBlockingPriority = 2,
  e.unstable_cancelCallback = function(D) {
      D.callback = null
  }
  ,
  e.unstable_continueExecution = function() {
      y || m || (y = !0,
      Rt(x))
  }
  ,
  e.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < D ? Math.floor(1e3 / D) : 5
  }
  ,
  e.unstable_getCurrentPriorityLevel = function() {
      return p
  }
  ,
  e.unstable_getFirstCallbackNode = function() {
      return n(s)
  }
  ,
  e.unstable_next = function(D) {
      switch (p) {
      case 1:
      case 2:
      case 3:
          var T = 3;
          break;
      default:
          T = p
      }
      var z = p;
      p = T;
      try {
          return D()
      } finally {
          p = z
      }
  }
  ,
  e.unstable_pauseExecution = function() {}
  ,
  e.unstable_requestPaint = function() {}
  ,
  e.unstable_runWithPriority = function(D, T) {
      switch (D) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
          break;
      default:
          D = 3
      }
      var z = p;
      p = D;
      try {
          return T()
      } finally {
          p = z
      }
  }
  ,
  e.unstable_scheduleCallback = function(D, T, z) {
      var U = e.unstable_now();
      switch (typeof z == "object" && z !== null ? (z = z.delay,
      z = typeof z == "number" && 0 < z ? U + z : U) : z = U,
      D) {
      case 1:
          var A = -1;
          break;
      case 2:
          A = 250;
          break;
      case 5:
          A = 1073741823;
          break;
      case 4:
          A = 1e4;
          break;
      default:
          A = 5e3
      }
      return A = z + A,
      D = {
          id: d++,
          callback: T,
          priorityLevel: D,
          startTime: z,
          expirationTime: A,
          sortIndex: -1
      },
      z > U ? (D.sortIndex = z,
      t(a, D),
      n(s) === null && D === n(a) && (w ? (h(P),
      P = -1) : w = !0,
      ue(S, z - U))) : (D.sortIndex = A,
      t(s, D),
      y || m || (y = !0,
      Rt(x))),
      D
  }
  ,
  e.unstable_shouldYield = L,
  e.unstable_wrapCallback = function(D) {
      var T = p;
      return function() {
          var z = p;
          p = T;
          try {
              return D.apply(this, arguments)
          } finally {
              p = z
          }
      }
  }
}
)(pc);
fc.exports = pc;
var _p = fc.exports;
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var hc = g
, Ie = _p;
function R(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
      t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var vc = new Set
, Tr = {};
function pn(e, t) {
  Bn(e, t),
  Bn(e + "Capture", t)
}
function Bn(e, t) {
  for (Tr[e] = t,
  e = 0; e < t.length; e++)
      vc.add(t[e])
}
var St = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
, Ci = Object.prototype.hasOwnProperty
, Tp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
, Ls = {}
, Os = {};
function Mp(e) {
  return Ci.call(Os, e) ? !0 : Ci.call(Ls, e) ? !1 : Tp.test(e) ? Os[e] = !0 : (Ls[e] = !0,
  !1)
}
function zp(e, t, n, r) {
  if (n !== null && n.type === 0)
      return !1;
  switch (typeof t) {
  case "function":
  case "symbol":
      return !0;
  case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
      e !== "data-" && e !== "aria-");
  default:
      return !1
  }
}
function Lp(e, t, n, r) {
  if (t === null || typeof t > "u" || zp(e, t, n, r))
      return !0;
  if (r)
      return !1;
  if (n !== null)
      switch (n.type) {
      case 3:
          return !t;
      case 4:
          return t === !1;
      case 5:
          return isNaN(t);
      case 6:
          return isNaN(t) || 1 > t
      }
  return !1
}
function xe(e, t, n, r, o, l, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4,
  this.attributeName = r,
  this.attributeNamespace = o,
  this.mustUseProperty = n,
  this.propertyName = e,
  this.type = t,
  this.sanitizeURL = l,
  this.removeEmptyString = i
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  fe[e] = new xe(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  fe[t] = new xe(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  fe[e] = new xe(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  fe[e] = new xe(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  fe[e] = new xe(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  fe[e] = new xe(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
  fe[e] = new xe(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
  fe[e] = new xe(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
  fe[e] = new xe(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var ku = /[\-:]([a-z])/g;
function Cu(e) {
  return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(ku, Cu);
  fe[t] = new xe(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ku, Cu);
  fe[t] = new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ku, Cu);
  fe[t] = new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  fe[e] = new xe(e,1,!1,e.toLowerCase(),null,!1,!1)
});
fe.xlinkHref = new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
  fe[e] = new xe(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Eu(e, t, n, r) {
  var o = fe.hasOwnProperty(t) ? fe[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Lp(t, n, o, r) && (n = null),
  r || o === null ? Mp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
  r = o.attributeNamespace,
  n === null ? e.removeAttribute(t) : (o = o.type,
  n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Et = hc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
, co = Symbol.for("react.element")
, kn = Symbol.for("react.portal")
, Cn = Symbol.for("react.fragment")
, Ru = Symbol.for("react.strict_mode")
, Ei = Symbol.for("react.profiler")
, mc = Symbol.for("react.provider")
, gc = Symbol.for("react.context")
, Pu = Symbol.for("react.forward_ref")
, Ri = Symbol.for("react.suspense")
, Pi = Symbol.for("react.suspense_list")
, Du = Symbol.for("react.memo")
, Mt = Symbol.for("react.lazy")
, yc = Symbol.for("react.offscreen")
, Is = Symbol.iterator;
function ir(e) {
  return e === null || typeof e != "object" ? null : (e = Is && e[Is] || e["@@iterator"],
  typeof e == "function" ? e : null)
}
var X = Object.assign, Ql;
function hr(e) {
  if (Ql === void 0)
      try {
          throw Error()
      } catch (n) {
          var t = n.stack.trim().match(/\n( *(at )?)/);
          Ql = t && t[1] || ""
      }
  return `
` + Ql + e
}
var Kl = !1;
function Yl(e, t) {
  if (!e || Kl)
      return "";
  Kl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
      if (t)
          if (t = function() {
              throw Error()
          }
          ,
          Object.defineProperty(t.prototype, "props", {
              set: function() {
                  throw Error()
              }
          }),
          typeof Reflect == "object" && Reflect.construct) {
              try {
                  Reflect.construct(t, [])
              } catch (a) {
                  var r = a
              }
              Reflect.construct(e, [], t)
          } else {
              try {
                  t.call()
              } catch (a) {
                  r = a
              }
              e.call(t.prototype)
          }
      else {
          try {
              throw Error()
          } catch (a) {
              r = a
          }
          e()
      }
  } catch (a) {
      if (a && r && typeof a.stack == "string") {
          for (var o = a.stack.split(`
`), l = r.stack.split(`
`), i = o.length - 1, u = l.length - 1; 1 <= i && 0 <= u && o[i] !== l[u]; )
              u--;
          for (; 1 <= i && 0 <= u; i--,
          u--)
              if (o[i] !== l[u]) {
                  if (i !== 1 || u !== 1)
                      do
                          if (i--,
                          u--,
                          0 > u || o[i] !== l[u]) {
                              var s = `
` + o[i].replace(" at new ", " at ");
                              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)),
                              s
                          }
                      while (1 <= i && 0 <= u);
                  break
              }
      }
  } finally {
      Kl = !1,
      Error.prepareStackTrace = n
  }
  return (e = e ? e.displayName || e.name : "") ? hr(e) : ""
}
function Op(e) {
  switch (e.tag) {
  case 5:
      return hr(e.type);
  case 16:
      return hr("Lazy");
  case 13:
      return hr("Suspense");
  case 19:
      return hr("SuspenseList");
  case 0:
  case 2:
  case 15:
      return e = Yl(e.type, !1),
      e;
  case 11:
      return e = Yl(e.type.render, !1),
      e;
  case 1:
      return e = Yl(e.type, !0),
      e;
  default:
      return ""
  }
}
function Di(e) {
  if (e == null)
      return null;
  if (typeof e == "function")
      return e.displayName || e.name || null;
  if (typeof e == "string")
      return e;
  switch (e) {
  case Cn:
      return "Fragment";
  case kn:
      return "Portal";
  case Ei:
      return "Profiler";
  case Ru:
      return "StrictMode";
  case Ri:
      return "Suspense";
  case Pi:
      return "SuspenseList"
  }
  if (typeof e == "object")
      switch (e.$$typeof) {
      case gc:
          return (e.displayName || "Context") + ".Consumer";
      case mc:
          return (e._context.displayName || "Context") + ".Provider";
      case Pu:
          var t = e.render;
          return e = e.displayName,
          e || (e = t.displayName || t.name || "",
          e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
          e;
      case Du:
          return t = e.displayName || null,
          t !== null ? t : Di(e.type) || "Memo";
      case Mt:
          t = e._payload,
          e = e._init;
          try {
              return Di(e(t))
          } catch {}
      }
  return null
}
function Ip(e) {
  var t = e.type;
  switch (e.tag) {
  case 24:
      return "Cache";
  case 9:
      return (t.displayName || "Context") + ".Consumer";
  case 10:
      return (t._context.displayName || "Context") + ".Provider";
  case 18:
      return "DehydratedFragment";
  case 11:
      return e = t.render,
      e = e.displayName || e.name || "",
      t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
  case 7:
      return "Fragment";
  case 5:
      return t;
  case 4:
      return "Portal";
  case 3:
      return "Root";
  case 6:
      return "Text";
  case 16:
      return Di(t);
  case 8:
      return t === Ru ? "StrictMode" : "Mode";
  case 22:
      return "Offscreen";
  case 12:
      return "Profiler";
  case 21:
      return "Scope";
  case 13:
      return "Suspense";
  case 19:
      return "SuspenseList";
  case 25:
      return "TracingMarker";
  case 1:
  case 0:
  case 17:
  case 2:
  case 14:
  case 15:
      if (typeof t == "function")
          return t.displayName || t.name || null;
      if (typeof t == "string")
          return t
  }
  return null
}
function Kt(e) {
  switch (typeof e) {
  case "boolean":
  case "number":
  case "string":
  case "undefined":
      return e;
  case "object":
      return e;
  default:
      return ""
  }
}
function wc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Ap(e) {
  var t = wc(e) ? "checked" : "value"
    , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
    , r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var o = n.get
        , l = n.set;
      return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
              return o.call(this)
          },
          set: function(i) {
              r = "" + i,
              l.call(this, i)
          }
      }),
      Object.defineProperty(e, t, {
          enumerable: n.enumerable
      }),
      {
          getValue: function() {
              return r
          },
          setValue: function(i) {
              r = "" + i
          },
          stopTracking: function() {
              e._valueTracker = null,
              delete e[t]
          }
      }
  }
}
function fo(e) {
  e._valueTracker || (e._valueTracker = Ap(e))
}
function Sc(e) {
  if (!e)
      return !1;
  var t = e._valueTracker;
  if (!t)
      return !0;
  var n = t.getValue()
    , r = "";
  return e && (r = wc(e) ? e.checked ? "true" : "false" : e.value),
  e = r,
  e !== n ? (t.setValue(e),
  !0) : !1
}
function Wo(e) {
  if (e = e || (typeof document < "u" ? document : void 0),
  typeof e > "u")
      return null;
  try {
      return e.activeElement || e.body
  } catch {
      return e.body
  }
}
function Ni(e, t) {
  var n = t.checked;
  return X({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked
  })
}
function As(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue
    , r = t.checked != null ? t.checked : t.defaultChecked;
  n = Kt(t.value != null ? t.value : n),
  e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
  }
}
function xc(e, t) {
  t = t.checked,
  t != null && Eu(e, "checked", t, !1)
}
function _i(e, t) {
  xc(e, t);
  var n = Kt(t.value)
    , r = t.type;
  if (n != null)
      r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return
  }
  t.hasOwnProperty("value") ? Ti(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ti(e, t.type, Kt(t.defaultValue)),
  t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Fs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
          return;
      t = "" + e._wrapperState.initialValue,
      n || t === e.value || (e.value = t),
      e.defaultValue = t
  }
  n = e.name,
  n !== "" && (e.name = ""),
  e.defaultChecked = !!e._wrapperState.initialChecked,
  n !== "" && (e.name = n)
}
function Ti(e, t, n) {
  (t !== "number" || Wo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var vr = Array.isArray;
function On(e, t, n, r) {
  if (e = e.options,
  t) {
      t = {};
      for (var o = 0; o < n.length; o++)
          t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
          o = t.hasOwnProperty("$" + e[n].value),
          e[n].selected !== o && (e[n].selected = o),
          o && r && (e[n].defaultSelected = !0)
  } else {
      for (n = "" + Kt(n),
      t = null,
      o = 0; o < e.length; o++) {
          if (e[o].value === n) {
              e[o].selected = !0,
              r && (e[o].defaultSelected = !0);
              return
          }
          t !== null || e[o].disabled || (t = e[o])
      }
      t !== null && (t.selected = !0)
  }
}
function Mi(e, t) {
  if (t.dangerouslySetInnerHTML != null)
      throw Error(R(91));
  return X({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue
  })
}
function js(e, t) {
  var n = t.value;
  if (n == null) {
      if (n = t.children,
      t = t.defaultValue,
      n != null) {
          if (t != null)
              throw Error(R(92));
          if (vr(n)) {
              if (1 < n.length)
                  throw Error(R(93));
              n = n[0]
          }
          t = n
      }
      t == null && (t = ""),
      n = t
  }
  e._wrapperState = {
      initialValue: Kt(n)
  }
}
function kc(e, t) {
  var n = Kt(t.value)
    , r = Kt(t.defaultValue);
  n != null && (n = "" + n,
  n !== e.value && (e.value = n),
  t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
  r != null && (e.defaultValue = "" + r)
}
function $s(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Cc(e) {
  switch (e) {
  case "svg":
      return "http://www.w3.org/2000/svg";
  case "math":
      return "http://www.w3.org/1998/Math/MathML";
  default:
      return "http://www.w3.org/1999/xhtml"
  }
}
function zi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Cc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var po, Ec = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
      MSApp.execUnsafeLocalFunction(function() {
          return e(t, n, r, o)
      })
  }
  : e
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
      e.innerHTML = t;
  else {
      for (po = po || document.createElement("div"),
      po.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
      t = po.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
      for (; t.firstChild; )
          e.appendChild(t.firstChild)
  }
});
function Mr(e, t) {
  if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return
      }
  }
  e.textContent = t
}
var yr = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}
, Fp = ["Webkit", "ms", "Moz", "O"];
Object.keys(yr).forEach(function(e) {
  Fp.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1),
      yr[t] = yr[e]
  })
});
function Rc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || yr.hasOwnProperty(e) && yr[e] ? ("" + t).trim() : t + "px"
}
function Pc(e, t) {
  e = e.style;
  for (var n in t)
      if (t.hasOwnProperty(n)) {
          var r = n.indexOf("--") === 0
            , o = Rc(n, t[n], r);
          n === "float" && (n = "cssFloat"),
          r ? e.setProperty(n, o) : e[n] = o
      }
}
var jp = X({
  menuitem: !0
}, {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
});
function Li(e, t) {
  if (t) {
      if (jp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw Error(R(137, e));
      if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
              throw Error(R(60));
          if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
              throw Error(R(61))
      }
      if (t.style != null && typeof t.style != "object")
          throw Error(R(62))
  }
}
function Oi(e, t) {
  if (e.indexOf("-") === -1)
      return typeof t.is == "string";
  switch (e) {
  case "annotation-xml":
  case "color-profile":
  case "font-face":
  case "font-face-src":
  case "font-face-uri":
  case "font-face-format":
  case "font-face-name":
  case "missing-glyph":
      return !1;
  default:
      return !0
  }
}
var Ii = null;
function Nu(e) {
  return e = e.target || e.srcElement || window,
  e.correspondingUseElement && (e = e.correspondingUseElement),
  e.nodeType === 3 ? e.parentNode : e
}
var Ai = null
, In = null
, An = null;
function Us(e) {
  if (e = br(e)) {
      if (typeof Ai != "function")
          throw Error(R(280));
      var t = e.stateNode;
      t && (t = El(t),
      Ai(e.stateNode, e.type, t))
  }
}
function Dc(e) {
  In ? An ? An.push(e) : An = [e] : In = e
}
function Nc() {
  if (In) {
      var e = In
        , t = An;
      if (An = In = null,
      Us(e),
      t)
          for (e = 0; e < t.length; e++)
              Us(t[e])
  }
}
function _c(e, t) {
  return e(t)
}
function Tc() {}
var Xl = !1;
function Mc(e, t, n) {
  if (Xl)
      return e(t, n);
  Xl = !0;
  try {
      return _c(e, t, n)
  } finally {
      Xl = !1,
      (In !== null || An !== null) && (Tc(),
      Nc())
  }
}
function zr(e, t) {
  var n = e.stateNode;
  if (n === null)
      return null;
  var r = El(n);
  if (r === null)
      return null;
  n = r[t];
  e: switch (t) {
  case "onClick":
  case "onClickCapture":
  case "onDoubleClick":
  case "onDoubleClickCapture":
  case "onMouseDown":
  case "onMouseDownCapture":
  case "onMouseMove":
  case "onMouseMoveCapture":
  case "onMouseUp":
  case "onMouseUpCapture":
  case "onMouseEnter":
      (r = !r.disabled) || (e = e.type,
      r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
      e = !r;
      break e;
  default:
      e = !1
  }
  if (e)
      return null;
  if (n && typeof n != "function")
      throw Error(R(231, t, typeof n));
  return n
}
var Fi = !1;
if (St)
  try {
      var ur = {};
      Object.defineProperty(ur, "passive", {
          get: function() {
              Fi = !0
          }
      }),
      window.addEventListener("test", ur, ur),
      window.removeEventListener("test", ur, ur)
  } catch {
      Fi = !1
  }
function $p(e, t, n, r, o, l, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
      t.apply(n, a)
  } catch (d) {
      this.onError(d)
  }
}
var wr = !1
, Vo = null
, Ho = !1
, ji = null
, Up = {
  onError: function(e) {
      wr = !0,
      Vo = e
  }
};
function Bp(e, t, n, r, o, l, i, u, s) {
  wr = !1,
  Vo = null,
  $p.apply(Up, arguments)
}
function Wp(e, t, n, r, o, l, i, u, s) {
  if (Bp.apply(this, arguments),
  wr) {
      if (wr) {
          var a = Vo;
          wr = !1,
          Vo = null
      } else
          throw Error(R(198));
      Ho || (Ho = !0,
      ji = a)
  }
}
function hn(e) {
  var t = e
    , n = e;
  if (e.alternate)
      for (; t.return; )
          t = t.return;
  else {
      e = t;
      do
          t = e,
          t.flags & 4098 && (n = t.return),
          e = t.return;
      while (e)
  }
  return t.tag === 3 ? n : null
}
function zc(e) {
  if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate,
      e !== null && (t = e.memoizedState)),
      t !== null)
          return t.dehydrated
  }
  return null
}
function Bs(e) {
  if (hn(e) !== e)
      throw Error(R(188))
}
function Vp(e) {
  var t = e.alternate;
  if (!t) {
      if (t = hn(e),
      t === null)
          throw Error(R(188));
      return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
      var o = n.return;
      if (o === null)
          break;
      var l = o.alternate;
      if (l === null) {
          if (r = o.return,
          r !== null) {
              n = r;
              continue
          }
          break
      }
      if (o.child === l.child) {
          for (l = o.child; l; ) {
              if (l === n)
                  return Bs(o),
                  e;
              if (l === r)
                  return Bs(o),
                  t;
              l = l.sibling
          }
          throw Error(R(188))
      }
      if (n.return !== r.return)
          n = o,
          r = l;
      else {
          for (var i = !1, u = o.child; u; ) {
              if (u === n) {
                  i = !0,
                  n = o,
                  r = l;
                  break
              }
              if (u === r) {
                  i = !0,
                  r = o,
                  n = l;
                  break
              }
              u = u.sibling
          }
          if (!i) {
              for (u = l.child; u; ) {
                  if (u === n) {
                      i = !0,
                      n = l,
                      r = o;
                      break
                  }
                  if (u === r) {
                      i = !0,
                      r = l,
                      n = o;
                      break
                  }
                  u = u.sibling
              }
              if (!i)
                  throw Error(R(189))
          }
      }
      if (n.alternate !== r)
          throw Error(R(190))
  }
  if (n.tag !== 3)
      throw Error(R(188));
  return n.stateNode.current === n ? e : t
}
function Lc(e) {
  return e = Vp(e),
  e !== null ? Oc(e) : null
}
function Oc(e) {
  if (e.tag === 5 || e.tag === 6)
      return e;
  for (e = e.child; e !== null; ) {
      var t = Oc(e);
      if (t !== null)
          return t;
      e = e.sibling
  }
  return null
}
var Ic = Ie.unstable_scheduleCallback
, Ws = Ie.unstable_cancelCallback
, Hp = Ie.unstable_shouldYield
, Qp = Ie.unstable_requestPaint
, J = Ie.unstable_now
, Kp = Ie.unstable_getCurrentPriorityLevel
, _u = Ie.unstable_ImmediatePriority
, Ac = Ie.unstable_UserBlockingPriority
, Qo = Ie.unstable_NormalPriority
, Yp = Ie.unstable_LowPriority
, Fc = Ie.unstable_IdlePriority
, Sl = null
, at = null;
function Xp(e) {
  if (at && typeof at.onCommitFiberRoot == "function")
      try {
          at.onCommitFiberRoot(Sl, e, void 0, (e.current.flags & 128) === 128)
      } catch {}
}
var et = Math.clz32 ? Math.clz32 : Zp
, Gp = Math.log
, Jp = Math.LN2;
function Zp(e) {
  return e >>>= 0,
  e === 0 ? 32 : 31 - (Gp(e) / Jp | 0) | 0
}
var ho = 64
, vo = 4194304;
function mr(e) {
  switch (e & -e) {
  case 1:
      return 1;
  case 2:
      return 2;
  case 4:
      return 4;
  case 8:
      return 8;
  case 16:
      return 16;
  case 32:
      return 32;
  case 64:
  case 128:
  case 256:
  case 512:
  case 1024:
  case 2048:
  case 4096:
  case 8192:
  case 16384:
  case 32768:
  case 65536:
  case 131072:
  case 262144:
  case 524288:
  case 1048576:
  case 2097152:
      return e & 4194240;
  case 4194304:
  case 8388608:
  case 16777216:
  case 33554432:
  case 67108864:
      return e & 130023424;
  case 134217728:
      return 134217728;
  case 268435456:
      return 268435456;
  case 536870912:
      return 536870912;
  case 1073741824:
      return 1073741824;
  default:
      return e
  }
}
function Ko(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
      return 0;
  var r = 0
    , o = e.suspendedLanes
    , l = e.pingedLanes
    , i = n & 268435455;
  if (i !== 0) {
      var u = i & ~o;
      u !== 0 ? r = mr(u) : (l &= i,
      l !== 0 && (r = mr(l)))
  } else
      i = n & ~o,
      i !== 0 ? r = mr(i) : l !== 0 && (r = mr(l));
  if (r === 0)
      return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
  l = t & -t,
  o >= l || o === 16 && (l & 4194240) !== 0))
      return t;
  if (r & 4 && (r |= n & 16),
  t = e.entangledLanes,
  t !== 0)
      for (e = e.entanglements,
      t &= r; 0 < t; )
          n = 31 - et(t),
          o = 1 << n,
          r |= e[n],
          t &= ~o;
  return r
}
function qp(e, t) {
  switch (e) {
  case 1:
  case 2:
  case 4:
      return t + 250;
  case 8:
  case 16:
  case 32:
  case 64:
  case 128:
  case 256:
  case 512:
  case 1024:
  case 2048:
  case 4096:
  case 8192:
  case 16384:
  case 32768:
  case 65536:
  case 131072:
  case 262144:
  case 524288:
  case 1048576:
  case 2097152:
      return t + 5e3;
  case 4194304:
  case 8388608:
  case 16777216:
  case 33554432:
  case 67108864:
      return -1;
  case 134217728:
  case 268435456:
  case 536870912:
  case 1073741824:
      return -1;
  default:
      return -1
  }
}
function bp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
      var i = 31 - et(l)
        , u = 1 << i
        , s = o[i];
      s === -1 ? (!(u & n) || u & r) && (o[i] = qp(u, t)) : s <= t && (e.expiredLanes |= u),
      l &= ~u
  }
}
function $i(e) {
  return e = e.pendingLanes & -1073741825,
  e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function jc() {
  var e = ho;
  return ho <<= 1,
  !(ho & 4194240) && (ho = 64),
  e
}
function Gl(e) {
  for (var t = [], n = 0; 31 > n; n++)
      t.push(e);
  return t
}
function Zr(e, t, n) {
  e.pendingLanes |= t,
  t !== 536870912 && (e.suspendedLanes = 0,
  e.pingedLanes = 0),
  e = e.eventTimes,
  t = 31 - et(t),
  e[t] = n
}
function eh(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t,
  e.suspendedLanes = 0,
  e.pingedLanes = 0,
  e.expiredLanes &= t,
  e.mutableReadLanes &= t,
  e.entangledLanes &= t,
  t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - et(n)
        , l = 1 << o;
      t[o] = 0,
      r[o] = -1,
      e[o] = -1,
      n &= ~l
  }
}
function Tu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
      var r = 31 - et(n)
        , o = 1 << r;
      o & t | e[r] & t && (e[r] |= t),
      n &= ~o
  }
}
var j = 0;
function $c(e) {
  return e &= -e,
  1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Uc, Mu, Bc, Wc, Vc, Ui = !1, mo = [], jt = null, $t = null, Ut = null, Lr = new Map, Or = new Map, Ot = [], th = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Vs(e, t) {
  switch (e) {
  case "focusin":
  case "focusout":
      jt = null;
      break;
  case "dragenter":
  case "dragleave":
      $t = null;
      break;
  case "mouseover":
  case "mouseout":
      Ut = null;
      break;
  case "pointerover":
  case "pointerout":
      Lr.delete(t.pointerId);
      break;
  case "gotpointercapture":
  case "lostpointercapture":
      Or.delete(t.pointerId)
  }
}
function sr(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: r,
      nativeEvent: l,
      targetContainers: [o]
  },
  t !== null && (t = br(t),
  t !== null && Mu(t)),
  e) : (e.eventSystemFlags |= r,
  t = e.targetContainers,
  o !== null && t.indexOf(o) === -1 && t.push(o),
  e)
}
function nh(e, t, n, r, o) {
  switch (t) {
  case "focusin":
      return jt = sr(jt, e, t, n, r, o),
      !0;
  case "dragenter":
      return $t = sr($t, e, t, n, r, o),
      !0;
  case "mouseover":
      return Ut = sr(Ut, e, t, n, r, o),
      !0;
  case "pointerover":
      var l = o.pointerId;
      return Lr.set(l, sr(Lr.get(l) || null, e, t, n, r, o)),
      !0;
  case "gotpointercapture":
      return l = o.pointerId,
      Or.set(l, sr(Or.get(l) || null, e, t, n, r, o)),
      !0
  }
  return !1
}
function Hc(e) {
  var t = tn(e.target);
  if (t !== null) {
      var n = hn(t);
      if (n !== null) {
          if (t = n.tag,
          t === 13) {
              if (t = zc(n),
              t !== null) {
                  e.blockedOn = t,
                  Vc(e.priority, function() {
                      Bc(n)
                  });
                  return
              }
          } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
              e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
              return
          }
      }
  }
  e.blockedOn = null
}
function Mo(e) {
  if (e.blockedOn !== null)
      return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Bi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type,n);
          Ii = r,
          n.target.dispatchEvent(r),
          Ii = null
      } else
          return t = br(n),
          t !== null && Mu(t),
          e.blockedOn = n,
          !1;
      t.shift()
  }
  return !0
}
function Hs(e, t, n) {
  Mo(e) && n.delete(t)
}
function rh() {
  Ui = !1,
  jt !== null && Mo(jt) && (jt = null),
  $t !== null && Mo($t) && ($t = null),
  Ut !== null && Mo(Ut) && (Ut = null),
  Lr.forEach(Hs),
  Or.forEach(Hs)
}
function ar(e, t) {
  e.blockedOn === t && (e.blockedOn = null,
  Ui || (Ui = !0,
  Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, rh)))
}
function Ir(e) {
  function t(o) {
      return ar(o, e)
  }
  if (0 < mo.length) {
      ar(mo[0], e);
      for (var n = 1; n < mo.length; n++) {
          var r = mo[n];
          r.blockedOn === e && (r.blockedOn = null)
      }
  }
  for (jt !== null && ar(jt, e),
  $t !== null && ar($t, e),
  Ut !== null && ar(Ut, e),
  Lr.forEach(t),
  Or.forEach(t),
  n = 0; n < Ot.length; n++)
      r = Ot[n],
      r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ot.length && (n = Ot[0],
  n.blockedOn === null); )
      Hc(n),
      n.blockedOn === null && Ot.shift()
}
var Fn = Et.ReactCurrentBatchConfig
, Yo = !0;
function oh(e, t, n, r) {
  var o = j
    , l = Fn.transition;
  Fn.transition = null;
  try {
      j = 1,
      zu(e, t, n, r)
  } finally {
      j = o,
      Fn.transition = l
  }
}
function lh(e, t, n, r) {
  var o = j
    , l = Fn.transition;
  Fn.transition = null;
  try {
      j = 4,
      zu(e, t, n, r)
  } finally {
      j = o,
      Fn.transition = l
  }
}
function zu(e, t, n, r) {
  if (Yo) {
      var o = Bi(e, t, n, r);
      if (o === null)
          li(e, t, r, Xo, n),
          Vs(e, r);
      else if (nh(o, e, t, n, r))
          r.stopPropagation();
      else if (Vs(e, r),
      t & 4 && -1 < th.indexOf(e)) {
          for (; o !== null; ) {
              var l = br(o);
              if (l !== null && Uc(l),
              l = Bi(e, t, n, r),
              l === null && li(e, t, r, Xo, n),
              l === o)
                  break;
              o = l
          }
          o !== null && r.stopPropagation()
      } else
          li(e, t, r, null, n)
  }
}
var Xo = null;
function Bi(e, t, n, r) {
  if (Xo = null,
  e = Nu(r),
  e = tn(e),
  e !== null)
      if (t = hn(e),
      t === null)
          e = null;
      else if (n = t.tag,
      n === 13) {
          if (e = zc(t),
          e !== null)
              return e;
          e = null
      } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null
      } else
          t !== e && (e = null);
  return Xo = e,
  null
}
function Qc(e) {
  switch (e) {
  case "cancel":
  case "click":
  case "close":
  case "contextmenu":
  case "copy":
  case "cut":
  case "auxclick":
  case "dblclick":
  case "dragend":
  case "dragstart":
  case "drop":
  case "focusin":
  case "focusout":
  case "input":
  case "invalid":
  case "keydown":
  case "keypress":
  case "keyup":
  case "mousedown":
  case "mouseup":
  case "paste":
  case "pause":
  case "play":
  case "pointercancel":
  case "pointerdown":
  case "pointerup":
  case "ratechange":
  case "reset":
  case "resize":
  case "seeked":
  case "submit":
  case "touchcancel":
  case "touchend":
  case "touchstart":
  case "volumechange":
  case "change":
  case "selectionchange":
  case "textInput":
  case "compositionstart":
  case "compositionend":
  case "compositionupdate":
  case "beforeblur":
  case "afterblur":
  case "beforeinput":
  case "blur":
  case "fullscreenchange":
  case "focus":
  case "hashchange":
  case "popstate":
  case "select":
  case "selectstart":
      return 1;
  case "drag":
  case "dragenter":
  case "dragexit":
  case "dragleave":
  case "dragover":
  case "mousemove":
  case "mouseout":
  case "mouseover":
  case "pointermove":
  case "pointerout":
  case "pointerover":
  case "scroll":
  case "toggle":
  case "touchmove":
  case "wheel":
  case "mouseenter":
  case "mouseleave":
  case "pointerenter":
  case "pointerleave":
      return 4;
  case "message":
      switch (Kp()) {
      case _u:
          return 1;
      case Ac:
          return 4;
      case Qo:
      case Yp:
          return 16;
      case Fc:
          return 536870912;
      default:
          return 16
      }
  default:
      return 16
  }
}
var At = null
, Lu = null
, zo = null;
function Kc() {
  if (zo)
      return zo;
  var e, t = Lu, n = t.length, r, o = "value"in At ? At.value : At.textContent, l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
      ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++)
      ;
  return zo = o.slice(e, 1 < r ? 1 - r : void 0)
}
function Lo(e) {
  var t = e.keyCode;
  return "charCode"in e ? (e = e.charCode,
  e === 0 && t === 13 && (e = 13)) : e = t,
  e === 10 && (e = 13),
  32 <= e || e === 13 ? e : 0
}
function go() {
  return !0
}
function Qs() {
  return !1
}
function Fe(e) {
  function t(n, r, o, l, i) {
      this._reactName = n,
      this._targetInst = o,
      this.type = r,
      this.nativeEvent = l,
      this.target = i,
      this.currentTarget = null;
      for (var u in e)
          e.hasOwnProperty(u) && (n = e[u],
          this[u] = n ? n(l) : l[u]);
      return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? go : Qs,
      this.isPropagationStopped = Qs,
      this
  }
  return X(t.prototype, {
      preventDefault: function() {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          this.isDefaultPrevented = go)
      },
      stopPropagation: function() {
          var n = this.nativeEvent;
          n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          this.isPropagationStopped = go)
      },
      persist: function() {},
      isPersistent: go
  }),
  t
}
var Gn = {
  eventPhase: 0,
  bubbles: 0,
  cancelable: 0,
  timeStamp: function(e) {
      return e.timeStamp || Date.now()
  },
  defaultPrevented: 0,
  isTrusted: 0
}, Ou = Fe(Gn), qr = X({}, Gn, {
  view: 0,
  detail: 0
}), ih = Fe(qr), Jl, Zl, cr, xl = X({}, qr, {
  screenX: 0,
  screenY: 0,
  clientX: 0,
  clientY: 0,
  pageX: 0,
  pageY: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  getModifierState: Iu,
  button: 0,
  buttons: 0,
  relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
  },
  movementX: function(e) {
      return "movementX"in e ? e.movementX : (e !== cr && (cr && e.type === "mousemove" ? (Jl = e.screenX - cr.screenX,
      Zl = e.screenY - cr.screenY) : Zl = Jl = 0,
      cr = e),
      Jl)
  },
  movementY: function(e) {
      return "movementY"in e ? e.movementY : Zl
  }
}), Ks = Fe(xl), uh = X({}, xl, {
  dataTransfer: 0
}), sh = Fe(uh), ah = X({}, qr, {
  relatedTarget: 0
}), ql = Fe(ah), ch = X({}, Gn, {
  animationName: 0,
  elapsedTime: 0,
  pseudoElement: 0
}), dh = Fe(ch), fh = X({}, Gn, {
  clipboardData: function(e) {
      return "clipboardData"in e ? e.clipboardData : window.clipboardData
  }
}), ph = Fe(fh), hh = X({}, Gn, {
  data: 0
}), Ys = Fe(hh), vh = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, mh = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, gh = {
  Alt: "altKey",
  Control: "ctrlKey",
  Meta: "metaKey",
  Shift: "shiftKey"
};
function yh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = gh[e]) ? !!t[e] : !1
}
function Iu() {
  return yh
}
var wh = X({}, qr, {
  key: function(e) {
      if (e.key) {
          var t = vh[e.key] || e.key;
          if (t !== "Unidentified")
              return t
      }
      return e.type === "keypress" ? (e = Lo(e),
      e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? mh[e.keyCode] || "Unidentified" : ""
  },
  code: 0,
  location: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  repeat: 0,
  locale: 0,
  getModifierState: Iu,
  charCode: function(e) {
      return e.type === "keypress" ? Lo(e) : 0
  },
  keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
  },
  which: function(e) {
      return e.type === "keypress" ? Lo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
  }
})
, Sh = Fe(wh)
, xh = X({}, xl, {
  pointerId: 0,
  width: 0,
  height: 0,
  pressure: 0,
  tangentialPressure: 0,
  tiltX: 0,
  tiltY: 0,
  twist: 0,
  pointerType: 0,
  isPrimary: 0
})
, Xs = Fe(xh)
, kh = X({}, qr, {
  touches: 0,
  targetTouches: 0,
  changedTouches: 0,
  altKey: 0,
  metaKey: 0,
  ctrlKey: 0,
  shiftKey: 0,
  getModifierState: Iu
})
, Ch = Fe(kh)
, Eh = X({}, Gn, {
  propertyName: 0,
  elapsedTime: 0,
  pseudoElement: 0
})
, Rh = Fe(Eh)
, Ph = X({}, xl, {
  deltaX: function(e) {
      return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
  },
  deltaY: function(e) {
      return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
  },
  deltaZ: 0,
  deltaMode: 0
})
, Dh = Fe(Ph)
, Nh = [9, 13, 27, 32]
, Au = St && "CompositionEvent"in window
, Sr = null;
St && "documentMode"in document && (Sr = document.documentMode);
var _h = St && "TextEvent"in window && !Sr
, Yc = St && (!Au || Sr && 8 < Sr && 11 >= Sr)
, Gs = " "
, Js = !1;
function Xc(e, t) {
  switch (e) {
  case "keyup":
      return Nh.indexOf(t.keyCode) !== -1;
  case "keydown":
      return t.keyCode !== 229;
  case "keypress":
  case "mousedown":
  case "focusout":
      return !0;
  default:
      return !1
  }
}
function Gc(e) {
  return e = e.detail,
  typeof e == "object" && "data"in e ? e.data : null
}
var En = !1;
function Th(e, t) {
  switch (e) {
  case "compositionend":
      return Gc(t);
  case "keypress":
      return t.which !== 32 ? null : (Js = !0,
      Gs);
  case "textInput":
      return e = t.data,
      e === Gs && Js ? null : e;
  default:
      return null
  }
}
function Mh(e, t) {
  if (En)
      return e === "compositionend" || !Au && Xc(e, t) ? (e = Kc(),
      zo = Lu = At = null,
      En = !1,
      e) : null;
  switch (e) {
  case "paste":
      return null;
  case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
              return t.char;
          if (t.which)
              return String.fromCharCode(t.which)
      }
      return null;
  case "compositionend":
      return Yc && t.locale !== "ko" ? null : t.data;
  default:
      return null
  }
}
var zh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function Zs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!zh[e.type] : t === "textarea"
}
function Jc(e, t, n, r) {
  Dc(r),
  t = Go(t, "onChange"),
  0 < t.length && (n = new Ou("onChange","change",null,n,r),
  e.push({
      event: n,
      listeners: t
  }))
}
var xr = null
, Ar = null;
function Lh(e) {
  ud(e, 0)
}
function kl(e) {
  var t = Dn(e);
  if (Sc(t))
      return e
}
function Oh(e, t) {
  if (e === "change")
      return t
}
var Zc = !1;
if (St) {
  var bl;
  if (St) {
      var ei = "oninput"in document;
      if (!ei) {
          var qs = document.createElement("div");
          qs.setAttribute("oninput", "return;"),
          ei = typeof qs.oninput == "function"
      }
      bl = ei
  } else
      bl = !1;
  Zc = bl && (!document.documentMode || 9 < document.documentMode)
}
function bs() {
  xr && (xr.detachEvent("onpropertychange", qc),
  Ar = xr = null)
}
function qc(e) {
  if (e.propertyName === "value" && kl(Ar)) {
      var t = [];
      Jc(t, Ar, e, Nu(e)),
      Mc(Lh, t)
  }
}
function Ih(e, t, n) {
  e === "focusin" ? (bs(),
  xr = t,
  Ar = n,
  xr.attachEvent("onpropertychange", qc)) : e === "focusout" && bs()
}
function Ah(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return kl(Ar)
}
function Fh(e, t) {
  if (e === "click")
      return kl(t)
}
function jh(e, t) {
  if (e === "input" || e === "change")
      return kl(t)
}
function $h(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var nt = typeof Object.is == "function" ? Object.is : $h;
function Fr(e, t) {
  if (nt(e, t))
      return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
  var n = Object.keys(e)
    , r = Object.keys(t);
  if (n.length !== r.length)
      return !1;
  for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!Ci.call(t, o) || !nt(e[o], t[o]))
          return !1
  }
  return !0
}
function ea(e) {
  for (; e && e.firstChild; )
      e = e.firstChild;
  return e
}
function ta(e, t) {
  var n = ea(e);
  e = 0;
  for (var r; n; ) {
      if (n.nodeType === 3) {
          if (r = e + n.textContent.length,
          e <= t && r >= t)
              return {
                  node: n,
                  offset: t - e
              };
          e = r
      }
      e: {
          for (; n; ) {
              if (n.nextSibling) {
                  n = n.nextSibling;
                  break e
              }
              n = n.parentNode
          }
          n = void 0
      }
      n = ea(n)
  }
}
function bc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? bc(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function ed() {
  for (var e = window, t = Wo(); t instanceof e.HTMLIFrameElement; ) {
      try {
          var n = typeof t.contentWindow.location.href == "string"
      } catch {
          n = !1
      }
      if (n)
          e = t.contentWindow;
      else
          break;
      t = Wo(e.document)
  }
  return t
}
function Fu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Uh(e) {
  var t = ed()
    , n = e.focusedElem
    , r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && bc(n.ownerDocument.documentElement, n)) {
      if (r !== null && Fu(n)) {
          if (t = r.start,
          e = r.end,
          e === void 0 && (e = t),
          "selectionStart"in n)
              n.selectionStart = t,
              n.selectionEnd = Math.min(e, n.value.length);
          else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
          e.getSelection) {
              e = e.getSelection();
              var o = n.textContent.length
                , l = Math.min(r.start, o);
              r = r.end === void 0 ? l : Math.min(r.end, o),
              !e.extend && l > r && (o = r,
              r = l,
              l = o),
              o = ta(n, l);
              var i = ta(n, r);
              o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(),
              t.setStart(o.node, o.offset),
              e.removeAllRanges(),
              l > r ? (e.addRange(t),
              e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
              e.addRange(t)))
          }
      }
      for (t = [],
      e = n; e = e.parentNode; )
          e.nodeType === 1 && t.push({
              element: e,
              left: e.scrollLeft,
              top: e.scrollTop
          });
      for (typeof n.focus == "function" && n.focus(),
      n = 0; n < t.length; n++)
          e = t[n],
          e.element.scrollLeft = e.left,
          e.element.scrollTop = e.top
  }
}
var Bh = St && "documentMode"in document && 11 >= document.documentMode
, Rn = null
, Wi = null
, kr = null
, Vi = !1;
function na(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Vi || Rn == null || Rn !== Wo(r) || (r = Rn,
  "selectionStart"in r && Fu(r) ? r = {
      start: r.selectionStart,
      end: r.selectionEnd
  } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
  r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
  }),
  kr && Fr(kr, r) || (kr = r,
  r = Go(Wi, "onSelect"),
  0 < r.length && (t = new Ou("onSelect","select",null,t,n),
  e.push({
      event: t,
      listeners: r
  }),
  t.target = Rn)))
}
function yo(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(),
  n["Webkit" + e] = "webkit" + t,
  n["Moz" + e] = "moz" + t,
  n
}
var Pn = {
  animationend: yo("Animation", "AnimationEnd"),
  animationiteration: yo("Animation", "AnimationIteration"),
  animationstart: yo("Animation", "AnimationStart"),
  transitionend: yo("Transition", "TransitionEnd")
}
, ti = {}
, td = {};
St && (td = document.createElement("div").style,
"AnimationEvent"in window || (delete Pn.animationend.animation,
delete Pn.animationiteration.animation,
delete Pn.animationstart.animation),
"TransitionEvent"in window || delete Pn.transitionend.transition);
function Cl(e) {
  if (ti[e])
      return ti[e];
  if (!Pn[e])
      return e;
  var t = Pn[e], n;
  for (n in t)
      if (t.hasOwnProperty(n) && n in td)
          return ti[e] = t[n];
  return e
}
var nd = Cl("animationend")
, rd = Cl("animationiteration")
, od = Cl("animationstart")
, ld = Cl("transitionend")
, id = new Map
, ra = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Xt(e, t) {
  id.set(e, t),
  pn(t, [e])
}
for (var ni = 0; ni < ra.length; ni++) {
  var ri = ra[ni]
    , Wh = ri.toLowerCase()
    , Vh = ri[0].toUpperCase() + ri.slice(1);
  Xt(Wh, "on" + Vh)
}
Xt(nd, "onAnimationEnd");
Xt(rd, "onAnimationIteration");
Xt(od, "onAnimationStart");
Xt("dblclick", "onDoubleClick");
Xt("focusin", "onFocus");
Xt("focusout", "onBlur");
Xt(ld, "onTransitionEnd");
Bn("onMouseEnter", ["mouseout", "mouseover"]);
Bn("onMouseLeave", ["mouseout", "mouseover"]);
Bn("onPointerEnter", ["pointerout", "pointerover"]);
Bn("onPointerLeave", ["pointerout", "pointerover"]);
pn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
pn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
pn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
pn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
pn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var gr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
, Hh = new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));
function oa(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n,
  Wp(r, t, void 0, e),
  e.currentTarget = null
}
function ud(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
      var r = e[n]
        , o = r.event;
      r = r.listeners;
      e: {
          var l = void 0;
          if (t)
              for (var i = r.length - 1; 0 <= i; i--) {
                  var u = r[i]
                    , s = u.instance
                    , a = u.currentTarget;
                  if (u = u.listener,
                  s !== l && o.isPropagationStopped())
                      break e;
                  oa(o, u, a),
                  l = s
              }
          else
              for (i = 0; i < r.length; i++) {
                  if (u = r[i],
                  s = u.instance,
                  a = u.currentTarget,
                  u = u.listener,
                  s !== l && o.isPropagationStopped())
                      break e;
                  oa(o, u, a),
                  l = s
              }
      }
  }
  if (Ho)
      throw e = ji,
      Ho = !1,
      ji = null,
      e
}
function W(e, t) {
  var n = t[Xi];
  n === void 0 && (n = t[Xi] = new Set);
  var r = e + "__bubble";
  n.has(r) || (sd(t, e, 2, !1),
  n.add(r))
}
function oi(e, t, n) {
  var r = 0;
  t && (r |= 4),
  sd(n, e, r, t)
}
var wo = "_reactListening" + Math.random().toString(36).slice(2);
function jr(e) {
  if (!e[wo]) {
      e[wo] = !0,
      vc.forEach(function(n) {
          n !== "selectionchange" && (Hh.has(n) || oi(n, !1, e),
          oi(n, !0, e))
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[wo] || (t[wo] = !0,
      oi("selectionchange", !1, t))
  }
}
function sd(e, t, n, r) {
  switch (Qc(t)) {
  case 1:
      var o = oh;
      break;
  case 4:
      o = lh;
      break;
  default:
      o = zu
  }
  n = o.bind(null, t, n, e),
  o = void 0,
  !Fi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
  r ? o !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: o
  }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
      passive: o
  }) : e.addEventListener(t, n, !1)
}
function li(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
      e: for (; ; ) {
          if (r === null)
              return;
          var i = r.tag;
          if (i === 3 || i === 4) {
              var u = r.stateNode.containerInfo;
              if (u === o || u.nodeType === 8 && u.parentNode === o)
                  break;
              if (i === 4)
                  for (i = r.return; i !== null; ) {
                      var s = i.tag;
                      if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo,
                      s === o || s.nodeType === 8 && s.parentNode === o))
                          return;
                      i = i.return
                  }
              for (; u !== null; ) {
                  if (i = tn(u),
                  i === null)
                      return;
                  if (s = i.tag,
                  s === 5 || s === 6) {
                      r = l = i;
                      continue e
                  }
                  u = u.parentNode
              }
          }
          r = r.return
      }
  Mc(function() {
      var a = l
        , d = Nu(n)
        , c = [];
      e: {
          var p = id.get(e);
          if (p !== void 0) {
              var m = Ou
                , y = e;
              switch (e) {
              case "keypress":
                  if (Lo(n) === 0)
                      break e;
              case "keydown":
              case "keyup":
                  m = Sh;
                  break;
              case "focusin":
                  y = "focus",
                  m = ql;
                  break;
              case "focusout":
                  y = "blur",
                  m = ql;
                  break;
              case "beforeblur":
              case "afterblur":
                  m = ql;
                  break;
              case "click":
                  if (n.button === 2)
                      break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                  m = Ks;
                  break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                  m = sh;
                  break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                  m = Ch;
                  break;
              case nd:
              case rd:
              case od:
                  m = dh;
                  break;
              case ld:
                  m = Rh;
                  break;
              case "scroll":
                  m = ih;
                  break;
              case "wheel":
                  m = Dh;
                  break;
              case "copy":
              case "cut":
              case "paste":
                  m = ph;
                  break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                  m = Xs
              }
              var w = (t & 4) !== 0
                , k = !w && e === "scroll"
                , h = w ? p !== null ? p + "Capture" : null : p;
              w = [];
              for (var f = a, v; f !== null; ) {
                  v = f;
                  var S = v.stateNode;
                  if (v.tag === 5 && S !== null && (v = S,
                  h !== null && (S = zr(f, h),
                  S != null && w.push($r(f, S, v)))),
                  k)
                      break;
                  f = f.return
              }
              0 < w.length && (p = new m(p,y,null,n,d),
              c.push({
                  event: p,
                  listeners: w
              }))
          }
      }
      if (!(t & 7)) {
          e: {
              if (p = e === "mouseover" || e === "pointerover",
              m = e === "mouseout" || e === "pointerout",
              p && n !== Ii && (y = n.relatedTarget || n.fromElement) && (tn(y) || y[xt]))
                  break e;
              if ((m || p) && (p = d.window === d ? d : (p = d.ownerDocument) ? p.defaultView || p.parentWindow : window,
              m ? (y = n.relatedTarget || n.toElement,
              m = a,
              y = y ? tn(y) : null,
              y !== null && (k = hn(y),
              y !== k || y.tag !== 5 && y.tag !== 6) && (y = null)) : (m = null,
              y = a),
              m !== y)) {
                  if (w = Ks,
                  S = "onMouseLeave",
                  h = "onMouseEnter",
                  f = "mouse",
                  (e === "pointerout" || e === "pointerover") && (w = Xs,
                  S = "onPointerLeave",
                  h = "onPointerEnter",
                  f = "pointer"),
                  k = m == null ? p : Dn(m),
                  v = y == null ? p : Dn(y),
                  p = new w(S,f + "leave",m,n,d),
                  p.target = k,
                  p.relatedTarget = v,
                  S = null,
                  tn(d) === a && (w = new w(h,f + "enter",y,n,d),
                  w.target = v,
                  w.relatedTarget = k,
                  S = w),
                  k = S,
                  m && y)
                      t: {
                          for (w = m,
                          h = y,
                          f = 0,
                          v = w; v; v = xn(v))
                              f++;
                          for (v = 0,
                          S = h; S; S = xn(S))
                              v++;
                          for (; 0 < f - v; )
                              w = xn(w),
                              f--;
                          for (; 0 < v - f; )
                              h = xn(h),
                              v--;
                          for (; f--; ) {
                              if (w === h || h !== null && w === h.alternate)
                                  break t;
                              w = xn(w),
                              h = xn(h)
                          }
                          w = null
                      }
                  else
                      w = null;
                  m !== null && la(c, p, m, w, !1),
                  y !== null && k !== null && la(c, k, y, w, !0)
              }
          }
          e: {
              if (p = a ? Dn(a) : window,
              m = p.nodeName && p.nodeName.toLowerCase(),
              m === "select" || m === "input" && p.type === "file")
                  var x = Oh;
              else if (Zs(p))
                  if (Zc)
                      x = jh;
                  else {
                      x = Ah;
                      var E = Ih
                  }
              else
                  (m = p.nodeName) && m.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (x = Fh);
              if (x && (x = x(e, a))) {
                  Jc(c, x, n, d);
                  break e
              }
              E && E(e, p, a),
              e === "focusout" && (E = p._wrapperState) && E.controlled && p.type === "number" && Ti(p, "number", p.value)
          }
          switch (E = a ? Dn(a) : window,
          e) {
          case "focusin":
              (Zs(E) || E.contentEditable === "true") && (Rn = E,
              Wi = a,
              kr = null);
              break;
          case "focusout":
              kr = Wi = Rn = null;
              break;
          case "mousedown":
              Vi = !0;
              break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
              Vi = !1,
              na(c, n, d);
              break;
          case "selectionchange":
              if (Bh)
                  break;
          case "keydown":
          case "keyup":
              na(c, n, d)
          }
          var C;
          if (Au)
              e: {
                  switch (e) {
                  case "compositionstart":
                      var P = "onCompositionStart";
                      break e;
                  case "compositionend":
                      P = "onCompositionEnd";
                      break e;
                  case "compositionupdate":
                      P = "onCompositionUpdate";
                      break e
                  }
                  P = void 0
              }
          else
              En ? Xc(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
          P && (Yc && n.locale !== "ko" && (En || P !== "onCompositionStart" ? P === "onCompositionEnd" && En && (C = Kc()) : (At = d,
          Lu = "value"in At ? At.value : At.textContent,
          En = !0)),
          E = Go(a, P),
          0 < E.length && (P = new Ys(P,e,null,n,d),
          c.push({
              event: P,
              listeners: E
          }),
          C ? P.data = C : (C = Gc(n),
          C !== null && (P.data = C)))),
          (C = _h ? Th(e, n) : Mh(e, n)) && (a = Go(a, "onBeforeInput"),
          0 < a.length && (d = new Ys("onBeforeInput","beforeinput",null,n,d),
          c.push({
              event: d,
              listeners: a
          }),
          d.data = C))
      }
      ud(c, t)
  })
}
function $r(e, t, n) {
  return {
      instance: e,
      listener: t,
      currentTarget: n
  }
}
function Go(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
      var o = e
        , l = o.stateNode;
      o.tag === 5 && l !== null && (o = l,
      l = zr(e, n),
      l != null && r.unshift($r(e, l, o)),
      l = zr(e, t),
      l != null && r.push($r(e, l, o))),
      e = e.return
  }
  return r
}
function xn(e) {
  if (e === null)
      return null;
  do
      e = e.return;
  while (e && e.tag !== 5);
  return e || null
}
function la(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
      var u = n
        , s = u.alternate
        , a = u.stateNode;
      if (s !== null && s === r)
          break;
      u.tag === 5 && a !== null && (u = a,
      o ? (s = zr(n, l),
      s != null && i.unshift($r(n, s, u))) : o || (s = zr(n, l),
      s != null && i.push($r(n, s, u)))),
      n = n.return
  }
  i.length !== 0 && e.push({
      event: t,
      listeners: i
  })
}
var Qh = /\r\n?/g
, Kh = /\u0000|\uFFFD/g;
function ia(e) {
  return (typeof e == "string" ? e : "" + e).replace(Qh, `
`).replace(Kh, "")
}
function So(e, t, n) {
  if (t = ia(t),
  ia(e) !== t && n)
      throw Error(R(425))
}
function Jo() {}
var Hi = null
, Qi = null;
function Ki(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Yi = typeof setTimeout == "function" ? setTimeout : void 0
, Yh = typeof clearTimeout == "function" ? clearTimeout : void 0
, ua = typeof Promise == "function" ? Promise : void 0
, Xh = typeof queueMicrotask == "function" ? queueMicrotask : typeof ua < "u" ? function(e) {
  return ua.resolve(null).then(e).catch(Gh)
}
: Yi;
function Gh(e) {
  setTimeout(function() {
      throw e
  })
}
function ii(e, t) {
  var n = t
    , r = 0;
  do {
      var o = n.nextSibling;
      if (e.removeChild(n),
      o && o.nodeType === 8)
          if (n = o.data,
          n === "/$") {
              if (r === 0) {
                  e.removeChild(o),
                  Ir(t);
                  return
              }
              r--
          } else
              n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = o
  } while (n);
  Ir(t)
}
function Bt(e) {
  for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3)
          break;
      if (t === 8) {
          if (t = e.data,
          t === "$" || t === "$!" || t === "$?")
              break;
          if (t === "/$")
              return null
      }
  }
  return e
}
function sa(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
      if (e.nodeType === 8) {
          var n = e.data;
          if (n === "$" || n === "$!" || n === "$?") {
              if (t === 0)
                  return e;
              t--
          } else
              n === "/$" && t++
      }
      e = e.previousSibling
  }
  return null
}
var Jn = Math.random().toString(36).slice(2)
, st = "__reactFiber$" + Jn
, Ur = "__reactProps$" + Jn
, xt = "__reactContainer$" + Jn
, Xi = "__reactEvents$" + Jn
, Jh = "__reactListeners$" + Jn
, Zh = "__reactHandles$" + Jn;
function tn(e) {
  var t = e[st];
  if (t)
      return t;
  for (var n = e.parentNode; n; ) {
      if (t = n[xt] || n[st]) {
          if (n = t.alternate,
          t.child !== null || n !== null && n.child !== null)
              for (e = sa(e); e !== null; ) {
                  if (n = e[st])
                      return n;
                  e = sa(e)
              }
          return t
      }
      e = n,
      n = e.parentNode
  }
  return null
}
function br(e) {
  return e = e[st] || e[xt],
  !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Dn(e) {
  if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
  throw Error(R(33))
}
function El(e) {
  return e[Ur] || null
}
var Gi = []
, Nn = -1;
function Gt(e) {
  return {
      current: e
  }
}
function V(e) {
  0 > Nn || (e.current = Gi[Nn],
  Gi[Nn] = null,
  Nn--)
}
function B(e, t) {
  Nn++,
  Gi[Nn] = e.current,
  e.current = t
}
var Yt = {}
, me = Gt(Yt)
, Pe = Gt(!1)
, un = Yt;
function Wn(e, t) {
  var n = e.type.contextTypes;
  if (!n)
      return Yt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, l;
  for (l in n)
      o[l] = t[l];
  return r && (e = e.stateNode,
  e.__reactInternalMemoizedUnmaskedChildContext = t,
  e.__reactInternalMemoizedMaskedChildContext = o),
  o
}
function De(e) {
  return e = e.childContextTypes,
  e != null
}
function Zo() {
  V(Pe),
  V(me)
}
function aa(e, t, n) {
  if (me.current !== Yt)
      throw Error(R(168));
  B(me, t),
  B(Pe, n)
}
function ad(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes,
  typeof r.getChildContext != "function")
      return n;
  r = r.getChildContext();
  for (var o in r)
      if (!(o in t))
          throw Error(R(108, Ip(e) || "Unknown", o));
  return X({}, n, r)
}
function qo(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Yt,
  un = me.current,
  B(me, e),
  B(Pe, Pe.current),
  !0
}
function ca(e, t, n) {
  var r = e.stateNode;
  if (!r)
      throw Error(R(169));
  n ? (e = ad(e, t, un),
  r.__reactInternalMemoizedMergedChildContext = e,
  V(Pe),
  V(me),
  B(me, e)) : V(Pe),
  B(Pe, n)
}
var mt = null
, Rl = !1
, ui = !1;
function cd(e) {
  mt === null ? mt = [e] : mt.push(e)
}
function qh(e) {
  Rl = !0,
  cd(e)
}
function Jt() {
  if (!ui && mt !== null) {
      ui = !0;
      var e = 0
        , t = j;
      try {
          var n = mt;
          for (j = 1; e < n.length; e++) {
              var r = n[e];
              do
                  r = r(!0);
              while (r !== null)
          }
          mt = null,
          Rl = !1
      } catch (o) {
          throw mt !== null && (mt = mt.slice(e + 1)),
          Ic(_u, Jt),
          o
      } finally {
          j = t,
          ui = !1
      }
  }
  return null
}
var _n = []
, Tn = 0
, bo = null
, el = 0
, Ue = []
, Be = 0
, sn = null
, gt = 1
, yt = "";
function qt(e, t) {
  _n[Tn++] = el,
  _n[Tn++] = bo,
  bo = e,
  el = t
}
function dd(e, t, n) {
  Ue[Be++] = gt,
  Ue[Be++] = yt,
  Ue[Be++] = sn,
  sn = e;
  var r = gt;
  e = yt;
  var o = 32 - et(r) - 1;
  r &= ~(1 << o),
  n += 1;
  var l = 32 - et(t) + o;
  if (30 < l) {
      var i = o - o % 5;
      l = (r & (1 << i) - 1).toString(32),
      r >>= i,
      o -= i,
      gt = 1 << 32 - et(t) + o | n << o | r,
      yt = l + e
  } else
      gt = 1 << l | n << o | r,
      yt = e
}
function ju(e) {
  e.return !== null && (qt(e, 1),
  dd(e, 1, 0))
}
function $u(e) {
  for (; e === bo; )
      bo = _n[--Tn],
      _n[Tn] = null,
      el = _n[--Tn],
      _n[Tn] = null;
  for (; e === sn; )
      sn = Ue[--Be],
      Ue[Be] = null,
      yt = Ue[--Be],
      Ue[Be] = null,
      gt = Ue[--Be],
      Ue[Be] = null
}
var Oe = null
, Le = null
, Q = !1
, be = null;
function fd(e, t) {
  var n = We(5, null, null, 0);
  n.elementType = "DELETED",
  n.stateNode = t,
  n.return = e,
  t = e.deletions,
  t === null ? (e.deletions = [n],
  e.flags |= 16) : t.push(n)
}
function da(e, t) {
  switch (e.tag) {
  case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
      t !== null ? (e.stateNode = t,
      Oe = e,
      Le = Bt(t.firstChild),
      !0) : !1;
  case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
      t !== null ? (e.stateNode = t,
      Oe = e,
      Le = null,
      !0) : !1;
  case 13:
      return t = t.nodeType !== 8 ? null : t,
      t !== null ? (n = sn !== null ? {
          id: gt,
          overflow: yt
      } : null,
      e.memoizedState = {
          dehydrated: t,
          treeContext: n,
          retryLane: 1073741824
      },
      n = We(18, null, null, 0),
      n.stateNode = t,
      n.return = e,
      e.child = n,
      Oe = e,
      Le = null,
      !0) : !1;
  default:
      return !1
  }
}
function Ji(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Zi(e) {
  if (Q) {
      var t = Le;
      if (t) {
          var n = t;
          if (!da(e, t)) {
              if (Ji(e))
                  throw Error(R(418));
              t = Bt(n.nextSibling);
              var r = Oe;
              t && da(e, t) ? fd(r, n) : (e.flags = e.flags & -4097 | 2,
              Q = !1,
              Oe = e)
          }
      } else {
          if (Ji(e))
              throw Error(R(418));
          e.flags = e.flags & -4097 | 2,
          Q = !1,
          Oe = e
      }
  }
}
function fa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
  Oe = e
}
function xo(e) {
  if (e !== Oe)
      return !1;
  if (!Q)
      return fa(e),
      Q = !0,
      !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
  t = t !== "head" && t !== "body" && !Ki(e.type, e.memoizedProps)),
  t && (t = Le)) {
      if (Ji(e))
          throw pd(),
          Error(R(418));
      for (; t; )
          fd(e, t),
          t = Bt(t.nextSibling)
  }
  if (fa(e),
  e.tag === 13) {
      if (e = e.memoizedState,
      e = e !== null ? e.dehydrated : null,
      !e)
          throw Error(R(317));
      e: {
          for (e = e.nextSibling,
          t = 0; e; ) {
              if (e.nodeType === 8) {
                  var n = e.data;
                  if (n === "/$") {
                      if (t === 0) {
                          Le = Bt(e.nextSibling);
                          break e
                      }
                      t--
                  } else
                      n !== "$" && n !== "$!" && n !== "$?" || t++
              }
              e = e.nextSibling
          }
          Le = null
      }
  } else
      Le = Oe ? Bt(e.stateNode.nextSibling) : null;
  return !0
}
function pd() {
  for (var e = Le; e; )
      e = Bt(e.nextSibling)
}
function Vn() {
  Le = Oe = null,
  Q = !1
}
function Uu(e) {
  be === null ? be = [e] : be.push(e)
}
var bh = Et.ReactCurrentBatchConfig;
function Ze(e, t) {
  if (e && e.defaultProps) {
      t = X({}, t),
      e = e.defaultProps;
      for (var n in e)
          t[n] === void 0 && (t[n] = e[n]);
      return t
  }
  return t
}
var tl = Gt(null)
, nl = null
, Mn = null
, Bu = null;
function Wu() {
  Bu = Mn = nl = null
}
function Vu(e) {
  var t = tl.current;
  V(tl),
  e._currentValue = t
}
function qi(e, t, n) {
  for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t,
      r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
          break;
      e = e.return
  }
}
function jn(e, t) {
  nl = e,
  Bu = Mn = null,
  e = e.dependencies,
  e !== null && e.firstContext !== null && (e.lanes & t && (Re = !0),
  e.firstContext = null)
}
function Qe(e) {
  var t = e._currentValue;
  if (Bu !== e)
      if (e = {
          context: e,
          memoizedValue: t,
          next: null
      },
      Mn === null) {
          if (nl === null)
              throw Error(R(308));
          Mn = e,
          nl.dependencies = {
              lanes: 0,
              firstContext: e
          }
      } else
          Mn = Mn.next = e;
  return t
}
var nn = null;
function Hu(e) {
  nn === null ? nn = [e] : nn.push(e)
}
function hd(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n,
  Hu(t)) : (n.next = o.next,
  o.next = n),
  t.interleaved = n,
  kt(e, r)
}
function kt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t),
  n = e,
  e = e.return; e !== null; )
      e.childLanes |= t,
      n = e.alternate,
      n !== null && (n.childLanes |= t),
      n = e,
      e = e.return;
  return n.tag === 3 ? n.stateNode : null
}
var zt = !1;
function Qu(e) {
  e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
          pending: null,
          interleaved: null,
          lanes: 0
      },
      effects: null
  }
}
function vd(e, t) {
  e = e.updateQueue,
  t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      effects: e.effects
  })
}
function wt(e, t) {
  return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
  }
}
function Wt(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
      return null;
  if (r = r.shared,
  F & 2) {
      var o = r.pending;
      return o === null ? t.next = t : (t.next = o.next,
      o.next = t),
      r.pending = t,
      kt(e, n)
  }
  return o = r.interleaved,
  o === null ? (t.next = t,
  Hu(r)) : (t.next = o.next,
  o.next = t),
  r.interleaved = t,
  kt(e, n)
}
function Oo(e, t, n) {
  if (t = t.updateQueue,
  t !== null && (t = t.shared,
  (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes,
      n |= r,
      t.lanes = n,
      Tu(e, n)
  }
}
function pa(e, t) {
  var n = e.updateQueue
    , r = e.alternate;
  if (r !== null && (r = r.updateQueue,
  n === r)) {
      var o = null
        , l = null;
      if (n = n.firstBaseUpdate,
      n !== null) {
          do {
              var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null
              };
              l === null ? o = l = i : l = l.next = i,
              n = n.next
          } while (n !== null);
          l === null ? o = l = t : l = l.next = t
      } else
          o = l = t;
      n = {
          baseState: r.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: l,
          shared: r.shared,
          effects: r.effects
      },
      e.updateQueue = n;
      return
  }
  e = n.lastBaseUpdate,
  e === null ? n.firstBaseUpdate = t : e.next = t,
  n.lastBaseUpdate = t
}
function rl(e, t, n, r) {
  var o = e.updateQueue;
  zt = !1;
  var l = o.firstBaseUpdate
    , i = o.lastBaseUpdate
    , u = o.shared.pending;
  if (u !== null) {
      o.shared.pending = null;
      var s = u
        , a = s.next;
      s.next = null,
      i === null ? l = a : i.next = a,
      i = s;
      var d = e.alternate;
      d !== null && (d = d.updateQueue,
      u = d.lastBaseUpdate,
      u !== i && (u === null ? d.firstBaseUpdate = a : u.next = a,
      d.lastBaseUpdate = s))
  }
  if (l !== null) {
      var c = o.baseState;
      i = 0,
      d = a = s = null,
      u = l;
      do {
          var p = u.lane
            , m = u.eventTime;
          if ((r & p) === p) {
              d !== null && (d = d.next = {
                  eventTime: m,
                  lane: 0,
                  tag: u.tag,
                  payload: u.payload,
                  callback: u.callback,
                  next: null
              });
              e: {
                  var y = e
                    , w = u;
                  switch (p = t,
                  m = n,
                  w.tag) {
                  case 1:
                      if (y = w.payload,
                      typeof y == "function") {
                          c = y.call(m, c, p);
                          break e
                      }
                      c = y;
                      break e;
                  case 3:
                      y.flags = y.flags & -65537 | 128;
                  case 0:
                      if (y = w.payload,
                      p = typeof y == "function" ? y.call(m, c, p) : y,
                      p == null)
                          break e;
                      c = X({}, c, p);
                      break e;
                  case 2:
                      zt = !0
                  }
              }
              u.callback !== null && u.lane !== 0 && (e.flags |= 64,
              p = o.effects,
              p === null ? o.effects = [u] : p.push(u))
          } else
              m = {
                  eventTime: m,
                  lane: p,
                  tag: u.tag,
                  payload: u.payload,
                  callback: u.callback,
                  next: null
              },
              d === null ? (a = d = m,
              s = c) : d = d.next = m,
              i |= p;
          if (u = u.next,
          u === null) {
              if (u = o.shared.pending,
              u === null)
                  break;
              p = u,
              u = p.next,
              p.next = null,
              o.lastBaseUpdate = p,
              o.shared.pending = null
          }
      } while (!0);
      if (d === null && (s = c),
      o.baseState = s,
      o.firstBaseUpdate = a,
      o.lastBaseUpdate = d,
      t = o.shared.interleaved,
      t !== null) {
          o = t;
          do
              i |= o.lane,
              o = o.next;
          while (o !== t)
      } else
          l === null && (o.shared.lanes = 0);
      cn |= i,
      e.lanes = i,
      e.memoizedState = c
  }
}
function ha(e, t, n) {
  if (e = t.effects,
  t.effects = null,
  e !== null)
      for (t = 0; t < e.length; t++) {
          var r = e[t]
            , o = r.callback;
          if (o !== null) {
              if (r.callback = null,
              r = n,
              typeof o != "function")
                  throw Error(R(191, o));
              o.call(r)
          }
      }
}
var md = new hc.Component().refs;
function bi(e, t, n, r) {
  t = e.memoizedState,
  n = n(r, t),
  n = n == null ? t : X({}, t, n),
  e.memoizedState = n,
  e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Pl = {
  isMounted: function(e) {
      return (e = e._reactInternals) ? hn(e) === e : !1
  },
  enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var r = we()
        , o = Ht(e)
        , l = wt(r, o);
      l.payload = t,
      n != null && (l.callback = n),
      t = Wt(e, l, o),
      t !== null && (tt(t, e, o, r),
      Oo(t, e, o))
  },
  enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var r = we()
        , o = Ht(e)
        , l = wt(r, o);
      l.tag = 1,
      l.payload = t,
      n != null && (l.callback = n),
      t = Wt(e, l, o),
      t !== null && (tt(t, e, o, r),
      Oo(t, e, o))
  },
  enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = we()
        , r = Ht(e)
        , o = wt(n, r);
      o.tag = 2,
      t != null && (o.callback = t),
      t = Wt(e, o, r),
      t !== null && (tt(t, e, r, n),
      Oo(t, e, r))
  }
};
function va(e, t, n, r, o, l, i) {
  return e = e.stateNode,
  typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !Fr(n, r) || !Fr(o, l) : !0
}
function gd(e, t, n) {
  var r = !1
    , o = Yt
    , l = t.contextType;
  return typeof l == "object" && l !== null ? l = Qe(l) : (o = De(t) ? un : me.current,
  r = t.contextTypes,
  l = (r = r != null) ? Wn(e, o) : Yt),
  t = new t(n,l),
  e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
  t.updater = Pl,
  e.stateNode = t,
  t._reactInternals = e,
  r && (e = e.stateNode,
  e.__reactInternalMemoizedUnmaskedChildContext = o,
  e.__reactInternalMemoizedMaskedChildContext = l),
  t
}
function ma(e, t, n, r) {
  e = t.state,
  typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
  typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
  t.state !== e && Pl.enqueueReplaceState(t, t.state, null)
}
function eu(e, t, n, r) {
  var o = e.stateNode;
  o.props = n,
  o.state = e.memoizedState,
  o.refs = md,
  Qu(e);
  var l = t.contextType;
  typeof l == "object" && l !== null ? o.context = Qe(l) : (l = De(t) ? un : me.current,
  o.context = Wn(e, l)),
  o.state = e.memoizedState,
  l = t.getDerivedStateFromProps,
  typeof l == "function" && (bi(e, t, l, n),
  o.state = e.memoizedState),
  typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
  typeof o.componentWillMount == "function" && o.componentWillMount(),
  typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
  t !== o.state && Pl.enqueueReplaceState(o, o.state, null),
  rl(e, n, o, r),
  o.state = e.memoizedState),
  typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function dr(e, t, n) {
  if (e = n.ref,
  e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
          if (n = n._owner,
          n) {
              if (n.tag !== 1)
                  throw Error(R(309));
              var r = n.stateNode
          }
          if (!r)
              throw Error(R(147, e));
          var o = r
            , l = "" + e;
          return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(i) {
              var u = o.refs;
              u === md && (u = o.refs = {}),
              i === null ? delete u[l] : u[l] = i
          }
          ,
          t._stringRef = l,
          t)
      }
      if (typeof e != "string")
          throw Error(R(284));
      if (!n._owner)
          throw Error(R(290, e))
  }
  return e
}
function ko(e, t) {
  throw e = Object.prototype.toString.call(t),
  Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function ga(e) {
  var t = e._init;
  return t(e._payload)
}
function yd(e) {
  function t(h, f) {
      if (e) {
          var v = h.deletions;
          v === null ? (h.deletions = [f],
          h.flags |= 16) : v.push(f)
      }
  }
  function n(h, f) {
      if (!e)
          return null;
      for (; f !== null; )
          t(h, f),
          f = f.sibling;
      return null
  }
  function r(h, f) {
      for (h = new Map; f !== null; )
          f.key !== null ? h.set(f.key, f) : h.set(f.index, f),
          f = f.sibling;
      return h
  }
  function o(h, f) {
      return h = Qt(h, f),
      h.index = 0,
      h.sibling = null,
      h
  }
  function l(h, f, v) {
      return h.index = v,
      e ? (v = h.alternate,
      v !== null ? (v = v.index,
      v < f ? (h.flags |= 2,
      f) : v) : (h.flags |= 2,
      f)) : (h.flags |= 1048576,
      f)
  }
  function i(h) {
      return e && h.alternate === null && (h.flags |= 2),
      h
  }
  function u(h, f, v, S) {
      return f === null || f.tag !== 6 ? (f = hi(v, h.mode, S),
      f.return = h,
      f) : (f = o(f, v),
      f.return = h,
      f)
  }
  function s(h, f, v, S) {
      var x = v.type;
      return x === Cn ? d(h, f, v.props.children, S, v.key) : f !== null && (f.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Mt && ga(x) === f.type) ? (S = o(f, v.props),
      S.ref = dr(h, f, v),
      S.return = h,
      S) : (S = Uo(v.type, v.key, v.props, null, h.mode, S),
      S.ref = dr(h, f, v),
      S.return = h,
      S)
  }
  function a(h, f, v, S) {
      return f === null || f.tag !== 4 || f.stateNode.containerInfo !== v.containerInfo || f.stateNode.implementation !== v.implementation ? (f = vi(v, h.mode, S),
      f.return = h,
      f) : (f = o(f, v.children || []),
      f.return = h,
      f)
  }
  function d(h, f, v, S, x) {
      return f === null || f.tag !== 7 ? (f = ln(v, h.mode, S, x),
      f.return = h,
      f) : (f = o(f, v),
      f.return = h,
      f)
  }
  function c(h, f, v) {
      if (typeof f == "string" && f !== "" || typeof f == "number")
          return f = hi("" + f, h.mode, v),
          f.return = h,
          f;
      if (typeof f == "object" && f !== null) {
          switch (f.$$typeof) {
          case co:
              return v = Uo(f.type, f.key, f.props, null, h.mode, v),
              v.ref = dr(h, null, f),
              v.return = h,
              v;
          case kn:
              return f = vi(f, h.mode, v),
              f.return = h,
              f;
          case Mt:
              var S = f._init;
              return c(h, S(f._payload), v)
          }
          if (vr(f) || ir(f))
              return f = ln(f, h.mode, v, null),
              f.return = h,
              f;
          ko(h, f)
      }
      return null
  }
  function p(h, f, v, S) {
      var x = f !== null ? f.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number")
          return x !== null ? null : u(h, f, "" + v, S);
      if (typeof v == "object" && v !== null) {
          switch (v.$$typeof) {
          case co:
              return v.key === x ? s(h, f, v, S) : null;
          case kn:
              return v.key === x ? a(h, f, v, S) : null;
          case Mt:
              return x = v._init,
              p(h, f, x(v._payload), S)
          }
          if (vr(v) || ir(v))
              return x !== null ? null : d(h, f, v, S, null);
          ko(h, v)
      }
      return null
  }
  function m(h, f, v, S, x) {
      if (typeof S == "string" && S !== "" || typeof S == "number")
          return h = h.get(v) || null,
          u(f, h, "" + S, x);
      if (typeof S == "object" && S !== null) {
          switch (S.$$typeof) {
          case co:
              return h = h.get(S.key === null ? v : S.key) || null,
              s(f, h, S, x);
          case kn:
              return h = h.get(S.key === null ? v : S.key) || null,
              a(f, h, S, x);
          case Mt:
              var E = S._init;
              return m(h, f, v, E(S._payload), x)
          }
          if (vr(S) || ir(S))
              return h = h.get(v) || null,
              d(f, h, S, x, null);
          ko(f, S)
      }
      return null
  }
  function y(h, f, v, S) {
      for (var x = null, E = null, C = f, P = f = 0, M = null; C !== null && P < v.length; P++) {
          C.index > P ? (M = C,
          C = null) : M = C.sibling;
          var _ = p(h, C, v[P], S);
          if (_ === null) {
              C === null && (C = M);
              break
          }
          e && C && _.alternate === null && t(h, C),
          f = l(_, f, P),
          E === null ? x = _ : E.sibling = _,
          E = _,
          C = M
      }
      if (P === v.length)
          return n(h, C),
          Q && qt(h, P),
          x;
      if (C === null) {
          for (; P < v.length; P++)
              C = c(h, v[P], S),
              C !== null && (f = l(C, f, P),
              E === null ? x = C : E.sibling = C,
              E = C);
          return Q && qt(h, P),
          x
      }
      for (C = r(h, C); P < v.length; P++)
          M = m(C, h, P, v[P], S),
          M !== null && (e && M.alternate !== null && C.delete(M.key === null ? P : M.key),
          f = l(M, f, P),
          E === null ? x = M : E.sibling = M,
          E = M);
      return e && C.forEach(function(L) {
          return t(h, L)
      }),
      Q && qt(h, P),
      x
  }
  function w(h, f, v, S) {
      var x = ir(v);
      if (typeof x != "function")
          throw Error(R(150));
      if (v = x.call(v),
      v == null)
          throw Error(R(151));
      for (var E = x = null, C = f, P = f = 0, M = null, _ = v.next(); C !== null && !_.done; P++,
      _ = v.next()) {
          C.index > P ? (M = C,
          C = null) : M = C.sibling;
          var L = p(h, C, _.value, S);
          if (L === null) {
              C === null && (C = M);
              break
          }
          e && C && L.alternate === null && t(h, C),
          f = l(L, f, P),
          E === null ? x = L : E.sibling = L,
          E = L,
          C = M
      }
      if (_.done)
          return n(h, C),
          Q && qt(h, P),
          x;
      if (C === null) {
          for (; !_.done; P++,
          _ = v.next())
              _ = c(h, _.value, S),
              _ !== null && (f = l(_, f, P),
              E === null ? x = _ : E.sibling = _,
              E = _);
          return Q && qt(h, P),
          x
      }
      for (C = r(h, C); !_.done; P++,
      _ = v.next())
          _ = m(C, h, P, _.value, S),
          _ !== null && (e && _.alternate !== null && C.delete(_.key === null ? P : _.key),
          f = l(_, f, P),
          E === null ? x = _ : E.sibling = _,
          E = _);
      return e && C.forEach(function(le) {
          return t(h, le)
      }),
      Q && qt(h, P),
      x
  }
  function k(h, f, v, S) {
      if (typeof v == "object" && v !== null && v.type === Cn && v.key === null && (v = v.props.children),
      typeof v == "object" && v !== null) {
          switch (v.$$typeof) {
          case co:
              e: {
                  for (var x = v.key, E = f; E !== null; ) {
                      if (E.key === x) {
                          if (x = v.type,
                          x === Cn) {
                              if (E.tag === 7) {
                                  n(h, E.sibling),
                                  f = o(E, v.props.children),
                                  f.return = h,
                                  h = f;
                                  break e
                              }
                          } else if (E.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Mt && ga(x) === E.type) {
                              n(h, E.sibling),
                              f = o(E, v.props),
                              f.ref = dr(h, E, v),
                              f.return = h,
                              h = f;
                              break e
                          }
                          n(h, E);
                          break
                      } else
                          t(h, E);
                      E = E.sibling
                  }
                  v.type === Cn ? (f = ln(v.props.children, h.mode, S, v.key),
                  f.return = h,
                  h = f) : (S = Uo(v.type, v.key, v.props, null, h.mode, S),
                  S.ref = dr(h, f, v),
                  S.return = h,
                  h = S)
              }
              return i(h);
          case kn:
              e: {
                  for (E = v.key; f !== null; ) {
                      if (f.key === E)
                          if (f.tag === 4 && f.stateNode.containerInfo === v.containerInfo && f.stateNode.implementation === v.implementation) {
                              n(h, f.sibling),
                              f = o(f, v.children || []),
                              f.return = h,
                              h = f;
                              break e
                          } else {
                              n(h, f);
                              break
                          }
                      else
                          t(h, f);
                      f = f.sibling
                  }
                  f = vi(v, h.mode, S),
                  f.return = h,
                  h = f
              }
              return i(h);
          case Mt:
              return E = v._init,
              k(h, f, E(v._payload), S)
          }
          if (vr(v))
              return y(h, f, v, S);
          if (ir(v))
              return w(h, f, v, S);
          ko(h, v)
      }
      return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
      f !== null && f.tag === 6 ? (n(h, f.sibling),
      f = o(f, v),
      f.return = h,
      h = f) : (n(h, f),
      f = hi(v, h.mode, S),
      f.return = h,
      h = f),
      i(h)) : n(h, f)
  }
  return k
}
var Hn = yd(!0)
, wd = yd(!1)
, eo = {}
, ct = Gt(eo)
, Br = Gt(eo)
, Wr = Gt(eo);
function rn(e) {
  if (e === eo)
      throw Error(R(174));
  return e
}
function Ku(e, t) {
  switch (B(Wr, t),
  B(Br, e),
  B(ct, eo),
  e = t.nodeType,
  e) {
  case 9:
  case 11:
      t = (t = t.documentElement) ? t.namespaceURI : zi(null, "");
      break;
  default:
      e = e === 8 ? t.parentNode : t,
      t = e.namespaceURI || null,
      e = e.tagName,
      t = zi(t, e)
  }
  V(ct),
  B(ct, t)
}
function Qn() {
  V(ct),
  V(Br),
  V(Wr)
}
function Sd(e) {
  rn(Wr.current);
  var t = rn(ct.current)
    , n = zi(t, e.type);
  t !== n && (B(Br, e),
  B(ct, n))
}
function Yu(e) {
  Br.current === e && (V(ct),
  V(Br))
}
var K = Gt(0);
function ol(e) {
  for (var t = e; t !== null; ) {
      if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && (n = n.dehydrated,
          n === null || n.data === "$?" || n.data === "$!"))
              return t
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if (t.flags & 128)
              return t
      } else if (t.child !== null) {
          t.child.return = t,
          t = t.child;
          continue
      }
      if (t === e)
          break;
      for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
              return null;
          t = t.return
      }
      t.sibling.return = t.return,
      t = t.sibling
  }
  return null
}
var si = [];
function Xu() {
  for (var e = 0; e < si.length; e++)
      si[e]._workInProgressVersionPrimary = null;
  si.length = 0
}
var Io = Et.ReactCurrentDispatcher
, ai = Et.ReactCurrentBatchConfig
, an = 0
, Y = null
, b = null
, ne = null
, ll = !1
, Cr = !1
, Vr = 0
, ev = 0;
function pe() {
  throw Error(R(321))
}
function Gu(e, t) {
  if (t === null)
      return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
      if (!nt(e[n], t[n]))
          return !1;
  return !0
}
function Ju(e, t, n, r, o, l) {
  if (an = l,
  Y = t,
  t.memoizedState = null,
  t.updateQueue = null,
  t.lanes = 0,
  Io.current = e === null || e.memoizedState === null ? ov : lv,
  e = n(r, o),
  Cr) {
      l = 0;
      do {
          if (Cr = !1,
          Vr = 0,
          25 <= l)
              throw Error(R(301));
          l += 1,
          ne = b = null,
          t.updateQueue = null,
          Io.current = iv,
          e = n(r, o)
      } while (Cr)
  }
  if (Io.current = il,
  t = b !== null && b.next !== null,
  an = 0,
  ne = b = Y = null,
  ll = !1,
  t)
      throw Error(R(300));
  return e
}
function Zu() {
  var e = Vr !== 0;
  return Vr = 0,
  e
}
function ut() {
  var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
  };
  return ne === null ? Y.memoizedState = ne = e : ne = ne.next = e,
  ne
}
function Ke() {
  if (b === null) {
      var e = Y.alternate;
      e = e !== null ? e.memoizedState : null
  } else
      e = b.next;
  var t = ne === null ? Y.memoizedState : ne.next;
  if (t !== null)
      ne = t,
      b = e;
  else {
      if (e === null)
          throw Error(R(310));
      b = e,
      e = {
          memoizedState: b.memoizedState,
          baseState: b.baseState,
          baseQueue: b.baseQueue,
          queue: b.queue,
          next: null
      },
      ne === null ? Y.memoizedState = ne = e : ne = ne.next = e
  }
  return ne
}
function Hr(e, t) {
  return typeof t == "function" ? t(e) : t
}
function ci(e) {
  var t = Ke()
    , n = t.queue;
  if (n === null)
      throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = b
    , o = r.baseQueue
    , l = n.pending;
  if (l !== null) {
      if (o !== null) {
          var i = o.next;
          o.next = l.next,
          l.next = i
      }
      r.baseQueue = o = l,
      n.pending = null
  }
  if (o !== null) {
      l = o.next,
      r = r.baseState;
      var u = i = null
        , s = null
        , a = l;
      do {
          var d = a.lane;
          if ((an & d) === d)
              s !== null && (s = s.next = {
                  lane: 0,
                  action: a.action,
                  hasEagerState: a.hasEagerState,
                  eagerState: a.eagerState,
                  next: null
              }),
              r = a.hasEagerState ? a.eagerState : e(r, a.action);
          else {
              var c = {
                  lane: d,
                  action: a.action,
                  hasEagerState: a.hasEagerState,
                  eagerState: a.eagerState,
                  next: null
              };
              s === null ? (u = s = c,
              i = r) : s = s.next = c,
              Y.lanes |= d,
              cn |= d
          }
          a = a.next
      } while (a !== null && a !== l);
      s === null ? i = r : s.next = u,
      nt(r, t.memoizedState) || (Re = !0),
      t.memoizedState = r,
      t.baseState = i,
      t.baseQueue = s,
      n.lastRenderedState = r
  }
  if (e = n.interleaved,
  e !== null) {
      o = e;
      do
          l = o.lane,
          Y.lanes |= l,
          cn |= l,
          o = o.next;
      while (o !== e)
  } else
      o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch]
}
function di(e) {
  var t = Ke()
    , n = t.queue;
  if (n === null)
      throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch
    , o = n.pending
    , l = t.memoizedState;
  if (o !== null) {
      n.pending = null;
      var i = o = o.next;
      do
          l = e(l, i.action),
          i = i.next;
      while (i !== o);
      nt(l, t.memoizedState) || (Re = !0),
      t.memoizedState = l,
      t.baseQueue === null && (t.baseState = l),
      n.lastRenderedState = l
  }
  return [l, r]
}
function xd() {}
function kd(e, t) {
  var n = Y
    , r = Ke()
    , o = t()
    , l = !nt(r.memoizedState, o);
  if (l && (r.memoizedState = o,
  Re = !0),
  r = r.queue,
  qu(Rd.bind(null, n, r, e), [e]),
  r.getSnapshot !== t || l || ne !== null && ne.memoizedState.tag & 1) {
      if (n.flags |= 2048,
      Qr(9, Ed.bind(null, n, r, o, t), void 0, null),
      oe === null)
          throw Error(R(349));
      an & 30 || Cd(n, t, o)
  }
  return o
}
function Cd(e, t, n) {
  e.flags |= 16384,
  e = {
      getSnapshot: t,
      value: n
  },
  t = Y.updateQueue,
  t === null ? (t = {
      lastEffect: null,
      stores: null
  },
  Y.updateQueue = t,
  t.stores = [e]) : (n = t.stores,
  n === null ? t.stores = [e] : n.push(e))
}
function Ed(e, t, n, r) {
  t.value = n,
  t.getSnapshot = r,
  Pd(t) && Dd(e)
}
function Rd(e, t, n) {
  return n(function() {
      Pd(t) && Dd(e)
  })
}
function Pd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
      var n = t();
      return !nt(e, n)
  } catch {
      return !0
  }
}
function Dd(e) {
  var t = kt(e, 1);
  t !== null && tt(t, e, 1, -1)
}
function ya(e) {
  var t = ut();
  return typeof e == "function" && (e = e()),
  t.memoizedState = t.baseState = e,
  e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Hr,
      lastRenderedState: e
  },
  t.queue = e,
  e = e.dispatch = rv.bind(null, Y, e),
  [t.memoizedState, e]
}
function Qr(e, t, n, r) {
  return e = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      next: null
  },
  t = Y.updateQueue,
  t === null ? (t = {
      lastEffect: null,
      stores: null
  },
  Y.updateQueue = t,
  t.lastEffect = e.next = e) : (n = t.lastEffect,
  n === null ? t.lastEffect = e.next = e : (r = n.next,
  n.next = e,
  e.next = r,
  t.lastEffect = e)),
  e
}
function Nd() {
  return Ke().memoizedState
}
function Ao(e, t, n, r) {
  var o = ut();
  Y.flags |= e,
  o.memoizedState = Qr(1 | t, n, void 0, r === void 0 ? null : r)
}
function Dl(e, t, n, r) {
  var o = Ke();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (b !== null) {
      var i = b.memoizedState;
      if (l = i.destroy,
      r !== null && Gu(r, i.deps)) {
          o.memoizedState = Qr(t, n, l, r);
          return
      }
  }
  Y.flags |= e,
  o.memoizedState = Qr(1 | t, n, l, r)
}
function wa(e, t) {
  return Ao(8390656, 8, e, t)
}
function qu(e, t) {
  return Dl(2048, 8, e, t)
}
function _d(e, t) {
  return Dl(4, 2, e, t)
}
function Td(e, t) {
  return Dl(4, 4, e, t)
}
function Md(e, t) {
  if (typeof t == "function")
      return e = e(),
      t(e),
      function() {
          t(null)
      }
      ;
  if (t != null)
      return e = e(),
      t.current = e,
      function() {
          t.current = null
      }
}
function zd(e, t, n) {
  return n = n != null ? n.concat([e]) : null,
  Dl(4, 4, Md.bind(null, t, e), n)
}
function bu() {}
function Ld(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Gu(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
  e)
}
function Od(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Gu(t, r[1]) ? r[0] : (e = e(),
  n.memoizedState = [e, t],
  e)
}
function Id(e, t, n) {
  return an & 21 ? (nt(n, t) || (n = jc(),
  Y.lanes |= n,
  cn |= n,
  e.baseState = !0),
  t) : (e.baseState && (e.baseState = !1,
  Re = !0),
  e.memoizedState = n)
}
function tv(e, t) {
  var n = j;
  j = n !== 0 && 4 > n ? n : 4,
  e(!0);
  var r = ai.transition;
  ai.transition = {};
  try {
      e(!1),
      t()
  } finally {
      j = n,
      ai.transition = r
  }
}
function Ad() {
  return Ke().memoizedState
}
function nv(e, t, n) {
  var r = Ht(e);
  if (n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
  },
  Fd(e))
      jd(t, n);
  else if (n = hd(e, t, n, r),
  n !== null) {
      var o = we();
      tt(n, e, r, o),
      $d(n, t, r)
  }
}
function rv(e, t, n) {
  var r = Ht(e)
    , o = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
  };
  if (Fd(e))
      jd(t, o);
  else {
      var l = e.alternate;
      if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer,
      l !== null))
          try {
              var i = t.lastRenderedState
                , u = l(i, n);
              if (o.hasEagerState = !0,
              o.eagerState = u,
              nt(u, i)) {
                  var s = t.interleaved;
                  s === null ? (o.next = o,
                  Hu(t)) : (o.next = s.next,
                  s.next = o),
                  t.interleaved = o;
                  return
              }
          } catch {} finally {}
      n = hd(e, t, o, r),
      n !== null && (o = we(),
      tt(n, e, r, o),
      $d(n, t, r))
  }
}
function Fd(e) {
  var t = e.alternate;
  return e === Y || t !== null && t === Y
}
function jd(e, t) {
  Cr = ll = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next,
  n.next = t),
  e.pending = t
}
function $d(e, t, n) {
  if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes,
      n |= r,
      t.lanes = n,
      Tu(e, n)
  }
}
var il = {
  readContext: Qe,
  useCallback: pe,
  useContext: pe,
  useEffect: pe,
  useImperativeHandle: pe,
  useInsertionEffect: pe,
  useLayoutEffect: pe,
  useMemo: pe,
  useReducer: pe,
  useRef: pe,
  useState: pe,
  useDebugValue: pe,
  useDeferredValue: pe,
  useTransition: pe,
  useMutableSource: pe,
  useSyncExternalStore: pe,
  useId: pe,
  unstable_isNewReconciler: !1
}
, ov = {
  readContext: Qe,
  useCallback: function(e, t) {
      return ut().memoizedState = [e, t === void 0 ? null : t],
      e
  },
  useContext: Qe,
  useEffect: wa,
  useImperativeHandle: function(e, t, n) {
      return n = n != null ? n.concat([e]) : null,
      Ao(4194308, 4, Md.bind(null, t, e), n)
  },
  useLayoutEffect: function(e, t) {
      return Ao(4194308, 4, e, t)
  },
  useInsertionEffect: function(e, t) {
      return Ao(4, 2, e, t)
  },
  useMemo: function(e, t) {
      var n = ut();
      return t = t === void 0 ? null : t,
      e = e(),
      n.memoizedState = [e, t],
      e
  },
  useReducer: function(e, t, n) {
      var r = ut();
      return t = n !== void 0 ? n(t) : t,
      r.memoizedState = r.baseState = t,
      e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t
      },
      r.queue = e,
      e = e.dispatch = nv.bind(null, Y, e),
      [r.memoizedState, e]
  },
  useRef: function(e) {
      var t = ut();
      return e = {
          current: e
      },
      t.memoizedState = e
  },
  useState: ya,
  useDebugValue: bu,
  useDeferredValue: function(e) {
      return ut().memoizedState = e
  },
  useTransition: function() {
      var e = ya(!1)
        , t = e[0];
      return e = tv.bind(null, e[1]),
      ut().memoizedState = e,
      [t, e]
  },
  useMutableSource: function() {},
  useSyncExternalStore: function(e, t, n) {
      var r = Y
        , o = ut();
      if (Q) {
          if (n === void 0)
              throw Error(R(407));
          n = n()
      } else {
          if (n = t(),
          oe === null)
              throw Error(R(349));
          an & 30 || Cd(r, t, n)
      }
      o.memoizedState = n;
      var l = {
          value: n,
          getSnapshot: t
      };
      return o.queue = l,
      wa(Rd.bind(null, r, l, e), [e]),
      r.flags |= 2048,
      Qr(9, Ed.bind(null, r, l, n, t), void 0, null),
      n
  },
  useId: function() {
      var e = ut()
        , t = oe.identifierPrefix;
      if (Q) {
          var n = yt
            , r = gt;
          n = (r & ~(1 << 32 - et(r) - 1)).toString(32) + n,
          t = ":" + t + "R" + n,
          n = Vr++,
          0 < n && (t += "H" + n.toString(32)),
          t += ":"
      } else
          n = ev++,
          t = ":" + t + "r" + n.toString(32) + ":";
      return e.memoizedState = t
  },
  unstable_isNewReconciler: !1
}
, lv = {
  readContext: Qe,
  useCallback: Ld,
  useContext: Qe,
  useEffect: qu,
  useImperativeHandle: zd,
  useInsertionEffect: _d,
  useLayoutEffect: Td,
  useMemo: Od,
  useReducer: ci,
  useRef: Nd,
  useState: function() {
      return ci(Hr)
  },
  useDebugValue: bu,
  useDeferredValue: function(e) {
      var t = Ke();
      return Id(t, b.memoizedState, e)
  },
  useTransition: function() {
      var e = ci(Hr)[0]
        , t = Ke().memoizedState;
      return [e, t]
  },
  useMutableSource: xd,
  useSyncExternalStore: kd,
  useId: Ad,
  unstable_isNewReconciler: !1
}
, iv = {
  readContext: Qe,
  useCallback: Ld,
  useContext: Qe,
  useEffect: qu,
  useImperativeHandle: zd,
  useInsertionEffect: _d,
  useLayoutEffect: Td,
  useMemo: Od,
  useReducer: di,
  useRef: Nd,
  useState: function() {
      return di(Hr)
  },
  useDebugValue: bu,
  useDeferredValue: function(e) {
      var t = Ke();
      return b === null ? t.memoizedState = e : Id(t, b.memoizedState, e)
  },
  useTransition: function() {
      var e = di(Hr)[0]
        , t = Ke().memoizedState;
      return [e, t]
  },
  useMutableSource: xd,
  useSyncExternalStore: kd,
  useId: Ad,
  unstable_isNewReconciler: !1
};
function Kn(e, t) {
  try {
      var n = ""
        , r = t;
      do
          n += Op(r),
          r = r.return;
      while (r);
      var o = n
  } catch (l) {
      o = `
Error generating stack: ` + l.message + `
` + l.stack
  }
  return {
      value: e,
      source: t,
      stack: o,
      digest: null
  }
}
function fi(e, t, n) {
  return {
      value: e,
      source: null,
      stack: n ?? null,
      digest: t ?? null
  }
}
function tu(e, t) {
  try {
      console.error(t.value)
  } catch (n) {
      setTimeout(function() {
          throw n
      })
  }
}
var uv = typeof WeakMap == "function" ? WeakMap : Map;
function Ud(e, t, n) {
  n = wt(-1, n),
  n.tag = 3,
  n.payload = {
      element: null
  };
  var r = t.value;
  return n.callback = function() {
      sl || (sl = !0,
      du = r),
      tu(e, t)
  }
  ,
  n
}
function Bd(e, t, n) {
  n = wt(-1, n),
  n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
      var o = t.value;
      n.payload = function() {
          return r(o)
      }
      ,
      n.callback = function() {
          tu(e, t)
      }
  }
  var l = e.stateNode;
  return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
      tu(e, t),
      typeof r != "function" && (Vt === null ? Vt = new Set([this]) : Vt.add(this));
      var i = t.stack;
      this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : ""
      })
  }
  ),
  n
}
function Sa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
      r = e.pingCache = new uv;
      var o = new Set;
      r.set(t, o)
  } else
      o = r.get(t),
      o === void 0 && (o = new Set,
      r.set(t, o));
  o.has(n) || (o.add(n),
  e = xv.bind(null, e, t, n),
  t.then(e, e))
}
function xa(e) {
  do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState,
      t = t !== null ? t.dehydrated !== null : !0),
      t)
          return e;
      e = e.return
  } while (e !== null);
  return null
}
function ka(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536,
  e.lanes = o,
  e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
  n.flags |= 131072,
  n.flags &= -52805,
  n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = wt(-1, 1),
  t.tag = 2,
  Wt(n, t, 1))),
  n.lanes |= 1),
  e)
}
var sv = Et.ReactCurrentOwner
, Re = !1;
function ye(e, t, n, r) {
  t.child = e === null ? wd(t, null, n, r) : Hn(t, e.child, n, r)
}
function Ca(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return jn(t, o),
  r = Ju(e, t, n, r, l, o),
  n = Zu(),
  e !== null && !Re ? (t.updateQueue = e.updateQueue,
  t.flags &= -2053,
  e.lanes &= ~o,
  Ct(e, t, o)) : (Q && n && ju(t),
  t.flags |= 1,
  ye(e, t, r, o),
  t.child)
}
function Ea(e, t, n, r, o) {
  if (e === null) {
      var l = n.type;
      return typeof l == "function" && !us(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
      t.type = l,
      Wd(e, t, l, r, o)) : (e = Uo(n.type, null, r, t, t.mode, o),
      e.ref = t.ref,
      e.return = t,
      t.child = e)
  }
  if (l = e.child,
  !(e.lanes & o)) {
      var i = l.memoizedProps;
      if (n = n.compare,
      n = n !== null ? n : Fr,
      n(i, r) && e.ref === t.ref)
          return Ct(e, t, o)
  }
  return t.flags |= 1,
  e = Qt(l, r),
  e.ref = t.ref,
  e.return = t,
  t.child = e
}
function Wd(e, t, n, r, o) {
  if (e !== null) {
      var l = e.memoizedProps;
      if (Fr(l, r) && e.ref === t.ref)
          if (Re = !1,
          t.pendingProps = r = l,
          (e.lanes & o) !== 0)
              e.flags & 131072 && (Re = !0);
          else
              return t.lanes = e.lanes,
              Ct(e, t, o)
  }
  return nu(e, t, n, r, o)
}
function Vd(e, t, n) {
  var r = t.pendingProps
    , o = r.children
    , l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
      if (!(t.mode & 1))
          t.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null
          },
          B(Ln, ze),
          ze |= n;
      else {
          if (!(n & 1073741824))
              return e = l !== null ? l.baseLanes | n : n,
              t.lanes = t.childLanes = 1073741824,
              t.memoizedState = {
                  baseLanes: e,
                  cachePool: null,
                  transitions: null
              },
              t.updateQueue = null,
              B(Ln, ze),
              ze |= e,
              null;
          t.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null
          },
          r = l !== null ? l.baseLanes : n,
          B(Ln, ze),
          ze |= r
      }
  else
      l !== null ? (r = l.baseLanes | n,
      t.memoizedState = null) : r = n,
      B(Ln, ze),
      ze |= r;
  return ye(e, t, o, n),
  t.child
}
function Hd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
  t.flags |= 2097152)
}
function nu(e, t, n, r, o) {
  var l = De(n) ? un : me.current;
  return l = Wn(t, l),
  jn(t, o),
  n = Ju(e, t, n, r, l, o),
  r = Zu(),
  e !== null && !Re ? (t.updateQueue = e.updateQueue,
  t.flags &= -2053,
  e.lanes &= ~o,
  Ct(e, t, o)) : (Q && r && ju(t),
  t.flags |= 1,
  ye(e, t, n, o),
  t.child)
}
function Ra(e, t, n, r, o) {
  if (De(n)) {
      var l = !0;
      qo(t)
  } else
      l = !1;
  if (jn(t, o),
  t.stateNode === null)
      Fo(e, t),
      gd(t, n, r),
      eu(t, n, r, o),
      r = !0;
  else if (e === null) {
      var i = t.stateNode
        , u = t.memoizedProps;
      i.props = u;
      var s = i.context
        , a = n.contextType;
      typeof a == "object" && a !== null ? a = Qe(a) : (a = De(n) ? un : me.current,
      a = Wn(t, a));
      var d = n.getDerivedStateFromProps
        , c = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      c || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== a) && ma(t, i, r, a),
      zt = !1;
      var p = t.memoizedState;
      i.state = p,
      rl(t, r, i, o),
      s = t.memoizedState,
      u !== r || p !== s || Pe.current || zt ? (typeof d == "function" && (bi(t, n, d, r),
      s = t.memoizedState),
      (u = zt || va(t, n, u, r, p, s, a)) ? (c || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
      typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
      t.memoizedProps = r,
      t.memoizedState = s),
      i.props = r,
      i.state = s,
      i.context = a,
      r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
      r = !1)
  } else {
      i = t.stateNode,
      vd(e, t),
      u = t.memoizedProps,
      a = t.type === t.elementType ? u : Ze(t.type, u),
      i.props = a,
      c = t.pendingProps,
      p = i.context,
      s = n.contextType,
      typeof s == "object" && s !== null ? s = Qe(s) : (s = De(n) ? un : me.current,
      s = Wn(t, s));
      var m = n.getDerivedStateFromProps;
      (d = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== c || p !== s) && ma(t, i, r, s),
      zt = !1,
      p = t.memoizedState,
      i.state = p,
      rl(t, r, i, o);
      var y = t.memoizedState;
      u !== c || p !== y || Pe.current || zt ? (typeof m == "function" && (bi(t, n, m, r),
      y = t.memoizedState),
      (a = zt || va(t, n, a, r, p, y, s) || !1) ? (d || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, y, s),
      typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, y, s)),
      typeof i.componentDidUpdate == "function" && (t.flags |= 4),
      typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
      typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
      t.memoizedProps = r,
      t.memoizedState = y),
      i.props = r,
      i.state = y,
      i.context = s,
      r = a) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
      typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
      r = !1)
  }
  return ru(e, t, n, r, l, o)
}
function ru(e, t, n, r, o, l) {
  Hd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
      return o && ca(t, n, !1),
      Ct(e, t, l);
  r = t.stateNode,
  sv.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1,
  e !== null && i ? (t.child = Hn(t, e.child, null, l),
  t.child = Hn(t, null, u, l)) : ye(e, t, u, l),
  t.memoizedState = r.state,
  o && ca(t, n, !0),
  t.child
}
function Qd(e) {
  var t = e.stateNode;
  t.pendingContext ? aa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && aa(e, t.context, !1),
  Ku(e, t.containerInfo)
}
function Pa(e, t, n, r, o) {
  return Vn(),
  Uu(o),
  t.flags |= 256,
  ye(e, t, n, r),
  t.child
}
var ou = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0
};
function lu(e) {
  return {
      baseLanes: e,
      cachePool: null,
      transitions: null
  }
}
function Kd(e, t, n) {
  var r = t.pendingProps, o = K.current, l = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
  u ? (l = !0,
  t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
  B(K, o & 1),
  e === null)
      return Zi(t),
      e = t.memoizedState,
      e !== null && (e = e.dehydrated,
      e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
      null) : (i = r.children,
      e = r.fallback,
      l ? (r = t.mode,
      l = t.child,
      i = {
          mode: "hidden",
          children: i
      },
      !(r & 1) && l !== null ? (l.childLanes = 0,
      l.pendingProps = i) : l = Tl(i, r, 0, null),
      e = ln(e, r, n, null),
      l.return = t,
      e.return = t,
      l.sibling = e,
      t.child = l,
      t.child.memoizedState = lu(n),
      t.memoizedState = ou,
      e) : es(t, i));
  if (o = e.memoizedState,
  o !== null && (u = o.dehydrated,
  u !== null))
      return av(e, t, i, r, u, o, n);
  if (l) {
      l = r.fallback,
      i = t.mode,
      o = e.child,
      u = o.sibling;
      var s = {
          mode: "hidden",
          children: r.children
      };
      return !(i & 1) && t.child !== o ? (r = t.child,
      r.childLanes = 0,
      r.pendingProps = s,
      t.deletions = null) : (r = Qt(o, s),
      r.subtreeFlags = o.subtreeFlags & 14680064),
      u !== null ? l = Qt(u, l) : (l = ln(l, i, n, null),
      l.flags |= 2),
      l.return = t,
      r.return = t,
      r.sibling = l,
      t.child = r,
      r = l,
      l = t.child,
      i = e.child.memoizedState,
      i = i === null ? lu(n) : {
          baseLanes: i.baseLanes | n,
          cachePool: null,
          transitions: i.transitions
      },
      l.memoizedState = i,
      l.childLanes = e.childLanes & ~n,
      t.memoizedState = ou,
      r
  }
  return l = e.child,
  e = l.sibling,
  r = Qt(l, {
      mode: "visible",
      children: r.children
  }),
  !(t.mode & 1) && (r.lanes = n),
  r.return = t,
  r.sibling = null,
  e !== null && (n = t.deletions,
  n === null ? (t.deletions = [e],
  t.flags |= 16) : n.push(e)),
  t.child = r,
  t.memoizedState = null,
  r
}
function es(e, t) {
  return t = Tl({
      mode: "visible",
      children: t
  }, e.mode, 0, null),
  t.return = e,
  e.child = t
}
function Co(e, t, n, r) {
  return r !== null && Uu(r),
  Hn(t, e.child, null, n),
  e = es(t, t.pendingProps.children),
  e.flags |= 2,
  t.memoizedState = null,
  e
}
function av(e, t, n, r, o, l, i) {
  if (n)
      return t.flags & 256 ? (t.flags &= -257,
      r = fi(Error(R(422))),
      Co(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child,
      t.flags |= 128,
      null) : (l = r.fallback,
      o = t.mode,
      r = Tl({
          mode: "visible",
          children: r.children
      }, o, 0, null),
      l = ln(l, o, i, null),
      l.flags |= 2,
      r.return = t,
      l.return = t,
      r.sibling = l,
      t.child = r,
      t.mode & 1 && Hn(t, e.child, null, i),
      t.child.memoizedState = lu(i),
      t.memoizedState = ou,
      l);
  if (!(t.mode & 1))
      return Co(e, t, i, null);
  if (o.data === "$!") {
      if (r = o.nextSibling && o.nextSibling.dataset,
      r)
          var u = r.dgst;
      return r = u,
      l = Error(R(419)),
      r = fi(l, r, void 0),
      Co(e, t, i, r)
  }
  if (u = (i & e.childLanes) !== 0,
  Re || u) {
      if (r = oe,
      r !== null) {
          switch (i & -i) {
          case 4:
              o = 2;
              break;
          case 16:
              o = 8;
              break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
              o = 32;
              break;
          case 536870912:
              o = 268435456;
              break;
          default:
              o = 0
          }
          o = o & (r.suspendedLanes | i) ? 0 : o,
          o !== 0 && o !== l.retryLane && (l.retryLane = o,
          kt(e, o),
          tt(r, e, o, -1))
      }
      return is(),
      r = fi(Error(R(421))),
      Co(e, t, i, r)
  }
  return o.data === "$?" ? (t.flags |= 128,
  t.child = e.child,
  t = kv.bind(null, e),
  o._reactRetry = t,
  null) : (e = l.treeContext,
  Le = Bt(o.nextSibling),
  Oe = t,
  Q = !0,
  be = null,
  e !== null && (Ue[Be++] = gt,
  Ue[Be++] = yt,
  Ue[Be++] = sn,
  gt = e.id,
  yt = e.overflow,
  sn = t),
  t = es(t, r.children),
  t.flags |= 4096,
  t)
}
function Da(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t),
  qi(e.return, t, n)
}
function pi(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: o
  } : (l.isBackwards = t,
  l.rendering = null,
  l.renderingStartTime = 0,
  l.last = r,
  l.tail = n,
  l.tailMode = o)
}
function Yd(e, t, n) {
  var r = t.pendingProps
    , o = r.revealOrder
    , l = r.tail;
  if (ye(e, t, r.children, n),
  r = K.current,
  r & 2)
      r = r & 1 | 2,
      t.flags |= 128;
  else {
      if (e !== null && e.flags & 128)
          e: for (e = t.child; e !== null; ) {
              if (e.tag === 13)
                  e.memoizedState !== null && Da(e, n, t);
              else if (e.tag === 19)
                  Da(e, n, t);
              else if (e.child !== null) {
                  e.child.return = e,
                  e = e.child;
                  continue
              }
              if (e === t)
                  break e;
              for (; e.sibling === null; ) {
                  if (e.return === null || e.return === t)
                      break e;
                  e = e.return
              }
              e.sibling.return = e.return,
              e = e.sibling
          }
      r &= 1
  }
  if (B(K, r),
  !(t.mode & 1))
      t.memoizedState = null;
  else
      switch (o) {
      case "forwards":
          for (n = t.child,
          o = null; n !== null; )
              e = n.alternate,
              e !== null && ol(e) === null && (o = n),
              n = n.sibling;
          n = o,
          n === null ? (o = t.child,
          t.child = null) : (o = n.sibling,
          n.sibling = null),
          pi(t, !1, o, n, l);
          break;
      case "backwards":
          for (n = null,
          o = t.child,
          t.child = null; o !== null; ) {
              if (e = o.alternate,
              e !== null && ol(e) === null) {
                  t.child = o;
                  break
              }
              e = o.sibling,
              o.sibling = n,
              n = o,
              o = e
          }
          pi(t, !0, n, null, l);
          break;
      case "together":
          pi(t, !1, null, null, void 0);
          break;
      default:
          t.memoizedState = null
      }
  return t.child
}
function Fo(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null,
  t.alternate = null,
  t.flags |= 2)
}
function Ct(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies),
  cn |= t.lanes,
  !(n & t.childLanes))
      return null;
  if (e !== null && t.child !== e.child)
      throw Error(R(153));
  if (t.child !== null) {
      for (e = t.child,
      n = Qt(e, e.pendingProps),
      t.child = n,
      n.return = t; e.sibling !== null; )
          e = e.sibling,
          n = n.sibling = Qt(e, e.pendingProps),
          n.return = t;
      n.sibling = null
  }
  return t.child
}
function cv(e, t, n) {
  switch (t.tag) {
  case 3:
      Qd(t),
      Vn();
      break;
  case 5:
      Sd(t);
      break;
  case 1:
      De(t.type) && qo(t);
      break;
  case 4:
      Ku(t, t.stateNode.containerInfo);
      break;
  case 10:
      var r = t.type._context
        , o = t.memoizedProps.value;
      B(tl, r._currentValue),
      r._currentValue = o;
      break;
  case 13:
      if (r = t.memoizedState,
      r !== null)
          return r.dehydrated !== null ? (B(K, K.current & 1),
          t.flags |= 128,
          null) : n & t.child.childLanes ? Kd(e, t, n) : (B(K, K.current & 1),
          e = Ct(e, t, n),
          e !== null ? e.sibling : null);
      B(K, K.current & 1);
      break;
  case 19:
      if (r = (n & t.childLanes) !== 0,
      e.flags & 128) {
          if (r)
              return Yd(e, t, n);
          t.flags |= 128
      }
      if (o = t.memoizedState,
      o !== null && (o.rendering = null,
      o.tail = null,
      o.lastEffect = null),
      B(K, K.current),
      r)
          break;
      return null;
  case 22:
  case 23:
      return t.lanes = 0,
      Vd(e, t, n)
  }
  return Ct(e, t, n)
}
var Xd, iu, Gd, Jd;
Xd = function(e, t) {
  for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6)
          e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
          n.child.return = n,
          n = n.child;
          continue
      }
      if (n === t)
          break;
      for (; n.sibling === null; ) {
          if (n.return === null || n.return === t)
              return;
          n = n.return
      }
      n.sibling.return = n.return,
      n = n.sibling
  }
}
;
iu = function() {}
;
Gd = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
      e = t.stateNode,
      rn(ct.current);
      var l = null;
      switch (n) {
      case "input":
          o = Ni(e, o),
          r = Ni(e, r),
          l = [];
          break;
      case "select":
          o = X({}, o, {
              value: void 0
          }),
          r = X({}, r, {
              value: void 0
          }),
          l = [];
          break;
      case "textarea":
          o = Mi(e, o),
          r = Mi(e, r),
          l = [];
          break;
      default:
          typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Jo)
      }
      Li(n, r);
      var i;
      n = null;
      for (a in o)
          if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
              if (a === "style") {
                  var u = o[a];
                  for (i in u)
                      u.hasOwnProperty(i) && (n || (n = {}),
                      n[i] = "")
              } else
                  a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Tr.hasOwnProperty(a) ? l || (l = []) : (l = l || []).push(a, null));
      for (a in r) {
          var s = r[a];
          if (u = o != null ? o[a] : void 0,
          r.hasOwnProperty(a) && s !== u && (s != null || u != null))
              if (a === "style")
                  if (u) {
                      for (i in u)
                          !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}),
                          n[i] = "");
                      for (i in s)
                          s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}),
                          n[i] = s[i])
                  } else
                      n || (l || (l = []),
                      l.push(a, n)),
                      n = s;
              else
                  a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                  u = u ? u.__html : void 0,
                  s != null && u !== s && (l = l || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (l = l || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Tr.hasOwnProperty(a) ? (s != null && a === "onScroll" && W("scroll", e),
                  l || u === s || (l = [])) : (l = l || []).push(a, s))
      }
      n && (l = l || []).push("style", n);
      var a = l;
      (t.updateQueue = a) && (t.flags |= 4)
  }
}
;
Jd = function(e, t, n, r) {
  n !== r && (t.flags |= 4)
}
;
function fr(e, t) {
  if (!Q)
      switch (e.tailMode) {
      case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
              t.alternate !== null && (n = t),
              t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
      case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
              n.alternate !== null && (r = n),
              n = n.sibling;
          r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
      }
}
function he(e) {
  var t = e.alternate !== null && e.alternate.child === e.child
    , n = 0
    , r = 0;
  if (t)
      for (var o = e.child; o !== null; )
          n |= o.lanes | o.childLanes,
          r |= o.subtreeFlags & 14680064,
          r |= o.flags & 14680064,
          o.return = e,
          o = o.sibling;
  else
      for (o = e.child; o !== null; )
          n |= o.lanes | o.childLanes,
          r |= o.subtreeFlags,
          r |= o.flags,
          o.return = e,
          o = o.sibling;
  return e.subtreeFlags |= r,
  e.childLanes = n,
  t
}
function dv(e, t, n) {
  var r = t.pendingProps;
  switch ($u(t),
  t.tag) {
  case 2:
  case 16:
  case 15:
  case 0:
  case 11:
  case 7:
  case 8:
  case 12:
  case 9:
  case 14:
      return he(t),
      null;
  case 1:
      return De(t.type) && Zo(),
      he(t),
      null;
  case 3:
      return r = t.stateNode,
      Qn(),
      V(Pe),
      V(me),
      Xu(),
      r.pendingContext && (r.context = r.pendingContext,
      r.pendingContext = null),
      (e === null || e.child === null) && (xo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
      be !== null && (hu(be),
      be = null))),
      iu(e, t),
      he(t),
      null;
  case 5:
      Yu(t);
      var o = rn(Wr.current);
      if (n = t.type,
      e !== null && t.stateNode != null)
          Gd(e, t, n, r, o),
          e.ref !== t.ref && (t.flags |= 512,
          t.flags |= 2097152);
      else {
          if (!r) {
              if (t.stateNode === null)
                  throw Error(R(166));
              return he(t),
              null
          }
          if (e = rn(ct.current),
          xo(t)) {
              r = t.stateNode,
              n = t.type;
              var l = t.memoizedProps;
              switch (r[st] = t,
              r[Ur] = l,
              e = (t.mode & 1) !== 0,
              n) {
              case "dialog":
                  W("cancel", r),
                  W("close", r);
                  break;
              case "iframe":
              case "object":
              case "embed":
                  W("load", r);
                  break;
              case "video":
              case "audio":
                  for (o = 0; o < gr.length; o++)
                      W(gr[o], r);
                  break;
              case "source":
                  W("error", r);
                  break;
              case "img":
              case "image":
              case "link":
                  W("error", r),
                  W("load", r);
                  break;
              case "details":
                  W("toggle", r);
                  break;
              case "input":
                  As(r, l),
                  W("invalid", r);
                  break;
              case "select":
                  r._wrapperState = {
                      wasMultiple: !!l.multiple
                  },
                  W("invalid", r);
                  break;
              case "textarea":
                  js(r, l),
                  W("invalid", r)
              }
              Li(n, l),
              o = null;
              for (var i in l)
                  if (l.hasOwnProperty(i)) {
                      var u = l[i];
                      i === "children" ? typeof u == "string" ? r.textContent !== u && (l.suppressHydrationWarning !== !0 && So(r.textContent, u, e),
                      o = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (l.suppressHydrationWarning !== !0 && So(r.textContent, u, e),
                      o = ["children", "" + u]) : Tr.hasOwnProperty(i) && u != null && i === "onScroll" && W("scroll", r)
                  }
              switch (n) {
              case "input":
                  fo(r),
                  Fs(r, l, !0);
                  break;
              case "textarea":
                  fo(r),
                  $s(r);
                  break;
              case "select":
              case "option":
                  break;
              default:
                  typeof l.onClick == "function" && (r.onclick = Jo)
              }
              r = o,
              t.updateQueue = r,
              r !== null && (t.flags |= 4)
          } else {
              i = o.nodeType === 9 ? o : o.ownerDocument,
              e === "http://www.w3.org/1999/xhtml" && (e = Cc(n)),
              e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"),
              e.innerHTML = "<script><\/script>",
              e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                  is: r.is
              }) : (e = i.createElement(n),
              n === "select" && (i = e,
              r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n),
              e[st] = t,
              e[Ur] = r,
              Xd(e, t, !1, !1),
              t.stateNode = e;
              e: {
                  switch (i = Oi(n, r),
                  n) {
                  case "dialog":
                      W("cancel", e),
                      W("close", e),
                      o = r;
                      break;
                  case "iframe":
                  case "object":
                  case "embed":
                      W("load", e),
                      o = r;
                      break;
                  case "video":
                  case "audio":
                      for (o = 0; o < gr.length; o++)
                          W(gr[o], e);
                      o = r;
                      break;
                  case "source":
                      W("error", e),
                      o = r;
                      break;
                  case "img":
                  case "image":
                  case "link":
                      W("error", e),
                      W("load", e),
                      o = r;
                      break;
                  case "details":
                      W("toggle", e),
                      o = r;
                      break;
                  case "input":
                      As(e, r),
                      o = Ni(e, r),
                      W("invalid", e);
                      break;
                  case "option":
                      o = r;
                      break;
                  case "select":
                      e._wrapperState = {
                          wasMultiple: !!r.multiple
                      },
                      o = X({}, r, {
                          value: void 0
                      }),
                      W("invalid", e);
                      break;
                  case "textarea":
                      js(e, r),
                      o = Mi(e, r),
                      W("invalid", e);
                      break;
                  default:
                      o = r
                  }
                  Li(n, o),
                  u = o;
                  for (l in u)
                      if (u.hasOwnProperty(l)) {
                          var s = u[l];
                          l === "style" ? Pc(e, s) : l === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                          s != null && Ec(e, s)) : l === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Mr(e, s) : typeof s == "number" && Mr(e, "" + s) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Tr.hasOwnProperty(l) ? s != null && l === "onScroll" && W("scroll", e) : s != null && Eu(e, l, s, i))
                      }
                  switch (n) {
                  case "input":
                      fo(e),
                      Fs(e, r, !1);
                      break;
                  case "textarea":
                      fo(e),
                      $s(e);
                      break;
                  case "option":
                      r.value != null && e.setAttribute("value", "" + Kt(r.value));
                      break;
                  case "select":
                      e.multiple = !!r.multiple,
                      l = r.value,
                      l != null ? On(e, !!r.multiple, l, !1) : r.defaultValue != null && On(e, !!r.multiple, r.defaultValue, !0);
                      break;
                  default:
                      typeof o.onClick == "function" && (e.onclick = Jo)
                  }
                  switch (n) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                      r = !!r.autoFocus;
                      break e;
                  case "img":
                      r = !0;
                      break e;
                  default:
                      r = !1
                  }
              }
              r && (t.flags |= 4)
          }
          t.ref !== null && (t.flags |= 512,
          t.flags |= 2097152)
      }
      return he(t),
      null;
  case 6:
      if (e && t.stateNode != null)
          Jd(e, t, e.memoizedProps, r);
      else {
          if (typeof r != "string" && t.stateNode === null)
              throw Error(R(166));
          if (n = rn(Wr.current),
          rn(ct.current),
          xo(t)) {
              if (r = t.stateNode,
              n = t.memoizedProps,
              r[st] = t,
              (l = r.nodeValue !== n) && (e = Oe,
              e !== null))
                  switch (e.tag) {
                  case 3:
                      So(r.nodeValue, n, (e.mode & 1) !== 0);
                      break;
                  case 5:
                      e.memoizedProps.suppressHydrationWarning !== !0 && So(r.nodeValue, n, (e.mode & 1) !== 0)
                  }
              l && (t.flags |= 4)
          } else
              r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
              r[st] = t,
              t.stateNode = r
      }
      return he(t),
      null;
  case 13:
      if (V(K),
      r = t.memoizedState,
      e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Q && Le !== null && t.mode & 1 && !(t.flags & 128))
              pd(),
              Vn(),
              t.flags |= 98560,
              l = !1;
          else if (l = xo(t),
          r !== null && r.dehydrated !== null) {
              if (e === null) {
                  if (!l)
                      throw Error(R(318));
                  if (l = t.memoizedState,
                  l = l !== null ? l.dehydrated : null,
                  !l)
                      throw Error(R(317));
                  l[st] = t
              } else
                  Vn(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  t.flags |= 4;
              he(t),
              l = !1
          } else
              be !== null && (hu(be),
              be = null),
              l = !0;
          if (!l)
              return t.flags & 65536 ? t : null
      }
      return t.flags & 128 ? (t.lanes = n,
      t) : (r = r !== null,
      r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
      t.mode & 1 && (e === null || K.current & 1 ? te === 0 && (te = 3) : is())),
      t.updateQueue !== null && (t.flags |= 4),
      he(t),
      null);
  case 4:
      return Qn(),
      iu(e, t),
      e === null && jr(t.stateNode.containerInfo),
      he(t),
      null;
  case 10:
      return Vu(t.type._context),
      he(t),
      null;
  case 17:
      return De(t.type) && Zo(),
      he(t),
      null;
  case 19:
      if (V(K),
      l = t.memoizedState,
      l === null)
          return he(t),
          null;
      if (r = (t.flags & 128) !== 0,
      i = l.rendering,
      i === null)
          if (r)
              fr(l, !1);
          else {
              if (te !== 0 || e !== null && e.flags & 128)
                  for (e = t.child; e !== null; ) {
                      if (i = ol(e),
                      i !== null) {
                          for (t.flags |= 128,
                          fr(l, !1),
                          r = i.updateQueue,
                          r !== null && (t.updateQueue = r,
                          t.flags |= 4),
                          t.subtreeFlags = 0,
                          r = n,
                          n = t.child; n !== null; )
                              l = n,
                              e = r,
                              l.flags &= 14680066,
                              i = l.alternate,
                              i === null ? (l.childLanes = 0,
                              l.lanes = e,
                              l.child = null,
                              l.subtreeFlags = 0,
                              l.memoizedProps = null,
                              l.memoizedState = null,
                              l.updateQueue = null,
                              l.dependencies = null,
                              l.stateNode = null) : (l.childLanes = i.childLanes,
                              l.lanes = i.lanes,
                              l.child = i.child,
                              l.subtreeFlags = 0,
                              l.deletions = null,
                              l.memoizedProps = i.memoizedProps,
                              l.memoizedState = i.memoizedState,
                              l.updateQueue = i.updateQueue,
                              l.type = i.type,
                              e = i.dependencies,
                              l.dependencies = e === null ? null : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext
                              }),
                              n = n.sibling;
                          return B(K, K.current & 1 | 2),
                          t.child
                      }
                      e = e.sibling
                  }
              l.tail !== null && J() > Yn && (t.flags |= 128,
              r = !0,
              fr(l, !1),
              t.lanes = 4194304)
          }
      else {
          if (!r)
              if (e = ol(i),
              e !== null) {
                  if (t.flags |= 128,
                  r = !0,
                  n = e.updateQueue,
                  n !== null && (t.updateQueue = n,
                  t.flags |= 4),
                  fr(l, !0),
                  l.tail === null && l.tailMode === "hidden" && !i.alternate && !Q)
                      return he(t),
                      null
              } else
                  2 * J() - l.renderingStartTime > Yn && n !== 1073741824 && (t.flags |= 128,
                  r = !0,
                  fr(l, !1),
                  t.lanes = 4194304);
          l.isBackwards ? (i.sibling = t.child,
          t.child = i) : (n = l.last,
          n !== null ? n.sibling = i : t.child = i,
          l.last = i)
      }
      return l.tail !== null ? (t = l.tail,
      l.rendering = t,
      l.tail = t.sibling,
      l.renderingStartTime = J(),
      t.sibling = null,
      n = K.current,
      B(K, r ? n & 1 | 2 : n & 1),
      t) : (he(t),
      null);
  case 22:
  case 23:
      return ls(),
      r = t.memoizedState !== null,
      e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
      r && t.mode & 1 ? ze & 1073741824 && (he(t),
      t.subtreeFlags & 6 && (t.flags |= 8192)) : he(t),
      null;
  case 24:
      return null;
  case 25:
      return null
  }
  throw Error(R(156, t.tag))
}
function fv(e, t) {
  switch ($u(t),
  t.tag) {
  case 1:
      return De(t.type) && Zo(),
      e = t.flags,
      e & 65536 ? (t.flags = e & -65537 | 128,
      t) : null;
  case 3:
      return Qn(),
      V(Pe),
      V(me),
      Xu(),
      e = t.flags,
      e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
      t) : null;
  case 5:
      return Yu(t),
      null;
  case 13:
      if (V(K),
      e = t.memoizedState,
      e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
              throw Error(R(340));
          Vn()
      }
      return e = t.flags,
      e & 65536 ? (t.flags = e & -65537 | 128,
      t) : null;
  case 19:
      return V(K),
      null;
  case 4:
      return Qn(),
      null;
  case 10:
      return Vu(t.type._context),
      null;
  case 22:
  case 23:
      return ls(),
      null;
  case 24:
      return null;
  default:
      return null
  }
}
var Eo = !1
, ve = !1
, pv = typeof WeakSet == "function" ? WeakSet : Set
, N = null;
function zn(e, t) {
  var n = e.ref;
  if (n !== null)
      if (typeof n == "function")
          try {
              n(null)
          } catch (r) {
              G(e, t, r)
          }
      else
          n.current = null
}
function uu(e, t, n) {
  try {
      n()
  } catch (r) {
      G(e, t, r)
  }
}
var Na = !1;
function hv(e, t) {
  if (Hi = Yo,
  e = ed(),
  Fu(e)) {
      if ("selectionStart"in e)
          var n = {
              start: e.selectionStart,
              end: e.selectionEnd
          };
      else
          e: {
              n = (n = e.ownerDocument) && n.defaultView || window;
              var r = n.getSelection && n.getSelection();
              if (r && r.rangeCount !== 0) {
                  n = r.anchorNode;
                  var o = r.anchorOffset
                    , l = r.focusNode;
                  r = r.focusOffset;
                  try {
                      n.nodeType,
                      l.nodeType
                  } catch {
                      n = null;
                      break e
                  }
                  var i = 0
                    , u = -1
                    , s = -1
                    , a = 0
                    , d = 0
                    , c = e
                    , p = null;
                  t: for (; ; ) {
                      for (var m; c !== n || o !== 0 && c.nodeType !== 3 || (u = i + o),
                      c !== l || r !== 0 && c.nodeType !== 3 || (s = i + r),
                      c.nodeType === 3 && (i += c.nodeValue.length),
                      (m = c.firstChild) !== null; )
                          p = c,
                          c = m;
                      for (; ; ) {
                          if (c === e)
                              break t;
                          if (p === n && ++a === o && (u = i),
                          p === l && ++d === r && (s = i),
                          (m = c.nextSibling) !== null)
                              break;
                          c = p,
                          p = c.parentNode
                      }
                      c = m
                  }
                  n = u === -1 || s === -1 ? null : {
                      start: u,
                      end: s
                  }
              } else
                  n = null
          }
      n = n || {
          start: 0,
          end: 0
      }
  } else
      n = null;
  for (Qi = {
      focusedElem: e,
      selectionRange: n
  },
  Yo = !1,
  N = t; N !== null; )
      if (t = N,
      e = t.child,
      (t.subtreeFlags & 1028) !== 0 && e !== null)
          e.return = t,
          N = e;
      else
          for (; N !== null; ) {
              t = N;
              try {
                  var y = t.alternate;
                  if (t.flags & 1024)
                      switch (t.tag) {
                      case 0:
                      case 11:
                      case 15:
                          break;
                      case 1:
                          if (y !== null) {
                              var w = y.memoizedProps
                                , k = y.memoizedState
                                , h = t.stateNode
                                , f = h.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Ze(t.type, w), k);
                              h.__reactInternalSnapshotBeforeUpdate = f
                          }
                          break;
                      case 3:
                          var v = t.stateNode.containerInfo;
                          v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                          break;
                      case 5:
                      case 6:
                      case 4:
                      case 17:
                          break;
                      default:
                          throw Error(R(163))
                      }
              } catch (S) {
                  G(t, t.return, S)
              }
              if (e = t.sibling,
              e !== null) {
                  e.return = t.return,
                  N = e;
                  break
              }
              N = t.return
          }
  return y = Na,
  Na = !1,
  y
}
function Er(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null,
  r !== null) {
      var o = r = r.next;
      do {
          if ((o.tag & e) === e) {
              var l = o.destroy;
              o.destroy = void 0,
              l !== void 0 && uu(t, n, l)
          }
          o = o.next
      } while (o !== r)
  }
}
function Nl(e, t) {
  if (t = t.updateQueue,
  t = t !== null ? t.lastEffect : null,
  t !== null) {
      var n = t = t.next;
      do {
          if ((n.tag & e) === e) {
              var r = n.create;
              n.destroy = r()
          }
          n = n.next
      } while (n !== t)
  }
}
function su(e) {
  var t = e.ref;
  if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
      case 5:
          e = n;
          break;
      default:
          e = n
      }
      typeof t == "function" ? t(e) : t.current = e
  }
}
function Zd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null,
  Zd(t)),
  e.child = null,
  e.deletions = null,
  e.sibling = null,
  e.tag === 5 && (t = e.stateNode,
  t !== null && (delete t[st],
  delete t[Ur],
  delete t[Xi],
  delete t[Jh],
  delete t[Zh])),
  e.stateNode = null,
  e.return = null,
  e.dependencies = null,
  e.memoizedProps = null,
  e.memoizedState = null,
  e.pendingProps = null,
  e.stateNode = null,
  e.updateQueue = null
}
function qd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function _a(e) {
  e: for (; ; ) {
      for (; e.sibling === null; ) {
          if (e.return === null || qd(e.return))
              return null;
          e = e.return
      }
      for (e.sibling.return = e.return,
      e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4)
              continue e;
          e.child.return = e,
          e = e.child
      }
      if (!(e.flags & 2))
          return e.stateNode
  }
}
function au(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
      e = e.stateNode,
      t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
      t.insertBefore(e, n)) : (t = n,
      t.appendChild(e)),
      n = n._reactRootContainer,
      n != null || t.onclick !== null || (t.onclick = Jo));
  else if (r !== 4 && (e = e.child,
  e !== null))
      for (au(e, t, n),
      e = e.sibling; e !== null; )
          au(e, t, n),
          e = e.sibling
}
function cu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
      e = e.stateNode,
      t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child,
  e !== null))
      for (cu(e, t, n),
      e = e.sibling; e !== null; )
          cu(e, t, n),
          e = e.sibling
}
var ae = null
, qe = !1;
function Tt(e, t, n) {
  for (n = n.child; n !== null; )
      bd(e, t, n),
      n = n.sibling
}
function bd(e, t, n) {
  if (at && typeof at.onCommitFiberUnmount == "function")
      try {
          at.onCommitFiberUnmount(Sl, n)
      } catch {}
  switch (n.tag) {
  case 5:
      ve || zn(n, t);
  case 6:
      var r = ae
        , o = qe;
      ae = null,
      Tt(e, t, n),
      ae = r,
      qe = o,
      ae !== null && (qe ? (e = ae,
      n = n.stateNode,
      e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ae.removeChild(n.stateNode));
      break;
  case 18:
      ae !== null && (qe ? (e = ae,
      n = n.stateNode,
      e.nodeType === 8 ? ii(e.parentNode, n) : e.nodeType === 1 && ii(e, n),
      Ir(e)) : ii(ae, n.stateNode));
      break;
  case 4:
      r = ae,
      o = qe,
      ae = n.stateNode.containerInfo,
      qe = !0,
      Tt(e, t, n),
      ae = r,
      qe = o;
      break;
  case 0:
  case 11:
  case 14:
  case 15:
      if (!ve && (r = n.updateQueue,
      r !== null && (r = r.lastEffect,
      r !== null))) {
          o = r = r.next;
          do {
              var l = o
                , i = l.destroy;
              l = l.tag,
              i !== void 0 && (l & 2 || l & 4) && uu(n, t, i),
              o = o.next
          } while (o !== r)
      }
      Tt(e, t, n);
      break;
  case 1:
      if (!ve && (zn(n, t),
      r = n.stateNode,
      typeof r.componentWillUnmount == "function"))
          try {
              r.props = n.memoizedProps,
              r.state = n.memoizedState,
              r.componentWillUnmount()
          } catch (u) {
              G(n, t, u)
          }
      Tt(e, t, n);
      break;
  case 21:
      Tt(e, t, n);
      break;
  case 22:
      n.mode & 1 ? (ve = (r = ve) || n.memoizedState !== null,
      Tt(e, t, n),
      ve = r) : Tt(e, t, n);
      break;
  default:
      Tt(e, t, n)
  }
}
function Ta(e) {
  var t = e.updateQueue;
  if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new pv),
      t.forEach(function(r) {
          var o = Cv.bind(null, e, r);
          n.has(r) || (n.add(r),
          r.then(o, o))
      })
  }
}
function Je(e, t) {
  var n = t.deletions;
  if (n !== null)
      for (var r = 0; r < n.length; r++) {
          var o = n[r];
          try {
              var l = e
                , i = t
                , u = i;
              e: for (; u !== null; ) {
                  switch (u.tag) {
                  case 5:
                      ae = u.stateNode,
                      qe = !1;
                      break e;
                  case 3:
                      ae = u.stateNode.containerInfo,
                      qe = !0;
                      break e;
                  case 4:
                      ae = u.stateNode.containerInfo,
                      qe = !0;
                      break e
                  }
                  u = u.return
              }
              if (ae === null)
                  throw Error(R(160));
              bd(l, i, o),
              ae = null,
              qe = !1;
              var s = o.alternate;
              s !== null && (s.return = null),
              o.return = null
          } catch (a) {
              G(o, t, a)
          }
      }
  if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; )
          ef(t, e),
          t = t.sibling
}
function ef(e, t) {
  var n = e.alternate
    , r = e.flags;
  switch (e.tag) {
  case 0:
  case 11:
  case 14:
  case 15:
      if (Je(t, e),
      it(e),
      r & 4) {
          try {
              Er(3, e, e.return),
              Nl(3, e)
          } catch (w) {
              G(e, e.return, w)
          }
          try {
              Er(5, e, e.return)
          } catch (w) {
              G(e, e.return, w)
          }
      }
      break;
  case 1:
      Je(t, e),
      it(e),
      r & 512 && n !== null && zn(n, n.return);
      break;
  case 5:
      if (Je(t, e),
      it(e),
      r & 512 && n !== null && zn(n, n.return),
      e.flags & 32) {
          var o = e.stateNode;
          try {
              Mr(o, "")
          } catch (w) {
              G(e, e.return, w)
          }
      }
      if (r & 4 && (o = e.stateNode,
      o != null)) {
          var l = e.memoizedProps
            , i = n !== null ? n.memoizedProps : l
            , u = e.type
            , s = e.updateQueue;
          if (e.updateQueue = null,
          s !== null)
              try {
                  u === "input" && l.type === "radio" && l.name != null && xc(o, l),
                  Oi(u, i);
                  var a = Oi(u, l);
                  for (i = 0; i < s.length; i += 2) {
                      var d = s[i]
                        , c = s[i + 1];
                      d === "style" ? Pc(o, c) : d === "dangerouslySetInnerHTML" ? Ec(o, c) : d === "children" ? Mr(o, c) : Eu(o, d, c, a)
                  }
                  switch (u) {
                  case "input":
                      _i(o, l);
                      break;
                  case "textarea":
                      kc(o, l);
                      break;
                  case "select":
                      var p = o._wrapperState.wasMultiple;
                      o._wrapperState.wasMultiple = !!l.multiple;
                      var m = l.value;
                      m != null ? On(o, !!l.multiple, m, !1) : p !== !!l.multiple && (l.defaultValue != null ? On(o, !!l.multiple, l.defaultValue, !0) : On(o, !!l.multiple, l.multiple ? [] : "", !1))
                  }
                  o[Ur] = l
              } catch (w) {
                  G(e, e.return, w)
              }
      }
      break;
  case 6:
      if (Je(t, e),
      it(e),
      r & 4) {
          if (e.stateNode === null)
              throw Error(R(162));
          o = e.stateNode,
          l = e.memoizedProps;
          try {
              o.nodeValue = l
          } catch (w) {
              G(e, e.return, w)
          }
      }
      break;
  case 3:
      if (Je(t, e),
      it(e),
      r & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
              Ir(t.containerInfo)
          } catch (w) {
              G(e, e.return, w)
          }
      break;
  case 4:
      Je(t, e),
      it(e);
      break;
  case 13:
      Je(t, e),
      it(e),
      o = e.child,
      o.flags & 8192 && (l = o.memoizedState !== null,
      o.stateNode.isHidden = l,
      !l || o.alternate !== null && o.alternate.memoizedState !== null || (rs = J())),
      r & 4 && Ta(e);
      break;
  case 22:
      if (d = n !== null && n.memoizedState !== null,
      e.mode & 1 ? (ve = (a = ve) || d,
      Je(t, e),
      ve = a) : Je(t, e),
      it(e),
      r & 8192) {
          if (a = e.memoizedState !== null,
          (e.stateNode.isHidden = a) && !d && e.mode & 1)
              for (N = e,
              d = e.child; d !== null; ) {
                  for (c = N = d; N !== null; ) {
                      switch (p = N,
                      m = p.child,
                      p.tag) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                          Er(4, p, p.return);
                          break;
                      case 1:
                          zn(p, p.return);
                          var y = p.stateNode;
                          if (typeof y.componentWillUnmount == "function") {
                              r = p,
                              n = p.return;
                              try {
                                  t = r,
                                  y.props = t.memoizedProps,
                                  y.state = t.memoizedState,
                                  y.componentWillUnmount()
                              } catch (w) {
                                  G(r, n, w)
                              }
                          }
                          break;
                      case 5:
                          zn(p, p.return);
                          break;
                      case 22:
                          if (p.memoizedState !== null) {
                              za(c);
                              continue
                          }
                      }
                      m !== null ? (m.return = p,
                      N = m) : za(c)
                  }
                  d = d.sibling
              }
          e: for (d = null,
          c = e; ; ) {
              if (c.tag === 5) {
                  if (d === null) {
                      d = c;
                      try {
                          o = c.stateNode,
                          a ? (l = o.style,
                          typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (u = c.stateNode,
                          s = c.memoizedProps.style,
                          i = s != null && s.hasOwnProperty("display") ? s.display : null,
                          u.style.display = Rc("display", i))
                      } catch (w) {
                          G(e, e.return, w)
                      }
                  }
              } else if (c.tag === 6) {
                  if (d === null)
                      try {
                          c.stateNode.nodeValue = a ? "" : c.memoizedProps
                      } catch (w) {
                          G(e, e.return, w)
                      }
              } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === e) && c.child !== null) {
                  c.child.return = c,
                  c = c.child;
                  continue
              }
              if (c === e)
                  break e;
              for (; c.sibling === null; ) {
                  if (c.return === null || c.return === e)
                      break e;
                  d === c && (d = null),
                  c = c.return
              }
              d === c && (d = null),
              c.sibling.return = c.return,
              c = c.sibling
          }
      }
      break;
  case 19:
      Je(t, e),
      it(e),
      r & 4 && Ta(e);
      break;
  case 21:
      break;
  default:
      Je(t, e),
      it(e)
  }
}
function it(e) {
  var t = e.flags;
  if (t & 2) {
      try {
          e: {
              for (var n = e.return; n !== null; ) {
                  if (qd(n)) {
                      var r = n;
                      break e
                  }
                  n = n.return
              }
              throw Error(R(160))
          }
          switch (r.tag) {
          case 5:
              var o = r.stateNode;
              r.flags & 32 && (Mr(o, ""),
              r.flags &= -33);
              var l = _a(e);
              cu(e, l, o);
              break;
          case 3:
          case 4:
              var i = r.stateNode.containerInfo
                , u = _a(e);
              au(e, u, i);
              break;
          default:
              throw Error(R(161))
          }
      } catch (s) {
          G(e, e.return, s)
      }
      e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function vv(e, t, n) {
  N = e,
  tf(e)
}
function tf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
      var o = N
        , l = o.child;
      if (o.tag === 22 && r) {
          var i = o.memoizedState !== null || Eo;
          if (!i) {
              var u = o.alternate
                , s = u !== null && u.memoizedState !== null || ve;
              u = Eo;
              var a = ve;
              if (Eo = i,
              (ve = s) && !a)
                  for (N = o; N !== null; )
                      i = N,
                      s = i.child,
                      i.tag === 22 && i.memoizedState !== null ? La(o) : s !== null ? (s.return = i,
                      N = s) : La(o);
              for (; l !== null; )
                  N = l,
                  tf(l),
                  l = l.sibling;
              N = o,
              Eo = u,
              ve = a
          }
          Ma(e)
      } else
          o.subtreeFlags & 8772 && l !== null ? (l.return = o,
          N = l) : Ma(e)
  }
}
function Ma(e) {
  for (; N !== null; ) {
      var t = N;
      if (t.flags & 8772) {
          var n = t.alternate;
          try {
              if (t.flags & 8772)
                  switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                      ve || Nl(5, t);
                      break;
                  case 1:
                      var r = t.stateNode;
                      if (t.flags & 4 && !ve)
                          if (n === null)
                              r.componentDidMount();
                          else {
                              var o = t.elementType === t.type ? n.memoizedProps : Ze(t.type, n.memoizedProps);
                              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                          }
                      var l = t.updateQueue;
                      l !== null && ha(t, l, r);
                      break;
                  case 3:
                      var i = t.updateQueue;
                      if (i !== null) {
                          if (n = null,
                          t.child !== null)
                              switch (t.child.tag) {
                              case 5:
                                  n = t.child.stateNode;
                                  break;
                              case 1:
                                  n = t.child.stateNode
                              }
                          ha(t, i, n)
                      }
                      break;
                  case 5:
                      var u = t.stateNode;
                      if (n === null && t.flags & 4) {
                          n = u;
                          var s = t.memoizedProps;
                          switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                              s.autoFocus && n.focus();
                              break;
                          case "img":
                              s.src && (n.src = s.src)
                          }
                      }
                      break;
                  case 6:
                      break;
                  case 4:
                      break;
                  case 12:
                      break;
                  case 13:
                      if (t.memoizedState === null) {
                          var a = t.alternate;
                          if (a !== null) {
                              var d = a.memoizedState;
                              if (d !== null) {
                                  var c = d.dehydrated;
                                  c !== null && Ir(c)
                              }
                          }
                      }
                      break;
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                  case 25:
                      break;
                  default:
                      throw Error(R(163))
                  }
              ve || t.flags & 512 && su(t)
          } catch (p) {
              G(t, t.return, p)
          }
      }
      if (t === e) {
          N = null;
          break
      }
      if (n = t.sibling,
      n !== null) {
          n.return = t.return,
          N = n;
          break
      }
      N = t.return
  }
}
function za(e) {
  for (; N !== null; ) {
      var t = N;
      if (t === e) {
          N = null;
          break
      }
      var n = t.sibling;
      if (n !== null) {
          n.return = t.return,
          N = n;
          break
      }
      N = t.return
  }
}
function La(e) {
  for (; N !== null; ) {
      var t = N;
      try {
          switch (t.tag) {
          case 0:
          case 11:
          case 15:
              var n = t.return;
              try {
                  Nl(4, t)
              } catch (s) {
                  G(t, n, s)
              }
              break;
          case 1:
              var r = t.stateNode;
              if (typeof r.componentDidMount == "function") {
                  var o = t.return;
                  try {
                      r.componentDidMount()
                  } catch (s) {
                      G(t, o, s)
                  }
              }
              var l = t.return;
              try {
                  su(t)
              } catch (s) {
                  G(t, l, s)
              }
              break;
          case 5:
              var i = t.return;
              try {
                  su(t)
              } catch (s) {
                  G(t, i, s)
              }
          }
      } catch (s) {
          G(t, t.return, s)
      }
      if (t === e) {
          N = null;
          break
      }
      var u = t.sibling;
      if (u !== null) {
          u.return = t.return,
          N = u;
          break
      }
      N = t.return
  }
}
var mv = Math.ceil
, ul = Et.ReactCurrentDispatcher
, ts = Et.ReactCurrentOwner
, He = Et.ReactCurrentBatchConfig
, F = 0
, oe = null
, q = null
, de = 0
, ze = 0
, Ln = Gt(0)
, te = 0
, Kr = null
, cn = 0
, _l = 0
, ns = 0
, Rr = null
, Ee = null
, rs = 0
, Yn = 1 / 0
, vt = null
, sl = !1
, du = null
, Vt = null
, Ro = !1
, Ft = null
, al = 0
, Pr = 0
, fu = null
, jo = -1
, $o = 0;
function we() {
  return F & 6 ? J() : jo !== -1 ? jo : jo = J()
}
function Ht(e) {
  return e.mode & 1 ? F & 2 && de !== 0 ? de & -de : bh.transition !== null ? ($o === 0 && ($o = jc()),
  $o) : (e = j,
  e !== 0 || (e = window.event,
  e = e === void 0 ? 16 : Qc(e.type)),
  e) : 1
}
function tt(e, t, n, r) {
  if (50 < Pr)
      throw Pr = 0,
      fu = null,
      Error(R(185));
  Zr(e, n, r),
  (!(F & 2) || e !== oe) && (e === oe && (!(F & 2) && (_l |= n),
  te === 4 && It(e, de)),
  Ne(e, r),
  n === 1 && F === 0 && !(t.mode & 1) && (Yn = J() + 500,
  Rl && Jt()))
}
function Ne(e, t) {
  var n = e.callbackNode;
  bp(e, t);
  var r = Ko(e, e === oe ? de : 0);
  if (r === 0)
      n !== null && Ws(n),
      e.callbackNode = null,
      e.callbackPriority = 0;
  else if (t = r & -r,
  e.callbackPriority !== t) {
      if (n != null && Ws(n),
      t === 1)
          e.tag === 0 ? qh(Oa.bind(null, e)) : cd(Oa.bind(null, e)),
          Xh(function() {
              !(F & 6) && Jt()
          }),
          n = null;
      else {
          switch ($c(r)) {
          case 1:
              n = _u;
              break;
          case 4:
              n = Ac;
              break;
          case 16:
              n = Qo;
              break;
          case 536870912:
              n = Fc;
              break;
          default:
              n = Qo
          }
          n = cf(n, nf.bind(null, e))
      }
      e.callbackPriority = t,
      e.callbackNode = n
  }
}
function nf(e, t) {
  if (jo = -1,
  $o = 0,
  F & 6)
      throw Error(R(327));
  var n = e.callbackNode;
  if ($n() && e.callbackNode !== n)
      return null;
  var r = Ko(e, e === oe ? de : 0);
  if (r === 0)
      return null;
  if (r & 30 || r & e.expiredLanes || t)
      t = cl(e, r);
  else {
      t = r;
      var o = F;
      F |= 2;
      var l = of();
      (oe !== e || de !== t) && (vt = null,
      Yn = J() + 500,
      on(e, t));
      do
          try {
              wv();
              break
          } catch (u) {
              rf(e, u)
          }
      while (!0);
      Wu(),
      ul.current = l,
      F = o,
      q !== null ? t = 0 : (oe = null,
      de = 0,
      t = te)
  }
  if (t !== 0) {
      if (t === 2 && (o = $i(e),
      o !== 0 && (r = o,
      t = pu(e, o))),
      t === 1)
          throw n = Kr,
          on(e, 0),
          It(e, r),
          Ne(e, J()),
          n;
      if (t === 6)
          It(e, r);
      else {
          if (o = e.current.alternate,
          !(r & 30) && !gv(o) && (t = cl(e, r),
          t === 2 && (l = $i(e),
          l !== 0 && (r = l,
          t = pu(e, l))),
          t === 1))
              throw n = Kr,
              on(e, 0),
              It(e, r),
              Ne(e, J()),
              n;
          switch (e.finishedWork = o,
          e.finishedLanes = r,
          t) {
          case 0:
          case 1:
              throw Error(R(345));
          case 2:
              bt(e, Ee, vt);
              break;
          case 3:
              if (It(e, r),
              (r & 130023424) === r && (t = rs + 500 - J(),
              10 < t)) {
                  if (Ko(e, 0) !== 0)
                      break;
                  if (o = e.suspendedLanes,
                  (o & r) !== r) {
                      we(),
                      e.pingedLanes |= e.suspendedLanes & o;
                      break
                  }
                  e.timeoutHandle = Yi(bt.bind(null, e, Ee, vt), t);
                  break
              }
              bt(e, Ee, vt);
              break;
          case 4:
              if (It(e, r),
              (r & 4194240) === r)
                  break;
              for (t = e.eventTimes,
              o = -1; 0 < r; ) {
                  var i = 31 - et(r);
                  l = 1 << i,
                  i = t[i],
                  i > o && (o = i),
                  r &= ~l
              }
              if (r = o,
              r = J() - r,
              r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * mv(r / 1960)) - r,
              10 < r) {
                  e.timeoutHandle = Yi(bt.bind(null, e, Ee, vt), r);
                  break
              }
              bt(e, Ee, vt);
              break;
          case 5:
              bt(e, Ee, vt);
              break;
          default:
              throw Error(R(329))
          }
      }
  }
  return Ne(e, J()),
  e.callbackNode === n ? nf.bind(null, e) : null
}
function pu(e, t) {
  var n = Rr;
  return e.current.memoizedState.isDehydrated && (on(e, t).flags |= 256),
  e = cl(e, t),
  e !== 2 && (t = Ee,
  Ee = n,
  t !== null && hu(t)),
  e
}
function hu(e) {
  Ee === null ? Ee = e : Ee.push.apply(Ee, e)
}
function gv(e) {
  for (var t = e; ; ) {
      if (t.flags & 16384) {
          var n = t.updateQueue;
          if (n !== null && (n = n.stores,
          n !== null))
              for (var r = 0; r < n.length; r++) {
                  var o = n[r]
                    , l = o.getSnapshot;
                  o = o.value;
                  try {
                      if (!nt(l(), o))
                          return !1
                  } catch {
                      return !1
                  }
              }
      }
      if (n = t.child,
      t.subtreeFlags & 16384 && n !== null)
          n.return = t,
          t = n;
      else {
          if (t === e)
              break;
          for (; t.sibling === null; ) {
              if (t.return === null || t.return === e)
                  return !0;
              t = t.return
          }
          t.sibling.return = t.return,
          t = t.sibling
      }
  }
  return !0
}
function It(e, t) {
  for (t &= ~ns,
  t &= ~_l,
  e.suspendedLanes |= t,
  e.pingedLanes &= ~t,
  e = e.expirationTimes; 0 < t; ) {
      var n = 31 - et(t)
        , r = 1 << n;
      e[n] = -1,
      t &= ~r
  }
}
function Oa(e) {
  if (F & 6)
      throw Error(R(327));
  $n();
  var t = Ko(e, 0);
  if (!(t & 1))
      return Ne(e, J()),
      null;
  var n = cl(e, t);
  if (e.tag !== 0 && n === 2) {
      var r = $i(e);
      r !== 0 && (t = r,
      n = pu(e, r))
  }
  if (n === 1)
      throw n = Kr,
      on(e, 0),
      It(e, t),
      Ne(e, J()),
      n;
  if (n === 6)
      throw Error(R(345));
  return e.finishedWork = e.current.alternate,
  e.finishedLanes = t,
  bt(e, Ee, vt),
  Ne(e, J()),
  null
}
function os(e, t) {
  var n = F;
  F |= 1;
  try {
      return e(t)
  } finally {
      F = n,
      F === 0 && (Yn = J() + 500,
      Rl && Jt())
  }
}
function dn(e) {
  Ft !== null && Ft.tag === 0 && !(F & 6) && $n();
  var t = F;
  F |= 1;
  var n = He.transition
    , r = j;
  try {
      if (He.transition = null,
      j = 1,
      e)
          return e()
  } finally {
      j = r,
      He.transition = n,
      F = t,
      !(F & 6) && Jt()
  }
}
function ls() {
  ze = Ln.current,
  V(Ln)
}
function on(e, t) {
  e.finishedWork = null,
  e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1,
  Yh(n)),
  q !== null)
      for (n = q.return; n !== null; ) {
          var r = n;
          switch ($u(r),
          r.tag) {
          case 1:
              r = r.type.childContextTypes,
              r != null && Zo();
              break;
          case 3:
              Qn(),
              V(Pe),
              V(me),
              Xu();
              break;
          case 5:
              Yu(r);
              break;
          case 4:
              Qn();
              break;
          case 13:
              V(K);
              break;
          case 19:
              V(K);
              break;
          case 10:
              Vu(r.type._context);
              break;
          case 22:
          case 23:
              ls()
          }
          n = n.return
      }
  if (oe = e,
  q = e = Qt(e.current, null),
  de = ze = t,
  te = 0,
  Kr = null,
  ns = _l = cn = 0,
  Ee = Rr = null,
  nn !== null) {
      for (t = 0; t < nn.length; t++)
          if (n = nn[t],
          r = n.interleaved,
          r !== null) {
              n.interleaved = null;
              var o = r.next
                , l = n.pending;
              if (l !== null) {
                  var i = l.next;
                  l.next = o,
                  r.next = i
              }
              n.pending = r
          }
      nn = null
  }
  return e
}
function rf(e, t) {
  do {
      var n = q;
      try {
          if (Wu(),
          Io.current = il,
          ll) {
              for (var r = Y.memoizedState; r !== null; ) {
                  var o = r.queue;
                  o !== null && (o.pending = null),
                  r = r.next
              }
              ll = !1
          }
          if (an = 0,
          ne = b = Y = null,
          Cr = !1,
          Vr = 0,
          ts.current = null,
          n === null || n.return === null) {
              te = 1,
              Kr = t,
              q = null;
              break
          }
          e: {
              var l = e
                , i = n.return
                , u = n
                , s = t;
              if (t = de,
              u.flags |= 32768,
              s !== null && typeof s == "object" && typeof s.then == "function") {
                  var a = s
                    , d = u
                    , c = d.tag;
                  if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
                      var p = d.alternate;
                      p ? (d.updateQueue = p.updateQueue,
                      d.memoizedState = p.memoizedState,
                      d.lanes = p.lanes) : (d.updateQueue = null,
                      d.memoizedState = null)
                  }
                  var m = xa(i);
                  if (m !== null) {
                      m.flags &= -257,
                      ka(m, i, u, l, t),
                      m.mode & 1 && Sa(l, a, t),
                      t = m,
                      s = a;
                      var y = t.updateQueue;
                      if (y === null) {
                          var w = new Set;
                          w.add(s),
                          t.updateQueue = w
                      } else
                          y.add(s);
                      break e
                  } else {
                      if (!(t & 1)) {
                          Sa(l, a, t),
                          is();
                          break e
                      }
                      s = Error(R(426))
                  }
              } else if (Q && u.mode & 1) {
                  var k = xa(i);
                  if (k !== null) {
                      !(k.flags & 65536) && (k.flags |= 256),
                      ka(k, i, u, l, t),
                      Uu(Kn(s, u));
                      break e
                  }
              }
              l = s = Kn(s, u),
              te !== 4 && (te = 2),
              Rr === null ? Rr = [l] : Rr.push(l),
              l = i;
              do {
                  switch (l.tag) {
                  case 3:
                      l.flags |= 65536,
                      t &= -t,
                      l.lanes |= t;
                      var h = Ud(l, s, t);
                      pa(l, h);
                      break e;
                  case 1:
                      u = s;
                      var f = l.type
                        , v = l.stateNode;
                      if (!(l.flags & 128) && (typeof f.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Vt === null || !Vt.has(v)))) {
                          l.flags |= 65536,
                          t &= -t,
                          l.lanes |= t;
                          var S = Bd(l, u, t);
                          pa(l, S);
                          break e
                      }
                  }
                  l = l.return
              } while (l !== null)
          }
          uf(n)
      } catch (x) {
          t = x,
          q === n && n !== null && (q = n = n.return);
          continue
      }
      break
  } while (!0)
}
function of() {
  var e = ul.current;
  return ul.current = il,
  e === null ? il : e
}
function is() {
  (te === 0 || te === 3 || te === 2) && (te = 4),
  oe === null || !(cn & 268435455) && !(_l & 268435455) || It(oe, de)
}
function cl(e, t) {
  var n = F;
  F |= 2;
  var r = of();
  (oe !== e || de !== t) && (vt = null,
  on(e, t));
  do
      try {
          yv();
          break
      } catch (o) {
          rf(e, o)
      }
  while (!0);
  if (Wu(),
  F = n,
  ul.current = r,
  q !== null)
      throw Error(R(261));
  return oe = null,
  de = 0,
  te
}
function yv() {
  for (; q !== null; )
      lf(q)
}
function wv() {
  for (; q !== null && !Hp(); )
      lf(q)
}
function lf(e) {
  var t = af(e.alternate, e, ze);
  e.memoizedProps = e.pendingProps,
  t === null ? uf(e) : q = t,
  ts.current = null
}
function uf(e) {
  var t = e;
  do {
      var n = t.alternate;
      if (e = t.return,
      t.flags & 32768) {
          if (n = fv(n, t),
          n !== null) {
              n.flags &= 32767,
              q = n;
              return
          }
          if (e !== null)
              e.flags |= 32768,
              e.subtreeFlags = 0,
              e.deletions = null;
          else {
              te = 6,
              q = null;
              return
          }
      } else if (n = dv(n, t, ze),
      n !== null) {
          q = n;
          return
      }
      if (t = t.sibling,
      t !== null) {
          q = t;
          return
      }
      q = t = e
  } while (t !== null);
  te === 0 && (te = 5)
}
function bt(e, t, n) {
  var r = j
    , o = He.transition;
  try {
      He.transition = null,
      j = 1,
      Sv(e, t, n, r)
  } finally {
      He.transition = o,
      j = r
  }
  return null
}
function Sv(e, t, n, r) {
  do
      $n();
  while (Ft !== null);
  if (F & 6)
      throw Error(R(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
      return null;
  if (e.finishedWork = null,
  e.finishedLanes = 0,
  n === e.current)
      throw Error(R(177));
  e.callbackNode = null,
  e.callbackPriority = 0;
  var l = n.lanes | n.childLanes;
  if (eh(e, l),
  e === oe && (q = oe = null,
  de = 0),
  !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ro || (Ro = !0,
  cf(Qo, function() {
      return $n(),
      null
  })),
  l = (n.flags & 15990) !== 0,
  n.subtreeFlags & 15990 || l) {
      l = He.transition,
      He.transition = null;
      var i = j;
      j = 1;
      var u = F;
      F |= 4,
      ts.current = null,
      hv(e, n),
      ef(n, e),
      Uh(Qi),
      Yo = !!Hi,
      Qi = Hi = null,
      e.current = n,
      vv(n),
      Qp(),
      F = u,
      j = i,
      He.transition = l
  } else
      e.current = n;
  if (Ro && (Ro = !1,
  Ft = e,
  al = o),
  l = e.pendingLanes,
  l === 0 && (Vt = null),
  Xp(n.stateNode),
  Ne(e, J()),
  t !== null)
      for (r = e.onRecoverableError,
      n = 0; n < t.length; n++)
          o = t[n],
          r(o.value, {
              componentStack: o.stack,
              digest: o.digest
          });
  if (sl)
      throw sl = !1,
      e = du,
      du = null,
      e;
  return al & 1 && e.tag !== 0 && $n(),
  l = e.pendingLanes,
  l & 1 ? e === fu ? Pr++ : (Pr = 0,
  fu = e) : Pr = 0,
  Jt(),
  null
}
function $n() {
  if (Ft !== null) {
      var e = $c(al)
        , t = He.transition
        , n = j;
      try {
          if (He.transition = null,
          j = 16 > e ? 16 : e,
          Ft === null)
              var r = !1;
          else {
              if (e = Ft,
              Ft = null,
              al = 0,
              F & 6)
                  throw Error(R(331));
              var o = F;
              for (F |= 4,
              N = e.current; N !== null; ) {
                  var l = N
                    , i = l.child;
                  if (N.flags & 16) {
                      var u = l.deletions;
                      if (u !== null) {
                          for (var s = 0; s < u.length; s++) {
                              var a = u[s];
                              for (N = a; N !== null; ) {
                                  var d = N;
                                  switch (d.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                      Er(8, d, l)
                                  }
                                  var c = d.child;
                                  if (c !== null)
                                      c.return = d,
                                      N = c;
                                  else
                                      for (; N !== null; ) {
                                          d = N;
                                          var p = d.sibling
                                            , m = d.return;
                                          if (Zd(d),
                                          d === a) {
                                              N = null;
                                              break
                                          }
                                          if (p !== null) {
                                              p.return = m,
                                              N = p;
                                              break
                                          }
                                          N = m
                                      }
                              }
                          }
                          var y = l.alternate;
                          if (y !== null) {
                              var w = y.child;
                              if (w !== null) {
                                  y.child = null;
                                  do {
                                      var k = w.sibling;
                                      w.sibling = null,
                                      w = k
                                  } while (w !== null)
                              }
                          }
                          N = l
                      }
                  }
                  if (l.subtreeFlags & 2064 && i !== null)
                      i.return = l,
                      N = i;
                  else
                      e: for (; N !== null; ) {
                          if (l = N,
                          l.flags & 2048)
                              switch (l.tag) {
                              case 0:
                              case 11:
                              case 15:
                                  Er(9, l, l.return)
                              }
                          var h = l.sibling;
                          if (h !== null) {
                              h.return = l.return,
                              N = h;
                              break e
                          }
                          N = l.return
                      }
              }
              var f = e.current;
              for (N = f; N !== null; ) {
                  i = N;
                  var v = i.child;
                  if (i.subtreeFlags & 2064 && v !== null)
                      v.return = i,
                      N = v;
                  else
                      e: for (i = f; N !== null; ) {
                          if (u = N,
                          u.flags & 2048)
                              try {
                                  switch (u.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                      Nl(9, u)
                                  }
                              } catch (x) {
                                  G(u, u.return, x)
                              }
                          if (u === i) {
                              N = null;
                              break e
                          }
                          var S = u.sibling;
                          if (S !== null) {
                              S.return = u.return,
                              N = S;
                              break e
                          }
                          N = u.return
                      }
              }
              if (F = o,
              Jt(),
              at && typeof at.onPostCommitFiberRoot == "function")
                  try {
                      at.onPostCommitFiberRoot(Sl, e)
                  } catch {}
              r = !0
          }
          return r
      } finally {
          j = n,
          He.transition = t
      }
  }
  return !1
}
function Ia(e, t, n) {
  t = Kn(n, t),
  t = Ud(e, t, 1),
  e = Wt(e, t, 1),
  t = we(),
  e !== null && (Zr(e, 1, t),
  Ne(e, t))
}
function G(e, t, n) {
  if (e.tag === 3)
      Ia(e, e, n);
  else
      for (; t !== null; ) {
          if (t.tag === 3) {
              Ia(t, e, n);
              break
          } else if (t.tag === 1) {
              var r = t.stateNode;
              if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Vt === null || !Vt.has(r))) {
                  e = Kn(n, e),
                  e = Bd(t, e, 1),
                  t = Wt(t, e, 1),
                  e = we(),
                  t !== null && (Zr(t, 1, e),
                  Ne(t, e));
                  break
              }
          }
          t = t.return
      }
}
function xv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
  t = we(),
  e.pingedLanes |= e.suspendedLanes & n,
  oe === e && (de & n) === n && (te === 4 || te === 3 && (de & 130023424) === de && 500 > J() - rs ? on(e, 0) : ns |= n),
  Ne(e, t)
}
function sf(e, t) {
  t === 0 && (e.mode & 1 ? (t = vo,
  vo <<= 1,
  !(vo & 130023424) && (vo = 4194304)) : t = 1);
  var n = we();
  e = kt(e, t),
  e !== null && (Zr(e, t, n),
  Ne(e, n))
}
function kv(e) {
  var t = e.memoizedState
    , n = 0;
  t !== null && (n = t.retryLane),
  sf(e, n)
}
function Cv(e, t) {
  var n = 0;
  switch (e.tag) {
  case 13:
      var r = e.stateNode
        , o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
  case 19:
      r = e.stateNode;
      break;
  default:
      throw Error(R(314))
  }
  r !== null && r.delete(t),
  sf(e, n)
}
var af;
af = function(e, t, n) {
  if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Pe.current)
          Re = !0;
      else {
          if (!(e.lanes & n) && !(t.flags & 128))
              return Re = !1,
              cv(e, t, n);
          Re = !!(e.flags & 131072)
      }
  else
      Re = !1,
      Q && t.flags & 1048576 && dd(t, el, t.index);
  switch (t.lanes = 0,
  t.tag) {
  case 2:
      var r = t.type;
      Fo(e, t),
      e = t.pendingProps;
      var o = Wn(t, me.current);
      jn(t, n),
      o = Ju(null, t, r, e, o, n);
      var l = Zu();
      return t.flags |= 1,
      typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
      t.memoizedState = null,
      t.updateQueue = null,
      De(r) ? (l = !0,
      qo(t)) : l = !1,
      t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
      Qu(t),
      o.updater = Pl,
      t.stateNode = o,
      o._reactInternals = t,
      eu(t, r, e, n),
      t = ru(null, t, r, !0, l, n)) : (t.tag = 0,
      Q && l && ju(t),
      ye(null, t, o, n),
      t = t.child),
      t;
  case 16:
      r = t.elementType;
      e: {
          switch (Fo(e, t),
          e = t.pendingProps,
          o = r._init,
          r = o(r._payload),
          t.type = r,
          o = t.tag = Rv(r),
          e = Ze(r, e),
          o) {
          case 0:
              t = nu(null, t, r, e, n);
              break e;
          case 1:
              t = Ra(null, t, r, e, n);
              break e;
          case 11:
              t = Ca(null, t, r, e, n);
              break e;
          case 14:
              t = Ea(null, t, r, Ze(r.type, e), n);
              break e
          }
          throw Error(R(306, r, ""))
      }
      return t;
  case 0:
      return r = t.type,
      o = t.pendingProps,
      o = t.elementType === r ? o : Ze(r, o),
      nu(e, t, r, o, n);
  case 1:
      return r = t.type,
      o = t.pendingProps,
      o = t.elementType === r ? o : Ze(r, o),
      Ra(e, t, r, o, n);
  case 3:
      e: {
          if (Qd(t),
          e === null)
              throw Error(R(387));
          r = t.pendingProps,
          l = t.memoizedState,
          o = l.element,
          vd(e, t),
          rl(t, r, null, n);
          var i = t.memoizedState;
          if (r = i.element,
          l.isDehydrated)
              if (l = {
                  element: r,
                  isDehydrated: !1,
                  cache: i.cache,
                  pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                  transitions: i.transitions
              },
              t.updateQueue.baseState = l,
              t.memoizedState = l,
              t.flags & 256) {
                  o = Kn(Error(R(423)), t),
                  t = Pa(e, t, r, n, o);
                  break e
              } else if (r !== o) {
                  o = Kn(Error(R(424)), t),
                  t = Pa(e, t, r, n, o);
                  break e
              } else
                  for (Le = Bt(t.stateNode.containerInfo.firstChild),
                  Oe = t,
                  Q = !0,
                  be = null,
                  n = wd(t, null, r, n),
                  t.child = n; n; )
                      n.flags = n.flags & -3 | 4096,
                      n = n.sibling;
          else {
              if (Vn(),
              r === o) {
                  t = Ct(e, t, n);
                  break e
              }
              ye(e, t, r, n)
          }
          t = t.child
      }
      return t;
  case 5:
      return Sd(t),
      e === null && Zi(t),
      r = t.type,
      o = t.pendingProps,
      l = e !== null ? e.memoizedProps : null,
      i = o.children,
      Ki(r, o) ? i = null : l !== null && Ki(r, l) && (t.flags |= 32),
      Hd(e, t),
      ye(e, t, i, n),
      t.child;
  case 6:
      return e === null && Zi(t),
      null;
  case 13:
      return Kd(e, t, n);
  case 4:
      return Ku(t, t.stateNode.containerInfo),
      r = t.pendingProps,
      e === null ? t.child = Hn(t, null, r, n) : ye(e, t, r, n),
      t.child;
  case 11:
      return r = t.type,
      o = t.pendingProps,
      o = t.elementType === r ? o : Ze(r, o),
      Ca(e, t, r, o, n);
  case 7:
      return ye(e, t, t.pendingProps, n),
      t.child;
  case 8:
      return ye(e, t, t.pendingProps.children, n),
      t.child;
  case 12:
      return ye(e, t, t.pendingProps.children, n),
      t.child;
  case 10:
      e: {
          if (r = t.type._context,
          o = t.pendingProps,
          l = t.memoizedProps,
          i = o.value,
          B(tl, r._currentValue),
          r._currentValue = i,
          l !== null)
              if (nt(l.value, i)) {
                  if (l.children === o.children && !Pe.current) {
                      t = Ct(e, t, n);
                      break e
                  }
              } else
                  for (l = t.child,
                  l !== null && (l.return = t); l !== null; ) {
                      var u = l.dependencies;
                      if (u !== null) {
                          i = l.child;
                          for (var s = u.firstContext; s !== null; ) {
                              if (s.context === r) {
                                  if (l.tag === 1) {
                                      s = wt(-1, n & -n),
                                      s.tag = 2;
                                      var a = l.updateQueue;
                                      if (a !== null) {
                                          a = a.shared;
                                          var d = a.pending;
                                          d === null ? s.next = s : (s.next = d.next,
                                          d.next = s),
                                          a.pending = s
                                      }
                                  }
                                  l.lanes |= n,
                                  s = l.alternate,
                                  s !== null && (s.lanes |= n),
                                  qi(l.return, n, t),
                                  u.lanes |= n;
                                  break
                              }
                              s = s.next
                          }
                      } else if (l.tag === 10)
                          i = l.type === t.type ? null : l.child;
                      else if (l.tag === 18) {
                          if (i = l.return,
                          i === null)
                              throw Error(R(341));
                          i.lanes |= n,
                          u = i.alternate,
                          u !== null && (u.lanes |= n),
                          qi(i, n, t),
                          i = l.sibling
                      } else
                          i = l.child;
                      if (i !== null)
                          i.return = l;
                      else
                          for (i = l; i !== null; ) {
                              if (i === t) {
                                  i = null;
                                  break
                              }
                              if (l = i.sibling,
                              l !== null) {
                                  l.return = i.return,
                                  i = l;
                                  break
                              }
                              i = i.return
                          }
                      l = i
                  }
          ye(e, t, o.children, n),
          t = t.child
      }
      return t;
  case 9:
      return o = t.type,
      r = t.pendingProps.children,
      jn(t, n),
      o = Qe(o),
      r = r(o),
      t.flags |= 1,
      ye(e, t, r, n),
      t.child;
  case 14:
      return r = t.type,
      o = Ze(r, t.pendingProps),
      o = Ze(r.type, o),
      Ea(e, t, r, o, n);
  case 15:
      return Wd(e, t, t.type, t.pendingProps, n);
  case 17:
      return r = t.type,
      o = t.pendingProps,
      o = t.elementType === r ? o : Ze(r, o),
      Fo(e, t),
      t.tag = 1,
      De(r) ? (e = !0,
      qo(t)) : e = !1,
      jn(t, n),
      gd(t, r, o),
      eu(t, r, o, n),
      ru(null, t, r, !0, e, n);
  case 19:
      return Yd(e, t, n);
  case 22:
      return Vd(e, t, n)
  }
  throw Error(R(156, t.tag))
}
;
function cf(e, t) {
  return Ic(e, t)
}
function Ev(e, t, n, r) {
  this.tag = e,
  this.key = n,
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
  this.index = 0,
  this.ref = null,
  this.pendingProps = t,
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
  this.mode = r,
  this.subtreeFlags = this.flags = 0,
  this.deletions = null,
  this.childLanes = this.lanes = 0,
  this.alternate = null
}
function We(e, t, n, r) {
  return new Ev(e,t,n,r)
}
function us(e) {
  return e = e.prototype,
  !(!e || !e.isReactComponent)
}
function Rv(e) {
  if (typeof e == "function")
      return us(e) ? 1 : 0;
  if (e != null) {
      if (e = e.$$typeof,
      e === Pu)
          return 11;
      if (e === Du)
          return 14
  }
  return 2
}
function Qt(e, t) {
  var n = e.alternate;
  return n === null ? (n = We(e.tag, t, e.key, e.mode),
  n.elementType = e.elementType,
  n.type = e.type,
  n.stateNode = e.stateNode,
  n.alternate = e,
  e.alternate = n) : (n.pendingProps = t,
  n.type = e.type,
  n.flags = 0,
  n.subtreeFlags = 0,
  n.deletions = null),
  n.flags = e.flags & 14680064,
  n.childLanes = e.childLanes,
  n.lanes = e.lanes,
  n.child = e.child,
  n.memoizedProps = e.memoizedProps,
  n.memoizedState = e.memoizedState,
  n.updateQueue = e.updateQueue,
  t = e.dependencies,
  n.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
  },
  n.sibling = e.sibling,
  n.index = e.index,
  n.ref = e.ref,
  n
}
function Uo(e, t, n, r, o, l) {
  var i = 2;
  if (r = e,
  typeof e == "function")
      us(e) && (i = 1);
  else if (typeof e == "string")
      i = 5;
  else
      e: switch (e) {
      case Cn:
          return ln(n.children, o, l, t);
      case Ru:
          i = 8,
          o |= 8;
          break;
      case Ei:
          return e = We(12, n, t, o | 2),
          e.elementType = Ei,
          e.lanes = l,
          e;
      case Ri:
          return e = We(13, n, t, o),
          e.elementType = Ri,
          e.lanes = l,
          e;
      case Pi:
          return e = We(19, n, t, o),
          e.elementType = Pi,
          e.lanes = l,
          e;
      case yc:
          return Tl(n, o, l, t);
      default:
          if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
              case mc:
                  i = 10;
                  break e;
              case gc:
                  i = 9;
                  break e;
              case Pu:
                  i = 11;
                  break e;
              case Du:
                  i = 14;
                  break e;
              case Mt:
                  i = 16,
                  r = null;
                  break e
              }
          throw Error(R(130, e == null ? e : typeof e, ""))
      }
  return t = We(i, n, t, o),
  t.elementType = e,
  t.type = r,
  t.lanes = l,
  t
}
function ln(e, t, n, r) {
  return e = We(7, e, r, t),
  e.lanes = n,
  e
}
function Tl(e, t, n, r) {
  return e = We(22, e, r, t),
  e.elementType = yc,
  e.lanes = n,
  e.stateNode = {
      isHidden: !1
  },
  e
}
function hi(e, t, n) {
  return e = We(6, e, null, t),
  e.lanes = n,
  e
}
function vi(e, t, n) {
  return t = We(4, e.children !== null ? e.children : [], e.key, t),
  t.lanes = n,
  t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
  },
  t
}
function Pv(e, t, n, r, o) {
  this.tag = t,
  this.containerInfo = e,
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
  this.timeoutHandle = -1,
  this.callbackNode = this.pendingContext = this.context = null,
  this.callbackPriority = 0,
  this.eventTimes = Gl(0),
  this.expirationTimes = Gl(-1),
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
  this.entanglements = Gl(0),
  this.identifierPrefix = r,
  this.onRecoverableError = o,
  this.mutableSourceEagerHydrationData = null
}
function ss(e, t, n, r, o, l, i, u, s) {
  return e = new Pv(e,t,n,u,s),
  t === 1 ? (t = 1,
  l === !0 && (t |= 8)) : t = 0,
  l = We(3, null, null, t),
  e.current = l,
  l.stateNode = e,
  l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
  },
  Qu(l),
  e
}
function Dv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
      $$typeof: kn,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n
  }
}
function df(e) {
  if (!e)
      return Yt;
  e = e._reactInternals;
  e: {
      if (hn(e) !== e || e.tag !== 1)
          throw Error(R(170));
      var t = e;
      do {
          switch (t.tag) {
          case 3:
              t = t.stateNode.context;
              break e;
          case 1:
              if (De(t.type)) {
                  t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                  break e
              }
          }
          t = t.return
      } while (t !== null);
      throw Error(R(171))
  }
  if (e.tag === 1) {
      var n = e.type;
      if (De(n))
          return ad(e, n, t)
  }
  return t
}
function ff(e, t, n, r, o, l, i, u, s) {
  return e = ss(n, r, !0, e, o, l, i, u, s),
  e.context = df(null),
  n = e.current,
  r = we(),
  o = Ht(n),
  l = wt(r, o),
  l.callback = t ?? null,
  Wt(n, l, o),
  e.current.lanes = o,
  Zr(e, o, r),
  Ne(e, r),
  e
}
function Ml(e, t, n, r) {
  var o = t.current
    , l = we()
    , i = Ht(o);
  return n = df(n),
  t.context === null ? t.context = n : t.pendingContext = n,
  t = wt(l, i),
  t.payload = {
      element: e
  },
  r = r === void 0 ? null : r,
  r !== null && (t.callback = r),
  e = Wt(o, t, i),
  e !== null && (tt(e, o, i, l),
  Oo(e, o, i)),
  i
}
function dl(e) {
  if (e = e.current,
  !e.child)
      return null;
  switch (e.child.tag) {
  case 5:
      return e.child.stateNode;
  default:
      return e.child.stateNode
  }
}
function Aa(e, t) {
  if (e = e.memoizedState,
  e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t
  }
}
function as(e, t) {
  Aa(e, t),
  (e = e.alternate) && Aa(e, t)
}
function Nv() {
  return null
}
var pf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e)
}
;
function cs(e) {
  this._internalRoot = e
}
zl.prototype.render = cs.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
      throw Error(R(409));
  Ml(e, t, null, null)
}
;
zl.prototype.unmount = cs.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      dn(function() {
          Ml(null, e, null, null)
      }),
      t[xt] = null
  }
}
;
function zl(e) {
  this._internalRoot = e
}
zl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
      var t = Wc();
      e = {
          blockedOn: null,
          target: e,
          priority: t
      };
      for (var n = 0; n < Ot.length && t !== 0 && t < Ot[n].priority; n++)
          ;
      Ot.splice(n, 0, e),
      n === 0 && Hc(e)
  }
}
;
function ds(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Ll(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Fa() {}
function _v(e, t, n, r, o) {
  if (o) {
      if (typeof r == "function") {
          var l = r;
          r = function() {
              var a = dl(i);
              l.call(a)
          }
      }
      var i = ff(t, r, e, 0, null, !1, !1, "", Fa);
      return e._reactRootContainer = i,
      e[xt] = i.current,
      jr(e.nodeType === 8 ? e.parentNode : e),
      dn(),
      i
  }
  for (; o = e.lastChild; )
      e.removeChild(o);
  if (typeof r == "function") {
      var u = r;
      r = function() {
          var a = dl(s);
          u.call(a)
      }
  }
  var s = ss(e, 0, !1, null, null, !1, !1, "", Fa);
  return e._reactRootContainer = s,
  e[xt] = s.current,
  jr(e.nodeType === 8 ? e.parentNode : e),
  dn(function() {
      Ml(t, s, n, r)
  }),
  s
}
function Ol(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
      var i = l;
      if (typeof o == "function") {
          var u = o;
          o = function() {
              var s = dl(i);
              u.call(s)
          }
      }
      Ml(t, i, e, o)
  } else
      i = _v(n, t, e, o, r);
  return dl(i)
}
Uc = function(e) {
  switch (e.tag) {
  case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
          var n = mr(t.pendingLanes);
          n !== 0 && (Tu(t, n | 1),
          Ne(t, J()),
          !(F & 6) && (Yn = J() + 500,
          Jt()))
      }
      break;
  case 13:
      dn(function() {
          var r = kt(e, 1);
          if (r !== null) {
              var o = we();
              tt(r, e, 1, o)
          }
      }),
      as(e, 1)
  }
}
;
Mu = function(e) {
  if (e.tag === 13) {
      var t = kt(e, 134217728);
      if (t !== null) {
          var n = we();
          tt(t, e, 134217728, n)
      }
      as(e, 134217728)
  }
}
;
Bc = function(e) {
  if (e.tag === 13) {
      var t = Ht(e)
        , n = kt(e, t);
      if (n !== null) {
          var r = we();
          tt(n, e, t, r)
      }
      as(e, t)
  }
}
;
Wc = function() {
  return j
}
;
Vc = function(e, t) {
  var n = j;
  try {
      return j = e,
      t()
  } finally {
      j = n
  }
}
;
Ai = function(e, t, n) {
  switch (t) {
  case "input":
      if (_i(e, n),
      t = n.name,
      n.type === "radio" && t != null) {
          for (n = e; n.parentNode; )
              n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
          t = 0; t < n.length; t++) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                  var o = El(r);
                  if (!o)
                      throw Error(R(90));
                  Sc(r),
                  _i(r, o)
              }
          }
      }
      break;
  case "textarea":
      kc(e, n);
      break;
  case "select":
      t = n.value,
      t != null && On(e, !!n.multiple, t, !1)
  }
}
;
_c = os;
Tc = dn;
var Tv = {
  usingClientEntryPoint: !1,
  Events: [br, Dn, El, Dc, Nc, os]
}
, pr = {
  findFiberByHostInstance: tn,
  bundleType: 0,
  version: "18.2.0",
  rendererPackageName: "react-dom"
}
, Mv = {
  bundleType: pr.bundleType,
  version: pr.version,
  rendererPackageName: pr.rendererPackageName,
  rendererConfig: pr.rendererConfig,
  overrideHookState: null,
  overrideHookStateDeletePath: null,
  overrideHookStateRenamePath: null,
  overrideProps: null,
  overridePropsDeletePath: null,
  overridePropsRenamePath: null,
  setErrorHandler: null,
  setSuspenseHandler: null,
  scheduleUpdate: null,
  currentDispatcherRef: Et.ReactCurrentDispatcher,
  findHostInstanceByFiber: function(e) {
      return e = Lc(e),
      e === null ? null : e.stateNode
  },
  findFiberByHostInstance: pr.findFiberByHostInstance || Nv,
  findHostInstancesForRefresh: null,
  scheduleRefresh: null,
  scheduleRoot: null,
  setRefreshHandler: null,
  getCurrentFiber: null,
  reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Po = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Po.isDisabled && Po.supportsFiber)
      try {
          Sl = Po.inject(Mv),
          at = Po
      } catch {}
}
Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tv;
Ae.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ds(t))
      throw Error(R(200));
  return Dv(e, t, null, n)
}
;
Ae.createRoot = function(e, t) {
  if (!ds(e))
      throw Error(R(299));
  var n = !1
    , r = ""
    , o = pf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0),
  t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
  t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
  t = ss(e, 1, !1, null, null, n, !1, r, o),
  e[xt] = t.current,
  jr(e.nodeType === 8 ? e.parentNode : e),
  new cs(t)
}
;
Ae.findDOMNode = function(e) {
  if (e == null)
      return null;
  if (e.nodeType === 1)
      return e;
  var t = e._reactInternals;
  if (t === void 0)
      throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","),
      Error(R(268, e)));
  return e = Lc(t),
  e = e === null ? null : e.stateNode,
  e
}
;
Ae.flushSync = function(e) {
  return dn(e)
}
;
Ae.hydrate = function(e, t, n) {
  if (!Ll(t))
      throw Error(R(200));
  return Ol(null, e, t, !0, n)
}
;
Ae.hydrateRoot = function(e, t, n) {
  if (!ds(e))
      throw Error(R(405));
  var r = n != null && n.hydratedSources || null
    , o = !1
    , l = ""
    , i = pf;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0),
  n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
  n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
  t = ff(t, null, e, 1, n ?? null, o, !1, l, i),
  e[xt] = t.current,
  jr(e),
  r)
      for (e = 0; e < r.length; e++)
          n = r[e],
          o = n._getVersion,
          o = o(n._source),
          t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
  return new zl(t)
}
;
Ae.render = function(e, t, n) {
  if (!Ll(t))
      throw Error(R(200));
  return Ol(null, e, t, !1, n)
}
;
Ae.unmountComponentAtNode = function(e) {
  if (!Ll(e))
      throw Error(R(40));
  return e._reactRootContainer ? (dn(function() {
      Ol(null, null, e, !1, function() {
          e._reactRootContainer = null,
          e[xt] = null
      })
  }),
  !0) : !1
}
;
Ae.unstable_batchedUpdates = os;
Ae.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ll(n))
      throw Error(R(200));
  if (e == null || e._reactInternals === void 0)
      throw Error(R(38));
  return Ol(e, t, n, !1, r)
}
;
Ae.version = "18.2.0-next-9e3b772b8-20220608";
function hf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hf)
      } catch (e) {
          console.error(e)
      }
}
hf(),
dc.exports = Ae;
var en = dc.exports
, ja = en;
ki.createRoot = ja.createRoot,
ki.hydrateRoot = ja.hydrateRoot;
function Ve({width: e, height: t}) {
  return e / t
}
function fl(e, t=0) {
  const n = 10 ** t;
  return Math.round((e + Number.EPSILON) * n) / n
}
function zv(e) {
  return (t,n)=>e(n) - e(t)
}
class Lv {
  constructor(t) {
      this.comparator = t,
      this.heap = [],
      this.n = 0
  }
  greater(t, n) {
      return this.comparator(this.heap[t], this.heap[n]) < 0
  }
  swap(t, n) {
      const r = this.heap[t];
      this.heap[t] = this.heap[n],
      this.heap[n] = r
  }
  swim(t) {
      let n = t
        , r = Math.floor(n / 2);
      for (; n > 1 && this.greater(r, n); )
          this.swap(r, n),
          n = r,
          r = Math.floor(n / 2)
  }
  sink(t) {
      let n = t
        , r = n * 2;
      for (; r <= this.n && (r < this.n && this.greater(r, r + 1) && (r += 1),
      !!this.greater(n, r)); )
          this.swap(n, r),
          n = r,
          r = n * 2
  }
  push(t) {
      this.n += 1,
      this.heap[this.n] = t,
      this.swim(this.n)
  }
  pop() {
      if (this.n === 0)
          return;
      this.swap(1, this.n),
      this.n -= 1;
      const t = this.heap.pop();
      return this.sink(1),
      t
  }
  size() {
      return this.n
  }
}
function Ov(e, t, n) {
  const r = new Map
    , o = new Set
    , l = new Map;
  l.set(t, 0);
  const i = new Lv(zv(u=>u.weight));
  for (i.push({
      id: t,
      weight: 0
  }); i.size() > 0; ) {
      const {id: u, weight: s} = i.pop();
      if (!o.has(u)) {
          const a = e(u);
          o.add(u),
          a.forEach((d,c)=>{
              const p = s + d
                , m = r.get(c)
                , y = l.get(c);
              (y === void 0 || y > p && (y / p > 1.005 || m !== void 0 && m < u)) && (l.set(c, p),
              i.push({
                  id: c,
                  weight: p
              }),
              r.set(c, u))
          }
          )
      }
  }
  return l.has(n) ? r : void 0
}
function Iv(e, t) {
  const n = [];
  for (let r = t; r !== void 0; r = e.get(r))
      n.push(r);
  return n.reverse()
}
function Av(e, t, n) {
  const r = Ov(e, t, n);
  return r ? Iv(r, n) : void 0
}
function Fv({photos: e, targetRowHeight: t, containerWidth: n}) {
  const r = e.reduce((o,l)=>Math.min(Ve(l), o), Number.MAX_VALUE);
  return fl(n / t / r) + 2
}
function vf(e, t, n, r) {
  const o = t - (e.length - 1) * n - 2 * r * e.length
    , l = e.reduce((i,u)=>i + Ve(u), 0);
  return o / l
}
function jv(e, t, n, r, o, l, i) {
  const u = e.slice(t, n)
    , s = vf(u, r, l, i);
  return s > 0 ? (s - o) ** 2 * u.length : void 0
}
function $v({photos: e, layoutOptions: t, targetRowHeight: n, limitNodeSearch: r, rowConstraints: o}) {
  return l=>{
      var i, u;
      const {containerWidth: s, spacing: a, padding: d} = t
        , c = new Map;
      c.set(l, 0);
      const p = (i = o == null ? void 0 : o.minPhotos) != null ? i : 1
        , m = Math.min(r, (u = o == null ? void 0 : o.maxPhotos) != null ? u : 1 / 0);
      for (let y = l + p; y < e.length + 1 && !(y - l > m); y += 1) {
          const w = jv(e, l, y, s, n, a, d);
          if (w === void 0)
              break;
          c.set(y, w)
      }
      return c
  }
}
function Uv({photos: e, layoutOptions: t}) {
  const {spacing: n, padding: r, containerWidth: o, targetRowHeight: l, rowConstraints: i} = t
    , u = Fv({
      photos: e,
      containerWidth: o,
      targetRowHeight: l
  })
    , s = $v({
      photos: e,
      layoutOptions: t,
      targetRowHeight: l,
      limitNodeSearch: u,
      rowConstraints: i
  })
    , a = Av(s, 0, e.length);
  if (a === void 0)
      return;
  const d = [];
  for (let c = 1; c < a.length; c += 1) {
      const p = e.map((y,w)=>({
          photo: y,
          index: w
      })).slice(a[c - 1], a[c])
        , m = vf(p.map(({photo: y})=>y), o, n, r);
      d.push(p.map(({photo: y, index: w},k)=>({
          photo: y,
          layout: {
              height: m,
              width: m * Ve(y),
              index: w,
              photoIndex: k,
              photosCount: p.length
          }
      })))
  }
  return d
}
function Il(...e) {
  return [...e].filter(t=>!!t).join(" ")
}
function mf(e, {width: t, photosCount: n}, {spacing: r, padding: o, containerWidth: l}) {
  const i = r * (n - 1) + 2 * o * n;
  return `calc((${e} - ${i}px) / ${fl((l - i) / t, 5)})`
}
function Bv(e, t) {
  return t.layout !== "rows" ? `calc(100% - ${2 * t.padding}px)` : mf("100%", e, t)
}
function $a(e, t, n) {
  var r, o;
  return mf((o = (r = e.match(/^\s*calc\((.*)\)\s*$/)) == null ? void 0 : r[1]) != null ? o : e, t, n)
}
function Wv(e, t, n) {
  let r, o;
  const l = e.srcSet || e.images;
  return l && l.length > 0 && (r = l.concat(l.find(({width: i})=>i === e.width) ? [] : [{
      src: e.src,
      width: e.width,
      height: e.height
  }]).sort((i,u)=>i.width - u.width).map(i=>`${i.src} ${i.width}w`).join(", ")),
  n.sizes ? o = (n.sizes.sizes || []).map(({viewport: i, size: u})=>`${i} ${$a(u, t, n)}`).concat($a(n.sizes.size, t, n)).join(", ") : r && (o = `${Math.ceil(t.width / n.containerWidth * 100)}vw`),
  {
      srcSet: r,
      sizes: o
  }
}
function fs(e) {
  var t, n;
  const {photo: r, layout: o, layoutOptions: l, imageProps: {style: i, className: u, ...s}={}, renderPhoto: a} = e
    , {onClick: d} = l
    , c = {
      display: "block",
      boxSizing: "content-box",
      width: Bv(o, l),
      height: "auto",
      aspectRatio: `${r.width} / ${r.height}`,
      ...l.padding ? {
          padding: `${l.padding}px`
      } : null,
      ...(l.layout === "columns" || l.layout === "masonry") && o.photoIndex < o.photosCount - 1 ? {
          marginBottom: `${l.spacing}px`
      } : null,
      ...d ? {
          cursor: "pointer"
      } : null,
      ...i
  }
    , p = d ? k=>{
      d({
          event: k,
          photo: r,
          index: o.index
      })
  }
  : void 0
    , m = {
      src: r.src,
      alt: (t = r.alt) != null ? t : "",
      title: r.title,
      onClick: p,
      style: c,
      className: Il("react-photo-album--photo", u),
      loading: "lazy",
      decoding: "async",
      ...Wv(r, o, l),
      ...s
  }
    , y = k=>{
      const {src: h, alt: f, srcSet: v, sizes: S, style: x, ...E} = m;
      return g.createElement("img", {
          alt: f,
          ...v ? {
              srcSet: v,
              sizes: S
          } : null,
          src: h,
          style: k != null && k.wrapped ? {
              display: "block",
              width: "100%",
              height: "100%"
          } : x,
          ...E
      })
  }
    , w = (({display: k, boxSizing: h, width: f, aspectRatio: v, padding: S, marginBottom: x, cursor: E})=>({
      display: k,
      boxSizing: h,
      width: f,
      aspectRatio: v,
      padding: S,
      marginBottom: x,
      cursor: E
  }))(c);
  return g.createElement(g.Fragment, null, (n = a == null ? void 0 : a({
      photo: r,
      layout: o,
      layoutOptions: l,
      imageProps: m,
      renderDefaultPhoto: y,
      wrapperStyle: w
  })) != null ? n : y())
}
function Vv({rowContainerProps: e, children: t}) {
  return g.createElement("div", {
      ...e
  }, t)
}
function Hv(e) {
  const {layoutOptions: t, rowIndex: n, rowsCount: r, renderRowContainer: o, rowContainerProps: {style: l, className: i, ...u}={}, children: s} = e
    , a = {
      className: Il("react-photo-album--row", i),
      style: {
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          alignItems: "flex-start",
          justifyContent: "space-between",
          ...n < r - 1 ? {
              marginBottom: `${t.spacing}px`
          } : null,
          ...l
      },
      ...u
  };
  return g.createElement(g.Fragment, null, (o ?? Vv)({
      layoutOptions: t,
      rowIndex: n,
      rowsCount: r,
      rowContainerProps: a,
      children: s
  }))
}
function Qv(e) {
  const {photos: t, layoutOptions: n, renderPhoto: r, renderRowContainer: o, componentsProps: {imageProps: l, rowContainerProps: i}} = e
    , u = Uv({
      photos: t,
      layoutOptions: n
  });
  return u ? g.createElement(g.Fragment, null, u.map((s,a)=>g.createElement(Hv, {
      key: `row-${a}`,
      layoutOptions: n,
      rowIndex: a,
      rowsCount: u.length,
      renderRowContainer: o,
      rowContainerProps: i
  }, s.map(({photo: d, layout: c})=>g.createElement(fs, {
      key: d.key || d.src,
      photo: d,
      layout: c,
      layoutOptions: n,
      renderPhoto: r,
      imageProps: l
  }))))) : null
}
function Kv(e, t, n, r) {
  const o = new Map
    , l = new Set;
  l.add(n);
  for (let i = 0; i < t; i += 1) {
      const u = [...l.keys()];
      l.clear(),
      u.forEach(s=>{
          const a = i > 0 ? o.get(s)[i].weight : 0;
          e(s).forEach(({neighbor: d, weight: c})=>{
              let p = o.get(d);
              p || (p = [],
              o.set(d, p));
              const m = a + c
                , y = p[i + 1];
              (!y || y.weight > m && (y.weight / m > 1.0001 || s < y.node)) && (p[i + 1] = {
                  node: s,
                  weight: m
              }),
              i < t - 1 && d !== r && l.add(d)
          }
          )
      }
      )
  }
  return o
}
function Yv(e, t, n) {
  const r = [n];
  for (let o = n, l = t; l > 0; l -= 1)
      o = e.get(o)[l].node,
      r.push(o);
  return r.reverse()
}
function Xv(e, t, n, r) {
  return Yv(Kv(e, t, n, r), t, r)
}
function Gv({photos: e, spacing: t, padding: n, targetColumnWidth: r, targetColumnHeight: o}) {
  return l=>{
      const i = []
        , u = o * 1.5;
      let s = r / Ve(e[l]) + 2 * n;
      for (let a = l + 1; a < e.length + 1 && (i.push({
          neighbor: a,
          weight: (o - s) ** 2
      }),
      !(s > u || a === e.length)); a += 1)
          s += r / Ve(e[a]) + t + 2 * n;
      return i
  }
}
function Ua({path: e, photos: t, containerWidth: n, columnsGaps: r, columnsRatios: o, spacing: l, padding: i}) {
  const u = []
    , s = o.reduce((a,d)=>a + d, 0);
  for (let a = 0; a < e.length - 1; a += 1) {
      const d = t.map((m,y)=>({
          photo: m,
          index: y
      })).slice(e[a], e[a + 1])
        , c = o.reduce((m,y,w)=>m + (r[a] - r[w]) * y, 0)
        , p = (n - (e.length - 2) * l - 2 * (e.length - 1) * i - c) * o[a] / s;
      u.push(d.map(({photo: m, index: y},w)=>({
          photo: m,
          layout: {
              width: p,
              height: p / Ve(m),
              index: y,
              photoIndex: w,
              photosCount: d.length
          }
      })))
  }
  return u
}
function Jv({photos: e, layoutOptions: t, targetColumnWidth: n}) {
  const {columns: r, spacing: o, padding: l, containerWidth: i} = t
    , u = []
    , s = [];
  if (e.length <= r) {
      const m = e.length > 0 ? e.reduce((w,k)=>w + Ve(k), 0) / e.length : 1;
      for (let w = 0; w < r; w += 1)
          u[w] = 2 * l,
          s[w] = w < e.length ? Ve(e[w]) : m;
      const y = Ua({
          path: Array.from({
              length: r + 1
          }).map((w,k)=>Math.min(k, e.length)),
          photos: e,
          columnsRatios: s,
          columnsGaps: u,
          containerWidth: i,
          spacing: o,
          padding: l
      });
      return {
          columnsGaps: u,
          columnsRatios: s,
          columnsModel: y
      }
  }
  const a = (e.reduce((m,y)=>m + n / Ve(y), 0) + o * (e.length - r) + 2 * l * e.length) / r
    , d = Gv({
      photos: e,
      targetColumnWidth: n,
      targetColumnHeight: a,
      spacing: o,
      padding: l
  })
    , c = Xv(d, r, 0, e.length);
  for (let m = 0; m < c.length - 1; m += 1) {
      const y = e.slice(c[m], c[m + 1]);
      u[m] = o * (y.length - 1) + 2 * l * y.length,
      s[m] = 1 / y.reduce((w,k)=>w + 1 / Ve(k), 0)
  }
  const p = Ua({
      path: c,
      photos: e,
      columnsRatios: s,
      columnsGaps: u,
      containerWidth: i,
      spacing: o,
      padding: l
  });
  return {
      columnsGaps: u,
      columnsRatios: s,
      columnsModel: p
  }
}
function gf(e) {
  const {photos: t, layoutOptions: n} = e
    , {columns: r, spacing: o, padding: l, containerWidth: i} = n
    , u = (i - o * (r - 1) - 2 * l * r) / r
    , {columnsGaps: s, columnsRatios: a, columnsModel: d} = Jv({
      photos: t,
      layoutOptions: n,
      targetColumnWidth: u
  });
  return d.findIndex(c=>c.findIndex(({layout: {width: p, height: m}})=>p < 0 || m < 0) >= 0) >= 0 ? r > 1 ? gf({
      photos: t,
      layoutOptions: {
          ...n,
          columns: r - 1
      }
  }) : void 0 : {
      columnsModel: d,
      columnsGaps: s,
      columnsRatios: a
  }
}
function Zv({photos: e, layoutOptions: t}) {
  return gf({
      photos: e,
      layoutOptions: t
  })
}
function qv({columnContainerProps: e, children: t}) {
  return g.createElement("div", {
      ...e
  }, t)
}
function bv(e) {
  const {layoutOptions: t, columnIndex: n, columnsCount: r, columnsGaps: o, columnsRatios: l} = e
    , {layout: i, spacing: u, padding: s} = t;
  if (i === "masonry" || !o || !l)
      return `calc((100% - ${u * (r - 1)}px) / ${r})`;
  const a = l.reduce((c,p)=>c + p, 0)
    , d = l.reduce((c,p,m)=>c + (o[n] - o[m]) * p, 0);
  return `calc((100% - ${fl((r - 1) * u + 2 * r * s + d, 3)}px) * ${fl(l[n] / a, 5)} + ${2 * s}px)`
}
function yf(e) {
  const {layoutOptions: t, renderColumnContainer: n, children: r, columnContainerProps: {style: o, className: l, ...i}={}, ...u} = e
    , s = {
      className: Il("react-photo-album--column", l),
      style: {
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          alignItems: "flex-start",
          width: bv(e),
          justifyContent: t.layout === "columns" ? "space-between" : "flex-start",
          ...o
      },
      ...i
  };
  return g.createElement(g.Fragment, null, (n ?? qv)({
      layoutOptions: t,
      columnContainerProps: s,
      children: r,
      ...u
  }))
}
function em(e) {
  const {photos: t, layoutOptions: n, renderPhoto: r, renderColumnContainer: o, componentsProps: {imageProps: l, columnContainerProps: i}} = e
    , u = Zv({
      photos: t,
      layoutOptions: n
  });
  if (!u)
      return null;
  const {columnsModel: s, columnsRatios: a, columnsGaps: d} = u;
  return g.createElement(g.Fragment, null, s.map((c,p)=>g.createElement(yf, {
      key: `column-${p}`,
      layoutOptions: n,
      columnIndex: p,
      columnsCount: s.length,
      columnsGaps: d,
      columnsRatios: a,
      renderColumnContainer: o,
      columnContainerProps: i
  }, c.map(({photo: m, layout: y})=>g.createElement(fs, {
      key: m.key || m.src,
      photo: m,
      layout: y,
      layoutOptions: n,
      renderPhoto: r,
      imageProps: l
  })))))
}
function wf(e) {
  const {photos: t, layoutOptions: n} = e
    , {columns: r, spacing: o, padding: l, containerWidth: i} = n
    , u = (i - o * (r - 1) - 2 * l * r) / r;
  if (u <= 0)
      return r > 1 ? wf({
          ...e,
          layoutOptions: {
              ...n,
              columns: r - 1
          }
      }) : void 0;
  const s = [];
  for (let d = 0; d < r; d += 1)
      s[d] = 0;
  return t.reduce((d,c,p)=>{
      const m = s.reduce((y,w,k)=>w < s[y] - 1 ? k : y, 0);
      return s[m] = s[m] + u / Ve(c) + o + 2 * l,
      d[m].push({
          photo: c,
          index: p
      }),
      d
  }
  , Array.from({
      length: r
  }).map(()=>[])).map(d=>d.map(({photo: c, index: p},m)=>({
      photo: c,
      layout: {
          width: u,
          height: u / Ve(c),
          index: p,
          photoIndex: m,
          photosCount: d.length
      }
  })))
}
function tm(e) {
  const {photos: t, layoutOptions: n, renderPhoto: r, renderColumnContainer: o, componentsProps: {imageProps: l, columnContainerProps: i}} = e
    , u = wf({
      photos: t,
      layoutOptions: n
  });
  return u ? g.createElement(g.Fragment, null, u.map((s,a)=>g.createElement(yf, {
      key: `masonry-column-${a}`,
      layoutOptions: n,
      columnsCount: u.length,
      columnIndex: a,
      renderColumnContainer: o,
      columnContainerProps: i
  }, s.map(({photo: d, layout: c})=>g.createElement(fs, {
      key: d.key || d.src,
      photo: d,
      layout: c,
      layoutOptions: n,
      renderPhoto: r,
      imageProps: l
  }))))) : null
}
function nm({containerProps: e, children: t, containerRef: n}) {
  return g.createElement("div", {
      ref: n,
      ...e
  }, t)
}
function rm(e) {
  const {layout: t, renderContainer: n, children: r, containerRef: o, containerProps: {style: l, className: i, ...u}={}} = e
    , s = {
      className: Il("react-photo-album", `react-photo-album--${t}`, i),
      style: {
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-between",
          flexDirection: t === "rows" ? "column" : "row",
          ...l
      },
      ...u
  };
  return g.createElement(g.Fragment, null, (n ?? nm)({
      containerProps: s,
      containerRef: o,
      layout: t,
      children: r
  }))
}
function om(e) {
  const t = g.useRef(e);
  return (!e || !t.current || e.join() !== t.current.join()) && (t.current = e),
  t.current
}
function lm(e, {newContainerWidth: t, newScrollbarWidth: n}) {
  const {containerWidth: r, scrollbarWidth: o} = e;
  return r !== void 0 && o !== void 0 && t !== void 0 && n !== void 0 && t > r && t - r <= 20 && n < o ? {
      containerWidth: r,
      scrollbarWidth: n
  } : r !== t || o !== n ? {
      containerWidth: t,
      scrollbarWidth: n
  } : e
}
function im(e, t) {
  let n = e == null ? void 0 : e.clientWidth;
  if (n !== void 0 && t && t.length > 0) {
      const r = [...t.filter(l=>l > 0)].sort((l,i)=>i - l);
      r.push(Math.floor(r[r.length - 1] / 2));
      const o = n;
      n = r.find((l,i)=>l <= o || i === r.length - 1)
  }
  return n
}
function um(e, t) {
  const [{containerWidth: n},r] = g.useReducer(lm, {
      containerWidth: t
  })
    , o = g.useRef(null)
    , l = g.useRef();
  return {
      containerRef: g.useCallback(u=>{
          var s;
          (s = l.current) == null || s.disconnect(),
          l.current = void 0,
          o.current = u;
          const a = ()=>r({
              newContainerWidth: im(o.current, e),
              newScrollbarWidth: window.innerWidth - document.documentElement.clientWidth
          });
          a(),
          u && typeof ResizeObserver < "u" && (l.current = new ResizeObserver(a),
          l.current.observe(u))
      }
      , [e]),
      containerWidth: n
  }
}
const sm = Object.freeze([1200, 600, 300, 0]);
function ps(e, t) {
  return typeof e == "function" ? e(t) : e
}
function Sf(e, t) {
  return typeof e < "u" ? ps(e, t) : void 0
}
function am(e, t) {
  const n = sm.findIndex(r=>r <= t);
  return ps(e[n >= 0 ? n : 0], t)
}
function Do(e, t, n, r=0) {
  const o = Sf(e, t);
  return Math.round(Math.max(o === void 0 ? am(n, t) : o, r))
}
function cm({layout: e, onClick: t, containerWidth: n, targetRowHeight: r, rowConstraints: o, columns: l, spacing: i, padding: u, sizes: s}) {
  return {
      layout: e,
      onClick: t,
      containerWidth: n,
      columns: Do(l, n, [5, 4, 3, 2], 1),
      spacing: Do(i, n, [20, 15, 10, 5]),
      padding: Do(u, n, [0, 0, 0, 0, 0]),
      targetRowHeight: Do(r, n, [a=>a / 5, a=>a / 4, a=>a / 3, a=>a / 2]),
      rowConstraints: Sf(o, n),
      sizes: s
  }
}
function dm(e, t, n) {
  const {photos: r, componentsProps: o} = e
    , l = ps(o, t) || {};
  if (n) {
      const {layout: i, spacing: u, padding: s, rowConstraints: a} = n;
      if (i === "rows") {
          const {singleRowMaxHeight: d} = a || {};
          if (d) {
              const c = Math.floor(r.reduce((p,{width: m, height: y})=>p + m / y * d - 2 * s, s * r.length * 2 + u * (r.length - 1)));
              c > 0 && (l.containerProps = l.containerProps || {},
              l.containerProps.style = {
                  maxWidth: c,
                  ...l.containerProps.style
              })
          }
      }
  }
  return l
}
function fm(e, t, n) {
  const {photos: r, layout: o, renderPhoto: l, renderRowContainer: i, renderColumnContainer: u} = e
    , s = {
      photos: r,
      renderPhoto: l,
      componentsProps: t
  };
  return o === "rows" ? g.createElement(Qv, {
      layoutOptions: n,
      renderRowContainer: i,
      ...s
  }) : o === "columns" ? g.createElement(em, {
      layoutOptions: n,
      renderColumnContainer: u,
      ...s
  }) : g.createElement(tm, {
      layoutOptions: n,
      renderColumnContainer: u,
      ...s
  })
}
function pm(e) {
  const {photos: t, layout: n, renderContainer: r, defaultContainerWidth: o, breakpoints: l} = e
    , {containerRef: i, containerWidth: u} = um(om(l), o);
  if (!n || !["rows", "columns", "masonry"].includes(n) || !Array.isArray(t))
      return null;
  const s = u ? cm({
      containerWidth: u,
      ...e
  }) : void 0
    , a = dm(e, u, s);
  return g.createElement(rm, {
      layout: n,
      containerRef: i,
      renderContainer: r,
      containerProps: a.containerProps
  }, s && fm(e, a, s))
}
function xf(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
      r += e;
  else if (typeof e == "object")
      if (Array.isArray(e)) {
          var o = e.length;
          for (t = 0; t < o; t++)
              e[t] && (n = xf(e[t])) && (r && (r += " "),
              r += n)
      } else
          for (n in e)
              e[n] && (r && (r += " "),
              r += n);
  return r
}
function hm() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
      (e = arguments[n]) && (t = xf(e)) && (r && (r += " "),
      r += t);
  return r
}
function vm() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
  return g.useMemo(()=>r=>{
      t.forEach(o=>o(r))
  }
  , t)
}
const Al = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Zn(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || t === "[object global]"
}
function hs(e) {
  return "nodeType"in e
}
function ke(e) {
  var t, n;
  return e ? Zn(e) ? e : hs(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window
}
function vs(e) {
  const {Document: t} = ke(e);
  return e instanceof t
}
function to(e) {
  return Zn(e) ? !1 : e instanceof ke(e).HTMLElement
}
function kf(e) {
  return e instanceof ke(e).SVGElement
}
function qn(e) {
  return e ? Zn(e) ? e.document : hs(e) ? vs(e) ? e : to(e) || kf(e) ? e.ownerDocument : document : document : document
}
const Ye = Al ? g.useLayoutEffect : g.useEffect;
function Fl(e) {
  const t = g.useRef(e);
  return Ye(()=>{
      t.current = e
  }
  ),
  g.useCallback(function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
      return t.current == null ? void 0 : t.current(...r)
  }, [])
}
function mm() {
  const e = g.useRef(null)
    , t = g.useCallback((r,o)=>{
      e.current = setInterval(r, o)
  }
  , [])
    , n = g.useCallback(()=>{
      e.current !== null && (clearInterval(e.current),
      e.current = null)
  }
  , []);
  return [t, n]
}
function Yr(e, t) {
  t === void 0 && (t = [e]);
  const n = g.useRef(e);
  return Ye(()=>{
      n.current !== e && (n.current = e)
  }
  , t),
  n
}
function no(e, t) {
  const n = g.useRef();
  return g.useMemo(()=>{
      const r = e(n.current);
      return n.current = r,
      r
  }
  , [...t])
}
function pl(e) {
  const t = Fl(e)
    , n = g.useRef(null)
    , r = g.useCallback(o=>{
      o !== n.current && (t == null || t(o, n.current)),
      n.current = o
  }
  , []);
  return [n, r]
}
function hl(e) {
  const t = g.useRef();
  return g.useEffect(()=>{
      t.current = e
  }
  , [e]),
  t.current
}
let mi = {};
function ro(e, t) {
  return g.useMemo(()=>{
      if (t)
          return t;
      const n = mi[e] == null ? 0 : mi[e] + 1;
      return mi[e] = n,
      e + "-" + n
  }
  , [e, t])
}
function Cf(e) {
  return function(t) {
      for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
          r[o - 1] = arguments[o];
      return r.reduce((l,i)=>{
          const u = Object.entries(i);
          for (const [s,a] of u) {
              const d = l[s];
              d != null && (l[s] = d + e * a)
          }
          return l
      }
      , {
          ...t
      })
  }
}
const Un = Cf(1)
, Xr = Cf(-1);
function gm(e) {
  return "clientX"in e && "clientY"in e
}
function jl(e) {
  if (!e)
      return !1;
  const {KeyboardEvent: t} = ke(e.target);
  return t && e instanceof t
}
function ym(e) {
  if (!e)
      return !1;
  const {TouchEvent: t} = ke(e.target);
  return t && e instanceof t
}
function vl(e) {
  if (ym(e)) {
      if (e.touches && e.touches.length) {
          const {clientX: t, clientY: n} = e.touches[0];
          return {
              x: t,
              y: n
          }
      } else if (e.changedTouches && e.changedTouches.length) {
          const {clientX: t, clientY: n} = e.changedTouches[0];
          return {
              x: t,
              y: n
          }
      }
  }
  return gm(e) ? {
      x: e.clientX,
      y: e.clientY
  } : null
}
const fn = Object.freeze({
  Translate: {
      toString(e) {
          if (!e)
              return;
          const {x: t, y: n} = e;
          return "translate3d(" + (t ? Math.round(t) : 0) + "px, " + (n ? Math.round(n) : 0) + "px, 0)"
      }
  },
  Scale: {
      toString(e) {
          if (!e)
              return;
          const {scaleX: t, scaleY: n} = e;
          return "scaleX(" + t + ") scaleY(" + n + ")"
      }
  },
  Transform: {
      toString(e) {
          if (e)
              return [fn.Translate.toString(e), fn.Scale.toString(e)].join(" ")
      }
  },
  Transition: {
      toString(e) {
          let {property: t, duration: n, easing: r} = e;
          return t + " " + n + "ms " + r
      }
  }
})
, Ba = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function wm(e) {
  return e.matches(Ba) ? e : e.querySelector(Ba)
}
const Sm = {
  display: "none"
};
function xm(e) {
  let {id: t, value: n} = e;
  return H.createElement("div", {
      id: t,
      style: Sm
  }, n)
}
function km(e) {
  let {id: t, announcement: n, ariaLiveType: r="assertive"} = e;
  const o = {
      position: "fixed",
      width: 1,
      height: 1,
      margin: -1,
      border: 0,
      padding: 0,
      overflow: "hidden",
      clip: "rect(0 0 0 0)",
      clipPath: "inset(100%)",
      whiteSpace: "nowrap"
  };
  return H.createElement("div", {
      id: t,
      style: o,
      role: "status",
      "aria-live": r,
      "aria-atomic": !0
  }, n)
}
function Cm() {
  const [e,t] = g.useState("");
  return {
      announce: g.useCallback(r=>{
          r != null && t(r)
      }
      , []),
      announcement: e
  }
}
const Ef = g.createContext(null);
function Em(e) {
  const t = g.useContext(Ef);
  g.useEffect(()=>{
      if (!t)
          throw new Error("useDndMonitor must be used within a children of <DndContext>");
      return t(e)
  }
  , [e, t])
}
function Rm() {
  const [e] = g.useState(()=>new Set)
    , t = g.useCallback(r=>(e.add(r),
  ()=>e.delete(r)), [e]);
  return [g.useCallback(r=>{
      let {type: o, event: l} = r;
      e.forEach(i=>{
          var u;
          return (u = i[o]) == null ? void 0 : u.call(i, l)
      }
      )
  }
  , [e]), t]
}
const Pm = {
  draggable: `
  To pick up a draggable item, press the space bar.
  While dragging, use the arrow keys to move the item.
  Press space again to drop the item in its new position, or press escape to cancel.
`
}
, Dm = {
  onDragStart(e) {
      let {active: t} = e;
      return "Picked up draggable item " + t.id + "."
  },
  onDragOver(e) {
      let {active: t, over: n} = e;
      return n ? "Draggable item " + t.id + " was moved over droppable area " + n.id + "." : "Draggable item " + t.id + " is no longer over a droppable area."
  },
  onDragEnd(e) {
      let {active: t, over: n} = e;
      return n ? "Draggable item " + t.id + " was dropped over droppable area " + n.id : "Draggable item " + t.id + " was dropped."
  },
  onDragCancel(e) {
      let {active: t} = e;
      return "Dragging was cancelled. Draggable item " + t.id + " was dropped."
  }
};
function Nm(e) {
  let {announcements: t=Dm, container: n, hiddenTextDescribedById: r, screenReaderInstructions: o=Pm} = e;
  const {announce: l, announcement: i} = Cm()
    , u = ro("DndLiveRegion")
    , [s,a] = g.useState(!1);
  if (g.useEffect(()=>{
      a(!0)
  }
  , []),
  Em(g.useMemo(()=>({
      onDragStart(c) {
          let {active: p} = c;
          l(t.onDragStart({
              active: p
          }))
      },
      onDragMove(c) {
          let {active: p, over: m} = c;
          t.onDragMove && l(t.onDragMove({
              active: p,
              over: m
          }))
      },
      onDragOver(c) {
          let {active: p, over: m} = c;
          l(t.onDragOver({
              active: p,
              over: m
          }))
      },
      onDragEnd(c) {
          let {active: p, over: m} = c;
          l(t.onDragEnd({
              active: p,
              over: m
          }))
      },
      onDragCancel(c) {
          let {active: p, over: m} = c;
          l(t.onDragCancel({
              active: p,
              over: m
          }))
      }
  }), [l, t])),
  !s)
      return null;
  const d = H.createElement(H.Fragment, null, H.createElement(xm, {
      id: r,
      value: o.draggable
  }), H.createElement(km, {
      id: u,
      announcement: i
  }));
  return n ? en.createPortal(d, n) : d
}
var ee;
(function(e) {
  e.DragStart = "dragStart",
  e.DragMove = "dragMove",
  e.DragEnd = "dragEnd",
  e.DragCancel = "dragCancel",
  e.DragOver = "dragOver",
  e.RegisterDroppable = "registerDroppable",
  e.SetDroppableDisabled = "setDroppableDisabled",
  e.UnregisterDroppable = "unregisterDroppable"
}
)(ee || (ee = {}));
function ml() {}
function gi(e, t) {
  return g.useMemo(()=>({
      sensor: e,
      options: t ?? {}
  }), [e, t])
}
function _m() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
  return g.useMemo(()=>[...t].filter(r=>r != null), [...t])
}
const rt = Object.freeze({
  x: 0,
  y: 0
});
function Rf(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
}
function Tm(e, t) {
  const n = vl(e);
  if (!n)
      return "0 0";
  const r = {
      x: (n.x - t.left) / t.width * 100,
      y: (n.y - t.top) / t.height * 100
  };
  return r.x + "% " + r.y + "%"
}
function Pf(e, t) {
  let {data: {value: n}} = e
    , {data: {value: r}} = t;
  return n - r
}
function Mm(e, t) {
  let {data: {value: n}} = e
    , {data: {value: r}} = t;
  return r - n
}
function Wa(e) {
  let {left: t, top: n, height: r, width: o} = e;
  return [{
      x: t,
      y: n
  }, {
      x: t + o,
      y: n
  }, {
      x: t,
      y: n + r
  }, {
      x: t + o,
      y: n + r
  }]
}
function Df(e, t) {
  if (!e || e.length === 0)
      return null;
  const [n] = e;
  return t ? n[t] : n
}
function Va(e, t, n) {
  return t === void 0 && (t = e.left),
  n === void 0 && (n = e.top),
  {
      x: t + e.width * .5,
      y: n + e.height * .5
  }
}
const zm = e=>{
  let {collisionRect: t, droppableRects: n, droppableContainers: r} = e;
  const o = Va(t, t.left, t.top)
    , l = [];
  for (const i of r) {
      const {id: u} = i
        , s = n.get(u);
      if (s) {
          const a = Rf(Va(s), o);
          l.push({
              id: u,
              data: {
                  droppableContainer: i,
                  value: a
              }
          })
      }
  }
  return l.sort(Pf)
}
, Lm = e=>{
  let {collisionRect: t, droppableRects: n, droppableContainers: r} = e;
  const o = Wa(t)
    , l = [];
  for (const i of r) {
      const {id: u} = i
        , s = n.get(u);
      if (s) {
          const a = Wa(s)
            , d = o.reduce((p,m,y)=>p + Rf(a[y], m), 0)
            , c = Number((d / 4).toFixed(4));
          l.push({
              id: u,
              data: {
                  droppableContainer: i,
                  value: c
              }
          })
      }
  }
  return l.sort(Pf)
}
;
function Om(e, t) {
  const n = Math.max(t.top, e.top)
    , r = Math.max(t.left, e.left)
    , o = Math.min(t.left + t.width, e.left + e.width)
    , l = Math.min(t.top + t.height, e.top + e.height)
    , i = o - r
    , u = l - n;
  if (r < o && n < l) {
      const s = t.width * t.height
        , a = e.width * e.height
        , d = i * u
        , c = d / (s + a - d);
      return Number(c.toFixed(4))
  }
  return 0
}
const Im = e=>{
  let {collisionRect: t, droppableRects: n, droppableContainers: r} = e;
  const o = [];
  for (const l of r) {
      const {id: i} = l
        , u = n.get(i);
      if (u) {
          const s = Om(u, t);
          s > 0 && o.push({
              id: i,
              data: {
                  droppableContainer: l,
                  value: s
              }
          })
      }
  }
  return o.sort(Mm)
}
;
function Am(e, t, n) {
  return {
      ...e,
      scaleX: t && n ? t.width / n.width : 1,
      scaleY: t && n ? t.height / n.height : 1
  }
}
function Nf(e, t) {
  return e && t ? {
      x: e.left - t.left,
      y: e.top - t.top
  } : rt
}
function Fm(e) {
  return function(n) {
      for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
          o[l - 1] = arguments[l];
      return o.reduce((i,u)=>({
          ...i,
          top: i.top + e * u.y,
          bottom: i.bottom + e * u.y,
          left: i.left + e * u.x,
          right: i.right + e * u.x
      }), {
          ...n
      })
  }
}
const jm = Fm(1);
function _f(e) {
  if (e.startsWith("matrix3d(")) {
      const t = e.slice(9, -1).split(/, /);
      return {
          x: +t[12],
          y: +t[13],
          scaleX: +t[0],
          scaleY: +t[5]
      }
  } else if (e.startsWith("matrix(")) {
      const t = e.slice(7, -1).split(/, /);
      return {
          x: +t[4],
          y: +t[5],
          scaleX: +t[0],
          scaleY: +t[3]
      }
  }
  return null
}
function $m(e, t, n) {
  const r = _f(t);
  if (!r)
      return e;
  const {scaleX: o, scaleY: l, x: i, y: u} = r
    , s = e.left - i - (1 - o) * parseFloat(n)
    , a = e.top - u - (1 - l) * parseFloat(n.slice(n.indexOf(" ") + 1))
    , d = o ? e.width / o : e.width
    , c = l ? e.height / l : e.height;
  return {
      width: d,
      height: c,
      top: a,
      right: s + d,
      bottom: a + c,
      left: s
  }
}
const Um = {
  ignoreTransform: !1
};
function bn(e, t) {
  t === void 0 && (t = Um);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
      const {transform: a, transformOrigin: d} = ke(e).getComputedStyle(e);
      a && (n = $m(n, a, d))
  }
  const {top: r, left: o, width: l, height: i, bottom: u, right: s} = n;
  return {
      top: r,
      left: o,
      width: l,
      height: i,
      bottom: u,
      right: s
  }
}
function Ha(e) {
  return bn(e, {
      ignoreTransform: !0
  })
}
function Bm(e) {
  const t = e.innerWidth
    , n = e.innerHeight;
  return {
      top: 0,
      left: 0,
      right: t,
      bottom: n,
      width: t,
      height: n
  }
}
function Wm(e, t) {
  return t === void 0 && (t = ke(e).getComputedStyle(e)),
  t.position === "fixed"
}
function Vm(e, t) {
  t === void 0 && (t = ke(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some(o=>{
      const l = t[o];
      return typeof l == "string" ? n.test(l) : !1
  }
  )
}
function $l(e, t) {
  const n = [];
  function r(o) {
      if (t != null && n.length >= t || !o)
          return n;
      if (vs(o) && o.scrollingElement != null && !n.includes(o.scrollingElement))
          return n.push(o.scrollingElement),
          n;
      if (!to(o) || kf(o) || n.includes(o))
          return n;
      const l = ke(e).getComputedStyle(o);
      return o !== e && Vm(o, l) && n.push(o),
      Wm(o, l) ? n : r(o.parentNode)
  }
  return e ? r(e) : n
}
function Tf(e) {
  const [t] = $l(e, 1);
  return t ?? null
}
function yi(e) {
  return !Al || !e ? null : Zn(e) ? e : hs(e) ? vs(e) || e === qn(e).scrollingElement ? window : to(e) ? e : null : null
}
function Mf(e) {
  return Zn(e) ? e.scrollX : e.scrollLeft
}
function zf(e) {
  return Zn(e) ? e.scrollY : e.scrollTop
}
function vu(e) {
  return {
      x: Mf(e),
      y: zf(e)
  }
}
var re;
(function(e) {
  e[e.Forward = 1] = "Forward",
  e[e.Backward = -1] = "Backward"
}
)(re || (re = {}));
function Lf(e) {
  return !Al || !e ? !1 : e === document.scrollingElement
}
function Of(e) {
  const t = {
      x: 0,
      y: 0
  }
    , n = Lf(e) ? {
      height: window.innerHeight,
      width: window.innerWidth
  } : {
      height: e.clientHeight,
      width: e.clientWidth
  }
    , r = {
      x: e.scrollWidth - n.width,
      y: e.scrollHeight - n.height
  }
    , o = e.scrollTop <= t.y
    , l = e.scrollLeft <= t.x
    , i = e.scrollTop >= r.y
    , u = e.scrollLeft >= r.x;
  return {
      isTop: o,
      isLeft: l,
      isBottom: i,
      isRight: u,
      maxScroll: r,
      minScroll: t
  }
}
const Hm = {
  x: .2,
  y: .2
};
function Qm(e, t, n, r, o) {
  let {top: l, left: i, right: u, bottom: s} = n;
  r === void 0 && (r = 10),
  o === void 0 && (o = Hm);
  const {isTop: a, isBottom: d, isLeft: c, isRight: p} = Of(e)
    , m = {
      x: 0,
      y: 0
  }
    , y = {
      x: 0,
      y: 0
  }
    , w = {
      height: t.height * o.y,
      width: t.width * o.x
  };
  return !a && l <= t.top + w.height ? (m.y = re.Backward,
  y.y = r * Math.abs((t.top + w.height - l) / w.height)) : !d && s >= t.bottom - w.height && (m.y = re.Forward,
  y.y = r * Math.abs((t.bottom - w.height - s) / w.height)),
  !p && u >= t.right - w.width ? (m.x = re.Forward,
  y.x = r * Math.abs((t.right - w.width - u) / w.width)) : !c && i <= t.left + w.width && (m.x = re.Backward,
  y.x = r * Math.abs((t.left + w.width - i) / w.width)),
  {
      direction: m,
      speed: y
  }
}
function Km(e) {
  if (e === document.scrollingElement) {
      const {innerWidth: l, innerHeight: i} = window;
      return {
          top: 0,
          left: 0,
          right: l,
          bottom: i,
          width: l,
          height: i
      }
  }
  const {top: t, left: n, right: r, bottom: o} = e.getBoundingClientRect();
  return {
      top: t,
      left: n,
      right: r,
      bottom: o,
      width: e.clientWidth,
      height: e.clientHeight
  }
}
function If(e) {
  return e.reduce((t,n)=>Un(t, vu(n)), rt)
}
function Ym(e) {
  return e.reduce((t,n)=>t + Mf(n), 0)
}
function Xm(e) {
  return e.reduce((t,n)=>t + zf(n), 0)
}
function Af(e, t) {
  if (t === void 0 && (t = bn),
  !e)
      return;
  const {top: n, left: r, bottom: o, right: l} = t(e);
  Tf(e) && (o <= 0 || l <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
      block: "center",
      inline: "center"
  })
}
const Gm = [["x", ["left", "right"], Ym], ["y", ["top", "bottom"], Xm]];
class ms {
  constructor(t, n) {
      this.rect = void 0,
      this.width = void 0,
      this.height = void 0,
      this.top = void 0,
      this.bottom = void 0,
      this.right = void 0,
      this.left = void 0;
      const r = $l(n)
        , o = If(r);
      this.rect = {
          ...t
      },
      this.width = t.width,
      this.height = t.height;
      for (const [l,i,u] of Gm)
          for (const s of i)
              Object.defineProperty(this, s, {
                  get: ()=>{
                      const a = u(r)
                        , d = o[l] - a;
                      return this.rect[s] + d
                  }
                  ,
                  enumerable: !0
              });
      Object.defineProperty(this, "rect", {
          enumerable: !1
      })
  }
}
class Dr {
  constructor(t) {
      this.target = void 0,
      this.listeners = [],
      this.removeAll = ()=>{
          this.listeners.forEach(n=>{
              var r;
              return (r = this.target) == null ? void 0 : r.removeEventListener(...n)
          }
          )
      }
      ,
      this.target = t
  }
  add(t, n, r) {
      var o;
      (o = this.target) == null || o.addEventListener(t, n, r),
      this.listeners.push([t, n, r])
  }
}
function Jm(e) {
  const {EventTarget: t} = ke(e);
  return e instanceof t ? e : qn(e)
}
function wi(e, t) {
  const n = Math.abs(e.x)
    , r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x"in t && "y"in t ? n > t.x && r > t.y : "x"in t ? n > t.x : "y"in t ? r > t.y : !1
}
var $e;
(function(e) {
  e.Click = "click",
  e.DragStart = "dragstart",
  e.Keydown = "keydown",
  e.ContextMenu = "contextmenu",
  e.Resize = "resize",
  e.SelectionChange = "selectionchange",
  e.VisibilityChange = "visibilitychange"
}
)($e || ($e = {}));
function Qa(e) {
  e.preventDefault()
}
function Zm(e) {
  e.stopPropagation()
}
var I;
(function(e) {
  e.Space = "Space",
  e.Down = "ArrowDown",
  e.Right = "ArrowRight",
  e.Left = "ArrowLeft",
  e.Up = "ArrowUp",
  e.Esc = "Escape",
  e.Enter = "Enter"
}
)(I || (I = {}));
const Ff = {
  start: [I.Space, I.Enter],
  cancel: [I.Esc],
  end: [I.Space, I.Enter]
}
, qm = (e,t)=>{
  let {currentCoordinates: n} = t;
  switch (e.code) {
  case I.Right:
      return {
          ...n,
          x: n.x + 25
      };
  case I.Left:
      return {
          ...n,
          x: n.x - 25
      };
  case I.Down:
      return {
          ...n,
          y: n.y + 25
      };
  case I.Up:
      return {
          ...n,
          y: n.y - 25
      }
  }
}
;
class gs {
  constructor(t) {
      this.props = void 0,
      this.autoScrollEnabled = !1,
      this.referenceCoordinates = void 0,
      this.listeners = void 0,
      this.windowListeners = void 0,
      this.props = t;
      const {event: {target: n}} = t;
      this.props = t,
      this.listeners = new Dr(qn(n)),
      this.windowListeners = new Dr(ke(n)),
      this.handleKeyDown = this.handleKeyDown.bind(this),
      this.handleCancel = this.handleCancel.bind(this),
      this.attach()
  }
  attach() {
      this.handleStart(),
      this.windowListeners.add($e.Resize, this.handleCancel),
      this.windowListeners.add($e.VisibilityChange, this.handleCancel),
      setTimeout(()=>this.listeners.add($e.Keydown, this.handleKeyDown))
  }
  handleStart() {
      const {activeNode: t, onStart: n} = this.props
        , r = t.node.current;
      r && Af(r),
      n(rt)
  }
  handleKeyDown(t) {
      if (jl(t)) {
          const {active: n, context: r, options: o} = this.props
            , {keyboardCodes: l=Ff, coordinateGetter: i=qm, scrollBehavior: u="smooth"} = o
            , {code: s} = t;
          if (l.end.includes(s)) {
              this.handleEnd(t);
              return
          }
          if (l.cancel.includes(s)) {
              this.handleCancel(t);
              return
          }
          const {collisionRect: a} = r.current
            , d = a ? {
              x: a.left,
              y: a.top
          } : rt;
          this.referenceCoordinates || (this.referenceCoordinates = d);
          const c = i(t, {
              active: n,
              context: r.current,
              currentCoordinates: d
          });
          if (c) {
              const p = Xr(c, d)
                , m = {
                  x: 0,
                  y: 0
              }
                , {scrollableAncestors: y} = r.current;
              for (const w of y) {
                  const k = t.code
                    , {isTop: h, isRight: f, isLeft: v, isBottom: S, maxScroll: x, minScroll: E} = Of(w)
                    , C = Km(w)
                    , P = {
                      x: Math.min(k === I.Right ? C.right - C.width / 2 : C.right, Math.max(k === I.Right ? C.left : C.left + C.width / 2, c.x)),
                      y: Math.min(k === I.Down ? C.bottom - C.height / 2 : C.bottom, Math.max(k === I.Down ? C.top : C.top + C.height / 2, c.y))
                  }
                    , M = k === I.Right && !f || k === I.Left && !v
                    , _ = k === I.Down && !S || k === I.Up && !h;
                  if (M && P.x !== c.x) {
                      const L = w.scrollLeft + p.x
                        , le = k === I.Right && L <= x.x || k === I.Left && L >= E.x;
                      if (le && !p.y) {
                          w.scrollTo({
                              left: L,
                              behavior: u
                          });
                          return
                      }
                      le ? m.x = w.scrollLeft - L : m.x = k === I.Right ? w.scrollLeft - x.x : w.scrollLeft - E.x,
                      m.x && w.scrollBy({
                          left: -m.x,
                          behavior: u
                      });
                      break
                  } else if (_ && P.y !== c.y) {
                      const L = w.scrollTop + p.y
                        , le = k === I.Down && L <= x.y || k === I.Up && L >= E.y;
                      if (le && !p.x) {
                          w.scrollTo({
                              top: L,
                              behavior: u
                          });
                          return
                      }
                      le ? m.y = w.scrollTop - L : m.y = k === I.Down ? w.scrollTop - x.y : w.scrollTop - E.y,
                      m.y && w.scrollBy({
                          top: -m.y,
                          behavior: u
                      });
                      break
                  }
              }
              this.handleMove(t, Un(Xr(c, this.referenceCoordinates), m))
          }
      }
  }
  handleMove(t, n) {
      const {onMove: r} = this.props;
      t.preventDefault(),
      r(n)
  }
  handleEnd(t) {
      const {onEnd: n} = this.props;
      t.preventDefault(),
      this.detach(),
      n()
  }
  handleCancel(t) {
      const {onCancel: n} = this.props;
      t.preventDefault(),
      this.detach(),
      n()
  }
  detach() {
      this.listeners.removeAll(),
      this.windowListeners.removeAll()
  }
}
gs.activators = [{
  eventName: "onKeyDown",
  handler: (e,t,n)=>{
      let {keyboardCodes: r=Ff, onActivation: o} = t
        , {active: l} = n;
      const {code: i} = e.nativeEvent;
      if (r.start.includes(i)) {
          const u = l.activatorNode.current;
          return u && e.target !== u ? !1 : (e.preventDefault(),
          o == null || o({
              event: e.nativeEvent
          }),
          !0)
      }
      return !1
  }
}];
function Ka(e) {
  return !!(e && "distance"in e)
}
function Ya(e) {
  return !!(e && "delay"in e)
}
class ys {
  constructor(t, n, r) {
      var o;
      r === void 0 && (r = Jm(t.event.target)),
      this.props = void 0,
      this.events = void 0,
      this.autoScrollEnabled = !0,
      this.document = void 0,
      this.activated = !1,
      this.initialCoordinates = void 0,
      this.timeoutId = null,
      this.listeners = void 0,
      this.documentListeners = void 0,
      this.windowListeners = void 0,
      this.props = t,
      this.events = n;
      const {event: l} = t
        , {target: i} = l;
      this.props = t,
      this.events = n,
      this.document = qn(i),
      this.documentListeners = new Dr(this.document),
      this.listeners = new Dr(r),
      this.windowListeners = new Dr(ke(i)),
      this.initialCoordinates = (o = vl(l)) != null ? o : rt,
      this.handleStart = this.handleStart.bind(this),
      this.handleMove = this.handleMove.bind(this),
      this.handleEnd = this.handleEnd.bind(this),
      this.handleCancel = this.handleCancel.bind(this),
      this.handleKeydown = this.handleKeydown.bind(this),
      this.removeTextSelection = this.removeTextSelection.bind(this),
      this.attach()
  }
  attach() {
      const {events: t, props: {options: {activationConstraint: n, bypassActivationConstraint: r}}} = this;
      if (this.listeners.add(t.move.name, this.handleMove, {
          passive: !1
      }),
      this.listeners.add(t.end.name, this.handleEnd),
      this.windowListeners.add($e.Resize, this.handleCancel),
      this.windowListeners.add($e.DragStart, Qa),
      this.windowListeners.add($e.VisibilityChange, this.handleCancel),
      this.windowListeners.add($e.ContextMenu, Qa),
      this.documentListeners.add($e.Keydown, this.handleKeydown),
      n) {
          if (r != null && r({
              event: this.props.event,
              activeNode: this.props.activeNode,
              options: this.props.options
          }))
              return this.handleStart();
          if (Ya(n)) {
              this.timeoutId = setTimeout(this.handleStart, n.delay);
              return
          }
          if (Ka(n))
              return
      }
      this.handleStart()
  }
  detach() {
      this.listeners.removeAll(),
      this.windowListeners.removeAll(),
      setTimeout(this.documentListeners.removeAll, 50),
      this.timeoutId !== null && (clearTimeout(this.timeoutId),
      this.timeoutId = null)
  }
  handleStart() {
      const {initialCoordinates: t} = this
        , {onStart: n} = this.props;
      t && (this.activated = !0,
      this.documentListeners.add($e.Click, Zm, {
          capture: !0
      }),
      this.removeTextSelection(),
      this.documentListeners.add($e.SelectionChange, this.removeTextSelection),
      n(t))
  }
  handleMove(t) {
      var n;
      const {activated: r, initialCoordinates: o, props: l} = this
        , {onMove: i, options: {activationConstraint: u}} = l;
      if (!o)
          return;
      const s = (n = vl(t)) != null ? n : rt
        , a = Xr(o, s);
      if (!r && u) {
          if (Ka(u)) {
              if (u.tolerance != null && wi(a, u.tolerance))
                  return this.handleCancel();
              if (wi(a, u.distance))
                  return this.handleStart()
          }
          return Ya(u) && wi(a, u.tolerance) ? this.handleCancel() : void 0
      }
      t.cancelable && t.preventDefault(),
      i(s)
  }
  handleEnd() {
      const {onEnd: t} = this.props;
      this.detach(),
      t()
  }
  handleCancel() {
      const {onCancel: t} = this.props;
      this.detach(),
      t()
  }
  handleKeydown(t) {
      t.code === I.Esc && this.handleCancel()
  }
  removeTextSelection() {
      var t;
      (t = this.document.getSelection()) == null || t.removeAllRanges()
  }
}
const bm = {
  move: {
      name: "pointermove"
  },
  end: {
      name: "pointerup"
  }
};
class jf extends ys {
  constructor(t) {
      const {event: n} = t
        , r = qn(n.target);
      super(t, bm, r)
  }
}
jf.activators = [{
  eventName: "onPointerDown",
  handler: (e,t)=>{
      let {nativeEvent: n} = e
        , {onActivation: r} = t;
      return !n.isPrimary || n.button !== 0 ? !1 : (r == null || r({
          event: n
      }),
      !0)
  }
}];
const eg = {
  move: {
      name: "mousemove"
  },
  end: {
      name: "mouseup"
  }
};
var mu;
(function(e) {
  e[e.RightClick = 2] = "RightClick"
}
)(mu || (mu = {}));
class $f extends ys {
  constructor(t) {
      super(t, eg, qn(t.event.target))
  }
}
$f.activators = [{
  eventName: "onMouseDown",
  handler: (e,t)=>{
      let {nativeEvent: n} = e
        , {onActivation: r} = t;
      return n.button === mu.RightClick ? !1 : (r == null || r({
          event: n
      }),
      !0)
  }
}];
const Si = {
  move: {
      name: "touchmove"
  },
  end: {
      name: "touchend"
  }
};
class Uf extends ys {
  constructor(t) {
      super(t, Si)
  }
  static setup() {
      return window.addEventListener(Si.move.name, t, {
          capture: !1,
          passive: !1
      }),
      function() {
          window.removeEventListener(Si.move.name, t)
      }
      ;
      function t() {}
  }
}
Uf.activators = [{
  eventName: "onTouchStart",
  handler: (e,t)=>{
      let {nativeEvent: n} = e
        , {onActivation: r} = t;
      const {touches: o} = n;
      return o.length > 1 ? !1 : (r == null || r({
          event: n
      }),
      !0)
  }
}];
var Nr;
(function(e) {
  e[e.Pointer = 0] = "Pointer",
  e[e.DraggableRect = 1] = "DraggableRect"
}
)(Nr || (Nr = {}));
var gl;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder",
  e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder"
}
)(gl || (gl = {}));
function tg(e) {
  let {acceleration: t, activator: n=Nr.Pointer, canScroll: r, draggingRect: o, enabled: l, interval: i=5, order: u=gl.TreeOrder, pointerCoordinates: s, scrollableAncestors: a, scrollableAncestorRects: d, delta: c, threshold: p} = e;
  const m = rg({
      delta: c,
      disabled: !l
  })
    , [y,w] = mm()
    , k = g.useRef({
      x: 0,
      y: 0
  })
    , h = g.useRef({
      x: 0,
      y: 0
  })
    , f = g.useMemo(()=>{
      switch (n) {
      case Nr.Pointer:
          return s ? {
              top: s.y,
              bottom: s.y,
              left: s.x,
              right: s.x
          } : null;
      case Nr.DraggableRect:
          return o
      }
  }
  , [n, o, s])
    , v = g.useRef(null)
    , S = g.useCallback(()=>{
      const E = v.current;
      if (!E)
          return;
      const C = k.current.x * h.current.x
        , P = k.current.y * h.current.y;
      E.scrollBy(C, P)
  }
  , [])
    , x = g.useMemo(()=>u === gl.TreeOrder ? [...a].reverse() : a, [u, a]);
  g.useEffect(()=>{
      if (!l || !a.length || !f) {
          w();
          return
      }
      for (const E of x) {
          if ((r == null ? void 0 : r(E)) === !1)
              continue;
          const C = a.indexOf(E)
            , P = d[C];
          if (!P)
              continue;
          const {direction: M, speed: _} = Qm(E, P, f, t, p);
          for (const L of ["x", "y"])
              m[L][M[L]] || (_[L] = 0,
              M[L] = 0);
          if (_.x > 0 || _.y > 0) {
              w(),
              v.current = E,
              y(S, i),
              k.current = _,
              h.current = M;
              return
          }
      }
      k.current = {
          x: 0,
          y: 0
      },
      h.current = {
          x: 0,
          y: 0
      },
      w()
  }
  , [t, S, r, w, l, i, JSON.stringify(f), JSON.stringify(m), y, a, x, d, JSON.stringify(p)])
}
const ng = {
  x: {
      [re.Backward]: !1,
      [re.Forward]: !1
  },
  y: {
      [re.Backward]: !1,
      [re.Forward]: !1
  }
};
function rg(e) {
  let {delta: t, disabled: n} = e;
  const r = hl(t);
  return no(o=>{
      if (n || !r || !o)
          return ng;
      const l = {
          x: Math.sign(t.x - r.x),
          y: Math.sign(t.y - r.y)
      };
      return {
          x: {
              [re.Backward]: o.x[re.Backward] || l.x === -1,
              [re.Forward]: o.x[re.Forward] || l.x === 1
          },
          y: {
              [re.Backward]: o.y[re.Backward] || l.y === -1,
              [re.Forward]: o.y[re.Forward] || l.y === 1
          }
      }
  }
  , [n, t, r])
}
function og(e, t) {
  const n = t !== null ? e.get(t) : void 0
    , r = n ? n.node.current : null;
  return no(o=>{
      var l;
      return t === null ? null : (l = r ?? o) != null ? l : null
  }
  , [r, t])
}
function lg(e, t) {
  return g.useMemo(()=>e.reduce((n,r)=>{
      const {sensor: o} = r
        , l = o.activators.map(i=>({
          eventName: i.eventName,
          handler: t(i.handler, r)
      }));
      return [...n, ...l]
  }
  , []), [e, t])
}
var Gr;
(function(e) {
  e[e.Always = 0] = "Always",
  e[e.BeforeDragging = 1] = "BeforeDragging",
  e[e.WhileDragging = 2] = "WhileDragging"
}
)(Gr || (Gr = {}));
var gu;
(function(e) {
  e.Optimized = "optimized"
}
)(gu || (gu = {}));
const Xa = new Map;
function ig(e, t) {
  let {dragging: n, dependencies: r, config: o} = t;
  const [l,i] = g.useState(null)
    , {frequency: u, measure: s, strategy: a} = o
    , d = g.useRef(e)
    , c = k()
    , p = Yr(c)
    , m = g.useCallback(function(h) {
      h === void 0 && (h = []),
      !p.current && i(f=>f === null ? h : f.concat(h.filter(v=>!f.includes(v))))
  }, [p])
    , y = g.useRef(null)
    , w = no(h=>{
      if (c && !n)
          return Xa;
      if (!h || h === Xa || d.current !== e || l != null) {
          const f = new Map;
          for (let v of e) {
              if (!v)
                  continue;
              if (l && l.length > 0 && !l.includes(v.id) && v.rect.current) {
                  f.set(v.id, v.rect.current);
                  continue
              }
              const S = v.node.current
                , x = S ? new ms(s(S),S) : null;
              v.rect.current = x,
              x && f.set(v.id, x)
          }
          return f
      }
      return h
  }
  , [e, l, n, c, s]);
  return g.useEffect(()=>{
      d.current = e
  }
  , [e]),
  g.useEffect(()=>{
      c || m()
  }
  , [n, c]),
  g.useEffect(()=>{
      l && l.length > 0 && i(null)
  }
  , [JSON.stringify(l)]),
  g.useEffect(()=>{
      c || typeof u != "number" || y.current !== null || (y.current = setTimeout(()=>{
          m(),
          y.current = null
      }
      , u))
  }
  , [u, c, m, ...r]),
  {
      droppableRects: w,
      measureDroppableContainers: m,
      measuringScheduled: l != null
  };
  function k() {
      switch (a) {
      case Gr.Always:
          return !1;
      case Gr.BeforeDragging:
          return n;
      default:
          return !n
      }
  }
}
function ws(e, t) {
  return no(n=>e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e])
}
function ug(e, t) {
  return ws(e, t)
}
function sg(e) {
  let {callback: t, disabled: n} = e;
  const r = Fl(t)
    , o = g.useMemo(()=>{
      if (n || typeof window > "u" || typeof window.MutationObserver > "u")
          return;
      const {MutationObserver: l} = window;
      return new l(r)
  }
  , [r, n]);
  return g.useEffect(()=>()=>o == null ? void 0 : o.disconnect(), [o]),
  o
}
function Ul(e) {
  let {callback: t, disabled: n} = e;
  const r = Fl(t)
    , o = g.useMemo(()=>{
      if (n || typeof window > "u" || typeof window.ResizeObserver > "u")
          return;
      const {ResizeObserver: l} = window;
      return new l(r)
  }
  , [n]);
  return g.useEffect(()=>()=>o == null ? void 0 : o.disconnect(), [o]),
  o
}
function ag(e) {
  return new ms(bn(e),e)
}
function Ga(e, t, n) {
  t === void 0 && (t = ag);
  const [r,o] = g.useReducer(u, null)
    , l = sg({
      callback(s) {
          if (e)
              for (const a of s) {
                  const {type: d, target: c} = a;
                  if (d === "childList" && c instanceof HTMLElement && c.contains(e)) {
                      o();
                      break
                  }
              }
      }
  })
    , i = Ul({
      callback: o
  });
  return Ye(()=>{
      o(),
      e ? (i == null || i.observe(e),
      l == null || l.observe(document.body, {
          childList: !0,
          subtree: !0
      })) : (i == null || i.disconnect(),
      l == null || l.disconnect())
  }
  , [e]),
  r;
  function u(s) {
      if (!e)
          return null;
      if (e.isConnected === !1) {
          var a;
          return (a = s ?? n) != null ? a : null
      }
      const d = t(e);
      return JSON.stringify(s) === JSON.stringify(d) ? s : d
  }
}
function cg(e) {
  const t = ws(e);
  return Nf(e, t)
}
const Ja = [];
function dg(e) {
  const t = g.useRef(e)
    , n = no(r=>e ? r && r !== Ja && e && t.current && e.parentNode === t.current.parentNode ? r : $l(e) : Ja, [e]);
  return g.useEffect(()=>{
      t.current = e
  }
  , [e]),
  n
}
function fg(e) {
  const [t,n] = g.useState(null)
    , r = g.useRef(e)
    , o = g.useCallback(l=>{
      const i = yi(l.target);
      i && n(u=>u ? (u.set(i, vu(i)),
      new Map(u)) : null)
  }
  , []);
  return g.useEffect(()=>{
      const l = r.current;
      if (e !== l) {
          i(l);
          const u = e.map(s=>{
              const a = yi(s);
              return a ? (a.addEventListener("scroll", o, {
                  passive: !0
              }),
              [a, vu(a)]) : null
          }
          ).filter(s=>s != null);
          n(u.length ? new Map(u) : null),
          r.current = e
      }
      return ()=>{
          i(e),
          i(l)
      }
      ;
      function i(u) {
          u.forEach(s=>{
              const a = yi(s);
              a == null || a.removeEventListener("scroll", o)
          }
          )
      }
  }
  , [o, e]),
  g.useMemo(()=>e.length ? t ? Array.from(t.values()).reduce((l,i)=>Un(l, i), rt) : If(e) : rt, [e, t])
}
function Za(e, t) {
  t === void 0 && (t = []);
  const n = g.useRef(null);
  return g.useEffect(()=>{
      n.current = null
  }
  , t),
  g.useEffect(()=>{
      const r = e !== rt;
      r && !n.current && (n.current = e),
      !r && n.current && (n.current = null)
  }
  , [e]),
  n.current ? Xr(e, n.current) : rt
}
function pg(e) {
  g.useEffect(()=>{
      if (!Al)
          return;
      const t = e.map(n=>{
          let {sensor: r} = n;
          return r.setup == null ? void 0 : r.setup()
      }
      );
      return ()=>{
          for (const n of t)
              n == null || n()
      }
  }
  , e.map(t=>{
      let {sensor: n} = t;
      return n
  }
  ))
}
function hg(e, t) {
  return g.useMemo(()=>e.reduce((n,r)=>{
      let {eventName: o, handler: l} = r;
      return n[o] = i=>{
          l(i, t)
      }
      ,
      n
  }
  , {}), [e, t])
}
function Bf(e) {
  return g.useMemo(()=>e ? Bm(e) : null, [e])
}
const xi = [];
function vg(e, t) {
  t === void 0 && (t = bn);
  const [n] = e
    , r = Bf(n ? ke(n) : null)
    , [o,l] = g.useReducer(u, xi)
    , i = Ul({
      callback: l
  });
  return e.length > 0 && o === xi && l(),
  Ye(()=>{
      e.length ? e.forEach(s=>i == null ? void 0 : i.observe(s)) : (i == null || i.disconnect(),
      l())
  }
  , [e]),
  o;
  function u() {
      return e.length ? e.map(s=>Lf(s) ? r : new ms(t(s),s)) : xi
  }
}
function Wf(e) {
  if (!e)
      return null;
  if (e.children.length > 1)
      return e;
  const t = e.children[0];
  return to(t) ? t : e
}
function mg(e) {
  let {measure: t} = e;
  const [n,r] = g.useState(null)
    , o = g.useCallback(a=>{
      for (const {target: d} of a)
          if (to(d)) {
              r(c=>{
                  const p = t(d);
                  return c ? {
                      ...c,
                      width: p.width,
                      height: p.height
                  } : p
              }
              );
              break
          }
  }
  , [t])
    , l = Ul({
      callback: o
  })
    , i = g.useCallback(a=>{
      const d = Wf(a);
      l == null || l.disconnect(),
      d && (l == null || l.observe(d)),
      r(d ? t(d) : null)
  }
  , [t, l])
    , [u,s] = pl(i);
  return g.useMemo(()=>({
      nodeRef: u,
      rect: n,
      setRef: s
  }), [n, u, s])
}
const gg = [{
  sensor: jf,
  options: {}
}, {
  sensor: gs,
  options: {}
}]
, yg = {
  current: {}
}
, Bo = {
  draggable: {
      measure: Ha
  },
  droppable: {
      measure: Ha,
      strategy: Gr.WhileDragging,
      frequency: gu.Optimized
  },
  dragOverlay: {
      measure: bn
  }
};
class _r extends Map {
  get(t) {
      var n;
      return t != null && (n = super.get(t)) != null ? n : void 0
  }
  toArray() {
      return Array.from(this.values())
  }
  getEnabled() {
      return this.toArray().filter(t=>{
          let {disabled: n} = t;
          return !n
      }
      )
  }
  getNodeFor(t) {
      var n, r;
      return (n = (r = this.get(t)) == null ? void 0 : r.node.current) != null ? n : void 0
  }
}
const wg = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: new Map,
  droppableRects: new Map,
  droppableContainers: new _r,
  over: null,
  dragOverlay: {
      nodeRef: {
          current: null
      },
      rect: null,
      setRef: ml
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Bo,
  measureDroppableContainers: ml,
  windowRect: null,
  measuringScheduled: !1
}
, Vf = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
      draggable: ""
  },
  dispatch: ml,
  draggableNodes: new Map,
  over: null,
  measureDroppableContainers: ml
}
, oo = g.createContext(Vf)
, Hf = g.createContext(wg);
function Sg() {
  return {
      draggable: {
          active: null,
          initialCoordinates: {
              x: 0,
              y: 0
          },
          nodes: new Map,
          translate: {
              x: 0,
              y: 0
          }
      },
      droppable: {
          containers: new _r
      }
  }
}
function xg(e, t) {
  switch (t.type) {
  case ee.DragStart:
      return {
          ...e,
          draggable: {
              ...e.draggable,
              initialCoordinates: t.initialCoordinates,
              active: t.active
          }
      };
  case ee.DragMove:
      return e.draggable.active ? {
          ...e,
          draggable: {
              ...e.draggable,
              translate: {
                  x: t.coordinates.x - e.draggable.initialCoordinates.x,
                  y: t.coordinates.y - e.draggable.initialCoordinates.y
              }
          }
      } : e;
  case ee.DragEnd:
  case ee.DragCancel:
      return {
          ...e,
          draggable: {
              ...e.draggable,
              active: null,
              initialCoordinates: {
                  x: 0,
                  y: 0
              },
              translate: {
                  x: 0,
                  y: 0
              }
          }
      };
  case ee.RegisterDroppable:
      {
          const {element: n} = t
            , {id: r} = n
            , o = new _r(e.droppable.containers);
          return o.set(r, n),
          {
              ...e,
              droppable: {
                  ...e.droppable,
                  containers: o
              }
          }
      }
  case ee.SetDroppableDisabled:
      {
          const {id: n, key: r, disabled: o} = t
            , l = e.droppable.containers.get(n);
          if (!l || r !== l.key)
              return e;
          const i = new _r(e.droppable.containers);
          return i.set(n, {
              ...l,
              disabled: o
          }),
          {
              ...e,
              droppable: {
                  ...e.droppable,
                  containers: i
              }
          }
      }
  case ee.UnregisterDroppable:
      {
          const {id: n, key: r} = t
            , o = e.droppable.containers.get(n);
          if (!o || r !== o.key)
              return e;
          const l = new _r(e.droppable.containers);
          return l.delete(n),
          {
              ...e,
              droppable: {
                  ...e.droppable,
                  containers: l
              }
          }
      }
  default:
      return e
  }
}
function kg(e) {
  let {disabled: t} = e;
  const {active: n, activatorEvent: r, draggableNodes: o} = g.useContext(oo)
    , l = hl(r)
    , i = hl(n == null ? void 0 : n.id);
  return g.useEffect(()=>{
      if (!t && !r && l && i != null) {
          if (!jl(l) || document.activeElement === l.target)
              return;
          const u = o.get(i);
          if (!u)
              return;
          const {activatorNode: s, node: a} = u;
          if (!s.current && !a.current)
              return;
          requestAnimationFrame(()=>{
              for (const d of [s.current, a.current]) {
                  if (!d)
                      continue;
                  const c = wm(d);
                  if (c) {
                      c.focus();
                      break
                  }
              }
          }
          )
      }
  }
  , [r, t, o, i, l]),
  null
}
function Qf(e, t) {
  let {transform: n, ...r} = t;
  return e != null && e.length ? e.reduce((o,l)=>l({
      transform: o,
      ...r
  }), n) : n
}
function Cg(e) {
  return g.useMemo(()=>({
      draggable: {
          ...Bo.draggable,
          ...e == null ? void 0 : e.draggable
      },
      droppable: {
          ...Bo.droppable,
          ...e == null ? void 0 : e.droppable
      },
      dragOverlay: {
          ...Bo.dragOverlay,
          ...e == null ? void 0 : e.dragOverlay
      }
  }), [e == null ? void 0 : e.draggable, e == null ? void 0 : e.droppable, e == null ? void 0 : e.dragOverlay])
}
function Eg(e) {
  let {activeNode: t, measure: n, initialRect: r, config: o=!0} = e;
  const l = g.useRef(!1)
    , {x: i, y: u} = typeof o == "boolean" ? {
      x: o,
      y: o
  } : o;
  Ye(()=>{
      if (!i && !u || !t) {
          l.current = !1;
          return
      }
      if (l.current || !r)
          return;
      const a = t == null ? void 0 : t.node.current;
      if (!a || a.isConnected === !1)
          return;
      const d = n(a)
        , c = Nf(d, r);
      if (i || (c.x = 0),
      u || (c.y = 0),
      l.current = !0,
      Math.abs(c.x) > 0 || Math.abs(c.y) > 0) {
          const p = Tf(a);
          p && p.scrollBy({
              top: c.y,
              left: c.x
          })
      }
  }
  , [t, i, u, r, n])
}
const Bl = g.createContext({
  ...rt,
  scaleX: 1,
  scaleY: 1
});
var Lt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized",
  e[e.Initializing = 1] = "Initializing",
  e[e.Initialized = 2] = "Initialized"
}
)(Lt || (Lt = {}));
const Rg = g.memo(function(t) {
  var n, r, o, l;
  let {id: i, accessibility: u, autoScroll: s=!0, children: a, sensors: d=gg, collisionDetection: c=Im, measuring: p, modifiers: m, ...y} = t;
  const w = g.useReducer(xg, void 0, Sg)
    , [k,h] = w
    , [f,v] = Rm()
    , [S,x] = g.useState(Lt.Uninitialized)
    , E = S === Lt.Initialized
    , {draggable: {active: C, nodes: P, translate: M}, droppable: {containers: _}} = k
    , L = C ? P.get(C) : null
    , le = g.useRef({
      initial: null,
      translated: null
  })
    , ie = g.useMemo(()=>{
      var se;
      return C != null ? {
          id: C,
          data: (se = L == null ? void 0 : L.data) != null ? se : yg,
          rect: le
      } : null
  }
  , [C, L])
    , _e = g.useRef(null)
    , [Zt,Rt] = g.useState(null)
    , [ue,D] = g.useState(null)
    , T = Yr(y, Object.values(y))
    , z = ro("DndDescribedBy", i)
    , U = g.useMemo(()=>_.getEnabled(), [_])
    , A = Cg(p)
    , {droppableRects: Ce, measureDroppableContainers: ge, measuringScheduled: dt} = ig(U, {
      dragging: E,
      dependencies: [M.x, M.y],
      config: A.droppable
  })
    , Z = og(P, C)
    , ft = g.useMemo(()=>ue ? vl(ue) : null, [ue])
    , Pt = ip()
    , pt = ug(Z, A.draggable.measure);
  Eg({
      activeNode: C ? P.get(C) : null,
      config: Pt.layoutShiftCompensation,
      initialRect: pt,
      measure: A.draggable.measure
  });
  const $ = Ga(Z, A.draggable.measure, pt)
    , er = Ga(Z ? Z.parentElement : null)
    , ot = g.useRef({
      activatorEvent: null,
      active: null,
      activeNode: Z,
      collisionRect: null,
      collisions: null,
      droppableRects: Ce,
      draggableNodes: P,
      draggingNode: null,
      draggingNodeRect: null,
      droppableContainers: _,
      over: null,
      scrollableAncestors: [],
      scrollAdjustedTranslate: null
  })
    , vn = _.getNodeFor((n = ot.current.over) == null ? void 0 : n.id)
    , ht = mg({
      measure: A.dragOverlay.measure
  })
    , mn = (r = ht.nodeRef.current) != null ? r : Z
    , gn = E ? (o = ht.rect) != null ? o : $ : null
    , xs = !!(ht.nodeRef.current && ht.rect)
    , ks = cg(xs ? null : $)
    , Wl = Bf(mn ? ke(mn) : null)
    , Dt = dg(E ? vn ?? Z : null)
    , lo = vg(Dt)
    , io = Qf(m, {
      transform: {
          x: M.x - ks.x,
          y: M.y - ks.y,
          scaleX: 1,
          scaleY: 1
      },
      activatorEvent: ue,
      active: ie,
      activeNodeRect: $,
      containerNodeRect: er,
      draggingNodeRect: gn,
      over: ot.current.over,
      overlayNodeRect: ht.rect,
      scrollableAncestors: Dt,
      scrollableAncestorRects: lo,
      windowRect: Wl
  })
    , Cs = ft ? Un(ft, M) : null
    , Es = fg(Dt)
    , bf = Za(Es)
    , ep = Za(Es, [$])
    , yn = Un(io, bf)
    , wn = gn ? jm(gn, io) : null
    , tr = ie && wn ? c({
      active: ie,
      collisionRect: wn,
      droppableRects: Ce,
      droppableContainers: U,
      pointerCoordinates: Cs
  }) : null
    , Rs = Df(tr, "id")
    , [Nt,Ps] = g.useState(null)
    , tp = xs ? io : Un(io, ep)
    , np = Am(tp, (l = Nt == null ? void 0 : Nt.rect) != null ? l : null, $)
    , Ds = g.useCallback((se,Te)=>{
      let {sensor: Me, options: _t} = Te;
      if (_e.current == null)
          return;
      const je = P.get(_e.current);
      if (!je)
          return;
      const Xe = se.nativeEvent
        , lt = new Me({
          active: _e.current,
          activeNode: je,
          event: Xe,
          options: _t,
          context: ot,
          onStart(Ge) {
              const nr = _e.current;
              if (nr == null)
                  return;
              const rr = P.get(nr);
              if (!rr)
                  return;
              const {onDragStart: uo} = T.current
                , so = {
                  active: {
                      id: nr,
                      data: rr.data,
                      rect: le
                  }
              };
              en.unstable_batchedUpdates(()=>{
                  uo == null || uo(so),
                  x(Lt.Initializing),
                  h({
                      type: ee.DragStart,
                      initialCoordinates: Ge,
                      active: nr
                  }),
                  f({
                      type: "onDragStart",
                      event: so
                  })
              }
              )
          },
          onMove(Ge) {
              h({
                  type: ee.DragMove,
                  coordinates: Ge
              })
          },
          onEnd: Sn(ee.DragEnd),
          onCancel: Sn(ee.DragCancel)
      });
      en.unstable_batchedUpdates(()=>{
          Rt(lt),
          D(se.nativeEvent)
      }
      );
      function Sn(Ge) {
          return async function() {
              const {active: rr, collisions: uo, over: so, scrollAdjustedTranslate: _s} = ot.current;
              let or = null;
              if (rr && _s) {
                  const {cancelDrop: lr} = T.current;
                  or = {
                      activatorEvent: Xe,
                      active: rr,
                      collisions: uo,
                      delta: _s,
                      over: so
                  },
                  Ge === ee.DragEnd && typeof lr == "function" && await Promise.resolve(lr(or)) && (Ge = ee.DragCancel)
              }
              _e.current = null,
              en.unstable_batchedUpdates(()=>{
                  h({
                      type: Ge
                  }),
                  x(Lt.Uninitialized),
                  Ps(null),
                  Rt(null),
                  D(null);
                  const lr = Ge === ee.DragEnd ? "onDragEnd" : "onDragCancel";
                  if (or) {
                      const Vl = T.current[lr];
                      Vl == null || Vl(or),
                      f({
                          type: lr,
                          event: or
                      })
                  }
              }
              )
          }
      }
  }
  , [P])
    , rp = g.useCallback((se,Te)=>(Me,_t)=>{
      const je = Me.nativeEvent
        , Xe = P.get(_t);
      if (_e.current !== null || !Xe || je.dndKit || je.defaultPrevented)
          return;
      const lt = {
          active: Xe
      };
      se(Me, Te.options, lt) === !0 && (je.dndKit = {
          capturedBy: Te.sensor
      },
      _e.current = _t,
      Ds(Me, Te))
  }
  , [P, Ds])
    , Ns = lg(d, rp);
  pg(d),
  Ye(()=>{
      $ && S === Lt.Initializing && x(Lt.Initialized)
  }
  , [$, S]),
  g.useEffect(()=>{
      const {onDragMove: se} = T.current
        , {active: Te, activatorEvent: Me, collisions: _t, over: je} = ot.current;
      if (!Te || !Me)
          return;
      const Xe = {
          active: Te,
          activatorEvent: Me,
          collisions: _t,
          delta: {
              x: yn.x,
              y: yn.y
          },
          over: je
      };
      en.unstable_batchedUpdates(()=>{
          se == null || se(Xe),
          f({
              type: "onDragMove",
              event: Xe
          })
      }
      )
  }
  , [yn.x, yn.y]),
  g.useEffect(()=>{
      const {active: se, activatorEvent: Te, collisions: Me, droppableContainers: _t, scrollAdjustedTranslate: je} = ot.current;
      if (!se || _e.current == null || !Te || !je)
          return;
      const {onDragOver: Xe} = T.current
        , lt = _t.get(Rs)
        , Sn = lt && lt.rect.current ? {
          id: lt.id,
          rect: lt.rect.current,
          data: lt.data,
          disabled: lt.disabled
      } : null
        , Ge = {
          active: se,
          activatorEvent: Te,
          collisions: Me,
          delta: {
              x: je.x,
              y: je.y
          },
          over: Sn
      };
      en.unstable_batchedUpdates(()=>{
          Ps(Sn),
          Xe == null || Xe(Ge),
          f({
              type: "onDragOver",
              event: Ge
          })
      }
      )
  }
  , [Rs]),
  Ye(()=>{
      ot.current = {
          activatorEvent: ue,
          active: ie,
          activeNode: Z,
          collisionRect: wn,
          collisions: tr,
          droppableRects: Ce,
          draggableNodes: P,
          draggingNode: mn,
          draggingNodeRect: gn,
          droppableContainers: _,
          over: Nt,
          scrollableAncestors: Dt,
          scrollAdjustedTranslate: yn
      },
      le.current = {
          initial: gn,
          translated: wn
      }
  }
  , [ie, Z, tr, wn, P, mn, gn, Ce, _, Nt, Dt, yn]),
  tg({
      ...Pt,
      delta: M,
      draggingRect: wn,
      pointerCoordinates: Cs,
      scrollableAncestors: Dt,
      scrollableAncestorRects: lo
  });
  const op = g.useMemo(()=>({
      active: ie,
      activeNode: Z,
      activeNodeRect: $,
      activatorEvent: ue,
      collisions: tr,
      containerNodeRect: er,
      dragOverlay: ht,
      draggableNodes: P,
      droppableContainers: _,
      droppableRects: Ce,
      over: Nt,
      measureDroppableContainers: ge,
      scrollableAncestors: Dt,
      scrollableAncestorRects: lo,
      measuringConfiguration: A,
      measuringScheduled: dt,
      windowRect: Wl
  }), [ie, Z, $, ue, tr, er, ht, P, _, Ce, Nt, ge, Dt, lo, A, dt, Wl])
    , lp = g.useMemo(()=>({
      activatorEvent: ue,
      activators: Ns,
      active: ie,
      activeNodeRect: $,
      ariaDescribedById: {
          draggable: z
      },
      dispatch: h,
      draggableNodes: P,
      over: Nt,
      measureDroppableContainers: ge
  }), [ue, Ns, ie, $, h, z, P, Nt, ge]);
  return H.createElement(Ef.Provider, {
      value: v
  }, H.createElement(oo.Provider, {
      value: lp
  }, H.createElement(Hf.Provider, {
      value: op
  }, H.createElement(Bl.Provider, {
      value: np
  }, a)), H.createElement(kg, {
      disabled: (u == null ? void 0 : u.restoreFocus) === !1
  })), H.createElement(Nm, {
      ...u,
      hiddenTextDescribedById: z
  }));
  function ip() {
      const se = (Zt == null ? void 0 : Zt.autoScrollEnabled) === !1
        , Te = typeof s == "object" ? s.enabled === !1 : s === !1
        , Me = E && !se && !Te;
      return typeof s == "object" ? {
          ...s,
          enabled: Me
      } : {
          enabled: Me
      }
  }
})
, Pg = g.createContext(null)
, qa = "button"
, Dg = "Droppable";
function Ng(e) {
  let {id: t, data: n, disabled: r=!1, attributes: o} = e;
  const l = ro(Dg)
    , {activators: i, activatorEvent: u, active: s, activeNodeRect: a, ariaDescribedById: d, draggableNodes: c, over: p} = g.useContext(oo)
    , {role: m=qa, roleDescription: y="draggable", tabIndex: w=0} = o ?? {}
    , k = (s == null ? void 0 : s.id) === t
    , h = g.useContext(k ? Bl : Pg)
    , [f,v] = pl()
    , [S,x] = pl()
    , E = hg(i, t)
    , C = Yr(n);
  Ye(()=>(c.set(t, {
      id: t,
      key: l,
      node: f,
      activatorNode: S,
      data: C
  }),
  ()=>{
      const M = c.get(t);
      M && M.key === l && c.delete(t)
  }
  ), [c, t]);
  const P = g.useMemo(()=>({
      role: m,
      tabIndex: w,
      "aria-disabled": r,
      "aria-pressed": k && m === qa ? !0 : void 0,
      "aria-roledescription": y,
      "aria-describedby": d.draggable
  }), [r, m, w, k, y, d.draggable]);
  return {
      active: s,
      activatorEvent: u,
      activeNodeRect: a,
      attributes: P,
      isDragging: k,
      listeners: r ? void 0 : E,
      node: f,
      over: p,
      setNodeRef: v,
      setActivatorNodeRef: x,
      transform: h
  }
}
function Kf() {
  return g.useContext(Hf)
}
const _g = "Droppable"
, Tg = {
  timeout: 25
};
function Mg(e) {
  let {data: t, disabled: n=!1, id: r, resizeObserverConfig: o} = e;
  const l = ro(_g)
    , {active: i, dispatch: u, over: s, measureDroppableContainers: a} = g.useContext(oo)
    , d = g.useRef({
      disabled: n
  })
    , c = g.useRef(!1)
    , p = g.useRef(null)
    , m = g.useRef(null)
    , {disabled: y, updateMeasurementsFor: w, timeout: k} = {
      ...Tg,
      ...o
  }
    , h = Yr(w ?? r)
    , f = g.useCallback(()=>{
      if (!c.current) {
          c.current = !0;
          return
      }
      m.current != null && clearTimeout(m.current),
      m.current = setTimeout(()=>{
          a(Array.isArray(h.current) ? h.current : [h.current]),
          m.current = null
      }
      , k)
  }
  , [k])
    , v = Ul({
      callback: f,
      disabled: y || !i
  })
    , S = g.useCallback((P,M)=>{
      v && (M && (v.unobserve(M),
      c.current = !1),
      P && v.observe(P))
  }
  , [v])
    , [x,E] = pl(S)
    , C = Yr(t);
  return g.useEffect(()=>{
      !v || !x.current || (v.disconnect(),
      c.current = !1,
      v.observe(x.current))
  }
  , [x, v]),
  Ye(()=>(u({
      type: ee.RegisterDroppable,
      element: {
          id: r,
          key: l,
          disabled: n,
          node: x,
          rect: p,
          data: C
      }
  }),
  ()=>u({
      type: ee.UnregisterDroppable,
      key: l,
      id: r
  })), [r]),
  g.useEffect(()=>{
      n !== d.current.disabled && (u({
          type: ee.SetDroppableDisabled,
          id: r,
          key: l,
          disabled: n
      }),
      d.current.disabled = n)
  }
  , [r, l, n, u]),
  {
      active: i,
      rect: p,
      isOver: (s == null ? void 0 : s.id) === r,
      node: x,
      over: s,
      setNodeRef: E
  }
}
function zg(e) {
  let {animation: t, children: n} = e;
  const [r,o] = g.useState(null)
    , [l,i] = g.useState(null)
    , u = hl(n);
  return !n && !r && u && o(u),
  Ye(()=>{
      if (!l)
          return;
      const s = r == null ? void 0 : r.key
        , a = r == null ? void 0 : r.props.id;
      if (s == null || a == null) {
          o(null);
          return
      }
      Promise.resolve(t(a, l)).then(()=>{
          o(null)
      }
      )
  }
  , [t, r, l]),
  H.createElement(H.Fragment, null, n, r ? g.cloneElement(r, {
      ref: i
  }) : null)
}
const Lg = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function Og(e) {
  let {children: t} = e;
  return H.createElement(oo.Provider, {
      value: Vf
  }, H.createElement(Bl.Provider, {
      value: Lg
  }, t))
}
const Ig = {
  position: "fixed",
  touchAction: "none"
}
, Ag = e=>jl(e) ? "transform 250ms ease" : void 0
, Fg = g.forwardRef((e,t)=>{
  let {as: n, activatorEvent: r, adjustScale: o, children: l, className: i, rect: u, style: s, transform: a, transition: d=Ag} = e;
  if (!u)
      return null;
  const c = o ? a : {
      ...a,
      scaleX: 1,
      scaleY: 1
  }
    , p = {
      ...Ig,
      width: u.width,
      height: u.height,
      top: u.top,
      left: u.left,
      transform: fn.Transform.toString(c),
      transformOrigin: o && r ? Tm(r, u) : void 0,
      transition: typeof d == "function" ? d(r) : d,
      ...s
  };
  return H.createElement(n, {
      className: i,
      style: p,
      ref: t
  }, l)
}
)
, jg = e=>t=>{
  let {active: n, dragOverlay: r} = t;
  const o = {}
    , {styles: l, className: i} = e;
  if (l != null && l.active)
      for (const [u,s] of Object.entries(l.active))
          s !== void 0 && (o[u] = n.node.style.getPropertyValue(u),
          n.node.style.setProperty(u, s));
  if (l != null && l.dragOverlay)
      for (const [u,s] of Object.entries(l.dragOverlay))
          s !== void 0 && r.node.style.setProperty(u, s);
  return i != null && i.active && n.node.classList.add(i.active),
  i != null && i.dragOverlay && r.node.classList.add(i.dragOverlay),
  function() {
      for (const [s,a] of Object.entries(o))
          n.node.style.setProperty(s, a);
      i != null && i.active && n.node.classList.remove(i.active)
  }
}
, $g = e=>{
  let {transform: {initial: t, final: n}} = e;
  return [{
      transform: fn.Transform.toString(t)
  }, {
      transform: fn.Transform.toString(n)
  }]
}
, Ug = {
  duration: 250,
  easing: "ease",
  keyframes: $g,
  sideEffects: jg({
      styles: {
          active: {
              opacity: "0"
          }
      }
  })
};
function Bg(e) {
  let {config: t, draggableNodes: n, droppableContainers: r, measuringConfiguration: o} = e;
  return Fl((l,i)=>{
      if (t === null)
          return;
      const u = n.get(l);
      if (!u)
          return;
      const s = u.node.current;
      if (!s)
          return;
      const a = Wf(i);
      if (!a)
          return;
      const {transform: d} = ke(i).getComputedStyle(i)
        , c = _f(d);
      if (!c)
          return;
      const p = typeof t == "function" ? t : Wg(t);
      return Af(s, o.draggable.measure),
      p({
          active: {
              id: l,
              data: u.data,
              node: s,
              rect: o.draggable.measure(s)
          },
          draggableNodes: n,
          dragOverlay: {
              node: i,
              rect: o.dragOverlay.measure(a)
          },
          droppableContainers: r,
          measuringConfiguration: o,
          transform: c
      })
  }
  )
}
function Wg(e) {
  const {duration: t, easing: n, sideEffects: r, keyframes: o} = {
      ...Ug,
      ...e
  };
  return l=>{
      let {active: i, dragOverlay: u, transform: s, ...a} = l;
      if (!t)
          return;
      const d = {
          x: u.rect.left - i.rect.left,
          y: u.rect.top - i.rect.top
      }
        , c = {
          scaleX: s.scaleX !== 1 ? i.rect.width * s.scaleX / u.rect.width : 1,
          scaleY: s.scaleY !== 1 ? i.rect.height * s.scaleY / u.rect.height : 1
      }
        , p = {
          x: s.x - d.x,
          y: s.y - d.y,
          ...c
      }
        , m = o({
          ...a,
          active: i,
          dragOverlay: u,
          transform: {
              initial: s,
              final: p
          }
      })
        , [y] = m
        , w = m[m.length - 1];
      if (JSON.stringify(y) === JSON.stringify(w))
          return;
      const k = r == null ? void 0 : r({
          active: i,
          dragOverlay: u,
          ...a
      })
        , h = u.node.animate(m, {
          duration: t,
          easing: n,
          fill: "forwards"
      });
      return new Promise(f=>{
          h.onfinish = ()=>{
              k == null || k(),
              f()
          }
      }
      )
  }
}
let ba = 0;
function Vg(e) {
  return g.useMemo(()=>{
      if (e != null)
          return ba++,
          ba
  }
  , [e])
}
const Hg = H.memo(e=>{
  let {adjustScale: t=!1, children: n, dropAnimation: r, style: o, transition: l, modifiers: i, wrapperElement: u="div", className: s, zIndex: a=999} = e;
  const {activatorEvent: d, active: c, activeNodeRect: p, containerNodeRect: m, draggableNodes: y, droppableContainers: w, dragOverlay: k, over: h, measuringConfiguration: f, scrollableAncestors: v, scrollableAncestorRects: S, windowRect: x} = Kf()
    , E = g.useContext(Bl)
    , C = Vg(c == null ? void 0 : c.id)
    , P = Qf(i, {
      activatorEvent: d,
      active: c,
      activeNodeRect: p,
      containerNodeRect: m,
      draggingNodeRect: k.rect,
      over: h,
      overlayNodeRect: k.rect,
      scrollableAncestors: v,
      scrollableAncestorRects: S,
      transform: E,
      windowRect: x
  })
    , M = ws(p)
    , _ = Bg({
      config: r,
      draggableNodes: y,
      droppableContainers: w,
      measuringConfiguration: f
  })
    , L = M ? k.setRef : void 0;
  return H.createElement(Og, null, H.createElement(zg, {
      animation: _
  }, c && C ? H.createElement(Fg, {
      key: C,
      id: c.id,
      ref: L,
      as: u,
      activatorEvent: d,
      adjustScale: t,
      className: s,
      transition: l,
      rect: M,
      style: {
          zIndex: a,
          ...o
      },
      transform: P
  }, n) : null))
}
);
function Ss(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]),
  r
}
function Qg(e, t) {
  return e.reduce((n,r,o)=>{
      const l = t.get(r);
      return l && (n[o] = l),
      n
  }
  , Array(e.length))
}
function No(e) {
  return e !== null && e >= 0
}
function Kg(e, t) {
  if (e === t)
      return !0;
  if (e.length !== t.length)
      return !1;
  for (let n = 0; n < e.length; n++)
      if (e[n] !== t[n])
          return !1;
  return !0
}
function Yg(e) {
  return typeof e == "boolean" ? {
      draggable: e,
      droppable: e
  } : e
}
const Yf = e=>{
  let {rects: t, activeIndex: n, overIndex: r, index: o} = e;
  const l = Ss(t, r, n)
    , i = t[o]
    , u = l[o];
  return !u || !i ? null : {
      x: u.left - i.left,
      y: u.top - i.top,
      scaleX: u.width / i.width,
      scaleY: u.height / i.height
  }
}
, Xf = "Sortable"
, Gf = H.createContext({
  activeIndex: -1,
  containerId: Xf,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: Yf,
  disabled: {
      draggable: !1,
      droppable: !1
  }
});
function Xg(e) {
  let {children: t, id: n, items: r, strategy: o=Yf, disabled: l=!1} = e;
  const {active: i, dragOverlay: u, droppableRects: s, over: a, measureDroppableContainers: d} = Kf()
    , c = ro(Xf, n)
    , p = u.rect !== null
    , m = g.useMemo(()=>r.map(E=>typeof E == "object" && "id"in E ? E.id : E), [r])
    , y = i != null
    , w = i ? m.indexOf(i.id) : -1
    , k = a ? m.indexOf(a.id) : -1
    , h = g.useRef(m)
    , f = !Kg(m, h.current)
    , v = k !== -1 && w === -1 || f
    , S = Yg(l);
  Ye(()=>{
      f && y && d(m)
  }
  , [f, m, y, d]),
  g.useEffect(()=>{
      h.current = m
  }
  , [m]);
  const x = g.useMemo(()=>({
      activeIndex: w,
      containerId: c,
      disabled: S,
      disableTransforms: v,
      items: m,
      overIndex: k,
      useDragOverlay: p,
      sortedRects: Qg(m, s),
      strategy: o
  }), [w, c, S.draggable, S.droppable, v, m, k, s, p, o]);
  return H.createElement(Gf.Provider, {
      value: x
  }, t)
}
const Gg = e=>{
  let {id: t, items: n, activeIndex: r, overIndex: o} = e;
  return Ss(n, r, o).indexOf(t)
}
, Jg = e=>{
  let {containerId: t, isSorting: n, wasDragging: r, index: o, items: l, newIndex: i, previousItems: u, previousContainerId: s, transition: a} = e;
  return !a || !r || u !== l && o === i ? !1 : n ? !0 : i !== o && t === s
}
, Zg = {
  duration: 200,
  easing: "ease"
}
, Jf = "transform"
, qg = fn.Transition.toString({
  property: Jf,
  duration: 0,
  easing: "linear"
})
, bg = {
  roleDescription: "sortable"
};
function e0(e) {
  let {disabled: t, index: n, node: r, rect: o} = e;
  const [l,i] = g.useState(null)
    , u = g.useRef(n);
  return Ye(()=>{
      if (!t && n !== u.current && r.current) {
          const s = o.current;
          if (s) {
              const a = bn(r.current, {
                  ignoreTransform: !0
              })
                , d = {
                  x: s.left - a.left,
                  y: s.top - a.top,
                  scaleX: s.width / a.width,
                  scaleY: s.height / a.height
              };
              (d.x || d.y) && i(d)
          }
      }
      n !== u.current && (u.current = n)
  }
  , [t, n, r, o]),
  g.useEffect(()=>{
      l && i(null)
  }
  , [l]),
  l
}
function t0(e) {
  let {animateLayoutChanges: t=Jg, attributes: n, disabled: r, data: o, getNewIndex: l=Gg, id: i, strategy: u, resizeObserverConfig: s, transition: a=Zg} = e;
  const {items: d, containerId: c, activeIndex: p, disabled: m, disableTransforms: y, sortedRects: w, overIndex: k, useDragOverlay: h, strategy: f} = g.useContext(Gf)
    , v = n0(r, m)
    , S = d.indexOf(i)
    , x = g.useMemo(()=>({
      sortable: {
          containerId: c,
          index: S,
          items: d
      },
      ...o
  }), [c, o, S, d])
    , E = g.useMemo(()=>d.slice(d.indexOf(i)), [d, i])
    , {rect: C, node: P, isOver: M, setNodeRef: _} = Mg({
      id: i,
      data: x,
      disabled: v.droppable,
      resizeObserverConfig: {
          updateMeasurementsFor: E,
          ...s
      }
  })
    , {active: L, activatorEvent: le, activeNodeRect: ie, attributes: _e, setNodeRef: Zt, listeners: Rt, isDragging: ue, over: D, setActivatorNodeRef: T, transform: z} = Ng({
      id: i,
      data: x,
      attributes: {
          ...bg,
          ...n
      },
      disabled: v.draggable
  })
    , U = vm(_, Zt)
    , A = !!L
    , Ce = A && !y && No(p) && No(k)
    , ge = !h && ue
    , dt = ge && Ce ? z : null
    , ft = Ce ? dt ?? (u ?? f)({
      rects: w,
      activeNodeRect: ie,
      activeIndex: p,
      overIndex: k,
      index: S
  }) : null
    , Pt = No(p) && No(k) ? l({
      id: i,
      items: d,
      activeIndex: p,
      overIndex: k
  }) : S
    , pt = L == null ? void 0 : L.id
    , $ = g.useRef({
      activeId: pt,
      items: d,
      newIndex: Pt,
      containerId: c
  })
    , er = d !== $.current.items
    , ot = t({
      active: L,
      containerId: c,
      isDragging: ue,
      isSorting: A,
      id: i,
      index: S,
      items: d,
      newIndex: $.current.newIndex,
      previousItems: $.current.items,
      previousContainerId: $.current.containerId,
      transition: a,
      wasDragging: $.current.activeId != null
  })
    , vn = e0({
      disabled: !ot,
      index: S,
      node: P,
      rect: C
  });
  return g.useEffect(()=>{
      A && $.current.newIndex !== Pt && ($.current.newIndex = Pt),
      c !== $.current.containerId && ($.current.containerId = c),
      d !== $.current.items && ($.current.items = d)
  }
  , [A, Pt, c, d]),
  g.useEffect(()=>{
      if (pt === $.current.activeId)
          return;
      if (pt && !$.current.activeId) {
          $.current.activeId = pt;
          return
      }
      const mn = setTimeout(()=>{
          $.current.activeId = pt
      }
      , 50);
      return ()=>clearTimeout(mn)
  }
  , [pt]),
  {
      active: L,
      activeIndex: p,
      attributes: _e,
      data: x,
      rect: C,
      index: S,
      newIndex: Pt,
      items: d,
      isOver: M,
      isSorting: A,
      isDragging: ue,
      listeners: Rt,
      node: P,
      overIndex: k,
      over: D,
      setNodeRef: U,
      setActivatorNodeRef: T,
      setDroppableNodeRef: _,
      setDraggableNodeRef: Zt,
      transform: vn ?? ft,
      transition: ht()
  };
  function ht() {
      if (vn || er && $.current.newIndex === S)
          return qg;
      if (!(ge && !jl(le) || !a) && (A || ot))
          return fn.Transition.toString({
              ...a,
              property: Jf
          })
  }
}
function n0(e, t) {
  var n, r;
  return typeof e == "boolean" ? {
      draggable: e,
      droppable: !1
  } : {
      draggable: (n = e == null ? void 0 : e.draggable) != null ? n : t.draggable,
      droppable: (r = e == null ? void 0 : e.droppable) != null ? r : t.droppable
  }
}
function yl(e) {
  if (!e)
      return !1;
  const t = e.data.current;
  return !!(t && "sortable"in t && typeof t.sortable == "object" && "containerId"in t.sortable && "items"in t.sortable && "index"in t.sortable)
}
const r0 = [I.Down, I.Right, I.Up, I.Left]
, o0 = (e,t)=>{
  let {context: {active: n, collisionRect: r, droppableRects: o, droppableContainers: l, over: i, scrollableAncestors: u}} = t;
  if (r0.includes(e.code)) {
      if (e.preventDefault(),
      !n || !r)
          return;
      const s = [];
      l.getEnabled().forEach(c=>{
          if (!c || c != null && c.disabled)
              return;
          const p = o.get(c.id);
          if (p)
              switch (e.code) {
              case I.Down:
                  r.top < p.top && s.push(c);
                  break;
              case I.Up:
                  r.top > p.top && s.push(c);
                  break;
              case I.Left:
                  r.left > p.left && s.push(c);
                  break;
              case I.Right:
                  r.left < p.left && s.push(c);
                  break
              }
      }
      );
      const a = Lm({
          active: n,
          collisionRect: r,
          droppableRects: o,
          droppableContainers: s,
          pointerCoordinates: null
      });
      let d = Df(a, "id");
      if (d === (i == null ? void 0 : i.id) && a.length > 1 && (d = a[1].id),
      d != null) {
          const c = l.get(n.id)
            , p = l.get(d)
            , m = p ? o.get(p.id) : null
            , y = p == null ? void 0 : p.node.current;
          if (y && m && c && p) {
              const k = $l(y).some((E,C)=>u[C] !== E)
                , h = Zf(c, p)
                , f = l0(c, p)
                , v = k || !h ? {
                  x: 0,
                  y: 0
              } : {
                  x: f ? r.width - m.width : 0,
                  y: f ? r.height - m.height : 0
              }
                , S = {
                  x: m.left,
                  y: m.top
              };
              return v.x && v.y ? S : Xr(S, v)
          }
      }
  }
}
;
function Zf(e, t) {
  return !yl(e) || !yl(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId
}
function l0(e, t) {
  return !yl(e) || !yl(t) || !Zf(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index
}
const i0 = [1080, 640, 384, 256, 128, 96, 64, 48]
, ec = (e,t,n)=>`http://htodogpics.s3-website.ap-northeast-2.amazonaws.com/KakaoTalk_20240322_${e}.jpg`
, u0 = [{
  id: "225011458",
  width: 480,
  height: 320
}, {
  id: "225011458_01",
  width: 480,
  height: 720
}, {
  id: "225011458_02",
  width: 480,
  height: 320
}, {
  id: "225011458_03",
  width: 480,
  height: 640
}, {
  id: "225011458_04",
  width: 480,
  height: 640
}, {
  id: "225011458_05",
  width: 480,
  height: 640
}, {
  id: "225011458_06",
  width: 480,
  height: 640
}, {
  id: "225011458_07",
  width: 480,
  height: 360
}, {
  id: "225011458_08",
  width: 480,
  height: 640
}, {
  id: "225011458_09",
  width: 480,
  height: 640
}, {
  id: "225011458_10",
  width: 480,
  height: 640
}, {
  id: "225011458_11",
  width: 480,
  height: 640
}, {
  id: "225011458_12",
  width: 480,
  height: 640
}, {
  id: "225011458_13",
  width: 480,
  height: 480
}, {
  id: "225011458_14",
  width: 480,
  height: 480
}, {
  id: "225011458_15",
  width: 480,
  height: 640
}, {
  id: "225011458_16",
  width: 480,
  height: 360
}, {
  id: "225011458_17",
  width: 480,
  height: 360
}, {
  id: "225011458_18",
  width: 480,
  height: 720
}, {
  id: "225011458_19",
  width: 480,
  height: 640
}, {
  id: "225011458_20",
  width: 480,
  height: 640
}, {
  id: "225011458_21",
  width: 480,
  height: 640
}, {
  id: "225011458_22",
  width: 480,
  height: 640
}, {
  id: "225209463",
  width: 480,
  height: 640
}, {
  id: "225209463_01",
  width: 480,
  height: 640
}, {
  id: "225209463_02",
  width: 480,
  height: 640
}, {
  id: "225209463_03",
  width: 480,
  height: 640
}, {
  id: "225209463_04",
  width: 480,
  height: 480
}, {
  id: "225209463_05",
  width: 480,
  height: 480
}, {
  id: "225209463_06",
  width: 480,
  height: 640
}]
, s0 = u0.map(e=>({
  src: ec(e.id, e.width, e.height),
  width: e.width,
  height: e.height,
  srcSet: i0.map(t=>{
      const n = Math.round(e.height / e.width * t);
      return {
          src: ec(e.id),
          width: t,
          height: n
      }
  }
  )
}))
, qf = g.memo(g.forwardRef(function(t, n) {
  const {layoutOptions: r, imageProps: o, overlay: l, active: i, insertPosition: u, attributes: s, listeners: a} = t
    , {alt: d, style: c, ...p} = o;
  return ce.jsx("div", {
      ref: n,
      style: {
          width: l ? `calc(100% - ${2 * r.padding}px)` : c.width,
          padding: c.padding,
          marginBottom: c.marginBottom
      },
      className: hm("photo-frame", {
          overlay: l,
          active: i,
          insertBefore: u === "before",
          insertAfter: u === "after"
      }),
      ...s,
      ...a,
      children: ce.jsx("img", {
          alt: d,
          style: {
              ...c,
              width: "100%",
              height: "auto",
              padding: 0,
              marginBottom: 0
          },
          ...p
      })
  })
}));
function a0(e) {
  const {photo: t, activeIndex: n} = e
    , {attributes: r, listeners: o, isDragging: l, index: i, over: u, setNodeRef: s} = t0({
      id: t.id
  });
  return ce.jsx(qf, {
      ref: s,
      active: l,
      insertPosition: n !== void 0 && (u == null ? void 0 : u.id) === t.id && !l ? i > n ? "after" : "before" : void 0,
      "aria-label": "sortable image",
      attributes: r,
      listeners: o,
      ...e
  })
}
function c0() {
  const [e,t] = g.useState(s0.map(d=>({
      ...d,
      id: d.key || d.src
  })))
    , n = g.useRef({})
    , [r,o] = g.useState()
    , l = r ? e.findIndex(d=>d.id === r) : void 0
    , i = _m(gi($f, {
      activationConstraint: {
          distance: 5
      }
  }), gi(Uf, {
      activationConstraint: {
          delay: 50,
          tolerance: 10
      }
  }), gi(gs, {
      coordinateGetter: o0
  }))
    , u = g.useCallback(({active: d})=>o(d.id), [])
    , s = g.useCallback(d=>{
      const {active: c, over: p} = d;
      p && c.id !== p.id && t(m=>{
          const y = m.findIndex(k=>k.id === c.id)
            , w = m.findIndex(k=>k.id === p.id);
          return Ss(m, y, w)
      }
      ),
      o(void 0)
  }
  , [])
    , a = d=>(n.current[d.photo.id] = d,
  ce.jsx(a0, {
      activeIndex: l,
      ...d
  }));
  return ce.jsxs(Rg, {
      sensors: i,
      collisionDetection: zm,
      onDragStart: u,
      onDragEnd: s,
      children: [ce.jsx(Xg, {
          items: e,
          children: ce.jsx("div", {
              style: {
                  margin: 30
              },
              children: ce.jsx(pm, {
                  photos: e,
                  layout: "rows",
                  spacing: 30,
                  padding: 20,
                  renderPhoto: a
              })
          })
      }), ce.jsx(Hg, {
          children: r && ce.jsx(qf, {
              overlay: !0,
              ...n.current[r]
          })
      })]
  })
}
ki.createRoot(document.getElementById("root")).render(ce.jsxs(H.StrictMode, {
  children: [ce.jsxs("header", {
      children: [ce.jsx("h1", {
          children: "React Photo Album | Sortable Gallery"
      }), ce.jsx("h2", {
          children: "Jinhong & Jay"
      })]
  }), ce.jsx("main", {
      children: location.protocol == "https:" ? ce.jsx("h3", {
          children: "This site is currently only accessible via HTTP. Please use an HTTP address to visit."
      }) : ce.jsx(c0, {})
  })]
}));