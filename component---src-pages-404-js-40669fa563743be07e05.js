(window.webpackJsonp = window.webpackJsonp || []).push([
    [3],
    {
        153: function(e, t, a) {
            'use strict';
            a.r(t);
            var n = a(0),
                r = a.n(n),
                i = a(167),
                s = a(165);
            t.default = function() {
                return r.a.createElement(
                    i.a,
                    null,
                    r.a.createElement(s.a, { title: '404: Not found' }),
                    r.a.createElement('h1', null, 'NOT FOUND'),
                    r.a.createElement(
                        'p',
                        null,
                        "You just hit a route that doesn't exist... the sadness."
                    )
                );
            };
        },
        159: function(e, t, a) {
            'use strict';
            a.d(t, 'b', function() {
                return u;
            });
            var n = a(0),
                r = a.n(n),
                i = a(1),
                s = a.n(i),
                c = a(37),
                o = a.n(c);
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
            }),
                a.d(t, 'b', function() {
                    return i;
                });
            var n = a(23);
            function r(e) {
                return { type: n.a, bgColor: e };
            }
            function i(e) {
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
                i = a(1),
                s = a.n(i),
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
                i = a.n(r),
                s = a(1),
                c = a.n(s),
                o = a(175),
                l = a.n(o);
            function u(e) {
                var t = e.description,
                    a = e.lang,
                    r = e.meta,
                    s = e.title,
                    c = n.data.site,
                    o = t || c.siteMetadata.description;
                return i.a.createElement(
                    l.a,
                    {
                        htmlAttributes: { lang: a },
                        title: s,
                        titleTemplate: '%s | ' + c.siteMetadata.title,
                        meta: [
                            { name: 'description', content: o },
                            { property: 'og:title', content: s },
                            { property: 'og:description', content: o },
                            { property: 'og:type', content: 'website' },
                            { name: 'twitter:card', content: 'summary' },
                            {
                                name: 'twitter:creator',
                                content: c.siteMetadata.author,
                            },
                            { name: 'twitter:title', content: s },
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
                    description: c.a.string,
                    lang: c.a.string,
                    meta: c.a.arrayOf(c.a.object),
                    title: c.a.string.isRequired,
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
                i = a.n(r),
                s = a(1),
                c = a.n(s),
                o = a(159),
                l = (a(171), a(38)),
                u = a.n(l),
                m = a(8),
                p = a.n(m),
                d = a(59),
                g = a(160),
                f = a(172),
                h = a.n(f),
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
                                                src: a(164),
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
                v = (a(174),
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
            v.propTypes = { children: c.a.node.isRequired };
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
    },
]);
//# sourceMappingURL=component---src-pages-404-js-40669fa563743be07e05.js.map