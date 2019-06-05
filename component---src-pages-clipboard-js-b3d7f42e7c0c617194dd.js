(window.webpackJsonp = window.webpackJsonp || []).push([
    [4],
    {
        158: function(e, t, a) {
            'use strict';
            a.r(t);
            var n = a(0),
                r = a.n(n),
                s = (a(159), a(167)),
                i = (a(168), a(165)),
                c = (a(95),
                a(96),
                a(186),
                a(101),
                a(98),
                a(62),
                a(44),
                a(191),
                a(193)),
                o = a.n(c),
                u = (a(196), a(197)),
                l = a.n(u),
                p = a(38),
                d = a.n(p),
                f = a(8),
                m = a.n(f),
                h = a(198),
                g = a.n(h),
                b = a(59),
                v = a(160),
                C = (function(e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        m()(t, e),
                        (t.prototype.render = function() {
                            return r.a.createElement(
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
                                r.a.createElement(
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
                })(r.a.Component),
                x = Object(b.b)(function(e) {
                    return {
                        readerBgColor: e.readerBgColor,
                        readerColor: e.readerColor,
                        readerFont: e.readerFont,
                    };
                }, null)(C),
                y = (a(199),
                (function(e) {
                    function t(t) {
                        var a;
                        return (
                            ((a = e.call(this, t) || this).state = {
                                stream: '',
                                facingMode: 'user',
                                capture: null,
                                captureURL: '',
                                textBoxes: [],
                            }),
                            (a.player = r.a.createRef()),
                            (a.canvas = r.a.createRef()),
                            (a.getCamera = a.getCamera.bind(d()(a))),
                            (a.reverseCamera = a.reverseCamera.bind(d()(a))),
                            (a.captureCamera = a.captureCamera.bind(d()(a))),
                            (a.offCamera = a.offCamera.bind(d()(a))),
                            (a.getCV = a.getCV.bind(d()(a))),
                            (a.init = a.init.bind(d()(a))),
                            (a.frameCount = 0),
                            (a.textGroup = ''),
                            a
                        );
                    }
                    m()(t, e);
                    var a = t.prototype;
                    return (
                        (a.componentDidMount = function() {
                            this.init();
                        }),
                        (a.init = function() {
                            var e = this.player.current.getBoundingClientRect(),
                                t = e.width,
                                a = e.height;
                            (this.width = t),
                                (this.height = a),
                                this.canvas.current.setAttribute('width', t),
                                this.canvas.current.setAttribute('height', a),
                                (this.ctx = this.canvas.current.getContext(
                                    '2d'
                                )),
                                (this.ctx.globalCompositeOperation =
                                    'difference');
                        }),
                        (a.componentWillUnmount = function() {
                            this.offCamera();
                        }),
                        (a.getCamera = (function() {
                            var e = l()(
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
                                                        return (
                                                            (t = e.sent),
                                                            (this.player.current.srcObject = t),
                                                            this.setState({
                                                                stream: t,
                                                            }),
                                                            (e.next = 8),
                                                            setTimeout(
                                                                this.init,
                                                                1e3
                                                            )
                                                        );
                                                    case 8:
                                                        setInterval(
                                                            this.captureCamera,
                                                            250
                                                        ),
                                                            (e.next = 14);
                                                        break;
                                                    case 11:
                                                        (e.prev = 11),
                                                            (e.t0 = e.catch(0)),
                                                            console.log(e.t0);
                                                    case 14:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        this,
                                        [[0, 11]]
                                    );
                                })
                            );
                            return function() {
                                return e.apply(this, arguments);
                            };
                        })()),
                        (a.reverseCamera = (function() {
                            var e = l()(
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
                                                                          facingMode:
                                                                              'environment',
                                                                      }
                                                                  )
                                                                : this.setState(
                                                                      {
                                                                          facingMode:
                                                                              'user',
                                                                      }
                                                                  ),
                                                            console.log(
                                                                this.state
                                                                    .facingMode
                                                            ),
                                                            (e.next = 4),
                                                            this.offCamera()
                                                        );
                                                    case 4:
                                                        return (
                                                            (e.prev = 4),
                                                            (e.next = 7),
                                                            this.getCamera()
                                                        );
                                                    case 7:
                                                        e.next = 13;
                                                        break;
                                                    case 9:
                                                        return (
                                                            (e.prev = 9),
                                                            (e.t0 = e.catch(4)),
                                                            (e.next = 13),
                                                            this.reverseCamera()
                                                        );
                                                    case 13:
                                                    case 'end':
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        this,
                                        [[4, 9]]
                                    );
                                })
                            );
                            return function() {
                                return e.apply(this, arguments);
                            };
                        })()),
                        (a.checkMoved = function(e) {
                            for (var t = 0, a = 0; a < e.data.length; a += 4) {
                                e.data[a] / 3 +
                                    e.data[a + 1] / 3 +
                                    e.data[a + 2] / 3 >=
                                    32 && t++;
                            }
                            return t >= 3e4;
                        }),
                        (a.captureCamera = (function() {
                            var e = l()(
                                o.a.mark(function e() {
                                    var t, a;
                                    return o.a.wrap(
                                        function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            this.frameCount %
                                                                2 ==
                                                            0
                                                                ? (this.ctx.globalCompositeOperation =
                                                                      'difference')
                                                                : (this.ctx.globalCompositeOperation =
                                                                      'source-over'),
                                                            this.ctx.drawImage(
                                                                this.player
                                                                    .current,
                                                                0,
                                                                0
                                                            ),
                                                            (e.next = 4),
                                                            this.ctx.getImageData(
                                                                0,
                                                                0,
                                                                this.width,
                                                                this.height
                                                            )
                                                        );
                                                    case 4:
                                                        if (
                                                            ((t = e.sent),
                                                            !this.checkMoved(
                                                                t
                                                            ) ||
                                                                this
                                                                    .frameCount %
                                                                    2 ==
                                                                    0)
                                                        ) {
                                                            e.next = 12;
                                                            break;
                                                        }
                                                        return (
                                                            (e.next = 8),
                                                            this.canvas.current.toDataURL(
                                                                'image/jpeg'
                                                            )
                                                        );
                                                    case 8:
                                                        return (
                                                            (a = e.sent),
                                                            this.setState({
                                                                captureURL: a,
                                                            }),
                                                            (e.next = 12),
                                                            this.getCV()
                                                        );
                                                    case 12:
                                                        this.frameCount++;
                                                    case 13:
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
                            var e = l()(
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
                        (a.getCV = (function() {
                            var e = l()(
                                o.a.mark(function e() {
                                    var t,
                                        a,
                                        n,
                                        s,
                                        i,
                                        c,
                                        u,
                                        l,
                                        p,
                                        d,
                                        f,
                                        m,
                                        h,
                                        g = this;
                                    return o.a.wrap(
                                        function(e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        for (
                                                            t = {}
                                                                .GATSBY_AZURE_API_KEY,
                                                                'https://cors-anywhere.herokuapp.com/https://eastus.api.cognitive.microsoft.com/vision/v2.0/recognizeText?mode=Printed',
                                                                a = {
                                                                    mode:
                                                                        'Printed',
                                                                },
                                                                '?',
                                                                Object.keys(
                                                                    a
                                                                ).forEach(
                                                                    function(
                                                                        e
                                                                    ) {
                                                                        e +
                                                                            '=' +
                                                                            a[
                                                                                e
                                                                            ] +
                                                                            '&';
                                                                    }
                                                                ),
                                                                n = this.state.captureURL.split(
                                                                    ','
                                                                )[1],
                                                                this.state.captureURL
                                                                    .split(
                                                                        ';'
                                                                    )[0]
                                                                    .slice(5),
                                                                s = window.atob(
                                                                    n
                                                                ),
                                                                i = new ArrayBuffer(
                                                                    s.length
                                                                ),
                                                                c = new Uint8Array(
                                                                    i
                                                                ),
                                                                u = 0;
                                                            u < s.length;
                                                            u++
                                                        )
                                                            c[u] = s.charCodeAt(
                                                                u
                                                            );
                                                        return (
                                                            (e.next = 13),
                                                            fetch(
                                                                'https://cors-anywhere.herokuapp.com/https://eastus.api.cognitive.microsoft.com/vision/v2.0/recognizeText?mode=Printed',
                                                                {
                                                                    method:
                                                                        'POST',
                                                                    headers: {
                                                                        'Content-Type':
                                                                            'application/octet-stream',
                                                                        'Ocp-Apim-Subscription-Key': t,
                                                                    },
                                                                    body: c,
                                                                }
                                                            )
                                                        );
                                                    case 13:
                                                        (l = e.sent),
                                                            (p = l.headers.get(
                                                                'Operation-Location'
                                                            ));
                                                    case 15:
                                                        return (
                                                            (e.next = 17),
                                                            fetch(p, {
                                                                method: 'GET',
                                                                headers: {
                                                                    'Content-Type':
                                                                        'application/json',
                                                                    'Ocp-Apim-Subscription-Key': t,
                                                                },
                                                            })
                                                        );
                                                    case 17:
                                                        return (
                                                            (d = e.sent),
                                                            (e.next = 20),
                                                            d.json()
                                                        );
                                                    case 20:
                                                        d = e.sent;
                                                    case 21:
                                                        if (
                                                            'Succeeded' !=
                                                            d.status
                                                        ) {
                                                            e.next = 15;
                                                            break;
                                                        }
                                                    case 22:
                                                        if (
                                                            (this.canvas.current.getContext(
                                                                '2d'
                                                            ),
                                                            (f = ''),
                                                            d &&
                                                                d.recognitionResult)
                                                        ) {
                                                            for (
                                                                this.setState({
                                                                    textBoxes: [],
                                                                }),
                                                                    m = function(
                                                                        e
                                                                    ) {
                                                                        var t =
                                                                            d
                                                                                .recognitionResult
                                                                                .lines[
                                                                                e
                                                                            ];
                                                                        g.state.textBoxes.indexOf(
                                                                            function(
                                                                                e
                                                                            ) {
                                                                                return e.str.includes(
                                                                                    t.text
                                                                                );
                                                                            }
                                                                        );
                                                                        f +=
                                                                            t.text;
                                                                        var a =
                                                                                t.boundingBox,
                                                                            n = g.canvas.current.getBoundingClientRect();
                                                                        g.setState(
                                                                            {
                                                                                textBoxes: g.state.textBoxes.concat(
                                                                                    [
                                                                                        {
                                                                                            str:
                                                                                                t.text,
                                                                                            el: r.a.createElement(
                                                                                                x,
                                                                                                {
                                                                                                    key:
                                                                                                        t.text,
                                                                                                    x:
                                                                                                        a[6] +
                                                                                                        n.x,
                                                                                                    y:
                                                                                                        a[7] +
                                                                                                        n.y -
                                                                                                        Math.abs(
                                                                                                            a[1] -
                                                                                                                a[7]
                                                                                                        ),
                                                                                                    text:
                                                                                                        t.text,
                                                                                                    size: Math.abs(
                                                                                                        a[1] -
                                                                                                            a[7]
                                                                                                    ),
                                                                                                }
                                                                                            ),
                                                                                        },
                                                                                    ]
                                                                                ),
                                                                            }
                                                                        );
                                                                    },
                                                                    h = 0;
                                                                h <
                                                                d
                                                                    .recognitionResult
                                                                    .lines
                                                                    .length;
                                                                h++
                                                            )
                                                                m(h);
                                                            this.textGroup = f;
                                                        }
                                                    case 25:
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
                                { className: g.a.backdrop },
                                this.state.textBoxes.map(function(e) {
                                    return e.el;
                                }),
                                r.a.createElement('video', {
                                    ref: this.player,
                                    autoPlay: !0,
                                    style: {
                                        transform:
                                            'translate(-50%, -50%) rotateY(' +
                                            (this.state.facingMode, '0') +
                                            'deg)',
                                    },
                                }),
                                r.a.createElement('canvas', {
                                    ref: this.canvas,
                                    style: {
                                        transform: 'translate(-50%, -50%)',
                                    },
                                }),
                                this.state.stream
                                    ? null
                                    : r.a.createElement(
                                          'div',
                                          {
                                              className: g.a.prompt,
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
                                    { className: g.a.controls },
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
                })(r.a.Component)),
                E = Object(b.b)(
                    function(e) {
                        return {
                            readerBgColor: e.readerBgColor,
                            readerColor: e.readerColor,
                            readerFont: e.readerFont,
                        };
                    },
                    function(e) {
                        return {
                            changeReaderBG: function(t) {
                                return e(Object(v.b)(t));
                            },
                        };
                    }
                )(y);
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
                        s.a,
                        null,
                        r.a.createElement(i.a, { title: 'Clipboard' }),
                        r.a.createElement(E, null)
                    )
                );
            });
        },
        159: function(e, t, a) {
            'use strict';
            a.d(t, 'b', function() {
                return l;
            });
            var n = a(0),
                r = a.n(n),
                s = a(1),
                i = a.n(s),
                c = a(37),
                o = a.n(c);
            a.d(t, 'a', function() {
                return o.a;
            });
            a(161);
            var u = r.a.createContext({}),
                l = function(e) {
                    return r.a.createElement(u.Consumer, null, function(t) {
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
            l.propTypes = {
                data: i.a.object,
                query: i.a.string.isRequired,
                render: i.a.func,
                children: i.a.func,
            };
        },
        160: function(e, t, a) {
            'use strict';
            a.d(t, 'a', function() {
                return r;
            }),
                a.d(t, 'b', function() {
                    return s;
                });
            var n = a(23);
            function r(e) {
                return { type: n.a, bgColor: e };
            }
            function s(e) {
                return { type: n.b, readerBgColor: e };
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
            a(27);
            var n = a(0),
                r = a.n(n),
                s = a(1),
                i = a.n(s),
                c = a(60),
                o = a(3),
                u = function(e) {
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
            (u.propTypes = {
                location: i.a.shape({ pathname: i.a.string.isRequired })
                    .isRequired,
            }),
                (t.default = u);
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
                s = a.n(r),
                i = a(1),
                c = a.n(i),
                o = a(175),
                u = a.n(o);
            function l(e) {
                var t = e.description,
                    a = e.lang,
                    r = e.meta,
                    i = e.title,
                    c = n.data.site,
                    o = t || c.siteMetadata.description;
                return s.a.createElement(
                    u.a,
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
            (l.defaultProps = { lang: 'en', meta: [], description: '' }),
                (l.propTypes = {
                    description: c.a.string,
                    lang: c.a.string,
                    meta: c.a.arrayOf(c.a.object),
                    title: c.a.string.isRequired,
                }),
                (t.a = l);
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
                s = a.n(r),
                i = a(1),
                c = a.n(i),
                o = a(159),
                u = (a(171), a(38)),
                l = a.n(u),
                p = a(8),
                d = a.n(p),
                f = a(59),
                m = a(160),
                h = a(172),
                g = a.n(h),
                b = (a(173),
                (function(e) {
                    function t(t) {
                        var a;
                        return (
                            ((a = e.call(this, t) || this).state = {
                                isCollapse: !1,
                            }),
                            (a.toggleNav = a.toggleNav.bind(l()(a))),
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
                                            g.a.menuToggle +
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
                                                    ? g.a.dark
                                                    : g.a.light),
                                        })
                                    )
                                ),
                                s.a.createElement(
                                    'div',
                                    {
                                        className:
                                            g.a.navContainer +
                                            ' ' +
                                            (this.state.isCollapse
                                                ? g.a.isActive
                                                : ''),
                                    },
                                    s.a.createElement(
                                        'div',
                                        { className: g.a.nav },
                                        s.a.createElement(
                                            'div',
                                            { className: g.a.profile },
                                            s.a.createElement('img', {
                                                src: a(164),
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
                                            { className: g.a.pages },
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
                                                return s.a.createElement(
                                                    'li',
                                                    { key: e.url },
                                                    s.a.createElement(
                                                        o.a,
                                                        {
                                                            className: g.a.page,
                                                            activeClassName:
                                                                g.a.pageActive,
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
                v = Object(f.b)(
                    function(e) {
                        return { bgColor: e.bgColor };
                    },
                    function(e) {
                        return {
                            changeBG: function(t) {
                                return e(Object(m.a)(t));
                            },
                        };
                    }
                )(b),
                C = (a(174),
                function(e) {
                    var t = e.bgColor,
                        a = (e.changeBG, e.children);
                    return s.a.createElement(o.b, {
                        query: '2924840780',
                        render: function(e) {
                            return s.a.createElement(
                                s.a.Fragment,
                                null,
                                s.a.createElement(v, null),
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
            C.propTypes = { children: c.a.node.isRequired };
            t.a = Object(f.b)(
                function(e) {
                    return { bgColor: e.bgColor };
                },
                function(e) {
                    return {
                        changeBG: function(t) {
                            return e(Object(m.a)(t));
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
//# sourceMappingURL=component---src-pages-clipboard-js-b3d7f42e7c0c617194dd.js.map
