;(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    '8OQS': function (e, t) {
      e.exports = function (e, t) {
        if (null == e) return {}
        var a,
          n,
          r = {},
          c = Object.keys(e)
        for (n = 0; n < c.length; n++)
          (a = c[n]), t.indexOf(a) >= 0 || (r[a] = e[a])
        return r
      }
    },
    MPSb: function (e, t, a) {
      'use strict'
      var n = a('pVnL'),
        r = a.n(n),
        c = a('TSYQ'),
        i = a.n(c),
        l = (a('17x9'), a('q1tI')),
        s = a.n(l),
        o = a('ICNK'),
        d = a('Y53p'),
        u = a('H+2d'),
        p = a('ZeOK'),
        b = a('MZgk')
      function m(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = i()('header', a),
          l = Object(o.a)(m, e),
          p = Object(d.a)(m, e)
        return s.a.createElement(
          p,
          r()({}, l, { className: c }),
          u.b.isNil(t) ? n : t
        )
      }
      ;(m.handledProps = ['as', 'children', 'className', 'content']),
        (m.propTypes = {}),
        (m.create = Object(b.d)(m, function (e) {
          return { content: e }
        }))
      var f = m
      function O(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = i()('description', a),
          l = Object(o.a)(O, e),
          p = Object(d.a)(O, e)
        return s.a.createElement(
          p,
          r()({}, l, { className: c }),
          u.b.isNil(t) ? n : t
        )
      }
      ;(O.handledProps = ['as', 'children', 'className', 'content']),
        (O.propTypes = {}),
        (O.create = Object(b.d)(O, function (e) {
          return { content: e }
        }))
      var j = O
      function v(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = i()('extra', a),
          l = Object(o.a)(v, e),
          p = Object(d.a)(v, e)
        return s.a.createElement(
          p,
          r()({}, l, { className: c }),
          u.b.isNil(t) ? n : t
        )
      }
      ;(v.handledProps = ['as', 'children', 'className', 'content']),
        (v.propTypes = {}),
        (v.create = Object(b.d)(v, function (e) {
          return { content: e }
        }))
      var h = v
      function N(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = i()('meta', a),
          l = Object(o.a)(N, e),
          p = Object(d.a)(N, e)
        return s.a.createElement(
          p,
          r()({}, l, { className: c }),
          u.b.isNil(t) ? n : t
        )
      }
      ;(N.handledProps = ['as', 'children', 'className', 'content']),
        (N.propTypes = {}),
        (N.create = Object(b.d)(N, function (e) {
          return { content: e }
        }))
      var g = N
      function y(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = e.description,
          l = e.extra,
          b = e.header,
          m = e.meta,
          O = e.verticalAlign,
          v = i()(Object(p.f)(O), 'content', a),
          N = Object(o.a)(y, e),
          w = Object(d.a)(y, e)
        return u.b.isNil(t)
          ? s.a.createElement(
              w,
              r()({}, N, { className: v }),
              f.create(b, { autoGenerateKey: !1 }),
              g.create(m, { autoGenerateKey: !1 }),
              j.create(c, { autoGenerateKey: !1 }),
              h.create(l, { autoGenerateKey: !1 }),
              n
            )
          : s.a.createElement(w, r()({}, N, { className: v }), t)
      }
      ;(y.handledProps = [
        'as',
        'children',
        'className',
        'content',
        'description',
        'extra',
        'header',
        'meta',
        'verticalAlign',
      ]),
        (y.propTypes = {})
      var w = y,
        P = a('QILm'),
        E = a.n(P),
        x = a('3WF5'),
        k = a.n(x)
      function T(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = e.divided,
          l = e.items,
          b = e.link,
          m = e.relaxed,
          f = e.unstackable,
          O = i()(
            'ui',
            Object(p.a)(c, 'divided'),
            Object(p.a)(b, 'link'),
            Object(p.a)(f, 'unstackable'),
            Object(p.b)(m, 'relaxed'),
            'items',
            a
          ),
          j = Object(o.a)(T, e),
          v = Object(d.a)(T, e)
        if (!u.b.isNil(t))
          return s.a.createElement(v, r()({}, j, { className: O }), t)
        if (!u.b.isNil(n))
          return s.a.createElement(v, r()({}, j, { className: O }), n)
        var h = k()(l, function (e) {
          var t = e.childKey,
            a = E()(e, ['childKey']),
            n = t || [a.content, a.description, a.header, a.meta].join('-')
          return s.a.createElement(R, r()({}, a, { key: n }))
        })
        return s.a.createElement(v, r()({}, j, { className: O }), h)
      }
      ;(T.handledProps = [
        'as',
        'children',
        'className',
        'content',
        'divided',
        'items',
        'link',
        'relaxed',
        'unstackable',
      ]),
        (T.propTypes = {})
      var A = T,
        C = a('5XkN')
      function I(e) {
        var t = e.size,
          a = Object(o.a)(I, e)
        return s.a.createElement(
          C.a,
          r()({}, a, { size: t, ui: !!t, wrapped: !0 })
        )
      }
      ;(I.handledProps = ['size']),
        (I.propTypes = {}),
        (I.create = Object(b.d)(I, function (e) {
          return { src: e }
        }))
      var S = I
      function K(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = e.description,
          l = e.extra,
          p = e.header,
          b = e.image,
          m = e.meta,
          f = i()('item', a),
          O = Object(o.a)(K, e),
          j = Object(d.a)(K, e)
        return u.b.isNil(t)
          ? s.a.createElement(
              j,
              r()({}, O, { className: f }),
              S.create(b, { autoGenerateKey: !1 }),
              s.a.createElement(w, {
                content: n,
                description: c,
                extra: l,
                header: p,
                meta: m,
              })
            )
          : s.a.createElement(j, r()({}, O, { className: f }), t)
      }
      ;(K.handledProps = [
        'as',
        'children',
        'className',
        'content',
        'description',
        'extra',
        'header',
        'image',
        'meta',
      ]),
        (K.Content = w),
        (K.Description = j),
        (K.Extra = h),
        (K.Group = A),
        (K.Header = f),
        (K.Image = S),
        (K.Meta = g),
        (K.propTypes = {})
      var R = (t.a = K)
    },
    Mt1y: function (e, t, a) {
      'use strict'
      var n = a('pVnL'),
        r = a.n(n),
        c = a('TSYQ'),
        i = a.n(c),
        l = (a('17x9'), a('q1tI')),
        s = a.n(l),
        o = a('ZeOK'),
        d = a('ICNK'),
        u = a('Y53p'),
        p = a('H+2d')
      function b(e) {
        var t = e.children,
          a = e.className,
          n = e.clearing,
          c = e.content,
          l = e.fitted,
          m = e.hidden,
          f = e.horizontal,
          O = e.inverted,
          j = e.section,
          v = e.vertical,
          h = i()(
            'ui',
            Object(o.a)(n, 'clearing'),
            Object(o.a)(l, 'fitted'),
            Object(o.a)(m, 'hidden'),
            Object(o.a)(f, 'horizontal'),
            Object(o.a)(O, 'inverted'),
            Object(o.a)(j, 'section'),
            Object(o.a)(v, 'vertical'),
            'divider',
            a
          ),
          N = Object(d.a)(b, e),
          g = Object(u.a)(b, e)
        return s.a.createElement(
          g,
          r()({}, N, { className: h }),
          p.b.isNil(t) ? c : t
        )
      }
      ;(b.handledProps = [
        'as',
        'children',
        'className',
        'clearing',
        'content',
        'fitted',
        'hidden',
        'horizontal',
        'inverted',
        'section',
        'vertical',
      ]),
        (b.propTypes = {}),
        (t.a = b)
    },
    QILm: function (e, t, a) {
      var n = a('8OQS')
      e.exports = function (e, t) {
        if (null == e) return {}
        var a,
          r,
          c = n(e, t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (r = 0; r < i.length; r++)
            (a = i[r]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (c[a] = e[a]))
        }
        return c
      }
    },
    SqSx: function (e, t, a) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/product/[id]',
        function () {
          return a('nt2N')
        },
      ])
    },
    nt2N: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('q1tI'),
        r = a.n(n),
        c = a('nOHt'),
        i = a('pdCo'),
        l = a('MPSb'),
        s = a('MqQV'),
        o = a('o0o1'),
        d = a.n(o)
      function u(e, t, a, n, r, c, i) {
        try {
          var l = e[c](i),
            s = l.value
        } catch (o) {
          return void a(o)
        }
        l.done ? t(s) : Promise.resolve(s).then(n, r)
      }
      var p = a('pVnL'),
        b = a.n(p),
        m = a('J4zp'),
        f = a.n(m),
        O = a('MVZn'),
        j = a.n(O),
        v = a('lwsE'),
        h = a.n(v),
        N = a('W8MJ'),
        g = a.n(N),
        y = a('a1gu'),
        w = a.n(y),
        P = a('Nsbk'),
        E = a.n(P),
        x = a('PJYZ'),
        k = a.n(x),
        T = a('7W2i'),
        A = a.n(T),
        C = a('lSNA'),
        I = a.n(C),
        S = a('ijCd'),
        K = a.n(S),
        R = a('3WF5'),
        z = a.n(R),
        G = a('Og4/'),
        M = a.n(G),
        Q = a('mwIZ'),
        H = a.n(Q),
        Z = a('J2iB'),
        L = a.n(Z),
        Y = a('Z4ph'),
        q = a('TSYQ'),
        J = a.n(q),
        W = (a('17x9'), a('ICNK')),
        F = a('526f'),
        _ = a('ZeOK'),
        B = a('Y53p'),
        D = a('H+2d'),
        V = a('MZgk'),
        X = a('QetY'),
        U = a('D1pA'),
        $ = (function (e) {
          function t() {
            var e, a
            h()(this, t)
            for (var r = arguments.length, c = new Array(r), i = 0; i < r; i++)
              c[i] = arguments[i]
            return (
              (a = w()(this, (e = E()(t)).call.apply(e, [this].concat(c)))),
              I()(k()(a), 'inputRef', Object(n.createRef)()),
              I()(k()(a), 'computeIcon', function () {
                var e = a.props,
                  t = e.loading,
                  n = e.icon
                return L()(n) ? (t ? 'spinner' : void 0) : n
              }),
              I()(k()(a), 'computeTabIndex', function () {
                var e = a.props,
                  t = e.disabled,
                  n = e.tabIndex
                return L()(n) ? (t ? -1 : void 0) : n
              }),
              I()(k()(a), 'focus', function () {
                return a.inputRef.current.focus()
              }),
              I()(k()(a), 'select', function () {
                return a.inputRef.current.select()
              }),
              I()(k()(a), 'handleChange', function (e) {
                var t = H()(e, 'target.value')
                M()(a.props, 'onChange', e, j()({}, a.props, { value: t }))
              }),
              I()(k()(a), 'handleChildOverrides', function (e, t) {
                return j()({}, t, e.props, {
                  ref: function (t) {
                    Object(Y.a)(e.ref, t), (a.inputRef.current = t)
                  },
                })
              }),
              I()(k()(a), 'partitionProps', function () {
                var e = a.props,
                  n = e.disabled,
                  r = e.type,
                  c = a.computeTabIndex(),
                  i = Object(W.a)(t, a.props),
                  l = Object(F.b)(i),
                  s = f()(l, 2),
                  o = s[0],
                  d = s[1]
                return [
                  j()({}, o, {
                    disabled: n,
                    type: r,
                    tabIndex: c,
                    onChange: a.handleChange,
                    ref: a.inputRef,
                  }),
                  d,
                ]
              }),
              a
            )
          }
          return (
            A()(t, e),
            g()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    a = this.props,
                    c = a.action,
                    i = a.actionPosition,
                    l = a.children,
                    o = a.className,
                    d = a.disabled,
                    u = a.error,
                    p = a.fluid,
                    m = a.focus,
                    O = a.icon,
                    j = a.iconPosition,
                    v = a.input,
                    h = a.inverted,
                    N = a.label,
                    g = a.labelPosition,
                    y = a.loading,
                    w = a.size,
                    P = a.transparent,
                    E = a.type,
                    x = J()(
                      'ui',
                      w,
                      Object(_.a)(d, 'disabled'),
                      Object(_.a)(u, 'error'),
                      Object(_.a)(p, 'fluid'),
                      Object(_.a)(m, 'focus'),
                      Object(_.a)(h, 'inverted'),
                      Object(_.a)(y, 'loading'),
                      Object(_.a)(P, 'transparent'),
                      Object(_.e)(i, 'action') || Object(_.a)(c, 'action'),
                      Object(_.e)(j, 'icon') || Object(_.a)(O || y, 'icon'),
                      Object(_.e)(g, 'labeled') || Object(_.a)(N, 'labeled'),
                      'input',
                      o
                    ),
                    k = Object(B.a)(t, this.props),
                    T = this.partitionProps(),
                    A = f()(T, 2),
                    C = A[0],
                    I = A[1]
                  if (!D.b.isNil(l)) {
                    var S = z()(n.Children.toArray(l), function (t) {
                      return 'input' !== t.type
                        ? t
                        : Object(n.cloneElement)(
                            t,
                            e.handleChildOverrides(t, C)
                          )
                    })
                    return r.a.createElement(k, b()({}, I, { className: x }), S)
                  }
                  var R = X.a.create(c, { autoGenerateKey: !1 }),
                    G = s.a.create(N, {
                      defaultProps: {
                        className: J()('label', K()(g, 'corner') && g),
                      },
                      autoGenerateKey: !1,
                    })
                  return r.a.createElement(
                    k,
                    b()({}, I, { className: x }),
                    'left' === i && R,
                    'right' !== g && G,
                    Object(V.a)(v || E, {
                      defaultProps: C,
                      autoGenerateKey: !1,
                    }),
                    U.a.create(this.computeIcon(), { autoGenerateKey: !1 }),
                    'left' !== i && R,
                    'right' === g && G
                  )
                },
              },
            ]),
            t
          )
        })(n.Component)
      I()($, 'defaultProps', { type: 'text' }),
        I()($, 'handledProps', [
          'action',
          'actionPosition',
          'as',
          'children',
          'className',
          'disabled',
          'error',
          'fluid',
          'focus',
          'icon',
          'iconPosition',
          'input',
          'inverted',
          'label',
          'labelPosition',
          'loading',
          'onChange',
          'size',
          'tabIndex',
          'transparent',
          'type',
        ]),
        ($.propTypes = {}),
        ($.create = Object(V.d)($, function (e) {
          return { type: e }
        }))
      var ee = $,
        te = a('+lUf'),
        ae = a('laJZ'),
        ne = r.a.createElement,
        re = function (e) {
          var t = ''
          return e < 1 && (t = "Can't be blank"), t
        },
        ce = function (e) {
          var t = e.product,
            a = Object(n.useState)(!1),
            c = a[0],
            i = a[1],
            l = Object(n.useState)(''),
            s = l[0],
            o = l[1],
            p = Object(n.useState)(1),
            b = p[0],
            m = p[1],
            f = Object(n.useState)(!1),
            O = f[0],
            j = f[1],
            v = Object(ae.c)().addToCart,
            h = (function () {
              var e,
                a =
                  ((e = d.a.mark(function e() {
                    var a
                    return d.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            ;(a = re(b)),
                              o(a),
                              a ||
                                (i(!0),
                                new Promise(function (e, t) {
                                  window.setTimeout(e, 600)
                                })
                                  .then(function () {
                                    v(t, b),
                                      i(!1),
                                      m(b),
                                      j(!0),
                                      setTimeout(function () {
                                        j(!1)
                                      }, 1e3)
                                  })
                                  .catch(function (e) {
                                    o('Error: '.concat(e) || !1), i(!1)
                                  }))
                          case 3:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  })),
                  function () {
                    var t = this,
                      a = arguments
                    return new Promise(function (n, r) {
                      var c = e.apply(t, a)
                      function i(e) {
                        u(c, n, r, i, l, 'next', e)
                      }
                      function l(e) {
                        u(c, n, r, i, l, 'throw', e)
                      }
                      i(void 0)
                    })
                  })
              return function () {
                return a.apply(this, arguments)
              }
            })()
          return ne(
            r.a.Fragment,
            null,
            ne(ee, {
              type: 'number',
              placeholder: 'Quantity',
              value: b,
              min: 1,
              step: 1,
              error: !!s,
              onChange: function (e) {
                var t = e.target
                return m(parseInt(t.value, 10))
              },
              action: {
                color: 'green',
                content: 'Add to Cart',
                icon: 'plus cart',
                onClick: h,
                loading: c,
                disabled: c,
              },
            }),
            s &&
              ne('div', { style: { color: 'red', position: 'absolute' } }, s),
            ne(
              te.a,
              { duration: { hide: 500, show: 500 }, visible: O },
              ne(
                'div',
                { style: { color: 'green', position: 'absolute' } },
                ne(U.a, { name: 'check' }),
                'Added to cart'
              )
            )
          )
        },
        ie = a('Ff2n'),
        le = a('MX0m'),
        se = a.n(le),
        oe = a('aQu0'),
        de = a('Mt1y')
      a('Wt1U')
      function ue(e) {
        var t = e.children,
          a = e.className,
          n = J()(a),
          c = Object(W.a)(ue, e),
          i = Object(B.a)(ue, e)
        return r.a.createElement(i, b()({}, c, { className: n }), t)
      }
      ;(ue.handledProps = ['as', 'children', 'className']),
        (ue.defaultProps = { as: 'tbody' }),
        (ue.propTypes = {})
      var pe = ue
      function be(e) {
        var t = e.active,
          a = e.children,
          n = e.className,
          c = e.collapsing,
          i = e.content,
          l = e.disabled,
          s = e.error,
          o = e.icon,
          d = e.negative,
          u = e.positive,
          p = e.selectable,
          m = e.singleLine,
          f = e.textAlign,
          O = e.verticalAlign,
          j = e.warning,
          v = e.width,
          h = J()(
            Object(_.a)(t, 'active'),
            Object(_.a)(c, 'collapsing'),
            Object(_.a)(l, 'disabled'),
            Object(_.a)(s, 'error'),
            Object(_.a)(d, 'negative'),
            Object(_.a)(u, 'positive'),
            Object(_.a)(p, 'selectable'),
            Object(_.a)(m, 'single line'),
            Object(_.a)(j, 'warning'),
            Object(_.d)(f),
            Object(_.f)(O),
            Object(_.g)(v, 'wide'),
            n
          ),
          N = Object(W.a)(be, e),
          g = Object(B.a)(be, e)
        return D.b.isNil(a)
          ? r.a.createElement(g, b()({}, N, { className: h }), U.a.create(o), i)
          : r.a.createElement(g, b()({}, N, { className: h }), a)
      }
      ;(be.handledProps = [
        'active',
        'as',
        'children',
        'className',
        'collapsing',
        'content',
        'disabled',
        'error',
        'icon',
        'negative',
        'positive',
        'selectable',
        'singleLine',
        'textAlign',
        'verticalAlign',
        'warning',
        'width',
      ]),
        (be.defaultProps = { as: 'td' }),
        (be.propTypes = {}),
        (be.create = Object(V.d)(be, function (e) {
          return { content: e }
        }))
      var me = be
      function fe(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = e.fullWidth,
          i = J()(Object(_.a)(c, 'full-width'), a),
          l = Object(W.a)(fe, e),
          s = Object(B.a)(fe, e)
        return r.a.createElement(
          s,
          b()({}, l, { className: i }),
          D.b.isNil(t) ? n : t
        )
      }
      ;(fe.handledProps = [
        'as',
        'children',
        'className',
        'content',
        'fullWidth',
      ]),
        (fe.defaultProps = { as: 'thead' }),
        (fe.propTypes = {})
      var Oe = fe
      function je(e) {
        var t = e.as,
          a = Object(W.a)(je, e)
        return r.a.createElement(Oe, b()({}, a, { as: t }))
      }
      ;(je.handledProps = ['as']),
        (je.propTypes = {}),
        (je.defaultProps = { as: 'tfoot' })
      var ve = je
      function he(e) {
        var t = e.as,
          a = e.className,
          n = e.sorted,
          c = J()(Object(_.e)(n, 'sorted'), a),
          i = Object(W.a)(he, e)
        return r.a.createElement(me, b()({}, i, { as: t, className: c }))
      }
      ;(he.handledProps = ['as', 'className', 'sorted']),
        (he.propTypes = {}),
        (he.defaultProps = { as: 'th' })
      var Ne = he
      function ge(e) {
        var t = e.active,
          a = e.cellAs,
          n = e.cells,
          c = e.children,
          i = e.className,
          l = e.disabled,
          s = e.error,
          o = e.negative,
          d = e.positive,
          u = e.textAlign,
          p = e.verticalAlign,
          m = e.warning,
          f = J()(
            Object(_.a)(t, 'active'),
            Object(_.a)(l, 'disabled'),
            Object(_.a)(s, 'error'),
            Object(_.a)(o, 'negative'),
            Object(_.a)(d, 'positive'),
            Object(_.a)(m, 'warning'),
            Object(_.d)(u),
            Object(_.f)(p),
            i
          ),
          O = Object(W.a)(ge, e),
          j = Object(B.a)(ge, e)
        return D.b.isNil(c)
          ? r.a.createElement(
              j,
              b()({}, O, { className: f }),
              z()(n, function (e) {
                return me.create(e, { defaultProps: { as: a } })
              })
            )
          : r.a.createElement(j, b()({}, O, { className: f }), c)
      }
      ;(ge.handledProps = [
        'active',
        'as',
        'cellAs',
        'cells',
        'children',
        'className',
        'disabled',
        'error',
        'negative',
        'positive',
        'textAlign',
        'verticalAlign',
        'warning',
      ]),
        (ge.defaultProps = { as: 'tr', cellAs: 'td' }),
        (ge.propTypes = {}),
        (ge.create = Object(V.d)(ge, function (e) {
          return { cells: e }
        }))
      var ye = ge
      function we(e) {
        var t = e.attached,
          a = e.basic,
          n = e.celled,
          c = e.children,
          i = e.className,
          l = e.collapsing,
          s = e.color,
          o = e.columns,
          d = e.compact,
          u = e.definition,
          p = e.fixed,
          m = e.footerRow,
          f = e.headerRow,
          O = e.headerRows,
          j = e.inverted,
          v = e.padded,
          h = e.renderBodyRow,
          N = e.selectable,
          g = e.singleLine,
          y = e.size,
          w = e.sortable,
          P = e.stackable,
          E = e.striped,
          x = e.structured,
          k = e.tableData,
          T = e.textAlign,
          A = e.unstackable,
          C = e.verticalAlign,
          I = J()(
            'ui',
            s,
            y,
            Object(_.a)(n, 'celled'),
            Object(_.a)(l, 'collapsing'),
            Object(_.a)(u, 'definition'),
            Object(_.a)(p, 'fixed'),
            Object(_.a)(j, 'inverted'),
            Object(_.a)(N, 'selectable'),
            Object(_.a)(g, 'single line'),
            Object(_.a)(w, 'sortable'),
            Object(_.a)(P, 'stackable'),
            Object(_.a)(E, 'striped'),
            Object(_.a)(x, 'structured'),
            Object(_.a)(A, 'unstackable'),
            Object(_.b)(t, 'attached'),
            Object(_.b)(a, 'basic'),
            Object(_.b)(d, 'compact'),
            Object(_.b)(v, 'padded'),
            Object(_.d)(T),
            Object(_.f)(C),
            Object(_.g)(o, 'column'),
            'table',
            i
          ),
          S = Object(W.a)(we, e),
          K = Object(B.a)(we, e)
        if (!D.b.isNil(c))
          return r.a.createElement(K, b()({}, S, { className: I }), c)
        var R = { defaultProps: { cellAs: 'th' } },
          G =
            (f || O) &&
            r.a.createElement(
              Oe,
              null,
              ye.create(f, R),
              z()(O, function (e) {
                return ye.create(e, R)
              })
            )
        return r.a.createElement(
          K,
          b()({}, S, { className: I }),
          G,
          r.a.createElement(
            pe,
            null,
            h &&
              z()(k, function (e, t) {
                return ye.create(h(e, t))
              })
          ),
          m && r.a.createElement(ve, null, ye.create(m))
        )
      }
      ;(we.handledProps = [
        'as',
        'attached',
        'basic',
        'celled',
        'children',
        'className',
        'collapsing',
        'color',
        'columns',
        'compact',
        'definition',
        'fixed',
        'footerRow',
        'headerRow',
        'headerRows',
        'inverted',
        'padded',
        'renderBodyRow',
        'selectable',
        'singleLine',
        'size',
        'sortable',
        'stackable',
        'striped',
        'structured',
        'tableData',
        'textAlign',
        'unstackable',
        'verticalAlign',
      ]),
        (we.defaultProps = { as: 'table' }),
        (we.propTypes = {}),
        (we.Body = pe),
        (we.Cell = me),
        (we.Footer = ve),
        (we.Header = Oe),
        (we.HeaderCell = Ne),
        (we.Row = ye)
      var Pe = we,
        Ee = r.a.createElement,
        xe = function (e) {
          var t = e.description,
            a = Object(ie.a)(e, ['description'])
          return Ee(
            'section',
            { className: 'jsx-4249965129 container' },
            Ee(oe.a, { as: 'h3' }, 'About this avocado'),
            Ee('p', { className: 'jsx-4249965129' }, t),
            Ee(de.a, null),
            Ee(
              Pe,
              { celled: !0 },
              Ee(
                Pe.Header,
                null,
                Ee(
                  Pe.Row,
                  null,
                  Ee(Pe.HeaderCell, { colSpan: '2' }, 'Attributes')
                )
              ),
              Ee(
                Pe.Body,
                null,
                Object.keys(a).map(function (e) {
                  return Ee(
                    Pe.Row,
                    { key: e },
                    Ee(Pe.Cell, { className: 'attr-name' }, e),
                    Ee(Pe.Cell, null, a[e])
                  )
                })
              )
            ),
            Ee(se.a, { id: '4249965129' }, [
              '.container.jsx-4249965129 .attr-name{text-transform:capitalize;}',
            ])
          )
        },
        ke = r.a.createElement,
        Te = function (e) {
          var t = e.product
          return ke(
            r.a.Fragment,
            null,
            ke(
              l.a.Group,
              { as: 'section' },
              ke(
                l.a,
                { style: { alignItems: 'center' } },
                ke(
                  l.a.Image,
                  { size: 'medium' },
                  ke('img', { src: t.image, alt: t.name })
                ),
                ke(
                  l.a.Content,
                  null,
                  ke(l.a.Header, { as: 'h1' }, t.name),
                  ke(
                    l.a.Description,
                    null,
                    ke('p', null, t.price),
                    ke(s.a, null, 'SKU: '.concat(t.sku))
                  ),
                  ke(l.a.Extra, null, ke(ce, { product: t }))
                )
              )
            ),
            ke(xe, t.attributes)
          )
        },
        Ae = r.a.createElement
      t.default = function () {
        var e = Object(c.useRouter)().query,
          t = Object(n.useState)(null),
          a = t[0],
          r = t[1]
        return (
          Object(n.useEffect)(
            function () {
              e.id &&
                window
                  .fetch('/api/avo/'.concat(e.id))
                  .then(function (e) {
                    return e.json()
                  })
                  .then(function (e) {
                    r(e)
                  })
            },
            [e.id]
          ),
          Ae(i.a, null, null == a ? null : Ae(Te, { product: a }))
        )
      }
    },
    o0o1: function (e, t, a) {
      e.exports = a('ls82')
    },
  },
  [['SqSx', 0, 2, 1, 3, 4]],
])
