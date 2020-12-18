;(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    '/0+H': function (e, t, n) {
      'use strict'
      ;(t.__esModule = !0),
        (t.isInAmpMode = u),
        (t.useAmp = function () {
          return u(a.default.useContext(o.AmpStateContext))
        })
      var r,
        a = (r = n('q1tI')) && r.__esModule ? r : { default: r },
        o = n('lwAK')
      function u() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          a = void 0 !== r && r,
          o = e.hasQuery
        return n || (a && void 0 !== o && o)
      }
    },
    '/a9y': function (e, t, n) {
      'use strict'
      var r = n('/GRZ'),
        a = n('i2R6'),
        o = n('48fX'),
        u = n('tCBg'),
        i = n('T0f4')
      function l(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' === typeof Proxy) return !0
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = i(e)
          if (t) {
            var a = i(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return u(this, n)
        }
      }
      var c = n('AroE')
      ;(t.__esModule = !0), (t.default = void 0)
      var d = c(n('q1tI')),
        f = c(n('8Kt/')),
        s = {
          400: 'Bad Request',
          404: 'This page could not be found',
          405: 'Method Not Allowed',
          500: 'Internal Server Error',
        }
      function p(e) {
        var t = e.res,
          n = e.err
        return {
          statusCode: t && t.statusCode ? t.statusCode : n ? n.statusCode : 404,
        }
      }
      var h = (function (e) {
        o(n, e)
        var t = l(n)
        function n() {
          return r(this, n), t.apply(this, arguments)
        }
        return (
          a(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props.statusCode,
                  t =
                    this.props.title ||
                    s[e] ||
                    'An unexpected error has occurred'
                return d.default.createElement(
                  'div',
                  { style: v.error },
                  d.default.createElement(
                    f.default,
                    null,
                    d.default.createElement('title', null, e, ': ', t)
                  ),
                  d.default.createElement(
                    'div',
                    null,
                    d.default.createElement('style', {
                      dangerouslySetInnerHTML: { __html: 'body { margin: 0 }' },
                    }),
                    e
                      ? d.default.createElement('h1', { style: v.h1 }, e)
                      : null,
                    d.default.createElement(
                      'div',
                      { style: v.desc },
                      d.default.createElement('h2', { style: v.h2 }, t, '.')
                    )
                  )
                )
              },
            },
          ]),
          n
        )
      })(d.default.Component)
      ;(t.default = h),
        (h.displayName = 'ErrorPage'),
        (h.getInitialProps = p),
        (h.origGetInitialProps = p)
      var v = {
        error: {
          color: '#000',
          background: '#fff',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
          height: '100vh',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
        desc: {
          display: 'inline-block',
          textAlign: 'left',
          lineHeight: '49px',
          height: '49px',
          verticalAlign: 'middle',
        },
        h1: {
          display: 'inline-block',
          borderRight: '1px solid rgba(0, 0, 0,.3)',
          margin: 0,
          marginRight: '20px',
          padding: '10px 23px 10px 0',
          fontSize: '24px',
          fontWeight: 500,
          verticalAlign: 'top',
        },
        h2: {
          fontSize: '14px',
          fontWeight: 'normal',
          lineHeight: 'inherit',
          margin: 0,
          padding: 0,
        },
      }
    },
    '04ac': function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_error',
        function () {
          return n('/a9y')
        },
      ])
    },
    '5fIB': function (e, t, n) {
      var r = n('7eYB')
      e.exports = function (e) {
        if (Array.isArray(e)) return r(e)
      }
    },
    '8Kt/': function (e, t, n) {
      'use strict'
      ;(t.__esModule = !0), (t.defaultHead = c), (t.default = void 0)
      var r = l(n('q1tI')),
        a = l(n('Xuae')),
        o = n('lwAK'),
        u = n('FYa8'),
        i = n('/0+H')
      function l(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function c() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [r.default.createElement('meta', { charSet: 'utf-8' })]
        return (
          e ||
            t.push(
              r.default.createElement('meta', {
                name: 'viewport',
                content: 'width=device-width',
              })
            ),
          t
        )
      }
      function d(e, t) {
        return 'string' === typeof t || 'number' === typeof t
          ? e
          : t.type === r.default.Fragment
          ? e.concat(
              r.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return 'string' === typeof t || 'number' === typeof t
                  ? e
                  : e.concat(t)
              },
              [])
            )
          : e.concat(t)
      }
      var f = ['name', 'httpEquiv', 'charSet', 'itemProp']
      function s(e, t) {
        return e
          .reduce(function (e, t) {
            var n = r.default.Children.toArray(t.props.children)
            return e.concat(n)
          }, [])
          .reduce(d, [])
          .reverse()
          .concat(c(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {}
              return function (a) {
                var o = !0
                if (
                  a.key &&
                  'number' !== typeof a.key &&
                  a.key.indexOf('$') > 0
                ) {
                  var u = a.key.slice(a.key.indexOf('$') + 1)
                  e.has(u) ? (o = !1) : e.add(u)
                }
                switch (a.type) {
                  case 'title':
                  case 'base':
                    t.has(a.type) ? (o = !1) : t.add(a.type)
                    break
                  case 'meta':
                    for (var i = 0, l = f.length; i < l; i++) {
                      var c = f[i]
                      if (a.props.hasOwnProperty(c))
                        if ('charSet' === c) n.has(c) ? (o = !1) : n.add(c)
                        else {
                          var d = a.props[c],
                            s = r[c] || new Set()
                          s.has(d) ? (o = !1) : (s.add(d), (r[c] = s))
                        }
                    }
                }
                return o
              }
            })()
          )
          .reverse()
          .map(function (e, t) {
            var n = e.key || t
            return r.default.cloneElement(e, { key: n })
          })
      }
      var p = (0, a.default)()
      function h(e) {
        var t = e.children
        return r.default.createElement(
          o.AmpStateContext.Consumer,
          null,
          function (e) {
            return r.default.createElement(
              u.HeadManagerContext.Consumer,
              null,
              function (n) {
                return r.default.createElement(
                  p,
                  {
                    reduceComponentsToState: s,
                    handleStateChange: n,
                    inAmpMode: (0, i.isInAmpMode)(e),
                  },
                  t
                )
              }
            )
          }
        )
      }
      h.rewind = p.rewind
      var v = h
      t.default = v
    },
    FYa8: function (e, t, n) {
      'use strict'
      var r
      ;(t.__esModule = !0), (t.HeadManagerContext = void 0)
      var a = ((r = n('q1tI')) && r.__esModule
        ? r
        : { default: r }
      ).default.createContext(null)
      t.HeadManagerContext = a
    },
    Xuae: function (e, t, n) {
      'use strict'
      var r = n('/GRZ'),
        a = n('qXWd'),
        o = n('i2R6'),
        u = n('48fX'),
        i = n('tCBg'),
        l = n('T0f4'),
        c = n('mPvQ')
      function d(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' === typeof Proxy) return !0
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = l(e)
          if (t) {
            var a = l(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return i(this, n)
        }
      }
      ;(t.__esModule = !0), (t.default = void 0)
      var f = n('q1tI'),
        s = !1
      t.default = function () {
        var e,
          t = new Set()
        function n(n) {
          ;(e = n.props.reduceComponentsToState(c(t), n.props)),
            n.props.handleStateChange && n.props.handleStateChange(e)
        }
        return (function (i) {
          u(c, i)
          var l = d(c)
          function c(e) {
            var o
            return (
              r(this, c), (o = l.call(this, e)), s && (t.add(a(o)), n(a(o))), o
            )
          }
          return (
            o(c, null, [
              {
                key: 'rewind',
                value: function () {
                  var n = e
                  return (e = void 0), t.clear(), n
                },
              },
            ]),
            o(c, [
              {
                key: 'componentDidMount',
                value: function () {
                  t.add(this), n(this)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  n(this)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  t.delete(this), n(this)
                },
              },
              {
                key: 'render',
                value: function () {
                  return null
                },
              },
            ]),
            c
          )
        })(f.Component)
      }
    },
    kG2m: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      }
    },
    lwAK: function (e, t, n) {
      'use strict'
      var r
      ;(t.__esModule = !0), (t.AmpStateContext = void 0)
      var a = ((r = n('q1tI')) && r.__esModule
        ? r
        : { default: r }
      ).default.createContext({})
      t.AmpStateContext = a
    },
    mPvQ: function (e, t, n) {
      var r = n('5fIB'),
        a = n('rlHP'),
        o = n('KckH'),
        u = n('kG2m')
      e.exports = function (e) {
        return r(e) || a(e) || o(e) || u()
      }
    },
    rlHP: function (e, t) {
      e.exports = function (e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e)
      }
    },
  },
  [['04ac', 0, 2, 1]],
])
