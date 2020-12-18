;(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    '/EDR': function (e, t, a) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return a('23aj')
        },
      ])
    },
    '23aj': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, '__N_SSP', function () {
          return U
        })
      var n = a('q1tI'),
        r = a.n(n),
        c = a('pdCo'),
        i = a('Qq8P'),
        s = a('pVnL'),
        l = a.n(s),
        o = a('lwsE'),
        d = a.n(o),
        u = a('W8MJ'),
        p = a.n(u),
        m = a('a1gu'),
        b = a.n(m),
        h = a('Nsbk'),
        N = a.n(h),
        f = a('PJYZ'),
        j = a.n(f),
        O = a('7W2i'),
        k = a.n(O),
        g = a('lSNA'),
        v = a.n(g),
        E = a('TSYQ'),
        y = a.n(E),
        x = (a('17x9'), a('ZeOK')),
        w = a('ICNK'),
        P = a('Y53p'),
        C = a('H+2d'),
        A = a('5XkN'),
        T = (a('Wt1U'), a('MZgk'))
      function _(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = e.textAlign,
          i = y()(Object(x.d)(c), 'description', a),
          s = Object(w.a)(_, e),
          o = Object(P.a)(_, e)
        return r.a.createElement(
          o,
          l()({}, s, { className: i }),
          C.b.isNil(t) ? n : t
        )
      }
      ;(_.handledProps = [
        'as',
        'children',
        'className',
        'content',
        'textAlign',
      ]),
        (_.propTypes = {})
      var G = _
      function K(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = e.textAlign,
          i = y()(Object(x.d)(c), 'header', a),
          s = Object(w.a)(K, e),
          o = Object(P.a)(K, e)
        return r.a.createElement(
          o,
          l()({}, s, { className: i }),
          C.b.isNil(t) ? n : t
        )
      }
      ;(K.handledProps = [
        'as',
        'children',
        'className',
        'content',
        'textAlign',
      ]),
        (K.propTypes = {})
      var R = K
      function J(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = e.textAlign,
          i = y()(Object(x.d)(c), 'meta', a),
          s = Object(w.a)(J, e),
          o = Object(P.a)(J, e)
        return r.a.createElement(
          o,
          l()({}, s, { className: i }),
          C.b.isNil(t) ? n : t
        )
      }
      ;(J.handledProps = [
        'as',
        'children',
        'className',
        'content',
        'textAlign',
      ]),
        (J.propTypes = {})
      var M = J
      function S(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          c = e.description,
          i = e.extra,
          s = e.header,
          o = e.meta,
          d = e.textAlign,
          u = y()(Object(x.a)(i, 'extra'), Object(x.d)(d), 'content', a),
          p = Object(w.a)(S, e),
          m = Object(P.a)(S, e)
        return C.b.isNil(t)
          ? C.b.isNil(n)
            ? r.a.createElement(
                m,
                l()({}, p, { className: u }),
                Object(T.c)(
                  R,
                  function (e) {
                    return { content: e }
                  },
                  s,
                  { autoGenerateKey: !1 }
                ),
                Object(T.c)(
                  M,
                  function (e) {
                    return { content: e }
                  },
                  o,
                  { autoGenerateKey: !1 }
                ),
                Object(T.c)(
                  G,
                  function (e) {
                    return { content: e }
                  },
                  c,
                  { autoGenerateKey: !1 }
                )
              )
            : r.a.createElement(m, l()({}, p, { className: u }), n)
          : r.a.createElement(m, l()({}, p, { className: u }), t)
      }
      ;(S.handledProps = [
        'as',
        'children',
        'className',
        'content',
        'description',
        'extra',
        'header',
        'meta',
        'textAlign',
      ]),
        (S.propTypes = {})
      var W = S,
        Y = a('3WF5'),
        q = a.n(Y)
      function D(e) {
        var t = e.centered,
          a = e.children,
          n = e.className,
          c = e.content,
          i = e.doubling,
          s = e.items,
          o = e.itemsPerRow,
          d = e.stackable,
          u = e.textAlign,
          p = y()(
            'ui',
            Object(x.a)(t, 'centered'),
            Object(x.a)(i, 'doubling'),
            Object(x.a)(d, 'stackable'),
            Object(x.d)(u),
            Object(x.g)(o),
            'cards',
            n
          ),
          m = Object(w.a)(D, e),
          b = Object(P.a)(D, e)
        if (!C.b.isNil(a))
          return r.a.createElement(b, l()({}, m, { className: p }), a)
        if (!C.b.isNil(c))
          return r.a.createElement(b, l()({}, m, { className: p }), c)
        var h = q()(s, function (e) {
          var t = e.key || [e.header, e.description].join('-')
          return r.a.createElement(X, l()({ key: t }, e))
        })
        return r.a.createElement(b, l()({}, m, { className: p }), h)
      }
      ;(D.handledProps = [
        'as',
        'centered',
        'children',
        'className',
        'content',
        'doubling',
        'items',
        'itemsPerRow',
        'stackable',
        'textAlign',
      ]),
        (D.propTypes = {})
      var H = D,
        X = (function (e) {
          function t() {
            var e, a
            d()(this, t)
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++)
              r[c] = arguments[c]
            return (
              (a = b()(this, (e = N()(t)).call.apply(e, [this].concat(r)))),
              v()(j()(a), 'handleClick', function (e) {
                var t = a.props.onClick
                t && t(e, a.props)
              }),
              a
            )
          }
          return (
            k()(t, e),
            p()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    a = e.centered,
                    n = e.children,
                    c = e.className,
                    i = e.color,
                    s = e.content,
                    o = e.description,
                    d = e.extra,
                    u = e.fluid,
                    p = e.header,
                    m = e.href,
                    b = e.image,
                    h = e.link,
                    N = e.meta,
                    f = e.onClick,
                    j = e.raised,
                    O = y()(
                      'ui',
                      i,
                      Object(x.a)(a, 'centered'),
                      Object(x.a)(u, 'fluid'),
                      Object(x.a)(h, 'link'),
                      Object(x.a)(j, 'raised'),
                      'card',
                      c
                    ),
                    k = Object(w.a)(t, this.props),
                    g = Object(P.a)(t, this.props, function () {
                      if (f) return 'a'
                    })
                  return C.b.isNil(n)
                    ? C.b.isNil(s)
                      ? r.a.createElement(
                          g,
                          l()({}, k, {
                            className: O,
                            href: m,
                            onClick: this.handleClick,
                          }),
                          A.a.create(b, {
                            autoGenerateKey: !1,
                            defaultProps: { ui: !1, wrapped: !0 },
                          }),
                          (o || p || N) &&
                            r.a.createElement(W, {
                              description: o,
                              header: p,
                              meta: N,
                            }),
                          d && r.a.createElement(W, { extra: !0 }, d)
                        )
                      : r.a.createElement(
                          g,
                          l()({}, k, {
                            className: O,
                            href: m,
                            onClick: this.handleClick,
                          }),
                          s
                        )
                    : r.a.createElement(
                        g,
                        l()({}, k, {
                          className: O,
                          href: m,
                          onClick: this.handleClick,
                        }),
                        n
                      )
                },
              },
            ]),
            t
          )
        })(n.Component)
      v()(X, 'Content', W),
        v()(X, 'Description', G),
        v()(X, 'Group', H),
        v()(X, 'Header', R),
        v()(X, 'Meta', M),
        v()(X, 'handledProps', [
          'as',
          'centered',
          'children',
          'className',
          'color',
          'content',
          'description',
          'extra',
          'fluid',
          'header',
          'href',
          'image',
          'link',
          'meta',
          'onClick',
          'raised',
        ]),
        (X.propTypes = {})
      var Z = a('YFqc'),
        F = a.n(Z),
        I = r.a.createElement,
        L = function (e) {
          var t = e.products
          return I(
            X.Group,
            { itemsPerRow: 2, stackable: !0 },
            (function (e) {
              return e.map(function (e) {
                var t = e.name,
                  a = e.id,
                  n = e.price,
                  r = e.image
                return I(
                  F.a,
                  {
                    key: a,
                    href: '/product/[id]',
                    as: '/product/'.concat(a),
                    passHref: !0,
                  },
                  I(X, {
                    as: 'a',
                    header: t,
                    image: r,
                    meta: I(X.Meta, { style: { color: 'dimgray' } }, n),
                  })
                )
              })
            })(t)
          )
        },
        Q = r.a.createElement,
        U = !0
      t.default = function (e) {
        var t = e.productList
        return Q(c.a, null, Q(i.a, null), Q(L, { products: t }))
      }
    },
  },
  [['/EDR', 0, 2, 1, 3, 4, 5]],
])
