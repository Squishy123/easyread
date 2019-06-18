(window.webpackJsonp = window.webpackJsonp || []).push([
    [5],
    {
        158: function(e, t, a) {
            'use strict';
            a.r(t);
            var r = a(0),
                n = a.n(r),
                i = a(160),
                s = a(168),
                o = (a(169), a(166)),
                c = a(59),
                l = a(161),
                u = (a(202), a(38)),
                d = a.n(u),
                f = a(8),
                p = a.n(f),
                g = a(207),
                h = a.n(g),
                m = a(179),
                b = a(180),
                y = Object(b.createLocalStorage)(),
                v = (function(e) {
                    function t(t) {
                        var a;
                        return (
                            ((a = e.call(this, t) || this).state = {
                                textBoxes: [],
                                captures: JSON.parse(y.getItem('captures')),
                            }),
                            a.state.captures &&
                                a.state.captures.length &&
                                (a.state.captures = a.state.captures.reverse()),
                            (a.original = n.a.createRef()),
                            (a.imgLoad = a.imgLoad.bind(d()(a))),
                            a
                        );
                    }
                    p()(t, e);
                    var a = t.prototype;
                    return (
                        (a.imgLoad = function() {
                            var e = this;
                            this.setState({ textBoxes: [] });
                            var t = [];
                            this.state.captures[
                                this.props.id
                            ].recognitionResult.lines.forEach(function(a) {
                                var r = a.boundingBox,
                                    i = e.original.current.getBoundingClientRect();
                                t.push({
                                    str: a.text,
                                    el: n.a.createElement(m.a, {
                                        key: a.text + Math.random(),
                                        x: r[6] + i.x,
                                        y: r[7] + i.y - Math.abs(r[1] - r[7]),
                                        text: a.text,
                                        size: Math.abs(r[1] - r[7]),
                                    }),
                                });
                            }),
                                this.setState({ textBoxes: t });
                        }),
                        (a.render = function() {
                            var e = this;
                            return this.props.id
                                ? n.a.createElement(
                                      n.a.Fragment,
                                      null,
                                      this.state.textBoxes.map(function(e) {
                                          return e.el;
                                      }),
                                      n.a.createElement(
                                          'div',
                                          { className: h.a.single },
                                          n.a.createElement('img', {
                                              ref: this.original,
                                              src: this.state.captures[
                                                  this.props.id
                                              ].originalImage,
                                              onLoad: this.imgLoad,
                                          })
                                      ),
                                      n.a.createElement(
                                          'div',
                                          { className: h.a.controls },
                                          n.a.createElement(
                                              'div',
                                              null,
                                              n.a.createElement(
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
                                                  n.a.createElement('i', {
                                                      className:
                                                          'fas fa-arrow-left',
                                                  })
                                              )
                                          ),
                                          n.a.createElement(
                                              'div',
                                              null,
                                              n.a.createElement(
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
                                                  n.a.createElement('i', {
                                                      className:
                                                          'fas fa-arrow-right',
                                                  })
                                              )
                                          )
                                      )
                                  )
                                : n.a.createElement(
                                      'div',
                                      { className: h.a.gallery },
                                      this.state.captures
                                          ? this.state.captures.map(function(
                                                e,
                                                t
                                            ) {
                                                return n.a.createElement(
                                                    i.a,
                                                    {
                                                        to: '/gallery/' + t,
                                                        key: 'capture-' + t,
                                                    },
                                                    n.a.createElement('img', {
                                                        src: e.renderImage,
                                                    })
                                                );
                                            })
                                          : n.a.createElement(
                                                'h3',
                                                null,
                                                'No Captures here...'
                                            )
                                  );
                        }),
                        t
                    );
                })(n.a.Component);
            t.default = Object(c.b)(
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
                return n.a.createElement(
                    s.a,
                    null,
                    n.a.createElement(o.a, { title: 'Home' }),
                    n.a.createElement(
                        'h1',
                        {
                            style: {
                                textAlign: 'center',
                                margin: '50px 10px 25px',
                            },
                        },
                        'Captures'
                    ),
                    n.a.createElement(v, { id: isNaN(a) ? null : a })
                );
            });
        },
        160: function(e, t, a) {
            'use strict';
            a.d(t, 'b', function() {
                return u;
            });
            var r = a(0),
                n = a.n(r),
                i = a(1),
                s = a.n(i),
                o = a(37),
                c = a.n(o);
            a.d(t, 'a', function() {
                return c.a;
            }),
                a.d(t, 'c', function() {
                    return o.navigate;
                });
            a(162);
            var l = n.a.createContext({}),
                u = function(e) {
                    return n.a.createElement(l.Consumer, null, function(t) {
                        return e.data || (t[e.query] && t[e.query].data)
                            ? (e.render || e.children)(
                                  e.data ? e.data.data : t[e.query].data
                              )
                            : n.a.createElement(
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
        161: function(e, t, a) {
            'use strict';
            a.d(t, 'a', function() {
                return n;
            });
            var r = a(21);
            function n(e) {
                return { type: r.a, bgColor: e };
            }
        },
        162: function(e, t, a) {
            var r;
            e.exports = ((r = a(164)) && r.default) || r;
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
            var r = a(0),
                n = a.n(r),
                i = a(1),
                s = a.n(i),
                o = a(60),
                c = a(3),
                l = function(e) {
                    var t = e.location,
                        a = c.default.getResourcesForPathnameSync(t.pathname);
                    return a
                        ? n.a.createElement(
                              o.a,
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
        165: function(e, t, a) {
            e.exports =
                a.p +
                'static/reading-profile-667bb35fe9e05f79fe62d06332339c07.png';
        },
        166: function(e, t, a) {
            'use strict';
            var r = a(167),
                n = a(0),
                i = a.n(n),
                s = a(1),
                o = a.n(s),
                c = a(176),
                l = a.n(c);
            function u(e) {
                var t = e.description,
                    a = e.lang,
                    n = e.meta,
                    s = e.title,
                    o = r.data.site,
                    c = t || o.siteMetadata.description;
                return i.a.createElement(
                    l.a,
                    {
                        htmlAttributes: { lang: a },
                        title: s,
                        titleTemplate: '%s | ' + o.siteMetadata.title,
                        meta: [
                            { name: 'description', content: c },
                            { property: 'og:title', content: s },
                            { property: 'og:description', content: c },
                            { property: 'og:type', content: 'website' },
                            { name: 'twitter:card', content: 'summary' },
                            {
                                name: 'twitter:creator',
                                content: o.siteMetadata.author,
                            },
                            { name: 'twitter:title', content: s },
                            { name: 'twitter:description', content: c },
                        ].concat(n),
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
                    description: o.a.string,
                    lang: o.a.string,
                    meta: o.a.arrayOf(o.a.object),
                    title: o.a.string.isRequired,
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
            var r = a(163),
                n = a(0),
                i = a.n(n),
                s = a(1),
                o = a.n(s),
                c = a(160),
                l = (a(172), a(38)),
                u = a.n(l),
                d = a(8),
                f = a.n(d),
                p = a(59),
                g = a(161),
                h = a(173),
                m = a.n(h),
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
                    var r = t.prototype;
                    return (
                        (r.toggleNav = function() {
                            this.setState({
                                isCollapse: !this.state.isCollapse,
                            });
                        }),
                        (r.render = function() {
                            return i.a.createElement(
                                i.a.Fragment,
                                null,
                                i.a.createElement(
                                    'div',
                                    {
                                        className:
                                            m.a.menuToggle +
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
                                                    ? m.a.dark
                                                    : m.a.light),
                                        })
                                    )
                                ),
                                i.a.createElement(
                                    'div',
                                    {
                                        className:
                                            m.a.navContainer +
                                            ' ' +
                                            (this.state.isCollapse
                                                ? m.a.isActive
                                                : ''),
                                    },
                                    i.a.createElement(
                                        'div',
                                        { className: m.a.nav },
                                        i.a.createElement(
                                            'div',
                                            { className: m.a.profile },
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
                                            { className: m.a.pages },
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
                                                        c.a,
                                                        {
                                                            className: m.a.page,
                                                            activeClassName:
                                                                m.a.pageActive,
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
                y = Object(p.b)(
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
                    return i.a.createElement(c.b, {
                        query: '2924840780',
                        render: function(e) {
                            return i.a.createElement(
                                i.a.Fragment,
                                null,
                                i.a.createElement(y, null),
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
                        data: r,
                    });
                });
            v.propTypes = { children: o.a.node.isRequired };
            t.a = Object(p.b)(
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
        171: function(e, t, a) {
            'use strict';
            var r = a(9);
            (t.__esModule = !0), (t.default = void 0);
            var n,
                i = r(a(8)),
                s = r(a(38)),
                o = r(a(82)),
                c = r(a(83)),
                l = r(a(0)),
                u = r(a(1)),
                d = function(e) {
                    var t = (0, c.default)({}, e);
                    return (
                        t.resolutions &&
                            ((t.fixed = t.resolutions), delete t.resolutions),
                        t.sizes && ((t.fluid = t.sizes), delete t.sizes),
                        t
                    );
                },
                f = Object.create({}),
                p = function(e) {
                    var t = d(e),
                        a = t.fluid ? t.fluid.src : t.fixed.src;
                    return f[a] || !1;
                },
                g = new WeakMap();
            var h = function(e, t) {
                    var a = (void 0 === n &&
                        'undefined' != typeof window &&
                        window.IntersectionObserver &&
                        (n = new window.IntersectionObserver(
                            function(e) {
                                e.forEach(function(e) {
                                    if (g.has(e.target)) {
                                        var t = g.get(e.target);
                                        (e.isIntersecting ||
                                            e.intersectionRatio > 0) &&
                                            (n.unobserve(e.target),
                                            g.delete(e.target),
                                            t());
                                    }
                                });
                            },
                            { rootMargin: '200px' }
                        )),
                    n);
                    return (
                        a && (a.observe(e), g.set(e, t)),
                        function() {
                            a.unobserve(e), g.delete(e);
                        }
                    );
                },
                m = function(e) {
                    var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
                        a = e.sizes ? 'sizes="' + e.sizes + '" ' : '',
                        r = e.srcSetWebp
                            ? "<source type='image/webp' srcset=\"" +
                              e.srcSetWebp +
                              '" ' +
                              a +
                              '/>'
                            : '',
                        n = e.srcSet ? 'srcset="' + e.srcSet + '" ' : '',
                        i = e.title ? 'title="' + e.title + '" ' : '',
                        s = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
                        o = e.width ? 'width="' + e.width + '" ' : '',
                        c = e.height ? 'height="' + e.height + '" ' : '',
                        l = e.crossOrigin
                            ? 'crossorigin="' + e.crossOrigin + '" '
                            : '';
                    return (
                        '<picture>' +
                        r +
                        '<img ' +
                        (e.loading ? 'loading="' + e.loading + '" ' : '') +
                        o +
                        c +
                        a +
                        n +
                        t +
                        s +
                        i +
                        l +
                        'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
                    );
                },
                b = l.default.forwardRef(function(e, t) {
                    var a = e.sizes,
                        r = e.srcSet,
                        n = e.src,
                        i = e.style,
                        s = e.onLoad,
                        u = e.onError,
                        d = e.nativeLazyLoadSupported,
                        f = e.loading,
                        p = (0, o.default)(e, [
                            'sizes',
                            'srcSet',
                            'src',
                            'style',
                            'onLoad',
                            'onError',
                            'nativeLazyLoadSupported',
                            'loading',
                        ]),
                        g = {};
                    return (
                        d && (g.loading = f),
                        l.default.createElement(
                            'img',
                            (0, c.default)(
                                { sizes: a, srcSet: r, src: n },
                                p,
                                { onLoad: s, onError: u, ref: t },
                                g,
                                {
                                    style: (0, c.default)(
                                        {
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center',
                                        },
                                        i
                                    ),
                                }
                            )
                        )
                    );
                });
            b.propTypes = {
                style: u.default.object,
                onError: u.default.func,
                onLoad: u.default.func,
            };
            var y = (function(e) {
                function t(t) {
                    var a;
                    a = e.call(this, t) || this;
                    var r = !0,
                        n = !1,
                        i = t.fadeIn,
                        o = !1,
                        c = p(t);
                    !c &&
                        'undefined' != typeof window &&
                        window.IntersectionObserver &&
                        ((r = !1), (n = !0)),
                        'undefined' != typeof HTMLImageElement &&
                            'loading' in HTMLImageElement.prototype &&
                            ((r = !0), (o = !0)),
                        'undefined' == typeof window && (r = !1),
                        t.critical && ((r = !0), (n = !1));
                    var u = !(t.critical && !t.fadeIn);
                    return (
                        (a.state = {
                            isVisible: r,
                            imgLoaded: !1,
                            imgCached: !1,
                            IOSupported: n,
                            fadeIn: i,
                            hasNoScript: u,
                            seenBefore: c,
                            nativeLazyLoadSupported: o,
                        }),
                        (a.imageRef = l.default.createRef()),
                        (a.handleImageLoaded = a.handleImageLoaded.bind(
                            (0, s.default)((0, s.default)(a))
                        )),
                        (a.handleRef = a.handleRef.bind(
                            (0, s.default)((0, s.default)(a))
                        )),
                        a
                    );
                }
                (0, i.default)(t, e);
                var a = t.prototype;
                return (
                    (a.componentDidMount = function() {
                        if (
                            (this.state.isVisible &&
                                'function' == typeof this.props.onStartLoad &&
                                this.props.onStartLoad({
                                    wasCached: p(this.props),
                                }),
                            this.props.critical)
                        ) {
                            var e = this.imageRef.current;
                            e && e.complete && this.handleImageLoaded();
                        }
                    }),
                    (a.componentWillUnmount = function() {
                        this.cleanUpListeners && this.cleanUpListeners();
                    }),
                    (a.handleRef = function(e) {
                        var t = this;
                        this.state.nativeLazyLoadSupported ||
                            (this.state.IOSupported &&
                                e &&
                                (this.cleanUpListeners = h(e, function() {
                                    var e = p(t.props);
                                    t.state.isVisible ||
                                        'function' !=
                                            typeof t.props.onStartLoad ||
                                        t.props.onStartLoad({ wasCached: e }),
                                        t.setState(
                                            { isVisible: !0 },
                                            function() {
                                                return t.setState({
                                                    imgLoaded: e,
                                                    imgCached: !!t.imageRef
                                                        .current.currentSrc,
                                                });
                                            }
                                        );
                                })));
                    }),
                    (a.handleImageLoaded = function() {
                        var e, t, a;
                        (e = this.props),
                            (t = d(e)),
                            (a = t.fluid ? t.fluid.src : t.fixed.src),
                            (f[a] = !0),
                            this.setState({ imgLoaded: !0 }),
                            this.state.seenBefore &&
                                this.setState({ fadeIn: !1 }),
                            this.props.onLoad && this.props.onLoad();
                    }),
                    (a.render = function() {
                        var e = d(this.props),
                            t = e.title,
                            a = e.alt,
                            r = e.className,
                            n = e.style,
                            i = void 0 === n ? {} : n,
                            s = e.imgStyle,
                            o = void 0 === s ? {} : s,
                            u = e.placeholderStyle,
                            f = void 0 === u ? {} : u,
                            p = e.placeholderClassName,
                            g = e.fluid,
                            h = e.fixed,
                            y = e.backgroundColor,
                            v = e.durationFadeIn,
                            E = e.Tag,
                            S = e.itemProp,
                            w = (e.critical, d(this.props).loading);
                        var N = this.state.nativeLazyLoadSupported,
                            I =
                                this.state.imgLoaded ||
                                !1 === this.state.fadeIn,
                            C =
                                !0 === this.state.fadeIn &&
                                !this.state.imgCached,
                            L = (0, c.default)(
                                {
                                    opacity: I ? 1 : 0,
                                    transition: C
                                        ? 'opacity ' + v + 'ms'
                                        : 'none',
                                },
                                o
                            ),
                            O = 'boolean' == typeof y ? 'lightgray' : y,
                            x = { transitionDelay: v + 'ms' },
                            A = (0, c.default)(
                                { opacity: this.state.imgLoaded ? 0 : 1 },
                                C && x,
                                o,
                                f
                            ),
                            R = {
                                title: t,
                                alt: this.state.isVisible ? '' : a,
                                style: A,
                                className: p,
                            };
                        if (g) {
                            var z = g;
                            return l.default.createElement(
                                E,
                                {
                                    className:
                                        (r || '') + ' gatsby-image-wrapper',
                                    style: (0, c.default)(
                                        {
                                            position: 'relative',
                                            overflow: 'hidden',
                                        },
                                        i
                                    ),
                                    ref: this.handleRef,
                                    key: 'fluid-' + JSON.stringify(z.srcSet),
                                },
                                l.default.createElement(E, {
                                    style: {
                                        width: '100%',
                                        paddingBottom:
                                            100 / z.aspectRatio + '%',
                                    },
                                }),
                                O &&
                                    l.default.createElement(E, {
                                        title: t,
                                        style: (0, c.default)(
                                            {
                                                backgroundColor: O,
                                                position: 'absolute',
                                                top: 0,
                                                bottom: 0,
                                                opacity: this.state.imgLoaded
                                                    ? 0
                                                    : 1,
                                                right: 0,
                                                left: 0,
                                            },
                                            C && x
                                        ),
                                    }),
                                z.base64 &&
                                    l.default.createElement(
                                        b,
                                        (0, c.default)({ src: z.base64 }, R)
                                    ),
                                z.tracedSVG &&
                                    l.default.createElement(
                                        b,
                                        (0, c.default)({ src: z.tracedSVG }, R)
                                    ),
                                this.state.isVisible &&
                                    l.default.createElement(
                                        'picture',
                                        null,
                                        z.srcSetWebp &&
                                            l.default.createElement('source', {
                                                type: 'image/webp',
                                                srcSet: z.srcSetWebp,
                                                sizes: z.sizes,
                                            }),
                                        l.default.createElement(b, {
                                            alt: a,
                                            title: t,
                                            sizes: z.sizes,
                                            src: z.src,
                                            crossOrigin: this.props.crossOrigin,
                                            srcSet: z.srcSet,
                                            style: L,
                                            ref: this.imageRef,
                                            onLoad: this.handleImageLoaded,
                                            onError: this.props.onError,
                                            itemProp: S,
                                            nativeLazyLoadSupported: N,
                                            loading: w,
                                        })
                                    ),
                                this.state.hasNoScript &&
                                    l.default.createElement('noscript', {
                                        dangerouslySetInnerHTML: {
                                            __html: m(
                                                (0, c.default)(
                                                    {
                                                        alt: a,
                                                        title: t,
                                                        loading: w,
                                                    },
                                                    z
                                                )
                                            ),
                                        },
                                    })
                            );
                        }
                        if (h) {
                            var j = h,
                                T = (0, c.default)(
                                    {
                                        position: 'relative',
                                        overflow: 'hidden',
                                        display: 'inline-block',
                                        width: j.width,
                                        height: j.height,
                                    },
                                    i
                                );
                            return (
                                'inherit' === i.display && delete T.display,
                                l.default.createElement(
                                    E,
                                    {
                                        className:
                                            (r || '') + ' gatsby-image-wrapper',
                                        style: T,
                                        ref: this.handleRef,
                                        key:
                                            'fixed-' + JSON.stringify(j.srcSet),
                                    },
                                    O &&
                                        l.default.createElement(E, {
                                            title: t,
                                            style: (0, c.default)(
                                                {
                                                    backgroundColor: O,
                                                    width: j.width,
                                                    opacity: this.state
                                                        .imgLoaded
                                                        ? 0
                                                        : 1,
                                                    height: j.height,
                                                },
                                                C && x
                                            ),
                                        }),
                                    j.base64 &&
                                        l.default.createElement(
                                            b,
                                            (0, c.default)({ src: j.base64 }, R)
                                        ),
                                    j.tracedSVG &&
                                        l.default.createElement(
                                            b,
                                            (0, c.default)(
                                                { src: j.tracedSVG },
                                                R
                                            )
                                        ),
                                    this.state.isVisible &&
                                        l.default.createElement(
                                            'picture',
                                            null,
                                            j.srcSetWebp &&
                                                l.default.createElement(
                                                    'source',
                                                    {
                                                        type: 'image/webp',
                                                        srcSet: j.srcSetWebp,
                                                        sizes: j.sizes,
                                                    }
                                                ),
                                            l.default.createElement(b, {
                                                alt: a,
                                                title: t,
                                                width: j.width,
                                                height: j.height,
                                                sizes: j.sizes,
                                                src: j.src,
                                                crossOrigin: this.props
                                                    .crossOrigin,
                                                srcSet: j.srcSet,
                                                style: L,
                                                ref: this.imageRef,
                                                onLoad: this.handleImageLoaded,
                                                onError: this.props.onError,
                                                itemProp: S,
                                                nativeLazyLoadSupported: N,
                                                loading: w,
                                            })
                                        ),
                                    this.state.hasNoScript &&
                                        l.default.createElement('noscript', {
                                            dangerouslySetInnerHTML: {
                                                __html: m(
                                                    (0, c.default)(
                                                        {
                                                            alt: a,
                                                            title: t,
                                                            loading: w,
                                                        },
                                                        j
                                                    )
                                                ),
                                            },
                                        })
                                )
                            );
                        }
                        return null;
                    }),
                    t
                );
            })(l.default.Component);
            y.defaultProps = {
                fadeIn: !0,
                durationFadeIn: 500,
                alt: '',
                Tag: 'div',
                loading: 'lazy',
            };
            var v = u.default.shape({
                    width: u.default.number.isRequired,
                    height: u.default.number.isRequired,
                    src: u.default.string.isRequired,
                    srcSet: u.default.string.isRequired,
                    base64: u.default.string,
                    tracedSVG: u.default.string,
                    srcWebp: u.default.string,
                    srcSetWebp: u.default.string,
                }),
                E = u.default.shape({
                    aspectRatio: u.default.number.isRequired,
                    src: u.default.string.isRequired,
                    srcSet: u.default.string.isRequired,
                    sizes: u.default.string.isRequired,
                    base64: u.default.string,
                    tracedSVG: u.default.string,
                    srcWebp: u.default.string,
                    srcSetWebp: u.default.string,
                });
            y.propTypes = {
                resolutions: v,
                sizes: E,
                fixed: v,
                fluid: E,
                fadeIn: u.default.bool,
                durationFadeIn: u.default.number,
                title: u.default.string,
                alt: u.default.string,
                className: u.default.oneOfType([
                    u.default.string,
                    u.default.object,
                ]),
                critical: u.default.bool,
                crossOrigin: u.default.oneOfType([
                    u.default.string,
                    u.default.bool,
                ]),
                style: u.default.object,
                imgStyle: u.default.object,
                placeholderStyle: u.default.object,
                placeholderClassName: u.default.string,
                backgroundColor: u.default.oneOfType([
                    u.default.string,
                    u.default.bool,
                ]),
                onLoad: u.default.func,
                onError: u.default.func,
                onStartLoad: u.default.func,
                Tag: u.default.string,
                itemProp: u.default.string,
                loading: u.default.oneOf(['auto', 'lazy', 'eager']),
            };
            var S = y;
            t.default = S;
        },
        177: function(e, t, a) {
            var r = a(87),
                n = a(62).concat('length', 'prototype');
            t.f =
                Object.getOwnPropertyNames ||
                function(e) {
                    return r(e, n);
                };
        },
        178: function(e, t, a) {
            var r = a(88),
                n = a(61),
                i = a(41),
                s = a(84),
                o = a(29),
                c = a(86),
                l = Object.getOwnPropertyDescriptor;
            t.f = a(18)
                ? l
                : function(e, t) {
                      if (((e = i(e)), (t = s(t, !0)), c))
                          try {
                              return l(e, t);
                          } catch (a) {}
                      if (o(e, t)) return n(!r.f.call(e, t), e[t]);
                  };
        },
        179: function(e, t, a) {
            'use strict';
            var r = a(8),
                n = a.n(r),
                i = a(0),
                s = a.n(i),
                o = a(59),
                c = (function(e) {
                    function t(t) {
                        return e.call(this, t) || this;
                    }
                    return (
                        n()(t, e),
                        (t.prototype.render = function() {
                            return s.a.createElement(
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
                                s.a.createElement(
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
                })(s.a.Component);
            t.a = Object(o.b)(function(e) {
                return {
                    readerBgColor: e.readerBgColor,
                    readerColor: e.readerColor,
                    readerFont: e.readerFont,
                };
            }, null)(c);
        },
        180: function(e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var r = a(181);
            t.createLocalStorage = function(e) {
                void 0 === e && (e = {});
                var t = e.mode || 'auto',
                    n = 'auto' === t ? r.autoSelectMode() : t;
                if ('browser' === n) return window.localStorage;
                if ('node' === n)
                    throw new Error('Can not select "node" mode in browser');
                if ('memory' === n) return a(182);
                throw new Error('Unknown mode:' + n);
            };
        },
        181: function(e, t, a) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.autoSelectMode = function() {
                    return 'object' == typeof window && window.localStorage
                        ? 'browser'
                        : 'node';
                });
        },
        182: function(e, t, a) {
            var r, n;
            (n = {}),
                ((r = {}).length = 0),
                (r.getItem = function(e) {
                    return e in n ? n[e] : null;
                }),
                (r.setItem = function(e, t) {
                    void 0 === t
                        ? r.removeItem(e)
                        : (n.hasOwnProperty(e) || r.length++, (n[e] = '' + t));
                }),
                (r.removeItem = function(e) {
                    n.hasOwnProperty(e) && (delete n[e], r.length--);
                }),
                (r.key = function(e) {
                    return Object.keys(n)[e] || null;
                }),
                (r.clear = function() {
                    (n = {}), (r.length = 0);
                }),
                (e.exports = r);
        },
        202: function(e, t, a) {
            'use strict';
            var r = a(6),
                n = a(29),
                i = a(15),
                s = a(203),
                o = a(84),
                c = a(19),
                l = a(177).f,
                u = a(178).f,
                d = a(28).f,
                f = a(205).trim,
                p = r.Number,
                g = p,
                h = p.prototype,
                m = 'Number' == i(a(91)(h)),
                b = 'trim' in String.prototype,
                y = function(e) {
                    var t = o(e, !1);
                    if ('string' == typeof t && t.length > 2) {
                        var a,
                            r,
                            n,
                            i = (t = b ? t.trim() : f(t, 3)).charCodeAt(0);
                        if (43 === i || 45 === i) {
                            if (88 === (a = t.charCodeAt(2)) || 120 === a)
                                return NaN;
                        } else if (48 === i) {
                            switch (t.charCodeAt(1)) {
                                case 66:
                                case 98:
                                    (r = 2), (n = 49);
                                    break;
                                case 79:
                                case 111:
                                    (r = 8), (n = 55);
                                    break;
                                default:
                                    return +t;
                            }
                            for (
                                var s, c = t.slice(2), l = 0, u = c.length;
                                l < u;
                                l++
                            )
                                if ((s = c.charCodeAt(l)) < 48 || s > n)
                                    return NaN;
                            return parseInt(c, r);
                        }
                    }
                    return +t;
                };
            if (!p(' 0o1') || !p('0b1') || p('+0x1')) {
                p = function(e) {
                    var t = arguments.length < 1 ? 0 : e,
                        a = this;
                    return a instanceof p &&
                        (m
                            ? c(function() {
                                  h.valueOf.call(a);
                              })
                            : 'Number' != i(a))
                        ? s(new g(y(t)), a, p)
                        : y(t);
                };
                for (
                    var v,
                        E = a(18)
                            ? l(g)
                            : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'.split(
                                  ','
                              ),
                        S = 0;
                    E.length > S;
                    S++
                )
                    n(g, (v = E[S])) && !n(p, v) && d(p, v, u(g, v));
                (p.prototype = h), (h.constructor = p), a(16)(r, 'Number', p);
            }
        },
        203: function(e, t, a) {
            var r = a(11),
                n = a(204).set;
            e.exports = function(e, t, a) {
                var i,
                    s = t.constructor;
                return (
                    s !== a &&
                        'function' == typeof s &&
                        (i = s.prototype) !== a.prototype &&
                        r(i) &&
                        n &&
                        n(e, i),
                    e
                );
            };
        },
        204: function(e, t, a) {
            var r = a(11),
                n = a(7),
                i = function(e, t) {
                    if ((n(e), !r(t) && null !== t))
                        throw TypeError(t + ": can't set as prototype!");
                };
            e.exports = {
                set:
                    Object.setPrototypeOf ||
                    ('__proto__' in {}
                        ? (function(e, t, r) {
                              try {
                                  (r = a(20)(
                                      Function.call,
                                      a(178).f(Object.prototype, '__proto__')
                                          .set,
                                      2
                                  ))(e, []),
                                      (t = !(e instanceof Array));
                              } catch (n) {
                                  t = !0;
                              }
                              return function(e, a) {
                                  return (
                                      i(e, a),
                                      t ? (e.__proto__ = a) : r(e, a),
                                      e
                                  );
                              };
                          })({}, !1)
                        : void 0),
                check: i,
            };
        },
        205: function(e, t, a) {
            var r = a(13),
                n = a(22),
                i = a(19),
                s = a(206),
                o = '[' + s + ']',
                c = RegExp('^' + o + o + '*'),
                l = RegExp(o + o + '*$'),
                u = function(e, t, a) {
                    var n = {},
                        o = i(function() {
                            return !!s[e]() || '​' != '​'[e]();
                        }),
                        c = (n[e] = o ? t(d) : s[e]);
                    a && (n[a] = c), r(r.P + r.F * o, 'String', n);
                },
                d = (u.trim = function(e, t) {
                    return (
                        (e = String(n(e))),
                        1 & t && (e = e.replace(c, '')),
                        2 & t && (e = e.replace(l, '')),
                        e
                    );
                });
            e.exports = u;
        },
        206: function(e, t) {
            e.exports = '\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff';
        },
    },
]);
//# sourceMappingURL=component---src-pages-gallery-js-bd259a2de89c7126e616.js.map
