(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        299: function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            var react = __webpack_require__(0),
                react_default = __webpack_require__.n(react),
                browser_es5_es = __webpack_require__(298),
                dist_browser_es5_es = __webpack_require__(75),
                base_provider = __webpack_require__(653),
                prop_types = __webpack_require__(6),
                creator = __webpack_require__(188),
                light_theme_primitives = __webpack_require__(190),
                NextMovieTheme = Object(creator.a)(light_theme_primitives.a, {
                    name: 'next-movie-theme',
                    colors: {
                        buttonPrimaryFill: '#F9B248',
                        buttonPrimaryText: '#0E2431',
                        buttonPrimaryHover: '#fcaa2d',
                        buttonPrimaryActive: '#faa420',
                        buttonPrimarySelectedFill: '#faa420',
                        buttonPrimarySelectedText: '#0E2431',
                        buttonPrimarySpinnerForeground: '#fcb649',
                        buttonPrimarySpinnerBackground: '#f59c14',
                        background: '#0e2431',
                        backgroundAlt: '#e8d5b7',
                        colorPrimary: '#fc3a52',
                        colorSecondary: '#f9b248'
                    }
                }),
                engine = new browser_es5_es.a(),
                GlobalStyles = function(_ref) {
                    var children = _ref.children;
                    return react_default.a.createElement(
                        dist_browser_es5_es.a,
                        { value: engine },
                        react_default.a.createElement(
                            base_provider.a,
                            { theme: NextMovieTheme },
                            children
                        )
                    );
                };
            (GlobalStyles.displayName = 'GlobalStyles'),
                (GlobalStyles.propTypes = {
                    children: prop_types.node.isRequired
                }),
                (GlobalStyles.__docgenInfo = {
                    description: '',
                    methods: [],
                    displayName: 'GlobalStyles',
                    props: {
                        children: {
                            type: { name: 'node' },
                            required: !0,
                            description: ''
                        }
                    }
                }),
                'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                    (STORYBOOK_REACT_CLASSES['src/styles/global-styles.js'] = {
                        name: 'GlobalStyles',
                        docgenInfo: GlobalStyles.__docgenInfo,
                        path: 'src/styles/global-styles.js'
                    }),
                __webpack_require__.d(__webpack_exports__, 'a', function() {
                    return GlobalStyles;
                });
        },
        312: function(module, exports, __webpack_require__) {
            __webpack_require__(313),
                __webpack_require__(422),
                (module.exports = __webpack_require__(423));
        },
        334: function(module, exports) {},
        423: function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                function(module) {
                    var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                            0
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
                            react__WEBPACK_IMPORTED_MODULE_0__
                        ),
                        _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                            102
                        ),
                        _storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                            293
                        ),
                        _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                            294
                        ),
                        _src_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                            299
                        );
                    Object(
                        _storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator
                    )(function(story) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _src_styles__WEBPACK_IMPORTED_MODULE_4__.a,
                            null,
                            story()
                        );
                    }),
                        Object(
                            _storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator
                        )(
                            _storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_2__.withA11y
                        ),
                        Object(
                            _storybook_react__WEBPACK_IMPORTED_MODULE_1__.addParameters
                        )({
                            viewport: {
                                viewports:
                                    _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_3__.INITIAL_VIEWPORTS
                            }
                        }),
                        Object(
                            _storybook_react__WEBPACK_IMPORTED_MODULE_1__.configure
                        )(__webpack_require__(629), module);
                }.call(this, __webpack_require__(424)(module));
        },
        57: function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.d(__webpack_exports__, 'a', function() {
                return Button;
            });
            __webpack_require__(11),
                __webpack_require__(74),
                __webpack_require__(18),
                __webpack_require__(13);
            var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0),
                react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
                    react__WEBPACK_IMPORTED_MODULE_4__
                ),
                baseui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    4
                ),
                baseui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    648
                ),
                prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                    6
                );
            function _extends() {
                return (_extends =
                    Object.assign ||
                    function(target) {
                        for (var source, i = 1; i < arguments.length; i++)
                            for (var key in (source = arguments[i]))
                                Object.prototype.hasOwnProperty.call(
                                    source,
                                    key
                                ) && (target[key] = source[key]);
                        return target;
                    }).apply(this, arguments);
            }
            function _objectWithoutProperties(source, excluded) {
                if (null == source) return {};
                var key,
                    i,
                    target = (function _objectWithoutPropertiesLoose(
                        source,
                        excluded
                    ) {
                        if (null == source) return {};
                        var key,
                            i,
                            target = {},
                            sourceKeys = Object.keys(source);
                        for (i = 0; i < sourceKeys.length; i++)
                            (key = sourceKeys[i]),
                                0 <= excluded.indexOf(key) ||
                                    (target[key] = source[key]);
                        return target;
                    })(source, excluded);
                if (Object.getOwnPropertySymbols) {
                    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
                    for (i = 0; i < sourceSymbolKeys.length; i++)
                        (key = sourceSymbolKeys[i]),
                            !(0 <= excluded.indexOf(key)) &&
                                Object.prototype.propertyIsEnumerable.call(
                                    source,
                                    key
                                ) &&
                                (target[key] = source[key]);
                }
                return target;
            }
            var mapButtonVariantToKind = function(type) {
                    return 'primary' === type
                        ? baseui_button__WEBPACK_IMPORTED_MODULE_5__.a.primary
                        : 'secondary' === type
                        ? baseui_button__WEBPACK_IMPORTED_MODULE_5__.a.secondary
                        : baseui_button__WEBPACK_IMPORTED_MODULE_5__.a.minimal;
                },
                mapButtonSize = function(size) {
                    return 'large' === size
                        ? baseui_button__WEBPACK_IMPORTED_MODULE_5__.c.large
                        : baseui_button__WEBPACK_IMPORTED_MODULE_5__.c.compact;
                },
                Button = function(_ref) {
                    var children = _ref.children,
                        size = _ref.size,
                        variant = (_ref.type, _ref.variant),
                        rest = _objectWithoutProperties(_ref, [
                            'children',
                            'size',
                            'type',
                            'variant'
                        ]);
                    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                        baseui_button__WEBPACK_IMPORTED_MODULE_6__.a,
                        _extends(
                            {
                                size: mapButtonSize(size),
                                kind: mapButtonVariantToKind(variant)
                            },
                            rest
                        ),
                        children
                    );
                };
            (Button.displayName = 'Button'),
                (Button.propTypes = {
                    children: Object(
                        prop_types__WEBPACK_IMPORTED_MODULE_7__.oneOfType
                    )([
                        Object(prop_types__WEBPACK_IMPORTED_MODULE_7__.arrayOf)(
                            prop_types__WEBPACK_IMPORTED_MODULE_7__.node
                        ),
                        prop_types__WEBPACK_IMPORTED_MODULE_7__.node
                    ]).isRequired,
                    size: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__.oneOf)(
                        ['default', 'large']
                    ),
                    type: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__.oneOf)(
                        ['submit', 'button', 'reset']
                    ),
                    variant: Object(
                        prop_types__WEBPACK_IMPORTED_MODULE_7__.oneOf
                    )(['default', 'primary', 'secondary'])
                }),
                (Button.defaultProps = {
                    size: 'default',
                    type: 'button',
                    variant: 'default'
                }),
                (Button.__docgenInfo = {
                    description: '',
                    methods: [],
                    displayName: 'Button',
                    props: {
                        size: {
                            defaultValue: { value: "'default'", computed: !1 },
                            type: {
                                name: 'enum',
                                value: [
                                    { value: "'default'", computed: !1 },
                                    { value: "'large'", computed: !1 }
                                ]
                            },
                            required: !1,
                            description: ''
                        },
                        type: {
                            defaultValue: { value: "'button'", computed: !1 },
                            type: {
                                name: 'enum',
                                value: [
                                    { value: "'submit'", computed: !1 },
                                    { value: "'button'", computed: !1 },
                                    { value: "'reset'", computed: !1 }
                                ]
                            },
                            required: !1,
                            description: ''
                        },
                        variant: {
                            defaultValue: { value: "'default'", computed: !1 },
                            type: {
                                name: 'enum',
                                value: [
                                    { value: "'default'", computed: !1 },
                                    { value: "'primary'", computed: !1 },
                                    { value: "'secondary'", computed: !1 }
                                ]
                            },
                            required: !1,
                            description: ''
                        },
                        children: {
                            type: {
                                name: 'union',
                                value: [
                                    {
                                        name: 'arrayOf',
                                        value: { name: 'node' }
                                    },
                                    { name: 'node' }
                                ]
                            },
                            required: !0,
                            description: ''
                        }
                    }
                }),
                'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                    (STORYBOOK_REACT_CLASSES[
                        'src/components/button/button.js'
                    ] = {
                        name: 'Button',
                        docgenInfo: Button.__docgenInfo,
                        path: 'src/components/button/button.js'
                    });
        },
        629: function(module, exports, __webpack_require__) {
            var map = {
                './button/button.stories.js': 630,
                './card/card.stories.js': 646,
                './modal/modal.stories.js': 644
            };
            function webpackContext(req) {
                var id = webpackContextResolve(req);
                return __webpack_require__(id);
            }
            function webpackContextResolve(req) {
                if (!__webpack_require__.o(map, req)) {
                    var e = new Error("Cannot find module '" + req + "'");
                    throw ((e.code = 'MODULE_NOT_FOUND'), e);
                }
                return map[req];
            }
            (webpackContext.keys = function webpackContextKeys() {
                return Object.keys(map);
            }),
                (webpackContext.resolve = webpackContextResolve),
                (module.exports = webpackContext),
                (webpackContext.id = 629);
        },
        630: function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(
                    __webpack_exports__,
                    'variant',
                    function() {
                        return variant;
                    }
                ),
                __webpack_require__.d(__webpack_exports__, 'size', function() {
                    return size;
                });
            __webpack_require__(18);
            var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
                react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
                    react__WEBPACK_IMPORTED_MODULE_1__
                ),
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    296
                ),
                _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57);
            function _extends() {
                return (_extends =
                    Object.assign ||
                    function(target) {
                        for (var source, i = 1; i < arguments.length; i++)
                            for (var key in (source = arguments[i]))
                                Object.prototype.hasOwnProperty.call(
                                    source,
                                    key
                                ) && (target[key] = source[key]);
                        return target;
                    }).apply(this, arguments);
            }
            var actions = {
                onClick: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                )('clicked')
            };
            __webpack_exports__.default = { title: 'Button' };
            var variant = function() {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            _button__WEBPACK_IMPORTED_MODULE_3__.a,
                            actions,
                            'Default'
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            _button__WEBPACK_IMPORTED_MODULE_3__.a,
                            _extends({}, actions, { variant: 'primary' }),
                            'Primary'
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            _button__WEBPACK_IMPORTED_MODULE_3__.a,
                            _extends({}, actions, { variant: 'secondary' }),
                            'Secondary'
                        )
                    );
                },
                size = function() {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            _button__WEBPACK_IMPORTED_MODULE_3__.a,
                            _extends({}, actions, { variant: 'secondary' }),
                            'Default'
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            _button__WEBPACK_IMPORTED_MODULE_3__.a,
                            _extends({}, actions, {
                                variant: 'primary',
                                size: 'large'
                            }),
                            'Large'
                        )
                    );
                };
            (variant.__docgenInfo = {
                description: '',
                methods: [],
                displayName: 'variant'
            }),
                'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                    (STORYBOOK_REACT_CLASSES[
                        'src/components/button/button.stories.js'
                    ] = {
                        name: 'variant',
                        docgenInfo: variant.__docgenInfo,
                        path: 'src/components/button/button.stories.js'
                    }),
                (size.__docgenInfo = {
                    description: '',
                    methods: [],
                    displayName: 'size'
                }),
                'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                    (STORYBOOK_REACT_CLASSES[
                        'src/components/button/button.stories.js'
                    ] = {
                        name: 'size',
                        docgenInfo: size.__docgenInfo,
                        path: 'src/components/button/button.stories.js'
                    });
        },
        644: function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__(11),
                __webpack_require__(23),
                __webpack_require__(24),
                __webpack_require__(35),
                __webpack_require__(22),
                __webpack_require__(53),
                __webpack_require__(15),
                __webpack_require__(54),
                __webpack_require__(25),
                __webpack_require__(26);
            var react = __webpack_require__(0),
                react_default = __webpack_require__.n(react),
                button_button = __webpack_require__(57),
                constants =
                    (__webpack_require__(74),
                    __webpack_require__(18),
                    __webpack_require__(13),
                    __webpack_require__(46)),
                modal = __webpack_require__(655),
                styled_components = __webpack_require__(76),
                prop_types = __webpack_require__(6);
            function _extends() {
                return (_extends =
                    Object.assign ||
                    function(target) {
                        for (var source, i = 1; i < arguments.length; i++)
                            for (var key in (source = arguments[i]))
                                Object.prototype.hasOwnProperty.call(
                                    source,
                                    key
                                ) && (target[key] = source[key]);
                        return target;
                    }).apply(this, arguments);
            }
            function _objectWithoutProperties(source, excluded) {
                if (null == source) return {};
                var key,
                    i,
                    target = (function _objectWithoutPropertiesLoose(
                        source,
                        excluded
                    ) {
                        if (null == source) return {};
                        var key,
                            i,
                            target = {},
                            sourceKeys = Object.keys(source);
                        for (i = 0; i < sourceKeys.length; i++)
                            (key = sourceKeys[i]),
                                0 <= excluded.indexOf(key) ||
                                    (target[key] = source[key]);
                        return target;
                    })(source, excluded);
                if (Object.getOwnPropertySymbols) {
                    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
                    for (i = 0; i < sourceSymbolKeys.length; i++)
                        (key = sourceSymbolKeys[i]),
                            !(0 <= excluded.indexOf(key)) &&
                                Object.prototype.propertyIsEnumerable.call(
                                    source,
                                    key
                                ) &&
                                (target[key] = source[key]);
                }
                return target;
            }
            var mapSize = function(size) {
                    return 'full' === size
                        ? constants.c.full
                        : 'auto' === size
                        ? constants.c.auto
                        : constants.c.default;
                },
                Modal = function(_ref) {
                    var children = _ref.children,
                        size = _ref.size,
                        title = _ref.title,
                        rest = _objectWithoutProperties(_ref, [
                            'children',
                            'size',
                            'title'
                        ]);
                    return react_default.a.createElement(
                        modal.a,
                        _extends(
                            {
                                animate: !0,
                                closeable: !0,
                                size: mapSize(size),
                                role: constants.b.dialog,
                                overrides: {
                                    Dialog: {
                                        style: function style(_ref2) {
                                            return {
                                                backgroundColor:
                                                    _ref2.$theme.colors
                                                        .backgroundAlt
                                            };
                                        }
                                    }
                                }
                            },
                            rest
                        ),
                        react_default.a.createElement(
                            styled_components.f,
                            null,
                            title
                        ),
                        react_default.a.createElement(
                            styled_components.e,
                            null,
                            children
                        )
                    );
                };
            function _slicedToArray(arr, i) {
                return (
                    (function _arrayWithHoles(arr) {
                        if (Array.isArray(arr)) return arr;
                    })(arr) ||
                    (function _iterableToArrayLimit(arr, i) {
                        if (
                            Symbol.iterator in Object(arr) ||
                            '[object Arguments]' ===
                                Object.prototype.toString.call(arr)
                        ) {
                            var _arr = [],
                                _n = !0,
                                _d = !1,
                                _e = void 0;
                            try {
                                for (
                                    var _s, _i = arr[Symbol.iterator]();
                                    !(_n = (_s = _i.next()).done) &&
                                    (_arr.push(_s.value),
                                    !i || _arr.length !== i);
                                    _n = !0
                                );
                            } catch (err) {
                                (_d = !0), (_e = err);
                            } finally {
                                try {
                                    _n || null == _i.return || _i.return();
                                } finally {
                                    if (_d) throw _e;
                                }
                            }
                            return _arr;
                        }
                    })(arr, i) ||
                    (function _nonIterableRest() {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance'
                        );
                    })()
                );
            }
            (Modal.displayName = 'Modal'),
                (Modal.propTypes = {
                    children: Object(prop_types.oneOfType)([
                        prop_types.node,
                        Object(prop_types.arrayOf)(prop_types.node)
                    ]).isRequired,
                    size: Object(prop_types.oneOf)(['default', 'full', 'auto']),
                    title: prop_types.string
                }),
                (Modal.defaultProps = { size: 'default', title: '' }),
                (Modal.__docgenInfo = {
                    description: '',
                    methods: [],
                    displayName: 'Modal',
                    props: {
                        size: {
                            defaultValue: { value: "'default'", computed: !1 },
                            type: {
                                name: 'enum',
                                value: [
                                    { value: "'default'", computed: !1 },
                                    { value: "'full'", computed: !1 },
                                    { value: "'auto'", computed: !1 }
                                ]
                            },
                            required: !1,
                            description: ''
                        },
                        title: {
                            defaultValue: { value: "''", computed: !1 },
                            type: { name: 'string' },
                            required: !1,
                            description: ''
                        },
                        children: {
                            type: {
                                name: 'union',
                                value: [
                                    { name: 'node' },
                                    { name: 'arrayOf', value: { name: 'node' } }
                                ]
                            },
                            required: !0,
                            description: ''
                        }
                    }
                }),
                'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                    (STORYBOOK_REACT_CLASSES[
                        'src/components/modal/modal.js'
                    ] = {
                        name: 'Modal',
                        docgenInfo: Modal.__docgenInfo,
                        path: 'src/components/modal/modal.js'
                    }),
                __webpack_require__.d(__webpack_exports__, 'size', function() {
                    return modal_stories_size;
                });
            __webpack_exports__.default = { title: 'Modal' };
            var ModalWrapper = function(_ref) {
                    var size = _ref.size,
                        _useState2 = _slicedToArray(
                            Object(react.useState)(!1),
                            2
                        ),
                        isOpen = _useState2[0],
                        setIsOpen = _useState2[1];
                    return react_default.a.createElement(
                        react_default.a.Fragment,
                        null,
                        react_default.a.createElement(
                            button_button.a,
                            {
                                onClick: function onClick() {
                                    return setIsOpen(!0);
                                },
                                variant: 'secondary'
                            },
                            'Open '.concat(size, ' modal')
                        ),
                        react_default.a.createElement(
                            Modal,
                            {
                                isOpen: isOpen,
                                onClose: function onClose() {
                                    return setIsOpen(!1);
                                },
                                size: size,
                                title: 'Sign in to Next Movie'
                            },
                            'Login'
                        )
                    );
                },
                _ref2 = react_default.a.createElement(ModalWrapper, {
                    size: 'default'
                }),
                _ref3 = react_default.a.createElement('br', null),
                _ref4 = react_default.a.createElement('br', null),
                _ref5 = react_default.a.createElement(ModalWrapper, {
                    size: 'full'
                }),
                _ref6 = react_default.a.createElement('br', null),
                _ref7 = react_default.a.createElement('br', null),
                _ref8 = react_default.a.createElement(ModalWrapper, {
                    size: 'auto'
                }),
                modal_stories_size = function() {
                    return react_default.a.createElement(
                        react_default.a.Fragment,
                        null,
                        _ref2,
                        _ref3,
                        _ref4,
                        _ref5,
                        _ref6,
                        _ref7,
                        _ref8
                    );
                };
            (modal_stories_size.__docgenInfo = {
                description: '',
                methods: [],
                displayName: 'size'
            }),
                'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                    (STORYBOOK_REACT_CLASSES[
                        'src/components/modal/modal.stories.js'
                    ] = {
                        name: 'size',
                        docgenInfo: modal_stories_size.__docgenInfo,
                        path: 'src/components/modal/modal.stories.js'
                    });
        },
        646: function(module, __webpack_exports__, __webpack_require__) {
            'use strict';
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__(18);
            var react = __webpack_require__(0),
                react_default = __webpack_require__.n(react),
                styled =
                    (__webpack_require__(11),
                    __webpack_require__(23),
                    __webpack_require__(24),
                    __webpack_require__(93),
                    __webpack_require__(16),
                    __webpack_require__(74),
                    __webpack_require__(35),
                    __webpack_require__(22),
                    __webpack_require__(53),
                    __webpack_require__(99),
                    __webpack_require__(1),
                    __webpack_require__(161),
                    __webpack_require__(643),
                    __webpack_require__(13),
                    __webpack_require__(15),
                    __webpack_require__(54),
                    __webpack_require__(25),
                    __webpack_require__(17),
                    __webpack_require__(26),
                    __webpack_require__(21)),
                card = __webpack_require__(654),
                styled_components = __webpack_require__(58),
                prop_types = __webpack_require__(6);
            function _extends() {
                return (_extends =
                    Object.assign ||
                    function(target) {
                        for (var source, i = 1; i < arguments.length; i++)
                            for (var key in (source = arguments[i]))
                                Object.prototype.hasOwnProperty.call(
                                    source,
                                    key
                                ) && (target[key] = source[key]);
                        return target;
                    }).apply(this, arguments);
            }
            function ownKeys(object, enumerableOnly) {
                var keys = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var symbols = Object.getOwnPropertySymbols(object);
                    enumerableOnly &&
                        (symbols = symbols.filter(function(sym) {
                            return Object.getOwnPropertyDescriptor(
                                object,
                                sym
                            ).enumerable;
                        })),
                        keys.push.apply(keys, symbols);
                }
                return keys;
            }
            function _defineProperty(obj, key, value) {
                return (
                    key in obj
                        ? Object.defineProperty(obj, key, {
                              value: value,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (obj[key] = value),
                    obj
                );
            }
            function _slicedToArray(arr, i) {
                return (
                    (function _arrayWithHoles(arr) {
                        if (Array.isArray(arr)) return arr;
                    })(arr) ||
                    (function _iterableToArrayLimit(arr, i) {
                        if (
                            Symbol.iterator in Object(arr) ||
                            '[object Arguments]' ===
                                Object.prototype.toString.call(arr)
                        ) {
                            var _arr = [],
                                _n = !0,
                                _d = !1,
                                _e = void 0;
                            try {
                                for (
                                    var _s, _i = arr[Symbol.iterator]();
                                    !(_n = (_s = _i.next()).done) &&
                                    (_arr.push(_s.value),
                                    !i || _arr.length !== i);
                                    _n = !0
                                );
                            } catch (err) {
                                (_d = !0), (_e = err);
                            } finally {
                                try {
                                    _n || null == _i.return || _i.return();
                                } finally {
                                    if (_d) throw _e;
                                }
                            }
                            return _arr;
                        }
                    })(arr, i) ||
                    (function _nonIterableRest() {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance'
                        );
                    })()
                );
            }
            function _objectWithoutProperties(source, excluded) {
                if (null == source) return {};
                var key,
                    i,
                    target = (function _objectWithoutPropertiesLoose(
                        source,
                        excluded
                    ) {
                        if (null == source) return {};
                        var key,
                            i,
                            target = {},
                            sourceKeys = Object.keys(source);
                        for (i = 0; i < sourceKeys.length; i++)
                            (key = sourceKeys[i]),
                                0 <= excluded.indexOf(key) ||
                                    (target[key] = source[key]);
                        return target;
                    })(source, excluded);
                if (Object.getOwnPropertySymbols) {
                    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
                    for (i = 0; i < sourceSymbolKeys.length; i++)
                        (key = sourceSymbolKeys[i]),
                            !(0 <= excluded.indexOf(key)) &&
                                Object.prototype.propertyIsEnumerable.call(
                                    source,
                                    key
                                ) &&
                                (target[key] = source[key]);
                }
                return target;
            }
            var mapSizeToWidth = function(size) {
                    return 'small' === size
                        ? '200px'
                        : 'large' === size
                        ? '300px'
                        : '250px';
                },
                Card = function(_ref) {
                    var title = _ref.title,
                        posterUrl = _ref.posterUrl,
                        releaseDate = _ref.releaseDate,
                        size = _ref.size,
                        rest = _objectWithoutProperties(_ref, [
                            'title',
                            'posterUrl',
                            'releaseDate',
                            'size'
                        ]),
                        theme = _slicedToArray(Object(styled.b)(), 2)[1];
                    return react_default.a.createElement(
                        card.a,
                        _extends(
                            {
                                overrides: {
                                    Root: {
                                        style: function style(_ref2) {
                                            return {
                                                backgroundColor:
                                                    _ref2.$theme.colors.primary,
                                                width: mapSizeToWidth(size)
                                            };
                                        }
                                    },
                                    Title: {
                                        style: function style(_ref3) {
                                            var $theme = _ref3.$theme;
                                            return (function _objectSpread(
                                                target
                                            ) {
                                                for (
                                                    var source, i = 1;
                                                    i < arguments.length;
                                                    i++
                                                )
                                                    (source =
                                                        null == arguments[i]
                                                            ? {}
                                                            : arguments[i]),
                                                        i % 2
                                                            ? ownKeys(
                                                                  source,
                                                                  !0
                                                              ).forEach(
                                                                  function(
                                                                      key
                                                                  ) {
                                                                      _defineProperty(
                                                                          target,
                                                                          key,
                                                                          source[
                                                                              key
                                                                          ]
                                                                      );
                                                                  }
                                                              )
                                                            : Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(
                                                                  target,
                                                                  Object.getOwnPropertyDescriptors(
                                                                      source
                                                                  )
                                                              )
                                                            : ownKeys(
                                                                  source
                                                              ).forEach(
                                                                  function(
                                                                      key
                                                                  ) {
                                                                      Object.defineProperty(
                                                                          target,
                                                                          key,
                                                                          Object.getOwnPropertyDescriptor(
                                                                              source,
                                                                              key
                                                                          )
                                                                      );
                                                                  }
                                                              );
                                                return target;
                                            })(
                                                {},
                                                'small' === size &&
                                                    $theme.typography.font350,
                                                {},
                                                'medium' === size &&
                                                    $theme.typography.font400,
                                                { color: $theme.colors.mono100 }
                                            );
                                        }
                                    }
                                },
                                headerImage: posterUrl,
                                title: title
                            },
                            rest
                        ),
                        react_default.a.createElement(
                            styled_components.b,
                            { style: { color: theme.colors.mono600 } },
                            releaseDate
                        )
                    );
                };
            function card_stories_extends() {
                return (card_stories_extends =
                    Object.assign ||
                    function(target) {
                        for (var source, i = 1; i < arguments.length; i++)
                            for (var key in (source = arguments[i]))
                                Object.prototype.hasOwnProperty.call(
                                    source,
                                    key
                                ) && (target[key] = source[key]);
                        return target;
                    }).apply(this, arguments);
            }
            (Card.displayName = 'Card'),
                (Card.propTypes = {
                    title: prop_types.string.isRequired,
                    posterUrl: prop_types.string,
                    releaseDate: prop_types.string.isRequired,
                    size: Object(prop_types.oneOf)(['small', 'medium', 'large'])
                }),
                (Card.defaultProps = { posterUrl: '', size: 'medium' }),
                (Card.__docgenInfo = {
                    description: '',
                    methods: [],
                    displayName: 'Card',
                    props: {
                        posterUrl: {
                            defaultValue: { value: "''", computed: !1 },
                            type: { name: 'string' },
                            required: !1,
                            description: ''
                        },
                        size: {
                            defaultValue: { value: "'medium'", computed: !1 },
                            type: {
                                name: 'enum',
                                value: [
                                    { value: "'small'", computed: !1 },
                                    { value: "'medium'", computed: !1 },
                                    { value: "'large'", computed: !1 }
                                ]
                            },
                            required: !1,
                            description: ''
                        },
                        title: {
                            type: { name: 'string' },
                            required: !0,
                            description: ''
                        },
                        releaseDate: {
                            type: { name: 'string' },
                            required: !0,
                            description: ''
                        }
                    }
                }),
                'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                    (STORYBOOK_REACT_CLASSES['src/components/card/card.js'] = {
                        name: 'Card',
                        docgenInfo: Card.__docgenInfo,
                        path: 'src/components/card/card.js'
                    }),
                __webpack_require__.d(__webpack_exports__, 'size', function() {
                    return card_stories_size;
                });
            var props = {
                    title: 'Downtown Abbey',
                    posterUrl:
                        'https://image.tmdb.org/t/p/w500/pWt1iRuhNpeVDNP2QiUT2C5OiBt.jpg',
                    releaseDate: 'September 20'
                },
                card_stories_ref =
                    ((__webpack_exports__.default = { title: 'Card' }),
                    react_default.a.createElement('p', null, 'Small')),
                _ref2 = react_default.a.createElement('p', null, 'Medium'),
                _ref3 = react_default.a.createElement('p', null, 'Large'),
                card_stories_size = function() {
                    return react_default.a.createElement(
                        'table',
                        null,
                        react_default.a.createElement(
                            'tbody',
                            null,
                            react_default.a.createElement(
                                'tr',
                                null,
                                react_default.a.createElement(
                                    'td',
                                    null,
                                    card_stories_ref,
                                    react_default.a.createElement(
                                        Card,
                                        card_stories_extends({}, props, {
                                            size: 'small'
                                        })
                                    )
                                ),
                                react_default.a.createElement(
                                    'td',
                                    null,
                                    _ref2,
                                    react_default.a.createElement(Card, props)
                                ),
                                react_default.a.createElement(
                                    'td',
                                    null,
                                    _ref3,
                                    react_default.a.createElement(
                                        Card,
                                        card_stories_extends({}, props, {
                                            size: 'large'
                                        })
                                    )
                                )
                            )
                        )
                    );
                };
            (card_stories_size.displayName = 'size'),
                (card_stories_size.__docgenInfo = {
                    description: '',
                    methods: [],
                    displayName: 'size'
                }),
                'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                    (STORYBOOK_REACT_CLASSES[
                        'src/components/card/card.stories.js'
                    ] = {
                        name: 'size',
                        docgenInfo: card_stories_size.__docgenInfo,
                        path: 'src/components/card/card.stories.js'
                    });
        }
    },
    [[312, 1, 2]]
]);
//# sourceMappingURL=main.4878c93e9e4c69f29aad.bundle.js.map
