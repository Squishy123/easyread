(window.webpackJsonp = window.webpackJsonp || []).push([
    [6],
    {
        158: function(e, t, a) {
            'use strict';
            a.r(t);
            var n = a(0),
                r = a.n(n),
                s = a(160),
                i = a(168),
                c = (a(169), a(166)),
                o = a(59),
                l = a(161),
                u = (a(211), a(38)),
                p = a.n(u),
                d = a(8),
                f = a.n(d),
                g = a(216),
                m = a.n(g),
                h = a(180),
                b = a(185),
                y = (function(e) {
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
                    f()(t, e);
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
                                    s = e.original.current.getBoundingClientRect();
                                t.push({
                                    str: a.text,
                                    el: r.a.createElement(h.a, {
                                        key: a.text + Math.random(),
                                        x: n[6] + s.x,
                                        y: n[7] + s.y - Math.abs(n[1] - n[7]),
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
                                                              Object(s.c)(
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
                                                              Object(s.c)(
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
                                                    s.a,
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
                    i.a,
                    null,
                    r.a.createElement(c.a, { title: 'Home' }),
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
                    r.a.createElement(y, { id: isNaN(a) ? null : a })
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
                s = a(1),
                i = a.n(s),
                c = a(37),
                o = a.n(c);
            a.d(t, 'a', function() {
                return o.a;
            }),
                a.d(t, 'c', function() {
                    return c.navigate;
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
                data: i.a.object,
                query: i.a.string.isRequired,
                render: i.a.func,
                children: i.a.func,
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
                s = a(1),
                i = a.n(s),
                c = a(60),
                o = a(3),
                l = function(e) {
                    var t = e.location,
                        a = o.default.getResourcesForPathnameSync(t.pathname);
                    return a
                        ? r.a.createElement(
                              c.a,
                              Object.assign(
                                  { location: t, pageResources: a },
                                  a.json
                              )
                          )
                        : null;
                };
            (l.propTypes = {
                location: i.a.shape({ pathname: i.a.string.isRequired })
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
                s = a.n(r),
                i = a(1),
                c = a.n(i),
                o = a(176),
                l = a.n(o);
            function u(e) {
                var t = e.description,
                    a = e.lang,
                    r = e.meta,
                    i = e.title,
                    c = n.data.site,
                    o = t || c.siteMetadata.description;
                return s.a.createElement(
                    l.a,
                    {
                        htmlAttributes: { lang: a },
                        title: i,
                        titleTemplate: '%s | ' + c.siteMetadata.title,
                        meta: [
                            { name: 'description', content: o },
                            { property: 'og:title', content: i },
                            { property: 'og:description', content: o },
                            { property: 'og:type', content: 'website' },
                            { name: 'twitter:card', content: 'summary' },
                            {
                                name: 'twitter:creator',
                                content: c.siteMetadata.author,
                            },
                            { name: 'twitter:title', content: i },
                            { name: 'twitter:description', content: o },
                        ].concat(r),
                    },
                    s.a.createElement('link', {
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
                    description: c.a.string,
                    lang: c.a.string,
                    meta: c.a.arrayOf(c.a.object),
                    title: c.a.string.isRequired,
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
                s = a.n(r),
                i = a(1),
                c = a.n(i),
                o = a(160),
                l = (a(172), a(38)),
                u = a.n(l),
                p = a(8),
                d = a.n(p),
                f = a(59),
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
                    d()(t, e);
                    var n = t.prototype;
                    return (
                        (n.toggleNav = function() {
                            this.setState({
                                isCollapse: !this.state.isCollapse,
                            });
                        }),
                        (n.render = function() {
                            return s.a.createElement(
                                s.a.Fragment,
                                null,
                                s.a.createElement(
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
                                    s.a.createElement(
                                        'span',
                                        { className: 'hamburger-box' },
                                        s.a.createElement('span', {
                                            className:
                                                'hamburger-inner ' +
                                                ('black' == this.props.bgColor
                                                    ? h.a.dark
                                                    : h.a.light),
                                        })
                                    )
                                ),
                                s.a.createElement(
                                    'div',
                                    {
                                        className:
                                            h.a.navContainer +
                                            ' ' +
                                            (this.state.isCollapse
                                                ? h.a.isActive
                                                : ''),
                                    },
                                    s.a.createElement(
                                        'div',
                                        { className: h.a.nav },
                                        s.a.createElement(
                                            'div',
                                            { className: h.a.profile },
                                            s.a.createElement('img', {
                                                src: a(165),
                                            }),
                                            s.a.createElement(
                                                'h1',
                                                null,
                                                'Easyread'
                                            ),
                                            s.a.createElement(
                                                'p',
                                                null,
                                                'Welcome back!'
                                            )
                                        ),
                                        s.a.createElement('hr', null),
                                        s.a.createElement(
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
                                                return s.a.createElement(
                                                    'li',
                                                    { key: e.url },
                                                    s.a.createElement(
                                                        o.a,
                                                        {
                                                            className: h.a.page,
                                                            activeClassName:
                                                                h.a.pageActive,
                                                            to: e.url,
                                                        },
                                                        s.a.createElement('i', {
                                                            className:
                                                                'fas fa-heart fa-2x',
                                                        }),
                                                        s.a.createElement(
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
                })(s.a.Component)),
                y = Object(f.b)(
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
                E = (a(175),
                function(e) {
                    var t = e.bgColor,
                        a = (e.changeBG, e.children);
                    return s.a.createElement(o.b, {
                        query: '2924840780',
                        render: function(e) {
                            return s.a.createElement(
                                s.a.Fragment,
                                null,
                                s.a.createElement(y, null),
                                s.a.createElement(
                                    'div',
                                    {
                                        className: 'main',
                                        style: { backgroundColor: t },
                                    },
                                    s.a.createElement('main', null, a),
                                    s.a.createElement('footer', null)
                                )
                            );
                        },
                        data: n,
                    });
                });
            E.propTypes = { children: c.a.node.isRequired };
            t.a = Object(f.b)(
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
            )(E);
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
                                    '/easyread/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png',
                                srcSet:
                                    '/easyread/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/easyread/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/easyread/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/easyread/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/easyread/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/easyread/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w',
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
                s = a(0),
                i = a.n(s),
                c = a(59),
                o = (function(e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        r()(t, e),
                        (t.prototype.render = function() {
                            return i.a.createElement(
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
                                i.a.createElement(
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
                })(i.a.Component);
            t.a = Object(c.b)(function(e) {
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
                s = a(15),
                i = a(212),
                c = a(84),
                o = a(19),
                l = a(178).f,
                u = a(179).f,
                p = a(28).f,
                d = a(214).trim,
                f = n.Number,
                g = f,
                m = f.prototype,
                h = 'Number' == s(a(88)(m)),
                b = 'trim' in String.prototype,
                y = function(e) {
                    var t = c(e, !1);
                    if ('string' == typeof t && t.length > 2) {
                        var a,
                            n,
                            r,
                            s = (t = b ? t.trim() : d(t, 3)).charCodeAt(0);
                        if (43 === s || 45 === s) {
                            if (88 === (a = t.charCodeAt(2)) || 120 === a)
                                return NaN;
                        } else if (48 === s) {
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
                                var i, o = t.slice(2), l = 0, u = o.length;
                                l < u;
                                l++
                            )
                                if ((i = o.charCodeAt(l)) < 48 || i > r)
                                    return NaN;
                            return parseInt(o, n);
                        }
                    }
                    return +t;
                };
            if (!f(' 0o1') || !f('0b1') || f('+0x1')) {
                f = function(e) {
                    var t = arguments.length < 1 ? 0 : e,
                        a = this;
                    return a instanceof f &&
                        (h
                            ? o(function() {
                                  m.valueOf.call(a);
                              })
                            : 'Number' != s(a))
                        ? i(new g(y(t)), a, f)
                        : y(t);
                };
                for (
                    var E,
                        v = a(18)
                            ? l(g)
                            : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'.split(
                                  ','
                              ),
                        N = 0;
                    v.length > N;
                    N++
                )
                    r(g, (E = v[N])) && !r(f, E) && p(f, E, u(g, E));
                (f.prototype = m), (m.constructor = f), a(16)(n, 'Number', f);
            }
        },
        212: function(e, t, a) {
            var n = a(11),
                r = a(213).set;
            e.exports = function(e, t, a) {
                var s,
                    i = t.constructor;
                return (
                    i !== a &&
                        'function' == typeof i &&
                        (s = i.prototype) !== a.prototype &&
                        n(s) &&
                        r &&
                        r(e, s),
                    e
                );
            };
        },
        213: function(e, t, a) {
            var n = a(11),
                r = a(7),
                s = function(e, t) {
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
                                      s(e, a),
                                      t ? (e.__proto__ = a) : n(e, a),
                                      e
                                  );
                              };
                          })({}, !1)
                        : void 0),
                check: s,
            };
        },
        214: function(e, t, a) {
            var n = a(13),
                r = a(22),
                s = a(19),
                i = a(215),
                c = '[' + i + ']',
                o = RegExp('^' + c + c + '*'),
                l = RegExp(c + c + '*$'),
                u = function(e, t, a) {
                    var r = {},
                        c = s(function() {
                            return !!i[e]() || '​' != '​'[e]();
                        }),
                        o = (r[e] = c ? t(p) : i[e]);
                    a && (r[a] = o), n(n.P + n.F * c, 'String', r);
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
//# sourceMappingURL=component---src-pages-gallery-js-7018fcd1bf3ad4cc7f28.js.map
