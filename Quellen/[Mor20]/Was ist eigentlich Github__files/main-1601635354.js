"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }if (!value || !value.then) {
    value = Promise.resolve(value);
  }return then ? value.then(then) : value;
}function _async(f) {
  return function () {
    for (var args = [], i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }try {
      return Promise.resolve(f.apply(this, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}function _catch(body, recover) {
  try {
    var result = body();
  } catch (e) {
    return recover(e);
  }if (result && result.then) {
    return result.then(void 0, recover);
  }return result;
}function _rethrow(thrown, value) {
  if (thrown) throw value;return value;
}function _finallyRethrows(body, finalizer) {
  try {
    var result = body();
  } catch (e) {
    return finalizer(true, e);
  }if (result && result.then) {
    return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
  }return finalizer(false, result);
}function _call(body, then, direct) {
  if (direct) {
    return then ? then(body()) : body();
  }try {
    var result = Promise.resolve(body());return then ? result.then(then) : result;
  } catch (e) {
    return Promise.reject(e);
  }
}function _empty() {}function _continueIgnored(value) {
  if (value && value.then) {
    return value.then(_empty);
  }
}!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t() : "function" == typeof define && define.amd ? define(t) : t();
}(0, function () {
  "use strict";
  function e(e) {
    var t = this.constructor;return this.then(function (n) {
      return t.resolve(e()).then(function () {
        return n;
      });
    }, function (n) {
      return t.resolve(e()).then(function () {
        return t.reject(n);
      });
    });
  }function t(e) {
    return !(!e || void 0 === e.length);
  }function n() {}function r(e) {
    if (!(this instanceof r)) throw new TypeError("Promises must be constructed via new");if ("function" != typeof e) throw new TypeError("not a function");this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], l(e, this);
  }function i(e, t) {
    for (; 3 === e._state;) {
      e = e._value;
    }0 !== e._state ? (e._handled = !0, r._immediateFn(function () {
      var n = 1 === e._state ? t.onFulfilled : t.onRejected;if (null !== n) {
        var r;try {
          r = n(e._value);
        } catch (e) {
          return void a(t.promise, e);
        }o(t.promise, r);
      } else (1 === e._state ? o : a)(t.promise, e._value);
    })) : e._deferreds.push(t);
  }function o(e, t) {
    try {
      if (t === e) throw new TypeError("A promise cannot be resolved with itself.");if (t && ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || "function" == typeof t)) {
        var n = t.then;if (t instanceof r) return e._state = 3, e._value = t, void s(e);if ("function" == typeof n) return void l(function (e, t) {
          return function () {
            e.apply(t, arguments);
          };
        }(n, t), e);
      }e._state = 1, e._value = t, s(e);
    } catch (t) {
      a(e, t);
    }
  }function a(e, t) {
    e._state = 2, e._value = t, s(e);
  }function s(e) {
    2 === e._state && 0 === e._deferreds.length && r._immediateFn(function () {
      e._handled || r._unhandledRejectionFn(e._value);
    });for (var t = 0, n = e._deferreds.length; n > t; t++) {
      i(e, e._deferreds[t]);
    }e._deferreds = null;
  }function l(e, t) {
    var n = !1;try {
      e(function (e) {
        n || (n = !0, o(t, e));
      }, function (e) {
        n || (n = !0, a(t, e));
      });
    } catch (e) {
      if (n) return;n = !0, a(t, e);
    }
  }var c = setTimeout;r.prototype.catch = function (e) {
    return this.then(null, e);
  }, r.prototype.then = function (e, t) {
    var r = new this.constructor(n);return i(this, new function (e, t, n) {
      this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n;
    }(e, t, r)), r;
  }, r.prototype.finally = e, r.all = function (e) {
    return new r(function (n, r) {
      function i(e, t) {
        try {
          if (t && ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || "function" == typeof t)) {
            var s = t.then;if ("function" == typeof s) return void s.call(t, function (t) {
              i(e, t);
            }, r);
          }o[e] = t, 0 == --a && n(o);
        } catch (e) {
          r(e);
        }
      }if (!t(e)) return r(new TypeError("Promise.all accepts an array"));var o = Array.prototype.slice.call(e);if (0 === o.length) return n([]);for (var a = o.length, s = 0; o.length > s; s++) {
        i(s, o[s]);
      }
    });
  }, r.resolve = function (e) {
    return e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.constructor === r ? e : new r(function (t) {
      t(e);
    });
  }, r.reject = function (e) {
    return new r(function (t, n) {
      n(e);
    });
  }, r.race = function (e) {
    return new r(function (n, i) {
      if (!t(e)) return i(new TypeError("Promise.race accepts an array"));for (var o = 0, a = e.length; a > o; o++) {
        r.resolve(e[o]).then(n, i);
      }
    });
  }, r._immediateFn = "function" == typeof setImmediate && function (e) {
    setImmediate(e);
  } || function (e) {
    c(e, 0);
  }, r._unhandledRejectionFn = function (e) {
    void 0 !== console && console && console.warn("Possible Unhandled Promise Rejection:", e);
  };var u = function () {
    if ("undefined" != typeof self) return self;if ("undefined" != typeof window) return window;if ("undefined" != typeof global) return global;throw Error("unable to locate global object");
  }();"Promise" in u ? u.Promise.prototype.finally || (u.Promise.prototype.finally = e) : u.Promise = r;
}), function (e) {
  var t;if ("function" == typeof define && define.amd && (define(e), t = !0), "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && (module.exports = e(), t = !0), !t) {
    var n = window.Cookies,
        r = window.Cookies = e();r.noConflict = function () {
      return window.Cookies = n, r;
    };
  }
}(function () {
  function e() {
    for (var e = 0, t = {}; e < arguments.length; e++) {
      var n = arguments[e];for (var r in n) {
        t[r] = n[r];
      }
    }return t;
  }function t(e) {
    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
  }return function n(r) {
    function i() {}function o(t, n, o) {
      if ("undefined" != typeof document) {
        "number" == typeof (o = e({ path: "/" }, i.defaults, o)).expires && (o.expires = new Date(1 * new Date() + 864e5 * o.expires)), o.expires = o.expires ? o.expires.toUTCString() : "";try {
          var a = JSON.stringify(n);/^[\{\[]/.test(a) && (n = a);
        } catch (e) {}n = r.write ? r.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);var s = "";for (var l in o) {
          o[l] && (s += "; " + l, !0 !== o[l] && (s += "=" + o[l].split(";")[0]));
        }return document.cookie = t + "=" + n + s;
      }
    }function a(e, n) {
      if ("undefined" != typeof document) {
        for (var i = {}, o = document.cookie ? document.cookie.split("; ") : [], a = 0; a < o.length; a++) {
          var s = o[a].split("="),
              l = s.slice(1).join("=");n || '"' !== l.charAt(0) || (l = l.slice(1, -1));try {
            var c = t(s[0]);if (l = (r.read || r)(l, c) || t(l), n) try {
              l = JSON.parse(l);
            } catch (e) {}if (i[c] = l, e === c) break;
          } catch (e) {}
        }return e ? i[e] : i;
      }
    }return i.set = o, i.get = function (e) {
      return a(e, !1);
    }, i.getJSON = function (e) {
      return a(e, !0);
    }, i.remove = function (t, n) {
      o(t, "", e(n, { expires: -1 }));
    }, i.defaults = {}, i.withConverter = n, i;
  }(function () {});
});var tns = function () {
  Object.keys || (Object.keys = function (e) {
    var t = [];for (var n in e) {
      Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
    }return t;
  }), "remove" in Element.prototype || (Element.prototype.remove = function () {
    this.parentNode && this.parentNode.removeChild(this);
  });var e = window,
      t = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.msRequestAnimationFrame || function (e) {
    return setTimeout(e, 16);
  },
      n = window,
      r = n.cancelAnimationFrame || n.mozCancelAnimationFrame || function (e) {
    clearTimeout(e);
  };function i() {
    for (var e, t, n, r = arguments[0] || {}, i = 1, o = arguments.length; i < o; i++) {
      if (null !== (e = arguments[i])) for (t in e) {
        r !== (n = e[t]) && void 0 !== n && (r[t] = n);
      }
    }return r;
  }function o(e) {
    return ["true", "false"].indexOf(e) >= 0 ? JSON.parse(e) : e;
  }function a(e, t, n, r) {
    if (r) try {
      e.setItem(t, n);
    } catch (e) {}return n;
  }function s() {
    var e = document,
        t = e.body;return t || ((t = e.createElement("body")).fake = !0), t;
  }var l = document.documentElement;function c(e) {
    var t = "";return e.fake && (t = l.style.overflow, e.style.background = "", e.style.overflow = l.style.overflow = "hidden", l.appendChild(e)), t;
  }function u(e, t) {
    e.fake && (e.remove(), l.style.overflow = t, l.offsetHeight);
  }function d(e, t, n, r) {
    "insertRule" in e ? e.insertRule(t + "{" + n + "}", r) : e.addRule(t, n, r);
  }function f(e) {
    return ("insertRule" in e ? e.cssRules : e.rules).length;
  }function p(e, t, n) {
    for (var r = 0, i = e.length; r < i; r++) {
      t.call(n, e[r], r);
    }
  }var h = "classList" in document.createElement("_"),
      m = h ? function (e, t) {
    return e.classList.contains(t);
  } : function (e, t) {
    return e.className.indexOf(t) >= 0;
  },
      g = h ? function (e, t) {
    m(e, t) || e.classList.add(t);
  } : function (e, t) {
    m(e, t) || (e.className += " " + t);
  },
      y = h ? function (e, t) {
    m(e, t) && e.classList.remove(t);
  } : function (e, t) {
    m(e, t) && (e.className = e.className.replace(t, ""));
  };function v(e, t) {
    return e.hasAttribute(t);
  }function b(e, t) {
    return e.getAttribute(t);
  }function w(e) {
    return void 0 !== e.item;
  }function x(e, t) {
    if (e = w(e) || e instanceof Array ? e : [e], "[object Object]" === Object.prototype.toString.call(t)) for (var n = e.length; n--;) {
      for (var r in t) {
        e[n].setAttribute(r, t[r]);
      }
    }
  }function k(e, t) {
    e = w(e) || e instanceof Array ? e : [e];for (var n = (t = t instanceof Array ? t : [t]).length, r = e.length; r--;) {
      for (var i = n; i--;) {
        e[r].removeAttribute(t[i]);
      }
    }
  }function A(e) {
    for (var t = [], n = 0, r = e.length; n < r; n++) {
      t.push(e[n]);
    }return t;
  }function S(e, t) {
    "none" !== e.style.display && (e.style.display = "none");
  }function E(e, t) {
    "none" === e.style.display && (e.style.display = "");
  }function _(e) {
    return "none" !== window.getComputedStyle(e).display;
  }function C(e) {
    if ("string" == typeof e) {
      var t = [e],
          n = e.charAt(0).toUpperCase() + e.substr(1);["Webkit", "Moz", "ms", "O"].forEach(function (r) {
        "ms" === r && "transform" !== e || t.push(r + n);
      }), e = t;
    }for (var r = document.createElement("fakeelement"), i = (e.length, 0); i < e.length; i++) {
      var o = e[i];if (void 0 !== r.style[o]) return o;
    }return !1;
  }function T(e, t) {
    var n = !1;return (/^Webkit/.test(e) ? n = "webkit" + t + "End" : /^O/.test(e) ? n = "o" + t + "End" : e && (n = t.toLowerCase() + "end"), n
    );
  }var P = !1;try {
    var L = Object.defineProperty({}, "passive", { get: function get() {
        P = !0;
      } });window.addEventListener("test", null, L);
  } catch (e) {}var N = !!P && { passive: !0 };function B(e, t, n) {
    for (var r in t) {
      var i = ["touchstart", "touchmove"].indexOf(r) >= 0 && !n && N;e.addEventListener(r, t[r], i);
    }
  }function M(e, t) {
    for (var n in t) {
      var r = ["touchstart", "touchmove"].indexOf(n) >= 0 && N;e.removeEventListener(n, t[n], r);
    }
  }function q() {
    return { topics: {}, on: function on(e, t) {
        this.topics[e] = this.topics[e] || [], this.topics[e].push(t);
      }, off: function off(e, t) {
        if (this.topics[e]) for (var n = 0; n < this.topics[e].length; n++) {
          if (this.topics[e][n] === t) {
            this.topics[e].splice(n, 1);break;
          }
        }
      }, emit: function emit(e, t) {
        t.type = e, this.topics[e] && this.topics[e].forEach(function (n) {
          n(t, e);
        });
      } };
  }var O = function O(e) {
    e = i({ container: ".slider", mode: "carousel", axis: "horizontal", items: 1, gutter: 0, edgePadding: 0, fixedWidth: !1, autoWidth: !1, viewportMax: !1, slideBy: 1, center: !1, controls: !0, controlsPosition: "top", controlsText: ["prev", "next"], controlsContainer: !1, prevButton: !1, nextButton: !1, nav: !0, navPosition: "top", navContainer: !1, navAsThumbnails: !1, arrowKeys: !1, speed: 300, autoplay: !1, autoplayPosition: "top", autoplayTimeout: 5e3, autoplayDirection: "forward", autoplayText: ["start", "stop"], autoplayHoverPause: !1, autoplayButton: !1, autoplayButtonOutput: !0, autoplayResetOnVisibility: !0, animateIn: "tns-fadeIn", animateOut: "tns-fadeOut", animateNormal: "tns-normal", animateDelay: !1, loop: !0, rewind: !1, autoHeight: !1, responsive: !1, lazyload: !1, lazyloadSelector: ".tns-lazy-img", touch: !0, mouseDrag: !1, swipeAngle: 15, nested: !1, preventActionWhenRunning: !1, preventScrollOnTouch: !1, freezable: !0, onInit: !1, useLocalStorage: !0 }, e || {});var n = document,
        l = window,
        h = { ENTER: 13, SPACE: 32, LEFT: 37, RIGHT: 39 },
        w = {},
        P = e.useLocalStorage;if (P) {
      var L = navigator.userAgent,
          N = new Date();try {
        (w = l.localStorage) ? (w.setItem(N, N), P = w.getItem(N) == N, w.removeItem(N)) : P = !1, P || (w = {});
      } catch (e) {
        P = !1;
      }P && (w.tnsApp && w.tnsApp !== L && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function (e) {
        w.removeItem(e);
      }), localStorage.tnsApp = L);
    }var j = w.tC ? o(w.tC) : a(w, "tC", function () {
      var e = document,
          t = s(),
          n = c(t),
          r = e.createElement("div"),
          i = !1;t.appendChild(r);try {
        for (var o, a = "(10px * 10)", l = ["calc" + a, "-moz-calc" + a, "-webkit-calc" + a], d = 0; d < 3; d++) {
          if (o = l[d], r.style.width = o, 100 === r.offsetWidth) {
            i = o.replace(a, "");break;
          }
        }
      } catch (e) {}return t.fake ? u(t, n) : r.remove(), i;
    }(), P),
        D = w.tPL ? o(w.tPL) : a(w, "tPL", function () {
      var e,
          t = document,
          n = s(),
          r = c(n),
          i = t.createElement("div"),
          o = t.createElement("div"),
          a = "";i.className = "tns-t-subp2", o.className = "tns-t-ct";for (var l = 0; l < 70; l++) {
        a += "<div></div>";
      }return o.innerHTML = a, i.appendChild(o), n.appendChild(i), e = Math.abs(i.getBoundingClientRect().left - o.children[67].getBoundingClientRect().left) < 2, n.fake ? u(n, r) : i.remove(), e;
    }(), P),
        F = w.tMQ ? o(w.tMQ) : a(w, "tMQ", function () {
      var e,
          t = document,
          n = s(),
          r = c(n),
          i = t.createElement("div"),
          o = t.createElement("style"),
          a = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return o.type = "text/css", i.className = "tns-mq-test", n.appendChild(o), n.appendChild(i), o.styleSheet ? o.styleSheet.cssText = a : o.appendChild(t.createTextNode(a)), e = window.getComputedStyle ? window.getComputedStyle(i).position : i.currentStyle.position, n.fake ? u(n, r) : i.remove(), "absolute" === e;
    }(), P),
        I = w.tTf ? o(w.tTf) : a(w, "tTf", C("transform"), P),
        R = w.t3D ? o(w.t3D) : a(w, "t3D", function (e) {
      if (!e) return !1;if (!window.getComputedStyle) return !1;var t,
          n = document,
          r = s(),
          i = c(r),
          o = n.createElement("p"),
          a = e.length > 9 ? "-" + e.slice(0, -9).toLowerCase() + "-" : "";return a += "transform", r.insertBefore(o, null), o.style[e] = "translate3d(1px,1px,1px)", t = window.getComputedStyle(o).getPropertyValue(a), r.fake ? u(r, i) : o.remove(), void 0 !== t && t.length > 0 && "none" !== t;
    }(I), P),
        H = w.tTDu ? o(w.tTDu) : a(w, "tTDu", C("transitionDuration"), P),
        z = w.tTDe ? o(w.tTDe) : a(w, "tTDe", C("transitionDelay"), P),
        $ = w.tADu ? o(w.tADu) : a(w, "tADu", C("animationDuration"), P),
        U = w.tADe ? o(w.tADe) : a(w, "tADe", C("animationDelay"), P),
        W = w.tTE ? o(w.tTE) : a(w, "tTE", T(H, "Transition"), P),
        G = w.tAE ? o(w.tAE) : a(w, "tAE", T($, "Animation"), P),
        J = l.console && "function" == typeof l.console.warn,
        V = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"],
        X = {};if (V.forEach(function (t) {
      if ("string" == typeof e[t]) {
        var r = e[t],
            i = n.querySelector(r);if (X[t] = r, !i || !i.nodeName) return void (J && console.warn("Can't find", e[t]));e[t] = i;
      }
    }), !(e.container.children.length < 1)) {
      var Y = e.responsive,
          K = e.nested,
          Q = "carousel" === e.mode;if (Y) {
        0 in Y && (e = i(e, Y[0]), delete Y[0]);var Z = {};for (var ee in Y) {
          var te = Y[ee];te = "number" == typeof te ? { items: te } : te, Z[ee] = te;
        }Y = Z, Z = null;
      }if (Q || function e(t) {
        for (var n in t) {
          Q || ("slideBy" === n && (t[n] = "page"), "edgePadding" === n && (t[n] = !1), "autoHeight" === n && (t[n] = !1)), "responsive" === n && e(t[n]);
        }
      }(e), !Q) {
        e.axis = "horizontal", e.slideBy = "page", e.edgePadding = !1;var ne = e.animateIn,
            re = e.animateOut,
            ie = e.animateDelay,
            oe = e.animateNormal;
      }var ae,
          se,
          le = "horizontal" === e.axis,
          ce = n.createElement("div"),
          ue = n.createElement("div"),
          de = e.container,
          fe = de.parentNode,
          pe = de.outerHTML,
          he = de.children,
          me = he.length,
          ge = Ln(),
          ye = !1;Y && Yn(), Q && (de.className += " tns-vpfix");var ve,
          be,
          we,
          xe,
          ke,
          Ae,
          Se,
          Ee,
          _e = e.autoWidth,
          Ce = qn("fixedWidth"),
          Te = qn("edgePadding"),
          Pe = qn("gutter"),
          Le = Bn(),
          Ne = qn("center"),
          Be = _e ? 1 : Math.floor(qn("items")),
          Me = qn("slideBy"),
          qe = e.viewportMax || e.fixedWidthViewportWidth,
          Oe = qn("arrowKeys"),
          je = qn("speed"),
          De = e.rewind,
          Fe = !De && e.loop,
          Ie = qn("autoHeight"),
          Re = qn("controls"),
          He = qn("controlsText"),
          ze = qn("nav"),
          $e = qn("touch"),
          Ue = qn("mouseDrag"),
          We = qn("autoplay"),
          Ge = qn("autoplayTimeout"),
          Je = qn("autoplayText"),
          Ve = qn("autoplayHoverPause"),
          Xe = qn("autoplayResetOnVisibility"),
          Ye = (Ee = document.createElement("style"), Se && Ee.setAttribute("media", Se), document.querySelector("head").appendChild(Ee), Ee.sheet ? Ee.sheet : Ee.styleSheet),
          Ke = e.lazyload,
          Qe = (e.lazyloadSelector, []),
          Ze = Fe ? (ke = function () {
        if (_e || Ce && !qe) return me - 1;var t = Ce ? "fixedWidth" : "items",
            n = [];if ((Ce || e[t] < me) && n.push(e[t]), Y) for (var r in Y) {
          var i = Y[r][t];i && (Ce || i < me) && n.push(i);
        }return n.length || n.push(0), Math.ceil(Ce ? qe / Math.min.apply(null, n) : Math.max.apply(null, n));
      }(), Ae = Q ? Math.ceil((5 * ke - me) / 2) : 4 * ke - me, Ae = Math.max(ke, Ae), Mn("edgePadding") ? Ae + 1 : Ae) : 0,
          et = Q ? me + 2 * Ze : me + Ze,
          tt = !(!Ce && !_e || Fe),
          nt = Ce ? Ar() : null,
          rt = !Q || !Fe,
          it = le ? "left" : "top",
          ot = "",
          at = "",
          st = Ce ? function () {
        return Ne && !Fe ? me - 1 : Math.ceil(-nt / (Ce + Pe));
      } : _e ? function () {
        for (var e = et; e--;) {
          if (ve[e] >= -nt) return e;
        }
      } : function () {
        return Ne && Q && !Fe ? me - 1 : Fe || Q ? Math.max(0, et - Math.ceil(Be)) : et - 1;
      },
          lt = Cn(qn("startIndex")),
          ct = lt,
          ut = (_n(), 0),
          dt = _e ? null : st(),
          ft = e.preventActionWhenRunning,
          pt = e.swipeAngle,
          ht = !pt || "?",
          mt = !1,
          gt = e.onInit,
          yt = new q(),
          vt = " tns-slider tns-" + e.mode,
          bt = de.id || (xe = window.tnsId, window.tnsId = xe ? xe + 1 : 1, "tns" + window.tnsId),
          wt = qn("disable"),
          xt = !1,
          kt = e.freezable,
          At = !(!kt || _e) && Xn(),
          St = !1,
          Et = { click: Br, keydown: function keydown(e) {
          e = Rr(e);var t = [h.LEFT, h.RIGHT].indexOf(e.keyCode);t >= 0 && (0 === t ? Gt.disabled || Br(e, -1) : Jt.disabled || Br(e, 1));
        } },
          _t = { click: function click(e) {
          if (mt) {
            if (ft) return;Lr();
          }var t = Hr(e = Rr(e));for (; t !== Kt && !v(t, "data-nav");) {
            t = t.parentNode;
          }if (v(t, "data-nav")) {
            var n = tn = Number(b(t, "data-nav")),
                r = Ce || _e ? n * me / Zt : n * Be,
                i = qt ? n : Math.min(Math.ceil(r), me - 1);Nr(i, e), nn === n && (cn && Dr(), tn = -1);
          }
        }, keydown: function keydown(e) {
          e = Rr(e);var t = n.activeElement;if (!v(t, "data-nav")) return;var r = [h.LEFT, h.RIGHT, h.ENTER, h.SPACE].indexOf(e.keyCode),
              i = Number(b(t, "data-nav"));r >= 0 && (0 === r ? i > 0 && Ir(Yt[i - 1]) : 1 === r ? i < Zt - 1 && Ir(Yt[i + 1]) : (tn = i, Nr(i, e)));
        } },
          Ct = { mouseover: function mouseover() {
          cn && (qr(), un = !0);
        }, mouseout: function mouseout() {
          un && (Mr(), un = !1);
        } },
          Tt = { visibilitychange: function visibilitychange() {
          n.hidden ? cn && (qr(), fn = !0) : fn && (Mr(), fn = !1);
        } },
          Pt = { keydown: function keydown(e) {
          e = Rr(e);var t = [h.LEFT, h.RIGHT].indexOf(e.keyCode);t >= 0 && Br(e, 0 === t ? -1 : 1);
        } },
          Lt = { touchstart: Wr, touchmove: Gr, touchend: Jr, touchcancel: Jr },
          Nt = { mousedown: Wr, mousemove: Gr, mouseup: Jr, mouseleave: Jr },
          Bt = Mn("controls"),
          Mt = Mn("nav"),
          qt = !!_e || e.navAsThumbnails,
          Ot = Mn("autoplay"),
          jt = Mn("touch"),
          Dt = Mn("mouseDrag"),
          Ft = "tns-slide-active",
          It = "tns-complete",
          Rt = { load: function load(e) {
          or(Hr(e));
        }, error: function error(e) {
          t = Hr(e), g(t, "failed"), ar(t);var t;
        } },
          Ht = "force" === e.preventScrollOnTouch;if (Bt) var zt,
          $t,
          Ut = e.controlsContainer,
          Wt = e.controlsContainer ? e.controlsContainer.outerHTML : "",
          Gt = e.prevButton,
          Jt = e.nextButton,
          Vt = e.prevButton ? e.prevButton.outerHTML : "",
          Xt = e.nextButton ? e.nextButton.outerHTML : "";if (Mt) var Yt,
          Kt = e.navContainer,
          Qt = e.navContainer ? e.navContainer.outerHTML : "",
          Zt = _e ? me : Xr(),
          en = 0,
          tn = -1,
          nn = Pn(),
          rn = nn,
          on = "tns-nav-active",
          an = "Carousel Page ",
          sn = " (Current Slide)";if (Ot) var ln,
          cn,
          un,
          dn,
          fn,
          pn = "forward" === e.autoplayDirection ? 1 : -1,
          hn = e.autoplayButton,
          mn = e.autoplayButton ? e.autoplayButton.outerHTML : "",
          gn = ["<span class='tns-visually-hidden'>", " animation</span>"];if (jt || Dt) var yn,
          vn,
          bn = {},
          wn = {},
          xn = !1,
          kn = le ? function (e, t) {
        return e.x - t.x;
      } : function (e, t) {
        return e.y - t.y;
      };_e || En(wt || At), I && (it = I, ot = "translate", R ? (ot += le ? "3d(" : "3d(0px, ", at = le ? ", 0px, 0px)" : ", 0px)") : (ot += le ? "X(" : "Y(", at = ")")), Q && (de.className = de.className.replace("tns-vpfix", "")), function () {
        Mn("gutter");ce.className = "tns-outer", ue.className = "tns-inner", ce.id = bt + "-ow", ue.id = bt + "-iw", "" === de.id && (de.id = bt);vt += D || _e ? " tns-subpixel" : " tns-no-subpixel", vt += j ? " tns-calc" : " tns-no-calc", _e && (vt += " tns-autowidth");vt += " tns-" + e.axis, de.className += vt, Q ? ((ae = n.createElement("div")).id = bt + "-mw", ae.className = "tns-ovh", ce.appendChild(ae), ae.appendChild(ue)) : ce.appendChild(ue);if (Ie) {
          var t = ae || ue;t.className += " tns-ah";
        }if (fe.insertBefore(ce, de), ue.appendChild(de), p(he, function (e, t) {
          g(e, "tns-item"), e.id || (e.id = bt + "-item" + t), !Q && oe && g(e, oe), x(e, { "aria-hidden": "true", tabindex: "-1" });
        }), Ze) {
          for (var r = n.createDocumentFragment(), i = n.createDocumentFragment(), o = Ze; o--;) {
            var a = o % me,
                s = he[a].cloneNode(!0);if (k(s, "id"), i.insertBefore(s, i.firstChild), Q) {
              var l = he[me - 1 - a].cloneNode(!0);k(l, "id"), r.appendChild(l);
            }
          }de.insertBefore(r, de.firstChild), de.appendChild(i), he = de.children;
        }
      }(), function () {
        if (!Q) for (var t = lt, n = lt + Math.min(me, Be); t < n; t++) {
          var r = he[t];r.style.left = 100 * (t - lt) / Be + "%", g(r, ne), y(r, oe);
        }le && (D || _e ? (d(Ye, "#" + bt + " > .tns-item", "font-size:" + l.getComputedStyle(he[0]).fontSize + ";", f(Ye)), d(Ye, "#" + bt, "font-size:0;", f(Ye))) : Q && p(he, function (e, t) {
          e.style.marginLeft = function (e) {
            return j ? j + "(" + 100 * e + "% / " + et + ")" : 100 * e / et + "%";
          }(t);
        }));if (F) {
          if (H) {
            var i = ae && e.autoHeight ? Rn(e.speed) : "";d(Ye, "#" + bt + "-mw", i, f(Ye));
          }i = On(e.edgePadding, e.gutter, e.fixedWidth, e.speed, e.autoHeight), d(Ye, "#" + bt + "-iw", i, f(Ye)), Q && (i = le && !_e ? "width:" + jn(e.fixedWidth, e.gutter, e.items) + ";" : "", H && (i += Rn(je)), d(Ye, "#" + bt, i, f(Ye))), i = le && !_e ? Dn(e.fixedWidth, e.gutter, e.items) : "", e.gutter && (i += Fn(e.gutter)), Q || (H && (i += Rn(je)), $ && (i += Hn(je))), i && d(Ye, "#" + bt + " > .tns-item", i, f(Ye));
        } else {
          dr(), ue.style.cssText = On(Te, Pe, Ce, Ie), Q && le && !_e && (de.style.width = jn(Ce, Pe, Be));var i = le && !_e ? Dn(Ce, Pe, Be) : "";Pe && (i += Fn(Pe)), i && d(Ye, "#" + bt + " > .tns-item", i, f(Ye));
        }if (Y && F) for (var o in Y) {
          o = parseInt(o);var a = Y[o],
              i = "",
              s = "",
              c = "",
              u = "",
              h = "",
              m = _e ? null : qn("items", o),
              v = qn("fixedWidth", o),
              b = qn("speed", o),
              w = qn("edgePadding", o),
              x = qn("autoHeight", o),
              k = qn("gutter", o);H && ae && qn("autoHeight", o) && "speed" in a && (s = "#" + bt + "-mw{" + Rn(b) + "}"), ("edgePadding" in a || "gutter" in a) && (c = "#" + bt + "-iw{" + On(w, k, v, b, x) + "}"), Q && le && !_e && ("fixedWidth" in a || "items" in a || Ce && "gutter" in a) && (u = "width:" + jn(v, k, m) + ";"), H && "speed" in a && (u += Rn(b)), u && (u = "#" + bt + "{" + u + "}"), ("fixedWidth" in a || Ce && "gutter" in a || !Q && "items" in a) && (h += Dn(v, k, m)), "gutter" in a && (h += Fn(k)), !Q && "speed" in a && (H && (h += Rn(b)), $ && (h += Hn(b))), h && (h = "#" + bt + " > .tns-item{" + h + "}"), (i = s + c + u + h) && Ye.insertRule("@media (min-width: " + o / 16 + "em) {" + i + "}", Ye.cssRules.length);
        }
      }(), zn();var An = Fe ? Q ? function () {
        var e = ut,
            t = dt;e += Me, t -= Me, Te ? (e += 1, t -= 1) : Ce && (Le + Pe) % (Ce + Pe) && (t -= 1), Ze && (lt > t ? lt -= me : lt < e && (lt += me));
      } : function () {
        if (lt > dt) for (; lt >= ut + me;) {
          lt -= me;
        } else if (lt < ut) for (; lt <= dt - me;) {
          lt += me;
        }
      } : function () {
        lt = Math.max(ut, Math.min(dt, lt));
      },
          Sn = Q ? function () {
        var e, t, n, r, i, o, a, s, l, c, u;xr(de, ""), H || !je ? (_r(), je && _(de) || Lr()) : (e = de, t = it, n = ot, r = at, i = Sr(), o = je, a = Lr, s = Math.min(o, 10), l = i.indexOf("%") >= 0 ? "%" : "px", i = i.replace(l, ""), c = Number(e.style[t].replace(n, "").replace(r, "").replace(l, "")), u = (i - c) / o * s, setTimeout(function i() {
          o -= s, c += u, e.style[t] = n + c + l + r, o > 0 ? setTimeout(i, s) : a();
        }, s)), le || Vr();
      } : function () {
        Qe = [];var e = {};e[W] = e[G] = Lr, M(he[ct], e), B(he[lt], e), Cr(ct, ne, re, !0), Cr(lt, oe, ne), W && G && je && _(de) || Lr();
      };return { version: "2.9.2", getInfo: Kr, events: yt, goTo: Nr, play: function play() {
          We && !cn && (jr(), dn = !1);
        }, pause: function pause() {
          cn && (Dr(), dn = !0);
        }, isOn: ye, updateSliderHeight: pr, refresh: zn, destroy: function destroy() {
          if (Ye.disabled = !0, Ye.ownerNode && Ye.ownerNode.remove(), M(l, { resize: Jn }), Oe && M(n, Pt), Ut && M(Ut, Et), Kt && M(Kt, _t), M(de, Ct), M(de, Tt), hn && M(hn, { click: Fr }), We && clearInterval(ln), Q && W) {
            var t = {};t[W] = Lr, M(de, t);
          }$e && M(de, Lt), Ue && M(de, Nt);var r = [pe, Wt, Vt, Xt, Qt, mn];for (var i in V.forEach(function (t, n) {
            var i = "container" === t ? ce : e[t];if ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i))) {
              var o = !!i.previousElementSibling && i.previousElementSibling,
                  a = i.parentNode;i.outerHTML = r[n], e[t] = o ? o.nextElementSibling : a.firstElementChild;
            }
          }), V = ne = re = ie = oe = le = ce = ue = de = fe = pe = he = me = se = ge = _e = Ce = Te = Pe = Le = Be = Me = qe = Oe = je = De = Fe = Ie = Ye = Ke = ve = Qe = Ze = et = tt = nt = rt = it = ot = at = st = lt = ct = ut = dt = pt = ht = mt = gt = yt = vt = bt = wt = xt = kt = At = St = Et = _t = Ct = Tt = Pt = Lt = Nt = Bt = Mt = qt = Ot = jt = Dt = Ft = It = Rt = be = Re = He = Ut = Wt = Gt = Jt = zt = $t = ze = Kt = Qt = Yt = Zt = en = tn = nn = rn = on = an = sn = We = Ge = pn = Je = Ve = hn = mn = Xe = gn = ln = cn = un = dn = fn = bn = wn = yn = xn = vn = kn = $e = Ue = null, this) {
            "rebuild" !== i && (this[i] = null);
          }ye = !1;
        }, rebuild: function rebuild() {
          return O(i(e, X));
        } };
    }function En(e) {
      e && (Re = ze = $e = Ue = Oe = We = Ve = Xe = !1);
    }function _n() {
      for (var e = Q ? lt - Ze : lt; e < 0;) {
        e += me;
      }return e % me + 1;
    }function Cn(e) {
      return e = e ? Math.max(0, Math.min(Fe ? me - 1 : me - Be, e)) : 0, Q ? e + Ze : e;
    }function Tn(e) {
      for (null == e && (e = lt), Q && (e -= Ze); e < 0;) {
        e += me;
      }return Math.floor(e % me);
    }function Pn() {
      var e,
          t = Tn();return e = qt ? t : Ce || _e ? Math.ceil((t + 1) * Zt / me - 1) : Math.floor(t / Be), !Fe && Q && lt === dt && (e = Zt - 1), e;
    }function Ln() {
      return l.innerWidth || n.documentElement.clientWidth || n.body.clientWidth;
    }function Nn(e) {
      return "top" === e ? "afterbegin" : "beforeend";
    }function Bn() {
      var e = Te ? 2 * Te - Pe : 0;return function e(t) {
        var r,
            i,
            o = n.createElement("div");return t.appendChild(o), i = (r = o.getBoundingClientRect()).right - r.left, o.remove(), i || e(t.parentNode);
      }(fe) - e;
    }function Mn(t) {
      if (e[t]) return !0;if (Y) for (var n in Y) {
        if (Y[n][t]) return !0;
      }return !1;
    }function qn(t, n) {
      if (null == n && (n = ge), "items" === t && Ce) return Math.floor((Le + Pe) / (Ce + Pe)) || 1;var r = e[t];if (Y) for (var i in Y) {
        n >= parseInt(i) && t in Y[i] && (r = Y[i][t]);
      }return "slideBy" === t && "page" === r && (r = qn("items")), Q || "slideBy" !== t && "items" !== t || (r = Math.floor(r)), r;
    }function On(e, t, n, r, i) {
      var o = "";if (void 0 !== e) {
        var a = e;t && (a -= t), o = le ? "margin: 0 " + a + "px 0 " + e + "px;" : "margin: " + e + "px 0 " + a + "px 0;";
      } else if (t && !n) {
        var s = "-" + t + "px";o = "margin: 0 " + (le ? s + " 0 0" : "0 " + s + " 0") + ";";
      }return !Q && i && H && r && (o += Rn(r)), o;
    }function jn(e, t, n) {
      return e ? (e + t) * et + "px" : j ? j + "(" + 100 * et + "% / " + n + ")" : 100 * et / n + "%";
    }function Dn(e, t, n) {
      var r;if (e) r = e + t + "px";else {
        Q || (n = Math.floor(n));var i = Q ? et : n;r = j ? j + "(100% / " + i + ")" : 100 / i + "%";
      }return r = "width:" + r, "inner" !== K ? r + ";" : r + " !important;";
    }function Fn(e) {
      var t = "";!1 !== e && (t = (le ? "padding-" : "margin-") + (le ? "right" : "bottom") + ": " + e + "px;");return t;
    }function In(e, t) {
      var n = e.substring(0, e.length - t).toLowerCase();return n && (n = "-" + n + "-"), n;
    }function Rn(e) {
      return In(H, 18) + "transition-duration:" + e / 1e3 + "s;";
    }function Hn(e) {
      return In($, 17) + "animation-duration:" + e / 1e3 + "s;";
    }function zn() {
      if (Mn("autoHeight") || _e || !le) {
        var e = de.querySelectorAll("img");p(e, function (e) {
          var t = e.src;t && t.indexOf("data:image") < 0 ? (B(e, Rt), e.src = "", e.src = t, g(e, "loading")) : Ke || or(e);
        }), t(function () {
          cr(A(e), function () {
            be = !0;
          });
        }), !_e && le && (e = sr(lt, Math.min(lt + Be - 1, et - 1))), Ke ? $n() : t(function () {
          cr(A(e), $n);
        });
      } else Q && Er(), Wn(), Gn();
    }function $n() {
      if (_e) {
        var e = Fe ? lt : me - 1;!function t() {
          he[e - 1].getBoundingClientRect().right.toFixed(2) === he[e].getBoundingClientRect().left.toFixed(2) ? Un() : setTimeout(function () {
            t();
          }, 16);
        }();
      } else Un();
    }function Un() {
      le && !_e || (hr(), _e ? (nt = Ar(), kt && (At = Xn()), dt = st(), En(wt || At)) : Vr()), Q && Er(), Wn(), Gn();
    }function Wn() {
      if (mr(), ce.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + nr() + "</span>  of " + me + "</div>"), we = ce.querySelector(".tns-liveregion .current"), Ot) {
        var t = We ? "stop" : "start";hn ? x(hn, { "data-action": t }) : e.autoplayButtonOutput && (ce.insertAdjacentHTML(Nn(e.autoplayPosition), '<button data-action="' + t + '">' + gn[0] + t + gn[1] + Je[0] + "</button>"), hn = ce.querySelector("[data-action]")), hn && B(hn, { click: Fr }), We && (jr(), Ve && B(de, Ct), Xe && B(de, Tt));
      }if (Mt) {
        if (Kt) x(Kt, { "aria-label": "Carousel Pagination" }), p(Yt = Kt.children, function (e, t) {
          x(e, { "data-nav": t, tabindex: "-1", "aria-label": an + (t + 1), "aria-controls": bt });
        });else {
          for (var n = "", r = qt ? "" : 'style="display:none"', i = 0; i < me; i++) {
            n += '<button data-nav="' + i + '" tabindex="-1" aria-controls="' + bt + '" ' + r + ' aria-label="' + an + (i + 1) + '"></button>';
          }n = '<div class="tns-nav" aria-label="Carousel Pagination">' + n + "</div>", ce.insertAdjacentHTML(Nn(e.navPosition), n), Kt = ce.querySelector(".tns-nav"), Yt = Kt.children;
        }if (Yr(), H) {
          var o = H.substring(0, H.length - 18).toLowerCase(),
              a = "transition: all " + je / 1e3 + "s";o && (a = "-" + o + "-" + a), d(Ye, "[aria-controls^=" + bt + "-item]", a, f(Ye));
        }x(Yt[nn], { "aria-label": an + (nn + 1) + sn }), k(Yt[nn], "tabindex"), g(Yt[nn], on), B(Kt, _t);
      }Bt && (Ut || Gt && Jt || (ce.insertAdjacentHTML(Nn(e.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' + bt + '">' + He[0] + '</button><button data-controls="next" tabindex="-1" aria-controls="' + bt + '">' + He[1] + "</button></div>"), Ut = ce.querySelector(".tns-controls")), Gt && Jt || (Gt = Ut.children[0], Jt = Ut.children[1]), e.controlsContainer && x(Ut, { "aria-label": "Carousel Navigation", tabindex: "0" }), (e.controlsContainer || e.prevButton && e.nextButton) && x([Gt, Jt], { "aria-controls": bt, tabindex: "-1" }), (e.controlsContainer || e.prevButton && e.nextButton) && (x(Gt, { "data-controls": "prev" }), x(Jt, { "data-controls": "next" })), zt = yr(Gt), $t = yr(Jt), wr(), Ut ? B(Ut, Et) : (B(Gt, Et), B(Jt, Et))), Kn();
    }function Gn() {
      if (Q && W) {
        var t = {};t[W] = Lr, B(de, t);
      }$e && B(de, Lt, e.preventScrollOnTouch), Ue && B(de, Nt), Oe && B(n, Pt), "inner" === K ? yt.on("outerResized", function () {
        Vn(), yt.emit("innerLoaded", Kr());
      }) : (Y || Ce || _e || Ie || !le) && B(l, { resize: Jn }), Ie && ("outer" === K ? yt.on("innerLoaded", lr) : wt || lr()), ir(), wt ? er() : At && Zn(), yt.on("indexChanged", ur), "inner" === K && yt.emit("innerLoaded", Kr()), "function" == typeof gt && gt(Kr()), ye = !0;
    }function Jn(e) {
      t(function () {
        Vn(Rr(e));
      });
    }function Vn(t) {
      if (ye) {
        "outer" === K && yt.emit("outerResized", Kr(t)), ge = Ln();var r,
            i = se,
            o = !1;Y && (Yn(), (r = i !== se) && yt.emit("newBreakpointStart", Kr(t)));var a,
            s,
            l = Be,
            c = wt,
            u = At,
            h = Oe,
            m = Re,
            v = ze,
            b = $e,
            w = Ue,
            x = We,
            k = Ve,
            A = Xe,
            _ = lt;if (r) {
          var C = Ce,
              T = Ie,
              P = He,
              L = Ne,
              N = Je;if (!F) var q = Pe,
              O = Te;
        }if (Oe = qn("arrowKeys"), Re = qn("controls"), ze = qn("nav"), $e = qn("touch"), Ne = qn("center"), Ue = qn("mouseDrag"), We = qn("autoplay"), Ve = qn("autoplayHoverPause"), Xe = qn("autoplayResetOnVisibility"), r && (wt = qn("disable"), Ce = qn("fixedWidth"), je = qn("speed"), Ie = qn("autoHeight"), He = qn("controlsText"), Je = qn("autoplayText"), Ge = qn("autoplayTimeout"), F || (Te = qn("edgePadding"), Pe = qn("gutter"))), En(wt), Le = Bn(), le && !_e || wt || (hr(), le || (Vr(), o = !0)), (Ce || _e) && (nt = Ar(), dt = st()), (r || Ce) && (Be = qn("items"), Me = qn("slideBy"), (s = Be !== l) && (Ce || _e || (dt = st()), An())), r && wt !== c && (wt ? er() : function () {
          if (!xt) return;if (Ye.disabled = !1, de.className += vt, Er(), Fe) for (var e = Ze; e--;) {
            Q && E(he[e]), E(he[et - e - 1]);
          }if (!Q) for (var t = lt, n = lt + me; t < n; t++) {
            var r = he[t],
                i = t < lt + Be ? ne : oe;r.style.left = 100 * (t - lt) / Be + "%", g(r, i);
          }Qn(), xt = !1;
        }()), kt && (r || Ce || _e) && (At = Xn()) !== u && (At ? (_r(Sr(Cn(0))), Zn()) : (!function () {
          if (!St) return;Te && F && (ue.style.margin = "");if (Ze) for (var e = "tns-transparent", t = Ze; t--;) {
            Q && y(he[t], e), y(he[et - t - 1], e);
          }Qn(), St = !1;
        }(), o = !0)), En(wt || At), We || (Ve = Xe = !1), Oe !== h && (Oe ? B(n, Pt) : M(n, Pt)), Re !== m && (Re ? Ut ? E(Ut) : (Gt && E(Gt), Jt && E(Jt)) : Ut ? S(Ut) : (Gt && S(Gt), Jt && S(Jt))), ze !== v && (ze ? E(Kt) : S(Kt)), $e !== b && ($e ? B(de, Lt, e.preventScrollOnTouch) : M(de, Lt)), Ue !== w && (Ue ? B(de, Nt) : M(de, Nt)), We !== x && (We ? (hn && E(hn), cn || dn || jr()) : (hn && S(hn), cn && Dr())), Ve !== k && (Ve ? B(de, Ct) : M(de, Ct)), Xe !== A && (Xe ? B(n, Tt) : M(n, Tt)), r) {
          if (Ce === C && Ne === L || (o = !0), Ie !== T && (Ie || (ue.style.height = "")), Re && He !== P && (Gt.innerHTML = He[0], Jt.innerHTML = He[1]), hn && Je !== N) {
            var j = We ? 1 : 0,
                D = hn.innerHTML,
                I = D.length - N[j].length;D.substring(I) === N[j] && (hn.innerHTML = D.substring(0, I) + Je[j]);
          }
        } else Ne && (Ce || _e) && (o = !0);if ((s || Ce && !_e) && (Zt = Xr(), Yr()), (a = lt !== _) ? (yt.emit("indexChanged", Kr()), o = !0) : s ? a || ur() : (Ce || _e) && (ir(), mr(), tr()), s && !Q && function () {
          for (var e = lt + Math.min(me, Be), t = et; t--;) {
            var n = he[t];t >= lt && t < e ? (g(n, "tns-moving"), n.style.left = 100 * (t - lt) / Be + "%", g(n, ne), y(n, oe)) : n.style.left && (n.style.left = "", g(n, oe), y(n, ne)), y(n, re);
          }setTimeout(function () {
            p(he, function (e) {
              y(e, "tns-moving");
            });
          }, 300);
        }(), !wt && !At) {
          if (r && !F && (Ie === autoheightTem && je === speedTem || dr(), Te === O && Pe === q || (ue.style.cssText = On(Te, Pe, Ce, je, Ie)), le)) {
            Q && (de.style.width = jn(Ce, Pe, Be));var R = Dn(Ce, Pe, Be) + Fn(Pe);!function (e, t) {
              "deleteRule" in e ? e.deleteRule(t) : e.removeRule(t);
            }(Ye, f(Ye) - 1), d(Ye, "#" + bt + " > .tns-item", R, f(Ye));
          }Ie && lr(), o && (Er(), ct = lt);
        }r && yt.emit("newBreakpointEnd", Kr(t));
      }
    }function Xn() {
      if (!Ce && !_e) return me <= (Ne ? Be - (Be - 1) / 2 : Be);var e = Ce ? (Ce + Pe) * me : ve[me],
          t = Te ? Le + 2 * Te : Le + Pe;return Ne && (t -= Ce ? (Le - Ce) / 2 : (Le - (ve[lt + 1] - ve[lt] - Pe)) / 2), e <= t;
    }function Yn() {
      for (var e in se = 0, Y) {
        e = parseInt(e), ge >= e && (se = e);
      }
    }function Kn() {
      !We && hn && S(hn), !ze && Kt && S(Kt), Re || (Ut ? S(Ut) : (Gt && S(Gt), Jt && S(Jt)));
    }function Qn() {
      We && hn && E(hn), ze && Kt && E(Kt), Re && (Ut ? E(Ut) : (Gt && E(Gt), Jt && E(Jt)));
    }function Zn() {
      if (!St) {
        if (Te && (ue.style.margin = "0px"), Ze) for (var e = "tns-transparent", t = Ze; t--;) {
          Q && g(he[t], e), g(he[et - t - 1], e);
        }Kn(), St = !0;
      }
    }function er() {
      if (!xt) {
        if (Ye.disabled = !0, de.className = de.className.replace(vt.substring(1), ""), k(de, ["style"]), Fe) for (var e = Ze; e--;) {
          Q && S(he[e]), S(he[et - e - 1]);
        }if (le && Q || k(ue, ["style"]), !Q) for (var t = lt, n = lt + me; t < n; t++) {
          var r = he[t];k(r, ["style"]), y(r, ne), y(r, oe);
        }Kn(), xt = !0;
      }
    }function tr() {
      var e = nr();we.innerHTML !== e && (we.innerHTML = e);
    }function nr() {
      var e = rr(),
          t = e[0] + 1,
          n = e[1] + 1;return t === n ? t + "" : t + " to " + n;
    }function rr(e) {
      null == e && (e = Sr());var t,
          n,
          r,
          i = lt;if (Ne || Te ? (_e || Ce) && (n = -(parseFloat(e) + Te), r = n + Le + 2 * Te) : _e && (n = ve[lt], r = n + Le), _e) ve.forEach(function (e, o) {
        o < et && ((Ne || Te) && e <= n + .5 && (i = o), r - e >= .5 && (t = o));
      });else {
        if (Ce) {
          var o = Ce + Pe;Ne || Te ? (i = Math.floor(n / o), t = Math.ceil(r / o - 1)) : t = i + Math.ceil(Le / o) - 1;
        } else if (Ne || Te) {
          var a = Be - 1;if (Ne ? (i -= a / 2, t = lt + a / 2) : t = lt + a, Te) {
            var s = Te * Be / Le;i -= s, t += s;
          }i = Math.floor(i), t = Math.ceil(t);
        } else t = i + Be - 1;i = Math.max(i, 0), t = Math.min(t, et - 1);
      }return [i, t];
    }function ir() {
      Ke && !wt && sr.apply(null, rr()).forEach(function (e) {
        if (!m(e, It)) {
          var t = {};t[W] = function (e) {
            e.stopPropagation();
          }, B(e, t), B(e, Rt), e.src = b(e, "data-src");var n = b(e, "data-srcset");n && (e.srcset = n), g(e, "loading");
        }
      });
    }function or(e) {
      g(e, "loaded"), ar(e);
    }function ar(e) {
      g(e, "tns-complete"), y(e, "loading"), M(e, Rt);
    }function sr(e, t) {
      for (var n = []; e <= t;) {
        p(he[e].querySelectorAll("img"), function (e) {
          n.push(e);
        }), e++;
      }return n;
    }function lr() {
      var e = sr.apply(null, rr());t(function () {
        cr(e, pr);
      });
    }function cr(e, n) {
      return be ? n() : (e.forEach(function (t, n) {
        m(t, It) && e.splice(n, 1);
      }), e.length ? void t(function () {
        cr(e, n);
      }) : n());
    }function ur() {
      ir(), mr(), tr(), wr(), function () {
        if (ze && (nn = tn >= 0 ? tn : Pn(), tn = -1, nn !== rn)) {
          var e = Yt[rn],
              t = Yt[nn];x(e, { tabindex: "-1", "aria-label": an + (rn + 1) }), y(e, on), x(t, { "aria-label": an + (nn + 1) + sn }), k(t, "tabindex"), g(t, on), rn = nn;
        }
      }();
    }function dr() {
      Q && Ie && (ae.style[H] = je / 1e3 + "s");
    }function fr(e, t) {
      for (var n = [], r = e, i = Math.min(e + t, et); r < i; r++) {
        n.push(he[r].offsetHeight);
      }return Math.max.apply(null, n);
    }function pr() {
      var e = Ie ? fr(lt, Be) : fr(Ze, me),
          t = ae || ue;t.style.height !== e && (t.style.height = e + "px");
    }function hr() {
      ve = [0];var e = le ? "left" : "top",
          t = le ? "right" : "bottom",
          n = he[0].getBoundingClientRect()[e];p(he, function (r, i) {
        i && ve.push(r.getBoundingClientRect()[e] - n), i === et - 1 && ve.push(r.getBoundingClientRect()[t] - n);
      });
    }function mr() {
      var e = rr(),
          t = e[0],
          n = e[1];p(he, function (e, r) {
        r >= t && r <= n ? v(e, "aria-hidden") && (k(e, ["aria-hidden", "tabindex"]), g(e, Ft)) : v(e, "aria-hidden") || (x(e, { "aria-hidden": "true", tabindex: "-1" }), y(e, Ft));
      });
    }function gr(e) {
      return e.nodeName.toLowerCase();
    }function yr(e) {
      return "button" === gr(e);
    }function vr(e) {
      return "true" === e.getAttribute("aria-disabled");
    }function br(e, t, n) {
      e ? t.disabled = n : t.setAttribute("aria-disabled", n.toString());
    }function wr() {
      if (Re && !De && !Fe) {
        var e = zt ? Gt.disabled : vr(Gt),
            t = $t ? Jt.disabled : vr(Jt),
            n = lt <= ut,
            r = !De && lt >= dt;n && !e && br(zt, Gt, !0), !n && e && br(zt, Gt, !1), r && !t && br($t, Jt, !0), !r && t && br($t, Jt, !1);
      }
    }function xr(e, t) {
      H && (e.style[H] = t);
    }function kr(e) {
      return null == e && (e = lt), _e ? (Le - (Te ? Pe : 0) - (ve[e + 1] - ve[e] - Pe)) / 2 : Ce ? (Le - Ce) / 2 : (Be - 1) / 2;
    }function Ar() {
      var e = Le + (Te ? Pe : 0) - (Ce ? (Ce + Pe) * et : ve[et]);return Ne && !Fe && (e = Ce ? -(Ce + Pe) * (et - 1) - kr() : kr(et - 1) - ve[et - 1]), e > 0 && (e = 0), e;
    }function Sr(e) {
      var t;if (null == e && (e = lt), le && !_e) {
        if (Ce) t = -(Ce + Pe) * e, Ne && (t += kr());else {
          var n = I ? et : Be;Ne && (e -= kr()), t = 100 * -e / n;
        }
      } else t = -ve[e], Ne && _e && (t += kr());return tt && (t = Math.max(t, nt)), t += !le || _e || Ce ? "px" : "%";
    }function Er(e) {
      xr(de, "0s"), _r(e);
    }function _r(e) {
      null == e && (e = Sr()), de.style[it] = ot + e + at;
    }function Cr(e, t, n, r) {
      var i = e + Be;Fe || (i = Math.min(i, et));for (var o = e; o < i; o++) {
        var a = he[o];r || (a.style.left = 100 * (o - lt) / Be + "%"), ie && z && (a.style[z] = a.style[U] = ie * (o - e) / 1e3 + "s"), y(a, t), g(a, n), r && Qe.push(a);
      }
    }function Tr(e, t) {
      rt && An(), (lt !== ct || t) && (yt.emit("indexChanged", Kr()), yt.emit("transitionStart", Kr()), Ie && lr(), cn && e && ["click", "keydown"].indexOf(e.type) >= 0 && Dr(), mt = !0, Sn());
    }function Pr(e) {
      return e.toLowerCase().replace(/-/g, "");
    }function Lr(e) {
      if (Q || mt) {
        if (yt.emit("transitionEnd", Kr(e)), !Q && Qe.length > 0) for (var t = 0; t < Qe.length; t++) {
          var n = Qe[t];n.style.left = "", U && z && (n.style[U] = "", n.style[z] = ""), y(n, re), g(n, oe);
        }if (!e || !Q && e.target.parentNode === de || e.target === de && Pr(e.propertyName) === Pr(it)) {
          if (!rt) {
            var r = lt;An(), lt !== r && (yt.emit("indexChanged", Kr()), Er());
          }"inner" === K && yt.emit("innerLoaded", Kr()), mt = !1, ct = lt;
        }
      }
    }function Nr(e, t) {
      if (!At) if ("prev" === e) Br(t, -1);else if ("next" === e) Br(t, 1);else {
        if (mt) {
          if (ft) return;Lr();
        }var n = Tn(),
            r = 0;if ("first" === e ? r = -n : "last" === e ? r = Q ? me - Be - n : me - 1 - n : ("number" != typeof e && (e = parseInt(e)), isNaN(e) || (t || (e = Math.max(0, Math.min(me - 1, e))), r = e - n)), !Q && r && Math.abs(r) < Be) {
          var i = r > 0 ? 1 : -1;r += lt + r - me >= ut ? me * i : 2 * me * i * -1;
        }lt += r, Q && Fe && (lt < ut && (lt += me), lt > dt && (lt -= me)), Tn(lt) !== Tn(ct) && Tr(t);
      }
    }function Br(e, t) {
      if (mt) {
        if (ft) return;Lr();
      }var n;if (!t) {
        for (var r = Hr(e = Rr(e)); r !== Ut && [Gt, Jt].indexOf(r) < 0;) {
          r = r.parentNode;
        }var i = [Gt, Jt].indexOf(r);i >= 0 && (n = !0, t = 0 === i ? -1 : 1);
      }if (De) {
        if (lt === ut && -1 === t) return void Nr("last", e);if (lt === dt && 1 === t) return void Nr("first", e);
      }t && (lt += Me * t, _e && (lt = Math.floor(lt)), Tr(n || e && "keydown" === e.type ? e : null));
    }function Mr() {
      ln = setInterval(function () {
        Br(null, pn);
      }, Ge), cn = !0;
    }function qr() {
      clearInterval(ln), cn = !1;
    }function Or(e, t) {
      x(hn, { "data-action": e }), hn.innerHTML = gn[0] + e + gn[1] + t;
    }function jr() {
      Mr(), hn && Or("stop", Je[1]);
    }function Dr() {
      qr(), hn && Or("start", Je[0]);
    }function Fr() {
      cn ? (Dr(), dn = !0) : (jr(), dn = !1);
    }function Ir(e) {
      e.focus();
    }function Rr(e) {
      return zr(e = e || l.event) ? e.changedTouches[0] : e;
    }function Hr(e) {
      return e.target || l.event.srcElement;
    }function zr(e) {
      return e.type.indexOf("touch") >= 0;
    }function $r(e) {
      e.preventDefault ? e.preventDefault() : e.returnValue = !1;
    }function Ur() {
      return o = wn.y - bn.y, a = wn.x - bn.x, t = Math.atan2(o, a) * (180 / Math.PI), n = pt, r = !1, (i = Math.abs(90 - Math.abs(t))) >= 90 - n ? r = "horizontal" : i <= n && (r = "vertical"), r === e.axis;var t, n, r, i, o, a;
    }function Wr(e) {
      if (mt) {
        if (ft) return;Lr();
      }We && cn && qr(), xn = !0, vn && (r(vn), vn = null);var t = Rr(e);yt.emit(zr(e) ? "touchStart" : "dragStart", Kr(e)), !zr(e) && ["img", "a"].indexOf(gr(Hr(e))) >= 0 && $r(e), wn.x = bn.x = t.clientX, wn.y = bn.y = t.clientY, Q && (yn = parseFloat(de.style[it].replace(ot, "")), xr(de, "0s"));
    }function Gr(e) {
      if (xn) {
        var n = Rr(e);wn.x = n.clientX, wn.y = n.clientY, Q ? vn || (vn = t(function () {
          !function e(n) {
            if (!ht) return void (xn = !1);r(vn);xn && (vn = t(function () {
              e(n);
            }));"?" === ht && (ht = Ur());if (ht) {
              !Ht && zr(n) && (Ht = !0);try {
                n.type && yt.emit(zr(n) ? "touchMove" : "dragMove", Kr(n));
              } catch (e) {}var i = yn,
                  o = kn(wn, bn);if (!le || Ce || _e) i += o, i += "px";else {
                var a = I ? o * Be * 100 / ((Le + Pe) * et) : 100 * o / (Le + Pe);i += a, i += "%";
              }de.style[it] = ot + i + at;
            }
          }(e);
        })) : ("?" === ht && (ht = Ur()), ht && (Ht = !0)), Ht && e.preventDefault();
      }
    }function Jr(n) {
      if (xn) {
        vn && (r(vn), vn = null), Q && xr(de, ""), xn = !1;var i = Rr(n);wn.x = i.clientX, wn.y = i.clientY;var o = kn(wn, bn);if (Math.abs(o)) {
          if (!zr(n)) {
            var a = Hr(n);B(a, { click: function e(t) {
                $r(t), M(a, { click: e });
              } });
          }Q ? vn = t(function () {
            if (le && !_e) {
              var e = -o * Be / (Le + Pe);e = o > 0 ? Math.floor(e) : Math.ceil(e), lt += e;
            } else {
              var t = -(yn + o);if (t <= 0) lt = ut;else if (t >= ve[et - 1]) lt = dt;else for (var r = 0; r < et && t >= ve[r];) {
                lt = r, t > ve[r] && o < 0 && (lt += 1), r++;
              }
            }Tr(n, o), yt.emit(zr(n) ? "touchEnd" : "dragEnd", Kr(n));
          }) : ht && Br(n, o > 0 ? -1 : 1);
        }
      }"auto" === e.preventScrollOnTouch && (Ht = !1), pt && (ht = "?"), We && !cn && Mr();
    }function Vr() {
      (ae || ue).style.height = ve[lt + Be] - ve[lt] + "px";
    }function Xr() {
      var e = Ce ? (Ce + Pe) * me / Le : me / Be;return Math.min(Math.ceil(e), me);
    }function Yr() {
      if (ze && !qt && Zt !== en) {
        var e = en,
            t = Zt,
            n = E;for (en > Zt && (e = Zt, t = en, n = S); e < t;) {
          n(Yt[e]), e++;
        }en = Zt;
      }
    }function Kr(e) {
      return { container: de, slideItems: he, navContainer: Kt, navItems: Yt, controlsContainer: Ut, hasControls: Bt, prevButton: Gt, nextButton: Jt, items: Be, slideBy: Me, cloneCount: Ze, slideCount: me, slideCountNew: et, index: lt, indexCached: ct, displayIndex: _n(), navCurrentIndex: nn, navCurrentIndexCached: rn, pages: Zt, pagesCached: en, sheet: Ye, isOn: ye, event: e || {} };
    }J && console.warn("No slides found in", e.container);
  };return O;
}(),
    _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function () {
  var e = /\blang(?:uage)?-(\w+)\b/i,
      t = 0,
      n = _self.Prism = { manual: _self.Prism && _self.Prism.manual, disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler, util: { encode: function encode(e) {
        return e instanceof r ? new r(e.type, n.util.encode(e.content), e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
      }, type: function type(e) {
        return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1];
      }, objId: function objId(e) {
        return e.__id || Object.defineProperty(e, "__id", { value: ++t }), e.__id;
      }, clone: function clone(e) {
        switch (n.util.type(e)) {case "Object":
            var t = {};for (var r in e) {
              e.hasOwnProperty(r) && (t[r] = n.util.clone(e[r]));
            }return t;case "Array":
            return e.map(function (e) {
              return n.util.clone(e);
            });}return e;
      } }, languages: { extend: function extend(e, t) {
        var r = n.util.clone(n.languages[e]);for (var i in t) {
          r[i] = t[i];
        }return r;
      }, insertBefore: function insertBefore(e, t, r, i) {
        var o = (i = i || n.languages)[e];if (2 == arguments.length) {
          for (var a in r = arguments[1]) {
            r.hasOwnProperty(a) && (o[a] = r[a]);
          }return o;
        }var s = {};for (var l in o) {
          if (o.hasOwnProperty(l)) {
            if (l == t) for (var a in r) {
              r.hasOwnProperty(a) && (s[a] = r[a]);
            }s[l] = o[l];
          }
        }return n.languages.DFS(n.languages, function (t, n) {
          n === i[e] && t != e && (this[t] = s);
        }), i[e] = s;
      }, DFS: function DFS(e, t, r, i) {
        for (var o in i = i || {}, e) {
          e.hasOwnProperty(o) && (t.call(e, o, e[o], r || o), "Object" !== n.util.type(e[o]) || i[n.util.objId(e[o])] ? "Array" !== n.util.type(e[o]) || i[n.util.objId(e[o])] || (i[n.util.objId(e[o])] = !0, n.languages.DFS(e[o], t, o, i)) : (i[n.util.objId(e[o])] = !0, n.languages.DFS(e[o], t, null, i)));
        }
      } }, plugins: {}, highlightAll: function highlightAll(e, t) {
      n.highlightAllUnder(document, e, t);
    }, highlightAllUnder: function highlightAllUnder(e, t, r) {
      var i = { callback: r, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };n.hooks.run("before-highlightall", i);for (var o, a = i.elements || e.querySelectorAll(i.selector), s = 0; o = a[s++];) {
        n.highlightElement(o, !0 === t, i.callback);
      }
    }, highlightElement: function highlightElement(t, r, i) {
      for (var o, a, s = t; s && !e.test(s.className);) {
        s = s.parentNode;
      }s && (o = (s.className.match(e) || [, ""])[1].toLowerCase(), a = n.languages[o]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o, t.parentNode && (s = t.parentNode, /pre/i.test(s.nodeName) && (s.className = s.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o));var l = { element: t, language: o, grammar: a, code: t.textContent };if (n.hooks.run("before-sanity-check", l), !l.code || !l.grammar) return l.code && (n.hooks.run("before-highlight", l), l.element.textContent = l.code, n.hooks.run("after-highlight", l)), void n.hooks.run("complete", l);if (n.hooks.run("before-highlight", l), r && _self.Worker) {
        var c = new Worker(n.filename);c.onmessage = function (e) {
          l.highlightedCode = e.data, n.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, i && i.call(l.element), n.hooks.run("after-highlight", l), n.hooks.run("complete", l);
        }, c.postMessage(JSON.stringify({ language: l.language, code: l.code, immediateClose: !0 }));
      } else l.highlightedCode = n.highlight(l.code, l.grammar, l.language), n.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, i && i.call(t), n.hooks.run("after-highlight", l), n.hooks.run("complete", l);
    }, highlight: function highlight(e, t, i) {
      var o = n.tokenize(e, t);return r.stringify(n.util.encode(o), i);
    }, matchGrammar: function matchGrammar(e, t, r, i, o, a, s) {
      var l = n.Token;for (var c in r) {
        if (r.hasOwnProperty(c) && r[c]) {
          if (c == s) return;var u = r[c];u = "Array" === n.util.type(u) ? u : [u];for (var d = 0; d < u.length; ++d) {
            var f = u[d],
                p = f.inside,
                h = !!f.lookbehind,
                m = !!f.greedy,
                g = 0,
                y = f.alias;if (m && !f.pattern.global) {
              var v = f.pattern.toString().match(/[imuy]*$/)[0];f.pattern = RegExp(f.pattern.source, v + "g");
            }f = f.pattern || f;for (var b = i, w = o; b < t.length; w += t[b].length, ++b) {
              var x = t[b];if (t.length > e.length) return;if (!(x instanceof l)) {
                f.lastIndex = 0;var k = 1;if (!(T = f.exec(x)) && m && b != t.length - 1) {
                  if (f.lastIndex = w, !(T = f.exec(e))) break;for (var A = T.index + (h ? T[1].length : 0), S = T.index + T[0].length, E = b, _ = w, C = t.length; C > E && (S > _ || !t[E].type && !t[E - 1].greedy); ++E) {
                    A >= (_ += t[E].length) && (++b, w = _);
                  }if (t[b] instanceof l || t[E - 1].greedy) continue;k = E - b, x = e.slice(w, _), T.index -= w;
                }if (T) {
                  h && (g = T[1].length);S = (A = T.index + g) + (T = T[0].slice(g)).length;var T,
                      P = x.slice(0, A),
                      L = x.slice(S),
                      N = [b, k];P && (++b, w += P.length, N.push(P));var B = new l(c, p ? n.tokenize(T, p) : T, y, T, m);if (N.push(B), L && N.push(L), Array.prototype.splice.apply(t, N), 1 != k && n.matchGrammar(e, t, r, b, w, !0, c), a) break;
                } else if (a) break;
              }
            }
          }
        }
      }
    }, tokenize: function tokenize(e, t) {
      var r = [e],
          i = t.rest;if (i) {
        for (var o in i) {
          t[o] = i[o];
        }delete t.rest;
      }return n.matchGrammar(e, r, t, 0, 0, !1), r;
    }, hooks: { all: {}, add: function add(e, t) {
        var r = n.hooks.all;r[e] = r[e] || [], r[e].push(t);
      }, run: function run(e, t) {
        var r = n.hooks.all[e];if (r && r.length) for (var i, o = 0; i = r[o++];) {
          i(t);
        }
      } } },
      r = n.Token = function (e, t, n, r, i) {
    this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length, this.greedy = !!i;
  };if (r.stringify = function (e, t, i) {
    if ("string" == typeof e) return e;if ("Array" === n.util.type(e)) return e.map(function (n) {
      return r.stringify(n, t, e);
    }).join("");var o = { type: e.type, content: r.stringify(e.content, t, i), tag: "span", classes: ["token", e.type], attributes: {}, language: t, parent: i };if (e.alias) {
      var a = "Array" === n.util.type(e.alias) ? e.alias : [e.alias];Array.prototype.push.apply(o.classes, a);
    }n.hooks.run("wrap", o);var s = Object.keys(o.attributes).map(function (e) {
      return e + '="' + (o.attributes[e] || "").replace(/"/g, "&quot;") + '"';
    }).join(" ");return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + (s ? " " + s : "") + ">" + o.content + "</" + o.tag + ">";
  }, !_self.document) return _self.addEventListener ? (n.disableWorkerMessageHandler || _self.addEventListener("message", function (e) {
    var t = JSON.parse(e.data),
        r = t.language,
        i = t.code,
        o = t.immediateClose;_self.postMessage(n.highlight(i, n.languages[r], r)), o && _self.close();
  }, !1), _self.Prism) : _self.Prism;var i = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();return i && (n.filename = i.src, n.manual || i.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n.highlightAll) : window.setTimeout(n.highlightAll, 16) : document.addEventListener("DOMContentLoaded", n.highlightAll))), _self.Prism;
}();"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = { comment: /<!--[\s\S]*?-->/, prolog: /<\?[\s\S]+?\?>/, doctype: /<!DOCTYPE[\s\S]+?>/i, cdata: /<!\[CDATA\[[\s\S]*?]]>/i, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i, inside: { tag: { pattern: /^<\/?[^\s>\/]+/i, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "attr-value": { pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i, inside: { punctuation: [/^=/, { pattern: /(^|[^\\])["']/, lookbehind: !0 }] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: /&#?[\da-z]{1,8};/i }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add("wrap", function (e) {
  "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i, inside: { rule: /@[\w-]+/ } }, url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i, selector: /[^{}\s][^{};]*?(?=\s*\{)/, string: { pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i, important: /\B!important\b/i, function: /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:]/ }, Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css), Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", { style: { pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i, lookbehind: !0, inside: Prism.languages.css, alias: "language-css", greedy: !0 } }), Prism.languages.insertBefore("inside", "attr-value", { "style-attr": { pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i, inside: { "attr-name": { pattern: /^\s*style/i, inside: Prism.languages.markup.tag.inside }, punctuation: /^\s*=\s*['"]|['"]\s*$/, "attr-value": { pattern: /.+/i, inside: Prism.languages.css } }, alias: "language-css" } }, Prism.languages.markup.tag)), Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /[a-z0-9_]+(?=\()/i, number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ }, Prism.languages.javascript = Prism.languages.extend("clike", { keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/, number: /\b-?(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+(?:[Ee][+-]?\d+)?|NaN|Infinity)\b/, function: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ }), Prism.languages.insertBefore("javascript", "keyword", { regex: { pattern: /(^|[^\/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/, lookbehind: !0, greedy: !0 }, "function-variable": { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i, alias: "function" } }), Prism.languages.insertBefore("javascript", "string", { "template-string": { pattern: /`(?:\\[\s\S]|[^\\`])*`/, greedy: !0, inside: { interpolation: { pattern: /\$\{[^}]+\}/, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ } } }), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", { script: { pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i, lookbehind: !0, inside: Prism.languages.javascript, alias: "language-javascript", greedy: !0 } }), Prism.languages.js = Prism.languages.javascript, Prism.languages.php = Prism.languages.extend("clike", { string: { pattern: /(["'])(?:\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 }, keyword: /\b(?:and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i, constant: /\b[A-Z0-9_]{2,}\b/, comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 } }), Prism.languages.insertBefore("php", "class-name", { "shell-comment": { pattern: /(^|[^\\])#.*/, lookbehind: !0, alias: "comment" } }), Prism.languages.insertBefore("php", "keyword", { delimiter: { pattern: /\?>|<\?(?:php|=)?/i, alias: "important" }, variable: /\$\w+\b/i, package: { pattern: /(\\|namespace\s+|use\s+)[\w\\]+/, lookbehind: !0, inside: { punctuation: /\\/ } } }), Prism.languages.insertBefore("php", "operator", { property: { pattern: /(->)[\w]+/, lookbehind: !0 } }), Prism.languages.markup && (Prism.hooks.add("before-highlight", function (e) {
  "php" === e.language && /(?:<\?php|<\?)/gi.test(e.code) && (e.tokenStack = [], e.backupCode = e.code, e.code = e.code.replace(/(?:<\?php|<\?)[\s\S]*?(?:\?>|$)/gi, function (t) {
    for (var n = e.tokenStack.length; -1 !== e.backupCode.indexOf("___PHP" + n + "___");) {
      ++n;
    }return e.tokenStack[n] = t, "___PHP" + n + "___";
  }), e.grammar = Prism.languages.markup);
}), Prism.hooks.add("before-insert", function (e) {
  "php" === e.language && e.backupCode && (e.code = e.backupCode, delete e.backupCode);
}), Prism.hooks.add("after-highlight", function (e) {
  if ("php" === e.language && e.tokenStack) {
    e.grammar = Prism.languages.php;for (var t = 0, n = Object.keys(e.tokenStack); t < n.length; ++t) {
      var r = n[t],
          i = e.tokenStack[r];e.highlightedCode = e.highlightedCode.replace("___PHP" + r + "___", '<span class="token php language-php">' + Prism.highlight(i, e.grammar, "php").replace(/\$/g, "$$$$") + "</span>");
    }e.element.innerHTML = e.highlightedCode;
  }
})), function (e) {
  e.languages.sass = e.languages.extend("css", { comment: { pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m, lookbehind: !0 } }), e.languages.insertBefore("sass", "atrule", { "atrule-line": { pattern: /^(?:[ \t]*)[@+=].+/m, inside: { atrule: /(?:@[\w-]+|[+=])/m } } }), delete e.languages.sass.atrule;var t = /\$[-\w]+|#\{\$[-\w]+\}/,
      n = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, { pattern: /(\s+)-(?=\s)/, lookbehind: !0 }];e.languages.insertBefore("sass", "property", { "variable-line": { pattern: /^[ \t]*\$.+/m, inside: { punctuation: /:/, variable: t, operator: n } }, "property-line": { pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m, inside: { property: [/[^:\s]+(?=\s*:)/, { pattern: /(:)[^:\s]+/, lookbehind: !0 }], punctuation: /:/, variable: t, operator: n, important: e.languages.sass.important } } }), delete e.languages.sass.property, delete e.languages.sass.important, delete e.languages.sass.selector, e.languages.insertBefore("sass", "punctuation", { selector: { pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/, lookbehind: !0 } });
}(Prism), Prism.languages.scss = Prism.languages.extend("css", { comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 }, atrule: { pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/, inside: { rule: /@[\w-]+/ } }, url: /(?:[-a-z]+-)*url(?=\()/i, selector: { pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m, inside: { parent: { pattern: /&/, alias: "important" }, placeholder: /%[-\w]+/, variable: /\$[-\w]+|#\{\$[-\w]+\}/ } } }), Prism.languages.insertBefore("scss", "atrule", { keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 }] }), Prism.languages.scss.property = { pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i, inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ } }, Prism.languages.insertBefore("scss", "important", { variable: /\$[-\w]+|#\{\$[-\w]+\}/ }), Prism.languages.insertBefore("scss", "function", { placeholder: { pattern: /%[-\w]+/, alias: "selector" }, statement: { pattern: /\B!(?:default|optional)\b/i, alias: "keyword" }, boolean: /\b(?:true|false)\b/, null: /\bnull\b/, operator: { pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/, lookbehind: !0 } }), Prism.languages.scss.atrule.inside.rest = Prism.util.clone(Prism.languages.scss), function () {
  if ("undefined" != typeof self && self.Prism && self.document) {
    var e = "line-numbers",
        t = /\n(?!$)/g,
        n = function n(e) {
      var n = r(e)["white-space"];if ("pre-wrap" === n || "pre-line" === n) {
        var i = e.querySelector("code"),
            o = e.querySelector(".line-numbers-rows"),
            a = e.querySelector(".line-numbers-sizer"),
            s = i.textContent.split(t);a || ((a = document.createElement("span")).className = "line-numbers-sizer", i.appendChild(a)), a.style.display = "block", s.forEach(function (e, t) {
          a.textContent = e || "\n";var n = a.getBoundingClientRect().height;o.children[t].style.height = n + "px";
        }), a.textContent = "", a.style.display = "none";
      }
    },
        r = function r(e) {
      return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null;
    };window.addEventListener("resize", function () {
      Array.prototype.forEach.call(document.querySelectorAll("pre." + e), n);
    }), Prism.hooks.add("complete", function (e) {
      if (e.code) {
        var r = e.element.parentNode,
            i = /\s*\bline-numbers\b\s*/;if (r && /pre/i.test(r.nodeName) && (i.test(r.className) || i.test(e.element.className)) && !e.element.querySelector(".line-numbers-rows")) {
          i.test(e.element.className) && (e.element.className = e.element.className.replace(i, " ")), i.test(r.className) || (r.className += " line-numbers");var o,
              a = e.code.match(t),
              s = a ? a.length + 1 : 1,
              l = new Array(s + 1);l = l.join("<span></span>"), (o = document.createElement("span")).setAttribute("aria-hidden", "true"), o.className = "line-numbers-rows", o.innerHTML = l, r.hasAttribute("data-start") && (r.style.counterReset = "linenumber " + (parseInt(r.getAttribute("data-start"), 10) - 1)), e.element.appendChild(o), n(r), Prism.hooks.run("line-numbers", e);
        }
      }
    }), Prism.hooks.add("line-numbers", function (e) {
      e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0;
    }), Prism.plugins.lineNumbers = { getLine: function getLine(t, n) {
        if ("PRE" === t.tagName && t.classList.contains(e)) {
          var r = t.querySelector(".line-numbers-rows"),
              i = parseInt(t.getAttribute("data-start"), 10) || 1,
              o = i + (r.children.length - 1);i > n && (n = i), n > o && (n = o);var a = n - i;return r.children[a];
        }
      } };
  }
}(), document.querySelectorAll(".c-accordion").forEach(function (e) {
  e.querySelector(".c-accordion__bar").addEventListener("click", function (t) {
    t.preventDefault(), e.classList.toggle("c-accordion-open");
  });
}), function () {
  var e = document.createElement("div");e.innerHTML = "&nbsp;", e.id = "adsbox", document.body.appendChild(e);window.setTimeout(function () {
    var t = 0 === e.offsetHeight;e.remove();var n = document.getElementById("js-adbnotice");if (t) {
      if (fetch("https://api.t3n.de/", { method: "post", credentials: "include", headers: { "Content-Type": "application/json", "apollographql-client-name": "t3n-frontend", "apollographql-client-version": "1.0" }, body: JSON.stringify({ query: 'mutation {\n              trackEvent(name: "adBlock", payload: "{\\"active\\": true}")\n            }' }) }), !n) return;if (!window.localStorage.getItem("ADB_ACTIVE_STATUS")) return window.localStorage.setItem("ADB_ACTIVE_STATUS", !0);var r = n.cloneNode(!0);n.remove(), document.body.appendChild(r);var i = function i(e) {
        e.preventDefault(), fetch("https://api.t3n.de/", { method: "post", credentials: "include", headers: { "Content-Type": "application/json", "apollographql-client-name": "t3n-frontend", "apollographql-client-version": "1.0" }, body: JSON.stringify({ query: 'mutation {\n            trackEvent(name: "adBlockOverlay", payload: "{\\"action\\": \\"close\\"}")\n          }' }) }), r.classList.add("-hidden"), document.body.classList.remove("u-overflow-hidden");
      };r.addEventListener("click", i), document.querySelector(".c-adblock__button-close").addEventListener("click", i), document.querySelector(".c-adblock__container").addEventListener("click", function (e) {
        e.stopPropagation();
      }), setTimeout(function () {
        document.documentElement.classList.add("adblock"), document.body.classList.add("u-overflow-hidden"), r.classList.remove("-hidden"), fetch("https://api.t3n.de/", { method: "post", credentials: "include", headers: { "Content-Type": "application/json", "apollographql-client-name": "t3n-frontend", "apollographql-client-version": "1.0" }, body: JSON.stringify({ query: 'mutation {\n            trackEvent(name: "adBlockOverlay", payload: "{\\"action\\": \\"open\\"}")\n          }' }) });
      }, 1500);
    } else fetch("https://api.t3n.de/", { method: "post", credentials: "include", headers: { "Content-Type": "application/json", "apollographql-client-name": "t3n-frontend", "apollographql-client-version": "1.0" }, body: JSON.stringify({ query: 'mutation {\n            trackEvent(name: "adBlock", payload: "{\\"active\\": false}")\n          }' }) }), window.localStorage.removeItem("ADB_ACTIVE_STATUS");
  }, 100);
}(), document.querySelectorAll(".c-barcamp-list").forEach(function (e) {
  var t = 6;var n = Array.from(e.querySelectorAll(".c-card.-elevate")),
      r = Array.from(e.querySelectorAll("a.c-button")),
      i = r[r.length - 1],
      o = function o() {
    n.forEach(function (e, n) {
      return function (e, n) {
        var r = n < t;e.setAttribute("style", r ? "" : "display: none;");
      }(e, n);
    }), function () {
      return i.setAttribute("style", t > n.length - 1 ? "display: none;" : "");
    }();
  };i.addEventListener("click", function (e) {
    e.preventDefault(), t += 6, o();
  }), o();
});var expandWrapper = document.querySelectorAll(".js-expand");(expandWrapper = Array.prototype.slice.call(expandWrapper, 0)) && expandWrapper.forEach(function (e) {
  e.onclick = function () {
    var t = Array.from(document.querySelectorAll(".is-active"));e.parentNode.classList.add("is-active"), t.filter(function (e) {
      return e.classList.remove("is-active");
    });
  };
});var collapseButton = document.querySelectorAll(".js-collapse-button");function externalLinks() {
  for (var e = document.querySelectorAll("a:not(.js-external-title)"), t = 0; t < e.length; t++) {
    var n = e[t];n.getAttribute("href") && n.hostname !== location.hostname && (n.setAttribute("target", "_blank"), n.setAttribute("title", "Die externe Seite im neuen Tab/Fenster öffnen"), void 0 !== n.rel && -1 == n.rel.indexOf("noopener") && n.setAttribute("rel", n.rel.concat(" noopener"))), n.getAttribute("href") && n.hostname == location.hostname && n.setAttribute("rel", n.rel.replace("nofollow", ""));
  }
}(collapseButton = Array.prototype.slice.call(collapseButton, 0)) && collapseButton.forEach(function (e) {
  e.addEventListener("click", function (e) {
    e.preventDefault();
  });
}), externalLinks(), function () {
  var e = { searchParams: "URLSearchParams" in self, iterable: "Symbol" in self && "iterator" in Symbol, blob: "FileReader" in self && "Blob" in self && function () {
      try {
        return new Blob(), !0;
      } catch (e) {
        return !1;
      }
    }(), formData: "FormData" in self, arrayBuffer: "ArrayBuffer" in self };if (e.arrayBuffer) var t = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
      n = ArrayBuffer.isView || function (e) {
    return e && t.indexOf(Object.prototype.toString.call(e)) > -1;
  };function r(e) {
    if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");return e.toLowerCase();
  }function i(e) {
    return "string" != typeof e && (e = String(e)), e;
  }function o(t) {
    var n = { next: function next() {
        var e = t.shift();return { done: void 0 === e, value: e };
      } };return e.iterable && (n[Symbol.iterator] = function () {
      return n;
    }), n;
  }function a(e) {
    this.map = {}, e instanceof a ? e.forEach(function (e, t) {
      this.append(t, e);
    }, this) : Array.isArray(e) ? e.forEach(function (e) {
      this.append(e[0], e[1]);
    }, this) : e && Object.getOwnPropertyNames(e).forEach(function (t) {
      this.append(t, e[t]);
    }, this);
  }function s(e) {
    if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));e.bodyUsed = !0;
  }function l(e) {
    return new Promise(function (t, n) {
      e.onload = function () {
        t(e.result);
      }, e.onerror = function () {
        n(e.error);
      };
    });
  }function c(e) {
    var t = new FileReader(),
        n = l(t);return t.readAsArrayBuffer(e), n;
  }function u(e) {
    if (e.slice) return e.slice(0);var t = new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)), t.buffer;
  }function d() {
    return this.bodyUsed = !1, this._initBody = function (t) {
      var r;this._bodyInit = t, t ? "string" == typeof t ? this._bodyText = t : e.blob && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : e.formData && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : e.searchParams && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : e.arrayBuffer && e.blob && (r = t) && DataView.prototype.isPrototypeOf(r) ? (this._bodyArrayBuffer = u(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : e.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(t) || n(t)) ? this._bodyArrayBuffer = u(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
    }, e.blob && (this.blob = function () {
      var e = s(this);if (e) return e;if (this._bodyBlob) return Promise.resolve(this._bodyBlob);if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));if (this._bodyFormData) throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]));
    }, this.arrayBuffer = function () {
      return this._bodyArrayBuffer ? s(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(c);
    }), this.text = function () {
      var e,
          t,
          n,
          r = s(this);if (r) return r;if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader(), n = l(t), t.readAsText(e), n;if (this._bodyArrayBuffer) return Promise.resolve(function (e) {
        for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) {
          n[r] = String.fromCharCode(t[r]);
        }return n.join("");
      }(this._bodyArrayBuffer));if (this._bodyFormData) throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText);
    }, e.formData && (this.formData = function () {
      return this.text().then(h);
    }), this.json = function () {
      return this.text().then(JSON.parse);
    }, this;
  }a.prototype.append = function (e, t) {
    e = r(e), t = i(t);var n = this.map[e];this.map[e] = n ? n + ", " + t : t;
  }, a.prototype.delete = function (e) {
    delete this.map[r(e)];
  }, a.prototype.get = function (e) {
    return e = r(e), this.has(e) ? this.map[e] : null;
  }, a.prototype.has = function (e) {
    return this.map.hasOwnProperty(r(e));
  }, a.prototype.set = function (e, t) {
    this.map[r(e)] = i(t);
  }, a.prototype.forEach = function (e, t) {
    for (var n in this.map) {
      this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
    }
  }, a.prototype.keys = function () {
    var e = [];return this.forEach(function (t, n) {
      e.push(n);
    }), o(e);
  }, a.prototype.values = function () {
    var e = [];return this.forEach(function (t) {
      e.push(t);
    }), o(e);
  }, a.prototype.entries = function () {
    var e = [];return this.forEach(function (t, n) {
      e.push([n, t]);
    }), o(e);
  }, e.iterable && (a.prototype[Symbol.iterator] = a.prototype.entries);var f = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];function p(e, t) {
    var n,
        r,
        i = (t = t || {}).body;if (e instanceof p) {
      if (e.bodyUsed) throw new TypeError("Already read");this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new a(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, i || null == e._bodyInit || (i = e._bodyInit, e.bodyUsed = !0);
    } else this.url = String(e);if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new a(t.headers)), this.method = (n = t.method || this.method || "GET", r = n.toUpperCase(), f.indexOf(r) > -1 ? r : n), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(i);
  }function h(e) {
    var t = new FormData();return e.trim().split("&").forEach(function (e) {
      if (e) {
        var n = e.split("="),
            r = n.shift().replace(/\+/g, " "),
            i = n.join("=").replace(/\+/g, " ");t.append(decodeURIComponent(r), decodeURIComponent(i));
      }
    }), t;
  }function m(e, t) {
    t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new a(t.headers), this.url = t.url || "", this._initBody(e);
  }p.prototype.clone = function () {
    return new p(this, { body: this._bodyInit });
  }, d.call(p.prototype), d.call(m.prototype), m.prototype.clone = function () {
    return new m(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new a(this.headers), url: this.url });
  }, m.error = function () {
    var e = new m(null, { status: 0, statusText: "" });return e.type = "error", e;
  };var g = [301, 302, 303, 307, 308];m.redirect = function (e, t) {
    if (-1 === g.indexOf(t)) throw new RangeError("Invalid status code");return new m(null, { status: t, headers: { location: e } });
  };var y = self.DOMException;try {
    new y();
  } catch (e) {
    (y = function y(e, t) {
      this.message = e, this.name = t;var n = Error(e);this.stack = n.stack;
    }).prototype = Object.create(Error.prototype), y.prototype.constructor = y;
  }function v(t, n) {
    return new Promise(function (r, i) {
      var o = new p(t, n);if (o.signal && o.signal.aborted) return i(new y("Aborted", "AbortError"));var s = new XMLHttpRequest();function l() {
        s.abort();
      }s.onload = function () {
        var e,
            t,
            n = { status: s.status, statusText: s.statusText, headers: (e = s.getAllResponseHeaders() || "", t = new a(), e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function (e) {
            var n = e.split(":"),
                r = n.shift().trim();if (r) {
              var i = n.join(":").trim();t.append(r, i);
            }
          }), t) };n.url = "responseURL" in s ? s.responseURL : n.headers.get("X-Request-URL");var i = "response" in s ? s.response : s.responseText;r(new m(i, n));
      }, s.onerror = function () {
        i(new TypeError("Network request failed"));
      }, s.ontimeout = function () {
        i(new TypeError("Network request failed"));
      }, s.onabort = function () {
        i(new y("Aborted", "AbortError"));
      }, s.open(o.method, o.url, !0), "include" === o.credentials ? s.withCredentials = !0 : "omit" === o.credentials && (s.withCredentials = !1), "responseType" in s && e.blob && (s.responseType = "blob"), o.headers.forEach(function (e, t) {
        s.setRequestHeader(t, e);
      }), o.signal && (o.signal.addEventListener("abort", l), s.onreadystatechange = function () {
        4 === s.readyState && o.signal.removeEventListener("abort", l);
      }), s.send(void 0 === o._bodyInit ? null : o._bodyInit);
    });
  }v.polyfill = !0, window.fetch || (window.fetch = v, window.Headers = a, window.Request = p, window.Response = m);
}(), document.querySelectorAll(".c-filterlist").forEach(function (e) {
  var t = Array.from(e.querySelectorAll(".c-filterlist__item")),
      n = Array.from(e.querySelectorAll(".c-filterlist__tag")),
      r = e.querySelector(".c-filterlist__noresults"),
      i = function i() {
    var e = function () {
      return n.filter(function (e) {
        return e.classList.contains("is-active");
      }).map(function (e) {
        return e.getAttribute("href").replace("#", "");
      });
    }();t.forEach(function (t, n) {
      return function (e, t) {
        var n = function (e, t) {
          return function (e) {
            var t = e.getAttribute("data-keywords");return t ? t.split(" ") : [];
          }(t).find(function (t) {
            return e.includes(t);
          });
        }(e, t),
            r = !e.length || n;t.setAttribute("style", r ? "" : "display: none;");
      }(e, t);
    }), r && function (e) {
      return r.setAttribute("style", e.length && !t.find(function (e) {
        return "none" !== e.style.display;
      }) ? "" : "display: none;");
    }(e), function (e) {
      var _window$location = window.location,
          t = _window$location.origin,
          n = _window$location.pathname,
          r = _window$location.search,
          i = _window$location.hash,
          o = r.replace(/^\?/, "").replace(/&?keywords=[a-z0-9,-]+/i, "").replace(/&$/, ""),
          a = "" + t + n + ("?" + o + (e.length ? (o ? "&" : "") + "keywords=" + e.join(",") : "")).replace(/^\?$/, "") + i;
      window.history.replaceState({}, "", a);
    }(e);
  };if (n) {
    var _e2 = function () {
      var e = window.location.search,
          t = e ? e.match(/\?(?:.+&)?(keywords=([a-z0-9-,]+))/i) : "";return t ? t[2].split(",") : [];
    }();n.forEach(function (t) {
      _e2.find(function (e) {
        return 1 === t.getAttribute("href").indexOf(e);
      }) && t.classList.toggle("is-active"), t.addEventListener("click", function (e) {
        e.preventDefault(), t.classList.toggle("is-active"), i();
      });
    }), i();
  }
});var variants = [{ image: "https://storage.googleapis.com/t3n-media/t3n-headercampaign-a.png", imageMobile: "https://storage.googleapis.com/t3n-media/t3n-headercampaign-a-mobile.png", href: "https://t3n.de/headercampaign-a" }, { image: "https://storage.googleapis.com/t3n-media/t3n-headercampaign-b.png", imageMobile: "https://storage.googleapis.com/t3n-media/t3n-headercampaign-b-mobile.png", href: "https://t3n.de/headercampaign-b" }],
    randomNumber = Math.floor(variants.length * Math.random());document.getElementById("header-campaign").href = variants[randomNumber].href, document.getElementById("header-rotation") && (document.getElementById("header-rotation").src = variants[randomNumber].image), document.getElementById("header-rotation-mobile") && (document.getElementById("header-rotation-mobile").src = variants[randomNumber].imageMobile);var infoBox = document.getElementById("c-infobox");infoBox && ("true" !== Cookies.get("hideInfobox") && (infoBox.style.display = "block"), document.getElementById("hideInfobox").addEventListener("click", function (e) {
  return e.preventDefault(), infoBox.style.display = "none", Cookies.set("hideInfobox", "true", { expires: 7, path: "" }), !1;
}));var openModal = document.querySelector(".js-lightbox"),
    modal = document.querySelector("#lightbox"),
    html = document.querySelector("html");function setSticky() {
  var e = document.querySelectorAll(".js-sticky");if (e) {
    var t = document.querySelector(".c-header").offsetHeight;e.forEach(function (e) {
      window.addEventListener("scroll", function () {
        window.scrollY > t ? e.classList.add("is-sticky") : e.classList.remove("is-sticky");
      });
    });
  }
}function setStickyTagBar() {
  var e = document.querySelector(".js-sticky-tagbar");if (e) {
    var t = document.querySelector(".c-tagletterbar").offsetTop;window.addEventListener("scroll", function () {
      window.pageYOffset >= t ? e.classList.add("is-sticky") : e.classList.remove("is-sticky");
    });
  }
}modal && (openModal.addEventListener("click", function () {
  html.style.overflow = "hidden";
}), modal.addEventListener("click", function () {
  html.style.overflow = "inherit";
})), function (e, t, n) {
  "use strict";
  var r = { init: function init() {
      Cookies.set("t3n_cookieAllowed", "1", { expires: 30, path: "/" }), this.cookieAllowed = "1" === Cookies.get("t3n_cookieAllowed");
    }, promptForMobile: function promptForMobile(e, n) {
      var r;!0 === this.cookieAllowed ? (n || (n = "Möchtest du jetzt zur mobilen Version von t3n wechseln?"), confirm(n) ? (Cookies.set("t3n_preferMobileTemplate", "1", { expires: 30, path: "/", domain: "t3n.de" }), t.location.reload()) : (Cookies.set("t3n_preferMobileTemplate", "0", { expires: 30, path: "/", domain: "t3n.de" }), t.location.reload())) : (void 0 !== t.localStorage && (r = localStorage.getItem("t3n_askForCookies")), void 0 !== r && "1" === r && !0 !== e || (alert("Um die mobile Webseite von t3n nutzen zu können, musst du in den Einstellungen Cookies zulassen."), void 0 !== t.localStorage && localStorage.setItem("t3n_askForCookies", "1")));
    }, promptForDesktop: function promptForDesktop() {
      if (!0 === this.cookieAllowed) {
        if (!confirm("Möchtest du jetzt zur Desktop-Version von t3n wechseln?")) return Cookies.set("t3n_preferMobileTemplate", "1", { expires: 30, path: "/", domain: "t3n.de" }), !1;Cookies.set("t3n_preferMobileTemplate", "0", { expires: 30, path: "/", domain: "t3n.de" }), t.location.reload();
      } else {
        var e;void 0 !== t.localStorage && (e = localStorage.getItem("t3n_askForCookies")), void 0 !== e && "1" === e || (alert("Um auf diesem Gerät die klassische Webseite von t3n nutzen zu können, musst du in den Einstellungen Cookies zulassen."), void 0 !== t.localStorage && localStorage.setItem("t3n_askForCookies", "1"));
      }
    } };r.init(), t.userAgent = navigator.userAgent || navigator.vendor || t.opera, t.userPlatform = navigator.platform, t.userDevices = /android|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|o2|opera mini|palm( os)?|plucker|pocket|pre\/|psp|smartphone|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce; (iemobile|ppc)|xiino/i, t.isTablet = null !== navigator.userAgent.match(/iPad/i) || null !== navigator.userAgent.match(/GT-P1000/i) || null !== navigator.userAgent.match(/HTC_Flyer/i) || null !== navigator.userAgent.match(/Playbook/i), t.mobileTemplate = Cookies.get("t3n_preferMobileTemplate"), n.addEventListener("DOMContentLoaded", function () {
    var e = n.querySelector(".js-switch-to-desktop"),
        t = n.querySelector(".js-switch-to-mobile");e && e.addEventListener("click", function (e) {
      e.preventDefault(), r.promptForDesktop();
    }), t && t.addEventListener("click", function (e) {
      e.preventDefault(), r.promptForMobile(!0);
    });
  });
}(window.jQuery, window, document), function () {
  var e = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      t = document.querySelector(".c-newsletterbox"),
      n = [{ id: "909d68a15f", name: "All you can read" }, { id: "48b044dbbc", name: "Pioneers Breakfast" }, { id: "aa20f62f07", name: "Tech, Dev & Admin" }, { id: "6b4f47f83e", name: "Marketing" }, { id: "e245c6bdbc", name: "E-Commerce" }, { id: "4953ae2964", name: "Karriere & Management" }, { id: "0227e5fdc8", name: "Startups" }, { id: "123fa805e4", name: "Finanzen & Wirtschaft" }, { id: "1f55748131", name: "Digitale Transformation" }, { id: "dc28c540e0", name: "Gadgets & Lifestyle" }],
      r = function r() {
    return { listContainerNode: t.querySelector(".c-newsletterbox__list-container"), emailInputNode: t.querySelector('input[type="email"]'), listExpandNode: t.querySelector(".c-newsletterbox__list-expand"), submitButtonNode: t.querySelector('button[type="submit"]'), emailErrorMessageNode: t.querySelector(".c-newsletterbox__error.-email"), listErrorMessageNode: t.querySelector(".c-newsletterbox__error.-list"), submitErrorMessageNode: t.querySelector(".c-newsletterbox__error.-submit"), formContainerNode: t.querySelector(".c-newsletterbox__form"), successNode: t.querySelector(".c-newsletterbox__success") };
  },
      i = function i() {
    return n.forEach(function (_ref, r) {
      var e = _ref.id,
          n = _ref.name;
      var i = function (e, t) {
        var n = document.createElement("li");n.classList.add("c-newsletterbox__list-item", "o-list__item");var r = document.createElement("span");r.classList.add("c-newsletterbox__checkbox");var i = document.createElement("input");i.setAttribute("type", "checkbox"), i.setAttribute("value", e), i.setAttribute("id", "newsletter-" + e);var o = document.createElement("label");return o.setAttribute("for", "newsletter-" + e), o.innerText = t, r.appendChild(i), n.appendChild(r), n.appendChild(o), n;
      }(e, n);0 === r && (i.querySelector(".c-newsletterbox__checkbox").classList.add("-checked"), i.querySelector('input[type="checkbox"]').setAttribute("checked", "")), t.querySelector(".c-newsletterbox__list").appendChild(i);
    });
  };t && _async(function () {
    var _r2 = r(),
        n = _r2.emailInputNode,
        o = _r2.submitButtonNode,
        a = _r2.emailErrorMessageNode,
        s = _r2.listErrorMessageNode,
        l = _r2.submitErrorMessageNode,
        c = _r2.formContainerNode,
        u = _r2.successNode;

    i();var d = function () {
      return t.querySelectorAll(".c-newsletterbox__list-item input");
    }();(function () {
      var _r3 = r(),
          e = _r3.listContainerNode,
          t = _r3.listExpandNode,
          n = e.getBoundingClientRect().height;

      e.classList.add("-collapsed"), e.style.transition = "height 0.2s ease-in-out", t.addEventListener("click", function (t) {
        t.preventDefault(), e.classList.remove("-collapsed"), e.style.height = n + "px";
      });
    })();var f = function f() {
      return Array.from(d).filter(function (e) {
        return e.checked;
      }).map(function (e) {
        return e.value;
      });
    },
        p = function p() {
      return e.test(n.value);
    },
        h = function h() {
      return f().length > 0;
    },
        m = function m() {
      a.classList.remove("-hidden"), n.classList.add("-error");
    },
        g = function g() {
      a.classList.add("-hidden"), n.classList.remove("-error");
    },
        y = function y() {
      return s.classList.remove("-hidden");
    },
        v = _async(function () {
      (function () {
        return l.classList.add("-hidden");
      })();var e = p(),
          t = h();if (!e || !t) return e || m(), void (t || y());var r = o.innerText;return _finallyRethrows(function () {
        return _catch(function () {
          o.innerText = "";var e = document.createElement("span");e.classList.add("c-loader__dots", "-inverse"), o.appendChild(e), o.setAttribute("disabled", "");var t = n.value,
              i = f();
          return _await(fetch("https://api." + ("t3n.de" === window.location.host ? "" : "stage.") + "t3n.de/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ query: "mutation {\n                newsletter(email: \"" + t + "\") {\n                  subscribeTo(newsletter: " + JSON.stringify(i) + ")\n                }\n              }" }) }), function (a) {
            return _await(a.json(), function (_ref2) {
              var s = _ref2.errors;
              if (s) throw new Error(s);var d = c.getBoundingClientRect().height;u.style.height = d + "px", u.classList.remove("-hidden"), c.classList.add("-hidden");
            });
          });
        }, function (e) {
          console.log(e), function () {
            return l.classList.remove("-hidden");
          }();
        });
      }, function (_wasThrown, _result) {
        o.innerText = r;return _rethrow(_wasThrown, _result);
      });
    });n.addEventListener("keyup", function () {
      p() && g();
    }), n.addEventListener("blur", function () {
      p() ? g() : m();
    }), d.forEach(function (e) {
      return e.addEventListener("change", function () {
        e.parentElement.classList.toggle("-checked"), h() ? function () {
          return s.classList.add("-hidden");
        }() : y();
      });
    }), o.addEventListener("click", function (e) {
      e.preventDefault(), v();
    });return _await();
  })();
}(), Array.from || (Array.from = function () {
  var e = Object.prototype.toString,
      t = function t(_t2) {
    return "function" == typeof _t2 || "[object Function]" === e.call(_t2);
  },
      n = Math.pow(2, 53) - 1,
      r = function r(e) {
    var t = function (e) {
      var t = Number(e);return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t;
    }(e);return Math.min(Math.max(t, 0), n);
  };return function (e) {
    var n = Object(e);if (null == e) throw new TypeError("Array.from requires an array-like object - not null or undefined");var i,
        o = arguments.length > 1 ? arguments[1] : void 0;if (void 0 !== o) {
      if (!t(o)) throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length > 2 && (i = arguments[2]);
    }for (var a, s = r(n.length), l = t(this) ? Object(new this(s)) : new Array(s), c = 0; c < s;) {
      a = n[c], l[c] = o ? void 0 === i ? o(a, c) : o.call(i, a, c) : a, c += 1;
    }return l.length = s, l;
  };
}()), Array.prototype.find || Object.defineProperty(Array.prototype, "find", { value: function value(e) {
    if (null == this) throw new TypeError('"this" is null or not defined');var t = Object(this),
        n = t.length >>> 0;if ("function" != typeof e) throw new TypeError("predicate must be a function");for (var r = arguments[1], i = 0; i < n;) {
      var o = t[i];if (e.call(r, o, i, t)) return o;i++;
    }
  }, configurable: !0, writable: !0 }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", { value: function value(e, t) {
    if (null == this) throw new TypeError('"this" is null or not defined');var n = Object(this),
        r = n.length >>> 0;if (0 === r) return !1;var i,
        o,
        a = 0 | t,
        s = Math.max(a >= 0 ? a : r - Math.abs(a), 0);for (; s < r;) {
      if ((i = n[s]) === (o = e) || "number" == typeof i && "number" == typeof o && isNaN(i) && isNaN(o)) return !0;s++;
    }return !1;
  } }), Array.prototype.forEach || (Array.prototype.forEach = function (e) {
  var t, n;if (null == this) throw new TypeError("this is null or not defined");var r = Object(this),
      i = r.length >>> 0;if ("function" != typeof e) throw new TypeError(e + " is not a function");for (arguments.length > 1 && (t = arguments[1]), n = 0; n < i;) {
    var o;n in r && (o = r[n], e.call(t, o, n, r)), n++;
  }
}), window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function (e) {
  e.hasOwnProperty("remove") || Object.defineProperty(e, "remove", { configurable: !0, enumerable: !0, writable: !0, value: function value() {
      null !== this.parentNode && this.parentNode.removeChild(this);
    } });
}), function () {
  var e = document.querySelectorAll(".js-popup-link");function t(e) {
    e.onclick = function (t) {
      t.preventDefault();var n = e.getAttribute("href"),
          r = e.getAttribute("title");r || (r = "t3n Magazin"), window.open(n, r, "toolbar=no, width=650, height=450");
    };
  }for (var n = 0; n < e.length; n++) {
    t(e[n]);
  }
}(), _async(function () {
  var e = /\/news\/?$/.test(window.location.pathname),
      t = document.querySelector("article.tg-articletype-sponsored-post:not(.c-pin)") || document.querySelector("article.tg-articletype-sponsored-deal:not(.c-pin)") || document.querySelector("article.tg-articletype-sponsored-event:not(.c-pin)") || document.querySelector("article.tg-articletype-in-eigener-sache:not(.c-pin)");if (e || t) return;var n = Array.from(document.querySelectorAll(".c-header__wrapper .c-menu__list .c-menu__item")).find(function (e) {
    return "News" === e.textContent.trim();
  });if (n) {
    var _e3 = n.querySelector("a"),
        _t3 = document.querySelector(".c-header .c-hamburger"),
        r = _async(function () {
      var _window$location2 = window.location,
          e = _window$location2.host,
          t = _window$location2.protocol,
          n = e.indexOf("local") > -1 ? "https://api.stage.t3n.de" : t + "//api." + e;
      return _catch(function () {
        return _await(fetch(n, { method: "POST", headers: { "Content-Type": "application/json", "apollographql-client-name": "t3n-frontend", "apollographql-client-version": "1.0" }, body: JSON.stringify({ operationName: "RecentNewsNotificationList", variables: {}, query: "query RecentNewsNotificationList {\n  article {\n    recentNews(limit: 5) {\n      identifier\n    }\n  }\n}\n" }) }), function (e) {
          return _await(e.json(), function (_ref3) {
            var _ref3$data$article$re = _ref3.data.article.recentNews,
                t = _ref3$data$article$re === undefined ? [] : _ref3$data$article$re;
            return t;
          });
        });
      }, function (e) {
        return console.log(e), [];
      });
    }),
        i = function i() {
      var n = [_e3, _t3].filter(function (e) {
        return e;
      }),
          r = n.map(function (e) {
        return e.querySelector(".c-bubble");
      }).filter(function (e) {
        return e;
      });return r.length ? r : n.map(function (e) {
        var t = document.createElement("span");return t.classList.add("c-bubble", "u-gap-left-extrasmall", "tg-notification-bubble"), e.append(t), t;
      });
    },
        o = function o() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      i().forEach(function (t) {
        t.innerText = e, t.classList.add("-pulse"), setTimeout(function () {
          t.classList.remove("-pulse");
        }, 1e3);
      });
    },
        a = _async(function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      return _continueIgnored(_catch(function () {
        return _call(r, function (i) {
          var s = t + i.filter(function (_ref4) {
            var t = _ref4.identifier;
            return !e.find(function (_ref5) {
              var e = _ref5.identifier;
              return t === e;
            });
          }).length,
              l = [].concat(_toConsumableArray(e), _toConsumableArray(i)).reduce(function (e, t) {
            return e.find(function (e) {
              return e.identifier === t.identifier;
            }) ? e : [].concat(_toConsumableArray(e), [t]);
          }, []);s > t && o(s), setTimeout(function () {
            return requestAnimationFrame(function () {
              return a(l, s, n + 1);
            });
          }, 1e3 * (n % 3 == 0 ? 40 : 20));
        });
      }, function (e) {
        console.log(e);
      }));
    });setTimeout(_async(function () {
      return _continueIgnored(_catch(function () {
        return _call(r, function (e) {
          setTimeout(function () {
            a(e);
          }, 3e4);
        });
      }, function (e) {
        console.log(e);
      }));
    }), 9e4);
  }return _await();
})(), setSticky(), Array.from(document.querySelectorAll(".c-table")).forEach(function (e) {
  var t = e.querySelector(".c-table__wrapper"),
      n = e.querySelector("table"),
      r = function r() {
    return t.getBoundingClientRect().width;
  },
      i = function i() {
    return n.getBoundingClientRect().width;
  },
      o = function o() {
    return e.querySelector(".c-table__scrollbar");
  },
      a = function a() {
    var e = r(),
        n = i(),
        o = t.scrollLeft,
        a = Math.round(o * (e / n));return { width: Math.round(e * (e / n)), offsetX: a };
  },
      s = function s() {
    var n = r(),
        s = i(),
        l = o(),
        _a = a(),
        c = _a.offsetX;l.style.transform = "translate3d(" + c + "px, 0, 0)";var u = s - n,
        d = t.scrollLeft;d <= 0 ? e.classList.remove("-is-scrollable-start") : e.classList.add("-is-scrollable-start"), d >= u ? e.classList.remove("-is-scrollable-end") : e.classList.add("-is-scrollable-end");
  },
      l = function l() {
    var n = r(),
        l = i();if (l > n) {
      var _r4 = o() || function () {
        var t = document.createElement("div");return t.setAttribute("class", "c-table__scrollbar"), e.append(t), t;
      }(),
          _a2 = a(),
          _i = _a2.width,
          c = _a2.offsetX;if (_r4.style.transform = "translate3d(" + c + "px, 0, 0)", _r4.style.width = _i + "px", e.classList.contains("-is-scrollable-start") || e.classList.contains("-is-scrollable-end")) return;var u = l - n,
          d = t.scrollLeft;d > 0 && e.classList.add("-is-scrollable-start"), d < u && e.classList.add("-is-scrollable-end"), t.addEventListener("scroll", s);
    } else e.classList.remove("-is-scrollable-start"), e.classList.remove("-is-scrollable-end"), o() && function () {
      var t = o();e.removeChild(t);
    }(), t.removeEventListener("scroll", s);
  };l(), window.addEventListener("resize", l);
}), Array.from(document.querySelectorAll("table.tablepress")).forEach(function (e) {
  var t = e.cloneNode(!0),
      n = e.parentNode,
      r = document.createElement("div");r.classList.add("c-table");var i = document.createElement("div");i.classList.add("c-table__wrapper"), r.append(i), i.append(t), n.replaceChild(r, e);
}), Array.from(document.querySelectorAll("figure.table")).forEach(function (e) {
  e.classList.add("c-table");var t = document.createElement("div");t.classList.add("c-table__wrapper");var n = e.querySelector("table");t.append(n), e.innerHtml = "", e.append(t);
});var textAdPlus = document.getElementsByClassName(".js-textadplus-container > .guruads_zone").length,
    textAdPlusHide = document.querySelector(".js-textadplus-hide");textAdPlus && (textAdPlusHide.style.display = "none"), function () {
  var e = document.querySelectorAll(".c-warning");e && e.forEach(function (e) {
    var t = window.localStorage.getItem("hideWarning"),
        n = !!t && Date.now() > parseInt(t, 10) + 6048e5;t && !n || (window.localStorage.removeItem("hideWarning"), function () {
      return e.style.display = "flex";
    }()), e.querySelector(".c-warning__close").addEventListener("click", function (t) {
      t.preventDefault(), window.localStorage.setItem("hideWarning", JSON.stringify(Date.now())), function () {
        return e.style.display = "none";
      }();
    });
  });
}();var hash = location.hash,
    hashString = hash.substring(0, 8),
    comment = "#comment",
    commentString = comment.substring(0, 8);hashString === commentString && (document.querySelector(".js-collapse").checked = !0);