(window.webpackJsonp = window.webpackJsonp || []).push([
    [4],
    {
        158: function(e, t, a) {
            'use strict';
            a.r(t);
            var n = a(0),
                r = a.n(n),
                c = (a(159), a(167)),
                s = (a(168), a(165)),
                i = a(182),
                o = a.n(i),
                l = (a(185), a(186)),
                u = a.n(l),
                m = a(37),
                p = a.n(m),
                f = a(8),
                d = a.n(f),
                g = a(187),
                h = a.n(g),
                b = a(58),
                v = a(160),
                C = (function(e) {
                    function t(t) {
                        var a;
                        return (
                            ((a = e.call(this, t) || this).state = {
                                stream: '',
                                facingMode: 'user',
                                capture: null,
                                captureURL: '',
                            }),
                            (a.player = r.a.createRef()),
                            (a.canvas = r.a.createRef()),
                            (a.getCamera = a.getCamera.bind(p()(a))),
                            (a.reverseCamera = a.reverseCamera.bind(p()(a))),
                            (a.captureCamera = a.captureCamera.bind(p()(a))),
                            (a.offCamera = a.offCamera.bind(p()(a))),
                            a
                        );
                    }
                    d()(t, e);
                    var a = t.prototype;
                    return (
                        (a.componentWillUnmount = function() {
                            this.offCamera();
                        }),
                        (a.getCamera = (function() {
                            var e = u()(
                                o.a.mark(function e() {
                                    var t;
                                    return o.a.wrap(
                                        function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (e.prev = 0),
                                                            (e.next = 3),
                                                            navigator.mediaDevices.getUserMedia(
                                                                {
                                                                    audio: !1,
                                                                    video: {
                                                                        facingMode: this
                                                                            .state
                                                                            .facingMode,
                                                                    },
                                                                }
                                                            )
                                                        );
                                                    case 3:
                                                        (t = e.sent),
                                                            (this.player.current.srcObject = t),
                                                            this.setState({
                                                                stream: t,
                                                            }),
                                                            (e.next = 11);
                                                        break;
                                                    case 8:
                                                        (e.prev = 8),
                                                            (e.t0 = e.catch(0)),
                                                            console.log(e.t0);
                                                    case 11:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        this,
                                        [[0, 8]]
                                    );
                                })
                            );
                            return function() {
                                return e.apply(this, arguments);
                            };
                        })()),
                        (a.reverseCamera = (function() {
                            var e = u()(
                                o.a.mark(function e() {
                                    return o.a.wrap(
                                        function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            'user' ===
                                                            this.state
                                                                .facingMode
                                                                ? this.setState(
                                                                      {
                                                                          facingMode: {
                                                                              exact:
                                                                                  'environment',
                                                                          },
                                                                      }
                                                                  )
                                                                : this.setState(
                                                                      {
                                                                          facingMode:
                                                                              'user',
                                                                      }
                                                                  ),
                                                            (e.prev = 1),
                                                            (e.next = 4),
                                                            this.getCamera()
                                                        );
                                                    case 4:
                                                        e.next = 10;
                                                        break;
                                                    case 6:
                                                        return (
                                                            (e.prev = 6),
                                                            (e.t0 = e.catch(1)),
                                                            (e.next = 10),
                                                            this.reverseCamera()
                                                        );
                                                    case 10:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        this,
                                        [[1, 6]]
                                    );
                                })
                            );
                            return function() {
                                return e.apply(this, arguments);
                            };
                        })()),
                        (a.captureCamera = (function() {
                            var e = u()(
                                o.a.mark(function e() {
                                    var t, a, n, r;
                                    return o.a.wrap(
                                        function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        (t = this.player.current.getBoundingClientRect()),
                                                            (a = t.width),
                                                            (n = t.height),
                                                            this.canvas.current.setAttribute(
                                                                'width',
                                                                a
                                                            ),
                                                            this.canvas.current.setAttribute(
                                                                'height',
                                                                n
                                                            ),
                                                            (r = this.canvas.current.getContext(
                                                                '2d'
                                                            )).drawImage(
                                                                this.player
                                                                    .current,
                                                                0,
                                                                0,
                                                                a,
                                                                n
                                                            ),
                                                            r.scale(1.35, 1),
                                                            console.log(
                                                                this.player
                                                                    .current
                                                                    .width
                                                            ),
                                                            this.setState({
                                                                captureURL: this.canvas.current.toDataURL(),
                                                            }),
                                                            console.log(
                                                                this.state
                                                                    .captureURL
                                                            );
                                                    case 9:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        this
                                    );
                                })
                            );
                            return function() {
                                return e.apply(this, arguments);
                            };
                        })()),
                        (a.offCamera = (function() {
                            var e = u()(
                                o.a.mark(function e() {
                                    return o.a.wrap(
                                        function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        this.state.stream &&
                                                            this.state.stream
                                                                .getTracks()[0]
                                                                .stop(),
                                                            this.setState({
                                                                stream: '',
                                                            }),
                                                            (this.player.current.srcObject = null);
                                                    case 3:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        this
                                    );
                                })
                            );
                            return function() {
                                return e.apply(this, arguments);
                            };
                        })()),
                        (a.render = function() {
                            var e = this;
                            return r.a.createElement(
                                'div',
                                { className: h.a.backdrop },
                                r.a.createElement('img', {
                                    src: this.state.capture,
                                }),
                                r.a.createElement('video', {
                                    ref: this.player,
                                    autoPlay: !0,
                                }),
                                r.a.createElement('canvas', {
                                    ref: this.canvas,
                                }),
                                this.state.stream
                                    ? null
                                    : r.a.createElement(
                                          'div',
                                          {
                                              className: h.a.prompt,
                                              onClick: function() {
                                                  e.setState({
                                                      facingMode: 'user',
                                                  }),
                                                      e.getCamera();
                                              },
                                          },
                                          r.a.createElement(
                                              'h1',
                                              null,
                                              'Turn on Camera'
                                          )
                                      ),
                                r.a.createElement(
                                    'div',
                                    { className: h.a.controls },
                                    r.a.createElement(
                                        'div',
                                        null,
                                        r.a.createElement(
                                            'button',
                                            { onClick: this.offCamera },
                                            r.a.createElement('i', {
                                                className: 'fas fa-images',
                                            })
                                        )
                                    ),
                                    r.a.createElement(
                                        'div',
                                        null,
                                        r.a.createElement(
                                            'button',
                                            { onClick: this.captureCamera },
                                            r.a.createElement('i', {
                                                className: 'far fa-circle',
                                            })
                                        )
                                    ),
                                    r.a.createElement(
                                        'div',
                                        null,
                                        r.a.createElement(
                                            'button',
                                            { onClick: this.reverseCamera },
                                            r.a.createElement('i', {
                                                className: 'fas fa-sync-alt',
                                            })
                                        )
                                    )
                                )
                            );
                        }),
                        t
                    );
                })(r.a.Component),
                E = Object(b.b)(
                    function(e) {
                        return { bgColor: e.bgColor };
                    },
                    function(e) {
                        return {
                            changeBG: function(t) {
                                return e(Object(v.a)(t));
                            },
                        };
                    }
                )(C);
            t.default = Object(b.b)(
                function(e) {
                    return { bgColor: e.bgColor };
                },
                function(e) {
                    return {
                        changeBG: function(t) {
                            return e(Object(v.a)(t));
                        },
                    };
                }
            )(function(e) {
                return (
                    (0, e.changeBG)('black'),
                    r.a.createElement(
                        c.a,
                        null,
                        r.a.createElement(s.a, { title: 'Clipboard' }),
                        r.a.createElement(E, null)
                    )
                );
            });
        },
        159: function(e, t, a) {
            'use strict';
            a.d(t, 'b', function() {
                return u;
            });
            var n = a(0),
                r = a.n(n),
                c = a(1),
                s = a.n(c),
                i = a(36),
                o = a.n(i);
            a.d(t, 'a', function() {
                return o.a;
            });
            a(161);
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
                data: s.a.object,
                query: s.a.string.isRequired,
                render: s.a.func,
                children: s.a.func,
            };
        },
        160: function(e, t, a) {
            'use strict';
            a.d(t, 'a', function() {
                return r;
            });
            var n = a(59);
            function r(e) {
                return console.log(e), { type: n.a, bgColor: e };
            }
        },
        161: function(e, t, a) {
            var n;
            e.exports = ((n = a(163)) && n.default) || n;
        },
        162: function(e) {
            e.exports = {
                data: { site: { siteMetadata: { title: 'EasyRead' } } },
            };
        },
        163: function(e, t, a) {
            'use strict';
            a.r(t);
            a(26);
            var n = a(0),
                r = a.n(n),
                c = a(1),
                s = a.n(c),
                i = a(60),
                o = a(3),
                l = function(e) {
                    var t = e.location,
                        a = o.default.getResourcesForPathnameSync(t.pathname);
                    return a
                        ? r.a.createElement(
                              i.a,
                              Object.assign(
                                  { location: t, pageResources: a },
                                  a.json
                              )
                          )
                        : null;
                };
            (l.propTypes = {
                location: s.a.shape({ pathname: s.a.string.isRequired })
                    .isRequired,
            }),
                (t.default = l);
        },
        164: function(e, t, a) {
            e.exports =
                a.p +
                'static/reading-profile-667bb35fe9e05f79fe62d06332339c07.png';
        },
        165: function(e, t, a) {
            'use strict';
            var n = a(166),
                r = a(0),
                c = a.n(r),
                s = a(1),
                i = a.n(s),
                o = a(175),
                l = a.n(o);
            function u(e) {
                var t = e.description,
                    a = e.lang,
                    r = e.meta,
                    s = e.title,
                    i = n.data.site,
                    o = t || i.siteMetadata.description;
                return c.a.createElement(
                    l.a,
                    {
                        htmlAttributes: { lang: a },
                        title: s,
                        titleTemplate: '%s | ' + i.siteMetadata.title,
                        meta: [
                            { name: 'description', content: o },
                            { property: 'og:title', content: s },
                            { property: 'og:description', content: o },
                            { property: 'og:type', content: 'website' },
                            { name: 'twitter:card', content: 'summary' },
                            {
                                name: 'twitter:creator',
                                content: i.siteMetadata.author,
                            },
                            { name: 'twitter:title', content: s },
                            { name: 'twitter:description', content: o },
                        ].concat(r),
                    },
                    c.a.createElement('link', {
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
                    description: i.a.string,
                    lang: i.a.string,
                    meta: i.a.arrayOf(i.a.object),
                    title: i.a.string.isRequired,
                }),
                (t.a = u);
        },
        166: function(e) {
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
        167: function(e, t, a) {
            'use strict';
            var n = a(162),
                r = a(0),
                c = a.n(r),
                s = a(1),
                i = a.n(s),
                o = a(159),
                l = (a(171), a(37)),
                u = a.n(l),
                m = a(8),
                p = a.n(m),
                f = a(58),
                d = a(160),
                g = a(172),
                h = a.n(g),
                b = (a(173),
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
                    p()(t, e);
                    var n = t.prototype;
                    return (
                        (n.toggleNav = function() {
                            this.setState({
                                isCollapse: !this.state.isCollapse,
                            });
                        }),
                        (n.render = function() {
                            return c.a.createElement(
                                c.a.Fragment,
                                null,
                                c.a.createElement(
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
                                    c.a.createElement(
                                        'span',
                                        { className: 'hamburger-box' },
                                        c.a.createElement('span', {
                                            className:
                                                'hamburger-inner ' +
                                                ('black' == this.props.bgColor
                                                    ? h.a.dark
                                                    : h.a.light),
                                        })
                                    )
                                ),
                                c.a.createElement(
                                    'div',
                                    {
                                        className:
                                            h.a.navContainer +
                                            ' ' +
                                            (this.state.isCollapse
                                                ? h.a.isActive
                                                : ''),
                                    },
                                    c.a.createElement(
                                        'div',
                                        { className: h.a.nav },
                                        c.a.createElement(
                                            'div',
                                            { className: h.a.profile },
                                            c.a.createElement('img', {
                                                src: a(164),
                                            }),
                                            c.a.createElement(
                                                'h1',
                                                null,
                                                'Easyread'
                                            ),
                                            c.a.createElement(
                                                'p',
                                                null,
                                                'Welcome back!'
                                            )
                                        ),
                                        c.a.createElement('hr', null),
                                        c.a.createElement(
                                            'ul',
                                            { className: h.a.pages },
                                            [
                                                {
                                                    name: 'Clipboard',
                                                    url: '/clipboard',
                                                },
                                                ,
                                                {
                                                    name: 'Settings',
                                                    url: '/settings',
                                                },
                                                {
                                                    name: 'Progress Tracker',
                                                    url: '/tracker',
                                                },
                                            ].map(function(e) {
                                                return c.a.createElement(
                                                    'li',
                                                    { key: e.url },
                                                    c.a.createElement(
                                                        o.a,
                                                        {
                                                            className: h.a.page,
                                                            activeClassName:
                                                                h.a.pageActive,
                                                            to: e.url,
                                                        },
                                                        c.a.createElement('i', {
                                                            className:
                                                                'fas fa-heart fa-2x',
                                                        }),
                                                        c.a.createElement(
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
                })(c.a.Component)),
                v = Object(f.b)(
                    function(e) {
                        return { bgColor: e.bgColor };
                    },
                    function(e) {
                        return {
                            changeBG: function(t) {
                                return e(Object(d.a)(t));
                            },
                        };
                    }
                )(b),
                C = (a(174),
                function(e) {
                    var t = e.bgColor,
                        a = (e.changeBG, e.children);
                    return c.a.createElement(o.b, {
                        query: '2924840780',
                        render: function(e) {
                            return c.a.createElement(
                                c.a.Fragment,
                                null,
                                c.a.createElement(v, null),
                                c.a.createElement(
                                    'div',
                                    {
                                        className: 'main',
                                        style: { backgroundColor: t },
                                    },
                                    c.a.createElement('main', null, a),
                                    c.a.createElement('footer', null)
                                )
                            );
                        },
                        data: n,
                    });
                });
            C.propTypes = { children: i.a.node.isRequired };
            t.a = Object(f.b)(
                function(e) {
                    return { bgColor: e.bgColor };
                },
                function(e) {
                    return {
                        changeBG: function(t) {
                            return e(Object(d.a)(t));
                        },
                    };
                }
            )(C);
        },
        168: function(e, t, a) {
            'use strict';
            a(169), a(0), a(159), a(170);
        },
        169: function(e) {
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
    },
]);
//# sourceMappingURL=component---src-pages-clipboard-js-25c8396d6193c0bef7f6.js.map
