(window.webpackJsonp = window.webpackJsonp || []).push([
    [8],
    {
        156: function(e, t, a) {
            'use strict';
            a.r(t);
            var r = a(0),
                n = a.n(r),
                i = a(160),
                s = a(168),
                o = (a(169), a(166)),
                l = a(59),
                c = a(161);
            t.default = Object(l.b)(
                function(e) {
                    return { bgColor: e.bgColor };
                },
                function(e) {
                    return {
                        changeBG: function(t) {
                            return e(Object(c.a)(t));
                        },
                    };
                }
            )(function(e) {
                return (
                    (0, e.changeBG)('white'),
                    n.a.createElement(
                        s.a,
                        null,
                        n.a.createElement(o.a, { title: 'Tracker' }),
                        n.a.createElement('h1', null, 'Hi people'),
                        n.a.createElement(
                            'p',
                            null,
                            'Welcome to your new Gatsby site.'
                        ),
                        n.a.createElement(
                            'p',
                            null,
                            'Now go build something great.'
                        ),
                        n.a.createElement(
                            i.a,
                            { to: '/page-2/' },
                            'Go to page 2'
                        )
                    )
                );
            });
        },
        160: function(e, t, a) {
            'use strict';
            a.d(t, 'b', function() {
                return d;
            });
            var r = a(0),
                n = a.n(r),
                i = a(1),
                s = a.n(i),
                o = a(37),
                l = a.n(o);
            a.d(t, 'a', function() {
                return l.a;
            }),
                a.d(t, 'c', function() {
                    return o.navigate;
                });
            a(162);
            var c = n.a.createContext({}),
                d = function(e) {
                    return n.a.createElement(c.Consumer, null, function(t) {
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
            d.propTypes = {
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
                l = a(3),
                c = function(e) {
                    var t = e.location,
                        a = l.default.getResourcesForPathnameSync(t.pathname);
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
            (c.propTypes = {
                location: s.a.shape({ pathname: s.a.string.isRequired })
                    .isRequired,
            }),
                (t.default = c);
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
                l = a(176),
                c = a.n(l);
            function d(e) {
                var t = e.description,
                    a = e.lang,
                    n = e.meta,
                    s = e.title,
                    o = r.data.site,
                    l = t || o.siteMetadata.description;
                return i.a.createElement(
                    c.a,
                    {
                        htmlAttributes: { lang: a },
                        title: s,
                        titleTemplate: '%s | ' + o.siteMetadata.title,
                        meta: [
                            { name: 'description', content: l },
                            { property: 'og:title', content: s },
                            { property: 'og:description', content: l },
                            { property: 'og:type', content: 'website' },
                            { name: 'twitter:card', content: 'summary' },
                            {
                                name: 'twitter:creator',
                                content: o.siteMetadata.author,
                            },
                            { name: 'twitter:title', content: s },
                            { name: 'twitter:description', content: l },
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
            (d.defaultProps = { lang: 'en', meta: [], description: '' }),
                (d.propTypes = {
                    description: o.a.string,
                    lang: o.a.string,
                    meta: o.a.arrayOf(o.a.object),
                    title: o.a.string.isRequired,
                }),
                (t.a = d);
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
                l = a(160),
                c = (a(172), a(38)),
                d = a.n(c),
                u = a(8),
                f = a.n(u),
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
                            (a.toggleNav = a.toggleNav.bind(d()(a))),
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
                                                        l.a,
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
                    return i.a.createElement(l.b, {
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
        171: function(e, t, a) {
            'use strict';
            var r = a(9);
            (t.__esModule = !0), (t.default = void 0);
            var n,
                i = r(a(8)),
                s = r(a(38)),
                o = r(a(82)),
                l = r(a(83)),
                c = r(a(0)),
                d = r(a(1)),
                u = function(e) {
                    var t = (0, l.default)({}, e);
                    return (
                        t.resolutions &&
                            ((t.fixed = t.resolutions), delete t.resolutions),
                        t.sizes && ((t.fluid = t.sizes), delete t.sizes),
                        t
                    );
                },
                f = Object.create({}),
                p = function(e) {
                    var t = u(e),
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
                        l = e.height ? 'height="' + e.height + '" ' : '',
                        c = e.crossOrigin
                            ? 'crossorigin="' + e.crossOrigin + '" '
                            : '';
                    return (
                        '<picture>' +
                        r +
                        '<img ' +
                        (e.loading ? 'loading="' + e.loading + '" ' : '') +
                        o +
                        l +
                        a +
                        n +
                        t +
                        s +
                        i +
                        c +
                        'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
                    );
                },
                b = c.default.forwardRef(function(e, t) {
                    var a = e.sizes,
                        r = e.srcSet,
                        n = e.src,
                        i = e.style,
                        s = e.onLoad,
                        d = e.onError,
                        u = e.nativeLazyLoadSupported,
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
                        u && (g.loading = f),
                        c.default.createElement(
                            'img',
                            (0, l.default)(
                                { sizes: a, srcSet: r, src: n },
                                p,
                                { onLoad: s, onError: d, ref: t },
                                g,
                                {
                                    style: (0, l.default)(
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
                style: d.default.object,
                onError: d.default.func,
                onLoad: d.default.func,
            };
            var y = (function(e) {
                function t(t) {
                    var a;
                    a = e.call(this, t) || this;
                    var r = !0,
                        n = !1,
                        i = t.fadeIn,
                        o = !1,
                        l = p(t);
                    !l &&
                        'undefined' != typeof window &&
                        window.IntersectionObserver &&
                        ((r = !1), (n = !0)),
                        'undefined' != typeof HTMLImageElement &&
                            'loading' in HTMLImageElement.prototype &&
                            ((r = !0), (o = !0)),
                        'undefined' == typeof window && (r = !1),
                        t.critical && ((r = !0), (n = !1));
                    var d = !(t.critical && !t.fadeIn);
                    return (
                        (a.state = {
                            isVisible: r,
                            imgLoaded: !1,
                            imgCached: !1,
                            IOSupported: n,
                            fadeIn: i,
                            hasNoScript: d,
                            seenBefore: l,
                            nativeLazyLoadSupported: o,
                        }),
                        (a.imageRef = c.default.createRef()),
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
                            (t = u(e)),
                            (a = t.fluid ? t.fluid.src : t.fixed.src),
                            (f[a] = !0),
                            this.setState({ imgLoaded: !0 }),
                            this.state.seenBefore &&
                                this.setState({ fadeIn: !1 }),
                            this.props.onLoad && this.props.onLoad();
                    }),
                    (a.render = function() {
                        var e = u(this.props),
                            t = e.title,
                            a = e.alt,
                            r = e.className,
                            n = e.style,
                            i = void 0 === n ? {} : n,
                            s = e.imgStyle,
                            o = void 0 === s ? {} : s,
                            d = e.placeholderStyle,
                            f = void 0 === d ? {} : d,
                            p = e.placeholderClassName,
                            g = e.fluid,
                            h = e.fixed,
                            y = e.backgroundColor,
                            v = e.durationFadeIn,
                            S = e.Tag,
                            E = e.itemProp,
                            w = (e.critical, u(this.props).loading);
                        var L = this.state.nativeLazyLoadSupported,
                            C =
                                this.state.imgLoaded ||
                                !1 === this.state.fadeIn,
                            z =
                                !0 === this.state.fadeIn &&
                                !this.state.imgCached,
                            R = (0, l.default)(
                                {
                                    opacity: C ? 1 : 0,
                                    transition: z
                                        ? 'opacity ' + v + 'ms'
                                        : 'none',
                                },
                                o
                            ),
                            N = 'boolean' == typeof y ? 'lightgray' : y,
                            A = { transitionDelay: v + 'ms' },
                            I = (0, l.default)(
                                { opacity: this.state.imgLoaded ? 0 : 1 },
                                z && A,
                                o,
                                f
                            ),
                            O = {
                                title: t,
                                alt: this.state.isVisible ? '' : a,
                                style: I,
                                className: p,
                            };
                        if (g) {
                            var q = g;
                            return c.default.createElement(
                                S,
                                {
                                    className:
                                        (r || '') + ' gatsby-image-wrapper',
                                    style: (0, l.default)(
                                        {
                                            position: 'relative',
                                            overflow: 'hidden',
                                        },
                                        i
                                    ),
                                    ref: this.handleRef,
                                    key: 'fluid-' + JSON.stringify(q.srcSet),
                                },
                                c.default.createElement(S, {
                                    style: {
                                        width: '100%',
                                        paddingBottom:
                                            100 / q.aspectRatio + '%',
                                    },
                                }),
                                N &&
                                    c.default.createElement(S, {
                                        title: t,
                                        style: (0, l.default)(
                                            {
                                                backgroundColor: N,
                                                position: 'absolute',
                                                top: 0,
                                                bottom: 0,
                                                opacity: this.state.imgLoaded
                                                    ? 0
                                                    : 1,
                                                right: 0,
                                                left: 0,
                                            },
                                            z && A
                                        ),
                                    }),
                                q.base64 &&
                                    c.default.createElement(
                                        b,
                                        (0, l.default)({ src: q.base64 }, O)
                                    ),
                                q.tracedSVG &&
                                    c.default.createElement(
                                        b,
                                        (0, l.default)({ src: q.tracedSVG }, O)
                                    ),
                                this.state.isVisible &&
                                    c.default.createElement(
                                        'picture',
                                        null,
                                        q.srcSetWebp &&
                                            c.default.createElement('source', {
                                                type: 'image/webp',
                                                srcSet: q.srcSetWebp,
                                                sizes: q.sizes,
                                            }),
                                        c.default.createElement(b, {
                                            alt: a,
                                            title: t,
                                            sizes: q.sizes,
                                            src: q.src,
                                            crossOrigin: this.props.crossOrigin,
                                            srcSet: q.srcSet,
                                            style: R,
                                            ref: this.imageRef,
                                            onLoad: this.handleImageLoaded,
                                            onError: this.props.onError,
                                            itemProp: E,
                                            nativeLazyLoadSupported: L,
                                            loading: w,
                                        })
                                    ),
                                this.state.hasNoScript &&
                                    c.default.createElement('noscript', {
                                        dangerouslySetInnerHTML: {
                                            __html: m(
                                                (0, l.default)(
                                                    {
                                                        alt: a,
                                                        title: t,
                                                        loading: w,
                                                    },
                                                    q
                                                )
                                            ),
                                        },
                                    })
                            );
                        }
                        if (h) {
                            var T = h,
                                W = (0, l.default)(
                                    {
                                        position: 'relative',
                                        overflow: 'hidden',
                                        display: 'inline-block',
                                        width: T.width,
                                        height: T.height,
                                    },
                                    i
                                );
                            return (
                                'inherit' === i.display && delete W.display,
                                c.default.createElement(
                                    S,
                                    {
                                        className:
                                            (r || '') + ' gatsby-image-wrapper',
                                        style: W,
                                        ref: this.handleRef,
                                        key:
                                            'fixed-' + JSON.stringify(T.srcSet),
                                    },
                                    N &&
                                        c.default.createElement(S, {
                                            title: t,
                                            style: (0, l.default)(
                                                {
                                                    backgroundColor: N,
                                                    width: T.width,
                                                    opacity: this.state
                                                        .imgLoaded
                                                        ? 0
                                                        : 1,
                                                    height: T.height,
                                                },
                                                z && A
                                            ),
                                        }),
                                    T.base64 &&
                                        c.default.createElement(
                                            b,
                                            (0, l.default)({ src: T.base64 }, O)
                                        ),
                                    T.tracedSVG &&
                                        c.default.createElement(
                                            b,
                                            (0, l.default)(
                                                { src: T.tracedSVG },
                                                O
                                            )
                                        ),
                                    this.state.isVisible &&
                                        c.default.createElement(
                                            'picture',
                                            null,
                                            T.srcSetWebp &&
                                                c.default.createElement(
                                                    'source',
                                                    {
                                                        type: 'image/webp',
                                                        srcSet: T.srcSetWebp,
                                                        sizes: T.sizes,
                                                    }
                                                ),
                                            c.default.createElement(b, {
                                                alt: a,
                                                title: t,
                                                width: T.width,
                                                height: T.height,
                                                sizes: T.sizes,
                                                src: T.src,
                                                crossOrigin: this.props
                                                    .crossOrigin,
                                                srcSet: T.srcSet,
                                                style: R,
                                                ref: this.imageRef,
                                                onLoad: this.handleImageLoaded,
                                                onError: this.props.onError,
                                                itemProp: E,
                                                nativeLazyLoadSupported: L,
                                                loading: w,
                                            })
                                        ),
                                    this.state.hasNoScript &&
                                        c.default.createElement('noscript', {
                                            dangerouslySetInnerHTML: {
                                                __html: m(
                                                    (0, l.default)(
                                                        {
                                                            alt: a,
                                                            title: t,
                                                            loading: w,
                                                        },
                                                        T
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
            })(c.default.Component);
            y.defaultProps = {
                fadeIn: !0,
                durationFadeIn: 500,
                alt: '',
                Tag: 'div',
                loading: 'lazy',
            };
            var v = d.default.shape({
                    width: d.default.number.isRequired,
                    height: d.default.number.isRequired,
                    src: d.default.string.isRequired,
                    srcSet: d.default.string.isRequired,
                    base64: d.default.string,
                    tracedSVG: d.default.string,
                    srcWebp: d.default.string,
                    srcSetWebp: d.default.string,
                }),
                S = d.default.shape({
                    aspectRatio: d.default.number.isRequired,
                    src: d.default.string.isRequired,
                    srcSet: d.default.string.isRequired,
                    sizes: d.default.string.isRequired,
                    base64: d.default.string,
                    tracedSVG: d.default.string,
                    srcWebp: d.default.string,
                    srcSetWebp: d.default.string,
                });
            y.propTypes = {
                resolutions: v,
                sizes: S,
                fixed: v,
                fluid: S,
                fadeIn: d.default.bool,
                durationFadeIn: d.default.number,
                title: d.default.string,
                alt: d.default.string,
                className: d.default.oneOfType([
                    d.default.string,
                    d.default.object,
                ]),
                critical: d.default.bool,
                crossOrigin: d.default.oneOfType([
                    d.default.string,
                    d.default.bool,
                ]),
                style: d.default.object,
                imgStyle: d.default.object,
                placeholderStyle: d.default.object,
                placeholderClassName: d.default.string,
                backgroundColor: d.default.oneOfType([
                    d.default.string,
                    d.default.bool,
                ]),
                onLoad: d.default.func,
                onError: d.default.func,
                onStartLoad: d.default.func,
                Tag: d.default.string,
                itemProp: d.default.string,
                loading: d.default.oneOf(['auto', 'lazy', 'eager']),
            };
            var E = y;
            t.default = E;
        },
    },
]);
//# sourceMappingURL=component---src-pages-tracker-js-7356bd770e2ccf9d650b.js.map
