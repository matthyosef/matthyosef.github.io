if (
  ((function (a, b) {
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = a.document
          ? b(a, !0)
          : function (a) {
              if (!a.document)
                throw new Error("jQuery requires a window with a document");
              return b(a);
            })
      : b(a);
  })("undefined" != typeof window ? window : this, function (a, b) {
    function c(a) {
      var b = a.length,
        c = _.type(a);
      return "function" === c || _.isWindow(a)
        ? !1
        : 1 === a.nodeType && b
        ? !0
        : "array" === c ||
          0 === b ||
          ("number" == typeof b && b > 0 && b - 1 in a);
    }
    function d(a, b, c) {
      if (_.isFunction(b))
        return _.grep(a, function (a, d) {
          return !!b.call(a, d, a) !== c;
        });
      if (b.nodeType)
        return _.grep(a, function (a) {
          return (a === b) !== c;
        });
      if ("string" == typeof b) {
        if (ha.test(b)) return _.filter(b, a, c);
        b = _.filter(b, a);
      }
      return _.grep(a, function (a) {
        return U.call(b, a) >= 0 !== c;
      });
    }
    function e(a, b) {
      for (; (a = a[b]) && 1 !== a.nodeType; );
      return a;
    }
    function f(a) {
      var b = (oa[a] = {});
      return (
        _.each(a.match(na) || [], function (a, c) {
          b[c] = !0;
        }),
        b
      );
    }
    function g() {
      Z.removeEventListener("DOMContentLoaded", g, !1),
        a.removeEventListener("load", g, !1),
        _.ready();
    }
    function h() {
      Object.defineProperty((this.cache = {}), 0, {
        get: function () {
          return {};
        },
      }),
        (this.expando = _.expando + h.uid++);
    }
    function i(a, b, c) {
      var d;
      if (void 0 === c && 1 === a.nodeType)
        if (
          ((d = "data-" + b.replace(ua, "-$1").toLowerCase()),
          (c = a.getAttribute(d)),
          "string" == typeof c)
        ) {
          try {
            c =
              "true" === c
                ? !0
                : "false" === c
                ? !1
                : "null" === c
                ? null
                : +c + "" === c
                ? +c
                : ta.test(c)
                ? _.parseJSON(c)
                : c;
          } catch (e) {}
          sa.set(a, b, c);
        } else c = void 0;
      return c;
    }
    function j() {
      return !0;
    }
    function k() {
      return !1;
    }
    function l() {
      try {
        return Z.activeElement;
      } catch (a) {}
    }
    function m(a, b) {
      return _.nodeName(a, "table") &&
        _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
        ? a.getElementsByTagName("tbody")[0] ||
            a.appendChild(a.ownerDocument.createElement("tbody"))
        : a;
    }
    function n(a) {
      return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
    }
    function o(a) {
      var b = Ka.exec(a.type);
      return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
    }
    function p(a, b) {
      for (var c = 0, d = a.length; d > c; c++)
        ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"));
    }
    function q(a, b) {
      var c, d, e, f, g, h, i, j;
      if (1 === b.nodeType) {
        if (
          ra.hasData(a) &&
          ((f = ra.access(a)), (g = ra.set(b, f)), (j = f.events))
        ) {
          delete g.handle, (g.events = {});
          for (e in j)
            for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c]);
        }
        sa.hasData(a) &&
          ((h = sa.access(a)), (i = _.extend({}, h)), sa.set(b, i));
      }
    }
    function r(a, b) {
      var c = a.getElementsByTagName
        ? a.getElementsByTagName(b || "*")
        : a.querySelectorAll
        ? a.querySelectorAll(b || "*")
        : [];
      return void 0 === b || (b && _.nodeName(a, b)) ? _.merge([a], c) : c;
    }
    function s(a, b) {
      var c = b.nodeName.toLowerCase();
      "input" === c && ya.test(a.type)
        ? (b.checked = a.checked)
        : ("input" !== c && "textarea" !== c) ||
          (b.defaultValue = a.defaultValue);
    }
    function t(b, c) {
      var d,
        e = _(c.createElement(b)).appendTo(c.body),
        f =
          a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0]))
            ? d.display
            : _.css(e[0], "display");
      return e.detach(), f;
    }
    function u(a) {
      var b = Z,
        c = Oa[a];
      return (
        c ||
          ((c = t(a, b)),
          ("none" !== c && c) ||
            ((Na = (
              Na || _("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(b.documentElement)),
            (b = Na[0].contentDocument),
            b.write(),
            b.close(),
            (c = t(a, b)),
            Na.detach()),
          (Oa[a] = c)),
        c
      );
    }
    function v(a, b, c) {
      var d,
        e,
        f,
        g,
        h = a.style;
      return (
        (c = c || Ra(a)),
        c && (g = c.getPropertyValue(b) || c[b]),
        c &&
          ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)),
          Qa.test(g) &&
            Pa.test(b) &&
            ((d = h.width),
            (e = h.minWidth),
            (f = h.maxWidth),
            (h.minWidth = h.maxWidth = h.width = g),
            (g = c.width),
            (h.width = d),
            (h.minWidth = e),
            (h.maxWidth = f))),
        void 0 !== g ? g + "" : g
      );
    }
    function w(a, b) {
      return {
        get: function () {
          return a()
            ? void delete this.get
            : (this.get = b).apply(this, arguments);
        },
      };
    }
    function x(a, b) {
      if (b in a) return b;
      for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--; )
        if (((b = Xa[e] + c), b in a)) return b;
      return d;
    }
    function y(a, b, c) {
      var d = Ta.exec(b);
      return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function z(a, b, c, d, e) {
      for (
        var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
          g = 0;
        4 > f;
        f += 2
      )
        "margin" === c && (g += _.css(a, c + wa[f], !0, e)),
          d
            ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)),
              "margin" !== c &&
                (g -= _.css(a, "border" + wa[f] + "Width", !0, e)))
            : ((g += _.css(a, "padding" + wa[f], !0, e)),
              "padding" !== c &&
                (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
      return g;
    }
    function A(a, b, c) {
      var d = !0,
        e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = Ra(a),
        g = "border-box" === _.css(a, "boxSizing", !1, f);
      if (0 >= e || null == e) {
        if (
          ((e = v(a, b, f)),
          (0 > e || null == e) && (e = a.style[b]),
          Qa.test(e))
        )
          return e;
        (d = g && (Y.boxSizingReliable() || e === a.style[b])),
          (e = parseFloat(e) || 0);
      }
      return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function B(a, b) {
      for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
        (d = a[g]),
          d.style &&
            ((f[g] = ra.get(d, "olddisplay")),
            (c = d.style.display),
            b
              ? (f[g] || "none" !== c || (d.style.display = ""),
                "" === d.style.display &&
                  xa(d) &&
                  (f[g] = ra.access(d, "olddisplay", u(d.nodeName))))
              : ((e = xa(d)),
                ("none" === c && e) ||
                  ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
      for (g = 0; h > g; g++)
        (d = a[g]),
          d.style &&
            ((b && "none" !== d.style.display && "" !== d.style.display) ||
              (d.style.display = b ? f[g] || "" : "none"));
      return a;
    }
    function C(a, b, c, d, e) {
      return new C.prototype.init(a, b, c, d, e);
    }
    function D() {
      return (
        setTimeout(function () {
          Ya = void 0;
        }),
        (Ya = _.now())
      );
    }
    function E(a, b) {
      var c,
        d = 0,
        e = { height: a };
      for (b = b ? 1 : 0; 4 > d; d += 2 - b)
        (c = wa[d]), (e["margin" + c] = e["padding" + c] = a);
      return b && (e.opacity = e.width = a), e;
    }
    function F(a, b, c) {
      for (
        var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length;
        g > f;
        f++
      )
        if ((d = e[f].call(c, b, a))) return d;
    }
    function G(a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = this,
        m = {},
        n = a.style,
        o = a.nodeType && xa(a),
        p = ra.get(a, "fxshow");
      c.queue ||
        ((h = _._queueHooks(a, "fx")),
        null == h.unqueued &&
          ((h.unqueued = 0),
          (i = h.empty.fire),
          (h.empty.fire = function () {
            h.unqueued || i();
          })),
        h.unqueued++,
        l.always(function () {
          l.always(function () {
            h.unqueued--, _.queue(a, "fx").length || h.empty.fire();
          });
        })),
        1 === a.nodeType &&
          ("height" in b || "width" in b) &&
          ((c.overflow = [n.overflow, n.overflowX, n.overflowY]),
          (j = _.css(a, "display")),
          (k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j),
          "inline" === k &&
            "none" === _.css(a, "float") &&
            (n.display = "inline-block")),
        c.overflow &&
          ((n.overflow = "hidden"),
          l.always(function () {
            (n.overflow = c.overflow[0]),
              (n.overflowX = c.overflow[1]),
              (n.overflowY = c.overflow[2]);
          }));
      for (d in b)
        if (((e = b[d]), $a.exec(e))) {
          if (
            (delete b[d],
            (f = f || "toggle" === e),
            e === (o ? "hide" : "show"))
          ) {
            if ("show" !== e || !p || void 0 === p[d]) continue;
            o = !0;
          }
          m[d] = (p && p[d]) || _.style(a, d);
        } else j = void 0;
      if (_.isEmptyObject(m))
        "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
      else {
        p ? "hidden" in p && (o = p.hidden) : (p = ra.access(a, "fxshow", {})),
          f && (p.hidden = !o),
          o
            ? _(a).show()
            : l.done(function () {
                _(a).hide();
              }),
          l.done(function () {
            var b;
            ra.remove(a, "fxshow");
            for (b in m) _.style(a, b, m[b]);
          });
        for (d in m)
          (g = F(o ? p[d] : 0, d, l)),
            d in p ||
              ((p[d] = g.start),
              o &&
                ((g.end = g.start),
                (g.start = "width" === d || "height" === d ? 1 : 0)));
      }
    }
    function H(a, b) {
      var c, d, e, f, g;
      for (c in a)
        if (
          ((d = _.camelCase(c)),
          (e = b[d]),
          (f = a[c]),
          _.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
          c !== d && ((a[d] = f), delete a[c]),
          (g = _.cssHooks[d]),
          g && "expand" in g)
        ) {
          (f = g.expand(f)), delete a[d];
          for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
        } else b[d] = e;
    }
    function I(a, b, c) {
      var d,
        e,
        f = 0,
        g = bb.length,
        h = _.Deferred().always(function () {
          delete i.elem;
        }),
        i = function () {
          if (e) return !1;
          for (
            var b = Ya || D(),
              c = Math.max(0, j.startTime + j.duration - b),
              d = c / j.duration || 0,
              f = 1 - d,
              g = 0,
              i = j.tweens.length;
            i > g;
            g++
          )
            j.tweens[g].run(f);
          return (
            h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]), !1)
          );
        },
        j = h.promise({
          elem: a,
          props: _.extend({}, b),
          opts: _.extend(!0, { specialEasing: {} }, c),
          originalProperties: b,
          originalOptions: c,
          startTime: Ya || D(),
          duration: c.duration,
          tweens: [],
          createTween: function (b, c) {
            var d = _.Tween(
              a,
              j.opts,
              b,
              c,
              j.opts.specialEasing[b] || j.opts.easing
            );
            return j.tweens.push(d), d;
          },
          stop: function (b) {
            var c = 0,
              d = b ? j.tweens.length : 0;
            if (e) return this;
            for (e = !0; d > c; c++) j.tweens[c].run(1);
            return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
          },
        }),
        k = j.props;
      for (H(k, j.opts.specialEasing); g > f; f++)
        if ((d = bb[f].call(j, a, k, j.opts))) return d;
      return (
        _.map(k, F, j),
        _.isFunction(j.opts.start) && j.opts.start.call(a, j),
        _.fx.timer(_.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
        j
          .progress(j.opts.progress)
          .done(j.opts.done, j.opts.complete)
          .fail(j.opts.fail)
          .always(j.opts.always)
      );
    }
    function J(a) {
      return function (b, c) {
        "string" != typeof b && ((c = b), (b = "*"));
        var d,
          e = 0,
          f = b.toLowerCase().match(na) || [];
        if (_.isFunction(c))
          for (; (d = f[e++]); )
            "+" === d[0]
              ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
              : (a[d] = a[d] || []).push(c);
      };
    }
    function K(a, b, c, d) {
      function e(h) {
        var i;
        return (
          (f[h] = !0),
          _.each(a[h] || [], function (a, h) {
            var j = h(b, c, d);
            return "string" != typeof j || g || f[j]
              ? g
                ? !(i = j)
                : void 0
              : (b.dataTypes.unshift(j), e(j), !1);
          }),
          i
        );
      }
      var f = {},
        g = a === tb;
      return e(b.dataTypes[0]) || (!f["*"] && e("*"));
    }
    function L(a, b) {
      var c,
        d,
        e = _.ajaxSettings.flatOptions || {};
      for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
      return d && _.extend(!0, a, d), a;
    }
    function M(a, b, c) {
      for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; )
        i.shift(),
          void 0 === d &&
            (d = a.mimeType || b.getResponseHeader("Content-Type"));
      if (d)
        for (e in h)
          if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break;
          }
      if (i[0] in c) f = i[0];
      else {
        for (e in c) {
          if (!i[0] || a.converters[e + " " + i[0]]) {
            f = e;
            break;
          }
          g || (g = e);
        }
        f = f || g;
      }
      return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function N(a, b, c, d) {
      var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();
      if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
      for (f = k.shift(); f; )
        if (
          (a.responseFields[f] && (c[a.responseFields[f]] = b),
          !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
          (i = f),
          (f = k.shift()))
        )
          if ("*" === f) f = i;
          else if ("*" !== i && i !== f) {
            if (((g = j[i + " " + f] || j["* " + f]), !g))
              for (e in j)
                if (
                  ((h = e.split(" ")),
                  h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
                ) {
                  g === !0
                    ? (g = j[e])
                    : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                  break;
                }
            if (g !== !0)
              if (g && a["throws"]) b = g(b);
              else
                try {
                  b = g(b);
                } catch (l) {
                  return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f,
                  };
                }
          }
      return { state: "success", data: b };
    }
    function O(a, b, c, d) {
      var e;
      if (_.isArray(b))
        _.each(b, function (b, e) {
          c || yb.test(a)
            ? d(a, e)
            : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        });
      else if (c || "object" !== _.type(b)) d(a, b);
      else for (e in b) O(a + "[" + e + "]", b[e], c, d);
    }
    function P(a) {
      return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    var Q = [],
      R = Q.slice,
      S = Q.concat,
      T = Q.push,
      U = Q.indexOf,
      V = {},
      W = V.toString,
      X = V.hasOwnProperty,
      Y = {},
      Z = a.document,
      $ = "2.1.3",
      _ = function (a, b) {
        return new _.fn.init(a, b);
      },
      aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      ba = /^-ms-/,
      ca = /-([\da-z])/gi,
      da = function (a, b) {
        return b.toUpperCase();
      };
    (_.fn = _.prototype =
      {
        jquery: $,
        constructor: _,
        selector: "",
        length: 0,
        toArray: function () {
          return R.call(this);
        },
        get: function (a) {
          return null != a
            ? 0 > a
              ? this[a + this.length]
              : this[a]
            : R.call(this);
        },
        pushStack: function (a) {
          var b = _.merge(this.constructor(), a);
          return (b.prevObject = this), (b.context = this.context), b;
        },
        each: function (a, b) {
          return _.each(this, a, b);
        },
        map: function (a) {
          return this.pushStack(
            _.map(this, function (b, c) {
              return a.call(b, c, b);
            })
          );
        },
        slice: function () {
          return this.pushStack(R.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (a) {
          var b = this.length,
            c = +a + (0 > a ? b : 0);
          return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor(null);
        },
        push: T,
        sort: Q.sort,
        splice: Q.splice,
      }),
      (_.extend = _.fn.extend =
        function () {
          var a,
            b,
            c,
            d,
            e,
            f,
            g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
          for (
            "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
              "object" == typeof g || _.isFunction(g) || (g = {}),
              h === i && ((g = this), h--);
            i > h;
            h++
          )
            if (null != (a = arguments[h]))
              for (b in a)
                (c = g[b]),
                  (d = a[b]),
                  g !== d &&
                    (j && d && (_.isPlainObject(d) || (e = _.isArray(d)))
                      ? (e
                          ? ((e = !1), (f = c && _.isArray(c) ? c : []))
                          : (f = c && _.isPlainObject(c) ? c : {}),
                        (g[b] = _.extend(j, f, d)))
                      : void 0 !== d && (g[b] = d));
          return g;
        }),
      _.extend({
        expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
          throw new Error(a);
        },
        noop: function () {},
        isFunction: function (a) {
          return "function" === _.type(a);
        },
        isArray: Array.isArray,
        isWindow: function (a) {
          return null != a && a === a.window;
        },
        isNumeric: function (a) {
          return !_.isArray(a) && a - parseFloat(a) + 1 >= 0;
        },
        isPlainObject: function (a) {
          return "object" !== _.type(a) || a.nodeType || _.isWindow(a)
            ? !1
            : !a.constructor ||
                X.call(a.constructor.prototype, "isPrototypeOf");
        },
        isEmptyObject: function (a) {
          var b;
          for (b in a) return !1;
          return !0;
        },
        type: function (a) {
          return null == a
            ? a + ""
            : "object" == typeof a || "function" == typeof a
            ? V[W.call(a)] || "object"
            : typeof a;
        },
        globalEval: function (a) {
          var b,
            c = eval;
          (a = _.trim(a)),
            a &&
              (1 === a.indexOf("use strict")
                ? ((b = Z.createElement("script")),
                  (b.text = a),
                  Z.head.appendChild(b).parentNode.removeChild(b))
                : c(a));
        },
        camelCase: function (a) {
          return a.replace(ba, "ms-").replace(ca, da);
        },
        nodeName: function (a, b) {
          return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function (a, b, d) {
          var e,
            f = 0,
            g = a.length,
            h = c(a);
          if (d) {
            if (h) for (; g > f && ((e = b.apply(a[f], d)), e !== !1); f++);
            else for (f in a) if (((e = b.apply(a[f], d)), e === !1)) break;
          } else if (h)
            for (; g > f && ((e = b.call(a[f], f, a[f])), e !== !1); f++);
          else for (f in a) if (((e = b.call(a[f], f, a[f])), e === !1)) break;
          return a;
        },
        trim: function (a) {
          return null == a ? "" : (a + "").replace(aa, "");
        },
        makeArray: function (a, b) {
          var d = b || [];
          return (
            null != a &&
              (c(Object(a))
                ? _.merge(d, "string" == typeof a ? [a] : a)
                : T.call(d, a)),
            d
          );
        },
        inArray: function (a, b, c) {
          return null == b ? -1 : U.call(b, a, c);
        },
        merge: function (a, b) {
          for (var c = +b.length, d = 0, e = a.length; c > d; d++)
            a[e++] = b[d];
          return (a.length = e), a;
        },
        grep: function (a, b, c) {
          for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
            (d = !b(a[f], f)), d !== h && e.push(a[f]);
          return e;
        },
        map: function (a, b, d) {
          var e,
            f = 0,
            g = a.length,
            h = c(a),
            i = [];
          if (h) for (; g > f; f++) (e = b(a[f], f, d)), null != e && i.push(e);
          else for (f in a) (e = b(a[f], f, d)), null != e && i.push(e);
          return S.apply([], i);
        },
        guid: 1,
        proxy: function (a, b) {
          var c, d, e;
          return (
            "string" == typeof b && ((c = a[b]), (b = a), (a = c)),
            _.isFunction(a)
              ? ((d = R.call(arguments, 2)),
                (e = function () {
                  return a.apply(b || this, d.concat(R.call(arguments)));
                }),
                (e.guid = a.guid = a.guid || _.guid++),
                e)
              : void 0
          );
        },
        now: Date.now,
        support: Y,
      }),
      _.each(
        "Boolean Number String Function Array Date RegExp Object Error".split(
          " "
        ),
        function (a, b) {
          V["[object " + b + "]"] = b.toLowerCase();
        }
      );
    var ea = (function (a) {
      function b(a, b, c, d) {
        var e, f, g, h, i, j, l, n, o, p;
        if (
          ((b ? b.ownerDocument || b : O) !== G && F(b),
          (b = b || G),
          (c = c || []),
          (h = b.nodeType),
          "string" != typeof a || !a || (1 !== h && 9 !== h && 11 !== h))
        )
          return c;
        if (!d && I) {
          if (11 !== h && (e = sa.exec(a)))
            if ((g = e[1])) {
              if (9 === h) {
                if (((f = b.getElementById(g)), !f || !f.parentNode)) return c;
                if (f.id === g) return c.push(f), c;
              } else if (
                b.ownerDocument &&
                (f = b.ownerDocument.getElementById(g)) &&
                M(b, f) &&
                f.id === g
              )
                return c.push(f), c;
            } else {
              if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
              if ((g = e[3]) && v.getElementsByClassName)
                return $.apply(c, b.getElementsByClassName(g)), c;
            }
          if (v.qsa && (!J || !J.test(a))) {
            if (
              ((n = l = N),
              (o = b),
              (p = 1 !== h && a),
              1 === h && "object" !== b.nodeName.toLowerCase())
            ) {
              for (
                j = z(a),
                  (l = b.getAttribute("id"))
                    ? (n = l.replace(ua, "\\$&"))
                    : b.setAttribute("id", n),
                  n = "[id='" + n + "'] ",
                  i = j.length;
                i--;

              )
                j[i] = n + m(j[i]);
              (o = (ta.test(a) && k(b.parentNode)) || b), (p = j.join(","));
            }
            if (p)
              try {
                return $.apply(c, o.querySelectorAll(p)), c;
              } catch (q) {
              } finally {
                l || b.removeAttribute("id");
              }
          }
        }
        return B(a.replace(ia, "$1"), b, c, d);
      }
      function c() {
        function a(c, d) {
          return (
            b.push(c + " ") > w.cacheLength && delete a[b.shift()],
            (a[c + " "] = d)
          );
        }
        var b = [];
        return a;
      }
      function d(a) {
        return (a[N] = !0), a;
      }
      function e(a) {
        var b = G.createElement("div");
        try {
          return !!a(b);
        } catch (c) {
          return !1;
        } finally {
          b.parentNode && b.parentNode.removeChild(b), (b = null);
        }
      }
      function f(a, b) {
        for (var c = a.split("|"), d = a.length; d--; ) w.attrHandle[c[d]] = b;
      }
      function g(a, b) {
        var c = b && a,
          d =
            c &&
            1 === a.nodeType &&
            1 === b.nodeType &&
            (~b.sourceIndex || V) - (~a.sourceIndex || V);
        if (d) return d;
        if (c) for (; (c = c.nextSibling); ) if (c === b) return -1;
        return a ? 1 : -1;
      }
      function h(a) {
        return function (b) {
          var c = b.nodeName.toLowerCase();
          return "input" === c && b.type === a;
        };
      }
      function i(a) {
        return function (b) {
          var c = b.nodeName.toLowerCase();
          return ("input" === c || "button" === c) && b.type === a;
        };
      }
      function j(a) {
        return d(function (b) {
          return (
            (b = +b),
            d(function (c, d) {
              for (var e, f = a([], c.length, b), g = f.length; g--; )
                c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
            })
          );
        });
      }
      function k(a) {
        return a && "undefined" != typeof a.getElementsByTagName && a;
      }
      function l() {}
      function m(a) {
        for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
        return d;
      }
      function n(a, b, c) {
        var d = b.dir,
          e = c && "parentNode" === d,
          f = Q++;
        return b.first
          ? function (b, c, f) {
              for (; (b = b[d]); ) if (1 === b.nodeType || e) return a(b, c, f);
            }
          : function (b, c, g) {
              var h,
                i,
                j = [P, f];
              if (g) {
                for (; (b = b[d]); )
                  if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
              } else
                for (; (b = b[d]); )
                  if (1 === b.nodeType || e) {
                    if (
                      ((i = b[N] || (b[N] = {})),
                      (h = i[d]) && h[0] === P && h[1] === f)
                    )
                      return (j[2] = h[2]);
                    if (((i[d] = j), (j[2] = a(b, c, g)))) return !0;
                  }
            };
      }
      function o(a) {
        return a.length > 1
          ? function (b, c, d) {
              for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
              return !0;
            }
          : a[0];
      }
      function p(a, c, d) {
        for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
        return d;
      }
      function q(a, b, c, d, e) {
        for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
          (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
        return g;
      }
      function r(a, b, c, e, f, g) {
        return (
          e && !e[N] && (e = r(e)),
          f && !f[N] && (f = r(f, g)),
          d(function (d, g, h, i) {
            var j,
              k,
              l,
              m = [],
              n = [],
              o = g.length,
              r = d || p(b || "*", h.nodeType ? [h] : h, []),
              s = !a || (!d && b) ? r : q(r, m, a, h, i),
              t = c ? (f || (d ? a : o || e) ? [] : g) : s;
            if ((c && c(s, t, h, i), e))
              for (j = q(t, n), e(j, [], h, i), k = j.length; k--; )
                (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
            if (d) {
              if (f || a) {
                if (f) {
                  for (j = [], k = t.length; k--; )
                    (l = t[k]) && j.push((s[k] = l));
                  f(null, (t = []), j, i);
                }
                for (k = t.length; k--; )
                  (l = t[k]) &&
                    (j = f ? aa(d, l) : m[k]) > -1 &&
                    (d[j] = !(g[j] = l));
              }
            } else (t = q(t === g ? t.splice(o, t.length) : t)), f ? f(null, g, t, i) : $.apply(g, t);
          })
        );
      }
      function s(a) {
        for (
          var b,
            c,
            d,
            e = a.length,
            f = w.relative[a[0].type],
            g = f || w.relative[" "],
            h = f ? 1 : 0,
            i = n(
              function (a) {
                return a === b;
              },
              g,
              !0
            ),
            j = n(
              function (a) {
                return aa(b, a) > -1;
              },
              g,
              !0
            ),
            k = [
              function (a, c, d) {
                var e =
                  (!f && (d || c !== C)) ||
                  ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                return (b = null), e;
              },
            ];
          e > h;
          h++
        )
          if ((c = w.relative[a[h].type])) k = [n(o(k), c)];
          else {
            if (((c = w.filter[a[h].type].apply(null, a[h].matches)), c[N])) {
              for (d = ++h; e > d && !w.relative[a[d].type]; d++);
              return r(
                h > 1 && o(k),
                h > 1 &&
                  m(
                    a
                      .slice(0, h - 1)
                      .concat({ value: " " === a[h - 2].type ? "*" : "" })
                  ).replace(ia, "$1"),
                c,
                d > h && s(a.slice(h, d)),
                e > d && s((a = a.slice(d))),
                e > d && m(a)
              );
            }
            k.push(c);
          }
        return o(k);
      }
      function t(a, c) {
        var e = c.length > 0,
          f = a.length > 0,
          g = function (d, g, h, i, j) {
            var k,
              l,
              m,
              n = 0,
              o = "0",
              p = d && [],
              r = [],
              s = C,
              t = d || (f && w.find.TAG("*", j)),
              u = (P += null == s ? 1 : Math.random() || 0.1),
              v = t.length;
            for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
              if (f && k) {
                for (l = 0; (m = a[l++]); )
                  if (m(k, g, h)) {
                    i.push(k);
                    break;
                  }
                j && (P = u);
              }
              e && ((k = !m && k) && n--, d && p.push(k));
            }
            if (((n += o), e && o !== n)) {
              for (l = 0; (m = c[l++]); ) m(p, r, g, h);
              if (d) {
                if (n > 0) for (; o--; ) p[o] || r[o] || (r[o] = Y.call(i));
                r = q(r);
              }
              $.apply(i, r),
                j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i);
            }
            return j && ((P = u), (C = s)), p;
          };
        return e ? d(g) : g;
      }
      var u,
        v,
        w,
        x,
        y,
        z,
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H,
        I,
        J,
        K,
        L,
        M,
        N = "sizzle" + 1 * new Date(),
        O = a.document,
        P = 0,
        Q = 0,
        R = c(),
        S = c(),
        T = c(),
        U = function (a, b) {
          return a === b && (E = !0), 0;
        },
        V = 1 << 31,
        W = {}.hasOwnProperty,
        X = [],
        Y = X.pop,
        Z = X.push,
        $ = X.push,
        _ = X.slice,
        aa = function (a, b) {
          for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
          return -1;
        },
        ba =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ca = "[\\x20\\t\\r\\n\\f]",
        da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ea = da.replace("w", "w#"),
        fa =
          "\\[" +
          ca +
          "*(" +
          da +
          ")(?:" +
          ca +
          "*([*^$|!~]?=)" +
          ca +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          ea +
          "))|)" +
          ca +
          "*\\]",
        ga =
          ":(" +
          da +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          fa +
          ")*)|.*)\\)|)",
        ha = new RegExp(ca + "+", "g"),
        ia = new RegExp(
          "^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$",
          "g"
        ),
        ja = new RegExp("^" + ca + "*," + ca + "*"),
        ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
        la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
        ma = new RegExp(ga),
        na = new RegExp("^" + ea + "$"),
        oa = {
          ID: new RegExp("^#(" + da + ")"),
          CLASS: new RegExp("^\\.(" + da + ")"),
          TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + fa),
          PSEUDO: new RegExp("^" + ga),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              ca +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              ca +
              "*(?:([+-]|)" +
              ca +
              "*(\\d+)|))" +
              ca +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + ba + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              ca +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              ca +
              "*((?:-\\d)?\\d*)" +
              ca +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        pa = /^(?:input|select|textarea|button)$/i,
        qa = /^h\d$/i,
        ra = /^[^{]+\{\s*\[native \w/,
        sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ta = /[+~]/,
        ua = /'|\\/g,
        va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
        wa = function (a, b, c) {
          var d = "0x" + b - 65536;
          return d !== d || c
            ? b
            : 0 > d
            ? String.fromCharCode(d + 65536)
            : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
        },
        xa = function () {
          F();
        };
      try {
        $.apply((X = _.call(O.childNodes)), O.childNodes),
          X[O.childNodes.length].nodeType;
      } catch (ya) {
        $ = {
          apply: X.length
            ? function (a, b) {
                Z.apply(a, _.call(b));
              }
            : function (a, b) {
                for (var c = a.length, d = 0; (a[c++] = b[d++]); );
                a.length = c - 1;
              },
        };
      }
      (v = b.support = {}),
        (y = b.isXML =
          function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
          }),
        (F = b.setDocument =
          function (a) {
            var b,
              c,
              d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement
              ? ((G = d),
                (H = d.documentElement),
                (c = d.defaultView),
                c &&
                  c !== c.top &&
                  (c.addEventListener
                    ? c.addEventListener("unload", xa, !1)
                    : c.attachEvent && c.attachEvent("onunload", xa)),
                (I = !y(d)),
                (v.attributes = e(function (a) {
                  return (a.className = "i"), !a.getAttribute("className");
                })),
                (v.getElementsByTagName = e(function (a) {
                  return (
                    a.appendChild(d.createComment("")),
                    !a.getElementsByTagName("*").length
                  );
                })),
                (v.getElementsByClassName = ra.test(d.getElementsByClassName)),
                (v.getById = e(function (a) {
                  return (
                    (H.appendChild(a).id = N),
                    !d.getElementsByName || !d.getElementsByName(N).length
                  );
                })),
                v.getById
                  ? ((w.find.ID = function (a, b) {
                      if ("undefined" != typeof b.getElementById && I) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [c] : [];
                      }
                    }),
                    (w.filter.ID = function (a) {
                      var b = a.replace(va, wa);
                      return function (a) {
                        return a.getAttribute("id") === b;
                      };
                    }))
                  : (delete w.find.ID,
                    (w.filter.ID = function (a) {
                      var b = a.replace(va, wa);
                      return function (a) {
                        var c =
                          "undefined" != typeof a.getAttributeNode &&
                          a.getAttributeNode("id");
                        return c && c.value === b;
                      };
                    })),
                (w.find.TAG = v.getElementsByTagName
                  ? function (a, b) {
                      return "undefined" != typeof b.getElementsByTagName
                        ? b.getElementsByTagName(a)
                        : v.qsa
                        ? b.querySelectorAll(a)
                        : void 0;
                    }
                  : function (a, b) {
                      var c,
                        d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                      if ("*" === a) {
                        for (; (c = f[e++]); ) 1 === c.nodeType && d.push(c);
                        return d;
                      }
                      return f;
                    }),
                (w.find.CLASS =
                  v.getElementsByClassName &&
                  function (a, b) {
                    return I ? b.getElementsByClassName(a) : void 0;
                  }),
                (K = []),
                (J = []),
                (v.qsa = ra.test(d.querySelectorAll)) &&
                  (e(function (a) {
                    (H.appendChild(a).innerHTML =
                      "<a id='" +
                      N +
                      "'></a><select id='" +
                      N +
                      "-\f]' msallowcapture=''><option selected=''></option></select>"),
                      a.querySelectorAll("[msallowcapture^='']").length &&
                        J.push("[*^$]=" + ca + "*(?:''|\"\")"),
                      a.querySelectorAll("[selected]").length ||
                        J.push("\\[" + ca + "*(?:value|" + ba + ")"),
                      a.querySelectorAll("[id~=" + N + "-]").length ||
                        J.push("~="),
                      a.querySelectorAll(":checked").length ||
                        J.push(":checked"),
                      a.querySelectorAll("a#" + N + "+*").length ||
                        J.push(".#.+[+~]");
                  }),
                  e(function (a) {
                    var b = d.createElement("input");
                    b.setAttribute("type", "hidden"),
                      a.appendChild(b).setAttribute("name", "D"),
                      a.querySelectorAll("[name=d]").length &&
                        J.push("name" + ca + "*[*^$|!~]?="),
                      a.querySelectorAll(":enabled").length ||
                        J.push(":enabled", ":disabled"),
                      a.querySelectorAll("*,:x"),
                      J.push(",.*:");
                  })),
                (v.matchesSelector = ra.test(
                  (L =
                    H.matches ||
                    H.webkitMatchesSelector ||
                    H.mozMatchesSelector ||
                    H.oMatchesSelector ||
                    H.msMatchesSelector)
                )) &&
                  e(function (a) {
                    (v.disconnectedMatch = L.call(a, "div")),
                      L.call(a, "[s!='']:x"),
                      K.push("!=", ga);
                  }),
                (J = J.length && new RegExp(J.join("|"))),
                (K = K.length && new RegExp(K.join("|"))),
                (b = ra.test(H.compareDocumentPosition)),
                (M =
                  b || ra.test(H.contains)
                    ? function (a, b) {
                        var c = 9 === a.nodeType ? a.documentElement : a,
                          d = b && b.parentNode;
                        return (
                          a === d ||
                          !(
                            !d ||
                            1 !== d.nodeType ||
                            !(c.contains
                              ? c.contains(d)
                              : a.compareDocumentPosition &&
                                16 & a.compareDocumentPosition(d))
                          )
                        );
                      }
                    : function (a, b) {
                        if (b)
                          for (; (b = b.parentNode); ) if (b === a) return !0;
                        return !1;
                      }),
                (U = b
                  ? function (a, b) {
                      if (a === b) return (E = !0), 0;
                      var c =
                        !a.compareDocumentPosition - !b.compareDocumentPosition;
                      return c
                        ? c
                        : ((c =
                            (a.ownerDocument || a) === (b.ownerDocument || b)
                              ? a.compareDocumentPosition(b)
                              : 1),
                          1 & c ||
                          (!v.sortDetached &&
                            b.compareDocumentPosition(a) === c)
                            ? a === d || (a.ownerDocument === O && M(O, a))
                              ? -1
                              : b === d || (b.ownerDocument === O && M(O, b))
                              ? 1
                              : D
                              ? aa(D, a) - aa(D, b)
                              : 0
                            : 4 & c
                            ? -1
                            : 1);
                    }
                  : function (a, b) {
                      if (a === b) return (E = !0), 0;
                      var c,
                        e = 0,
                        f = a.parentNode,
                        h = b.parentNode,
                        i = [a],
                        j = [b];
                      if (!f || !h)
                        return a === d
                          ? -1
                          : b === d
                          ? 1
                          : f
                          ? -1
                          : h
                          ? 1
                          : D
                          ? aa(D, a) - aa(D, b)
                          : 0;
                      if (f === h) return g(a, b);
                      for (c = a; (c = c.parentNode); ) i.unshift(c);
                      for (c = b; (c = c.parentNode); ) j.unshift(c);
                      for (; i[e] === j[e]; ) e++;
                      return e
                        ? g(i[e], j[e])
                        : i[e] === O
                        ? -1
                        : j[e] === O
                        ? 1
                        : 0;
                    }),
                d)
              : G;
          }),
        (b.matches = function (a, c) {
          return b(a, null, null, c);
        }),
        (b.matchesSelector = function (a, c) {
          if (
            ((a.ownerDocument || a) !== G && F(a),
            (c = c.replace(la, "='$1']")),
            v.matchesSelector && I && (!K || !K.test(c)) && (!J || !J.test(c)))
          )
            try {
              var d = L.call(a, c);
              if (
                d ||
                v.disconnectedMatch ||
                (a.document && 11 !== a.document.nodeType)
              )
                return d;
            } catch (e) {}
          return b(c, G, null, [a]).length > 0;
        }),
        (b.contains = function (a, b) {
          return (a.ownerDocument || a) !== G && F(a), M(a, b);
        }),
        (b.attr = function (a, b) {
          (a.ownerDocument || a) !== G && F(a);
          var c = w.attrHandle[b.toLowerCase()],
            d =
              c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
          return void 0 !== d
            ? d
            : v.attributes || !I
            ? a.getAttribute(b)
            : (d = a.getAttributeNode(b)) && d.specified
            ? d.value
            : null;
        }),
        (b.error = function (a) {
          throw new Error("Syntax error, unrecognized expression: " + a);
        }),
        (b.uniqueSort = function (a) {
          var b,
            c = [],
            d = 0,
            e = 0;
          if (
            ((E = !v.detectDuplicates),
            (D = !v.sortStable && a.slice(0)),
            a.sort(U),
            E)
          ) {
            for (; (b = a[e++]); ) b === a[e] && (d = c.push(e));
            for (; d--; ) a.splice(c[d], 1);
          }
          return (D = null), a;
        }),
        (x = b.getText =
          function (a) {
            var b,
              c = "",
              d = 0,
              e = a.nodeType;
            if (e) {
              if (1 === e || 9 === e || 11 === e) {
                if ("string" == typeof a.textContent) return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling) c += x(a);
              } else if (3 === e || 4 === e) return a.nodeValue;
            } else for (; (b = a[d++]); ) c += x(b);
            return c;
          }),
        (w = b.selectors =
          {
            cacheLength: 50,
            createPseudo: d,
            match: oa,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (a) {
                return (
                  (a[1] = a[1].replace(va, wa)),
                  (a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa)),
                  "~=" === a[2] && (a[3] = " " + a[3] + " "),
                  a.slice(0, 4)
                );
              },
              CHILD: function (a) {
                return (
                  (a[1] = a[1].toLowerCase()),
                  "nth" === a[1].slice(0, 3)
                    ? (a[3] || b.error(a[0]),
                      (a[4] = +(a[4]
                        ? a[5] + (a[6] || 1)
                        : 2 * ("even" === a[3] || "odd" === a[3]))),
                      (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                    : a[3] && b.error(a[0]),
                  a
                );
              },
              PSEUDO: function (a) {
                var b,
                  c = !a[6] && a[2];
                return oa.CHILD.test(a[0])
                  ? null
                  : (a[3]
                      ? (a[2] = a[4] || a[5] || "")
                      : c &&
                        ma.test(c) &&
                        (b = z(c, !0)) &&
                        (b = c.indexOf(")", c.length - b) - c.length) &&
                        ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                    a.slice(0, 3));
              },
            },
            filter: {
              TAG: function (a) {
                var b = a.replace(va, wa).toLowerCase();
                return "*" === a
                  ? function () {
                      return !0;
                    }
                  : function (a) {
                      return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
              },
              CLASS: function (a) {
                var b = R[a + " "];
                return (
                  b ||
                  ((b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) &&
                    R(a, function (a) {
                      return b.test(
                        ("string" == typeof a.className && a.className) ||
                          ("undefined" != typeof a.getAttribute &&
                            a.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (a, c, d) {
                return function (e) {
                  var f = b.attr(e, a);
                  return null == f
                    ? "!=" === c
                    : c
                    ? ((f += ""),
                      "=" === c
                        ? f === d
                        : "!=" === c
                        ? f !== d
                        : "^=" === c
                        ? d && 0 === f.indexOf(d)
                        : "*=" === c
                        ? d && f.indexOf(d) > -1
                        : "$=" === c
                        ? d && f.slice(-d.length) === d
                        : "~=" === c
                        ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1
                        : "|=" === c
                        ? f === d || f.slice(0, d.length + 1) === d + "-"
                        : !1)
                    : !0;
                };
              },
              CHILD: function (a, b, c, d, e) {
                var f = "nth" !== a.slice(0, 3),
                  g = "last" !== a.slice(-4),
                  h = "of-type" === b;
                return 1 === d && 0 === e
                  ? function (a) {
                      return !!a.parentNode;
                    }
                  : function (b, c, i) {
                      var j,
                        k,
                        l,
                        m,
                        n,
                        o,
                        p = f !== g ? "nextSibling" : "previousSibling",
                        q = b.parentNode,
                        r = h && b.nodeName.toLowerCase(),
                        s = !i && !h;
                      if (q) {
                        if (f) {
                          for (; p; ) {
                            for (l = b; (l = l[p]); )
                              if (
                                h
                                  ? l.nodeName.toLowerCase() === r
                                  : 1 === l.nodeType
                              )
                                return !1;
                            o = p = "only" === a && !o && "nextSibling";
                          }
                          return !0;
                        }
                        if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                          for (
                            k = q[N] || (q[N] = {}),
                              j = k[a] || [],
                              n = j[0] === P && j[1],
                              m = j[0] === P && j[2],
                              l = n && q.childNodes[n];
                            (l = (++n && l && l[p]) || (m = n = 0) || o.pop());

                          )
                            if (1 === l.nodeType && ++m && l === b) {
                              k[a] = [P, n, m];
                              break;
                            }
                        } else if (
                          s &&
                          (j = (b[N] || (b[N] = {}))[a]) &&
                          j[0] === P
                        )
                          m = j[1];
                        else
                          for (
                            ;
                            (l =
                              (++n && l && l[p]) || (m = n = 0) || o.pop()) &&
                            ((h
                              ? l.nodeName.toLowerCase() !== r
                              : 1 !== l.nodeType) ||
                              !++m ||
                              (s && ((l[N] || (l[N] = {}))[a] = [P, m]),
                              l !== b));

                          );
                        return (m -= e), m === d || (m % d === 0 && m / d >= 0);
                      }
                    };
              },
              PSEUDO: function (a, c) {
                var e,
                  f =
                    w.pseudos[a] ||
                    w.setFilters[a.toLowerCase()] ||
                    b.error("unsupported pseudo: " + a);
                return f[N]
                  ? f(c)
                  : f.length > 1
                  ? ((e = [a, a, "", c]),
                    w.setFilters.hasOwnProperty(a.toLowerCase())
                      ? d(function (a, b) {
                          for (var d, e = f(a, c), g = e.length; g--; )
                            (d = aa(a, e[g])), (a[d] = !(b[d] = e[g]));
                        })
                      : function (a) {
                          return f(a, 0, e);
                        })
                  : f;
              },
            },
            pseudos: {
              not: d(function (a) {
                var b = [],
                  c = [],
                  e = A(a.replace(ia, "$1"));
                return e[N]
                  ? d(function (a, b, c, d) {
                      for (var f, g = e(a, null, d, []), h = a.length; h--; )
                        (f = g[h]) && (a[h] = !(b[h] = f));
                    })
                  : function (a, d, f) {
                      return (
                        (b[0] = a), e(b, null, f, c), (b[0] = null), !c.pop()
                      );
                    };
              }),
              has: d(function (a) {
                return function (c) {
                  return b(a, c).length > 0;
                };
              }),
              contains: d(function (a) {
                return (
                  (a = a.replace(va, wa)),
                  function (b) {
                    return (
                      (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                    );
                  }
                );
              }),
              lang: d(function (a) {
                return (
                  na.test(a || "") || b.error("unsupported lang: " + a),
                  (a = a.replace(va, wa).toLowerCase()),
                  function (b) {
                    var c;
                    do
                      if (
                        (c = I
                          ? b.lang
                          : b.getAttribute("xml:lang") ||
                            b.getAttribute("lang"))
                      )
                        return (
                          (c = c.toLowerCase()),
                          c === a || 0 === c.indexOf(a + "-")
                        );
                    while ((b = b.parentNode) && 1 === b.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (b) {
                var c = a.location && a.location.hash;
                return c && c.slice(1) === b.id;
              },
              root: function (a) {
                return a === H;
              },
              focus: function (a) {
                return (
                  a === G.activeElement &&
                  (!G.hasFocus || G.hasFocus()) &&
                  !!(a.type || a.href || ~a.tabIndex)
                );
              },
              enabled: function (a) {
                return a.disabled === !1;
              },
              disabled: function (a) {
                return a.disabled === !0;
              },
              checked: function (a) {
                var b = a.nodeName.toLowerCase();
                return (
                  ("input" === b && !!a.checked) ||
                  ("option" === b && !!a.selected)
                );
              },
              selected: function (a) {
                return (
                  a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                );
              },
              empty: function (a) {
                for (a = a.firstChild; a; a = a.nextSibling)
                  if (a.nodeType < 6) return !1;
                return !0;
              },
              parent: function (a) {
                return !w.pseudos.empty(a);
              },
              header: function (a) {
                return qa.test(a.nodeName);
              },
              input: function (a) {
                return pa.test(a.nodeName);
              },
              button: function (a) {
                var b = a.nodeName.toLowerCase();
                return ("input" === b && "button" === a.type) || "button" === b;
              },
              text: function (a) {
                var b;
                return (
                  "input" === a.nodeName.toLowerCase() &&
                  "text" === a.type &&
                  (null == (b = a.getAttribute("type")) ||
                    "text" === b.toLowerCase())
                );
              },
              first: j(function () {
                return [0];
              }),
              last: j(function (a, b) {
                return [b - 1];
              }),
              eq: j(function (a, b, c) {
                return [0 > c ? c + b : c];
              }),
              even: j(function (a, b) {
                for (var c = 0; b > c; c += 2) a.push(c);
                return a;
              }),
              odd: j(function (a, b) {
                for (var c = 1; b > c; c += 2) a.push(c);
                return a;
              }),
              lt: j(function (a, b, c) {
                for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                return a;
              }),
              gt: j(function (a, b, c) {
                for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                return a;
              }),
            },
          }),
        (w.pseudos.nth = w.pseudos.eq);
      for (u in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        w.pseudos[u] = h(u);
      for (u in { submit: !0, reset: !0 }) w.pseudos[u] = i(u);
      return (
        (l.prototype = w.filters = w.pseudos),
        (w.setFilters = new l()),
        (z = b.tokenize =
          function (a, c) {
            var d,
              e,
              f,
              g,
              h,
              i,
              j,
              k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h; ) {
              (d && !(e = ja.exec(h))) ||
                (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
                (d = !1),
                (e = ka.exec(h)) &&
                  ((d = e.shift()),
                  f.push({ value: d, type: e[0].replace(ia, " ") }),
                  (h = h.slice(d.length)));
              for (g in w.filter)
                !(e = oa[g].exec(h)) ||
                  (j[g] && !(e = j[g](e))) ||
                  ((d = e.shift()),
                  f.push({ value: d, type: g, matches: e }),
                  (h = h.slice(d.length)));
              if (!d) break;
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0);
          }),
        (A = b.compile =
          function (a, b) {
            var c,
              d = [],
              e = [],
              f = T[a + " "];
            if (!f) {
              for (b || (b = z(a)), c = b.length; c--; )
                (f = s(b[c])), f[N] ? d.push(f) : e.push(f);
              (f = T(a, t(e, d))), (f.selector = a);
            }
            return f;
          }),
        (B = b.select =
          function (a, b, c, d) {
            var e,
              f,
              g,
              h,
              i,
              j = "function" == typeof a && a,
              l = !d && z((a = j.selector || a));
            if (((c = c || []), 1 === l.length)) {
              if (
                ((f = l[0] = l[0].slice(0)),
                f.length > 2 &&
                  "ID" === (g = f[0]).type &&
                  v.getById &&
                  9 === b.nodeType &&
                  I &&
                  w.relative[f[1].type])
              ) {
                if (
                  ((b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0]),
                  !b)
                )
                  return c;
                j && (b = b.parentNode), (a = a.slice(f.shift().value.length));
              }
              for (
                e = oa.needsContext.test(a) ? 0 : f.length;
                e-- && ((g = f[e]), !w.relative[(h = g.type)]);

              )
                if (
                  (i = w.find[h]) &&
                  (d = i(
                    g.matches[0].replace(va, wa),
                    (ta.test(f[0].type) && k(b.parentNode)) || b
                  ))
                ) {
                  if ((f.splice(e, 1), (a = d.length && m(f)), !a))
                    return $.apply(c, d), c;
                  break;
                }
            }
            return (
              (j || A(a, l))(d, b, !I, c, (ta.test(a) && k(b.parentNode)) || b),
              c
            );
          }),
        (v.sortStable = N.split("").sort(U).join("") === N),
        (v.detectDuplicates = !!E),
        F(),
        (v.sortDetached = e(function (a) {
          return 1 & a.compareDocumentPosition(G.createElement("div"));
        })),
        e(function (a) {
          return (
            (a.innerHTML = "<a href='#'></a>"),
            "#" === a.firstChild.getAttribute("href")
          );
        }) ||
          f("type|href|height|width", function (a, b, c) {
            return c
              ? void 0
              : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
          }),
        (v.attributes &&
          e(function (a) {
            return (
              (a.innerHTML = "<input/>"),
              a.firstChild.setAttribute("value", ""),
              "" === a.firstChild.getAttribute("value")
            );
          })) ||
          f("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase()
              ? void 0
              : a.defaultValue;
          }),
        e(function (a) {
          return null == a.getAttribute("disabled");
        }) ||
          f(ba, function (a, b, c) {
            var d;
            return c
              ? void 0
              : a[b] === !0
              ? b.toLowerCase()
              : (d = a.getAttributeNode(b)) && d.specified
              ? d.value
              : null;
          }),
        b
      );
    })(a);
    (_.find = ea),
      (_.expr = ea.selectors),
      (_.expr[":"] = _.expr.pseudos),
      (_.unique = ea.uniqueSort),
      (_.text = ea.getText),
      (_.isXMLDoc = ea.isXML),
      (_.contains = ea.contains);
    var fa = _.expr.match.needsContext,
      ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      ha = /^.[^:#\[\.,]*$/;
    (_.filter = function (a, b, c) {
      var d = b[0];
      return (
        c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType
          ? _.find.matchesSelector(d, a)
            ? [d]
            : []
          : _.find.matches(
              a,
              _.grep(b, function (a) {
                return 1 === a.nodeType;
              })
            )
      );
    }),
      _.fn.extend({
        find: function (a) {
          var b,
            c = this.length,
            d = [],
            e = this;
          if ("string" != typeof a)
            return this.pushStack(
              _(a).filter(function () {
                for (b = 0; c > b; b++) if (_.contains(e[b], this)) return !0;
              })
            );
          for (b = 0; c > b; b++) _.find(a, e[b], d);
          return (
            (d = this.pushStack(c > 1 ? _.unique(d) : d)),
            (d.selector = this.selector ? this.selector + " " + a : a),
            d
          );
        },
        filter: function (a) {
          return this.pushStack(d(this, a || [], !1));
        },
        not: function (a) {
          return this.pushStack(d(this, a || [], !0));
        },
        is: function (a) {
          return !!d(
            this,
            "string" == typeof a && fa.test(a) ? _(a) : a || [],
            !1
          ).length;
        },
      });
    var ia,
      ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      ka = (_.fn.init = function (a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
          if (
            ((c =
              "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
                ? [null, a, null]
                : ja.exec(a)),
            !c || (!c[1] && b))
          )
            return !b || b.jquery
              ? (b || ia).find(a)
              : this.constructor(b).find(a);
          if (c[1]) {
            if (
              ((b = b instanceof _ ? b[0] : b),
              _.merge(
                this,
                _.parseHTML(
                  c[1],
                  b && b.nodeType ? b.ownerDocument || b : Z,
                  !0
                )
              ),
              ga.test(c[1]) && _.isPlainObject(b))
            )
              for (c in b)
                _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
            return this;
          }
          return (
            (d = Z.getElementById(c[2])),
            d && d.parentNode && ((this.length = 1), (this[0] = d)),
            (this.context = Z),
            (this.selector = a),
            this
          );
        }
        return a.nodeType
          ? ((this.context = this[0] = a), (this.length = 1), this)
          : _.isFunction(a)
          ? "undefined" != typeof ia.ready
            ? ia.ready(a)
            : a(_)
          : (void 0 !== a.selector &&
              ((this.selector = a.selector), (this.context = a.context)),
            _.makeArray(a, this));
      });
    (ka.prototype = _.fn), (ia = _(Z));
    var la = /^(?:parents|prev(?:Until|All))/,
      ma = { children: !0, contents: !0, next: !0, prev: !0 };
    _.extend({
      dir: function (a, b, c) {
        for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; )
          if (1 === a.nodeType) {
            if (e && _(a).is(c)) break;
            d.push(a);
          }
        return d;
      },
      sibling: function (a, b) {
        for (var c = []; a; a = a.nextSibling)
          1 === a.nodeType && a !== b && c.push(a);
        return c;
      },
    }),
      _.fn.extend({
        has: function (a) {
          var b = _(a, this),
            c = b.length;
          return this.filter(function () {
            for (var a = 0; c > a; a++) if (_.contains(this, b[a])) return !0;
          });
        },
        closest: function (a, b) {
          for (
            var c,
              d = 0,
              e = this.length,
              f = [],
              g =
                fa.test(a) || "string" != typeof a
                  ? _(a, b || this.context)
                  : 0;
            e > d;
            d++
          )
            for (c = this[d]; c && c !== b; c = c.parentNode)
              if (
                c.nodeType < 11 &&
                (g
                  ? g.index(c) > -1
                  : 1 === c.nodeType && _.find.matchesSelector(c, a))
              ) {
                f.push(c);
                break;
              }
          return this.pushStack(f.length > 1 ? _.unique(f) : f);
        },
        index: function (a) {
          return a
            ? "string" == typeof a
              ? U.call(_(a), this[0])
              : U.call(this, a.jquery ? a[0] : a)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (a, b) {
          return this.pushStack(_.unique(_.merge(this.get(), _(a, b))));
        },
        addBack: function (a) {
          return this.add(
            null == a ? this.prevObject : this.prevObject.filter(a)
          );
        },
      }),
      _.each(
        {
          parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
          },
          parents: function (a) {
            return _.dir(a, "parentNode");
          },
          parentsUntil: function (a, b, c) {
            return _.dir(a, "parentNode", c);
          },
          next: function (a) {
            return e(a, "nextSibling");
          },
          prev: function (a) {
            return e(a, "previousSibling");
          },
          nextAll: function (a) {
            return _.dir(a, "nextSibling");
          },
          prevAll: function (a) {
            return _.dir(a, "previousSibling");
          },
          nextUntil: function (a, b, c) {
            return _.dir(a, "nextSibling", c);
          },
          prevUntil: function (a, b, c) {
            return _.dir(a, "previousSibling", c);
          },
          siblings: function (a) {
            return _.sibling((a.parentNode || {}).firstChild, a);
          },
          children: function (a) {
            return _.sibling(a.firstChild);
          },
          contents: function (a) {
            return a.contentDocument || _.merge([], a.childNodes);
          },
        },
        function (a, b) {
          _.fn[a] = function (c, d) {
            var e = _.map(this, b, c);
            return (
              "Until" !== a.slice(-5) && (d = c),
              d && "string" == typeof d && (e = _.filter(d, e)),
              this.length > 1 &&
                (ma[a] || _.unique(e), la.test(a) && e.reverse()),
              this.pushStack(e)
            );
          };
        }
      );
    var na = /\S+/g,
      oa = {};
    (_.Callbacks = function (a) {
      a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
      var b,
        c,
        d,
        e,
        g,
        h,
        i = [],
        j = !a.once && [],
        k = function (f) {
          for (
            b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0;
            i && g > h;
            h++
          )
            if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
              b = !1;
              break;
            }
          (d = !1),
            i && (j ? j.length && k(j.shift()) : b ? (i = []) : l.disable());
        },
        l = {
          add: function () {
            if (i) {
              var c = i.length;
              !(function f(b) {
                _.each(b, function (b, c) {
                  var d = _.type(c);
                  "function" === d
                    ? (a.unique && l.has(c)) || i.push(c)
                    : c && c.length && "string" !== d && f(c);
                });
              })(arguments),
                d ? (g = i.length) : b && ((e = c), k(b));
            }
            return this;
          },
          remove: function () {
            return (
              i &&
                _.each(arguments, function (a, b) {
                  for (var c; (c = _.inArray(b, i, c)) > -1; )
                    i.splice(c, 1), d && (g >= c && g--, h >= c && h--);
                }),
              this
            );
          },
          has: function (a) {
            return a ? _.inArray(a, i) > -1 : !(!i || !i.length);
          },
          empty: function () {
            return (i = []), (g = 0), this;
          },
          disable: function () {
            return (i = j = b = void 0), this;
          },
          disabled: function () {
            return !i;
          },
          lock: function () {
            return (j = void 0), b || l.disable(), this;
          },
          locked: function () {
            return !j;
          },
          fireWith: function (a, b) {
            return (
              !i ||
                (c && !j) ||
                ((b = b || []),
                (b = [a, b.slice ? b.slice() : b]),
                d ? j.push(b) : k(b)),
              this
            );
          },
          fire: function () {
            return l.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!c;
          },
        };
      return l;
    }),
      _.extend({
        Deferred: function (a) {
          var b = [
              ["resolve", "done", _.Callbacks("once memory"), "resolved"],
              ["reject", "fail", _.Callbacks("once memory"), "rejected"],
              ["notify", "progress", _.Callbacks("memory")],
            ],
            c = "pending",
            d = {
              state: function () {
                return c;
              },
              always: function () {
                return e.done(arguments).fail(arguments), this;
              },
              then: function () {
                var a = arguments;
                return _.Deferred(function (c) {
                  _.each(b, function (b, f) {
                    var g = _.isFunction(a[b]) && a[b];
                    e[f[1]](function () {
                      var a = g && g.apply(this, arguments);
                      a && _.isFunction(a.promise)
                        ? a
                            .promise()
                            .done(c.resolve)
                            .fail(c.reject)
                            .progress(c.notify)
                        : c[f[0] + "With"](
                            this === d ? c.promise() : this,
                            g ? [a] : arguments
                          );
                    });
                  }),
                    (a = null);
                }).promise();
              },
              promise: function (a) {
                return null != a ? _.extend(a, d) : d;
              },
            },
            e = {};
          return (
            (d.pipe = d.then),
            _.each(b, function (a, f) {
              var g = f[2],
                h = f[3];
              (d[f[1]] = g.add),
                h &&
                  g.add(
                    function () {
                      c = h;
                    },
                    b[1 ^ a][2].disable,
                    b[2][2].lock
                  ),
                (e[f[0]] = function () {
                  return (
                    e[f[0] + "With"](this === e ? d : this, arguments), this
                  );
                }),
                (e[f[0] + "With"] = g.fireWith);
            }),
            d.promise(e),
            a && a.call(e, e),
            e
          );
        },
        when: function (a) {
          var b,
            c,
            d,
            e = 0,
            f = R.call(arguments),
            g = f.length,
            h = 1 !== g || (a && _.isFunction(a.promise)) ? g : 0,
            i = 1 === h ? a : _.Deferred(),
            j = function (a, c, d) {
              return function (e) {
                (c[a] = this),
                  (d[a] = arguments.length > 1 ? R.call(arguments) : e),
                  d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
              };
            };
          if (g > 1)
            for (
              b = new Array(g), c = new Array(g), d = new Array(g);
              g > e;
              e++
            )
              f[e] && _.isFunction(f[e].promise)
                ? f[e]
                    .promise()
                    .done(j(e, d, f))
                    .fail(i.reject)
                    .progress(j(e, c, b))
                : --h;
          return h || i.resolveWith(d, f), i.promise();
        },
      });
    var pa;
    (_.fn.ready = function (a) {
      return _.ready.promise().done(a), this;
    }),
      _.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
          a ? _.readyWait++ : _.ready(!0);
        },
        ready: function (a) {
          (a === !0 ? --_.readyWait : _.isReady) ||
            ((_.isReady = !0),
            (a !== !0 && --_.readyWait > 0) ||
              (pa.resolveWith(Z, [_]),
              _.fn.triggerHandler &&
                (_(Z).triggerHandler("ready"), _(Z).off("ready"))));
        },
      }),
      (_.ready.promise = function (b) {
        return (
          pa ||
            ((pa = _.Deferred()),
            "complete" === Z.readyState
              ? setTimeout(_.ready)
              : (Z.addEventListener("DOMContentLoaded", g, !1),
                a.addEventListener("load", g, !1))),
          pa.promise(b)
        );
      }),
      _.ready.promise();
    var qa = (_.access = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === _.type(c)) {
        e = !0;
        for (h in c) _.access(a, b, h, c[h], !0, f, g);
      } else if (
        void 0 !== d &&
        ((e = !0),
        _.isFunction(d) || (g = !0),
        j &&
          (g
            ? (b.call(a, d), (b = null))
            : ((j = b),
              (b = function (a, b, c) {
                return j.call(_(a), c);
              }))),
        b)
      )
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    });
    (_.acceptData = function (a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    }),
      (h.uid = 1),
      (h.accepts = _.acceptData),
      (h.prototype = {
        key: function (a) {
          if (!h.accepts(a)) return 0;
          var b = {},
            c = a[this.expando];
          if (!c) {
            c = h.uid++;
            try {
              (b[this.expando] = { value: c }), Object.defineProperties(a, b);
            } catch (d) {
              (b[this.expando] = c), _.extend(a, b);
            }
          }
          return this.cache[c] || (this.cache[c] = {}), c;
        },
        set: function (a, b, c) {
          var d,
            e = this.key(a),
            f = this.cache[e];
          if ("string" == typeof b) f[b] = c;
          else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
          else for (d in b) f[d] = b[d];
          return f;
        },
        get: function (a, b) {
          var c = this.cache[this.key(a)];
          return void 0 === b ? c : c[b];
        },
        access: function (a, b, c) {
          var d;
          return void 0 === b || (b && "string" == typeof b && void 0 === c)
            ? ((d = this.get(a, b)),
              void 0 !== d ? d : this.get(a, _.camelCase(b)))
            : (this.set(a, b, c), void 0 !== c ? c : b);
        },
        remove: function (a, b) {
          var c,
            d,
            e,
            f = this.key(a),
            g = this.cache[f];
          if (void 0 === b) this.cache[f] = {};
          else {
            _.isArray(b)
              ? (d = b.concat(b.map(_.camelCase)))
              : ((e = _.camelCase(b)),
                b in g
                  ? (d = [b, e])
                  : ((d = e), (d = d in g ? [d] : d.match(na) || []))),
              (c = d.length);
            for (; c--; ) delete g[d[c]];
          }
        },
        hasData: function (a) {
          return !_.isEmptyObject(this.cache[a[this.expando]] || {});
        },
        discard: function (a) {
          a[this.expando] && delete this.cache[a[this.expando]];
        },
      });
    var ra = new h(),
      sa = new h(),
      ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ua = /([A-Z])/g;
    _.extend({
      hasData: function (a) {
        return sa.hasData(a) || ra.hasData(a);
      },
      data: function (a, b, c) {
        return sa.access(a, b, c);
      },
      removeData: function (a, b) {
        sa.remove(a, b);
      },
      _data: function (a, b, c) {
        return ra.access(a, b, c);
      },
      _removeData: function (a, b) {
        ra.remove(a, b);
      },
    }),
      _.fn.extend({
        data: function (a, b) {
          var c,
            d,
            e,
            f = this[0],
            g = f && f.attributes;
          if (void 0 === a) {
            if (
              this.length &&
              ((e = sa.get(f)), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))
            ) {
              for (c = g.length; c--; )
                g[c] &&
                  ((d = g[c].name),
                  0 === d.indexOf("data-") &&
                    ((d = _.camelCase(d.slice(5))), i(f, d, e[d])));
              ra.set(f, "hasDataAttrs", !0);
            }
            return e;
          }
          return "object" == typeof a
            ? this.each(function () {
                sa.set(this, a);
              })
            : qa(
                this,
                function (b) {
                  var c,
                    d = _.camelCase(a);
                  if (f && void 0 === b) {
                    if (((c = sa.get(f, a)), void 0 !== c)) return c;
                    if (((c = sa.get(f, d)), void 0 !== c)) return c;
                    if (((c = i(f, d, void 0)), void 0 !== c)) return c;
                  } else
                    this.each(function () {
                      var c = sa.get(this, d);
                      sa.set(this, d, b),
                        -1 !== a.indexOf("-") &&
                          void 0 !== c &&
                          sa.set(this, a, b);
                    });
                },
                null,
                b,
                arguments.length > 1,
                null,
                !0
              );
        },
        removeData: function (a) {
          return this.each(function () {
            sa.remove(this, a);
          });
        },
      }),
      _.extend({
        queue: function (a, b, c) {
          var d;
          return a
            ? ((b = (b || "fx") + "queue"),
              (d = ra.get(a, b)),
              c &&
                (!d || _.isArray(c)
                  ? (d = ra.access(a, b, _.makeArray(c)))
                  : d.push(c)),
              d || [])
            : void 0;
        },
        dequeue: function (a, b) {
          b = b || "fx";
          var c = _.queue(a, b),
            d = c.length,
            e = c.shift(),
            f = _._queueHooks(a, b),
            g = function () {
              _.dequeue(a, b);
            };
          "inprogress" === e && ((e = c.shift()), d--),
            e &&
              ("fx" === b && c.unshift("inprogress"),
              delete f.stop,
              e.call(a, g, f)),
            !d && f && f.empty.fire();
        },
        _queueHooks: function (a, b) {
          var c = b + "queueHooks";
          return (
            ra.get(a, c) ||
            ra.access(a, c, {
              empty: _.Callbacks("once memory").add(function () {
                ra.remove(a, [b + "queue", c]);
              }),
            })
          );
        },
      }),
      _.fn.extend({
        queue: function (a, b) {
          var c = 2;
          return (
            "string" != typeof a && ((b = a), (a = "fx"), c--),
            arguments.length < c
              ? _.queue(this[0], a)
              : void 0 === b
              ? this
              : this.each(function () {
                  var c = _.queue(this, a, b);
                  _._queueHooks(this, a),
                    "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a);
                })
          );
        },
        dequeue: function (a) {
          return this.each(function () {
            _.dequeue(this, a);
          });
        },
        clearQueue: function (a) {
          return this.queue(a || "fx", []);
        },
        promise: function (a, b) {
          var c,
            d = 1,
            e = _.Deferred(),
            f = this,
            g = this.length,
            h = function () {
              --d || e.resolveWith(f, [f]);
            };
          for (
            "string" != typeof a && ((b = a), (a = void 0)), a = a || "fx";
            g--;

          )
            (c = ra.get(f[g], a + "queueHooks")),
              c && c.empty && (d++, c.empty.add(h));
          return h(), e.promise(b);
        },
      });
    var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      wa = ["Top", "Right", "Bottom", "Left"],
      xa = function (a, b) {
        return (
          (a = b || a),
          "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
        );
      },
      ya = /^(?:checkbox|radio)$/i;
    !(function () {
      var a = Z.createDocumentFragment(),
        b = a.appendChild(Z.createElement("div")),
        c = Z.createElement("input");
      c.setAttribute("type", "radio"),
        c.setAttribute("checked", "checked"),
        c.setAttribute("name", "t"),
        b.appendChild(c),
        (Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (b.innerHTML = "<textarea>x</textarea>"),
        (Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
    })();
    var za = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var Aa = /^key/,
      Ba = /^(?:mouse|pointer|contextmenu)|click/,
      Ca = /^(?:focusinfocus|focusoutblur)$/,
      Da = /^([^.]*)(?:\.(.+)|)$/;
    (_.event = {
      global: {},
      add: function (a, b, c, d, e) {
        var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = ra.get(a);
        if (q)
          for (
            c.handler && ((f = c), (c = f.handler), (e = f.selector)),
              c.guid || (c.guid = _.guid++),
              (i = q.events) || (i = q.events = {}),
              (g = q.handle) ||
                (g = q.handle =
                  function (b) {
                    return typeof _ !== za && _.event.triggered !== b.type
                      ? _.event.dispatch.apply(a, arguments)
                      : void 0;
                  }),
              b = (b || "").match(na) || [""],
              j = b.length;
            j--;

          )
            (h = Da.exec(b[j]) || []),
              (n = p = h[1]),
              (o = (h[2] || "").split(".").sort()),
              n &&
                ((l = _.event.special[n] || {}),
                (n = (e ? l.delegateType : l.bindType) || n),
                (l = _.event.special[n] || {}),
                (k = _.extend(
                  {
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && _.expr.match.needsContext.test(e),
                    namespace: o.join("."),
                  },
                  f
                )),
                (m = i[n]) ||
                  ((m = i[n] = []),
                  (m.delegateCount = 0),
                  (l.setup && l.setup.call(a, d, o, g) !== !1) ||
                    (a.addEventListener && a.addEventListener(n, g, !1))),
                l.add &&
                  (l.add.call(a, k),
                  k.handler.guid || (k.handler.guid = c.guid)),
                e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                (_.event.global[n] = !0));
      },
      remove: function (a, b, c, d, e) {
        var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = ra.hasData(a) && ra.get(a);
        if (q && (i = q.events)) {
          for (b = (b || "").match(na) || [""], j = b.length; j--; )
            if (
              ((h = Da.exec(b[j]) || []),
              (n = p = h[1]),
              (o = (h[2] || "").split(".").sort()),
              n)
            ) {
              for (
                l = _.event.special[n] || {},
                  n = (d ? l.delegateType : l.bindType) || n,
                  m = i[n] || [],
                  h =
                    h[2] &&
                    new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  g = f = m.length;
                f--;

              )
                (k = m[f]),
                  (!e && p !== k.origType) ||
                    (c && c.guid !== k.guid) ||
                    (h && !h.test(k.namespace)) ||
                    (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                    (m.splice(f, 1),
                    k.selector && m.delegateCount--,
                    l.remove && l.remove.call(a, k));
              g &&
                !m.length &&
                ((l.teardown && l.teardown.call(a, o, q.handle) !== !1) ||
                  _.removeEvent(a, n, q.handle),
                delete i[n]);
            } else for (n in i) _.event.remove(a, n + b[j], c, d, !0);
          _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"));
        }
      },
      trigger: function (b, c, d, e) {
        var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = [d || Z],
          n = X.call(b, "type") ? b.type : b,
          o = X.call(b, "namespace") ? b.namespace.split(".") : [];
        if (
          ((g = h = d = d || Z),
          3 !== d.nodeType &&
            8 !== d.nodeType &&
            !Ca.test(n + _.event.triggered) &&
            (n.indexOf(".") >= 0 &&
              ((o = n.split(".")), (n = o.shift()), o.sort()),
            (j = n.indexOf(":") < 0 && "on" + n),
            (b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b)),
            (b.isTrigger = e ? 2 : 3),
            (b.namespace = o.join(".")),
            (b.namespace_re = b.namespace
              ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (b.result = void 0),
            b.target || (b.target = d),
            (c = null == c ? [b] : _.makeArray(c, [b])),
            (l = _.event.special[n] || {}),
            e || !l.trigger || l.trigger.apply(d, c) !== !1))
        ) {
          if (!e && !l.noBubble && !_.isWindow(d)) {
            for (
              i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode);
              g;
              g = g.parentNode
            )
              m.push(g), (h = g);
            h === (d.ownerDocument || Z) &&
              m.push(h.defaultView || h.parentWindow || a);
          }
          for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); )
            (b.type = f > 1 ? i : l.bindType || n),
              (k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle")),
              k && k.apply(g, c),
              (k = j && g[j]),
              k &&
                k.apply &&
                _.acceptData(g) &&
                ((b.result = k.apply(g, c)),
                b.result === !1 && b.preventDefault());
          return (
            (b.type = n),
            e ||
              b.isDefaultPrevented() ||
              (l._default && l._default.apply(m.pop(), c) !== !1) ||
              !_.acceptData(d) ||
              (j &&
                _.isFunction(d[n]) &&
                !_.isWindow(d) &&
                ((h = d[j]),
                h && (d[j] = null),
                (_.event.triggered = n),
                d[n](),
                (_.event.triggered = void 0),
                h && (d[j] = h))),
            b.result
          );
        }
      },
      dispatch: function (a) {
        a = _.event.fix(a);
        var b,
          c,
          d,
          e,
          f,
          g = [],
          h = R.call(arguments),
          i = (ra.get(this, "events") || {})[a.type] || [],
          j = _.event.special[a.type] || {};
        if (
          ((h[0] = a),
          (a.delegateTarget = this),
          !j.preDispatch || j.preDispatch.call(this, a) !== !1)
        ) {
          for (
            g = _.event.handlers.call(this, a, i), b = 0;
            (e = g[b++]) && !a.isPropagationStopped();

          )
            for (
              a.currentTarget = e.elem, c = 0;
              (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();

            )
              (a.namespace_re && !a.namespace_re.test(f.namespace)) ||
                ((a.handleObj = f),
                (a.data = f.data),
                (d = (
                  (_.event.special[f.origType] || {}).handle || f.handler
                ).apply(e.elem, h)),
                void 0 !== d &&
                  (a.result = d) === !1 &&
                  (a.preventDefault(), a.stopPropagation()));
          return j.postDispatch && j.postDispatch.call(this, a), a.result;
        }
      },
      handlers: function (a, b) {
        var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;
        if (h && i.nodeType && (!a.button || "click" !== a.type))
          for (; i !== this; i = i.parentNode || this)
            if (i.disabled !== !0 || "click" !== a.type) {
              for (d = [], c = 0; h > c; c++)
                (f = b[c]),
                  (e = f.selector + " "),
                  void 0 === d[e] &&
                    (d[e] = f.needsContext
                      ? _(e, this).index(i) >= 0
                      : _.find(e, this, null, [i]).length),
                  d[e] && d.push(f);
              d.length && g.push({ elem: i, handlers: d });
            }
        return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
      },
      props:
        "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
          " "
        ),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (a, b) {
          return (
            null == a.which &&
              (a.which = null != b.charCode ? b.charCode : b.keyCode),
            a
          );
        },
      },
      mouseHooks: {
        props:
          "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
            " "
          ),
        filter: function (a, b) {
          var c,
            d,
            e,
            f = b.button;
          return (
            null == a.pageX &&
              null != b.clientX &&
              ((c = a.target.ownerDocument || Z),
              (d = c.documentElement),
              (e = c.body),
              (a.pageX =
                b.clientX +
                ((d && d.scrollLeft) || (e && e.scrollLeft) || 0) -
                ((d && d.clientLeft) || (e && e.clientLeft) || 0)),
              (a.pageY =
                b.clientY +
                ((d && d.scrollTop) || (e && e.scrollTop) || 0) -
                ((d && d.clientTop) || (e && e.clientTop) || 0))),
            a.which ||
              void 0 === f ||
              (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
            a
          );
        },
      },
      fix: function (a) {
        if (a[_.expando]) return a;
        var b,
          c,
          d,
          e = a.type,
          f = a,
          g = this.fixHooks[e];
        for (
          g ||
            (this.fixHooks[e] = g =
              Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}),
            d = g.props ? this.props.concat(g.props) : this.props,
            a = new _.Event(f),
            b = d.length;
          b--;

        )
          (c = d[b]), (a[c] = f[c]);
        return (
          a.target || (a.target = Z),
          3 === a.target.nodeType && (a.target = a.target.parentNode),
          g.filter ? g.filter(a, f) : a
        );
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            return this !== l() && this.focus ? (this.focus(), !1) : void 0;
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            return this === l() && this.blur ? (this.blur(), !1) : void 0;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            return "checkbox" === this.type &&
              this.click &&
              _.nodeName(this, "input")
              ? (this.click(), !1)
              : void 0;
          },
          _default: function (a) {
            return _.nodeName(a.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (a) {
            void 0 !== a.result &&
              a.originalEvent &&
              (a.originalEvent.returnValue = a.result);
          },
        },
      },
      simulate: function (a, b, c, d) {
        var e = _.extend(new _.Event(), c, {
          type: a,
          isSimulated: !0,
          originalEvent: {},
        });
        d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e),
          e.isDefaultPrevented() && c.preventDefault();
      },
    }),
      (_.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
      }),
      (_.Event = function (a, b) {
        return this instanceof _.Event
          ? (a && a.type
              ? ((this.originalEvent = a),
                (this.type = a.type),
                (this.isDefaultPrevented =
                  a.defaultPrevented ||
                  (void 0 === a.defaultPrevented && a.returnValue === !1)
                    ? j
                    : k))
              : (this.type = a),
            b && _.extend(this, b),
            (this.timeStamp = (a && a.timeStamp) || _.now()),
            void (this[_.expando] = !0))
          : new _.Event(a, b);
      }),
      (_.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function () {
          var a = this.originalEvent;
          (this.isDefaultPrevented = j),
            a && a.preventDefault && a.preventDefault();
        },
        stopPropagation: function () {
          var a = this.originalEvent;
          (this.isPropagationStopped = j),
            a && a.stopPropagation && a.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var a = this.originalEvent;
          (this.isImmediatePropagationStopped = j),
            a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      _.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (a, b) {
          _.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
              var c,
                d = this,
                e = a.relatedTarget,
                f = a.handleObj;
              return (
                (e && (e === d || _.contains(d, e))) ||
                  ((a.type = f.origType),
                  (c = f.handler.apply(this, arguments)),
                  (a.type = b)),
                c
              );
            },
          };
        }
      ),
      Y.focusinBubbles ||
        _.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
          var c = function (a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0);
          };
          _.event.special[b] = {
            setup: function () {
              var d = this.ownerDocument || this,
                e = ra.access(d, b);
              e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1);
            },
            teardown: function () {
              var d = this.ownerDocument || this,
                e = ra.access(d, b) - 1;
              e
                ? ra.access(d, b, e)
                : (d.removeEventListener(a, c, !0), ra.remove(d, b));
            },
          };
        }),
      _.fn.extend({
        on: function (a, b, c, d, e) {
          var f, g;
          if ("object" == typeof a) {
            "string" != typeof b && ((c = c || b), (b = void 0));
            for (g in a) this.on(g, b, c, a[g], e);
            return this;
          }
          if (
            (null == c && null == d
              ? ((d = b), (c = b = void 0))
              : null == d &&
                ("string" == typeof b
                  ? ((d = c), (c = void 0))
                  : ((d = c), (c = b), (b = void 0))),
            d === !1)
          )
            d = k;
          else if (!d) return this;
          return (
            1 === e &&
              ((f = d),
              (d = function (a) {
                return _().off(a), f.apply(this, arguments);
              }),
              (d.guid = f.guid || (f.guid = _.guid++))),
            this.each(function () {
              _.event.add(this, a, d, c, b);
            })
          );
        },
        one: function (a, b, c, d) {
          return this.on(a, b, c, d, 1);
        },
        off: function (a, b, c) {
          var d, e;
          if (a && a.preventDefault && a.handleObj)
            return (
              (d = a.handleObj),
              _(a.delegateTarget).off(
                d.namespace ? d.origType + "." + d.namespace : d.origType,
                d.selector,
                d.handler
              ),
              this
            );
          if ("object" == typeof a) {
            for (e in a) this.off(e, b, a[e]);
            return this;
          }
          return (
            (b !== !1 && "function" != typeof b) || ((c = b), (b = void 0)),
            c === !1 && (c = k),
            this.each(function () {
              _.event.remove(this, a, c, b);
            })
          );
        },
        trigger: function (a, b) {
          return this.each(function () {
            _.event.trigger(a, b, this);
          });
        },
        triggerHandler: function (a, b) {
          var c = this[0];
          return c ? _.event.trigger(a, b, c, !0) : void 0;
        },
      });
    var Ea =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      Fa = /<([\w:]+)/,
      Ga = /<|&#?\w+;/,
      Ha = /<(?:script|style|link)/i,
      Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ja = /^$|\/(?:java|ecma)script/i,
      Ka = /^true\/(.*)/,
      La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      Ma = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
    (Ma.optgroup = Ma.option),
      (Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead),
      (Ma.th = Ma.td),
      _.extend({
        clone: function (a, b, c) {
          var d,
            e,
            f,
            g,
            h = a.cloneNode(!0),
            i = _.contains(a.ownerDocument, a);
          if (
            !(
              Y.noCloneChecked ||
              (1 !== a.nodeType && 11 !== a.nodeType) ||
              _.isXMLDoc(a)
            )
          )
            for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++)
              s(f[d], g[d]);
          if (b)
            if (c)
              for (
                f = f || r(a), g = g || r(h), d = 0, e = f.length;
                e > d;
                d++
              )
                q(f[d], g[d]);
            else q(a, h);
          return (
            (g = r(h, "script")), g.length > 0 && p(g, !i && r(a, "script")), h
          );
        },
        buildFragment: function (a, b, c, d) {
          for (
            var e,
              f,
              g,
              h,
              i,
              j,
              k = b.createDocumentFragment(),
              l = [],
              m = 0,
              n = a.length;
            n > m;
            m++
          )
            if (((e = a[m]), e || 0 === e))
              if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e);
              else if (Ga.test(e)) {
                for (
                  f = f || k.appendChild(b.createElement("div")),
                    g = (Fa.exec(e) || ["", ""])[1].toLowerCase(),
                    h = Ma[g] || Ma._default,
                    f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2],
                    j = h[0];
                  j--;

                )
                  f = f.lastChild;
                _.merge(l, f.childNodes),
                  (f = k.firstChild),
                  (f.textContent = "");
              } else l.push(b.createTextNode(e));
          for (k.textContent = "", m = 0; (e = l[m++]); )
            if (
              (!d || -1 === _.inArray(e, d)) &&
              ((i = _.contains(e.ownerDocument, e)),
              (f = r(k.appendChild(e), "script")),
              i && p(f),
              c)
            )
              for (j = 0; (e = f[j++]); ) Ja.test(e.type || "") && c.push(e);
          return k;
        },
        cleanData: function (a) {
          for (
            var b, c, d, e, f = _.event.special, g = 0;
            void 0 !== (c = a[g]);
            g++
          ) {
            if (
              _.acceptData(c) &&
              ((e = c[ra.expando]), e && (b = ra.cache[e]))
            ) {
              if (b.events)
                for (d in b.events)
                  f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
              ra.cache[e] && delete ra.cache[e];
            }
            delete sa.cache[c[sa.expando]];
          }
        },
      }),
      _.fn.extend({
        text: function (a) {
          return qa(
            this,
            function (a) {
              return void 0 === a
                ? _.text(this)
                : this.empty().each(function () {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      (this.textContent = a);
                  });
            },
            null,
            a,
            arguments.length
          );
        },
        append: function () {
          return this.domManip(arguments, function (a) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var b = m(this, a);
              b.appendChild(a);
            }
          });
        },
        prepend: function () {
          return this.domManip(arguments, function (a) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var b = m(this, a);
              b.insertBefore(a, b.firstChild);
            }
          });
        },
        before: function () {
          return this.domManip(arguments, function (a) {
            this.parentNode && this.parentNode.insertBefore(a, this);
          });
        },
        after: function () {
          return this.domManip(arguments, function (a) {
            this.parentNode &&
              this.parentNode.insertBefore(a, this.nextSibling);
          });
        },
        remove: function (a, b) {
          for (
            var c, d = a ? _.filter(a, this) : this, e = 0;
            null != (c = d[e]);
            e++
          )
            b || 1 !== c.nodeType || _.cleanData(r(c)),
              c.parentNode &&
                (b && _.contains(c.ownerDocument, c) && p(r(c, "script")),
                c.parentNode.removeChild(c));
          return this;
        },
        empty: function () {
          for (var a, b = 0; null != (a = this[b]); b++)
            1 === a.nodeType && (_.cleanData(r(a, !1)), (a.textContent = ""));
          return this;
        },
        clone: function (a, b) {
          return (
            (a = null == a ? !1 : a),
            (b = null == b ? a : b),
            this.map(function () {
              return _.clone(this, a, b);
            })
          );
        },
        html: function (a) {
          return qa(
            this,
            function (a) {
              var b = this[0] || {},
                c = 0,
                d = this.length;
              if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
              if (
                "string" == typeof a &&
                !Ha.test(a) &&
                !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]
              ) {
                a = a.replace(Ea, "<$1></$2>");
                try {
                  for (; d > c; c++)
                    (b = this[c] || {}),
                      1 === b.nodeType &&
                        (_.cleanData(r(b, !1)), (b.innerHTML = a));
                  b = 0;
                } catch (e) {}
              }
              b && this.empty().append(a);
            },
            null,
            a,
            arguments.length
          );
        },
        replaceWith: function () {
          var a = arguments[0];
          return (
            this.domManip(arguments, function (b) {
              (a = this.parentNode),
                _.cleanData(r(this)),
                a && a.replaceChild(b, this);
            }),
            a && (a.length || a.nodeType) ? this : this.remove()
          );
        },
        detach: function (a) {
          return this.remove(a, !0);
        },
        domManip: function (a, b) {
          a = S.apply([], a);
          var c,
            d,
            e,
            f,
            g,
            h,
            i = 0,
            j = this.length,
            k = this,
            l = j - 1,
            m = a[0],
            p = _.isFunction(m);
          if (
            p ||
            (j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m))
          )
            return this.each(function (c) {
              var d = k.eq(c);
              p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b);
            });
          if (
            j &&
            ((c = _.buildFragment(a, this[0].ownerDocument, !1, this)),
            (d = c.firstChild),
            1 === c.childNodes.length && (c = d),
            d)
          ) {
            for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++)
              (g = c),
                i !== l &&
                  ((g = _.clone(g, !0, !0)), f && _.merge(e, r(g, "script"))),
                b.call(this[i], g, i);
            if (f)
              for (
                h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0;
                f > i;
                i++
              )
                (g = e[i]),
                  Ja.test(g.type || "") &&
                    !ra.access(g, "globalEval") &&
                    _.contains(h, g) &&
                    (g.src
                      ? _._evalUrl && _._evalUrl(g.src)
                      : _.globalEval(g.textContent.replace(La, "")));
          }
          return this;
        },
      }),
      _.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (a, b) {
          _.fn[a] = function (a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++)
              (c = g === f ? this : this.clone(!0)),
                _(e[g])[b](c),
                T.apply(d, c.get());
            return this.pushStack(d);
          };
        }
      );
    var Na,
      Oa = {},
      Pa = /^margin/,
      Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"),
      Ra = function (b) {
        return b.ownerDocument.defaultView.opener
          ? b.ownerDocument.defaultView.getComputedStyle(b, null)
          : a.getComputedStyle(b, null);
      };
    !(function () {
      function b() {
        (g.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
          (g.innerHTML = ""),
          e.appendChild(f);
        var b = a.getComputedStyle(g, null);
        (c = "1%" !== b.top), (d = "4px" === b.width), e.removeChild(f);
      }
      var c,
        d,
        e = Z.documentElement,
        f = Z.createElement("div"),
        g = Z.createElement("div");
      g.style &&
        ((g.style.backgroundClip = "content-box"),
        (g.cloneNode(!0).style.backgroundClip = ""),
        (Y.clearCloneStyle = "content-box" === g.style.backgroundClip),
        (f.style.cssText =
          "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"),
        f.appendChild(g),
        a.getComputedStyle &&
          _.extend(Y, {
            pixelPosition: function () {
              return b(), c;
            },
            boxSizingReliable: function () {
              return null == d && b(), d;
            },
            reliableMarginRight: function () {
              var b,
                c = g.appendChild(Z.createElement("div"));
              return (
                (c.style.cssText = g.style.cssText =
                  "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                (c.style.marginRight = c.style.width = "0"),
                (g.style.width = "1px"),
                e.appendChild(f),
                (b = !parseFloat(a.getComputedStyle(c, null).marginRight)),
                e.removeChild(f),
                g.removeChild(c),
                b
              );
            },
          }));
    })(),
      (_.swap = function (a, b, c, d) {
        var e,
          f,
          g = {};
        for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
      });
    var Sa = /^(none|table(?!-c[ea]).+)/,
      Ta = new RegExp("^(" + va + ")(.*)$", "i"),
      Ua = new RegExp("^([+-])=(" + va + ")", "i"),
      Va = { position: "absolute", visibility: "hidden", display: "block" },
      Wa = { letterSpacing: "0", fontWeight: "400" },
      Xa = ["Webkit", "O", "Moz", "ms"];
    _.extend({
      cssHooks: {
        opacity: {
          get: function (a, b) {
            if (b) {
              var c = v(a, "opacity");
              return "" === c ? "1" : c;
            }
          },
        },
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: "cssFloat" },
      style: function (a, b, c, d) {
        if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
          var e,
            f,
            g,
            h = _.camelCase(b),
            i = a.style;
          return (
            (b = _.cssProps[h] || (_.cssProps[h] = x(i, h))),
            (g = _.cssHooks[b] || _.cssHooks[h]),
            void 0 === c
              ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
                ? e
                : i[b]
              : ((f = typeof c),
                "string" === f &&
                  (e = Ua.exec(c)) &&
                  ((c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b))),
                  (f = "number")),
                null != c &&
                  c === c &&
                  ("number" !== f || _.cssNumber[h] || (c += "px"),
                  Y.clearCloneStyle ||
                    "" !== c ||
                    0 !== b.indexOf("background") ||
                    (i[b] = "inherit"),
                  (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                    (i[b] = c)),
                void 0)
          );
        }
      },
      css: function (a, b, c, d) {
        var e,
          f,
          g,
          h = _.camelCase(b);
        return (
          (b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h))),
          (g = _.cssHooks[b] || _.cssHooks[h]),
          g && "get" in g && (e = g.get(a, !0, c)),
          void 0 === e && (e = v(a, b, d)),
          "normal" === e && b in Wa && (e = Wa[b]),
          "" === c || c
            ? ((f = parseFloat(e)), c === !0 || _.isNumeric(f) ? f || 0 : e)
            : e
        );
      },
    }),
      _.each(["height", "width"], function (a, b) {
        _.cssHooks[b] = {
          get: function (a, c, d) {
            return c
              ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth
                ? _.swap(a, Va, function () {
                    return A(a, b, d);
                  })
                : A(a, b, d)
              : void 0;
          },
          set: function (a, c, d) {
            var e = d && Ra(a);
            return y(
              a,
              c,
              d
                ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e)
                : 0
            );
          },
        };
      }),
      (_.cssHooks.marginRight = w(Y.reliableMarginRight, function (a, b) {
        return b
          ? _.swap(a, { display: "inline-block" }, v, [a, "marginRight"])
          : void 0;
      })),
      _.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
        (_.cssHooks[a + b] = {
          expand: function (c) {
            for (
              var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
              4 > d;
              d++
            )
              e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
            return e;
          },
        }),
          Pa.test(a) || (_.cssHooks[a + b].set = y);
      }),
      _.fn.extend({
        css: function (a, b) {
          return qa(
            this,
            function (a, b, c) {
              var d,
                e,
                f = {},
                g = 0;
              if (_.isArray(b)) {
                for (d = Ra(a), e = b.length; e > g; g++)
                  f[b[g]] = _.css(a, b[g], !1, d);
                return f;
              }
              return void 0 !== c ? _.style(a, b, c) : _.css(a, b);
            },
            a,
            b,
            arguments.length > 1
          );
        },
        show: function () {
          return B(this, !0);
        },
        hide: function () {
          return B(this);
        },
        toggle: function (a) {
          return "boolean" == typeof a
            ? a
              ? this.show()
              : this.hide()
            : this.each(function () {
                xa(this) ? _(this).show() : _(this).hide();
              });
        },
      }),
      (_.Tween = C),
      (C.prototype = {
        constructor: C,
        init: function (a, b, c, d, e, f) {
          (this.elem = a),
            (this.prop = c),
            (this.easing = e || "swing"),
            (this.options = b),
            (this.start = this.now = this.cur()),
            (this.end = d),
            (this.unit = f || (_.cssNumber[c] ? "" : "px"));
        },
        cur: function () {
          var a = C.propHooks[this.prop];
          return a && a.get ? a.get(this) : C.propHooks._default.get(this);
        },
        run: function (a) {
          var b,
            c = C.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = b =
                  _.easing[this.easing](
                    a,
                    this.options.duration * a,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = b = a),
            (this.now = (this.end - this.start) * b + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : C.propHooks._default.set(this),
            this
          );
        },
      }),
      (C.prototype.init.prototype = C.prototype),
      (C.propHooks = {
        _default: {
          get: function (a) {
            var b;
            return null == a.elem[a.prop] ||
              (a.elem.style && null != a.elem.style[a.prop])
              ? ((b = _.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0)
              : a.elem[a.prop];
          },
          set: function (a) {
            _.fx.step[a.prop]
              ? _.fx.step[a.prop](a)
              : a.elem.style &&
                (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop])
              ? _.style(a.elem, a.prop, a.now + a.unit)
              : (a.elem[a.prop] = a.now);
          },
        },
      }),
      (C.propHooks.scrollTop = C.propHooks.scrollLeft =
        {
          set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
          },
        }),
      (_.easing = {
        linear: function (a) {
          return a;
        },
        swing: function (a) {
          return 0.5 - Math.cos(a * Math.PI) / 2;
        },
      }),
      (_.fx = C.prototype.init),
      (_.fx.step = {});
    var Ya,
      Za,
      $a = /^(?:toggle|show|hide)$/,
      _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
      ab = /queueHooks$/,
      bb = [G],
      cb = {
        "*": [
          function (a, b) {
            var c = this.createTween(a, b),
              d = c.cur(),
              e = _a.exec(b),
              f = (e && e[3]) || (_.cssNumber[a] ? "" : "px"),
              g =
                (_.cssNumber[a] || ("px" !== f && +d)) &&
                _a.exec(_.css(c.elem, a)),
              h = 1,
              i = 20;
            if (g && g[3] !== f) {
              (f = f || g[3]), (e = e || []), (g = +d || 1);
              do (h = h || ".5"), (g /= h), _.style(c.elem, a, g + f);
              while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }
            return (
              e &&
                ((g = c.start = +g || +d || 0),
                (c.unit = f),
                (c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2])),
              c
            );
          },
        ],
      };
    (_.Animation = _.extend(I, {
      tweener: function (a, b) {
        _.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.split(" "));
        for (var c, d = 0, e = a.length; e > d; d++)
          (c = a[d]), (cb[c] = cb[c] || []), cb[c].unshift(b);
      },
      prefilter: function (a, b) {
        b ? bb.unshift(a) : bb.push(a);
      },
    })),
      (_.speed = function (a, b, c) {
        var d =
          a && "object" == typeof a
            ? _.extend({}, a)
            : {
                complete: c || (!c && b) || (_.isFunction(a) && a),
                duration: a,
                easing: (c && b) || (b && !_.isFunction(b) && b),
              };
        return (
          (d.duration = _.fx.off
            ? 0
            : "number" == typeof d.duration
            ? d.duration
            : d.duration in _.fx.speeds
            ? _.fx.speeds[d.duration]
            : _.fx.speeds._default),
          (null != d.queue && d.queue !== !0) || (d.queue = "fx"),
          (d.old = d.complete),
          (d.complete = function () {
            _.isFunction(d.old) && d.old.call(this),
              d.queue && _.dequeue(this, d.queue);
          }),
          d
        );
      }),
      _.fn.extend({
        fadeTo: function (a, b, c, d) {
          return this.filter(xa)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: b }, a, c, d);
        },
        animate: function (a, b, c, d) {
          var e = _.isEmptyObject(a),
            f = _.speed(b, c, d),
            g = function () {
              var b = I(this, _.extend({}, a), f);
              (e || ra.get(this, "finish")) && b.stop(!0);
            };
          return (
            (g.finish = g),
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
          );
        },
        stop: function (a, b, c) {
          var d = function (a) {
            var b = a.stop;
            delete a.stop, b(c);
          };
          return (
            "string" != typeof a && ((c = b), (b = a), (a = void 0)),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function () {
              var b = !0,
                e = null != a && a + "queueHooks",
                f = _.timers,
                g = ra.get(this);
              if (e) g[e] && g[e].stop && d(g[e]);
              else for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
              for (e = f.length; e--; )
                f[e].elem !== this ||
                  (null != a && f[e].queue !== a) ||
                  (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
              (!b && c) || _.dequeue(this, a);
            })
          );
        },
        finish: function (a) {
          return (
            a !== !1 && (a = a || "fx"),
            this.each(function () {
              var b,
                c = ra.get(this),
                d = c[a + "queue"],
                e = c[a + "queueHooks"],
                f = _.timers,
                g = d ? d.length : 0;
              for (
                c.finish = !0,
                  _.queue(this, a, []),
                  e && e.stop && e.stop.call(this, !0),
                  b = f.length;
                b--;

              )
                f[b].elem === this &&
                  f[b].queue === a &&
                  (f[b].anim.stop(!0), f.splice(b, 1));
              for (b = 0; g > b; b++)
                d[b] && d[b].finish && d[b].finish.call(this);
              delete c.finish;
            })
          );
        },
      }),
      _.each(["toggle", "show", "hide"], function (a, b) {
        var c = _.fn[b];
        _.fn[b] = function (a, d, e) {
          return null == a || "boolean" == typeof a
            ? c.apply(this, arguments)
            : this.animate(E(b, !0), a, d, e);
        };
      }),
      _.each(
        {
          slideDown: E("show"),
          slideUp: E("hide"),
          slideToggle: E("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (a, b) {
          _.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d);
          };
        }
      ),
      (_.timers = []),
      (_.fx.tick = function () {
        var a,
          b = 0,
          c = _.timers;
        for (Ya = _.now(); b < c.length; b++)
          (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
        c.length || _.fx.stop(), (Ya = void 0);
      }),
      (_.fx.timer = function (a) {
        _.timers.push(a), a() ? _.fx.start() : _.timers.pop();
      }),
      (_.fx.interval = 13),
      (_.fx.start = function () {
        Za || (Za = setInterval(_.fx.tick, _.fx.interval));
      }),
      (_.fx.stop = function () {
        clearInterval(Za), (Za = null);
      }),
      (_.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (_.fn.delay = function (a, b) {
        return (
          (a = _.fx ? _.fx.speeds[a] || a : a),
          (b = b || "fx"),
          this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
              clearTimeout(d);
            };
          })
        );
      }),
      (function () {
        var a = Z.createElement("input"),
          b = Z.createElement("select"),
          c = b.appendChild(Z.createElement("option"));
        (a.type = "checkbox"),
          (Y.checkOn = "" !== a.value),
          (Y.optSelected = c.selected),
          (b.disabled = !0),
          (Y.optDisabled = !c.disabled),
          (a = Z.createElement("input")),
          (a.value = "t"),
          (a.type = "radio"),
          (Y.radioValue = "t" === a.value);
      })();
    var db,
      eb,
      fb = _.expr.attrHandle;
    _.fn.extend({
      attr: function (a, b) {
        return qa(this, _.attr, a, b, arguments.length > 1);
      },
      removeAttr: function (a) {
        return this.each(function () {
          _.removeAttr(this, a);
        });
      },
    }),
      _.extend({
        attr: function (a, b, c) {
          var d,
            e,
            f = a.nodeType;
          if (a && 3 !== f && 8 !== f && 2 !== f)
            return typeof a.getAttribute === za
              ? _.prop(a, b, c)
              : ((1 === f && _.isXMLDoc(a)) ||
                  ((b = b.toLowerCase()),
                  (d =
                    _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db))),
                void 0 === c
                  ? d && "get" in d && null !== (e = d.get(a, b))
                    ? e
                    : ((e = _.find.attr(a, b)), null == e ? void 0 : e)
                  : null !== c
                  ? d && "set" in d && void 0 !== (e = d.set(a, c, b))
                    ? e
                    : (a.setAttribute(b, c + ""), c)
                  : void _.removeAttr(a, b));
        },
        removeAttr: function (a, b) {
          var c,
            d,
            e = 0,
            f = b && b.match(na);
          if (f && 1 === a.nodeType)
            for (; (c = f[e++]); )
              (d = _.propFix[c] || c),
                _.expr.match.bool.test(c) && (a[d] = !1),
                a.removeAttribute(c);
        },
        attrHooks: {
          type: {
            set: function (a, b) {
              if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                var c = a.value;
                return a.setAttribute("type", b), c && (a.value = c), b;
              }
            },
          },
        },
      }),
      (eb = {
        set: function (a, b, c) {
          return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c;
        },
      }),
      _.each(_.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = fb[b] || _.find.attr;
        fb[b] = function (a, b, d) {
          var e, f;
          return (
            d ||
              ((f = fb[b]),
              (fb[b] = e),
              (e = null != c(a, b, d) ? b.toLowerCase() : null),
              (fb[b] = f)),
            e
          );
        };
      });
    var gb = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({
      prop: function (a, b) {
        return qa(this, _.prop, a, b, arguments.length > 1);
      },
      removeProp: function (a) {
        return this.each(function () {
          delete this[_.propFix[a] || a];
        });
      },
    }),
      _.extend({
        propFix: { for: "htmlFor", class: "className" },
        prop: function (a, b, c) {
          var d,
            e,
            f,
            g = a.nodeType;
          if (a && 3 !== g && 8 !== g && 2 !== g)
            return (
              (f = 1 !== g || !_.isXMLDoc(a)),
              f && ((b = _.propFix[b] || b), (e = _.propHooks[b])),
              void 0 !== c
                ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                  ? d
                  : (a[b] = c)
                : e && "get" in e && null !== (d = e.get(a, b))
                ? d
                : a[b]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (a) {
              return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href
                ? a.tabIndex
                : -1;
            },
          },
        },
      }),
      Y.optSelected ||
        (_.propHooks.selected = {
          get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
          },
        }),
      _.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          _.propFix[this.toLowerCase()] = this;
        }
      );
    var hb = /[\t\r\n\f]/g;
    _.fn.extend({
      addClass: function (a) {
        var b,
          c,
          d,
          e,
          f,
          g,
          h = "string" == typeof a && a,
          i = 0,
          j = this.length;
        if (_.isFunction(a))
          return this.each(function (b) {
            _(this).addClass(a.call(this, b, this.className));
          });
        if (h)
          for (b = (a || "").match(na) || []; j > i; i++)
            if (
              ((c = this[i]),
              (d =
                1 === c.nodeType &&
                (c.className
                  ? (" " + c.className + " ").replace(hb, " ")
                  : " ")))
            ) {
              for (f = 0; (e = b[f++]); )
                d.indexOf(" " + e + " ") < 0 && (d += e + " ");
              (g = _.trim(d)), c.className !== g && (c.className = g);
            }
        return this;
      },
      removeClass: function (a) {
        var b,
          c,
          d,
          e,
          f,
          g,
          h = 0 === arguments.length || ("string" == typeof a && a),
          i = 0,
          j = this.length;
        if (_.isFunction(a))
          return this.each(function (b) {
            _(this).removeClass(a.call(this, b, this.className));
          });
        if (h)
          for (b = (a || "").match(na) || []; j > i; i++)
            if (
              ((c = this[i]),
              (d =
                1 === c.nodeType &&
                (c.className
                  ? (" " + c.className + " ").replace(hb, " ")
                  : "")))
            ) {
              for (f = 0; (e = b[f++]); )
                for (; d.indexOf(" " + e + " ") >= 0; )
                  d = d.replace(" " + e + " ", " ");
              (g = a ? _.trim(d) : ""), c.className !== g && (c.className = g);
            }
        return this;
      },
      toggleClass: function (a, b) {
        var c = typeof a;
        return "boolean" == typeof b && "string" === c
          ? b
            ? this.addClass(a)
            : this.removeClass(a)
          : _.isFunction(a)
          ? this.each(function (c) {
              _(this).toggleClass(a.call(this, c, this.className, b), b);
            })
          : this.each(function () {
              if ("string" === c)
                for (
                  var b, d = 0, e = _(this), f = a.match(na) || [];
                  (b = f[d++]);

                )
                  e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
              else
                (c !== za && "boolean" !== c) ||
                  (this.className &&
                    ra.set(this, "__className__", this.className),
                  (this.className =
                    this.className || a === !1
                      ? ""
                      : ra.get(this, "__className__") || ""));
            });
      },
      hasClass: function (a) {
        for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
          if (
            1 === this[c].nodeType &&
            (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0
          )
            return !0;
        return !1;
      },
    });
    var ib = /\r/g;
    _.fn.extend({
      val: function (a) {
        var b,
          c,
          d,
          e = this[0];
        {
          if (arguments.length)
            return (
              (d = _.isFunction(a)),
              this.each(function (c) {
                var e;
                1 === this.nodeType &&
                  ((e = d ? a.call(this, c, _(this).val()) : a),
                  null == e
                    ? (e = "")
                    : "number" == typeof e
                    ? (e += "")
                    : _.isArray(e) &&
                      (e = _.map(e, function (a) {
                        return null == a ? "" : a + "";
                      })),
                  (b =
                    _.valHooks[this.type] ||
                    _.valHooks[this.nodeName.toLowerCase()]),
                  (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                    (this.value = e));
              })
            );
          if (e)
            return (
              (b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()]),
              b && "get" in b && void 0 !== (c = b.get(e, "value"))
                ? c
                : ((c = e.value),
                  "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)
            );
        }
      },
    }),
      _.extend({
        valHooks: {
          option: {
            get: function (a) {
              var b = _.find.attr(a, "value");
              return null != b ? b : _.trim(_.text(a));
            },
          },
          select: {
            get: function (a) {
              for (
                var b,
                  c,
                  d = a.options,
                  e = a.selectedIndex,
                  f = "select-one" === a.type || 0 > e,
                  g = f ? null : [],
                  h = f ? e + 1 : d.length,
                  i = 0 > e ? h : f ? e : 0;
                h > i;
                i++
              )
                if (
                  ((c = d[i]),
                  (c.selected || i === e) &&
                    (Y.optDisabled
                      ? !c.disabled
                      : null === c.getAttribute("disabled")) &&
                    (!c.parentNode.disabled ||
                      !_.nodeName(c.parentNode, "optgroup")))
                ) {
                  if (((b = _(c).val()), f)) return b;
                  g.push(b);
                }
              return g;
            },
            set: function (a, b) {
              for (
                var c, d, e = a.options, f = _.makeArray(b), g = e.length;
                g--;

              )
                (d = e[g]),
                  (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
              return c || (a.selectedIndex = -1), f;
            },
          },
        },
      }),
      _.each(["radio", "checkbox"], function () {
        (_.valHooks[this] = {
          set: function (a, b) {
            return _.isArray(b)
              ? (a.checked = _.inArray(_(a).val(), b) >= 0)
              : void 0;
          },
        }),
          Y.checkOn ||
            (_.valHooks[this].get = function (a) {
              return null === a.getAttribute("value") ? "on" : a.value;
            });
      }),
      _.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
          " "
        ),
        function (a, b) {
          _.fn[b] = function (a, c) {
            return arguments.length > 0
              ? this.on(b, null, a, c)
              : this.trigger(b);
          };
        }
      ),
      _.fn.extend({
        hover: function (a, b) {
          return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function (a, b, c) {
          return this.on(a, null, b, c);
        },
        unbind: function (a, b) {
          return this.off(a, null, b);
        },
        delegate: function (a, b, c, d) {
          return this.on(b, a, c, d);
        },
        undelegate: function (a, b, c) {
          return 1 === arguments.length
            ? this.off(a, "**")
            : this.off(b, a || "**", c);
        },
      });
    var jb = _.now(),
      kb = /\?/;
    (_.parseJSON = function (a) {
      return JSON.parse(a + "");
    }),
      (_.parseXML = function (a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
          (c = new DOMParser()), (b = c.parseFromString(a, "text/xml"));
        } catch (d) {
          b = void 0;
        }
        return (
          (b && !b.getElementsByTagName("parsererror").length) ||
            _.error("Invalid XML: " + a),
          b
        );
      });
    var lb = /#.*$/,
      mb = /([?&])_=[^&]*/,
      nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      pb = /^(?:GET|HEAD)$/,
      qb = /^\/\//,
      rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      sb = {},
      tb = {},
      ub = "*/".concat("*"),
      vb = a.location.href,
      wb = rb.exec(vb.toLowerCase()) || [];
    _.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: vb,
        type: "GET",
        isLocal: ob.test(wb[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": ub,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": _.parseJSON,
          "text xml": _.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (a, b) {
        return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a);
      },
      ajaxPrefilter: J(sb),
      ajaxTransport: J(tb),
      ajax: function (a, b) {
        function c(a, b, c, g) {
          var i,
            k,
            r,
            s,
            u,
            w = b;
          2 !== t &&
            ((t = 2),
            h && clearTimeout(h),
            (d = void 0),
            (f = g || ""),
            (v.readyState = a > 0 ? 4 : 0),
            (i = (a >= 200 && 300 > a) || 304 === a),
            c && (s = M(l, v, c)),
            (s = N(l, s, v, i)),
            i
              ? (l.ifModified &&
                  ((u = v.getResponseHeader("Last-Modified")),
                  u && (_.lastModified[e] = u),
                  (u = v.getResponseHeader("etag")),
                  u && (_.etag[e] = u)),
                204 === a || "HEAD" === l.type
                  ? (w = "nocontent")
                  : 304 === a
                  ? (w = "notmodified")
                  : ((w = s.state), (k = s.data), (r = s.error), (i = !r)))
              : ((r = w), (!a && w) || ((w = "error"), 0 > a && (a = 0))),
            (v.status = a),
            (v.statusText = (b || w) + ""),
            i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]),
            v.statusCode(q),
            (q = void 0),
            j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]),
            p.fireWith(m, [v, w]),
            j &&
              (n.trigger("ajaxComplete", [v, l]),
              --_.active || _.event.trigger("ajaxStop")));
        }
        "object" == typeof a && ((b = a), (a = void 0)), (b = b || {});
        var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = _.ajaxSetup({}, b),
          m = l.context || l,
          n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
          o = _.Deferred(),
          p = _.Callbacks("once memory"),
          q = l.statusCode || {},
          r = {},
          s = {},
          t = 0,
          u = "canceled",
          v = {
            readyState: 0,
            getResponseHeader: function (a) {
              var b;
              if (2 === t) {
                if (!g)
                  for (g = {}; (b = nb.exec(f)); ) g[b[1].toLowerCase()] = b[2];
                b = g[a.toLowerCase()];
              }
              return null == b ? null : b;
            },
            getAllResponseHeaders: function () {
              return 2 === t ? f : null;
            },
            setRequestHeader: function (a, b) {
              var c = a.toLowerCase();
              return t || ((a = s[c] = s[c] || a), (r[a] = b)), this;
            },
            overrideMimeType: function (a) {
              return t || (l.mimeType = a), this;
            },
            statusCode: function (a) {
              var b;
              if (a)
                if (2 > t) for (b in a) q[b] = [q[b], a[b]];
                else v.always(a[v.status]);
              return this;
            },
            abort: function (a) {
              var b = a || u;
              return d && d.abort(b), c(0, b), this;
            },
          };
        if (
          ((o.promise(v).complete = p.add),
          (v.success = v.done),
          (v.error = v.fail),
          (l.url = ((a || l.url || vb) + "")
            .replace(lb, "")
            .replace(qb, wb[1] + "//")),
          (l.type = b.method || b.type || l.method || l.type),
          (l.dataTypes = _.trim(l.dataType || "*")
            .toLowerCase()
            .match(na) || [""]),
          null == l.crossDomain &&
            ((i = rb.exec(l.url.toLowerCase())),
            (l.crossDomain = !(
              !i ||
              (i[1] === wb[1] &&
                i[2] === wb[2] &&
                (i[3] || ("http:" === i[1] ? "80" : "443")) ===
                  (wb[3] || ("http:" === wb[1] ? "80" : "443")))
            ))),
          l.data &&
            l.processData &&
            "string" != typeof l.data &&
            (l.data = _.param(l.data, l.traditional)),
          K(sb, l, b, v),
          2 === t)
        )
          return v;
        (j = _.event && l.global),
          j && 0 === _.active++ && _.event.trigger("ajaxStart"),
          (l.type = l.type.toUpperCase()),
          (l.hasContent = !pb.test(l.type)),
          (e = l.url),
          l.hasContent ||
            (l.data &&
              ((e = l.url += (kb.test(e) ? "&" : "?") + l.data), delete l.data),
            l.cache === !1 &&
              (l.url = mb.test(e)
                ? e.replace(mb, "$1_=" + jb++)
                : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)),
          l.ifModified &&
            (_.lastModified[e] &&
              v.setRequestHeader("If-Modified-Since", _.lastModified[e]),
            _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])),
          ((l.data && l.hasContent && l.contentType !== !1) || b.contentType) &&
            v.setRequestHeader("Content-Type", l.contentType),
          v.setRequestHeader(
            "Accept",
            l.dataTypes[0] && l.accepts[l.dataTypes[0]]
              ? l.accepts[l.dataTypes[0]] +
                  ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "")
              : l.accepts["*"]
          );
        for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
        if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t))
          return v.abort();
        u = "abort";
        for (k in { success: 1, error: 1, complete: 1 }) v[k](l[k]);
        if ((d = K(tb, l, b, v))) {
          (v.readyState = 1),
            j && n.trigger("ajaxSend", [v, l]),
            l.async &&
              l.timeout > 0 &&
              (h = setTimeout(function () {
                v.abort("timeout");
              }, l.timeout));
          try {
            (t = 1), d.send(r, c);
          } catch (w) {
            if (!(2 > t)) throw w;
            c(-1, w);
          }
        } else c(-1, "No Transport");
        return v;
      },
      getJSON: function (a, b, c) {
        return _.get(a, b, c, "json");
      },
      getScript: function (a, b) {
        return _.get(a, void 0, b, "script");
      },
    }),
      _.each(["get", "post"], function (a, b) {
        _[b] = function (a, c, d, e) {
          return (
            _.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
            _.ajax({ url: a, type: b, dataType: e, data: c, success: d })
          );
        };
      }),
      (_._evalUrl = function (a) {
        return _.ajax({
          url: a,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      _.fn.extend({
        wrapAll: function (a) {
          var b;
          return _.isFunction(a)
            ? this.each(function (b) {
                _(this).wrapAll(a.call(this, b));
              })
            : (this[0] &&
                ((b = _(a, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && b.insertBefore(this[0]),
                b
                  .map(function () {
                    for (var a = this; a.firstElementChild; )
                      a = a.firstElementChild;
                    return a;
                  })
                  .append(this)),
              this);
        },
        wrapInner: function (a) {
          return _.isFunction(a)
            ? this.each(function (b) {
                _(this).wrapInner(a.call(this, b));
              })
            : this.each(function () {
                var b = _(this),
                  c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
              });
        },
        wrap: function (a) {
          var b = _.isFunction(a);
          return this.each(function (c) {
            _(this).wrapAll(b ? a.call(this, c) : a);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              _.nodeName(this, "body") || _(this).replaceWith(this.childNodes);
            })
            .end();
        },
      }),
      (_.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0;
      }),
      (_.expr.filters.visible = function (a) {
        return !_.expr.filters.hidden(a);
      });
    var xb = /%20/g,
      yb = /\[\]$/,
      zb = /\r?\n/g,
      Ab = /^(?:submit|button|image|reset|file)$/i,
      Bb = /^(?:input|select|textarea|keygen)/i;
    (_.param = function (a, b) {
      var c,
        d = [],
        e = function (a, b) {
          (b = _.isFunction(b) ? b() : null == b ? "" : b),
            (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
        };
      if (
        (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional),
        _.isArray(a) || (a.jquery && !_.isPlainObject(a)))
      )
        _.each(a, function () {
          e(this.name, this.value);
        });
      else for (c in a) O(c, a[c], b, e);
      return d.join("&").replace(xb, "+");
    }),
      _.fn.extend({
        serialize: function () {
          return _.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var a = _.prop(this, "elements");
            return a ? _.makeArray(a) : this;
          })
            .filter(function () {
              var a = this.type;
              return (
                this.name &&
                !_(this).is(":disabled") &&
                Bb.test(this.nodeName) &&
                !Ab.test(a) &&
                (this.checked || !ya.test(a))
              );
            })
            .map(function (a, b) {
              var c = _(this).val();
              return null == c
                ? null
                : _.isArray(c)
                ? _.map(c, function (a) {
                    return { name: b.name, value: a.replace(zb, "\r\n") };
                  })
                : { name: b.name, value: c.replace(zb, "\r\n") };
            })
            .get();
        },
      }),
      (_.ajaxSettings.xhr = function () {
        try {
          return new XMLHttpRequest();
        } catch (a) {}
      });
    var Cb = 0,
      Db = {},
      Eb = { 0: 200, 1223: 204 },
      Fb = _.ajaxSettings.xhr();
    a.attachEvent &&
      a.attachEvent("onunload", function () {
        for (var a in Db) Db[a]();
      }),
      (Y.cors = !!Fb && "withCredentials" in Fb),
      (Y.ajax = Fb = !!Fb),
      _.ajaxTransport(function (a) {
        var b;
        return Y.cors || (Fb && !a.crossDomain)
          ? {
              send: function (c, d) {
                var e,
                  f = a.xhr(),
                  g = ++Cb;
                if (
                  (f.open(a.type, a.url, a.async, a.username, a.password),
                  a.xhrFields)
                )
                  for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType &&
                  f.overrideMimeType &&
                  f.overrideMimeType(a.mimeType),
                  a.crossDomain ||
                    c["X-Requested-With"] ||
                    (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                (b = function (a) {
                  return function () {
                    b &&
                      (delete Db[g],
                      (b = f.onload = f.onerror = null),
                      "abort" === a
                        ? f.abort()
                        : "error" === a
                        ? d(f.status, f.statusText)
                        : d(
                            Eb[f.status] || f.status,
                            f.statusText,
                            "string" == typeof f.responseText
                              ? { text: f.responseText }
                              : void 0,
                            f.getAllResponseHeaders()
                          ));
                  };
                }),
                  (f.onload = b()),
                  (f.onerror = b("error")),
                  (b = Db[g] = b("abort"));
                try {
                  f.send((a.hasContent && a.data) || null);
                } catch (h) {
                  if (b) throw h;
                }
              },
              abort: function () {
                b && b();
              },
            }
          : void 0;
      }),
      _.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /(?:java|ecma)script/ },
        converters: {
          "text script": function (a) {
            return _.globalEval(a), a;
          },
        },
      }),
      _.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
      }),
      _.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
          var b, c;
          return {
            send: function (d, e) {
              (b = _("<script>")
                .prop({ async: !0, charset: a.scriptCharset, src: a.url })
                .on(
                  "load error",
                  (c = function (a) {
                    b.remove(),
                      (c = null),
                      a && e("error" === a.type ? 404 : 200, a.type);
                  })
                )),
                Z.head.appendChild(b[0]);
            },
            abort: function () {
              c && c();
            },
          };
        }
      });
    var Gb = [],
      Hb = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var a = Gb.pop() || _.expando + "_" + jb++;
        return (this[a] = !0), a;
      },
    }),
      _.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e,
          f,
          g,
          h =
            b.jsonp !== !1 &&
            (Hb.test(b.url)
              ? "url"
              : "string" == typeof b.data &&
                !(b.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
                Hb.test(b.data) &&
                "data");
        return h || "jsonp" === b.dataTypes[0]
          ? ((e = b.jsonpCallback =
              _.isFunction(b.jsonpCallback)
                ? b.jsonpCallback()
                : b.jsonpCallback),
            h
              ? (b[h] = b[h].replace(Hb, "$1" + e))
              : b.jsonp !== !1 &&
                (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
            (b.converters["script json"] = function () {
              return g || _.error(e + " was not called"), g[0];
            }),
            (b.dataTypes[0] = "json"),
            (f = a[e]),
            (a[e] = function () {
              g = arguments;
            }),
            d.always(function () {
              (a[e] = f),
                b[e] && ((b.jsonpCallback = c.jsonpCallback), Gb.push(e)),
                g && _.isFunction(f) && f(g[0]),
                (g = f = void 0);
            }),
            "script")
          : void 0;
      }),
      (_.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && ((c = b), (b = !1)), (b = b || Z);
        var d = ga.exec(a),
          e = !c && [];
        return d
          ? [b.createElement(d[1])]
          : ((d = _.buildFragment([a], b, e)),
            e && e.length && _(e).remove(),
            _.merge([], d.childNodes));
      });
    var Ib = _.fn.load;
    (_.fn.load = function (a, b, c) {
      if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
      var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");
      return (
        h >= 0 && ((d = _.trim(a.slice(h))), (a = a.slice(0, h))),
        _.isFunction(b)
          ? ((c = b), (b = void 0))
          : b && "object" == typeof b && (e = "POST"),
        g.length > 0 &&
          _.ajax({ url: a, type: e, dataType: "html", data: b })
            .done(function (a) {
              (f = arguments),
                g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a);
            })
            .complete(
              c &&
                function (a, b) {
                  g.each(c, f || [a.responseText, b, a]);
                }
            ),
        this
      );
    }),
      _.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (a, b) {
          _.fn[b] = function (a) {
            return this.on(b, a);
          };
        }
      ),
      (_.expr.filters.animated = function (a) {
        return _.grep(_.timers, function (b) {
          return a === b.elem;
        }).length;
      });
    var Jb = a.document.documentElement;
    (_.offset = {
      setOffset: function (a, b, c) {
        var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = _.css(a, "position"),
          l = _(a),
          m = {};
        "static" === k && (a.style.position = "relative"),
          (h = l.offset()),
          (f = _.css(a, "top")),
          (i = _.css(a, "left")),
          (j =
            ("absolute" === k || "fixed" === k) &&
            (f + i).indexOf("auto") > -1),
          j
            ? ((d = l.position()), (g = d.top), (e = d.left))
            : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
          _.isFunction(b) && (b = b.call(a, c, h)),
          null != b.top && (m.top = b.top - h.top + g),
          null != b.left && (m.left = b.left - h.left + e),
          "using" in b ? b.using.call(a, m) : l.css(m);
      },
    }),
      _.fn.extend({
        offset: function (a) {
          if (arguments.length)
            return void 0 === a
              ? this
              : this.each(function (b) {
                  _.offset.setOffset(this, a, b);
                });
          var b,
            c,
            d = this[0],
            e = { top: 0, left: 0 },
            f = d && d.ownerDocument;
          if (f)
            return (
              (b = f.documentElement),
              _.contains(b, d)
                ? (typeof d.getBoundingClientRect !== za &&
                    (e = d.getBoundingClientRect()),
                  (c = P(f)),
                  {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft,
                  })
                : e
            );
        },
        position: function () {
          if (this[0]) {
            var a,
              b,
              c = this[0],
              d = { top: 0, left: 0 };
            return (
              "fixed" === _.css(c, "position")
                ? (b = c.getBoundingClientRect())
                : ((a = this.offsetParent()),
                  (b = this.offset()),
                  _.nodeName(a[0], "html") || (d = a.offset()),
                  (d.top += _.css(a[0], "borderTopWidth", !0)),
                  (d.left += _.css(a[0], "borderLeftWidth", !0))),
              {
                top: b.top - d.top - _.css(c, "marginTop", !0),
                left: b.left - d.left - _.css(c, "marginLeft", !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var a = this.offsetParent || Jb;
              a && !_.nodeName(a, "html") && "static" === _.css(a, "position");

            )
              a = a.offsetParent;
            return a || Jb;
          });
        },
      }),
      _.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (b, c) {
          var d = "pageYOffset" === c;
          _.fn[b] = function (e) {
            return qa(
              this,
              function (b, e, f) {
                var g = P(b);
                return void 0 === f
                  ? g
                    ? g[c]
                    : b[e]
                  : void (g
                      ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset)
                      : (b[e] = f));
              },
              b,
              e,
              arguments.length,
              null
            );
          };
        }
      ),
      _.each(["top", "left"], function (a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function (a, c) {
          return c
            ? ((c = v(a, b)), Qa.test(c) ? _(a).position()[b] + "px" : c)
            : void 0;
        });
      }),
      _.each({ Height: "height", Width: "width" }, function (a, b) {
        _.each(
          { padding: "inner" + a, content: b, "": "outer" + a },
          function (c, d) {
            _.fn[d] = function (d, e) {
              var f = arguments.length && (c || "boolean" != typeof d),
                g = c || (d === !0 || e === !0 ? "margin" : "border");
              return qa(
                this,
                function (b, c, d) {
                  var e;
                  return _.isWindow(b)
                    ? b.document.documentElement["client" + a]
                    : 9 === b.nodeType
                    ? ((e = b.documentElement),
                      Math.max(
                        b.body["scroll" + a],
                        e["scroll" + a],
                        b.body["offset" + a],
                        e["offset" + a],
                        e["client" + a]
                      ))
                    : void 0 === d
                    ? _.css(b, c, g)
                    : _.style(b, c, d, g);
                },
                b,
                f ? d : void 0,
                f,
                null
              );
            };
          }
        );
      }),
      (_.fn.size = function () {
        return this.length;
      }),
      (_.fn.andSelf = _.fn.addBack),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return _;
        });
    var Kb = a.jQuery,
      Lb = a.$;
    return (
      (_.noConflict = function (b) {
        return (
          a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _
        );
      }),
      typeof b === za && (a.jQuery = a.$ = _),
      _
    );
  }),
  !(function (a, b) {
    "function" == typeof define && define.amd
      ? define(b)
      : "object" == typeof exports
      ? (module.exports = b(require, exports, module))
      : (a.Tether = b());
  })(this, function (a, b, c) {
    "use strict";
    function d(a, b) {
      if (!(a instanceof b))
        throw new TypeError("Cannot call a class as a function");
    }
    function e(a) {
      var b = getComputedStyle(a),
        c = b.position;
      if ("fixed" === c) return a;
      for (var d = a; (d = d.parentNode); ) {
        var e = void 0;
        try {
          e = getComputedStyle(d);
        } catch (f) {}
        if ("undefined" == typeof e || null === e) return d;
        var g = e,
          h = g.overflow,
          i = g.overflowX,
          j = g.overflowY;
        if (
          /(auto|scroll)/.test(h + j + i) &&
          ("absolute" !== c ||
            ["relative", "absolute", "fixed"].indexOf(e.position) >= 0)
        )
          return d;
      }
      return document.body;
    }
    function f(a) {
      var b = void 0;
      a === document
        ? ((b = document), (a = document.documentElement))
        : (b = a.ownerDocument);
      var c = b.documentElement,
        d = {},
        e = a.getBoundingClientRect();
      for (var f in e) d[f] = e[f];
      var g = y(b);
      return (
        (d.top -= g.top),
        (d.left -= g.left),
        "undefined" == typeof d.width &&
          (d.width = document.body.scrollWidth - d.left - d.right),
        "undefined" == typeof d.height &&
          (d.height = document.body.scrollHeight - d.top - d.bottom),
        (d.top = d.top - c.clientTop),
        (d.left = d.left - c.clientLeft),
        (d.right = b.body.clientWidth - d.width - d.left),
        (d.bottom = b.body.clientHeight - d.height - d.top),
        d
      );
    }
    function g(a) {
      return a.offsetParent || document.documentElement;
    }
    function h() {
      var a = document.createElement("div");
      (a.style.width = "100%"), (a.style.height = "200px");
      var b = document.createElement("div");
      i(b.style, {
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        visibility: "hidden",
        width: "200px",
        height: "150px",
        overflow: "hidden",
      }),
        b.appendChild(a),
        document.body.appendChild(b);
      var c = a.offsetWidth;
      b.style.overflow = "scroll";
      var d = a.offsetWidth;
      c === d && (d = b.clientWidth), document.body.removeChild(b);
      var e = c - d;
      return { width: e, height: e };
    }
    function i() {
      var a =
          arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        b = [];
      return (
        Array.prototype.push.apply(b, arguments),
        b.slice(1).forEach(function (b) {
          if (b)
            for (var c in b) ({}).hasOwnProperty.call(b, c) && (a[c] = b[c]);
        }),
        a
      );
    }
    function j(a, b) {
      if ("undefined" != typeof a.classList)
        b.split(" ").forEach(function (b) {
          b.trim() && a.classList.remove(b);
        });
      else {
        var c = new RegExp("(^| )" + b.split(" ").join("|") + "( |$)", "gi"),
          d = m(a).replace(c, " ");
        n(a, d);
      }
    }
    function k(a, b) {
      if ("undefined" != typeof a.classList)
        b.split(" ").forEach(function (b) {
          b.trim() && a.classList.add(b);
        });
      else {
        j(a, b);
        var c = m(a) + (" " + b);
        n(a, c);
      }
    }
    function l(a, b) {
      if ("undefined" != typeof a.classList) return a.classList.contains(b);
      var c = m(a);
      return new RegExp("(^| )" + b + "( |$)", "gi").test(c);
    }
    function m(a) {
      return a.className instanceof SVGAnimatedString
        ? a.className.baseVal
        : a.className;
    }
    function n(a, b) {
      a.setAttribute("class", b);
    }
    function o(a, b, c) {
      c.forEach(function (c) {
        -1 === b.indexOf(c) && l(a, c) && j(a, c);
      }),
        b.forEach(function (b) {
          l(a, b) || k(a, b);
        });
    }
    function d(a, b) {
      if (!(a instanceof b))
        throw new TypeError("Cannot call a class as a function");
    }
    function p(a, b) {
      var c =
        arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
      return a + c >= b && b >= a - c;
    }
    function q() {
      return "undefined" != typeof performance &&
        "undefined" != typeof performance.now
        ? performance.now()
        : +new Date();
    }
    function r() {
      for (
        var a = { top: 0, left: 0 }, b = arguments.length, c = Array(b), d = 0;
        b > d;
        d++
      )
        c[d] = arguments[d];
      return (
        c.forEach(function (b) {
          var c = b.top,
            d = b.left;
          "string" == typeof c && (c = parseFloat(c, 10)),
            "string" == typeof d && (d = parseFloat(d, 10)),
            (a.top += c),
            (a.left += d);
        }),
        a
      );
    }
    function s(a, b) {
      return (
        "string" == typeof a.left &&
          -1 !== a.left.indexOf("%") &&
          (a.left = (parseFloat(a.left, 10) / 100) * b.width),
        "string" == typeof a.top &&
          -1 !== a.top.indexOf("%") &&
          (a.top = (parseFloat(a.top, 10) / 100) * b.height),
        a
      );
    }
    function t(a, b) {
      return (
        "scrollParent" === b
          ? (b = a.scrollParent)
          : "window" === b &&
            (b = [
              pageXOffset,
              pageYOffset,
              innerWidth + pageXOffset,
              innerHeight + pageYOffset,
            ]),
        b === document && (b = b.documentElement),
        "undefined" != typeof b.nodeType &&
          !(function () {
            var a = f(b),
              c = a,
              d = getComputedStyle(b);
            (b = [c.left, c.top, a.width + c.left, a.height + c.top]),
              R.forEach(function (a, c) {
                (a = a[0].toUpperCase() + a.substr(1)),
                  "Top" === a || "Left" === a
                    ? (b[c] += parseFloat(d["border" + a + "Width"]))
                    : (b[c] -= parseFloat(d["border" + a + "Width"]));
              });
          })(),
        b
      );
    }
    var u = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            (d.enumerable = d.enumerable || !1),
              (d.configurable = !0),
              "value" in d && (d.writable = !0),
              Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, d) {
          return c && a(b.prototype, c), d && a(b, d), b;
        };
      })(),
      v = void 0;
    "undefined" == typeof v && (v = { modules: [] });
    var w = (function () {
        var a = 0;
        return function () {
          return ++a;
        };
      })(),
      x = {},
      y = function (a) {
        var b = a._tetherZeroElement;
        "undefined" == typeof b &&
          ((b = a.createElement("div")),
          b.setAttribute("data-tether-id", w()),
          i(b.style, { top: 0, left: 0, position: "absolute" }),
          a.body.appendChild(b),
          (a._tetherZeroElement = b));
        var c = b.getAttribute("data-tether-id");
        if ("undefined" == typeof x[c]) {
          x[c] = {};
          var d = b.getBoundingClientRect();
          for (var e in d) x[c][e] = d[e];
          A(function () {
            delete x[c];
          });
        }
        return x[c];
      },
      z = [],
      A = function (a) {
        z.push(a);
      },
      B = function () {
        for (var a = void 0; (a = z.pop()); ) a();
      },
      C = (function () {
        function a() {
          d(this, a);
        }
        return (
          u(a, [
            {
              key: "on",
              value: function (a, b, c) {
                var d =
                  arguments.length <= 3 || void 0 === arguments[3]
                    ? !1
                    : arguments[3];
                "undefined" == typeof this.bindings && (this.bindings = {}),
                  "undefined" == typeof this.bindings[a] &&
                    (this.bindings[a] = []),
                  this.bindings[a].push({ handler: b, ctx: c, once: d });
              },
            },
            {
              key: "once",
              value: function (a, b, c) {
                this.on(a, b, c, !0);
              },
            },
            {
              key: "off",
              value: function (a, b) {
                if (
                  "undefined" == typeof this.bindings ||
                  "undefined" == typeof this.bindings[a]
                )
                  if ("undefined" == typeof b) delete this.bindings[a];
                  else
                    for (var c = 0; c < this.bindings[a].length; )
                      this.bindings[a][c].handler === b
                        ? this.bindings[a].splice(c, 1)
                        : ++c;
              },
            },
            {
              key: "trigger",
              value: function (a) {
                if ("undefined" != typeof this.bindings && this.bindings[a]) {
                  for (
                    var b = 0,
                      c = arguments.length,
                      d = Array(c > 1 ? c - 1 : 0),
                      e = 1;
                    c > e;
                    e++
                  )
                    d[e - 1] = arguments[e];
                  for (; b < this.bindings[a].length; ) {
                    var f = this.bindings[a][b],
                      g = f.handler,
                      h = f.ctx,
                      i = f.once,
                      j = h;
                    "undefined" == typeof j && (j = this),
                      g.apply(j, d),
                      i ? this.bindings[a].splice(b, 1) : ++b;
                  }
                }
              },
            },
          ]),
          a
        );
      })();
    v.Utils = {
      getScrollParent: e,
      getBounds: f,
      getOffsetParent: g,
      extend: i,
      addClass: k,
      removeClass: j,
      hasClass: l,
      updateClasses: o,
      defer: A,
      flush: B,
      uniqueId: w,
      Evented: C,
      getScrollBarSize: h,
    };
    var D = (function () {
        function a(a, b) {
          var c = [],
            d = !0,
            e = !1,
            f = void 0;
          try {
            for (
              var g, h = a[Symbol.iterator]();
              !(d = (g = h.next()).done) &&
              (c.push(g.value), !b || c.length !== b);
              d = !0
            );
          } catch (i) {
            (e = !0), (f = i);
          } finally {
            try {
              !d && h["return"] && h["return"]();
            } finally {
              if (e) throw f;
            }
          }
          return c;
        }
        return function (b, c) {
          if (Array.isArray(b)) return b;
          if (Symbol.iterator in Object(b)) return a(b, c);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      })(),
      u = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            (d.enumerable = d.enumerable || !1),
              (d.configurable = !0),
              "value" in d && (d.writable = !0),
              Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, d) {
          return c && a(b.prototype, c), d && a(b, d), b;
        };
      })();
    if ("undefined" == typeof v)
      throw new Error("You must include the utils.js file before tether.js");
    var E = v.Utils,
      e = E.getScrollParent,
      f = E.getBounds,
      g = E.getOffsetParent,
      i = E.extend,
      k = E.addClass,
      j = E.removeClass,
      o = E.updateClasses,
      A = E.defer,
      B = E.flush,
      h = E.getScrollBarSize,
      F = (function () {
        if ("undefined" == typeof document) return "";
        for (
          var a = document.createElement("div"),
            b = [
              "transform",
              "webkitTransform",
              "OTransform",
              "MozTransform",
              "msTransform",
            ],
            c = 0;
          c < b.length;
          ++c
        ) {
          var d = b[c];
          if (void 0 !== a.style[d]) return d;
        }
      })(),
      G = [],
      H = function () {
        G.forEach(function (a) {
          a.position(!1);
        }),
          B();
      };
    !(function () {
      var a = null,
        b = null,
        c = null,
        d = function e() {
          return "undefined" != typeof b && b > 16
            ? ((b = Math.min(b - 16, 250)), void (c = setTimeout(e, 250)))
            : void (
                ("undefined" != typeof a && q() - a < 10) ||
                ("undefined" != typeof c && (clearTimeout(c), (c = null)),
                (a = q()),
                H(),
                (b = q() - a))
              );
        };
      "undefined" != typeof window &&
        ["resize", "scroll", "touchmove"].forEach(function (a) {
          window.addEventListener(a, d);
        });
    })();
    var I = { center: "center", left: "right", right: "left" },
      J = { middle: "middle", top: "bottom", bottom: "top" },
      K = {
        top: 0,
        left: 0,
        middle: "50%",
        center: "50%",
        bottom: "100%",
        right: "100%",
      },
      L = function (a, b) {
        var c = a.left,
          d = a.top;
        return (
          "auto" === c && (c = I[b.left]),
          "auto" === d && (d = J[b.top]),
          { left: c, top: d }
        );
      },
      M = function (a) {
        var b = a.left,
          c = a.top;
        return (
          "undefined" != typeof K[a.left] && (b = K[a.left]),
          "undefined" != typeof K[a.top] && (c = K[a.top]),
          { left: b, top: c }
        );
      },
      N = function (a) {
        var b = a.split(" "),
          c = D(b, 2),
          d = c[0],
          e = c[1];
        return { top: d, left: e };
      },
      O = N,
      P = (function () {
        function a(b) {
          var c = this;
          d(this, a),
            (this.position = this.position.bind(this)),
            G.push(this),
            (this.history = []),
            this.setOptions(b, !1),
            v.modules.forEach(function (a) {
              "undefined" != typeof a.initialize && a.initialize.call(c);
            }),
            this.position();
        }
        return (
          u(a, [
            {
              key: "getClass",
              value: function () {
                var a =
                    arguments.length <= 0 || void 0 === arguments[0]
                      ? ""
                      : arguments[0],
                  b = this.options.classes;
                return "undefined" != typeof b && b[a]
                  ? this.options.classes[a]
                  : this.options.classPrefix
                  ? this.options.classPrefix + "-" + a
                  : a;
              },
            },
            {
              key: "setOptions",
              value: function (a) {
                var b = this,
                  c =
                    arguments.length <= 1 || void 0 === arguments[1]
                      ? !0
                      : arguments[1],
                  d = {
                    offset: "0 0",
                    targetOffset: "0 0",
                    targetAttachment: "auto auto",
                    classPrefix: "tether",
                  };
                this.options = i(d, a);
                var f = this.options,
                  g = f.element,
                  h = f.target,
                  j = f.targetModifier;
                if (
                  ((this.element = g),
                  (this.target = h),
                  (this.targetModifier = j),
                  "viewport" === this.target
                    ? ((this.target = document.body),
                      (this.targetModifier = "visible"))
                    : "scroll-handle" === this.target &&
                      ((this.target = document.body),
                      (this.targetModifier = "scroll-handle")),
                  ["element", "target"].forEach(function (a) {
                    if ("undefined" == typeof b[a])
                      throw new Error(
                        "Tether Error: Both element and target must be defined"
                      );
                    "undefined" != typeof b[a].jquery
                      ? (b[a] = b[a][0])
                      : "string" == typeof b[a] &&
                        (b[a] = document.querySelector(b[a]));
                  }),
                  k(this.element, this.getClass("element")),
                  this.options.addTargetClasses !== !1 &&
                    k(this.target, this.getClass("target")),
                  !this.options.attachment)
                )
                  throw new Error(
                    "Tether Error: You must provide an attachment"
                  );
                (this.targetAttachment = O(this.options.targetAttachment)),
                  (this.attachment = O(this.options.attachment)),
                  (this.offset = N(this.options.offset)),
                  (this.targetOffset = N(this.options.targetOffset)),
                  "undefined" != typeof this.scrollParent && this.disable(),
                  "scroll-handle" === this.targetModifier
                    ? (this.scrollParent = this.target)
                    : (this.scrollParent = e(this.target)),
                  this.options.enabled !== !1 && this.enable(c);
              },
            },
            {
              key: "getTargetBounds",
              value: function () {
                if ("undefined" == typeof this.targetModifier)
                  return f(this.target);
                if ("visible" === this.targetModifier) {
                  if (this.target === document.body)
                    return {
                      top: pageYOffset,
                      left: pageXOffset,
                      height: innerHeight,
                      width: innerWidth,
                    };
                  var a = f(this.target),
                    b = {
                      height: a.height,
                      width: a.width,
                      top: a.top,
                      left: a.left,
                    };
                  return (
                    (b.height = Math.min(
                      b.height,
                      a.height - (pageYOffset - a.top)
                    )),
                    (b.height = Math.min(
                      b.height,
                      a.height -
                        (a.top + a.height - (pageYOffset + innerHeight))
                    )),
                    (b.height = Math.min(innerHeight, b.height)),
                    (b.height -= 2),
                    (b.width = Math.min(
                      b.width,
                      a.width - (pageXOffset - a.left)
                    )),
                    (b.width = Math.min(
                      b.width,
                      a.width - (a.left + a.width - (pageXOffset + innerWidth))
                    )),
                    (b.width = Math.min(innerWidth, b.width)),
                    (b.width -= 2),
                    b.top < pageYOffset && (b.top = pageYOffset),
                    b.left < pageXOffset && (b.left = pageXOffset),
                    b
                  );
                }
                if ("scroll-handle" === this.targetModifier) {
                  var a = void 0,
                    c = this.target;
                  c === document.body
                    ? ((c = document.documentElement),
                      (a = {
                        left: pageXOffset,
                        top: pageYOffset,
                        height: innerHeight,
                        width: innerWidth,
                      }))
                    : (a = f(c));
                  var d = getComputedStyle(c),
                    e =
                      c.scrollWidth > c.clientWidth ||
                      [d.overflow, d.overflowX].indexOf("scroll") >= 0 ||
                      this.target !== document.body,
                    g = 0;
                  e && (g = 15);
                  var h =
                      a.height -
                      parseFloat(d.borderTopWidth) -
                      parseFloat(d.borderBottomWidth) -
                      g,
                    b = {
                      width: 15,
                      height: 0.975 * h * (h / c.scrollHeight),
                      left:
                        a.left + a.width - parseFloat(d.borderLeftWidth) - 15,
                    },
                    i = 0;
                  408 > h &&
                    this.target === document.body &&
                    (i = -11e-5 * Math.pow(h, 2) - 0.00727 * h + 22.58),
                    this.target !== document.body &&
                      (b.height = Math.max(b.height, 24));
                  var j = this.target.scrollTop / (c.scrollHeight - h);
                  return (
                    (b.top =
                      j * (h - b.height - i) +
                      a.top +
                      parseFloat(d.borderTopWidth)),
                    this.target === document.body &&
                      (b.height = Math.max(b.height, 24)),
                    b
                  );
                }
              },
            },
            {
              key: "clearCache",
              value: function () {
                this._cache = {};
              },
            },
            {
              key: "cache",
              value: function (a, b) {
                return (
                  "undefined" == typeof this._cache && (this._cache = {}),
                  "undefined" == typeof this._cache[a] &&
                    (this._cache[a] = b.call(this)),
                  this._cache[a]
                );
              },
            },
            {
              key: "enable",
              value: function () {
                var a =
                  arguments.length <= 0 || void 0 === arguments[0]
                    ? !0
                    : arguments[0];
                this.options.addTargetClasses !== !1 &&
                  k(this.target, this.getClass("enabled")),
                  k(this.element, this.getClass("enabled")),
                  (this.enabled = !0),
                  this.scrollParent !== document &&
                    this.scrollParent.addEventListener("scroll", this.position),
                  a && this.position();
              },
            },
            {
              key: "disable",
              value: function () {
                j(this.target, this.getClass("enabled")),
                  j(this.element, this.getClass("enabled")),
                  (this.enabled = !1),
                  "undefined" != typeof this.scrollParent &&
                    this.scrollParent.removeEventListener(
                      "scroll",
                      this.position
                    );
              },
            },
            {
              key: "destroy",
              value: function () {
                var a = this;
                this.disable(),
                  G.forEach(function (b, c) {
                    return b === a ? void G.splice(c, 1) : void 0;
                  });
              },
            },
            {
              key: "updateAttachClasses",
              value: function (a, b) {
                var c = this;
                (a = a || this.attachment), (b = b || this.targetAttachment);
                var d = ["left", "top", "bottom", "right", "middle", "center"];
                "undefined" != typeof this._addAttachClasses &&
                  this._addAttachClasses.length &&
                  this._addAttachClasses.splice(
                    0,
                    this._addAttachClasses.length
                  ),
                  "undefined" == typeof this._addAttachClasses &&
                    (this._addAttachClasses = []);
                var e = this._addAttachClasses;
                a.top &&
                  e.push(this.getClass("element-attached") + "-" + a.top),
                  a.left &&
                    e.push(this.getClass("element-attached") + "-" + a.left),
                  b.top &&
                    e.push(this.getClass("target-attached") + "-" + b.top),
                  b.left &&
                    e.push(this.getClass("target-attached") + "-" + b.left);
                var f = [];
                d.forEach(function (a) {
                  f.push(c.getClass("element-attached") + "-" + a),
                    f.push(c.getClass("target-attached") + "-" + a);
                }),
                  A(function () {
                    "undefined" != typeof c._addAttachClasses &&
                      (o(c.element, c._addAttachClasses, f),
                      c.options.addTargetClasses !== !1 &&
                        o(c.target, c._addAttachClasses, f),
                      delete c._addAttachClasses);
                  });
              },
            },
            {
              key: "position",
              value: function () {
                var a = this,
                  b =
                    arguments.length <= 0 || void 0 === arguments[0]
                      ? !0
                      : arguments[0];
                if (this.enabled) {
                  this.clearCache();
                  var c = L(this.targetAttachment, this.attachment);
                  this.updateAttachClasses(this.attachment, c);
                  var d = this.cache("element-bounds", function () {
                      return f(a.element);
                    }),
                    e = d.width,
                    i = d.height;
                  if (
                    0 === e &&
                    0 === i &&
                    "undefined" != typeof this.lastSize
                  ) {
                    var j = this.lastSize;
                    (e = j.width), (i = j.height);
                  } else this.lastSize = { width: e, height: i };
                  var k = this.cache("target-bounds", function () {
                      return a.getTargetBounds();
                    }),
                    l = k,
                    m = s(M(this.attachment), { width: e, height: i }),
                    n = s(M(c), l),
                    o = s(this.offset, { width: e, height: i }),
                    p = s(this.targetOffset, l);
                  (m = r(m, o)), (n = r(n, p));
                  for (
                    var q = k.left + n.left - m.left,
                      t = k.top + n.top - m.top,
                      u = 0;
                    u < v.modules.length;
                    ++u
                  ) {
                    var w = v.modules[u],
                      x = w.position.call(this, {
                        left: q,
                        top: t,
                        targetAttachment: c,
                        targetPos: k,
                        elementPos: d,
                        offset: m,
                        targetOffset: n,
                        manualOffset: o,
                        manualTargetOffset: p,
                        scrollbarSize: z,
                        attachment: this.attachment,
                      });
                    if (x === !1) return !1;
                    "undefined" != typeof x &&
                      "object" == typeof x &&
                      ((t = x.top), (q = x.left));
                  }
                  var y = {
                      page: { top: t, left: q },
                      viewport: {
                        top: t - pageYOffset,
                        bottom: pageYOffset - t - i + innerHeight,
                        left: q - pageXOffset,
                        right: pageXOffset - q - e + innerWidth,
                      },
                    },
                    z = void 0;
                  return (
                    document.body.scrollWidth > window.innerWidth &&
                      ((z = this.cache("scrollbar-size", h)),
                      (y.viewport.bottom -= z.height)),
                    document.body.scrollHeight > window.innerHeight &&
                      ((z = this.cache("scrollbar-size", h)),
                      (y.viewport.right -= z.width)),
                    (-1 ===
                      ["", "static"].indexOf(document.body.style.position) ||
                      -1 ===
                        ["", "static"].indexOf(
                          document.body.parentElement.style.position
                        )) &&
                      ((y.page.bottom = document.body.scrollHeight - t - i),
                      (y.page.right = document.body.scrollWidth - q - e)),
                    "undefined" != typeof this.options.optimizations &&
                      this.options.optimizations.moveElement !== !1 &&
                      "undefined" == typeof this.targetModifier &&
                      !(function () {
                        var b = a.cache("target-offsetparent", function () {
                            return g(a.target);
                          }),
                          c = a.cache(
                            "target-offsetparent-bounds",
                            function () {
                              return f(b);
                            }
                          ),
                          d = getComputedStyle(b),
                          e = c,
                          h = {};
                        if (
                          (["Top", "Left", "Bottom", "Right"].forEach(function (
                            a
                          ) {
                            h[a.toLowerCase()] = parseFloat(
                              d["border" + a + "Width"]
                            );
                          }),
                          (c.right =
                            document.body.scrollWidth -
                            c.left -
                            e.width +
                            h.right),
                          (c.bottom =
                            document.body.scrollHeight -
                            c.top -
                            e.height +
                            h.bottom),
                          y.page.top >= c.top + h.top &&
                            y.page.bottom >= c.bottom &&
                            y.page.left >= c.left + h.left &&
                            y.page.right >= c.right)
                        ) {
                          var i = b.scrollTop,
                            j = b.scrollLeft;
                          y.offset = {
                            top: y.page.top - c.top + i - h.top,
                            left: y.page.left - c.left + j - h.left,
                          };
                        }
                      })(),
                    this.move(y),
                    this.history.unshift(y),
                    this.history.length > 3 && this.history.pop(),
                    b && B(),
                    !0
                  );
                }
              },
            },
            {
              key: "move",
              value: function (a) {
                var b = this;
                if ("undefined" != typeof this.element.parentNode) {
                  var c = {};
                  for (var d in a) {
                    c[d] = {};
                    for (var e in a[d]) {
                      for (var f = !1, h = 0; h < this.history.length; ++h) {
                        var j = this.history[h];
                        if (
                          "undefined" != typeof j[d] &&
                          !p(j[d][e], a[d][e])
                        ) {
                          f = !0;
                          break;
                        }
                      }
                      f || (c[d][e] = !0);
                    }
                  }
                  var k = { top: "", left: "", right: "", bottom: "" },
                    l = function (a, c) {
                      var d = "undefined" != typeof b.options.optimizations,
                        e = d ? b.options.optimizations.gpu : null;
                      if (e !== !1) {
                        var f = void 0,
                          g = void 0;
                        a.top
                          ? ((k.top = 0), (f = c.top))
                          : ((k.bottom = 0), (f = -c.bottom)),
                          a.left
                            ? ((k.left = 0), (g = c.left))
                            : ((k.right = 0), (g = -c.right)),
                          (k[F] =
                            "translateX(" +
                            Math.round(g) +
                            "px) translateY(" +
                            Math.round(f) +
                            "px)"),
                          "msTransform" !== F && (k[F] += " translateZ(0)");
                      } else
                        a.top
                          ? (k.top = c.top + "px")
                          : (k.bottom = c.bottom + "px"),
                          a.left
                            ? (k.left = c.left + "px")
                            : (k.right = c.right + "px");
                    },
                    m = !1;
                  if (
                    ((c.page.top || c.page.bottom) &&
                    (c.page.left || c.page.right)
                      ? ((k.position = "absolute"), l(c.page, a.page))
                      : (c.viewport.top || c.viewport.bottom) &&
                        (c.viewport.left || c.viewport.right)
                      ? ((k.position = "fixed"), l(c.viewport, a.viewport))
                      : "undefined" != typeof c.offset &&
                        c.offset.top &&
                        c.offset.left
                      ? !(function () {
                          k.position = "absolute";
                          var d = b.cache("target-offsetparent", function () {
                            return g(b.target);
                          });
                          g(b.element) !== d &&
                            A(function () {
                              b.element.parentNode.removeChild(b.element),
                                d.appendChild(b.element);
                            }),
                            l(c.offset, a.offset),
                            (m = !0);
                        })()
                      : ((k.position = "absolute"),
                        l({ top: !0, left: !0 }, a.page)),
                    !m)
                  ) {
                    for (
                      var n = !0, o = this.element.parentNode;
                      o && "BODY" !== o.tagName;

                    ) {
                      if ("static" !== getComputedStyle(o).position) {
                        n = !1;
                        break;
                      }
                      o = o.parentNode;
                    }
                    n ||
                      (this.element.parentNode.removeChild(this.element),
                      document.body.appendChild(this.element));
                  }
                  var q = {},
                    r = !1;
                  for (var e in k) {
                    var s = k[e],
                      t = this.element.style[e];
                    "" !== t &&
                      "" !== s &&
                      ["top", "left", "bottom", "right"].indexOf(e) >= 0 &&
                      ((t = parseFloat(t)), (s = parseFloat(s))),
                      t !== s && ((r = !0), (q[e] = s));
                  }
                  r &&
                    A(function () {
                      i(b.element.style, q);
                    });
                }
              },
            },
          ]),
          a
        );
      })();
    (P.modules = []), (v.position = H);
    var Q = i(P, v),
      D = (function () {
        function a(a, b) {
          var c = [],
            d = !0,
            e = !1,
            f = void 0;
          try {
            for (
              var g, h = a[Symbol.iterator]();
              !(d = (g = h.next()).done) &&
              (c.push(g.value), !b || c.length !== b);
              d = !0
            );
          } catch (i) {
            (e = !0), (f = i);
          } finally {
            try {
              !d && h["return"] && h["return"]();
            } finally {
              if (e) throw f;
            }
          }
          return c;
        }
        return function (b, c) {
          if (Array.isArray(b)) return b;
          if (Symbol.iterator in Object(b)) return a(b, c);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      })(),
      E = v.Utils,
      f = E.getBounds,
      i = E.extend,
      o = E.updateClasses,
      A = E.defer,
      R = ["left", "top", "right", "bottom"];
    v.modules.push({
      position: function (a) {
        var b = this,
          c = a.top,
          d = a.left,
          e = a.targetAttachment;
        if (!this.options.constraints) return !0;
        var g = this.cache("element-bounds", function () {
            return f(b.element);
          }),
          h = g.height,
          j = g.width;
        if (0 === j && 0 === h && "undefined" != typeof this.lastSize) {
          var k = this.lastSize;
          (j = k.width), (h = k.height);
        }
        var l = this.cache("target-bounds", function () {
            return b.getTargetBounds();
          }),
          m = l.height,
          n = l.width,
          p = [this.getClass("pinned"), this.getClass("out-of-bounds")];
        this.options.constraints.forEach(function (a) {
          var b = a.outOfBoundsClass,
            c = a.pinnedClass;
          b && p.push(b), c && p.push(c);
        }),
          p.forEach(function (a) {
            ["left", "top", "right", "bottom"].forEach(function (b) {
              p.push(a + "-" + b);
            });
          });
        var q = [],
          r = i({}, e),
          s = i({}, this.attachment);
        return (
          this.options.constraints.forEach(function (a) {
            var f = a.to,
              g = a.attachment,
              i = a.pin;
            "undefined" == typeof g && (g = "");
            var k = void 0,
              l = void 0;
            if (g.indexOf(" ") >= 0) {
              var o = g.split(" "),
                p = D(o, 2);
              (l = p[0]), (k = p[1]);
            } else k = l = g;
            var u = t(b, f);
            ("target" === l || "both" === l) &&
              (c < u[1] && "top" === r.top && ((c += m), (r.top = "bottom")),
              c + h > u[3] &&
                "bottom" === r.top &&
                ((c -= m), (r.top = "top"))),
              "together" === l &&
                (c < u[1] &&
                  "top" === r.top &&
                  ("bottom" === s.top
                    ? ((c += m), (r.top = "bottom"), (c += h), (s.top = "top"))
                    : "top" === s.top &&
                      ((c += m),
                      (r.top = "bottom"),
                      (c -= h),
                      (s.top = "bottom"))),
                c + h > u[3] &&
                  "bottom" === r.top &&
                  ("top" === s.top
                    ? ((c -= m), (r.top = "top"), (c -= h), (s.top = "bottom"))
                    : "bottom" === s.top &&
                      ((c -= m), (r.top = "top"), (c += h), (s.top = "top"))),
                "middle" === r.top &&
                  (c + h > u[3] && "top" === s.top
                    ? ((c -= h), (s.top = "bottom"))
                    : c < u[1] &&
                      "bottom" === s.top &&
                      ((c += h), (s.top = "top")))),
              ("target" === k || "both" === k) &&
                (d < u[0] &&
                  "left" === r.left &&
                  ((d += n), (r.left = "right")),
                d + j > u[2] &&
                  "right" === r.left &&
                  ((d -= n), (r.left = "left"))),
              "together" === k &&
                (d < u[0] && "left" === r.left
                  ? "right" === s.left
                    ? ((d += n),
                      (r.left = "right"),
                      (d += j),
                      (s.left = "left"))
                    : "left" === s.left &&
                      ((d += n),
                      (r.left = "right"),
                      (d -= j),
                      (s.left = "right"))
                  : d + j > u[2] && "right" === r.left
                  ? "left" === s.left
                    ? ((d -= n),
                      (r.left = "left"),
                      (d -= j),
                      (s.left = "right"))
                    : "right" === s.left &&
                      ((d -= n), (r.left = "left"), (d += j), (s.left = "left"))
                  : "center" === r.left &&
                    (d + j > u[2] && "left" === s.left
                      ? ((d -= j), (s.left = "right"))
                      : d < u[0] &&
                        "right" === s.left &&
                        ((d += j), (s.left = "left")))),
              ("element" === l || "both" === l) &&
                (c < u[1] && "bottom" === s.top && ((c += h), (s.top = "top")),
                c + h > u[3] &&
                  "top" === s.top &&
                  ((c -= h), (s.top = "bottom"))),
              ("element" === k || "both" === k) &&
                (d < u[0] &&
                  "right" === s.left &&
                  ((d += j), (s.left = "left")),
                d + j > u[2] &&
                  "left" === s.left &&
                  ((d -= j), (s.left = "right"))),
              "string" == typeof i
                ? (i = i.split(",").map(function (a) {
                    return a.trim();
                  }))
                : i === !0 && (i = ["top", "left", "right", "bottom"]),
              (i = i || []);
            var v = [],
              w = [];
            c < u[1] &&
              (i.indexOf("top") >= 0
                ? ((c = u[1]), v.push("top"))
                : w.push("top")),
              c + h > u[3] &&
                (i.indexOf("bottom") >= 0
                  ? ((c = u[3] - h), v.push("bottom"))
                  : w.push("bottom")),
              d < u[0] &&
                (i.indexOf("left") >= 0
                  ? ((d = u[0]), v.push("left"))
                  : w.push("left")),
              d + j > u[2] &&
                (i.indexOf("right") >= 0
                  ? ((d = u[2] - j), v.push("right"))
                  : w.push("right")),
              v.length &&
                !(function () {
                  var a = void 0;
                  (a =
                    "undefined" != typeof b.options.pinnedClass
                      ? b.options.pinnedClass
                      : b.getClass("pinned")),
                    q.push(a),
                    v.forEach(function (b) {
                      q.push(a + "-" + b);
                    });
                })(),
              w.length &&
                !(function () {
                  var a = void 0;
                  (a =
                    "undefined" != typeof b.options.outOfBoundsClass
                      ? b.options.outOfBoundsClass
                      : b.getClass("out-of-bounds")),
                    q.push(a),
                    w.forEach(function (b) {
                      q.push(a + "-" + b);
                    });
                })(),
              (v.indexOf("left") >= 0 || v.indexOf("right") >= 0) &&
                (s.left = r.left = !1),
              (v.indexOf("top") >= 0 || v.indexOf("bottom") >= 0) &&
                (s.top = r.top = !1),
              (r.top !== e.top ||
                r.left !== e.left ||
                s.top !== b.attachment.top ||
                s.left !== b.attachment.left) &&
                b.updateAttachClasses(s, r);
          }),
          A(function () {
            b.options.addTargetClasses !== !1 && o(b.target, q, p),
              o(b.element, q, p);
          }),
          { top: c, left: d }
        );
      },
    });
    var E = v.Utils,
      f = E.getBounds,
      o = E.updateClasses,
      A = E.defer;
    v.modules.push({
      position: function (a) {
        var b = this,
          c = a.top,
          d = a.left,
          e = this.cache("element-bounds", function () {
            return f(b.element);
          }),
          g = e.height,
          h = e.width,
          i = this.getTargetBounds(),
          j = c + g,
          k = d + h,
          l = [];
        c <= i.bottom &&
          j >= i.top &&
          ["left", "right"].forEach(function (a) {
            var b = i[a];
            (b === d || b === k) && l.push(a);
          }),
          d <= i.right &&
            k >= i.left &&
            ["top", "bottom"].forEach(function (a) {
              var b = i[a];
              (b === c || b === j) && l.push(a);
            });
        var m = [],
          n = [],
          p = ["left", "top", "right", "bottom"];
        return (
          m.push(this.getClass("abutted")),
          p.forEach(function (a) {
            m.push(b.getClass("abutted") + "-" + a);
          }),
          l.length && n.push(this.getClass("abutted")),
          l.forEach(function (a) {
            n.push(b.getClass("abutted") + "-" + a);
          }),
          A(function () {
            b.options.addTargetClasses !== !1 && o(b.target, n, m),
              o(b.element, n, m);
          }),
          !0
        );
      },
    });
    var D = (function () {
      function a(a, b) {
        var c = [],
          d = !0,
          e = !1,
          f = void 0;
        try {
          for (
            var g, h = a[Symbol.iterator]();
            !(d = (g = h.next()).done) &&
            (c.push(g.value), !b || c.length !== b);
            d = !0
          );
        } catch (i) {
          (e = !0), (f = i);
        } finally {
          try {
            !d && h["return"] && h["return"]();
          } finally {
            if (e) throw f;
          }
        }
        return c;
      }
      return function (b, c) {
        if (Array.isArray(b)) return b;
        if (Symbol.iterator in Object(b)) return a(b, c);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      };
    })();
    return (
      v.modules.push({
        position: function (a) {
          var b = a.top,
            c = a.left;
          if (this.options.shift) {
            var d = this.options.shift;
            "function" == typeof this.options.shift &&
              (d = this.options.shift.call(this, { top: b, left: c }));
            var e = void 0,
              f = void 0;
            if ("string" == typeof d) {
              (d = d.split(" ")), (d[1] = d[1] || d[0]);
              var g = d,
                h = D(g, 2);
              (e = h[0]),
                (f = h[1]),
                (e = parseFloat(e, 10)),
                (f = parseFloat(f, 10));
            } else (e = d.top), (f = d.left);
            return (b += e), (c += f), { top: b, left: c };
          }
        },
      }),
      Q
    );
  }),
  "undefined" == typeof jQuery)
)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (a) {
  var b = a.fn.jquery.split(" ")[0].split(".");
  if (
    (b[0] < 2 && b[1] < 9) ||
    (1 == b[0] && 9 == b[1] && b[2] < 1) ||
    b[0] >= 4
  )
    throw new Error(
      "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
    );
})(jQuery),
  +(function (a) {
    "use strict";
    function b(a, b) {
      if ("function" != typeof b && null !== b)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof b
        );
      (a.prototype = Object.create(b && b.prototype, {
        constructor: {
          value: a,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        b &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(a, b)
            : (a.__proto__ = b));
    }
    function c(a, b) {
      if (!(a instanceof b))
        throw new TypeError("Cannot call a class as a function");
    }
    var d = function (a, b, c) {
        for (var d = !0; d; ) {
          var e = a,
            f = b,
            g = c;
          (d = !1), null === e && (e = Function.prototype);
          var h = Object.getOwnPropertyDescriptor(e, f);
          if (void 0 !== h) {
            if ("value" in h) return h.value;
            var i = h.get;
            if (void 0 === i) return;
            return i.call(g);
          }
          var j = Object.getPrototypeOf(e);
          if (null === j) return;
          (a = j), (b = f), (c = g), (d = !0), (h = j = void 0);
        }
      },
      e = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            (d.enumerable = d.enumerable || !1),
              (d.configurable = !0),
              "value" in d && (d.writable = !0),
              Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, d) {
          return c && a(b.prototype, c), d && a(b, d), b;
        };
      })(),
      f = (function (a) {
        function b(a) {
          return {}.toString
            .call(a)
            .match(/\s([a-zA-Z]+)/)[1]
            .toLowerCase();
        }
        function c(a) {
          return (a[0] || a).nodeType;
        }
        function d() {
          return {
            bindType: h.end,
            delegateType: h.end,
            handle: function (b) {
              return a(b.target).is(this)
                ? b.handleObj.handler.apply(this, arguments)
                : void 0;
            },
          };
        }
        function e() {
          if (window.QUnit) return !1;
          var a = document.createElement("bootstrap");
          for (var b in j) if (void 0 !== a.style[b]) return { end: j[b] };
          return !1;
        }
        function f(b) {
          var c = this,
            d = !1;
          return (
            a(this).one(k.TRANSITION_END, function () {
              d = !0;
            }),
            setTimeout(function () {
              d || k.triggerTransitionEnd(c);
            }, b),
            this
          );
        }
        function g() {
          (h = e()),
            (a.fn.emulateTransitionEnd = f),
            k.supportsTransitionEnd() &&
              (a.event.special[k.TRANSITION_END] = d());
        }
        var h = !1,
          i = 1e6,
          j = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend",
          },
          k = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function (a) {
              do a += ~~(Math.random() * i);
              while (document.getElementById(a));
              return a;
            },
            getSelectorFromElement: function (a) {
              var b = a.getAttribute("data-target");
              return (
                b ||
                  ((b = a.getAttribute("href") || ""),
                  (b = /^#[a-z]/i.test(b) ? b : null)),
                b
              );
            },
            reflow: function (a) {
              new Function("bs", "return bs")(a.offsetHeight);
            },
            triggerTransitionEnd: function (b) {
              a(b).trigger(h.end);
            },
            supportsTransitionEnd: function () {
              return Boolean(h);
            },
            typeCheckConfig: function (a, d, e) {
              for (var f in e)
                if (e.hasOwnProperty(f)) {
                  var g = e[f],
                    h = d[f],
                    i = void 0;
                  if (
                    ((i = h && c(h) ? "element" : b(h)), !new RegExp(g).test(i))
                  )
                    throw new Error(
                      a.toUpperCase() +
                        ": " +
                        ('Option "' + f + '" provided type "' + i + '" ') +
                        ('but expected type "' + g + '".')
                    );
                }
            },
          };
        return g(), k;
      })(jQuery),
      g =
        ((function (a) {
          var b = "alert",
            d = "4.0.0-alpha.4",
            g = "bs.alert",
            h = "." + g,
            i = ".data-api",
            j = a.fn[b],
            k = 150,
            l = { DISMISS: '[data-dismiss="alert"]' },
            m = {
              CLOSE: "close" + h,
              CLOSED: "closed" + h,
              CLICK_DATA_API: "click" + h + i,
            },
            n = { ALERT: "alert", FADE: "fade", IN: "in" },
            o = (function () {
              function b(a) {
                c(this, b), (this._element = a);
              }
              return (
                e(
                  b,
                  [
                    {
                      key: "close",
                      value: function (a) {
                        a = a || this._element;
                        var b = this._getRootElement(a),
                          c = this._triggerCloseEvent(b);
                        c.isDefaultPrevented() || this._removeElement(b);
                      },
                    },
                    {
                      key: "dispose",
                      value: function () {
                        a.removeData(this._element, g), (this._element = null);
                      },
                    },
                    {
                      key: "_getRootElement",
                      value: function (b) {
                        var c = f.getSelectorFromElement(b),
                          d = !1;
                        return (
                          c && (d = a(c)[0]),
                          d || (d = a(b).closest("." + n.ALERT)[0]),
                          d
                        );
                      },
                    },
                    {
                      key: "_triggerCloseEvent",
                      value: function (b) {
                        var c = a.Event(m.CLOSE);
                        return a(b).trigger(c), c;
                      },
                    },
                    {
                      key: "_removeElement",
                      value: function (b) {
                        return (
                          a(b).removeClass(n.IN),
                          f.supportsTransitionEnd() && a(b).hasClass(n.FADE)
                            ? void a(b)
                                .one(
                                  f.TRANSITION_END,
                                  a.proxy(this._destroyElement, this, b)
                                )
                                .emulateTransitionEnd(k)
                            : void this._destroyElement(b)
                        );
                      },
                    },
                    {
                      key: "_destroyElement",
                      value: function (b) {
                        a(b).detach().trigger(m.CLOSED).remove();
                      },
                    },
                  ],
                  [
                    {
                      key: "_jQueryInterface",
                      value: function (c) {
                        return this.each(function () {
                          var d = a(this),
                            e = d.data(g);
                          e || ((e = new b(this)), d.data(g, e)),
                            "close" === c && e[c](this);
                        });
                      },
                    },
                    {
                      key: "_handleDismiss",
                      value: function (a) {
                        return function (b) {
                          b && b.preventDefault(), a.close(this);
                        };
                      },
                    },
                    {
                      key: "VERSION",
                      get: function () {
                        return d;
                      },
                    },
                  ]
                ),
                b
              );
            })();
          return (
            a(document).on(
              m.CLICK_DATA_API,
              l.DISMISS,
              o._handleDismiss(new o())
            ),
            (a.fn[b] = o._jQueryInterface),
            (a.fn[b].Constructor = o),
            (a.fn[b].noConflict = function () {
              return (a.fn[b] = j), o._jQueryInterface;
            }),
            o
          );
        })(jQuery),
        (function (a) {
          var b = "button",
            d = "4.0.0-alpha.4",
            f = "bs.button",
            g = "." + f,
            h = ".data-api",
            i = a.fn[b],
            j = { ACTIVE: "active", BUTTON: "btn", FOCUS: "focus" },
            k = {
              DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
              DATA_TOGGLE: '[data-toggle="buttons"]',
              INPUT: "input",
              ACTIVE: ".active",
              BUTTON: ".btn",
            },
            l = {
              CLICK_DATA_API: "click" + g + h,
              FOCUS_BLUR_DATA_API: "focus" + g + h + " " + ("blur" + g + h),
            },
            m = (function () {
              function b(a) {
                c(this, b), (this._element = a);
              }
              return (
                e(
                  b,
                  [
                    {
                      key: "toggle",
                      value: function () {
                        var b = !0,
                          c = a(this._element).closest(k.DATA_TOGGLE)[0];
                        if (c) {
                          var d = a(this._element).find(k.INPUT)[0];
                          if (d) {
                            if ("radio" === d.type)
                              if (
                                d.checked &&
                                a(this._element).hasClass(j.ACTIVE)
                              )
                                b = !1;
                              else {
                                var e = a(c).find(k.ACTIVE)[0];
                                e && a(e).removeClass(j.ACTIVE);
                              }
                            b &&
                              ((d.checked = !a(this._element).hasClass(
                                j.ACTIVE
                              )),
                              a(this._element).trigger("change")),
                              d.focus();
                          }
                        } else
                          this._element.setAttribute(
                            "aria-pressed",
                            !a(this._element).hasClass(j.ACTIVE)
                          );
                        b && a(this._element).toggleClass(j.ACTIVE);
                      },
                    },
                    {
                      key: "dispose",
                      value: function () {
                        a.removeData(this._element, f), (this._element = null);
                      },
                    },
                  ],
                  [
                    {
                      key: "_jQueryInterface",
                      value: function (c) {
                        return this.each(function () {
                          var d = a(this).data(f);
                          d || ((d = new b(this)), a(this).data(f, d)),
                            "toggle" === c && d[c]();
                        });
                      },
                    },
                    {
                      key: "VERSION",
                      get: function () {
                        return d;
                      },
                    },
                  ]
                ),
                b
              );
            })();
          return (
            a(document)
              .on(l.CLICK_DATA_API, k.DATA_TOGGLE_CARROT, function (b) {
                b.preventDefault();
                var c = b.target;
                a(c).hasClass(j.BUTTON) || (c = a(c).closest(k.BUTTON)),
                  m._jQueryInterface.call(a(c), "toggle");
              })
              .on(l.FOCUS_BLUR_DATA_API, k.DATA_TOGGLE_CARROT, function (b) {
                var c = a(b.target).closest(k.BUTTON)[0];
                a(c).toggleClass(j.FOCUS, /^focus(in)?$/.test(b.type));
              }),
            (a.fn[b] = m._jQueryInterface),
            (a.fn[b].Constructor = m),
            (a.fn[b].noConflict = function () {
              return (a.fn[b] = i), m._jQueryInterface;
            }),
            m
          );
        })(jQuery),
        (function (a) {
          var b = "carousel",
            d = "4.0.0-alpha.4",
            g = "bs.carousel",
            h = "." + g,
            i = ".data-api",
            j = a.fn[b],
            k = 600,
            l = 37,
            m = 39,
            n = {
              interval: 5e3,
              keyboard: !0,
              slide: !1,
              pause: "hover",
              wrap: !0,
            },
            o = {
              interval: "(number|boolean)",
              keyboard: "boolean",
              slide: "(boolean|string)",
              pause: "(string|boolean)",
              wrap: "boolean",
            },
            p = { NEXT: "next", PREVIOUS: "prev" },
            q = {
              SLIDE: "slide" + h,
              SLID: "slid" + h,
              KEYDOWN: "keydown" + h,
              MOUSEENTER: "mouseenter" + h,
              MOUSELEAVE: "mouseleave" + h,
              LOAD_DATA_API: "load" + h + i,
              CLICK_DATA_API: "click" + h + i,
            },
            r = {
              CAROUSEL: "carousel",
              ACTIVE: "active",
              SLIDE: "slide",
              RIGHT: "right",
              LEFT: "left",
              ITEM: "carousel-item",
            },
            s = {
              ACTIVE: ".active",
              ACTIVE_ITEM: ".active.carousel-item",
              ITEM: ".carousel-item",
              NEXT_PREV: ".next, .prev",
              INDICATORS: ".carousel-indicators",
              DATA_SLIDE: "[data-slide], [data-slide-to]",
              DATA_RIDE: '[data-ride="carousel"]',
            },
            t = (function () {
              function i(b, d) {
                c(this, i),
                  (this._items = null),
                  (this._interval = null),
                  (this._activeElement = null),
                  (this._isPaused = !1),
                  (this._isSliding = !1),
                  (this._config = this._getConfig(d)),
                  (this._element = a(b)[0]),
                  (this._indicatorsElement = a(this._element).find(
                    s.INDICATORS
                  )[0]),
                  this._addEventListeners();
              }
              return (
                e(
                  i,
                  [
                    {
                      key: "next",
                      value: function () {
                        this._isSliding || this._slide(p.NEXT);
                      },
                    },
                    {
                      key: "nextWhenVisible",
                      value: function () {
                        document.hidden || this.next();
                      },
                    },
                    {
                      key: "prev",
                      value: function () {
                        this._isSliding || this._slide(p.PREVIOUS);
                      },
                    },
                    {
                      key: "pause",
                      value: function (b) {
                        b || (this._isPaused = !0),
                          a(this._element).find(s.NEXT_PREV)[0] &&
                            f.supportsTransitionEnd() &&
                            (f.triggerTransitionEnd(this._element),
                            this.cycle(!0)),
                          clearInterval(this._interval),
                          (this._interval = null);
                      },
                    },
                    {
                      key: "cycle",
                      value: function (b) {
                        b || (this._isPaused = !1),
                          this._interval &&
                            (clearInterval(this._interval),
                            (this._interval = null)),
                          this._config.interval &&
                            !this._isPaused &&
                            (this._interval = setInterval(
                              a.proxy(
                                document.visibilityState
                                  ? this.nextWhenVisible
                                  : this.next,
                                this
                              ),
                              this._config.interval
                            ));
                      },
                    },
                    {
                      key: "to",
                      value: function (b) {
                        var c = this;
                        this._activeElement = a(this._element).find(
                          s.ACTIVE_ITEM
                        )[0];
                        var d = this._getItemIndex(this._activeElement);
                        if (!(b > this._items.length - 1 || 0 > b)) {
                          if (this._isSliding)
                            return void a(this._element).one(
                              q.SLID,
                              function () {
                                return c.to(b);
                              }
                            );
                          if (d === b) return this.pause(), void this.cycle();
                          var e = b > d ? p.NEXT : p.PREVIOUS;
                          this._slide(e, this._items[b]);
                        }
                      },
                    },
                    {
                      key: "dispose",
                      value: function () {
                        a(this._element).off(h),
                          a.removeData(this._element, g),
                          (this._items = null),
                          (this._config = null),
                          (this._element = null),
                          (this._interval = null),
                          (this._isPaused = null),
                          (this._isSliding = null),
                          (this._activeElement = null),
                          (this._indicatorsElement = null);
                      },
                    },
                    {
                      key: "_getConfig",
                      value: function (c) {
                        return (
                          (c = a.extend({}, n, c)),
                          f.typeCheckConfig(b, c, o),
                          c
                        );
                      },
                    },
                    {
                      key: "_addEventListeners",
                      value: function () {
                        this._config.keyboard &&
                          a(this._element).on(
                            q.KEYDOWN,
                            a.proxy(this._keydown, this)
                          ),
                          "hover" !== this._config.pause ||
                            "ontouchstart" in document.documentElement ||
                            a(this._element)
                              .on(q.MOUSEENTER, a.proxy(this.pause, this))
                              .on(q.MOUSELEAVE, a.proxy(this.cycle, this));
                      },
                    },
                    {
                      key: "_keydown",
                      value: function (a) {
                        if (
                          (a.preventDefault(),
                          !/input|textarea/i.test(a.target.tagName))
                        )
                          switch (a.which) {
                            case l:
                              this.prev();
                              break;
                            case m:
                              this.next();
                              break;
                            default:
                              return;
                          }
                      },
                    },
                    {
                      key: "_getItemIndex",
                      value: function (b) {
                        return (
                          (this._items = a.makeArray(
                            a(b).parent().find(s.ITEM)
                          )),
                          this._items.indexOf(b)
                        );
                      },
                    },
                    {
                      key: "_getItemByDirection",
                      value: function (a, b) {
                        var c = a === p.NEXT,
                          d = a === p.PREVIOUS,
                          e = this._getItemIndex(b),
                          f = this._items.length - 1,
                          g = (d && 0 === e) || (c && e === f);
                        if (g && !this._config.wrap) return b;
                        var h = a === p.PREVIOUS ? -1 : 1,
                          i = (e + h) % this._items.length;
                        return -1 === i
                          ? this._items[this._items.length - 1]
                          : this._items[i];
                      },
                    },
                    {
                      key: "_triggerSlideEvent",
                      value: function (b, c) {
                        var d = a.Event(q.SLIDE, {
                          relatedTarget: b,
                          direction: c,
                        });
                        return a(this._element).trigger(d), d;
                      },
                    },
                    {
                      key: "_setActiveIndicatorElement",
                      value: function (b) {
                        if (this._indicatorsElement) {
                          a(this._indicatorsElement)
                            .find(s.ACTIVE)
                            .removeClass(r.ACTIVE);
                          var c =
                            this._indicatorsElement.children[
                              this._getItemIndex(b)
                            ];
                          c && a(c).addClass(r.ACTIVE);
                        }
                      },
                    },
                    {
                      key: "_slide",
                      value: function (b, c) {
                        var d = this,
                          e = a(this._element).find(s.ACTIVE_ITEM)[0],
                          g = c || (e && this._getItemByDirection(b, e)),
                          h = Boolean(this._interval),
                          i = b === p.NEXT ? r.LEFT : r.RIGHT;
                        if (g && a(g).hasClass(r.ACTIVE))
                          return void (this._isSliding = !1);
                        var j = this._triggerSlideEvent(g, i);
                        if (!j.isDefaultPrevented() && e && g) {
                          (this._isSliding = !0),
                            h && this.pause(),
                            this._setActiveIndicatorElement(g);
                          var l = a.Event(q.SLID, {
                            relatedTarget: g,
                            direction: i,
                          });
                          f.supportsTransitionEnd() &&
                          a(this._element).hasClass(r.SLIDE)
                            ? (a(g).addClass(b),
                              f.reflow(g),
                              a(e).addClass(i),
                              a(g).addClass(i),
                              a(e)
                                .one(f.TRANSITION_END, function () {
                                  a(g).removeClass(i).removeClass(b),
                                    a(g).addClass(r.ACTIVE),
                                    a(e)
                                      .removeClass(r.ACTIVE)
                                      .removeClass(b)
                                      .removeClass(i),
                                    (d._isSliding = !1),
                                    setTimeout(function () {
                                      return a(d._element).trigger(l);
                                    }, 0);
                                })
                                .emulateTransitionEnd(k))
                            : (a(e).removeClass(r.ACTIVE),
                              a(g).addClass(r.ACTIVE),
                              (this._isSliding = !1),
                              a(this._element).trigger(l)),
                            h && this.cycle();
                        }
                      },
                    },
                  ],
                  [
                    {
                      key: "_jQueryInterface",
                      value: function (b) {
                        return this.each(function () {
                          var c = a(this).data(g),
                            d = a.extend({}, n, a(this).data());
                          "object" == typeof b && a.extend(d, b);
                          var e = "string" == typeof b ? b : d.slide;
                          if (
                            (c || ((c = new i(this, d)), a(this).data(g, c)),
                            "number" == typeof b)
                          )
                            c.to(b);
                          else if ("string" == typeof e) {
                            if (void 0 === c[e])
                              throw new Error('No method named "' + e + '"');
                            c[e]();
                          } else d.interval && (c.pause(), c.cycle());
                        });
                      },
                    },
                    {
                      key: "_dataApiClickHandler",
                      value: function (b) {
                        var c = f.getSelectorFromElement(this);
                        if (c) {
                          var d = a(c)[0];
                          if (d && a(d).hasClass(r.CAROUSEL)) {
                            var e = a.extend({}, a(d).data(), a(this).data()),
                              h = this.getAttribute("data-slide-to");
                            h && (e.interval = !1),
                              i._jQueryInterface.call(a(d), e),
                              h && a(d).data(g).to(h),
                              b.preventDefault();
                          }
                        }
                      },
                    },
                    {
                      key: "VERSION",
                      get: function () {
                        return d;
                      },
                    },
                    {
                      key: "Default",
                      get: function () {
                        return n;
                      },
                    },
                  ]
                ),
                i
              );
            })();
          return (
            a(document).on(
              q.CLICK_DATA_API,
              s.DATA_SLIDE,
              t._dataApiClickHandler
            ),
            a(window).on(q.LOAD_DATA_API, function () {
              a(s.DATA_RIDE).each(function () {
                var b = a(this);
                t._jQueryInterface.call(b, b.data());
              });
            }),
            (a.fn[b] = t._jQueryInterface),
            (a.fn[b].Constructor = t),
            (a.fn[b].noConflict = function () {
              return (a.fn[b] = j), t._jQueryInterface;
            }),
            t
          );
        })(jQuery),
        (function (a) {
          var b = "collapse",
            d = "4.0.0-alpha.4",
            g = "bs.collapse",
            h = "." + g,
            i = ".data-api",
            j = a.fn[b],
            k = 600,
            l = { toggle: !0, parent: "" },
            m = { toggle: "boolean", parent: "string" },
            n = {
              SHOW: "show" + h,
              SHOWN: "shown" + h,
              HIDE: "hide" + h,
              HIDDEN: "hidden" + h,
              CLICK_DATA_API: "click" + h + i,
            },
            o = {
              IN: "in",
              COLLAPSE: "collapse",
              COLLAPSING: "collapsing",
              COLLAPSED: "collapsed",
            },
            p = { WIDTH: "width", HEIGHT: "height" },
            q = {
              ACTIVES: ".panel > .in, .panel > .collapsing",
              DATA_TOGGLE: '[data-toggle="collapse"]',
            },
            r = (function () {
              function h(b, d) {
                c(this, h),
                  (this._isTransitioning = !1),
                  (this._element = b),
                  (this._config = this._getConfig(d)),
                  (this._triggerArray = a.makeArray(
                    a(
                      '[data-toggle="collapse"][href="#' +
                        b.id +
                        '"],' +
                        ('[data-toggle="collapse"][data-target="#' +
                          b.id +
                          '"]')
                    )
                  )),
                  (this._parent = this._config.parent
                    ? this._getParent()
                    : null),
                  this._config.parent ||
                    this._addAriaAndCollapsedClass(
                      this._element,
                      this._triggerArray
                    ),
                  this._config.toggle && this.toggle();
              }
              return (
                e(
                  h,
                  [
                    {
                      key: "toggle",
                      value: function () {
                        a(this._element).hasClass(o.IN)
                          ? this.hide()
                          : this.show();
                      },
                    },
                    {
                      key: "show",
                      value: function () {
                        var b = this;
                        if (
                          !this._isTransitioning &&
                          !a(this._element).hasClass(o.IN)
                        ) {
                          var c = void 0,
                            d = void 0;
                          if (
                            (this._parent &&
                              ((c = a.makeArray(a(q.ACTIVES))),
                              c.length || (c = null)),
                            !(
                              c && ((d = a(c).data(g)), d && d._isTransitioning)
                            ))
                          ) {
                            var e = a.Event(n.SHOW);
                            if (
                              (a(this._element).trigger(e),
                              !e.isDefaultPrevented())
                            ) {
                              c &&
                                (h._jQueryInterface.call(a(c), "hide"),
                                d || a(c).data(g, null));
                              var i = this._getDimension();
                              a(this._element)
                                .removeClass(o.COLLAPSE)
                                .addClass(o.COLLAPSING),
                                (this._element.style[i] = 0),
                                this._element.setAttribute("aria-expanded", !0),
                                this._triggerArray.length &&
                                  a(this._triggerArray)
                                    .removeClass(o.COLLAPSED)
                                    .attr("aria-expanded", !0),
                                this.setTransitioning(!0);
                              var j = function () {
                                a(b._element)
                                  .removeClass(o.COLLAPSING)
                                  .addClass(o.COLLAPSE)
                                  .addClass(o.IN),
                                  (b._element.style[i] = ""),
                                  b.setTransitioning(!1),
                                  a(b._element).trigger(n.SHOWN);
                              };
                              if (!f.supportsTransitionEnd()) return void j();
                              var l = i[0].toUpperCase() + i.slice(1),
                                m = "scroll" + l;
                              a(this._element)
                                .one(f.TRANSITION_END, j)
                                .emulateTransitionEnd(k),
                                (this._element.style[i] =
                                  this._element[m] + "px");
                            }
                          }
                        }
                      },
                    },
                    {
                      key: "hide",
                      value: function () {
                        var b = this;
                        if (
                          !this._isTransitioning &&
                          a(this._element).hasClass(o.IN)
                        ) {
                          var c = a.Event(n.HIDE);
                          if (
                            (a(this._element).trigger(c),
                            !c.isDefaultPrevented())
                          ) {
                            var d = this._getDimension(),
                              e =
                                d === p.WIDTH ? "offsetWidth" : "offsetHeight";
                            (this._element.style[d] = this._element[e] + "px"),
                              f.reflow(this._element),
                              a(this._element)
                                .addClass(o.COLLAPSING)
                                .removeClass(o.COLLAPSE)
                                .removeClass(o.IN),
                              this._element.setAttribute("aria-expanded", !1),
                              this._triggerArray.length &&
                                a(this._triggerArray)
                                  .addClass(o.COLLAPSED)
                                  .attr("aria-expanded", !1),
                              this.setTransitioning(!0);
                            var g = function () {
                              b.setTransitioning(!1),
                                a(b._element)
                                  .removeClass(o.COLLAPSING)
                                  .addClass(o.COLLAPSE)
                                  .trigger(n.HIDDEN);
                            };
                            return (
                              (this._element.style[d] = 0),
                              f.supportsTransitionEnd()
                                ? void a(this._element)
                                    .one(f.TRANSITION_END, g)
                                    .emulateTransitionEnd(k)
                                : void g()
                            );
                          }
                        }
                      },
                    },
                    {
                      key: "setTransitioning",
                      value: function (a) {
                        this._isTransitioning = a;
                      },
                    },
                    {
                      key: "dispose",
                      value: function () {
                        a.removeData(this._element, g),
                          (this._config = null),
                          (this._parent = null),
                          (this._element = null),
                          (this._triggerArray = null),
                          (this._isTransitioning = null);
                      },
                    },
                    {
                      key: "_getConfig",
                      value: function (c) {
                        return (
                          (c = a.extend({}, l, c)),
                          (c.toggle = Boolean(c.toggle)),
                          f.typeCheckConfig(b, c, m),
                          c
                        );
                      },
                    },
                    {
                      key: "_getDimension",
                      value: function () {
                        var b = a(this._element).hasClass(p.WIDTH);
                        return b ? p.WIDTH : p.HEIGHT;
                      },
                    },
                    {
                      key: "_getParent",
                      value: function () {
                        var b = this,
                          c = a(this._config.parent)[0],
                          d =
                            '[data-toggle="collapse"][data-parent="' +
                            this._config.parent +
                            '"]';
                        return (
                          a(c)
                            .find(d)
                            .each(function (a, c) {
                              b._addAriaAndCollapsedClass(
                                h._getTargetFromElement(c),
                                [c]
                              );
                            }),
                          c
                        );
                      },
                    },
                    {
                      key: "_addAriaAndCollapsedClass",
                      value: function (b, c) {
                        if (b) {
                          var d = a(b).hasClass(o.IN);
                          b.setAttribute("aria-expanded", d),
                            c.length &&
                              a(c)
                                .toggleClass(o.COLLAPSED, !d)
                                .attr("aria-expanded", d);
                        }
                      },
                    },
                  ],
                  [
                    {
                      key: "_getTargetFromElement",
                      value: function (b) {
                        var c = f.getSelectorFromElement(b);
                        return c ? a(c)[0] : null;
                      },
                    },
                    {
                      key: "_jQueryInterface",
                      value: function (b) {
                        return this.each(function () {
                          var c = a(this),
                            d = c.data(g),
                            e = a.extend(
                              {},
                              l,
                              c.data(),
                              "object" == typeof b && b
                            );
                          if (
                            (!d &&
                              e.toggle &&
                              /show|hide/.test(b) &&
                              (e.toggle = !1),
                            d || ((d = new h(this, e)), c.data(g, d)),
                            "string" == typeof b)
                          ) {
                            if (void 0 === d[b])
                              throw new Error('No method named "' + b + '"');
                            d[b]();
                          }
                        });
                      },
                    },
                    {
                      key: "VERSION",
                      get: function () {
                        return d;
                      },
                    },
                    {
                      key: "Default",
                      get: function () {
                        return l;
                      },
                    },
                  ]
                ),
                h
              );
            })();
          return (
            a(document).on(n.CLICK_DATA_API, q.DATA_TOGGLE, function (b) {
              b.preventDefault();
              var c = r._getTargetFromElement(this),
                d = a(c).data(g),
                e = d ? "toggle" : a(this).data();
              r._jQueryInterface.call(a(c), e);
            }),
            (a.fn[b] = r._jQueryInterface),
            (a.fn[b].Constructor = r),
            (a.fn[b].noConflict = function () {
              return (a.fn[b] = j), r._jQueryInterface;
            }),
            r
          );
        })(jQuery),
        (function (a) {
          var b = "dropdown",
            d = "4.0.0-alpha.4",
            g = "bs.dropdown",
            h = "." + g,
            i = ".data-api",
            j = a.fn[b],
            k = 27,
            l = 38,
            m = 40,
            n = 3,
            o = {
              HIDE: "hide" + h,
              HIDDEN: "hidden" + h,
              SHOW: "show" + h,
              SHOWN: "shown" + h,
              CLICK: "click" + h,
              CLICK_DATA_API: "click" + h + i,
              KEYDOWN_DATA_API: "keydown" + h + i,
            },
            p = {
              BACKDROP: "dropdown-backdrop",
              DISABLED: "disabled",
              OPEN: "open",
            },
            q = {
              BACKDROP: ".dropdown-backdrop",
              DATA_TOGGLE: '[data-toggle="dropdown"]',
              FORM_CHILD: ".dropdown form",
              ROLE_MENU: '[role="menu"]',
              ROLE_LISTBOX: '[role="listbox"]',
              NAVBAR_NAV: ".navbar-nav",
              VISIBLE_ITEMS:
                '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a',
            },
            r = (function () {
              function b(a) {
                c(this, b), (this._element = a), this._addEventListeners();
              }
              return (
                e(
                  b,
                  [
                    {
                      key: "toggle",
                      value: function () {
                        if (this.disabled || a(this).hasClass(p.DISABLED))
                          return !1;
                        var c = b._getParentFromElement(this),
                          d = a(c).hasClass(p.OPEN);
                        if ((b._clearMenus(), d)) return !1;
                        if (
                          "ontouchstart" in document.documentElement &&
                          !a(c).closest(q.NAVBAR_NAV).length
                        ) {
                          var e = document.createElement("div");
                          (e.className = p.BACKDROP),
                            a(e).insertBefore(this),
                            a(e).on("click", b._clearMenus);
                        }
                        var f = { relatedTarget: this },
                          g = a.Event(o.SHOW, f);
                        return (
                          a(c).trigger(g),
                          g.isDefaultPrevented()
                            ? !1
                            : (this.focus(),
                              this.setAttribute("aria-expanded", "true"),
                              a(c).toggleClass(p.OPEN),
                              a(c).trigger(a.Event(o.SHOWN, f)),
                              !1)
                        );
                      },
                    },
                    {
                      key: "dispose",
                      value: function () {
                        a.removeData(this._element, g),
                          a(this._element).off(h),
                          (this._element = null);
                      },
                    },
                    {
                      key: "_addEventListeners",
                      value: function () {
                        a(this._element).on(o.CLICK, this.toggle);
                      },
                    },
                  ],
                  [
                    {
                      key: "_jQueryInterface",
                      value: function (c) {
                        return this.each(function () {
                          var d = a(this).data(g);
                          if (
                            (d || a(this).data(g, (d = new b(this))),
                            "string" == typeof c)
                          ) {
                            if (void 0 === d[c])
                              throw new Error('No method named "' + c + '"');
                            d[c].call(this);
                          }
                        });
                      },
                    },
                    {
                      key: "_clearMenus",
                      value: function (c) {
                        if (!c || c.which !== n) {
                          var d = a(q.BACKDROP)[0];
                          d && d.parentNode.removeChild(d);
                          for (
                            var e = a.makeArray(a(q.DATA_TOGGLE)), f = 0;
                            f < e.length;
                            f++
                          ) {
                            var g = b._getParentFromElement(e[f]),
                              h = { relatedTarget: e[f] };
                            if (
                              a(g).hasClass(p.OPEN) &&
                              !(
                                c &&
                                "click" === c.type &&
                                /input|textarea/i.test(c.target.tagName) &&
                                a.contains(g, c.target)
                              )
                            ) {
                              var i = a.Event(o.HIDE, h);
                              a(g).trigger(i),
                                i.isDefaultPrevented() ||
                                  (e[f].setAttribute("aria-expanded", "false"),
                                  a(g)
                                    .removeClass(p.OPEN)
                                    .trigger(a.Event(o.HIDDEN, h)));
                            }
                          }
                        }
                      },
                    },
                    {
                      key: "_getParentFromElement",
                      value: function (b) {
                        var c = void 0,
                          d = f.getSelectorFromElement(b);
                        return d && (c = a(d)[0]), c || b.parentNode;
                      },
                    },
                    {
                      key: "_dataApiKeydownHandler",
                      value: function (c) {
                        if (
                          /(38|40|27|32)/.test(c.which) &&
                          !/input|textarea/i.test(c.target.tagName) &&
                          (c.preventDefault(),
                          c.stopPropagation(),
                          !this.disabled && !a(this).hasClass(p.DISABLED))
                        ) {
                          var d = b._getParentFromElement(this),
                            e = a(d).hasClass(p.OPEN);
                          if ((!e && c.which !== k) || (e && c.which === k)) {
                            if (c.which === k) {
                              var f = a(d).find(q.DATA_TOGGLE)[0];
                              a(f).trigger("focus");
                            }
                            return void a(this).trigger("click");
                          }
                          var g = a.makeArray(a(q.VISIBLE_ITEMS));
                          if (
                            ((g = g.filter(function (a) {
                              return a.offsetWidth || a.offsetHeight;
                            })),
                            g.length)
                          ) {
                            var h = g.indexOf(c.target);
                            c.which === l && h > 0 && h--,
                              c.which === m && h < g.length - 1 && h++,
                              0 > h && (h = 0),
                              g[h].focus();
                          }
                        }
                      },
                    },
                    {
                      key: "VERSION",
                      get: function () {
                        return d;
                      },
                    },
                  ]
                ),
                b
              );
            })();
          return (
            a(document)
              .on(o.KEYDOWN_DATA_API, q.DATA_TOGGLE, r._dataApiKeydownHandler)
              .on(o.KEYDOWN_DATA_API, q.ROLE_MENU, r._dataApiKeydownHandler)
              .on(o.KEYDOWN_DATA_API, q.ROLE_LISTBOX, r._dataApiKeydownHandler)
              .on(o.CLICK_DATA_API, r._clearMenus)
              .on(o.CLICK_DATA_API, q.DATA_TOGGLE, r.prototype.toggle)
              .on(o.CLICK_DATA_API, q.FORM_CHILD, function (a) {
                a.stopPropagation();
              }),
            (a.fn[b] = r._jQueryInterface),
            (a.fn[b].Constructor = r),
            (a.fn[b].noConflict = function () {
              return (a.fn[b] = j), r._jQueryInterface;
            }),
            r
          );
        })(jQuery),
        (function (a) {
          var b = "modal",
            d = "4.0.0-alpha.4",
            g = "bs.modal",
            h = "." + g,
            i = ".data-api",
            j = a.fn[b],
            k = 300,
            l = 150,
            m = 27,
            n = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
            o = {
              backdrop: "(boolean|string)",
              keyboard: "boolean",
              focus: "boolean",
              show: "boolean",
            },
            p = {
              HIDE: "hide" + h,
              HIDDEN: "hidden" + h,
              SHOW: "show" + h,
              SHOWN: "shown" + h,
              FOCUSIN: "focusin" + h,
              RESIZE: "resize" + h,
              CLICK_DISMISS: "click.dismiss" + h,
              KEYDOWN_DISMISS: "keydown.dismiss" + h,
              MOUSEUP_DISMISS: "mouseup.dismiss" + h,
              MOUSEDOWN_DISMISS: "mousedown.dismiss" + h,
              CLICK_DATA_API: "click" + h + i,
            },
            q = {
              SCROLLBAR_MEASURER: "modal-scrollbar-measure",
              BACKDROP: "modal-backdrop",
              OPEN: "modal-open",
              FADE: "fade",
              IN: "in",
            },
            r = {
              DIALOG: ".modal-dialog",
              DATA_TOGGLE: '[data-toggle="modal"]',
              DATA_DISMISS: '[data-dismiss="modal"]',
              FIXED_CONTENT:
                ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed",
            },
            s = (function () {
              function i(b, d) {
                c(this, i),
                  (this._config = this._getConfig(d)),
                  (this._element = b),
                  (this._dialog = a(b).find(r.DIALOG)[0]),
                  (this._backdrop = null),
                  (this._isShown = !1),
                  (this._isBodyOverflowing = !1),
                  (this._ignoreBackdropClick = !1),
                  (this._originalBodyPadding = 0),
                  (this._scrollbarWidth = 0);
              }
              return (
                e(
                  i,
                  [
                    {
                      key: "toggle",
                      value: function (a) {
                        return this._isShown ? this.hide() : this.show(a);
                      },
                    },
                    {
                      key: "show",
                      value: function (b) {
                        var c = this,
                          d = a.Event(p.SHOW, { relatedTarget: b });
                        a(this._element).trigger(d),
                          this._isShown ||
                            d.isDefaultPrevented() ||
                            ((this._isShown = !0),
                            this._checkScrollbar(),
                            this._setScrollbar(),
                            a(document.body).addClass(q.OPEN),
                            this._setEscapeEvent(),
                            this._setResizeEvent(),
                            a(this._element).on(
                              p.CLICK_DISMISS,
                              r.DATA_DISMISS,
                              a.proxy(this.hide, this)
                            ),
                            a(this._dialog).on(
                              p.MOUSEDOWN_DISMISS,
                              function () {
                                a(c._element).one(
                                  p.MOUSEUP_DISMISS,
                                  function (b) {
                                    a(b.target).is(c._element) &&
                                      (c._ignoreBackdropClick = !0);
                                  }
                                );
                              }
                            ),
                            this._showBackdrop(
                              a.proxy(this._showElement, this, b)
                            ));
                      },
                    },
                    {
                      key: "hide",
                      value: function (b) {
                        b && b.preventDefault();
                        var c = a.Event(p.HIDE);
                        a(this._element).trigger(c),
                          this._isShown &&
                            !c.isDefaultPrevented() &&
                            ((this._isShown = !1),
                            this._setEscapeEvent(),
                            this._setResizeEvent(),
                            a(document).off(p.FOCUSIN),
                            a(this._element).removeClass(q.IN),
                            a(this._element).off(p.CLICK_DISMISS),
                            a(this._dialog).off(p.MOUSEDOWN_DISMISS),
                            f.supportsTransitionEnd() &&
                            a(this._element).hasClass(q.FADE)
                              ? a(this._element)
                                  .one(
                                    f.TRANSITION_END,
                                    a.proxy(this._hideModal, this)
                                  )
                                  .emulateTransitionEnd(k)
                              : this._hideModal());
                      },
                    },
                    {
                      key: "dispose",
                      value: function () {
                        a.removeData(this._element, g),
                          a(window).off(h),
                          a(document).off(h),
                          a(this._element).off(h),
                          a(this._backdrop).off(h),
                          (this._config = null),
                          (this._element = null),
                          (this._dialog = null),
                          (this._backdrop = null),
                          (this._isShown = null),
                          (this._isBodyOverflowing = null),
                          (this._ignoreBackdropClick = null),
                          (this._originalBodyPadding = null),
                          (this._scrollbarWidth = null);
                      },
                    },
                    {
                      key: "_getConfig",
                      value: function (c) {
                        return (
                          (c = a.extend({}, n, c)),
                          f.typeCheckConfig(b, c, o),
                          c
                        );
                      },
                    },
                    {
                      key: "_showElement",
                      value: function (b) {
                        var c = this,
                          d =
                            f.supportsTransitionEnd() &&
                            a(this._element).hasClass(q.FADE);
                        (this._element.parentNode &&
                          this._element.parentNode.nodeType ===
                            Node.ELEMENT_NODE) ||
                          document.body.appendChild(this._element),
                          (this._element.style.display = "block"),
                          this._element.removeAttribute("aria-hidden"),
                          (this._element.scrollTop = 0),
                          d && f.reflow(this._element),
                          a(this._element).addClass(q.IN),
                          this._config.focus && this._enforceFocus();
                        var e = a.Event(p.SHOWN, { relatedTarget: b }),
                          g = function () {
                            c._config.focus && c._element.focus(),
                              a(c._element).trigger(e);
                          };
                        d
                          ? a(this._dialog)
                              .one(f.TRANSITION_END, g)
                              .emulateTransitionEnd(k)
                          : g();
                      },
                    },
                    {
                      key: "_enforceFocus",
                      value: function () {
                        var b = this;
                        a(document)
                          .off(p.FOCUSIN)
                          .on(p.FOCUSIN, function (c) {
                            document === c.target ||
                              b._element === c.target ||
                              a(b._element).has(c.target).length ||
                              b._element.focus();
                          });
                      },
                    },
                    {
                      key: "_setEscapeEvent",
                      value: function () {
                        var b = this;
                        this._isShown && this._config.keyboard
                          ? a(this._element).on(
                              p.KEYDOWN_DISMISS,
                              function (a) {
                                a.which === m && b.hide();
                              }
                            )
                          : this._isShown ||
                            a(this._element).off(p.KEYDOWN_DISMISS);
                      },
                    },
                    {
                      key: "_setResizeEvent",
                      value: function () {
                        this._isShown
                          ? a(window).on(
                              p.RESIZE,
                              a.proxy(this._handleUpdate, this)
                            )
                          : a(window).off(p.RESIZE);
                      },
                    },
                    {
                      key: "_hideModal",
                      value: function () {
                        var b = this;
                        (this._element.style.display = "none"),
                          this._element.setAttribute("aria-hidden", "true"),
                          this._showBackdrop(function () {
                            a(document.body).removeClass(q.OPEN),
                              b._resetAdjustments(),
                              b._resetScrollbar(),
                              a(b._element).trigger(p.HIDDEN);
                          });
                      },
                    },
                    {
                      key: "_removeBackdrop",
                      value: function () {
                        this._backdrop &&
                          (a(this._backdrop).remove(), (this._backdrop = null));
                      },
                    },
                    {
                      key: "_showBackdrop",
                      value: function (b) {
                        var c = this,
                          d = a(this._element).hasClass(q.FADE) ? q.FADE : "";
                        if (this._isShown && this._config.backdrop) {
                          var e = f.supportsTransitionEnd() && d;
                          if (
                            ((this._backdrop = document.createElement("div")),
                            (this._backdrop.className = q.BACKDROP),
                            d && a(this._backdrop).addClass(d),
                            a(this._backdrop).appendTo(document.body),
                            a(this._element).on(p.CLICK_DISMISS, function (a) {
                              return c._ignoreBackdropClick
                                ? void (c._ignoreBackdropClick = !1)
                                : void (
                                    a.target === a.currentTarget &&
                                    ("static" === c._config.backdrop
                                      ? c._element.focus()
                                      : c.hide())
                                  );
                            }),
                            e && f.reflow(this._backdrop),
                            a(this._backdrop).addClass(q.IN),
                            !b)
                          )
                            return;
                          if (!e) return void b();
                          a(this._backdrop)
                            .one(f.TRANSITION_END, b)
                            .emulateTransitionEnd(l);
                        } else if (!this._isShown && this._backdrop) {
                          a(this._backdrop).removeClass(q.IN);
                          var g = function () {
                            c._removeBackdrop(), b && b();
                          };
                          f.supportsTransitionEnd() &&
                          a(this._element).hasClass(q.FADE)
                            ? a(this._backdrop)
                                .one(f.TRANSITION_END, g)
                                .emulateTransitionEnd(l)
                            : g();
                        } else b && b();
                      },
                    },
                    {
                      key: "_handleUpdate",
                      value: function () {
                        this._adjustDialog();
                      },
                    },
                    {
                      key: "_adjustDialog",
                      value: function () {
                        var a =
                          this._element.scrollHeight >
                          document.documentElement.clientHeight;
                        !this._isBodyOverflowing &&
                          a &&
                          (this._element.style.paddingLeft =
                            this._scrollbarWidth + "px"),
                          this._isBodyOverflowing &&
                            !a &&
                            (this._element.style.paddingRight =
                              this._scrollbarWidth + "px");
                      },
                    },
                    {
                      key: "_resetAdjustments",
                      value: function () {
                        (this._element.style.paddingLeft = ""),
                          (this._element.style.paddingRight = "");
                      },
                    },
                    {
                      key: "_checkScrollbar",
                      value: function () {
                        (this._isBodyOverflowing =
                          document.body.clientWidth < window.innerWidth),
                          (this._scrollbarWidth = this._getScrollbarWidth());
                      },
                    },
                    {
                      key: "_setScrollbar",
                      value: function () {
                        var b = parseInt(
                          a(r.FIXED_CONTENT).css("padding-right") || 0,
                          10
                        );
                        (this._originalBodyPadding =
                          document.body.style.paddingRight || ""),
                          this._isBodyOverflowing &&
                            (document.body.style.paddingRight =
                              b + this._scrollbarWidth + "px");
                      },
                    },
                    {
                      key: "_resetScrollbar",
                      value: function () {
                        document.body.style.paddingRight =
                          this._originalBodyPadding;
                      },
                    },
                    {
                      key: "_getScrollbarWidth",
                      value: function () {
                        var a = document.createElement("div");
                        (a.className = q.SCROLLBAR_MEASURER),
                          document.body.appendChild(a);
                        var b = a.offsetWidth - a.clientWidth;
                        return document.body.removeChild(a), b;
                      },
                    },
                  ],
                  [
                    {
                      key: "_jQueryInterface",
                      value: function (b, c) {
                        return this.each(function () {
                          var d = a(this).data(g),
                            e = a.extend(
                              {},
                              i.Default,
                              a(this).data(),
                              "object" == typeof b && b
                            );
                          if (
                            (d || ((d = new i(this, e)), a(this).data(g, d)),
                            "string" == typeof b)
                          ) {
                            if (void 0 === d[b])
                              throw new Error('No method named "' + b + '"');
                            d[b](c);
                          } else e.show && d.show(c);
                        });
                      },
                    },
                    {
                      key: "VERSION",
                      get: function () {
                        return d;
                      },
                    },
                    {
                      key: "Default",
                      get: function () {
                        return n;
                      },
                    },
                  ]
                ),
                i
              );
            })();
          return (
            a(document).on(p.CLICK_DATA_API, r.DATA_TOGGLE, function (b) {
              var c = this,
                d = void 0,
                e = f.getSelectorFromElement(this);
              e && (d = a(e)[0]);
              var h = a(d).data(g)
                ? "toggle"
                : a.extend({}, a(d).data(), a(this).data());
              "A" === this.tagName && b.preventDefault();
              var i = a(d).one(p.SHOW, function (b) {
                b.isDefaultPrevented() ||
                  i.one(p.HIDDEN, function () {
                    a(c).is(":visible") && c.focus();
                  });
              });
              s._jQueryInterface.call(a(d), h, this);
            }),
            (a.fn[b] = s._jQueryInterface),
            (a.fn[b].Constructor = s),
            (a.fn[b].noConflict = function () {
              return (a.fn[b] = j), s._jQueryInterface;
            }),
            s
          );
        })(jQuery),
        (function (a) {
          var b = "scrollspy",
            d = "4.0.0-alpha.4",
            g = "bs.scrollspy",
            h = "." + g,
            i = ".data-api",
            j = a.fn[b],
            k = { offset: 10, method: "auto", target: "" },
            l = {
              offset: "number",
              method: "string",
              target: "(string|element)",
            },
            m = {
              ACTIVATE: "activate" + h,
              SCROLL: "scroll" + h,
              LOAD_DATA_API: "load" + h + i,
            },
            n = {
              DROPDOWN_ITEM: "dropdown-item",
              DROPDOWN_MENU: "dropdown-menu",
              NAV_LINK: "nav-link",
              NAV: "nav",
              ACTIVE: "active",
            },
            o = {
              DATA_SPY: '[data-spy="scroll"]',
              ACTIVE: ".active",
              LIST_ITEM: ".list-item",
              LI: "li",
              LI_DROPDOWN: "li.dropdown",
              NAV_LINKS: ".nav-link",
              DROPDOWN: ".dropdown",
              DROPDOWN_ITEMS: ".dropdown-item",
              DROPDOWN_TOGGLE: ".dropdown-toggle",
            },
            p = { OFFSET: "offset", POSITION: "position" },
            q = (function () {
              function i(b, d) {
                c(this, i),
                  (this._element = b),
                  (this._scrollElement = "BODY" === b.tagName ? window : b),
                  (this._config = this._getConfig(d)),
                  (this._selector =
                    this._config.target +
                    " " +
                    o.NAV_LINKS +
                    "," +
                    (this._config.target + " " + o.DROPDOWN_ITEMS)),
                  (this._offsets = []),
                  (this._targets = []),
                  (this._activeTarget = null),
                  (this._scrollHeight = 0),
                  a(this._scrollElement).on(
                    m.SCROLL,
                    a.proxy(this._process, this)
                  ),
                  this.refresh(),
                  this._process();
              }
              return (
                e(
                  i,
                  [
                    {
                      key: "refresh",
                      value: function () {
                        var b = this,
                          c =
                            this._scrollElement !== this._scrollElement.window
                              ? p.POSITION
                              : p.OFFSET,
                          d =
                            "auto" === this._config.method
                              ? c
                              : this._config.method,
                          e = d === p.POSITION ? this._getScrollTop() : 0;
                        (this._offsets = []),
                          (this._targets = []),
                          (this._scrollHeight = this._getScrollHeight());
                        var g = a.makeArray(a(this._selector));
                        g.map(function (b) {
                          var c = void 0,
                            g = f.getSelectorFromElement(b);
                          return (
                            g && (c = a(g)[0]),
                            c && (c.offsetWidth || c.offsetHeight)
                              ? [a(c)[d]().top + e, g]
                              : null
                          );
                        })
                          .filter(function (a) {
                            return a;
                          })
                          .sort(function (a, b) {
                            return a[0] - b[0];
                          })
                          .forEach(function (a) {
                            b._offsets.push(a[0]), b._targets.push(a[1]);
                          });
                      },
                    },
                    {
                      key: "dispose",
                      value: function () {
                        a.removeData(this._element, g),
                          a(this._scrollElement).off(h),
                          (this._element = null),
                          (this._scrollElement = null),
                          (this._config = null),
                          (this._selector = null),
                          (this._offsets = null),
                          (this._targets = null),
                          (this._activeTarget = null),
                          (this._scrollHeight = null);
                      },
                    },
                    {
                      key: "_getConfig",
                      value: function (c) {
                        if (
                          ((c = a.extend({}, k, c)),
                          "string" != typeof c.target)
                        ) {
                          var d = a(c.target).attr("id");
                          d || ((d = f.getUID(b)), a(c.target).attr("id", d)),
                            (c.target = "#" + d);
                        }
                        return f.typeCheckConfig(b, c, l), c;
                      },
                    },
                    {
                      key: "_getScrollTop",
                      value: function () {
                        return this._scrollElement === window
                          ? this._scrollElement.scrollY
                          : this._scrollElement.scrollTop;
                      },
                    },
                    {
                      key: "_getScrollHeight",
                      value: function () {
                        return (
                          this._scrollElement.scrollHeight ||
                          Math.max(
                            document.body.scrollHeight,
                            document.documentElement.scrollHeight
                          )
                        );
                      },
                    },
                    {
                      key: "_process",
                      value: function () {
                        var a = this._getScrollTop() + this._config.offset,
                          b = this._getScrollHeight(),
                          c =
                            this._config.offset +
                            b -
                            this._scrollElement.offsetHeight;
                        if (
                          (this._scrollHeight !== b && this.refresh(), a >= c)
                        ) {
                          var d = this._targets[this._targets.length - 1];
                          this._activeTarget !== d && this._activate(d);
                        }
                        if (this._activeTarget && a < this._offsets[0])
                          return (
                            (this._activeTarget = null), void this._clear()
                          );
                        for (var e = this._offsets.length; e--; ) {
                          var f =
                            this._activeTarget !== this._targets[e] &&
                            a >= this._offsets[e] &&
                            (void 0 === this._offsets[e + 1] ||
                              a < this._offsets[e + 1]);
                          f && this._activate(this._targets[e]);
                        }
                      },
                    },
                    {
                      key: "_activate",
                      value: function (b) {
                        (this._activeTarget = b), this._clear();
                        var c = this._selector.split(",");
                        c = c.map(function (a) {
                          return (
                            a +
                            '[data-target="' +
                            b +
                            '"],' +
                            (a + '[href="' + b + '"]')
                          );
                        });
                        var d = a(c.join(","));
                        d.hasClass(n.DROPDOWN_ITEM)
                          ? (d
                              .closest(o.DROPDOWN)
                              .find(o.DROPDOWN_TOGGLE)
                              .addClass(n.ACTIVE),
                            d.addClass(n.ACTIVE))
                          : d
                              .parents(o.LI)
                              .find(o.NAV_LINKS)
                              .addClass(n.ACTIVE),
                          a(this._scrollElement).trigger(m.ACTIVATE, {
                            relatedTarget: b,
                          });
                      },
                    },
                    {
                      key: "_clear",
                      value: function () {
                        a(this._selector)
                          .filter(o.ACTIVE)
                          .removeClass(n.ACTIVE);
                      },
                    },
                  ],
                  [
                    {
                      key: "_jQueryInterface",
                      value: function (b) {
                        return this.each(function () {
                          var c = a(this).data(g),
                            d = ("object" == typeof b && b) || null;
                          if (
                            (c || ((c = new i(this, d)), a(this).data(g, c)),
                            "string" == typeof b)
                          ) {
                            if (void 0 === c[b])
                              throw new Error('No method named "' + b + '"');
                            c[b]();
                          }
                        });
                      },
                    },
                    {
                      key: "VERSION",
                      get: function () {
                        return d;
                      },
                    },
                    {
                      key: "Default",
                      get: function () {
                        return k;
                      },
                    },
                  ]
                ),
                i
              );
            })();
          return (
            a(window).on(m.LOAD_DATA_API, function () {
              for (var b = a.makeArray(a(o.DATA_SPY)), c = b.length; c--; ) {
                var d = a(b[c]);
                q._jQueryInterface.call(d, d.data());
              }
            }),
            (a.fn[b] = q._jQueryInterface),
            (a.fn[b].Constructor = q),
            (a.fn[b].noConflict = function () {
              return (a.fn[b] = j), q._jQueryInterface;
            }),
            q
          );
        })(jQuery),
        (function (a) {
          var b = "tab",
            d = "4.0.0-alpha.4",
            g = "bs.tab",
            h = "." + g,
            i = ".data-api",
            j = a.fn[b],
            k = 150,
            l = {
              HIDE: "hide" + h,
              HIDDEN: "hidden" + h,
              SHOW: "show" + h,
              SHOWN: "shown" + h,
              CLICK_DATA_API: "click" + h + i,
            },
            m = {
              DROPDOWN_MENU: "dropdown-menu",
              ACTIVE: "active",
              FADE: "fade",
              IN: "in",
            },
            n = {
              A: "a",
              LI: "li",
              DROPDOWN: ".dropdown",
              UL: "ul:not(.dropdown-menu)",
              FADE_CHILD: "> .nav-item .fade, > .fade",
              ACTIVE: ".active",
              ACTIVE_CHILD: "> .nav-item > .active, > .active",
              DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
              DROPDOWN_TOGGLE: ".dropdown-toggle",
              DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active",
            },
            o = (function () {
              function b(a) {
                c(this, b), (this._element = a);
              }
              return (
                e(
                  b,
                  [
                    {
                      key: "show",
                      value: function () {
                        var b = this;
                        if (
                          !this._element.parentNode ||
                          this._element.parentNode.nodeType !==
                            Node.ELEMENT_NODE ||
                          !a(this._element).hasClass(m.ACTIVE)
                        ) {
                          var c = void 0,
                            d = void 0,
                            e = a(this._element).closest(n.UL)[0],
                            g = f.getSelectorFromElement(this._element);
                          e &&
                            ((d = a.makeArray(a(e).find(n.ACTIVE))),
                            (d = d[d.length - 1]));
                          var h = a.Event(l.HIDE, {
                              relatedTarget: this._element,
                            }),
                            i = a.Event(l.SHOW, { relatedTarget: d });
                          if (
                            (d && a(d).trigger(h),
                            a(this._element).trigger(i),
                            !i.isDefaultPrevented() && !h.isDefaultPrevented())
                          ) {
                            g && (c = a(g)[0]),
                              this._activate(this._element, e);
                            var j = function () {
                              var c = a.Event(l.HIDDEN, {
                                  relatedTarget: b._element,
                                }),
                                e = a.Event(l.SHOWN, { relatedTarget: d });
                              a(d).trigger(c), a(b._element).trigger(e);
                            };
                            c ? this._activate(c, c.parentNode, j) : j();
                          }
                        }
                      },
                    },
                    {
                      key: "dispose",
                      value: function () {
                        a.removeClass(this._element, g), (this._element = null);
                      },
                    },
                    {
                      key: "_activate",
                      value: function (b, c, d) {
                        var e = a(c).find(n.ACTIVE_CHILD)[0],
                          g =
                            d &&
                            f.supportsTransitionEnd() &&
                            ((e && a(e).hasClass(m.FADE)) ||
                              Boolean(a(c).find(n.FADE_CHILD)[0])),
                          h = a.proxy(
                            this._transitionComplete,
                            this,
                            b,
                            e,
                            g,
                            d
                          );
                        e && g
                          ? a(e)
                              .one(f.TRANSITION_END, h)
                              .emulateTransitionEnd(k)
                          : h(),
                          e && a(e).removeClass(m.IN);
                      },
                    },
                    {
                      key: "_transitionComplete",
                      value: function (b, c, d, e) {
                        if (c) {
                          a(c).removeClass(m.ACTIVE);
                          var g = a(c).find(n.DROPDOWN_ACTIVE_CHILD)[0];
                          g && a(g).removeClass(m.ACTIVE),
                            c.setAttribute("aria-expanded", !1);
                        }
                        if (
                          (a(b).addClass(m.ACTIVE),
                          b.setAttribute("aria-expanded", !0),
                          d
                            ? (f.reflow(b), a(b).addClass(m.IN))
                            : a(b).removeClass(m.FADE),
                          b.parentNode &&
                            a(b.parentNode).hasClass(m.DROPDOWN_MENU))
                        ) {
                          var h = a(b).closest(n.DROPDOWN)[0];
                          h && a(h).find(n.DROPDOWN_TOGGLE).addClass(m.ACTIVE),
                            b.setAttribute("aria-expanded", !0);
                        }
                        e && e();
                      },
                    },
                  ],
                  [
                    {
                      key: "_jQueryInterface",
                      value: function (c) {
                        return this.each(function () {
                          var d = a(this),
                            e = d.data(g);
                          if (
                            (e || ((e = e = new b(this)), d.data(g, e)),
                            "string" == typeof c)
                          ) {
                            if (void 0 === e[c])
                              throw new Error('No method named "' + c + '"');
                            e[c]();
                          }
                        });
                      },
                    },
                    {
                      key: "VERSION",
                      get: function () {
                        return d;
                      },
                    },
                  ]
                ),
                b
              );
            })();
          return (
            a(document).on(l.CLICK_DATA_API, n.DATA_TOGGLE, function (b) {
              b.preventDefault(), o._jQueryInterface.call(a(this), "show");
            }),
            (a.fn[b] = o._jQueryInterface),
            (a.fn[b].Constructor = o),
            (a.fn[b].noConflict = function () {
              return (a.fn[b] = j), o._jQueryInterface;
            }),
            o
          );
        })(jQuery),
        (function (a) {
          if (void 0 === window.Tether)
            throw new Error(
              "Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)"
            );
          var b = "tooltip",
            d = "4.0.0-alpha.4",
            g = "bs.tooltip",
            h = "." + g,
            i = a.fn[b],
            j = 150,
            k = "bs-tether",
            l = {
              animation: !0,
              template:
                '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
              trigger: "hover focus",
              title: "",
              delay: 0,
              html: !1,
              selector: !1,
              placement: "top",
              offset: "0 0",
              constraints: [],
            },
            m = {
              animation: "boolean",
              template: "string",
              title: "(string|element|function)",
              trigger: "string",
              delay: "(number|object)",
              html: "boolean",
              selector: "(string|boolean)",
              placement: "(string|function)",
              offset: "string",
              constraints: "array",
            },
            n = {
              TOP: "bottom center",
              RIGHT: "middle left",
              BOTTOM: "top center",
              LEFT: "middle right",
            },
            o = { IN: "in", OUT: "out" },
            p = {
              HIDE: "hide" + h,
              HIDDEN: "hidden" + h,
              SHOW: "show" + h,
              SHOWN: "shown" + h,
              INSERTED: "inserted" + h,
              CLICK: "click" + h,
              FOCUSIN: "focusin" + h,
              FOCUSOUT: "focusout" + h,
              MOUSEENTER: "mouseenter" + h,
              MOUSELEAVE: "mouseleave" + h,
            },
            q = { FADE: "fade", IN: "in" },
            r = { TOOLTIP: ".tooltip", TOOLTIP_INNER: ".tooltip-inner" },
            s = { element: !1, enabled: !1 },
            t = {
              HOVER: "hover",
              FOCUS: "focus",
              CLICK: "click",
              MANUAL: "manual",
            },
            u = (function () {
              function i(a, b) {
                c(this, i),
                  (this._isEnabled = !0),
                  (this._timeout = 0),
                  (this._hoverState = ""),
                  (this._activeTrigger = {}),
                  (this._tether = null),
                  (this.element = a),
                  (this.config = this._getConfig(b)),
                  (this.tip = null),
                  this._setListeners();
              }
              return (
                e(
                  i,
                  [
                    {
                      key: "enable",
                      value: function () {
                        this._isEnabled = !0;
                      },
                    },
                    {
                      key: "disable",
                      value: function () {
                        this._isEnabled = !1;
                      },
                    },
                    {
                      key: "toggleEnabled",
                      value: function () {
                        this._isEnabled = !this._isEnabled;
                      },
                    },
                    {
                      key: "toggle",
                      value: function (b) {
                        if (b) {
                          var c = this.constructor.DATA_KEY,
                            d = a(b.currentTarget).data(c);
                          d ||
                            ((d = new this.constructor(
                              b.currentTarget,
                              this._getDelegateConfig()
                            )),
                            a(b.currentTarget).data(c, d)),
                            (d._activeTrigger.click = !d._activeTrigger.click),
                            d._isWithActiveTrigger()
                              ? d._enter(null, d)
                              : d._leave(null, d);
                        } else {
                          if (a(this.getTipElement()).hasClass(q.IN))
                            return void this._leave(null, this);
                          this._enter(null, this);
                        }
                      },
                    },
                    {
                      key: "dispose",
                      value: function () {
                        clearTimeout(this._timeout),
                          this.cleanupTether(),
                          a.removeData(this.element, this.constructor.DATA_KEY),
                          a(this.element).off(this.constructor.EVENT_KEY),
                          this.tip && a(this.tip).remove(),
                          (this._isEnabled = null),
                          (this._timeout = null),
                          (this._hoverState = null),
                          (this._activeTrigger = null),
                          (this._tether = null),
                          (this.element = null),
                          (this.config = null),
                          (this.tip = null);
                      },
                    },
                    {
                      key: "show",
                      value: function () {
                        var b = this,
                          c = a.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                          a(this.element).trigger(c);
                          var d = a.contains(
                            this.element.ownerDocument.documentElement,
                            this.element
                          );
                          if (c.isDefaultPrevented() || !d) return;
                          var e = this.getTipElement(),
                            g = f.getUID(this.constructor.NAME);
                          e.setAttribute("id", g),
                            this.element.setAttribute("aria-describedby", g),
                            this.setContent(),
                            this.config.animation && a(e).addClass(q.FADE);
                          var h =
                              "function" == typeof this.config.placement
                                ? this.config.placement.call(
                                    this,
                                    e,
                                    this.element
                                  )
                                : this.config.placement,
                            j = this._getAttachment(h);
                          a(e)
                            .data(this.constructor.DATA_KEY, this)
                            .appendTo(document.body),
                            a(this.element).trigger(
                              this.constructor.Event.INSERTED
                            ),
                            (this._tether = new Tether({
                              attachment: j,
                              element: e,
                              target: this.element,
                              classes: s,
                              classPrefix: k,
                              offset: this.config.offset,
                              constraints: this.config.constraints,
                              addTargetClasses: !1,
                            })),
                            f.reflow(e),
                            this._tether.position(),
                            a(e).addClass(q.IN);
                          var l = function () {
                            var c = b._hoverState;
                            (b._hoverState = null),
                              a(b.element).trigger(b.constructor.Event.SHOWN),
                              c === o.OUT && b._leave(null, b);
                          };
                          if (
                            f.supportsTransitionEnd() &&
                            a(this.tip).hasClass(q.FADE)
                          )
                            return void a(this.tip)
                              .one(f.TRANSITION_END, l)
                              .emulateTransitionEnd(i._TRANSITION_DURATION);
                          l();
                        }
                      },
                    },
                    {
                      key: "hide",
                      value: function (b) {
                        var c = this,
                          d = this.getTipElement(),
                          e = a.Event(this.constructor.Event.HIDE),
                          g = function () {
                            c._hoverState !== o.IN &&
                              d.parentNode &&
                              d.parentNode.removeChild(d),
                              c.element.removeAttribute("aria-describedby"),
                              a(c.element).trigger(c.constructor.Event.HIDDEN),
                              c.cleanupTether(),
                              b && b();
                          };
                        a(this.element).trigger(e),
                          e.isDefaultPrevented() ||
                            (a(d).removeClass(q.IN),
                            f.supportsTransitionEnd() &&
                            a(this.tip).hasClass(q.FADE)
                              ? a(d)
                                  .one(f.TRANSITION_END, g)
                                  .emulateTransitionEnd(j)
                              : g(),
                            (this._hoverState = ""));
                      },
                    },
                    {
                      key: "isWithContent",
                      value: function () {
                        return Boolean(this.getTitle());
                      },
                    },
                    {
                      key: "getTipElement",
                      value: function () {
                        return (this.tip =
                          this.tip || a(this.config.template)[0]);
                      },
                    },
                    {
                      key: "setContent",
                      value: function () {
                        var b = a(this.getTipElement());
                        this.setElementContent(
                          b.find(r.TOOLTIP_INNER),
                          this.getTitle()
                        ),
                          b.removeClass(q.FADE).removeClass(q.IN),
                          this.cleanupTether();
                      },
                    },
                    {
                      key: "setElementContent",
                      value: function (b, c) {
                        var d = this.config.html;
                        "object" == typeof c && (c.nodeType || c.jquery)
                          ? d
                            ? a(c).parent().is(b) || b.empty().append(c)
                            : b.text(a(c).text())
                          : b[d ? "html" : "text"](c);
                      },
                    },
                    {
                      key: "getTitle",
                      value: function () {
                        var a = this.element.getAttribute(
                          "data-original-title"
                        );
                        return (
                          a ||
                            (a =
                              "function" == typeof this.config.title
                                ? this.config.title.call(this.element)
                                : this.config.title),
                          a
                        );
                      },
                    },
                    {
                      key: "cleanupTether",
                      value: function () {
                        this._tether && this._tether.destroy();
                      },
                    },
                    {
                      key: "_getAttachment",
                      value: function (a) {
                        return n[a.toUpperCase()];
                      },
                    },
                    {
                      key: "_setListeners",
                      value: function () {
                        var b = this,
                          c = this.config.trigger.split(" ");
                        c.forEach(function (c) {
                          if ("click" === c)
                            a(b.element).on(
                              b.constructor.Event.CLICK,
                              b.config.selector,
                              a.proxy(b.toggle, b)
                            );
                          else if (c !== t.MANUAL) {
                            var d =
                                c === t.HOVER
                                  ? b.constructor.Event.MOUSEENTER
                                  : b.constructor.Event.FOCUSIN,
                              e =
                                c === t.HOVER
                                  ? b.constructor.Event.MOUSELEAVE
                                  : b.constructor.Event.FOCUSOUT;
                            a(b.element)
                              .on(d, b.config.selector, a.proxy(b._enter, b))
                              .on(e, b.config.selector, a.proxy(b._leave, b));
                          }
                        }),
                          this.config.selector
                            ? (this.config = a.extend({}, this.config, {
                                trigger: "manual",
                                selector: "",
                              }))
                            : this._fixTitle();
                      },
                    },
                    {
                      key: "_fixTitle",
                      value: function () {
                        var a = typeof this.element.getAttribute(
                          "data-original-title"
                        );
                        (this.element.getAttribute("title") ||
                          "string" !== a) &&
                          (this.element.setAttribute(
                            "data-original-title",
                            this.element.getAttribute("title") || ""
                          ),
                          this.element.setAttribute("title", ""));
                      },
                    },
                    {
                      key: "_enter",
                      value: function (b, c) {
                        var d = this.constructor.DATA_KEY;
                        return (
                          (c = c || a(b.currentTarget).data(d)),
                          c ||
                            ((c = new this.constructor(
                              b.currentTarget,
                              this._getDelegateConfig()
                            )),
                            a(b.currentTarget).data(d, c)),
                          b &&
                            (c._activeTrigger[
                              "focusin" === b.type ? t.FOCUS : t.HOVER
                            ] = !0),
                          a(c.getTipElement()).hasClass(q.IN) ||
                          c._hoverState === o.IN
                            ? void (c._hoverState = o.IN)
                            : (clearTimeout(c._timeout),
                              (c._hoverState = o.IN),
                              c.config.delay && c.config.delay.show
                                ? void (c._timeout = setTimeout(function () {
                                    c._hoverState === o.IN && c.show();
                                  }, c.config.delay.show))
                                : void c.show())
                        );
                      },
                    },
                    {
                      key: "_leave",
                      value: function (b, c) {
                        var d = this.constructor.DATA_KEY;
                        return (
                          (c = c || a(b.currentTarget).data(d)),
                          c ||
                            ((c = new this.constructor(
                              b.currentTarget,
                              this._getDelegateConfig()
                            )),
                            a(b.currentTarget).data(d, c)),
                          b &&
                            (c._activeTrigger[
                              "focusout" === b.type ? t.FOCUS : t.HOVER
                            ] = !1),
                          c._isWithActiveTrigger()
                            ? void 0
                            : (clearTimeout(c._timeout),
                              (c._hoverState = o.OUT),
                              c.config.delay && c.config.delay.hide
                                ? void (c._timeout = setTimeout(function () {
                                    c._hoverState === o.OUT && c.hide();
                                  }, c.config.delay.hide))
                                : void c.hide())
                        );
                      },
                    },
                    {
                      key: "_isWithActiveTrigger",
                      value: function () {
                        for (var a in this._activeTrigger)
                          if (this._activeTrigger[a]) return !0;
                        return !1;
                      },
                    },
                    {
                      key: "_getConfig",
                      value: function (c) {
                        return (
                          (c = a.extend(
                            {},
                            this.constructor.Default,
                            a(this.element).data(),
                            c
                          )),
                          c.delay &&
                            "number" == typeof c.delay &&
                            (c.delay = { show: c.delay, hide: c.delay }),
                          f.typeCheckConfig(b, c, this.constructor.DefaultType),
                          c
                        );
                      },
                    },
                    {
                      key: "_getDelegateConfig",
                      value: function () {
                        var a = {};
                        if (this.config)
                          for (var b in this.config)
                            this.constructor.Default[b] !== this.config[b] &&
                              (a[b] = this.config[b]);
                        return a;
                      },
                    },
                  ],
                  [
                    {
                      key: "_jQueryInterface",
                      value: function (b) {
                        return this.each(function () {
                          var c = a(this).data(g),
                            d = "object" == typeof b ? b : null;
                          if (
                            (c || !/destroy|hide/.test(b)) &&
                            (c || ((c = new i(this, d)), a(this).data(g, c)),
                            "string" == typeof b)
                          ) {
                            if (void 0 === c[b])
                              throw new Error('No method named "' + b + '"');
                            c[b]();
                          }
                        });
                      },
                    },
                    {
                      key: "VERSION",
                      get: function () {
                        return d;
                      },
                    },
                    {
                      key: "Default",
                      get: function () {
                        return l;
                      },
                    },
                    {
                      key: "NAME",
                      get: function () {
                        return b;
                      },
                    },
                    {
                      key: "DATA_KEY",
                      get: function () {
                        return g;
                      },
                    },
                    {
                      key: "Event",
                      get: function () {
                        return p;
                      },
                    },
                    {
                      key: "EVENT_KEY",
                      get: function () {
                        return h;
                      },
                    },
                    {
                      key: "DefaultType",
                      get: function () {
                        return m;
                      },
                    },
                  ]
                ),
                i
              );
            })();
          return (
            (a.fn[b] = u._jQueryInterface),
            (a.fn[b].Constructor = u),
            (a.fn[b].noConflict = function () {
              return (a.fn[b] = i), u._jQueryInterface;
            }),
            u
          );
        })(jQuery));
    (function (a) {
      var f = "popover",
        h = "4.0.0-alpha.4",
        i = "bs.popover",
        j = "." + i,
        k = a.fn[f],
        l = a.extend({}, g.Default, {
          placement: "right",
          trigger: "click",
          content: "",
          template:
            '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
        }),
        m = a.extend({}, g.DefaultType, {
          content: "(string|element|function)",
        }),
        n = { FADE: "fade", IN: "in" },
        o = {
          TITLE: ".popover-title",
          CONTENT: ".popover-content",
          ARROW: ".popover-arrow",
        },
        p = {
          HIDE: "hide" + j,
          HIDDEN: "hidden" + j,
          SHOW: "show" + j,
          SHOWN: "shown" + j,
          INSERTED: "inserted" + j,
          CLICK: "click" + j,
          FOCUSIN: "focusin" + j,
          FOCUSOUT: "focusout" + j,
          MOUSEENTER: "mouseenter" + j,
          MOUSELEAVE: "mouseleave" + j,
        },
        q = (function (g) {
          function k() {
            c(this, k),
              d(Object.getPrototypeOf(k.prototype), "constructor", this).apply(
                this,
                arguments
              );
          }
          return (
            b(k, g),
            e(
              k,
              [
                {
                  key: "isWithContent",
                  value: function () {
                    return this.getTitle() || this._getContent();
                  },
                },
                {
                  key: "getTipElement",
                  value: function () {
                    return (this.tip = this.tip || a(this.config.template)[0]);
                  },
                },
                {
                  key: "setContent",
                  value: function () {
                    var b = a(this.getTipElement());
                    this.setElementContent(b.find(o.TITLE), this.getTitle()),
                      this.setElementContent(
                        b.find(o.CONTENT),
                        this._getContent()
                      ),
                      b.removeClass(n.FADE).removeClass(n.IN),
                      this.cleanupTether();
                  },
                },
                {
                  key: "_getContent",
                  value: function () {
                    return (
                      this.element.getAttribute("data-content") ||
                      ("function" == typeof this.config.content
                        ? this.config.content.call(this.element)
                        : this.config.content)
                    );
                  },
                },
              ],
              [
                {
                  key: "_jQueryInterface",
                  value: function (b) {
                    return this.each(function () {
                      var c = a(this).data(i),
                        d = "object" == typeof b ? b : null;
                      if (
                        (c || !/destroy|hide/.test(b)) &&
                        (c || ((c = new k(this, d)), a(this).data(i, c)),
                        "string" == typeof b)
                      ) {
                        if (void 0 === c[b])
                          throw new Error('No method named "' + b + '"');
                        c[b]();
                      }
                    });
                  },
                },
                {
                  key: "VERSION",
                  get: function () {
                    return h;
                  },
                },
                {
                  key: "Default",
                  get: function () {
                    return l;
                  },
                },
                {
                  key: "NAME",
                  get: function () {
                    return f;
                  },
                },
                {
                  key: "DATA_KEY",
                  get: function () {
                    return i;
                  },
                },
                {
                  key: "Event",
                  get: function () {
                    return p;
                  },
                },
                {
                  key: "EVENT_KEY",
                  get: function () {
                    return j;
                  },
                },
                {
                  key: "DefaultType",
                  get: function () {
                    return m;
                  },
                },
              ]
            ),
            k
          );
        })(g);
      return (
        (a.fn[f] = q._jQueryInterface),
        (a.fn[f].Constructor = q),
        (a.fn[f].noConflict = function () {
          return (a.fn[f] = k), q._jQueryInterface;
        }),
        q
      );
    })(jQuery);
  })(jQuery),
  !(function (a) {
    "function" == typeof define && define.amd
      ? define(["jquery"], a)
      : a("object" == typeof exports ? require("jquery") : jQuery);
  })(function (a) {
    function b(b) {
      var c,
        d,
        e,
        f = arguments.length,
        g = window[b],
        h = arguments,
        i = h[1];
      if (2 > f) throw Error("Minimum 2 arguments must be given");
      if (a.isArray(i)) {
        d = {};
        for (var j in i) {
          c = i[j];
          try {
            d[c] = JSON.parse(g.getItem(c));
          } catch (k) {
            d[c] = g.getItem(c);
          }
        }
        return d;
      }
      if (2 != f) {
        try {
          d = JSON.parse(g.getItem(i));
        } catch (k) {
          throw new ReferenceError(i + " is not defined in this storage");
        }
        for (var j = 2; f - 1 > j; j++)
          if (((d = d[h[j]]), void 0 === d))
            throw new ReferenceError(
              [].slice.call(h, 1, j + 1).join(".") +
                " is not defined in this storage"
            );
        if (a.isArray(h[j])) {
          (e = d), (d = {});
          for (var l in h[j]) d[h[j][l]] = e[h[j][l]];
          return d;
        }
        return d[h[j]];
      }
      try {
        return JSON.parse(g.getItem(i));
      } catch (k) {
        return g.getItem(i);
      }
    }
    function c(b) {
      var c,
        d,
        e = arguments.length,
        f = window[b],
        g = arguments,
        h = g[1],
        i = g[2],
        j = {};
      if (2 > e || (!a.isPlainObject(h) && 3 > e))
        throw Error(
          "Minimum 3 arguments must be given or second parameter must be an object"
        );
      if (a.isPlainObject(h)) {
        for (var k in h)
          (c = h[k]),
            a.isPlainObject(c)
              ? f.setItem(k, JSON.stringify(c))
              : f.setItem(k, c);
        return h;
      }
      if (3 == e)
        return (
          "object" == typeof i
            ? f.setItem(h, JSON.stringify(i))
            : f.setItem(h, i),
          i
        );
      try {
        (d = f.getItem(h)), null != d && (j = JSON.parse(d));
      } catch (l) {}
      d = j;
      for (var k = 2; e - 2 > k; k++)
        (c = g[k]), (d[c] && a.isPlainObject(d[c])) || (d[c] = {}), (d = d[c]);
      return (d[g[k]] = g[k + 1]), f.setItem(h, JSON.stringify(j)), j;
    }
    function d(b) {
      var c,
        d,
        e = arguments.length,
        f = window[b],
        g = arguments,
        h = g[1];
      if (2 > e) throw Error("Minimum 2 arguments must be given");
      if (a.isArray(h)) {
        for (var i in h) f.removeItem(h[i]);
        return !0;
      }
      if (2 == e) return f.removeItem(h), !0;
      try {
        c = d = JSON.parse(f.getItem(h));
      } catch (j) {
        throw new ReferenceError(h + " is not defined in this storage");
      }
      for (var i = 2; e - 1 > i; i++)
        if (((d = d[g[i]]), void 0 === d))
          throw new ReferenceError(
            [].slice.call(g, 1, i).join(".") + " is not defined in this storage"
          );
      if (a.isArray(g[i])) for (var k in g[i]) delete d[g[i][k]];
      else delete d[g[i]];
      return f.setItem(h, JSON.stringify(c)), !0;
    }
    function e(b, c) {
      var e = h(b);
      for (var f in e) d(b, e[f]);
      if (c) for (var f in a.namespaceStorages) i(f);
    }
    function f(c) {
      var d = arguments.length,
        e = arguments,
        g = (window[c], e[1]);
      if (1 == d) return 0 == h(c).length;
      if (a.isArray(g)) {
        for (var i = 0; i < g.length; i++) if (!f(c, g[i])) return !1;
        return !0;
      }
      try {
        var j = b.apply(this, arguments);
        a.isArray(e[d - 1]) || (j = { totest: j });
        for (var i in j)
          if (
            !(
              (a.isPlainObject(j[i]) && a.isEmptyObject(j[i])) ||
              (a.isArray(j[i]) && !j[i].length)
            ) &&
            j[i]
          )
            return !1;
        return !0;
      } catch (k) {
        return !0;
      }
    }
    function g(c) {
      var d = arguments.length,
        e = arguments,
        f = (window[c], e[1]);
      if (2 > d) throw Error("Minimum 2 arguments must be given");
      if (a.isArray(f)) {
        for (var h = 0; h < f.length; h++) if (!g(c, f[h])) return !1;
        return !0;
      }
      try {
        var i = b.apply(this, arguments);
        a.isArray(e[d - 1]) || (i = { totest: i });
        for (var h in i) if (void 0 === i[h] || null === i[h]) return !1;
        return !0;
      } catch (j) {
        return !1;
      }
    }
    function h(c) {
      var d = arguments.length,
        e = window[c],
        f = arguments,
        g = (f[1], []),
        h = {};
      if (((h = d > 1 ? b.apply(this, f) : e), h._cookie))
        for (var i in a.cookie()) "" != i && g.push(i.replace(h._prefix, ""));
      else for (var j in h) g.push(j);
      return g;
    }
    function i(b) {
      if (!b || "string" != typeof b)
        throw Error("First parameter must be a string");
      m
        ? (window.localStorage.getItem(b) ||
            window.localStorage.setItem(b, "{}"),
          window.sessionStorage.getItem(b) ||
            window.sessionStorage.setItem(b, "{}"))
        : (window.localCookieStorage.getItem(b) ||
            window.localCookieStorage.setItem(b, "{}"),
          window.sessionCookieStorage.getItem(b) ||
            window.sessionCookieStorage.setItem(b, "{}"));
      var c = {
        localStorage: a.extend({}, a.localStorage, { _ns: b }),
        sessionStorage: a.extend({}, a.sessionStorage, { _ns: b }),
      };
      return (
        a.cookie &&
          (window.cookieStorage.getItem(b) ||
            window.cookieStorage.setItem(b, "{}"),
          (c.cookieStorage = a.extend({}, a.cookieStorage, { _ns: b }))),
        (a.namespaceStorages[b] = c),
        c
      );
    }
    function j(a) {
      var b = "jsapi";
      try {
        return window[a]
          ? (window[a].setItem(b, b), window[a].removeItem(b), !0)
          : !1;
      } catch (c) {
        return !1;
      }
    }
    var k = "ls_",
      l = "ss_",
      m = j("localStorage"),
      n = {
        _type: "",
        _ns: "",
        _callMethod: function (a, b) {
          var c = [this._type],
            b = Array.prototype.slice.call(b),
            d = b[0];
          return (
            this._ns && c.push(this._ns),
            "string" == typeof d &&
              -1 !== d.indexOf(".") &&
              (b.shift(), [].unshift.apply(b, d.split("."))),
            [].push.apply(c, b),
            a.apply(this, c)
          );
        },
        get: function () {
          return this._callMethod(b, arguments);
        },
        set: function () {
          var b = arguments.length,
            d = arguments,
            e = d[0];
          if (1 > b || (!a.isPlainObject(e) && 2 > b))
            throw Error(
              "Minimum 2 arguments must be given or first parameter must be an object"
            );
          if (a.isPlainObject(e) && this._ns) {
            for (var f in e) c(this._type, this._ns, f, e[f]);
            return e;
          }
          var g = this._callMethod(c, d);
          return this._ns ? g[e.split(".")[0]] : g;
        },
        remove: function () {
          if (arguments.length < 1)
            throw Error("Minimum 1 argument must be given");
          return this._callMethod(d, arguments);
        },
        removeAll: function (a) {
          return this._ns
            ? (c(this._type, this._ns, {}), !0)
            : e(this._type, a);
        },
        isEmpty: function () {
          return this._callMethod(f, arguments);
        },
        isSet: function () {
          if (arguments.length < 1)
            throw Error("Minimum 1 argument must be given");
          return this._callMethod(g, arguments);
        },
        keys: function () {
          return this._callMethod(h, arguments);
        },
      };
    if (a.cookie) {
      window.name || (window.name = Math.floor(1e8 * Math.random()));
      var o = {
        _cookie: !0,
        _prefix: "",
        _expires: null,
        _path: null,
        _domain: null,
        setItem: function (b, c) {
          a.cookie(this._prefix + b, c, {
            expires: this._expires,
            path: this._path,
            domain: this._domain,
          });
        },
        getItem: function (b) {
          return a.cookie(this._prefix + b);
        },
        removeItem: function (b) {
          return a.removeCookie(this._prefix + b);
        },
        clear: function () {
          for (var b in a.cookie())
            "" != b &&
              ((!this._prefix && -1 === b.indexOf(k) && -1 === b.indexOf(l)) ||
                (this._prefix && 0 === b.indexOf(this._prefix))) &&
              a.removeCookie(b);
        },
        setExpires: function (a) {
          return (this._expires = a), this;
        },
        setPath: function (a) {
          return (this._path = a), this;
        },
        setDomain: function (a) {
          return (this._domain = a), this;
        },
        setConf: function (a) {
          return (
            a.path && (this._path = a.path),
            a.domain && (this._domain = a.domain),
            a.expires && (this._expires = a.expires),
            this
          );
        },
        setDefaultConf: function () {
          this._path = this._domain = this._expires = null;
        },
      };
      m ||
        ((window.localCookieStorage = a.extend({}, o, {
          _prefix: k,
          _expires: 3650,
        })),
        (window.sessionCookieStorage = a.extend({}, o, {
          _prefix: l + window.name + "_",
        }))),
        (window.cookieStorage = a.extend({}, o)),
        (a.cookieStorage = a.extend({}, n, {
          _type: "cookieStorage",
          setExpires: function (a) {
            return window.cookieStorage.setExpires(a), this;
          },
          setPath: function (a) {
            return window.cookieStorage.setPath(a), this;
          },
          setDomain: function (a) {
            return window.cookieStorage.setDomain(a), this;
          },
          setConf: function (a) {
            return window.cookieStorage.setConf(a), this;
          },
          setDefaultConf: function () {
            return window.cookieStorage.setDefaultConf(), this;
          },
        }));
    }
    (a.initNamespaceStorage = function (a) {
      return i(a);
    }),
      m
        ? ((a.localStorage = a.extend({}, n, { _type: "localStorage" })),
          (a.sessionStorage = a.extend({}, n, { _type: "sessionStorage" })))
        : ((a.localStorage = a.extend({}, n, { _type: "localCookieStorage" })),
          (a.sessionStorage = a.extend({}, n, {
            _type: "sessionCookieStorage",
          }))),
      (a.namespaceStorages = {}),
      (a.removeAllStorages = function (b) {
        a.localStorage.removeAll(b),
          a.sessionStorage.removeAll(b),
          a.cookieStorage && a.cookieStorage.removeAll(b),
          b || (a.namespaceStorages = {});
      });
  }),
  (function (a, b, c, d) {
    function e(b, c) {
      (this.element = b),
        (this.options = a.extend({}, g, c)),
        (this._defaults = g),
        (this._name = f),
        this.init();
    }
    var f = "stellar",
      g = {
        scrollProperty: "scroll",
        positionProperty: "position",
        horizontalScrolling: !0,
        verticalScrolling: !0,
        horizontalOffset: 0,
        verticalOffset: 0,
        responsive: !1,
        parallaxBackgrounds: !0,
        parallaxElements: !0,
        hideDistantElements: !0,
        hideElement: function (a) {
          a.hide();
        },
        showElement: function (a) {
          a.show();
        },
      },
      h = {
        scroll: {
          getLeft: function (a) {
            return a.scrollLeft();
          },
          setLeft: function (a, b) {
            a.scrollLeft(b);
          },
          getTop: function (a) {
            return a.scrollTop();
          },
          setTop: function (a, b) {
            a.scrollTop(b);
          },
        },
        position: {
          getLeft: function (a) {
            return -1 * parseInt(a.css("left"), 10);
          },
          getTop: function (a) {
            return -1 * parseInt(a.css("top"), 10);
          },
        },
        margin: {
          getLeft: function (a) {
            return -1 * parseInt(a.css("margin-left"), 10);
          },
          getTop: function (a) {
            return -1 * parseInt(a.css("margin-top"), 10);
          },
        },
        transform: {
          getLeft: function (a) {
            var b = getComputedStyle(a[0])[k];
            return "none" !== b
              ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[4], 10)
              : 0;
          },
          getTop: function (a) {
            var b = getComputedStyle(a[0])[k];
            return "none" !== b
              ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[5], 10)
              : 0;
          },
        },
      },
      i = {
        position: {
          setLeft: function (a, b) {
            a.css("left", b);
          },
          setTop: function (a, b) {
            a.css("top", b);
          },
        },
        transform: {
          setPosition: function (a, b, c, d, e) {
            a[0].style[k] =
              "translate3d(" + (b - c) + "px, " + (d - e) + "px, 0)";
          },
        },
      },
      j = (function () {
        var b,
          c = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
          d = a("script")[0].style,
          e = "";
        for (b in d)
          if (c.test(b)) {
            e = b.match(c)[0];
            break;
          }
        return (
          "WebkitOpacity" in d && (e = "Webkit"),
          "KhtmlOpacity" in d && (e = "Khtml"),
          function (a) {
            return (
              e + (e.length > 0 ? a.charAt(0).toUpperCase() + a.slice(1) : a)
            );
          }
        );
      })(),
      k = j("transform"),
      l =
        a("<div />", { style: "background:#fff" }).css(
          "background-position-x"
        ) !== d,
      m = l
        ? function (a, b, c) {
            a.css({ "background-position-x": b, "background-position-y": c });
          }
        : function (a, b, c) {
            a.css("background-position", b + " " + c);
          },
      n = l
        ? function (a) {
            return [
              a.css("background-position-x"),
              a.css("background-position-y"),
            ];
          }
        : function (a) {
            return a.css("background-position").split(" ");
          },
      o =
        b.requestAnimationFrame ||
        b.webkitRequestAnimationFrame ||
        b.mozRequestAnimationFrame ||
        b.oRequestAnimationFrame ||
        b.msRequestAnimationFrame ||
        function (a) {
          setTimeout(a, 1e3 / 60);
        };
    (e.prototype = {
      init: function () {
        (this.options.name = f + "_" + Math.floor(1e9 * Math.random())),
          this._defineElements(),
          this._defineGetters(),
          this._defineSetters(),
          this._handleWindowLoadAndResize(),
          this._detectViewport(),
          this.refresh({ firstLoad: !0 }),
          "scroll" === this.options.scrollProperty
            ? this._handleScrollEvent()
            : this._startAnimationLoop();
      },
      _defineElements: function () {
        this.element === c.body && (this.element = b),
          (this.$scrollElement = a(this.element)),
          (this.$element =
            this.element === b ? a("body") : this.$scrollElement),
          (this.$viewportElement =
            this.options.viewportElement !== d
              ? a(this.options.viewportElement)
              : this.$scrollElement[0] === b ||
                "scroll" === this.options.scrollProperty
              ? this.$scrollElement
              : this.$scrollElement.parent());
      },
      _defineGetters: function () {
        var a = this,
          b = h[a.options.scrollProperty];
        (this._getScrollLeft = function () {
          return b.getLeft(a.$scrollElement);
        }),
          (this._getScrollTop = function () {
            return b.getTop(a.$scrollElement);
          });
      },
      _defineSetters: function () {
        var b = this,
          c = h[b.options.scrollProperty],
          d = i[b.options.positionProperty],
          e = c.setLeft,
          f = c.setTop;
        (this._setScrollLeft =
          "function" == typeof e
            ? function (a) {
                e(b.$scrollElement, a);
              }
            : a.noop),
          (this._setScrollTop =
            "function" == typeof f
              ? function (a) {
                  f(b.$scrollElement, a);
                }
              : a.noop),
          (this._setPosition =
            d.setPosition ||
            function (a, c, e, f, g) {
              b.options.horizontalScrolling && d.setLeft(a, c, e),
                b.options.verticalScrolling && d.setTop(a, f, g);
            });
      },
      _handleWindowLoadAndResize: function () {
        var c = this,
          d = a(b);
        c.options.responsive &&
          d.bind("load." + this.name, function () {
            c.refresh();
          }),
          d.bind("resize." + this.name, function () {
            c._detectViewport(), c.options.responsive && c.refresh();
          });
      },
      refresh: function (c) {
        var d = this,
          e = d._getScrollLeft(),
          f = d._getScrollTop();
        (!c || !c.firstLoad) && this._reset(),
          this._setScrollLeft(0),
          this._setScrollTop(0),
          this._setOffsets(),
          this._findParticles(),
          this._findBackgrounds(),
          c &&
            c.firstLoad &&
            /WebKit/.test(navigator.userAgent) &&
            a(b).load(function () {
              var a = d._getScrollLeft(),
                b = d._getScrollTop();
              d._setScrollLeft(a + 1),
                d._setScrollTop(b + 1),
                d._setScrollLeft(a),
                d._setScrollTop(b);
            }),
          this._setScrollLeft(e),
          this._setScrollTop(f);
      },
      _detectViewport: function () {
        var a = this.$viewportElement.offset(),
          b = null !== a && a !== d;
        (this.viewportWidth = this.$viewportElement.width()),
          (this.viewportHeight = this.$viewportElement.height()),
          (this.viewportOffsetTop = b ? a.top : 0),
          (this.viewportOffsetLeft = b ? a.left : 0);
      },
      _findParticles: function () {
        var b = this;
        this._getScrollLeft(), this._getScrollTop();
        if (this.particles !== d)
          for (var c = this.particles.length - 1; c >= 0; c--)
            this.particles[c].$element.data("stellar-elementIsActive", d);
        (this.particles = []),
          this.options.parallaxElements &&
            this.$element.find("[data-stellar-ratio]").each(function (c) {
              var e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n = a(this),
                o = 0,
                p = 0,
                q = 0,
                r = 0;
              if (n.data("stellar-elementIsActive")) {
                if (n.data("stellar-elementIsActive") !== this) return;
              } else n.data("stellar-elementIsActive", this);
              b.options.showElement(n),
                n.data("stellar-startingLeft")
                  ? (n.css("left", n.data("stellar-startingLeft")),
                    n.css("top", n.data("stellar-startingTop")))
                  : (n.data("stellar-startingLeft", n.css("left")),
                    n.data("stellar-startingTop", n.css("top"))),
                (g = n.position().left),
                (h = n.position().top),
                (i =
                  "auto" === n.css("margin-left")
                    ? 0
                    : parseInt(n.css("margin-left"), 10)),
                (j =
                  "auto" === n.css("margin-top")
                    ? 0
                    : parseInt(n.css("margin-top"), 10)),
                (l = n.offset().left - i),
                (m = n.offset().top - j),
                n.parents().each(function () {
                  var b = a(this);
                  return b.data("stellar-offset-parent") === !0
                    ? ((o = q), (p = r), (k = b), !1)
                    : ((q += b.position().left), void (r += b.position().top));
                }),
                (e =
                  n.data("stellar-horizontal-offset") !== d
                    ? n.data("stellar-horizontal-offset")
                    : k !== d && k.data("stellar-horizontal-offset") !== d
                    ? k.data("stellar-horizontal-offset")
                    : b.horizontalOffset),
                (f =
                  n.data("stellar-vertical-offset") !== d
                    ? n.data("stellar-vertical-offset")
                    : k !== d && k.data("stellar-vertical-offset") !== d
                    ? k.data("stellar-vertical-offset")
                    : b.verticalOffset),
                b.particles.push({
                  $element: n,
                  $offsetParent: k,
                  isFixed: "fixed" === n.css("position"),
                  horizontalOffset: e,
                  verticalOffset: f,
                  startingPositionLeft: g,
                  startingPositionTop: h,
                  startingOffsetLeft: l,
                  startingOffsetTop: m,
                  parentOffsetLeft: o,
                  parentOffsetTop: p,
                  stellarRatio:
                    n.data("stellar-ratio") !== d ? n.data("stellar-ratio") : 1,
                  width: n.outerWidth(!0),
                  height: n.outerHeight(!0),
                  isHidden: !1,
                });
            });
      },
      _findBackgrounds: function () {
        var b,
          c = this,
          e = this._getScrollLeft(),
          f = this._getScrollTop();
        (this.backgrounds = []),
          this.options.parallaxBackgrounds &&
            ((b = this.$element.find("[data-stellar-background-ratio]")),
            this.$element.data("stellar-background-ratio") &&
              (b = b.add(this.$element)),
            b.each(function () {
              var b,
                g,
                h,
                i,
                j,
                k,
                l,
                o = a(this),
                p = n(o),
                q = 0,
                r = 0,
                s = 0,
                t = 0;
              if (o.data("stellar-backgroundIsActive")) {
                if (o.data("stellar-backgroundIsActive") !== this) return;
              } else o.data("stellar-backgroundIsActive", this);
              o.data("stellar-backgroundStartingLeft")
                ? m(
                    o,
                    o.data("stellar-backgroundStartingLeft"),
                    o.data("stellar-backgroundStartingTop")
                  )
                : (o.data("stellar-backgroundStartingLeft", p[0]),
                  o.data("stellar-backgroundStartingTop", p[1])),
                (h =
                  "auto" === o.css("margin-left")
                    ? 0
                    : parseInt(o.css("margin-left"), 10)),
                (i =
                  "auto" === o.css("margin-top")
                    ? 0
                    : parseInt(o.css("margin-top"), 10)),
                (j = o.offset().left - h - e),
                (k = o.offset().top - i - f),
                o.parents().each(function () {
                  var b = a(this);
                  return b.data("stellar-offset-parent") === !0
                    ? ((q = s), (r = t), (l = b), !1)
                    : ((s += b.position().left), void (t += b.position().top));
                }),
                (b =
                  o.data("stellar-horizontal-offset") !== d
                    ? o.data("stellar-horizontal-offset")
                    : l !== d && l.data("stellar-horizontal-offset") !== d
                    ? l.data("stellar-horizontal-offset")
                    : c.horizontalOffset),
                (g =
                  o.data("stellar-vertical-offset") !== d
                    ? o.data("stellar-vertical-offset")
                    : l !== d && l.data("stellar-vertical-offset") !== d
                    ? l.data("stellar-vertical-offset")
                    : c.verticalOffset),
                c.backgrounds.push({
                  $element: o,
                  $offsetParent: l,
                  isFixed: "fixed" === o.css("background-attachment"),
                  horizontalOffset: b,
                  verticalOffset: g,
                  startingValueLeft: p[0],
                  startingValueTop: p[1],
                  startingBackgroundPositionLeft: isNaN(parseInt(p[0], 10))
                    ? 0
                    : parseInt(p[0], 10),
                  startingBackgroundPositionTop: isNaN(parseInt(p[1], 10))
                    ? 0
                    : parseInt(p[1], 10),
                  startingPositionLeft: o.position().left,
                  startingPositionTop: o.position().top,
                  startingOffsetLeft: j,
                  startingOffsetTop: k,
                  parentOffsetLeft: q,
                  parentOffsetTop: r,
                  stellarRatio:
                    o.data("stellar-background-ratio") === d
                      ? 1
                      : o.data("stellar-background-ratio"),
                });
            }));
      },
      _reset: function () {
        var a, b, c, d, e;
        for (e = this.particles.length - 1; e >= 0; e--)
          (a = this.particles[e]),
            (b = a.$element.data("stellar-startingLeft")),
            (c = a.$element.data("stellar-startingTop")),
            this._setPosition(a.$element, b, b, c, c),
            this.options.showElement(a.$element),
            a.$element
              .data("stellar-startingLeft", null)
              .data("stellar-elementIsActive", null)
              .data("stellar-backgroundIsActive", null);
        for (e = this.backgrounds.length - 1; e >= 0; e--)
          (d = this.backgrounds[e]),
            d.$element
              .data("stellar-backgroundStartingLeft", null)
              .data("stellar-backgroundStartingTop", null),
            m(d.$element, d.startingValueLeft, d.startingValueTop);
      },
      destroy: function () {
        this._reset(),
          this.$scrollElement
            .unbind("resize." + this.name)
            .unbind("scroll." + this.name),
          (this._animationLoop = a.noop),
          a(b)
            .unbind("load." + this.name)
            .unbind("resize." + this.name);
      },
      _setOffsets: function () {
        var c = this,
          d = a(b);
        d
          .unbind("resize.horizontal-" + this.name)
          .unbind("resize.vertical-" + this.name),
          "function" == typeof this.options.horizontalOffset
            ? ((this.horizontalOffset = this.options.horizontalOffset()),
              d.bind("resize.horizontal-" + this.name, function () {
                c.horizontalOffset = c.options.horizontalOffset();
              }))
            : (this.horizontalOffset = this.options.horizontalOffset),
          "function" == typeof this.options.verticalOffset
            ? ((this.verticalOffset = this.options.verticalOffset()),
              d.bind("resize.vertical-" + this.name, function () {
                c.verticalOffset = c.options.verticalOffset();
              }))
            : (this.verticalOffset = this.options.verticalOffset);
      },
      _repositionElements: function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = this._getScrollLeft(),
          l = this._getScrollTop(),
          n = !0,
          o = !0;
        if (
          this.currentScrollLeft !== k ||
          this.currentScrollTop !== l ||
          this.currentWidth !== this.viewportWidth ||
          this.currentHeight !== this.viewportHeight
        ) {
          for (
            this.currentScrollLeft = k,
              this.currentScrollTop = l,
              this.currentWidth = this.viewportWidth,
              this.currentHeight = this.viewportHeight,
              j = this.particles.length - 1;
            j >= 0;
            j--
          )
            (a = this.particles[j]),
              (b = a.isFixed ? 1 : 0),
              this.options.horizontalScrolling
                ? ((f =
                    (k +
                      a.horizontalOffset +
                      this.viewportOffsetLeft +
                      a.startingPositionLeft -
                      a.startingOffsetLeft +
                      a.parentOffsetLeft) *
                      -(a.stellarRatio + b - 1) +
                    a.startingPositionLeft),
                  (h = f - a.startingPositionLeft + a.startingOffsetLeft))
                : ((f = a.startingPositionLeft), (h = a.startingOffsetLeft)),
              this.options.verticalScrolling
                ? ((g =
                    (l +
                      a.verticalOffset +
                      this.viewportOffsetTop +
                      a.startingPositionTop -
                      a.startingOffsetTop +
                      a.parentOffsetTop) *
                      -(a.stellarRatio + b - 1) +
                    a.startingPositionTop),
                  (i = g - a.startingPositionTop + a.startingOffsetTop))
                : ((g = a.startingPositionTop), (i = a.startingOffsetTop)),
              this.options.hideDistantElements &&
                ((o =
                  !this.options.horizontalScrolling ||
                  (h + a.width > (a.isFixed ? 0 : k) &&
                    h <
                      (a.isFixed ? 0 : k) +
                        this.viewportWidth +
                        this.viewportOffsetLeft)),
                (n =
                  !this.options.verticalScrolling ||
                  (i + a.height > (a.isFixed ? 0 : l) &&
                    i <
                      (a.isFixed ? 0 : l) +
                        this.viewportHeight +
                        this.viewportOffsetTop))),
              o && n
                ? (a.isHidden &&
                    (this.options.showElement(a.$element), (a.isHidden = !1)),
                  this._setPosition(
                    a.$element,
                    f,
                    a.startingPositionLeft,
                    g,
                    a.startingPositionTop
                  ))
                : a.isHidden ||
                  (this.options.hideElement(a.$element), (a.isHidden = !0));
          for (j = this.backgrounds.length - 1; j >= 0; j--)
            (c = this.backgrounds[j]),
              (b = c.isFixed ? 0 : 1),
              (d = this.options.horizontalScrolling
                ? (k +
                    c.horizontalOffset -
                    this.viewportOffsetLeft -
                    c.startingOffsetLeft +
                    c.parentOffsetLeft -
                    c.startingBackgroundPositionLeft) *
                    (b - c.stellarRatio) +
                  "px"
                : c.startingValueLeft),
              (e = this.options.verticalScrolling
                ? (l +
                    c.verticalOffset -
                    this.viewportOffsetTop -
                    c.startingOffsetTop +
                    c.parentOffsetTop -
                    c.startingBackgroundPositionTop) *
                    (b - c.stellarRatio) +
                  "px"
                : c.startingValueTop),
              m(c.$element, d, e);
        }
      },
      _handleScrollEvent: function () {
        var a = this,
          b = !1,
          c = function () {
            a._repositionElements(), (b = !1);
          },
          d = function () {
            b || (o(c), (b = !0));
          };
        this.$scrollElement.bind("scroll." + this.name, d), d();
      },
      _startAnimationLoop: function () {
        var a = this;
        (this._animationLoop = function () {
          o(a._animationLoop), a._repositionElements();
        }),
          this._animationLoop();
      },
    }),
      (a.fn[f] = function (b) {
        var c = arguments;
        return b === d || "object" == typeof b
          ? this.each(function () {
              a.data(this, "plugin_" + f) ||
                a.data(this, "plugin_" + f, new e(this, b));
            })
          : "string" == typeof b && "_" !== b[0] && "init" !== b
          ? this.each(function () {
              var d = a.data(this, "plugin_" + f);
              d instanceof e &&
                "function" == typeof d[b] &&
                d[b].apply(d, Array.prototype.slice.call(c, 1)),
                "destroy" === b && a.data(this, "plugin_" + f, null);
            })
          : void 0;
      }),
      (a[f] = function (c) {
        var d = a(b);
        return d.stellar.apply(d, Array.prototype.slice.call(arguments, 0));
      }),
      (a[f].scrollProperty = h),
      (a[f].positionProperty = i),
      (b.Stellar = e);
  })(jQuery, this, document),
  !(function (a, b, c, d) {
    function e(b, c) {
      (this.settings = null),
        (this.options = a.extend({}, e.Defaults, c)),
        (this.$element = a(b)),
        (this._handlers = {}),
        (this._plugins = {}),
        (this._supress = {}),
        (this._current = null),
        (this._speed = null),
        (this._coordinates = []),
        (this._breakpoint = null),
        (this._width = null),
        (this._items = []),
        (this._clones = []),
        (this._mergers = []),
        (this._widths = []),
        (this._invalidated = {}),
        (this._pipe = []),
        (this._drag = {
          time: null,
          target: null,
          pointer: null,
          stage: { start: null, current: null },
          direction: null,
        }),
        (this._states = {
          current: {},
          tags: {
            initializing: ["busy"],
            animating: ["busy"],
            dragging: ["interacting"],
          },
        }),
        a.each(
          ["onResize", "onThrottledResize"],
          a.proxy(function (b, c) {
            this._handlers[c] = a.proxy(this[c], this);
          }, this)
        ),
        a.each(
          e.Plugins,
          a.proxy(function (a, b) {
            this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
          }, this)
        ),
        a.each(
          e.Workers,
          a.proxy(function (b, c) {
            this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
          }, this)
        ),
        this.setup(),
        this.initialize();
    }
    (e.Defaults = {
      items: 3,
      loop: !1,
      center: !1,
      rewind: !1,
      mouseDrag: !0,
      touchDrag: !0,
      pullDrag: !0,
      freeDrag: !1,
      margin: 0,
      stagePadding: 0,
      merge: !1,
      mergeFit: !0,
      autoWidth: !1,
      startPosition: 0,
      rtl: !1,
      smartSpeed: 250,
      fluidSpeed: !1,
      dragEndSpeed: !1,
      responsive: {},
      responsiveRefreshRate: 200,
      responsiveBaseElement: b,
      fallbackEasing: "swing",
      info: !1,
      nestedItemSelector: !1,
      itemElement: "div",
      stageElement: "div",
      refreshClass: "owl-refresh",
      loadedClass: "owl-loaded",
      loadingClass: "owl-loading",
      rtlClass: "owl-rtl",
      responsiveClass: "owl-responsive",
      dragClass: "owl-drag",
      itemClass: "owl-item",
      stageClass: "owl-stage",
      stageOuterClass: "owl-stage-outer",
      grabClass: "owl-grab",
    }),
      (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
      (e.Type = { Event: "event", State: "state" }),
      (e.Plugins = {}),
      (e.Workers = [
        {
          filter: ["width", "settings"],
          run: function () {
            this._width = this.$element.width();
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (a) {
            a.current =
              this._items && this._items[this.relative(this._current)];
          },
        },
        {
          filter: ["items", "settings"],
          run: function () {
            this.$stage.children(".cloned").remove();
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (a) {
            var b = this.settings.margin || "",
              c = !this.settings.autoWidth,
              d = this.settings.rtl,
              e = {
                width: "auto",
                "margin-left": d ? b : "",
                "margin-right": d ? "" : b,
              };
            !c && this.$stage.children().css(e), (a.css = e);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (a) {
            var b =
                (this.width() / this.settings.items).toFixed(3) -
                this.settings.margin,
              c = null,
              d = this._items.length,
              e = !this.settings.autoWidth,
              f = [];
            for (a.items = { merge: !1, width: b }; d--; )
              (c = this._mergers[d]),
                (c =
                  (this.settings.mergeFit &&
                    Math.min(c, this.settings.items)) ||
                  c),
                (a.items.merge = c > 1 || a.items.merge),
                (f[d] = e ? b * c : this._items[d].width());
            this._widths = f;
          },
        },
        {
          filter: ["items", "settings"],
          run: function () {
            var b = [],
              c = this._items,
              d = this.settings,
              e = Math.max(2 * d.items, 4),
              f = 2 * Math.ceil(c.length / 2),
              g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
              h = "",
              i = "";
            for (g /= 2; g--; )
              b.push(this.normalize(b.length / 2, !0)),
                (h += c[b[b.length - 1]][0].outerHTML),
                b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
                (i = c[b[b.length - 1]][0].outerHTML + i);
            (this._clones = b),
              a(h).addClass("cloned").appendTo(this.$stage),
              a(i).addClass("cloned").prependTo(this.$stage);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function () {
            for (
              var a = this.settings.rtl ? 1 : -1,
                b = this._clones.length + this._items.length,
                c = -1,
                d = 0,
                e = 0,
                f = [];
              ++c < b;

            )
              (d = f[c - 1] || 0),
                (e = this._widths[this.relative(c)] + this.settings.margin),
                f.push(d + e * a);
            this._coordinates = f;
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function () {
            var a = this.settings.stagePadding,
              b = this._coordinates,
              c = {
                width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                "padding-left": a || "",
                "padding-right": a || "",
              };
            this.$stage.css(c);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (a) {
            var b = this._coordinates.length,
              c = !this.settings.autoWidth,
              d = this.$stage.children();
            if (c && a.items.merge)
              for (; b--; )
                (a.css.width = this._widths[this.relative(b)]),
                  d.eq(b).css(a.css);
            else c && ((a.css.width = a.items.width), d.css(a.css));
          },
        },
        {
          filter: ["items"],
          run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style");
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (a) {
            (a.current = a.current
              ? this.$stage.children().index(a.current)
              : 0),
              (a.current = Math.max(
                this.minimum(),
                Math.min(this.maximum(), a.current)
              )),
              this.reset(a.current);
          },
        },
        {
          filter: ["position"],
          run: function () {
            this.animate(this.coordinates(this._current));
          },
        },
        {
          filter: ["width", "position", "items", "settings"],
          run: function () {
            var a,
              b,
              c,
              d,
              e = this.settings.rtl ? 1 : -1,
              f = 2 * this.settings.stagePadding,
              g = this.coordinates(this.current()) + f,
              h = g + this.width() * e,
              i = [];
            for (c = 0, d = this._coordinates.length; d > c; c++)
              (a = this._coordinates[c - 1] || 0),
                (b = Math.abs(this._coordinates[c]) + f * e),
                ((this.op(a, "<=", g) && this.op(a, ">", h)) ||
                  (this.op(b, "<", g) && this.op(b, ">", h))) &&
                  i.push(c);
            this.$stage.children(".active").removeClass("active"),
              this.$stage
                .children(":eq(" + i.join("), :eq(") + ")")
                .addClass("active"),
              this.settings.center &&
                (this.$stage.children(".center").removeClass("center"),
                this.$stage.children().eq(this.current()).addClass("center"));
          },
        },
      ]),
      (e.prototype.initialize = function () {
        if (
          (this.enter("initializing"),
          this.trigger("initialize"),
          this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
          this.settings.autoWidth && !this.is("pre-loading"))
        ) {
          var b, c, e;
          (b = this.$element.find("img")),
            (c = this.settings.nestedItemSelector
              ? "." + this.settings.nestedItemSelector
              : d),
            (e = this.$element.children(c).width()),
            b.length && 0 >= e && this.preloadAutoWidthImages(b);
        }
        this.$element.addClass(this.options.loadingClass),
          (this.$stage = a(
            "<" +
              this.settings.stageElement +
              ' class="' +
              this.settings.stageClass +
              '"/>'
          ).wrap('<div class="' + this.settings.stageOuterClass + '"/>')),
          this.$element.append(this.$stage.parent()),
          this.replace(this.$element.children().not(this.$stage.parent())),
          this.$element.is(":visible")
            ? this.refresh()
            : this.invalidate("width"),
          this.$element
            .removeClass(this.options.loadingClass)
            .addClass(this.options.loadedClass),
          this.registerEventHandlers(),
          this.leave("initializing"),
          this.trigger("initialized");
      }),
      (e.prototype.setup = function () {
        var b = this.viewport(),
          c = this.options.responsive,
          d = -1,
          e = null;
        c
          ? (a.each(c, function (a) {
              b >= a && a > d && (d = Number(a));
            }),
            (e = a.extend({}, this.options, c[d])),
            delete e.responsive,
            e.responsiveClass &&
              this.$element.attr(
                "class",
                this.$element
                  .attr("class")
                  .replace(
                    new RegExp(
                      "(" + this.options.responsiveClass + "-)\\S+\\s",
                      "g"
                    ),
                    "$1" + d
                  )
              ))
          : (e = a.extend({}, this.options)),
          this.trigger("change", { property: { name: "settings", value: e } }),
          (this._breakpoint = d),
          (this.settings = e),
          this.invalidate("settings"),
          this.trigger("changed", {
            property: { name: "settings", value: this.settings },
          });
      }),
      (e.prototype.optionsLogic = function () {
        this.settings.autoWidth &&
          ((this.settings.stagePadding = !1), (this.settings.merge = !1));
      }),
      (e.prototype.prepare = function (b) {
        var c = this.trigger("prepare", { content: b });
        return (
          c.data ||
            (c.data = a("<" + this.settings.itemElement + "/>")
              .addClass(this.options.itemClass)
              .append(b)),
          this.trigger("prepared", { content: c.data }),
          c.data
        );
      }),
      (e.prototype.update = function () {
        for (
          var b = 0,
            c = this._pipe.length,
            d = a.proxy(function (a) {
              return this[a];
            }, this._invalidated),
            e = {};
          c > b;

        )
          (this._invalidated.all ||
            a.grep(this._pipe[b].filter, d).length > 0) &&
            this._pipe[b].run(e),
            b++;
        (this._invalidated = {}), !this.is("valid") && this.enter("valid");
      }),
      (e.prototype.width = function (a) {
        switch ((a = a || e.Width.Default)) {
          case e.Width.Inner:
          case e.Width.Outer:
            return this._width;
          default:
            return (
              this._width -
              2 * this.settings.stagePadding +
              this.settings.margin
            );
        }
      }),
      (e.prototype.refresh = function () {
        this.enter("refreshing"),
          this.trigger("refresh"),
          this.setup(),
          this.optionsLogic(),
          this.$element.addClass(this.options.refreshClass),
          this.update(),
          this.$element.removeClass(this.options.refreshClass),
          this.leave("refreshing"),
          this.trigger("refreshed");
      }),
      (e.prototype.onThrottledResize = function () {
        b.clearTimeout(this.resizeTimer),
          (this.resizeTimer = b.setTimeout(
            this._handlers.onResize,
            this.settings.responsiveRefreshRate
          ));
      }),
      (e.prototype.onResize = function () {
        return this._items.length
          ? this._width === this.$element.width()
            ? !1
            : this.$element.is(":visible")
            ? (this.enter("resizing"),
              this.trigger("resize").isDefaultPrevented()
                ? (this.leave("resizing"), !1)
                : (this.invalidate("width"),
                  this.refresh(),
                  this.leave("resizing"),
                  void this.trigger("resized")))
            : !1
          : !1;
      }),
      (e.prototype.registerEventHandlers = function () {
        a.support.transition &&
          this.$stage.on(
            a.support.transition.end + ".owl.core",
            a.proxy(this.onTransitionEnd, this)
          ),
          this.settings.responsive !== !1 &&
            this.on(b, "resize", this._handlers.onThrottledResize),
          this.settings.mouseDrag &&
            (this.$element.addClass(this.options.dragClass),
            this.$stage.on(
              "mousedown.owl.core",
              a.proxy(this.onDragStart, this)
            ),
            this.$stage.on(
              "dragstart.owl.core selectstart.owl.core",
              function () {
                return !1;
              }
            )),
          this.settings.touchDrag &&
            (this.$stage.on(
              "touchstart.owl.core",
              a.proxy(this.onDragStart, this)
            ),
            this.$stage.on(
              "touchcancel.owl.core",
              a.proxy(this.onDragEnd, this)
            ));
      }),
      (e.prototype.onDragStart = function (b) {
        var d = null;
        3 !== b.which &&
          (a.support.transform
            ? ((d = this.$stage
                .css("transform")
                .replace(/.*\(|\)| /g, "")
                .split(",")),
              (d = {
                x: d[16 === d.length ? 12 : 4],
                y: d[16 === d.length ? 13 : 5],
              }))
            : ((d = this.$stage.position()),
              (d = {
                x: this.settings.rtl
                  ? d.left +
                    this.$stage.width() -
                    this.width() +
                    this.settings.margin
                  : d.left,
                y: d.top,
              })),
          this.is("animating") &&
            (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
            this.invalidate("position")),
          this.$element.toggleClass(
            this.options.grabClass,
            "mousedown" === b.type
          ),
          this.speed(0),
          (this._drag.time = new Date().getTime()),
          (this._drag.target = a(b.target)),
          (this._drag.stage.start = d),
          (this._drag.stage.current = d),
          (this._drag.pointer = this.pointer(b)),
          a(c).on(
            "mouseup.owl.core touchend.owl.core",
            a.proxy(this.onDragEnd, this)
          ),
          a(c).one(
            "mousemove.owl.core touchmove.owl.core",
            a.proxy(function (b) {
              var d = this.difference(this._drag.pointer, this.pointer(b));
              a(c).on(
                "mousemove.owl.core touchmove.owl.core",
                a.proxy(this.onDragMove, this)
              ),
                (Math.abs(d.x) < Math.abs(d.y) && this.is("valid")) ||
                  (b.preventDefault(),
                  this.enter("dragging"),
                  this.trigger("drag"));
            }, this)
          ));
      }),
      (e.prototype.onDragMove = function (a) {
        var b = null,
          c = null,
          d = null,
          e = this.difference(this._drag.pointer, this.pointer(a)),
          f = this.difference(this._drag.stage.start, e);
        this.is("dragging") &&
          (a.preventDefault(),
          this.settings.loop
            ? ((b = this.coordinates(this.minimum())),
              (c = this.coordinates(this.maximum() + 1) - b),
              (f.x = ((((f.x - b) % c) + c) % c) + b))
            : ((b = this.settings.rtl
                ? this.coordinates(this.maximum())
                : this.coordinates(this.minimum())),
              (c = this.settings.rtl
                ? this.coordinates(this.minimum())
                : this.coordinates(this.maximum())),
              (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
              (f.x = Math.max(Math.min(f.x, b + d), c + d))),
          (this._drag.stage.current = f),
          this.animate(f.x));
      }),
      (e.prototype.onDragEnd = function (b) {
        var d = this.difference(this._drag.pointer, this.pointer(b)),
          e = this._drag.stage.current,
          f = (d.x > 0) ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"),
          this.$element.removeClass(this.options.grabClass),
          ((0 !== d.x && this.is("dragging")) || !this.is("valid")) &&
            (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
            this.current(
              this.closest(e.x, 0 !== d.x ? f : this._drag.direction)
            ),
            this.invalidate("position"),
            this.update(),
            (this._drag.direction = f),
            (Math.abs(d.x) > 3 ||
              new Date().getTime() - this._drag.time > 300) &&
              this._drag.target.one("click.owl.core", function () {
                return !1;
              })),
          this.is("dragging") &&
            (this.leave("dragging"), this.trigger("dragged"));
      }),
      (e.prototype.closest = function (b, c) {
        var d = -1,
          e = 30,
          f = this.width(),
          g = this.coordinates();
        return (
          this.settings.freeDrag ||
            a.each(
              g,
              a.proxy(function (a, h) {
                return (
                  "left" === c && b > h - e && h + e > b
                    ? (d = a)
                    : "right" === c && b > h - f - e && h - f + e > b
                    ? (d = a + 1)
                    : this.op(b, "<", h) &&
                      this.op(b, ">", g[a + 1] || h - f) &&
                      (d = "left" === c ? a + 1 : a),
                  -1 === d
                );
              }, this)
            ),
          this.settings.loop ||
            (this.op(b, ">", g[this.minimum()])
              ? (d = b = this.minimum())
              : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())),
          d
        );
      }),
      (e.prototype.animate = function (b) {
        var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(),
          c && (this.enter("animating"), this.trigger("translate")),
          a.support.transform3d && a.support.transition
            ? this.$stage.css({
                transform: "translate3d(" + b + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s",
              })
            : c
            ? this.$stage.animate(
                { left: b + "px" },
                this.speed(),
                this.settings.fallbackEasing,
                a.proxy(this.onTransitionEnd, this)
              )
            : this.$stage.css({ left: b + "px" });
      }),
      (e.prototype.is = function (a) {
        return this._states.current[a] && this._states.current[a] > 0;
      }),
      (e.prototype.current = function (a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (((a = this.normalize(a)), this._current !== a)) {
          var b = this.trigger("change", {
            property: { name: "position", value: a },
          });
          b.data !== d && (a = this.normalize(b.data)),
            (this._current = a),
            this.invalidate("position"),
            this.trigger("changed", {
              property: { name: "position", value: this._current },
            });
        }
        return this._current;
      }),
      (e.prototype.invalidate = function (b) {
        return (
          "string" === a.type(b) &&
            ((this._invalidated[b] = !0),
            this.is("valid") && this.leave("valid")),
          a.map(this._invalidated, function (a, b) {
            return b;
          })
        );
      }),
      (e.prototype.reset = function (a) {
        (a = this.normalize(a)),
          a !== d &&
            ((this._speed = 0),
            (this._current = a),
            this.suppress(["translate", "translated"]),
            this.animate(this.coordinates(a)),
            this.release(["translate", "translated"]));
      }),
      (e.prototype.normalize = function (a, b) {
        var c = this._items.length,
          e = b ? 0 : this._clones.length;
        return (
          !this.isNumeric(a) || 1 > c
            ? (a = d)
            : (0 > a || a >= c + e) &&
              (a = ((((a - e / 2) % c) + c) % c) + e / 2),
          a
        );
      }),
      (e.prototype.relative = function (a) {
        return (a -= this._clones.length / 2), this.normalize(a, !0);
      }),
      (e.prototype.maximum = function (a) {
        var b,
          c = this.settings,
          d = this._coordinates.length,
          e = Math.abs(this._coordinates[d - 1]) - this._width,
          f = -1;
        if (c.loop) d = this._clones.length / 2 + this._items.length - 1;
        else if (c.autoWidth || c.merge)
          for (; d - f > 1; )
            Math.abs(this._coordinates[(b = (d + f) >> 1)]) < e
              ? (f = b)
              : (d = b);
        else
          d = c.center ? this._items.length - 1 : this._items.length - c.items;
        return a && (d -= this._clones.length / 2), Math.max(d, 0);
      }),
      (e.prototype.minimum = function (a) {
        return a ? 0 : this._clones.length / 2;
      }),
      (e.prototype.items = function (a) {
        return a === d
          ? this._items.slice()
          : ((a = this.normalize(a, !0)), this._items[a]);
      }),
      (e.prototype.mergers = function (a) {
        return a === d
          ? this._mergers.slice()
          : ((a = this.normalize(a, !0)), this._mergers[a]);
      }),
      (e.prototype.clones = function (b) {
        var c = this._clones.length / 2,
          e = c + this._items.length,
          f = function (a) {
            return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2;
          };
        return b === d
          ? a.map(this._clones, function (a, b) {
              return f(b);
            })
          : a.map(this._clones, function (a, c) {
              return a === b ? f(c) : null;
            });
      }),
      (e.prototype.speed = function (a) {
        return a !== d && (this._speed = a), this._speed;
      }),
      (e.prototype.coordinates = function (b) {
        var c,
          e = 1,
          f = b - 1;
        return b === d
          ? a.map(
              this._coordinates,
              a.proxy(function (a, b) {
                return this.coordinates(b);
              }, this)
            )
          : (this.settings.center
              ? (this.settings.rtl && ((e = -1), (f = b + 1)),
                (c = this._coordinates[b]),
                (c +=
                  ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e))
              : (c = this._coordinates[f] || 0),
            (c = Math.ceil(c)));
      }),
      (e.prototype.duration = function (a, b, c) {
        return 0 === c
          ? 0
          : Math.min(Math.max(Math.abs(b - a), 1), 6) *
              Math.abs(c || this.settings.smartSpeed);
      }),
      (e.prototype.to = function (a, b) {
        var c = this.current(),
          d = null,
          e = a - this.relative(c),
          f = (e > 0) - (0 > e),
          g = this._items.length,
          h = this.minimum(),
          i = this.maximum();
        this.settings.loop
          ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g),
            (a = c + e),
            (d = ((((a - h) % g) + g) % g) + h),
            d !== a &&
              i >= d - e &&
              d - e > 0 &&
              ((c = d - e), (a = d), this.reset(c)))
          : this.settings.rewind
          ? ((i += 1), (a = ((a % i) + i) % i))
          : (a = Math.max(h, Math.min(i, a))),
          this.speed(this.duration(c, a, b)),
          this.current(a),
          this.$element.is(":visible") && this.update();
      }),
      (e.prototype.next = function (a) {
        (a = a || !1), this.to(this.relative(this.current()) + 1, a);
      }),
      (e.prototype.prev = function (a) {
        (a = a || !1), this.to(this.relative(this.current()) - 1, a);
      }),
      (e.prototype.onTransitionEnd = function (a) {
        return a !== d &&
          (a.stopPropagation(),
          (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))
          ? !1
          : (this.leave("animating"), void this.trigger("translated"));
      }),
      (e.prototype.viewport = function () {
        var d;
        if (this.options.responsiveBaseElement !== b)
          d = a(this.options.responsiveBaseElement).width();
        else if (b.innerWidth) d = b.innerWidth;
        else {
          if (!c.documentElement || !c.documentElement.clientWidth)
            throw "Can not detect viewport width.";
          d = c.documentElement.clientWidth;
        }
        return d;
      }),
      (e.prototype.replace = function (b) {
        this.$stage.empty(),
          (this._items = []),
          b && (b = b instanceof jQuery ? b : a(b)),
          this.settings.nestedItemSelector &&
            (b = b.find("." + this.settings.nestedItemSelector)),
          b
            .filter(function () {
              return 1 === this.nodeType;
            })
            .each(
              a.proxy(function (a, b) {
                (b = this.prepare(b)),
                  this.$stage.append(b),
                  this._items.push(b),
                  this._mergers.push(
                    1 *
                      b
                        .find("[data-merge]")
                        .andSelf("[data-merge]")
                        .attr("data-merge") || 1
                  );
              }, this)
            ),
          this.reset(
            this.isNumeric(this.settings.startPosition)
              ? this.settings.startPosition
              : 0
          ),
          this.invalidate("items");
      }),
      (e.prototype.add = function (b, c) {
        var e = this.relative(this._current);
        (c = c === d ? this._items.length : this.normalize(c, !0)),
          (b = b instanceof jQuery ? b : a(b)),
          this.trigger("add", { content: b, position: c }),
          (b = this.prepare(b)),
          0 === this._items.length || c === this._items.length
            ? (0 === this._items.length && this.$stage.append(b),
              0 !== this._items.length && this._items[c - 1].after(b),
              this._items.push(b),
              this._mergers.push(
                1 *
                  b
                    .find("[data-merge]")
                    .andSelf("[data-merge]")
                    .attr("data-merge") || 1
              ))
            : (this._items[c].before(b),
              this._items.splice(c, 0, b),
              this._mergers.splice(
                c,
                0,
                1 *
                  b
                    .find("[data-merge]")
                    .andSelf("[data-merge]")
                    .attr("data-merge") || 1
              )),
          this._items[e] && this.reset(this._items[e].index()),
          this.invalidate("items"),
          this.trigger("added", { content: b, position: c });
      }),
      (e.prototype.remove = function (a) {
        (a = this.normalize(a, !0)),
          a !== d &&
            (this.trigger("remove", { content: this._items[a], position: a }),
            this._items[a].remove(),
            this._items.splice(a, 1),
            this._mergers.splice(a, 1),
            this.invalidate("items"),
            this.trigger("removed", { content: null, position: a }));
      }),
      (e.prototype.preloadAutoWidthImages = function (b) {
        b.each(
          a.proxy(function (b, c) {
            this.enter("pre-loading"),
              (c = a(c)),
              a(new Image())
                .one(
                  "load",
                  a.proxy(function (a) {
                    c.attr("src", a.target.src),
                      c.css("opacity", 1),
                      this.leave("pre-loading"),
                      !this.is("pre-loading") &&
                        !this.is("initializing") &&
                        this.refresh();
                  }, this)
                )
                .attr(
                  "src",
                  c.attr("src") ||
                    c.attr("data-src") ||
                    c.attr("data-src-retina")
                );
          }, this)
        );
      }),
      (e.prototype.destroy = function () {
        this.$element.off(".owl.core"),
          this.$stage.off(".owl.core"),
          a(c).off(".owl.core"),
          this.settings.responsive !== !1 &&
            (b.clearTimeout(this.resizeTimer),
            this.off(b, "resize", this._handlers.onThrottledResize));
        for (var d in this._plugins) this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(),
          this.$stage.unwrap(),
          this.$stage.children().contents().unwrap(),
          this.$stage.children().unwrap(),
          this.$element
            .removeClass(this.options.refreshClass)
            .removeClass(this.options.loadingClass)
            .removeClass(this.options.loadedClass)
            .removeClass(this.options.rtlClass)
            .removeClass(this.options.dragClass)
            .removeClass(this.options.grabClass)
            .attr(
              "class",
              this.$element
                .attr("class")
                .replace(
                  new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                  ""
                )
            )
            .removeData("owl.carousel");
      }),
      (e.prototype.op = function (a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
          case "<":
            return d ? a > c : c > a;
          case ">":
            return d ? c > a : a > c;
          case ">=":
            return d ? c >= a : a >= c;
          case "<=":
            return d ? a >= c : c >= a;
        }
      }),
      (e.prototype.on = function (a, b, c, d) {
        a.addEventListener
          ? a.addEventListener(b, c, d)
          : a.attachEvent && a.attachEvent("on" + b, c);
      }),
      (e.prototype.off = function (a, b, c, d) {
        a.removeEventListener
          ? a.removeEventListener(b, c, d)
          : a.detachEvent && a.detachEvent("on" + b, c);
      }),
      (e.prototype.trigger = function (b, c, d, f, g) {
        var h = { item: { count: this._items.length, index: this.current() } },
          i = a.camelCase(
            a
              .grep(["on", b, d], function (a) {
                return a;
              })
              .join("-")
              .toLowerCase()
          ),
          j = a.Event(
            [b, "owl", d || "carousel"].join(".").toLowerCase(),
            a.extend({ relatedTarget: this }, h, c)
          );
        return (
          this._supress[b] ||
            (a.each(this._plugins, function (a, b) {
              b.onTrigger && b.onTrigger(j);
            }),
            this.register({ type: e.Type.Event, name: b }),
            this.$element.trigger(j),
            this.settings &&
              "function" == typeof this.settings[i] &&
              this.settings[i].call(this, j)),
          j
        );
      }),
      (e.prototype.enter = function (b) {
        a.each(
          [b].concat(this._states.tags[b] || []),
          a.proxy(function (a, b) {
            this._states.current[b] === d && (this._states.current[b] = 0),
              this._states.current[b]++;
          }, this)
        );
      }),
      (e.prototype.leave = function (b) {
        a.each(
          [b].concat(this._states.tags[b] || []),
          a.proxy(function (a, b) {
            this._states.current[b]--;
          }, this)
        );
      }),
      (e.prototype.register = function (b) {
        if (b.type === e.Type.Event) {
          if (
            (a.event.special[b.name] || (a.event.special[b.name] = {}),
            !a.event.special[b.name].owl)
          ) {
            var c = a.event.special[b.name]._default;
            (a.event.special[b.name]._default = function (a) {
              return !c ||
                !c.apply ||
                (a.namespace && -1 !== a.namespace.indexOf("owl"))
                ? a.namespace && a.namespace.indexOf("owl") > -1
                : c.apply(this, arguments);
            }),
              (a.event.special[b.name].owl = !0);
          }
        } else
          b.type === e.Type.State &&
            (this._states.tags[b.name]
              ? (this._states.tags[b.name] = this._states.tags[b.name].concat(
                  b.tags
                ))
              : (this._states.tags[b.name] = b.tags),
            (this._states.tags[b.name] = a.grep(
              this._states.tags[b.name],
              a.proxy(function (c, d) {
                return a.inArray(c, this._states.tags[b.name]) === d;
              }, this)
            )));
      }),
      (e.prototype.suppress = function (b) {
        a.each(
          b,
          a.proxy(function (a, b) {
            this._supress[b] = !0;
          }, this)
        );
      }),
      (e.prototype.release = function (b) {
        a.each(
          b,
          a.proxy(function (a, b) {
            delete this._supress[b];
          }, this)
        );
      }),
      (e.prototype.pointer = function (a) {
        var c = { x: null, y: null };
        return (
          (a = a.originalEvent || a || b.event),
          (a =
            a.touches && a.touches.length
              ? a.touches[0]
              : a.changedTouches && a.changedTouches.length
              ? a.changedTouches[0]
              : a),
          a.pageX
            ? ((c.x = a.pageX), (c.y = a.pageY))
            : ((c.x = a.clientX), (c.y = a.clientY)),
          c
        );
      }),
      (e.prototype.isNumeric = function (a) {
        return !isNaN(parseFloat(a));
      }),
      (e.prototype.difference = function (a, b) {
        return { x: a.x - b.x, y: a.y - b.y };
      }),
      (a.fn.owlCarousel = function (b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
          var d = a(this),
            f = d.data("owl.carousel");
          f ||
            ((f = new e(this, "object" == typeof b && b)),
            d.data("owl.carousel", f),
            a.each(
              [
                "next",
                "prev",
                "to",
                "destroy",
                "refresh",
                "replace",
                "add",
                "remove",
              ],
              function (b, c) {
                f.register({ type: e.Type.Event, name: c }),
                  f.$element.on(
                    c + ".owl.carousel.core",
                    a.proxy(function (a) {
                      a.namespace &&
                        a.relatedTarget !== this &&
                        (this.suppress([c]),
                        f[c].apply(this, [].slice.call(arguments, 1)),
                        this.release([c]));
                    }, f)
                  );
              }
            )),
            "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
        });
      }),
      (a.fn.owlCarousel.Constructor = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (e.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.$element.is(":visible")),
          (this._interval = b.setInterval(
            a.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )));
      }),
      (e.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass("owl-hidden", !this._visible),
          this._visible &&
            this._core.invalidate("width") &&
            this._core.refresh());
      }),
      (e.prototype.destroy = function () {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this))
          "function" != typeof this[c] && (this[c] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
            a.proxy(function (b) {
              if (
                b.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((b.property && "position" == b.property.name) ||
                  "initialized" == b.type)
              )
                for (
                  var c = this._core.settings,
                    e = (c.center && Math.ceil(c.items / 2)) || c.items,
                    f = (c.center && -1 * e) || 0,
                    g =
                      (b.property && b.property.value !== d
                        ? b.property.value
                        : this._core.current()) + f,
                    h = this._core.clones().length,
                    i = a.proxy(function (a, b) {
                      this.load(b);
                    }, this);
                  f++ < e;

                )
                  this.load(h / 2 + this._core.relative(g)),
                    h && a.each(this._core.clones(this._core.relative(g)), i),
                    g++;
            }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { lazyLoad: !1 }),
      (e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c),
          e = d && d.find(".owl-lazy");
        !e ||
          a.inArray(d.get(0), this._loaded) > -1 ||
          (e.each(
            a.proxy(function (c, d) {
              var e,
                f = a(d),
                g =
                  (b.devicePixelRatio > 1 && f.attr("data-src-retina")) ||
                  f.attr("data-src");
              this._core.trigger("load", { element: f, url: g }, "lazy"),
                f.is("img")
                  ? f
                      .one(
                        "load.owl.lazy",
                        a.proxy(function () {
                          f.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              { element: f, url: g },
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", g)
                  : ((e = new Image()),
                    (e.onload = a.proxy(function () {
                      f.css({
                        "background-image": "url(" + g + ")",
                        opacity: "1",
                      }),
                        this._core.trigger(
                          "loaded",
                          { element: f, url: g },
                          "lazy"
                        );
                    }, this)),
                    (e.src = g));
            }, this)
          ),
          this._loaded.push(d.get(0)));
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (
            a
          ) {
            a.namespace && this._core.settings.autoHeight && this.update();
          },
          this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              "position" == a.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              a.element.closest("." + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (e.prototype.update = function () {
        var b = this._core._current,
          c = b + this._core.settings.items,
          d = this._core.$stage.children().toArray().slice(b, c),
          e = [],
          f = 0;
        a.each(d, function (b, c) {
          e.push(a(c).height());
        }),
          (f = Math.max.apply(null, e)),
          this._core.$stage
            .parent()
            .height(f)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"],
              });
          }, this),
          "resize.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              a.preventDefault();
          }, this),
          "refreshed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.is("resizing") &&
              this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              "position" === a.property.name &&
              this._playing &&
              this.stop();
          }, this),
          "prepared.owl.carousel": a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content).find(".owl-video");
              c.length &&
                (c.css("display", "none"), this.fetch(c, a(b.content)));
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          a.proxy(function (a) {
            this.play(a);
          }, this)
        );
    };
    (e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (e.prototype.fetch = function (a, b) {
        var c = (function () {
            return a.attr("data-vimeo-id")
              ? "vimeo"
              : a.attr("data-vzaar-id")
              ? "vzaar"
              : "youtube";
          })(),
          d =
            a.attr("data-vimeo-id") ||
            a.attr("data-youtube-id") ||
            a.attr("data-vzaar-id"),
          e = a.attr("data-width") || this._core.settings.videoWidth,
          f = a.attr("data-height") || this._core.settings.videoHeight,
          g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (
          ((d = g.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          )),
          d[3].indexOf("youtu") > -1)
        )
          c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else {
          if (!(d[3].indexOf("vzaar") > -1))
            throw new Error("Video URL not supported.");
          c = "vzaar";
        }
        (d = d[6]),
          (this._videos[g] = { type: c, id: d, width: e, height: f }),
          b.attr("data-video", g),
          this.thumbnail(a, this._videos[g]);
      }),
      (e.prototype.thumbnail = function (b, c) {
        var d,
          e,
          f,
          g =
            c.width && c.height
              ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"'
              : "",
          h = b.find("img"),
          i = "src",
          j = "",
          k = this._core.settings,
          l = function (a) {
            (e = '<div class="owl-video-play-icon"></div>'),
              (d = k.lazyLoad
                ? '<div class="owl-video-tn ' +
                  j +
                  '" ' +
                  i +
                  '="' +
                  a +
                  '"></div>'
                : '<div class="owl-video-tn" style="opacity:1;background-image:url(' +
                  a +
                  ')"></div>'),
              b.after(d),
              b.after(e);
          };
        return (
          b.wrap('<div class="owl-video-wrapper"' + g + "></div>"),
          this._core.settings.lazyLoad && ((i = "data-src"), (j = "owl-lazy")),
          h.length
            ? (l(h.attr(i)), h.remove(), !1)
            : void ("youtube" === c.type
                ? ((f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg"),
                  l(f))
                : "vimeo" === c.type
                ? a.ajax({
                    type: "GET",
                    url: "//vimeo.com/api/v2/video/" + c.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function (a) {
                      (f = a[0].thumbnail_large), l(f);
                    },
                  })
                : "vzaar" === c.type &&
                  a.ajax({
                    type: "GET",
                    url: "//vzaar.com/api/videos/" + c.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function (a) {
                      (f = a.framegrab_url), l(f);
                    },
                  }))
        );
      }),
      (e.prototype.stop = function () {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video");
      }),
      (e.prototype.play = function (b) {
        var c,
          d = a(b.target),
          e = d.closest("." + this._core.settings.itemClass),
          f = this._videos[e.attr("data-video")],
          g = f.width || "100%",
          h = f.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          (e = this._core.items(this._core.relative(e.index()))),
          this._core.reset(e.index()),
          "youtube" === f.type
            ? (c =
                '<iframe width="' +
                g +
                '" height="' +
                h +
                '" src="//www.youtube.com/embed/' +
                f.id +
                "?autoplay=1&v=" +
                f.id +
                '" frameborder="0" allowfullscreen></iframe>')
            : "vimeo" === f.type
            ? (c =
                '<iframe src="//player.vimeo.com/video/' +
                f.id +
                '?autoplay=1" width="' +
                g +
                '" height="' +
                h +
                '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
            : "vzaar" === f.type &&
              (c =
                '<iframe frameborder="0"height="' +
                h +
                '"width="' +
                g +
                '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' +
                f.id +
                '/player?autoplay=true"></iframe>'),
          a('<div class="owl-video-frame">' + c + "</div>").insertAfter(
            e.find(".owl-video")
          ),
          (this._playing = e.addClass("owl-video-playing")));
      }),
      (e.prototype.isInFullScreen = function () {
        var b =
          c.fullscreenElement ||
          c.mozFullScreenElement ||
          c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame");
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Video = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this.core = b),
        (this.core.options = a.extend({}, e.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = d),
        (this.next = d),
        (this.handlers = {
          "change.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              "position" == a.property.name &&
              ((this.previous = this.core.current()),
              (this.next = a.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
            a.proxy(function (a) {
              a.namespace && (this.swapping = "translated" == a.type);
            }, this),
          "translate.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (e.Defaults = { animateOut: !1, animateIn: !1 }),
      (e.prototype.swap = function () {
        if (
          1 === this.core.settings.items &&
          a.support.animation &&
          a.support.transition
        ) {
          this.core.speed(0);
          var b,
            c = a.proxy(this.clear, this),
            d = this.core.$stage.children().eq(this.previous),
            e = this.core.$stage.children().eq(this.next),
            f = this.core.settings.animateIn,
            g = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (g &&
              ((b =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              d
                .one(a.support.animation.end, c)
                .css({ left: b + "px" })
                .addClass("animated owl-animated-out")
                .addClass(g)),
            f &&
              e
                .one(a.support.animation.end, c)
                .addClass("animated owl-animated-in")
                .addClass(f));
        }
      }),
      (e.prototype.clear = function (b) {
        a(b.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._timeout = null),
        (this._paused = !1),
        (this._handlers = {
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace && "settings" === a.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : a.namespace &&
                "position" === a.property.name &&
                this._core.settings.autoplay &&
                this._setAutoPlayInterval();
          }, this),
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": a.proxy(function (a, b, c) {
            a.namespace && this.play(b, c);
          }, this),
          "stop.owl.autoplay": a.proxy(function (a) {
            a.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "mouseleave.owl.autoplay": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.play();
          }, this),
          "touchstart.owl.core": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "touchend.owl.core": a.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = a.extend({}, e.Defaults, this._core.options));
    };
    (e.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (e.prototype.play = function (a, b) {
        (this._paused = !1),
          this._core.is("rotating") ||
            (this._core.enter("rotating"), this._setAutoPlayInterval());
      }),
      (e.prototype._getNextTimeout = function (d, e) {
        return (
          this._timeout && b.clearTimeout(this._timeout),
          b.setTimeout(
            a.proxy(function () {
              this._paused ||
                this._core.is("busy") ||
                this._core.is("interacting") ||
                c.hidden ||
                this._core.next(e || this._core.settings.autoplaySpeed);
            }, this),
            d || this._core.settings.autoplayTimeout
          )
        );
      }),
      (e.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout();
      }),
      (e.prototype.stop = function () {
        this._core.is("rotating") &&
          (b.clearTimeout(this._timeout), this._core.leave("rotating"));
      }),
      (e.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0);
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    var e = function (b) {
      (this._core = b),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          "prepared.owl.carousel": a.proxy(function (b) {
            b.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  a(b.content)
                    .find("[data-dot]")
                    .addBack("[data-dot]")
                    .attr("data-dot") +
                  "</div>"
              );
          }, this),
          "added.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 1);
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace && "position" == a.property.name && this.draw();
          }, this),
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation"));
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (e.Defaults = {
      nav: !1,
      navText: ["prev", "next"],
      navSpeed: !1,
      navElement: "div",
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (e.prototype.initialize = function () {
        var b,
          c = this._core.settings;
        (this._controls.$relative = (
          c.navContainer
            ? a(c.navContainer)
            : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)
        ).addClass("disabled")),
          (this._controls.$previous = a("<" + c.navElement + ">")
            .addClass(c.navClass[0])
            .html(c.navText[0])
            .prependTo(this._controls.$relative)
            .on(
              "click",
              a.proxy(function (a) {
                this.prev(c.navSpeed);
              }, this)
            )),
          (this._controls.$next = a("<" + c.navElement + ">")
            .addClass(c.navClass[1])
            .html(c.navText[1])
            .appendTo(this._controls.$relative)
            .on(
              "click",
              a.proxy(function (a) {
                this.next(c.navSpeed);
              }, this)
            )),
          c.dotsData ||
            (this._templates = [
              a("<div>")
                .addClass(c.dotClass)
                .append(a("<span>"))
                .prop("outerHTML"),
            ]),
          (this._controls.$absolute = (
            c.dotsContainer
              ? a(c.dotsContainer)
              : a("<div>").addClass(c.dotsClass).appendTo(this.$element)
          ).addClass("disabled")),
          this._controls.$absolute.on(
            "click",
            "div",
            a.proxy(function (b) {
              var d = a(b.target).parent().is(this._controls.$absolute)
                ? a(b.target).index()
                : a(b.target).parent().index();
              b.preventDefault(), this.to(d, c.dotsSpeed);
            }, this)
          );
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
      }),
      (e.prototype.destroy = function () {
        var a, b, c, d;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))
          "function" != typeof this[c] && (this[c] = null);
      }),
      (e.prototype.update = function () {
        var a,
          b,
          c,
          d = this._core.clones().length / 2,
          e = d + this._core.items().length,
          f = this._core.maximum(!0),
          g = this._core.settings,
          h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if (
          ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
          g.dots || "page" == g.slideBy)
        )
          for (this._pages = [], a = d, b = 0, c = 0; e > a; a++) {
            if (b >= h || 0 === b) {
              if (
                (this._pages.push({
                  start: Math.min(f, a - d),
                  end: a - d + h - 1,
                }),
                Math.min(f, a - d) === f)
              )
                break;
              (b = 0), ++c;
            }
            b += this._core.mergers(this._core.relative(a));
          }
      }),
      (e.prototype.draw = function () {
        var b,
          c = this._core.settings,
          d = this._core.items().length <= c.items,
          e = this._core.relative(this._core.current()),
          f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d),
          c.nav &&
            (this._controls.$previous.toggleClass(
              "disabled",
              !f && e <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              "disabled",
              !f && e >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass("disabled", !c.dots || d),
          c.dots &&
            ((b =
              this._pages.length - this._controls.$absolute.children().length),
            c.dotsData && 0 !== b
              ? this._controls.$absolute.html(this._templates.join(""))
              : b > 0
              ? this._controls.$absolute.append(
                  new Array(b + 1).join(this._templates[0])
                )
              : 0 > b && this._controls.$absolute.children().slice(b).remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute
              .children()
              .eq(a.inArray(this.current(), this._pages))
              .addClass("active"));
      }),
      (e.prototype.onTrigger = function (b) {
        var c = this._core.settings;
        b.page = {
          index: a.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            c &&
            (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items),
        };
      }),
      (e.prototype.current = function () {
        var b = this._core.relative(this._core.current());
        return a
          .grep(
            this._pages,
            a.proxy(function (a, c) {
              return a.start <= b && a.end >= b;
            }, this)
          )
          .pop();
      }),
      (e.prototype.getPosition = function (b) {
        var c,
          d,
          e = this._core.settings;
        return (
          "page" == e.slideBy
            ? ((c = a.inArray(this.current(), this._pages)),
              (d = this._pages.length),
              b ? ++c : --c,
              (c = this._pages[((c % d) + d) % d].start))
            : ((c = this._core.relative(this._core.current())),
              (d = this._core.items().length),
              b ? (c += e.slideBy) : (c -= e.slideBy)),
          c
        );
      }),
      (e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
      }),
      (e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
      }),
      (e.prototype.to = function (b, c, d) {
        var e;
        !d && this._pages.length
          ? ((e = this._pages.length),
            a.proxy(this._overrides.to, this._core)(
              this._pages[((b % e) + e) % e].start,
              c
            ))
          : a.proxy(this._overrides.to, this._core)(b, c);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    var e = function (c) {
      (this._core = c),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (c) {
            c.namespace &&
              "URLHash" === this._core.settings.startPosition &&
              a(b).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content)
                .find("[data-hash]")
                .addBack("[data-hash]")
                .attr("data-hash");
              if (!c) return;
              this._hashes[c] = b.content;
            }
          }, this),
          "changed.owl.carousel": a.proxy(function (c) {
            if (c.namespace && "position" === c.property.name) {
              var d = this._core.items(
                  this._core.relative(this._core.current())
                ),
                e = a
                  .map(this._hashes, function (a, b) {
                    return a === d ? b : null;
                  })
                  .join();
              if (!e || b.location.hash.slice(1) === e) return;
              b.location.hash = e;
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        a(b).on(
          "hashchange.owl.navigation",
          a.proxy(function (a) {
            var c = b.location.hash.substring(1),
              e = this._core.$stage.children(),
              f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d &&
              f !== this._core.current() &&
              this._core.to(this._core.relative(f), !1, !0);
          }, this)
        );
    };
    (e.Defaults = { URLhashListener: !1 }),
      (e.prototype.destroy = function () {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))
          "function" != typeof this[d] && (this[d] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    function e(b, c) {
      var e = !1,
        f = b.charAt(0).toUpperCase() + b.slice(1);
      return (
        a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
          return g[b] !== d ? ((e = c ? b : !0), !1) : void 0;
        }),
        e
      );
    }
    function f(a) {
      return e(a, !0);
    }
    var g = a("<support>").get(0).style,
      h = "Webkit Moz O ms".split(" "),
      i = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend",
          },
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend",
          },
        },
      },
      j = {
        csstransforms: function () {
          return !!e("transform");
        },
        csstransforms3d: function () {
          return !!e("perspective");
        },
        csstransitions: function () {
          return !!e("transition");
        },
        cssanimations: function () {
          return !!e("animation");
        },
      };
    j.csstransitions() &&
      ((a.support.transition = new String(f("transition"))),
      (a.support.transition.end = i.transition.end[a.support.transition])),
      j.cssanimations() &&
        ((a.support.animation = new String(f("animation"))),
        (a.support.animation.end = i.animation.end[a.support.animation])),
      j.csstransforms() &&
        ((a.support.transform = new String(f("transform"))),
        (a.support.transform3d = j.csstransforms3d()));
  })(window.Zepto || window.jQuery, window, document),
  !(function (a) {
    "use strict";
    a.jscroll = {
      defaults: {
        debug: !1,
        autoTrigger: !0,
        autoTriggerUntil: !1,
        loadingHtml: "<small>Loading...</small>",
        loadingFunction: !1,
        padding: 0,
        nextSelector: "a:last",
        contentSelector: "",
        pagingSelector: "",
        callback: !1,
      },
    };
    var b = function (b, c) {
      var d = b.data("jscroll"),
        e = "function" == typeof c ? { callback: c } : c,
        f = a.extend({}, a.jscroll.defaults, e, d || {}),
        g = "visible" === b.css("overflow-y"),
        h = b.find(f.nextSelector).first(),
        i = a(window),
        j = a("body"),
        k = g ? i : b,
        l = a.trim(h.attr("href") + " " + f.contentSelector),
        m = function () {
          var b = a(f.loadingHtml).filter("img").attr("src");
          if (b) {
            var c = new Image();
            c.src = b;
          }
        },
        n = function () {
          b.find(".jscroll-inner").length ||
            b.contents().wrapAll('<div class="jscroll-inner" />');
        },
        o = function (a) {
          var b;
          f.pagingSelector
            ? a.closest(f.pagingSelector).hide()
            : ((b = a
                .parent()
                .not(".jscroll-inner,.jscroll-added")
                .addClass("jscroll-next-parent")
                .hide()),
              b.length ||
                a.wrap('<div class="jscroll-next-parent" />').parent().hide());
        },
        p = function () {
          return k
            .unbind(".jscroll")
            .removeData("jscroll")
            .find(".jscroll-inner")
            .children()
            .unwrap()
            .filter(".jscroll-added")
            .children()
            .unwrap();
        },
        q = function () {
          if (b.is(":visible")) {
            n();
            var a = b.find("div.jscroll-inner").first(),
              c = b.data("jscroll"),
              d = parseInt(b.css("borderTopWidth"), 10),
              e = isNaN(d) ? 0 : d,
              h = parseInt(b.css("paddingTop"), 10) + e,
              i = g ? k.scrollTop() : b.offset().top,
              j = a.length ? a.offset().top : 0,
              l = Math.ceil(i - j + k.height() + h);
            if (!c.waiting && l + f.padding >= a.outerHeight())
              return (
                u(
                  "info",
                  "jScroll:",
                  a.outerHeight() - l,
                  "from bottom. Loading next request..."
                ),
                t()
              );
          }
        },
        r = function (a) {
          return (
            (a = a || b.data("jscroll")),
            a && a.nextHref
              ? (s(), !0)
              : (u("warn", "jScroll: nextSelector not found - destroying"),
                p(),
                !1)
          );
        },
        s = function () {
          var c = b.find(f.nextSelector).first();
          if (c.length)
            if (
              f.autoTrigger &&
              (f.autoTriggerUntil === !1 || f.autoTriggerUntil > 0)
            ) {
              o(c);
              var d = j.height() - b.offset().top,
                e = b.height() < d ? b.height() : d,
                g =
                  b.offset().top - i.scrollTop() > 0
                    ? i.height() - (b.offset().top - a(window).scrollTop())
                    : i.height();
              g >= e && q(),
                k.unbind(".jscroll").bind("scroll.jscroll", function () {
                  return q();
                }),
                f.autoTriggerUntil > 0 && f.autoTriggerUntil--;
            } else
              k.unbind(".jscroll"),
                c.bind("click.jscroll", function () {
                  return o(c), t(), !1;
                });
        },
        t = function () {
          var c = b.find("div.jscroll-inner").first(),
            d = b.data("jscroll");
          return (
            (d.waiting = !0),
            c
              .append('<div class="jscroll-added" />')
              .children(".jscroll-added")
              .last()
              .html(
                '<div class="jscroll-loading" id="jscroll-loading">' +
                  f.loadingHtml +
                  "</div>"
              )
              .promise()
              .done(function () {
                f.loadingFunction && f.loadingFunction();
              }),
            b.animate({ scrollTop: c.outerHeight() }, 0, function () {
              c.find("div.jscroll-added")
                .last()
                .load(d.nextHref, function (c, e) {
                  if ("error" === e) return p();
                  var g = a(this).find(f.nextSelector).first();
                  (d.waiting = !1),
                    (d.nextHref = g.attr("href")
                      ? a.trim(g.attr("href") + " " + f.contentSelector)
                      : !1),
                    a(".jscroll-next-parent", b).remove(),
                    r(),
                    f.callback && f.callback.call(this),
                    u("dir", d);
                });
            })
          );
        },
        u = function (a) {
          if (
            f.debug &&
            "object" == typeof console &&
            ("object" == typeof a || "function" == typeof console[a])
          )
            if ("object" == typeof a) {
              var b = [];
              for (var c in a)
                "function" == typeof console[c]
                  ? ((b = a[c].length ? a[c] : [a[c]]),
                    console[c].apply(console, b))
                  : console.log.apply(console, b);
            } else
              console[a].apply(
                console,
                Array.prototype.slice.call(arguments, 1)
              );
        };
      return (
        b.data(
          "jscroll",
          a.extend({}, d, { initialized: !0, waiting: !1, nextHref: l })
        ),
        n(),
        m(),
        s(),
        a.extend(b.jscroll, { destroy: p }),
        b
      );
    };
    a.fn.jscroll = function (c) {
      return this.each(function () {
        var d,
          e = a(this),
          f = e.data("jscroll");
        (f && f.initialized) || (d = new b(e, c));
      });
    };
  })(jQuery),
  function () {
    var a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v,
      w,
      x,
      y,
      z,
      A,
      B,
      C,
      D,
      E,
      F,
      G,
      H,
      I,
      J,
      K,
      L,
      M,
      N,
      O,
      P,
      Q,
      R,
      S,
      T,
      U,
      V,
      W,
      X = [].slice,
      Y = {}.hasOwnProperty,
      Z = function (a, b) {
        function c() {
          this.constructor = a;
        }
        for (var d in b) Y.call(b, d) && (a[d] = b[d]);
        return (
          (c.prototype = b.prototype),
          (a.prototype = new c()),
          (a.__super__ = b.prototype),
          a
        );
      },
      $ =
        [].indexOf ||
        function (a) {
          for (var b = 0, c = this.length; c > b; b++)
            if (b in this && this[b] === a) return b;
          return -1;
        };
    for (
      u = {
        catchupTime: 100,
        initialRate: 0.03,
        minTime: 250,
        ghostTime: 100,
        maxProgressPerFrame: 20,
        easeFactor: 1.25,
        startOnPageLoad: !0,
        restartOnPushState: !0,
        restartOnRequestAfter: 500,
        target: "body",
        elements: { checkInterval: 100, selectors: ["body"] },
        eventLag: { minSamples: 10, sampleCount: 3, lagThreshold: 3 },
        ajax: { trackMethods: ["GET"], trackWebSockets: !0, ignoreURLs: [] },
      },
        C = function () {
          var a;
          return null !=
            (a =
              "undefined" != typeof performance &&
              null !== performance &&
              "function" == typeof performance.now
                ? performance.now()
                : void 0)
            ? a
            : +new Date();
        },
        E =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.msRequestAnimationFrame,
        t = window.cancelAnimationFrame || window.mozCancelAnimationFrame,
        null == E &&
          ((E = function (a) {
            return setTimeout(a, 50);
          }),
          (t = function (a) {
            return clearTimeout(a);
          })),
        G = function (a) {
          var b, c;
          return (
            (b = C()),
            (c = function () {
              var d;
              return (
                (d = C() - b),
                d >= 33
                  ? ((b = C()),
                    a(d, function () {
                      return E(c);
                    }))
                  : setTimeout(c, 33 - d)
              );
            })()
          );
        },
        F = function () {
          var a, b, c;
          return (
            (c = arguments[0]),
            (b = arguments[1]),
            (a = 3 <= arguments.length ? X.call(arguments, 2) : []),
            "function" == typeof c[b] ? c[b].apply(c, a) : c[b]
          );
        },
        v = function () {
          var a, b, c, d, e, f, g;
          for (
            b = arguments[0],
              d = 2 <= arguments.length ? X.call(arguments, 1) : [],
              f = 0,
              g = d.length;
            g > f;
            f++
          )
            if ((c = d[f]))
              for (a in c)
                Y.call(c, a) &&
                  ((e = c[a]),
                  null != b[a] &&
                  "object" == typeof b[a] &&
                  null != e &&
                  "object" == typeof e
                    ? v(b[a], e)
                    : (b[a] = e));
          return b;
        },
        q = function (a) {
          var b, c, d, e, f;
          for (c = b = 0, e = 0, f = a.length; f > e; e++)
            (d = a[e]), (c += Math.abs(d)), b++;
          return c / b;
        },
        x = function (a, b) {
          var c, d, e;
          if (
            (null == a && (a = "options"),
            null == b && (b = !0),
            (e = document.querySelector("[data-pace-" + a + "]")))
          ) {
            if (((c = e.getAttribute("data-pace-" + a)), !b)) return c;
            try {
              return JSON.parse(c);
            } catch (f) {
              return (
                (d = f),
                "undefined" != typeof console && null !== console
                  ? console.error("Error parsing inline pace options", d)
                  : void 0
              );
            }
          }
        },
        g = (function () {
          function a() {}
          return (
            (a.prototype.on = function (a, b, c, d) {
              var e;
              return (
                null == d && (d = !1),
                null == this.bindings && (this.bindings = {}),
                null == (e = this.bindings)[a] && (e[a] = []),
                this.bindings[a].push({ handler: b, ctx: c, once: d })
              );
            }),
            (a.prototype.once = function (a, b, c) {
              return this.on(a, b, c, !0);
            }),
            (a.prototype.off = function (a, b) {
              var c, d, e;
              if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
                if (null == b) return delete this.bindings[a];
                for (c = 0, e = []; c < this.bindings[a].length; )
                  e.push(
                    this.bindings[a][c].handler === b
                      ? this.bindings[a].splice(c, 1)
                      : c++
                  );
                return e;
              }
            }),
            (a.prototype.trigger = function () {
              var a, b, c, d, e, f, g, h, i;
              if (
                ((c = arguments[0]),
                (a = 2 <= arguments.length ? X.call(arguments, 1) : []),
                null != (g = this.bindings) ? g[c] : void 0)
              ) {
                for (e = 0, i = []; e < this.bindings[c].length; )
                  (h = this.bindings[c][e]),
                    (d = h.handler),
                    (b = h.ctx),
                    (f = h.once),
                    d.apply(null != b ? b : this, a),
                    i.push(f ? this.bindings[c].splice(e, 1) : e++);
                return i;
              }
            }),
            a
          );
        })(),
        j = window.Pace || {},
        window.Pace = j,
        v(j, g.prototype),
        D = j.options = v({}, u, window.paceOptions, x()),
        U = ["ajax", "document", "eventLag", "elements"],
        Q = 0,
        S = U.length;
      S > Q;
      Q++
    )
      (K = U[Q]), D[K] === !0 && (D[K] = u[K]);
    (i = (function (a) {
      function b() {
        return (V = b.__super__.constructor.apply(this, arguments));
      }
      return Z(b, a), b;
    })(Error)),
      (b = (function () {
        function a() {
          this.progress = 0;
        }
        return (
          (a.prototype.getElement = function () {
            var a;
            if (null == this.el) {
              if (((a = document.querySelector(D.target)), !a)) throw new i();
              (this.el = document.createElement("div")),
                (this.el.className = "pace pace-active"),
                (document.body.className = document.body.className.replace(
                  /pace-done/g,
                  ""
                )),
                (document.body.className += " pace-running"),
                (this.el.innerHTML =
                  '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>'),
                null != a.firstChild
                  ? a.insertBefore(this.el, a.firstChild)
                  : a.appendChild(this.el);
            }
            return this.el;
          }),
          (a.prototype.finish = function () {
            var a;
            return (
              (a = this.getElement()),
              (a.className = a.className.replace("pace-active", "")),
              (a.className += " pace-inactive"),
              (document.body.className = document.body.className.replace(
                "pace-running",
                ""
              )),
              (document.body.className += " pace-done")
            );
          }),
          (a.prototype.update = function (a) {
            return (this.progress = a), this.render();
          }),
          (a.prototype.destroy = function () {
            try {
              this.getElement().parentNode.removeChild(this.getElement());
            } catch (a) {
              i = a;
            }
            return (this.el = void 0);
          }),
          (a.prototype.render = function () {
            var a, b, c, d, e, f, g;
            if (null == document.querySelector(D.target)) return !1;
            for (
              a = this.getElement(),
                d = "translate3d(" + this.progress + "%, 0, 0)",
                g = ["webkitTransform", "msTransform", "transform"],
                e = 0,
                f = g.length;
              f > e;
              e++
            )
              (b = g[e]), (a.children[0].style[b] = d);
            return (
              (!this.lastRenderedProgress ||
                this.lastRenderedProgress | (0 !== this.progress) | 0) &&
                (a.children[0].setAttribute(
                  "data-progress-text",
                  "" + (0 | this.progress) + "%"
                ),
                this.progress >= 100
                  ? (c = "99")
                  : ((c = this.progress < 10 ? "0" : ""),
                    (c += 0 | this.progress)),
                a.children[0].setAttribute("data-progress", "" + c)),
              (this.lastRenderedProgress = this.progress)
            );
          }),
          (a.prototype.done = function () {
            return this.progress >= 100;
          }),
          a
        );
      })()),
      (h = (function () {
        function a() {
          this.bindings = {};
        }
        return (
          (a.prototype.trigger = function (a, b) {
            var c, d, e, f, g;
            if (null != this.bindings[a]) {
              for (
                f = this.bindings[a], g = [], d = 0, e = f.length;
                e > d;
                d++
              )
                (c = f[d]), g.push(c.call(this, b));
              return g;
            }
          }),
          (a.prototype.on = function (a, b) {
            var c;
            return (
              null == (c = this.bindings)[a] && (c[a] = []),
              this.bindings[a].push(b)
            );
          }),
          a
        );
      })()),
      (P = window.XMLHttpRequest),
      (O = window.XDomainRequest),
      (N = window.WebSocket),
      (w = function (a, b) {
        var c, d, e;
        e = [];
        for (d in b.prototype)
          try {
            e.push(
              null == a[d] && "function" != typeof b[d]
                ? "function" == typeof Object.defineProperty
                  ? Object.defineProperty(a, d, {
                      get: function () {
                        return b.prototype[d];
                      },
                      configurable: !0,
                      enumerable: !0,
                    })
                  : (a[d] = b.prototype[d])
                : void 0
            );
          } catch (f) {
            c = f;
          }
        return e;
      }),
      (A = []),
      (j.ignore = function () {
        var a, b, c;
        return (
          (b = arguments[0]),
          (a = 2 <= arguments.length ? X.call(arguments, 1) : []),
          A.unshift("ignore"),
          (c = b.apply(null, a)),
          A.shift(),
          c
        );
      }),
      (j.track = function () {
        var a, b, c;
        return (
          (b = arguments[0]),
          (a = 2 <= arguments.length ? X.call(arguments, 1) : []),
          A.unshift("track"),
          (c = b.apply(null, a)),
          A.shift(),
          c
        );
      }),
      (J = function (a) {
        var b;
        if ((null == a && (a = "GET"), "track" === A[0])) return "force";
        if (!A.length && D.ajax) {
          if ("socket" === a && D.ajax.trackWebSockets) return !0;
          if (((b = a.toUpperCase()), $.call(D.ajax.trackMethods, b) >= 0))
            return !0;
        }
        return !1;
      }),
      (k = (function (a) {
        function b() {
          var a,
            c = this;
          b.__super__.constructor.apply(this, arguments),
            (a = function (a) {
              var b;
              return (
                (b = a.open),
                (a.open = function (d, e) {
                  return (
                    J(d) &&
                      c.trigger("request", { type: d, url: e, request: a }),
                    b.apply(a, arguments)
                  );
                })
              );
            }),
            (window.XMLHttpRequest = function (b) {
              var c;
              return (c = new P(b)), a(c), c;
            });
          try {
            w(window.XMLHttpRequest, P);
          } catch (d) {}
          if (null != O) {
            window.XDomainRequest = function () {
              var b;
              return (b = new O()), a(b), b;
            };
            try {
              w(window.XDomainRequest, O);
            } catch (d) {}
          }
          if (null != N && D.ajax.trackWebSockets) {
            window.WebSocket = function (a, b) {
              var d;
              return (
                (d = null != b ? new N(a, b) : new N(a)),
                J("socket") &&
                  c.trigger("request", {
                    type: "socket",
                    url: a,
                    protocols: b,
                    request: d,
                  }),
                d
              );
            };
            try {
              w(window.WebSocket, N);
            } catch (d) {}
          }
        }
        return Z(b, a), b;
      })(h)),
      (R = null),
      (y = function () {
        return null == R && (R = new k()), R;
      }),
      (I = function (a) {
        var b, c, d, e;
        for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++)
          if (((b = e[c]), "string" == typeof b)) {
            if (-1 !== a.indexOf(b)) return !0;
          } else if (b.test(a)) return !0;
        return !1;
      }),
      y().on("request", function (b) {
        var c, d, e, f, g;
        return (
          (f = b.type),
          (e = b.request),
          (g = b.url),
          I(g)
            ? void 0
            : j.running || (D.restartOnRequestAfter === !1 && "force" !== J(f))
            ? void 0
            : ((d = arguments),
              (c = D.restartOnRequestAfter || 0),
              "boolean" == typeof c && (c = 0),
              setTimeout(function () {
                var b, c, g, h, i, k;
                if (
                  (b =
                    "socket" === f
                      ? e.readyState < 2
                      : 0 < (h = e.readyState) && 4 > h)
                ) {
                  for (
                    j.restart(), i = j.sources, k = [], c = 0, g = i.length;
                    g > c;
                    c++
                  ) {
                    if (((K = i[c]), K instanceof a)) {
                      K.watch.apply(K, d);
                      break;
                    }
                    k.push(void 0);
                  }
                  return k;
                }
              }, c))
        );
      }),
      (a = (function () {
        function a() {
          var a = this;
          (this.elements = []),
            y().on("request", function () {
              return a.watch.apply(a, arguments);
            });
        }
        return (
          (a.prototype.watch = function (a) {
            var b, c, d, e;
            return (
              (d = a.type),
              (b = a.request),
              (e = a.url),
              I(e)
                ? void 0
                : ((c = "socket" === d ? new n(b) : new o(b)),
                  this.elements.push(c))
            );
          }),
          a
        );
      })()),
      (o = (function () {
        function a(a) {
          var b,
            c,
            d,
            e,
            f,
            g,
            h = this;
          if (((this.progress = 0), null != window.ProgressEvent))
            for (
              c = null,
                a.addEventListener(
                  "progress",
                  function (a) {
                    return (h.progress = a.lengthComputable
                      ? (100 * a.loaded) / a.total
                      : h.progress + (100 - h.progress) / 2);
                  },
                  !1
                ),
                g = ["load", "abort", "timeout", "error"],
                d = 0,
                e = g.length;
              e > d;
              d++
            )
              (b = g[d]),
                a.addEventListener(
                  b,
                  function () {
                    return (h.progress = 100);
                  },
                  !1
                );
          else
            (f = a.onreadystatechange),
              (a.onreadystatechange = function () {
                var b;
                return (
                  0 === (b = a.readyState) || 4 === b
                    ? (h.progress = 100)
                    : 3 === a.readyState && (h.progress = 50),
                  "function" == typeof f ? f.apply(null, arguments) : void 0
                );
              });
        }
        return a;
      })()),
      (n = (function () {
        function a(a) {
          var b,
            c,
            d,
            e,
            f = this;
          for (
            this.progress = 0, e = ["error", "open"], c = 0, d = e.length;
            d > c;
            c++
          )
            (b = e[c]),
              a.addEventListener(
                b,
                function () {
                  return (f.progress = 100);
                },
                !1
              );
        }
        return a;
      })()),
      (d = (function () {
        function a(a) {
          var b, c, d, f;
          for (
            null == a && (a = {}),
              this.elements = [],
              null == a.selectors && (a.selectors = []),
              f = a.selectors,
              c = 0,
              d = f.length;
            d > c;
            c++
          )
            (b = f[c]), this.elements.push(new e(b));
        }
        return a;
      })()),
      (e = (function () {
        function a(a) {
          (this.selector = a), (this.progress = 0), this.check();
        }
        return (
          (a.prototype.check = function () {
            var a = this;
            return document.querySelector(this.selector)
              ? this.done()
              : setTimeout(function () {
                  return a.check();
                }, D.elements.checkInterval);
          }),
          (a.prototype.done = function () {
            return (this.progress = 100);
          }),
          a
        );
      })()),
      (c = (function () {
        function a() {
          var a,
            b,
            c = this;
          (this.progress =
            null != (b = this.states[document.readyState]) ? b : 100),
            (a = document.onreadystatechange),
            (document.onreadystatechange = function () {
              return (
                null != c.states[document.readyState] &&
                  (c.progress = c.states[document.readyState]),
                "function" == typeof a ? a.apply(null, arguments) : void 0
              );
            });
        }
        return (
          (a.prototype.states = { loading: 0, interactive: 50, complete: 100 }),
          a
        );
      })()),
      (f = (function () {
        function a() {
          var a,
            b,
            c,
            d,
            e,
            f = this;
          (this.progress = 0),
            (a = 0),
            (e = []),
            (d = 0),
            (c = C()),
            (b = setInterval(function () {
              var g;
              return (
                (g = C() - c - 50),
                (c = C()),
                e.push(g),
                e.length > D.eventLag.sampleCount && e.shift(),
                (a = q(e)),
                ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold
                  ? ((f.progress = 100), clearInterval(b))
                  : (f.progress = 100 * (3 / (a + 3)))
              );
            }, 50));
        }
        return a;
      })()),
      (m = (function () {
        function a(a) {
          (this.source = a),
            (this.last = this.sinceLastUpdate = 0),
            (this.rate = D.initialRate),
            (this.catchup = 0),
            (this.progress = this.lastProgress = 0),
            null != this.source && (this.progress = F(this.source, "progress"));
        }
        return (
          (a.prototype.tick = function (a, b) {
            var c;
            return (
              null == b && (b = F(this.source, "progress")),
              b >= 100 && (this.done = !0),
              b === this.last
                ? (this.sinceLastUpdate += a)
                : (this.sinceLastUpdate &&
                    (this.rate = (b - this.last) / this.sinceLastUpdate),
                  (this.catchup = (b - this.progress) / D.catchupTime),
                  (this.sinceLastUpdate = 0),
                  (this.last = b)),
              b > this.progress && (this.progress += this.catchup * a),
              (c = 1 - Math.pow(this.progress / 100, D.easeFactor)),
              (this.progress += c * this.rate * a),
              (this.progress = Math.min(
                this.lastProgress + D.maxProgressPerFrame,
                this.progress
              )),
              (this.progress = Math.max(0, this.progress)),
              (this.progress = Math.min(100, this.progress)),
              (this.lastProgress = this.progress),
              this.progress
            );
          }),
          a
        );
      })()),
      (L = null),
      (H = null),
      (r = null),
      (M = null),
      (p = null),
      (s = null),
      (j.running = !1),
      (z = function () {
        return D.restartOnPushState ? j.restart() : void 0;
      }),
      null != window.history.pushState &&
        ((T = window.history.pushState),
        (window.history.pushState = function () {
          return z(), T.apply(window.history, arguments);
        })),
      null != window.history.replaceState &&
        ((W = window.history.replaceState),
        (window.history.replaceState = function () {
          return z(), W.apply(window.history, arguments);
        })),
      (l = { ajax: a, elements: d, document: c, eventLag: f }),
      (B = function () {
        var a, c, d, e, f, g, h, i;
        for (
          j.sources = L = [],
            g = ["ajax", "elements", "document", "eventLag"],
            c = 0,
            e = g.length;
          e > c;
          c++
        )
          (a = g[c]), D[a] !== !1 && L.push(new l[a](D[a]));
        for (
          i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length;
          f > d;
          d++
        )
          (K = i[d]), L.push(new K(D));
        return (j.bar = r = new b()), (H = []), (M = new m());
      })(),
      (j.stop = function () {
        return (
          j.trigger("stop"),
          (j.running = !1),
          r.destroy(),
          (s = !0),
          null != p && ("function" == typeof t && t(p), (p = null)),
          B()
        );
      }),
      (j.restart = function () {
        return j.trigger("restart"), j.stop(), j.start();
      }),
      (j.go = function () {
        var a;
        return (
          (j.running = !0),
          r.render(),
          (a = C()),
          (s = !1),
          (p = G(function (b, c) {
            var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w;
            for (
              l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length;
              u > q;
              i = ++q
            )
              for (
                K = L[i],
                  o = null != H[i] ? H[i] : (H[i] = []),
                  h = null != (w = K.elements) ? w : [K],
                  k = t = 0,
                  v = h.length;
                v > t;
                k = ++t
              )
                (g = h[k]),
                  (n = null != o[k] ? o[k] : (o[k] = new m(g))),
                  (f &= n.done),
                  n.done || (e++, (p += n.tick(b)));
            return (
              (d = p / e),
              r.update(M.tick(b, d)),
              r.done() || f || s
                ? (r.update(100),
                  j.trigger("done"),
                  setTimeout(function () {
                    return r.finish(), (j.running = !1), j.trigger("hide");
                  }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0))))
                : c()
            );
          }))
        );
      }),
      (j.start = function (a) {
        v(D, a), (j.running = !0);
        try {
          r.render();
        } catch (b) {
          i = b;
        }
        return document.querySelector(".pace")
          ? (j.trigger("start"), j.go())
          : setTimeout(j.start, 50);
      }),
      "function" == typeof define && define.amd
        ? define(["pace"], function () {
            return j;
          })
        : "object" == typeof exports
        ? (module.exports = j)
        : D.startOnPageLoad && j.start();
  }.call(this),
  (function (a) {
    function b(b, d, e) {
      var f = this;
      return this.on("click.pjax", b, function (b) {
        var g = a.extend({}, p(d, e));
        g.container || (g.container = a(this).attr("data-pjax") || f), c(b, g);
      });
    }
    function c(b, c, d) {
      d = p(c, d);
      var f = b.currentTarget;
      if ("A" !== f.tagName.toUpperCase())
        throw "$.fn.pjax or $.pjax.click requires an anchor element";
      if (
        !(
          b.which > 1 ||
          b.metaKey ||
          b.ctrlKey ||
          b.shiftKey ||
          b.altKey ||
          location.protocol !== f.protocol ||
          location.hostname !== f.hostname ||
          (f.href.indexOf("#") > -1 && o(f) == o(location)) ||
          b.isDefaultPrevented()
        )
      ) {
        var g = { url: f.href, container: a(f).attr("data-pjax"), target: f },
          h = a.extend({}, g, d),
          i = a.Event("pjax:click");
        a(f).trigger(i, [h]),
          i.isDefaultPrevented() ||
            (e(h), b.preventDefault(), a(f).trigger("pjax:clicked", [h]));
      }
    }
    function d(b, c, d) {
      d = p(c, d);
      var f = b.currentTarget;
      if ("FORM" !== f.tagName.toUpperCase())
        throw "$.pjax.submit requires a form element";
      var g = {
        type: f.method.toUpperCase(),
        url: f.action,
        container: a(f).attr("data-pjax"),
        target: f,
      };
      if ("GET" !== g.type && void 0 !== window.FormData)
        (g.data = new FormData(f)), (g.processData = !1), (g.contentType = !1);
      else {
        if (a(f).find(":file").length) return;
        g.data = a(f).serializeArray();
      }
      e(a.extend({}, g, d)), b.preventDefault();
    }
    function e(b) {
      function c(b, c, e) {
        e || (e = {}), (e.relatedTarget = d);
        var f = a.Event(b, e);
        return h.trigger(f, c), !f.isDefaultPrevented();
      }
      (b = a.extend(!0, {}, a.ajaxSettings, e.defaults, b)),
        a.isFunction(b.url) && (b.url = b.url());
      var d = b.target,
        f = n(b.url).hash,
        h = (b.context = q(b.container));
      b.data || (b.data = {}),
        a.isArray(b.data)
          ? b.data.push({ name: "_pjax", value: h.selector })
          : (b.data._pjax = h.selector);
      var i;
      (b.beforeSend = function (a, d) {
        if (
          ("GET" !== d.type && (d.timeout = 0),
          a.setRequestHeader("X-PJAX", "true"),
          a.setRequestHeader("X-PJAX-Container", h.selector),
          !c("pjax:beforeSend", [a, d]))
        )
          return !1;
        d.timeout > 0 &&
          ((i = setTimeout(function () {
            c("pjax:timeout", [a, b]) && a.abort("timeout");
          }, d.timeout)),
          (d.timeout = 0));
        var e = n(d.url);
        f && (e.hash = f), (b.requestUrl = m(e));
      }),
        (b.complete = function (a, d) {
          i && clearTimeout(i),
            c("pjax:complete", [a, d, b]),
            c("pjax:end", [a, b]);
        }),
        (b.error = function (a, d, e) {
          var f = t("", a, b),
            h = c("pjax:error", [a, d, e, b]);
          "GET" == b.type && "abort" !== d && h && g(f.url);
        }),
        (b.success = function (d, i, j) {
          var l = e.state,
            m =
              "function" == typeof a.pjax.defaults.version
                ? a.pjax.defaults.version()
                : a.pjax.defaults.version,
            o = j.getResponseHeader("X-PJAX-Version"),
            p = t(d, j, b),
            q = n(p.url);
          if ((f && ((q.hash = f), (p.url = q.href)), m && o && m !== o))
            return void g(p.url);
          if (!p.contents) return void g(p.url);
          (e.state = {
            id: b.id || k(),
            url: p.url,
            title: p.title,
            container: h.selector,
            fragment: b.fragment,
            timeout: b.timeout,
          }),
            (b.push || b.replace) &&
              window.history.replaceState(e.state, p.title, p.url);
          try {
            document.activeElement.blur();
          } catch (r) {}
          p.title && (document.title = p.title),
            c("pjax:beforeReplace", [p.contents, b], {
              state: e.state,
              previousState: l,
            }),
            h.html(p.contents);
          var s = h.find("input[autofocus], textarea[autofocus]").last()[0];
          s && document.activeElement !== s && s.focus(), u(p.scripts);
          var v = b.scrollTo;
          if (f) {
            var w = decodeURIComponent(f.slice(1)),
              x =
                document.getElementById(w) || document.getElementsByName(w)[0];
            x && (v = a(x).offset().top);
          }
          "number" == typeof v && a(window).scrollTop(v),
            c("pjax:success", [d, i, j, b]);
        }),
        e.state ||
          ((e.state = {
            id: k(),
            url: window.location.href,
            title: document.title,
            container: h.selector,
            fragment: b.fragment,
            timeout: b.timeout,
          }),
          window.history.replaceState(e.state, document.title)),
        j(e.xhr),
        (e.options = b);
      var o = (e.xhr = a.ajax(b));
      return (
        o.readyState > 0 &&
          (b.push &&
            !b.replace &&
            (v(e.state.id, l(h)),
            window.history.pushState(null, "", b.requestUrl)),
          c("pjax:start", [o, b]),
          c("pjax:send", [o, b])),
        e.xhr
      );
    }
    function f(b, c) {
      var d = {
        url: window.location.href,
        push: !1,
        replace: !0,
        scrollTo: !1,
      };
      return e(a.extend(d, p(b, c)));
    }
    function g(a) {
      window.history.replaceState(null, "", e.state.url),
        window.location.replace(a);
    }
    function h(b) {
      B || j(e.xhr);
      var c,
        d = e.state,
        f = b.state;
      if (f && f.container) {
        if (B && C == f.url) return;
        if (d) {
          if (d.id === f.id) return;
          c = d.id < f.id ? "forward" : "back";
        }
        var h = E[f.id] || [],
          i = a(h[0] || f.container),
          k = h[1];
        if (i.length) {
          d && w(c, d.id, l(i));
          var m = a.Event("pjax:popstate", { state: f, direction: c });
          i.trigger(m);
          var n = {
            id: f.id,
            url: f.url,
            container: i,
            push: !1,
            fragment: f.fragment,
            timeout: f.timeout,
            scrollTo: !1,
          };
          if (k) {
            i.trigger("pjax:start", [null, n]),
              (e.state = f),
              f.title && (document.title = f.title);
            var o = a.Event("pjax:beforeReplace", {
              state: f,
              previousState: d,
            });
            i.trigger(o, [k, n]), i.html(k), i.trigger("pjax:end", [null, n]);
          } else e(n);
          i[0].offsetHeight;
        } else g(location.href);
      }
      B = !1;
    }
    function i(b) {
      var c = a.isFunction(b.url) ? b.url() : b.url,
        d = b.type ? b.type.toUpperCase() : "GET",
        e = a("<form>", {
          method: "GET" === d ? "GET" : "POST",
          action: c,
          style: "display:none",
        });
      "GET" !== d &&
        "POST" !== d &&
        e.append(
          a("<input>", {
            type: "hidden",
            name: "_method",
            value: d.toLowerCase(),
          })
        );
      var f = b.data;
      if ("string" == typeof f)
        a.each(f.split("&"), function (b, c) {
          var d = c.split("=");
          e.append(a("<input>", { type: "hidden", name: d[0], value: d[1] }));
        });
      else if (a.isArray(f))
        a.each(f, function (b, c) {
          e.append(
            a("<input>", { type: "hidden", name: c.name, value: c.value })
          );
        });
      else if ("object" == typeof f) {
        var g;
        for (g in f)
          e.append(a("<input>", { type: "hidden", name: g, value: f[g] }));
      }
      a(document.body).append(e), e.submit();
    }
    function j(b) {
      b && b.readyState < 4 && ((b.onreadystatechange = a.noop), b.abort());
    }
    function k() {
      return new Date().getTime();
    }
    function l(a) {
      var b = a.clone();
      return (
        b.find("script").each(function () {
          this.src || jQuery._data(this, "globalEval", !1);
        }),
        [a.selector, b.contents()]
      );
    }
    function m(a) {
      return (
        (a.search = a.search.replace(/([?&])(_pjax|_)=[^&]*/g, "")),
        a.href.replace(/\?($|#)/, "$1")
      );
    }
    function n(a) {
      var b = document.createElement("a");
      return (b.href = a), b;
    }
    function o(a) {
      return a.href.replace(/#.*/, "");
    }
    function p(b, c) {
      return (
        b && c
          ? (c.container = b)
          : (c = a.isPlainObject(b) ? b : { container: b }),
        c.container && (c.container = q(c.container)),
        c
      );
    }
    function q(b) {
      if (((b = a(b)), b.length)) {
        if ("" !== b.selector && b.context === document) return b;
        if (b.attr("id")) return a("#" + b.attr("id"));
        throw "cant get selector for pjax container!";
      }
      throw "no pjax container for " + b.selector;
    }
    function r(a, b) {
      return a.filter(b).add(a.find(b));
    }
    function s(b) {
      return a.parseHTML(b, document, !0);
    }
    function t(b, c, d) {
      var e = {},
        f = /<html/i.test(b),
        g = c.getResponseHeader("X-PJAX-URL");
      if (((e.url = g ? m(n(g)) : d.requestUrl), f))
        var h = a(s(b.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0])),
          i = a(s(b.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]));
      else var h = (i = a(s(b)));
      if (0 === i.length) return e;
      if (((e.title = r(h, "title").last().text()), d.fragment)) {
        if ("body" === d.fragment) var j = i;
        else var j = r(i, d.fragment).first();
        j.length &&
          ((e.contents = "body" === d.fragment ? j : j.contents()),
          e.title || (e.title = j.attr("title") || j.data("title")));
      } else f || (e.contents = i);
      return (
        e.contents &&
          ((e.contents = e.contents.not(function () {
            return a(this).is("title");
          })),
          e.contents.find("title").remove(),
          (e.scripts = r(e.contents, "script[src]").remove()),
          (e.contents = e.contents.not(e.scripts))),
        e.title && (e.title = a.trim(e.title)),
        e
      );
    }
    function u(b) {
      if (b) {
        var c = a("script[src]");
        b.each(function () {
          var b = this.src,
            d = c.filter(function () {
              return this.src === b;
            });
          if (!d.length) {
            var e = document.createElement("script"),
              f = a(this).attr("type");
            f && (e.type = f),
              (e.src = a(this).attr("src")),
              document.head.appendChild(e);
          }
        });
      }
    }
    function v(a, b) {
      (E[a] = b), G.push(a), x(F, 0), x(G, e.defaults.maxCacheLength);
    }
    function w(a, b, c) {
      var d, f;
      (E[b] = c),
        "forward" === a ? ((d = G), (f = F)) : ((d = F), (f = G)),
        d.push(b),
        (b = f.pop()) && delete E[b],
        x(d, e.defaults.maxCacheLength);
    }
    function x(a, b) {
      for (; a.length > b; ) delete E[a.shift()];
    }
    function y() {
      return a("meta")
        .filter(function () {
          var b = a(this).attr("http-equiv");
          return b && "X-PJAX-VERSION" === b.toUpperCase();
        })
        .attr("content");
    }
    function z() {
      (a.fn.pjax = b),
        (a.pjax = e),
        (a.pjax.enable = a.noop),
        (a.pjax.disable = A),
        (a.pjax.click = c),
        (a.pjax.submit = d),
        (a.pjax.reload = f),
        (a.pjax.defaults = {
          timeout: 650,
          push: !0,
          replace: !1,
          type: "GET",
          dataType: "html",
          scrollTo: 0,
          maxCacheLength: 20,
          version: y,
        }),
        a(window).on("popstate.pjax", h);
    }
    function A() {
      (a.fn.pjax = function () {
        return this;
      }),
        (a.pjax = i),
        (a.pjax.enable = z),
        (a.pjax.disable = a.noop),
        (a.pjax.click = a.noop),
        (a.pjax.submit = a.noop),
        (a.pjax.reload = function () {
          window.location.reload();
        }),
        a(window).off("popstate.pjax", h);
    }
    var B = !0,
      C = window.location.href,
      D = window.history.state;
    D && D.container && (e.state = D), "state" in window.history && (B = !1);
    var E = {},
      F = [],
      G = [];
    a.inArray("state", a.event.props) < 0 && a.event.props.push("state"),
      (a.support.pjax =
        window.history &&
        window.history.pushState &&
        window.history.replaceState &&
        !navigator.userAgent.match(
          /((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/
        )),
      a.support.pjax ? z() : A();
  })(jQuery);
var mejs = mejs || {};
(mejs.version = "2.20.1"),
  (mejs.meIndex = 0),
  (mejs.plugins = {
    silverlight: [
      {
        version: [3, 0],
        types: [
          "video/mp4",
          "video/m4v",
          "video/mov",
          "video/wmv",
          "audio/wma",
          "audio/m4a",
          "audio/mp3",
          "audio/wav",
          "audio/mpeg",
        ],
      },
    ],
    flash: [
      {
        version: [9, 0, 124],
        types: [
          "video/mp4",
          "video/m4v",
          "video/mov",
          "video/flv",
          "video/rtmp",
          "video/x-flv",
          "audio/flv",
          "audio/x-flv",
          "audio/mp3",
          "audio/m4a",
          "audio/mpeg",
          "video/dailymotion",
          "video/x-dailymotion",
          "application/x-mpegURL",
        ],
      },
    ],
    youtube: [
      {
        version: null,
        types: [
          "video/youtube",
          "video/x-youtube",
          "audio/youtube",
          "audio/x-youtube",
        ],
      },
    ],
    vimeo: [{ version: null, types: ["video/vimeo", "video/x-vimeo"] }],
  }),
  (mejs.Utility = {
    encodeUrl: function (a) {
      return encodeURIComponent(a);
    },
    escapeHTML: function (a) {
      return a
        .toString()
        .split("&")
        .join("&amp;")
        .split("<")
        .join("&lt;")
        .split('"')
        .join("&quot;");
    },
    absolutizeUrl: function (a) {
      var b = document.createElement("div");
      return (
        (b.innerHTML = '<a href="' + this.escapeHTML(a) + '">x</a>'),
        b.firstChild.href
      );
    },
    getScriptPath: function (a) {
      for (
        var b,
          c,
          d,
          e,
          f,
          g,
          h = 0,
          i = "",
          j = "",
          k = document.getElementsByTagName("script"),
          l = k.length,
          m = a.length;
        l > h;
        h++
      ) {
        for (
          e = k[h].src,
            c = e.lastIndexOf("/"),
            c > -1
              ? ((g = e.substring(c + 1)), (f = e.substring(0, c + 1)))
              : ((g = e), (f = "")),
            b = 0;
          m > b;
          b++
        )
          if (((j = a[b]), (d = g.indexOf(j)), d > -1)) {
            i = f;
            break;
          }
        if ("" !== i) break;
      }
      return i;
    },
    calculateTimeFormat: function (a, b, c) {
      0 > a && (a = 0), "undefined" == typeof c && (c = 25);
      var d = b.timeFormat,
        e = d[0],
        f = d[1] == d[0],
        g = f ? 2 : 1,
        h = ":",
        i = Math.floor(a / 3600) % 24,
        j = Math.floor(a / 60) % 60,
        k = Math.floor(a % 60),
        l = Math.floor(((a % 1) * c).toFixed(3)),
        m = [
          [l, "f"],
          [k, "s"],
          [j, "m"],
          [i, "h"],
        ];
      d.length < g && (h = d[g]);
      for (var n = !1, o = 0, p = m.length; p > o; o++)
        if (-1 !== d.indexOf(m[o][1])) n = !0;
        else if (n) {
          for (var q = !1, r = o; p > r; r++)
            if (m[r][0] > 0) {
              q = !0;
              break;
            }
          if (!q) break;
          f || (d = e + d),
            (d = m[o][1] + h + d),
            f && (d = m[o][1] + d),
            (e = m[o][1]);
        }
      b.currentTimeFormat = d;
    },
    twoDigitsString: function (a) {
      return 10 > a ? "0" + a : String(a);
    },
    secondsToTimeCode: function (a, b) {
      if ((0 > a && (a = 0), "object" != typeof b)) {
        var c = "m:ss";
        (c = arguments[1] ? "hh:mm:ss" : c),
          (c = arguments[2] ? c + ":ff" : c),
          (b = { currentTimeFormat: c, framesPerSecond: arguments[3] || 25 });
      }
      var d = b.framesPerSecond;
      "undefined" == typeof d && (d = 25);
      var c = b.currentTimeFormat,
        e = Math.floor(a / 3600) % 24,
        f = Math.floor(a / 60) % 60,
        g = Math.floor(a % 60),
        h = Math.floor(((a % 1) * d).toFixed(3));
      lis = [
        [h, "f"],
        [g, "s"],
        [f, "m"],
        [e, "h"],
      ];
      var j = c;
      for (i = 0, len = lis.length; i < len; i++)
        (j = j.replace(lis[i][1] + lis[i][1], this.twoDigitsString(lis[i][0]))),
          (j = j.replace(lis[i][1], lis[i][0]));
      return j;
    },
    timeCodeToSeconds: function (a, b, c, d) {
      "undefined" == typeof c ? (c = !1) : "undefined" == typeof d && (d = 25);
      var e = a.split(":"),
        f = parseInt(e[0], 10),
        g = parseInt(e[1], 10),
        h = parseInt(e[2], 10),
        i = 0,
        j = 0;
      return c && (i = parseInt(e[3]) / d), (j = 3600 * f + 60 * g + h + i);
    },
    convertSMPTEtoSeconds: function (a) {
      if ("string" != typeof a) return !1;
      a = a.replace(",", ".");
      var b = 0,
        c = -1 != a.indexOf(".") ? a.split(".")[1].length : 0,
        d = 1;
      a = a.split(":").reverse();
      for (var e = 0; e < a.length; e++)
        (d = 1), e > 0 && (d = Math.pow(60, e)), (b += Number(a[e]) * d);
      return Number(b.toFixed(c));
    },
    removeSwf: function (a) {
      var b = document.getElementById(a);
      b &&
        /object|embed/i.test(b.nodeName) &&
        (mejs.MediaFeatures.isIE
          ? ((b.style.display = "none"),
            (function () {
              4 == b.readyState
                ? mejs.Utility.removeObjectInIE(a)
                : setTimeout(arguments.callee, 10);
            })())
          : b.parentNode.removeChild(b));
    },
    removeObjectInIE: function (a) {
      var b = document.getElementById(a);
      if (b) {
        for (var c in b) "function" == typeof b[c] && (b[c] = null);
        b.parentNode.removeChild(b);
      }
    },
  }),
  (mejs.PluginDetector = {
    hasPluginVersion: function (a, b) {
      var c = this.plugins[a];
      return (
        (b[1] = b[1] || 0),
        (b[2] = b[2] || 0),
        c[0] > b[0] ||
          (c[0] == b[0] && c[1] > b[1]) ||
          (c[0] == b[0] && c[1] == b[1] && c[2] >= b[2])
      );
    },
    nav: window.navigator,
    ua: window.navigator.userAgent.toLowerCase(),
    plugins: [],
    addPlugin: function (a, b, c, d, e) {
      this.plugins[a] = this.detectPlugin(b, c, d, e);
    },
    detectPlugin: function (a, b, c, d) {
      var e,
        f,
        g,
        h = [0, 0, 0];
      if (
        "undefined" != typeof this.nav.plugins &&
        "object" == typeof this.nav.plugins[a]
      ) {
        if (
          ((e = this.nav.plugins[a].description),
          e &&
            ("undefined" == typeof this.nav.mimeTypes ||
              !this.nav.mimeTypes[b] ||
              this.nav.mimeTypes[b].enabledPlugin))
        )
          for (
            h = e
              .replace(a, "")
              .replace(/^\s+/, "")
              .replace(/\sr/gi, ".")
              .split("."),
              f = 0;
            f < h.length;
            f++
          )
            h[f] = parseInt(h[f].match(/\d+/), 10);
      } else if ("undefined" != typeof window.ActiveXObject)
        try {
          (g = new ActiveXObject(c)), g && (h = d(g));
        } catch (i) {}
      return h;
    },
  }),
  mejs.PluginDetector.addPlugin(
    "flash",
    "Shockwave Flash",
    "application/x-shockwave-flash",
    "ShockwaveFlash.ShockwaveFlash",
    function (a) {
      var b = [],
        c = a.GetVariable("$version");
      return (
        c &&
          ((c = c.split(" ")[1].split(",")),
          (b = [parseInt(c[0], 10), parseInt(c[1], 10), parseInt(c[2], 10)])),
        b
      );
    }
  ),
  mejs.PluginDetector.addPlugin(
    "silverlight",
    "Silverlight Plug-In",
    "application/x-silverlight-2",
    "AgControl.AgControl",
    function (a) {
      var b = [0, 0, 0, 0],
        c = function (a, b, c, d) {
          for (
            ;
            a.isVersionSupported(b[0] + "." + b[1] + "." + b[2] + "." + b[3]);

          )
            b[c] += d;
          b[c] -= d;
        };
      return (
        c(a, b, 0, 1),
        c(a, b, 1, 1),
        c(a, b, 2, 1e4),
        c(a, b, 2, 1e3),
        c(a, b, 2, 100),
        c(a, b, 2, 10),
        c(a, b, 2, 1),
        c(a, b, 3, 1),
        b
      );
    }
  ),
  (mejs.MediaFeatures = {
    init: function () {
      var a,
        b,
        c = this,
        d = document,
        e = mejs.PluginDetector.nav,
        f = mejs.PluginDetector.ua.toLowerCase(),
        g = ["source", "track", "audio", "video"];
      (c.isiPad = null !== f.match(/ipad/i)),
        (c.isiPhone = null !== f.match(/iphone/i)),
        (c.isiOS = c.isiPhone || c.isiPad),
        (c.isAndroid = null !== f.match(/android/i)),
        (c.isBustedAndroid = null !== f.match(/android 2\.[12]/)),
        (c.isBustedNativeHTTPS =
          "https:" === location.protocol &&
          (null !== f.match(/android [12]\./) ||
            null !== f.match(/macintosh.* version.* safari/))),
        (c.isIE =
          -1 != e.appName.toLowerCase().indexOf("microsoft") ||
          null !== e.appName.toLowerCase().match(/trident/gi)),
        (c.isChrome = null !== f.match(/chrome/gi)),
        (c.isChromium = null !== f.match(/chromium/gi)),
        (c.isFirefox = null !== f.match(/firefox/gi)),
        (c.isWebkit = null !== f.match(/webkit/gi)),
        (c.isGecko = null !== f.match(/gecko/gi) && !c.isWebkit && !c.isIE),
        (c.isOpera = null !== f.match(/opera/gi)),
        (c.hasTouch = "ontouchstart" in window),
        (c.svgAsImg = !!document.implementation.hasFeature(
          "http://www.w3.org/TR/SVG11/feature#Image",
          "1.1"
        ));
      for (a = 0; a < g.length; a++) b = document.createElement(g[a]);
      c.supportsMediaTag =
        "undefined" != typeof b.canPlayType || c.isBustedAndroid;
      try {
        b.canPlayType("video/mp4");
      } catch (h) {
        c.supportsMediaTag = !1;
      }
      (c.supportsPointerEvents = (function () {
        var a,
          b = document.createElement("x"),
          c = document.documentElement,
          d = window.getComputedStyle;
        return "pointerEvents" in b.style
          ? ((b.style.pointerEvents = "auto"),
            (b.style.pointerEvents = "x"),
            c.appendChild(b),
            (a = d && "auto" === d(b, "").pointerEvents),
            c.removeChild(b),
            !!a)
          : !1;
      })()),
        (c.hasFirefoxPluginMovingProblem = !1),
        (c.hasiOSFullScreen = "undefined" != typeof b.webkitEnterFullscreen),
        (c.hasNativeFullscreen = "undefined" != typeof b.requestFullscreen),
        (c.hasWebkitNativeFullScreen =
          "undefined" != typeof b.webkitRequestFullScreen),
        (c.hasMozNativeFullScreen =
          "undefined" != typeof b.mozRequestFullScreen),
        (c.hasMsNativeFullScreen = "undefined" != typeof b.msRequestFullscreen),
        (c.hasTrueNativeFullScreen =
          c.hasWebkitNativeFullScreen ||
          c.hasMozNativeFullScreen ||
          c.hasMsNativeFullScreen),
        (c.nativeFullScreenEnabled = c.hasTrueNativeFullScreen),
        c.hasMozNativeFullScreen
          ? (c.nativeFullScreenEnabled = document.mozFullScreenEnabled)
          : c.hasMsNativeFullScreen &&
            (c.nativeFullScreenEnabled = document.msFullscreenEnabled),
        c.isChrome && (c.hasiOSFullScreen = !1),
        c.hasTrueNativeFullScreen &&
          ((c.fullScreenEventName = ""),
          c.hasWebkitNativeFullScreen
            ? (c.fullScreenEventName = "webkitfullscreenchange")
            : c.hasMozNativeFullScreen
            ? (c.fullScreenEventName = "mozfullscreenchange")
            : c.hasMsNativeFullScreen &&
              (c.fullScreenEventName = "MSFullscreenChange"),
          (c.isFullScreen = function () {
            return c.hasMozNativeFullScreen
              ? d.mozFullScreen
              : c.hasWebkitNativeFullScreen
              ? d.webkitIsFullScreen
              : c.hasMsNativeFullScreen
              ? null !== d.msFullscreenElement
              : void 0;
          }),
          (c.requestFullScreen = function (a) {
            c.hasWebkitNativeFullScreen
              ? a.webkitRequestFullScreen()
              : c.hasMozNativeFullScreen
              ? a.mozRequestFullScreen()
              : c.hasMsNativeFullScreen && a.msRequestFullscreen();
          }),
          (c.cancelFullScreen = function () {
            c.hasWebkitNativeFullScreen
              ? document.webkitCancelFullScreen()
              : c.hasMozNativeFullScreen
              ? document.mozCancelFullScreen()
              : c.hasMsNativeFullScreen && document.msExitFullscreen();
          })),
        c.hasiOSFullScreen &&
          f.match(/mac os x 10_5/i) &&
          ((c.hasNativeFullScreen = !1), (c.hasiOSFullScreen = !1));
    },
  }),
  mejs.MediaFeatures.init(),
  (mejs.HtmlMediaElement = {
    pluginType: "native",
    isFullScreen: !1,
    setCurrentTime: function (a) {
      this.currentTime = a;
    },
    setMuted: function (a) {
      this.muted = a;
    },
    setVolume: function (a) {
      this.volume = a;
    },
    stop: function () {
      this.pause();
    },
    setSrc: function (a) {
      for (var b = this.getElementsByTagName("source"); b.length > 0; )
        this.removeChild(b[0]);
      if ("string" == typeof a) this.src = a;
      else {
        var c, d;
        for (c = 0; c < a.length; c++)
          if (((d = a[c]), this.canPlayType(d.type))) {
            this.src = d.src;
            break;
          }
      }
    },
    setVideoSize: function (a, b) {
      (this.width = a), (this.height = b);
    },
  }),
  (mejs.PluginMediaElement = function (a, b, c) {
    (this.id = a),
      (this.pluginType = b),
      (this.src = c),
      (this.events = {}),
      (this.attributes = {});
  }),
  (mejs.PluginMediaElement.prototype = {
    pluginElement: null,
    pluginType: "",
    isFullScreen: !1,
    playbackRate: -1,
    defaultPlaybackRate: -1,
    seekable: [],
    played: [],
    paused: !0,
    ended: !1,
    seeking: !1,
    duration: 0,
    error: null,
    tagName: "",
    muted: !1,
    volume: 1,
    currentTime: 0,
    play: function () {
      null != this.pluginApi &&
        ("youtube" == this.pluginType || "vimeo" == this.pluginType
          ? this.pluginApi.playVideo()
          : this.pluginApi.playMedia(),
        (this.paused = !1));
    },
    load: function () {
      null != this.pluginApi &&
        ("youtube" == this.pluginType ||
          "vimeo" == this.pluginType ||
          this.pluginApi.loadMedia(),
        (this.paused = !1));
    },
    pause: function () {
      null != this.pluginApi &&
        ("youtube" == this.pluginType || "vimeo" == this.pluginType
          ? this.pluginApi.pauseVideo()
          : this.pluginApi.pauseMedia(),
        (this.paused = !0));
    },
    stop: function () {
      null != this.pluginApi &&
        ("youtube" == this.pluginType || "vimeo" == this.pluginType
          ? this.pluginApi.stopVideo()
          : this.pluginApi.stopMedia(),
        (this.paused = !0));
    },
    canPlayType: function (a) {
      var b,
        c,
        d,
        e = mejs.plugins[this.pluginType];
      for (b = 0; b < e.length; b++)
        if (
          ((d = e[b]),
          mejs.PluginDetector.hasPluginVersion(this.pluginType, d.version))
        )
          for (c = 0; c < d.types.length; c++)
            if (a == d.types[c]) return "probably";
      return "";
    },
    positionFullscreenButton: function (a, b, c) {
      null != this.pluginApi &&
        this.pluginApi.positionFullscreenButton &&
        this.pluginApi.positionFullscreenButton(
          Math.floor(a),
          Math.floor(b),
          c
        );
    },
    hideFullscreenButton: function () {
      null != this.pluginApi &&
        this.pluginApi.hideFullscreenButton &&
        this.pluginApi.hideFullscreenButton();
    },
    setSrc: function (a) {
      if ("string" == typeof a)
        this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a)),
          (this.src = mejs.Utility.absolutizeUrl(a));
      else {
        var b, c;
        for (b = 0; b < a.length; b++)
          if (((c = a[b]), this.canPlayType(c.type))) {
            this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src)),
              (this.src = mejs.Utility.absolutizeUrl(c.src));
            break;
          }
      }
    },
    setCurrentTime: function (a) {
      null != this.pluginApi &&
        ("youtube" == this.pluginType || "vimeo" == this.pluginType
          ? this.pluginApi.seekTo(a)
          : this.pluginApi.setCurrentTime(a),
        (this.currentTime = a));
    },
    setVolume: function (a) {
      null != this.pluginApi &&
        ("youtube" == this.pluginType
          ? this.pluginApi.setVolume(100 * a)
          : this.pluginApi.setVolume(a),
        (this.volume = a));
    },
    setMuted: function (a) {
      null != this.pluginApi &&
        ("youtube" == this.pluginType
          ? (a ? this.pluginApi.mute() : this.pluginApi.unMute(),
            (this.muted = a),
            this.dispatchEvent({ type: "volumechange" }))
          : this.pluginApi.setMuted(a),
        (this.muted = a));
    },
    setVideoSize: function (a, b) {
      this.pluginElement &&
        this.pluginElement.style &&
        ((this.pluginElement.style.width = a + "px"),
        (this.pluginElement.style.height = b + "px")),
        null != this.pluginApi &&
          this.pluginApi.setVideoSize &&
          this.pluginApi.setVideoSize(a, b);
    },
    setFullscreen: function (a) {
      null != this.pluginApi &&
        this.pluginApi.setFullscreen &&
        this.pluginApi.setFullscreen(a);
    },
    enterFullScreen: function () {
      null != this.pluginApi &&
        this.pluginApi.setFullscreen &&
        this.setFullscreen(!0);
    },
    exitFullScreen: function () {
      null != this.pluginApi &&
        this.pluginApi.setFullscreen &&
        this.setFullscreen(!1);
    },
    addEventListener: function (a, b, c) {
      (this.events[a] = this.events[a] || []), this.events[a].push(b);
    },
    removeEventListener: function (a, b) {
      if (!a) return (this.events = {}), !0;
      var c = this.events[a];
      if (!c) return !0;
      if (!b) return (this.events[a] = []), !0;
      for (var d = 0; d < c.length; d++)
        if (c[d] === b) return this.events[a].splice(d, 1), !0;
      return !1;
    },
    dispatchEvent: function (a) {
      var b,
        c = this.events[a.type];
      if (c) for (b = 0; b < c.length; b++) c[b].apply(this, [a]);
    },
    hasAttribute: function (a) {
      return a in this.attributes;
    },
    removeAttribute: function (a) {
      delete this.attributes[a];
    },
    getAttribute: function (a) {
      return this.hasAttribute(a) ? this.attributes[a] : "";
    },
    setAttribute: function (a, b) {
      this.attributes[a] = b;
    },
    remove: function () {
      mejs.Utility.removeSwf(this.pluginElement.id),
        mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id);
    },
  }),
  (mejs.MediaPluginBridge = {
    pluginMediaElements: {},
    htmlMediaElements: {},
    registerPluginElement: function (a, b, c) {
      (this.pluginMediaElements[a] = b), (this.htmlMediaElements[a] = c);
    },
    unregisterPluginElement: function (a) {
      delete this.pluginMediaElements[a], delete this.htmlMediaElements[a];
    },
    initPlugin: function (a) {
      var b = this.pluginMediaElements[a],
        c = this.htmlMediaElements[a];
      if (b) {
        switch (b.pluginType) {
          case "flash":
            b.pluginElement = b.pluginApi = document.getElementById(a);
            break;
          case "silverlight":
            (b.pluginElement = document.getElementById(b.id)),
              (b.pluginApi = b.pluginElement.Content.MediaElementJS);
        }
        null != b.pluginApi && b.success && b.success(b, c);
      }
    },
    fireEvent: function (a, b, c) {
      var d,
        e,
        f,
        g = this.pluginMediaElements[a];
      if (g) {
        d = { type: b, target: g };
        for (e in c) (g[e] = c[e]), (d[e] = c[e]);
        (f = c.bufferedTime || 0),
          (d.target.buffered = d.buffered =
            {
              start: function (a) {
                return 0;
              },
              end: function (a) {
                return f;
              },
              length: 1,
            }),
          g.dispatchEvent(d);
      }
    },
  }),
  (mejs.MediaElementDefaults = {
    mode: "auto",
    plugins: ["flash", "silverlight", "youtube", "vimeo"],
    enablePluginDebug: !1,
    httpsBasicAuthSite: !1,
    type: "",
    pluginPath: mejs.Utility.getScriptPath([
      "mediaelement.js",
      "mediaelement.min.js",
      "mediaelement-and-player.js",
      "mediaelement-and-player.min.js",
    ]),
    flashName: "flashmediaelement.swf",
    flashStreamer: "",
    flashScriptAccess: "sameDomain",
    enablePluginSmoothing: !1,
    enablePseudoStreaming: !1,
    pseudoStreamingStartQueryParam: "start",
    silverlightName: "silverlightmediaelement.xap",
    defaultVideoWidth: 480,
    defaultVideoHeight: 270,
    pluginWidth: -1,
    pluginHeight: -1,
    pluginVars: [],
    timerRate: 250,
    startVolume: 0.8,
    success: function () {},
    error: function () {},
  }),
  (mejs.MediaElement = function (a, b) {
    return mejs.HtmlMediaElementShim.create(a, b);
  }),
  (mejs.HtmlMediaElementShim = {
    create: function (a, b) {
      var c,
        d,
        e = {},
        f = "string" == typeof a ? document.getElementById(a) : a,
        g = f.tagName.toLowerCase(),
        h = "audio" === g || "video" === g,
        i = h ? f.getAttribute("src") : f.getAttribute("href"),
        j = f.getAttribute("poster"),
        k = f.getAttribute("autoplay"),
        l = f.getAttribute("preload"),
        m = f.getAttribute("controls");
      for (d in mejs.MediaElementDefaults) e[d] = mejs.MediaElementDefaults[d];
      for (d in b) e[d] = b[d];
      return (
        (i = "undefined" == typeof i || null === i || "" == i ? null : i),
        (j = "undefined" == typeof j || null === j ? "" : j),
        (l =
          "undefined" == typeof l || null === l || "false" === l ? "none" : l),
        (k = !("undefined" == typeof k || null === k || "false" === k)),
        (m = !("undefined" == typeof m || null === m || "false" === m)),
        (c = this.determinePlayback(
          f,
          e,
          mejs.MediaFeatures.supportsMediaTag,
          h,
          i
        )),
        (c.url = null !== c.url ? mejs.Utility.absolutizeUrl(c.url) : ""),
        "native" == c.method
          ? (mejs.MediaFeatures.isBustedAndroid &&
              ((f.src = c.url),
              f.addEventListener(
                "click",
                function () {
                  f.play();
                },
                !1
              )),
            this.updateNative(c, e, k, l))
          : "" !== c.method
          ? this.createPlugin(c, e, j, k, l, m)
          : (this.createErrorMessage(c, e, j), this)
      );
    },
    determinePlayback: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = [],
        r = {
          method: "",
          url: "",
          htmlMediaElement: a,
          isVideo: "audio" != a.tagName.toLowerCase(),
        };
      if ("undefined" != typeof b.type && "" !== b.type)
        if ("string" == typeof b.type) q.push({ type: b.type, url: e });
        else
          for (f = 0; f < b.type.length; f++)
            q.push({ type: b.type[f], url: e });
      else if (null !== e)
        (k = this.formatType(e, a.getAttribute("type"))),
          q.push({ type: k, url: e });
      else
        for (f = 0; f < a.childNodes.length; f++)
          (j = a.childNodes[f]),
            1 == j.nodeType &&
              "source" == j.tagName.toLowerCase() &&
              ((e = j.getAttribute("src")),
              (k = this.formatType(e, j.getAttribute("type"))),
              (p = j.getAttribute("media")),
              (!p ||
                !window.matchMedia ||
                (window.matchMedia && window.matchMedia(p).matches)) &&
                q.push({ type: k, url: e }));
      if (
        (!d &&
          q.length > 0 &&
          null !== q[0].url &&
          this.getTypeFromFile(q[0].url).indexOf("audio") > -1 &&
          (r.isVideo = !1),
        mejs.MediaFeatures.isBustedAndroid &&
          (a.canPlayType = function (a) {
            return null !== a.match(/video\/(mp4|m4v)/gi) ? "maybe" : "";
          }),
        mejs.MediaFeatures.isChromium &&
          (a.canPlayType = function (a) {
            return null !== a.match(/video\/(webm|ogv|ogg)/gi) ? "maybe" : "";
          }),
        c &&
          ("auto" === b.mode ||
            "auto_plugin" === b.mode ||
            "native" === b.mode) &&
          (!mejs.MediaFeatures.isBustedNativeHTTPS ||
            b.httpsBasicAuthSite !== !0))
      ) {
        for (
          d ||
            ((o = document.createElement(r.isVideo ? "video" : "audio")),
            a.parentNode.insertBefore(o, a),
            (a.style.display = "none"),
            (r.htmlMediaElement = a = o)),
            f = 0;
          f < q.length;
          f++
        )
          if (
            "video/m3u8" == q[f].type ||
            "" !== a.canPlayType(q[f].type).replace(/no/, "") ||
            "" !==
              a
                .canPlayType(q[f].type.replace(/mp3/, "mpeg"))
                .replace(/no/, "") ||
            "" !==
              a.canPlayType(q[f].type.replace(/m4a/, "mp4")).replace(/no/, "")
          ) {
            (r.method = "native"), (r.url = q[f].url);
            break;
          }
        if (
          "native" === r.method &&
          (null !== r.url && (a.src = r.url), "auto_plugin" !== b.mode)
        )
          return r;
      }
      if ("auto" === b.mode || "auto_plugin" === b.mode || "shim" === b.mode)
        for (f = 0; f < q.length; f++)
          for (k = q[f].type, g = 0; g < b.plugins.length; g++)
            for (
              l = b.plugins[g], m = mejs.plugins[l], h = 0;
              h < m.length;
              h++
            )
              if (
                ((n = m[h]),
                null == n.version ||
                  mejs.PluginDetector.hasPluginVersion(l, n.version))
              )
                for (i = 0; i < n.types.length; i++)
                  if (k.toLowerCase() == n.types[i].toLowerCase())
                    return (r.method = l), (r.url = q[f].url), r;
      return "auto_plugin" === b.mode && "native" === r.method
        ? r
        : ("" === r.method && q.length > 0 && (r.url = q[0].url), r);
    },
    formatType: function (a, b) {
      return a && !b
        ? this.getTypeFromFile(a)
        : b && ~b.indexOf(";")
        ? b.substr(0, b.indexOf(";"))
        : b;
    },
    getTypeFromFile: function (a) {
      a = a.split("?")[0];
      var b = a.substring(a.lastIndexOf(".") + 1).toLowerCase(),
        c = /(mp4|m4v|ogg|ogv|m3u8|webm|webmv|flv|wmv|mpeg|mov)/gi.test(b)
          ? "video/"
          : "audio/";
      return this.getTypeFromExtension(b, c);
    },
    getTypeFromExtension: function (a, b) {
      switch (((b = b || ""), a)) {
        case "mp4":
        case "m4v":
        case "m4a":
        case "f4v":
        case "f4a":
          return b + "mp4";
        case "flv":
          return b + "x-flv";
        case "webm":
        case "webma":
        case "webmv":
          return b + "webm";
        case "ogg":
        case "oga":
        case "ogv":
          return b + "ogg";
        case "m3u8":
          return "application/x-mpegurl";
        case "ts":
          return b + "mp2t";
        default:
          return b + a;
      }
    },
    createErrorMessage: function (a, b, c) {
      var d = a.htmlMediaElement,
        e = document.createElement("div"),
        f = b.customError;
      e.className = "me-cannotplay";
      try {
        (e.style.width = d.width + "px"), (e.style.height = d.height + "px");
      } catch (g) {}
      f ||
        ((f = '<a href="' + a.url + '">'),
        "" !== c &&
          (f += '<img src="' + c + '" width="100%" height="100%" alt="" />'),
        (f += "<span>" + mejs.i18n.t("Download File") + "</span></a>")),
        (e.innerHTML = f),
        d.parentNode.insertBefore(e, d),
        (d.style.display = "none"),
        b.error(d);
    },
    createPlugin: function (a, b, c, d, e, f) {
      var g,
        h,
        i,
        j = a.htmlMediaElement,
        k = 1,
        l = 1,
        m = "me_" + a.method + "_" + mejs.meIndex++,
        n = new mejs.PluginMediaElement(m, a.method, a.url),
        o = document.createElement("div");
      n.tagName = j.tagName;
      for (var p = 0; p < j.attributes.length; p++) {
        var q = j.attributes[p];
        q.specified && n.setAttribute(q.name, q.value);
      }
      for (
        h = j.parentNode;
        null !== h &&
        null != h.tagName &&
        "body" !== h.tagName.toLowerCase() &&
        null != h.parentNode &&
        null != h.parentNode.tagName &&
        null != h.parentNode.constructor &&
        "ShadowRoot" === h.parentNode.constructor.name;

      ) {
        if ("p" === h.parentNode.tagName.toLowerCase()) {
          h.parentNode.parentNode.insertBefore(h, h.parentNode);
          break;
        }
        h = h.parentNode;
      }
      switch (
        (a.isVideo
          ? ((k =
              b.pluginWidth > 0
                ? b.pluginWidth
                : b.videoWidth > 0
                ? b.videoWidth
                : null !== j.getAttribute("width")
                ? j.getAttribute("width")
                : b.defaultVideoWidth),
            (l =
              b.pluginHeight > 0
                ? b.pluginHeight
                : b.videoHeight > 0
                ? b.videoHeight
                : null !== j.getAttribute("height")
                ? j.getAttribute("height")
                : b.defaultVideoHeight),
            (k = mejs.Utility.encodeUrl(k)),
            (l = mejs.Utility.encodeUrl(l)))
          : b.enablePluginDebug && ((k = 320), (l = 240)),
        (n.success = b.success),
        mejs.MediaPluginBridge.registerPluginElement(m, n, j),
        (o.className = "me-plugin"),
        (o.id = m + "_container"),
        a.isVideo
          ? j.parentNode.insertBefore(o, j)
          : document.body.insertBefore(o, document.body.childNodes[0]),
        (i = [
          "id=" + m,
          "jsinitfunction=mejs.MediaPluginBridge.initPlugin",
          "jscallbackfunction=mejs.MediaPluginBridge.fireEvent",
          "isvideo=" + (a.isVideo ? "true" : "false"),
          "autoplay=" + (d ? "true" : "false"),
          "preload=" + e,
          "width=" + k,
          "startvolume=" + b.startVolume,
          "timerrate=" + b.timerRate,
          "flashstreamer=" + b.flashStreamer,
          "height=" + l,
          "pseudostreamstart=" + b.pseudoStreamingStartQueryParam,
        ]),
        null !== a.url &&
          ("flash" == a.method
            ? i.push("file=" + mejs.Utility.encodeUrl(a.url))
            : i.push("file=" + a.url)),
        b.enablePluginDebug && i.push("debug=true"),
        b.enablePluginSmoothing && i.push("smoothing=true"),
        b.enablePseudoStreaming && i.push("pseudostreaming=true"),
        f && i.push("controls=true"),
        b.pluginVars && (i = i.concat(b.pluginVars)),
        a.method)
      ) {
        case "silverlight":
          o.innerHTML =
            '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' +
            m +
            '" name="' +
            m +
            '" width="' +
            k +
            '" height="' +
            l +
            '" class="mejs-shim"><param name="initParams" value="' +
            i.join(",") +
            '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' +
            b.pluginPath +
            b.silverlightName +
            '" /></object>';
          break;
        case "flash":
          mejs.MediaFeatures.isIE
            ? ((g = document.createElement("div")),
              o.appendChild(g),
              (g.outerHTML =
                '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' +
                m +
                '" width="' +
                k +
                '" height="' +
                l +
                '" class="mejs-shim"><param name="movie" value="' +
                b.pluginPath +
                b.flashName +
                "?x=" +
                new Date() +
                '" /><param name="flashvars" value="' +
                i.join("&amp;") +
                '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' +
                b.flashScriptAccess +
                '" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>'))
            : (o.innerHTML =
                '<embed id="' +
                m +
                '" name="' +
                m +
                '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="' +
                b.flashScriptAccess +
                '" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' +
                b.pluginPath +
                b.flashName +
                '" flashvars="' +
                i.join("&") +
                '" width="' +
                k +
                '" height="' +
                l +
                '" scale="default"class="mejs-shim"></embed>');
          break;
        case "youtube":
          var r;
          -1 != a.url.lastIndexOf("youtu.be")
            ? ((r = a.url.substr(a.url.lastIndexOf("/") + 1)),
              -1 != r.indexOf("?") && (r = r.substr(0, r.indexOf("?"))))
            : (r = a.url.substr(a.url.lastIndexOf("=") + 1)),
            (youtubeSettings = {
              container: o,
              containerId: o.id,
              pluginMediaElement: n,
              pluginId: m,
              videoId: r,
              height: l,
              width: k,
            }),
            window.postMessage
              ? mejs.YouTubeApi.enqueueIframe(youtubeSettings)
              : mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) &&
                mejs.YouTubeApi.createFlash(youtubeSettings, b);
          break;
        case "vimeo":
          var s = m + "_player";
          if (
            ((n.vimeoid = a.url.substr(a.url.lastIndexOf("/") + 1)),
            (o.innerHTML =
              '<iframe src="//player.vimeo.com/video/' +
              n.vimeoid +
              "?api=1&portrait=0&byline=0&title=0&player_id=" +
              s +
              '" width="' +
              k +
              '" height="' +
              l +
              '" frameborder="0" class="mejs-shim" id="' +
              s +
              '" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),
            "function" == typeof $f)
          ) {
            var t = $f(o.childNodes[0]);
            t.addEvent("ready", function () {
              function a(a, b, c, d) {
                var e = { type: c, target: b };
                "timeupdate" == c &&
                  ((b.currentTime = e.currentTime = d.seconds),
                  (b.duration = e.duration = d.duration)),
                  b.dispatchEvent(e);
              }
              (t.playVideo = function () {
                t.api("play");
              }),
                (t.stopVideo = function () {
                  t.api("unload");
                }),
                (t.pauseVideo = function () {
                  t.api("pause");
                }),
                (t.seekTo = function (a) {
                  t.api("seekTo", a);
                }),
                (t.setVolume = function (a) {
                  t.api("setVolume", a);
                }),
                (t.setMuted = function (a) {
                  a
                    ? ((t.lastVolume = t.api("getVolume")),
                      t.api("setVolume", 0))
                    : (t.api("setVolume", t.lastVolume), delete t.lastVolume);
                }),
                t.addEvent("play", function () {
                  a(t, n, "play"), a(t, n, "playing");
                }),
                t.addEvent("pause", function () {
                  a(t, n, "pause");
                }),
                t.addEvent("finish", function () {
                  a(t, n, "ended");
                }),
                t.addEvent("playProgress", function (b) {
                  a(t, n, "timeupdate", b);
                }),
                (n.pluginElement = o),
                (n.pluginApi = t),
                mejs.MediaPluginBridge.initPlugin(m);
            });
          } else
            console.warn("You need to include froogaloop for vimeo to work");
      }
      return (j.style.display = "none"), j.removeAttribute("autoplay"), n;
    },
    updateNative: function (a, b, c, d) {
      var e,
        f = a.htmlMediaElement;
      for (e in mejs.HtmlMediaElement) f[e] = mejs.HtmlMediaElement[e];
      return b.success(f, f), f;
    },
  }),
  (mejs.YouTubeApi = {
    isIframeStarted: !1,
    isIframeLoaded: !1,
    loadIframeApi: function () {
      if (!this.isIframeStarted) {
        var a = document.createElement("script");
        a.src = "//www.youtube.com/player_api";
        var b = document.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b), (this.isIframeStarted = !0);
      }
    },
    iframeQueue: [],
    enqueueIframe: function (a) {
      this.isLoaded
        ? this.createIframe(a)
        : (this.loadIframeApi(), this.iframeQueue.push(a));
    },
    createIframe: function (a) {
      var b = a.pluginMediaElement,
        c = new YT.Player(a.containerId, {
          height: a.height,
          width: a.width,
          videoId: a.videoId,
          playerVars: { controls: 0, wmode: "transparent" },
          events: {
            onReady: function () {
              (c.setVideoSize = function (a, b) {
                c.setSize(a, b);
              }),
                (a.pluginMediaElement.pluginApi = c),
                (a.pluginMediaElement.pluginElement = document.getElementById(
                  a.containerId
                )),
                mejs.MediaPluginBridge.initPlugin(a.pluginId),
                setInterval(function () {
                  mejs.YouTubeApi.createEvent(c, b, "timeupdate");
                }, 250);
            },
            onStateChange: function (a) {
              mejs.YouTubeApi.handleStateChange(a.data, c, b);
            },
          },
        });
    },
    createEvent: function (a, b, c) {
      var d = { type: c, target: b };
      if (a && a.getDuration) {
        (b.currentTime = d.currentTime = a.getCurrentTime()),
          (b.duration = d.duration = a.getDuration()),
          (d.paused = b.paused),
          (d.ended = b.ended),
          (d.muted = a.isMuted()),
          (d.volume = a.getVolume() / 100),
          (d.bytesTotal = a.getVideoBytesTotal()),
          (d.bufferedBytes = a.getVideoBytesLoaded());
        var e = (d.bufferedBytes / d.bytesTotal) * d.duration;
        d.target.buffered = d.buffered = {
          start: function (a) {
            return 0;
          },
          end: function (a) {
            return e;
          },
          length: 1,
        };
      }
      b.dispatchEvent(d);
    },
    iFrameReady: function () {
      for (
        this.isLoaded = !0, this.isIframeLoaded = !0;
        this.iframeQueue.length > 0;

      ) {
        var a = this.iframeQueue.pop();
        this.createIframe(a);
      }
    },
    flashPlayers: {},
    createFlash: function (a) {
      this.flashPlayers[a.pluginId] = a;
      var b,
        c =
          "//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" +
          a.pluginId +
          "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
      mejs.MediaFeatures.isIE
        ? ((b = document.createElement("div")),
          a.container.appendChild(b),
          (b.outerHTML =
            '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' +
            a.pluginId +
            '" width="' +
            a.width +
            '" height="' +
            a.height +
            '" class="mejs-shim"><param name="movie" value="' +
            c +
            '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' +
            options.flashScriptAccess +
            '" /><param name="allowFullScreen" value="true" /></object>'))
        : (a.container.innerHTML =
            '<object type="application/x-shockwave-flash" id="' +
            a.pluginId +
            '" data="' +
            c +
            '" width="' +
            a.width +
            '" height="' +
            a.height +
            '" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="' +
            options.flashScriptAccess +
            '"><param name="wmode" value="transparent"></object>');
    },
    flashReady: function (a) {
      var b = this.flashPlayers[a],
        c = document.getElementById(a),
        d = b.pluginMediaElement;
      (d.pluginApi = d.pluginElement = c),
        mejs.MediaPluginBridge.initPlugin(a),
        c.cueVideoById(b.videoId);
      var e = b.containerId + "_callback";
      (window[e] = function (a) {
        mejs.YouTubeApi.handleStateChange(a, c, d);
      }),
        c.addEventListener("onStateChange", e),
        setInterval(function () {
          mejs.YouTubeApi.createEvent(c, d, "timeupdate");
        }, 250),
        mejs.YouTubeApi.createEvent(c, d, "canplay");
    },
    handleStateChange: function (a, b, c) {
      switch (a) {
        case -1:
          (c.paused = !0),
            (c.ended = !0),
            mejs.YouTubeApi.createEvent(b, c, "loadedmetadata");
          break;
        case 0:
          (c.paused = !1),
            (c.ended = !0),
            mejs.YouTubeApi.createEvent(b, c, "ended");
          break;
        case 1:
          (c.paused = !1),
            (c.ended = !1),
            mejs.YouTubeApi.createEvent(b, c, "play"),
            mejs.YouTubeApi.createEvent(b, c, "playing");
          break;
        case 2:
          (c.paused = !0),
            (c.ended = !1),
            mejs.YouTubeApi.createEvent(b, c, "pause");
          break;
        case 3:
          mejs.YouTubeApi.createEvent(b, c, "progress");
          break;
        case 5:
      }
    },
  }),
  (window.onYouTubePlayerAPIReady = function () {
    mejs.YouTubeApi.iFrameReady();
  }),
  (window.onYouTubePlayerReady = function (a) {
    mejs.YouTubeApi.flashReady(a);
  }),
  (window.mejs = mejs),
  (window.MediaElement = mejs.MediaElement),
  (function (a, b, c) {
    "use strict";
    var d = {
      locale: {
        language: (b.i18n && b.i18n.locale.language) || "",
        strings: (b.i18n && b.i18n.locale.strings) || {},
      },
      ietf_lang_regex: /^(x\-)?[a-z]{2,}(\-\w{2,})?(\-\w{2,})?$/,
      methods: {},
    };
    (d.getLanguage = function () {
      var a =
        d.locale.language ||
        window.navigator.userLanguage ||
        window.navigator.language;
      return d.ietf_lang_regex.exec(a) ? a : null;
    }),
      "undefined" != typeof mejsL10n && (d.locale.language = mejsL10n.language),
      (d.methods.checkPlain = function (a) {
        var b,
          c,
          d = { "&": "&amp;", '"': "&quot;", "<": "&lt;", ">": "&gt;" };
        a = String(a);
        for (b in d)
          d.hasOwnProperty(b) &&
            ((c = new RegExp(b, "g")), (a = a.replace(c, d[b])));
        return a;
      }),
      (d.methods.t = function (a, b) {
        return (
          d.locale.strings &&
            d.locale.strings[b.context] &&
            d.locale.strings[b.context][a] &&
            (a = d.locale.strings[b.context][a]),
          d.methods.checkPlain(a)
        );
      }),
      (d.t = function (a, b) {
        if ("string" == typeof a && a.length > 0) {
          var c = d.getLanguage();
          return (b = b || { context: c }), d.methods.t(a, b);
        }
        throw {
          name: "InvalidArgumentException",
          message: "First argument is either not a string or empty.",
        };
      }),
      (b.i18n = d);
  })(document, mejs),
  (function (a, b) {
    "use strict";
    "undefined" != typeof mejsL10n && (a[mejsL10n.language] = mejsL10n.strings);
  })(mejs.i18n.locale.strings),
  "undefined" != typeof jQuery
    ? (mejs.$ = jQuery)
    : "undefined" != typeof Zepto
    ? ((mejs.$ = Zepto),
      (Zepto.fn.outerWidth = function (a) {
        var b = $(this).width();
        return (
          a &&
            ((b += parseInt($(this).css("margin-right"), 10)),
            (b += parseInt($(this).css("margin-left"), 10))),
          b
        );
      }))
    : "undefined" != typeof ender && (mejs.$ = ender),
  (function (a) {
    (mejs.MepDefaults = {
      poster: "",
      showPosterWhenEnded: !1,
      defaultVideoWidth: 480,
      defaultVideoHeight: 270,
      videoWidth: -1,
      videoHeight: -1,
      defaultAudioWidth: 400,
      defaultAudioHeight: 30,
      defaultSeekBackwardInterval: function (a) {
        return 0.05 * a.duration;
      },
      defaultSeekForwardInterval: function (a) {
        return 0.05 * a.duration;
      },
      setDimensions: !0,
      audioWidth: -1,
      audioHeight: -1,
      startVolume: 0.8,
      loop: !1,
      autoRewind: !0,
      enableAutosize: !0,
      timeFormat: "",
      alwaysShowHours: !1,
      showTimecodeFrameCount: !1,
      framesPerSecond: 25,
      autosizeProgress: !0,
      alwaysShowControls: !1,
      hideVideoControlsOnLoad: !1,
      clickToPlayPause: !0,
      iPadUseNativeControls: !1,
      iPhoneUseNativeControls: !1,
      AndroidUseNativeControls: !1,
      features: [
        "playpause",
        "current",
        "progress",
        "duration",
        "tracks",
        "volume",
        "fullscreen",
      ],
      isVideo: !0,
      enableKeyboard: !0,
      pauseOtherPlayers: !0,
      keyActions: [
        {
          keys: [32, 179],
          action: function (a, b) {
            b.paused || b.ended ? b.play() : b.pause();
          },
        },
        {
          keys: [38],
          action: function (a, b) {
            a.container.find(".mejs-volume-slider").css("display", "block"),
              a.isVideo && (a.showControls(), a.startControlsTimer());
            var c = Math.min(b.volume + 0.1, 1);
            b.setVolume(c);
          },
        },
        {
          keys: [40],
          action: function (a, b) {
            a.container.find(".mejs-volume-slider").css("display", "block"),
              a.isVideo && (a.showControls(), a.startControlsTimer());
            var c = Math.max(b.volume - 0.1, 0);
            b.setVolume(c);
          },
        },
        {
          keys: [37, 227],
          action: function (a, b) {
            if (!isNaN(b.duration) && b.duration > 0) {
              a.isVideo && (a.showControls(), a.startControlsTimer());
              var c = Math.max(
                b.currentTime - a.options.defaultSeekBackwardInterval(b),
                0
              );
              b.setCurrentTime(c);
            }
          },
        },
        {
          keys: [39, 228],
          action: function (a, b) {
            if (!isNaN(b.duration) && b.duration > 0) {
              a.isVideo && (a.showControls(), a.startControlsTimer());
              var c = Math.min(
                b.currentTime + a.options.defaultSeekForwardInterval(b),
                b.duration
              );
              b.setCurrentTime(c);
            }
          },
        },
        {
          keys: [70],
          action: function (a, b) {
            "undefined" != typeof a.enterFullScreen &&
              (a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen());
          },
        },
        {
          keys: [77],
          action: function (a, b) {
            a.container.find(".mejs-volume-slider").css("display", "block"),
              a.isVideo && (a.showControls(), a.startControlsTimer()),
              a.media.muted ? a.setMuted(!1) : a.setMuted(!0);
          },
        },
      ],
    }),
      (mejs.mepIndex = 0),
      (mejs.players = {}),
      (mejs.MediaElementPlayer = function (b, c) {
        if (!(this instanceof mejs.MediaElementPlayer))
          return new mejs.MediaElementPlayer(b, c);
        var d = this;
        return (
          (d.$media = d.$node = a(b)),
          (d.node = d.media = d.$media[0]),
          d.node
            ? "undefined" != typeof d.node.player
              ? d.node.player
              : ("undefined" == typeof c && (c = d.$node.data("mejsoptions")),
                (d.options = a.extend({}, mejs.MepDefaults, c)),
                d.options.timeFormat ||
                  ((d.options.timeFormat = "mm:ss"),
                  d.options.alwaysShowHours &&
                    (d.options.timeFormat = "hh:mm:ss"),
                  d.options.showTimecodeFrameCount &&
                    (d.options.timeFormat += ":ff")),
                mejs.Utility.calculateTimeFormat(
                  0,
                  d.options,
                  d.options.framesPerSecond || 25
                ),
                (d.id = "mep_" + mejs.mepIndex++),
                (mejs.players[d.id] = d),
                d.init(),
                d)
            : void 0
        );
      }),
      (mejs.MediaElementPlayer.prototype = {
        hasFocus: !1,
        controlsAreVisible: !0,
        init: function () {
          var b = this,
            c = mejs.MediaFeatures,
            d = a.extend(!0, {}, b.options, {
              success: function (a, c) {
                b.meReady(a, c);
              },
              error: function (a) {
                b.handleError(a);
              },
            }),
            e = b.media.tagName.toLowerCase();
          if (
            ((b.isDynamic = "audio" !== e && "video" !== e),
            b.isDynamic
              ? (b.isVideo = b.options.isVideo)
              : (b.isVideo = "audio" !== e && b.options.isVideo),
            (c.isiPad && b.options.iPadUseNativeControls) ||
              (c.isiPhone && b.options.iPhoneUseNativeControls))
          )
            b.$media.attr("controls", "controls"),
              c.isiPad && null !== b.media.getAttribute("autoplay") && b.play();
          else if (c.isAndroid && b.options.AndroidUseNativeControls);
          else {
            b.$media.removeAttr("controls");
            var f = b.isVideo
              ? mejs.i18n.t("Video Player")
              : mejs.i18n.t("Audio Player");
            a('<span class="mejs-offscreen">' + f + "</span>").insertBefore(
              b.$media
            ),
              (b.container = a(
                '<div id="' +
                  b.id +
                  '" class="mejs-container ' +
                  (mejs.MediaFeatures.svgAsImg ? "svg" : "no-svg") +
                  '" tabindex="0" role="application" aria-label="' +
                  f +
                  '"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>'
              )
                .addClass(b.$media[0].className)
                .insertBefore(b.$media)
                .focus(function (a) {
                  if (!b.controlsAreVisible) {
                    b.showControls(!0);
                    var c = b.container.find(".mejs-playpause-button > button");
                    c.focus();
                  }
                })),
              b.container.addClass(
                (c.isAndroid ? "mejs-android " : "") +
                  (c.isiOS ? "mejs-ios " : "") +
                  (c.isiPad ? "mejs-ipad " : "") +
                  (c.isiPhone ? "mejs-iphone " : "") +
                  (b.isVideo ? "mejs-video " : "mejs-audio ")
              ),
              b.container.find(".mejs-mediaelement").append(b.$media),
              (b.node.player = b),
              (b.controls = b.container.find(".mejs-controls")),
              (b.layers = b.container.find(".mejs-layers"));
            var g = b.isVideo ? "video" : "audio",
              h = g.substring(0, 1).toUpperCase() + g.substring(1);
            b.options[g + "Width"] > 0 ||
            b.options[g + "Width"].toString().indexOf("%") > -1
              ? (b.width = b.options[g + "Width"])
              : "" !== b.media.style.width && null !== b.media.style.width
              ? (b.width = b.media.style.width)
              : null !== b.media.getAttribute("width")
              ? (b.width = b.$media.attr("width"))
              : (b.width = b.options["default" + h + "Width"]),
              b.options[g + "Height"] > 0 ||
              b.options[g + "Height"].toString().indexOf("%") > -1
                ? (b.height = b.options[g + "Height"])
                : "" !== b.media.style.height && null !== b.media.style.height
                ? (b.height = b.media.style.height)
                : null !== b.$media[0].getAttribute("height")
                ? (b.height = b.$media.attr("height"))
                : (b.height = b.options["default" + h + "Height"]),
              b.setPlayerSize(b.width, b.height),
              (d.pluginWidth = b.width),
              (d.pluginHeight = b.height);
          }
          mejs.MediaElement(b.$media[0], d),
            "undefined" != typeof b.container &&
              b.controlsAreVisible &&
              b.container.trigger("controlsshown");
        },
        showControls: function (a) {
          var b = this;
          (a = "undefined" == typeof a || a),
            b.controlsAreVisible ||
              (a
                ? (b.controls
                    .removeClass("mejs-offscreen")
                    .stop(!0, !0)
                    .fadeIn(200, function () {
                      (b.controlsAreVisible = !0),
                        b.container.trigger("controlsshown");
                    }),
                  b.container
                    .find(".mejs-control")
                    .removeClass("mejs-offscreen")
                    .stop(!0, !0)
                    .fadeIn(200, function () {
                      b.controlsAreVisible = !0;
                    }))
                : (b.controls
                    .removeClass("mejs-offscreen")
                    .css("display", "block"),
                  b.container
                    .find(".mejs-control")
                    .removeClass("mejs-offscreen")
                    .css("display", "block"),
                  (b.controlsAreVisible = !0),
                  b.container.trigger("controlsshown")),
              b.setControlsSize());
        },
        hideControls: function (b) {
          var c = this;
          (b = "undefined" == typeof b || b),
            !c.controlsAreVisible ||
              c.options.alwaysShowControls ||
              c.keyboardAction ||
              (b
                ? (c.controls.stop(!0, !0).fadeOut(200, function () {
                    a(this).addClass("mejs-offscreen").css("display", "block"),
                      (c.controlsAreVisible = !1),
                      c.container.trigger("controlshidden");
                  }),
                  c.container
                    .find(".mejs-control")
                    .stop(!0, !0)
                    .fadeOut(200, function () {
                      a(this)
                        .addClass("mejs-offscreen")
                        .css("display", "block");
                    }))
                : (c.controls
                    .addClass("mejs-offscreen")
                    .css("display", "block"),
                  c.container
                    .find(".mejs-control")
                    .addClass("mejs-offscreen")
                    .css("display", "block"),
                  (c.controlsAreVisible = !1),
                  c.container.trigger("controlshidden")));
        },
        controlsTimer: null,
        startControlsTimer: function (a) {
          var b = this;
          (a = "undefined" != typeof a ? a : 1500),
            b.killControlsTimer("start"),
            (b.controlsTimer = setTimeout(function () {
              b.hideControls(), b.killControlsTimer("hide");
            }, a));
        },
        killControlsTimer: function (a) {
          var b = this;
          null !== b.controlsTimer &&
            (clearTimeout(b.controlsTimer),
            delete b.controlsTimer,
            (b.controlsTimer = null));
        },
        controlsEnabled: !0,
        disableControls: function () {
          var a = this;
          a.killControlsTimer(),
            a.hideControls(!1),
            (this.controlsEnabled = !1);
        },
        enableControls: function () {
          var a = this;
          a.showControls(!1), (a.controlsEnabled = !0);
        },
        meReady: function (b, c) {
          var d,
            e,
            f = this,
            g = mejs.MediaFeatures,
            h = c.getAttribute("autoplay"),
            i = !("undefined" == typeof h || null === h || "false" === h);
          if (!f.created) {
            if (
              ((f.created = !0),
              (f.media = b),
              (f.domNode = c),
              !(
                (g.isAndroid && f.options.AndroidUseNativeControls) ||
                (g.isiPad && f.options.iPadUseNativeControls) ||
                (g.isiPhone && f.options.iPhoneUseNativeControls)
              ))
            ) {
              f.buildposter(f, f.controls, f.layers, f.media),
                f.buildkeyboard(f, f.controls, f.layers, f.media),
                f.buildoverlays(f, f.controls, f.layers, f.media),
                f.findTracks();
              for (d in f.options.features)
                if (((e = f.options.features[d]), f["build" + e]))
                  try {
                    f["build" + e](f, f.controls, f.layers, f.media);
                  } catch (j) {}
              f.container.trigger("controlsready"),
                f.setPlayerSize(f.width, f.height),
                f.setControlsSize(),
                f.isVideo &&
                  (mejs.MediaFeatures.hasTouch
                    ? f.$media.bind("touchstart", function () {
                        f.controlsAreVisible
                          ? f.hideControls(!1)
                          : f.controlsEnabled && f.showControls(!1);
                      })
                    : ((f.clickToPlayPauseCallback = function () {
                        f.options.clickToPlayPause &&
                          (f.media.paused ? f.play() : f.pause());
                      }),
                      f.media.addEventListener(
                        "click",
                        f.clickToPlayPauseCallback,
                        !1
                      ),
                      f.container
                        .bind("mouseenter", function () {
                          f.controlsEnabled &&
                            (f.options.alwaysShowControls ||
                              (f.killControlsTimer("enter"),
                              f.showControls(),
                              f.startControlsTimer(2500)));
                        })
                        .bind("mousemove", function () {
                          f.controlsEnabled &&
                            (f.controlsAreVisible || f.showControls(),
                            f.options.alwaysShowControls ||
                              f.startControlsTimer(2500));
                        })
                        .bind("mouseleave", function () {
                          f.controlsEnabled &&
                            (f.media.paused ||
                              f.options.alwaysShowControls ||
                              f.startControlsTimer(1e3));
                        })),
                  f.options.hideVideoControlsOnLoad && f.hideControls(!1),
                  i && !f.options.alwaysShowControls && f.hideControls(),
                  f.options.enableAutosize &&
                    f.media.addEventListener(
                      "loadedmetadata",
                      function (a) {
                        f.options.videoHeight <= 0 &&
                          null === f.domNode.getAttribute("height") &&
                          !isNaN(a.target.videoHeight) &&
                          (f.setPlayerSize(
                            a.target.videoWidth,
                            a.target.videoHeight
                          ),
                          f.setControlsSize(),
                          f.media.setVideoSize(
                            a.target.videoWidth,
                            a.target.videoHeight
                          ));
                      },
                      !1
                    )),
                b.addEventListener(
                  "play",
                  function () {
                    var a;
                    for (a in mejs.players) {
                      var b = mejs.players[a];
                      b.id == f.id ||
                        !f.options.pauseOtherPlayers ||
                        b.paused ||
                        b.ended ||
                        b.pause(),
                        (b.hasFocus = !1);
                    }
                    f.hasFocus = !0;
                  },
                  !1
                ),
                f.media.addEventListener(
                  "ended",
                  function (b) {
                    if (f.options.autoRewind)
                      try {
                        f.media.setCurrentTime(0),
                          window.setTimeout(function () {
                            a(f.container)
                              .find(".mejs-overlay-loading")
                              .parent()
                              .hide();
                          }, 20);
                      } catch (c) {}
                    f.media.pause(),
                      f.setProgressRail && f.setProgressRail(),
                      f.setCurrentRail && f.setCurrentRail(),
                      f.options.loop
                        ? f.play()
                        : !f.options.alwaysShowControls &&
                          f.controlsEnabled &&
                          f.showControls();
                  },
                  !1
                ),
                f.media.addEventListener(
                  "loadedmetadata",
                  function (a) {
                    f.updateDuration && f.updateDuration(),
                      f.updateCurrent && f.updateCurrent(),
                      f.isFullScreen ||
                        (f.setPlayerSize(f.width, f.height),
                        f.setControlsSize());
                  },
                  !1
                );
              var k = null;
              f.media.addEventListener(
                "timeupdate",
                function () {
                  k !== this.duration &&
                    ((k = this.duration),
                    mejs.Utility.calculateTimeFormat(
                      k,
                      f.options,
                      f.options.framesPerSecond || 25
                    ));
                },
                !1
              ),
                f.container.focusout(function (b) {
                  if (b.relatedTarget) {
                    var c = a(b.relatedTarget);
                    f.keyboardAction &&
                      0 === c.parents(".mejs-container").length &&
                      ((f.keyboardAction = !1), f.hideControls(!0));
                  }
                }),
                setTimeout(function () {
                  f.setPlayerSize(f.width, f.height), f.setControlsSize();
                }, 50),
                f.globalBind("resize", function () {
                  f.isFullScreen ||
                    (mejs.MediaFeatures.hasTrueNativeFullScreen &&
                      document.webkitIsFullScreen) ||
                    f.setPlayerSize(f.width, f.height),
                    f.setControlsSize();
                }),
                "youtube" == f.media.pluginType &&
                  (g.isiOS || g.isAndroid) &&
                  f.container.find(".mejs-overlay-play").hide();
            }
            i && "native" == b.pluginType && f.play(),
              f.options.success &&
                ("string" == typeof f.options.success
                  ? window[f.options.success](f.media, f.domNode, f)
                  : f.options.success(f.media, f.domNode, f));
          }
        },
        handleError: function (a) {
          var b = this;
          b.controls && b.controls.hide(),
            b.options.error && b.options.error(a);
        },
        setPlayerSize: function (b, c) {
          var d = this;
          if (!d.options.setDimensions) return !1;
          if (
            ("undefined" != typeof b && (d.width = b),
            "undefined" != typeof c && (d.height = c),
            d.height.toString().indexOf("%") > 0 ||
              ("none" !== d.$node.css("max-width") &&
                "t.width" !== d.$node.css("max-width")) ||
              (d.$node[0].currentStyle &&
                "100%" === d.$node[0].currentStyle.maxWidth))
          ) {
            var e = (function () {
                return d.isVideo
                  ? d.media.videoWidth && d.media.videoWidth > 0
                    ? d.media.videoWidth
                    : null !== d.media.getAttribute("width")
                    ? d.media.getAttribute("width")
                    : d.options.defaultVideoWidth
                  : d.options.defaultAudioWidth;
              })(),
              f = (function () {
                return d.isVideo
                  ? d.media.videoHeight && d.media.videoHeight > 0
                    ? d.media.videoHeight
                    : null !== d.media.getAttribute("height")
                    ? d.media.getAttribute("height")
                    : d.options.defaultVideoHeight
                  : d.options.defaultAudioHeight;
              })(),
              g = d.container.parent().closest(":visible").width(),
              h = d.container.parent().closest(":visible").height(),
              i =
                d.isVideo || !d.options.autosizeProgress
                  ? parseInt((g * f) / e, 10)
                  : f;
            isNaN(i) && (i = h),
              d.container.parent().length > 0 &&
                "body" === d.container.parent()[0].tagName.toLowerCase() &&
                ((g = a(window).width()), (i = a(window).height())),
              i &&
                g &&
                (d.container.width(g).height(i),
                d.$media
                  .add(d.container.find(".mejs-shim"))
                  .width("100%")
                  .height("100%"),
                d.isVideo && d.media.setVideoSize && d.media.setVideoSize(g, i),
                d.layers.children(".mejs-layer").width("100%").height("100%"));
          } else
            d.container.width(d.width).height(d.height),
              d.layers.children(".mejs-layer").width(d.width).height(d.height);
        },
        setControlsSize: function () {
          var b = this,
            c = 0,
            d = 0,
            e = b.controls.find(".mejs-time-rail"),
            f = b.controls.find(".mejs-time-total"),
            g = e.siblings(),
            h = g.last(),
            i = null;
          if (b.container.is(":visible") && e.length && e.is(":visible")) {
            b.options &&
              !b.options.autosizeProgress &&
              (d = parseInt(e.css("width"), 10)),
              (0 !== d && d) ||
                (g.each(function () {
                  var b = a(this);
                  "absolute" != b.css("position") &&
                    b.is(":visible") &&
                    (c += a(this).outerWidth(!0));
                }),
                (d = b.controls.width() - c - (e.outerWidth(!0) - e.width())));
            do
              e.width(d),
                f.width(d - (f.outerWidth(!0) - f.width())),
                "absolute" != h.css("position") &&
                  ((i = h.length ? h.position() : null), d--);
            while (null !== i && i.top > 0 && d > 0);
            b.container.trigger("controlsresize");
          }
        },
        buildposter: function (b, c, d, e) {
          var f = this,
            g = a('<div class="mejs-poster mejs-layer"></div>').appendTo(d),
            h = b.$media.attr("poster");
          "" !== b.options.poster && (h = b.options.poster),
            h ? f.setPoster(h) : g.hide(),
            e.addEventListener(
              "play",
              function () {
                g.hide();
              },
              !1
            ),
            b.options.showPosterWhenEnded &&
              b.options.autoRewind &&
              e.addEventListener(
                "ended",
                function () {
                  g.show();
                },
                !1
              );
        },
        setPoster: function (b) {
          var c = this,
            d = c.container.find(".mejs-poster"),
            e = d.find("img");
          0 === e.length &&
            (e = a('<img width="100%" height="100%" alt="" />').appendTo(d)),
            e.attr("src", b),
            d.css({ "background-image": "url(" + b + ")" });
        },
        buildoverlays: function (b, c, d, e) {
          var f = this;
          if (b.isVideo) {
            var g = a(
                '<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>'
              )
                .hide()
                .appendTo(d),
              h = a(
                '<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>'
              )
                .hide()
                .appendTo(d),
              i = a(
                '<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>'
              )
                .appendTo(d)
                .bind("click", function () {
                  f.options.clickToPlayPause && e.paused && e.play();
                });
            e.addEventListener(
              "play",
              function () {
                i.hide(),
                  g.hide(),
                  c.find(".mejs-time-buffering").hide(),
                  h.hide();
              },
              !1
            ),
              e.addEventListener(
                "playing",
                function () {
                  i.hide(),
                    g.hide(),
                    c.find(".mejs-time-buffering").hide(),
                    h.hide();
                },
                !1
              ),
              e.addEventListener(
                "seeking",
                function () {
                  g.show(), c.find(".mejs-time-buffering").show();
                },
                !1
              ),
              e.addEventListener(
                "seeked",
                function () {
                  g.hide(), c.find(".mejs-time-buffering").hide();
                },
                !1
              ),
              e.addEventListener(
                "pause",
                function () {
                  mejs.MediaFeatures.isiPhone || i.show();
                },
                !1
              ),
              e.addEventListener(
                "waiting",
                function () {
                  g.show(), c.find(".mejs-time-buffering").show();
                },
                !1
              ),
              e.addEventListener(
                "loadeddata",
                function () {
                  g.show(),
                    c.find(".mejs-time-buffering").show(),
                    mejs.MediaFeatures.isAndroid &&
                      (e.canplayTimeout = window.setTimeout(function () {
                        if (document.createEvent) {
                          var a = document.createEvent("HTMLEvents");
                          return (
                            a.initEvent("canplay", !0, !0), e.dispatchEvent(a)
                          );
                        }
                      }, 300));
                },
                !1
              ),
              e.addEventListener(
                "canplay",
                function () {
                  g.hide(),
                    c.find(".mejs-time-buffering").hide(),
                    clearTimeout(e.canplayTimeout);
                },
                !1
              ),
              e.addEventListener(
                "error",
                function (a) {
                  f.handleError(a),
                    g.hide(),
                    i.hide(),
                    h.show(),
                    h
                      .find(".mejs-overlay-error")
                      .html("Error loading this resource");
                },
                !1
              ),
              e.addEventListener(
                "keydown",
                function (a) {
                  f.onkeydown(b, e, a);
                },
                !1
              );
          }
        },
        buildkeyboard: function (b, c, d, e) {
          var f = this;
          f.container.keydown(function () {
            f.keyboardAction = !0;
          }),
            f.globalBind("keydown", function (c) {
              return (
                (b.hasFocus =
                  0 !== a(c.target).closest(".mejs-container").length),
                f.onkeydown(b, e, c)
              );
            }),
            f.globalBind("click", function (c) {
              b.hasFocus = 0 !== a(c.target).closest(".mejs-container").length;
            });
        },
        onkeydown: function (a, b, c) {
          if (a.hasFocus && a.options.enableKeyboard)
            for (var d = 0, e = a.options.keyActions.length; e > d; d++)
              for (
                var f = a.options.keyActions[d], g = 0, h = f.keys.length;
                h > g;
                g++
              )
                if (c.keyCode == f.keys[g])
                  return (
                    "function" == typeof c.preventDefault && c.preventDefault(),
                    f.action(a, b, c.keyCode),
                    !1
                  );
          return !0;
        },
        findTracks: function () {
          var b = this,
            c = b.$media.find("track");
          (b.tracks = []),
            c.each(function (c, d) {
              (d = a(d)),
                b.tracks.push({
                  srclang: d.attr("srclang")
                    ? d.attr("srclang").toLowerCase()
                    : "",
                  src: d.attr("src"),
                  kind: d.attr("kind"),
                  label: d.attr("label") || "",
                  entries: [],
                  isLoaded: !1,
                });
            });
        },
        changeSkin: function (a) {
          (this.container[0].className = "mejs-container " + a),
            this.setPlayerSize(this.width, this.height),
            this.setControlsSize();
        },
        play: function () {
          this.load(), this.media.play();
        },
        pause: function () {
          try {
            this.media.pause();
          } catch (a) {}
        },
        load: function () {
          this.isLoaded || this.media.load(), (this.isLoaded = !0);
        },
        setMuted: function (a) {
          this.media.setMuted(a);
        },
        setCurrentTime: function (a) {
          this.media.setCurrentTime(a);
        },
        getCurrentTime: function () {
          return this.media.currentTime;
        },
        setVolume: function (a) {
          this.media.setVolume(a);
        },
        getVolume: function () {
          return this.media.volume;
        },
        setSrc: function (a) {
          this.media.setSrc(a);
        },
        remove: function () {
          var a,
            b,
            c = this;
          c.container.prev(".mejs-offscreen").remove();
          for (a in c.options.features)
            if (((b = c.options.features[a]), c["clean" + b]))
              try {
                c["clean" + b](c);
              } catch (d) {}
          c.isDynamic
            ? c.$node.insertBefore(c.container)
            : (c.$media.prop("controls", !0),
              c.$node.clone().insertBefore(c.container).show(),
              c.$node.remove()),
            "native" !== c.media.pluginType && c.media.remove(),
            delete mejs.players[c.id],
            "object" == typeof c.container && c.container.remove(),
            c.globalUnbind(),
            delete c.node.player;
        },
        rebuildtracks: function () {
          var a = this;
          a.findTracks(), a.buildtracks(a, a.controls, a.layers, a.media);
        },
        resetSize: function () {
          var a = this;
          setTimeout(function () {
            a.setPlayerSize(a.width, a.height), a.setControlsSize();
          }, 50);
        },
      }),
      (function () {
        function b(b, d) {
          var e = { d: [], w: [] };
          return (
            a.each((b || "").split(" "), function (a, b) {
              var f = b + "." + d;
              0 === f.indexOf(".")
                ? (e.d.push(f), e.w.push(f))
                : e[c.test(b) ? "w" : "d"].push(f);
            }),
            (e.d = e.d.join(" ")),
            (e.w = e.w.join(" ")),
            e
          );
        }
        var c =
          /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;
        (mejs.MediaElementPlayer.prototype.globalBind = function (c, d, e) {
          var f = this,
            g = f.node ? f.node.ownerDocument : document;
          (c = b(c, f.id)),
            c.d && a(g).bind(c.d, d, e),
            c.w && a(window).bind(c.w, d, e);
        }),
          (mejs.MediaElementPlayer.prototype.globalUnbind = function (c, d) {
            var e = this,
              f = e.node ? e.node.ownerDocument : document;
            (c = b(c, e.id)),
              c.d && a(f).unbind(c.d, d),
              c.w && a(window).unbind(c.w, d);
          });
      })(),
      "undefined" != typeof a &&
        ((a.fn.mediaelementplayer = function (b) {
          return (
            b === !1
              ? this.each(function () {
                  var b = a(this).data("mediaelementplayer");
                  b && b.remove(), a(this).removeData("mediaelementplayer");
                })
              : this.each(function () {
                  a(this).data(
                    "mediaelementplayer",
                    new mejs.MediaElementPlayer(this, b)
                  );
                }),
            this
          );
        }),
        a(document).ready(function () {
          a(".mejs-player").mediaelementplayer();
        })),
      (window.MediaElementPlayer = mejs.MediaElementPlayer);
  })(mejs.$),
  (function (a) {
    a.extend(mejs.MepDefaults, {
      playText: mejs.i18n.t("Play"),
      pauseText: mejs.i18n.t("Pause"),
    }),
      a.extend(MediaElementPlayer.prototype, {
        buildplaypause: function (b, c, d, e) {
          function f(a) {
            "play" === a
              ? (i.removeClass("mejs-play").addClass("mejs-pause"),
                j.attr({ title: h.pauseText, "aria-label": h.pauseText }))
              : (i.removeClass("mejs-pause").addClass("mejs-play"),
                j.attr({ title: h.playText, "aria-label": h.playText }));
          }
          var g = this,
            h = g.options,
            i = a(
              '<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' +
                g.id +
                '" title="' +
                h.playText +
                '" aria-label="' +
                h.playText +
                '"></button></div>'
            )
              .appendTo(c)
              .click(function (a) {
                return a.preventDefault(), e.paused ? e.play() : e.pause(), !1;
              }),
            j = i.find("button");
          f("pse"),
            e.addEventListener(
              "play",
              function () {
                f("play");
              },
              !1
            ),
            e.addEventListener(
              "playing",
              function () {
                f("play");
              },
              !1
            ),
            e.addEventListener(
              "pause",
              function () {
                f("pse");
              },
              !1
            ),
            e.addEventListener(
              "paused",
              function () {
                f("pse");
              },
              !1
            );
        },
      });
  })(mejs.$),
  (function (a) {
    a.extend(mejs.MepDefaults, { stopText: "Stop" }),
      a.extend(MediaElementPlayer.prototype, {
        buildstop: function (b, c, d, e) {
          var f = this;
          a(
            '<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' +
              f.id +
              '" title="' +
              f.options.stopText +
              '" aria-label="' +
              f.options.stopText +
              '"></button></div>'
          )
            .appendTo(c)
            .click(function () {
              e.paused || e.pause(),
                e.currentTime > 0 &&
                  (e.setCurrentTime(0),
                  e.pause(),
                  c.find(".mejs-time-current").width("0px"),
                  c.find(".mejs-time-handle").css("left", "0px"),
                  c
                    .find(".mejs-time-float-current")
                    .html(mejs.Utility.secondsToTimeCode(0, b.options)),
                  c
                    .find(".mejs-currenttime")
                    .html(mejs.Utility.secondsToTimeCode(0, b.options)),
                  d.find(".mejs-poster").show());
            });
        },
      });
  })(mejs.$),
  (function (a) {
    a.extend(mejs.MepDefaults, {
      progessHelpText: mejs.i18n.t(
        "Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds."
      ),
    }),
      a.extend(MediaElementPlayer.prototype, {
        buildprogress: function (b, c, d, e) {
          a(
            '<div class="mejs-time-rail"><span  class="mejs-time-total mejs-time-slider"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>'
          ).appendTo(c),
            c.find(".mejs-time-buffering").hide();
          var f = this,
            g = c.find(".mejs-time-total"),
            h = c.find(".mejs-time-loaded"),
            i = c.find(".mejs-time-current"),
            j = c.find(".mejs-time-handle"),
            k = c.find(".mejs-time-float"),
            l = c.find(".mejs-time-float-current"),
            m = c.find(".mejs-time-slider"),
            n = function (a) {
              var c,
                d = g.offset(),
                f = g.width(),
                h = 0,
                i = 0,
                j = 0;
              (c =
                a.originalEvent && a.originalEvent.changedTouches
                  ? a.originalEvent.changedTouches[0].pageX
                  : a.changedTouches
                  ? a.changedTouches[0].pageX
                  : a.pageX),
                e.duration &&
                  (c < d.left
                    ? (c = d.left)
                    : c > f + d.left && (c = f + d.left),
                  (j = c - d.left),
                  (h = j / f),
                  (i = 0.02 >= h ? 0 : h * e.duration),
                  o && i !== e.currentTime && e.setCurrentTime(i),
                  mejs.MediaFeatures.hasTouch ||
                    (k.css("left", j),
                    l.html(mejs.Utility.secondsToTimeCode(i, b.options)),
                    k.show()));
            },
            o = !1,
            p = !1,
            q = 0,
            r = !1,
            s = b.options.autoRewind,
            t = function (a) {
              var c = e.currentTime,
                d = mejs.i18n.t("Time Slider"),
                f = mejs.Utility.secondsToTimeCode(c, b.options),
                g = e.duration;
              m.attr({
                "aria-label": d,
                "aria-valuemin": 0,
                "aria-valuemax": g,
                "aria-valuenow": c,
                "aria-valuetext": f,
                role: "slider",
                tabindex: 0,
              });
            },
            u = function () {
              var a = new Date();
              a - q >= 1e3 && e.play();
            };
          m.bind("focus", function (a) {
            b.options.autoRewind = !1;
          }),
            m.bind("blur", function (a) {
              b.options.autoRewind = s;
            }),
            m.bind("keydown", function (a) {
              new Date() - q >= 1e3 && (r = e.paused);
              var b = a.keyCode,
                c = e.duration,
                d = e.currentTime;
              switch (b) {
                case 37:
                  d -= 1;
                  break;
                case 39:
                  d += 1;
                  break;
                case 38:
                  d += Math.floor(0.1 * c);
                  break;
                case 40:
                  d -= Math.floor(0.1 * c);
                  break;
                case 36:
                  d = 0;
                  break;
                case 35:
                  d = c;
                  break;
                case 10:
                  return void (e.paused ? e.play() : e.pause());
                case 13:
                  return void (e.paused ? e.play() : e.pause());
                default:
                  return;
              }
              return (
                (d = 0 > d ? 0 : d >= c ? c : Math.floor(d)),
                (q = new Date()),
                r || e.pause(),
                d < e.duration && !r && setTimeout(u, 1100),
                e.setCurrentTime(d),
                a.preventDefault(),
                a.stopPropagation(),
                !1
              );
            }),
            g
              .bind("mousedown touchstart", function (a) {
                (1 === a.which || 0 === a.which) &&
                  ((o = !0),
                  n(a),
                  f.globalBind("mousemove.dur touchmove.dur", function (a) {
                    n(a);
                  }),
                  f.globalBind("mouseup.dur touchend.dur", function (a) {
                    (o = !1), k.hide(), f.globalUnbind(".dur");
                  }));
              })
              .bind("mouseenter", function (a) {
                (p = !0),
                  f.globalBind("mousemove.dur", function (a) {
                    n(a);
                  }),
                  mejs.MediaFeatures.hasTouch || k.show();
              })
              .bind("mouseleave", function (a) {
                (p = !1), o || (f.globalUnbind(".dur"), k.hide());
              }),
            e.addEventListener(
              "progress",
              function (a) {
                b.setProgressRail(a), b.setCurrentRail(a);
              },
              !1
            ),
            e.addEventListener(
              "timeupdate",
              function (a) {
                b.setProgressRail(a), b.setCurrentRail(a), t(a);
              },
              !1
            ),
            f.container.on("controlsresize", function () {
              b.setProgressRail(), b.setCurrentRail();
            }),
            (f.loaded = h),
            (f.total = g),
            (f.current = i),
            (f.handle = j);
        },
        setProgressRail: function (a) {
          var b = this,
            c = void 0 !== a ? a.target : b.media,
            d = null;
          c &&
          c.buffered &&
          c.buffered.length > 0 &&
          c.buffered.end &&
          c.duration
            ? (d = c.buffered.end(c.buffered.length - 1) / c.duration)
            : c &&
              void 0 !== c.bytesTotal &&
              c.bytesTotal > 0 &&
              void 0 !== c.bufferedBytes
            ? (d = c.bufferedBytes / c.bytesTotal)
            : a &&
              a.lengthComputable &&
              0 !== a.total &&
              (d = a.loaded / a.total),
            null !== d &&
              ((d = Math.min(1, Math.max(0, d))),
              b.loaded && b.total && b.loaded.width(b.total.width() * d));
        },
        setCurrentRail: function () {
          var a = this;
          if (
            void 0 !== a.media.currentTime &&
            a.media.duration &&
            a.total &&
            a.handle
          ) {
            var b = Math.round(
                (a.total.width() * a.media.currentTime) / a.media.duration
              ),
              c = b - Math.round(a.handle.outerWidth(!0) / 2);
            a.current.width(b), a.handle.css("left", c);
          }
        },
      });
  })(mejs.$),
  (function (a) {
    a.extend(mejs.MepDefaults, {
      duration: -1,
      timeAndDurationSeparator: "<span> | </span>",
    }),
      a.extend(MediaElementPlayer.prototype, {
        buildcurrent: function (b, c, d, e) {
          var f = this;
          a(
            '<div class="mejs-time" role="timer" aria-live="off"><span class="mejs-currenttime">' +
              mejs.Utility.secondsToTimeCode(0, b.options) +
              "</span></div>"
          ).appendTo(c),
            (f.currenttime = f.controls.find(".mejs-currenttime")),
            e.addEventListener(
              "timeupdate",
              function () {
                b.updateCurrent();
              },
              !1
            );
        },
        buildduration: function (b, c, d, e) {
          var f = this;
          c.children().last().find(".mejs-currenttime").length > 0
            ? a(
                f.options.timeAndDurationSeparator +
                  '<span class="mejs-duration">' +
                  mejs.Utility.secondsToTimeCode(
                    f.options.duration,
                    f.options
                  ) +
                  "</span>"
              ).appendTo(c.find(".mejs-time"))
            : (c
                .find(".mejs-currenttime")
                .parent()
                .addClass("mejs-currenttime-container"),
              a(
                '<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' +
                  mejs.Utility.secondsToTimeCode(
                    f.options.duration,
                    f.options
                  ) +
                  "</span></div>"
              ).appendTo(c)),
            (f.durationD = f.controls.find(".mejs-duration")),
            e.addEventListener(
              "timeupdate",
              function () {
                b.updateDuration();
              },
              !1
            );
        },
        updateCurrent: function () {
          var a = this,
            b = a.media.currentTime;
          isNaN(b) && (b = 0),
            a.currenttime &&
              a.currenttime.html(mejs.Utility.secondsToTimeCode(b, a.options));
        },
        updateDuration: function () {
          var a = this,
            b = a.media.duration;
          a.options.duration > 0 && (b = a.options.duration),
            isNaN(b) && (b = 0),
            a.container.toggleClass("mejs-long-video", b > 3600),
            a.durationD &&
              b > 0 &&
              a.durationD.html(mejs.Utility.secondsToTimeCode(b, a.options));
        },
      });
  })(mejs.$),
  (function (a) {
    a.extend(mejs.MepDefaults, {
      muteText: mejs.i18n.t("Mute Toggle"),
      allyVolumeControlText: mejs.i18n.t(
        "Use Up/Down Arrow keys to increase or decrease volume."
      ),
      hideVolumeOnTouchDevices: !0,
      audioVolume: "horizontal",
      videoVolume: "vertical",
    }),
      a.extend(MediaElementPlayer.prototype, {
        buildvolume: function (b, c, d, e) {
          if (
            (!mejs.MediaFeatures.isAndroid && !mejs.MediaFeatures.isiOS) ||
            !this.options.hideVolumeOnTouchDevices
          ) {
            var f = this,
              g = f.isVideo ? f.options.videoVolume : f.options.audioVolume,
              h =
                "horizontal" == g
                  ? a(
                      '<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' +
                        f.id +
                        '" title="' +
                        f.options.muteText +
                        '" aria-label="' +
                        f.options.muteText +
                        '"></button></div><a href="javascript:void(0);" class="mejs-horizontal-volume-slider"><span class="mejs-offscreen">' +
                        f.options.allyVolumeControlText +
                        '</span><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></a>'
                    ).appendTo(c)
                  : a(
                      '<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' +
                        f.id +
                        '" title="' +
                        f.options.muteText +
                        '" aria-label="' +
                        f.options.muteText +
                        '"></button><a href="javascript:void(0);" class="mejs-volume-slider"><span class="mejs-offscreen">' +
                        f.options.allyVolumeControlText +
                        '</span><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></a></div>'
                    ).appendTo(c),
              i = f.container.find(
                ".mejs-volume-slider, .mejs-horizontal-volume-slider"
              ),
              j = f.container.find(
                ".mejs-volume-total, .mejs-horizontal-volume-total"
              ),
              k = f.container.find(
                ".mejs-volume-current, .mejs-horizontal-volume-current"
              ),
              l = f.container.find(
                ".mejs-volume-handle, .mejs-horizontal-volume-handle"
              ),
              m = function (a, b) {
                if (!i.is(":visible") && "undefined" == typeof b)
                  return i.show(), m(a, !0), void i.hide();
                (a = Math.max(0, a)),
                  (a = Math.min(a, 1)),
                  0 === a
                    ? (h.removeClass("mejs-mute").addClass("mejs-unmute"),
                      h
                        .children("button")
                        .attr("title", mejs.i18n.t("Unmute"))
                        .attr("aria-label", mejs.i18n.t("Unmute")))
                    : (h.removeClass("mejs-unmute").addClass("mejs-mute"),
                      h
                        .children("button")
                        .attr("title", mejs.i18n.t("Mute"))
                        .attr("aria-label", mejs.i18n.t("Mute")));
                var c = j.position();
                if ("vertical" == g) {
                  var d = j.height(),
                    e = d - d * a;
                  l.css("top", Math.round(c.top + e - l.height() / 2)),
                    k.height(d - e),
                    k.css("top", c.top + e);
                } else {
                  var f = j.width(),
                    n = f * a;
                  l.css("left", Math.round(c.left + n - l.width() / 2)),
                    k.width(Math.round(n));
                }
              },
              n = function (a) {
                var b = null,
                  c = j.offset();
                if ("vertical" === g) {
                  var d = j.height(),
                    f = a.pageY - c.top;
                  if (((b = (d - f) / d), 0 === c.top || 0 === c.left)) return;
                } else {
                  var h = j.width(),
                    i = a.pageX - c.left;
                  b = i / h;
                }
                (b = Math.max(0, b)),
                  (b = Math.min(b, 1)),
                  m(b),
                  0 === b ? e.setMuted(!0) : e.setMuted(!1),
                  e.setVolume(b);
              },
              o = !1,
              p = !1;
            h.hover(
              function () {
                i.show(), (p = !0);
              },
              function () {
                (p = !1), o || "vertical" != g || i.hide();
              }
            );
            var q = function (a) {
              var b = Math.floor(100 * e.volume);
              i.attr({
                "aria-label": mejs.i18n.t("volumeSlider"),
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": b,
                "aria-valuetext": b + "%",
                role: "slider",
                tabindex: 0,
              });
            };
            i
              .bind("mouseover", function () {
                p = !0;
              })
              .bind("mousedown", function (a) {
                return (
                  n(a),
                  f.globalBind("mousemove.vol", function (a) {
                    n(a);
                  }),
                  f.globalBind("mouseup.vol", function () {
                    (o = !1),
                      f.globalUnbind(".vol"),
                      p || "vertical" != g || i.hide();
                  }),
                  (o = !0),
                  !1
                );
              })
              .bind("keydown", function (a) {
                var b = a.keyCode,
                  c = e.volume;
                switch (b) {
                  case 38:
                    c += 0.1;
                    break;
                  case 40:
                    c -= 0.1;
                    break;
                  default:
                    return !0;
                }
                return (o = !1), m(c), e.setVolume(c), !1;
              }),
              h.find("button").click(function () {
                e.setMuted(!e.muted);
              }),
              h.find("button").bind("focus", function () {
                i.show();
              }),
              e.addEventListener(
                "volumechange",
                function (a) {
                  o ||
                    (e.muted
                      ? (m(0),
                        h.removeClass("mejs-mute").addClass("mejs-unmute"))
                      : (m(e.volume),
                        h.removeClass("mejs-unmute").addClass("mejs-mute"))),
                    q(a);
                },
                !1
              ),
              0 === b.options.startVolume && e.setMuted(!0),
              "native" === e.pluginType && e.setVolume(b.options.startVolume),
              f.container.on("controlsresize", function () {
                m(e.volume);
              });
          }
        },
      });
  })(mejs.$),
  (function (a) {
    a.extend(mejs.MepDefaults, {
      usePluginFullScreen: !0,
      newWindowCallback: function () {
        return "";
      },
      fullscreenText: mejs.i18n.t("Fullscreen"),
    }),
      a.extend(MediaElementPlayer.prototype, {
        isFullScreen: !1,
        isNativeFullScreen: !1,
        isInIframe: !1,
        fullscreenMode: "",
        buildfullscreen: function (b, c, d, e) {
          if (b.isVideo) {
            (b.isInIframe = window.location != window.parent.location),
              e.addEventListener("play", function () {
                b.detectFullscreenMode();
              });
            var f = this,
              g = null,
              h = a(
                '<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' +
                  f.id +
                  '" title="' +
                  f.options.fullscreenText +
                  '" aria-label="' +
                  f.options.fullscreenText +
                  '"></button></div>'
              )
                .appendTo(c)
                .on("click", function () {
                  var a =
                    (mejs.MediaFeatures.hasTrueNativeFullScreen &&
                      mejs.MediaFeatures.isFullScreen()) ||
                    b.isFullScreen;
                  a ? b.exitFullScreen() : b.enterFullScreen();
                })
                .on("mouseover", function () {
                  if ("plugin-hover" == f.fullscreenMode) {
                    null !== g && (clearTimeout(g), delete g);
                    var a = h.offset(),
                      c = b.container.offset();
                    e.positionFullscreenButton(
                      a.left - c.left,
                      a.top - c.top,
                      !0
                    );
                  }
                })
                .on("mouseout", function () {
                  "plugin-hover" == f.fullscreenMode &&
                    (null !== g && (clearTimeout(g), delete g),
                    (g = setTimeout(function () {
                      e.hideFullscreenButton();
                    }, 1500)));
                });
            if (
              ((b.fullscreenBtn = h),
              f.globalBind("keydown", function (a) {
                27 == a.keyCode &&
                  ((mejs.MediaFeatures.hasTrueNativeFullScreen &&
                    mejs.MediaFeatures.isFullScreen()) ||
                    f.isFullScreen) &&
                  b.exitFullScreen();
              }),
              (f.normalHeight = 0),
              (f.normalWidth = 0),
              mejs.MediaFeatures.hasTrueNativeFullScreen)
            ) {
              var i = function (a) {
                b.isFullScreen &&
                  (mejs.MediaFeatures.isFullScreen()
                    ? ((b.isNativeFullScreen = !0), b.setControlsSize())
                    : ((b.isNativeFullScreen = !1), b.exitFullScreen()));
              };
              b.globalBind(mejs.MediaFeatures.fullScreenEventName, i);
            }
          }
        },
        detectFullscreenMode: function () {
          var a = this,
            b = "",
            c = mejs.MediaFeatures;
          return (
            c.hasTrueNativeFullScreen && "native" === a.media.pluginType
              ? (b = "native-native")
              : c.hasTrueNativeFullScreen &&
                "native" !== a.media.pluginType &&
                !c.hasFirefoxPluginMovingProblem
              ? (b = "plugin-native")
              : a.usePluginFullScreen
              ? mejs.MediaFeatures.supportsPointerEvents
                ? ((b = "plugin-click"), a.createPluginClickThrough())
                : (b = "plugin-hover")
              : (b = "fullwindow"),
            (a.fullscreenMode = b),
            b
          );
        },
        isPluginClickThroughCreated: !1,
        createPluginClickThrough: function () {
          var b = this;
          if (!b.isPluginClickThroughCreated) {
            var c,
              d,
              e = !1,
              f = function () {
                if (e) {
                  for (var a in g) g[a].hide();
                  b.fullscreenBtn.css("pointer-events", ""),
                    b.controls.css("pointer-events", ""),
                    b.media.removeEventListener(
                      "click",
                      b.clickToPlayPauseCallback
                    ),
                    (e = !1);
                }
              },
              g = {},
              h = ["top", "left", "right", "bottom"],
              i = function () {
                var a = fullscreenBtn.offset().left - b.container.offset().left,
                  d = fullscreenBtn.offset().top - b.container.offset().top,
                  e = fullscreenBtn.outerWidth(!0),
                  f = fullscreenBtn.outerHeight(!0),
                  h = b.container.width(),
                  i = b.container.height();
                for (c in g)
                  g[c].css({ position: "absolute", top: 0, left: 0 });
                g.top.width(h).height(d),
                  g.left.width(a).height(f).css({ top: d }),
                  g.right
                    .width(h - a - e)
                    .height(f)
                    .css({ top: d, left: a + e }),
                  g.bottom
                    .width(h)
                    .height(i - f - d)
                    .css({ top: d + f });
              };
            for (
              b.globalBind("resize", function () {
                i();
              }),
                c = 0,
                d = h.length;
              d > c;
              c++
            )
              g[h[c]] = a('<div class="mejs-fullscreen-hover" />')
                .appendTo(b.container)
                .mouseover(f)
                .hide();
            fullscreenBtn.on("mouseover", function () {
              if (!b.isFullScreen) {
                var a = fullscreenBtn.offset(),
                  d = player.container.offset();
                media.positionFullscreenButton(
                  a.left - d.left,
                  a.top - d.top,
                  !1
                ),
                  b.fullscreenBtn.css("pointer-events", "none"),
                  b.controls.css("pointer-events", "none"),
                  b.media.addEventListener("click", b.clickToPlayPauseCallback);
                for (c in g) g[c].show();
                i(), (e = !0);
              }
            }),
              media.addEventListener("fullscreenchange", function (a) {
                (b.isFullScreen = !b.isFullScreen),
                  b.isFullScreen
                    ? b.media.removeEventListener(
                        "click",
                        b.clickToPlayPauseCallback
                      )
                    : b.media.addEventListener(
                        "click",
                        b.clickToPlayPauseCallback
                      ),
                  f();
              }),
              b.globalBind("mousemove", function (a) {
                if (e) {
                  var c = fullscreenBtn.offset();
                  (a.pageY < c.top ||
                    a.pageY > c.top + fullscreenBtn.outerHeight(!0) ||
                    a.pageX < c.left ||
                    a.pageX > c.left + fullscreenBtn.outerWidth(!0)) &&
                    (fullscreenBtn.css("pointer-events", ""),
                    b.controls.css("pointer-events", ""),
                    (e = !1));
                }
              }),
              (b.isPluginClickThroughCreated = !0);
          }
        },
        cleanfullscreen: function (a) {
          a.exitFullScreen();
        },
        containerSizeTimeout: null,
        enterFullScreen: function () {
          var b = this;
          return mejs.MediaFeatures.hasiOSFullScreen
            ? void b.media.webkitEnterFullscreen()
            : (a(document.documentElement).addClass("mejs-fullscreen"),
              (b.normalHeight = b.container.height()),
              (b.normalWidth = b.container.width()),
              "native-native" === b.fullscreenMode ||
              "plugin-native" === b.fullscreenMode
                ? (mejs.MediaFeatures.requestFullScreen(b.container[0]),
                  b.isInIframe &&
                    setTimeout(function c() {
                      if (b.isNativeFullScreen) {
                        var d = window.devicePixelRatio || 1,
                          e = 0.002,
                          f = d * a(window).width(),
                          g = screen.width,
                          h = d * f;
                        Math.abs(g - f) > Math.abs(g - h) && (f = h);
                        var i = Math.abs(g - f),
                          j = g * e;
                        i > j ? b.exitFullScreen() : setTimeout(c, 500);
                      }
                    }, 1e3))
                : "fullwindow" == b.fullscreeMode,
              b.container
                .addClass("mejs-container-fullscreen")
                .width("100%")
                .height("100%"),
              (b.containerSizeTimeout = setTimeout(function () {
                b.container.css({ width: "100%", height: "100%" }),
                  b.setControlsSize();
              }, 500)),
              "native" === b.media.pluginType
                ? b.$media.width("100%").height("100%")
                : (b.container.find(".mejs-shim").width("100%").height("100%"),
                  setTimeout(function () {
                    var c = a(window),
                      d = c.width(),
                      e = c.height();
                    b.media.setVideoSize(d, e);
                  }, 500)),
              b.layers.children("div").width("100%").height("100%"),
              b.fullscreenBtn &&
                b.fullscreenBtn
                  .removeClass("mejs-fullscreen")
                  .addClass("mejs-unfullscreen"),
              b.setControlsSize(),
              (b.isFullScreen = !0),
              b.container
                .find(".mejs-captions-text")
                .css("font-size", (screen.width / b.width) * 1 * 100 + "%"),
              b.container.find(".mejs-captions-position").css("bottom", "45px"),
              void b.container.trigger("enteredfullscreen"));
        },
        exitFullScreen: function () {
          var b = this;
          clearTimeout(b.containerSizeTimeout),
            mejs.MediaFeatures.hasTrueNativeFullScreen &&
              (mejs.MediaFeatures.isFullScreen() || b.isFullScreen) &&
              mejs.MediaFeatures.cancelFullScreen(),
            a(document.documentElement).removeClass("mejs-fullscreen"),
            b.container
              .removeClass("mejs-container-fullscreen")
              .width(b.normalWidth)
              .height(b.normalHeight),
            "native" === b.media.pluginType
              ? b.$media.width(b.normalWidth).height(b.normalHeight)
              : (b.container
                  .find(".mejs-shim")
                  .width(b.normalWidth)
                  .height(b.normalHeight),
                b.media.setVideoSize(b.normalWidth, b.normalHeight)),
            b.layers
              .children("div")
              .width(b.normalWidth)
              .height(b.normalHeight),
            b.fullscreenBtn
              .removeClass("mejs-unfullscreen")
              .addClass("mejs-fullscreen"),
            b.setControlsSize(),
            (b.isFullScreen = !1),
            b.container.find(".mejs-captions-text").css("font-size", ""),
            b.container.find(".mejs-captions-position").css("bottom", ""),
            b.container.trigger("exitedfullscreen");
        },
      });
  })(mejs.$),
  (function (a) {
    a.extend(mejs.MepDefaults, {
      speeds: ["2.00", "1.50", "1.25", "1.00", "0.75"],
      defaultSpeed: "1.00",
      speedChar: "x",
    }),
      a.extend(MediaElementPlayer.prototype, {
        buildspeed: function (b, c, d, e) {
          var f = this;
          if ("native" == f.media.pluginType) {
            for (
              var g = null,
                h = null,
                i = null,
                j = null,
                k = [],
                l = !1,
                m = 0,
                n = f.options.speeds.length;
              n > m;
              m++
            ) {
              var o = f.options.speeds[m];
              "string" == typeof o
                ? (k.push({ name: o + f.options.speedChar, value: o }),
                  o === f.options.defaultSpeed && (l = !0))
                : (k.push(o), o.value === f.options.defaultSpeed && (l = !0));
            }
            l ||
              k.push({
                name: f.options.defaultSpeed + f.options.speedChar,
                value: f.options.defaultSpeed,
              }),
              k.sort(function (a, b) {
                return parseFloat(b.value) - parseFloat(a.value);
              });
            var p = function (a) {
                for (m = 0, n = k.length; n > m; m++)
                  if (k[m].value === a) return k[m].name;
              },
              q =
                '<div class="mejs-button mejs-speed-button"><button type="button">' +
                p(f.options.defaultSpeed) +
                '</button><div class="mejs-speed-selector"><ul>';
            for (m = 0, il = k.length; m < il; m++)
              (j = f.id + "-speed-" + k[m].value),
                (q +=
                  '<li><input type="radio" name="speed" value="' +
                  k[m].value +
                  '" id="' +
                  j +
                  '" ' +
                  (k[m].value === f.options.defaultSpeed ? " checked" : "") +
                  ' /><label for="' +
                  j +
                  '" ' +
                  (k[m].value === f.options.defaultSpeed
                    ? ' class="mejs-speed-selected"'
                    : "") +
                  ">" +
                  k[m].name +
                  "</label></li>");
            (q += "</ul></div></div>"),
              (g = a(q).appendTo(c)),
              (h = g.find(".mejs-speed-selector")),
              (i = f.options.defaultSpeed),
              e.addEventListener(
                "loadedmetadata",
                function (a) {
                  i && (e.playbackRate = parseFloat(i));
                },
                !0
              ),
              h.on("click", 'input[type="radio"]', function () {
                var b = a(this).attr("value");
                (i = b),
                  (e.playbackRate = parseFloat(b)),
                  g.find("button").html(p(b)),
                  g
                    .find(".mejs-speed-selected")
                    .removeClass("mejs-speed-selected"),
                  g
                    .find('input[type="radio"]:checked')
                    .next()
                    .addClass("mejs-speed-selected");
              }),
              g.one("mouseenter focusin", function () {
                h.height(
                  g.find(".mejs-speed-selector ul").outerHeight(!0) +
                    g.find(".mejs-speed-translations").outerHeight(!0)
                ).css("top", -1 * h.height() + "px");
              });
          }
        },
      });
  })(mejs.$),
  (function (a) {
    a.extend(mejs.MepDefaults, {
      startLanguage: "",
      tracksText: mejs.i18n.t("Captions/Subtitles"),
      tracksAriaLive: !1,
      hideCaptionsButtonWhenEmpty: !0,
      toggleCaptionsButtonWhenOnlyOne: !1,
      slidesSelector: "",
    }),
      a.extend(MediaElementPlayer.prototype, {
        hasChapters: !1,
        cleartracks: function (a, b, c, d) {
          a &&
            (a.captions && a.captions.remove(),
            a.chapters && a.chapters.remove(),
            a.captionsText && a.captionsText.remove(),
            a.captionsButton && a.captionsButton.remove());
        },
        buildtracks: function (b, c, d, e) {
          if (0 !== b.tracks.length) {
            var f,
              g = this,
              h = g.options.tracksAriaLive
                ? 'role="log" aria-live="assertive" aria-atomic="false"'
                : "";
            if (g.domNode.textTracks)
              for (f = g.domNode.textTracks.length - 1; f >= 0; f--)
                g.domNode.textTracks[f].mode = "hidden";
            g.cleartracks(b, c, d, e),
              (b.chapters = a('<div class="mejs-chapters mejs-layer"></div>')
                .prependTo(d)
                .hide()),
              (b.captions = a(
                '<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover" ' +
                  h +
                  '><span class="mejs-captions-text"></span></div></div>'
              )
                .prependTo(d)
                .hide()),
              (b.captionsText = b.captions.find(".mejs-captions-text")),
              (b.captionsButton = a(
                '<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' +
                  g.id +
                  '" title="' +
                  g.options.tracksText +
                  '" aria-label="' +
                  g.options.tracksText +
                  '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' +
                  b.id +
                  '_captions" id="' +
                  b.id +
                  '_captions_none" value="none" checked="checked" /><label for="' +
                  b.id +
                  '_captions_none">' +
                  mejs.i18n.t("None") +
                  "</label></li></ul></div></div>"
              ).appendTo(c));
            var i = 0;
            for (f = 0; f < b.tracks.length; f++)
              "subtitles" == b.tracks[f].kind && i++;
            for (
              g.options.toggleCaptionsButtonWhenOnlyOne && 1 == i
                ? b.captionsButton.on("click", function () {
                    null === b.selectedTrack
                      ? (lang = b.tracks[0].srclang)
                      : (lang = "none"),
                      b.setTrack(lang);
                  })
                : (b.captionsButton
                    .on("mouseenter focusin", function () {
                      a(this)
                        .find(".mejs-captions-selector")
                        .removeClass("mejs-offscreen");
                    })
                    .on("click", "input[type=radio]", function () {
                      (lang = this.value), b.setTrack(lang);
                    }),
                  b.captionsButton.on("mouseleave focusout", function () {
                    a(this)
                      .find(".mejs-captions-selector")
                      .addClass("mejs-offscreen");
                  })),
                b.options.alwaysShowControls
                  ? b.container
                      .find(".mejs-captions-position")
                      .addClass("mejs-captions-position-hover")
                  : b.container
                      .bind("controlsshown", function () {
                        b.container
                          .find(".mejs-captions-position")
                          .addClass("mejs-captions-position-hover");
                      })
                      .bind("controlshidden", function () {
                        e.paused ||
                          b.container
                            .find(".mejs-captions-position")
                            .removeClass("mejs-captions-position-hover");
                      }),
                b.trackToLoad = -1,
                b.selectedTrack = null,
                b.isLoadingTrack = !1,
                f = 0;
              f < b.tracks.length;
              f++
            )
              "subtitles" == b.tracks[f].kind &&
                b.addTrackButton(b.tracks[f].srclang, b.tracks[f].label);
            b.loadNextTrack(),
              e.addEventListener(
                "timeupdate",
                function (a) {
                  b.displayCaptions();
                },
                !1
              ),
              "" !== b.options.slidesSelector &&
                ((b.slidesContainer = a(b.options.slidesSelector)),
                e.addEventListener(
                  "timeupdate",
                  function (a) {
                    b.displaySlides();
                  },
                  !1
                )),
              e.addEventListener(
                "loadedmetadata",
                function (a) {
                  b.displayChapters();
                },
                !1
              ),
              b.container.hover(
                function () {
                  b.hasChapters &&
                    (b.chapters.removeClass("mejs-offscreen"),
                    b.chapters
                      .fadeIn(200)
                      .height(b.chapters.find(".mejs-chapter").outerHeight()));
                },
                function () {
                  b.hasChapters &&
                    !e.paused &&
                    b.chapters.fadeOut(200, function () {
                      a(this).addClass("mejs-offscreen"),
                        a(this).css("display", "block");
                    });
                }
              ),
              g.container.on("controlsresize", function () {
                g.adjustLanguageBox();
              }),
              null !== b.node.getAttribute("autoplay") &&
                b.chapters.addClass("mejs-offscreen");
          }
        },
        setTrack: function (a) {
          var b,
            c = this;
          if ("none" == a)
            (c.selectedTrack = null),
              c.captionsButton.removeClass("mejs-captions-enabled");
          else
            for (b = 0; b < c.tracks.length; b++)
              if (c.tracks[b].srclang == a) {
                null === c.selectedTrack &&
                  c.captionsButton.addClass("mejs-captions-enabled"),
                  (c.selectedTrack = c.tracks[b]),
                  c.captions.attr("lang", c.selectedTrack.srclang),
                  c.displayCaptions();
                break;
              }
        },
        loadNextTrack: function () {
          var a = this;
          a.trackToLoad++,
            a.trackToLoad < a.tracks.length
              ? ((a.isLoadingTrack = !0), a.loadTrack(a.trackToLoad))
              : ((a.isLoadingTrack = !1), a.checkForTracks());
        },
        loadTrack: function (b) {
          var c = this,
            d = c.tracks[b],
            e = function () {
              (d.isLoaded = !0),
                c.enableTrackButton(d.srclang, d.label),
                c.loadNextTrack();
            };
          a.ajax({
            url: d.src,
            dataType: "text",
            success: function (a) {
              "string" == typeof a && /<tt\s+xml/gi.exec(a)
                ? (d.entries = mejs.TrackFormatParser.dfxp.parse(a))
                : (d.entries = mejs.TrackFormatParser.webvtt.parse(a)),
                e(),
                "chapters" == d.kind &&
                  c.media.addEventListener(
                    "play",
                    function (a) {
                      c.media.duration > 0 && c.displayChapters(d);
                    },
                    !1
                  ),
                "slides" == d.kind && c.setupSlides(d);
            },
            error: function () {
              c.removeTrackButton(d.srclang), c.loadNextTrack();
            },
          });
        },
        enableTrackButton: function (b, c) {
          var d = this;
          "" === c && (c = mejs.language.codes[b] || b),
            d.captionsButton
              .find("input[value=" + b + "]")
              .prop("disabled", !1)
              .siblings("label")
              .html(c),
            d.options.startLanguage == b &&
              a("#" + d.id + "_captions_" + b)
                .prop("checked", !0)
                .trigger("click"),
            d.adjustLanguageBox();
        },
        removeTrackButton: function (a) {
          var b = this;
          b.captionsButton
            .find("input[value=" + a + "]")
            .closest("li")
            .remove(),
            b.adjustLanguageBox();
        },
        addTrackButton: function (b, c) {
          var d = this;
          "" === c && (c = mejs.language.codes[b] || b),
            d.captionsButton
              .find("ul")
              .append(
                a(
                  '<li><input type="radio" name="' +
                    d.id +
                    '_captions" id="' +
                    d.id +
                    "_captions_" +
                    b +
                    '" value="' +
                    b +
                    '" disabled="disabled" /><label for="' +
                    d.id +
                    "_captions_" +
                    b +
                    '">' +
                    c +
                    " (loading)</label></li>"
                )
              ),
            d.adjustLanguageBox(),
            d.container
              .find(".mejs-captions-translations option[value=" + b + "]")
              .remove();
        },
        adjustLanguageBox: function () {
          var a = this;
          a.captionsButton
            .find(".mejs-captions-selector")
            .height(
              a.captionsButton
                .find(".mejs-captions-selector ul")
                .outerHeight(!0) +
                a.captionsButton
                  .find(".mejs-captions-translations")
                  .outerHeight(!0)
            );
        },
        checkForTracks: function () {
          var a = this,
            b = !1;
          if (a.options.hideCaptionsButtonWhenEmpty) {
            for (i = 0; i < a.tracks.length; i++)
              if ("subtitles" == a.tracks[i].kind && a.tracks[i].isLoaded) {
                b = !0;
                break;
              }
            b || (a.captionsButton.hide(), a.setControlsSize());
          }
        },
        displayCaptions: function () {
          if ("undefined" != typeof this.tracks) {
            var a,
              b = this,
              c = b.selectedTrack;
            if (null !== c && c.isLoaded) {
              for (a = 0; a < c.entries.times.length; a++)
                if (
                  b.media.currentTime >= c.entries.times[a].start &&
                  b.media.currentTime <= c.entries.times[a].stop
                )
                  return (
                    b.captionsText
                      .html(c.entries.text[a])
                      .attr(
                        "class",
                        "mejs-captions-text " +
                          (c.entries.times[a].identifier || "")
                      ),
                    void b.captions.show().height(0)
                  );
              b.captions.hide();
            } else b.captions.hide();
          }
        },
        setupSlides: function (a) {
          var b = this;
          (b.slides = a),
            (b.slides.entries.imgs = [b.slides.entries.text.length]),
            b.showSlide(0);
        },
        showSlide: function (b) {
          if (
            "undefined" != typeof this.tracks &&
            "undefined" != typeof this.slidesContainer
          ) {
            var c = this,
              d = c.slides.entries.text[b],
              e = c.slides.entries.imgs[b];
            "undefined" == typeof e || "undefined" == typeof e.fadeIn
              ? (c.slides.entries.imgs[b] = e =
                  a('<img src="' + d + '">').on("load", function () {
                    e.appendTo(c.slidesContainer)
                      .hide()
                      .fadeIn()
                      .siblings(":visible")
                      .fadeOut();
                  }))
              : e.is(":visible") ||
                e.is(":animated") ||
                e.fadeIn().siblings(":visible").fadeOut();
          }
        },
        displaySlides: function () {
          if ("undefined" != typeof this.slides) {
            var a,
              b = this,
              c = b.slides;
            for (a = 0; a < c.entries.times.length; a++)
              if (
                b.media.currentTime >= c.entries.times[a].start &&
                b.media.currentTime <= c.entries.times[a].stop
              )
                return void b.showSlide(a);
          }
        },
        displayChapters: function () {
          var a,
            b = this;
          for (a = 0; a < b.tracks.length; a++)
            if ("chapters" == b.tracks[a].kind && b.tracks[a].isLoaded) {
              b.drawChapters(b.tracks[a]), (b.hasChapters = !0);
              break;
            }
        },
        drawChapters: function (b) {
          var c,
            d,
            e = this,
            f = 0,
            g = 0;
          for (e.chapters.empty(), c = 0; c < b.entries.times.length; c++)
            (d = b.entries.times[c].stop - b.entries.times[c].start),
              (f = Math.floor((d / e.media.duration) * 100)),
              (f + g > 100 ||
                (c == b.entries.times.length - 1 && 100 > f + g)) &&
                (f = 100 - g),
              e.chapters.append(
                a(
                  '<div class="mejs-chapter" rel="' +
                    b.entries.times[c].start +
                    '" style="left: ' +
                    g.toString() +
                    "%;width: " +
                    f.toString() +
                    '%;"><div class="mejs-chapter-block' +
                    (c == b.entries.times.length - 1
                      ? " mejs-chapter-block-last"
                      : "") +
                    '"><span class="ch-title">' +
                    b.entries.text[c] +
                    '</span><span class="ch-time">' +
                    mejs.Utility.secondsToTimeCode(
                      b.entries.times[c].start,
                      e.options
                    ) +
                    "&ndash;" +
                    mejs.Utility.secondsToTimeCode(
                      b.entries.times[c].stop,
                      e.options
                    ) +
                    "</span></div></div>"
                )
              ),
              (g += f);
          e.chapters.find("div.mejs-chapter").click(function () {
            e.media.setCurrentTime(parseFloat(a(this).attr("rel"))),
              e.media.paused && e.media.play();
          }),
            e.chapters.show();
        },
      }),
      (mejs.language = {
        codes: {
          af: "Afrikaans",
          sq: "Albanian",
          ar: "Arabic",
          be: "Belarusian",
          bg: "Bulgarian",
          ca: "Catalan",
          zh: "Chinese",
          "zh-cn": "Chinese Simplified",
          "zh-tw": "Chinese Traditional",
          hr: "Croatian",
          cs: "Czech",
          da: "Danish",
          nl: "Dutch",
          en: "English",
          et: "Estonian",
          fl: "Filipino",
          fi: "Finnish",
          fr: "French",
          gl: "Galician",
          de: "German",
          el: "Greek",
          ht: "Haitian Creole",
          iw: "Hebrew",
          hi: "Hindi",
          hu: "Hungarian",
          is: "Icelandic",
          id: "Indonesian",
          ga: "Irish",
          it: "Italian",
          ja: "Japanese",
          ko: "Korean",
          lv: "Latvian",
          lt: "Lithuanian",
          mk: "Macedonian",
          ms: "Malay",
          mt: "Maltese",
          no: "Norwegian",
          fa: "Persian",
          pl: "Polish",
          pt: "Portuguese",
          ro: "Romanian",
          ru: "Russian",
          sr: "Serbian",
          sk: "Slovak",
          sl: "Slovenian",
          es: "Spanish",
          sw: "Swahili",
          sv: "Swedish",
          tl: "Tagalog",
          th: "Thai",
          tr: "Turkish",
          uk: "Ukrainian",
          vi: "Vietnamese",
          cy: "Welsh",
          yi: "Yiddish",
        },
      }),
      (mejs.TrackFormatParser = {
        webvtt: {
          pattern_timecode:
            /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
          parse: function (b) {
            for (
              var c,
                d,
                e,
                f = 0,
                g = mejs.TrackFormatParser.split2(b, /\r?\n/),
                h = { text: [], times: [] };
              f < g.length;
              f++
            ) {
              if (((c = this.pattern_timecode.exec(g[f])), c && f < g.length)) {
                for (
                  f - 1 >= 0 && "" !== g[f - 1] && (e = g[f - 1]),
                    f++,
                    d = g[f],
                    f++;
                  "" !== g[f] && f < g.length;

                )
                  (d = d + "\n" + g[f]), f++;
                (d = a
                  .trim(d)
                  .replace(
                    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
                    "<a href='$1' target='_blank'>$1</a>"
                  )),
                  h.text.push(d),
                  h.times.push({
                    identifier: e,
                    start:
                      0 === mejs.Utility.convertSMPTEtoSeconds(c[1])
                        ? 0.2
                        : mejs.Utility.convertSMPTEtoSeconds(c[1]),
                    stop: mejs.Utility.convertSMPTEtoSeconds(c[3]),
                    settings: c[5],
                  });
              }
              e = "";
            }
            return h;
          },
        },
        dfxp: {
          parse: function (b) {
            b = a(b).filter("tt");
            var c,
              d,
              e = 0,
              f = b.children("div").eq(0),
              g = f.find("p"),
              h = b.find("#" + f.attr("style")),
              i = { text: [], times: [] };
            if (h.length) {
              var j = h.removeAttr("id").get(0).attributes;
              if (j.length)
                for (c = {}, e = 0; e < j.length; e++)
                  c[j[e].name.split(":")[1]] = j[e].value;
            }
            for (e = 0; e < g.length; e++) {
              var k,
                l = { start: null, stop: null, style: null };
              if (
                (g.eq(e).attr("begin") &&
                  (l.start = mejs.Utility.convertSMPTEtoSeconds(
                    g.eq(e).attr("begin")
                  )),
                !l.start &&
                  g.eq(e - 1).attr("end") &&
                  (l.start = mejs.Utility.convertSMPTEtoSeconds(
                    g.eq(e - 1).attr("end")
                  )),
                g.eq(e).attr("end") &&
                  (l.stop = mejs.Utility.convertSMPTEtoSeconds(
                    g.eq(e).attr("end")
                  )),
                !l.stop &&
                  g.eq(e + 1).attr("begin") &&
                  (l.stop = mejs.Utility.convertSMPTEtoSeconds(
                    g.eq(e + 1).attr("begin")
                  )),
                c)
              ) {
                k = "";
                for (var m in c) k += m + ":" + c[m] + ";";
              }
              k && (l.style = k),
                0 === l.start && (l.start = 0.2),
                i.times.push(l),
                (d = a
                  .trim(g.eq(e).html())
                  .replace(
                    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
                    "<a href='$1' target='_blank'>$1</a>"
                  )),
                i.text.push(d),
                0 === i.times.start && (i.times.start = 2);
            }
            return i;
          },
        },
        split2: function (a, b) {
          return a.split(b);
        },
      }),
      3 != "x\n\ny".split(/\n/gi).length &&
        (mejs.TrackFormatParser.split2 = function (a, b) {
          var c,
            d = [],
            e = "";
          for (c = 0; c < a.length; c++)
            (e += a.substring(c, c + 1)),
              b.test(e) && (d.push(e.replace(b, "")), (e = ""));
          return d.push(e), d;
        });
  })(mejs.$),
  (function (a) {
    a.extend(mejs.MepDefaults, {
      contextMenuItems: [
        {
          render: function (a) {
            return "undefined" == typeof a.enterFullScreen
              ? null
              : a.isFullScreen
              ? mejs.i18n.t("Turn off Fullscreen")
              : mejs.i18n.t("Go Fullscreen");
          },
          click: function (a) {
            a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen();
          },
        },
        {
          render: function (a) {
            return a.media.muted ? mejs.i18n.t("Unmute") : mejs.i18n.t("Mute");
          },
          click: function (a) {
            a.media.muted ? a.setMuted(!1) : a.setMuted(!0);
          },
        },
        { isSeparator: !0 },
        {
          render: function (a) {
            return mejs.i18n.t("Download Video");
          },
          click: function (a) {
            window.location.href = a.media.currentSrc;
          },
        },
      ],
    }),
      a.extend(MediaElementPlayer.prototype, {
        buildcontextmenu: function (b, c, d, e) {
          (b.contextMenu = a('<div class="mejs-contextmenu"></div>')
            .appendTo(a("body"))
            .hide()),
            b.container.bind("contextmenu", function (a) {
              return b.isContextMenuEnabled
                ? (a.preventDefault(),
                  b.renderContextMenu(a.clientX - 1, a.clientY - 1),
                  !1)
                : void 0;
            }),
            b.container.bind("click", function () {
              b.contextMenu.hide();
            }),
            b.contextMenu.bind("mouseleave", function () {
              b.startContextMenuTimer();
            });
        },
        cleancontextmenu: function (a) {
          a.contextMenu.remove();
        },
        isContextMenuEnabled: !0,
        enableContextMenu: function () {
          this.isContextMenuEnabled = !0;
        },
        disableContextMenu: function () {
          this.isContextMenuEnabled = !1;
        },
        contextMenuTimeout: null,
        startContextMenuTimer: function () {
          var a = this;
          a.killContextMenuTimer(),
            (a.contextMenuTimer = setTimeout(function () {
              a.hideContextMenu(), a.killContextMenuTimer();
            }, 750));
        },
        killContextMenuTimer: function () {
          var a = this.contextMenuTimer;
          null != a && (clearTimeout(a), delete a, (a = null));
        },
        hideContextMenu: function () {
          this.contextMenu.hide();
        },
        renderContextMenu: function (b, c) {
          for (
            var d = this,
              e = "",
              f = d.options.contextMenuItems,
              g = 0,
              h = f.length;
            h > g;
            g++
          )
            if (f[g].isSeparator)
              e += '<div class="mejs-contextmenu-separator"></div>';
            else {
              var i = f[g].render(d);
              null != i &&
                (e +=
                  '<div class="mejs-contextmenu-item" data-itemindex="' +
                  g +
                  '" id="element-' +
                  1e6 * Math.random() +
                  '">' +
                  i +
                  "</div>");
            }
          d.contextMenu.empty().append(a(e)).css({ top: c, left: b }).show(),
            d.contextMenu.find(".mejs-contextmenu-item").each(function () {
              var b = a(this),
                c = parseInt(b.data("itemindex"), 10),
                e = d.options.contextMenuItems[c];
              "undefined" != typeof e.show && e.show(b, d),
                b.click(function () {
                  "undefined" != typeof e.click && e.click(d),
                    d.contextMenu.hide();
                });
            }),
            setTimeout(function () {
              d.killControlsTimer("rev3");
            }, 100);
        },
      });
  })(mejs.$),
  (function (a) {
    a.extend(mejs.MepDefaults, {
      skipBackInterval: 30,
      skipBackText: mejs.i18n.t("Skip back %1 seconds"),
    }),
      a.extend(MediaElementPlayer.prototype, {
        buildskipback: function (b, c, d, e) {
          var f = this,
            g = f.options.skipBackText.replace(
              "%1",
              f.options.skipBackInterval
            );
          a(
            '<div class="mejs-button mejs-skip-back-button"><button type="button" aria-controls="' +
              f.id +
              '" title="' +
              g +
              '" aria-label="' +
              g +
              '">' +
              f.options.skipBackInterval +
              "</button></div>"
          )
            .appendTo(c)
            .click(function () {
              e.setCurrentTime(
                Math.max(e.currentTime - f.options.skipBackInterval, 0)
              ),
                a(this).find("button").blur();
            });
        },
      });
  })(mejs.$),
  (function (a) {
    a.extend(mejs.MepDefaults, { postrollCloseText: mejs.i18n.t("Close") }),
      a.extend(MediaElementPlayer.prototype, {
        buildpostroll: function (b, c, d, e) {
          var f = this,
            g = f.container.find('link[rel="postroll"]').attr("href");
          "undefined" != typeof g &&
            ((b.postroll = a(
              '<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' +
                f.options.postrollCloseText +
                '</a><div class="mejs-postroll-layer-content"></div></div>'
            )
              .prependTo(d)
              .hide()),
            f.media.addEventListener(
              "ended",
              function (c) {
                a.ajax({
                  dataType: "html",
                  url: g,
                  success: function (a, b) {
                    d.find(".mejs-postroll-layer-content").html(a);
                  },
                }),
                  b.postroll.show();
              },
              !1
            ));
        },
      });
  })(mejs.$),
  (window.mep = window.mep || {}),
  (function (a, b, c) {
    "use strict";
    var d = b(a),
      e = a.mep;
    (e.l10n = b.extend(
      {
        nextTrack: "Next Track",
        previousTrack: "Previous Track",
        togglePlaylist: "Toggle Playlist",
        repeat: "Repeat",
        shuffle: "Shuffle",
        error: "Oh snap, there was a playback error!",
      },
      e.l10n || {}
    )),
      (e.settings = e.settings || {}),
      mejs.plugins.silverlight[0].types.push("audio/x-ms-wma"),
      b("html").addClass(function () {
        return document.implementation.hasFeature(
          "http://www.w3.org/TR/SVG11/feature#Image",
          "1.1"
        )
          ? "svg"
          : "no-svg";
      }),
      b.extend(mejs.MepDefaults, {
        mepResponsiveProgress: !1,
        mepSelectors: { container: ".mep-playlist-container" },
        mepSkin: "",
      }),
      (b.fn.mepPlaylist = function (a) {
        var c = b.extend({}, b.fn.mepPlaylist.defaults, a);
        return (
          (c.mepSelectors = b.extend({}, mejs.MepDefaults.mepSelectors, {
            playlist: this.selector,
            track: ".mep-track",
          })),
          "object" == typeof a &&
            "mepSelectors" in a &&
            b.extend(c.mepSelectors, a.mepSelectors),
          this.each(function () {
            var d,
              e,
              f,
              g = b(this),
              h = g.find(".mep-audio, audio, .mep-video, video"),
              i = g.find(".mep-playlist-data, script");
            if (
              (i.length ||
                (i = g
                  .closest(c.mepSelectors.container)
                  .find(".mep-playlist-data, script")),
              i.length &&
                ((d = b.parseJSON(i.first().html())),
                "signature" in d && (c.mepSignature = d.signature),
                "mepSignature" in d && (c.mepSignature = d.mepSignature),
                ("undefined" == typeof a ||
                  "undefined" == typeof a.mepPlaylistTracks) &&
                  "tracks" in d &&
                  (c.mepPlaylistTracks = d.tracks)),
              c.mepPlaylistTracks.length)
            ) {
              if (
                ((f = c.mepPlaylistTracks.length),
                g.addClass("mep-tracks-count-" + f),
                !h.length)
              )
                for (e = 0; f > e; e++)
                  if ("" !== c.mepPlaylistTracks[e].src) {
                    (h = b("<audio />", { src: "mp3.mp3" })),
                      -1 != c.mepPlaylistTracks[e].src.indexOf("youtube") &&
                        ((h = b("<video />", {
                          src: c.mepPlaylistTracks[e].src,
                          type: "video/youtube",
                        })),
                        (c.mepSkin = "mejs-video")),
                      h.prependTo(g);
                    break;
                  }
              h.mediaelementplayer(c);
            }
          })
        );
      }),
      (b.fn.mepPlaylist.defaults = {
        autosizeProgress: !1,
        mepPlaylistLoop: !0,
        mepPlaylistRepeat: !1,
        mepPlaylistShuffle: !1,
        mepPlaylistTracks: [],
        mepSkin: "mep-skin-default",
        defaultAudioHeight: 0,
        enableAutosize: !1,
        features: [
          "mepartwork",
          "mepcurrentdetails",
          "mepprevioustrack",
          "playpause",
          "mepnexttrack",
          "progress",
          "current",
          "duration",
          "mepplaylist",
        ],
        success: function (a, c, e) {
          var f = b(a),
            g = e.container.closest(e.options.mepSelectors.playlist);
          "" !== e.options.mepSkin && e.changeSkin(e.options.mepSkin),
            e.options.mepResponsiveProgress &&
              d
                .on("resize.mep", function () {
                  e.controls.find(".mejs-time-rail").width("100%");
                })
                .trigger("resize.mep"),
            f
              .on("play.mep", function () {
                g.addClass("is-playing");
              })
              .on("pause.mep", function () {
                g.removeClass("is-playing");
              }),
            "youtube" == e.media.pluginType &&
              f.on("ended", function () {
                e.$media.trigger("ended.mep");
              }),
            b(e.options.mepSelectors.playlist).removeClass("is-loading"),
            g.trigger("success.mep", [a, c, e]);
        },
        timeAndDurationSeparator:
          '<span class="mejs-time-separator"> / </span>',
      });
  })(this, jQuery),
  (function (a, b, c) {
    "use strict";
    b.extend(MediaElementPlayer.prototype, {
      buildmepartwork: function (a, b, c) {
        var d = c
          .append('<a class="mejs-track-artwork"></a>')
          .find(".mejs-track-artwork");
        a.$node.on("setTrack.mep", function (a, b, c) {
          var e;
          (b.thumb = b.thumb || {}),
            (e = "undefined" != typeof b.thumb.src && "" !== b.thumb.src),
            d.attr("href", b.link),
            d.css("background-image", "url(" + b.thumb.src + ")").toggle(e),
            d
              .closest(c.options.mepSelectors.playlist)
              .toggleClass("has-artwork", e);
        });
      },
    });
  })(this, jQuery),
  (function (a, b, c) {
    "use strict";
    b.extend(MediaElementPlayer.prototype, {
      buildmepcurrentdetails: function (a, b, c) {
        var d, e;
        c.append(
          '<div class="mejs-track-details"><span class="mejs-track-title"></span><span class="mejs-track-author"></span></div>'
        ),
          (d = c.find(".mejs-track-author")),
          (e = c.find(".mejs-track-title")),
          a.$node.on("setTrack.mep", function (a, b, c) {
            (b.meta = b.meta || {}),
              (b.title = b.title || {}),
              (b.link = b.link || {}),
              d.html(
                '<a href="' + b.meta.authorlink + '">' + b.meta.author + "</a>"
              ),
              e.html('<a href="' + b.link + '">' + b.title + "</a>");
          });
      },
    });
  })(this, jQuery),
  (function (a, b, c) {
    "use strict";
    function d(a, b) {
      var c = sessionStorage || {},
        d = a + "-signature";
      (this.set = function (b, d) {
        var e = a + "-" + b;
        c[e] = d;
      }),
        (this.get = function (b) {
          var d,
            e = a + "-" + b;
          return (
            "undefined" != typeof c[e] &&
              ((d = c[e]),
              "currentTime" === b
                ? (d = parseFloat(d))
                : "status" === b
                ? (d = "playing" === d ? "playing" : "paused")
                : "trackIndex" === b
                ? (d = parseInt(d, 10))
                : "volume" === b && (d = parseFloat(d))),
            d
          );
        }),
        (this.clear = function () {
          var b;
          for (b in c)
            c.hasOwnProperty(b) && 0 === b.indexOf(a + "-") && delete c[b];
        }),
        ("undefined" != typeof c[d] && c[d] === b) || this.clear(),
        (c[d] = b);
    }
    var e,
      f,
      g = mejs.MediaElementPlayer.prototype.init;
    (mejs.MediaElementPlayer.prototype.init = function () {
      -1 !== b.inArray("mephistory", this.options.features) &&
        ((f = this.options.success), (this.options.success = e)),
        g.call(this);
    }),
      (e = function (a, b, e) {
        var g,
          h,
          i = new d(e.options.mepId || "", e.options.mepSignature || ""),
          j = "autoplay" === a.getAttribute("autoplay"),
          k = mejs.MediaFeatures;
        i && c !== i.get("volume") && a.setVolume(i.get("volume")),
          i &&
            c !== i.get("trackIndex") &&
            ((h = i ? i.get("status") : ""),
            (g = "playing" === h && !k.isiOS && !k.isAndroid && !j),
            (e.mepAutoResume = g),
            "mepPlaylistTracks" in e.options &&
            e.options.mepPlaylistTracks.length
              ? e.mepSetCurrentTrack(i.get("trackIndex"), g)
              : g && e.mepPlay()),
          i &&
            c !== i.get("repeat") &&
            ((e.options.mepPlaylistRepeat = "true" == i.get("repeat")),
            e.updateRepeat()),
          i &&
            c !== i.get("shuffle") &&
            ((e.options.mepPlaylistShuffle = "true" == i.get("shuffle")),
            e.updateShuffle()),
          f.call(this, a, b, e);
      }),
      b.extend(mejs.MepDefaults, { mepId: "mep", mepSignature: "" }),
      b.extend(MediaElementPlayer.prototype, {
        mepHistory: null,
        mepAutoResume: !1,
        buildmephistory: function (a, b, c, e) {
          var f,
            g,
            h = !1,
            i = mejs.MediaFeatures,
            j =
              /Safari/.test(navigator.userAgent) &&
              /Apple Computer/.test(navigator.vendor);
          (g = a.mepHistory = new d(a.options.mepId, a.options.mepSignature)),
            (f = g.get("currentTime")),
            e.addEventListener("play", function () {
              g.set("trackIndex", a.mepCurrentTrack),
                g.set("status", "playing");
            }),
            e.addEventListener("pause", function () {
              g.set("status", "paused");
            }),
            e.addEventListener("timeupdate", function () {
              g.set("currentTime", e.currentTime);
            }),
            e.addEventListener("volumechange", function () {
              g.set("volume", e.volume);
            }),
            e.addEventListener("playing", function () {
              if (!(h || 1 > f)) {
                if (i.isiOS || j)
                  var b = setInterval(function () {
                    f < e.buffered.end(0) &&
                      (clearInterval(b),
                      a.setCurrentTime(f),
                      a.setCurrentRail());
                  }, 50);
                else
                  try {
                    a.setCurrentTime(f), a.setCurrentRail();
                  } catch (c) {}
                h = !0;
              }
            }),
            a.$node.on("repeat.mep", function () {
              g.set("repeat", a.options.mepPlaylistRepeat);
            }),
            a.$node.on("shuffle.mep", function () {
              g.set("shuffle", a.options.mepPlaylistShuffle);
            });
        },
      });
  })(this, jQuery),
  (function (a, b, c) {
    "use strict";
    b.extend(MediaElementPlayer.prototype, {
      buildmepicons: function (a, c) {
        var d = b(a.options.mepSelectors.container).find("[data-mep-control]");
        d.each(function () {
          var a = b(this);
          a.appendTo(c.find(a.data("mepControl")));
        });
      },
    });
  })(this, jQuery),
  (function (a, b, c, d) {
    "use strict";
    b.extend(MediaElementPlayer.prototype, {
      buildmepnexttrack: function (a, d, e, f) {
        b(
          '<div class="mejs-button mejs-next-button mejs-next"><button type="button" aria-controls="' +
            a.id +
            '" title="' +
            c.l10n.nextTrack +
            '"></button></div>'
        )
          .appendTo(d)
          .on("click.mep", function () {
            var c,
              d = a.mepGetCurrentTrack() || {};
            (c = b.extend(
              {},
              { currentTime: f.currentTime, duration: f.duration, src: f.src }
            )),
              a.$node.trigger("skipNext.mep", [c, d]),
              a.mepPlayNextTrack();
          });
      },
      mepPlayNextTrack: function () {
        var a = this,
          b =
            a.mepCurrentTrack + 1 >= a.options.mepPlaylistTracks.length
              ? 0
              : a.mepCurrentTrack + 1;
        a.options.mepPlaylistShuffle &&
          ((b = Math.floor(
            Math.random() * (a.options.mepPlaylistTracks.length - 1)
          )),
          b >= a.mepCurrentTrack && (b += 1)),
          a.$node.trigger("nextTrack.mep", a),
          a.mepSetCurrentTrack(b);
      },
    });
  })(this, jQuery, window.mep),
  (function (a, b, c) {
    "use strict";
    var d, e;
    b.extend(mejs.MepDefaults, { mepPlaylistLoop: !0, mepPlaylistTracks: [] }),
      b.extend(mejs.MepDefaults.mepSelectors, {
        playlist: ".mep-playlist",
        track: ".mep-track",
        trackCurrentTime: ".mep-track-current-time",
        trackDuration: ".mep-track-duration",
        trackPlayBar: ".mep-track-play-bar",
        trackProgressBar: ".mep-track-progress-bar",
        trackSeekBar: ".mep-track-seek-bar",
        tracklist: ".mep-tracklist",
      }),
      b.extend(MediaElementPlayer.prototype, {
        $mepTracks: b(),
        mepCurrentTrack: 0,
        buildmepplaylist: function (a, c, e, f) {
          var g = a.options.mepSelectors,
            h = a.$media,
            i = a.container.closest(g.playlist);
          a.mepSetupTracklist(),
            a.mepSetCurrentTrack(a.options.mepPlaylistTracks[0], !1),
            i.on("click.mep", g.trackSeekBar, function (c) {
              var d = b(this),
                e =
                  a.options.duration > 0
                    ? a.options.duration
                    : a.media.duration,
                g = c.pageX - d.offset().left,
                h = d.outerWidth(),
                i = g / h;
              (i = 0.2 > i ? 0 : i), f.setCurrentTime(i * e);
            }),
            i.on("click.mep", g.track, function (c) {
              var e = b(this),
                h = a.$mepTracks.index(e),
                i = b(c.target),
                j = e.find("a, .js-disable-playpause, " + g.trackProgressBar);
              i.is(j) ||
                j.find(i).length ||
                (d.setPlayer(a).setTrack(e),
                a.mepCurrentTrack === h &&
                "" !== a.options.mepPlaylistTracks[h].src
                  ? f.paused
                    ? f.play()
                    : f.pause()
                  : a.mepSetCurrentTrack(h));
            }),
            h.on("play.mep", function () {
              var b = a.$mepTracks
                .removeClass("is-playing")
                .eq(a.mepCurrentTrack)
                .addClass("is-playing");
              d.setPlayer(a).setTrack(b);
            }),
            h.on("pause.mep", function () {
              a.$mepTracks.removeClass("is-playing");
            }),
            h.on("timeupdate.mep", function () {
              d.updateTimeCodes();
            }),
            h.on("ended.mep", function () {
              var b =
                a.mepCurrentTrack + 1 >= a.options.mepPlaylistTracks.length
                  ? 0
                  : a.mepCurrentTrack + 1;
              return a.options.mepPlaylistRepeat
                ? ((b = a.mepCurrentTrack), void a.mepSetCurrentTrack(b))
                : void (
                    (a.options.mepPlaylistLoop || 0 !== b) &&
                    setTimeout(function () {
                      a.$node.trigger("nextTrack.mep", a), a.mepPlayNextTrack();
                    }, 250)
                  );
            });
        },
        mepPlay: function () {
          var a = this;
          (a.media.paused || "flash" === a.media.pluginType) &&
            (clearTimeout(e),
            (e = setTimeout(function () {
              a.play();
            }, 50)));
        },
        mepGetCurrentTrack: function () {
          return this.options.mepPlaylistTracks[this.mepCurrentTrack];
        },
        mepSetCurrentTrack: function (a, b) {
          var d = this,
            e = d.options.mepSelectors;
          "number" == typeof a &&
            ((d.mepCurrentTrack = a), (a = d.mepGetCurrentTrack())),
            a != c &&
              (d.container
                .closest(e.playlist)
                .find(e.track)
                .removeClass("is-current")
                .eq(d.mepCurrentTrack)
                .addClass("is-current"),
              a.length && d.controls.find(".mejs-duration").text(a.length),
              a.src &&
                a.src !== d.media.src &&
                (d.pause(), d.setSrc(a.src), d.load()),
              d.$node.trigger("setTrack.mep", [a, d]),
              a.src && ("undefined" == typeof b || b) && d.mepPlay());
        },
        mepSetupTracklist: function () {
          var a = this,
            b = a.options.mepSelectors,
            c = a.container.closest(b.playlist);
          (a.$mepTracks = c.find(b.track)),
            a.$mepTracks
              .filter(function (b) {
                var c = a.options.mepPlaylistTracks[b] || {};
                return "src" in c && "" !== c.src;
              })
              .addClass("is-playable");
        },
      }),
      (d = {
        player: null,
        $track: b(),
        $duration: b(),
        $playBar: b(),
        $time: b(),
        setPlayer: function (a) {
          return (this.player = a), this;
        },
        setTrack: function (a) {
          var c = this.player.options.mepSelectors;
          return (
            (this.$track = a instanceof jQuery ? a : b(a)),
            (this.$duration = this.$track.find(c.trackDuration)),
            (this.$playBar = this.$track.find(c.trackPlayBar)),
            (this.$time = this.$track.find(c.trackCurrentTime)),
            this
          );
        },
        updateTimeCodes: function () {
          var a,
            b,
            c,
            d = this.player;
          if (null !== d)
            return (
              (a =
                d.options.duration > 0 ? d.options.duration : d.media.duration),
              isNaN(a) ||
                ((b = mejs.Utility.secondsToTimeCode(
                  a,
                  d.options.alwaysShowHours,
                  d.options.showTimecodeFrameCount,
                  d.options.framesPerSecond || 25
                )),
                (c = mejs.Utility.secondsToTimeCode(
                  d.media.currentTime,
                  d.options.alwaysShowHours || d.media.duration > 3600,
                  d.options.showTimecodeFrameCount,
                  d.options.framesPerSecond || 25
                )),
                this.$duration.text(b),
                this.$playBar.width((d.media.currentTime / a) * 100 + "%"),
                this.$time.text(c)),
              this
            );
        },
      });
  })(this, jQuery),
  (function (a, b, c, d) {
    "use strict";
    b.extend(mejs.MepDefaults, {
      mepPlaylistToggle: function (a, b) {
        a.slideToggle(200);
      },
    }),
      b.extend(MediaElementPlayer.prototype, {
        buildmepplaylisttoggle: function (a, d, e, f) {
          var g = a.options.mepSelectors,
            h = a.container.closest(g.playlist),
            i = h.find(g.tracklist),
            j = i.is(":visible");
          h.addClass(function () {
            return j ? "is-tracklist-open" : "is-tracklist-closed";
          }),
            b(
              '<div class="mejs-button mejs-toggle-playlist-button mejs-toggle-playlist"><button type="button" aria-controls="' +
                a.id +
                '" title="' +
                c.l10n.togglePlaylist +
                '"></button></div>'
            )
              .appendTo(a.controls)
              .on("click", function () {
                var c = b(this),
                  d = i.is(":visible");
                c.toggleClass("is-open", !d).toggleClass("is-closed", d),
                  h
                    .toggleClass("is-tracklist-open", !d)
                    .toggleClass("is-tracklist-closed", d),
                  b.isFunction(a.options.mepPlaylistToggle) &&
                    a.options.mepPlaylistToggle(i, a);
              })
              .addClass(function () {
                return j ? "is-open" : "is-closed";
              });
        },
      });
  })(this, jQuery, window.mep),
  (function (a, b, c, d) {
    "use strict";
    b.extend(MediaElementPlayer.prototype, {
      buildmepprevioustrack: function (a, d, e, f) {
        b(
          '<div class="mejs-button mejs-previous-button mejs-previous"><button type="button" aria-controls="' +
            a.id +
            '" title="' +
            c.l10n.previousTrack +
            '"></button></div>'
        )
          .appendTo(d)
          .on("click.mep", function () {
            var c,
              d = a.mepGetCurrentTrack() || {};
            (c = b.extend(
              {},
              { currentTime: f.currentTime, duration: f.duration, src: f.src }
            )),
              a.$node.trigger("skipBack.mep", [c, d]),
              a.mepPlayPreviousTrack();
          });
      },
      mepPlayPreviousTrack: function () {
        var a = this,
          b =
            a.mepCurrentTrack - 1 < 0
              ? a.options.mepPlaylistTracks.length - 1
              : a.mepCurrentTrack - 1;
        a.options.mepPlaylistShuffle &&
          ((b = Math.floor(
            Math.random() * (a.options.mepPlaylistTracks.length - 1)
          )),
          b >= a.mepCurrentTrack && (b += 1)),
          a.$node.trigger("previousTrack.mep", a),
          a.mepSetCurrentTrack(b);
      },
    });
  })(this, jQuery, window.mep),
  (function (a, b, c, d) {
    "use strict";
    b.extend(MediaElementPlayer.prototype, {
      buildmeprepeat: function (a, d, e, f) {
        b(
          '<div class="mejs-button mejs-repeat-button mejs-repeat"><button type="button" aria-controls="' +
            a.id +
            '" title="' +
            c.l10n.repeat +
            '"></button></div>'
        )
          .appendTo(d)
          .on("click.mep", function () {
            (a.options.mepPlaylistRepeat = !a.options.mepPlaylistRepeat),
              a.$node.trigger("repeat.mep", a),
              a.updateRepeat();
          });
      },
      updateRepeat: function () {
        var a = this;
        1 == a.options.mepPlaylistRepeat
          ? a.container.find(".mejs-repeat-button").addClass("is-repeat")
          : a.container.find(".mejs-repeat-button").removeClass("is-repeat");
      },
    });
  })(this, jQuery, window.mep),
  (function (a, b, c, d) {
    "use strict";
    b.extend(MediaElementPlayer.prototype, {
      buildmepshuffle: function (a, d, e, f) {
        b(
          '<div class="mejs-button mejs-shuffle-button mejs-repeat"><button type="button" aria-controls="' +
            a.id +
            '" title="' +
            c.l10n.shuffle +
            '"></button></div>'
        )
          .appendTo(d)
          .on("click.mep", function () {
            (a.options.mepPlaylistShuffle = !a.options.mepPlaylistShuffle),
              a.$node.trigger("shuffle.mep", a),
              a.updateShuffle();
          });
      },
      updateShuffle: function () {
        var a = this;
        1 == a.options.mepPlaylistShuffle
          ? a.container.find(".mejs-shuffle-button").addClass("is-shuffle")
          : a.container.find(".mejs-shuffle-button").removeClass("is-shuffle");
      },
    });
  })(this, jQuery, window.mep),
  (function (a, b, c) {
    "use strict";
    b.extend(MediaElementPlayer.prototype, {
      buildmeplike: function (a, b, c) {
        var d = c
          .append(
            '<div class="mejs-track-actions"><button class="mejs-like-button btn btn-sm no-bg btn-icon"></button></div>'
          )
          .find(".mejs-like-button");
        d.click(function () {
          a.$node.trigger("like.mep", [d.attr("track-id")]);
        }),
          a.$node.on("setTrack.mep", function (a, b, c) {
            d.attr("track-id", b.id),
              b.like ? d.addClass("is-like") : d.removeClass("is-like");
          });
      },
    });
  })(this, jQuery),
  (function (a, b, c) {
    "use strict";
    b.extend(MediaElementPlayer.prototype, {
      buildmepsource: function (a, b, c) {
        var d = c
          .append('<div class="mejs-track-source"><i></i></div>')
          .find(".mejs-track-source");
        a.$node.on("setTrack.mep", function (a, b, c) {
          b.source
            ? d.show().find("i").attr("class", "").addClass(b.source.from)
            : d.hide();
        });
      },
    });
  })(this, jQuery),
  (function (a, b, c) {
    "use strict";
    b.extend(MediaElementPlayer.prototype, {
      buildmepbuffering: function (a, c, d, e) {
        var f = a.container,
          g = b(
            '<div class="mejs-overlay-error mejs-layer"><div class="mejs-error"></div></div>'
          )
            .hide()
            .appendTo(d)
            .on("click.mep", function () {
              b(this).hide();
            });
        e.addEventListener(
          "play",
          function () {
            f.removeClass("is-buffering"),
              b("body").removeClass("is-buffering"),
              g.hide();
          },
          !1
        ),
          e.addEventListener(
            "playing",
            function () {
              f.removeClass("is-buffering"),
                b("body").removeClass("is-buffering"),
                g.hide();
            },
            !1
          ),
          e.addEventListener(
            "seeking",
            function () {
              f.addClass("is-buffering"), b("body").addClass("is-buffering");
            },
            !1
          ),
          e.addEventListener(
            "seeked",
            function () {
              f.removeClass("is-buffering"),
                b("body").removeClass("is-buffering");
            },
            !1
          ),
          e.addEventListener(
            "waiting",
            function () {
              f.addClass("is-buffering"), b("body").addClass("is-buffering");
            },
            !1
          ),
          e.addEventListener(
            "loadeddata",
            function () {
              isNaN(e.duration) || "Infinity" == e.duration
                ? f.find(".mejs-duration").addClass("mejs-time-infinity")
                : f.find(".mejs-duration").removeClass("mejs-time-infinity"),
                f.addClass("is-buffering"),
                b("body").addClass("is-buffering");
            },
            !1
          ),
          e.addEventListener(
            "canplay",
            function () {
              f.removeClass("is-buffering"),
                b("body").removeClass("is-buffering");
            },
            !1
          ),
          e.addEventListener(
            "error",
            function (a) {
              f.removeClass("is-buffering"),
                b("body").removeClass("is-buffering"),
                g.show(),
                g.find(".mejs-error").html(mep.l10n.error);
            },
            !1
          );
      },
    });
  })(this, jQuery),
  (function (a, b, c) {
    "use strict";
    b.extend(MediaElementPlayer.prototype, {
      buildyoutube: function (a, c, d, e) {
        "youtube" === e.pluginType &&
          (b.extend(e, {
            setSrc: function (a) {
              e.src = a;
              var b;
              -1 != a.lastIndexOf("youtu.be")
                ? ((b = a.substr(a.lastIndexOf("/") + 1)),
                  -1 != b.indexOf("?") && (b = b.substr(0, b.indexOf("?"))))
                : (b = a.substr(a.lastIndexOf("=") + 1)),
                this.pluginApi.loadVideoById(b);
            },
          }),
          b(
            '<div class="mejs-button mejs-youtube-button mejs-repeat"><button type="button" aria-controls="' +
              a.id +
              '"></button></div>'
          )
            .appendTo(c)
            .on("click.mep", function () {
              a.container.toggleClass("video-open");
            }));
      },
    });
  })(this, jQuery),
  (function (a, b, c) {
    "use strict";
    b.extend(MediaElementPlayer.prototype, {
      buildmeptracklist: function (a, c, d) {
        var e = a.container.closest(a.options.mepSelectors.playlist),
          f = b("<ol></ol>").addClass(
            a.options.mepSelectors.tracklist.substring(1)
          );
        e.find(a.options.mepSelectors.tracklist).length ||
          (e.append(f),
          a.updatemepList(),
          e.on("click.track.mep", ".track-remove", function (c) {
            c.preventDefault();
            var d = b(this).parent().parent().index();
            a.mepRemove(a.options.mepPlaylistTracks[d]);
          }));
      },
      updatemepList: function () {
        var a = this,
          c = a.container.closest(a.options.mepSelectors.playlist),
          d = c.find(a.options.mepSelectors.tracklist);
        d.html(""),
          b.each(a.options.mepPlaylistTracks, function (b) {
            d.append(a.createItem(a.options.mepPlaylistTracks[b]));
          }),
          (a.$mepTracks = c.find(a.options.mepSelectors.track));
      },
      createItem: function (a) {
        var b =
          '<li class="track"><div class="track-action"><a class="track-remove">&times;</a></div><div class="track-info"><span class="track-title">' +
          a.title +
          '</span><span class="track-author">' +
          a.meta.author +
          "</span></div></li>";
        return b;
      },
      mepAdd: function (a, b) {
        var c = this,
          d = c.container.closest(c.options.mepSelectors.playlist),
          e = d.find(c.options.mepSelectors.tracklist),
          f = c.find(a.id);
        return f > -1
          ? void (b && c.mepSelect(f, b))
          : (c.options.mepPlaylistTracks.push(a),
            e.append(c.createItem(a)),
            (c.$mepTracks = d.find(c.options.mepSelectors.track)),
            void (b && c.mepSelect(c.options.mepPlaylistTracks.length - 1, b)));
      },
      mepRemove: function (a) {
        var b = this,
          c = b.container.closest(b.options.mepSelectors.playlist),
          d = c.find(b.options.mepSelectors.track);
        if (null != a.id) {
          var e = b.find(a.id);
          if (
            e > -1 &&
            (b.options.mepPlaylistTracks.splice(e, 1),
            d.eq(e).remove(),
            (b.$mepTracks = c.find(b.options.mepSelectors.track)),
            b.mepCurrentTrack == e)
          ) {
            var f = b.options.mepPlaylistTracks.length > e ? e : e - 1;
            b.mepSelect(f);
          }
        }
      },
      mepSelect: function (a, b) {
        var c = this;
        c.mepSetCurrentTrack(a, b);
      },
      find: function (a) {
        for (
          var b = this, c = -1, d = 0;
          d < b.options.mepPlaylistTracks.length;
          d++
        )
          if (b.options.mepPlaylistTracks[d].id === a) return (c = d);
        return c;
      },
    });
  })(this, jQuery),
  (function (a) {
    "use strict";
    function b() {
      a("[data-id]")
        .removeClass("active")
        .find(".btn-playpause")
        .removeClass("is-playing")
        .parent()
        .removeClass("active");
      var b = e.mepGetCurrentTrack();
      if (b && b.id) {
        var c = a('[data-id="' + b.id + '"]');
        e.media.paused
          ? c
              .removeClass("active")
              .find(".btn-playpause")
              .removeClass("is-playing")
              .parent()
              .removeClass("active")
          : c
              .addClass("active")
              .find(".btn-playpause")
              .addClass("is-playing")
              .parent()
              .addClass("active");
      }
    }
    function c(b) {
      var c = b.closest(".item");
      if (!c.attr("data-src"))
        return (
          b.toggleClass("is-playing"),
          a("#tracks").find(".btn-playpause").first().trigger("click"),
          !1
        );
      var d = {
        meta: {
          author: c.find(".item-author").find("a").text(),
          authorlink: c.find(".item-author").find("a").attr("href"),
        },
        src: b.closest("[data-src]").attr("data-src"),
        thumb: {
          src: c
            .find(".item-media-content")
            .css("background-image")
            .replace(/^url\(["']?/, "")
            .replace(/["']?\)$/, ""),
        },
        title: c.find(".item-title").find("a").text(),
        link: c.find(".item-title").find("a").attr("href"),
        id: b.attr("data-id")
          ? b.attr("data-id")
          : b.closest("[data-id]").attr("data-id"),
      };
      return d;
    }
    if (0 != a(".playlist").length) {
      var d = a(".playlist").mepPlaylist({
          audioHeight: "40",
          audioWidth: "100%",
          videoHeight: "40",
          videoWidth: "100%",
          audioVolume: "vertical",
          mepPlaylistLoop: !0,
          alwaysShowControls: !0,
          mepSkin: "mejs-audio",
          mepResponsiveProgress: !0,
          mepSelectors: {
            playlist: ".playlist",
            track: ".track",
            tracklist: ".tracks",
          },
          features: [
            "meplike",
            "mepartwork",
            "mepcurrentdetails",
            "mepplaylist",
            "mephistory",
            "mepprevioustrack",
            "playpause",
            "mepnexttrack",
            "progress",
            "current",
            "duration",
            "volume",
            "mepicons",
            "meprepeat",
            "mepshuffle",
            "mepsource",
            "mepbuffering",
            "meptracklist",
            "mepplaylisttoggle",
            "youtube",
          ],
          mepPlaylistTracks: [
            {
              id: "item-1",
              title: "Pull Up",
              except:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Nihil illinc huc pervenit.",
              link: "track.detail.html",
              thumb: { src: "images/b0.jpg" },
              src: "http://api.soundcloud.com/tracks/269944843/stream?client_id=a10d44d431ad52868f1bce6d36f5234c",
              meta: {
                author: "Summerella",
                authorlink: "artist.detail.html",
                date: "30.05.2016",
                category: "Blue",
                tag: "Holiday",
                play: 3200,
                like: 210,
                duration: "2:50",
              },
            },
            {
              id: "item-2",
              title: "Fireworks",
              except:
                "Hidem saepe faciamus. Quid ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
              link: "track.detail.html",
              thumb: { src: "images/b1.jpg" },
              src: "http://api.soundcloud.com/tracks/259445397/stream?client_id=a10d44d431ad52868f1bce6d36f5234c",
              meta: {
                author: "Kygo",
                authorlink: "artist.detail.html",
                date: "02.05.2016",
                category: "Jazz",
                play: 30,
                like: 10,
                duration: "4:25",
              },
            },
            {
              id: "item-3",
              title: "I Wanna Be In the Cavalry",
              except:
                "Tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
              link: "track.detail.html",
              thumb: { src: "images/b2.jpg" },
              src: "http://api.soundcloud.com/tracks/79031167/stream?client_id=a10d44d431ad52868f1bce6d36f5234c",
              meta: {
                author: "Jeremy Scott",
                authorlink: "artist.detail.html",
                date: "09.04.2016",
                category: "DJ",
                play: 300,
                like: 10,
                duration: "2:50",
              },
            },
          ],
        }),
        e = d.find("audio, video")[0].player;
      e.$node.on("like.mep", function (b, c) {
        a("[track-id=" + c + "]").toggleClass("is-like");
      }),
        e.$node.on("play", function (a) {
          b();
        }),
        e.$node.on("pause", function (a) {
          b();
        }),
        a(document).on("pjaxEnd", function () {
          b();
        }),
        a(document).on("click.btn", ".btn-playpause", function (b) {
          b.stopPropagation();
          var d = a(this);
          if (d.hasClass("is-playing")) d.removeClass("is-playing"), e.pause();
          else {
            var f = c(d);
            f && e.mepAdd(f, !0);
          }
        });
    }
  })(jQuery);
var MODULE_CONFIG = {
    screenfull: ["libs/screenfull/dist/screenfull.min.js"],
    stick_in_parent: ["libs/sticky-kit/jquery.sticky-kit.min.js"],
  },
  JP_CONFIG = {},
  uiLoad = uiLoad || {};
!(function (a, b, c) {
  "use strict";
  var d = [],
    e = !1,
    f = a.Deferred();
  (c.load = function (b) {
    return (
      (b = a.isArray(b) ? b : b.split(/\s+/)),
      e || (e = f.promise()),
      a.each(b, function (a, b) {
        e = e.then(function () {
          return d[b] ? d[b].promise() : b.indexOf(".css") >= 0 ? h(b) : g(b);
        });
      }),
      f.resolve(),
      e
    );
  }),
    (c.remove = function (b) {
      (b = a.isArray(b) ? b : b.split(/\s+/)),
        a.each(b, function (b, c) {
          c.indexOf(".css") >= 0
            ? a('link[href="' + c + '"]').remove()
            : a('script[src="' + c + '"]').remove(),
            delete d[c];
        });
    });
  var g = function (c) {
      var e = a.Deferred(),
        f = b.createElement("script");
      return (
        (f.src = c),
        (f.onload = function (a) {
          e.resolve(a);
        }),
        (f.onerror = function (a) {
          e.reject(a);
        }),
        b.body.appendChild(f),
        (d[c] = e),
        e.promise()
      );
    },
    h = function (c) {
      var e = a.Deferred(),
        f = b.createElement("link");
      return (
        (f.rel = "stylesheet"),
        (f.type = "text/css"),
        (f.href = c),
        (f.onload = function (a) {
          e.resolve(a);
        }),
        (f.onerror = function (a) {
          e.reject(a);
        }),
        b.head.appendChild(f),
        (d[c] = e),
        e.promise()
      );
    };
})(jQuery, document, uiLoad),
  (function ($, MODULE_CONFIG) {
    "use strict";
    $.fn.uiJp = function () {
      return this.each(function () {
        var self = $(this),
          opts = self.attr("ui-options") || self.attr("data-ui-options"),
          attr = self.attr("ui-jp") || self.attr("data-ui-jp"),
          options = opts && eval("[" + opts + "]");
        options &&
          $.isPlainObject(options[0]) &&
          (options[0] = $.extend({}, JP_CONFIG[attr], options[0])),
          self[attr]
            ? self[attr].apply(self, options)
            : uiLoad.load(MODULE_CONFIG[attr]).then(function () {
                self[attr].apply(self, options);
              });
      });
    };
  })(jQuery, MODULE_CONFIG),
  (function ($) {
    "use strict";
    var promise = !1,
      deferred = $.Deferred();
    ($.fn.uiInclude = function () {
      function compile(node) {
        node.find("[ui-include], [data-ui-include]").each(function () {
          var that = $(this),
            url = that.attr("ui-include") || that.attr("data-ui-include");
          promise = promise.then(function () {
            var request = $.ajax({
                url: eval(url),
                method: "GET",
                dataType: "text",
              }),
              chained = request.then(function (a) {
                var b = that.replaceWithPush(a);
                b.find("[ui-jp], [data-ui-jp]").uiJp(),
                  b.find("[ui-include], [data-ui-include]").length &&
                    compile(b);
              });
            return chained;
          });
        });
      }
      return (
        promise || (promise = deferred.promise()),
        compile(this),
        deferred.resolve(),
        promise
      );
    }),
      ($.fn.replaceWithPush = function (a) {
        var b = $(a);
        return this.replaceWith(b), b;
      });
  })(jQuery),
  (function (a) {
    "use strict";
    (navigator.userAgent.match(/MSIE/i) ||
      navigator.userAgent.match(/Trident.*rv:11\./)) &&
      a("body").addClass("ie");
    var b =
      window.navigator.userAgent || window.navigator.vendor || window.opera;
    /iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/.test(b) &&
      a("body").addClass("smart");
  })(jQuery),
  (function (a) {
    "use strict";
    a(document).on("blur", "input, textarea", function (b) {
      a(this).val()
        ? a(this).addClass("has-value")
        : a(this).removeClass("has-value");
    });
  })(jQuery),
  (function (a) {
    "use strict";
    a(document).on("click", "[ui-nav] a, [data-ui-nav] a", function (b) {
      var c,
        d,
        e = a(b.target);
      e.is("a") || (e = e.closest("a")),
        (d = e.parent()),
        (c = d.siblings(".active")),
        d.addClass("active"),
        c.removeClass("active"),
        e.attr("href") &&
          "" != e.attr("href") &&
          a(document).trigger("Nav:changed");
    }),
      a("[ui-nav] a, [data-ui-nav] a")
        .filter(function () {
          return -1 != location.href.indexOf(a(this).attr("href"));
        })
        .parent()
        .addClass("active");
  })(jQuery),
  (function (a) {
    "use strict";
    uiLoad.load("libs/screenfull/dist/screenfull.min.js"),
      a(document).on(
        "click",
        "[ui-fullscreen], [data-ui-fullscreen]",
        function (a) {
          a.preventDefault(), screenfull.enabled && screenfull.toggle();
        }
      );
  })(jQuery),
  (function (a) {
    "use strict";
    a.extend(jQuery.easing, {
      def: "easeOutQuad",
      easeInOutExpo: function (a, b, c, d, e) {
        return 0 == b
          ? c
          : b == e
          ? c + d
          : (b /= e / 2) < 1
          ? (d / 2) * Math.pow(2, 10 * (b - 1)) + c
          : (d / 2) * (-Math.pow(2, -10 * --b) + 2) + c;
      },
    }),
      a(document).on(
        "click",
        "[ui-scroll-to], [data-ui-scroll-to]",
        function (b) {
          b.preventDefault();
          var c =
            a("#" + a(this).attr("ui-scroll-to")) ||
            a("#" + a(this).attr("data-ui-scroll-to"));
          a("html,body").animate(
            { scrollTop: c.offset().top },
            600,
            "easeInOutExpo"
          );
        }
      );
  })(jQuery),
  (function (a) {
    "use strict";
    a(document).on(
      "click",
      "[ui-toggle-class], [data-ui-toggle-class]",
      function (b) {
        b.preventDefault();
        var c = a(this),
          d = c.attr("data-ui-toggle-class") || c.attr("ui-toggle-class"),
          e = c.attr("data-ui-target") || c.attr("ui-target"),
          f = d.split(","),
          g = (e && e.split(",")) || Array(c),
          h = 0;
        a.each(f, function (b, c) {
          var d = a(g[g.length && h]),
            e = d.attr("data-ui-class"),
            i = f[b];
          e != i && d.removeClass(d.attr("data-ui-class")),
            d.toggleClass(f[b]),
            d.attr("data-ui-class", i),
            h++;
        }),
          c.toggleClass("active");
      }
    );
  })(jQuery),
  (function (a, b) {
    "use strict";
    a.fn.taburl = function () {
      var b = this;
      return (
        b.each(function () {
          function b() {
            a('[data-toggle="tab"]')
              .filter(function () {
                return -1 != location.href.indexOf(a(this).attr("data-target"));
              })
              .trigger("click");
          }
          b(),
            a(document).on("Nav:changed", function () {
              setTimeout(b, 50);
            });
        }),
        b
      );
    };
  })(jQuery),
  (function (a) {
    "use strict";
    function b() {
      a("body")
        .removeClass(a("body").attr("data-ui-class"))
        .addClass(app.setting.bg)
        .attr("data-ui-class", app.setting.bg),
        app.setting.folded
          ? a("#aside").addClass("folded")
          : a("#aside").removeClass("folded"),
        0 == a("#aside").length &&
          (app.setting.container
            ? a(".app-header .navbar, .app-content").addClass("container")
            : a(".app-header .navbar, .app-content").removeClass("container")),
        a('.switcher input[value="' + app.setting.color + '"]').prop(
          "checked",
          !0
        ),
        a('.switcher input[value="' + app.setting.bg + '"]').prop(
          "checked",
          !0
        ),
        a('[data-target="folded"] input').prop("checked", app.setting.folded),
        a('[data-target="container"] input').prop(
          "checked",
          app.setting.container
        ),
        c != app.setting.color &&
          (uiLoad.remove("css/theme/" + c + ".css"),
          uiLoad.load("css/theme/" + app.setting.color + ".css"),
          (c = app.setting.color));
    }
    window.app = {
      name: "pulse",
      setting: { folded: !1, container: !1, color: "primary", bg: "" },
    };
    var c,
      d = "jqStorage-" + app.name + "-Setting",
      e = a.localStorage;
    e.isEmpty(d) ? e.set(d, app.setting) : (app.setting = e.get(d));
    for (
      var f = window.location.search.substring(1).split("&"), g = 0;
      g < f.length;
      g++
    ) {
      var h = f[g].split("=");
      (app.setting[h[0]] =
        "true" == h[1] || "false" == h[1] ? "true" == h[1] : h[1]),
        e.set(d, app.setting);
    }
    b(),
      a(document).on("click.setting", ".switcher input", function (c) {
        var f,
          g = a(this);
        (f = g.parent().attr("data-target")
          ? g.parent().attr("data-target")
          : g.parent().parent().attr("data-target")),
          (app.setting[f] = g.is(":checkbox")
            ? g.prop("checked")
            : a(this).val()),
          e.set(d, app.setting),
          b(app.setting);
      });
  })(jQuery),
  (function (a) {
    "use strict";
    a(document).on("click.site", ".btn-more", function (b) {
      var c = a(this).next(".dropdown-menu");
      "" == c.html() &&
        c.append(
          '<a class="dropdown-item" href="#"><i class="fa fa-plus fa-fw text-left"></i> Add to Queque</a><a class="dropdown-item" href="#"><i class="fa fa-music fa-fw text-left"></i> Add to Playlist</a><div class="dropdown-divider"></div><a class="dropdown-item" href="#"><i class="fa fa-share-alt fa-fw text-left"></i> Share</a>'
        ),
        b.pageY + c.height() + 60 > a("body").height() &&
          c.parent().addClass("dropup"),
        b.pageX < c.width() && c.removeClass("pull-right");
    }),
      a(document).on("click.site", "#search-result a", function (b) {
        a(this).closest(".modal").modal("hide");
      });
  })(jQuery),
  (function (a) {
    "use strict";
    function b() {
      a.stellar && a.stellar({ horizontalScrolling: !1, verticalOffset: 0 });
    }
    if (
      (a("[ui-jp], [data-ui-jp]").uiJp(),
      a("body").uiInclude(),
      b(),
      a(document).on("pjaxStart", function () {
        a("#aside").modal("hide"),
          a("body").removeClass("modal-open").find(".modal-backdrop").remove(),
          a(".navbar-toggleable-sm").collapse("hide");
      }),
      a.support.pjax)
    ) {
      a.pjax.defaults.maxCacheLength = 0;
      var c = a("#view");
      a(document).on(
        "click",
        "a[data-pjax], [data-pjax] a, #aside .nav a, .item a, .playlist a",
        function (b) {
          0 == a("#view").length ||
            a(this).hasClass("no-ajax") ||
            a.pjax.click(b, { container: c, timeout: 6e3, fragment: "#view" });
        }
      ),
        a(document).on("pjax:start", function () {
          a(document).trigger("pjaxStart");
        }),
        a(document).on("pjax:end", function (c) {
          a(c.target).find("[ui-jp], [data-ui-jp]").uiJp(),
            a(c.target).uiInclude(),
            a(document).trigger("pjaxEnd"),
            b();
        });
    }
  })(jQuery);
