(window.webpackJsonp = window.webpackJsonp || []).push([
    [6],
    {
        158: function(e, t, a) {
            'use strict';
            a.r(t);
            var n = a(0),
                r = a.n(n),
                i = a(160),
                c = a(168),
                s = (a(169), a(166)),
                o = a(59),
                l = a(161),
                u = (a(211), a(38)),
                p = a.n(u),
                f = a(8),
                d = a.n(f),
                g = a(216),
                m = a.n(g),
                h = a(180),
                b = a(185),
                E = (function(e) {
                    function t(t) {
                        var a;
                        return (
                            ((a = e.call(this, t) || this).state = {
                                textBoxes: [],
                                captures: b.get('captures'),
                            }),
                            a.state.captures &&
                                a.state.captures.length &&
                                (a.state.captures = a.state.captures.reverse()),
                            (a.original = r.a.createRef()),
                            (a.imgLoad = a.imgLoad.bind(p()(a))),
                            a
                        );
                    }
                    d()(t, e);
                    var a = t.prototype;
                    return (
                        (a.imgLoad = function() {
                            var e = this;
                            this.setState({ textBoxes: [] });
                            var t = [];
                            this.state.captures[
                                this.props.id
                            ].recognitionResult.lines.forEach(function(a) {
                                var n = a.boundingBox,
                                    i = e.original.current.getBoundingClientRect();
                                t.push({
                                    str: a.text,
                                    el: r.a.createElement(h.a, {
                                        key: a.text + Math.random(),
                                        x: n[6] + i.x,
                                        y: n[7] + i.y - Math.abs(n[1] - n[7]),
                                        text: a.text,
                                        size: Math.abs(n[1] - n[7]),
                                    }),
                                });
                            }),
                                this.setState({ textBoxes: t });
                        }),
                        (a.render = function() {
                            var e = this;
                            return this.props.id
                                ? r.a.createElement(
                                      r.a.Fragment,
                                      null,
                                      this.state.textBoxes.map(function(e) {
                                          return e.el;
                                      }),
                                      r.a.createElement(
                                          'div',
                                          { className: m.a.single },
                                          r.a.createElement('img', {
                                              ref: this.original,
                                              src: this.state.captures[
                                                  this.props.id
                                              ].originalImage,
                                              onLoad: this.imgLoad,
                                          })
                                      ),
                                      r.a.createElement(
                                          'div',
                                          { className: m.a.controls },
                                          r.a.createElement(
                                              'div',
                                              null,
                                              r.a.createElement(
                                                  'button',
                                                  {
                                                      onClick: function() {
                                                          e.props.id > 0 &&
                                                              Object(i.c)(
                                                                  '/gallery/' +
                                                                      (Number(
                                                                          e
                                                                              .props
                                                                              .id
                                                                      ) -
                                                                          1)
                                                              );
                                                      },
                                                  },
                                                  r.a.createElement('i', {
                                                      className:
                                                          'fas fa-arrow-left',
                                                  })
                                              )
                                          ),
                                          r.a.createElement(
                                              'div',
                                              null,
                                              r.a.createElement(
                                                  'button',
                                                  {
                                                      onClick: function() {
                                                          e.props.id <
                                                              e.state.captures
                                                                  .length -
                                                                  1 &&
                                                              Object(i.c)(
                                                                  '/gallery/' +
                                                                      (Number(
                                                                          e
                                                                              .props
                                                                              .id
                                                                      ) +
                                                                          1)
                                                              );
                                                      },
                                                  },
                                                  r.a.createElement('i', {
                                                      className:
                                                          'fas fa-arrow-right',
                                                  })
                                              )
                                          )
                                      )
                                  )
                                : r.a.createElement(
                                      'div',
                                      { className: m.a.gallery },
                                      this.state.captures
                                          ? this.state.captures.map(function(
                                                e,
                                                t
                                            ) {
                                                return r.a.createElement(
                                                    i.a,
                                                    {
                                                        to: '/gallery/' + t,
                                                        key: 'capture-' + t,
                                                    },
                                                    r.a.createElement('img', {
                                                        src: e.renderImage,
                                                    })
                                                );
                                            })
                                          : r.a.createElement(
                                                'h3',
                                                null,
                                                'No Captures here...'
                                            )
                                  );
                        }),
                        t
                    );
                })(r.a.Component);
            t.default = Object(o.b)(
                function(e) {
                    return { bgColor: e.bgColor };
                },
                function(e) {
                    return {
                        changeBG: function(t) {
                            return e(Object(l.a)(t));
                        },
                    };
                }
            )(function(e) {
                e.changeBG('white');
                var t = e.location.pathname,
                    a = t.substring(t.lastIndexOf('/') + 1);
                return r.a.createElement(
                    c.a,
                    null,
                    r.a.createElement(s.a, { title: 'Home' }),
                    r.a.createElement(
                        'h1',
                        {
                            style: {
                                textAlign: 'center',
                                margin: '50px 10px 25px',
                            },
                        },
                        'Captures'
                    ),
                    r.a.createElement(E, { id: isNaN(a) ? null : a })
                );
            });
        },
        160: function(e, t, a) {
            'use strict';
            a.d(t, 'b', function() {
                return u;
            });
            var n = a(0),
                r = a.n(n),
                i = a(1),
                c = a.n(i),
                s = a(37),
                o = a.n(s);
            a.d(t, 'a', function() {
                return o.a;
            }),
                a.d(t, 'c', function() {
                    return s.navigate;
                });
            a(162);
            var l = r.a.createContext({}),
                u = function(e) {
                    return r.a.createElement(l.Consumer, null, function(t) {
                        return e.data || (t[e.query] && t[e.query].data)
                            ? (e.render || e.children)(
                                  e.data ? e.data.data : t[e.query].data
                              )
                            : r.a.createElement(
                                  'div',
                                  null,
                                  'Loading (StaticQuery)'
                              );
                    });
                };
            u.propTypes = {
                data: c.a.object,
                query: c.a.string.isRequired,
                render: c.a.func,
                children: c.a.func,
            };
        },
        161: function(e, t, a) {
            'use strict';
            a.d(t, 'a', function() {
                return r;
            });
            var n = a(21);
            function r(e) {
                return { type: n.a, bgColor: e };
            }
        },
        162: function(e, t, a) {
            var n;
            e.exports = ((n = a(164)) && n.default) || n;
        },
        163: function(e) {
            e.exports = {
                data: { site: { siteMetadata: { title: 'EasyRead' } } },
            };
        },
        164: function(e, t, a) {
            'use strict';
            a.r(t);
            a(27);
            var n = a(0),
                r = a.n(n),
                i = a(1),
                c = a.n(i),
                s = a(60),
                o = a(3),
                l = function(e) {
                    var t = e.location,
                        a = o.default.getResourcesForPathnameSync(t.pathname);
                    return a
                        ? r.a.createElement(
                              s.a,
                              Object.assign(
                                  { location: t, pageResources: a },
                                  a.json
                              )
                          )
                        : null;
                };
            (l.propTypes = {
                location: c.a.shape({ pathname: c.a.string.isRequired })
                    .isRequired,
            }),
                (t.default = l);
        },
        165: function(e, t, a) {
            e.exports =
                a.p +
                'static/reading-profile-667bb35fe9e05f79fe62d06332339c07.png';
        },
        166: function(e, t, a) {
            'use strict';
            var n = a(167),
                r = a(0),
                i = a.n(r),
                c = a(1),
                s = a.n(c),
                o = a(176),
                l = a.n(o);
            function u(e) {
                var t = e.description,
                    a = e.lang,
                    r = e.meta,
                    c = e.title,
                    s = n.data.site,
                    o = t || s.siteMetadata.description;
                return i.a.createElement(
                    l.a,
                    {
                        htmlAttributes: { lang: a },
                        title: c,
                        titleTemplate: '%s | ' + s.siteMetadata.title,
                        meta: [
                            { name: 'description', content: o },
                            { property: 'og:title', content: c },
                            { property: 'og:description', content: o },
                            { property: 'og:type', content: 'website' },
                            { name: 'twitter:card', content: 'summary' },
                            {
                                name: 'twitter:creator',
                                content: s.siteMetadata.author,
                            },
                            { name: 'twitter:title', content: c },
                            { name: 'twitter:description', content: o },
                        ].concat(r),
                    },
                    i.a.createElement('link', {
                        rel: 'stylesheet',
                        href:
                            'https://use.fontawesome.com/releases/v5.8.2/css/all.css',
                        integrity:
                            'sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay',
                        crossorigin: 'anonymous',
                    })
                );
            }
            (u.defaultProps = { lang: 'en', meta: [], description: '' }),
                (u.propTypes = {
                    description: s.a.string,
                    lang: s.a.string,
                    meta: s.a.arrayOf(s.a.object),
                    title: s.a.string.isRequired,
                }),
                (t.a = u);
        },
        167: function(e) {
            e.exports = {
                data: {
                    site: {
                        siteMetadata: {
                            title: 'EasyRead',
                            description: 'Make reading easier',
                            author: '@squishy123',
                        },
                    },
                },
            };
        },
        168: function(e, t, a) {
            'use strict';
            var n = a(163),
                r = a(0),
                i = a.n(r),
                c = a(1),
                s = a.n(c),
                o = a(160),
                l = (a(172), a(38)),
                u = a.n(l),
                p = a(8),
                f = a.n(p),
                d = a(59),
                g = a(161),
                m = a(173),
                h = a.n(m),
                b = (a(174),
                (function(e) {
                    function t(t) {
                        var a;
                        return (
                            ((a = e.call(this, t) || this).state = {
                                isCollapse: !1,
                            }),
                            (a.toggleNav = a.toggleNav.bind(u()(a))),
                            a
                        );
                    }
                    f()(t, e);
                    var n = t.prototype;
                    return (
                        (n.toggleNav = function() {
                            this.setState({
                                isCollapse: !this.state.isCollapse,
                            });
                        }),
                        (n.render = function() {
                            return i.a.createElement(
                                i.a.Fragment,
                                null,
                                i.a.createElement(
                                    'div',
                                    {
                                        className:
                                            h.a.menuToggle +
                                            ' hamburger hamburger--spin ' +
                                            (this.state.isCollapse
                                                ? 'is-active'
                                                : ''),
                                        onClick: this.toggleNav,
                                        type: 'button',
                                    },
                                    i.a.createElement(
                                        'span',
                                        { className: 'hamburger-box' },
                                        i.a.createElement('span', {
                                            className:
                                                'hamburger-inner ' +
                                                ('black' == this.props.bgColor
                                                    ? h.a.dark
                                                    : h.a.light),
                                        })
                                    )
                                ),
                                i.a.createElement(
                                    'div',
                                    {
                                        className:
                                            h.a.navContainer +
                                            ' ' +
                                            (this.state.isCollapse
                                                ? h.a.isActive
                                                : ''),
                                    },
                                    i.a.createElement(
                                        'div',
                                        { className: h.a.nav },
                                        i.a.createElement(
                                            'div',
                                            { className: h.a.profile },
                                            i.a.createElement('img', {
                                                src: a(165),
                                            }),
                                            i.a.createElement(
                                                'h1',
                                                null,
                                                'Easyread'
                                            ),
                                            i.a.createElement(
                                                'p',
                                                null,
                                                'Welcome back!'
                                            )
                                        ),
                                        i.a.createElement('hr', null),
                                        i.a.createElement(
                                            'ul',
                                            { className: h.a.pages },
                                            [
                                                {
                                                    name: 'Clipboard',
                                                    url: '/clipboard',
                                                },
                                                {
                                                    name: 'Gallery',
                                                    url: '/gallery',
                                                },
                                                {
                                                    name: 'Settings',
                                                    url: '/settings',
                                                },
                                                {
                                                    name: 'Progress Tracker',
                                                    url: '/tracker',
                                                },
                                            ].map(function(e) {
                                                return i.a.createElement(
                                                    'li',
                                                    { key: e.url },
                                                    i.a.createElement(
                                                        o.a,
                                                        {
                                                            className: h.a.page,
                                                            activeClassName:
                                                                h.a.pageActive,
                                                            to: e.url,
                                                        },
                                                        i.a.createElement('i', {
                                                            className:
                                                                'fas fa-heart fa-2x',
                                                        }),
                                                        i.a.createElement(
                                                            'p',
                                                            null,
                                                            e.name
                                                        )
                                                    )
                                                );
                                            })
                                        )
                                    )
                                )
                            );
                        }),
                        t
                    );
                })(i.a.Component)),
                E = Object(d.b)(
                    function(e) {
                        return { bgColor: e.bgColor };
                    },
                    function(e) {
                        return {
                            changeBG: function(t) {
                                return e(Object(g.a)(t));
                            },
                        };
                    }
                )(b),
                v = (a(175),
                function(e) {
                    var t = e.bgColor,
                        a = (e.changeBG, e.children);
                    return i.a.createElement(o.b, {
                        query: '2924840780',
                        render: function(e) {
                            return i.a.createElement(
                                i.a.Fragment,
                                null,
                                i.a.createElement(E, null),
                                i.a.createElement(
                                    'div',
                                    {
                                        className: 'main',
                                        style: { backgroundColor: t },
                                    },
                                    i.a.createElement('main', null, a),
                                    i.a.createElement('footer', null)
                                )
                            );
                        },
                        data: n,
                    });
                });
            v.propTypes = { children: s.a.node.isRequired };
            t.a = Object(d.b)(
                function(e) {
                    return { bgColor: e.bgColor };
                },
                function(e) {
                    return {
                        changeBG: function(t) {
                            return e(Object(g.a)(t));
                        },
                    };
                }
            )(v);
        },
        169: function(e, t, a) {
            'use strict';
            a(170), a(0), a(160), a(171);
        },
        170: function(e) {
            e.exports = {
                data: {
                    placeholderImage: {
                        childImageSharp: {
                            fluid: {
                                base64:
                                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==',
                                aspectRatio: 1,
                                src:
                                    '/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png',
                                srcSet:
                                    '/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w',
                                sizes: '(max-width: 300px) 100vw, 300px',
                            },
                        },
                    },
                },
            };
        },
        180: function(e, t, a) {
            'use strict';
            var n = a(8),
                r = a.n(n),
                i = a(0),
                c = a.n(i),
                s = a(59),
                o = (function(e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        r()(t, e),
                        (t.prototype.render = function() {
                            return c.a.createElement(
                                'div',
                                {
                                    style: {
                                        backgroundColor: this.props
                                            .readerBgColor,
                                        zIndex: '1000',
                                        position: 'fixed',
                                        top: this.props.y,
                                        left: this.props.x,
                                    },
                                },
                                c.a.createElement(
                                    'h1',
                                    {
                                        style: {
                                            margin: 0,
                                            fontSize: this.props.size,
                                            color: this.props.readerColor,
                                            fontFamily: this.props.readerFont,
                                        },
                                    },
                                    this.props.text
                                )
                            );
                        }),
                        t
                    );
                })(c.a.Component);
            t.a = Object(s.b)(function(e) {
                return {
                    readerBgColor: e.readerBgColor,
                    readerColor: e.readerColor,
                    readerFont: e.readerFont,
                };
            }, null)(o);
        },
        211: function(e, t, a) {
            'use strict';
            var n = a(6),
                r = a(29),
                i = a(15),
                c = a(212),
                s = a(84),
                o = a(19),
                l = a(178).f,
                u = a(179).f,
                p = a(28).f,
                f = a(214).trim,
                d = n.Number,
                g = d,
                m = d.prototype,
                h = 'Number' == i(a(88)(m)),
                b = 'trim' in String.prototype,
                E = function(e) {
                    var t = s(e, !1);
                    if ('string' == typeof t && t.length > 2) {
                        var a,
                            n,
                            r,
                            i = (t = b ? t.trim() : f(t, 3)).charCodeAt(0);
                        if (43 === i || 45 === i) {
                            if (88 === (a = t.charCodeAt(2)) || 120 === a)
                                return NaN;
                        } else if (48 === i) {
                            switch (t.charCodeAt(1)) {
                                case 66:
                                case 98:
                                    (n = 2), (r = 49);
                                    break;
                                case 79:
                                case 111:
                                    (n = 8), (r = 55);
                                    break;
                                default:
                                    return +t;
                            }
                            for (
                                var c, o = t.slice(2), l = 0, u = o.length;
                                l < u;
                                l++
                            )
                                if ((c = o.charCodeAt(l)) < 48 || c > r)
                                    return NaN;
                            return parseInt(o, n);
                        }
                    }
                    return +t;
                };
            if (!d(' 0o1') || !d('0b1') || d('+0x1')) {
                d = function(e) {
                    var t = arguments.length < 1 ? 0 : e,
                        a = this;
                    return a instanceof d &&
                        (h
                            ? o(function() {
                                  m.valueOf.call(a);
                              })
                            : 'Number' != i(a))
                        ? c(new g(E(t)), a, d)
                        : E(t);
                };
                for (
                    var v,
                        y = a(18)
                            ? l(g)
                            : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'.split(
                                  ','
                              ),
                        N = 0;
                    y.length > N;
                    N++
                )
                    r(g, (v = y[N])) && !r(d, v) && p(d, v, u(g, v));
                (d.prototype = m), (m.constructor = d), a(16)(n, 'Number', d);
            }
        },
        212: function(e, t, a) {
            var n = a(11),
                r = a(213).set;
            e.exports = function(e, t, a) {
                var i,
                    c = t.constructor;
                return (
                    c !== a &&
                        'function' == typeof c &&
                        (i = c.prototype) !== a.prototype &&
                        n(i) &&
                        r &&
                        r(e, i),
                    e
                );
            };
        },
        213: function(e, t, a) {
            var n = a(11),
                r = a(7),
                i = function(e, t) {
                    if ((r(e), !n(t) && null !== t))
                        throw TypeError(t + ": can't set as prototype!");
                };
            e.exports = {
                set:
                    Object.setPrototypeOf ||
                    ('__proto__' in {}
                        ? (function(e, t, n) {
                              try {
                                  (n = a(20)(
                                      Function.call,
                                      a(179).f(Object.prototype, '__proto__')
                                          .set,
                                      2
                                  ))(e, []),
                                      (t = !(e instanceof Array));
                              } catch (r) {
                                  t = !0;
                              }
                              return function(e, a) {
                                  return (
                                      i(e, a),
                                      t ? (e.__proto__ = a) : n(e, a),
                                      e
                                  );
                              };
                          })({}, !1)
                        : void 0),
                check: i,
            };
        },
        214: function(e, t, a) {
            var n = a(13),
                r = a(22),
                i = a(19),
                c = a(215),
                s = '[' + c + ']',
                o = RegExp('^' + s + s + '*'),
                l = RegExp(s + s + '*$'),
                u = function(e, t, a) {
                    var r = {},
                        s = i(function() {
                            return !!c[e]() || '​' != '​'[e]();
                        }),
                        o = (r[e] = s ? t(p) : c[e]);
                    a && (r[a] = o), n(n.P + n.F * s, 'String', r);
                },
                p = (u.trim = function(e, t) {
                    return (
                        (e = String(r(e))),
                        1 & t && (e = e.replace(o, '')),
                        2 & t && (e = e.replace(l, '')),
                        e
                    );
                });
            e.exports = u;
        },
        215: function(e, t) {
            e.exports = '\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff';
        },
    },
]);
//# sourceMappingURL=component---src-pages-gallery-js-3814fc8615f1505c188d.js.map
