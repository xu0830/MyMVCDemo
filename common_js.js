/*!
 * jQuery JavaScript Library v1.9.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-2-4
 */
(function (a2, aG) {
    var ai, w, aC = typeof aG,
        l = a2.document,
        aL = a2.location,
        bi = a2.jQuery,
        H = a2.$,
        aa = {},
        a6 = [],
        s = "1.9.1",
        aI = a6.concat,
        ao = a6.push,
        a4 = a6.slice,
        aM = a6.indexOf,
        z = aa.toString,
        V = aa.hasOwnProperty,
        aQ = s.trim,
        bJ = function (e, b3) {
            return new bJ.fn.init(e, b3, w)
        },
        bA = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ac = /\S+/g,
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        br = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        a = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        bh = /^[\],:{}\s]*$/,
        bk = /(?:^|:|,)(?:\s*\[)+/g,
        bG = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        aZ = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        bS = /^-ms-/,
        aV = /-([\da-z])/gi,
        M = function (e, b3) {
            return b3.toUpperCase()
        },
        bW = function (e) {
            if (l.addEventListener || e.type === "load" || l.readyState === "complete") {
                bl();
                bJ.ready()
            }
        },
        bl = function () {
            if (l.addEventListener) {
                l.removeEventListener("DOMContentLoaded", bW, false);
                a2.removeEventListener("load", bW, false)
            } else {
                l.detachEvent("onreadystatechange", bW);
                a2.detachEvent("onload", bW)
            }
        };
    bJ.fn = bJ.prototype = {
        jquery: s,
        constructor: bJ,
        init: function (e, b5, b4) {
            var b3, b6;
            if (!e) {
                return this
            }
            if (typeof e === "string") {
                if (e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3) {
                    b3 = [null, e, null]
                } else {
                    b3 = br.exec(e)
                } if (b3 && (b3[1] || !b5)) {
                    if (b3[1]) {
                        b5 = b5 instanceof bJ ? b5[0] : b5;
                        bJ.merge(this, bJ.parseHTML(b3[1], b5 && b5.nodeType ? b5.ownerDocument || b5 : l, true));
                        if (a.test(b3[1]) && bJ.isPlainObject(b5)) {
                            for (b3 in b5) {
                                if (bJ.isFunction(this[b3])) {
                                    this[b3](b5[b3])
                                } else {
                                    this.attr(b3, b5[b3])
                                }
                            }
                        }
                        return this
                    } else {
                        b6 = l.getElementById(b3[2]);
                        if (b6 && b6.parentNode) {
                            if (b6.id !== b3[2]) {
                                return b4.find(e)
                            }
                            this.length = 1;
                            this[0] = b6
                        }
                        this.context = l;
                        this.selector = e;
                        return this
                    }
                } else {
                    if (!b5 || b5.jquery) {
                        return (b5 || b4).find(e)
                    } else {
                        return this.constructor(b5).find(e)
                    }
                }
            } else {
                if (e.nodeType) {
                    this.context = this[0] = e;
                    this.length = 1;
                    return this
                } else {
                    if (bJ.isFunction(e)) {
                        return b4.ready(e)
                    }
                }
            } if (e.selector !== aG) {
                this.selector = e.selector;
                this.context = e.context
            }
            return bJ.makeArray(e, this)
        }, selector: "",
        length: 0,
        size: function () {
            return this.length
        }, toArray: function () {
            return a4.call(this)
        }, get: function (e) {
            return e == null ? this.toArray() : (e < 0 ? this[this.length + e] : this[e])
        }, pushStack: function (e) {
            var b3 = bJ.merge(this.constructor(), e);
            b3.prevObject = this;
            b3.context = this.context;
            return b3
        }, each: function (b3, e) {
            return bJ.each(this, b3, e)
        }, ready: function (e) {
            bJ.ready.promise().done(e);
            return this
        }, slice: function () {
            return this.pushStack(a4.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (b4) {
            var e = this.length,
                b3 = +b4 + (b4 < 0 ? e : 0);
            return this.pushStack(b3 >= 0 && b3 < e ? [this[b3]] : [])
        }, map: function (e) {
            return this.pushStack(bJ.map(this, function (b4, b3) {
                return e.call(b4, b3, b4)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: ao,
        sort: [].sort,
        splice: [].splice
    };
    bJ.fn.init.prototype = bJ.fn;
    bJ.extend = bJ.fn.extend = function () {
        var e, b8, b3, b4, cb, b9, b7 = arguments[0] || {},
            b6 = 1,
            b5 = arguments.length,
            ca = false;
        if (typeof b7 === "boolean") {
            ca = b7;
            b7 = arguments[1] || {};
            b6 = 2
        }
        if (typeof b7 !== "object" && !bJ.isFunction(b7)) {
            b7 = {}
        }
        if (b5 === b6) {
            b7 = this;
            --b6
        }
        for (; b6 < b5; b6++) {
            if ((cb = arguments[b6]) != null) {
                for (b4 in cb) {
                    e = b7[b4];
                    b3 = cb[b4];
                    if (b7 === b3) {
                        continue
                    }
                    if (ca && b3 && (bJ.isPlainObject(b3) || (b8 = bJ.isArray(b3)))) {
                        if (b8) {
                            b8 = false;
                            b9 = e && bJ.isArray(e) ? e : []
                        } else {
                            b9 = e && bJ.isPlainObject(e) ? e : {}
                        }
                        b7[b4] = bJ.extend(ca, b9, b3)
                    } else {
                        if (b3 !== aG) {
                            b7[b4] = b3
                        }
                    }
                }
            }
        }
        return b7
    };
    bJ.extend({
        noConflict: function (e) {
            if (a2.$ === bJ) {
                a2.$ = H
            }
            if (e && a2.jQuery === bJ) {
                a2.jQuery = bi
            }
            return bJ
        }, isReady: false,
        readyWait: 1,
        holdReady: function (e) {
            if (e) {
                bJ.readyWait++
            } else {
                bJ.ready(true)
            }
        }, ready: function (e) {
            if (e === true ? --bJ.readyWait : bJ.isReady) {
                return
            }
            if (!l.body) {
                return setTimeout(bJ.ready)
            }
            bJ.isReady = true;
            if (e !== true && --bJ.readyWait > 0) {
                return
            }
            ai.resolveWith(l, [bJ]);
            if (bJ.fn.trigger) {
                bJ(l).trigger("ready").off("ready")
            }
        }, isFunction: function (e) {
            return bJ.type(e) === "function"
        }, isArray: Array.isArray || function (e) {
            return bJ.type(e) === "array"
        }, isWindow: function (e) {
            return e != null && e == e.window
        }, isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, type: function (e) {
            if (e == null) {
                return String(e)
            }
            return typeof e === "object" || typeof e === "function" ? aa[z.call(e)] || "object" : typeof e
        }, isPlainObject: function (b5) {
            if (!b5 || bJ.type(b5) !== "object" || b5.nodeType || bJ.isWindow(b5)) {
                return false
            }
            try {
                if (b5.constructor && !V.call(b5, "constructor") && !V.call(b5.constructor.prototype, "isPrototypeOf")) {
                    return false
                }
            } catch (b4) {
                return false
            }
            var b3;
            for (b3 in b5) {}
            return b3 === aG || V.call(b5, b3)
        }, isEmptyObject: function (b3) {
            var e;
            for (e in b3) {
                return false
            }
            return true
        }, error: function (e) {
            throw new Error(e)
        }, parseHTML: function (b6, b4, b5) {
            if (!b6 || typeof b6 !== "string") {
                return null
            }
            if (typeof b4 === "boolean") {
                b5 = b4;
                b4 = false
            }
            b4 = b4 || l;
            var b3 = a.exec(b6),
                e = !b5 && [];
            if (b3) {
                return [b4.createElement(b3[1])]
            }
            b3 = bJ.buildFragment([b6], b4, e);
            if (e) {
                bJ(e).remove()
            }
            return bJ.merge([], b3.childNodes)
        }, parseJSON: function (e) {
            if (a2.JSON && a2.JSON.parse) {
                return a2.JSON.parse(e)
            }
            if (e === null) {
                return e
            }
            if (typeof e === "string") {
                e = bJ.trim(e);
                if (e) {
                    if (bh.test(e.replace(bG, "@").replace(aZ, "]").replace(bk, ""))) {
                        return (new Function("return " + e))()
                    }
                }
            }
            bJ.error("Invalid JSON: " + e)
        }, parseXML: function (b5) {
            var b3, b4;
            if (!b5 || typeof b5 !== "string") {
                return null
            }
            try {
                if (a2.DOMParser) {
                    b4 = new DOMParser();
                    b3 = b4.parseFromString(b5, "text/xml")
                } else {
                    b3 = new ActiveXObject("Microsoft.XMLDOM");
                    b3.async = "false";
                    b3.loadXML(b5)
                }
            } catch (b6) {
                b3 = aG
            }
            if (!b3 || !b3.documentElement || b3.getElementsByTagName("parsererror").length) {
                bJ.error("Invalid XML: " + b5)
            }
            return b3
        }, noop: function () {}, globalEval: function (e) {
            if (e && bJ.trim(e)) {
                (a2.execScript || function (b3) {
                    a2["eval"].call(a2, b3)
                })(e)
            }
        }, camelCase: function (e) {
            return e.replace(bS, "ms-").replace(aV, M)
        }, nodeName: function (b3, e) {
            return b3.nodeName && b3.nodeName.toLowerCase() === e.toLowerCase()
        }, each: function (b7, b8, b3) {
            var b6, b4 = 0,
                b5 = b7.length,
                e = ab(b7);
            if (b3) {
                if (e) {
                    for (; b4 < b5; b4++) {
                        b6 = b8.apply(b7[b4], b3);
                        if (b6 === false) {
                            break
                        }
                    }
                } else {
                    for (b4 in b7) {
                        b6 = b8.apply(b7[b4], b3);
                        if (b6 === false) {
                            break
                        }
                    }
                }
            } else {
                if (e) {
                    for (; b4 < b5; b4++) {
                        b6 = b8.call(b7[b4], b4, b7[b4]);
                        if (b6 === false) {
                            break
                        }
                    }
                } else {
                    for (b4 in b7) {
                        b6 = b8.call(b7[b4], b4, b7[b4]);
                        if (b6 === false) {
                            break
                        }
                    }
                }
            }
            return b7
        }, trim: aQ && !aQ.call("\uFEFF\xA0") ? function (e) {
            return e == null ? "" : aQ.call(e)
        } : function (e) {
            return e == null ? "" : (e + "").replace(C, "")
        }, makeArray: function (e, b4) {
            var b3 = b4 || [];
            if (e != null) {
                if (ab(Object(e))) {
                    bJ.merge(b3, typeof e === "string" ? [e] : e)
                } else {
                    ao.call(b3, e)
                }
            }
            return b3
        }, inArray: function (b5, b3, b4) {
            var e;
            if (b3) {
                if (aM) {
                    return aM.call(b3, b5, b4)
                }
                e = b3.length;
                b4 = b4 ? b4 < 0 ? Math.max(0, e + b4) : b4 : 0;
                for (; b4 < e; b4++) {
                    if (b4 in b3 && b3[b4] === b5) {
                        return b4
                    }
                }
            }
            return -1
        }, merge: function (b6, b4) {
            var e = b4.length,
                b5 = b6.length,
                b3 = 0;
            if (typeof e === "number") {
                for (; b3 < e; b3++) {
                    b6[b5++] = b4[b3]
                }
            } else {
                while (b4[b3] !== aG) {
                    b6[b5++] = b4[b3++]
                }
            }
            b6.length = b5;
            return b6
        }, grep: function (b3, b8, e) {
            var b7, b4 = [],
                b5 = 0,
                b6 = b3.length;
            e = !!e;
            for (; b5 < b6; b5++) {
                b7 = !!b8(b3[b5], b5);
                if (e !== b7) {
                    b4.push(b3[b5])
                }
            }
            return b4
        }, map: function (b4, b9, e) {
            var b8, b6 = 0,
                b7 = b4.length,
                b3 = ab(b4),
                b5 = [];
            if (b3) {
                for (; b6 < b7; b6++) {
                    b8 = b9(b4[b6], b6, e);
                    if (b8 != null) {
                        b5[b5.length] = b8
                    }
                }
            } else {
                for (b6 in b4) {
                    b8 = b9(b4[b6], b6, e);
                    if (b8 != null) {
                        b5[b5.length] = b8
                    }
                }
            }
            return aI.apply([], b5)
        }, guid: 1,
        proxy: function (b6, b5) {
            var e, b4, b3;
            if (typeof b5 === "string") {
                b3 = b6[b5];
                b5 = b6;
                b6 = b3
            }
            if (!bJ.isFunction(b6)) {
                return aG
            }
            e = a4.call(arguments, 2);
            b4 = function () {
                return b6.apply(b5 || this, e.concat(a4.call(arguments)))
            };
            b4.guid = b6.guid = b6.guid || bJ.guid++;
            return b4
        }, access: function (e, b7, b9, b8, b5, cb, ca) {
            var b4 = 0,
                b3 = e.length,
                b6 = b9 == null;
            if (bJ.type(b9) === "object") {
                b5 = true;
                for (b4 in b9) {
                    bJ.access(e, b7, b4, b9[b4], true, cb, ca)
                }
            } else {
                if (b8 !== aG) {
                    b5 = true;
                    if (!bJ.isFunction(b8)) {
                        ca = true
                    }
                    if (b6) {
                        if (ca) {
                            b7.call(e, b8);
                            b7 = null
                        } else {
                            b6 = b7;
                            b7 = function (cd, cc, ce) {
                                return b6.call(bJ(cd), ce)
                            }
                        }
                    }
                    if (b7) {
                        for (; b4 < b3; b4++) {
                            b7(e[b4], b9, ca ? b8 : b8.call(e[b4], b4, b7(e[b4], b9)))
                        }
                    }
                }
            }
            return b5 ? e : b6 ? b7.call(e) : b3 ? b7(e[0], b9) : cb
        }, now: function () {
            return (new Date()).getTime()
        }
    });
    bJ.ready.promise = function (b6) {
        if (!ai) {
            ai = bJ.Deferred();
            if (l.readyState === "complete") {
                setTimeout(bJ.ready)
            } else {
                if (l.addEventListener) {
                    l.addEventListener("DOMContentLoaded", bW, false);
                    a2.addEventListener("load", bW, false)
                } else {
                    l.attachEvent("onreadystatechange", bW);
                    a2.attachEvent("onload", bW);
                    var b5 = false;
                    try {
                        b5 = a2.frameElement == null && l.documentElement
                    } catch (b4) {}
                    if (b5 && b5.doScroll) {
                        (function b3() {
                            if (!bJ.isReady) {
                                try {
                                    b5.doScroll("left")
                                } catch (b7) {
                                    return setTimeout(b3, 50)
                                }
                                bl();
                                bJ.ready()
                            }
                        })()
                    }
                }
            }
        }
        return ai.promise(b6)
    };
    bJ.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (b3, e) {
        aa["[object " + e + "]"] = e.toLowerCase()
    });

    function ab(b4) {
        var b3 = b4.length,
            e = bJ.type(b4);
        if (bJ.isWindow(b4)) {
            return false
        }
        if (b4.nodeType === 1 && b3) {
            return true
        }
        return e === "array" || e !== "function" && (b3 === 0 || typeof b3 === "number" && b3 > 0 && (b3 - 1) in b4)
    }
    w = bJ(l);
    var bY = {};

    function ae(b3) {
        var e = bY[b3] = {};
        bJ.each(b3.match(ac) || [], function (b5, b4) {
            e[b4] = true
        });
        return e
    }
    bJ.Callbacks = function (cc) {
        cc = typeof cc === "string" ? (bY[cc] || ae(cc)) : bJ.extend({}, cc);
        var b6, b5, e, b7, b8, b4, b9 = [],
            ca = !cc.once && [],
            b3 = function (cd) {
                b5 = cc.memory && cd;
                e = true;
                b8 = b4 || 0;
                b4 = 0;
                b7 = b9.length;
                b6 = true;
                for (; b9 && b8 < b7; b8++) {
                    if (b9[b8].apply(cd[0], cd[1]) === false && cc.stopOnFalse) {
                        b5 = false;
                        break
                    }
                }
                b6 = false;
                if (b9) {
                    if (ca) {
                        if (ca.length) {
                            b3(ca.shift())
                        }
                    } else {
                        if (b5) {
                            b9 = []
                        } else {
                            cb.disable()
                        }
                    }
                }
            },
            cb = {
                add: function () {
                    if (b9) {
                        var ce = b9.length;
                        (function cd(cf) {
                            bJ.each(cf, function (ch, cg) {
                                var ci = bJ.type(cg);
                                if (ci === "function") {
                                    if (!cc.unique || !cb.has(cg)) {
                                        b9.push(cg)
                                    }
                                } else {
                                    if (cg && cg.length && ci !== "string") {
                                        cd(cg)
                                    }
                                }
                            })
                        })(arguments);
                        if (b6) {
                            b7 = b9.length
                        } else {
                            if (b5) {
                                b4 = ce;
                                b3(b5)
                            }
                        }
                    }
                    return this
                }, remove: function () {
                    if (b9) {
                        bJ.each(arguments, function (cf, cd) {
                            var ce;
                            while ((ce = bJ.inArray(cd, b9, ce)) > -1) {
                                b9.splice(ce, 1);
                                if (b6) {
                                    if (ce <= b7) {
                                        b7--
                                    }
                                    if (ce <= b8) {
                                        b8--
                                    }
                                }
                            }
                        })
                    }
                    return this
                }, has: function (cd) {
                    return cd ? bJ.inArray(cd, b9) > -1 : !!(b9 && b9.length)
                }, empty: function () {
                    b9 = [];
                    return this
                }, disable: function () {
                    b9 = ca = b5 = aG;
                    return this
                }, disabled: function () {
                    return !b9
                }, lock: function () {
                    ca = aG;
                    if (!b5) {
                        cb.disable()
                    }
                    return this
                }, locked: function () {
                    return !ca
                }, fireWith: function (ce, cd) {
                    cd = cd || [];
                    cd = [ce, cd.slice ? cd.slice() : cd];
                    if (b9 && (!e || ca)) {
                        if (b6) {
                            ca.push(cd)
                        } else {
                            b3(cd)
                        }
                    }
                    return this
                }, fire: function () {
                    cb.fireWith(this, arguments);
                    return this
                }, fired: function () {
                    return !!e
                }
            };
        return cb
    };
    bJ.extend({
        Deferred: function (b4) {
            var b3 = [
                    ["resolve", "done", bJ.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", bJ.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", bJ.Callbacks("memory")]
                ],
                b5 = "pending",
                b6 = {
                    state: function () {
                        return b5
                    }, always: function () {
                        e.done(arguments).fail(arguments);
                        return this
                    }, then: function () {
                        var b7 = arguments;
                        return bJ.Deferred(function (b8) {
                            bJ.each(b3, function (ca, b9) {
                                var cc = b9[0],
                                    cb = bJ.isFunction(b7[ca]) && b7[ca];
                                e[b9[1]](function () {
                                    var cd = cb && cb.apply(this, arguments);
                                    if (cd && bJ.isFunction(cd.promise)) {
                                        cd.promise().done(b8.resolve).fail(b8.reject).progress(b8.notify)
                                    } else {
                                        b8[cc + "With"](this === b6 ? b8.promise() : this, cb ? [cd] : arguments)
                                    }
                                })
                            });
                            b7 = null
                        }).promise()
                    }, promise: function (b7) {
                        return b7 != null ? bJ.extend(b7, b6) : b6
                    }
                },
                e = {};
            b6.pipe = b6.then;
            bJ.each(b3, function (b8, b7) {
                var ca = b7[2],
                    b9 = b7[3];
                b6[b7[1]] = ca.add;
                if (b9) {
                    ca.add(function () {
                        b5 = b9
                    }, b3[b8 ^ 1][2].disable, b3[2][2].lock)
                }
                e[b7[0]] = function () {
                    e[b7[0] + "With"](this === e ? b6 : this, arguments);
                    return this
                };
                e[b7[0] + "With"] = ca.fireWith
            });
            b6.promise(e);
            if (b4) {
                b4.call(e, e)
            }
            return e
        }, when: function (b6) {
            var b4 = 0,
                b8 = a4.call(arguments),
                e = b8.length,
                b3 = e !== 1 || (b6 && bJ.isFunction(b6.promise)) ? e : 0,
                cb = b3 === 1 ? b6 : bJ.Deferred(),
                b5 = function (cd, ce, cc) {
                    return function (cf) {
                        ce[cd] = this;
                        cc[cd] = arguments.length > 1 ? a4.call(arguments) : cf;
                        if (cc === ca) {
                            cb.notifyWith(ce, cc)
                        } else {
                            if (!(--b3)) {
                                cb.resolveWith(ce, cc)
                            }
                        }
                    }
                },
                ca, b7, b9;
            if (e > 1) {
                ca = new Array(e);
                b7 = new Array(e);
                b9 = new Array(e);
                for (; b4 < e; b4++) {
                    if (b8[b4] && bJ.isFunction(b8[b4].promise)) {
                        b8[b4].promise().done(b5(b4, b9, b8)).fail(cb.reject).progress(b5(b4, b7, ca))
                    } else {
                        --b3
                    }
                }
            }
            if (!b3) {
                cb.resolveWith(b9, b8)
            }
            return cb.promise()
        }
    });
    bJ.support = (function () {
        var ce, cd, cb, ca, cc, b9, b5, b7, b4, b6, b3 = l.createElement("div");
        b3.setAttribute("className", "t");
        b3.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        cd = b3.getElementsByTagName("*");
        cb = b3.getElementsByTagName("a")[0];
        if (!cd || !cb || !cd.length) {
            return {}
        }
        cc = l.createElement("select");
        b5 = cc.appendChild(l.createElement("option"));
        ca = b3.getElementsByTagName("input")[0];
        cb.style.cssText = "top:1px;float:left;opacity:.5";
        ce = {
            getSetAttribute: b3.className !== "t",
            leadingWhitespace: b3.firstChild.nodeType === 3,
            tbody: !b3.getElementsByTagName("tbody").length,
            htmlSerialize: !!b3.getElementsByTagName("link").length,
            style: /top/.test(cb.getAttribute("style")),
            hrefNormalized: cb.getAttribute("href") === "/a",
            opacity: /^0.5/.test(cb.style.opacity),
            cssFloat: !!cb.style.cssFloat,
            checkOn: !!ca.value,
            optSelected: b5.selected,
            enctype: !!l.createElement("form").enctype,
            html5Clone: l.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>",
            boxModel: l.compatMode === "CSS1Compat",
            deleteExpando: true,
            noCloneEvent: true,
            inlineBlockNeedsLayout: false,
            shrinkWrapBlocks: false,
            reliableMarginRight: true,
            boxSizingReliable: true,
            pixelPosition: false
        };
        ca.checked = true;
        ce.noCloneChecked = ca.cloneNode(true).checked;
        cc.disabled = true;
        ce.optDisabled = !b5.disabled;
        try {
            delete b3.test
        } catch (b8) {
            ce.deleteExpando = false
        }
        ca = l.createElement("input");
        ca.setAttribute("value", "");
        ce.input = ca.getAttribute("value") === "";
        ca.value = "t";
        ca.setAttribute("type", "radio");
        ce.radioValue = ca.value === "t";
        ca.setAttribute("checked", "t");
        ca.setAttribute("name", "t");
        b9 = l.createDocumentFragment();
        b9.appendChild(ca);
        ce.appendChecked = ca.checked;
        ce.checkClone = b9.cloneNode(true).cloneNode(true).lastChild.checked;
        if (b3.attachEvent) {
            b3.attachEvent("onclick", function () {
                ce.noCloneEvent = false
            });
            b3.cloneNode(true).click()
        }
        for (b6 in {
            submit: true,
            change: true,
            focusin: true
        }) {
            b3.setAttribute(b7 = "on" + b6, "t");
            ce[b6 + "Bubbles"] = b7 in a2 || b3.attributes[b7].expando === false
        }
        b3.style.backgroundClip = "content-box";
        b3.cloneNode(true).style.backgroundClip = "";
        ce.clearCloneStyle = b3.style.backgroundClip === "content-box";
        bJ(function () {
            var cf, ci, ch, cg = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                e = l.getElementsByTagName("body")[0];
            if (!e) {
                return
            }
            cf = l.createElement("div");
            cf.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
            e.appendChild(cf).appendChild(b3);
            b3.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
            ch = b3.getElementsByTagName("td");
            ch[0].style.cssText = "padding:0;margin:0;border:0;display:none";
            b4 = (ch[0].offsetHeight === 0);
            ch[0].style.display = "";
            ch[1].style.display = "none";
            ce.reliableHiddenOffsets = b4 && (ch[0].offsetHeight === 0);
            b3.innerHTML = "";
            b3.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
            ce.boxSizing = (b3.offsetWidth === 4);
            ce.doesNotIncludeMarginInBodyOffset = (e.offsetTop !== 1);
            if (a2.getComputedStyle) {
                ce.pixelPosition = (a2.getComputedStyle(b3, null) || {}).top !== "1%";
                ce.boxSizingReliable = (a2.getComputedStyle(b3, null) || {
                    width: "4px"
                }).width === "4px";
                ci = b3.appendChild(l.createElement("div"));
                ci.style.cssText = b3.style.cssText = cg;
                ci.style.marginRight = ci.style.width = "0";
                b3.style.width = "1px";
                ce.reliableMarginRight = !parseFloat((a2.getComputedStyle(ci, null) || {}).marginRight)
            }
            if (typeof b3.style.zoom !== aC) {
                b3.innerHTML = "";
                b3.style.cssText = cg + "width:1px;padding:1px;display:inline;zoom:1";
                ce.inlineBlockNeedsLayout = (b3.offsetWidth === 3);
                b3.style.display = "block";
                b3.innerHTML = "<div></div>";
                b3.firstChild.style.width = "5px";
                ce.shrinkWrapBlocks = (b3.offsetWidth !== 3);
                if (ce.inlineBlockNeedsLayout) {
                    e.style.zoom = 1
                }
            }
            e.removeChild(cf);
            cf = b3 = ch = ci = null
        });
        cd = cc = b9 = b5 = cb = ca = null;
        return ce
    })();
    var bw = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        aN = /([A-Z])/g;

    function ba(b5, b3, b7, b6) {
        if (!bJ.acceptData(b5)) {
            return
        }
        var b8, ca, cb = bJ.expando,
            b9 = typeof b3 === "string",
            cc = b5.nodeType,
            e = cc ? bJ.cache : b5,
            b4 = cc ? b5[cb] : b5[cb] && cb;
        if ((!b4 || !e[b4] || (!b6 && !e[b4].data)) && b9 && b7 === aG) {
            return
        }
        if (!b4) {
            if (cc) {
                b5[cb] = b4 = a6.pop() || bJ.guid++
            } else {
                b4 = cb
            }
        }
        if (!e[b4]) {
            e[b4] = {};
            if (!cc) {
                e[b4].toJSON = bJ.noop
            }
        }
        if (typeof b3 === "object" || typeof b3 === "function") {
            if (b6) {
                e[b4] = bJ.extend(e[b4], b3)
            } else {
                e[b4].data = bJ.extend(e[b4].data, b3)
            }
        }
        b8 = e[b4];
        if (!b6) {
            if (!b8.data) {
                b8.data = {}
            }
            b8 = b8.data
        }
        if (b7 !== aG) {
            b8[bJ.camelCase(b3)] = b7
        }
        if (b9) {
            ca = b8[b3];
            if (ca == null) {
                ca = b8[bJ.camelCase(b3)]
            }
        } else {
            ca = b8
        }
        return ca
    }

    function Z(b5, b3, b6) {
        if (!bJ.acceptData(b5)) {
            return
        }
        var b8, b7, b9, ca = b5.nodeType,
            e = ca ? bJ.cache : b5,
            b4 = ca ? b5[bJ.expando] : bJ.expando;
        if (!e[b4]) {
            return
        }
        if (b3) {
            b9 = b6 ? e[b4] : e[b4].data;
            if (b9) {
                if (!bJ.isArray(b3)) {
                    if (b3 in b9) {
                        b3 = [b3]
                    } else {
                        b3 = bJ.camelCase(b3);
                        if (b3 in b9) {
                            b3 = [b3]
                        } else {
                            b3 = b3.split(" ")
                        }
                    }
                } else {
                    b3 = b3.concat(bJ.map(b3, bJ.camelCase))
                }
                for (b8 = 0, b7 = b3.length; b8 < b7; b8++) {
                    delete b9[b3[b8]]
                }
                if (!(b6 ? N : bJ.isEmptyObject)(b9)) {
                    return
                }
            }
        }
        if (!b6) {
            delete e[b4].data;
            if (!N(e[b4])) {
                return
            }
        }
        if (ca) {
            bJ.cleanData([b5], true)
        } else {
            if (bJ.support.deleteExpando || e != e.window) {
                delete e[b4]
            } else {
                e[b4] = null
            }
        }
    }
    bJ.extend({
        cache: {},
        expando: "jQuery" + (s + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: true,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: true
        },
        hasData: function (e) {
            e = e.nodeType ? bJ.cache[e[bJ.expando]] : e[bJ.expando];
            return !!e && !N(e)
        }, data: function (b3, e, b4) {
            return ba(b3, e, b4)
        }, removeData: function (b3, e) {
            return Z(b3, e)
        }, _data: function (b3, e, b4) {
            return ba(b3, e, b4, true)
        }, _removeData: function (b3, e) {
            return Z(b3, e, true)
        }, acceptData: function (b3) {
            if (b3.nodeType && b3.nodeType !== 1 && b3.nodeType !== 9) {
                return false
            }
            var e = b3.nodeName && bJ.noData[b3.nodeName.toLowerCase()];
            return !e || e !== true && b3.getAttribute("classid") === e
        }
    });
    bJ.fn.extend({
        data: function (b5, b8) {
            var b3, e, b6 = this[0],
                b4 = 0,
                b7 = null;
            if (b5 === aG) {
                if (this.length) {
                    b7 = bJ.data(b6);
                    if (b6.nodeType === 1 && !bJ._data(b6, "parsedAttrs")) {
                        b3 = b6.attributes;
                        for (; b4 < b3.length; b4++) {
                            e = b3[b4].name;
                            if (!e.indexOf("data-")) {
                                e = bJ.camelCase(e.slice(5));
                                by(b6, e, b7[e])
                            }
                        }
                        bJ._data(b6, "parsedAttrs", true)
                    }
                }
                return b7
            }
            if (typeof b5 === "object") {
                return this.each(function () {
                    bJ.data(this, b5)
                })
            }
            return bJ.access(this, function (b9) {
                if (b9 === aG) {
                    return b6 ? by(b6, b5, bJ.data(b6, b5)) : null
                }
                this.each(function () {
                    bJ.data(this, b5, b9)
                })
            }, null, b8, arguments.length > 1, null, true)
        }, removeData: function (e) {
            return this.each(function () {
                bJ.removeData(this, e)
            })
        }
    });

    function by(b5, b4, b6) {
        if (b6 === aG && b5.nodeType === 1) {
            var b3 = "data-" + b4.replace(aN, "-$1").toLowerCase();
            b6 = b5.getAttribute(b3);
            if (typeof b6 === "string") {
                try {
                    b6 = b6 === "true" ? true : b6 === "false" ? false : b6 === "null" ? null : +b6 + "" === b6 ? +b6 : bw.test(b6) ? bJ.parseJSON(b6) : b6
                } catch (b7) {}
                bJ.data(b5, b4, b6)
            } else {
                b6 = aG
            }
        }
        return b6
    }

    function N(b3) {
        var e;
        for (e in b3) {
            if (e === "data" && bJ.isEmptyObject(b3[e])) {
                continue
            }
            if (e !== "toJSON") {
                return false
            }
        }
        return true
    }
    bJ.extend({
        queue: function (b4, b3, b5) {
            var e;
            if (b4) {
                b3 = (b3 || "fx") + "queue";
                e = bJ._data(b4, b3);
                if (b5) {
                    if (!e || bJ.isArray(b5)) {
                        e = bJ._data(b4, b3, bJ.makeArray(b5))
                    } else {
                        e.push(b5)
                    }
                }
                return e || []
            }
        }, dequeue: function (b7, b6) {
            b6 = b6 || "fx";
            var b3 = bJ.queue(b7, b6),
                b8 = b3.length,
                b5 = b3.shift(),
                e = bJ._queueHooks(b7, b6),
                b4 = function () {
                    bJ.dequeue(b7, b6)
                };
            if (b5 === "inprogress") {
                b5 = b3.shift();
                b8--
            }
            e.cur = b5;
            if (b5) {
                if (b6 === "fx") {
                    b3.unshift("inprogress")
                }
                delete e.stop;
                b5.call(b7, b4, e)
            }
            if (!b8 && e) {
                e.empty.fire()
            }
        }, _queueHooks: function (b4, b3) {
            var e = b3 + "queueHooks";
            return bJ._data(b4, e) || bJ._data(b4, e, {
                empty: bJ.Callbacks("once memory").add(function () {
                    bJ._removeData(b4, b3 + "queue");
                    bJ._removeData(b4, e)
                })
            })
        }
    });
    bJ.fn.extend({
        queue: function (e, b3) {
            var b4 = 2;
            if (typeof e !== "string") {
                b3 = e;
                e = "fx";
                b4--
            }
            if (arguments.length < b4) {
                return bJ.queue(this[0], e)
            }
            return b3 === aG ? this : this.each(function () {
                var b5 = bJ.queue(this, e, b3);
                bJ._queueHooks(this, e);
                if (e === "fx" && b5[0] !== "inprogress") {
                    bJ.dequeue(this, e)
                }
            })
        }, dequeue: function (e) {
            return this.each(function () {
                bJ.dequeue(this, e)
            })
        }, delay: function (b3, e) {
            b3 = bJ.fx ? bJ.fx.speeds[b3] || b3 : b3;
            e = e || "fx";
            return this.queue(e, function (b5, b4) {
                var b6 = setTimeout(b5, b3);
                b4.stop = function () {
                    clearTimeout(b6)
                }
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (b4, b8) {
            var b3, b5 = 1,
                b9 = bJ.Deferred(),
                b7 = this,
                e = this.length,
                b6 = function () {
                    if (!(--b5)) {
                        b9.resolveWith(b7, [b7])
                    }
                };
            if (typeof b4 !== "string") {
                b8 = b4;
                b4 = aG
            }
            b4 = b4 || "fx";
            while (e--) {
                b3 = bJ._data(b7[e], b4 + "queueHooks");
                if (b3 && b3.empty) {
                    b5++;
                    b3.empty.add(b6)
                }
            }
            b6();
            return b9.promise(b8)
        }
    });
    var a8, bZ, bM = /[\t\r\n]/g,
        ak = /\r/g,
        aF = /^(?:input|select|textarea|button|object)$/i,
        D = /^(?:a|area)$/i,
        L = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        aq = /^(?:checked|selected)$/i,
        bP = bJ.support.getSetAttribute,
        bF = bJ.support.input;
    bJ.fn.extend({
        attr: function (e, b3) {
            return bJ.access(this, bJ.attr, e, b3, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                bJ.removeAttr(this, e)
            })
        }, prop: function (e, b3) {
            return bJ.access(this, bJ.prop, e, b3, arguments.length > 1)
        }, removeProp: function (e) {
            e = bJ.propFix[e] || e;
            return this.each(function () {
                try {
                    this[e] = aG;
                    delete this[e]
                } catch (b3) {}
            })
        }, addClass: function (b9) {
            var b3, e, ca, b6, b4, b5 = 0,
                b7 = this.length,
                b8 = typeof b9 === "string" && b9;
            if (bJ.isFunction(b9)) {
                return this.each(function (cb) {
                    bJ(this).addClass(b9.call(this, cb, this.className))
                })
            }
            if (b8) {
                b3 = (b9 || "").match(ac) || [];
                for (; b5 < b7; b5++) {
                    e = this[b5];
                    ca = e.nodeType === 1 && (e.className ? (" " + e.className + " ").replace(bM, " ") : " ");
                    if (ca) {
                        b4 = 0;
                        while ((b6 = b3[b4++])) {
                            if (ca.indexOf(" " + b6 + " ") < 0) {
                                ca += b6 + " "
                            }
                        }
                        e.className = bJ.trim(ca)
                    }
                }
            }
            return this
        }, removeClass: function (b9) {
            var b3, e, ca, b6, b4, b5 = 0,
                b7 = this.length,
                b8 = arguments.length === 0 || typeof b9 === "string" && b9;
            if (bJ.isFunction(b9)) {
                return this.each(function (cb) {
                    bJ(this).removeClass(b9.call(this, cb, this.className))
                })
            }
            if (b8) {
                b3 = (b9 || "").match(ac) || [];
                for (; b5 < b7; b5++) {
                    e = this[b5];
                    ca = e.nodeType === 1 && (e.className ? (" " + e.className + " ").replace(bM, " ") : "");
                    if (ca) {
                        b4 = 0;
                        while ((b6 = b3[b4++])) {
                            while (ca.indexOf(" " + b6 + " ") >= 0) {
                                ca = ca.replace(" " + b6 + " ", " ")
                            }
                        }
                        e.className = b9 ? bJ.trim(ca) : ""
                    }
                }
            }
            return this
        }, toggleClass: function (b5, b3) {
            var b4 = typeof b5,
                e = typeof b3 === "boolean";
            if (bJ.isFunction(b5)) {
                return this.each(function (b6) {
                    bJ(this).toggleClass(b5.call(this, b6, this.className, b3), b3)
                })
            }
            return this.each(function () {
                if (b4 === "string") {
                    var b8, b7 = 0,
                        b6 = bJ(this),
                        b9 = b3,
                        ca = b5.match(ac) || [];
                    while ((b8 = ca[b7++])) {
                        b9 = e ? b9 : !b6.hasClass(b8);
                        b6[b9 ? "addClass" : "removeClass"](b8)
                    }
                } else {
                    if (b4 === aC || b4 === "boolean") {
                        if (this.className) {
                            bJ._data(this, "__className__", this.className)
                        }
                        this.className = this.className || b5 === false ? "" : bJ._data(this, "__className__") || ""
                    }
                }
            })
        }, hasClass: function (e) {
            var b5 = " " + e + " ",
                b4 = 0,
                b3 = this.length;
            for (; b4 < b3; b4++) {
                if (this[b4].nodeType === 1 && (" " + this[b4].className + " ").replace(bM, " ").indexOf(b5) >= 0) {
                    return true
                }
            }
            return false
        }, val: function (b5) {
            var b3, e, b6, b4 = this[0];
            if (!arguments.length) {
                if (b4) {
                    e = bJ.valHooks[b4.type] || bJ.valHooks[b4.nodeName.toLowerCase()];
                    if (e && "get" in e && (b3 = e.get(b4, "value")) !== aG) {
                        return b3
                    }
                    b3 = b4.value;
                    return typeof b3 === "string" ? b3.replace(ak, "") : b3 == null ? "" : b3
                }
                return
            }
            b6 = bJ.isFunction(b5);
            return this.each(function (b8) {
                var b9, b7 = bJ(this);
                if (this.nodeType !== 1) {
                    return
                }
                if (b6) {
                    b9 = b5.call(this, b8, b7.val())
                } else {
                    b9 = b5
                } if (b9 == null) {
                    b9 = ""
                } else {
                    if (typeof b9 === "number") {
                        b9 += ""
                    } else {
                        if (bJ.isArray(b9)) {
                            b9 = bJ.map(b9, function (ca) {
                                return ca == null ? "" : ca + ""
                            })
                        }
                    }
                }
                e = bJ.valHooks[this.type] || bJ.valHooks[this.nodeName.toLowerCase()];
                if (!e || !("set" in e) || e.set(this, b9, "value") === aG) {
                    this.value = b9
                }
            })
        }
    });
    bJ.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var b3 = e.attributes.value;
                    return !b3 || b3.specified ? e.value : e.text
                }
            },
            select: {
                get: function (e) {
                    var b8, b4, ca = e.options,
                        b6 = e.selectedIndex,
                        b5 = e.type === "select-one" || b6 < 0,
                        b9 = b5 ? null : [],
                        b7 = b5 ? b6 + 1 : ca.length,
                        b3 = b6 < 0 ? b7 : b5 ? b6 : 0;
                    for (; b3 < b7; b3++) {
                        b4 = ca[b3];
                        if ((b4.selected || b3 === b6) && (bJ.support.optDisabled ? !b4.disabled : b4.getAttribute("disabled") === null) && (!b4.parentNode.disabled || !bJ.nodeName(b4.parentNode, "optgroup"))) {
                            b8 = bJ(b4).val();
                            if (b5) {
                                return b8
                            }
                            b9.push(b8)
                        }
                    }
                    return b9
                }, set: function (b3, b4) {
                    var e = bJ.makeArray(b4);
                    bJ(b3).find("option").each(function () {
                        this.selected = bJ.inArray(bJ(this).val(), e) >= 0
                    });
                    if (!e.length) {
                        b3.selectedIndex = -1
                    }
                    return e
                }
            }
        },
        attr: function (b7, b5, b8) {
            var e, b6, b4, b3 = b7.nodeType;
            if (!b7 || b3 === 3 || b3 === 8 || b3 === 2) {
                return
            }
            if (typeof b7.getAttribute === aC) {
                return bJ.prop(b7, b5, b8)
            }
            b6 = b3 !== 1 || !bJ.isXMLDoc(b7);
            if (b6) {
                b5 = b5.toLowerCase();
                e = bJ.attrHooks[b5] || (L.test(b5) ? bZ : a8)
            }
            if (b8 !== aG) {
                if (b8 === null) {
                    bJ.removeAttr(b7, b5)
                } else {
                    if (e && b6 && "set" in e && (b4 = e.set(b7, b8, b5)) !== aG) {
                        return b4
                    } else {
                        b7.setAttribute(b5, b8 + "");
                        return b8
                    }
                }
            } else {
                if (e && b6 && "get" in e && (b4 = e.get(b7, b5)) !== null) {
                    return b4
                } else {
                    if (typeof b7.getAttribute !== aC) {
                        b4 = b7.getAttribute(b5)
                    }
                    return b4 == null ? aG : b4
                }
            }
        }, removeAttr: function (b4, b6) {
            var e, b5, b3 = 0,
                b7 = b6 && b6.match(ac);
            if (b7 && b4.nodeType === 1) {
                while ((e = b7[b3++])) {
                    b5 = bJ.propFix[e] || e;
                    if (L.test(e)) {
                        if (!bP && aq.test(e)) {
                            b4[bJ.camelCase("default-" + e)] = b4[b5] = false
                        } else {
                            b4[b5] = false
                        }
                    } else {
                        bJ.attr(b4, e, "")
                    }
                    b4.removeAttribute(bP ? e : b5)
                }
            }
        }, attrHooks: {
            type: {
                set: function (e, b3) {
                    if (!bJ.support.radioValue && b3 === "radio" && bJ.nodeName(e, "input")) {
                        var b4 = e.value;
                        e.setAttribute("type", b3);
                        if (b4) {
                            e.value = b4
                        }
                        return b3
                    }
                }
            }
        }, propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        }, prop: function (b7, b5, b8) {
            var b4, e, b6, b3 = b7.nodeType;
            if (!b7 || b3 === 3 || b3 === 8 || b3 === 2) {
                return
            }
            b6 = b3 !== 1 || !bJ.isXMLDoc(b7);
            if (b6) {
                b5 = bJ.propFix[b5] || b5;
                e = bJ.propHooks[b5]
            }
            if (b8 !== aG) {
                if (e && "set" in e && (b4 = e.set(b7, b8, b5)) !== aG) {
                    return b4
                } else {
                    return (b7[b5] = b8)
                }
            } else {
                if (e && "get" in e && (b4 = e.get(b7, b5)) !== null) {
                    return b4
                } else {
                    return b7[b5]
                }
            }
        }, propHooks: {
            tabIndex: {
                get: function (b3) {
                    var e = b3.getAttributeNode("tabindex");
                    return e && e.specified ? parseInt(e.value, 10) : aF.test(b3.nodeName) || D.test(b3.nodeName) && b3.href ? 0 : aG
                }
            }
        }
    });
    bZ = {
        get: function (b5, b3) {
            var b6 = bJ.prop(b5, b3),
                e = typeof b6 === "boolean" && b5.getAttribute(b3),
                b4 = typeof b6 === "boolean" ? bF && bP ? e != null : aq.test(b3) ? b5[bJ.camelCase("default-" + b3)] : !!e : b5.getAttributeNode(b3);
            return b4 && b4.value !== false ? b3.toLowerCase() : aG
        }, set: function (b3, b4, e) {
            if (b4 === false) {
                bJ.removeAttr(b3, e)
            } else {
                if (bF && bP || !aq.test(e)) {
                    b3.setAttribute(!bP && bJ.propFix[e] || e, e)
                } else {
                    b3[bJ.camelCase("default-" + e)] = b3[e] = true
                }
            }
            return e
        }
    };
    if (!bF || !bP) {
        bJ.attrHooks.value = {
            get: function (b4, b3) {
                var e = b4.getAttributeNode(b3);
                return bJ.nodeName(b4, "input") ? b4.defaultValue : e && e.specified ? e.value : aG
            }, set: function (b3, b4, e) {
                if (bJ.nodeName(b3, "input")) {
                    b3.defaultValue = b4
                } else {
                    return a8 && a8.set(b3, b4, e)
                }
            }
        }
    }
    if (!bP) {
        a8 = bJ.valHooks.button = {
            get: function (b4, b3) {
                var e = b4.getAttributeNode(b3);
                return e && (b3 === "id" || b3 === "name" || b3 === "coords" ? e.value !== "" : e.specified) ? e.value : aG
            }, set: function (b4, b5, b3) {
                var e = b4.getAttributeNode(b3);
                if (!e) {
                    b4.setAttributeNode((e = b4.ownerDocument.createAttribute(b3)))
                }
                e.value = b5 += "";
                return b3 === "value" || b5 === b4.getAttribute(b3) ? b5 : aG
            }
        };
        bJ.attrHooks.contenteditable = {
            get: a8.get,
            set: function (b3, b4, e) {
                a8.set(b3, b4 === "" ? false : b4, e)
            }
        };
        bJ.each(["width", "height"], function (b3, e) {
            bJ.attrHooks[e] = bJ.extend(bJ.attrHooks[e], {
                set: function (b4, b5) {
                    if (b5 === "") {
                        b4.setAttribute(e, "auto");
                        return b5
                    }
                }
            })
        })
    }
    if (!bJ.support.hrefNormalized) {
        bJ.each(["href", "src", "width", "height"], function (b3, e) {
            bJ.attrHooks[e] = bJ.extend(bJ.attrHooks[e], {
                get: function (b5) {
                    var b4 = b5.getAttribute(e, 2);
                    return b4 == null ? aG : b4
                }
            })
        });
        bJ.each(["href", "src"], function (b3, e) {
            bJ.propHooks[e] = {
                get: function (b4) {
                    return b4.getAttribute(e, 4)
                }
            }
        })
    }
    if (!bJ.support.style) {
        bJ.attrHooks.style = {
            get: function (e) {
                return e.style.cssText || aG
            }, set: function (e, b3) {
                return (e.style.cssText = b3 + "")
            }
        }
    }
    if (!bJ.support.optSelected) {
        bJ.propHooks.selected = bJ.extend(bJ.propHooks.selected, {
            get: function (b3) {
                var e = b3.parentNode;
                if (e) {
                    e.selectedIndex;
                    if (e.parentNode) {
                        e.parentNode.selectedIndex
                    }
                }
                return null
            }
        })
    }
    if (!bJ.support.enctype) {
        bJ.propFix.enctype = "encoding"
    }
    if (!bJ.support.checkOn) {
        bJ.each(["radio", "checkbox"], function () {
            bJ.valHooks[this] = {
                get: function (e) {
                    return e.getAttribute("value") === null ? "on" : e.value
                }
            }
        })
    }
    bJ.each(["radio", "checkbox"], function () {
        bJ.valHooks[this] = bJ.extend(bJ.valHooks[this], {
            set: function (e, b3) {
                if (bJ.isArray(b3)) {
                    return (e.checked = bJ.inArray(bJ(e).val(), b3) >= 0)
                }
            }
        })
    });
    var bH = /^(?:input|select|textarea)$/i,
        a3 = /^key/,
        bN = /^(?:mouse|contextmenu)|click/,
        bB = /^(?:focusinfocus|focusoutblur)$/,
        bu = /^([^.]*)(?:\.(.+)|)$/;

    function R() {
        return true
    }

    function X() {
        return false
    }
    bJ.event = {
        global: {},
        add: function (b6, cb, cg, b8, b7) {
            var b9, ch, ci, b4, cd, ca, cf, b5, ce, e, b3, cc = bJ._data(b6);
            if (!cc) {
                return
            }
            if (cg.handler) {
                b4 = cg;
                cg = b4.handler;
                b7 = b4.selector
            }
            if (!cg.guid) {
                cg.guid = bJ.guid++
            }
            if (!(ch = cc.events)) {
                ch = cc.events = {}
            }
            if (!(ca = cc.handle)) {
                ca = cc.handle = function (cj) {
                    return typeof bJ !== aC && (!cj || bJ.event.triggered !== cj.type) ? bJ.event.dispatch.apply(ca.elem, arguments) : aG
                };
                ca.elem = b6
            }
            cb = (cb || "").match(ac) || [""];
            ci = cb.length;
            while (ci--) {
                b9 = bu.exec(cb[ci]) || [];
                ce = b3 = b9[1];
                e = (b9[2] || "").split(".").sort();
                cd = bJ.event.special[ce] || {};
                ce = (b7 ? cd.delegateType : cd.bindType) || ce;
                cd = bJ.event.special[ce] || {};
                cf = bJ.extend({
                    type: ce,
                    origType: b3,
                    data: b8,
                    handler: cg,
                    guid: cg.guid,
                    selector: b7,
                    needsContext: b7 && bJ.expr.match.needsContext.test(b7),
                    namespace: e.join(".")
                }, b4);
                if (!(b5 = ch[ce])) {
                    b5 = ch[ce] = [];
                    b5.delegateCount = 0;
                    if (!cd.setup || cd.setup.call(b6, b8, e, ca) === false) {
                        if (b6.addEventListener) {
                            b6.addEventListener(ce, ca, false)
                        } else {
                            if (b6.attachEvent) {
                                b6.attachEvent("on" + ce, ca)
                            }
                        }
                    }
                }
                if (cd.add) {
                    cd.add.call(b6, cf);
                    if (!cf.handler.guid) {
                        cf.handler.guid = cg.guid
                    }
                }
                if (b7) {
                    b5.splice(b5.delegateCount++, 0, cf)
                } else {
                    b5.push(cf)
                }
                bJ.event.global[ce] = true
            }
            b6 = null
        }, remove: function (b5, cb, ci, b6, ca) {
            var b8, cf, b9, b7, ch, cg, cd, b4, ce, e, b3, cc = bJ.hasData(b5) && bJ._data(b5);
            if (!cc || !(cg = cc.events)) {
                return
            }
            cb = (cb || "").match(ac) || [""];
            ch = cb.length;
            while (ch--) {
                b9 = bu.exec(cb[ch]) || [];
                ce = b3 = b9[1];
                e = (b9[2] || "").split(".").sort();
                if (!ce) {
                    for (ce in cg) {
                        bJ.event.remove(b5, ce + cb[ch], ci, b6, true)
                    }
                    continue
                }
                cd = bJ.event.special[ce] || {};
                ce = (b6 ? cd.delegateType : cd.bindType) || ce;
                b4 = cg[ce] || [];
                b9 = b9[2] && new RegExp("(^|\\.)" + e.join("\\.(?:.*\\.|)") + "(\\.|$)");
                b7 = b8 = b4.length;
                while (b8--) {
                    cf = b4[b8];
                    if ((ca || b3 === cf.origType) && (!ci || ci.guid === cf.guid) && (!b9 || b9.test(cf.namespace)) && (!b6 || b6 === cf.selector || b6 === "**" && cf.selector)) {
                        b4.splice(b8, 1);
                        if (cf.selector) {
                            b4.delegateCount--
                        }
                        if (cd.remove) {
                            cd.remove.call(b5, cf)
                        }
                    }
                }
                if (b7 && !b4.length) {
                    if (!cd.teardown || cd.teardown.call(b5, e, cc.handle) === false) {
                        bJ.removeEvent(b5, ce, cc.handle)
                    }
                    delete cg[ce]
                }
            }
            if (bJ.isEmptyObject(cg)) {
                delete cc.handle;
                bJ._removeData(b5, "events")
            }
        }, trigger: function (b3, ca, b6, ch) {
            var cb, b5, cf, cg, cd, b9, b8, b7 = [b6 || l],
                ce = V.call(b3, "type") ? b3.type : b3,
                b4 = V.call(b3, "namespace") ? b3.namespace.split(".") : [];
            cf = b9 = b6 = b6 || l;
            if (b6.nodeType === 3 || b6.nodeType === 8) {
                return
            }
            if (bB.test(ce + bJ.event.triggered)) {
                return
            }
            if (ce.indexOf(".") >= 0) {
                b4 = ce.split(".");
                ce = b4.shift();
                b4.sort()
            }
            b5 = ce.indexOf(":") < 0 && "on" + ce;
            b3 = b3[bJ.expando] ? b3 : new bJ.Event(ce, typeof b3 === "object" && b3);
            b3.isTrigger = true;
            b3.namespace = b4.join(".");
            b3.namespace_re = b3.namespace ? new RegExp("(^|\\.)" + b4.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            b3.result = aG;
            if (!b3.target) {
                b3.target = b6
            }
            ca = ca == null ? [b3] : bJ.makeArray(ca, [b3]);
            cd = bJ.event.special[ce] || {};
            if (!ch && cd.trigger && cd.trigger.apply(b6, ca) === false) {
                return
            }
            if (!ch && !cd.noBubble && !bJ.isWindow(b6)) {
                cg = cd.delegateType || ce;
                if (!bB.test(cg + ce)) {
                    cf = cf.parentNode
                }
                for (; cf; cf = cf.parentNode) {
                    b7.push(cf);
                    b9 = cf
                }
                if (b9 === (b6.ownerDocument || l)) {
                    b7.push(b9.defaultView || b9.parentWindow || a2)
                }
            }
            b8 = 0;
            while ((cf = b7[b8++]) && !b3.isPropagationStopped()) {
                b3.type = b8 > 1 ? cg : cd.bindType || ce;
                cb = (bJ._data(cf, "events") || {})[b3.type] && bJ._data(cf, "handle");
                if (cb) {
                    cb.apply(cf, ca)
                }
                cb = b5 && cf[b5];
                if (cb && bJ.acceptData(cf) && cb.apply && cb.apply(cf, ca) === false) {
                    b3.preventDefault()
                }
            }
            b3.type = ce;
            if (!ch && !b3.isDefaultPrevented()) {
                if ((!cd._default || cd._default.apply(b6.ownerDocument, ca) === false) && !(ce === "click" && bJ.nodeName(b6, "a")) && bJ.acceptData(b6)) {
                    if (b5 && b6[ce] && !bJ.isWindow(b6)) {
                        b9 = b6[b5];
                        if (b9) {
                            b6[b5] = null
                        }
                        bJ.event.triggered = ce;
                        try {
                            b6[ce]()
                        } catch (cc) {}
                        bJ.event.triggered = aG;
                        if (b9) {
                            b6[b5] = b9
                        }
                    }
                }
            }
            return b3.result
        }, dispatch: function (e) {
            e = bJ.event.fix(e);
            var b6, b7, cb, b3, b5, ca = [],
                b9 = a4.call(arguments),
                b4 = (bJ._data(this, "events") || {})[e.type] || [],
                b8 = bJ.event.special[e.type] || {};
            b9[0] = e;
            e.delegateTarget = this;
            if (b8.preDispatch && b8.preDispatch.call(this, e) === false) {
                return
            }
            ca = bJ.event.handlers.call(this, e, b4);
            b6 = 0;
            while ((b3 = ca[b6++]) && !e.isPropagationStopped()) {
                e.currentTarget = b3.elem;
                b5 = 0;
                while ((cb = b3.handlers[b5++]) && !e.isImmediatePropagationStopped()) {
                    if (!e.namespace_re || e.namespace_re.test(cb.namespace)) {
                        e.handleObj = cb;
                        e.data = cb.data;
                        b7 = ((bJ.event.special[cb.origType] || {}).handle || cb.handler).apply(b3.elem, b9);
                        if (b7 !== aG) {
                            if ((e.result = b7) === false) {
                                e.preventDefault();
                                e.stopPropagation()
                            }
                        }
                    }
                }
            }
            if (b8.postDispatch) {
                b8.postDispatch.call(this, e)
            }
            return e.result
        }, handlers: function (e, b4) {
            var b3, b9, b7, b6, b8 = [],
                b5 = b4.delegateCount,
                ca = e.target;
            if (b5 && ca.nodeType && (!e.button || e.type !== "click")) {
                for (; ca != this; ca = ca.parentNode || this) {
                    if (ca.nodeType === 1 && (ca.disabled !== true || e.type !== "click")) {
                        b7 = [];
                        for (b6 = 0; b6 < b5; b6++) {
                            b9 = b4[b6];
                            b3 = b9.selector + " ";
                            if (b7[b3] === aG) {
                                b7[b3] = b9.needsContext ? bJ(b3, this).index(ca) >= 0 : bJ.find(b3, this, null, [ca]).length
                            }
                            if (b7[b3]) {
                                b7.push(b9)
                            }
                        }
                        if (b7.length) {
                            b8.push({
                                elem: ca,
                                handlers: b7
                            })
                        }
                    }
                }
            }
            if (b5 < b4.length) {
                b8.push({
                    elem: this,
                    handlers: b4.slice(b5)
                })
            }
            return b8
        }, fix: function (b5) {
            if (b5[bJ.expando]) {
                return b5
            }
            var b3, b8, b7, b4 = b5.type,
                e = b5,
                b6 = this.fixHooks[b4];
            if (!b6) {
                this.fixHooks[b4] = b6 = bN.test(b4) ? this.mouseHooks : a3.test(b4) ? this.keyHooks : {}
            }
            b7 = b6.props ? this.props.concat(b6.props) : this.props;
            b5 = new bJ.Event(e);
            b3 = b7.length;
            while (b3--) {
                b8 = b7[b3];
                b5[b8] = e[b8]
            }
            if (!b5.target) {
                b5.target = e.srcElement || l
            }
            if (b5.target.nodeType === 3) {
                b5.target = b5.target.parentNode
            }
            b5.metaKey = !!b5.metaKey;
            return b6.filter ? b6.filter(b5, e) : b5
        }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (b3, e) {
                if (b3.which == null) {
                    b3.which = e.charCode != null ? e.charCode : e.keyCode
                }
                return b3
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (b5, b4) {
                var e, b6, b7, b3 = b4.button,
                    b8 = b4.fromElement;
                if (b5.pageX == null && b4.clientX != null) {
                    b6 = b5.target.ownerDocument || l;
                    b7 = b6.documentElement;
                    e = b6.body;
                    b5.pageX = b4.clientX + (b7 && b7.scrollLeft || e && e.scrollLeft || 0) - (b7 && b7.clientLeft || e && e.clientLeft || 0);
                    b5.pageY = b4.clientY + (b7 && b7.scrollTop || e && e.scrollTop || 0) - (b7 && b7.clientTop || e && e.clientTop || 0)
                }
                if (!b5.relatedTarget && b8) {
                    b5.relatedTarget = b8 === b5.target ? b4.toElement : b8
                }
                if (!b5.which && b3 !== aG) {
                    b5.which = (b3 & 1 ? 1 : (b3 & 2 ? 3 : (b3 & 4 ? 2 : 0)))
                }
                return b5
            }
        },
        special: {
            load: {
                noBubble: true
            },
            click: {
                trigger: function () {
                    if (bJ.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                        this.click();
                        return false
                    }
                }
            },
            focus: {
                trigger: function () {
                    if (this !== l.activeElement && this.focus) {
                        try {
                            this.focus();
                            return false
                        } catch (b3) {}
                    }
                }, delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === l.activeElement && this.blur) {
                        this.blur();
                        return false
                    }
                }, delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function (e) {
                    if (e.result !== aG) {
                        e.originalEvent.returnValue = e.result
                    }
                }
            }
        },
        simulate: function (b4, b6, b5, b3) {
            var b7 = bJ.extend(new bJ.Event(), b5, {
                type: b4,
                isSimulated: true,
                originalEvent: {}
            });
            if (b3) {
                bJ.event.trigger(b7, null, b6)
            } else {
                bJ.event.dispatch.call(b6, b7)
            } if (b7.isDefaultPrevented()) {
                b5.preventDefault()
            }
        }
    };
    bJ.removeEvent = l.removeEventListener ? function (b3, e, b4) {
        if (b3.removeEventListener) {
            b3.removeEventListener(e, b4, false)
        }
    } : function (b4, b3, b5) {
        var e = "on" + b3;
        if (b4.detachEvent) {
            if (typeof b4[e] === aC) {
                b4[e] = null
            }
            b4.detachEvent(e, b5)
        }
    };
    bJ.Event = function (b3, e) {
        if (!(this instanceof bJ.Event)) {
            return new bJ.Event(b3, e)
        }
        if (b3 && b3.type) {
            this.originalEvent = b3;
            this.type = b3.type;
            this.isDefaultPrevented = (b3.defaultPrevented || b3.returnValue === false || b3.getPreventDefault && b3.getPreventDefault()) ? R : X
        } else {
            this.type = b3
        } if (e) {
            bJ.extend(this, e)
        }
        this.timeStamp = b3 && b3.timeStamp || bJ.now();
        this[bJ.expando] = true
    };
    bJ.Event.prototype = {
        isDefaultPrevented: X,
        isPropagationStopped: X,
        isImmediatePropagationStopped: X,
        preventDefault: function () {
            var b3 = this.originalEvent;
            this.isDefaultPrevented = R;
            if (!b3) {
                return
            }
            if (b3.preventDefault) {
                b3.preventDefault()
            } else {
                b3.returnValue = false
            }
        }, stopPropagation: function () {
            var b3 = this.originalEvent;
            this.isPropagationStopped = R;
            if (!b3) {
                return
            }
            if (b3.stopPropagation) {
                b3.stopPropagation()
            }
            b3.cancelBubble = true
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = R;
            this.stopPropagation()
        }
    };
    bJ.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (b3, e) {
        bJ.event.special[b3] = {
            delegateType: e,
            bindType: e,
            handle: function (b6) {
                var b4, b8 = this,
                    b7 = b6.relatedTarget,
                    b5 = b6.handleObj;
                if (!b7 || (b7 !== b8 && !bJ.contains(b8, b7))) {
                    b6.type = b5.origType;
                    b4 = b5.handler.apply(this, arguments);
                    b6.type = e
                }
                return b4
            }
        }
    });
    if (!bJ.support.submitBubbles) {
        bJ.event.special.submit = {
            setup: function () {
                if (bJ.nodeName(this, "form")) {
                    return false
                }
                bJ.event.add(this, "click._submit keypress._submit", function (b5) {
                    var b4 = b5.target,
                        b3 = bJ.nodeName(b4, "input") || bJ.nodeName(b4, "button") ? b4.form : aG;
                    if (b3 && !bJ._data(b3, "submitBubbles")) {
                        bJ.event.add(b3, "submit._submit", function (e) {
                            e._submit_bubble = true
                        });
                        bJ._data(b3, "submitBubbles", true)
                    }
                })
            }, postDispatch: function (e) {
                if (e._submit_bubble) {
                    delete e._submit_bubble;
                    if (this.parentNode && !e.isTrigger) {
                        bJ.event.simulate("submit", this.parentNode, e, true)
                    }
                }
            }, teardown: function () {
                if (bJ.nodeName(this, "form")) {
                    return false
                }
                bJ.event.remove(this, "._submit")
            }
        }
    }
    if (!bJ.support.changeBubbles) {
        bJ.event.special.change = {
            setup: function () {
                if (bH.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        bJ.event.add(this, "propertychange._change", function (e) {
                            if (e.originalEvent.propertyName === "checked") {
                                this._just_changed = true
                            }
                        });
                        bJ.event.add(this, "click._change", function (e) {
                            if (this._just_changed && !e.isTrigger) {
                                this._just_changed = false
                            }
                            bJ.event.simulate("change", this, e, true)
                        })
                    }
                    return false
                }
                bJ.event.add(this, "beforeactivate._change", function (b4) {
                    var b3 = b4.target;
                    if (bH.test(b3.nodeName) && !bJ._data(b3, "changeBubbles")) {
                        bJ.event.add(b3, "change._change", function (e) {
                            if (this.parentNode && !e.isSimulated && !e.isTrigger) {
                                bJ.event.simulate("change", this.parentNode, e, true)
                            }
                        });
                        bJ._data(b3, "changeBubbles", true)
                    }
                })
            }, handle: function (b3) {
                var e = b3.target;
                if (this !== e || b3.isSimulated || b3.isTrigger || (e.type !== "radio" && e.type !== "checkbox")) {
                    return b3.handleObj.handler.apply(this, arguments)
                }
            }, teardown: function () {
                bJ.event.remove(this, "._change");
                return !bH.test(this.nodeName)
            }
        }
    }
    if (!bJ.support.focusinBubbles) {
        bJ.each({
            focus: "focusin",
            blur: "focusout"
        }, function (b5, e) {
            var b3 = 0,
                b4 = function (b6) {
                    bJ.event.simulate(e, b6.target, bJ.event.fix(b6), true)
                };
            bJ.event.special[e] = {
                setup: function () {
                    if (b3++ === 0) {
                        l.addEventListener(b5, b4, true)
                    }
                }, teardown: function () {
                    if (--b3 === 0) {
                        l.removeEventListener(b5, b4, true)
                    }
                }
            }
        })
    }
    bJ.fn.extend({
        on: function (b4, e, b7, b6, b3) {
            var b5, b8;
            if (typeof b4 === "object") {
                if (typeof e !== "string") {
                    b7 = b7 || e;
                    e = aG
                }
                for (b5 in b4) {
                    this.on(b5, e, b7, b4[b5], b3)
                }
                return this
            }
            if (b7 == null && b6 == null) {
                b6 = e;
                b7 = e = aG
            } else {
                if (b6 == null) {
                    if (typeof e === "string") {
                        b6 = b7;
                        b7 = aG
                    } else {
                        b6 = b7;
                        b7 = e;
                        e = aG
                    }
                }
            } if (b6 === false) {
                b6 = X
            } else {
                if (!b6) {
                    return this
                }
            } if (b3 === 1) {
                b8 = b6;
                b6 = function (b9) {
                    bJ().off(b9);
                    return b8.apply(this, arguments)
                };
                b6.guid = b8.guid || (b8.guid = bJ.guid++)
            }
            return this.each(function () {
                bJ.event.add(this, b4, b6, b7, e)
            })
        }, one: function (b3, e, b5, b4) {
            return this.on(b3, e, b5, b4, 1)
        }, off: function (b4, e, b6) {
            var b3, b5;
            if (b4 && b4.preventDefault && b4.handleObj) {
                b3 = b4.handleObj;
                bJ(b4.delegateTarget).off(b3.namespace ? b3.origType + "." + b3.namespace : b3.origType, b3.selector, b3.handler);
                return this
            }
            if (typeof b4 === "object") {
                for (b5 in b4) {
                    this.off(b5, e, b4[b5])
                }
                return this
            }
            if (e === false || typeof e === "function") {
                b6 = e;
                e = aG
            }
            if (b6 === false) {
                b6 = X
            }
            return this.each(function () {
                bJ.event.remove(this, b4, b6, e)
            })
        }, bind: function (e, b4, b3) {
            return this.on(e, null, b4, b3)
        }, unbind: function (e, b3) {
            return this.off(e, null, b3)
        }, delegate: function (e, b3, b5, b4) {
            return this.on(b3, e, b5, b4)
        }, undelegate: function (e, b3, b4) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(b3, e || "**", b4)
        }, trigger: function (e, b3) {
            return this.each(function () {
                bJ.event.trigger(e, b3, this)
            })
        }, triggerHandler: function (e, b4) {
            var b3 = this[0];
            if (b3) {
                return bJ.event.trigger(e, b4, b3, true)
            }
        }
    });
    /*!
     * Sizzle CSS Selector Engine
     * Copyright 2012 jQuery Foundation and other contributors
     * Released under the MIT license
     * http://sizzlejs.com/
     */
    (function (da, ch) {
        var cx, cb, cn, cH, cJ, cS, cT, dg, cV, cB, co, cd, cZ, db, ca, cF, cD, c5 = "sizzle" + -(new Date()),
            cI = da.document,
            dd = {},
            de = 0,
            c0 = 0,
            b5 = cz(),
            c4 = cz(),
            cG = cz(),
            c9 = typeof ch,
            cN = 1 << 31,
            c7 = [],
            c8 = c7.pop,
            b4 = c7.push,
            cm = c7.slice,
            b9 = c7.indexOf || function (di) {
                var dh = 0,
                    e = this.length;
                for (; dh < e; dh++) {
                    if (this[dh] === di) {
                        return dh
                    }
                }
                return -1
            },
            cp = "[\\x20\\t\\r\\n\\f]",
            b3 = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            cK = b3.replace("w", "w#"),
            ci = "([*^$|!~]?=)",
            c2 = "\\[" + cp + "*(" + b3 + ")" + cp + "*(?:" + ci + cp + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + cK + ")|)|)" + cp + "*\\]",
            ck = ":(" + b3 + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + c2.replace(3, 8) + ")*)|.*)\\)|)",
            cr = new RegExp("^" + cp + "+|((?:^|[^\\\\])(?:\\\\.)*)" + cp + "+$", "g"),
            cu = new RegExp("^" + cp + "*," + cp + "*"),
            cA = new RegExp("^" + cp + "*([\\x20\\t\\r\\n\\f>+~])" + cp + "*"),
            cP = new RegExp(ck),
            cQ = new RegExp("^" + cK + "$"),
            cY = {
                ID: new RegExp("^#(" + b3 + ")"),
                CLASS: new RegExp("^\\.(" + b3 + ")"),
                NAME: new RegExp("^\\[name=['\"]?(" + b3 + ")['\"]?\\]"),
                TAG: new RegExp("^(" + b3.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + c2),
                PSEUDO: new RegExp("^" + ck),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + cp + "*(even|odd|(([+-]|)(\\d*)n|)" + cp + "*(?:([+-]|)" + cp + "*(\\d+)|))" + cp + "*\\)|)", "i"),
                needsContext: new RegExp("^" + cp + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + cp + "*((?:-\\d)?\\d*)" + cp + "*\\)|)(?=[^-]|$)", "i")
            },
            cW = /[\x20\t\r\n\f]*[+~]/,
            cM = /^[^{]+\{\s*\[native code/,
            cO = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            b8 = /^(?:input|select|textarea|button)$/i,
            cl = /^h\d$/i,
            cL = /'|\\/g,
            ct = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            cs = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
            c1 = function (e, di) {
                var dh = "0x" + di - 65536;
                return dh !== dh ? di : dh < 0 ? String.fromCharCode(dh + 65536) : String.fromCharCode(dh >> 10 | 55296, dh & 1023 | 56320)
            };
        try {
            cm.call(cI.documentElement.childNodes, 0)[0].nodeType
        } catch (cC) {
            cm = function (dh) {
                var di, e = [];
                while ((di = this[dh++])) {
                    e.push(di)
                }
                return e
            }
        }

        function cE(e) {
            return cM.test(e + "")
        }

        function cz() {
            var e, dh = [];
            return (e = function (di, dj) {
                if (dh.push(di += " ") > cn.cacheLength) {
                    delete e[dh.shift()]
                }
                return (e[di] = dj)
            })
        }

        function cj(e) {
            e[c5] = true;
            return e
        }

        function cc(dh) {
            var dj = cB.createElement("div");
            try {
                return dh(dj)
            } catch (di) {
                return false
            } finally {
                dj = null
            }
        }

        function cv(dp, dh, dt, dv) {
            var du, dl, dm, dr, ds, dk, dj, e, di, dq;
            if ((dh ? dh.ownerDocument || dh : cI) !== cB) {
                cV(dh)
            }
            dh = dh || cB;
            dt = dt || [];
            if (!dp || typeof dp !== "string") {
                return dt
            }
            if ((dr = dh.nodeType) !== 1 && dr !== 9) {
                return []
            }
            if (!cd && !dv) {
                if ((du = cO.exec(dp))) {
                    if ((dm = du[1])) {
                        if (dr === 9) {
                            dl = dh.getElementById(dm);
                            if (dl && dl.parentNode) {
                                if (dl.id === dm) {
                                    dt.push(dl);
                                    return dt
                                }
                            } else {
                                return dt
                            }
                        } else {
                            if (dh.ownerDocument && (dl = dh.ownerDocument.getElementById(dm)) && cF(dh, dl) && dl.id === dm) {
                                dt.push(dl);
                                return dt
                            }
                        }
                    } else {
                        if (du[2]) {
                            b4.apply(dt, cm.call(dh.getElementsByTagName(dp), 0));
                            return dt
                        } else {
                            if ((dm = du[3]) && dd.getByClassName && dh.getElementsByClassName) {
                                b4.apply(dt, cm.call(dh.getElementsByClassName(dm), 0));
                                return dt
                            }
                        }
                    }
                }
                if (dd.qsa && !cZ.test(dp)) {
                    dj = true;
                    e = c5;
                    di = dh;
                    dq = dr === 9 && dp;
                    if (dr === 1 && dh.nodeName.toLowerCase() !== "object") {
                        dk = cf(dp);
                        if ((dj = dh.getAttribute("id"))) {
                            e = dj.replace(cL, "\\$&")
                        } else {
                            dh.setAttribute("id", e)
                        }
                        e = "[id='" + e + "'] ";
                        ds = dk.length;
                        while (ds--) {
                            dk[ds] = e + cg(dk[ds])
                        }
                        di = cW.test(dp) && dh.parentNode || dh;
                        dq = dk.join(",")
                    }
                    if (dq) {
                        try {
                            b4.apply(dt, cm.call(di.querySelectorAll(dq), 0));
                            return dt
                        } catch (dn) {} finally {
                            if (!dj) {
                                dh.removeAttribute("id")
                            }
                        }
                    }
                }
            }
            return dc(dp.replace(cr, "$1"), dh, dt, dv)
        }
        cJ = cv.isXML = function (e) {
            var dh = e && (e.ownerDocument || e).documentElement;
            return dh ? dh.nodeName !== "HTML" : false
        };
        cV = cv.setDocument = function (e) {
            var dh = e ? e.ownerDocument || e : cI;
            if (dh === cB || dh.nodeType !== 9 || !dh.documentElement) {
                return cB
            }
            cB = dh;
            co = dh.documentElement;
            cd = cJ(dh);
            dd.tagNameNoComments = cc(function (di) {
                di.appendChild(dh.createComment(""));
                return !di.getElementsByTagName("*").length
            });
            dd.attributes = cc(function (dj) {
                dj.innerHTML = "<select></select>";
                var di = typeof dj.lastChild.getAttribute("multiple");
                return di !== "boolean" && di !== "string"
            });
            dd.getByClassName = cc(function (di) {
                di.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
                if (!di.getElementsByClassName || !di.getElementsByClassName("e").length) {
                    return false
                }
                di.lastChild.className = "e";
                return di.getElementsByClassName("e").length === 2
            });
            dd.getByName = cc(function (dj) {
                dj.id = c5 + 0;
                dj.innerHTML = "<a name='" + c5 + "'></a><div name='" + c5 + "'></div>";
                co.insertBefore(dj, co.firstChild);
                var di = dh.getElementsByName && dh.getElementsByName(c5).length === 2 + dh.getElementsByName(c5 + 0).length;
                dd.getIdNotName = !dh.getElementById(c5);
                co.removeChild(dj);
                return di
            });
            cn.attrHandle = cc(function (di) {
                di.innerHTML = "<a href='#'></a>";
                return di.firstChild && typeof di.firstChild.getAttribute !== c9 && di.firstChild.getAttribute("href") === "#"
            }) ? {} : {
                href: function (di) {
                    return di.getAttribute("href", 2)
                }, type: function (di) {
                    return di.getAttribute("type")
                }
            };
            if (dd.getIdNotName) {
                cn.find.ID = function (dk, dj) {
                    if (typeof dj.getElementById !== c9 && !cd) {
                        var di = dj.getElementById(dk);
                        return di && di.parentNode ? [di] : []
                    }
                };
                cn.filter.ID = function (dj) {
                    var di = dj.replace(cs, c1);
                    return function (dk) {
                        return dk.getAttribute("id") === di
                    }
                }
            } else {
                cn.find.ID = function (dk, dj) {
                    if (typeof dj.getElementById !== c9 && !cd) {
                        var di = dj.getElementById(dk);
                        return di ? di.id === dk || typeof di.getAttributeNode !== c9 && di.getAttributeNode("id").value === dk ? [di] : ch : []
                    }
                };
                cn.filter.ID = function (dj) {
                    var di = dj.replace(cs, c1);
                    return function (dl) {
                        var dk = typeof dl.getAttributeNode !== c9 && dl.getAttributeNode("id");
                        return dk && dk.value === di
                    }
                }
            }
            cn.find.TAG = dd.tagNameNoComments ? function (di, dj) {
                if (typeof dj.getElementsByTagName !== c9) {
                    return dj.getElementsByTagName(di)
                }
            } : function (di, dm) {
                var dn, dl = [],
                    dk = 0,
                    dj = dm.getElementsByTagName(di);
                if (di === "*") {
                    while ((dn = dj[dk++])) {
                        if (dn.nodeType === 1) {
                            dl.push(dn)
                        }
                    }
                    return dl
                }
                return dj
            };
            cn.find.NAME = dd.getByName && function (di, dj) {
                if (typeof dj.getElementsByName !== c9) {
                    return dj.getElementsByName(name)
                }
            };
            cn.find.CLASS = dd.getByClassName && function (dj, di) {
                if (typeof di.getElementsByClassName !== c9 && !cd) {
                    return di.getElementsByClassName(dj)
                }
            };
            db = [];
            cZ = [":focus"];
            if ((dd.qsa = cE(dh.querySelectorAll))) {
                cc(function (di) {
                    di.innerHTML = "<select><option selected=''></option></select>";
                    if (!di.querySelectorAll("[selected]").length) {
                        cZ.push("\\[" + cp + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)")
                    }
                    if (!di.querySelectorAll(":checked").length) {
                        cZ.push(":checked")
                    }
                });
                cc(function (di) {
                    di.innerHTML = "<input type='hidden' i=''/>";
                    if (di.querySelectorAll("[i^='']").length) {
                        cZ.push("[*^$]=" + cp + "*(?:\"\"|'')")
                    }
                    if (!di.querySelectorAll(":enabled").length) {
                        cZ.push(":enabled", ":disabled")
                    }
                    di.querySelectorAll("*,:x");
                    cZ.push(",.*:")
                })
            }
            if ((dd.matchesSelector = cE((ca = co.matchesSelector || co.mozMatchesSelector || co.webkitMatchesSelector || co.oMatchesSelector || co.msMatchesSelector)))) {
                cc(function (di) {
                    dd.disconnectedMatch = ca.call(di, "div");
                    ca.call(di, "[s!='']:x");
                    db.push("!=", ck)
                })
            }
            cZ = new RegExp(cZ.join("|"));
            db = new RegExp(db.join("|"));
            cF = cE(co.contains) || co.compareDocumentPosition ? function (dj, di) {
                var dl = dj.nodeType === 9 ? dj.documentElement : dj,
                    dk = di && di.parentNode;
                return dj === dk || !!(dk && dk.nodeType === 1 && (dl.contains ? dl.contains(dk) : dj.compareDocumentPosition && dj.compareDocumentPosition(dk) & 16))
            } : function (dj, di) {
                if (di) {
                    while ((di = di.parentNode)) {
                        if (di === dj) {
                            return true
                        }
                    }
                }
                return false
            };
            cD = co.compareDocumentPosition ? function (dj, di) {
                var dk;
                if (dj === di) {
                    cT = true;
                    return 0
                }
                if ((dk = di.compareDocumentPosition && dj.compareDocumentPosition && dj.compareDocumentPosition(di))) {
                    if (dk & 1 || dj.parentNode && dj.parentNode.nodeType === 11) {
                        if (dj === dh || cF(cI, dj)) {
                            return -1
                        }
                        if (di === dh || cF(cI, di)) {
                            return 1
                        }
                        return 0
                    }
                    return dk & 4 ? -1 : 1
                }
                return dj.compareDocumentPosition ? -1 : 1
            } : function (dj, di) {
                var dq, dm = 0,
                    dp = dj.parentNode,
                    dl = di.parentNode,
                    dk = [dj],
                    dn = [di];
                if (dj === di) {
                    cT = true;
                    return 0
                } else {
                    if (!dp || !dl) {
                        return dj === dh ? -1 : di === dh ? 1 : dp ? -1 : dl ? 1 : 0
                    } else {
                        if (dp === dl) {
                            return b6(dj, di)
                        }
                    }
                }
                dq = dj;
                while ((dq = dq.parentNode)) {
                    dk.unshift(dq)
                }
                dq = di;
                while ((dq = dq.parentNode)) {
                    dn.unshift(dq)
                }
                while (dk[dm] === dn[dm]) {
                    dm++
                }
                return dm ? b6(dk[dm], dn[dm]) : dk[dm] === cI ? -1 : dn[dm] === cI ? 1 : 0
            };
            cT = false;
            [0, 0].sort(cD);
            dd.detectDuplicates = cT;
            return cB
        };
        cv.matches = function (dh, e) {
            return cv(dh, null, null, e)
        };
        cv.matchesSelector = function (di, dk) {
            if ((di.ownerDocument || di) !== cB) {
                cV(di)
            }
            dk = dk.replace(ct, "='$1']");
            if (dd.matchesSelector && !cd && (!db || !db.test(dk)) && !cZ.test(dk)) {
                try {
                    var dh = ca.call(di, dk);
                    if (dh || dd.disconnectedMatch || di.document && di.document.nodeType !== 11) {
                        return dh
                    }
                } catch (dj) {}
            }
            return cv(dk, cB, null, [di]).length > 0
        };
        cv.contains = function (e, dh) {
            if ((e.ownerDocument || e) !== cB) {
                cV(e)
            }
            return cF(e, dh)
        };
        cv.attr = function (dh, e) {
            var di;
            if ((dh.ownerDocument || dh) !== cB) {
                cV(dh)
            }
            if (!cd) {
                e = e.toLowerCase()
            }
            if ((di = cn.attrHandle[e])) {
                return di(dh)
            }
            if (cd || dd.attributes) {
                return dh.getAttribute(e)
            }
            return ((di = dh.getAttributeNode(e)) || dh.getAttribute(e)) && dh[e] === true ? e : di && di.specified ? di.value : null
        };
        cv.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        };
        cv.uniqueSort = function (di) {
            var dj, dk = [],
                dh = 1,
                e = 0;
            cT = !dd.detectDuplicates;
            di.sort(cD);
            if (cT) {
                for (;
                    (dj = di[dh]); dh++) {
                    if (dj === di[dh - 1]) {
                        e = dk.push(dh)
                    }
                }
                while (e--) {
                    di.splice(dk[e], 1)
                }
            }
            return di
        };

        function b6(dh, e) {
            var dj = e && dh,
                di = dj && (~e.sourceIndex || cN) - (~dh.sourceIndex || cN);
            if (di) {
                return di
            }
            if (dj) {
                while ((dj = dj.nextSibling)) {
                    if (dj === e) {
                        return -1
                    }
                }
            }
            return dh ? 1 : -1
        }

        function cw(e) {
            return function (di) {
                var dh = di.nodeName.toLowerCase();
                return dh === "input" && di.type === e
            }
        }

        function b7(e) {
            return function (di) {
                var dh = di.nodeName.toLowerCase();
                return (dh === "input" || dh === "button") && di.type === e
            }
        }

        function c3(e) {
            return cj(function (dh) {
                dh = +dh;
                return cj(function (di, dm) {
                    var dk, dj = e([], di.length, dh),
                        dl = dj.length;
                    while (dl--) {
                        if (di[(dk = dj[dl])]) {
                            di[dk] = !(dm[dk] = di[dk])
                        }
                    }
                })
            })
        }
        cH = cv.getText = function (dk) {
            var dj, dh = "",
                di = 0,
                e = dk.nodeType;
            if (!e) {
                for (;
                    (dj = dk[di]); di++) {
                    dh += cH(dj)
                }
            } else {
                if (e === 1 || e === 9 || e === 11) {
                    if (typeof dk.textContent === "string") {
                        return dk.textContent
                    } else {
                        for (dk = dk.firstChild; dk; dk = dk.nextSibling) {
                            dh += cH(dk)
                        }
                    }
                } else {
                    if (e === 3 || e === 4) {
                        return dk.nodeValue
                    }
                }
            }
            return dh
        };
        cn = cv.selectors = {
            cacheLength: 50,
            createPseudo: cj,
            match: cY,
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    e[1] = e[1].replace(cs, c1);
                    e[3] = (e[4] || e[5] || "").replace(cs, c1);
                    if (e[2] === "~=") {
                        e[3] = " " + e[3] + " "
                    }
                    return e.slice(0, 4)
                }, CHILD: function (e) {
                    e[1] = e[1].toLowerCase();
                    if (e[1].slice(0, 3) === "nth") {
                        if (!e[3]) {
                            cv.error(e[0])
                        }
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                        e[5] = +((e[7] + e[8]) || e[3] === "odd")
                    } else {
                        if (e[3]) {
                            cv.error(e[0])
                        }
                    }
                    return e
                }, PSEUDO: function (dh) {
                    var e, di = !dh[5] && dh[2];
                    if (cY.CHILD.test(dh[0])) {
                        return null
                    }
                    if (dh[4]) {
                        dh[2] = dh[4]
                    } else {
                        if (di && cP.test(di) && (e = cf(di, true)) && (e = di.indexOf(")", di.length - e) - di.length)) {
                            dh[0] = dh[0].slice(0, e);
                            dh[2] = di.slice(0, e)
                        }
                    }
                    return dh.slice(0, 3)
                }
            },
            filter: {
                TAG: function (e) {
                    if (e === "*") {
                        return function () {
                            return true
                        }
                    }
                    e = e.replace(cs, c1).toLowerCase();
                    return function (dh) {
                        return dh.nodeName && dh.nodeName.toLowerCase() === e
                    }
                }, CLASS: function (e) {
                    var dh = b5[e + " "];
                    return dh || (dh = new RegExp("(^|" + cp + ")" + e + "(" + cp + "|$)")) && b5(e, function (di) {
                        return dh.test(di.className || (typeof di.getAttribute !== c9 && di.getAttribute("class")) || "")
                    })
                }, ATTR: function (di, dh, e) {
                    return function (dk) {
                        var dj = cv.attr(dk, di);
                        if (dj == null) {
                            return dh === "!="
                        }
                        if (!dh) {
                            return true
                        }
                        dj += "";
                        return dh === "=" ? dj === e : dh === "!=" ? dj !== e : dh === "^=" ? e && dj.indexOf(e) === 0 : dh === "*=" ? e && dj.indexOf(e) > -1 : dh === "$=" ? e && dj.slice(-e.length) === e : dh === "~=" ? (" " + dj + " ").indexOf(e) > -1 : dh === "|=" ? dj === e || dj.slice(0, e.length + 1) === e + "-" : false
                    }
                }, CHILD: function (dh, dk, dj, dl, di) {
                    var dn = dh.slice(0, 3) !== "nth",
                        e = dh.slice(-4) !== "last",
                        dm = dk === "of-type";
                    return dl === 1 && di === 0 ? function (dp) {
                        return !!dp.parentNode
                    } : function (dv, dt, dy) {
                        var dp, dB, dw, dA, dx, ds, du = dn !== e ? "nextSibling" : "previousSibling",
                            dz = dv.parentNode,
                            dr = dm && dv.nodeName.toLowerCase(),
                            dq = !dy && !dm;
                        if (dz) {
                            if (dn) {
                                while (du) {
                                    dw = dv;
                                    while ((dw = dw[du])) {
                                        if (dm ? dw.nodeName.toLowerCase() === dr : dw.nodeType === 1) {
                                            return false
                                        }
                                    }
                                    ds = du = dh === "only" && !ds && "nextSibling"
                                }
                                return true
                            }
                            ds = [e ? dz.firstChild : dz.lastChild];
                            if (e && dq) {
                                dB = dz[c5] || (dz[c5] = {});
                                dp = dB[dh] || [];
                                dx = dp[0] === de && dp[1];
                                dA = dp[0] === de && dp[2];
                                dw = dx && dz.childNodes[dx];
                                while ((dw = ++dx && dw && dw[du] || (dA = dx = 0) || ds.pop())) {
                                    if (dw.nodeType === 1 && ++dA && dw === dv) {
                                        dB[dh] = [de, dx, dA];
                                        break
                                    }
                                }
                            } else {
                                if (dq && (dp = (dv[c5] || (dv[c5] = {}))[dh]) && dp[0] === de) {
                                    dA = dp[1]
                                } else {
                                    while ((dw = ++dx && dw && dw[du] || (dA = dx = 0) || ds.pop())) {
                                        if ((dm ? dw.nodeName.toLowerCase() === dr : dw.nodeType === 1) && ++dA) {
                                            if (dq) {
                                                (dw[c5] || (dw[c5] = {}))[dh] = [de, dA]
                                            }
                                            if (dw === dv) {
                                                break
                                            }
                                        }
                                    }
                                }
                            }
                            dA -= di;
                            return dA === dl || (dA % dl === 0 && dA / dl >= 0)
                        }
                    }
                }, PSEUDO: function (dj, di) {
                    var e, dh = cn.pseudos[dj] || cn.setFilters[dj.toLowerCase()] || cv.error("unsupported pseudo: " + dj);
                    if (dh[c5]) {
                        return dh(di)
                    }
                    if (dh.length > 1) {
                        e = [dj, dj, "", di];
                        return cn.setFilters.hasOwnProperty(dj.toLowerCase()) ? cj(function (dm, dp) {
                            var dl, dk = dh(dm, di),
                                dn = dk.length;
                            while (dn--) {
                                dl = b9.call(dm, dk[dn]);
                                dm[dl] = !(dp[dl] = dk[dn])
                            }
                        }) : function (dk) {
                            return dh(dk, 0, e)
                        }
                    }
                    return dh
                }
            },
            pseudos: {
                not: cj(function (e) {
                    var dh = [],
                        di = [],
                        dj = cS(e.replace(cr, "$1"));
                    return dj[c5] ? cj(function (dl, dr, dp, dm) {
                        var dq, dk = dj(dl, null, dm, []),
                            dn = dl.length;
                        while (dn--) {
                            if ((dq = dk[dn])) {
                                dl[dn] = !(dr[dn] = dq)
                            }
                        }
                    }) : function (dm, dl, dk) {
                        dh[0] = dm;
                        dj(dh, null, dk, di);
                        return !di.pop()
                    }
                }),
                has: cj(function (e) {
                    return function (dh) {
                        return cv(e, dh).length > 0
                    }
                }),
                contains: cj(function (e) {
                    return function (dh) {
                        return (dh.textContent || dh.innerText || cH(dh)).indexOf(e) > -1
                    }
                }),
                lang: cj(function (e) {
                    if (!cQ.test(e || "")) {
                        cv.error("unsupported lang: " + e)
                    }
                    e = e.replace(cs, c1).toLowerCase();
                    return function (di) {
                        var dh;
                        do {
                            if ((dh = cd ? di.getAttribute("xml:lang") || di.getAttribute("lang") : di.lang)) {
                                dh = dh.toLowerCase();
                                return dh === e || dh.indexOf(e + "-") === 0
                            }
                        } while ((di = di.parentNode) && di.nodeType === 1);
                        return false
                    }
                }),
                target: function (e) {
                    var dh = da.location && da.location.hash;
                    return dh && dh.slice(1) === e.id
                }, root: function (e) {
                    return e === co
                }, focus: function (e) {
                    return e === cB.activeElement && (!cB.hasFocus || cB.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === false
                }, disabled: function (e) {
                    return e.disabled === true
                }, checked: function (e) {
                    var dh = e.nodeName.toLowerCase();
                    return (dh === "input" && !!e.checked) || (dh === "option" && !!e.selected)
                }, selected: function (e) {
                    if (e.parentNode) {
                        e.parentNode.selectedIndex
                    }
                    return e.selected === true
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4) {
                            return false
                        }
                    }
                    return true
                }, parent: function (e) {
                    return !cn.pseudos.empty(e)
                }, header: function (e) {
                    return cl.test(e.nodeName)
                }, input: function (e) {
                    return b8.test(e.nodeName)
                }, button: function (dh) {
                    var e = dh.nodeName.toLowerCase();
                    return e === "input" && dh.type === "button" || e === "button"
                }, text: function (dh) {
                    var e;
                    return dh.nodeName.toLowerCase() === "input" && dh.type === "text" && ((e = dh.getAttribute("type")) == null || e.toLowerCase() === dh.type)
                }, first: c3(function () {
                    return [0]
                }),
                last: c3(function (e, dh) {
                    return [dh - 1]
                }),
                eq: c3(function (e, di, dh) {
                    return [dh < 0 ? dh + di : dh]
                }),
                even: c3(function (e, di) {
                    var dh = 0;
                    for (; dh < di; dh += 2) {
                        e.push(dh)
                    }
                    return e
                }),
                odd: c3(function (e, di) {
                    var dh = 1;
                    for (; dh < di; dh += 2) {
                        e.push(dh)
                    }
                    return e
                }),
                lt: c3(function (e, dj, di) {
                    var dh = di < 0 ? di + dj : di;
                    for (; --dh >= 0;) {
                        e.push(dh)
                    }
                    return e
                }),
                gt: c3(function (e, dj, di) {
                    var dh = di < 0 ? di + dj : di;
                    for (; ++dh < dj;) {
                        e.push(dh)
                    }
                    return e
                })
            }
        };
        for (cx in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        }) {
            cn.pseudos[cx] = cw(cx)
        }
        for (cx in {
            submit: true,
            reset: true
        }) {
            cn.pseudos[cx] = b7(cx)
        }

        function cf(dk, dq) {
            var dh, dl, dn, dp, dm, di, e, dj = c4[dk + " "];
            if (dj) {
                return dq ? 0 : dj.slice(0)
            }
            dm = dk;
            di = [];
            e = cn.preFilter;
            while (dm) {
                if (!dh || (dl = cu.exec(dm))) {
                    if (dl) {
                        dm = dm.slice(dl[0].length) || dm
                    }
                    di.push(dn = [])
                }
                dh = false;
                if ((dl = cA.exec(dm))) {
                    dh = dl.shift();
                    dn.push({
                        value: dh,
                        type: dl[0].replace(cr, " ")
                    });
                    dm = dm.slice(dh.length)
                }
                for (dp in cn.filter) {
                    if ((dl = cY[dp].exec(dm)) && (!e[dp] || (dl = e[dp](dl)))) {
                        dh = dl.shift();
                        dn.push({
                            value: dh,
                            type: dp,
                            matches: dl
                        });
                        dm = dm.slice(dh.length)
                    }
                }
                if (!dh) {
                    break
                }
            }
            return dq ? dm.length : dm ? cv.error(dk) : c4(dk, di).slice(0)
        }

        function cg(dj) {
            var di = 0,
                dh = dj.length,
                e = "";
            for (; di < dh; di++) {
                e += dj[di].value
            }
            return e
        }

        function cq(dk, di, dj) {
            var e = di.dir,
                dl = dj && e === "parentNode",
                dh = c0++;
            return di.first ? function (dp, dn, dm) {
                while ((dp = dp[e])) {
                    if (dp.nodeType === 1 || dl) {
                        return dk(dp, dn, dm)
                    }
                }
            } : function (dr, dp, dn) {
                var dt, dm, dq, ds = de + " " + dh;
                if (dn) {
                    while ((dr = dr[e])) {
                        if (dr.nodeType === 1 || dl) {
                            if (dk(dr, dp, dn)) {
                                return true
                            }
                        }
                    }
                } else {
                    while ((dr = dr[e])) {
                        if (dr.nodeType === 1 || dl) {
                            dq = dr[c5] || (dr[c5] = {});
                            if ((dm = dq[e]) && dm[0] === ds) {
                                if ((dt = dm[1]) === true || dt === cb) {
                                    return dt === true
                                }
                            } else {
                                dm = dq[e] = [ds];
                                dm[1] = dk(dr, dp, dn) || cb;
                                if (dm[1] === true) {
                                    return true
                                }
                            }
                        }
                    }
                }
            }
        }

        function df(e) {
            return e.length > 1 ? function (dk, dj, dh) {
                var di = e.length;
                while (di--) {
                    if (!e[di](dk, dj, dh)) {
                        return false
                    }
                }
                return true
            } : e[0]
        }

        function cX(e, dh, di, dj, dm) {
            var dk, dq = [],
                dl = 0,
                dn = e.length,
                dp = dh != null;
            for (; dl < dn; dl++) {
                if ((dk = e[dl])) {
                    if (!di || di(dk, dj, dm)) {
                        dq.push(dk);
                        if (dp) {
                            dh.push(dl)
                        }
                    }
                }
            }
            return dq
        }

        function ce(di, dh, dk, dj, dl, e) {
            if (dj && !dj[c5]) {
                dj = ce(dj)
            }
            if (dl && !dl[c5]) {
                dl = ce(dl, e)
            }
            return cj(function (dx, du, dp, dw) {
                var dz, dv, dr, dq = [],
                    dy = [],
                    dn = du.length,
                    dm = dx || cy(dh || "*", dp.nodeType ? [dp] : dp, []),
                    ds = di && (dx || !dh) ? cX(dm, dq, di, dp, dw) : dm,
                    dt = dk ? dl || (dx ? di : dn || dj) ? [] : du : ds;
                if (dk) {
                    dk(ds, dt, dp, dw)
                }
                if (dj) {
                    dz = cX(dt, dy);
                    dj(dz, [], dp, dw);
                    dv = dz.length;
                    while (dv--) {
                        if ((dr = dz[dv])) {
                            dt[dy[dv]] = !(ds[dy[dv]] = dr)
                        }
                    }
                }
                if (dx) {
                    if (dl || di) {
                        if (dl) {
                            dz = [];
                            dv = dt.length;
                            while (dv--) {
                                if ((dr = dt[dv])) {
                                    dz.push((ds[dv] = dr))
                                }
                            }
                            dl(null, (dt = []), dz, dw)
                        }
                        dv = dt.length;
                        while (dv--) {
                            if ((dr = dt[dv]) && (dz = dl ? b9.call(dx, dr) : dq[dv]) > -1) {
                                dx[dz] = !(du[dz] = dr)
                            }
                        }
                    }
                } else {
                    dt = cX(dt === du ? dt.splice(dn, dt.length) : dt);
                    if (dl) {
                        dl(null, du, dt, dw)
                    } else {
                        b4.apply(du, dt)
                    }
                }
            })
        }

        function c6(dm) {
            var dh, dk, di, dl = dm.length,
                dq = cn.relative[dm[0].type],
                dr = dq || cn.relative[" "],
                dj = dq ? 1 : 0,
                dn = cq(function (ds) {
                    return ds === dh
                }, dr, true),
                dp = cq(function (ds) {
                    return b9.call(dh, ds) > -1
                }, dr, true),
                e = [
                    function (du, dt, ds) {
                        return (!dq && (ds || dt !== dg)) || ((dh = dt).nodeType ? dn(du, dt, ds) : dp(du, dt, ds))
                    }
                ];
            for (; dj < dl; dj++) {
                if ((dk = cn.relative[dm[dj].type])) {
                    e = [cq(df(e), dk)]
                } else {
                    dk = cn.filter[dm[dj].type].apply(null, dm[dj].matches);
                    if (dk[c5]) {
                        di = ++dj;
                        for (; di < dl; di++) {
                            if (cn.relative[dm[di].type]) {
                                break
                            }
                        }
                        return ce(dj > 1 && df(e), dj > 1 && cg(dm.slice(0, dj - 1)).replace(cr, "$1"), dk, dj < di && c6(dm.slice(dj, di)), di < dl && c6((dm = dm.slice(di))), di < dl && cg(dm))
                    }
                    e.push(dk)
                }
            }
            return df(e)
        }

        function cU(dj, di) {
            var dl = 0,
                e = di.length > 0,
                dk = dj.length > 0,
                dh = function (dw, dq, dv, du, dC) {
                    var dr, ds, dx, dB = [],
                        dA = 0,
                        dt = "0",
                        dm = dw && [],
                        dy = dC != null,
                        dz = dg,
                        dp = dw || dk && cn.find.TAG("*", dC && dq.parentNode || dq),
                        dn = (de += dz == null ? 1 : Math.random() || 0.1);
                    if (dy) {
                        dg = dq !== cB && dq;
                        cb = dl
                    }
                    for (;
                        (dr = dp[dt]) != null; dt++) {
                        if (dk && dr) {
                            ds = 0;
                            while ((dx = dj[ds++])) {
                                if (dx(dr, dq, dv)) {
                                    du.push(dr);
                                    break
                                }
                            }
                            if (dy) {
                                de = dn;
                                cb = ++dl
                            }
                        }
                        if (e) {
                            if ((dr = !dx && dr)) {
                                dA--
                            }
                            if (dw) {
                                dm.push(dr)
                            }
                        }
                    }
                    dA += dt;
                    if (e && dt !== dA) {
                        ds = 0;
                        while ((dx = di[ds++])) {
                            dx(dm, dB, dq, dv)
                        }
                        if (dw) {
                            if (dA > 0) {
                                while (dt--) {
                                    if (!(dm[dt] || dB[dt])) {
                                        dB[dt] = c8.call(du)
                                    }
                                }
                            }
                            dB = cX(dB)
                        }
                        b4.apply(du, dB);
                        if (dy && !dw && dB.length > 0 && (dA + di.length) > 1) {
                            cv.uniqueSort(du)
                        }
                    }
                    if (dy) {
                        de = dn;
                        dg = dz
                    }
                    return dm
                };
            return e ? cj(dh) : dh
        }
        cS = cv.compile = function (e, dl) {
            var di, dh = [],
                dk = [],
                dj = cG[e + " "];
            if (!dj) {
                if (!dl) {
                    dl = cf(e)
                }
                di = dl.length;
                while (di--) {
                    dj = c6(dl[di]);
                    if (dj[c5]) {
                        dh.push(dj)
                    } else {
                        dk.push(dj)
                    }
                }
                dj = cG(e, cU(dk, dh))
            }
            return dj
        };

        function cy(dh, dk, dj) {
            var di = 0,
                e = dk.length;
            for (; di < e; di++) {
                cv(dh, dk[di], dj)
            }
            return dj
        }

        function dc(di, e, dj, dm) {
            var dk, dp, dh, dq, dn, dl = cf(di);
            if (!dm) {
                if (dl.length === 1) {
                    dp = dl[0] = dl[0].slice(0);
                    if (dp.length > 2 && (dh = dp[0]).type === "ID" && e.nodeType === 9 && !cd && cn.relative[dp[1].type]) {
                        e = cn.find.ID(dh.matches[0].replace(cs, c1), e)[0];
                        if (!e) {
                            return dj
                        }
                        di = di.slice(dp.shift().value.length)
                    }
                    dk = cY.needsContext.test(di) ? 0 : dp.length;
                    while (dk--) {
                        dh = dp[dk];
                        if (cn.relative[(dq = dh.type)]) {
                            break
                        }
                        if ((dn = cn.find[dq])) {
                            if ((dm = dn(dh.matches[0].replace(cs, c1), cW.test(dp[0].type) && e.parentNode || e))) {
                                dp.splice(dk, 1);
                                di = dm.length && cg(dp);
                                if (!di) {
                                    b4.apply(dj, cm.call(dm, 0));
                                    return dj
                                }
                                break
                            }
                        }
                    }
                }
            }
            cS(di, dl)(dm, e, cd, dj, cW.test(di));
            return dj
        }
        cn.pseudos.nth = cn.pseudos.eq;

        function cR() {}
        cn.filters = cR.prototype = cn.pseudos;
        cn.setFilters = new cR();
        cV();
        cv.attr = bJ.attr;
        bJ.find = cv;
        bJ.expr = cv.selectors;
        bJ.expr[":"] = bJ.expr.pseudos;
        bJ.unique = cv.uniqueSort;
        bJ.text = cv.getText;
        bJ.isXMLDoc = cv.isXML;
        bJ.contains = cv.contains
    })(a2);
    var aj = /Until$/,
        bt = /^(?:parents|prev(?:Until|All))/,
        an = /^.[^:#\[\.,]*$/,
        y = bJ.expr.match.needsContext,
        bx = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };
    bJ.fn.extend({
        find: function (b3) {
            var b6, b5, b4, e = this.length;
            if (typeof b3 !== "string") {
                b4 = this;
                return this.pushStack(bJ(b3).filter(function () {
                    for (b6 = 0; b6 < e; b6++) {
                        if (bJ.contains(b4[b6], this)) {
                            return true
                        }
                    }
                }))
            }
            b5 = [];
            for (b6 = 0; b6 < e; b6++) {
                bJ.find(b3, this[b6], b5)
            }
            b5 = this.pushStack(e > 1 ? bJ.unique(b5) : b5);
            b5.selector = (this.selector ? this.selector + " " : "") + b3;
            return b5
        }, has: function (b5) {
            var b4, b3 = bJ(b5, this),
                e = b3.length;
            return this.filter(function () {
                for (b4 = 0; b4 < e; b4++) {
                    if (bJ.contains(this, b3[b4])) {
                        return true
                    }
                }
            })
        }, not: function (e) {
            return this.pushStack(aO(this, e, false))
        }, filter: function (e) {
            return this.pushStack(aO(this, e, true))
        }, is: function (e) {
            return !!e && (typeof e === "string" ? y.test(e) ? bJ(e, this.context).index(this[0]) >= 0 : bJ.filter(e, this).length > 0 : this.filter(e).length > 0)
        }, closest: function (b6, b5) {
            var b7, b4 = 0,
                e = this.length,
                b3 = [],
                b8 = y.test(b6) || typeof b6 !== "string" ? bJ(b6, b5 || this.context) : 0;
            for (; b4 < e; b4++) {
                b7 = this[b4];
                while (b7 && b7.ownerDocument && b7 !== b5 && b7.nodeType !== 11) {
                    if (b8 ? b8.index(b7) > -1 : bJ.find.matchesSelector(b7, b6)) {
                        b3.push(b7);
                        break
                    }
                    b7 = b7.parentNode
                }
            }
            return this.pushStack(b3.length > 1 ? bJ.unique(b3) : b3)
        }, index: function (e) {
            if (!e) {
                return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1
            }
            if (typeof e === "string") {
                return bJ.inArray(this[0], bJ(e))
            }
            return bJ.inArray(e.jquery ? e[0] : e, this)
        }, add: function (e, b3) {
            var b5 = typeof e === "string" ? bJ(e, b3) : bJ.makeArray(e && e.nodeType ? [e] : e),
                b4 = bJ.merge(this.get(), b5);
            return this.pushStack(bJ.unique(b4))
        }, addBack: function (e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    });
    bJ.fn.andSelf = bJ.fn.addBack;

    function aX(b3, e) {
        do {
            b3 = b3[e]
        } while (b3 && b3.nodeType !== 1);
        return b3
    }
    bJ.each({
        parent: function (b3) {
            var e = b3.parentNode;
            return e && e.nodeType !== 11 ? e : null
        }, parents: function (e) {
            return bJ.dir(e, "parentNode")
        }, parentsUntil: function (b3, e, b4) {
            return bJ.dir(b3, "parentNode", b4)
        }, next: function (e) {
            return aX(e, "nextSibling")
        }, prev: function (e) {
            return aX(e, "previousSibling")
        }, nextAll: function (e) {
            return bJ.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return bJ.dir(e, "previousSibling")
        }, nextUntil: function (b3, e, b4) {
            return bJ.dir(b3, "nextSibling", b4)
        }, prevUntil: function (b3, e, b4) {
            return bJ.dir(b3, "previousSibling", b4)
        }, siblings: function (e) {
            return bJ.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return bJ.sibling(e.firstChild)
        }, contents: function (e) {
            return bJ.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : bJ.merge([], e.childNodes)
        }
    }, function (e, b3) {
        bJ.fn[e] = function (b6, b4) {
            var b5 = bJ.map(this, b3, b6);
            if (!aj.test(e)) {
                b4 = b6
            }
            if (b4 && typeof b4 === "string") {
                b5 = bJ.filter(b4, b5)
            }
            b5 = this.length > 1 && !bx[e] ? bJ.unique(b5) : b5;
            if (this.length > 1 && bt.test(e)) {
                b5 = b5.reverse()
            }
            return this.pushStack(b5)
        }
    });
    bJ.extend({
        filter: function (b4, e, b3) {
            if (b3) {
                b4 = ":not(" + b4 + ")"
            }
            return e.length === 1 ? bJ.find.matchesSelector(e[0], b4) ? [e[0]] : [] : bJ.find.matches(b4, e)
        }, dir: function (b4, b3, b6) {
            var e = [],
                b5 = b4[b3];
            while (b5 && b5.nodeType !== 9 && (b6 === aG || b5.nodeType !== 1 || !bJ(b5).is(b6))) {
                if (b5.nodeType === 1) {
                    e.push(b5)
                }
                b5 = b5[b3]
            }
            return e
        }, sibling: function (b4, b3) {
            var e = [];
            for (; b4; b4 = b4.nextSibling) {
                if (b4.nodeType === 1 && b4 !== b3) {
                    e.push(b4)
                }
            }
            return e
        }
    });

    function aO(b5, b4, e) {
        b4 = b4 || 0;
        if (bJ.isFunction(b4)) {
            return bJ.grep(b5, function (b7, b6) {
                var b8 = !!b4.call(b7, b6, b7);
                return b8 === e
            })
        } else {
            if (b4.nodeType) {
                return bJ.grep(b5, function (b6) {
                    return (b6 === b4) === e
                })
            } else {
                if (typeof b4 === "string") {
                    var b3 = bJ.grep(b5, function (b6) {
                        return b6.nodeType === 1
                    });
                    if (an.test(b4)) {
                        return bJ.filter(b4, b3, !e)
                    } else {
                        b4 = bJ.filter(b4, b3)
                    }
                }
            }
        }
        return bJ.grep(b5, function (b6) {
            return (bJ.inArray(b6, b4) >= 0) === e
        })
    }

    function A(e) {
        var b4 = d.split("|"),
            b3 = e.createDocumentFragment();
        if (b3.createElement) {
            while (b4.length) {
                b3.createElement(b4.pop())
            }
        }
        return b3
    }
    var d = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        aA = / jQuery\d+="(?:null|\d+)"/g,
        J = new RegExp("<(?:" + d + ")[\\s/>]", "i"),
        b2 = /^\s+/,
        aD = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        m = /<([\w:]+)/,
        bX = /<tbody/i,
        I = /<|&#?\w+;/,
        al = /<(?:script|style|link)/i,
        q = /^(?:checkbox|radio)$/i,
        bU = /checked\s*(?:[^=]|=\s*.checked.)/i,
        bz = /^$|\/(?:java|ecma)script/i,
        ar = /^true\/(.*)/,
        aK = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        T = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: bJ.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        aS = A(l),
        j = aS.appendChild(l.createElement("div"));
    T.optgroup = T.option;
    T.tbody = T.tfoot = T.colgroup = T.caption = T.thead;
    T.th = T.td;
    bJ.fn.extend({
        text: function (e) {
            return bJ.access(this, function (b3) {
                return b3 === aG ? bJ.text(this) : this.empty().append((this[0] && this[0].ownerDocument || l).createTextNode(b3))
            }, null, e, arguments.length)
        }, wrapAll: function (e) {
            if (bJ.isFunction(e)) {
                return this.each(function (b4) {
                    bJ(this).wrapAll(e.call(this, b4))
                })
            }
            if (this[0]) {
                var b3 = bJ(e, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    b3.insertBefore(this[0])
                }
                b3.map(function () {
                    var b4 = this;
                    while (b4.firstChild && b4.firstChild.nodeType === 1) {
                        b4 = b4.firstChild
                    }
                    return b4
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            if (bJ.isFunction(e)) {
                return this.each(function (b3) {
                    bJ(this).wrapInner(e.call(this, b3))
                })
            }
            return this.each(function () {
                var b3 = bJ(this),
                    b4 = b3.contents();
                if (b4.length) {
                    b4.wrapAll(e)
                } else {
                    b3.append(e)
                }
            })
        }, wrap: function (e) {
            var b3 = bJ.isFunction(e);
            return this.each(function (b4) {
                bJ(this).wrapAll(b3 ? e.call(this, b4) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                if (!bJ.nodeName(this, "body")) {
                    bJ(this).replaceWith(this.childNodes)
                }
            }).end()
        }, append: function () {
            return this.domManip(arguments, true, function (e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    this.appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, true, function (e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    this.insertBefore(e, this.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, false, function (e) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(e, this)
                }
            })
        }, after: function () {
            return this.domManip(arguments, false, function (e) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                }
            })
        }, remove: function (e, b5) {
            var b4, b3 = 0;
            for (;
                (b4 = this[b3]) != null; b3++) {
                if (!e || bJ.filter(e, [b4]).length > 0) {
                    if (!b5 && b4.nodeType === 1) {
                        bJ.cleanData(k(b4))
                    }
                    if (b4.parentNode) {
                        if (b5 && bJ.contains(b4.ownerDocument, b4)) {
                            bs(k(b4, "script"))
                        }
                        b4.parentNode.removeChild(b4)
                    }
                }
            }
            return this
        }, empty: function () {
            var b3, e = 0;
            for (;
                (b3 = this[e]) != null; e++) {
                if (b3.nodeType === 1) {
                    bJ.cleanData(k(b3, false))
                }
                while (b3.firstChild) {
                    b3.removeChild(b3.firstChild)
                }
                if (b3.options && bJ.nodeName(b3, "select")) {
                    b3.options.length = 0
                }
            }
            return this
        }, clone: function (b3, e) {
            b3 = b3 == null ? false : b3;
            e = e == null ? b3 : e;
            return this.map(function () {
                return bJ.clone(this, b3, e)
            })
        }, html: function (e) {
            return bJ.access(this, function (b6) {
                var b5 = this[0] || {},
                    b4 = 0,
                    b3 = this.length;
                if (b6 === aG) {
                    return b5.nodeType === 1 ? b5.innerHTML.replace(aA, "") : aG
                }
                if (typeof b6 === "string" && !al.test(b6) && (bJ.support.htmlSerialize || !J.test(b6)) && (bJ.support.leadingWhitespace || !b2.test(b6)) && !T[(m.exec(b6) || ["", ""])[1].toLowerCase()]) {
                    b6 = b6.replace(aD, "<$1></$2>");
                    try {
                        for (; b4 < b3; b4++) {
                            b5 = this[b4] || {};
                            if (b5.nodeType === 1) {
                                bJ.cleanData(k(b5, false));
                                b5.innerHTML = b6
                            }
                        }
                        b5 = 0
                    } catch (b7) {}
                }
                if (b5) {
                    this.empty().append(b6)
                }
            }, null, e, arguments.length)
        }, replaceWith: function (b3) {
            var e = bJ.isFunction(b3);
            if (!e && typeof b3 !== "string") {
                b3 = bJ(b3).not(this).detach()
            }
            return this.domManip([b3], true, function (b6) {
                var b5 = this.nextSibling,
                    b4 = this.parentNode;
                if (b4) {
                    bJ(this).remove();
                    b4.insertBefore(b6, b5)
                }
            })
        }, detach: function (e) {
            return this.remove(e, true)
        }, domManip: function (ca, cg, cf) {
            ca = aI.apply([], ca);
            var b8, b4, e, b6, cd, b9, b7 = 0,
                b5 = this.length,
                cc = this,
                ce = b5 - 1,
                cb = ca[0],
                b3 = bJ.isFunction(cb);
            if (b3 || !(b5 <= 1 || typeof cb !== "string" || bJ.support.checkClone || !bU.test(cb))) {
                return this.each(function (ci) {
                    var ch = cc.eq(ci);
                    if (b3) {
                        ca[0] = cb.call(this, ci, cg ? ch.html() : aG)
                    }
                    ch.domManip(ca, cg, cf)
                })
            }
            if (b5) {
                b9 = bJ.buildFragment(ca, this[0].ownerDocument, false, this);
                b8 = b9.firstChild;
                if (b9.childNodes.length === 1) {
                    b9 = b8
                }
                if (b8) {
                    cg = cg && bJ.nodeName(b8, "tr");
                    b6 = bJ.map(k(b9, "script"), t);
                    e = b6.length;
                    for (; b7 < b5; b7++) {
                        b4 = b9;
                        if (b7 !== ce) {
                            b4 = bJ.clone(b4, true, true);
                            if (e) {
                                bJ.merge(b6, k(b4, "script"))
                            }
                        }
                        cf.call(cg && bJ.nodeName(this[b7], "table") ? x(this[b7], "tbody") : this[b7], b4, b7)
                    }
                    if (e) {
                        cd = b6[b6.length - 1].ownerDocument;
                        bJ.map(b6, bc);
                        for (b7 = 0; b7 < e; b7++) {
                            b4 = b6[b7];
                            if (bz.test(b4.type || "") && !bJ._data(b4, "globalEval") && bJ.contains(cd, b4)) {
                                if (b4.src) {
                                    bJ.ajax({
                                        url: b4.src,
                                        type: "GET",
                                        dataType: "script",
                                        async: false,
                                        global: false,
                                        "throws": true
                                    })
                                } else {
                                    bJ.globalEval((b4.text || b4.textContent || b4.innerHTML || "").replace(aK, ""))
                                }
                            }
                        }
                    }
                    b9 = b8 = null
                }
            }
            return this
        }
    });

    function x(b3, e) {
        return b3.getElementsByTagName(e)[0] || b3.appendChild(b3.ownerDocument.createElement(e))
    }

    function t(b3) {
        var e = b3.getAttributeNode("type");
        b3.type = (e && e.specified) + "/" + b3.type;
        return b3
    }

    function bc(b3) {
        var e = ar.exec(b3.type);
        if (e) {
            b3.type = e[1]
        } else {
            b3.removeAttribute("type")
        }
        return b3
    }

    function bs(e, b4) {
        var b5, b3 = 0;
        for (;
            (b5 = e[b3]) != null; b3++) {
            bJ._data(b5, "globalEval", !b4 || bJ._data(b4[b3], "globalEval"))
        }
    }

    function at(b9, b3) {
        if (b3.nodeType !== 1 || !bJ.hasData(b9)) {
            return
        }
        var b6, b5, e, b8 = bJ._data(b9),
            b7 = bJ._data(b3, b8),
            b4 = b8.events;
        if (b4) {
            delete b7.handle;
            b7.events = {};
            for (b6 in b4) {
                for (b5 = 0, e = b4[b6].length; b5 < e; b5++) {
                    bJ.event.add(b3, b6, b4[b6][b5])
                }
            }
        }
        if (b7.data) {
            b7.data = bJ.extend({}, b7.data)
        }
    }

    function Q(b6, b3) {
        var b7, b5, b4;
        if (b3.nodeType !== 1) {
            return
        }
        b7 = b3.nodeName.toLowerCase();
        if (!bJ.support.noCloneEvent && b3[bJ.expando]) {
            b4 = bJ._data(b3);
            for (b5 in b4.events) {
                bJ.removeEvent(b3, b5, b4.handle)
            }
            b3.removeAttribute(bJ.expando)
        }
        if (b7 === "script" && b3.text !== b6.text) {
            t(b3).text = b6.text;
            bc(b3)
        } else {
            if (b7 === "object") {
                if (b3.parentNode) {
                    b3.outerHTML = b6.outerHTML
                }
                if (bJ.support.html5Clone && (b6.innerHTML && !bJ.trim(b3.innerHTML))) {
                    b3.innerHTML = b6.innerHTML
                }
            } else {
                if (b7 === "input" && q.test(b6.type)) {
                    b3.defaultChecked = b3.checked = b6.checked;
                    if (b3.value !== b6.value) {
                        b3.value = b6.value
                    }
                } else {
                    if (b7 === "option") {
                        b3.defaultSelected = b3.selected = b6.defaultSelected
                    } else {
                        if (b7 === "input" || b7 === "textarea") {
                            b3.defaultValue = b6.defaultValue
                        }
                    }
                }
            }
        }
    }
    bJ.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, b3) {
        bJ.fn[e] = function (b4) {
            var b5, b7 = 0,
                b6 = [],
                b9 = bJ(b4),
                b8 = b9.length - 1;
            for (; b7 <= b8; b7++) {
                b5 = b7 === b8 ? this : this.clone(true);
                bJ(b9[b7])[b3](b5);
                ao.apply(b6, b5.get())
            }
            return this.pushStack(b6)
        }
    });

    function k(b5, e) {
        var b3, b6, b4 = 0,
            b7 = typeof b5.getElementsByTagName !== aC ? b5.getElementsByTagName(e || "*") : typeof b5.querySelectorAll !== aC ? b5.querySelectorAll(e || "*") : aG;
        if (!b7) {
            for (b7 = [], b3 = b5.childNodes || b5;
                (b6 = b3[b4]) != null; b4++) {
                if (!e || bJ.nodeName(b6, e)) {
                    b7.push(b6)
                } else {
                    bJ.merge(b7, k(b6, e))
                }
            }
        }
        return e === aG || e && bJ.nodeName(b5, e) ? bJ.merge([b5], b7) : b7
    }

    function bV(e) {
        if (q.test(e.type)) {
            e.defaultChecked = e.checked
        }
    }
    bJ.extend({
        clone: function (b3, b5, e) {
            var b7, b4, ca, b6, b8, b9 = bJ.contains(b3.ownerDocument, b3);
            if (bJ.support.html5Clone || bJ.isXMLDoc(b3) || !J.test("<" + b3.nodeName + ">")) {
                ca = b3.cloneNode(true)
            } else {
                j.innerHTML = b3.outerHTML;
                j.removeChild(ca = j.firstChild)
            } if ((!bJ.support.noCloneEvent || !bJ.support.noCloneChecked) && (b3.nodeType === 1 || b3.nodeType === 11) && !bJ.isXMLDoc(b3)) {
                b7 = k(ca);
                b8 = k(b3);
                for (b6 = 0;
                    (b4 = b8[b6]) != null; ++b6) {
                    if (b7[b6]) {
                        Q(b4, b7[b6])
                    }
                }
            }
            if (b5) {
                if (e) {
                    b8 = b8 || k(b3);
                    b7 = b7 || k(ca);
                    for (b6 = 0;
                        (b4 = b8[b6]) != null; b6++) {
                        at(b4, b7[b6])
                    }
                } else {
                    at(b3, ca)
                }
            }
            b7 = k(ca, "script");
            if (b7.length > 0) {
                bs(b7, !b9 && k(b3, "script"))
            }
            b7 = b8 = b4 = null;
            return ca
        }, buildFragment: function (b3, b5, ca, cf) {
            var cb, b7, b9, ce, cg, cd, b4, b8 = b3.length,
                b6 = A(b5),
                e = [],
                cc = 0;
            for (; cc < b8; cc++) {
                b7 = b3[cc];
                if (b7 || b7 === 0) {
                    if (bJ.type(b7) === "object") {
                        bJ.merge(e, b7.nodeType ? [b7] : b7)
                    } else {
                        if (!I.test(b7)) {
                            e.push(b5.createTextNode(b7))
                        } else {
                            ce = ce || b6.appendChild(b5.createElement("div"));
                            cg = (m.exec(b7) || ["", ""])[1].toLowerCase();
                            b4 = T[cg] || T._default;
                            ce.innerHTML = b4[1] + b7.replace(aD, "<$1></$2>") + b4[2];
                            cb = b4[0];
                            while (cb--) {
                                ce = ce.lastChild
                            }
                            if (!bJ.support.leadingWhitespace && b2.test(b7)) {
                                e.push(b5.createTextNode(b2.exec(b7)[0]))
                            }
                            if (!bJ.support.tbody) {
                                b7 = cg === "table" && !bX.test(b7) ? ce.firstChild : b4[1] === "<table>" && !bX.test(b7) ? ce : 0;
                                cb = b7 && b7.childNodes.length;
                                while (cb--) {
                                    if (bJ.nodeName((cd = b7.childNodes[cb]), "tbody") && !cd.childNodes.length) {
                                        b7.removeChild(cd)
                                    }
                                }
                            }
                            bJ.merge(e, ce.childNodes);
                            ce.textContent = "";
                            while (ce.firstChild) {
                                ce.removeChild(ce.firstChild)
                            }
                            ce = b6.lastChild
                        }
                    }
                }
            }
            if (ce) {
                b6.removeChild(ce)
            }
            if (!bJ.support.appendChecked) {
                bJ.grep(k(e, "input"), bV)
            }
            cc = 0;
            while ((b7 = e[cc++])) {
                if (cf && bJ.inArray(b7, cf) !== -1) {
                    continue
                }
                b9 = bJ.contains(b7.ownerDocument, b7);
                ce = k(b6.appendChild(b7), "script");
                if (b9) {
                    bs(ce)
                }
                if (ca) {
                    cb = 0;
                    while ((b7 = ce[cb++])) {
                        if (bz.test(b7.type || "")) {
                            ca.push(b7)
                        }
                    }
                }
            }
            ce = null;
            return b6
        }, cleanData: function (b3, cb) {
            var b5, ca, b4, b6, b7 = 0,
                cc = bJ.expando,
                e = bJ.cache,
                b8 = bJ.support.deleteExpando,
                b9 = bJ.event.special;
            for (;
                (b5 = b3[b7]) != null; b7++) {
                if (cb || bJ.acceptData(b5)) {
                    b4 = b5[cc];
                    b6 = b4 && e[b4];
                    if (b6) {
                        if (b6.events) {
                            for (ca in b6.events) {
                                if (b9[ca]) {
                                    bJ.event.remove(b5, ca)
                                } else {
                                    bJ.removeEvent(b5, ca, b6.handle)
                                }
                            }
                        }
                        if (e[b4]) {
                            delete e[b4];
                            if (b8) {
                                delete b5[cc]
                            } else {
                                if (typeof b5.removeAttribute !== aC) {
                                    b5.removeAttribute(cc)
                                } else {
                                    b5[cc] = null
                                }
                            }
                            a6.push(b4)
                        }
                    }
                }
            }
        }
    });
    var aE, bo, E, bg = /alpha\([^)]*\)/i,
        aT = /opacity\s*=\s*([^)]*)/,
        bn = /^(top|right|bottom|left)$/,
        F = /^(none|table(?!-c[ea]).+)/,
        aY = /^margin/,
        a9 = new RegExp("^(" + bA + ")(.*)$", "i"),
        W = new RegExp("^(" + bA + ")(?!px)[a-z%]+$", "i"),
        S = new RegExp("^([+-])=(" + bA + ")", "i"),
        bj = {
            BODY: "block"
        },
        bb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        bC = {
            letterSpacing: 0,
            fontWeight: 400
        },
        bT = ["Top", "Right", "Bottom", "Left"],
        av = ["Webkit", "O", "Moz", "ms"];

    function b(b5, b3) {
        if (b3 in b5) {
            return b3
        }
        var b6 = b3.charAt(0).toUpperCase() + b3.slice(1),
            e = b3,
            b4 = av.length;
        while (b4--) {
            b3 = av[b4] + b6;
            if (b3 in b5) {
                return b3
            }
        }
        return e
    }

    function P(b3, e) {
        b3 = e || b3;
        return bJ.css(b3, "display") === "none" || !bJ.contains(b3.ownerDocument, b3)
    }

    function p(b8, e) {
        var b9, b6, b7, b3 = [],
            b4 = 0,
            b5 = b8.length;
        for (; b4 < b5; b4++) {
            b6 = b8[b4];
            if (!b6.style) {
                continue
            }
            b3[b4] = bJ._data(b6, "olddisplay");
            b9 = b6.style.display;
            if (e) {
                if (!b3[b4] && b9 === "none") {
                    b6.style.display = ""
                }
                if (b6.style.display === "" && P(b6)) {
                    b3[b4] = bJ._data(b6, "olddisplay", bE(b6.nodeName))
                }
            } else {
                if (!b3[b4]) {
                    b7 = P(b6);
                    if (b9 && b9 !== "none" || !b7) {
                        bJ._data(b6, "olddisplay", b7 ? b9 : bJ.css(b6, "display"))
                    }
                }
            }
        }
        for (b4 = 0; b4 < b5; b4++) {
            b6 = b8[b4];
            if (!b6.style) {
                continue
            }
            if (!e || b6.style.display === "none" || b6.style.display === "") {
                b6.style.display = e ? b3[b4] || "" : "none"
            }
        }
        return b8
    }
    bJ.fn.extend({
        css: function (e, b3) {
            return bJ.access(this, function (b8, b5, b9) {
                var b4, b7, ca = {},
                    b6 = 0;
                if (bJ.isArray(b5)) {
                    b7 = bo(b8);
                    b4 = b5.length;
                    for (; b6 < b4; b6++) {
                        ca[b5[b6]] = bJ.css(b8, b5[b6], false, b7)
                    }
                    return ca
                }
                return b9 !== aG ? bJ.style(b8, b5, b9) : bJ.css(b8, b5)
            }, e, b3, arguments.length > 1)
        }, show: function () {
            return p(this, true)
        }, hide: function () {
            return p(this)
        }, toggle: function (b3) {
            var e = typeof b3 === "boolean";
            return this.each(function () {
                if (e ? b3 : P(this)) {
                    bJ(this).show()
                } else {
                    bJ(this).hide()
                }
            })
        }
    });
    bJ.extend({
        cssHooks: {
            opacity: {
                get: function (b4, b3) {
                    if (b3) {
                        var e = E(b4, "opacity");
                        return e === "" ? "1" : e
                    }
                }
            }
        },
        cssNumber: {
            columnCount: true,
            fillOpacity: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            "float": bJ.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (b5, b4, cb, b6) {
            if (!b5 || b5.nodeType === 3 || b5.nodeType === 8 || !b5.style) {
                return
            }
            var b9, ca, cc, b7 = bJ.camelCase(b4),
                b3 = b5.style;
            b4 = bJ.cssProps[b7] || (bJ.cssProps[b7] = b(b3, b7));
            cc = bJ.cssHooks[b4] || bJ.cssHooks[b7];
            if (cb !== aG) {
                ca = typeof cb;
                if (ca === "string" && (b9 = S.exec(cb))) {
                    cb = (b9[1] + 1) * b9[2] + parseFloat(bJ.css(b5, b4));
                    ca = "number"
                }
                if (cb == null || ca === "number" && isNaN(cb)) {
                    return
                }
                if (ca === "number" && !bJ.cssNumber[b7]) {
                    cb += "px"
                }
                if (!bJ.support.clearCloneStyle && cb === "" && b4.indexOf("background") === 0) {
                    b3[b4] = "inherit"
                }
                if (!cc || !("set" in cc) || (cb = cc.set(b5, cb, b6)) !== aG) {
                    try {
                        b3[b4] = cb
                    } catch (b8) {}
                }
            } else {
                if (cc && "get" in cc && (b9 = cc.get(b5, false, b6)) !== aG) {
                    return b9
                }
                return b3[b4]
            }
        }, css: function (b8, b6, b3, b7) {
            var b5, b9, e, b4 = bJ.camelCase(b6);
            b6 = bJ.cssProps[b4] || (bJ.cssProps[b4] = b(b8.style, b4));
            e = bJ.cssHooks[b6] || bJ.cssHooks[b4];
            if (e && "get" in e) {
                b9 = e.get(b8, true, b3)
            }
            if (b9 === aG) {
                b9 = E(b8, b6, b7)
            }
            if (b9 === "normal" && b6 in bC) {
                b9 = bC[b6]
            }
            if (b3 === "" || b3) {
                b5 = parseFloat(b9);
                return b3 === true || bJ.isNumeric(b5) ? b5 || 0 : b9
            }
            return b9
        }, swap: function (b7, b6, b8, b5) {
            var b4, b3, e = {};
            for (b3 in b6) {
                e[b3] = b7.style[b3];
                b7.style[b3] = b6[b3]
            }
            b4 = b8.apply(b7, b5 || []);
            for (b3 in b6) {
                b7.style[b3] = e[b3]
            }
            return b4
        }
    });
    if (a2.getComputedStyle) {
        bo = function (e) {
            return a2.getComputedStyle(e, null)
        };
        E = function (b6, b4, b8) {
            var b5, b3, ca, b7 = b8 || bo(b6),
                b9 = b7 ? b7.getPropertyValue(b4) || b7[b4] : aG,
                e = b6.style;
            if (b7) {
                if (b9 === "" && !bJ.contains(b6.ownerDocument, b6)) {
                    b9 = bJ.style(b6, b4)
                }
                if (W.test(b9) && aY.test(b4)) {
                    b5 = e.width;
                    b3 = e.minWidth;
                    ca = e.maxWidth;
                    e.minWidth = e.maxWidth = e.width = b9;
                    b9 = b7.width;
                    e.width = b5;
                    e.minWidth = b3;
                    e.maxWidth = ca
                }
            }
            return b9
        }
    } else {
        if (l.documentElement.currentStyle) {
            bo = function (e) {
                return e.currentStyle
            };
            E = function (b5, b3, b8) {
                var b4, b7, b9, b6 = b8 || bo(b5),
                    ca = b6 ? b6[b3] : aG,
                    e = b5.style;
                if (ca == null && e && e[b3]) {
                    ca = e[b3]
                }
                if (W.test(ca) && !bn.test(b3)) {
                    b4 = e.left;
                    b7 = b5.runtimeStyle;
                    b9 = b7 && b7.left;
                    if (b9) {
                        b7.left = b5.currentStyle.left
                    }
                    e.left = b3 === "fontSize" ? "1em" : ca;
                    ca = e.pixelLeft + "px";
                    e.left = b4;
                    if (b9) {
                        b7.left = b9
                    }
                }
                return ca === "" ? "auto" : ca
            }
        }
    }

    function aJ(e, b4, b5) {
        var b3 = a9.exec(b4);
        return b3 ? Math.max(0, b3[1] - (b5 || 0)) + (b3[2] || "px") : b4
    }

    function aw(b6, b3, e, b8, b5) {
        var b4 = e === (b8 ? "border" : "content") ? 4 : b3 === "width" ? 1 : 0,
            b7 = 0;
        for (; b4 < 4; b4 += 2) {
            if (e === "margin") {
                b7 += bJ.css(b6, e + bT[b4], true, b5)
            }
            if (b8) {
                if (e === "content") {
                    b7 -= bJ.css(b6, "padding" + bT[b4], true, b5)
                }
                if (e !== "margin") {
                    b7 -= bJ.css(b6, "border" + bT[b4] + "Width", true, b5)
                }
            } else {
                b7 += bJ.css(b6, "padding" + bT[b4], true, b5);
                if (e !== "padding") {
                    b7 += bJ.css(b6, "border" + bT[b4] + "Width", true, b5)
                }
            }
        }
        return b7
    }

    function u(b6, b3, e) {
        var b5 = true,
            b7 = b3 === "width" ? b6.offsetWidth : b6.offsetHeight,
            b4 = bo(b6),
            b8 = bJ.support.boxSizing && bJ.css(b6, "boxSizing", false, b4) === "border-box";
        if (b7 <= 0 || b7 == null) {
            b7 = E(b6, b3, b4);
            if (b7 < 0 || b7 == null) {
                b7 = b6.style[b3]
            }
            if (W.test(b7)) {
                return b7
            }
            b5 = b8 && (bJ.support.boxSizingReliable || b7 === b6.style[b3]);
            b7 = parseFloat(b7) || 0
        }
        return (b7 + aw(b6, b3, e || (b8 ? "border" : "content"), b5, b4)) + "px"
    }

    function bE(b4) {
        var b3 = l,
            e = bj[b4];
        if (!e) {
            e = a1(b4, b3);
            if (e === "none" || !e) {
                aE = (aE || bJ("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b3.documentElement);
                b3 = (aE[0].contentWindow || aE[0].contentDocument).document;
                b3.write("<!doctype html><html><body>");
                b3.close();
                e = a1(b4, b3);
                aE.detach()
            }
            bj[b4] = e
        }
        return e
    }

    function a1(e, b5) {
        var b3 = bJ(b5.createElement(e)).appendTo(b5.body),
            b4 = bJ.css(b3[0], "display");
        b3.remove();
        return b4
    }
    bJ.each(["height", "width"], function (b3, e) {
        bJ.cssHooks[e] = {
            get: function (b6, b5, b4) {
                if (b5) {
                    return b6.offsetWidth === 0 && F.test(bJ.css(b6, "display")) ? bJ.swap(b6, bb, function () {
                        return u(b6, e, b4)
                    }) : u(b6, e, b4)
                }
            }, set: function (b6, b7, b4) {
                var b5 = b4 && bo(b6);
                return aJ(b6, b7, b4 ? aw(b6, e, b4, bJ.support.boxSizing && bJ.css(b6, "boxSizing", false, b5) === "border-box", b5) : 0)
            }
        }
    });
    if (!bJ.support.opacity) {
        bJ.cssHooks.opacity = {
            get: function (b3, e) {
                return aT.test((e && b3.currentStyle ? b3.currentStyle.filter : b3.style.filter) || "") ? (0.01 * parseFloat(RegExp.$1)) + "" : e ? "1" : ""
            }, set: function (b6, b7) {
                var b5 = b6.style,
                    b3 = b6.currentStyle,
                    e = bJ.isNumeric(b7) ? "alpha(opacity=" + b7 * 100 + ")" : "",
                    b4 = b3 && b3.filter || b5.filter || "";
                b5.zoom = 1;
                if ((b7 >= 1 || b7 === "") && bJ.trim(b4.replace(bg, "")) === "" && b5.removeAttribute) {
                    b5.removeAttribute("filter");
                    if (b7 === "" || b3 && !b3.filter) {
                        return
                    }
                }
                b5.filter = bg.test(b4) ? b4.replace(bg, e) : b4 + " " + e
            }
        }
    }
    bJ(function () {
        if (!bJ.support.reliableMarginRight) {
            bJ.cssHooks.marginRight = {
                get: function (b3, e) {
                    if (e) {
                        return bJ.swap(b3, {
                            display: "inline-block"
                        }, E, [b3, "marginRight"])
                    }
                }
            }
        }
        if (!bJ.support.pixelPosition && bJ.fn.position) {
            bJ.each(["top", "left"], function (e, b3) {
                bJ.cssHooks[b3] = {
                    get: function (b5, b4) {
                        if (b4) {
                            b4 = E(b5, b3);
                            return W.test(b4) ? bJ(b5).position()[b3] + "px" : b4
                        }
                    }
                }
            })
        }
    });
    if (bJ.expr && bJ.expr.filters) {
        bJ.expr.filters.hidden = function (e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || (!bJ.support.reliableHiddenOffsets && ((e.style && e.style.display) || bJ.css(e, "display")) === "none")
        };
        bJ.expr.filters.visible = function (e) {
            return !bJ.expr.filters.hidden(e)
        }
    }
    bJ.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, b3) {
        bJ.cssHooks[e + b3] = {
            expand: function (b6) {
                var b5 = 0,
                    b4 = {},
                    b7 = typeof b6 === "string" ? b6.split(" ") : [b6];
                for (; b5 < 4; b5++) {
                    b4[e + bT[b5] + b3] = b7[b5] || b7[b5 - 2] || b7[0]
                }
                return b4
            }
        };
        if (!aY.test(e)) {
            bJ.cssHooks[e + b3].set = aJ
        }
    });
    var bv = /%20/g,
        aR = /\[\]$/,
        U = /\r?\n/g,
        c = /^(?:submit|button|image|reset|file)$/i,
        au = /^(?:input|select|textarea|keygen)/i;
    bJ.fn.extend({
        serialize: function () {
            return bJ.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = bJ.prop(this, "elements");
                return e ? bJ.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !bJ(this).is(":disabled") && au.test(this.nodeName) && !c.test(e) && (this.checked || !q.test(e))
            }).map(function (e, b3) {
                var b4 = bJ(this).val();
                return b4 == null ? null : bJ.isArray(b4) ? bJ.map(b4, function (b5) {
                    return {
                        name: b3.name,
                        value: b5.replace(U, "\r\n")
                    }
                }) : {
                    name: b3.name,
                    value: b4.replace(U, "\r\n")
                }
            }).get()
        }
    });
    bJ.param = function (e, b4) {
        var b5, b3 = [],
            b6 = function (b7, b8) {
                b8 = bJ.isFunction(b8) ? b8() : (b8 == null ? "" : b8);
                b3[b3.length] = encodeURIComponent(b7) + "=" + encodeURIComponent(b8)
            };
        if (b4 === aG) {
            b4 = bJ.ajaxSettings && bJ.ajaxSettings.traditional
        }
        if (bJ.isArray(e) || (e.jquery && !bJ.isPlainObject(e))) {
            bJ.each(e, function () {
                b6(this.name, this.value)
            })
        } else {
            for (b5 in e) {
                i(b5, e[b5], b4, b6)
            }
        }
        return b3.join("&").replace(bv, "+")
    };

    function i(b4, b6, b3, b5) {
        var e;
        if (bJ.isArray(b6)) {
            bJ.each(b6, function (b8, b7) {
                if (b3 || aR.test(b4)) {
                    b5(b4, b7)
                } else {
                    i(b4 + "[" + (typeof b7 === "object" ? b8 : "") + "]", b7, b3, b5)
                }
            })
        } else {
            if (!b3 && bJ.type(b6) === "object") {
                for (e in b6) {
                    i(b4 + "[" + e + "]", b6[e], b3, b5)
                }
            } else {
                b5(b4, b6)
            }
        }
    }
    bJ.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "), function (b3, e) {
        bJ.fn[e] = function (b5, b4) {
            return arguments.length > 0 ? this.on(e, null, b5, b4) : this.trigger(e)
        }
    });
    bJ.fn.hover = function (e, b3) {
        return this.mouseenter(e).mouseleave(b3 || e)
    };
    var b1, Y, bO = bJ.now(),
        az = /\?/,
        ap = /#.*$/,
        O = /([?&])_=[^&]*/,
        ag = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        B = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        o = /^(?:GET|HEAD)$/,
        aH = /^\/\//,
        aU = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        b0 = bJ.fn.load,
        v = {},
        a7 = {},
        aW = "*/".concat("*");
    try {
        Y = aL.href
    } catch (bf) {
        Y = l.createElement("a");
        Y.href = "";
        Y = Y.href
    }
    b1 = aU.exec(Y.toLowerCase()) || [];

    function bL(e) {
        return function (b6, b7) {
            if (typeof b6 !== "string") {
                b7 = b6;
                b6 = "*"
            }
            var b3, b4 = 0,
                b5 = b6.toLowerCase().match(ac) || [];
            if (bJ.isFunction(b7)) {
                while ((b3 = b5[b4++])) {
                    if (b3[0] === "+") {
                        b3 = b3.slice(1) || "*";
                        (e[b3] = e[b3] || []).unshift(b7)
                    } else {
                        (e[b3] = e[b3] || []).push(b7)
                    }
                }
            }
        }
    }

    function n(e, b4, b8, b5) {
        var b3 = {},
            b6 = (e === a7);

        function b7(b9) {
            var ca;
            b3[b9] = true;
            bJ.each(e[b9] || [], function (cc, cb) {
                var cd = cb(b4, b8, b5);
                if (typeof cd === "string" && !b6 && !b3[cd]) {
                    b4.dataTypes.unshift(cd);
                    b7(cd);
                    return false
                } else {
                    if (b6) {
                        return !(ca = cd)
                    }
                }
            });
            return ca
        }
        return b7(b4.dataTypes[0]) || !b3["*"] && b7("*")
    }

    function r(b4, b5) {
        var e, b3, b6 = bJ.ajaxSettings.flatOptions || {};
        for (b3 in b5) {
            if (b5[b3] !== aG) {
                (b6[b3] ? b4 : (e || (e = {})))[b3] = b5[b3]
            }
        }
        if (e) {
            bJ.extend(true, b4, e)
        }
        return b4
    }
    bJ.fn.load = function (b5, b8, b9) {
        if (typeof b5 !== "string" && b0) {
            return b0.apply(this, arguments)
        }
        var e, b4, b6, b3 = this,
            b7 = b5.indexOf(" ");
        if (b7 >= 0) {
            e = b5.slice(b7, b5.length);
            b5 = b5.slice(0, b7)
        }
        if (bJ.isFunction(b8)) {
            b9 = b8;
            b8 = aG
        } else {
            if (b8 && typeof b8 === "object") {
                b6 = "POST"
            }
        } if (b3.length > 0) {
            bJ.ajax({
                url: b5,
                type: b6,
                dataType: "html",
                data: b8
            }).done(function (ca) {
                b4 = arguments;
                b3.html(e ? bJ("<div>").append(bJ.parseHTML(ca)).find(e) : ca)
            }).complete(b9 && function (cb, ca) {
                b3.each(b9, b4 || [cb.responseText, ca, cb])
            })
        }
        return this
    };
    bJ.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, b3) {
        bJ.fn[b3] = function (b4) {
            return this.on(b3, b4)
        }
    });
    bJ.each(["get", "post"], function (e, b3) {
        bJ[b3] = function (b4, b6, b7, b5) {
            if (bJ.isFunction(b6)) {
                b5 = b5 || b7;
                b7 = b6;
                b6 = aG
            }
            return bJ.ajax({
                url: b4,
                type: b3,
                dataType: b5,
                data: b6,
                success: b7
            })
        }
    });
    bJ.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Y,
            type: "GET",
            isLocal: B.test(b1[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": aW,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a2.String,
                "text html": true,
                "text json": bJ.parseJSON,
                "text xml": bJ.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function (b3, e) {
            return e ? r(r(b3, bJ.ajaxSettings), e) : r(bJ.ajaxSettings, b3)
        }, ajaxPrefilter: bL(v),
        ajaxTransport: bL(a7),
        ajax: function (b7, b4) {
            if (typeof b7 === "object") {
                b4 = b7;
                b7 = aG
            }
            b4 = b4 || {};
            var cg, ci, b8, cn, cc, b3, cj, b5, cb = bJ.ajaxSetup({}, b4),
                cp = cb.context || cb,
                ce = cb.context && (cp.nodeType || cp.jquery) ? bJ(cp) : bJ.event,
                co = bJ.Deferred(),
                cl = bJ.Callbacks("once memory"),
                b9 = cb.statusCode || {},
                cf = {},
                cm = {},
                b6 = 0,
                ca = "canceled",
                ch = {
                    readyState: 0,
                    getResponseHeader: function (cq) {
                        var e;
                        if (b6 === 2) {
                            if (!b5) {
                                b5 = {};
                                while ((e = ag.exec(cn))) {
                                    b5[e[1].toLowerCase()] = e[2]
                                }
                            }
                            e = b5[cq.toLowerCase()]
                        }
                        return e == null ? null : e
                    }, getAllResponseHeaders: function () {
                        return b6 === 2 ? cn : null
                    }, setRequestHeader: function (cq, cr) {
                        var e = cq.toLowerCase();
                        if (!b6) {
                            cq = cm[e] = cm[e] || cq;
                            cf[cq] = cr
                        }
                        return this
                    }, overrideMimeType: function (e) {
                        if (!b6) {
                            cb.mimeType = e
                        }
                        return this
                    }, statusCode: function (cq) {
                        var e;
                        if (cq) {
                            if (b6 < 2) {
                                for (e in cq) {
                                    b9[e] = [b9[e], cq[e]]
                                }
                            } else {
                                ch.always(cq[ch.status])
                            }
                        }
                        return this
                    }, abort: function (cq) {
                        var e = cq || ca;
                        if (cj) {
                            cj.abort(e)
                        }
                        cd(0, e);
                        return this
                    }
                };
            co.promise(ch).complete = cl.add;
            ch.success = ch.done;
            ch.error = ch.fail;
            cb.url = ((b7 || cb.url || Y) + "").replace(ap, "").replace(aH, b1[1] + "//");
            cb.type = b4.method || b4.type || cb.method || cb.type;
            cb.dataTypes = bJ.trim(cb.dataType || "*").toLowerCase().match(ac) || [""];
            if (cb.crossDomain == null) {
                cg = aU.exec(cb.url.toLowerCase());
                cb.crossDomain = !!(cg && (cg[1] !== b1[1] || cg[2] !== b1[2] || (cg[3] || (cg[1] === "http:" ? 80 : 443)) != (b1[3] || (b1[1] === "http:" ? 80 : 443))))
            }
            if (cb.data && cb.processData && typeof cb.data !== "string") {
                cb.data = bJ.param(cb.data, cb.traditional)
            }
            n(v, cb, b4, ch);
            if (b6 === 2) {
                return ch
            }
            b3 = cb.global;
            if (b3 && bJ.active++ === 0) {
                bJ.event.trigger("ajaxStart")
            }
            cb.type = cb.type.toUpperCase();
            cb.hasContent = !o.test(cb.type);
            b8 = cb.url;
            if (!cb.hasContent) {
                if (cb.data) {
                    b8 = (cb.url += (az.test(b8) ? "&" : "?") + cb.data);
                    delete cb.data
                }
                if (cb.cache === false) {
                    cb.url = O.test(b8) ? b8.replace(O, "$1_=" + bO++) : b8 + (az.test(b8) ? "&" : "?") + "_=" + bO++
                }
            }
            if (cb.ifModified) {
                if (bJ.lastModified[b8]) {
                    ch.setRequestHeader("If-Modified-Since", bJ.lastModified[b8])
                }
                if (bJ.etag[b8]) {
                    ch.setRequestHeader("If-None-Match", bJ.etag[b8])
                }
            }
            if (cb.data && cb.hasContent && cb.contentType !== false || b4.contentType) {
                ch.setRequestHeader("Content-Type", cb.contentType)
            }
            ch.setRequestHeader("Accept", cb.dataTypes[0] && cb.accepts[cb.dataTypes[0]] ? cb.accepts[cb.dataTypes[0]] + (cb.dataTypes[0] !== "*" ? ", " + aW + "; q=0.01" : "") : cb.accepts["*"]);
            for (ci in cb.headers) {
                ch.setRequestHeader(ci, cb.headers[ci])
            }
            if (cb.beforeSend && (cb.beforeSend.call(cp, ch, cb) === false || b6 === 2)) {
                return ch.abort()
            }
            ca = "abort";
            for (ci in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                ch[ci](cb[ci])
            }
            cj = n(a7, cb, b4, ch);
            if (!cj) {
                cd(-1, "No Transport")
            } else {
                ch.readyState = 1;
                if (b3) {
                    ce.trigger("ajaxSend", [ch, cb])
                }
                if (cb.async && cb.timeout > 0) {
                    cc = setTimeout(function () {
                        ch.abort("timeout")
                    }, cb.timeout)
                }
                try {
                    b6 = 1;
                    cj.send(cf, cd)
                } catch (ck) {
                    if (b6 < 2) {
                        cd(-1, ck)
                    } else {
                        throw ck
                    }
                }
            }

            function cd(cu, cq, cv, cs) {
                var e, cy, cw, ct, cx, cr = cq;
                if (b6 === 2) {
                    return
                }
                b6 = 2;
                if (cc) {
                    clearTimeout(cc)
                }
                cj = aG;
                cn = cs || "";
                ch.readyState = cu > 0 ? 4 : 0;
                if (cv) {
                    ct = g(cb, ch, cv)
                }
                if (cu >= 200 && cu < 300 || cu === 304) {
                    if (cb.ifModified) {
                        cx = ch.getResponseHeader("Last-Modified");
                        if (cx) {
                            bJ.lastModified[b8] = cx
                        }
                        cx = ch.getResponseHeader("etag");
                        if (cx) {
                            bJ.etag[b8] = cx
                        }
                    }
                    if (cu === 204) {
                        e = true;
                        cr = "nocontent"
                    } else {
                        if (cu === 304) {
                            e = true;
                            cr = "notmodified"
                        } else {
                            e = af(cb, ct);
                            cr = e.state;
                            cy = e.data;
                            cw = e.error;
                            e = !cw
                        }
                    }
                } else {
                    cw = cr;
                    if (cu || !cr) {
                        cr = "error";
                        if (cu < 0) {
                            cu = 0
                        }
                    }
                }
                ch.status = cu;
                ch.statusText = (cq || cr) + "";
                if (e) {
                    co.resolveWith(cp, [cy, cr, ch])
                } else {
                    co.rejectWith(cp, [ch, cr, cw])
                }
                ch.statusCode(b9);
                b9 = aG;
                if (b3) {
                    ce.trigger(e ? "ajaxSuccess" : "ajaxError", [ch, cb, e ? cy : cw])
                }
                cl.fireWith(cp, [ch, cr]);
                if (b3) {
                    ce.trigger("ajaxComplete", [ch, cb]);
                    if (!(--bJ.active)) {
                        bJ.event.trigger("ajaxStop")
                    }
                }
            }
            return ch
        }, getScript: function (e, b3) {
            return bJ.get(e, aG, b3, "script")
        }, getJSON: function (e, b3, b4) {
            return bJ.get(e, b3, b4, "json")
        }
    });

    function g(cb, ca, b7) {
        var e, b6, b5, b8, b3 = cb.contents,
            b9 = cb.dataTypes,
            b4 = cb.responseFields;
        for (b8 in b4) {
            if (b8 in b7) {
                ca[b4[b8]] = b7[b8]
            }
        }
        while (b9[0] === "*") {
            b9.shift();
            if (b6 === aG) {
                b6 = cb.mimeType || ca.getResponseHeader("Content-Type")
            }
        }
        if (b6) {
            for (b8 in b3) {
                if (b3[b8] && b3[b8].test(b6)) {
                    b9.unshift(b8);
                    break
                }
            }
        }
        if (b9[0] in b7) {
            b5 = b9[0]
        } else {
            for (b8 in b7) {
                if (!b9[0] || cb.converters[b8 + " " + b9[0]]) {
                    b5 = b8;
                    break
                }
                if (!e) {
                    e = b8
                }
            }
            b5 = b5 || e
        } if (b5) {
            if (b5 !== b9[0]) {
                b9.unshift(b5)
            }
            return b7[b5]
        }
    }

    function af(cd, b5) {
        var b3, b9, cb, b6, cc = {},
            b7 = 0,
            ca = cd.dataTypes.slice(),
            b4 = ca[0];
        if (cd.dataFilter) {
            b5 = cd.dataFilter(b5, cd.dataType)
        }
        if (ca[1]) {
            for (cb in cd.converters) {
                cc[cb.toLowerCase()] = cd.converters[cb]
            }
        }
        for (;
            (b9 = ca[++b7]);) {
            if (b9 !== "*") {
                if (b4 !== "*" && b4 !== b9) {
                    cb = cc[b4 + " " + b9] || cc["* " + b9];
                    if (!cb) {
                        for (b3 in cc) {
                            b6 = b3.split(" ");
                            if (b6[1] === b9) {
                                cb = cc[b4 + " " + b6[0]] || cc["* " + b6[0]];
                                if (cb) {
                                    if (cb === true) {
                                        cb = cc[b3]
                                    } else {
                                        if (cc[b3] !== true) {
                                            b9 = b6[0];
                                            ca.splice(b7--, 0, b9)
                                        }
                                    }
                                    break
                                }
                            }
                        }
                    }
                    if (cb !== true) {
                        if (cb && cd["throws"]) {
                            b5 = cb(b5)
                        } else {
                            try {
                                b5 = cb(b5)
                            } catch (b8) {
                                return {
                                    state: "parsererror",
                                    error: cb ? b8 : "No conversion from " + b4 + " to " + b9
                                }
                            }
                        }
                    }
                }
                b4 = b9
            }
        }
        return {
            state: "success",
            data: b5
        }
    }
    bJ.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                bJ.globalEval(e);
                return e
            }
        }
    });
    bJ.ajaxPrefilter("script", function (e) {
        if (e.cache === aG) {
            e.cache = false
        }
        if (e.crossDomain) {
            e.type = "GET";
            e.global = false
        }
    });
    bJ.ajaxTransport("script", function (b4) {
        if (b4.crossDomain) {
            var e, b3 = l.head || bJ("head")[0] || l.documentElement;
            return {
                send: function (b5, b6) {
                    e = l.createElement("script");
                    e.async = true;
                    if (b4.scriptCharset) {
                        e.charset = b4.scriptCharset
                    }
                    e.src = b4.url;
                    e.onload = e.onreadystatechange = function (b8, b7) {
                        if (b7 || !e.readyState || /loaded|complete/.test(e.readyState)) {
                            e.onload = e.onreadystatechange = null;
                            if (e.parentNode) {
                                e.parentNode.removeChild(e)
                            }
                            e = null;
                            if (!b7) {
                                b6(200, "success")
                            }
                        }
                    };
                    b3.insertBefore(e, b3.firstChild)
                }, abort: function () {
                    if (e) {
                        e.onload(aG, true)
                    }
                }
            }
        }
    });
    var bq = [],
        a5 = /(=)\?(?=&|$)|\?\?/;
    bJ.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = bq.pop() || (bJ.expando + "_" + (bO++));
            this[e] = true;
            return e
        }
    });
    bJ.ajaxPrefilter("json jsonp", function (b5, e, b6) {
        var b8, b3, b4, b7 = b5.jsonp !== false && (a5.test(b5.url) ? "url" : typeof b5.data === "string" && !(b5.contentType || "").indexOf("application/x-www-form-urlencoded") && a5.test(b5.data) && "data");
        if (b7 || b5.dataTypes[0] === "jsonp") {
            b8 = b5.jsonpCallback = bJ.isFunction(b5.jsonpCallback) ? b5.jsonpCallback() : b5.jsonpCallback;
            if (b7) {
                b5[b7] = b5[b7].replace(a5, "$1" + b8)
            } else {
                if (b5.jsonp !== false) {
                    b5.url += (az.test(b5.url) ? "&" : "?") + b5.jsonp + "=" + b8
                }
            }
            b5.converters["script json"] = function () {
                if (!b4) {
                    bJ.error(b8 + " was not called")
                }
                return b4[0]
            };
            b5.dataTypes[0] = "json";
            b3 = a2[b8];
            a2[b8] = function () {
                b4 = arguments
            };
            b6.always(function () {
                a2[b8] = b3;
                if (b5[b8]) {
                    b5.jsonpCallback = e.jsonpCallback;
                    bq.push(b8)
                }
                if (b4 && bJ.isFunction(b3)) {
                    b3(b4[0])
                }
                b4 = b3 = aG
            });
            return "script"
        }
    });
    var ah, ax, ay = 0,
        aP = a2.ActiveXObject && function () {
            var e;
            for (e in ah) {
                ah[e](aG, true)
            }
        };

    function bD() {
        try {
            return new a2.XMLHttpRequest()
        } catch (b3) {}
    }

    function bd() {
        try {
            return new a2.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b3) {}
    }
    bJ.ajaxSettings.xhr = a2.ActiveXObject ? function () {
        return !this.isLocal && bD() || bd()
    } : bD;
    ax = bJ.ajaxSettings.xhr();
    bJ.support.cors = !!ax && ("withCredentials" in ax);
    ax = bJ.support.ajax = !!ax;
    if (ax) {
        bJ.ajaxTransport(function (e) {
            if (!e.crossDomain || bJ.support.cors) {
                var b3;
                return {
                    send: function (b9, b4) {
                        var b7, b5, b8 = e.xhr();
                        if (e.username) {
                            b8.open(e.type, e.url, e.async, e.username, e.password)
                        } else {
                            b8.open(e.type, e.url, e.async)
                        } if (e.xhrFields) {
                            for (b5 in e.xhrFields) {
                                b8[b5] = e.xhrFields[b5]
                            }
                        }
                        if (e.mimeType && b8.overrideMimeType) {
                            b8.overrideMimeType(e.mimeType)
                        }
                        if (!e.crossDomain && !b9["X-Requested-With"]) {
                            b9["X-Requested-With"] = "XMLHttpRequest"
                        }
                        try {
                            for (b5 in b9) {
                                b8.setRequestHeader(b5, b9[b5])
                            }
                        } catch (b6) {}
                        b8.send((e.hasContent && e.data) || null);
                        b3 = function (cc, cb) {
                            var ca, cd, cg, ce;
                            try {
                                if (b3 && (cb || b8.readyState === 4)) {
                                    b3 = aG;
                                    if (b7) {
                                        b8.onreadystatechange = bJ.noop;
                                        if (aP) {
                                            delete ah[b7]
                                        }
                                    }
                                    if (cb) {
                                        if (b8.readyState !== 4) {
                                            b8.abort()
                                        }
                                    } else {
                                        ce = {};
                                        ca = b8.status;
                                        cd = b8.getAllResponseHeaders();
                                        if (typeof b8.responseText === "string") {
                                            ce.text = b8.responseText
                                        }
                                        try {
                                            cg = b8.statusText
                                        } catch (cf) {
                                            cg = ""
                                        }
                                        if (!ca && e.isLocal && !e.crossDomain) {
                                            ca = ce.text ? 200 : 404
                                        } else {
                                            if (ca === 1223) {
                                                ca = 204
                                            }
                                        }
                                    }
                                }
                            } catch (ch) {
                                if (!cb) {
                                    b4(-1, ch)
                                }
                            }
                            if (ce) {
                                b4(ca, cg, ce, cd)
                            }
                        };
                        if (!e.async) {
                            b3()
                        } else {
                            if (b8.readyState === 4) {
                                setTimeout(b3)
                            } else {
                                b7 = ++ay;
                                if (aP) {
                                    if (!ah) {
                                        ah = {};
                                        bJ(a2).unload(aP)
                                    }
                                    ah[b7] = b3
                                }
                                b8.onreadystatechange = b3
                            }
                        }
                    }, abort: function () {
                        if (b3) {
                            b3(aG, true)
                        }
                    }
                }
            }
        })
    }
    var K, ad, bR = /^(?:toggle|show|hide)$/,
        bK = new RegExp("^(?:([+-])=|)(" + bA + ")([a-z%]*)$", "i"),
        bQ = /queueHooks$/,
        aB = [h],
        a0 = {
            "*": [
                function (e, b9) {
                    var b5, ca, cb = this.createTween(e, b9),
                        b6 = bK.exec(b9),
                        b7 = cb.cur(),
                        b3 = +b7 || 0,
                        b4 = 1,
                        b8 = 20;
                    if (b6) {
                        b5 = +b6[2];
                        ca = b6[3] || (bJ.cssNumber[e] ? "" : "px");
                        if (ca !== "px" && b3) {
                            b3 = bJ.css(cb.elem, e, true) || b5 || 1;
                            do {
                                b4 = b4 || ".5";
                                b3 = b3 / b4;
                                bJ.style(cb.elem, e, b3 + ca)
                            } while (b4 !== (b4 = cb.cur() / b7) && b4 !== 1 && --b8)
                        }
                        cb.unit = ca;
                        cb.start = b3;
                        cb.end = b6[1] ? b3 + (b6[1] + 1) * b5 : b5
                    }
                    return cb
                }
            ]
        };

    function bm() {
        setTimeout(function () {
            K = aG
        });
        return (K = bJ.now())
    }

    function be(b3, e) {
        bJ.each(e, function (b8, b6) {
            var b7 = (a0[b8] || []).concat(a0["*"]),
                b4 = 0,
                b5 = b7.length;
            for (; b4 < b5; b4++) {
                if (b7[b4].call(b3, b8, b6)) {
                    return
                }
            }
        })
    }

    function f(b4, b8, cb) {
        var cc, e, b7 = 0,
            b3 = aB.length,
            ca = bJ.Deferred().always(function () {
                delete b6.elem
            }),
            b6 = function () {
                if (e) {
                    return false
                }
                var ci = K || bm(),
                    cf = Math.max(0, b5.startTime + b5.duration - ci),
                    cd = cf / b5.duration || 0,
                    ch = 1 - cd,
                    ce = 0,
                    cg = b5.tweens.length;
                for (; ce < cg; ce++) {
                    b5.tweens[ce].run(ch)
                }
                ca.notifyWith(b4, [b5, ch, cf]);
                if (ch < 1 && cg) {
                    return cf
                } else {
                    ca.resolveWith(b4, [b5]);
                    return false
                }
            },
            b5 = ca.promise({
                elem: b4,
                props: bJ.extend({}, b8),
                opts: bJ.extend(true, {
                    specialEasing: {}
                }, cb),
                originalProperties: b8,
                originalOptions: cb,
                startTime: K || bm(),
                duration: cb.duration,
                tweens: [],
                createTween: function (cf, cd) {
                    var ce = bJ.Tween(b4, b5.opts, cf, cd, b5.opts.specialEasing[cf] || b5.opts.easing);
                    b5.tweens.push(ce);
                    return ce
                }, stop: function (ce) {
                    var cd = 0,
                        cf = ce ? b5.tweens.length : 0;
                    if (e) {
                        return this
                    }
                    e = true;
                    for (; cd < cf; cd++) {
                        b5.tweens[cd].run(1)
                    }
                    if (ce) {
                        ca.resolveWith(b4, [b5, ce])
                    } else {
                        ca.rejectWith(b4, [b5, ce])
                    }
                    return this
                }
            }),
            b9 = b5.props;
        am(b9, b5.opts.specialEasing);
        for (; b7 < b3; b7++) {
            cc = aB[b7].call(b5, b4, b9, b5.opts);
            if (cc) {
                return cc
            }
        }
        be(b5, b9);
        if (bJ.isFunction(b5.opts.start)) {
            b5.opts.start.call(b4, b5)
        }
        bJ.fx.timer(bJ.extend(b6, {
            elem: b4,
            anim: b5,
            queue: b5.opts.queue
        }));
        return b5.progress(b5.opts.progress).done(b5.opts.done, b5.opts.complete).fail(b5.opts.fail).always(b5.opts.always)
    }

    function am(b5, b7) {
        var b6, b4, b3, b8, e;
        for (b3 in b5) {
            b4 = bJ.camelCase(b3);
            b8 = b7[b4];
            b6 = b5[b3];
            if (bJ.isArray(b6)) {
                b8 = b6[1];
                b6 = b5[b3] = b6[0]
            }
            if (b3 !== b4) {
                b5[b4] = b6;
                delete b5[b3]
            }
            e = bJ.cssHooks[b4];
            if (e && "expand" in e) {
                b6 = e.expand(b6);
                delete b5[b4];
                for (b3 in b6) {
                    if (!(b3 in b5)) {
                        b5[b3] = b6[b3];
                        b7[b3] = b8
                    }
                }
            } else {
                b7[b4] = b8
            }
        }
    }
    bJ.Animation = bJ.extend(f, {
        tweener: function (b3, b6) {
            if (bJ.isFunction(b3)) {
                b6 = b3;
                b3 = ["*"]
            } else {
                b3 = b3.split(" ")
            }
            var b5, e = 0,
                b4 = b3.length;
            for (; e < b4; e++) {
                b5 = b3[e];
                a0[b5] = a0[b5] || [];
                a0[b5].unshift(b6)
            }
        }, prefilter: function (b3, e) {
            if (e) {
                aB.unshift(b3)
            } else {
                aB.push(b3)
            }
        }
    });

    function h(b6, cc, e) {
        var b4, cb, b5, ce, ci, b8, ch, cg, cf, b7 = this,
            b3 = b6.style,
            cd = {},
            ca = [],
            b9 = b6.nodeType && P(b6);
        if (!e.queue) {
            cg = bJ._queueHooks(b6, "fx");
            if (cg.unqueued == null) {
                cg.unqueued = 0;
                cf = cg.empty.fire;
                cg.empty.fire = function () {
                    if (!cg.unqueued) {
                        cf()
                    }
                }
            }
            cg.unqueued++;
            b7.always(function () {
                b7.always(function () {
                    cg.unqueued--;
                    if (!bJ.queue(b6, "fx").length) {
                        cg.empty.fire()
                    }
                })
            })
        }
        if (b6.nodeType === 1 && ("height" in cc || "width" in cc)) {
            e.overflow = [b3.overflow, b3.overflowX, b3.overflowY];
            if (bJ.css(b6, "display") === "inline" && bJ.css(b6, "float") === "none") {
                if (!bJ.support.inlineBlockNeedsLayout || bE(b6.nodeName) === "inline") {
                    b3.display = "inline-block"
                } else {
                    b3.zoom = 1
                }
            }
        }
        if (e.overflow) {
            b3.overflow = "hidden";
            if (!bJ.support.shrinkWrapBlocks) {
                b7.always(function () {
                    b3.overflow = e.overflow[0];
                    b3.overflowX = e.overflow[1];
                    b3.overflowY = e.overflow[2]
                })
            }
        }
        for (cb in cc) {
            ce = cc[cb];
            if (bR.exec(ce)) {
                delete cc[cb];
                b8 = b8 || ce === "toggle";
                if (ce === (b9 ? "hide" : "show")) {
                    continue
                }
                ca.push(cb)
            }
        }
        b5 = ca.length;
        if (b5) {
            ci = bJ._data(b6, "fxshow") || bJ._data(b6, "fxshow", {});
            if ("hidden" in ci) {
                b9 = ci.hidden
            }
            if (b8) {
                ci.hidden = !b9
            }
            if (b9) {
                bJ(b6).show()
            } else {
                b7.done(function () {
                    bJ(b6).hide()
                })
            }
            b7.done(function () {
                var cj;
                bJ._removeData(b6, "fxshow");
                for (cj in cd) {
                    bJ.style(b6, cj, cd[cj])
                }
            });
            for (cb = 0; cb < b5; cb++) {
                b4 = ca[cb];
                ch = b7.createTween(b4, b9 ? ci[b4] : 0);
                cd[b4] = ci[b4] || bJ.style(b6, b4);
                if (!(b4 in ci)) {
                    ci[b4] = ch.start;
                    if (b9) {
                        ch.end = ch.start;
                        ch.start = b4 === "width" || b4 === "height" ? 1 : 0
                    }
                }
            }
        }
    }

    function G(b4, b3, b6, e, b5) {
        return new G.prototype.init(b4, b3, b6, e, b5)
    }
    bJ.Tween = G;
    G.prototype = {
        constructor: G,
        init: function (b5, b3, b7, e, b6, b4) {
            this.elem = b5;
            this.prop = b7;
            this.easing = b6 || "swing";
            this.options = b3;
            this.start = this.now = this.cur();
            this.end = e;
            this.unit = b4 || (bJ.cssNumber[b7] ? "" : "px")
        }, cur: function () {
            var e = G.propHooks[this.prop];
            return e && e.get ? e.get(this) : G.propHooks._default.get(this)
        }, run: function (b4) {
            var b3, e = G.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = b3 = bJ.easing[this.easing](b4, this.options.duration * b4, 0, 1, this.options.duration)
            } else {
                this.pos = b3 = b4
            }
            this.now = (this.end - this.start) * b3 + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }
            if (e && e.set) {
                e.set(this)
            } else {
                G.propHooks._default.set(this)
            }
            return this
        }
    };
    G.prototype.init.prototype = G.prototype;
    G.propHooks = {
        _default: {
            get: function (b3) {
                var e;
                if (b3.elem[b3.prop] != null && (!b3.elem.style || b3.elem.style[b3.prop] == null)) {
                    return b3.elem[b3.prop]
                }
                e = bJ.css(b3.elem, b3.prop, "");
                return !e || e === "auto" ? 0 : e
            }, set: function (e) {
                if (bJ.fx.step[e.prop]) {
                    bJ.fx.step[e.prop](e)
                } else {
                    if (e.elem.style && (e.elem.style[bJ.cssProps[e.prop]] != null || bJ.cssHooks[e.prop])) {
                        bJ.style(e.elem, e.prop, e.now + e.unit)
                    } else {
                        e.elem[e.prop] = e.now
                    }
                }
            }
        }
    };
    G.propHooks.scrollTop = G.propHooks.scrollLeft = {
        set: function (e) {
            if (e.elem.nodeType && e.elem.parentNode) {
                e.elem[e.prop] = e.now
            }
        }
    };
    bJ.each(["toggle", "show", "hide"], function (b3, e) {
        var b4 = bJ.fn[e];
        bJ.fn[e] = function (b5, b7, b6) {
            return b5 == null || typeof b5 === "boolean" ? b4.apply(this, arguments) : this.animate(bI(e, true), b5, b7, b6)
        }
    });
    bJ.fn.extend({
        fadeTo: function (e, b5, b4, b3) {
            return this.filter(P).css("opacity", 0).show().end().animate({
                opacity: b5
            }, e, b4, b3)
        }, animate: function (b8, b5, b7, b6) {
            var b4 = bJ.isEmptyObject(b8),
                e = bJ.speed(b5, b7, b6),
                b3 = function () {
                    var b9 = f(this, bJ.extend({}, b8), e);
                    b3.finish = function () {
                        b9.stop(true)
                    };
                    if (b4 || bJ._data(this, "finish")) {
                        b9.stop(true)
                    }
                };
            b3.finish = b3;
            return b4 || e.queue === false ? this.each(b3) : this.queue(e.queue, b3)
        }, stop: function (b4, b3, e) {
            var b5 = function (b6) {
                var b7 = b6.stop;
                delete b6.stop;
                b7(e)
            };
            if (typeof b4 !== "string") {
                e = b3;
                b3 = b4;
                b4 = aG
            }
            if (b3 && b4 !== false) {
                this.queue(b4 || "fx", [])
            }
            return this.each(function () {
                var b9 = true,
                    b6 = b4 != null && b4 + "queueHooks",
                    b8 = bJ.timers,
                    b7 = bJ._data(this);
                if (b6) {
                    if (b7[b6] && b7[b6].stop) {
                        b5(b7[b6])
                    }
                } else {
                    for (b6 in b7) {
                        if (b7[b6] && b7[b6].stop && bQ.test(b6)) {
                            b5(b7[b6])
                        }
                    }
                }
                for (b6 = b8.length; b6--;) {
                    if (b8[b6].elem === this && (b4 == null || b8[b6].queue === b4)) {
                        b8[b6].anim.stop(e);
                        b9 = false;
                        b8.splice(b6, 1)
                    }
                }
                if (b9 || !e) {
                    bJ.dequeue(this, b4)
                }
            })
        }, finish: function (e) {
            if (e !== false) {
                e = e || "fx"
            }
            return this.each(function () {
                var b5, b8 = bJ._data(this),
                    b4 = b8[e + "queue"],
                    b3 = b8[e + "queueHooks"],
                    b7 = bJ.timers,
                    b6 = b4 ? b4.length : 0;
                b8.finish = true;
                bJ.queue(this, e, []);
                if (b3 && b3.cur && b3.cur.finish) {
                    b3.cur.finish.call(this)
                }
                for (b5 = b7.length; b5--;) {
                    if (b7[b5].elem === this && b7[b5].queue === e) {
                        b7[b5].anim.stop(true);
                        b7.splice(b5, 1)
                    }
                }
                for (b5 = 0; b5 < b6; b5++) {
                    if (b4[b5] && b4[b5].finish) {
                        b4[b5].finish.call(this)
                    }
                }
                delete b8.finish
            })
        }
    });

    function bI(b4, b6) {
        var b5, e = {
                height: b4
            },
            b3 = 0;
        b6 = b6 ? 1 : 0;
        for (; b3 < 4; b3 += 2 - b6) {
            b5 = bT[b3];
            e["margin" + b5] = e["padding" + b5] = b4
        }
        if (b6) {
            e.opacity = e.width = b4
        }
        return e
    }
    bJ.each({
        slideDown: bI("show"),
        slideUp: bI("hide"),
        slideToggle: bI("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, b3) {
        bJ.fn[e] = function (b4, b6, b5) {
            return this.animate(b3, b4, b6, b5)
        }
    });
    bJ.speed = function (b4, b5, b3) {
        var e = b4 && typeof b4 === "object" ? bJ.extend({}, b4) : {
            complete: b3 || !b3 && b5 || bJ.isFunction(b4) && b4,
            duration: b4,
            easing: b3 && b5 || b5 && !bJ.isFunction(b5) && b5
        };
        e.duration = bJ.fx.off ? 0 : typeof e.duration === "number" ? e.duration : e.duration in bJ.fx.speeds ? bJ.fx.speeds[e.duration] : bJ.fx.speeds._default;
        if (e.queue == null || e.queue === true) {
            e.queue = "fx"
        }
        e.old = e.complete;
        e.complete = function () {
            if (bJ.isFunction(e.old)) {
                e.old.call(this)
            }
            if (e.queue) {
                bJ.dequeue(this, e.queue)
            }
        };
        return e
    };
    bJ.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2
        }
    };
    bJ.timers = [];
    bJ.fx = G.prototype.init;
    bJ.fx.tick = function () {
        var b4, b3 = bJ.timers,
            e = 0;
        K = bJ.now();
        for (; e < b3.length; e++) {
            b4 = b3[e];
            if (!b4() && b3[e] === b4) {
                b3.splice(e--, 1)
            }
        }
        if (!b3.length) {
            bJ.fx.stop()
        }
        K = aG
    };
    bJ.fx.timer = function (e) {
        if (e() && bJ.timers.push(e)) {
            bJ.fx.start()
        }
    };
    bJ.fx.interval = 13;
    bJ.fx.start = function () {
        if (!ad) {
            ad = setInterval(bJ.fx.tick, bJ.fx.interval)
        }
    };
    bJ.fx.stop = function () {
        clearInterval(ad);
        ad = null
    };
    bJ.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    bJ.fx.step = {};
    if (bJ.expr && bJ.expr.filters) {
        bJ.expr.filters.animated = function (e) {
            return bJ.grep(bJ.timers, function (b3) {
                return e === b3.elem
            }).length
        }
    }
    bJ.fn.offset = function (b3) {
        if (arguments.length) {
            return b3 === aG ? this : this.each(function (b8) {
                bJ.offset.setOffset(this, b3, b8)
            })
        }
        var e, b7, b5 = {
                top: 0,
                left: 0
            },
            b4 = this[0],
            b6 = b4 && b4.ownerDocument;
        if (!b6) {
            return
        }
        e = b6.documentElement;
        if (!bJ.contains(e, b4)) {
            return b5
        }
        if (typeof b4.getBoundingClientRect !== aC) {
            b5 = b4.getBoundingClientRect()
        }
        b7 = bp(b6);
        return {
            top: b5.top + (b7.pageYOffset || e.scrollTop) - (e.clientTop || 0),
            left: b5.left + (b7.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
        }
    };
    bJ.offset = {
        setOffset: function (b5, ce, b8) {
            var b9 = bJ.css(b5, "position");
            if (b9 === "static") {
                b5.style.position = "relative"
            }
            var b7 = bJ(b5),
                b3 = b7.offset(),
                e = bJ.css(b5, "top"),
                cc = bJ.css(b5, "left"),
                cd = (b9 === "absolute" || b9 === "fixed") && bJ.inArray("auto", [e, cc]) > -1,
                cb = {},
                ca = {},
                b4, b6;
            if (cd) {
                ca = b7.position();
                b4 = ca.top;
                b6 = ca.left
            } else {
                b4 = parseFloat(e) || 0;
                b6 = parseFloat(cc) || 0
            } if (bJ.isFunction(ce)) {
                ce = ce.call(b5, b8, b3)
            }
            if (ce.top != null) {
                cb.top = (ce.top - b3.top) + b4
            }
            if (ce.left != null) {
                cb.left = (ce.left - b3.left) + b6
            }
            if ("using" in ce) {
                ce.using.call(b5, cb)
            } else {
                b7.css(cb)
            }
        }
    };
    bJ.fn.extend({
        position: function () {
            if (!this[0]) {
                return
            }
            var b4, b5, e = {
                    top: 0,
                    left: 0
                },
                b3 = this[0];
            if (bJ.css(b3, "position") === "fixed") {
                b5 = b3.getBoundingClientRect()
            } else {
                b4 = this.offsetParent();
                b5 = this.offset();
                if (!bJ.nodeName(b4[0], "html")) {
                    e = b4.offset()
                }
                e.top += bJ.css(b4[0], "borderTopWidth", true);
                e.left += bJ.css(b4[0], "borderLeftWidth", true)
            }
            return {
                top: b5.top - e.top - bJ.css(b3, "marginTop", true),
                left: b5.left - e.left - bJ.css(b3, "marginLeft", true)
            }
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || l.documentElement;
                while (e && (!bJ.nodeName(e, "html") && bJ.css(e, "position") === "static")) {
                    e = e.offsetParent
                }
                return e || l.documentElement
            })
        }
    });
    bJ.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (b4, b3) {
        var e = /Y/.test(b3);
        bJ.fn[b4] = function (b5) {
            return bJ.access(this, function (b6, b9, b8) {
                var b7 = bp(b6);
                if (b8 === aG) {
                    return b7 ? (b3 in b7) ? b7[b3] : b7.document.documentElement[b9] : b6[b9]
                }
                if (b7) {
                    b7.scrollTo(!e ? b8 : bJ(b7).scrollLeft(), e ? b8 : bJ(b7).scrollTop())
                } else {
                    b6[b9] = b8
                }
            }, b4, b5, arguments.length, null)
        }
    });

    function bp(e) {
        return bJ.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false
    }
    bJ.each({
        Height: "height",
        Width: "width"
    }, function (e, b3) {
        bJ.each({
            padding: "inner" + e,
            content: b3,
            "": "outer" + e
        }, function (b4, b5) {
            bJ.fn[b5] = function (b9, b8) {
                var b7 = arguments.length && (b4 || typeof b9 !== "boolean"),
                    b6 = b4 || (b9 === true || b8 === true ? "margin" : "border");
                return bJ.access(this, function (cb, ca, cc) {
                    var cd;
                    if (bJ.isWindow(cb)) {
                        return cb.document.documentElement["client" + e]
                    }
                    if (cb.nodeType === 9) {
                        cd = cb.documentElement;
                        return Math.max(cb.body["scroll" + e], cd["scroll" + e], cb.body["offset" + e], cd["offset" + e], cd["client" + e])
                    }
                    return cc === aG ? bJ.css(cb, ca, b6) : bJ.style(cb, ca, cc, b6)
                }, b3, b7 ? b9 : aG, b7, null)
            }
        })
    });
    a2.jQuery = a2.$ = bJ;
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define("jquery", [], function () {
            return bJ
        })
    }
})(window);
(function (a) {
    a.chromatable = {
        defaults: {
            width: "900px",
            height: "300px",
            scrolling: "yes"
        }
    };
    a.fn.chromatable = function (c) {
        var c = a.extend({}, a.chromatable.defaults, c);
        return this.each(function () {
            var e = a(this);
            var d = a(this).attr("ID") + ("wrapper");
            a(this).css("width", c.width).addClass("_scrolling");
            a(this).wrap('<div class="scrolling_outer"><div id="' + d + '" class="scrolling_inner"></div></div>');
            a(".scrolling_outer").css({
                position: "relative"
            });
            a("#" + d).css({
                border: "1px solid #CCCCCC",
                "overflow-x": "hidden",
                "overflow-y": "auto",
                "padding-right": "17px"
            });
            a("#" + d).css("height", c.height);
            a("#" + d).css("width", c.width);
            a(this).before(a(this).clone().attr("id", "").addClass("_thead").css({
                width: "auto",
                display: "block",
                position: "absolute",
                border: "none",
                "border-bottom": "1px solid #CCC",
                top: "1px"
            }));
            a("._thead").children("tbody").remove();
            a(this).each(function (f) {
                if (c.width == "100%" || c.width == "auto") {
                    a("#" + d).css({
                        "padding-right": "0px"
                    })
                }
                if (c.scrolling == "no") {
                    a("#" + d).before('<a href="#" class="expander" style="width:100%;">Expand table</a>');
                    a("#" + d).css({
                        "padding-right": "0px"
                    });
                    a(".expander").each(function (g) {
                        a(this).attr("ID", g);
                        a(this).bind("click", function () {
                            a("#" + d).css({
                                height: "auto"
                            });
                            a("#" + d + " ._thead").remove();
                            a(this).remove()
                        })
                    });
                    a("#" + d).resizable({
                        handles: "s"
                    }).css("overflow-y", "hidden")
                }
            });
            $curr = e.prev();
            a("thead:eq(0)>tr th", this).each(function (f) {
                a("thead:eq(0)>tr th:eq(" + f + ")", $curr).width(a(this).width())
            });
            if (c.width == "100%" || "auto") {
                a(window).resize(function () {
                    b(e)
                })
            }
        })
    };

    function b(c) {
        $curr = c.prev();
        a("thead:eq(0)>tr th", c).each(function (d) {
            a("thead:eq(0)>tr th:eq(" + d + ")", $curr).width(a(this).width())
        })
    }
})(jQuery);
/*!
 * jqPagination, a jQuery pagination plugin (obviously)
 *
 * Copyright (C) 2011 Ben Everard
 *
 * http://beneverard.github.com/jqPagination
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */
(function (a) {
    a.jqPagination = function (c, b) {
        var d = this;
        d.$el = a(c);
        d.el = c;
        d.$input = d.$el.find("input");
        d.$el.data("jqPagination", d);
        d.init = function () {
            d.options = a.extend({}, a.jqPagination.defaultOptions, b);
            if (d.options.max_page === null) {
                if (d.$input.data("max-page") !== undefined) {
                    d.options.max_page = d.$input.data("max-page")
                } else {
                    d.options.max_page = 1
                }
            }
            if (d.$input.data("current-page") !== undefined && d.isNumber(d.$input.data("current-page"))) {
                d.options.current_page = d.$input.data("current-page")
            }
            d.$input.removeAttr("readonly");
            d.updateInput(true);
            d.$input.on("focus.jqPagination mouseup.jqPagination", function (e) {
                if (e.type === "focus") {
                    var f = parseInt(d.options.current_page, 10);
                    a(this).val(f).select()
                }
                if (e.type === "mouseup") {
                    return false
                }
            });
            d.$input.on("blur.jqPagination keydown.jqPagination", function (e) {
                var g = a(this),
                    f = parseInt(d.options.current_page, 10);
                if (e.keyCode === 27) {
                    g.val(f);
                    g.blur()
                }
                if (e.keyCode === 13) {
                    g.blur()
                }
                if (e.type === "blur") {
                    d.setPage(g.val())
                }
            });
            d.$el.on("click.jqPagination", "a", function (e) {
                var f = a(this);
                if (f.hasClass("disabled")) {
                    return false
                }
                if (!e.metaKey && !e.ctrlKey) {
                    e.preventDefault();
                    d.setPage(f.data("action"))
                }
            })
        };
        d.setPage = function (f) {
            if (f === undefined) {
                return d.options.current_page
            }
            var g = parseInt(d.options.current_page, 10),
                e = parseInt(d.options.max_page, 10);
            if (isNaN(parseInt(f, 10))) {
                switch (f) {
                case "first":
                    f = 1;
                    break;
                case "prev":
                case "previous":
                    f = g - 1;
                    break;
                case "next":
                    f = g + 1;
                    break;
                case "last":
                    f = e;
                    break
                }
            }
            f = parseInt(f, 10);
            if (isNaN(f) || f < 1 || f > e || f === g) {
                d.setInputValue(g);
                return false
            }
            d.options.current_page = f;
            d.$input.data("current-page", f);
            d.updateInput()
        };
        d.setMaxPage = function (e) {
            if (e === undefined) {
                return d.options.max_page
            }
            if (!d.isNumber(e)) {
                console.error("jqPagination: max_page is not a number");
                return false
            }
            if (e < d.options.current_page) {
                console.error("jqPagination: max_page lower than current_page");
                return false
            }
            d.options.max_page = e;
            d.$input.data("max-page", e);
            d.updateInput()
        };
        d.updateInput = function (e) {
            var f = parseInt(d.options.current_page, 10);
            d.setInputValue(f);
            d.setLinks(f);
            if (e !== true) {
                d.options.paged(f)
            }
        };
        d.setInputValue = function (f) {
            var g = d.options.page_string,
                e = d.options.max_page;
            g = g.replace("{current_page}", f).replace("{max_page}", e);
            d.$input.val(g)
        };
        d.isNumber = function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        };
        d.setLinks = function (h) {
            var j = d.options.link_string,
                i = parseInt(d.options.current_page, 10),
                e = parseInt(d.options.max_page, 10);
            if (j !== "") {
                var g = i - 1;
                if (g < 1) {
                    g = 1
                }
                var f = i + 1;
                if (f > e) {
                    f = e
                }
                d.$el.find("a.first").attr("href", j.replace("{page_number}", "1"));
                d.$el.find("a.prev, a.previous").attr("href", j.replace("{page_number}", g));
                d.$el.find("a.next").attr("href", j.replace("{page_number}", f));
                d.$el.find("a.last").attr("href", j.replace("{page_number}", e))
            }
            d.$el.find("a").removeClass("disabled");
            if (i === e) {
                d.$el.find(".next, .last").addClass("disabled")
            }
            if (i === 1) {
                d.$el.find(".previous, .first").addClass("disabled")
            }
        };
        d.callMethod = function (g, e, f) {
            switch (g.toLowerCase()) {
            case "option":
                switch (e.toLowerCase()) {
                case "current_page":
                    return d.setPage(f);
                case "max_page":
                    return d.setMaxPage(f)
                }
                console.error("jqPagination: cannot get / set option " + e);
                return false;
                break;
            case "destroy":
                d.$el.off(".jqPagination").find("*").off(".jqPagination");
                break;
            default:
                console.error('jqPagination: method "' + g + '" does not exist');
                return false
            }
        };
        d.init();
        return d
    };
    a.jqPagination.defaultOptions = {
        current_page: 1,
        link_string: "",
        max_page: null,
        page_string: "Page {current_page} of {max_page}",
        paged: function () {}
    };
    a.fn.jqPagination = function () {
        var b = this,
            c = Array.prototype.slice.call(arguments);
        if (typeof c[0] === "string") {
            if (b.length > 1) {
                b = b.eq(0)
            }
            var d = a(b).data("jqPagination");
            return d.callMethod(c[0], c[1], c[2])
        }
        return (new a.jqPagination(this, c[0]))
    }
})(jQuery);
if (!console) {
    var console = {},
        func = function () {
            return false
        };
    console.log = func;
    console.info = func;
    console.warn = func;
    console.error = func
};
/*!
 * jQuery Form Plugin
 * version: 3.34.0-2013.05.17
 * @requires jQuery v1.5 or later
 * Copyright (c) 2013 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
(function (f) {
    var c = {};
    c.fileapi = f("<input type='file'/>").get(0).files !== undefined;
    c.formdata = window.FormData !== undefined;
    var e = !!f.fn.prop;
    f.fn.attr2 = function () {
        if (!e) {
            return this.attr.apply(this, arguments)
        }
        var g = this.prop.apply(this, arguments);
        if ((g && g.jquery) || typeof g === "string") {
            return g
        }
        return this.attr.apply(this, arguments)
    };
    f.fn.ajaxSubmit = function (j) {
        if (!this.length) {
            d("ajaxSubmit: skipping submit process - no element selected");
            return this
        }
        var i, C, m, o = this;
        if (typeof j == "function") {
            j = {
                success: j
            }
        }
        i = j.type || this.attr2("method");
        C = j.url || this.attr2("action");
        m = (typeof C === "string") ? f.trim(C) : "";
        m = m || window.location.href || "";
        if (m) {
            m = (m.match(/^([^#]+)/) || [])[1]
        }
        j = f.extend(true, {
            url: m,
            success: f.ajaxSettings.success,
            type: i || "GET",
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, j);
        var u = {};
        this.trigger("form-pre-serialize", [this, j, u]);
        if (u.veto) {
            d("ajaxSubmit: submit vetoed via form-pre-serialize trigger");
            return this
        }
        if (j.beforeSerialize && j.beforeSerialize(this, j) === false) {
            d("ajaxSubmit: submit aborted via beforeSerialize callback");
            return this
        }
        var n = j.traditional;
        if (n === undefined) {
            n = f.ajaxSettings.traditional
        }
        var s = [];
        var E, F = this.formToArray(j.semantic, s);
        if (j.data) {
            j.extraData = j.data;
            E = f.param(j.data, n)
        }
        if (j.beforeSubmit && j.beforeSubmit(F, this, j) === false) {
            d("ajaxSubmit: submit aborted via beforeSubmit callback");
            return this
        }
        this.trigger("form-submit-validate", [F, this, j, u]);
        if (u.veto) {
            d("ajaxSubmit: submit vetoed via form-submit-validate trigger");
            return this
        }
        var y = f.param(F, n);
        if (E) {
            y = (y ? (y + "&" + E) : E)
        }
        if (j.type.toUpperCase() == "GET") {
            j.url += (j.url.indexOf("?") >= 0 ? "&" : "?") + y;
            j.data = null
        } else {
            j.data = y
        }
        var H = [];
        if (j.resetForm) {
            H.push(function () {
                o.resetForm()
            })
        }
        if (j.clearForm) {
            H.push(function () {
                o.clearForm(j.includeHidden)
            })
        }
        if (!j.dataType && j.target) {
            var l = j.success || function () {};
            H.push(function (q) {
                var k = j.replaceTarget ? "replaceWith" : "html";
                f(j.target)[k](q).each(l, arguments)
            })
        } else {
            if (j.success) {
                H.push(j.success)
            }
        }
        j.success = function (K, q, L) {
            var J = j.context || this;
            for (var I = 0, k = H.length; I < k; I++) {
                H[I].apply(J, [K, q, L || o, o])
            }
        };
        if (j.error) {
            var z = j.error;
            j.error = function (J, k, q) {
                var I = j.context || this;
                z.apply(I, [J, k, q, o])
            }
        }
        if (j.complete) {
            var h = j.complete;
            j.complete = function (I, k) {
                var q = j.context || this;
                h.apply(q, [I, k, o])
            }
        }
        var D = f('input[type=file]:enabled[value!=""]', this);
        var p = D.length > 0;
        var B = "multipart/form-data";
        var x = (o.attr("enctype") == B || o.attr("encoding") == B);
        var w = c.fileapi && c.formdata;
        d("fileAPI :" + w);
        var r = (p || x) && !w;
        var v;
        if (j.iframe !== false && (j.iframe || r)) {
            if (j.closeKeepAlive) {
                f.get(j.closeKeepAlive, function () {
                    v = G(F)
                })
            } else {
                v = G(F)
            }
        } else {
            if ((p || x) && w) {
                v = t(F)
            } else {
                v = f.ajax(j)
            }
        }
        o.removeData("jqxhr").data("jqxhr", v);
        for (var A = 0; A < s.length; A++) {
            s[A] = null
        }
        this.trigger("form-submit-notify", [this, j]);
        return this;

        function g(K) {
            var L = f.param(K).split("&");
            var q = L.length;
            var k = [];
            var J, I;
            for (J = 0; J < q; J++) {
                L[J] = L[J].replace(/\+/g, " ");
                I = L[J].split("=");
                k.push([decodeURIComponent(I[0]), decodeURIComponent(I[1])])
            }
            return k
        }

        function t(q) {
            var k = new FormData();
            for (var I = 0; I < q.length; I++) {
                k.append(q[I].name, q[I].value)
            }
            if (j.extraData) {
                var L = g(j.extraData);
                for (I = 0; I < L.length; I++) {
                    if (L[I]) {
                        k.append(L[I][0], L[I][1])
                    }
                }
            }
            j.data = null;
            var K = f.extend(true, {}, f.ajaxSettings, j, {
                contentType: false,
                processData: false,
                cache: false,
                type: i || "POST"
            });
            if (j.uploadProgress) {
                K.xhr = function () {
                    var M = jQuery.ajaxSettings.xhr();
                    if (M.upload) {
                        M.upload.addEventListener("progress", function (Q) {
                            var P = 0;
                            var N = Q.loaded || Q.position;
                            var O = Q.total;
                            if (Q.lengthComputable) {
                                P = Math.ceil(N / O * 100)
                            }
                            j.uploadProgress(Q, N, O, P)
                        }, false)
                    }
                    return M
                }
            }
            K.data = null;
            var J = K.beforeSend;
            K.beforeSend = function (N, M) {
                M.data = k;
                if (J) {
                    J.call(this, N, M)
                }
            };
            return f.ajax(K)
        }

        function G(af) {
            var L = o[0],
                K, ab, V, ad, Y, N, Q, O, P, Z, ac, T;
            var ai = f.Deferred();
            if (af) {
                for (ab = 0; ab < s.length; ab++) {
                    K = f(s[ab]);
                    if (e) {
                        K.prop("disabled", false)
                    } else {
                        K.removeAttr("disabled")
                    }
                }
            }
            V = f.extend(true, {}, f.ajaxSettings, j);
            V.context = V.context || V;
            Y = "jqFormIO" + (new Date().getTime());
            if (V.iframeTarget) {
                N = f(V.iframeTarget);
                Z = N.attr2("name");
                if (!Z) {
                    N.attr2("name", Y)
                } else {
                    Y = Z
                }
            } else {
                N = f('<iframe name="' + Y + '" src="' + V.iframeSrc + '" />');
                N.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                })
            }
            Q = N[0];
            O = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: "n/a",
                getAllResponseHeaders: function () {}, getResponseHeader: function () {}, setRequestHeader: function () {}, abort: function (aj) {
                    var ak = (aj === "timeout" ? "timeout" : "aborted");
                    d("aborting upload... " + ak);
                    this.aborted = 1;
                    try {
                        if (Q.contentWindow.document.execCommand) {
                            Q.contentWindow.document.execCommand("Stop")
                        }
                    } catch (al) {}
                    N.attr("src", V.iframeSrc);
                    O.error = ak;
                    if (V.error) {
                        V.error.call(V.context, O, ak, aj)
                    }
                    if (ad) {
                        f.event.trigger("ajaxError", [O, V, ak])
                    }
                    if (V.complete) {
                        V.complete.call(V.context, O, ak)
                    }
                }
            };
            ad = V.global;
            if (ad && 0 === f.active++) {
                f.event.trigger("ajaxStart")
            }
            if (ad) {
                f.event.trigger("ajaxSend", [O, V])
            }
            if (V.beforeSend && V.beforeSend.call(V.context, O, V) === false) {
                if (V.global) {
                    f.active--
                }
                ai.reject();
                return ai
            }
            if (O.aborted) {
                ai.reject();
                return ai
            }
            P = L.clk;
            if (P) {
                Z = P.name;
                if (Z && !P.disabled) {
                    V.extraData = V.extraData || {};
                    V.extraData[Z] = P.value;
                    if (P.type == "image") {
                        V.extraData[Z + ".x"] = L.clk_x;
                        V.extraData[Z + ".y"] = L.clk_y
                    }
                }
            }
            var U = 1;
            var R = 2;

            function S(al) {
                var ak = null;
                try {
                    if (al.contentWindow) {
                        ak = al.contentWindow.document
                    }
                } catch (aj) {
                    d("cannot get iframe.contentWindow document: " + aj)
                }
                if (ak) {
                    return ak
                }
                try {
                    ak = al.contentDocument ? al.contentDocument : al.document
                } catch (aj) {
                    d("cannot get iframe.contentDocument: " + aj);
                    ak = al.document
                }
                return ak
            }
            var J = f("meta[name=csrf-token]").attr("content");
            var I = f("meta[name=csrf-param]").attr("content");
            if (I && J) {
                V.extraData = V.extraData || {};
                V.extraData[I] = J
            }

            function aa() {
                var al = o.attr2("target"),
                    aj = o.attr2("action");
                L.setAttribute("target", Y);
                if (!i) {
                    L.setAttribute("method", "POST")
                }
                if (aj != V.url) {
                    L.setAttribute("action", V.url)
                }
                if (!V.skipEncodingOverride && (!i || /post/i.test(i))) {
                    o.attr({
                        encoding: "multipart/form-data",
                        enctype: "multipart/form-data"
                    })
                }
                if (V.timeout) {
                    T = setTimeout(function () {
                        ac = true;
                        X(U)
                    }, V.timeout)
                }

                function am() {
                    try {
                        var aq = S(Q).readyState;
                        d("state = " + aq);
                        if (aq && aq.toLowerCase() == "uninitialized") {
                            setTimeout(am, 50)
                        }
                    } catch (ar) {
                        d("Server abort: ", ar, " (", ar.name, ")");
                        X(R);
                        if (T) {
                            clearTimeout(T)
                        }
                        T = undefined
                    }
                }
                var ak = [];
                try {
                    if (V.extraData) {
                        for (var ap in V.extraData) {
                            if (V.extraData.hasOwnProperty(ap)) {
                                if (f.isPlainObject(V.extraData[ap]) && V.extraData[ap].hasOwnProperty("name") && V.extraData[ap].hasOwnProperty("value")) {
                                    ak.push(f('<input type="hidden" name="' + V.extraData[ap].name + '">').val(V.extraData[ap].value).appendTo(L)[0])
                                } else {
                                    ak.push(f('<input type="hidden" name="' + ap + '">').val(V.extraData[ap]).appendTo(L)[0])
                                }
                            }
                        }
                    }
                    if (!V.iframeTarget) {
                        N.appendTo("body");
                        if (Q.attachEvent) {
                            Q.attachEvent("onload", X)
                        } else {
                            Q.addEventListener("load", X, false)
                        }
                    }
                    setTimeout(am, 15);
                    try {
                        L.submit()
                    } catch (an) {
                        var ao = document.createElement("form").submit;
                        ao.apply(L)
                    }
                } finally {
                    L.setAttribute("action", aj);
                    if (al) {
                        L.setAttribute("target", al)
                    } else {
                        o.removeAttr("target")
                    }
                    f(ak).remove()
                }
            }
            if (V.forceSync) {
                aa()
            } else {
                setTimeout(aa, 10)
            }
            var ag, ah, ae = 50,
                M;

            function X(ap) {
                if (O.aborted || M) {
                    return
                }
                ah = S(Q);
                if (!ah) {
                    d("cannot access response document");
                    ap = R
                }
                if (ap === U && O) {
                    O.abort("timeout");
                    ai.reject(O, "timeout");
                    return
                } else {
                    if (ap == R && O) {
                        O.abort("server abort");
                        ai.reject(O, "error", "server abort");
                        return
                    }
                } if (!ah || ah.location.href == V.iframeSrc) {
                    if (!ac) {
                        return
                    }
                }
                if (Q.detachEvent) {
                    Q.detachEvent("onload", X)
                } else {
                    Q.removeEventListener("load", X, false)
                }
                var an = "success",
                    ar;
                try {
                    if (ac) {
                        throw "timeout"
                    }
                    var am = V.dataType == "xml" || ah.XMLDocument || f.isXMLDoc(ah);
                    d("isXml=" + am);
                    if (!am && window.opera && (ah.body === null || !ah.body.innerHTML)) {
                        if (--ae) {
                            d("requeing onLoad callback, DOM not available");
                            setTimeout(X, 250);
                            return
                        }
                    }
                    var at = ah.body ? ah.body : ah.documentElement;
                    O.responseText = at ? at.innerHTML : null;
                    O.responseXML = ah.XMLDocument ? ah.XMLDocument : ah;
                    if (am) {
                        V.dataType = "xml"
                    }
                    O.getResponseHeader = function (aw) {
                        var av = {
                            "content-type": V.dataType
                        };
                        return av[aw]
                    };
                    if (at) {
                        O.status = Number(at.getAttribute("status")) || O.status;
                        O.statusText = at.getAttribute("statusText") || O.statusText
                    }
                    var aj = (V.dataType || "").toLowerCase();
                    var aq = /(json|script|text)/.test(aj);
                    if (aq || V.textarea) {
                        var ao = ah.getElementsByTagName("textarea")[0];
                        if (ao) {
                            O.responseText = ao.value;
                            O.status = Number(ao.getAttribute("status")) || O.status;
                            O.statusText = ao.getAttribute("statusText") || O.statusText
                        } else {
                            if (aq) {
                                var ak = ah.getElementsByTagName("pre")[0];
                                var au = ah.getElementsByTagName("body")[0];
                                if (ak) {
                                    O.responseText = ak.textContent ? ak.textContent : ak.innerText
                                } else {
                                    if (au) {
                                        O.responseText = au.textContent ? au.textContent : au.innerText
                                    }
                                }
                            }
                        }
                    } else {
                        if (aj == "xml" && !O.responseXML && O.responseText) {
                            O.responseXML = W(O.responseText)
                        }
                    }
                    try {
                        ag = k(O, aj, V)
                    } catch (al) {
                        an = "parsererror";
                        O.error = ar = (al || an)
                    }
                } catch (al) {
                    d("error caught: ", al);
                    an = "error";
                    O.error = ar = (al || an)
                }
                if (O.aborted) {
                    d("upload aborted");
                    an = null
                }
                if (O.status) {
                    an = (O.status >= 200 && O.status < 300 || O.status === 304) ? "success" : "error"
                }
                if (an === "success") {
                    if (V.success) {
                        V.success.call(V.context, ag, "success", O)
                    }
                    ai.resolve(O.responseText, "success", O);
                    if (ad) {
                        f.event.trigger("ajaxSuccess", [O, V])
                    }
                } else {
                    if (an) {
                        if (ar === undefined) {
                            ar = O.statusText
                        }
                        if (V.error) {
                            V.error.call(V.context, O, an, ar)
                        }
                        ai.reject(O, "error", ar);
                        if (ad) {
                            f.event.trigger("ajaxError", [O, V, ar])
                        }
                    }
                } if (ad) {
                    f.event.trigger("ajaxComplete", [O, V])
                }
                if (ad && !--f.active) {
                    f.event.trigger("ajaxStop")
                }
                if (V.complete) {
                    V.complete.call(V.context, O, an)
                }
                M = true;
                if (V.timeout) {
                    clearTimeout(T)
                }
                setTimeout(function () {
                    if (!V.iframeTarget) {
                        N.remove()
                    }
                    O.responseXML = null
                }, 100)
            }
            var W = f.parseXML || function (aj, ak) {
                if (window.ActiveXObject) {
                    ak = new ActiveXObject("Microsoft.XMLDOM");
                    ak.async = "false";
                    ak.loadXML(aj)
                } else {
                    ak = (new DOMParser()).parseFromString(aj, "text/xml")
                }
                return (ak && ak.documentElement && ak.documentElement.nodeName != "parsererror") ? ak : null
            };
            var q = f.parseJSON || function (aj) {
                return window["eval"]("(" + aj + ")")
            };
            var k = function (ao, am, al) {
                var ak = ao.getResponseHeader("content-type") || "",
                    aj = am === "xml" || !am && ak.indexOf("xml") >= 0,
                    an = aj ? ao.responseXML : ao.responseText;
                if (aj && an.documentElement.nodeName === "parsererror") {
                    if (f.error) {
                        f.error("parsererror")
                    }
                }
                if (al && al.dataFilter) {
                    an = al.dataFilter(an, am)
                }
                if (typeof an === "string") {
                    if (am === "json" || !am && ak.indexOf("json") >= 0) {
                        an = q(an)
                    } else {
                        if (am === "script" || !am && ak.indexOf("javascript") >= 0) {
                            f.globalEval(an)
                        }
                    }
                }
                return an
            };
            return ai
        }
    };
    f.fn.ajaxForm = function (g) {
        g = g || {};
        g.delegation = g.delegation && f.isFunction(f.fn.on);
        if (!g.delegation && this.length === 0) {
            var h = {
                s: this.selector,
                c: this.context
            };
            if (!f.isReady && h.s) {
                d("DOM not ready, queuing ajaxForm");
                f(function () {
                    f(h.s, h.c).ajaxForm(g)
                });
                return this
            }
            d("terminating; zero elements found by selector" + (f.isReady ? "" : " (DOM not ready)"));
            return this
        }
        if (g.delegation) {
            f(document).off("submit.form-plugin", this.selector, b).off("click.form-plugin", this.selector, a).on("submit.form-plugin", this.selector, g, b).on("click.form-plugin", this.selector, g, a);
            return this
        }
        return this.ajaxFormUnbind().bind("submit.form-plugin", g, b).bind("click.form-plugin", g, a)
    };

    function b(h) {
        var g = h.data;
        if (!h.isDefaultPrevented()) {
            h.preventDefault();
            f(this).ajaxSubmit(g)
        }
    }

    function a(k) {
        var j = k.target;
        var h = f(j);
        if (!(h.is("[type=submit],[type=image]"))) {
            var g = h.closest("[type=submit]");
            if (g.length === 0) {
                return
            }
            j = g[0]
        }
        var i = this;
        i.clk = j;
        if (j.type == "image") {
            if (k.offsetX !== undefined) {
                i.clk_x = k.offsetX;
                i.clk_y = k.offsetY
            } else {
                if (typeof f.fn.offset == "function") {
                    var l = h.offset();
                    i.clk_x = k.pageX - l.left;
                    i.clk_y = k.pageY - l.top
                } else {
                    i.clk_x = k.pageX - j.offsetLeft;
                    i.clk_y = k.pageY - j.offsetTop
                }
            }
        }
        setTimeout(function () {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    }
    f.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin")
    };
    f.fn.formToArray = function (x, g) {
        var w = [];
        if (this.length === 0) {
            return w
        }
        var l = this[0];
        var p = x ? l.getElementsByTagName("*") : l.elements;
        if (!p) {
            return w
        }
        var r, q, o, y, m, t, k;
        for (r = 0, t = p.length; r < t; r++) {
            m = p[r];
            o = m.name;
            if (!o || m.disabled) {
                continue
            }
            if (x && l.clk && m.type == "image") {
                if (l.clk == m) {
                    w.push({
                        name: o,
                        value: f(m).val(),
                        type: m.type
                    });
                    w.push({
                        name: o + ".x",
                        value: l.clk_x
                    }, {
                        name: o + ".y",
                        value: l.clk_y
                    })
                }
                continue
            }
            y = f.fieldValue(m, true);
            if (y && y.constructor == Array) {
                if (g) {
                    g.push(m)
                }
                for (q = 0, k = y.length; q < k; q++) {
                    w.push({
                        name: o,
                        value: y[q]
                    })
                }
            } else {
                if (c.fileapi && m.type == "file") {
                    if (g) {
                        g.push(m)
                    }
                    var h = m.files;
                    if (h.length) {
                        for (q = 0; q < h.length; q++) {
                            w.push({
                                name: o,
                                value: h[q],
                                type: m.type
                            })
                        }
                    } else {
                        w.push({
                            name: o,
                            value: "",
                            type: m.type
                        })
                    }
                } else {
                    if (y !== null && typeof y != "undefined") {
                        if (g) {
                            g.push(m)
                        }
                        w.push({
                            name: o,
                            value: y,
                            type: m.type,
                            required: m.required
                        })
                    }
                }
            }
        }
        if (!x && l.clk) {
            var s = f(l.clk),
                u = s[0];
            o = u.name;
            if (o && !u.disabled && u.type == "image") {
                w.push({
                    name: o,
                    value: s.val()
                });
                w.push({
                    name: o + ".x",
                    value: l.clk_x
                }, {
                    name: o + ".y",
                    value: l.clk_y
                })
            }
        }
        return w
    };
    f.fn.formSerialize = function (g) {
        return f.param(this.formToArray(g))
    };
    f.fn.fieldSerialize = function (h) {
        var g = [];
        this.each(function () {
            var m = this.name;
            if (!m) {
                return
            }
            var k = f.fieldValue(this, h);
            if (k && k.constructor == Array) {
                for (var l = 0, j = k.length; l < j; l++) {
                    g.push({
                        name: m,
                        value: k[l]
                    })
                }
            } else {
                if (k !== null && typeof k != "undefined") {
                    g.push({
                        name: this.name,
                        value: k
                    })
                }
            }
        });
        return f.param(g)
    };
    f.fn.fieldValue = function (m) {
        for (var l = [], j = 0, g = this.length; j < g; j++) {
            var k = this[j];
            var h = f.fieldValue(k, m);
            if (h === null || typeof h == "undefined" || (h.constructor == Array && !h.length)) {
                continue
            }
            if (h.constructor == Array) {
                f.merge(l, h)
            } else {
                l.push(h)
            }
        }
        return l
    };
    f.fieldValue = function (g, o) {
        var j = g.name,
            u = g.type,
            w = g.tagName.toLowerCase();
        if (o === undefined) {
            o = true
        }
        if (o && (!j || g.disabled || u == "reset" || u == "button" || (u == "checkbox" || u == "radio") && !g.checked || (u == "submit" || u == "image") && g.form && g.form.clk != g || w == "select" && g.selectedIndex == -1)) {
            return null
        }
        if (w == "select") {
            var p = g.selectedIndex;
            if (p < 0) {
                return null
            }
            var r = [],
                h = g.options;
            var l = (u == "select-one");
            var q = (l ? p + 1 : h.length);
            for (var k = (l ? p : 0); k < q; k++) {
                var m = h[k];
                if (m.selected) {
                    var s = m.value;
                    if (!s) {
                        s = (m.attributes && m.attributes.value && !(m.attributes.value.specified)) ? m.text : m.value
                    }
                    if (l) {
                        return s
                    }
                    r.push(s)
                }
            }
            return r
        }
        return f(g).val()
    };
    f.fn.clearForm = function (g) {
        return this.each(function () {
            f("input,select,textarea", this).clearFields(g)
        })
    };
    f.fn.clearFields = f.fn.clearInputs = function (g) {
        var h = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
            var j = this.type,
                i = this.tagName.toLowerCase();
            if (h.test(j) || i == "textarea") {
                this.value = ""
            } else {
                if (j == "checkbox" || j == "radio") {
                    this.checked = false
                } else {
                    if (i == "select") {
                        this.selectedIndex = -1
                    } else {
                        if (j == "file") {
                            if (/MSIE/.test(navigator.userAgent)) {
                                f(this).replaceWith(f(this).clone(true))
                            } else {
                                f(this).val("")
                            }
                        } else {
                            if (g) {
                                if ((g === true && /hidden/.test(j)) || (typeof g == "string" && f(this).is(g))) {
                                    this.value = ""
                                }
                            }
                        }
                    }
                }
            }
        })
    };
    f.fn.resetForm = function () {
        return this.each(function () {
            if (typeof this.reset == "function" || (typeof this.reset == "object" && !this.reset.nodeType)) {
                this.reset()
            }
        })
    };
    f.fn.enable = function (g) {
        if (g === undefined) {
            g = true
        }
        return this.each(function () {
            this.disabled = !g
        })
    };
    f.fn.selected = function (g) {
        if (g === undefined) {
            g = true
        }
        return this.each(function () {
            var h = this.type;
            if (h == "checkbox" || h == "radio") {
                this.checked = g
            } else {
                if (this.tagName.toLowerCase() == "option") {
                    var i = f(this).parent("select");
                    if (g && i[0] && i[0].type == "select-one") {
                        i.find("option").selected(false)
                    }
                    this.selected = g
                }
            }
        })
    };
    f.fn.ajaxSubmit.debug = false;

    function d() {
        if (!f.fn.ajaxSubmit.debug) {
            return
        }
        var g = "[jquery.form] " + Array.prototype.join.call(arguments, "");
        if (window.console && window.console.log) {
            window.console.log(g)
        } else {
            if (window.opera && window.opera.postError) {
                window.opera.postError(g)
            }
        }
    }
})(jQuery);
/*!
 * jQuery Validation Plugin 1.11.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright 2013 Jörn Zaefferer
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
(function (a) {
    a.extend(a.fn, {
        validate: function (b) {
            if (!this.length) {
                if (b && b.debug && window.console) {
                    console.warn("Nothing selected, can't validate, returning nothing.")
                }
                return
            }
            var c = a.data(this[0], "validator");
            if (c) {
                return c
            }
            this["novalidate"] = "novalidate";
            c = new a.validator(b, this[0]);
            a.data(this[0], "validator", c);
            if (c.settings.onsubmit) {
                this.validateDelegate(":submit", "click", function (d) {
                    if (c.settings.submitHandler) {
                        c.submitButton = d.target
                    }
                    if (a(d.target).hasClass("cancel")) {
                        c.cancelSubmit = true
                    }
                    if (a(d.target).attr("formnovalidate") !== undefined) {
                        c.cancelSubmit = true
                    }
                });
                this.submit(function (d) {
                    if (c.settings.debug) {
                        d.preventDefault()
                    }

                    function e() {
                        var f;
                        if (c.settings.submitHandler) {
                            if (c.submitButton) {
                                f = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)
                            }
                            c.settings.submitHandler.call(c, c.currentForm, d);
                            if (c.submitButton) {
                                f.remove()
                            }
                            return false
                        }
                        return true
                    }
                    if (c.cancelSubmit) {
                        c.cancelSubmit = false;
                        return e()
                    }
                    if (c.form()) {
                        if (c.pendingRequest) {
                            c.formSubmitted = true;
                            return false
                        }
                        return e()
                    } else {
                        c.focusInvalid();
                        return false
                    }
                })
            }
            return c
        }, valid: function () {
            if (a(this[0]).is("form")) {
                return this.validate().form()
            } else {
                var c = true;
                var b = a(this[0].form).validate();
                this.each(function () {
                    c = c && b.element(this)
                });
                return c
            }
        }, removeAttrs: function (d) {
            var b = {},
                c = this;
            a.each(d.split(/\s/), function (e, f) {
                b[f] = c.attr(f);
                c.removeAttr(f)
            });
            return b
        }, rules: function (e, b) {
            var g = this[0];
            if (e) {
                var d = a.data(g.form, "validator").settings;
                var i = d.rules;
                var j = a.validator.staticRules(g);
                switch (e) {
                case "add":
                    a.extend(j, a.validator.normalizeRule(b));
                    delete j.messages;
                    i[g.name] = j;
                    if (b.messages) {
                        d.messages[g.name] = a.extend(d.messages[g.name], b.messages)
                    }
                    break;
                case "remove":
                    if (!b) {
                        delete i[g.name];
                        return j
                    }
                    var h = {};
                    a.each(b.split(/\s/), function (k, l) {
                        h[l] = j[l];
                        delete j[l]
                    });
                    return h
                }
            }
            var f = a.validator.normalizeRules(a.extend({}, a.validator.classRules(g), a.validator.attributeRules(g), a.validator.dataRules(g), a.validator.staticRules(g)), g);
            if (f.required) {
                var c = f.required;
                delete f.required;
                f = a.extend({
                    required: c
                }, f)
            }
            return f
        }
    });
    a.extend(a.expr[":"], {
        blank: function (b) {
            return !a.trim("" + a(b).val())
        }, filled: function (b) {
            return !!a.trim("" + a(b).val())
        }, unchecked: function (b) {
            return !a(b).prop("checked")
        }
    });
    a.validator = function (b, c) {
        this.settings = a.extend(true, {}, a.validator.defaults, b);
        this.currentForm = c;
        this.init()
    };
    a.validator.format = function (b, c) {
        if (arguments.length === 1) {
            return function () {
                var d = a.makeArray(arguments);
                d.unshift(b);
                return a.validator.format.apply(this, d)
            }
        }
        if (arguments.length > 2 && c.constructor !== Array) {
            c = a.makeArray(arguments).slice(1)
        }
        if (c.constructor !== Array) {
            c = [c]
        }
        a.each(c, function (d, e) {
            b = b.replace(new RegExp("\\{" + d + "\\}", "g"), function () {
                return e
            })
        });
        return b
    };
    a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: true,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: true,
            ignore: ":hidden",
            ignoreTitle: false,
            onfocusin: function (b, c) {
                this.lastActive = b;
                if (this.settings.focusCleanup && !this.blockFocusCleanup) {
                    if (this.settings.unhighlight) {
                        this.settings.unhighlight.call(this, b, this.settings.errorClass, this.settings.validClass)
                    }
                    this.addWrapper(this.errorsFor(b)).hide()
                }
            }, onfocusout: function (b, c) {
                if (!this.checkable(b) && (b.name in this.submitted || !this.optional(b))) {
                    this.element(b)
                }
            }, onkeyup: function (b, c) {
                if (c.which === 9 && this.elementValue(b) === "") {
                    return
                } else {
                    if (b.name in this.submitted || b === this.lastElement) {
                        this.element(b)
                    }
                }
            }, onclick: function (b, c) {
                if (b.name in this.submitted) {
                    this.element(b)
                } else {
                    if (b.parentNode.name in this.submitted) {
                        this.element(b.parentNode)
                    }
                }
            }, highlight: function (d, b, c) {
                if (d.type === "radio") {
                    this.findByName(d.name).addClass(b).removeClass(c)
                } else {
                    a(d).addClass(b).removeClass(c)
                }
            }, unhighlight: function (d, b, c) {
                if (d.type === "radio") {
                    this.findByName(d.name).removeClass(b).addClass(c)
                } else {
                    a(d).removeClass(b).addClass(c)
                }
            }
        },
        setDefaults: function (b) {
            a.extend(a.validator.defaults, b)
        }, messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}.")
        }, autoCreateRanges: false,
        prototype: {
            init: function () {
                this.labelContainer = a(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm);
                this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var b = (this.groups = {});
                a.each(this.settings.groups, function (e, f) {
                    if (typeof f === "string") {
                        f = f.split(/\s/)
                    }
                    a.each(f, function (h, g) {
                        b[g] = e
                    })
                });
                var d = this.settings.rules;
                a.each(d, function (e, f) {
                    d[e] = a.validator.normalizeRule(f)
                });

                function c(g) {
                    var f = a.data(this[0].form, "validator"),
                        e = "on" + g.type.replace(/^validate/, "");
                    if (f.settings[e]) {
                        f.settings[e].call(f, this[0], g)
                    }
                }
                a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", c).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", c);
                if (this.settings.invalidHandler) {
                    a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
                }
            }, form: function () {
                this.checkForm();
                a.extend(this.submitted, this.errorMap);
                this.invalid = a.extend({}, this.errorMap);
                if (!this.valid()) {
                    a(this.currentForm).triggerHandler("invalid-form", [this])
                }
                this.showErrors();
                return this.valid()
            }, checkForm: function () {
                this.prepareForm();
                for (var b = 0, c = (this.currentElements = this.elements()); c[b]; b++) {
                    this.check(c[b])
                }
                return this.valid()
            }, element: function (c) {
                c = this.validationTargetFor(this.clean(c));
                this.lastElement = c;
                this.prepareElement(c);
                this.currentElements = a(c);
                var b = this.check(c) !== false;
                if (b) {
                    delete this.invalid[c.name]
                } else {
                    this.invalid[c.name] = true
                } if (!this.numberOfInvalids()) {
                    this.toHide = this.toHide.add(this.containers)
                }
                this.showErrors();
                return b
            }, showErrors: function (c) {
                if (c) {
                    a.extend(this.errorMap, c);
                    this.errorList = [];
                    for (var b in c) {
                        this.errorList.push({
                            message: c[b],
                            element: this.findByName(b)[0]
                        })
                    }
                    this.successList = a.grep(this.successList, function (d) {
                        return !(d.name in c)
                    })
                }
                if (this.settings.showErrors) {
                    this.settings.showErrors.call(this, this.errorMap, this.errorList)
                } else {
                    this.defaultShowErrors()
                }
            }, resetForm: function () {
                if (a.fn.resetForm) {
                    a(this.currentForm).resetForm()
                }
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            }, numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            }, objectLength: function (d) {
                var c = 0;
                for (var b in d) {
                    c++
                }
                return c
            }, hideErrors: function () {
                this.addWrapper(this.toHide).hide()
            }, valid: function () {
                return this.size() === 0
            }, size: function () {
                return this.errorList.length
            }, focusInvalid: function () {
                if (this.settings.focusInvalid) {
                    try {
                        a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (b) {}
                }
            }, findLastActive: function () {
                var b = this.lastActive;
                return b && a.grep(this.errorList, function (c) {
                    return c.element.name === b.name
                }).length === 1 && b
            }, elements: function () {
                var c = this,
                    b = {};
                return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
                    if (typeof this.name == undefined || typeof this.name == "undefined" || this.name == "") {
                        return false
                    }
                    if (!this.name && c.settings.debug && window.console) {
                        console.error("%o has no name assigned", this)
                    }
                    if (this.name in b || !c.objectLength(a(this).rules())) {
                        return false
                    }
                    b[this.name] = true;
                    return true
                })
            }, clean: function (b) {
                return a(b)[0]
            }, errors: function () {
                var b = this.settings.errorClass.replace(" ", ".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            }, reset: function () {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = a([]);
                this.toHide = a([]);
                this.currentElements = a([])
            }, prepareForm: function () {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            }, prepareElement: function (b) {
                this.reset();
                this.toHide = this.errorsFor(b)
            }, elementValue: function (b) {
                var c = a(b).attr("type"),
                    d = a(b).val();
                if (c === "radio" || c === "checkbox") {
                    return a("input[name='" + a(b).attr("name") + "']:checked").val()
                }
                if (typeof d === "string") {
                    return d.replace(/\r/g, "")
                }
                return d
            }, check: function (c) {
                c = this.validationTargetFor(this.clean(c));
                var i = a(c).rules();
                var d = false;
                var h = this.elementValue(c);
                var b;
                for (var j in i) {
                    var g = {
                        method: j,
                        parameters: i[j]
                    };
                    try {
                        b = a.validator.methods[j].call(this, h, c, g.parameters);
                        if (b === "dependency-mismatch") {
                            d = true;
                            continue
                        }
                        d = false;
                        if (b === "pending") {
                            this.toHide = this.toHide.not(this.errorsFor(c));
                            return
                        }
                        if (!b) {
                            this.formatAndAdd(c, g);
                            return false
                        }
                    } catch (f) {
                        if (this.settings.debug && window.console) {
                            console.log("Exception occurred when checking element " + c.id + ", check the '" + g.method + "' method.", f)
                        }
                        throw f
                    }
                }
                if (d) {
                    return
                }
                if (this.objectLength(i)) {
                    this.successList.push(c)
                }
                return true
            }, customDataMessage: function (b, c) {
                return a(b).data("msg-" + c.toLowerCase()) || (b.attributes && a(b).attr("data-msg-" + c.toLowerCase()))
            }, customMessage: function (c, d) {
                var b = this.settings.messages[c];
                return b && (b.constructor === String ? b : b[d])
            }, findDefined: function () {
                for (var b = 0; b < arguments.length; b++) {
                    if (arguments[b] !== undefined) {
                        return arguments[b]
                    }
                }
                return undefined
            }, defaultMessage: function (b, c) {
                return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || undefined, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
            }, formatAndAdd: function (c, e) {
                var d = this.defaultMessage(c, e.method),
                    b = /\$?\{(\d+)\}/g;
                if (typeof d === "function") {
                    d = d.call(this, e.parameters, c)
                } else {
                    if (b.test(d)) {
                        d = a.validator.format(d.replace(b, "{$1}"), e.parameters)
                    }
                }
                this.errorList.push({
                    message: d,
                    element: c
                });
                this.errorMap[c.name] = d;
                this.submitted[c.name] = d
            }, addWrapper: function (b) {
                if (this.settings.wrapper) {
                    b = b.add(b.parent(this.settings.wrapper))
                }
                return b
            }, defaultShowErrors: function () {
                var c, d;
                for (c = 0; this.errorList[c]; c++) {
                    var b = this.errorList[c];
                    if (this.settings.highlight) {
                        this.settings.highlight.call(this, b.element, this.settings.errorClass, this.settings.validClass)
                    }
                    this.showLabel(b.element, b.message)
                }
                if (this.errorList.length) {
                    this.toShow = this.toShow.add(this.containers)
                }
                if (this.settings.success) {
                    for (c = 0; this.successList[c]; c++) {
                        this.showLabel(this.successList[c])
                    }
                }
                if (this.settings.unhighlight) {
                    for (c = 0, d = this.validElements(); d[c]; c++) {
                        this.settings.unhighlight.call(this, d[c], this.settings.errorClass, this.settings.validClass)
                    }
                }
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            }, validElements: function () {
                return this.currentElements.not(this.invalidElements())
            }, invalidElements: function () {
                return a(this.errorList).map(function () {
                    return this.element
                })
            }, showLabel: function (c, d) {
                var b = this.errorsFor(c);
                if (b.length) {
                    b.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
                    b.html(d)
                } else {
                    b = a("<" + this.settings.errorElement + ">").attr("for", this.idOrName(c)).addClass(this.settings.errorClass).html(d || "");
                    if (this.settings.wrapper) {
                        b = b.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()
                    }
                    if (!this.labelContainer.append(b).length) {
                        if (this.settings.errorPlacement) {
                            this.settings.errorPlacement(b, a(c))
                        } else {
                            b.insertAfter(c)
                        }
                    }
                } if (!d && this.settings.success) {
                    b.text("");
                    if (typeof this.settings.success === "string") {
                        b.addClass(this.settings.success)
                    } else {
                        this.settings.success(b, c)
                    }
                }
                this.toShow = this.toShow.add(b)
            }, errorsFor: function (c) {
                var b = this.idOrName(c);
                return this.errors().filter(function () {
                    return a(this).attr("for") === b
                })
            }, idOrName: function (b) {
                return this.groups[b.name] || (this.checkable(b) ? b.name : b.id || b.name)
            }, validationTargetFor: function (b) {
                if (this.checkable(b)) {
                    b = this.findByName(b.name).not(this.settings.ignore)[0]
                }
                return b
            }, checkable: function (b) {
                return (/radio|checkbox/i).test(b.type)
            }, findByName: function (b) {
                return a(this.currentForm).find("[name='" + b + "']")
            }, getLength: function (c, b) {
                switch (b.nodeName.toLowerCase()) {
                case "select":
                    return a("option:selected", b).length;
                case "input":
                    if (this.checkable(b)) {
                        return this.findByName(b.name).filter(":checked").length
                    }
                }
                return c.length
            }, depend: function (c, b) {
                return this.dependTypes[typeof c] ? this.dependTypes[typeof c](c, b) : true
            }, dependTypes: {
                "boolean": function (c, b) {
                    return c
                }, string: function (c, b) {
                    return !!a(c, b.form).length
                }, "function": function (c, b) {
                    return c(b)
                }
            }, optional: function (b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            }, startRequest: function (b) {
                if (!this.pending[b.name]) {
                    this.pendingRequest++;
                    this.pending[b.name] = true
                }
            }, stopRequest: function (b, c) {
                this.pendingRequest--;
                if (this.pendingRequest < 0) {
                    this.pendingRequest = 0
                }
                delete this.pending[b.name];
                if (c && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
                    a(this.currentForm).submit();
                    this.formSubmitted = false
                } else {
                    if (!c && this.pendingRequest === 0 && this.formSubmitted) {
                        a(this.currentForm).triggerHandler("invalid-form", [this]);
                        this.formSubmitted = false
                    }
                }
            }, previousValue: function (b) {
                return a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: true,
                    message: this.defaultMessage(b, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: true
            },
            email: {
                email: true
            },
            url: {
                url: true
            },
            date: {
                date: true
            },
            dateISO: {
                dateISO: true
            },
            number: {
                number: true
            },
            digits: {
                digits: true
            },
            creditcard: {
                creditcard: true
            }
        },
        addClassRules: function (b, c) {
            if (b.constructor === String) {
                this.classRuleSettings[b] = c
            } else {
                a.extend(this.classRuleSettings, b)
            }
        }, classRules: function (c) {
            var d = {};
            var b = a(c).attr("class");
            if (b) {
                a.each(b.split(" "), function () {
                    if (this in a.validator.classRuleSettings) {
                        a.extend(d, a.validator.classRuleSettings[this])
                    }
                })
            }
            return d
        }, attributeRules: function (c) {
            var f = {};
            var b = a(c);
            var d = b[0].getAttribute("type");
            for (var g in a.validator.methods) {
                var e;
                if (g === "required") {
                    e = b.get(0).getAttribute(g);
                    if (e === "") {
                        e = true
                    }
                    e = !!e
                } else {
                    e = b.attr(g)
                } if (/min|max/.test(g) && (d === null || /number|range|text/.test(d))) {
                    e = Number(e)
                }
                if (e) {
                    f[g] = e
                } else {
                    if (d === g && d !== "range") {
                        f[g] = true
                    }
                }
            }
            if (f.maxlength && /-1|2147483647|524288/.test(f.maxlength)) {
                delete f.maxlength
            }
            return f
        }, dataRules: function (c) {
            var f, d, e = {},
                b = a(c);
            for (f in a.validator.methods) {
                d = b.data("rule-" + f.toLowerCase());
                if (d !== undefined) {
                    e[f] = d
                }
            }
            return e
        }, staticRules: function (c) {
            var d = {};
            var b = a.data(c.form, "validator");
            if (b.settings.rules) {
                d = a.validator.normalizeRule(b.settings.rules[c.name]) || {}
            }
            return d
        }, normalizeRules: function (c, b) {
            a.each(c, function (f, e) {
                if (e === false) {
                    delete c[f];
                    return
                }
                if (e.param || e.depends) {
                    var d = true;
                    switch (typeof e.depends) {
                    case "string":
                        d = !!a(e.depends, b.form).length;
                        break;
                    case "function":
                        d = e.depends.call(b, b);
                        break
                    }
                    if (d) {
                        c[f] = e.param !== undefined ? e.param : true
                    } else {
                        delete c[f]
                    }
                }
            });
            a.each(c, function (d, e) {
                c[d] = a.isFunction(e) ? e(b) : e
            });
            a.each(["minlength", "maxlength"], function () {
                if (c[this]) {
                    c[this] = Number(c[this])
                }
            });
            a.each(["rangelength", "range"], function () {
                var d;
                if (c[this]) {
                    if (a.isArray(c[this])) {
                        c[this] = [Number(c[this][0]), Number(c[this][1])]
                    } else {
                        if (typeof c[this] === "string") {
                            d = c[this].split(/[\s,]+/);
                            c[this] = [Number(d[0]), Number(d[1])]
                        }
                    }
                }
            });
            if (a.validator.autoCreateRanges) {
                if (c.min && c.max) {
                    c.range = [c.min, c.max];
                    delete c.min;
                    delete c.max
                }
                if (c.minlength && c.maxlength) {
                    c.rangelength = [c.minlength, c.maxlength];
                    delete c.minlength;
                    delete c.maxlength
                }
            }
            return c
        }, normalizeRule: function (c) {
            if (typeof c === "string") {
                var b = {};
                a.each(c.split(/\s/), function () {
                    b[this] = true
                });
                c = b
            }
            return c
        }, addMethod: function (b, d, c) {
            a.validator.methods[b] = d;
            a.validator.messages[b] = c !== undefined ? c : a.validator.messages[b];
            if (d.length < 3) {
                a.validator.addClassRules(b, a.validator.normalizeRule(b))
            }
        }, methods: {
            required: function (c, b, e) {
                if (!this.depend(e, b)) {
                    return "dependency-mismatch"
                }
                if (b.nodeName.toLowerCase() === "select") {
                    var d = a(b).val();
                    return d && d.length > 0
                }
                if (this.checkable(b)) {
                    return this.getLength(c, b) > 0
                }
                return a.trim(c).length > 0
            }, email: function (c, b) {
                return this.optional(b) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(c)
            }, url: function (c, b) {
                return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(c)
            }, date: function (c, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(c).toString())
            }, dateISO: function (c, b) {
                return this.optional(b) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(c)
            }, number: function (c, b) {
                return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(c)
            }, digits: function (c, b) {
                return this.optional(b) || /^\d+$/.test(c)
            }, creditcard: function (f, c) {
                if (this.optional(c)) {
                    return "dependency-mismatch"
                }
                if (/[^0-9 \-]+/.test(f)) {
                    return false
                }
                var g = 0,
                    e = 0,
                    b = false;
                f = f.replace(/\D/g, "");
                for (var h = f.length - 1; h >= 0; h--) {
                    var d = f.charAt(h);
                    e = parseInt(d, 10);
                    if (b) {
                        if ((e *= 2) > 9) {
                            e -= 9
                        }
                    }
                    g += e;
                    b = !b
                }
                return (g % 10) === 0
            }, minlength: function (d, b, e) {
                var c = a.isArray(d) ? d.length : this.getLength(a.trim(d), b);
                return this.optional(b) || c >= e
            }, maxlength: function (d, b, e) {
                var c = a.isArray(d) ? d.length : this.getLength(a.trim(d), b);
                return this.optional(b) || c <= e
            }, rangelength: function (d, b, e) {
                var c = a.isArray(d) ? d.length : this.getLength(a.trim(d), b);
                return this.optional(b) || (c >= e[0] && c <= e[1])
            }, min: function (c, b, d) {
                return this.optional(b) || c >= d
            }, max: function (c, b, d) {
                return this.optional(b) || c <= d
            }, range: function (c, b, d) {
                return this.optional(b) || (c >= d[0] && c <= d[1])
            }, equalTo: function (c, b, e) {
                var d = a(e);
                if (this.settings.onfocusout) {
                    d.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                        a(b).valid()
                    })
                }
                return c === d.val()
            }, accept: function (c, b, d) {
                d = typeof d == "string" ? d.replace(/,/g, "|") : "png|jpe?g|gif";
                return this.optional(b) || c.match(new RegExp(".(" + d + ")$", "i"))
            }, differentFrom: function (c, b, e) {
                var d = a(e).unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                    a(b).valid()
                });
                return c != d.val()
            }, validatPwd: function (c, b) {
                var e = true;
                var d = new RegExp("(?![a-z]+$|[0-9]+$|_+$)^[a-zA-Z0-9_]{6,}$");
                if (d.test(c)) {
                    e = true
                } else {
                    e = false
                }
                return this.optional(b) || e
            }, remote: function (f, c, g) {
                if (this.optional(c)) {
                    return "dependency-mismatch"
                }
                var d = this.previousValue(c);
                if (!this.settings.messages[c.name]) {
                    this.settings.messages[c.name] = {}
                }
                d.originalMessage = this.settings.messages[c.name].remote;
                this.settings.messages[c.name].remote = d.message;
                g = typeof g === "string" && {
                    url: g
                } || g;
                if (d.old === f) {
                    return d.valid
                }
                d.old = f;
                var b = this;
                this.startRequest(c);
                var e = {};
                e[c.name] = f;
                a.ajax(a.extend(true, {
                    url: g,
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: e,
                    success: function (i) {
                        b.settings.messages[c.name].remote = d.originalMessage;
                        var k = i === true || i === "true";
                        if (k) {
                            var h = b.formSubmitted;
                            b.prepareElement(c);
                            b.formSubmitted = h;
                            b.successList.push(c);
                            delete b.invalid[c.name];
                            b.showErrors()
                        } else {
                            var l = {};
                            var j = i || b.defaultMessage(c, "remote");
                            l[c.name] = d.message = a.isFunction(j) ? j(f) : j;
                            b.invalid[c.name] = true;
                            b.showErrors(l)
                        }
                        d.valid = k;
                        b.stopRequest(c, k)
                    }
                }, g));
                return "pending"
            }
        }
    });
    a.format = a.validator.format
}(jQuery));
(function (c) {
    var a = {};
    if (c.ajaxPrefilter) {
        c.ajaxPrefilter(function (f, e, g) {
            var d = f.port;
            if (f.mode === "abort") {
                if (a[d]) {
                    a[d].abort()
                }
                a[d] = g
            }
        })
    } else {
        var b = c.ajax;
        c.ajax = function (e) {
            var f = ("mode" in e ? e : c.ajaxSettings).mode,
                d = ("port" in e ? e : c.ajaxSettings).port;
            if (f === "abort") {
                if (a[d]) {
                    a[d].abort()
                }
                a[d] = b.apply(this, arguments);
                return a[d]
            }
            return b.apply(this, arguments)
        }
    }
}(jQuery));
(function (a) {
    a.extend(a.fn, {
        validateDelegate: function (d, c, b) {
            return this.bind(c, function (e) {
                var f = a(e.target);
                if (f.is(d)) {
                    return b.apply(f, arguments)
                }
            })
        }
    })
}(jQuery));
var messages = {
    "message.confirm": "您确认吗？",
    "message.info": "信息提示",
    "button.ok": "确认",
    "message.error": "提示"
};
(function (a) {
    a.extend(a.validator.messages, {
        required: "必选字段",
        remote: "请修正该字段",
        email: "请输入正确格式的电子邮件",
        url: "请输入合法的网址",
        date: "请输入合法的日期",
        dateISO: "请输入合法的日期 (ISO).",
        number: "请输入合法的数字",
        digits: "只能输入整数",
        creditcard: "请输入合法的信用卡号",
        equalTo: "请再次输入相同的值",
        accept: "请输入拥有合法后缀名的字符串",
        maxlength: a.validator.format("请输入一个长度最多是 {0} 的字符串"),
        minlength: a.validator.format("请输入一个长度最少是 {0} 的字符串"),
        rangelength: a.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),
        range: a.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
        max: a.validator.format("请输入一个最大为 {0} 的值"),
        min: a.validator.format("请输入一个最小为 {0} 的值")
    })
}(jQuery));
/*! JsRender v1.0pre: http://github.com/BorisMoore/jsrender */
(function (a, x, p) {
    if (x && x.views || a.jsviews) {
        return
    }
    var ah = "v1.0pre",
        M, ad, t, y, n = "{",
        m = "{",
        g = "}",
        f = "}",
        Z = "^",
        z = /^(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,
        aa = /(\()(?=\s*\()|(?:([([])\s*)?(?:([#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*!:?\/]|(=))\s*|([#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*\.|\s*\^)|[)\]])([([]?))|(\s+)/g,
        U = /\s*\n/g,
        e = /\\(['"])/g,
        af = /['"\\]/g,
        o = /\x08(~)?([^\x08]+)\x08/g,
        j = /^if\s/,
        r = /<(\w+)[>\s]/,
        O = /<(\w+)[^>\/]*>[^>]*$/,
        P = /[\x00`><"'&]/g,
        K = P,
        ai = 0,
        ag = 0,
        L = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "\x00": "&#0;",
            "'": "&#39;",
            '"': "&#34;",
            "`": "&#96;"
        },
        X = "data-jsv-tmpl",
        s = [].slice,
        Q = {},
        T = {
            template: {
                compile: b
            },
            tag: {
                compile: q
            },
            helper: {},
            converter: {}
        },
        N = {
            jsviews: ah,
            render: Q,
            settings: {
                delimiters: v,
                debugMode: true,
                tryCatch: true
            },
            sub: {
                View: ae,
                Error: E,
                tmplFn: C,
                parse: w,
                extend: u,
                error: G,
                syntaxError: S
            },
            _cnvt: H,
            _tag: c,
            _err: function (aj) {
                return V.debugMode ? ("Error: " + (aj.message || aj)) + ". " : ""
            }
        };

    function E(ak, aj) {
        if (aj && aj.onError) {
            if (aj.onError(ak) === false) {
                return
            }
        }
        this.name = "JsRender Error";
        this.message = ak || "JsRender error"
    }

    function u(al, ak) {
        var aj;
        al = al || {};
        for (aj in ak) {
            al[aj] = ak[aj]
        }
        return al
    }(E.prototype = new Error()).constructor = E;

    function v(aj, al, ak) {
        if (!W.rTag || arguments.length) {
            n = aj ? aj.charAt(0) : n;
            m = aj ? aj.charAt(1) : m;
            g = al ? al.charAt(0) : g;
            f = al ? al.charAt(1) : f;
            Z = ak || Z;
            aj = "\\" + n + "(\\" + Z + ")?\\" + m;
            al = "\\" + g + "\\" + f;
            t = "(?:(?:(\\w+(?=[\\/\\s\\" + g + "]))|(?:(\\w+)?(:)|(>)|!--((?:[^-]|-(?!-))*)--|(\\*)))\\s*((?:[^\\" + g + "]|\\" + g + "(?!\\" + f + "))*?)";
            W.rTag = t + ")";
            t = new RegExp(aj + t + "(\\/)?|(?:\\/(\\w+)))" + al, "g");
            y = new RegExp("<.*>|([^\\\\]|^)[{}]|" + aj + ".*" + al)
        }
        return [n, m, g, f, Z]
    }

    function J(an, ap) {
        if (!ap) {
            ap = an;
            an = p
        }
        var am, ao, al, aq, ak = this,
            aj = !ap || ap === "root";
        if (an) {
            aq = ak.type === ap ? ak : p;
            if (!aq) {
                am = ak.views;
                if (ak._.useKey) {
                    for (ao in am) {
                        if (aq = am[ao].get(an, ap)) {
                            break
                        }
                    }
                } else {
                    for (ao = 0, al = am.length; !aq && ao < al; ao++) {
                        aq = am[ao].get(an, ap)
                    }
                }
            }
        } else {
            if (aj) {
                while (ak.parent.parent) {
                    aq = ak = ak.parent
                }
            } else {
                while (ak && !aq) {
                    aq = ak.type === ap ? ak : p;
                    ak = ak.parent
                }
            }
        }
        return aq
    }

    function I() {
        var aj = this.get("item");
        return aj ? aj.index : p
    }
    I.depends = function () {
        return [this.get("item"), "index"]
    };

    function Y(am) {
        var ak, aj = this,
            al = (aj.ctx || {})[am];
        al = al === p ? aj.getRsc("helpers", am) : al;
        if (al) {
            if (typeof al === "function") {
                ak = function () {
                    return al.apply(aj, arguments)
                };
                u(ak, al)
            }
        }
        return ak || al
    }

    function H(ao, am, an) {
        var al, ak, aq, ap = +an === an && an,
            aj = am.linkCtx;
        if (ap) {
            an = (ap = am.tmpl.bnds[ap - 1])(am.data, am, N)
        }
        aq = an.args[0];
        if (ao || ap) {
            ak = aj && aj.tag || {
                _: {
                    inline: !aj
                },
                tagName: ao + ":",
                flow: true,
                _is: "tag"
            };
            ak._.bnd = ap;
            if (aj) {
                aj.tag = ak;
                ak.linkCtx = aj;
                an.ctx = ac(an.ctx, aj.view.ctx)
            }
            ak.tagCtx = an;
            an.view = am;
            ak.ctx = an.ctx || {};
            delete an.ctx;
            am._.tag = ak;
            ao = ao !== "true" && ao;
            if (ao && ((al = am.getRsc("converters", ao)) || G("Unknown converter: {{" + ao + ":"))) {
                ak.depends = al.depends;
                aq = al.apply(ak, an.args)
            }
            aq = ap && am._.onRender ? am._.onRender(aq, am, ap) : aq;
            am._.tag = p
        }
        return aq
    }

    function A(am, an) {
        var al, aj = this,
            ak = N[am];
        al = ak && ak[an];
        while ((al === p) && aj) {
            ak = aj.tmpl[am];
            al = ak && ak[an];
            aj = aj.parent
        }
        return al
    }

    function c(al, an, aq, ar) {
        var aH, aI, au, ax, aF, aB, aC, az, aE, at, aj, aA, aD, ap, av, aG = "",
            ao = +ar === ar && ar,
            am = an.linkCtx || 0,
            ay = an.ctx,
            ak = aq || an.tmpl,
            aw = an._;
        if (al._is === "tag") {
            aI = al;
            al = aI.tagName
        }
        if (ao) {
            ar = (aD = ak.bnds[ao - 1])(an.data, an, N)
        }
        az = ar.length;
        aI = aI || am.tag;
        for (aC = 0; aC < az; aC++) {
            at = ar[aC];
            aA = at.tmpl;
            aA = at.content = aA && ak.tmpls[aA - 1];
            aq = at.props.tmpl;
            if (!aC && (!aq || !aI)) {
                ap = an.getRsc("tags", al) || G("Unknown tag: {{" + al + "}}")
            }
            aq = aq || (aI ? aI._def : ap).template || aA;
            aq = "" + aq === aq ? an.getRsc("templates", aq) || F(aq) : aq;
            u(at, {
                tmpl: aq,
                render: l,
                index: aC,
                view: an,
                ctx: ac(at.ctx, ay)
            });
            if (!aI) {
                if (ap._ctr) {
                    aI = new ap._ctr();
                    av = !!aI.init;
                    aI.attr = aI.attr || ap.attr || p
                } else {
                    aI = {
                        render: ap.render
                    }
                }
                aI._ = {
                    inline: !am
                };
                if (am) {
                    am.attr = aI.attr = am.attr || aI.attr;
                    am.tag = aI;
                    aI.linkCtx = am
                }
                if (aI._.bnd = aD || am) {
                    aI._.arrVws = {}
                }
                aI.tagName = al;
                aI.parent = aB = ay && ay.tag, aI._is = "tag";
                aI._def = ap
            }
            aw.tag = aI;
            at.tag = aI;
            aI.tagCtxs = ar;
            if (!aI.flow) {
                aj = at.ctx = at.ctx || {};
                au = aI.parents = aj.parentTags = ay && ac(aj.parentTags, ay.parentTags) || {};
                if (aB) {
                    au[aB.tagName] = aB
                }
                aj.tag = aI
            }
        }
        aI.rendering = {};
        for (aC = 0; aC < az; aC++) {
            at = aI.tagCtx = ar[aC];
            aI.ctx = at.ctx;
            if (!aC && av) {
                aI.init(at, am, aI.ctx);
                av = p
            }
            if (aH = aI.render) {
                aE = aH.apply(aI, at.args)
            }
            aG += aE !== p ? aE : at.tmpl ? at.render() : ""
        }
        delete aI.rendering;
        aI.tagCtx = aI.tagCtxs[0];
        aI.ctx = aI.tagCtx.ctx;
        if (aI._.inline && (ax = aI.attr) && ax !== "html") {
            aG = ax === "text" ? ab.html(aG) : ""
        }
        return aG = ao && an._.onRender ? an._.onRender(aG, an, ao) : aG
    }

    function ae(aj, ao, av, ak, ap, aq, au, ax) {
        var ar, an, aw, am = ao === "array",
            al = {
                key: 0,
                useKey: am ? 0 : 1,
                id: "" + ag++,
                onRender: ax,
                bnds: {}
            },
            at = {
                data: ak,
                tmpl: ap,
                content: au,
                views: am ? [] : {}, parent: av,
                ctx: aj,
                type: ao,
                get: J,
                getIndex: I,
                getRsc: A,
                hlp: Y,
                _: al,
                _is: "view"
            };
        if (av) {
            ar = av.views;
            an = av._;
            if (an.useKey) {
                ar[al.key = "_" + an.useKey++] = at;
                aw = an.tag;
                al.bnd = am && (!aw || !!aw._.bnd && aw)
            } else {
                ar.splice(al.key = at.index = aq !== p ? aq : ar.length, 0, at)
            }
            at.ctx = aj || av.ctx
        }
        return at
    }

    function k(an) {
        var aj, ao, ak, al, am;
        for (aj in T) {
            al = T[aj];
            if ((am = al.compile) && (ao = an[aj + "s"])) {
                for (ak in ao) {
                    ao[ak] = am(ak, ao[ak], an, aj, al)
                }
            }
        }
    }

    function q(ak, am, al) {
        var an, aj;
        if (typeof am === "function") {
            am = {
                depends: am.depends,
                render: am
            }
        } else {
            if (aj = am.template) {
                am.template = "" + aj === aj ? (F[aj] || F(aj)) : aj
            }
            if (am.init !== false) {
                an = am._ctr = function (ao) {};
                (an.prototype = am).constructor = an
            }
        } if (al) {
            am._parentTmpl = al
        }
        return am
    }

    function b(aj, ap, aq, ao, ak, ar) {
        function am(at) {
            if (("" + at === at) || at.nodeType > 0) {
                try {
                    al = at.nodeType > 0 ? at : !y.test(at) && x && x(a.document).find(at)[0]
                } catch (au) {}
                if (al) {
                    at = al.getAttribute(X);
                    aj = aj || at;
                    at = F[at];
                    if (!at) {
                        aj = aj || "_" + ai++;
                        al.setAttribute(X, aj);
                        at = F[aj] = b(aj, al.innerHTML, aq, ao, ak, ar)
                    }
                }
                return at
            }
        }
        var an, al;
        ap = ap || "";
        an = am(ap);
        ar = ar || (ap.markup ? ap : {});
        ar.tmplName = aj;
        if (aq) {
            ar._parentTmpl = aq
        }
        if (!an && ap.markup && (an = am(ap.markup))) {
            if (an.fn && (an.debug !== ap.debug || an.allowCode !== ap.allowCode)) {
                an = an.markup
            }
        }
        if (an !== p) {
            if (aj && !aq) {
                Q[aj] = function () {
                    return ap.render.apply(ap, arguments)
                }
            }
            if (an.fn || ap.fn) {
                if (an.fn) {
                    if (aj && aj !== an.tmplName) {
                        ap = ac(ar, an)
                    } else {
                        ap = an
                    }
                }
            } else {
                ap = h(an, ar);
                C(an, ap)
            }
            k(ar);
            return ap
        }
    }

    function h(am, an) {
        var aj, ak = V.wrapMap || {},
            al = u({
                markup: am,
                tmpls: [],
                links: {},
                tags: {},
                bnds: [],
                _is: "template",
                render: l
            }, an);
        if (!an.htmlTag) {
            aj = r.exec(am);
            al.htmlTag = aj ? aj[1].toLowerCase() : ""
        }
        aj = ak[al.htmlTag];
        if (aj && aj !== ak.div) {
            al.markup = M.trim(al.markup);
            al._elCnt = true
        }
        return al
    }

    function d(al, ak) {
        function am(an, ap, au) {
            var ao, at, ar, aq;
            if (an && "" + an !== an && !an.nodeType && !an.markup) {
                for (ar in an) {
                    am(ar, an[ar], ap)
                }
                return N
            }
            if (ap === p) {
                ap = an;
                an = p
            }
            if (an && "" + an !== an) {
                au = ap;
                ap = an;
                an = p
            }
            aq = au ? au[aj] = au[aj] || {} : am;
            at = ak.compile;
            if (ao = W.onBeforeStoreItem) {
                at = ao(aq, an, ap, at) || at
            }
            if (!an) {
                ap = at(p, ap)
            } else {
                if (ap === null) {
                    delete aq[an]
                } else {
                    aq[an] = at ? (ap = at(an, ap, au, al, ak)) : ap
                }
            } if (ap) {
                ap._is = al
            }
            if (ao = W.onStoreItem) {
                ao(aq, an, ap, at)
            }
            return ap
        }
        var aj = al + "s";
        N[aj] = am;
        T[al] = ak
    }

    function l(aE, al, am, aF, ao, an) {
        var az, ay, aq, aB, aD, aw, av, ar, ak, aC, aA, aj, ap, ax = this,
            au = !ax.attr || ax.attr === "html",
            at = "";
        if (aF === true) {
            av = true;
            aF = 0
        }
        if (ax.tag) {
            ar = ax;
            ax = ax.tag;
            aC = ax._;
            aj = ax.tagName;
            ap = ar.tmpl;
            al = ac(al, ax.ctx);
            ak = ar.content;
            if (ar.props.link === false) {
                al = al || {};
                al.link = false
            }
            am = am || ar.view;
            aE = aE === p ? am : aE
        } else {
            ap = ax.jquery && (ax[0] || G('Unknown template: "' + ax.selector + '"')) || ax
        } if (ap) {
            if (!am && aE && aE._is === "view") {
                am = aE
            }
            if (am) {
                ak = ak || am.content;
                an = an || am._.onRender;
                if (aE === am) {
                    aE = am.data;
                    ao = true
                }
                al = ac(al, am.ctx)
            }
            if (!am || am.data === p) {
                (al = al || {}).root = aE
            }
            if (!ap.fn) {
                ap = F[ap] || F(ap)
            }
            if (ap) {
                an = (al && al.link) !== false && au && an;
                aA = an;
                if (an === true) {
                    aA = p;
                    an = am._.onRender
                }
                if (M.isArray(aE) && !ao) {
                    aB = av ? am : (aF !== p && am) || ae(al, "array", am, aE, ap, aF, ak, an);
                    for (az = 0, ay = aE.length; az < ay; az++) {
                        aq = aE[az];
                        aD = ae(al, "item", aB, aq, ap, (aF || 0) + az, ak, an);
                        aw = ap.fn(aq, aD, N);
                        at += aB._.onRender ? aB._.onRender(aw, aD) : aw
                    }
                } else {
                    aB = av ? am : ae(al, aj || "data", am, aE, ap, aF, ak, an);
                    if (aC && !ax.flow) {
                        aB.tag = ax
                    }
                    at += ap.fn(aE, aB, N)
                }
                return aA ? aA(at, aB) : at
            }
        }
        return ""
    }

    function G(aj) {
        throw new N.sub.Error(aj)
    }

    function S(aj) {
        G("Syntax error\n" + aj)
    }

    function C(ax, at, aw, ao) {
        function al(ay) {
            ay -= an;
            if (ay) {
                aq.push(ax.substr(an, ay).replace(U, "\\n"))
            }
        }

        function av(ay) {
            ay && S('Unmatched or missing tag: "{{/' + ay + '}}" in template:\n' + ax)
        }

        function aj(aC, aQ, aD, aN, aL, aG, aA, aK, aM, aI, aP, aE) {
            if (aG) {
                aL = ":";
                aN = "html"
            }
            aI = aI || aw;
            var ay, aH, aO = aQ && [],
                az = "",
                aB = "",
                aJ = "",
                aF = !aI && !aL && !aA;
            aD = aD || aL;
            al(aE);
            an = aE + aC.length;
            if (aK) {
                if (am) {
                    aq.push(["*", "\n" + aM.replace(e, "$1") + "\n"])
                }
            } else {
                if (aD) {
                    if (aD === "else") {
                        if (j.test(aM)) {
                            S('for "{{else if expr}}" use "{{else expr}}"')
                        }
                        aO = ap[6];
                        ap[7] = ax.substring(ap[7], aE);
                        ap = ar.pop();
                        aq = ap[3];
                        aF = true
                    }
                    if (aM) {
                        aM = aM.replace(U, " ");
                        az = w(aM, aO, at).replace(o, function (aR, aS, aT) {
                            if (aS) {
                                aJ += aT + ","
                            } else {
                                aB += aT + ","
                            }
                            return ""
                        })
                    }
                    aB = aB.slice(0, -1);
                    az = az.slice(0, -1);
                    ay = aB && (aB.indexOf("noerror:true") + 1) && aB || "";
                    au = [aD, aN || !!ao || "", az, aF && [], 'params:"' + aM + '",props:{' + aB + "}" + (aJ ? ",ctx:{" + aJ.slice(0, -1) + "}" : ""), ay, aO || 0];
                    aq.push(au);
                    if (aF) {
                        ar.push(ap);
                        ap = au;
                        ap[7] = an
                    }
                } else {
                    if (aP) {
                        aH = ap[0];
                        av(aP !== aH && aH !== "else" && aP);
                        ap[7] = ax.substring(ap[7], aE);
                        ap = ar.pop()
                    }
                }
            }
            av(!ap && aP);
            aq = ap[3]
        }
        var au, am = at && at.allowCode,
            ak = [],
            an = 0,
            ar = [],
            aq = ak,
            ap = [, , , ak];
        ax = ax.replace(af, "\\$&");
        av(ar[0] && ar[0][3].pop()[0]);
        ax.replace(t, aj);
        al(ax.length);
        if (an = ak[ak.length - 1]) {
            av("" + an !== an && (+an[7] === an[7]) && an[0])
        }
        return B(ak, aw ? ax : at, aw)
    }

    function B(aj, ax, aq) {
        var aR, aD, ay, aB, am, aL, aQ, aE, an, aS, al, aK, aA, ar, av, aw, aI, ao, aC, aH, at, aJ, ak, aV, aF, aU, az, aG, aP, au = 0,
            ap = "",
            aM = "",
            aO = {},
            aN = aj.length;
        if ("" + ax === ax) {
            aI = aq ? 'data-link="' + ax.replace(U, " ").slice(1, -1) + '"' : ax;
            ax = 0
        } else {
            aI = ax.tmplName || "unnamed";
            if (aH = ax.allowCode) {
                aO.allowCode = true
            }
            if (ax.debug) {
                aO.debug = true
            }
            aK = ax.bnds;
            aw = ax.tmpls
        }
        for (aR = 0; aR < aN; aR++) {
            aD = aj[aR];
            if ("" + aD === aD) {
                ap += '\nret+="' + aD + '";'
            } else {
                ay = aD[0];
                if (ay === "*") {
                    ap += "" + aD[1]
                } else {
                    aB = aD[1];
                    am = aD[2];
                    at = aD[3];
                    aL = aD[4];
                    aM = aD[5];
                    aJ = aD[7];
                    if (!(aU = ay === "else")) {
                        au = 0;
                        if (aK && (aA = aD[6])) {
                            au = aK.push(aA)
                        }
                    }
                    if (az = ay === ":") {
                        if (aB) {
                            ay = aB === "html" ? ">" : aB + ay
                        }
                        if (aM) {
                            aG = "prm" + aR;
                            aM = "try{var " + aG + "=[" + am + "][0];}catch(e){" + aG + '="";}\n';
                            am = aG
                        }
                    } else {
                        if (at) {
                            ao = h(aJ, aO);
                            ao.tmplName = aI + "/" + ay;
                            B(at, ao);
                            aw.push(ao)
                        }
                        if (!aU) {
                            aC = ay;
                            aF = ap;
                            ap = "";
                            ar = aR
                        }
                        aV = aj[aR + 1];
                        aV = aV && aV[0] === "else"
                    }
                    aL += ",args:[" + am + "]}";
                    if (az && aA || aB && ay !== ">") {
                        aP = new Function("data,view,j,u", " // " + aI + " " + au + " " + ay + "\n" + aM + "return {" + aL + ";");
                        aP.paths = aA;
                        aP._ctxs = ay;
                        if (aq) {
                            return aP
                        }
                        al = 1
                    }
                    ap += (az ? "\n" + (aA ? "" : aM) + (aq ? "return " : "ret+=") + (al ? (al = 0, aS = true, 'c("' + aB + '",view,' + (aA ? ((aK[au - 1] = aP), au) : "{" + aL) + ");") : ay === ">" ? (aE = true, "h(" + am + ");") : (an = true, "(v=" + am + ")!=" + (aq ? "=" : "") + 'u?v:"";')) : (aQ = true, "{tmpl:" + (at ? aw.length : "0") + "," + aL + ","));
                    if (aC && !aV) {
                        ap = "[" + ap.slice(0, -1) + "]";
                        if (aq || aA) {
                            ap = new Function("data,view,j,u", " // " + aI + " " + au + " " + aC + "\nreturn " + ap + ";");
                            if (aA) {
                                (aK[au - 1] = ap).paths = aA
                            }
                            ap._ctxs = ay;
                            if (aq) {
                                return ap
                            }
                        }
                        ap = aF + '\nret+=t("' + aC + '",view,this,' + (au || ap) + ");";
                        aA = 0;
                        aC = 0
                    }
                }
            }
        }
        ap = "// " + aI + "\nvar j=j||" + (x ? "jQuery." : "js") + "views" + (an ? ",v" : "") + (aQ ? ",t=j._tag" : "") + (aS ? ",c=j._cnvt" : "") + (aE ? ",h=j.converters.html" : "") + (aq ? ";\n" : ',ret="";\n') + (V.tryCatch ? "try{\n" : "") + (aO.debug ? "debugger;" : "") + ap + (aq ? "\n" : "\nreturn ret;\n") + (V.tryCatch ? "\n}catch(e){return j._err(e);}" : "");
        try {
            ap = new Function("data,view,j,u", ap)
        } catch (aT) {
            S("Compiled template code:\n\n" + ap, aT)
        }
        if (ax) {
            ax.fn = ap
        }
        return ap
    }

    function w(ao, ak, au) {
        function av(ay, aP, aA, aH, aF, aB, aQ, aw, aG, aO, aN, aJ, aM, aD, aK, az, aL, aC, aE) {
            var ax;
            aF = aF || "";
            aA = aA || aP || aN;
            aH = aH || aw;
            aG = aG || az || "";

            function aI(aU, aT, aW, aR, aY, aX, aV) {
                if (aT) {
                    ak && !aq && ak.push(aH);
                    if (aT !== ".") {
                        var aS = (aW ? 'view.hlp("' + aW + '")' : aR ? "view" : "data") + (aV ? (aY ? "." + aY : aW ? "" : (aR ? "" : "." + aT)) + (aX || "") : (aV = aW ? "" : aR ? aY || "" : aT, ""));
                        aS = aS + (aV ? "." + aV : "");
                        return aS.slice(0, 9) === "view.data" ? aS.slice(5) : aS
                    }
                }
                return aU
            }
            if (aB) {
                S(ao)
            } else {
                if (ak && aK) {
                    ax = at[al];
                    if (aE.length - 2 > aC - ax) {
                        ax = aE.slice(ax, aC + 1);
                        aK = m + ":" + ax + g;
                        aK = am[aK] = am[aK] || C(n + aK + f, au, true);
                        if (!aK.paths) {
                            w(ax, aK.paths = [], au)
                        }
                        ak.push({
                            _jsvOb: aK
                        })
                    }
                }
                return (ar ? (ar = !aJ, (ar ? ay : '"')) : an ? (an = !aM, (an ? ay : '"')) : ((aA ? (al++, at[al] = aC++, aA) : "") + (aL ? (al ? "" : ap ? (ap = aq = false, "\b") : ",") : aQ ? (al && S(ao), ap = aH, aq = aH.charAt(0) === "~", "\b" + aH + ":") : aH ? (aH.split("^").join(".").replace(z, aI) + (aG ? (aj[++al] = true, aH.charAt(0) !== "." && (at[al] = aC), aG) : aF)) : aF ? aF : aD ? ((aj[al--] = false, aD) + (aG ? (aj[++al] = true, aG) : "")) : aO ? (aj[al] || S(ao), ",") : aP ? "" : (ar = aJ, an = aM, '"'))))
            }
        }
        var ap, aq, am = au.links,
            aj = {},
            at = {
                0: -1
            },
            al = 0,
            an = false,
            ar = false;
        return (ao + " ").replace(aa, av)
    }

    function ac(ak, aj) {
        return ak && ak !== aj ? (aj ? u(u({}, aj), ak) : ak) : aj && u({}, aj)
    }

    function i(aj) {
        return L[aj] || (L[aj] = "&#" + aj.charCodeAt(0) + ";")
    }
    for (ad in T) {
        d(ad, T[ad])
    }
    var F = N.templates,
        ab = N.converters,
        D = N.helpers,
        R = N.tags,
        W = N.sub,
        V = N.settings;
    if (x) {
        M = x;
        M.fn.render = l
    } else {
        M = a.jsviews = {};
        M.isArray = Array && Array.isArray || function (aj) {
            return Object.prototype.toString.call(aj) === "[object Array]"
        }
    }
    M.render = Q;
    M.views = N;
    M.templates = F = N.templates;
    R({
        "else": function () {}, "if": {
            render: function (al) {
                var aj = this,
                    ak = (aj.rendering.done || !al && (arguments.length || !aj.tagCtx.index)) ? "" : (aj.rendering.done = true, aj.selected = aj.tagCtx.index, aj.tagCtx.render());
                return ak
            }, onUpdate: function (an, am, al) {
                var ak, aj, ao;
                for (ak = 0;
                    (aj = this.tagCtxs[ak]) && aj.args.length; ak++) {
                    aj = aj.args[0];
                    ao = !aj !== !al[ak].args[0];
                    if (!!aj || ao) {
                        return ao
                    }
                }
                return false
            }, flow: true
        }, "for": {
            render: function (aq) {
                var ap, ak, an = this,
                    am = an.tagCtx,
                    ao = !arguments.length,
                    aj = "",
                    al = ao || 0;
                if (!an.rendering.done) {
                    if (ao) {
                        aj = p
                    } else {
                        if (aq !== p) {
                            aj += am.render(aq);
                            al += M.isArray(aq) ? aq.length : 1
                        }
                    } if (an.rendering.done = al) {
                        an.selected = am.index
                    }
                }
                return aj
            }, onUpdate: function (al, ak, aj) {}, onArrayChange: function (am, ak) {
                var al, aj = this,
                    an = ak.change;
                if (this.tagCtxs[1] && (an === "insert" && am.target.length === ak.items.length || an === "remove" && !am.target.length || an === "refresh" && !ak.oldItems.length !== !am.target.length)) {
                    this.refresh()
                } else {
                    for (al in aj._.arrVws) {
                        al = aj._.arrVws[al];
                        if (al.data === am.target) {
                            al._.onArrayChange.apply(al, arguments)
                        }
                    }
                }
                am.done = true
            }, flow: true
        }, include: {
            flow: true
        }, "*": {
            render: function (aj) {
                return aj
            }, flow: true
        }
    });
    ab({
        html: function (aj) {
            return aj != p ? String(aj).replace(K, i) : ""
        }, attr: function (aj) {
            return aj != p ? String(aj).replace(P, i) : aj === null ? null : ""
        }, url: function (aj) {
            return aj != p ? encodeURI(String(aj)) : aj === null ? null : ""
        }
    });
    v()
})(this, this.jQuery);
dhtmlx = function (d) {
    for (var c in d) {
        dhtmlx[c] = d[c]
    }
    return dhtmlx
};
dhtmlx.extend_api = function (f, e, h) {
    var g = window[f];
    if (g) {
        window[f] = function (b) {
            if (b && typeof b == "object" && !b.tagName) {
                var i = g.apply(this, e._init ? e._init(b) : arguments),
                    d;
                for (d in dhtmlx) {
                    if (e[d]) {
                        this[e[d]](dhtmlx[d])
                    }
                }
                for (d in b) {
                    if (e[d]) {
                        this[e[d]](b[d])
                    } else {
                        d.indexOf("on") == 0 && this.attachEvent(d, b[d])
                    }
                }
            } else {
                i = g.apply(this, arguments)
            }
            e._patch && e._patch(this);
            return i || this
        }, window[f].prototype = g.prototype, h && dhtmlXHeir(window[f].prototype, h)
    }
};
dhtmlxAjax = {
    get: function (e, d) {
        var f = new dtmlXMLLoaderObject(!0);
        f.async = arguments.length < 3;
        f.waitCall = d;
        f.loadXML(e);
        return f
    }, post: function (f, e, h) {
        var g = new dtmlXMLLoaderObject(!0);
        g.async = arguments.length < 4;
        g.waitCall = h;
        g.loadXML(f, !0, e);
        return g
    }, getSync: function (b) {
        return this.get(b, null, !0)
    }, postSync: function (d, c) {
        return this.post(d, c, null, !0)
    }
};

function dtmlXMLLoaderObject(f, e, h, g) {
    this.xmlDoc = "";
    this.async = typeof h != "undefined" ? h : !0;
    this.onloadAction = f || null;
    this.mainObject = e || null;
    this.waitCall = null;
    this.rSeed = g || !1;
    return this
}
dtmlXMLLoaderObject.count = 0;
dtmlXMLLoaderObject.prototype.waitLoadFunction = function (d) {
    var c = !0;
    return this.check = function () {
        if (d && d.onloadAction != null && (!d.xmlDoc.readyState || d.xmlDoc.readyState == 4) && c) {
            c = !1;
            dtmlXMLLoaderObject.count++;
            if (typeof d.onloadAction == "function") {
                d.onloadAction(d.mainObject, null, null, null, d)
            }
            if (d.waitCall) {
                d.waitCall.call(this, d), d.waitCall = null
            }
        }
    }
};
dtmlXMLLoaderObject.prototype.getXMLTopNode = function (f, e) {
    if (this.xmlDoc.responseXML) {
        var h = this.xmlDoc.responseXML.getElementsByTagName(f);
        h.length == 0 && f.indexOf(":") != -1 && (h = this.xmlDoc.responseXML.getElementsByTagName(f.split(":")[1]));
        var g = h[0]
    } else {
        g = this.xmlDoc.documentElement
    } if (g) {
        return this._retry = !1, g
    }
    if (!this._retry && _isIE) {
        return this._retry = !0, e = this.xmlDoc, this.loadXMLString(this.xmlDoc.responseText.replace(/^[\s]+/, ""), !0), this.getXMLTopNode(f, e)
    }
    dhtmlxError.throwError("LoadXML", "Incorrect XML", [e || this.xmlDoc, this.mainObject]);
    return document.createElement("DIV")
};
dtmlXMLLoaderObject.prototype.loadXMLString = function (e, d) {
    if (_isIE) {
        this.xmlDoc = new ActiveXObject("Microsoft.XMLDOM"), this.xmlDoc.async = this.async, this.xmlDoc.onreadystatechange = function () {}, this.xmlDoc.loadXML(e)
    } else {
        var f = new DOMParser;
        this.xmlDoc = f.parseFromString(e, "text/xml")
    } if (!d) {
        if (this.onloadAction) {
            this.onloadAction(this.mainObject, null, null, null, this)
        }
        if (this.waitCall) {
            this.waitCall(), this.waitCall = null
        }
    }
};
dtmlXMLLoaderObject.prototype.loadXML = function (f, e, h, g) {
    this.rSeed && (f += (f.indexOf("?") != -1 ? "&" : "?") + "a_dhx_rSeed=" + (new Date).valueOf());
    this.filePath = f;
    this.xmlDoc = !_isIE && window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    if (this.async) {
        this.xmlDoc.onreadystatechange = new this.waitLoadFunction(this)
    }
    this.xmlDoc.open(e ? "POST" : "GET", f, this.async);
    g ? (this.xmlDoc.setRequestHeader("User-Agent", "dhtmlxRPC v0.1 (" + navigator.userAgent + ")"), this.xmlDoc.setRequestHeader("Content-type", "text/xml")) : e && this.xmlDoc.setRequestHeader("Content-type", this.contenttype || "application/x-www-form-urlencoded");
    this.xmlDoc.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    this.xmlDoc.send(h);
    this.async || (new this.waitLoadFunction(this))()
};
dtmlXMLLoaderObject.prototype.destructor = function () {
    return this.setXSLParamValue = this.getXMLTopNode = this.xmlNodeToJSON = this.doSerialization = this.loadXMLString = this.loadXML = this.doXSLTransToString = this.doXSLTransToObject = this.doXPathOpera = this.doXPath = this.xmlDoc = this.mainObject = this.onloadAction = this.filePath = this.rSeed = this.async = this._retry = this._getAllNamedChilds = this._filterXPath = null
};
dtmlXMLLoaderObject.prototype.xmlNodeToJSON = function (f) {
    for (var e = {}, h = 0; h < f.attributes.length; h++) {
        e[f.attributes[h].name] = f.attributes[h].value
    }
    e._tagvalue = f.firstChild ? f.firstChild.nodeValue : "";
    for (h = 0; h < f.childNodes.length; h++) {
        var g = f.childNodes[h].tagName;
        g && (e[g] || (e[g] = []), e[g].push(this.xmlNodeToJSON(f.childNodes[h])))
    }
    return e
};

function callerFunction(d, c) {
    return this.handler = function (a) {
        if (!a) {
            a = window.event
        }
        d(a, c);
        return !0
    }
}

function getAbsoluteLeft(b) {
    return getOffset(b).left
}

function getAbsoluteTop(b) {
    return getOffset(b).top
}

function getOffsetSum(e) {
    for (var d = 0, f = 0; e;) {
        d += parseInt(e.offsetTop), f += parseInt(e.offsetLeft), e = e.offsetParent
    }
    return {
        top: d,
        left: f
    }
}

function getOffsetRect(u) {
    var t = u.getBoundingClientRect(),
        s = document.body,
        r = document.documentElement,
        q = window.pageYOffset || r.scrollTop || s.scrollTop,
        o = window.pageXOffset || r.scrollLeft || s.scrollLeft,
        p = r.clientTop || s.clientTop || 0,
        n = r.clientLeft || s.clientLeft || 0,
        m = t.top + q - p,
        l = t.left + o - n;
    return {
        top: Math.round(m),
        left: Math.round(l)
    }
}

function getOffset(b) {
    return b.getBoundingClientRect ? getOffsetRect(b) : getOffsetSum(b)
}

function convertStringToBoolean(b) {
    typeof b == "string" && (b = b.toLowerCase());
    switch (b) {
    case "1":
    case "true":
    case "yes":
    case "y":
    case 1:
    case !0:
        return !0;
    default:
        return !1
    }
}

function getUrlSymbol(b) {
    return b.indexOf("?") != -1 ? "&" : "?"
}

function dhtmlDragAndDropObject() {
    if (window.dhtmlDragAndDrop) {
        return window.dhtmlDragAndDrop
    }
    this.dragStartObject = this.dragStartNode = this.dragNode = this.lastLanding = 0;
    this.tempDOMM = this.tempDOMU = null;
    this.waitDrag = 0;
    window.dhtmlDragAndDrop = this;
    return this
}
dhtmlDragAndDropObject.prototype.removeDraggableItem = function (b) {
    b.onmousedown = null;
    b.dragStarter = null;
    b.dragLanding = null
};
dhtmlDragAndDropObject.prototype.addDraggableItem = function (d, c) {
    d.onmousedown = this.preCreateDragCopy;
    d.dragStarter = c;
    this.addDragLanding(d, c)
};
dhtmlDragAndDropObject.prototype.addDragLanding = function (d, c) {
    d.dragLanding = c
};
dhtmlDragAndDropObject.prototype.preCreateDragCopy = function (b) {
    if (!((b || window.event) && (b || event).button == 2)) {
        if (window.dhtmlDragAndDrop.waitDrag) {
            return window.dhtmlDragAndDrop.waitDrag = 0, document.body.onmouseup = window.dhtmlDragAndDrop.tempDOMU, document.body.onmousemove = window.dhtmlDragAndDrop.tempDOMM, !1
        }
        window.dhtmlDragAndDrop.dragNode && window.dhtmlDragAndDrop.stopDrag(b);
        window.dhtmlDragAndDrop.waitDrag = 1;
        window.dhtmlDragAndDrop.tempDOMU = document.body.onmouseup;
        window.dhtmlDragAndDrop.tempDOMM = document.body.onmousemove;
        window.dhtmlDragAndDrop.dragStartNode = this;
        window.dhtmlDragAndDrop.dragStartObject = this.dragStarter;
        document.body.onmouseup = window.dhtmlDragAndDrop.preCreateDragCopy;
        document.body.onmousemove = window.dhtmlDragAndDrop.callDrag;
        window.dhtmlDragAndDrop.downtime = (new Date).valueOf();
        b && b.preventDefault && b.preventDefault();
        return !1
    }
};
dhtmlDragAndDropObject.prototype.callDrag = function (g) {
    if (!g) {
        g = window.event
    }
    dragger = window.dhtmlDragAndDrop;
    if (!((new Date).valueOf() - dragger.downtime < 100)) {
        if (!dragger.dragNode) {
            if (dragger.waitDrag) {
                dragger.dragNode = dragger.dragStartObject._createDragNode(dragger.dragStartNode, g);
                if (!dragger.dragNode) {
                    return dragger.stopDrag()
                }
                dragger.dragNode.onselectstart = function () {
                    return !1
                };
                dragger.gldragNode = dragger.dragNode;
                document.body.appendChild(dragger.dragNode);
                document.body.onmouseup = dragger.stopDrag;
                dragger.waitDrag = 0;
                dragger.dragNode.pWindow = window;
                dragger.initFrameRoute()
            } else {
                return dragger.stopDrag(g, !0)
            }
        }
        if (dragger.dragNode.parentNode != window.document.body && dragger.gldragNode) {
            var f = dragger.gldragNode;
            if (dragger.gldragNode.old) {
                f = dragger.gldragNode.old
            }
            f.parentNode.removeChild(f);
            var k = dragger.dragNode.pWindow;
            f.pWindow && f.pWindow.dhtmlDragAndDrop.lastLanding && f.pWindow.dhtmlDragAndDrop.lastLanding.dragLanding._dragOut(f.pWindow.dhtmlDragAndDrop.lastLanding);
            if (_isIE) {
                var i = document.createElement("Div");
                i.innerHTML = dragger.dragNode.outerHTML;
                dragger.dragNode = i.childNodes[0]
            } else {
                dragger.dragNode = dragger.dragNode.cloneNode(!0)
            }
            dragger.dragNode.pWindow = window;
            dragger.gldragNode.old = dragger.dragNode;
            document.body.appendChild(dragger.dragNode);
            k.dhtmlDragAndDrop.dragNode = dragger.dragNode
        }
        dragger.dragNode.style.left = g.clientX + 15 + (dragger.fx ? dragger.fx * -1 : 0) + (document.body.scrollLeft || document.documentElement.scrollLeft) + "px";
        dragger.dragNode.style.top = g.clientY + 3 + (dragger.fy ? dragger.fy * -1 : 0) + (document.body.scrollTop || document.documentElement.scrollTop) + "px";
        var h = g.srcElement ? g.srcElement : g.target;
        dragger.checkLanding(h, g)
    }
};
dhtmlDragAndDropObject.prototype.calculateFramePosition = function (g) {
    if (window.name) {
        for (var f = parent.frames[window.name].frameElement.offsetParent, k = 0, i = 0; f;) {
            k += f.offsetLeft, i += f.offsetTop, f = f.offsetParent
        }
        if (parent.dhtmlDragAndDrop) {
            var h = parent.dhtmlDragAndDrop.calculateFramePosition(1);
            k += h.split("_")[0] * 1;
            i += h.split("_")[1] * 1
        }
        if (g) {
            return k + "_" + i
        } else {
            this.fx = k
        }
        this.fy = i
    }
    return "0_0"
};
dhtmlDragAndDropObject.prototype.checkLanding = function (d, c) {
    d && d.dragLanding ? (this.lastLanding && this.lastLanding.dragLanding._dragOut(this.lastLanding), this.lastLanding = d, this.lastLanding = this.lastLanding.dragLanding._dragIn(this.lastLanding, this.dragStartNode, c.clientX, c.clientY, c), this.lastLanding_scr = _isIE ? c.srcElement : c.target) : d && d.tagName != "BODY" ? this.checkLanding(d.parentNode, c) : (this.lastLanding && this.lastLanding.dragLanding._dragOut(this.lastLanding, c.clientX, c.clientY, c), this.lastLanding = 0, this._onNotFound && this._onNotFound())
};
dhtmlDragAndDropObject.prototype.stopDrag = function (e, d) {
    dragger = window.dhtmlDragAndDrop;
    if (!d) {
        dragger.stopFrameRoute();
        var f = dragger.lastLanding;
        dragger.lastLanding = null;
        f && f.dragLanding._drag(dragger.dragStartNode, dragger.dragStartObject, f, _isIE ? event.srcElement : e.target)
    }
    dragger.lastLanding = null;
    dragger.dragNode && dragger.dragNode.parentNode == document.body && dragger.dragNode.parentNode.removeChild(dragger.dragNode);
    dragger.dragNode = 0;
    dragger.gldragNode = 0;
    dragger.fx = 0;
    dragger.fy = 0;
    dragger.dragStartNode = 0;
    dragger.dragStartObject = 0;
    document.body.onmouseup = dragger.tempDOMU;
    document.body.onmousemove = dragger.tempDOMM;
    dragger.tempDOMU = null;
    dragger.tempDOMM = null;
    dragger.waitDrag = 0
};
dhtmlDragAndDropObject.prototype.stopFrameRoute = function (f) {
    f && window.dhtmlDragAndDrop.stopDrag(1, 1);
    for (var e = 0; e < window.frames.length; e++) {
        try {
            window.frames[e] != f && window.frames[e].dhtmlDragAndDrop && window.frames[e].dhtmlDragAndDrop.stopFrameRoute(window)
        } catch (h) {}
    }
    try {
        parent.dhtmlDragAndDrop && parent != window && parent != f && parent.dhtmlDragAndDrop.stopFrameRoute(window)
    } catch (g) {}
};
dhtmlDragAndDropObject.prototype.initFrameRoute = function (g, f) {
    if (g) {
        window.dhtmlDragAndDrop.preCreateDragCopy(), window.dhtmlDragAndDrop.dragStartNode = g.dhtmlDragAndDrop.dragStartNode, window.dhtmlDragAndDrop.dragStartObject = g.dhtmlDragAndDrop.dragStartObject, window.dhtmlDragAndDrop.dragNode = g.dhtmlDragAndDrop.dragNode, window.dhtmlDragAndDrop.gldragNode = g.dhtmlDragAndDrop.dragNode, window.document.body.onmouseup = window.dhtmlDragAndDrop.stopDrag, window.waitDrag = 0, !_isIE && f && (!_isFF || _FFrv < 1.8) && window.dhtmlDragAndDrop.calculateFramePosition()
    }
    try {
        parent.dhtmlDragAndDrop && parent != window && parent != g && parent.dhtmlDragAndDrop.initFrameRoute(window)
    } catch (k) {}
    for (var i = 0; i < window.frames.length; i++) {
        try {
            window.frames[i] != g && window.frames[i].dhtmlDragAndDrop && window.frames[i].dhtmlDragAndDrop.initFrameRoute(window, !g || f ? 1 : 0)
        } catch (h) {}
    }
};
_OperaRv = _KHTMLrv = _FFrv = _isChrome = _isMacOS = _isKHTML = _isOpera = _isIE = _isFF = !1;
navigator.userAgent.indexOf("Macintosh") != -1 && (_isMacOS = !0);
navigator.userAgent.toLowerCase().indexOf("chrome") > -1 && (_isChrome = !0);
if (navigator.userAgent.indexOf("Safari") != -1 || navigator.userAgent.indexOf("Konqueror") != -1) {
    _KHTMLrv = parseFloat(navigator.userAgent.substr(navigator.userAgent.indexOf("Safari") + 7, 5)), _KHTMLrv > 525 ? (_isFF = !0, _FFrv = 1.9) : _isKHTML = !0
} else {
    if (navigator.userAgent.indexOf("Opera") != -1) {
        _isOpera = !0, _OperaRv = parseFloat(navigator.userAgent.substr(navigator.userAgent.indexOf("Opera") + 6, 3))
    } else {
        if (navigator.appName.indexOf("Microsoft") != -1) {
            if (_isIE = !0, (navigator.appVersion.indexOf("MSIE 8.0") != -1 || navigator.appVersion.indexOf("MSIE 9.0") != -1 || navigator.appVersion.indexOf("MSIE 10.0") != -1) && document.compatMode != "BackCompat") {
                _isIE = 8
            }
        } else {
            _isFF = !0, _FFrv = parseFloat(navigator.userAgent.split("rv:")[1])
        }
    }
}
dtmlXMLLoaderObject.prototype.doXPath = function (s, r, q, p) {
    if (_isKHTML || !_isIE && !window.XPathResult) {
        return this.doXPathOpera(s, r)
    }
    if (_isIE) {
        return r || (r = this.xmlDoc.nodeName ? this.xmlDoc : this.xmlDoc.responseXML), r || dhtmlxError.throwError("LoadXML", "Incorrect XML", [r || this.xmlDoc, this.mainObject]), q != null && r.setProperty("SelectionNamespaces", "xmlns:xsl='" + q + "'"), p == "single" ? r.selectSingleNode(s) : r.selectNodes(s) || []
    } else {
        var o = r;
        r || (r = this.xmlDoc.nodeName ? this.xmlDoc : this.xmlDoc.responseXML);
        r || dhtmlxError.throwError("LoadXML", "Incorrect XML", [r || this.xmlDoc, this.mainObject]);
        r.nodeName.indexOf("document") != -1 ? o = r : (o = r, r = r.ownerDocument);
        var m = XPathResult.ANY_TYPE;
        if (p == "single") {
            m = XPathResult.FIRST_ORDERED_NODE_TYPE
        }
        var n = [],
            l = r.evaluate(s, o, function () {
                return q
            }, m, null);
        if (m == XPathResult.FIRST_ORDERED_NODE_TYPE) {
            return l.singleNodeValue
        }
        for (var k = l.iterateNext(); k;) {
            n[n.length] = k, k = l.iterateNext()
        }
        return n
    }
};

function j() {
    if (!this.catches) {
        this.catches = []
    }
    return this
}
j.prototype.catchError = function (d, c) {
    this.catches[d] = c
};
j.prototype.throwError = function (e, d, f) {
    if (this.catches[e]) {
        return this.catches[e](e, d, f)
    }
    if (this.catches.ALL) {
        return this.catches.ALL(e, d, f)
    }
    alert("Error type: " + e + "\nDescription: " + d);
    return null
};
window.dhtmlxError = new j;
dtmlXMLLoaderObject.prototype.doXPathOpera = function (g, f) {
    var k = g.replace(/[\/]+/gi, "/").split("/"),
        i = null,
        h = 1;
    if (!k.length) {
        return []
    }
    if (k[0] == ".") {
        i = [f]
    } else {
        if (k[0] == "") {
            i = (this.xmlDoc.responseXML || this.xmlDoc).getElementsByTagName(k[h].replace(/\[[^\]]*\]/g, "")), h++
        } else {
            return []
        }
    }
    for (; h < k.length; h++) {
        i = this._getAllNamedChilds(i, k[h])
    }
    k[h - 1].indexOf("[") != -1 && (i = this._filterXPath(i, k[h - 1]));
    return i
};
dtmlXMLLoaderObject.prototype._filterXPath = function (f, e) {
    for (var h = [], e = e.replace(/[^\[]*\[\@/g, "").replace(/[\[\]\@]*/g, ""), g = 0; g < f.length; g++) {
        f[g].getAttribute(e) && (h[h.length] = f[g])
    }
    return h
};
dtmlXMLLoaderObject.prototype._getAllNamedChilds = function (g, f) {
    var k = [];
    _isKHTML && (f = f.toUpperCase());
    for (var i = 0; i < g.length; i++) {
        for (var h = 0; h < g[i].childNodes.length; h++) {
            _isKHTML ? g[i].childNodes[h].tagName && g[i].childNodes[h].tagName.toUpperCase() == f && (k[k.length] = g[i].childNodes[h]) : g[i].childNodes[h].tagName == f && (k[k.length] = g[i].childNodes[h])
        }
    }
    return k
};

function dhtmlXHeir(e, d) {
    for (var f in d) {
        typeof d[f] == "function" && (e[f] = d[f])
    }
    return e
}

function dhtmlxEvent(e, d, f) {
    e.addEventListener ? e.addEventListener(d, f, !1) : e.attachEvent && e.attachEvent("on" + d, f)
}
dtmlXMLLoaderObject.prototype.xslDoc = null;
dtmlXMLLoaderObject.prototype.setXSLParamValue = function (f, e, h) {
    if (!h) {
        h = this.xslDoc
    }
    if (h.responseXML) {
        h = h.responseXML
    }
    var g = this.doXPath("/xsl:stylesheet/xsl:variable[@name='" + f + "']", h, "http://www.w3.org/1999/XSL/Transform", "single");
    if (g != null) {
        g.firstChild.nodeValue = e
    }
};
dtmlXMLLoaderObject.prototype.doXSLTransToObject = function (f, e) {
    if (!f) {
        f = this.xslDoc
    }
    if (f.responseXML) {
        f = f.responseXML
    }
    if (!e) {
        e = this.xmlDoc
    }
    if (e.responseXML) {
        e = e.responseXML
    }
    if (_isIE) {
        g = new ActiveXObject("Msxml2.DOMDocument.3.0");
        try {
            e.transformNodeToObject(f, g)
        } catch (h) {
            g = e.transformNode(f)
        }
    } else {
        if (!this.XSLProcessor) {
            this.XSLProcessor = new XSLTProcessor, this.XSLProcessor.importStylesheet(f)
        }
        var g = this.XSLProcessor.transformToDocument(e)
    }
    return g
};
dtmlXMLLoaderObject.prototype.doXSLTransToString = function (e, d) {
    var f = this.doXSLTransToObject(e, d);
    return typeof f == "string" ? f : this.doSerialization(f)
};
dtmlXMLLoaderObject.prototype.doSerialization = function (d) {
    if (!d) {
        d = this.xmlDoc
    }
    if (d.responseXML) {
        d = d.responseXML
    }
    if (_isIE) {
        return d.xml
    } else {
        var c = new XMLSerializer;
        return c.serializeToString(d)
    }
};
dhtmlxEventable = function (a) {
    a.attachEvent = function (a, c, d) {
        a = "ev_" + a.toLowerCase();
        this[a] || (this[a] = new this.eventCatcher(d || this));
        return a + ":" + this[a].addEvent(c)
    };
    a.callEvent = function (a, c) {
        a = "ev_" + a.toLowerCase();
        return this[a] ? this[a].apply(this, c) : !0
    };
    a.checkEvent = function (a) {
        return !!this["ev_" + a.toLowerCase()]
    };
    a.eventCatcher = function (a) {
        var c = [],
            d = function () {
                for (var d = !0, g = 0; g < c.length; g++) {
                    if (c[g] != null) {
                        var f = c[g].apply(a, arguments),
                            d = d && f
                    }
                }
                return d
            };
        d.addEvent = function (a) {
            typeof a != "function" && (a = eval(a));
            return a ? c.push(a) - 1 : !1
        };
        d.removeEvent = function (a) {
            c[a] = null
        };
        return d
    };
    a.detachEvent = function (a) {
        if (a != !1) {
            var c = a.split(":");
            this[c[0]].removeEvent(c[1])
        }
    };
    a.detachAllEvents = function () {
        for (var a in this) {
            a.indexOf("ev_") == 0 && (this.detachEvent(a), this[a] = null)
        }
    };
    a = null
};

function dhtmlXWindowsSngl() {}

function dhtmlXWindowsBtn() {}

function dhtmlXWindows() {
    if (!window.dhtmlXContainer) {
        alert(this.i18n.dhx);
        return
    }
    this.engine = "dhx";
    var d = "_" + this.engine + "_Engine";
    if (!this[d]) {
        alert(this.i18n.noenginealert);
        return
    } else {
        this[d]()
    }
    this._isIPad = (navigator.userAgent.search(/iPad/gi) >= 0);
    var c = this;
    this.pathPrefix = "dhxwins_";
    this.imagePath = dhtmlx.image_path || "codebase/imgs/";
    this.setImagePath = function (a) {
        this.imagePath = a
    };
    this.skin = (typeof (dhtmlx) != "undefined" && typeof (dhtmlx.skin) == "string" ? dhtmlx.skin : "dhx_skyblue");
    this.skinParams = {
        dhx_black: {
            header_height: 21,
            border_left_width: 2,
            border_right_width: 2,
            border_bottom_height: 2
        },
        dhx_blue: {
            header_height: 21,
            border_left_width: 2,
            border_right_width: 2,
            border_bottom_height: 2
        },
        dhx_skyblue: {
            header_height: 21,
            border_left_width: 2,
            border_right_width: 2,
            border_bottom_height: 2
        }
    };
    this.setSkin = function (a) {
        this.skin = a;
        this._engineRedrawSkin()
    };
    this.isWindow = function (e) {
        var a = (this.wins[e] != null);
        return a
    };
    this.findByText = function (g) {
        var f = new Array();
        for (var e in this.wins) {
            if (this.wins[e].getText().search(g, "gi") >= 0) {
                f[f.length] = this.wins[e]
            }
        }
        return f
    };
    this.window = function (e) {
        var a = null;
        if (this.wins[e] != null) {
            a = this.wins[e]
        }
        return a
    };
    this.forEachWindow = function (f) {
        for (var e in this.wins) {
            f(this.wins[e])
        }
    };
    this.getBottommostWindow = function () {
        var e = this.getTopmostWindow();
        for (var f in this.wins) {
            if (this.wins[f].zi < e.zi) {
                e = this.wins[f]
            }
        }
        return (e.zi != 0 ? e : null)
    };
    this.getTopmostWindow = function (g) {
        var f = {
            zi: 0
        };
        for (var e in this.wins) {
            if (this.wins[e].zi > f.zi) {
                if (g == true && !this._isWindowHidden(this.wins[e])) {
                    f = this.wins[e]
                }
                if (g != true) {
                    f = this.wins[e]
                }
            }
        }
        return (f.zi != 0 ? f : null)
    };
    this.wins = {};
    for (var b in this.wins) {
        delete this.wins[b]
    }
    this.autoViewport = true;
    this._createViewport = function () {
        this.vp = document.body;
        this._clearVPCss();
        this.vp._css = (String(this.vp.className).length > 0 ? this.vp.className : "");
        this.vp.className += " dhtmlx_skin_" + this.skin + (this._r ? " dhx_wins_rtl" : "");
        this.modalCoverI = document.createElement("IFRAME");
        this.modalCoverI.frameBorder = "0";
        this.modalCoverI.className = "dhx_modal_cover_ifr";
        this.modalCoverI.setAttribute("src", "javascript:false;");
        this.modalCoverI.style.display = "none";
        this.modalCoverI.style.zIndex = 0;
        this.vp.appendChild(this.modalCoverI);
        this.modalCoverD = document.createElement("DIV");
        this.modalCoverD.className = "dhx_modal_cover_dv";
        this.modalCoverD.style.display = "none";
        this.modalCoverD.style.zIndex = 0;
        this.vp.appendChild(this.modalCoverD);
        this._vpcover = document.createElement("DIV");
        this._vpcover.className = "dhx_content_vp_cover";
        this._vpcover.style.display = "none";
        this.vp.appendChild(this._vpcover);
        this._carcass = document.createElement("DIV");
        this._carcass.className = "dhx_carcass_resmove";
        this._carcass.style.display = "none";
        if (_isIE) {
            this._carcass.innerHTML = "<iframe border=0 frameborder=0 style='filter: alpha(opacity=0); width: 100%; height:100%; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; z-index:1;'></iframe><div style='position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;z-index:2;background:white;filter:alpha(opacity=0);opacity:0;'></div>";
            if (navigator.userAgent.indexOf("MSIE 10") >= 0) {} else {
                this._carcass.childNodes[0].setAttribute("src", "javascript:false;")
            }
        }
        this._carcass.onselectstart = function (a) {
            a = a || event;
            a.returnValue = false
        };
        this.vp.appendChild(this._carcass)
    };
    this._clearVPCss = function (a) {
        this.vp.className = String(this.vp.className).replace(/[a-z_]{1,}/gi, function (e) {
            return ({
                dhtmlx_skin_dhx_skyblue: 1,
                dhtmlx_skin_dhx_blue: 1,
                dhtmlx_skin_dhx_black: 1,
                dhtmlx_skin_dhx_web: 1,
                dhtmlx_skin_dhx_terrace: 1
            }[e] == 1 ? "" : e)
        })
    };
    this._autoResizeViewport = function () {
        for (var e in this.wins) {
            if (this.wins[e]._isFullScreened) {
                this.wins[e].adjustContent(document.body, 0, 0, false, 0);
                this.wins[e].updateNestedObjects()
            }
            if (this.wins[e]._isMaximized && this.wins[e].style.display != "none") {
                this._restoreWindow(e);
                this._maximizeWindow(e)
            }
        }
        if (this.vp == document.body) {
            return
        }
        if (this.autoViewport == false) {
            return
        }
        this.vp.style.width = (_isIE ? document.body.offsetWidth - 4 : window.innerWidth) + "px";
        this.vp.style.height = (_isIE ? document.body.offsetHeight - 4 : window.innerHeight) + "px";
        for (var e in this.wins) {
            var i = this.wins[e];
            var h = false;
            var f = false;
            if (i.x > this.vp.offsetWidth - 10) {
                i.x = this.vp.offsetWidth - 10;
                h = true
            }
            var g = (i._skinParams != null ? i._skinParams : this.skinParams[this.skin]);
            if (i.y + g.header_height > this.vp.offsetHeight) {
                i.y = this.vp.offsetHeight - g.header_height;
                f = true
            }
            if (h || f) {
                this._engineRedrawWindowPos(i)
            }
        }
    };
    this.enableAutoViewport = function (a) {
        if (this.vp != document.body) {
            return
        }
        this.autoViewport = a;
        if (a == false) {
            if (this.vp == document.body) {
                document.body.className = this.vp._css
            }
            this.vp.removeChild(this.modalCoverI);
            this.vp.removeChild(this.modalCoverD);
            this.vp.removeChild(this._vpcover);
            this.vp.removeChild(this._carcass);
            this.vp = null;
            this.vp = document.createElement("DIV");
            this.vp.autocreated = true;
            this.vp.className = "dhtmlx_winviewport dhtmlx_skin_" + this.skin + (this._r ? " dhx_wins_rtl" : "");
            this.vp.style.left = "0px";
            this.vp.style.top = "0px";
            document.body.appendChild(this.vp);
            this.vp.ax = 0;
            this.vp.ay = 0;
            this._autoResizeViewport();
            this.vp.appendChild(this.modalCoverI);
            this.vp.appendChild(this.modalCoverD);
            this.vp.appendChild(this._vpcover);
            this.vp.appendChild(this._carcass)
        }
    };
    this.attachViewportTo = function (a) {
        if (this.autoViewport == false) {
            this.vp.removeChild(this.modalCoverI);
            this.vp.removeChild(this.modalCoverD);
            this.vp.removeChild(this._vpcover);
            this.vp.removeChild(this._carcass);
            if (this.vp != document.body) {
                this.vp.parentNode.removeChild(this.vp)
            }
            this.vp = null;
            this.vp = (typeof (a) == "string" ? document.getElementById(a) : a);
            this.vp.autocreated = false;
            this._clearVPCss();
            this.vp.className += " dhtmlx_skin_" + this.skin + (this._r ? " dhx_wins_rtl" : "");
            this.vp.style.position = "relative";
            this.vp.style.overflow = "hidden";
            this.vp.ax = 0;
            this.vp.ay = 0;
            this.vp.appendChild(this.modalCoverI);
            this.vp.appendChild(this.modalCoverD);
            this.vp.appendChild(this._vpcover);
            this.vp.appendChild(this._carcass)
        }
    };
    this.setViewport = function (e, h, f, a, g) {
        if (this.autoViewport == false) {
            this.vp.style.left = e + "px";
            this.vp.style.top = h + "px";
            this.vp.style.width = f + "px";
            this.vp.style.height = a + "px";
            if (g != null) {
                g.appendChild(this.vp)
            }
            this.vp.ax = getAbsoluteLeft(this.vp);
            this.vp.ay = getAbsoluteTop(this.vp)
        }
    };
    this._effects = {
        move: false,
        resize: false
    };
    this.setEffect = function (e, a) {
        if ((this._effects[e] != null) && (typeof (a) == "boolean")) {
            this._effects[e] = a
        }
    };
    this.getEffect = function (a) {
        return this._effects[a]
    };
    this.createWindow = function (l, f, k, h, e) {
        var j = document.createElement("DIV");
        j.className = "dhtmlx_window_inactive";
        j.dir = "ltr";
        for (var g in this.wins) {
            this.wins[g].zi += this.zIndexStep;
            this.wins[g].style.zIndex = this.wins[g].zi;
            if (this.iframeMode && this.wins[g].ifr) {
                this.wins[g].ifr.style.zIndex = this.wins[g].style.zIndex - 1
            }
        }
        j.zi = this.zIndexStep;
        j.style.zIndex = j.zi;
        j.active = false;
        j._isWindow = true;
        j.isWindow = true;
        j.w = Number(h);
        j.h = Number(e);
        j.x = f;
        j.y = k;
        this._engineFixWindowPosInViewport(j);
        j._isModal = false;
        j._allowResize = true;
        j.maxW = "auto";
        j.maxH = "auto";
        j.minW = 200;
        j.minH = 140;
        j.iconsPresent = true;
        j.icons = new Array(this.imagePath + this.pathPrefix + this.skin + "/active/icon_normal.gif", this.imagePath + this.pathPrefix + this.skin + "/inactive/icon_normal.gif");
        j._allowMove = true;
        j._allowMoveGlobal = true;
        j._allowResizeGlobal = true;
        j._keepInViewport = false;
        var i = this.skinParams[this.skin];
        j.idd = l;
        this.vp.appendChild(j);
        this._engineSetWindowBody(j);
        this._engineRedrawWindowPos(j);
        this._engineRedrawWindowSize(j);
        this._engineUpdateWindowIcon(j, j.icons[0]);
        this._engineDiableOnSelectInWindow(j, true);
        this.wins[l] = j;
        dhtmlxEventable(j);
        this._engineGetWindowHeader(j)[this._isIPad ? "ontouchstart" : "onmousedown"] = function (m) {
            m = m || event;
            var a = c.wins[this.idd];
            if (!a.isOnTop()) {
                a.bringToTop()
            }
            if (c._engineGetWindowHeaderState(a)) {
                return
            }
            if (!c._engineCheckHeaderMouseDown(a, m)) {
                return
            }
            if (!a._allowMove || !a._allowMoveGlobal) {
                return
            }
            c._wasMoved = false;
            a.moveOffsetX = a.x - (c._isIPad ? m.touches[0].clientX : m.clientX);
            a.moveOffsetY = a.y - (c._isIPad ? m.touches[0].clientY : m.clientY);
            c.movingWin = a;
            if (c._effects.move == false) {
                c._carcass.x = c.movingWin.x;
                c._carcass.y = c.movingWin.y;
                c._carcass.w = parseInt(c.movingWin.style.width) + (_isIE ? 0 : -2);
                c._carcass.h = parseInt(c.movingWin.style.height) + (_isIE ? 0 : -2);
                c._carcass.style.left = c._carcass.x + "px";
                c._carcass.style.top = c._carcass.y + "px";
                c._carcass.style.width = c._carcass.w + "px";
                c._carcass.style.height = c._carcass.h + "px";
                c._carcass.style.zIndex = c._getTopZIndex(true) + 1;
                c._carcass._keepInViewport = j._keepInViewport
            }
            c._blockSwitcher(true);
            c._vpcover.style.zIndex = c.movingWin.style.zIndex - 1;
            c._vpcover.style.display = "";
            m.returnValue = false;
            m.cancelBubble = true;
            return false
        };
        this._engineGetWindowHeader(j).ondblclick = function (m) {
            var a = c.wins[this.idd];
            if (!c._engineCheckHeaderMouseDown(a, m || event)) {
                return
            }
            if (a._allowResizeGlobal && !a._isParked) {
                if (a._isMaximized == true) {
                    c._restoreWindow(a.idd)
                } else {
                    c._maximizeWindow(a.idd)
                }
            }
            a = null
        };
        j.setText = function (a) {
            c._engineGetWindowLabel(this).innerHTML = a
        };
        j.getText = function () {
            return c._engineGetWindowLabel(this).innerHTML
        };
        j.getId = function () {
            return this.idd
        };
        j.show = function () {
            c._showWindow(this)
        };
        j.hide = function () {
            c._hideWindow(this)
        };
        j.minimize = function () {
            c._restoreWindow(this.idd)
        };
        j.maximize = function () {
            c._maximizeWindow(this.idd)
        };
        j.close = function () {
            c._closeWindow(this.idd)
        };
        j.park = function () {
            if (this._isParkedAllowed) {
                c._parkWindow(this.idd)
            }
        };
        j.stick = function () {
            c._stickWindow(this.idd)
        };
        j.unstick = function () {
            c._unstickWindow(this.idd)
        };
        j.isSticked = function () {
            return this._isSticked
        };
        j.setIcon = function (m, a) {
            c._setWindowIcon(j, m, a)
        };
        j.getIcon = function () {
            return c._getWindowIcon(this)
        };
        j.clearIcon = function () {
            c._clearWindowIcons(this)
        };
        j.restoreIcon = function () {
            c._restoreWindowIcons(this)
        };
        j.keepInViewport = function (a) {
            this._keepInViewport = a
        };
        j.setModal = function (a) {
            if (a == true) {
                if (c.modalWin != null || c.modalWin == this) {
                    return
                }
                c._setWindowModal(this, true)
            } else {
                if (c.modalWin != this) {
                    return
                }
                c._setWindowModal(this, false)
            }
        };
        j.isModal = function () {
            return this._isModal
        };
        j.isHidden = function () {
            return c._isWindowHidden(this)
        };
        j.isMaximized = function () {
            return this._isMaximized
        };
        j.isParked = function () {
            return this._isParked
        };
        j.allowPark = function () {
            c._allowParking(this)
        };
        j.denyPark = function () {
            c._denyParking(this)
        };
        j.isParkable = function () {
            return this._isParkedAllowed
        };
        j.allowResize = function () {
            c._allowReszieGlob(this)
        };
        j.denyResize = function () {
            c._denyResize(this)
        };
        j.isResizable = function () {
            return this._allowResizeGlobal
        };
        j.allowMove = function () {
            if (!this._isMaximized) {
                this._allowMove = true
            }
            this._allowMoveGlobal = true
        };
        j.denyMove = function () {
            this._allowMoveGlobal = false
        };
        j.isMovable = function () {
            return this._allowMoveGlobal
        };
        j.bringToTop = function () {
            c._bringOnTop(this);
            c._makeActive(this)
        };
        j.bringToBottom = function () {
            c._bringOnBottom(this)
        };
        j.isOnTop = function () {
            return c._isWindowOnTop(this)
        };
        j.isOnBottom = function () {
            return c._isWindowOnBottom(this)
        };
        j.setPosition = function (a, m) {
            this.x = a;
            this.y = m;
            c._engineFixWindowPosInViewport(this);
            c._engineRedrawWindowPos(this)
        };
        j.getPosition = function () {
            return new Array(this.x, this.y)
        };
        j.setDimension = function (m, a) {
            if (m != null) {
                if (this.maxW != "auto") {
                    if (m > this.maxW) {
                        m = this.maxW
                    }
                }
                if (m < this.minW) {
                    m = this.minW
                }
                this.w = m
            }
            if (a != null) {
                if (this.maxH != "auto") {
                    if (a > this.maxH) {
                        a = this.maxH
                    }
                }
                if (a < this.minH) {
                    a = this.minH
                }
                this.h = a
            }
            c._fixWindowDimensionInViewport(this);
            c._engineFixWindowPosInViewport(this);
            c._engineRedrawWindowSize(this);
            this.updateNestedObjects()
        };
        j.getDimension = function () {
            return new Array(this.w, this.h)
        };
        j.setMaxDimension = function (m, a) {
            this.maxW = (isNaN(m) ? "auto" : m);
            this.maxH = (isNaN(a) ? "auto" : a);
            c._engineRedrawWindowSize(this)
        };
        j.getMaxDimension = function () {
            return new Array(this.maxW, this.maxH)
        };
        j.setMinDimension = function (a, m) {
            if (a != null) {
                this.minW = a
            }
            if (m != null) {
                this.minH = m
            }
            c._fixWindowDimensionInViewport(this);
            c._engineRedrawWindowPos(this)
        };
        j.getMinDimension = function () {
            return new Array(this.minW, this.minH)
        };
        j._adjustToContent = function (a, m) {
            c._engineAdjustWindowToContent(this, a, m)
        };
        j._doOnAttachMenu = function () {
            c._engineRedrawWindowSize(this);
            this.updateNestedObjects()
        };
        j._doOnAttachToolbar = function () {
            c._engineRedrawWindowSize(this);
            this.updateNestedObjects()
        };
        j._doOnAttachStatusBar = function () {
            c._engineRedrawWindowSize(this);
            this.updateNestedObjects()
        };
        j._doOnFrameMouseDown = function () {
            this.bringToTop()
        };
        j._doOnFrameContentLoaded = function () {
            c.callEvent("onContentLoaded", [this])
        };
        j.addUserButton = function (p, o, n, a) {
            var m = c._addUserButton(this, p, o, n, a);
            return m
        };
        j.removeUserButton = function (a) {
            a = String(a).toLowerCase();
            if (!((a == "minmax1") || (a == "minmax2") || (a == "park") || (a == "close") || (a == "stick") || (a == "unstick") || (a == "help"))) {
                if (btn != null) {
                    c._removeUserButton(this, a)
                }
            }
        };
        j.progressOn = function () {
            c._engineSwitchWindowProgress(this, true)
        };
        j.progressOff = function () {
            c._engineSwitchWindowProgress(this, false)
        };
        j.setToFullScreen = function (a) {
            c._setWindowToFullScreen(this, a)
        };
        j.showHeader = function () {
            c._engineSwitchWindowHeader(this, true)
        };
        j.hideHeader = function () {
            c._engineSwitchWindowHeader(this, false)
        };
        j.progressOff();
        j.canStartResize = false;
        j.onmousemove = function (q) {
            if (_isIE && this._isMaximized) {
                return true
            }
            q = q || event;
            var n = q.target || q.srcElement;
            if (String(n.className).search("dhtmlx_wins_resizer") < 0) {
                n = null
            }
            if (!this._allowResize || this._allowResizeGlobal == false || !n) {
                if (n) {
                    if (n.style.cursor != "default") {
                        n.style.cursor = "default"
                    }
                }
                if (this.style.cursor != "default") {
                    this.style.cursor = "default"
                }
                this.canStartResize = false;
                return true
            }
            if (c.resizingWin != null) {
                return
            }
            if (c.movingWin != null) {
                return
            }
            if (this._isParked) {
                return
            }
            if (c._isIPad) {
                var m = q.touches[0].clientX;
                var a = q.touches[0].clientY
            } else {
                var m = (_isIE || _isOpera ? q.offsetX : q.layerX);
                var a = (_isIE || _isOpera ? q.offsetY : q.layerY)
            }
            var o = c._engineAllowWindowResize(j, n, m, a);
            if (o == null) {
                this.canStartResize = false;
                if (n.style.cursor != "default") {
                    n.style.cursor = "default"
                }
                if (this.style.cursor != "default") {
                    this.style.cursor = "default"
                }
                return
            }
            c.resizingDirs = o;
            var p = {
                x: q.clientX,
                y: q.clientY
            };
            switch (c.resizingDirs) {
            case "border_left":
                n.style.cursor = "w-resize";
                this.resizeOffsetX = this.x - p.x;
                break;
            case "border_right":
                n.style.cursor = "e-resize";
                this.resizeOffsetXW = this.x + this.w - p.x;
                break;
            case "border_top":
                n.style.cursor = "n-resize";
                this.resizeOffsetY = this.y - p.y;
                break;
            case "border_bottom":
                n.style.cursor = "n-resize";
                this.resizeOffsetYH = this.y + this.h - p.y;
                break;
            case "corner_left":
                n.style.cursor = "sw-resize";
                this.resizeOffsetX = this.x - q.clientX;
                this.resizeOffsetYH = this.y + this.h - p.y;
                break;
            case "corner_up_left":
                n.style.cursor = "nw-resize";
                this.resizeOffsetY = this.y - p.y;
                this.resizeOffsetX = this.x - p.x;
                break;
            case "corner_right":
                n.style.cursor = "nw-resize";
                this.resizeOffsetXW = this.x + this.w - p.x;
                this.resizeOffsetYH = this.y + this.h - p.y;
                break;
            case "corner_up_right":
                n.style.cursor = "sw-resize";
                this.resizeOffsetY = this.y - p.y;
                this.resizeOffsetXW = this.x + this.w - p.x;
                break
            }
            this.canStartResize = true;
            this.style.cursor = n.style.cursor;
            q.cancelBubble = true;
            q.returnValue = false;
            return false
        };
        j.onmousedown = function (a) {
            if (c._getActive() != this) {
                c._makeActive(this)
            }
            c._bringOnTop(this);
            if (this.canStartResize) {
                c._blockSwitcher(true);
                c.resizingWin = this;
                if (!c._effects.resize) {
                    c._carcass.x = c.resizingWin.x;
                    c._carcass.y = c.resizingWin.y;
                    c._carcass.w = Number(c.resizingWin.w) + (_isIE ? 0 : -2);
                    c._carcass.h = Number(c.resizingWin.h) + (_isIE ? 0 : -2);
                    c._carcass.style.left = c._carcass.x + "px";
                    c._carcass.style.top = c._carcass.y + "px";
                    c._carcass.style.width = c._carcass.w + "px";
                    c._carcass.style.height = c._carcass.h + "px";
                    c._carcass.style.zIndex = c._getTopZIndex(true) + 1;
                    c._carcass.style.cursor = this.style.cursor;
                    c._carcass._keepInViewport = this._keepInViewport;
                    c._carcass.style.display = ""
                }
                c._vpcover.style.zIndex = c.resizingWin.style.zIndex - 1;
                c._vpcover.style.display = "";
                if (this.vs[this.av].layout) {
                    this.callEvent("_onBeforeTryResize", [this])
                }
                a = a || event
            }
        };
        this._addDefaultButtons(j.idd);
        j.button = function (m) {
            m = String(m).toLowerCase();
            var a = null;
            if (this.btns[m] != null) {
                a = this.btns[m]
            }
            return a
        };
        j.center = function () {
            c._centerWindow(this, false)
        };
        j.centerOnScreen = function () {
            c._centerWindow(this, true)
        };
        j._attachContent("empty", null);
        j._redraw = function () {
            c._engineRedrawWindowSize(this)
        };
        j.bringToTop();
        this._engineRedrawWindowSize(j);
        return this.wins[l]
    };
    this.zIndexStep = 2000;
    this._getTopZIndex = function (f) {
        var g = 0;
        for (var e in this.wins) {
            if (f == true) {
                if (this.wins[e].zi > g) {
                    g = this.wins[e].zi
                }
            } else {
                if (this.wins[e].zi > g && !this.wins[e]._isSticked) {
                    g = this.wins[e].zi
                }
            }
        }
        return g
    };
    this.movingWin = null;
    this._moveWindow = function (h) {
        if (this.movingWin != null) {
            if (!this.movingWin._allowMove || !this.movingWin._allowMoveGlobal) {
                return
            }
            if (this._effects.move == true) {
                if (this._engineGetWindowHeader(this.movingWin).style.cursor != "move") {
                    this._engineGetWindowHeader(this.movingWin).style.cursor = "move"
                }
                this._wasMoved = true;
                this.movingWin.x = (this._isIPad ? h.touches[0].clientX : h.clientX) + this.movingWin.moveOffsetX;
                this.movingWin.y = (this._isIPad ? h.touches[0].clientY : h.clientY) + this.movingWin.moveOffsetY;
                this._engineFixWindowPosInViewport(this.movingWin);
                this._engineRedrawWindowPos(this.movingWin)
            } else {
                if (this._carcass.style.display != "") {
                    this._carcass.style.display = ""
                }
                if (this._carcass.style.cursor != "move") {
                    this._carcass.style.cursor = "move"
                }
                if (this._engineGetWindowHeader(this.movingWin).style.cursor != "move") {
                    this._engineGetWindowHeader(this.movingWin).style.cursor = "move"
                }
                this._carcass.x = (this._isIPad ? h.touches[0].clientX : h.clientX) + this.movingWin.moveOffsetX;
                this._carcass.y = (this._isIPad ? h.touches[0].clientY : h.clientY) + this.movingWin.moveOffsetY;
                this._wasMoved = true;
                this._engineFixWindowPosInViewport(this._carcass);
                this._carcass.style.left = this._carcass.x + "px";
                this._carcass.style.top = this._carcass.y + "px"
            }
        }
        if (this.resizingWin != null) {
            if (!this.resizingWin._allowResize) {
                return
            }
            var g = {
                x: h.clientX,
                y: h.clientY
            };
            if (this.resizingDirs == "border_left" || this.resizingDirs == "corner_left" || this.resizingDirs == "corner_up_left") {
                if (this._effects.resize) {
                    var f = g.x + this.resizingWin.resizeOffsetX;
                    var a = (f > this.resizingWin.x ? -1 : 1);
                    newW = this.resizingWin.w + Math.abs(f - this.resizingWin.x) * a;
                    if ((newW < this.resizingWin.minW) && (a < 0)) {
                        this.resizingWin.x = this.resizingWin.x + this.resizingWin.w - this.resizingWin.minW;
                        this.resizingWin.w = this.resizingWin.minW
                    } else {
                        this.resizingWin.w = newW;
                        this.resizingWin.x = f
                    }
                    this._engineRedrawWindowPos(this.resizingWin);
                    this._engineRedrawWindowSize(this.resizingWin)
                } else {
                    var f = g.x + this.resizingWin.resizeOffsetX;
                    var a = (f > this._carcass.x ? -1 : 1);
                    newW = this._carcass.w + Math.abs(f - this._carcass.x) * a;
                    if (newW > this.resizingWin.maxW) {
                        newW = this.resizingWin.maxW;
                        f = this._carcass.x + this._carcass.w - this.resizingWin.maxW
                    }
                    if ((newW < this.resizingWin.minW) && (a < 0)) {
                        this._carcass.x = this._carcass.x + this._carcass.w - this.resizingWin.minW;
                        this._carcass.w = this.resizingWin.minW
                    } else {
                        this._carcass.w = newW;
                        this._carcass.x = f
                    }
                    this._carcass.style.left = this._carcass.x + "px";
                    this._carcass.style.width = this._carcass.w + "px"
                }
            }
            if (this.resizingDirs == "border_right" || this.resizingDirs == "corner_right" || this.resizingDirs == "corner_up_right") {
                if (this._effects.resize) {
                    var f = g.x - (this.resizingWin.x + this.resizingWin.w) + this.resizingWin.resizeOffsetXW;
                    newW = this.resizingWin.w + f;
                    if (newW < this.resizingWin.minW) {
                        newW = this.resizingWin.minW
                    }
                    this.resizingWin.w = newW;
                    this._engineRedrawWindowPos(this.resizingWin);
                    this._engineRedrawWindowSize(this.resizingWin)
                } else {
                    var f = g.x - (this._carcass.x + this._carcass.w) + this.resizingWin.resizeOffsetXW;
                    newW = this._carcass.w + f;
                    if (newW < this.resizingWin.minW) {
                        newW = this.resizingWin.minW
                    }
                    if (this.resizingWin.maxW != "auto") {
                        if (newW > this.resizingWin.maxW) {
                            newW = this.resizingWin.maxW
                        }
                    }
                    this._carcass.w = newW;
                    this._carcass.style.width = this._carcass.w + "px"
                }
            }
            if (this.resizingDirs == "border_bottom" || this.resizingDirs == "corner_left" || this.resizingDirs == "corner_right") {
                if (this._effects.resize) {
                    var f = g.y - (this.resizingWin.y + this.resizingWin.h) + this.resizingWin.resizeOffsetYH;
                    newH = this.resizingWin.h + f;
                    if (newH < this.resizingWin.minH) {
                        newH = this.resizingWin.minH
                    }
                    this.resizingWin.h = newH;
                    this._engineRedrawWindowPos(this.resizingWin);
                    this._engineRedrawWindowSize(this.resizingWin)
                } else {
                    var f = g.y - (this._carcass.y + this._carcass.h) + this.resizingWin.resizeOffsetYH;
                    newH = this._carcass.h + f;
                    if (newH < this.resizingWin.minH) {
                        newH = this.resizingWin.minH
                    }
                    if (newH > this.resizingWin.maxH) {
                        newH = this.resizingWin.maxH
                    }
                    this._carcass.h = newH;
                    this._carcass.style.height = this._carcass.h + "px"
                }
            }
            if (this.resizingDirs == "border_top" || this.resizingDirs == "corner_up_right" || this.resizingDirs == "corner_up_left") {
                if (this._effects.resize) {} else {
                    var f = g.y + this.resizingWin.resizeOffsetY;
                    var a = (f > this.resizingWin.y ? -1 : 1);
                    newH = this.resizingWin.h + Math.abs(f - this.resizingWin.y) * a;
                    if (newH > this.resizingWin.maxH) {
                        newH = this.resizingWin.maxH;
                        f = this.resizingWin.y + this.resizingWin.h - this.resizingWin.maxH
                    }
                    if ((newH < this.resizingWin.minH) && (a < 0)) {
                        this._carcass.y = this._carcass.y + this._carcass.h - this.resizingWin.minH;
                        this._carcass.h = this.resizingWin.minH
                    } else {
                        this._carcass.h = newH + (_isIE ? 0 : -2);
                        this._carcass.y = f
                    }
                    this._carcass.style.top = this._carcass.y + "px";
                    this._carcass.style.height = this._carcass.h + "px"
                }
            }
        }
    };
    this._stopMove = function () {
        if (this.movingWin != null) {
            if (this._effects.move) {
                var a = this.movingWin;
                this.movingWin = null;
                this._blockSwitcher(false);
                this._engineGetWindowHeader(a).style.cursor = "";
                if (_isFF) {
                    a.h++;
                    c._engineRedrawWindowPos(a);
                    a.h--;
                    c._engineRedrawWindowPos(a)
                }
            } else {
                this._carcass.style.cursor = "";
                this._carcass.style.display = "none";
                var a = this.movingWin;
                this._engineGetWindowHeader(a).style.cursor = "";
                this.movingWin = null;
                this._blockSwitcher(false);
                a.setPosition(parseInt(this._carcass.style.left), parseInt(this._carcass.style.top))
            }
            this._vpcover.style.display = "none";
            if (this._wasMoved) {
                if (a.checkEvent("onMoveFinish")) {
                    a.callEvent("onMoveFinish", [a])
                } else {
                    this.callEvent("onMoveFinish", [a])
                }
            }
            this._wasMoved = false
        }
        if (this.resizingWin != null) {
            var a = this.resizingWin;
            this.resizingWin = null;
            this._blockSwitcher(false);
            if (!this._effects.resize) {
                this._carcass.style.display = "none";
                a.setDimension(this._carcass.w + (_isIE ? 0 : 2), this._carcass.h + (_isIE ? 0 : 2));
                a.setPosition(this._carcass.x, this._carcass.y)
            } else {
                a.updateNestedObjects()
            } if (a.vs[a.av].layout) {
                a.vs[a.av].layout.callEvent("onResize", [])
            }
            this._vpcover.style.display = "none";
            if (a.checkEvent("onResizeFinish")) {
                a.callEvent("onResizeFinish", [a])
            } else {
                this.callEvent("onResizeFinish", [a])
            }
        }
    };
    this._fixWindowDimensionInViewport = function (a) {
        if (a.w < a.minW) {
            a.w = a.minW
        }
        if (a._isParked) {
            return
        }
        if (a.h < a.minH) {
            a.h = a.minH
        }
    };
    this._bringOnTop = function (h) {
        var f = h.zi;
        var g = this._getTopZIndex(h._isSticked);
        for (var e in this.wins) {
            if (this.wins[e] != h) {
                if (h._isSticked || (!h._isSticked && !this.wins[e]._isSticked)) {
                    if (this.wins[e].zi > f) {
                        this.wins[e].zi = this.wins[e].zi - this.zIndexStep;
                        this.wins[e].style.zIndex = this.wins[e].zi;
                        if (this.iframeMode && this.wins[e].ifr) {
                            this.wins[e].ifr.style.zIndex = this.wins[e].style.zIndex - 1
                        }
                    }
                }
            }
        }
        h.zi = g;
        h.style.zIndex = h.zi;
        if (this.iframeMode && h.ifr) {
            h.ifr.style.zIndex = g - 1
        }
    };
    this._makeActive = function (g, f) {
        for (var e in this.wins) {
            if (this.wins[e] == g) {
                var h = false;
                if (this.wins[e].className != "dhtmlx_window_active" && !f) {
                    h = true
                }
                this.wins[e].className = "dhtmlx_window_active";
                this._engineUpdateWindowIcon(this.wins[e], this.wins[e].icons[0]);
                if (h == true) {
                    if (g.checkEvent("onFocus")) {
                        g.callEvent("onFocus", [g])
                    } else {
                        this.callEvent("onFocus", [g])
                    }
                }
            } else {
                this.wins[e].className = "dhtmlx_window_inactive";
                this._engineUpdateWindowIcon(this.wins[e], this.wins[e].icons[1])
            }
        }
    };
    this._getActive = function () {
        var f = null;
        for (var e in this.wins) {
            if (this.wins[e].className == "dhtmlx_window_active") {
                f = this.wins[e]
            }
        }
        return f
    };
    this._centerWindow = function (g, a) {
        if (g._isMaximized == true) {
            return
        }
        if (a == true) {
            var e = (_isIE ? document.body.offsetWidth : window.innerWidth);
            var i = (_isIE ? document.body.offsetHeight : window.innerHeight)
        } else {
            var e = (this.vp == document.body ? document.body.offsetWidth : (Number(parseInt(this.vp.style.width)) && String(this.vp.style.width).search("%") == -1 ? parseInt(this.vp.style.width) : this.vp.offsetWidth));
            var i = (this.vp == document.body ? document.body.offsetHeight : (Number(parseInt(this.vp.style.height)) && String(this.vp.style.height).search("%") == -1 ? parseInt(this.vp.style.height) : this.vp.offsetHeight))
        }
        var h = Math.round((e / 2) - (g.w / 2));
        var f = Math.round((i / 2) - (g.h / 2));
        g.x = h;
        g.y = f;
        this._engineFixWindowPosInViewport(g);
        this._engineRedrawWindowPos(g)
    };
    this._addDefaultButtons = function (k) {
        var l = this.wins[k];
        var j = this._engineGetWindowButton(l, "stick");
        j.title = this.i18n.stick;
        j.isVisible = false;
        j.style.display = "none";
        j._isEnabled = true;
        j.isPressed = false;
        j.label = "stick";
        j._doOnClick = function () {
            this.isPressed = true;
            c._stickWindow(this.winId)
        };
        var g = this._engineGetWindowButton(l, "sticked");
        g.title = this.i18n.unstick;
        g.isVisible = false;
        g.style.display = "none";
        g._isEnabled = true;
        g.isPressed = false;
        g.label = "sticked";
        g._doOnClick = function () {
            this.isPressed = false;
            c._unstickWindow(this.winId)
        };
        var e = this._engineGetWindowButton(l, "help");
        e.title = this.i18n.help;
        e.isVisible = false;
        e.style.display = "none";
        e._isEnabled = true;
        e.isPressed = false;
        e.label = "help";
        e._doOnClick = function () {
            c._needHelp(this.winId)
        };
        var i = this._engineGetWindowButton(l, "park");
        i.titleIfParked = this.i18n.parkdown;
        i.titleIfNotParked = this.i18n.parkup;
        i.title = i.titleIfNotParked;
        i.isVisible = true;
        i._isEnabled = true;
        i.isPressed = false;
        i.label = "park";
        i._doOnClick = function () {
            c._parkWindow(this.winId)
        };
        var h = this._engineGetWindowButton(l, "minmax1");
        h.title = this.i18n.maximize;
        h.isVisible = true;
        h._isEnabled = true;
        h.isPressed = false;
        h.label = "minmax1";
        h._doOnClick = function () {
            c._maximizeWindow(this.winId)
        };
        var f = this._engineGetWindowButton(l, "minmax2");
        f.title = this.i18n.restore;
        f.isVisible = false;
        f.style.display = "none";
        f._isEnabled = true;
        f.isPressed = false;
        f.label = "minmax2";
        f._doOnClick = function () {
            c._restoreWindow(this.winId)
        };
        var n = this._engineGetWindowButton(l, "close");
        n.title = this.i18n.close;
        n.isVisible = true;
        n._isEnabled = true;
        n.isPressed = false;
        n.label = "close";
        n._doOnClick = function () {
            c._closeWindow(this.winId)
        };
        var m = this._engineGetWindowButton(l, "dock");
        m.title = this.i18n.dock;
        m.style.display = "none";
        m.isVisible = false;
        m._isEnabled = true;
        m.isPressed = false;
        m.label = "dock";
        m._doOnClick = function () {};
        l._isSticked = false;
        l._isParked = false;
        l._isParkedAllowed = true;
        l._isMaximized = false;
        l._isDocked = false;
        l.btns = {};
        l.btns.stick = j;
        l.btns.sticked = g;
        l.btns.help = e;
        l.btns.park = i;
        l.btns.minmax1 = h;
        l.btns.minmax2 = f;
        l.btns.close = n;
        l.btns.dock = m;
        for (var o in l.btns) {
            l.btns[o].winId = l.idd;
            this._attachEventsOnButton(l.idd, o)
        }
        l = j = g = e = i = h = f = n = m = null
    };
    this._attachEventsOnButton = function (e, f) {
        var a = this.wins[e].btns[f];
        if (!this._isIPad) {
            a.onmouseover = function () {
                if (this._isEnabled) {
                    this.className = "dhtmlx_wins_btns_button dhtmlx_button_" + this.label + "_over_" + (this.isPressed ? "pressed" : "default")
                } else {
                    this.className = "dhtmlx_wins_btns_button dhtmlx_button_" + this.label + "_disabled"
                }
            };
            a.onmouseout = function () {
                if (this._isEnabled) {
                    this.isPressed = false;
                    this.className = "dhtmlx_wins_btns_button dhtmlx_button_" + this.label + "_default"
                } else {
                    this.className = "dhtmlx_wins_btns_button dhtmlx_button_" + this.label + "_disabled"
                }
            };
            a.onmousedown = function () {
                if (this._isEnabled) {
                    this.isPressed = true;
                    this.className = "dhtmlx_wins_btns_button dhtmlx_button_" + this.label + "_over_pressed"
                } else {
                    this.className = "dhtmlx_wins_btns_button dhtmlx_button_" + this.label + "_disabled"
                }
            };
            a.onmouseup = function () {
                if (this._isEnabled) {
                    var g = this.isPressed;
                    this.isPressed = false;
                    this.className = "dhtmlx_wins_btns_button dhtmlx_button_" + this.label + "_over_default";
                    if (g) {
                        if (this.checkEvent("onClick")) {
                            this.callEvent("onClick", [c.wins[this.winId], this])
                        } else {
                            this._doOnClick()
                        }
                    }
                } else {
                    this.className = "dhtmlx_wins_btns_button dhtmlx_button_" + this.label + "_disabled"
                }
            }
        } else {
            a.ontouchstart = function (g) {
                g.cancelBubble = true;
                g.returnValue = false;
                return false
            };
            a.ontouchend = function (g) {
                g.cancelBubble = true;
                g.returnValue = false;
                if (!this._isEnabled) {
                    return false
                }
                if (this.checkEvent("onClick")) {
                    this.callEvent("onClick", [c.wins[this.winId], this])
                } else {
                    this._doOnClick()
                }
                return false
            }
        }
        a.show = function () {
            c._showButton(c.wins[this.winId], this.label, true)
        };
        a.hide = function () {
            c._hideButton(c.wins[this.winId], this.label, true)
        };
        a.enable = function () {
            c._enableButton(c.wins[this.winId], this.label)
        };
        a.disable = function () {
            c._disableButton(c.wins[this.winId], this.label)
        };
        a.isEnabled = function () {
            return this._isEnabled
        };
        a.isHidden = function () {
            return (!this.isVisible)
        };
        dhtmlxEventable(a);
        a = null
    };
    this._parkWindow = function (e, g) {
        var f = this.wins[e];
        if (!f._isParkedAllowed && !g) {
            return
        }
        if (this.enableParkEffect && f.parkBusy) {
            return
        }
        if (f._isParked) {
            if (this.enableParkEffect && !g) {
                f.parkBusy = true;
                this._doParkDown(f)
            } else {
                f.h = f.lastParkH;
                this._engineRedrawWindowSize(f);
                this._engineDoOnWindowParkDown(f);
                f.updateNestedObjects();
                f.btns.park.title = f.btns.park.titleIfNotParked;
                if (f._allowResizeGlobal == true) {
                    this._enableButton(f, "minmax1");
                    this._enableButton(f, "minmax2")
                }
                f._isParked = false;
                if (!g) {
                    if (f.checkEvent("onParkDown")) {
                        f.callEvent("onParkDown", [f])
                    } else {
                        this.callEvent("onParkDown", [f])
                    }
                }
            }
        } else {
            if (this.enableParkEffect && !g) {
                f.lastParkH = (String(f.h).search(/\%$/) == -1 ? f.h : f.offsetHeight);
                if (f._allowResizeGlobal == true) {
                    this._disableButton(f, "minmax1");
                    this._disableButton(f, "minmax2")
                }
                if (this.enableParkEffect) {
                    f.parkBusy = true;
                    this._doParkUp(f)
                } else {
                    var a = (f._skinParams != null ? f._skinParams : this.skinParams[this.skin]);
                    f.h = a.header_height + a.border_bottom_height;
                    f.btns.park.title = f.btns.park.titleIfParked
                }
            } else {
                f.lastParkH = (String(f.h).search(/\%$/) == -1 ? f.h : f.offsetHeight);
                f.h = this._engineGetWindowParkedHeight(f);
                this._engineRedrawWindowSize(f);
                this._engineDoOnWindowParkUp(f);
                f.btns.park.title = f.btns.park.titleIfParked;
                f._isParked = true;
                if (!g) {
                    if (f.checkEvent("onParkUp")) {
                        f.callEvent("onParkUp", [f])
                    } else {
                        this.callEvent("onParkUp", [f])
                    }
                }
            }
        }
        f = null
    };
    this._allowParking = function (a) {
        a._isParkedAllowed = true;
        this._enableButton(a, "park")
    };
    this._denyParking = function (a) {
        a._isParkedAllowed = false;
        this._disableButton(a, "park")
    };
    this.enableParkEffect = false;
    this.parkStartSpeed = 80;
    this.parkSpeed = this.parkStartSpeed;
    this.parkTM = null;
    this.parkTMTime = 5;
    this._doParkUp = function (e) {
        if (String(e.h).search(/\%$/) != -1) {
            e.h = e.offsetHeight
        }
        e.h -= this.parkSpeed;
        var a = this._engineGetWindowParkedHeight(e);
        if (e.h <= a) {
            e.h = a;
            this._engineGetWindowButton(e, "park").title = this._engineGetWindowButton(e, "park").titleIfParked;
            e._isParked = true;
            e.parkBusy = false;
            this._engineRedrawWindowSize(e);
            this._engineDoOnWindowParkUp(e);
            if (e.checkEvent("onParkUp")) {
                e.callEvent("onParkUp", [e])
            } else {
                this.callEvent("onParkUp", [e])
            }
        } else {
            this._engineRedrawWindowSize(e);
            this.parkTM = window.setTimeout(function () {
                c._doParkUp(e)
            }, this.parkTMTime)
        }
    };
    this._doParkDown = function (a) {
        a.h += this.parkSpeed;
        if (a.h >= a.lastParkH) {
            a.h = a.lastParkH;
            this._engineGetWindowButton(a, "park").title = this._engineGetWindowButton(a, "park").titleIfNotParked;
            if (a._allowResizeGlobal == true) {
                this._enableButton(a, "minmax1");
                this._enableButton(a, "minmax2")
            }
            a._isParked = false;
            a.parkBusy = false;
            this._engineRedrawWindowSize(a);
            a.updateNestedObjects();
            this._engineDoOnWindowParkDown(a);
            if (a.checkEvent("onParkDown")) {
                a.callEvent("onParkDown", [a])
            } else {
                this.callEvent("onParkDown", [a])
            }
        } else {
            this._engineRedrawWindowSize(a);
            this.parkTM = window.setTimeout(function () {
                c._doParkDown(a)
            }, this.parkTMTime)
        }
    };
    this._enableButton = function (f, e) {
        var a = this._engineGetWindowButton(f, e);
        if (!a) {
            return
        }
        a._isEnabled = true;
        a.className = "dhtmlx_wins_btns_button dhtmlx_button_" + a.label + "_default";
        a = null
    };
    this._disableButton = function (f, e) {
        var a = this._engineGetWindowButton(f, e);
        if (!a) {
            return
        }
        a._isEnabled = false;
        a.className = "dhtmlx_wins_btns_button dhtmlx_button_" + f.btns[e].label + "_disabled";
        a = null
    };
    this._allowReszieGlob = function (a) {
        a._allowResizeGlobal = true;
        this._enableButton(a, "minmax1");
        this._enableButton(a, "minmax2")
    };
    this._denyResize = function (a) {
        a._allowResizeGlobal = false;
        this._disableButton(a, "minmax1");
        this._disableButton(a, "minmax2")
    };
    this._maximizeWindow = function (a) {
        var f = this.wins[a];
        if (f._allowResizeGlobal == false) {
            return
        }
        var e = f._isParked;
        if (e) {
            this._parkWindow(f.idd, true)
        }
        f.lastMaximizeX = f.x;
        f.lastMaximizeY = f.y;
        f.lastMaximizeW = f.w;
        f.lastMaximizeH = f.h;
        if (f.maxW != "auto" && f.maxW != "auto") {
            f.x = Math.round(f.x + (f.w - f.maxW) / 2);
            f.y = Math.round(f.y + (f.h - f.maxH) / 2);
            f._allowMove = true
        } else {
            f.x = 0;
            f.y = 0;
            f._allowMove = false
        }
        f._isMaximized = true;
        f._allowResize = false;
        f.w = (f.maxW == "auto" ? (this.vp == document.body ? "100%" : (this.vp.style.width != "" && String(this.vp.style.width).search("%") == -1 ? parseInt(this.vp.style.width) : this.vp.offsetWidth)) : f.maxW);
        f.h = (f.maxH == "auto" ? (this.vp == document.body ? "100%" : (this.vp.style.height != "" && String(this.vp.style.width).search("%") == -1 ? parseInt(this.vp.style.height) : this.vp.offsetHeight)) : f.maxH);
        this._hideButton(f, "minmax1");
        this._showButton(f, "minmax2");
        this._engineRedrawWindowPos(f);
        if (e) {
            this._parkWindow(f.idd, true)
        } else {
            this._engineRedrawWindowSize(f);
            f.updateNestedObjects()
        } if (f.checkEvent("onMaximize")) {
            f.callEvent("onMaximize", [f])
        } else {
            this.callEvent("onMaximize", [f])
        }
        f = null
    };
    this._restoreWindow = function (a) {
        var f = this.wins[a];
        if (f._allowResizeGlobal == false) {
            return
        }
        if (f.layout) {
            f.layout._defineWindowMinDimension(f)
        }
        var e = f._isParked;
        if (e) {
            this._parkWindow(f.idd, true)
        }
        if (f.maxW != "auto" && f.maxW != "auto") {
            f.x = Math.round(f.x + (f.w - f.lastMaximizeW) / 2);
            f.y = Math.round(f.y + (f.h - f.lastMaximizeH) / 2)
        } else {
            f.x = f.lastMaximizeX;
            f.y = f.lastMaximizeY
        }
        f.w = f.lastMaximizeW;
        f.h = f.lastMaximizeH;
        f._isMaximized = false;
        f._allowMove = f._allowMoveGlobal;
        f._allowResize = true;
        this._fixWindowDimensionInViewport(f);
        this._hideButton(f, "minmax2");
        this._showButton(f, "minmax1");
        this._engineRedrawWindowPos(f);
        if (e) {
            this._parkWindow(f.idd, true)
        } else {
            this._engineRedrawWindowSize(f);
            f.updateNestedObjects()
        } if (f.checkEvent("onMinimize")) {
            f.callEvent("onMinimize", [f])
        } else {
            this.callEvent("onMinimize", [f])
        }
        f = null
    };
    this._showButton = function (g, e, f) {
        var a = this._engineGetWindowButton(g, e);
        if (!a) {
            return
        }
        if ((!f && a._userHide) || a.isVisible === true) {
            return
        }
        a.isVisible = true;
        a.style.display = "";
        a.style.visibility = "visible";
        a._userHide = !(f == true);
        this._engineRedrawWindowTitle(g);
        a = null
    };
    this._hideButton = function (g, e, f) {
        var a = this._engineGetWindowButton(g, e);
        if (!a || (!f && a.isVisible === false)) {
            return
        }
        a.isVisible = false;
        a.style.display = "none";
        a.style.visibility = "hidden";
        a._userHide = (f == true);
        this._engineRedrawWindowTitle(g);
        a = null
    };
    this._showWindow = function (e) {
        e.style.display = "";
        if (e.checkEvent("onShow")) {
            e.callEvent("onShow", [e])
        } else {
            this.callEvent("onShow", [e])
        }
        var a = this._getActive();
        if (a == null) {
            this._bringOnTop(e);
            this._makeActive(e)
        } else {
            if (this._isWindowHidden(a)) {
                this._bringOnTop(e);
                this._makeActive(e)
            }
        } if (this.iframeMode && e.ifr) {
            e.ifr.style.display = ""
        }
    };
    this._hideWindow = function (e) {
        e.style.display = "none";
        if (e.checkEvent("onHide")) {
            e.callEvent("onHide", [e])
        } else {
            this.callEvent("onHide", [e])
        }
        var a = this.getTopmostWindow(true);
        if (a != null) {
            this._bringOnTop(a);
            this._makeActive(a)
        }
        if (this.iframeMode && e.ifr) {
            e.ifr.style.display = "none"
        }
    };
    this._isWindowHidden = function (e) {
        var a = (e.style.display == "none");
        return a
    };
    this._closeWindow = function (g) {
        var h = this.wins[g];
        if (this._focusFixIE) {
            this._focusFixIE.style.top = (this.vp == document.body ? 0 : getAbsoluteTop(this.vp)) + Number(h.y) + "px";
            this._focusFixIE.focus()
        }
        if (h.checkEvent("onClose")) {
            if (!h.callEvent("onClose", [h])) {
                return
            }
        } else {
            if (!this.callEvent("onClose", [h])) {
                return
            }
        }
        h = null;
        this._removeWindowGlobal(g);
        var f = {
            zi: 0
        };
        for (var e in this.wins) {
            if (this.wins[e].zi > f.zi) {
                f = this.wins[e]
            }
        }
        if (f != null) {
            this._makeActive(f)
        }
    };
    this._needHelp = function (a) {
        var e = this.wins[a];
        if (e.checkEvent("onHelp")) {
            e.callEvent("onHelp", [e])
        } else {
            this.callEvent("onHelp", [e])
        }
        e = null
    };
    this._setWindowIcon = function (f, e, a) {
        f.iconsPresent = true;
        f.icons[0] = this.imagePath + e;
        f.icons[1] = this.imagePath + a;
        this._engineUpdateWindowIcon(f, f.icons[f.isOnTop() ? 0 : 1])
    };
    this._getWindowIcon = function (a) {
        if (a.iconsPresent) {
            return new Array(a.icons[0], a.icons[1])
        } else {
            return new Array(null, null)
        }
    };
    this._clearWindowIcons = function (a) {
        a.iconsPresent = false;
        a.icons[0] = this.imagePath + this.pathPrefix + this.skin + "/active/icon_blank.gif";
        a.icons[1] = this.imagePath + this.pathPrefix + this.skin + "/inactive/icon_blank.gif";
        this._engineUpdateWindowIcon(a, a.icons[a.isOnTop() ? 0 : 1])
    };
    this._restoreWindowIcons = function (a) {
        a.iconsPresent = true;
        a.icons[0] = this.imagePath + this.pathPrefix + this.skin + "/active/icon_normal.gif";
        a.icons[1] = this.imagePath + this.pathPrefix + this.skin + "/inactive/icon_normal.gif";
        this._engineUpdateWindowIcon(a, a.icons[a.className == "dhtmlx_window_active" ? 0 : 1])
    };
    this._attachWindowContentTo = function (i, g, a, e) {
        var f = this._engineGetWindowContent(i).parentNode;
        f.parentNode.removeChild(f);
        i.hide();
        f.style.left = "0px";
        f.style.top = "0px";
        f.style.width = (a != null ? a : g.offsetWidth) + "px";
        f.style.height = (e != null ? e : g.offsetHeight) + "px";
        f.style.position = "relative";
        g.appendChild(f);
        this._engineGetWindowContent(i).style.width = f.style.width;
        this._engineGetWindowContent(i).style.height = f.style.height
    };
    this._setWindowToFullScreen = function (e, a) {
        if (a == true && !e._isFullScreened) {
            e._p1 = e.vs[e.av].dhxcont.nextSibling;
            e._p1.parentNode.removeChild(e.vs[e.av].dhxcont);
            e.hide();
            e._isFullScreened = true;
            e._FSoffsetHeight = e._offsetHeight;
            e._FSoffsetHeightSaved = e._offsetHeightSaved;
            e._FSoffsetLeft = e._offsetLeft;
            e._FSoffsetWidth = e._offsetWidth;
            e._offsetHeight = 0;
            e._offsetHeightSaved = 0;
            e._offsetLeft = 0;
            e._offsetWidth = 0;
            e.vs[e.av].dhxcont.style.position = "absolute";
            document.body.appendChild(e.vs[e.av].dhxcont);
            e.adjustContent(document.body, 0, 0, false, 0);
            e.updateNestedObjects()
        }
        if (a == false && e._isFullScreened) {
            e._p1.parentNode.insertBefore(e.vs[e.av].dhxcont, e._p1);
            e._p1 = null;
            e._isFullScreened = false;
            e._offsetHeight = e._FSoffsetHeight;
            e._offsetHeightSaved = e._FSoffsetHeightSaved;
            e._offsetLeft = e._FSoffsetLeft;
            e._offsetWidth = e._FSoffsetWidth;
            e._FSoffsetHeight = e._FSoffsetHeightSaved = e._FSoffsetLeft = e._FSoffsetWidth = null;
            e.show();
            e.setDimension(e.w, e.h);
            e.bringToTop()
        }
    };
    this._isWindowOnTop = function (e) {
        var a = (this.getTopmostWindow() == e);
        return a
    };
    this._bringOnBottom = function (f) {
        for (var e in this.wins) {
            if (this.wins[e].zi < f.zi) {
                this.wins[e].zi += this.zIndexStep;
                this.wins[e].style.zIndex = this.wins[e].zi
            }
        }
        f.zi = 50;
        f.style.zIndex = f.zi;
        this._makeActive(this.getTopmostWindow())
    };
    this._isWindowOnBottom = function (g) {
        var f = true;
        for (var e in this.wins) {
            if (this.wins[e] != g) {
                f = f && (this.wins[e].zi > g.zi)
            }
        }
        return f
    };
    this._stickWindow = function (a) {
        var e = this.wins[a];
        e._isSticked = true;
        this._hideButton(e, "stick");
        this._showButton(e, "sticked");
        this._bringOnTop(e);
        e = null
    };
    this._unstickWindow = function (a) {
        var e = this.wins[a];
        e._isSticked = false;
        this._hideButton(e, "sticked");
        this._showButton(e, "stick");
        this._bringOnTopAnyStickedWindows();
        e = null
    };
    this._addUserButton = function (e, h, g, f) {
        h = String(h).toLowerCase();
        var a = this._engineAddUserButton(e, h, g);
        a.title = f;
        a.isVisible = true;
        a._isEnabled = true;
        a.isPressed = false;
        a.label = h;
        e.btns[h] = a;
        e.btns[h].winId = e.idd;
        e.btns[h]._doOnClick = function () {};
        this._attachEventsOnButton(e.idd, h);
        a = null
    };
    this._removeUserButton = function (e, a) {
        this._removeButtonGlobal(e, a)
    };
    this._blockSwitcher = function (f) {
        for (var e in this.wins) {
            if (f == true) {
                this.wins[e].showCoverBlocker()
            } else {
                this.wins[e].hideCoverBlocker()
            }
        }
    };
    this.resizingWin = null;
    this.modalWin = null;
    this.resizingDirs = "none";
    if (_isIE) {
        this._focusFixIE = document.createElement("INPUT");
        this._focusFixIE.className = "dhx_windows_ieonclosefocusfix";
        this._focusFixIE.style.position = "absolute";
        this._focusFixIE.style.width = "1px";
        this._focusFixIE.style.height = "1px";
        this._focusFixIE.style.border = "none";
        this._focusFixIE.style.background = "none";
        this._focusFixIE.style.left = "-10px";
        this._focusFixIE.style.fontSize = "1px";
        document.body.appendChild(this._focusFixIE)
    }
    this._createViewport();
    this._doOnMouseUp = function () {
        if (c != null) {
            c._stopMove()
        }
    };
    this._doOnMoseMove = function (a) {
        a = a || event;
        if (c != null) {
            c._moveWindow(a)
        }
    };
    this._resizeTM = null;
    this._resizeTMTime = 200;
    this._lw = null;
    this._doOnResize = function () {
        if (c._lw != document.documentElement.clientHeight) {
            window.clearTimeout(c._resizeTM);
            c._resizeTM = window.setTimeout(function () {
                c._autoResizeViewport()
            }, c._resizeTMTime)
        }
        c._lw = document.documentElement.clientHeight
    };
    this._doOnUnload = function () {
        c.unload()
    };
    this._doOnSelectStart = function (a) {
        a = a || event;
        if (c.movingWin != null || c.resizingWin != null) {
            a.returnValue = false
        }
    };
    if (_isIE) {
        document.body.attachEvent("onselectstart", this._doOnSelectStart)
    }
    dhtmlxEvent(window, "resize", this._doOnResize);
    dhtmlxEvent(document.body, "unload", this._doOnUnload);
    if (this._isIPad) {
        document.addEventListener("touchmove", this._doOnMoseMove, false);
        document.addEventListener("touchend", this._doOnMouseUp, false)
    } else {
        dhtmlxEvent(document.body, "mouseup", this._doOnMouseUp);
        dhtmlxEvent(this.vp, "mousemove", this._doOnMoseMove);
        dhtmlxEvent(this.vp, "mouseup", this._doOnMouseUp)
    }
    this._setWindowModal = function (e, a) {
        if (a == true) {
            this._makeActive(e);
            this._bringOnTop(e);
            this.modalWin = e;
            e._isModal = true;
            this.modalCoverI.style.zIndex = e.zi - 2;
            this.modalCoverI.style.display = "";
            this.modalCoverD.style.zIndex = e.zi - 2;
            this.modalCoverD.style.display = ""
        } else {
            this.modalWin = null;
            e._isModal = false;
            this.modalCoverI.style.zIndex = 0;
            this.modalCoverI.style.display = "none";
            this.modalCoverD.style.zIndex = 0;
            this.modalCoverD.style.display = "none"
        }
    };
    this._bringOnTopAnyStickedWindows = function () {
        var g = new Array();
        for (var e in this.wins) {
            if (this.wins[e]._isSticked) {
                g[g.length] = this.wins[e]
            }
        }
        for (var f = 0; f < g.length; f++) {
            this._bringOnTop(g[f])
        }
        if (g.length == 0) {
            for (var e in this.wins) {
                if (this.wins[e].className == "dhtmlx_window_active") {
                    this._bringOnTop(this.wins[e])
                }
            }
        }
    };
    this.unload = function () {
        this._clearAll()
    };
    this._removeButtonGlobal = function (e, f) {
        if (!this.wins[e]) {
            return
        }
        if (!this.wins[e].btns[f]) {
            return
        }
        var a = this.wins[e].btns[f];
        a.title = null;
        a.isVisible = null;
        a._isEnabled = null;
        a.isPressed = null;
        a.label = null;
        a._doOnClick = null;
        a.detachAllEvents();
        a.attachEvent = null;
        a.callEvent = null;
        a.checkEvent = null;
        a.detachEvent = null;
        a.detachAllEvents = null;
        a.disable = null;
        a.enable = null;
        a.eventCatcher = null;
        a.hide = null;
        a.isEnabled = null;
        a.isHidden = null;
        a.show = null;
        a.onmousedown = null;
        a.onmouseout = null;
        a.onmouseover = null;
        a.onmouseup = null;
        a.ontouchstart = null;
        a.ontouchend = null;
        if (a.parentNode) {
            a.parentNode.removeChild(a)
        }
        a = null;
        this.wins[e].btns[f] = null;
        delete this.wins[e].btns[f]
    };
    this._removeWindowGlobal = function (g) {
        var h = this.wins[g];
        if (this.modalWin == h) {
            this._setWindowModal(h, false)
        }
        if (this.iframeMode && h.ifr) {
            h.ifr.parentNode.removeChild(h.ifr);
            h.ifr = null
        }
        var f = h.coverBlocker();
        f.onselectstart = null;
        f = null;
        this._engineDiableOnSelectInWindow(h, false);
        h._dhxContDestruct();
        this._engineGetWindowHeader(h).onmousedown = null;
        this._engineGetWindowHeader(h).ondblclick = null;
        this.movingWin = null;
        this.resizingWin = null;
        for (var e in h.btns) {
            this._removeButtonGlobal(h, e)
        }
        h.btns = null;
        h.detachAllEvents();
        h._adjustToContent = null;
        h._doOnAttachMenu = null;
        h._doOnAttachStatusBar = null;
        h._doOnAttachToolbar = null;
        h._doOnFrameMouseDown = null;
        h._doOnFrameContentLoaded = null;
        h._redraw = null;
        h.addUserButton = null;
        h.allowMove = null;
        h.allowPark = null;
        h.allowResize = null;
        h.attachEvent = null;
        h.bringToBottom = null;
        h.bringToTop = null;
        h.callEvent = null;
        h.center = null;
        h.centerOnScreen = null;
        h.checkEvent = null;
        h.clearIcon = null;
        h.close = null;
        h.denyMove = null;
        h.denyPark = null;
        h.denyResize = null;
        h.detachEvent = null;
        h.detachAllEvents = null;
        h.eventCatcher = null;
        h.getDimension = null;
        h.getIcon = null;
        h.getId = null;
        h.getMaxDimension = null;
        h.getMinDimension = null;
        h.getPosition = null;
        h.getText = null;
        h.hide = null;
        h.hideHeader = null;
        h.isHidden = null;
        h.isMaximized = null;
        h.isModal = null;
        h.isMovable = null;
        h.isOnBottom = null;
        h.isOnTop = null;
        h.isParkable = null;
        h.isParked = null;
        h.isResizable = null;
        h.isSticked = null;
        h.keepInViewport = null;
        h.maximize = null;
        h.minimize = null;
        h.park = null;
        h.progressOff = null;
        h.progressOn = null;
        h.removeUserButton = null;
        h.restoreIcon = null;
        h.setDimension = null;
        h.setIcon = null;
        h.setMaxDimension = null;
        h.setMinDimension = null;
        h.setModal = null;
        h.setPosition = null;
        h.setText = null;
        h.setToFullScreen = null;
        h.show = null;
        h.showHeader = null;
        h.stick = null;
        h.unstick = null;
        h.onmousemove = null;
        h.onmousedown = null;
        h.icons = null;
        h.button = null;
        h._dhxContDestruct = null;
        h.dhxContGlobal.obj = null;
        h.dhxContGlobal.setContent = null;
        h.dhxContGlobal.dhxcont = null;
        h.dhxContGlobal = null;
        if (h._frame) {
            while (h._frame.childNodes.length > 0) {
                h._frame.removeChild(h._frame.childNodes[0])
            }
            h._frame = null
        }
        this._parseNestedForEvents(h);
        h._content = null;
        h.innerHTML = "";
        h.parentNode.removeChild(h);
        h = null;
        this.wins[g] = null;
        delete this.wins[g]
    };
    this._removeEvents = function (a) {
        a.onmouseover = null;
        a.onmouseout = null;
        a.onmousemove = null;
        a.onclick = null;
        a.ondblclick = null;
        a.onmouseenter = null;
        a.onmouseleave = null;
        a.onmouseup = null;
        a.onmousewheel = null;
        a.onmousedown = null;
        a.onselectstart = null;
        a.onfocus = null;
        a.style.display = "";
        a = null
    };
    this._parseNestedForEvents = function (e) {
        this._removeEvents(e);
        for (var a = 0; a < e.childNodes.length; a++) {
            if (e.childNodes[a].tagName != null) {
                this._parseNestedForEvents(e.childNodes[a])
            }
        }
        e = null
    };
    this._clearAll = function () {
        this._clearDocumentEvents();
        for (var e in this.wins) {
            this._removeWindowGlobal(e)
        }
        this.wins = null;
        this._parseNestedForEvents(this._carcass);
        while (this._carcass.childNodes.length > 0) {
            this._carcass.removeChild(this._carcass.childNodes[0])
        }
        this._carcass.onselectstart = null;
        this._carcass.parentNode.removeChild(this._carcass);
        this._carcass = null;
        this._parseNestedForEvents(this._vpcover);
        this._vpcover.parentNode.removeChild(this._vpcover);
        this._vpcover = null;
        this._parseNestedForEvents(this.modalCoverD);
        this.modalCoverD.parentNode.removeChild(this.modalCoverD);
        this.modalCoverD = null;
        this._parseNestedForEvents(this.modalCoverI);
        this.modalCoverI.parentNode.removeChild(this.modalCoverI);
        this.modalCoverI = null;
        if (this.vp.autocreated == true) {
            this.vp.parentNode.removeChild(this.vp)
        }
        this.vp = null;
        for (var e in this.skinParams) {
            delete this.skinParams[e]
        }
        this.skinParams = null;
        this._effects = null;
        this._engineSkinParams = null;
        this._addDefaultButtons = null;
        this._addUserButton = null;
        this._allowParking = null;
        this._allowReszieGlob = null;
        this._attachEventsOnButton = null;
        this._attachWindowContentTo = null;
        this._autoResizeViewport = null;
        this._blockSwitcher = null;
        this._bringOnBottom = null;
        this._bringOnTop = null;
        this._bringOnTopAnyStickedWindows = null;
        this._centerWindow = null;
        this._clearAll = null;
        this._clearDocumentEvents = null;
        this._clearWindowIcons = null;
        this._closeWindow = null;
        this._createViewport = null;
        this._denyParking = null;
        this._denyResize = null;
        this._dhx_Engine = null;
        this._disableButton = null;
        this._doOnMoseMove = null;
        this._doOnMouseUp = null;
        this._doOnResize = null;
        this._doOnSelectStart = null;
        this._doOnUnload = null;
        this._doParkDown = null;
        this._doParkUp = null;
        this._enableButton = null;
        this._engineAddUserButton = null;
        this._engineAdjustWindowToContent = null;
        this._engineAllowWindowResize = null;
        this._engineCheckHeaderMouseDown = null;
        this._engineDiableOnSelectInWindow = null;
        this._engineDoOnWindowParkDown = null;
        this._engineDoOnWindowParkUp = null;
        this._engineFixWindowPosInViewport = null;
        this._engineGetWindowButton = null;
        this._engineGetWindowContent = null;
        this._engineGetWindowHeader = null;
        this._engineGetWindowHeaderState = null;
        this._engineGetWindowLabel = null;
        this._engineGetWindowParkedHeight = null;
        this._engineRedrawSkin = null;
        this._engineRedrawWindowPos = null;
        this._engineRedrawWindowSize = null;
        this._engineRedrawWindowTitle = null;
        this._engineSetWindowBody = null;
        this._engineSwitchWindowHeader = null;
        this._engineSwitchWindowProgress = null;
        this._engineUpdateWindowIcon = null;
        this._fixWindowDimensionInViewport = null;
        this._genStr = null;
        this._getActive = null;
        this._getTopZIndex = null;
        this._getWindowIcon = null;
        this._hideButton = null;
        this._hideWindow = null;
        this._isWindowHidden = null;
        this._isWindowOnBottom = null;
        this._isWindowOnTop = null;
        this._makeActive = null;
        this._maximizeWindow = null;
        this._moveWindow = null;
        this._needHelp = null;
        this._parkWindow = null;
        this._parseNestedForEvents = null;
        this._removeButtonGlobal = null;
        this._removeEvents = null;
        this._removeUserButton = null;
        this._removeWindowGlobal = null;
        this._restoreWindow = null;
        this._restoreWindowIcons = null;
        this._setWindowIcon = null;
        this._setWindowModal = null;
        this._setWindowToFullScreen = null;
        this._showButton = null;
        this._showWindow = null;
        this._stickWindow = null;
        this._stopMove = null;
        this._unstickWindow = null;
        this.attachEvent = null;
        this.attachViewportTo = null;
        this.callEvent = null;
        this.checkEvent = null;
        this.createWindow = null;
        this.detachEvent = null;
        this.enableAutoViewport = null;
        this.eventCatcher = null;
        this.findByText = null;
        this.forEachWindow = null;
        this.getBottommostWindow = null;
        this.getEffect = null;
        this.getTopmostWindow = null;
        this.isWindow = null;
        this.setEffect = null;
        this.setImagePath = null;
        this.setSkin = null;
        this.setViewport = null;
        this.unload = null;
        this.window = null;
        c = null
    };
    this._clearDocumentEvents = function () {
        if (_isIE) {
            window.detachEvent("onresize", this._doOnResize);
            document.body.detachEvent("onselectstart", this._doOnSelectStart);
            document.body.detachEvent("onmouseup", this._doOnMouseUp);
            document.body.detachEvent("onunload", this._doOnUnload);
            this.vp.detachEvent("onmousemove", this._doOnMoseMove);
            this.vp.detachEvent("onmouseup", this._doOnMouseUp)
        } else {
            window.removeEventListener("resize", this._doOnResize, false);
            document.body.removeEventListener("mouseup", this._doOnMouseUp, false);
            document.body.removeEventListener("unload", this._doOnUnload, false);
            this.vp.removeEventListener("mousemove", this._doOnMoseMove, false);
            this.vp.removeEventListener("mouseup", this._doOnMouseUp, false)
        }
    };
    this._genStr = function (a) {
        var e = "";
        var g = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (var f = 0; f < a; f++) {
            e += g.charAt(Math.round(Math.random() * (g.length - 1)))
        }
        return e
    };
    dhtmlxEventable(this);
    return this
}
dhtmlXWindows.prototype._dhx_Engine = function () {
    this._engineEnabled = true;
    this._engineName = "dhx";
    this._engineSkinParams = {
        dhx_blue: {
            hh: 21,
            lbw: 2,
            rbw: 2,
            lch: 2,
            lcw: 14,
            rch: 14,
            rcw: 14,
            bbh: 2,
            mnh: 23,
            tbh: 25,
            sbh: 20,
            noh_t: null,
            noh_h: null
        },
        dhx_black: {
            hh: 21,
            lbw: 2,
            rbw: 2,
            lch: 2,
            lcw: 14,
            rch: 14,
            rcw: 14,
            bbh: 2,
            mnh: 23,
            tbh: 25,
            sbh: 20,
            noh_t: null,
            noh_h: null
        },
        dhx_skyblue: {
            hh: 29,
            lbw: 2,
            rbw: 2,
            lch: 2,
            lcw: 14,
            rch: 14,
            rcw: 14,
            bbh: 2,
            mnh: 23,
            tbh: 25,
            sbh: 20,
            noh_t: 5,
            noh_h: -10
        },
        dhx_web: {
            hh: 27,
            lbw: 5,
            rbw: 5,
            lch: 5,
            lcw: 14,
            rch: 14,
            rcw: 14,
            bbh: 5,
            mnh: 23,
            tbh: 25,
            sbh: 20,
            noh_t: 5,
            noh_h: -10
        },
        dhx_terrace: {
            hh: 37,
            lbw: 5,
            rbw: 5,
            lch: 5,
            lcw: 14,
            rch: 14,
            rcw: 14,
            bbh: 5,
            mnh: 23,
            tbh: 25,
            sbh: 20,
            noh_t: 0,
            noh_h: -10
        }
    };
    this._isIE6 = false;
    if (_isIE) {
        this._isIE6 = (window.XMLHttpRequest == null ? true : false)
    }
    this._engineSetWindowBody = function (b) {
        b.innerHTML = "<div iswin='1' class='dhtmlx_wins_body_outer' style='position: relative;'>" + (this._isIE6 ? "<iframe src='javascript:false;' frameborder='0' class='dhtmlx_wins_ie6_cover_fix' onload='this.contentWindow.document.body.style.overflow=\"hidden\";'></iframe>" : "") + "<div class='dhtmlx_wins_icon'></div><div class='dhtmlx_wins_progress'></div><div class='dhtmlx_wins_title'>dhtmlxWindow</div><div class='dhtmlx_wins_btns'><div class='dhtmlx_wins_btns_button dhtmlx_button_sticked_default'></div><div class='dhtmlx_wins_btns_button dhtmlx_button_stick_default'></div><div class='dhtmlx_wins_btns_button dhtmlx_button_help_default'></div><div class='dhtmlx_wins_btns_button dhtmlx_button_park_default'></div><div class='dhtmlx_wins_btns_button dhtmlx_button_minmax2_default'></div><div class='dhtmlx_wins_btns_button dhtmlx_button_minmax1_default'></div><div class='dhtmlx_wins_btns_button dhtmlx_button_close_default'></div><div class='dhtmlx_wins_btns_button dhtmlx_button_dock_default'></div></div><div class='dhtmlx_wins_body_inner'></div><div winResT='yes' class='dhtmlx_wins_resizer_t' style='display:none;'></div><div winResL='yes' class='dhtmlx_wins_resizer_l'></div><div winResR='yes' class='dhtmlx_wins_resizer_r'></div><div winResB='yes' class='dhtmlx_wins_resizer_b'></div><div class='white_line'></div><div class='white_line2'></div></div>";
        b.dhxContGlobal = new dhtmlXContainer(b);
        if (this.skin == "dhx_skyblue") {
            b.dhxContGlobal.obj._offsetWidth = -10;
            b.dhxContGlobal.obj._offsetHeight = -5;
            b.dhxContGlobal.obj._offsetLeft = 5;
            b.dhxContGlobal.obj._offsetHeightSaved = b.dhxContGlobal.obj._offsetHeight
        }
        if (this.skin == "dhx_web") {
            b.dhxContGlobal.obj._offsetWidth = -10;
            b.dhxContGlobal.obj._offsetHeight = -5;
            b.dhxContGlobal.obj._offsetLeft = 5;
            b.dhxContGlobal.obj._offsetHeightSaved = b.dhxContGlobal.obj._offsetHeight
        }
        b.skin = this.skin;
        b.dhxContGlobal.setContent(b.childNodes[0].childNodes[(this._isIE6 ? 5 : 4)]);
        var a = b.coverBlocker();
        a.onselectstart = function (c) {
            c = c || event;
            c.returnValue = false;
            c.cancelBubble = true
        };
        a = null;
        if (this.iframeMode) {
            b.ifr = document.createElement("IFRAME");
            b.ifr.style.position = "absolute";
            b.ifr.style.left = b.style.left;
            b.ifr.style.top = b.style.top;
            b.ifr.style.width = b.style.width;
            b.ifr.style.height = b.style.height;
            b.ifr.style.zIndex = b.style.zIndex - 1;
            b.ifr.style.backgroundColor = "white";
            b.ifr.frameBorder = 0;
            b.ifr.setAttribute("src", "javascript:false;");
            b.parentNode.appendChild(b.ifr)
        }
    };
    this._engineDiableOnSelectInWindow = function (d, c) {
        var b = new Array();
        b[0] = d.childNodes[0].childNodes[(this._isIE6 ? 1 : 0)];
        b[1] = d.childNodes[0].childNodes[(this._isIE6 ? 2 : 1)];
        b[2] = d.childNodes[0].childNodes[(this._isIE6 ? 3 : 2)];
        b[3] = d.childNodes[0].childNodes[(this._isIE6 ? 4 : 3)];
        b[4] = d.childNodes[0].childNodes[(this._isIE6 ? 6 : 5)];
        b[5] = d.childNodes[0].childNodes[(this._isIE6 ? 7 : 6)];
        b[6] = d.childNodes[0].childNodes[(this._isIE6 ? 8 : 7)];
        b[7] = d.childNodes[0].childNodes[(this._isIE6 ? 9 : 8)];
        for (var a = 0; a < b.length; a++) {
            b[a].onselectstart = (c ? function (f) {
                f = f || event;
                f.returnValue = false;
                return false
            } : null);
            b[a] = null
        }
        b = null
    };
    this._engineGetWindowHeader = function (a) {
        a.childNodes[0].idd = a.idd;
        return a.childNodes[0]
    };
    this._engineRedrawWindowSize = function (d) {
        d.style.width = (String(d.w).search("%") == -1 ? d.w + "px" : d.w);
        d.style.height = (String(d.h).search("%") == -1 ? d.h + "px" : d.h);
        var a = d.childNodes[0];
        a.style.width = d.clientWidth + "px";
        a.style.height = d.clientHeight + "px";
        if (a.offsetWidth > d.clientWidth) {
            a.style.width = d.clientWidth * 2 - a.offsetWidth + "px"
        }
        if (a.offsetHeight > d.clientHeight) {
            var c = d.clientHeight * 2 - a.offsetHeight;
            if (c < 0) {
                c = 0
            }
            a.style.height = c + "px"
        }
        var b = (d._noHeader == true ? d._hdrSize : this._engineSkinParams[this.skin]["hh"]);
        if (this.iframeMode && d.ifr) {
            d.ifr.style.width = d.style.width;
            d.ifr.style.height = d.style.height
        }
        this._engineRedrawWindowTitle(d);
        d.adjustContent(a, b)
    };
    this._engineRedrawWindowPos = function (a) {
        if (a._isFullScreened) {
            return
        }
        a.style.left = a.x + "px";
        a.style.top = a.y + "px";
        if (this.iframeMode && a.ifr) {
            a.ifr.style.top = a.style.top;
            a.ifr.style.left = a.style.left
        }
    };
    this._engineFixWindowPosInViewport = function (b) {
        var a = (b._noHeader == true ? b._hdrSize : this._engineSkinParams[this.skin]["hh"]);
        if (b._keepInViewport) {
            if (b.x < 0) {
                b.x = 0
            }
            if (b.x + b.w > this.vp.offsetWidth) {
                b.x = this.vp.offsetWidth - b.w
            }
            if (b.y + b.h > this.vp.offsetHeight) {
                b.y = this.vp.offsetHeight - b.h
            }
            if (b.y < 0) {
                b.y = 0
            }
        } else {
            if (b.y + a > this.vp.offsetHeight) {
                b.y = this.vp.offsetHeight - a
            }
            if (b.y < 0) {
                b.y = 0
            }
            if (b.x + b.w - 10 < 0) {
                b.x = 10 - b.w
            }
            if (b.x > this.vp.offsetWidth - 10) {
                b.x = this.vp.offsetWidth - 10
            }
        }
    };
    this._engineCheckHeaderMouseDown = function (e, c) {
        if (this._isIPad) {
            var a = c.touches[0].clientX;
            var f = c.touches[0].clientY;
            var d = c.target || c.srcElement;
            if (d == e.childNodes[0] || d == e.childNodes[0].childNodes[0] || d == e.childNodes[0].childNodes[2] || d == e.childNodes[0].childNodes[3]) {
                return true
            }
            return false
        } else {
            var a = (_isIE || _isOpera ? c.offsetX : c.layerX);
            var f = (_isIE || _isOpera ? c.offsetY : c.layerY);
            var d = c.target || c.srcElement
        }
        var b = (e._noHeader == true ? e._hdrSize : this._engineSkinParams[this.skin]["hh"]);
        if (f <= b && (d == e.childNodes[0] || d == e.childNodes[0].childNodes[(this._isIE6 ? 1 : 0)] || d == e.childNodes[0].childNodes[(this._isIE6 ? 3 : 2)] || d == e.childNodes[0].childNodes[(this._isIE6 ? 4 : 3)])) {
            return true
        }
        return false
    };
    this._engineGetWindowContent = function (a) {
        alert("_engineGetWindowContent")
    };
    this._engineGetWindowButton = function (d, a) {
        a = String(a).toLowerCase();
        var b = null;
        var f = "dhtmlx_button_" + a + "_";
        for (var c = 0; c < d.childNodes[0].childNodes[(this._isIE6 ? 4 : 3)].childNodes.length; c++) {
            var e = d.childNodes[0].childNodes[(this._isIE6 ? 4 : 3)].childNodes[c];
            if (String(e.className).search(f) != -1) {
                b = e
            }
            e = null
        }
        return b
    };
    this._engineAddUserButton = function (e, a, d) {
        if (isNaN(d)) {
            d = 0
        }
        var c = document.createElement("DIV");
        c.className = "dhtmlx_wins_btns_button dhtmlx_button_" + a + "_default";
        var b = e.childNodes[0].childNodes[(this._isIE6 ? 4 : 3)];
        d = b.childNodes.length - d;
        if (d < 0) {
            d = 0
        }
        if (d >= b.childNodes.length) {
            b.appendChild(c)
        } else {
            b.insertBefore(c, b.childNodes[d])
        }
        this._engineRedrawWindowTitle(e);
        return c
    };
    this._engineGetWindowParkedHeight = function (a) {
        return this._engineSkinParams[this.skin]["hh"] + 1
    };
    this._engineDoOnWindowParkDown = function (a) {
        a.childNodes[0].childNodes[(this._isIE6 ? 6 : 5)].style.display = (a._noHeader == true ? "" : "none");
        a.childNodes[0].childNodes[(this._isIE6 ? 7 : 6)].style.display = "";
        a.childNodes[0].childNodes[(this._isIE6 ? 8 : 7)].style.display = "";
        a.childNodes[0].childNodes[(this._isIE6 ? 9 : 8)].style.display = ""
    };
    this._engineDoOnWindowParkUp = function (a) {
        a.childNodes[0].childNodes[(this._isIE6 ? 6 : 5)].style.display = "none";
        a.childNodes[0].childNodes[(this._isIE6 ? 7 : 6)].style.display = "none";
        a.childNodes[0].childNodes[(this._isIE6 ? 8 : 7)].style.display = "none";
        a.childNodes[0].childNodes[(this._isIE6 ? 9 : 8)].style.display = "none"
    };
    this._engineUpdateWindowIcon = function (b, a) {
        b.childNodes[0].childNodes[(this._isIE6 ? 1 : 0)].style.backgroundImage = "url('" + a + "')"
    };
    this._engineAllowWindowResize = function (f, e, d, b) {
        if (!e.getAttribute) {
            return
        }
        var a = this._engineSkinParams[this.skin];
        var c = (f._noHeader == true ? f._hdrSize : this._engineSkinParams[this.skin]["hh"]);
        if (e.getAttribute("winResL") != null) {
            if (e.getAttribute("winResL") == "yes") {
                if (b >= c) {
                    if (b >= f.h - a.lch) {
                        return "corner_left"
                    }
                    if (b <= a.lch && f._noHeader == true) {
                        return "corner_up_left"
                    }
                    return "border_left"
                }
            }
        }
        if (e.getAttribute("winResR") != null) {
            if (e.getAttribute("winResR") == "yes") {
                if (b >= c) {
                    if (b >= f.h - a.rch) {
                        return "corner_right"
                    }
                    if (b <= a.rch && f._noHeader == true) {
                        return "corner_up_right"
                    }
                    return "border_right"
                }
            }
        }
        if (e.getAttribute("winResT") != null) {
            if (e.getAttribute("winResT") == "yes" && f._noHeader == true) {
                if (d <= a.lcw) {
                    return "corner_up_left"
                }
                if (d >= f.w - a.rcw) {
                    return "corner_up_right"
                }
                return "border_top"
            }
        }
        if (e.getAttribute("winResB") != null) {
            if (e.getAttribute("winResB") == "yes") {
                if (d <= a.lcw) {
                    return "corner_left"
                }
                if (d >= f.w - a.rcw) {
                    return "corner_right"
                }
                return "border_bottom"
            }
        }
        return null
    };
    this._engineAdjustWindowToContent = function (d, a, c) {
        var e = a + d.w - d.vs[d.av].dhxcont.clientWidth;
        var b = c + d.h - d.vs[d.av].dhxcont.clientHeight;
        d.setDimension(e, b)
    };
    this._engineRedrawSkin = function () {
        this.vp.className = (this.vp == document.body && this.vp._css ? this.vp._css + " " : "") + "dhtmlx_winviewport dhtmlx_skin_" + this.skin + (this._r ? " dhx_wins_rtl" : "");
        var c = this._engineSkinParams[this.skin];
        for (var b in this.wins) {
            if (this.skin == "dhx_skyblue") {
                this.wins[b].dhxContGlobal.obj._offsetTop = (this.wins[b]._noHeader ? c.noh_t : null);
                this.wins[b].dhxContGlobal.obj._offsetWidth = -10;
                this.wins[b].dhxContGlobal.obj._offsetHeight = (this.wins[b]._noHeader ? c.noh_h : -5);
                this.wins[b].dhxContGlobal.obj._offsetLeft = 5;
                this.wins[b].dhxContGlobal.obj._offsetHeightSaved = -5
            } else {
                this.wins[b].dhxContGlobal.obj._offsetWidth = null;
                this.wins[b].dhxContGlobal.obj._offsetHeight = null;
                this.wins[b].dhxContGlobal.obj._offsetLeft = null;
                this.wins[b].dhxContGlobal.obj._offsetTop = null;
                this.wins[b].dhxContGlobal.obj._offsetHeightSaved = null
            }
            this.wins[b].skin = this.skin;
            this._restoreWindowIcons(this.wins[b]);
            this._engineRedrawWindowSize(this.wins[b])
        }
    };
    this._engineSwitchWindowProgress = function (b, a) {
        if (a == true) {
            b.childNodes[0].childNodes[(this._isIE6 ? 1 : 0)].style.display = "none";
            b.childNodes[0].childNodes[(this._isIE6 ? 2 : 1)].style.display = ""
        } else {
            b.childNodes[0].childNodes[(this._isIE6 ? 2 : 1)].style.display = "none";
            b.childNodes[0].childNodes[(this._isIE6 ? 1 : 0)].style.display = ""
        }
    };
    this._engineSwitchWindowHeader = function (c, b) {
        if (!c._noHeader) {
            c._noHeader = false
        }
        if (b != c._noHeader) {
            return
        }
        c._noHeader = (b == true ? false : true);
        c._hdrSize = 0;
        c.childNodes[0].childNodes[(this._isIE6 ? 5 : 4)].className = "dhtmlx_wins_body_inner" + (c._noHeader ? " dhtmlx_wins_no_header" : "");
        c.childNodes[0].childNodes[(this._isIE6 ? 6 : 5)].style.display = (c._noHeader ? "" : "none");
        c.childNodes[0].childNodes[(this._isIE6 ? 1 : 0)].style.display = (c._noHeader ? "none" : "");
        c.childNodes[0].childNodes[(this._isIE6 ? 3 : 2)].style.display = (c._noHeader ? "none" : "");
        c.childNodes[0].childNodes[(this._isIE6 ? 4 : 3)].style.display = (c._noHeader ? "none" : "");
        var a = this._engineSkinParams[this.skin];
        if (c._noHeader) {
            c.dhxContGlobal.obj._offsetHeightSaved = c.dhxContGlobal.obj._offsetHeight;
            c.dhxContGlobal.obj._offsetHeight = a.noh_h;
            c.dhxContGlobal.obj._offsetTop = a.noh_t
        } else {
            c.dhxContGlobal.obj._offsetHeight = c.dhxContGlobal.obj._offsetHeightSaved;
            c.dhxContGlobal.obj._offsetTop = null
        }
        this._engineRedrawWindowSize(c)
    };
    this._engineGetWindowHeaderState = function (a) {
        return (a._noHeader ? true : false)
    };
    this._engineGetWindowLabel = function (a) {
        return a.childNodes[0].childNodes[(this._isIE6 ? 3 : 2)]
    };
    this._engineRedrawWindowTitle = function (c) {
        if (c._noHeader !== true) {
            var b = c.childNodes[0].childNodes[(this._isIE6 ? 1 : 0)].offsetWidth;
            var a = c.childNodes[0].childNodes[(this._isIE6 ? 4 : 3)].offsetWidth;
            var d = c.offsetWidth - b - a - 24;
            if (d < 0) {
                d = "100%"
            } else {
                d += "px"
            }
            c.childNodes[0].childNodes[(this._isIE6 ? 3 : 2)].style.width = d
        }
    }
};
dhtmlXWindows.prototype.i18n = {
    dhxcontaler: "dhtmlxcontainer.js is missed on the page",
    noenginealert: "No dhtmlxWindows engine was found.",
    stick: "Stick",
    unstick: "Unstick",
    help: "Help",
    parkdown: "Park Down",
    parkup: "Park Up",
    maximize: "Maximize",
    restore: "Restore",
    close: "Close",
    dock: "Dock"
};
(function () {
    dhtmlx.extend_api("dhtmlXWindows", {
        _init: function (b) {
            return []
        }, _patch: function (b) {
            b.old_createWindow = b.createWindow;
            b.createWindow = function (e) {
                if (arguments.length > 1) {
                    return this.old_createWindow.apply(this, arguments)
                }
                var d = this.old_createWindow(e.id, (e.x || e.left), (e.y || e.top), e.width, e.height);
                d.allowMoveA = function (f) {
                    if (f) {
                        this.allowMove()
                    } else {
                        this.denyMove()
                    }
                };
                d.allowParkA = function (f) {
                    if (f) {
                        this.allowPark()
                    } else {
                        this.denyPark()
                    }
                };
                d.allowResizeA = function (f) {
                    if (f) {
                        this.allowResize()
                    } else {
                        this.denyResize()
                    }
                };
                for (var c in e) {
                    if (a[c]) {
                        d[a[c]](e[c])
                    } else {
                        if (c.indexOf("on") == 0) {
                            d.attachEvent(c, e[c])
                        }
                    }
                }
                return d
            }
        }, animation: "setEffect",
        image_path: "setImagePath",
        skin: "setSkin",
        viewport: "_viewport",
        wins: "_wins"
    }, {
        _viewport: function (b) {
            if (b.object) {
                this.enableAutoViewport(false);
                this.attachViewportTo(b.object)
            } else {
                this.enableAutoViewport(false);
                this.setViewport(b.left, b.top, b.width, b.height, b.parent)
            }
        }, _wins: function (b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                this.createWindow(d.id, d.left, d.top, d.width, d.height);
                if (d.text) {
                    this.window(d.id).setText(d.text)
                }
                if (d.keep_in_viewport) {
                    this.window(d.id).keepInViewport(true)
                }
                if (d.deny_resize) {
                    this.window(d.id).denyResize()
                }
                if (d.deny_park) {
                    this.window(d.id).denyPark()
                }
                if (d.deny_move) {
                    this.window(d.id).denyMove()
                }
            }
        }
    });
    var a = {
        move: "allowMoveA",
        park: "allowParkA",
        resize: "allowResizeA",
        center: "center",
        modal: "setModal",
        caption: "setText",
        header: "showHeader"
    }
})();

function dhtmlXContainer(i) {
    var g = this;
    this.obj = i;
    i = null;
    this.obj._padding = !0;
    this.dhxcont = null;
    this.st = document.createElement("DIV");
    this.st.style.position = "absolute";
    this.st.style.left = "-200px";
    this.st.style.top = "0px";
    this.st.style.width = "100px";
    this.st.style.height = "1px";
    this.st.style.visibility = "hidden";
    this.st.style.overflow = "hidden";
    document.body.insertBefore(this.st, document.body.childNodes[0]);
    this.obj._getSt = function () {
        return g.st
    };
    this.obj.dv = "def";
    this.obj.av = this.obj.dv;
    this.obj.cv = this.obj.av;
    this.obj.vs = {};
    this.obj.vs[this.obj.av] = {};
    this.obj.view = function (b) {
        if (!this.vs[b]) {
            this.vs[b] = {};
            this.vs[b].dhxcont = this.vs[this.dv].dhxcont;
            var a = document.createElement("DIV");
            a.style.position = "relative";
            a.style.left = "0px";
            a.style.width = "200px";
            a.style.height = "200px";
            a.style.overflow = "hidden";
            a.style.visibility = "";
            g.st.appendChild(a);
            this.vs[b].dhxcont.mainCont[b] = a;
            a = null
        }
        this.avt = this.av;
        this.av = b;
        return this
    };
    this.obj.setActive = function () {
        if (this.vs[this.av]) {
            this.cv = this.av, this.vs[this.avt].dhxcont == this.vs[this.avt].dhxcont.mainCont[this.avt].parentNode && (g.st.appendChild(this.vs[this.avt].dhxcont.mainCont[this.avt]), this.vs[this.avt].menu && g.st.appendChild(document.getElementById(this.vs[this.avt].menuId)), this.vs[this.avt].toolbar && g.st.appendChild(document.getElementById(this.vs[this.avt].toolbarId)), this.vs[this.avt].sb && g.st.appendChild(document.getElementById(this.vs[this.avt].sbId))), this.vs[this.av].dhxcont != this.vs[this.av].dhxcont.mainCont[this.av].parentNode && (this.vs[this.av].dhxcont.insertBefore(this.vs[this.av].dhxcont.mainCont[this.av], this.vs[this.av].dhxcont.childNodes[this.vs[this.av].dhxcont.childNodes.length - 1]), this.vs[this.av].menu && this.vs[this.av].dhxcont.insertBefore(document.getElementById(this.vs[this.av].menuId), this.vs[this.av].dhxcont.childNodes[0]), this.vs[this.av].toolbar && this.vs[this.av].dhxcont.insertBefore(document.getElementById(this.vs[this.av].toolbarId), this.vs[this.av].dhxcont.childNodes[this.vs[this.av].menu ? 1 : 0]), this.vs[this.av].sb && this.vs[this.av].dhxcont.insertBefore(document.getElementById(this.vs[this.av].sbId), this.vs[this.av].dhxcont.childNodes[this.vs[this.av].dhxcont.childNodes.length - 1])), this._doOnResize && this._doOnResize(), this._isWindow && this.updateNestedObjects(), this.avt = null
        }
    };
    this.obj._viewRestore = function () {
        var b = this.av;
        if (this.avt) {
            this.av = this.avt, this.avt = null
        }
        return b
    };
    this.setContent = function (b) {
        this.obj.vs[this.obj.av].dhxcont = b;
        this.obj._init();
        b = null
    };
    this.obj._init = function () {
        this.vs[this.av].dhxcont.innerHTML = "<div ida='dhxMainCont' style='position: relative; left: 0px; top: 0px; overflow: hidden;'></div><div class='dhxcont_content_blocker' style='display: none;'></div>";
        this.vs[this.av].dhxcont.mainCont = {};
        this.vs[this.av].dhxcont.mainCont[this.av] = this.vs[this.av].dhxcont.childNodes[0]
    };
    this.obj._genStr = function (b) {
        for (var a = "", c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", d = 0; d < b; d++) {
            a += c.charAt(Math.round(Math.random() * (c.length - 1)))
        }
        return a
    };
    this.obj.setMinContentSize = function (b, a) {
        this.vs[this.av]._minDataSizeW = b;
        this.vs[this.av]._minDataSizeH = a
    };
    this.obj._setPadding = function (b, a) {
        typeof b == "object" ? (this._offsetTop = b[0], this._offsetLeft = b[1], this._offsetWidth = b[2], this._offsetHeight = b[3], b = null) : (this._offsetLeft = this._offsetTop = b, this._offsetWidth = -b * 2, this._offsetHeight = -b * 2);
        this.vs[this.av].dhxcont.className = "dhxcont_global_content_area " + (a || "")
    };
    this.obj.moveContentTo = function (b) {
        for (var a in this.vs) {
            b.view(a).setActive();
            var c = null;
            this.vs[a].grid && (c = "grid");
            this.vs[a].tree && (c = "tree");
            this.vs[a].tabbar && (c = "tabbar");
            this.vs[a].folders && (c = "folders");
            this.vs[a].layout && (c = "layout");
            c != null && (b.view(a).attachObject(this.vs[a][c + "Id"], !1, !0, !1), b.vs[a][c] = this.vs[a][c], b.vs[a][c + "Id"] = this.vs[a][c + "Id"], b.vs[a][c + "Obj"] = this.vs[a][c + "Obj"], this.vs[a][c] = null, this.vs[a][c + "Id"] = null, this.vs[a][c + "Obj"] = null);
            if (this.vs[a]._frame) {
                b.vs[a]._frame = this.vs[a]._frame, this.vs[a]._frame = null
            }
            if (this.vs[a].menu != null) {
                if (b.cv == b.av) {
                    b.vs[b.av].dhxcont.insertBefore(document.getElementById(this.vs[a].menuId), b.vs[b.av].dhxcont.childNodes[0])
                } else {
                    var d = b._getSt();
                    d.appendChild(document.getElementById(this.vs[a].menuId));
                    d = null
                }
                b.vs[a].menu = this.vs[a].menu;
                b.vs[a].menuId = this.vs[a].menuId;
                b.vs[a].menuHeight = this.vs[a].menuHeight;
                this.vs[a].menu = null;
                this.vs[a].menuId = null;
                this.vs[a].menuHeight = null;
                this.cv == this.av && this._doOnAttachMenu && this._doOnAttachMenu("unload");
                b.cv == b.av && b._doOnAttachMenu && b._doOnAttachMenu("move")
            }
            if (this.vs[a].toolbar != null) {
                b.cv == b.av ? b.vs[b.av].dhxcont.insertBefore(document.getElementById(this.vs[a].toolbarId), b.vs[b.av].dhxcont.childNodes[b.vs[b.av].menu != null ? 1 : 0]) : (d = b._getSt(), d.appendChild(document.getElementById(this.vs[a].toolbarId)), d = null), b.vs[a].toolbar = this.vs[a].toolbar, b.vs[a].toolbarId = this.vs[a].toolbarId, b.vs[a].toolbarHeight = this.vs[a].toolbarHeight, this.vs[a].toolbar = null, this.vs[a].toolbarId = null, this.vs[a].toolbarHeight = null, this.cv == this.av && this._doOnAttachToolbar && this._doOnAttachToolbar("unload"), b.cv == b.av && b._doOnAttachToolbar && b._doOnAttachToolbar("move")
            }
            if (this.vs[a].sb != null) {
                if (b.cv == b.av) {
                    b.vs[b.av].dhxcont.insertBefore(document.getElementById(this.vs[a].sbId), b.vs[b.av].dhxcont.childNodes[b.vs[b.av].dhxcont.childNodes.length - 1])
                } else {
                    return d = b._getSt(), d.appendChild(document.getElementById(this.vs[a].sbId)), d
                }
                b.vs[a].sb = this.vs[a].sb;
                b.vs[a].sbId = this.vs[a].sbId;
                b.vs[a].sbHeight = this.vs[a].sbHeight;
                this.vs[a].sb = null;
                this.vs[a].sbId = null;
                this.vs[a].sbHeight = null;
                this.cv == this.av && this._doOnAttachStatusBar && this._doOnAttachStatusBar("unload");
                b.cv == b.av && b._doOnAttachStatusBar && b._doOnAttachStatusBar("move")
            }
            for (var e = this.vs[a].dhxcont.mainCont[a], f = b.vs[a].dhxcont.mainCont[a]; e.childNodes.length > 0;) {
                f.appendChild(e.childNodes[0])
            }
        }
        b.view(this.av).setActive();
        b = null
    };
    this.obj.adjustContent = function (b, a, c, d, e) {
        var f = this.vs[this.av].dhxcont,
            h = f.mainCont[this.av];
        f.style.left = (this._offsetLeft || 0) + "px";
        f.style.top = (this._offsetTop || 0) + a + "px";
        var g = b.clientWidth + (this._offsetWidth || 0);
        if (d !== !0) {
            f.style.width = Math.max(0, g) + "px"
        }
        if (d !== !0 && f.offsetWidth > g) {
            f.style.width = Math.max(0, g * 2 - f.offsetWidth) + "px"
        }
        var k = b.clientHeight + (this._offsetHeight || 0);
        f.style.height = Math.max(0, k - a) + (c != null ? c : 0) + "px";
        if (f.offsetHeight > k - a) {
            f.style.height = Math.max(0, (k - a) * 2 - f.offsetHeight) + "px"
        }
        if (e && !isNaN(e)) {
            f.style.height = Math.max(0, parseInt(f.style.height) - e) + "px"
        }
        if (this.vs[this.av]._minDataSizeH != null && parseInt(f.style.height) < this.vs[this.av]._minDataSizeH) {
            f.style.height = this.vs[this.av]._minDataSizeH + "px"
        }
        if (this.vs[this.av]._minDataSizeW != null && parseInt(f.style.width) < this.vs[this.av]._minDataSizeW) {
            f.style.width = this.vs[this.av]._minDataSizeW + "px"
        }
        if (d !== !0 && (h.style.width = f.clientWidth + "px", h.offsetWidth > f.clientWidth)) {
            h.style.width = Math.max(0, f.clientWidth * 2 - h.offsetWidth) + "px"
        }
        var i = this.vs[this.av].menu != null ? !this.vs[this.av].menuHidden ? this.vs[this.av].menuHeight : 0 : 0,
            j = this.vs[this.av].toolbar != null ? !this.vs[this.av].toolbarHidden ? this.vs[this.av].toolbarHeight : 0 : 0,
            l = this.vs[this.av].sb != null ? !this.vs[this.av].sbHidden ? this.vs[this.av].sbHeight : 0 : 0;
        h.style.height = f.clientHeight + "px";
        if (h.offsetHeight > f.clientHeight) {
            h.style.height = Math.max(0, f.clientHeight * 2 - h.offsetHeight) + "px"
        }
        h.style.height = Math.max(0, parseInt(h.style.height) - i - j - l) + "px";
        b = f = h = null
    };
    this.obj.coverBlocker = function () {
        return this.vs[this.av].dhxcont.childNodes[this.vs[this.av].dhxcont.childNodes.length - 1]
    };
    this.obj.showCoverBlocker = function () {
        var b = this.coverBlocker();
        b.style.display = "";
        b = null
    };
    this.obj.hideCoverBlocker = function () {
        var b = this.coverBlocker();
        b.style.display = "none";
        b = null
    };
    this.obj.updateNestedObjects = function (b) {
        if (this.skin == "dhx_terrace") {
            var a = this.vs[this.av].menu != null || this.vs[this.av].toolbar != null;
            if (this.vs[this.av].grid) {
                var c = a || this._isWindow ? 14 : 0,
                    d = this._isWindow ? 14 : 0,
                    e = this._isWindow ? 14 : 0;
                if (b) {
                    if (!this._isWindow) {
                        this.vs[this.av].grid.entBox.style.border = "0px solid white", this.vs[this.av].grid.skin_h_correction = -2
                    }
                    this.vs[this.av].grid.dontSetSizes = !0;
                    this.vs[this.av].gridObj.style.position = "absolute"
                }
                this.vs[this.av].gridObj.style.top = c + "px";
                this.vs[this.av].gridObj.style.height = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.height) - c - d + "px";
                this.vs[this.av].gridObj.style.left = e + "px";
                this.vs[this.av].gridObj.style.width = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.width) - e * 2 + "px";
                this.vs[this.av].grid.setSizes()
            }
            if (this.vs[this.av].tree) {
                c = a || this._isWindow ? 14 : 0;
                d = this._isWindow ? 14 : 0;
                e = this._isWindow ? 14 : 0;
                if (b) {
                    this.vs[this.av].treeObj.style.position = "absolute"
                }
                this.vs[this.av].treeObj.style.top = c + "px";
                this.vs[this.av].treeObj.style.height = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.height) - c - d + "px";
                this.vs[this.av].treeObj.style.left = e + "px";
                this.vs[this.av].treeObj.style.width = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.width) - e * 2 + "px"
            }
            if (this.vs[this.av].form) {
                c = a || this._isWindow ? 14 : 0;
                d = this._isWindow ? 14 : 0;
                e = this._isWindow ? 14 : 0;
                if (b) {
                    this.vs[this.av].formObj.style.position = "absolute"
                }
                this.vs[this.av].formObj.style.top = c + "px";
                this.vs[this.av].formObj.style.height = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.height) - c - d + "px";
                this.vs[this.av].formObj.style.left = e + "px";
                this.vs[this.av].formObj.style.width = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.width) - e * 2 + "px";
                this.vs[this.av].form.setSizes()
            }
            if (this.vs[this.av].layout) {
                b && !this._isWindow && !this._isCell && this.vs[this.av].layout._hideBorders(), c = this._isCell && this._noHeader && !a ? 0 : 14, d = this._isCell && this._noHeader ? 0 : 14, e = this._isCell && this._noHeader ? 0 : 14, this.vs[this.av].layoutObj.style.top = c + "px", this.vs[this.av].layoutObj.style.height = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.height) - c - d + "px", this.vs[this.av].layoutObj.style.left = e + "px", this.vs[this.av].layoutObj.style.width = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.width) - e * 2 + "px", this.vs[this.av].layout.setSizes()
            }
            if (this.vs[this.av].accordion) {
                if (b) {
                    this.vs[this.av].accordion._hideBorders = !0
                }
                c = this._isCell && this._noHeader && !a ? 0 : 14;
                d = this._isCell && this._noHeader ? 0 : 14;
                e = this._isCell && this._noHeader ? 0 : 14;
                this.vs[this.av].accordionObj.style.top = c + "px";
                this.vs[this.av].accordionObj.style.height = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.height) - c - d + "px";
                this.vs[this.av].accordionObj.style.left = e + "px";
                this.vs[this.av].accordionObj.style.width = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.width) - e * 2 + "px";
                this.vs[this.av].accordion.setSizes()
            }
            if (this.vs[this.av].tabbar != null) {
                c = !a && this._isCell && this._noHeader ? 0 : 14, d = this._isCell && this._noHeader ? c : 28, e = this._isCell && this._noHeader ? 0 : 14, this.vs[this.av].tabbarObj.style.top = c + "px", this.vs[this.av].tabbarObj.style.height = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.height) - d + "px", this.vs[this.av].tabbarObj.style.left = e + "px", this.vs[this.av].tabbarObj.style.width = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.width) - e * 2 + "px", this.vs[this.av].tabbar.adjustOuterSize()
            }
            if (this.vs[this.av].editor) {
                e = c = 14, this.vs[this.av].editorObj.style.top = c + "px", this.vs[this.av].editorObj.style.height = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.height) - c * 2 + "px", this.vs[this.av].editorObj.style.left = e + "px", this.vs[this.av].editorObj.style.width = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.width) - e * 2 + "px", _isIE || this.vs[this.av].editor._prepareContent(!0), this.vs[this.av].editor.setSizes()
            }
            this.vs[this.av].sched && this.vs[this.av].sched.setSizes();
            this.vs[this.av].dockedCell && this.vs[this.av].dockedCell.updateNestedObjects()
        } else {
            this.vs[this.av].grid && this.vs[this.av].grid.setSizes();
            this.vs[this.av].sched && this.vs[this.av].sched.setSizes();
            this.vs[this.av].tabbar && this.vs[this.av].tabbar.adjustOuterSize();
            this.vs[this.av].folders && this.vs[this.av].folders.setSizes();
            this.vs[this.av].editor && (_isIE || this.vs[this.av].editor._prepareContent(!0), this.vs[this.av].editor.setSizes());
            if (this.vs[this.av].layout) {
                (this._isAcc || this._isTabbarCell) && this.skin == "dhx_skyblue" ? (this.vs[this.av].layoutObj.style.width = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.width) + 2 + "px", this.vs[this.av].layoutObj.style.height = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.height) + 2 + "px") : (this.vs[this.av].layoutObj.style.width = this.vs[this.av].dhxcont.mainCont[this.av].style.width, this.vs[this.av].layoutObj.style.height = this.vs[this.av].dhxcont.mainCont[this.av].style.height), this.vs[this.av].layout.setSizes()
            }
            if (this.vs[this.av].accordion != null) {
                this.skin == "dhx_web" ? (this.vs[this.av].accordionObj.style.width = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.width) + "px", this.vs[this.av].accordionObj.style.height = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.height) + "px") : (this.vs[this.av].accordionObj.style.width = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.width) + 2 + "px", this.vs[this.av].accordionObj.style.height = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.height) + 2 + "px"), this.vs[this.av].accordion.setSizes()
            }
            this.vs[this.av].dockedCell && this.vs[this.av].dockedCell.updateNestedObjects();
            this.vs[this.av].form && this.vs[this.av].form.setSizes();
            this.vs[this.av].carousel && this.vs[this.av].carousel.setSizes()
        }
    };
    this.obj.attachStatusBar = function () {
        if (!this.vs[this.av].sb) {
            var b = document.createElement("DIV");
            b.className = this._isCell ? "dhxcont_sb_container_layoutcell" : "dhxcont_sb_container";
            b.id = "sbobj_" + this._genStr(12);
            b.innerHTML = "<div class='dhxcont_statusbar'></div>";
            this.cv == this.av ? this.vs[this.av].dhxcont.insertBefore(b, this.vs[this.av].dhxcont.childNodes[this.vs[this.av].dhxcont.childNodes.length - 1]) : g.st.appendChild(b);
            b.setText = function (a) {
                this.childNodes[0].innerHTML = a
            };
            b.getText = function () {
                return this.childNodes[0].innerHTML
            };
            b.onselectstart = function (a) {
                a = a || event;
                return a.returnValue = !1
            };
            this.vs[this.av].sb = b;
            this.vs[this.av].sbHeight = this.skin == "dhx_web" ? 41 : this.skin == "dhx_skyblue" ? 23 : b.offsetHeight;
            this.vs[this.av].sbId = b.id;
            this._doOnAttachStatusBar && this._doOnAttachStatusBar("init");
            this.adjust();
            return this.vs[this._viewRestore()].sb
        }
    };
    this.obj.detachStatusBar = function (b) {
        if (this.vs[this.av].sb) {
            this.vs[this.av].sb.setText = null, this.vs[this.av].sb.getText = null, this.vs[this.av].sb.onselectstart = null, this.vs[this.av].sb.parentNode.removeChild(this.vs[this.av].sb), this.vs[this.av].sb = null, this.vs[this.av].sbHeight = null, this.vs[this.av].sbId = null, this._viewRestore(), this._doOnAttachStatusBar && !b && this._doOnAttachStatusBar("unload")
        }
    };
    this.obj.getFrame = function () {
        return this.getView()._frame
    };
    this.obj.getView = function (b) {
        return this.vs[b || this.av]
    };
    this.obj.attachMenu = function (b) {
        if (!this.vs[this.av].menu) {
            var a = document.createElement("DIV");
            a.style.position = "relative";
            a.style.overflow = "hidden";
            a.id = "dhxmenu_" + this._genStr(12);
            this.cv == this.av ? this.vs[this.av].dhxcont.insertBefore(a, this.vs[this.av].dhxcont.childNodes[0]) : g.st.appendChild(a);
            typeof b != "object" ? this.vs[this.av].menu = new dhtmlXMenuObject(a.id, b || this.skin) : (b.parent = a.id, this.vs[this.av].menu = new dhtmlXMenuObject(b));
            this.vs[this.av].menuHeight = this.skin == "dhx_web" ? 29 : a.offsetHeight;
            this.vs[this.av].menuId = a.id;
            this._doOnAttachMenu && this._doOnAttachMenu("init");
            this.adjust();
            return this.vs[this._viewRestore()].menu
        }
    };
    this.obj.detachMenu = function (b) {
        if (this.vs[this.av].menu) {
            var a = document.getElementById(this.vs[this.av].menuId);
            this.vs[this.av].menu.unload();
            this.vs[this.av].menu = null;
            this.vs[this.av].menuId = null;
            this.vs[this.av].menuHeight = null;
            a && a.parentNode.removeChild(a);
            a = null;
            this._viewRestore();
            this._doOnAttachMenu && !b && this._doOnAttachMenu("unload")
        }
    };
    this.obj.attachToolbar = function (b) {
        if (!this.vs[this.av].toolbar) {
            var a = document.createElement("DIV");
            a.style.position = "relative";
            a.style.overflow = "hidden";
            a.id = "dhxtoolbar_" + this._genStr(12);
            this.cv == this.av ? this.vs[this.av].dhxcont.insertBefore(a, this.vs[this.av].dhxcont.childNodes[this.vs[this.av].menu != null ? 1 : 0]) : g.st.appendChild(a);
            typeof b != "object" ? this.vs[this.av].toolbar = new dhtmlXToolbarObject(a.id, b || this.skin) : (b.parent = a.id, this.vs[this.av].toolbar = new dhtmlXToolbarObject(b));
            this.vs[this.av].toolbarHeight = a.offsetHeight;
            this.vs[this.av].toolbarId = a.id;
            this._doOnAttachToolbar && this._doOnAttachToolbar("init");
            this.adjust();
            var c = this;
            this.vs[this.av].toolbar.attachEvent("_onIconSizeChange", function () {
                c.vs[c.av].toolbarHeight = this.cont.offsetHeight;
                c.vs[c.av].toolbarId = this.cont.id;
                c.adjust();
                c._doOnAttachToolbar && c._doOnAttachToolbar("iconSizeChange")
            });
            this.skin != "dhx_terrace" && this.vs[this.av].toolbar.callEvent("_onIconSizeChange", []);
            return this.vs[this._viewRestore()].toolbar
        }
    };
    this.obj.detachToolbar = function (b) {
        if (this.vs[this.av].toolbar) {
            var a = document.getElementById(this.vs[this.av].toolbarId);
            this.vs[this.av].toolbar.unload();
            this.vs[this.av].toolbar = null;
            this.vs[this.av].toolbarId = null;
            this.vs[this.av].toolbarHeight = null;
            a && a.parentNode.removeChild(a);
            a = null;
            this._viewRestore();
            this._doOnAttachToolbar && !b && this._doOnAttachToolbar("unload")
        }
    };
    this.obj.attachGrid = function () {
        if (this._isWindow && this.skin == "dhx_skyblue") {
            this.vs[this.av].dhxcont.mainCont[this.av].style.border = "#a4bed4 1px solid", this._redraw()
        }
        var b = document.createElement("DIV");
        b.id = "dhxGridObj_" + this._genStr(12);
        b.style.width = "100%";
        b.style.height = "100%";
        b.cmp = "grid";
        document.body.appendChild(b);
        this.attachObject(b.id, !1, !0, !1);
        this.vs[this.av].grid = new dhtmlXGridObject(b.id);
        this.vs[this.av].grid.setSkin(this.skin);
        if (this.skin == "dhx_skyblue" || this.skin == "dhx_black" || this.skin == "dhx_blue") {
            this.vs[this.av].grid.entBox.style.border = "0px solid white", this.vs[this.av].grid._sizeFix = 2
        }
        this.vs[this.av].gridId = b.id;
        this.vs[this.av].gridObj = b;
        this.skin == "dhx_terrace" && (this.adjust(), this.updateNestedObjects(!0));
        return this.vs[this._viewRestore()].grid
    };
    this.obj.attachScheduler = function (b, a, c, d) {
        var d = d || window.scheduler,
            e = 0;
        c && (h = document.getElementById(c)) && (e = 1);
        if (!e) {
            var f = c || '<div class="dhx_cal_tab" name="day_tab" style="right:204px;"></div><div class="dhx_cal_tab" name="week_tab" style="right:140px;"></div><div class="dhx_cal_tab" name="month_tab" style="right:76px;"></div>',
                h = document.createElement("DIV");
            h.id = "dhxSchedObj_" + this._genStr(12);
            h.innerHTML = '<div id="' + h.id + '" class="dhx_cal_container" style="width:100%; height:100%;"><div class="dhx_cal_navline"><div class="dhx_cal_prev_button">&nbsp;</div><div class="dhx_cal_next_button">&nbsp;</div><div class="dhx_cal_today_button"></div><div class="dhx_cal_date"></div>' + f + '</div><div class="dhx_cal_header"></div><div class="dhx_cal_data"></div></div>';
            document.body.appendChild(h.firstChild)
        }
        this.attachObject(h.id, !1, !0, !1);
        this.vs[this.av].sched = d;
        this.vs[this.av].schedId = h.id;
        d.setSizes = d.update_view;
        d.destructor = function () {};
        d.init(h.id, b, a);
        return this.vs[this._viewRestore()].sched
    };
    this.obj.attachTree = function (b) {
        if (this._isWindow && this.skin == "dhx_skyblue") {
            this.vs[this.av].dhxcont.mainCont[this.av].style.border = "#a4bed4 1px solid", this._redraw()
        }
        var a = document.createElement("DIV");
        a.id = "dhxTreeObj_" + this._genStr(12);
        a.style.width = "100%";
        a.style.height = "100%";
        a.cmp = "tree";
        document.body.appendChild(a);
        this.attachObject(a.id, !1, !0, !1);
        this.vs[this.av].tree = new dhtmlXTreeObject(a.id, "100%", "100%", b || 0);
        this.vs[this.av].tree.setSkin(this.skin);
        this.vs[this.av].tree.allTree.childNodes[0].style.marginTop = "2px";
        this.vs[this.av].tree.allTree.childNodes[0].style.marginBottom = "2px";
        this.vs[this.av].treeId = a.id;
        this.vs[this.av].treeObj = a;
        this.skin == "dhx_terrace" && (this.adjust(), this.updateNestedObjects(!0));
        return this.vs[this._viewRestore()].tree
    };
    this.obj.attachTabbar = function (b) {
        if (this._isWindow && this.skin == "dhx_skyblue") {
            this.vs[this.av].dhxcont.style.border = "none", this.setDimension(this.w, this.h)
        }
        var a = document.createElement("DIV");
        a.id = "dhxTabbarObj_" + this._genStr(12);
        a.style.width = "100%";
        a.style.height = "100%";
        a.style.overflow = "hidden";
        a.cmp = "tabbar";
        if (!this._isWindow) {
            a._hideBorders = !0
        }
        document.body.appendChild(a);
        this.attachObject(a.id, !1, !0, !1);
        if (this._isCell) {
            this.hideHeader(), this._padding = a._hideBorders = !1
        }
        this.vs[this.av].tabbar = new dhtmlXTabBar(a.id, b || "top", this.skin == "dhx_terrace" ? null : 20);
        if (!this._isWindow && this.skin != "dhx_terrace") {
            this.vs[this.av].tabbar._s.expand = !0
        }
        this.vs[this.av].tabbar.setSkin(this.skin);
        this.vs[this.av].tabbar.adjustOuterSize();
        this.vs[this.av].tabbarId = a.id;
        this.vs[this.av].tabbarObj = a;
        this.skin == "dhx_terrace" && (this.adjust(), this.updateNestedObjects(!0));
        return this.vs[this._viewRestore()].tabbar
    };
    this.obj.attachFolders = function () {
        if (this._isWindow && this.skin == "dhx_skyblue") {
            this.vs[this.av].dhxcont.mainCont[this.av].style.border = "#a4bed4 1px solid", this._redraw()
        }
        var b = document.createElement("DIV");
        b.id = "dhxFoldersObj_" + this._genStr(12);
        b.style.width = "100%";
        b.style.height = "100%";
        b.style.overflow = "hidden";
        b.cmp = "folders";
        document.body.appendChild(b);
        this.attachObject(b.id, !1, !0, !1);
        this.vs[this.av].folders = new dhtmlxFolders(b.id);
        this.vs[this.av].folders.setSizes();
        this.vs[this.av].foldersId = b.id;
        this.vs[this.av].foldersObj = b;
        return this.vs[this._viewRestore()].folders
    };
    this.obj.attachAccordion = function () {
        if (this._isWindow && this.skin == "dhx_skyblue") {
            this.vs[this.av].dhxcont.mainCont[this.av].style.border = "#a4bed4 1px solid", this._redraw()
        }
        var b = document.createElement("DIV");
        b.id = "dhxAccordionObj_" + this._genStr(12);
        this._padding = !0;
        if (this.skin == "dhx_web") {
            b.style.left = "0px", b.style.top = "0px", b.style.width = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.width) + "px", b.style.height = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.height) + "px"
        } else {
            if (this.skin != "dhx_terrace") {
                b.style.left = "-1px", b.style.top = "-1px", b.style.width = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.width) + 2 + "px", b.style.height = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.height) + 2 + "px"
            }
        }
        b.style.position = "relative";
        b.cmp = "accordion";
        document.body.appendChild(b);
        this.attachObject(b.id, !1, !0, !1);
        this.vs[this.av].accordion = new dhtmlXAccordion(b.id, this.skin);
        this.vs[this.av].accordion.setSizes();
        this.vs[this.av].accordionId = b.id;
        this.vs[this.av].accordionObj = b;
        this.skin == "dhx_terrace" && (this.adjust(), this.updateNestedObjects(!0));
        return this.vs[this._viewRestore()].accordion
    };
    this.obj.attachLayout = function (b, a) {
        if (this._isCell && this.skin == "dhx_skyblue") {
            this.hideHeader(), this.vs[this.av].dhxcont.style.border = "0px solid white", this.adjustContent(this.childNodes[0], 0)
        }
        this._isCell && this.skin == "dhx_web" && this.hideHeader();
        this._padding = !0;
        var c = document.createElement("DIV");
        c.id = "dhxLayoutObj_" + this._genStr(12);
        c.style.overflow = "hidden";
        c.style.position = "absolute";
        c.style.left = "0px";
        c.style.top = "0px";
        c.style.width = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.width) + "px";
        c.style.height = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.height) + "px";
        if ((this._isTabbarCell || this._isAcc) && this.skin == "dhx_skyblue") {
            c.style.left = "-1px", c.style.top = "-1px", c.style.width = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.width) + 2 + "px", c.style.height = parseInt(this.vs[this.av].dhxcont.mainCont[this.av].style.height) + 2 + "px"
        }
        c.dhxContExists = !0;
        c.cmp = "layout";
        document.body.appendChild(c);
        this.attachObject(c.id, !1, !0, !1);
        this.vs[this.av].layout = new dhtmlXLayoutObject(c, b, a || this.skin);
        this._isWindow && this.attachEvent("_onBeforeTryResize", this.vs[this.av].layout._defineWindowMinDimension);
        this.vs[this.av].layoutId = c.id;
        this.vs[this.av].layoutObj = c;
        if (this.skin == "dhx_terrace") {
            if (this._isCell) {
                this.style.backgroundColor = "transparent", this.vs[this.av].dhxcont.style.backgroundColor = "transparent", this.hideHeader()
            }
            this.adjust();
            this.updateNestedObjects(!0)
        }
        return this.vs[this._viewRestore()].layout
    };
    this.obj.attachEditor = function (b) {
        if (this._isWindow && this.skin == "dhx_skyblue") {
            this.vs[this.av].dhxcont.mainCont[this.av].style.border = "#a4bed4 1px solid", this._redraw()
        }
        var a = document.createElement("DIV");
        a.id = "dhxEditorObj_" + this._genStr(12);
        a.style.position = "relative";
        a.style.display = "none";
        a.style.overflow = "hidden";
        a.style.width = "100%";
        a.style.height = "100%";
        a.cmp = "editor";
        document.body.appendChild(a);
        if (this.skin == "dhx_terrace") {
            a._attached = !0
        }
        this.attachObject(a.id, !1, !0, !1);
        this.vs[this.av].editor = new dhtmlXEditor(a.id, b || this.skin);
        this.vs[this.av].editorId = a.id;
        this.vs[this.av].editorObj = a;
        this.skin == "dhx_terrace" && (this.adjust(), this.updateNestedObjects(!0));
        return this.vs[this._viewRestore()].editor
    };
    this.obj.attachMap = function (b) {
        var a = document.createElement("DIV");
        a.id = "GMapsObj_" + this._genStr(12);
        a.style.position = "relative";
        a.style.display = "none";
        a.style.overflow = "hidden";
        a.style.width = "100%";
        a.style.height = "100%";
        a.cmp = "gmaps";
        document.body.appendChild(a);
        this.attachObject(a.id, !1, !0, !0);
        b || (b = {
            center: new google.maps.LatLng(40.719837, -73.992348),
            zoom: 11,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        this.vs[this.av].gmaps = new google.maps.Map(a, b);
        return this.vs[this.av].gmaps
    };
    this.obj.attachObject = function (b, a, c, d) {
        typeof b == "string" && (b = document.getElementById(b));
        if (a) {
            b.style.visibility = "hidden";
            b.style.display = "";
            var e = b.offsetWidth,
                f = b.offsetHeight
        }
        this._attachContent("obj", b);
        if (a && this._isWindow) {
            b.style.visibility = "", this._adjustToContent(e, f)
        }
        if (this.skin == "dhx_terrace" && (this.vs[this.av].menu != null || this.vs[this.av].toolbar != null)) {
            this.adjust(typeof d == "undefined" || d == !0), this.updateNestedObjects(!0)
        }
        c || this._viewRestore()
    };
    this.obj.detachObject = function (b, a) {
        for (var c = null, d = null, e = "tree,grid,layout,tabbar,accordion,folders,form".split(","), f = 0; f < e.length; f++) {
            if (this.vs[this.av][e[f]]) {
                c = this.vs[this.av][e[f]];
                d = this.vs[this.av][e[f] + "Obj"];
                if (b) {
                    c.unload && c.unload();
                    for (c.destructor && c.destructor(); d.childNodes.length > 0;) {
                        d.removeChild(d.childNodes[0])
                    }
                    d.parentNode.removeChild(d);
                    c = d = null
                } else {
                    document.body.appendChild(d), d.style.display = "none"
                }
                this.vs[this.av][e[f]] = null;
                this.vs[this.av][e[f] + "Id"] = null;
                this.vs[this.av][e[f] + "Obj"] = null
            }
        }
        if (c != null && d != null) {
            return [c, d]
        }
        if (b && this.vs[this.av]._frame) {
            this._detachURLEvents(), this.vs[this.av]._frame = null
        }
        for (var h = this.vs[this.av].dhxcont.mainCont[this.av]; h.childNodes.length > 0;) {
            if (b == !0) {
                h.removeChild(h.childNodes[0])
            } else {
                var g = h.childNodes[0];
                a != null ? (typeof a != "object" && (a = document.getElementById(a)), a.appendChild(g)) : document.body.appendChild(g);
                g.style.display = "none"
            }
        }
        h = a = null
    };
    this.obj.appendObject = function (b) {
        typeof b == "string" && (b = document.getElementById(b));
        this._attachContent("obj", b, !0)
    };
    this.obj.attachHTMLString = function (b) {
        this._attachContent("str", b);
        for (var a = b.match(/<script[^>]*>[^\f]*?<\/script>/g) || [], c = 0; c < a.length; c++) {
            var d = a[c].replace(/<([\/]{0,1})script[^>]*>/g, "");
            d && (window.execScript ? window.execScript(d) : window.eval(d))
        }
    };
    this.obj.attachURL = function (b, a) {
        this._attachContent(a == !0 ? "urlajax" : "url", b, !1);
        if (this.skin == "dhx_terrace" && (this.vs[this.av].menu != null || this.vs[this.av].toolbar != null)) {
            this.adjust(!0), this.updateNestedObjects(!0)
        }
        this._viewRestore()
    };
    this.obj.adjust = function (b) {
        if (this.skin == "dhx_skyblue") {
            if (this.vs[this.av].menu) {
                if (this._isWindow || this._isLayout) {
                    this.vs[this.av].menu._topLevelOffsetLeft = 0, document.getElementById(this.vs[this.av].menuId).style.height = "26px", this.vs[this.av].menuHeight = document.getElementById(this.vs[this.av].menuId).offsetHeight, this._doOnAttachMenu && this._doOnAttachMenu("show")
                }
                if (this._isCell) {
                    document.getElementById(this.vs[this.av].menuId).className += " in_layoutcell", this.vs[this.av].menuHeight = 25
                }
                if (this._isAcc) {
                    document.getElementById(this.vs[this.av].menuId).className += " in_acccell", this.vs[this.av].menuHeight = 25
                }
                this._doOnAttachMenu && this._doOnAttachMenu("adjust")
            }
            this.vs[this.av].toolbar && (this._isWindow && (document.getElementById(this.vs[this.av].toolbarId).className += " in_window"), this._isLayout && (document.getElementById(this.vs[this.av].toolbarId).className += " in_layout"), this._isCell && (document.getElementById(this.vs[this.av].toolbarId).className += " in_layoutcell"), this._isAcc && (document.getElementById(this.vs[this.av].toolbarId).className += " in_acccell"), this._isTabbarCell && (document.getElementById(this.vs[this.av].toolbarId).className += " in_tabbarcell"))
        }
        this.skin == "dhx_web" && this.vs[this.av].toolbar && (this._isWindow && (document.getElementById(this.vs[this.av].toolbarId).className += " in_window"), this._isLayout && (document.getElementById(this.vs[this.av].toolbarId).className += " in_layout"), this._isCell && (document.getElementById(this.vs[this.av].toolbarId).className += " in_layoutcell"), this._isAcc && (document.getElementById(this.vs[this.av].toolbarId).className += " in_acccell"), this._isTabbarCell && (document.getElementById(this.vs[this.av].toolbarId).className += " in_tabbarcell"));
        if (this.skin == "dhx_terrace") {
            var a = 0;
            if (this._isWindow || this._isCell || this._isAcc || this._isTabbarCell) {
                a = 14
            }
            this._isCell && this._noHeader && (a = 0);
            var c = 0;
            if (this._isWindow || this._isCell || this._isAcc || this._isTabbarCell) {
                c = 14
            }
            this._isCell && this._noHeader && (c = 0);
            var d = b == !0 && !this.vs[this.av].toolbar || this._isLayout ? 14 : 0,
                e = b == !0 || this._isLayout ? 14 : 0,
                f = !1;
            if (this.vs[this.av].menu) {
                document.getElementById(this.vs[this.av].menuId).style.marginLeft = a + "px", document.getElementById(this.vs[this.av].menuId).style.marginRight = a + "px", document.getElementById(this.vs[this.av].menuId).style.marginTop = c + "px", document.getElementById(this.vs[this.av].menuId).style.marginBottom = d + "px", this.vs[this.av].menuHeight = 32 + c + d, this._doOnAttachMenu && this._doOnAttachMenu("show"), f = !0
            }
            if (this.vs[this.av].toolbar) {
                c == 0 && this.vs[this.av].menu != null & this._isCell && (c = 14), document.getElementById(this.vs[this.av].toolbarId).style.marginLeft = a + "px", document.getElementById(this.vs[this.av].toolbarId).style.marginRight = a + "px", document.getElementById(this.vs[this.av].toolbarId).style.marginTop = c + "px", document.getElementById(this.vs[this.av].toolbarId).style.marginBottom = e + "px", this.vs[this.av].toolbarHeight = this.vs[this.av].toolbar.cont.offsetHeight + c + e, this._doOnAttachToolbar && this._doOnAttachToolbar("show"), f = !0
            }
        }
    };
    this.obj._attachContent = function (b, a, c) {
        if (c !== !0) {
            if (this.vs[this.av]._frame) {
                this._detachURLEvents(), this.vs[this.av]._frame = null
            }
            for (; this.vs[this.av].dhxcont.mainCont[this.av].childNodes.length > 0;) {
                this.vs[this.av].dhxcont.mainCont[this.av].removeChild(this.vs[this.av].dhxcont.mainCont[this.av].childNodes[0])
            }
        }
        if (b == "url") {
            if (this._isWindow && a.cmp == null && this.skin == "dhx_skyblue") {
                this.vs[this.av].dhxcont.mainCont[this.av].style.border = "#a4bed4 1px solid", this._redraw()
            }
            var d = document.createElement("IFRAME");
            d.frameBorder = 0;
            d.border = 0;
            d.style.width = "100%";
            d.style.height = "100%";
            d.setAttribute("src", "javascript:false;");
            this.vs[this.av].dhxcont.mainCont[this.av].appendChild(d);
            d.src = a;
            this.vs[this.av]._frame = d;
            this._attachURLEvents()
        } else {
            if (b == "urlajax") {
                if (this._isWindow && a.cmp == null && this.skin == "dhx_skyblue") {
                    this.vs[this.av].dhxcont.mainCont[this.av].style.border = "#a4bed4 1px solid", this.vs[this.av].dhxcont.mainCont[this.av].style.backgroundColor = "#FFFFFF", this._redraw()
                }
                var e = this,
                    f = String(this.av).valueOf(),
                    h = function () {
                        var a = e.av;
                        e.av = f;
                        e.attachHTMLString(this.xmlDoc.responseText, this);
                        e.av = a;
                        e._doOnFrameContentLoaded && e._doOnFrameContentLoaded();
                        this.destructor()
                    },
                    g = new dtmlXMLLoaderObject(h, window);
                g.dhxWindowObject = this;
                g.loadXML(a)
            } else {
                if (b == "obj") {
                    if (this._isWindow && a.cmp == null && this.skin == "dhx_skyblue") {
                        this.vs[this.av].dhxcont.mainCont[this.av].style.border = "#a4bed4 1px solid", this.vs[this.av].dhxcont.mainCont[this.av].style.backgroundColor = "#FFFFFF", this._redraw()
                    }
                    this.vs[this.av].dhxcont._frame = null;
                    this.vs[this.av].dhxcont.mainCont[this.av].appendChild(a);
                    this.vs[this.av].dhxcont.mainCont[this.av].style.overflow = c === !0 ? "auto" : "hidden";
                    a.style.display = ""
                } else {
                    if (b == "str") {
                        if (this._isWindow && a.cmp == null && this.skin == "dhx_skyblue") {
                            this.vs[this.av].dhxcont.mainCont[this.av].style.border = "#a4bed4 1px solid", this.vs[this.av].dhxcont.mainCont[this.av].style.backgroundColor = "#FFFFFF", this._redraw()
                        }
                        this.vs[this.av].dhxcont._frame = null;
                        this.vs[this.av].dhxcont.mainCont[this.av].innerHTML = a
                    }
                }
            }
        }
    };
    this.obj._attachURLEvents = function () {
        var b = this,
            a = this.vs[this.av]._frame;
        _isIE ? a.onreadystatechange = function () {
            if (a.readyState == "complete") {
                try {
                    a.contentWindow.document.body.onmousedown = function () {
                        b._doOnFrameMouseDown && b._doOnFrameMouseDown()
                    }
                } catch (c) {}
                try {
                    b._doOnFrameContentLoaded && b._doOnFrameContentLoaded()
                } catch (d) {}
            }
        } : a.onload = function () {
            try {
                a.contentWindow.onmousedown = function () {
                    b._doOnFrameMouseDown && b._doOnFrameMouseDown()
                }
            } catch (c) {}
            try {
                b._doOnFrameContentLoaded && b._doOnFrameContentLoaded()
            } catch (d) {}
        }
    };
    this.obj._detachURLEvents = function () {
        if (_isIE) {
            try {
                this.vs[this.av]._frame.onreadystatechange = null, this.vs[this.av]._frame.contentWindow.document.body.onmousedown = null, this.vs[this.av]._frame.onload = null
            } catch (b) {}
        } else {
            try {
                this.vs[this.av]._frame.contentWindow.onmousedown = null, this.vs[this.av]._frame.onload = null
            } catch (a) {}
        }
    };
    this.obj.showMenu = function () {
        if (this.vs[this.av].menu && this.vs[this.av].menuId && document.getElementById(this.vs[this.av].menuId).style.display == "none") {
            this.vs[this.av].menuHidden = !1, this._doOnAttachMenu && this._doOnAttachMenu("show"), document.getElementById(this.vs[this.av].menuId).style.display = "", this._viewRestore()
        }
    };
    this.obj.hideMenu = function () {
        if (this.vs[this.av].menu && this.vs[this.av].menuId && document.getElementById(this.vs[this.av].menuId).style.display != "none") {
            document.getElementById(this.vs[this.av].menuId).style.display = "none", this.vs[this.av].menuHidden = !0, this._doOnAttachMenu && this._doOnAttachMenu("hide"), this._viewRestore()
        }
    };
    this.obj.showToolbar = function () {
        if (this.vs[this.av].toolbar && this.vs[this.av].toolbarId && document.getElementById(this.vs[this.av].toolbarId).style.display == "none") {
            this.vs[this.av].toolbarHidden = !1, this._doOnAttachToolbar && this._doOnAttachToolbar("show"), document.getElementById(this.vs[this.av].toolbarId).style.display = "", this._viewRestore()
        }
    };
    this.obj.hideToolbar = function () {
        if (this.vs[this.av].toolbar && this.vs[this.av].toolbarId && document.getElementById(this.vs[this.av].toolbarId).style.display != "none") {
            this.vs[this.av].toolbarHidden = !0, document.getElementById(this.vs[this.av].toolbarId).style.display = "none", this._doOnAttachToolbar && this._doOnAttachToolbar("hide"), this._viewRestore()
        }
    };
    this.obj.showStatusBar = function () {
        if (this.vs[this.av].sb && this.vs[this.av].sbId && document.getElementById(this.vs[this.av].sbId).style.display == "none") {
            this.vs[this.av].sbHidden = !1, this._doOnAttachStatusBar && this._doOnAttachStatusBar("show"), document.getElementById(this.vs[this.av].sbId).style.display = "", this._viewRestore()
        }
    };
    this.obj.hideStatusBar = function () {
        if (this.vs[this.av].sb && this.vs[this.av].sbId && document.getElementById(this.vs[this.av].sbId).style.display != "none") {
            this.vs[this.av].sbHidden = !0, document.getElementById(this.vs[this.av].sbId).style.display = "none", this._doOnAttachStatusBar && this._doOnAttachStatusBar("hide"), this._viewRestore()
        }
    };
    this.obj._dhxContDestruct = function () {
        var b = this.av,
            a;
        for (a in this.vs) {
            this.av = a, this.detachMenu(!0), this.detachToolbar(!0), this.detachStatusBar(!0), this.detachObject(!0), this.vs[a].dhxcont.mainCont[a] = null
        }
        for (a in this.vs) {
            this.vs[a].dhxcont.mainCont = null, this.vs[a].dhxcont.innerHTML = "", this.vs[a].dhxcont = null, this.vs[a] = null
        }
        this.setActive = this.getView = this.getFrame = this._getSt = this._dhxContDestruct = this._genStr = this._init = this._setPadding = this._viewRestore = this._detachURLEvents = this._attachURLEvents = this._attachContent = this.updateNestedObjects = this.hideCoverBlocker = this.showCoverBlocker = this.coverBlocker = this.adjustContent = this.moveContentTo = this.setMinContentSize = this.adjust = this.show = this.view = this.attachMap = this.attachURL = this.attachHTMLString = this.appendObject = this.detachObject = this.attachObject = this.attachEditor = this.attachLayout = this.attachAccordion = this.attachFolders = this.attachTabbar = this.attachTree = this.attachScheduler = this.attachGrid = this.hideStatusBar = this.hideToolbar = this.hideMenu = this.showStatusBar = this.showToolbar = this.showMenu = this.detachStatusBar = this.detachToolbar = this.detachMenu = this.attachStatusBar = this.attachToolbar = this.attachMenu = this.vs = null;
        g.st.innerHTML = "";
        g.st.parentNode.removeChild(g.st);
        g.st = null;
        g.setContent = null;
        g.dhxcont = null;
        g = g.obj = null;
        if (dhtmlx.detaches) {
            for (a in dhtmlx.detaches) {
                dhtmlx.detaches[a](this)
            }
        }
    };
    if (dhtmlx.attaches) {
        for (var j in dhtmlx.attaches) {
            this.obj[j] = dhtmlx.attaches[j]
        }
    }
    return this
};

function dhtmlXComboFromSelect(h, k) {
    if (typeof (h) == "string") {
        h = document.getElementById(h)
    }
    k = k || h.getAttribute("width") || (window.getComputedStyle ? window.getComputedStyle(h, null)["width"] : (h.currentStyle ? h.currentStyle.width : 0));
    if ((!k) || (k == "auto")) {
        k = h.offsetWidth || 100
    }
    var d = document.createElement("SPAN");
    h.parentNode.insertBefore(d, h);
    h.style.display = "none";
    var e = h.getAttribute("opt_type");
    var j = new dhtmlXCombo(d, h.name, k, e, h.tabIndex);
    var g = new Array();
    var a = -1;
    for (var c = 0; c < h.options.length; c++) {
        if (h.options[c].selected) {
            a = c
        }
        var f = h.options[c].innerHTML;
        var b = h.options[c].getAttribute("value");
        if ((typeof (b) == "undefined") || (b === null)) {
            b = f
        }
        g[c] = {
            value: b,
            text: f,
            img_src: h.options[c].getAttribute("img_src")
        }
    }
    if (g.length) {
        j.addOption(g)
    }
    h.parentNode.removeChild(h);
    if (a >= 0) {
        j.selectOption(a, null, true)
    }
    if (h.onchange) {
        j.attachEvent("onChange", h.onchange)
    }
    if (h.style.direction == "rtl" && j.setRTL) {
        j.setRTL(true)
    }
    return j
}
var dhtmlXCombo_optionTypes = [];

function dhtmlXCombo(d, b, c, e, a) {
    if (typeof (d) == "string") {
        d = document.getElementById(d)
    }
    this.dhx_Event();
    this.optionType = (e != window.undefined && dhtmlXCombo_optionTypes[e]) ? e : "default";
    this._optionObject = dhtmlXCombo_optionTypes[this.optionType];
    this._disabled = false;
    this.readonlyDelay = 750;
    this.filterEntities = ["[", "]", "{", "}", "(", ")", "+", "*", "\\", "?", ".", "$", "^"];
    if (!window.dhx_glbSelectAr) {
        window.dhx_glbSelectAr = new Array();
        window.dhx_openedSelect = null;
        window.dhx_SelectId = 1;
        dhtmlxEvent(document.body, "click", this.closeAll);
        dhtmlxEvent(document.body, "keydown", function (f) {
            try {
                if ((f || event).keyCode == 9) {
                    window.dhx_glbSelectAr[0].closeAll()
                }
            } catch (f) {}
            return true
        })
    }
    if (d.tagName == "SELECT") {
        return dhtmlXComboFromSelect(d)
    } else {
        this._createSelf(d, b, c, a)
    }
    dhx_glbSelectAr.push(this)
}
dhtmlXCombo.prototype.setSize = function (a) {
    this.DOMlist.style.width = a + "px";
    if (this.DOMlistF) {
        this.DOMlistF.style.width = a + "px"
    }
    this.DOMelem.style.width = a + "px";
    this.DOMelem_input.style.width = Math.max(0, (a - 19)) + "px"
};
dhtmlXCombo.prototype.enableFilteringMode = function (d, c, b, a) {
    if (d == "between") {
        this._filter = true;
        this._anyPosition = true;
        this._autoDisabled = true
    } else {
        this._filter = convertStringToBoolean(d)
    } if (c) {
        this._xml = c;
        this._autoxml = convertStringToBoolean(a)
    }
    if (convertStringToBoolean(b)) {
        this._xmlCache = []
    }
};
dhtmlXCombo.prototype.setFilteringParam = function (a, b) {
    if (!this._prs) {
        this._prs = []
    }
    this._prs.push([a, b])
};
dhtmlXCombo.prototype.disable = function (b) {
    var a = convertStringToBoolean(b);
    if (this._disabled == a) {
        return
    }
    this.DOMelem_input.disabled = a;
    this._disabled = a
};
dhtmlXCombo.prototype.readonly = function (b, c) {
    this.DOMelem_input.readOnly = b ? true : false;
    if (c === false || b === false) {
        this.DOMelem.onkeyup = function (d) {}
    } else {
        var a = this;
        this.DOMelem.onkeyup = function (e) {
            e = e || window.event;
            if (a._searchTimeout) {
                window.clearTimeout(a._searchTimeout)
            }
            if (e.keyCode != 9) {
                e.cancelBubble = true
            }
            if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90)) {
                if (!a._searchText) {
                    a._searchText = ""
                }
                a._searchText += String.fromCharCode(e.keyCode);
                for (var d = 0; d < a.optionsArr.length; d++) {
                    var f = a.optionsArr[d].text;
                    if (f.toString().toUpperCase().indexOf(a._searchText) == 0) {
                        a.selectOption(d);
                        break
                    }
                }
                a._searchTimeout = window.setTimeout(function () {
                    a._searchText = ""
                }, a.readonlyDelay);
                e.cancelBubble = true
            }
        }
    }
};
dhtmlXCombo.prototype.getOption = function (b) {
    for (var a = 0; a < this.optionsArr.length; a++) {
        if (this.optionsArr[a].value == b) {
            return this.optionsArr[a]
        }
    }
    return null
};
dhtmlXCombo.prototype.getOptionByLabel = function (b) {
    for (var a = 0; a < this.optionsArr.length; a++) {
        if (this.optionsArr[a].text.toUpperCase() == b.toUpperCase() || this.optionsArr[a]._ctext.toUpperCase() == b.toUpperCase()) {
            return this.optionsArr[a]
        }
    }
    return null
};
dhtmlXCombo.prototype.getOptionByIndex = function (a) {
    return this.optionsArr[a]
};
dhtmlXCombo.prototype.clearAll = function (a) {
    if (a) {
        this.setComboText("")
    }
    this.optionsArr = new Array();
    this.redrawOptions();
    if (a) {
        if (this._selOption) {
            this._selOption.RedrawHeader(this, true)
        }
        this._confirmSelection()
    }
};
dhtmlXCombo.prototype.deleteOption = function (b) {
    var a = this.getIndexByValue(b);
    if (a < 0) {
        return
    }
    if (this.optionsArr[a] == this._selOption) {
        this._selOption = null
    }
    this.optionsArr.splice(a, 1);
    this.redrawOptions()
};
dhtmlXCombo.prototype.render = function (a) {
    this._skiprender = (!convertStringToBoolean(a));
    this.redrawOptions()
};
dhtmlXCombo.prototype.updateOption = function (d, a, c, e) {
    var b = this.getOption(d);
    if (typeof (a) != "object") {
        a = {
            text: c,
            value: a,
            css: e
        }
    }
    b.setValue(a);
    this.redrawOptions()
};
dhtmlXCombo.prototype.addOption = function (b) {
    if (!arguments[0].length || typeof (arguments[0]) != "object") {
        args = [arguments]
    } else {
        args = b
    }
    this.render(false);
    for (var c = 0; c < args.length; c++) {
        var a = args[c];
        if (a.length) {
            a.value = a[0] || "";
            a.text = a[1] || "";
            a.css = a[2] || ""
        }
        this._addOption(a)
    }
    this.render(true)
};
dhtmlXCombo.prototype._addOption = function (a) {
    dOpt = new this._optionObject();
    this.optionsArr.push(dOpt);
    dOpt.setValue.apply(dOpt, [a]);
    this.redrawOptions()
};
dhtmlXCombo.prototype.getIndexByValue = function (b) {
    for (var a = 0; a < this.optionsArr.length; a++) {
        if (this.optionsArr[a].value == b) {
            return a
        }
    }
    return -1
};
dhtmlXCombo.prototype.getSelectedValue = function () {
    return (this._selOption ? this._selOption.value : null)
};
dhtmlXCombo.prototype.getComboText = function () {
    return this.DOMelem_input.value
};
dhtmlXCombo.prototype.setComboText = function (a) {
    this.DOMelem_input.value = a
};
dhtmlXCombo.prototype.setComboValue = function (b) {
    this.setComboText(b);
    for (var a = 0; a < this.optionsArr.length; a++) {
        if (this.optionsArr[a].data()[0] == b) {
            return this.selectOption(a, null, true)
        }
    }
    this.DOMelem_hidden_input.value = b
};
dhtmlXCombo.prototype.getActualValue = function () {
    return this.DOMelem_hidden_input.value
};
dhtmlXCombo.prototype.getSelectedText = function () {
    return (this._selOption ? this._selOption.text : "")
};
dhtmlXCombo.prototype.getSelectedIndex = function () {
    for (var a = 0; a < this.optionsArr.length; a++) {
        if (this.optionsArr[a] == this._selOption) {
            return a
        }
    }
    return -1
};
dhtmlXCombo.prototype.setName = function (a) {
    this.DOMelem_hidden_input.name = a;
    this.DOMelem_hidden_input2 = a.replace(/(\]?)$/, "_new_value$1");
    this.name = a
};
dhtmlXCombo.prototype.show = function (a) {
    if (convertStringToBoolean(a)) {
        this.DOMelem.style.display = ""
    } else {
        this.DOMelem.style.display = "none"
    }
};
dhtmlXCombo.prototype.destructor = function () {
    this.DOMParent.removeChild(this.DOMelem);
    this.DOMlist.parentNode.removeChild(this.DOMlist);
    if (this.DOMlistF) {
        this.DOMlistF.parentNode.removeChild(this.DOMlistF)
    }
    var b = dhx_glbSelectAr;
    this.DOMParent = this.DOMlist = this.DOMlistF = this.DOMelem = 0;
    this.DOMlist.combo = this.DOMelem.combo = 0;
    for (var a = 0; a < b.length; a++) {
        if (b[a] == this) {
            b[a] = null;
            b.splice(a, 1);
            return
        }
    }
};
dhtmlXCombo.prototype._createSelf = function (d, b, g, f) {
    if (g.toString().indexOf("%") != -1) {
        var a = this;
        var e = parseInt(g) / 100;
        window.setInterval(function () {
            if (!d.parentNode) {
                return
            }
            var h = d.parentNode.offsetWidth * e - 2;
            if (h < 0) {
                return
            }
            if (h == a._lastTs) {
                return
            }
            a.setSize(a._lastTs = h)
        }, 500);
        var g = parseInt(d.offsetWidth)
    }
    var g = parseInt(g || 100);
    this.ListPosition = "Bottom";
    this.DOMParent = d;
    this._inID = null;
    this.name = b;
    this._selOption = null;
    this.optionsArr = Array();
    var c = new this._optionObject();
    c.DrawHeader(this, b, g, f);
    this.DOMlist = document.createElement("DIV");
    this.DOMlist.className = "dhx_combo_list " + (dhtmlx.skin ? dhtmlx.skin + "_list" : "");
    this.DOMlist.style.width = g - (_isIE ? 0 : 0) + "px";
    if (_isOpera || _isKHTML) {
        this.DOMlist.style.overflow = "auto"
    }
    this.DOMlist.style.display = "none";
    document.body.insertBefore(this.DOMlist, document.body.firstChild);
    if (_isIE) {
        this.DOMlistF = document.createElement("IFRAME");
        this.DOMlistF.style.border = "0px";
        this.DOMlistF.className = "dhx_combo_list";
        this.DOMlistF.style.width = g - (_isIE ? 0 : 0) + "px";
        this.DOMlistF.style.display = "none";
        this.DOMlistF.src = "javascript:false;";
        document.body.insertBefore(this.DOMlistF, document.body.firstChild)
    }
    this.DOMlist.combo = this.DOMelem.combo = this;
    this.DOMelem_input.onkeydown = this._onKey;
    this.DOMelem_input.onkeypress = this._onKeyF;
    this.DOMelem_input.onblur = this._onBlur;
    this.DOMelem.onclick = this._toggleSelect;
    this.DOMlist.onclick = this._selectOption;
    this.DOMlist.onmousedown = function () {
        this._skipBlur = true
    };
    this.DOMlist.onkeydown = function (h) {
        (h || event).cancelBubble = true;
        this.combo.DOMelem_input.onkeydown(h)
    };
    this.DOMlist.onmouseover = this._listOver
};
dhtmlXCombo.prototype._listOver = function (d) {
    d = d || event;
    d.cancelBubble = true;
    var c = (_isIE ? event.srcElement : d.target);
    var b = this.combo;
    if (c.parentNode == b.DOMlist) {
        if (b._selOption) {
            b._selOption.deselect()
        }
        if (b._tempSel) {
            b._tempSel.deselect()
        }
        var a = 0;
        for (a; a < b.DOMlist.childNodes.length; a++) {
            if (b.DOMlist.childNodes[a] == c) {
                break
            }
        }
        var f = b.optionsArr[a];
        b._tempSel = f;
        b._tempSel.select();
        if ((b._autoxml) && ((a + 1) == b._lastLength)) {
            b._fetchOptions(a + 1, b._lasttext || "")
        }
    }
};
dhtmlXCombo.prototype._positList = function () {
    var a = this.getPosition(this.DOMelem);
    if (this.ListPosition == "Bottom") {
        this.DOMlist.style.top = a[1] + this.DOMelem.offsetHeight - 1 + "px";
        this.DOMlist.style.left = a[0] + "px"
    } else {
        if (this.ListPosition == "Top") {
            this.DOMlist.style.top = a[1] - this.DOMlist.offsetHeight + "px";
            this.DOMlist.style.left = a[0] + "px"
        } else {
            this.DOMlist.style.top = a[1] + "px";
            this.DOMlist.style.left = a[0] + this.DOMelem.offsetWidth + "px"
        }
    }
};
dhtmlXCombo.prototype.getPosition = function (e, b) {
    if (_isIE && _isIE < 8) {
        if (!b) {
            b = document.body
        }
        var a = e;
        var d = 0;
        var c = 0;
        while ((a) && (a != b)) {
            d += a.offsetLeft - a.scrollLeft + a.clientLeft;
            c += a.offsetTop - a.scrollTop + a.clientTop;
            a = a.offsetParent
        }
        if (document.documentElement.scrollTop) {
            c += document.documentElement.scrollTop
        }
        if (document.documentElement.scrollLeft) {
            d += document.documentElement.scrollLeft
        }
        return new Array(d, c)
    }
    var f = getOffset(e);
    return [f.left, f.top]
};
dhtmlXCombo.prototype._correctSelection = function () {
    if (this.getComboText() != "") {
        for (var a = 0; a < this.optionsArr.length; a++) {
            if (!this.optionsArr[a].isHidden()) {
                return this.selectOption(a, true, false)
            }
        }
    }
    this.unSelectOption()
};
dhtmlXCombo.prototype.selectNext = function (a) {
    var b = this.getSelectedIndex() + a;
    while (this.optionsArr[b]) {
        if (!this.optionsArr[b].isHidden()) {
            return this.selectOption(b, false, false)
        }
        b += a
    }
};
dhtmlXCombo.prototype._onKeyF = function (c) {
    var b = this.parentNode.combo;
    var a = c || event;
    a.cancelBubble = true;
    if (a.keyCode == "13" || a.keyCode == "9") {
        b._confirmSelection();
        b.closeAll()
    } else {
        if (a.keyCode == "27") {
            b._resetSelection();
            b.closeAll()
        } else {
            b._activeMode = true
        }
    } if (a.keyCode == "13" || a.keyCode == "27") {
        b.callEvent("onKeyPressed", [a.keyCode]);
        return false
    }
    return true
};
dhtmlXCombo.prototype._onKey = function (c) {
    var b = this.parentNode.combo;
    (c || event).cancelBubble = true;
    var a = (c || event).keyCode;
    if (a > 15 && a < 19) {
        return true
    }
    if (a == 27) {
        return true
    }
    if ((b.DOMlist.style.display != "block") && (a != "13") && (a != "9") && ((!b._filter) || (b._filterAny))) {
        b.DOMelem.onclick(c || event)
    }
    if ((a != "13") && (a != "9")) {
        window.setTimeout(function () {
            b._onKeyB(a)
        }, 1);
        if (a == "40" || a == "38") {
            return false
        }
    } else {
        if (a == 9) {
            b._confirmSelection();
            b.closeAll();
            (c || event).cancelBubble = false
        }
    }
};
dhtmlXCombo.prototype._onKeyB = function (b) {
    if (b == "40") {
        var c = this.selectNext(1)
    } else {
        if (b == "38") {
            this.selectNext(-1)
        } else {
            this.callEvent("onKeyPressed", [b]);
            if (this._filter) {
                return this.filterSelf((b == 8) || (b == 46))
            }
            for (var a = 0; a < this.optionsArr.length; a++) {
                if (this.optionsArr[a].data()[1] == this.DOMelem_input.value) {
                    this.selectOption(a, false, false);
                    return false
                }
            }
            this.unSelectOption()
        }
    }
    return true
};
dhtmlXCombo.prototype._onBlur = function () {
    var a = this.parentNode._self;
    window.setTimeout(function () {
        if (a.DOMlist._skipBlur) {
            return !(a.DOMlist._skipBlur = false)
        }
        a._skipFocus = true;
        a._confirmSelection();
        a.callEvent("onBlur", [])
    }, 100)
};
dhtmlXCombo.prototype.redrawOptions = function () {
    if (this._skiprender) {
        return
    }
    for (var a = this.DOMlist.childNodes.length - 1; a >= 0; a--) {
        this.DOMlist.removeChild(this.DOMlist.childNodes[a])
    }
    for (var a = 0; a < this.optionsArr.length; a++) {
        this.DOMlist.appendChild(this.optionsArr[a].render())
    }
};
dhtmlXCombo.prototype.loadXML = function (b, d) {
    this._load = true;
    this.callEvent("onXLS", []);
    if (this._prs) {
        for (var c = 0; c < this._prs.length; c++) {
            b += [getUrlSymbol(b), escape(this._prs[c][0]), "=", escape(this._prs[c][1])].join("")
        }
    }
    if ((this._xmlCache) && (this._xmlCache[b])) {
        this._fillFromXML(this, null, null, null, this._xmlCache[b]);
        if (d) {
            d()
        }
    } else {
        var a = (new dtmlXMLLoaderObject(this._fillFromXML, this, true, true));
        if (d) {
            a.waitCall = d
        }
        a._cPath = b;
        a.loadXML(b)
    }
};
dhtmlXCombo.prototype.loadXMLString = function (a) {
    var b = (new dtmlXMLLoaderObject(this._fillFromXML, this, true, true));
    b.loadXMLString(a)
};
dhtmlXCombo.prototype._fillFromXML = function (h, q, n, m, k) {
    if (h._xmlCache) {
        h._xmlCache[k._cPath] = k
    }
    var o = k.getXMLTopNode("complete");
    if (o.tagName != "complete") {
        h._load = false;
        return
    }
    var p = k.doXPath("//complete");
    var t = k.doXPath("//option");
    var s = false;
    h.render(false);
    if ((!p[0]) || (!p[0].getAttribute("add"))) {
        h.clearAll();
        h._lastLength = t.length;
        if (h._xml) {
            if ((!t) || (!t.length)) {
                h.closeAll()
            } else {
                if (h._activeMode) {
                    h._positList();
                    h.DOMlist.style.display = "block";
                    if (_isIE) {
                        h._IEFix(true)
                    }
                }
            }
        }
    } else {
        h._lastLength += t.length || Infinity;
        s = true
    }
    for (var g = 0; g < t.length; g++) {
        var l = new Object();
        l.text = t[g].firstChild ? t[g].firstChild.nodeValue : "";
        for (var f = 0; f < t[g].attributes.length; f++) {
            var r = t[g].attributes[f];
            if (r) {
                l[r.nodeName] = r.nodeValue
            }
        }
        h._addOption(l)
    }
    h.render(s != true || (!!t.length));
    if ((h._load) && (h._load !== true)) {
        h.loadXML(h._load)
    } else {
        h._load = false;
        if ((!h._lkmode) && (h._filter) && !h._autoDisabled) {
            h._correctSelection()
        }
    }
    var e = k.doXPath("//option[@selected]");
    if (e.length) {
        h.selectOption(h.getIndexByValue(e[0].getAttribute("value")), false, true)
    }
    h.callEvent("onXLE", [])
};
dhtmlXCombo.prototype.unSelectOption = function () {
    if (this._selOption) {
        this._selOption.deselect()
    }
    if (this._tempSel) {
        this._tempSel.deselect()
    }
    this._tempSel = this._selOption = null
};
dhtmlXCombo.prototype.confirmValue = function () {
    this._confirmSelection()
};
dhtmlXCombo.prototype._confirmSelection = function (c, a) {
    var e = this.getComboText();
    this.setComboText("");
    this.setComboText(e);
    if (arguments.length == 0) {
        var d = this.getOptionByLabel(this.DOMelem_input.value);
        c = d ? d.value : this.DOMelem_input.value;
        a = (d == null);
        if (c == this.getActualValue()) {
            return this._skipFocus = false
        }
    }
    if (!this._skipFocus && !this._disabled) {
        try {
            this.DOMelem_input.focus()
        } catch (b) {}
    }
    this._skipFocus = false;
    this.DOMelem_hidden_input.value = c;
    this.DOMelem_hidden_input2.value = (a ? "true" : "false");
    this.callEvent("onChange", []);
    this._activeMode = false
};
dhtmlXCombo.prototype._resetSelection = function (b, a) {
    var c = this.getOption(this.DOMelem_hidden_input.value);
    this.setComboValue(c ? c.data()[0] : this.DOMelem_hidden_input.value);
    this.setComboText(c ? c.data()[1] : this.DOMelem_hidden_input.value)
};
dhtmlXCombo.prototype.selectOption = function (d, b, a) {
    if (arguments.length < 3) {
        a = true
    }
    this.unSelectOption();
    var f = this.optionsArr[d];
    if (!f) {
        return
    }
    this._selOption = f;
    this._selOption.select();
    var g = this._selOption.content.offsetTop + this._selOption.content.offsetHeight - this.DOMlist.scrollTop - this.DOMlist.offsetHeight;
    if (g > 0) {
        this.DOMlist.scrollTop += g
    }
    g = this.DOMlist.scrollTop - this._selOption.content.offsetTop;
    if (g > 0) {
        this.DOMlist.scrollTop -= g
    }
    var c = this._selOption.data();
    if (a) {
        this.setComboText(c[1]);
        this._confirmSelection(c[0], false);
        if ((this._autoxml) && ((d + 1) == this._lastLength)) {
            this._fetchOptions(d + 1, this._lasttext || "")
        }
    }
    if (b) {
        var e = this.getComboText();
        if (e != c[1]) {
            this.setComboText(c[1]);
            dhtmlXRange(this.DOMelem_input, e.length + 1, c[1].length)
        }
    } else {
        this.setComboText(c[1])
    }
    this._selOption.RedrawHeader(this);
    this.callEvent("onSelectionChange", [])
};
dhtmlXCombo.prototype._selectOption = function (d) {
    (d || event).cancelBubble = true;
    var c = (_isIE ? event.srcElement : d.target);
    var b = this.combo;
    while (!c._self) {
        c = c.parentNode;
        if (!c) {
            return
        }
    }
    var a = 0;
    for (a; a < b.DOMlist.childNodes.length; a++) {
        if (b.DOMlist.childNodes[a] == c) {
            break
        }
    }
    b.selectOption(a, false, true);
    b.closeAll();
    b.callEvent("onBlur", []);
    b._activeMode = false
};
dhtmlXCombo.prototype.openSelect = function () {
    if (this._disabled) {
        return
    }
    this.closeAll();
    this.DOMlist.style.display = "block";
    this._positList();
    this.callEvent("onOpen", []);
    if (this._tempSel) {
        this._tempSel.deselect()
    }
    if (this._selOption) {
        this._selOption.select()
    }
    if (this._selOption) {
        var a = this._selOption.content.offsetTop + this._selOption.content.offsetHeight - this.DOMlist.scrollTop - this.DOMlist.offsetHeight;
        if (a > 0) {
            this.DOMlist.scrollTop += a
        }
        a = this.DOMlist.scrollTop - this._selOption.content.offsetTop;
        if (a > 0) {
            this.DOMlist.scrollTop -= a
        }
    }
    if (_isIE) {
        this._IEFix(true)
    }
    this.DOMelem_input.focus();
    if (this._filter) {
        this.filterSelf()
    }
};
dhtmlXCombo.prototype._toggleSelect = function (b) {
    var a = this.combo;
    if (a.DOMlist.style.display == "block") {
        a.closeAll()
    } else {
        a.openSelect()
    }(b || event).cancelBubble = true
};
dhtmlXCombo.prototype._fetchOptions = function (b, c) {
    if (c == "") {
        this.closeAll();
        return this.clearAll()
    }
    var a = this._xml + ((this._xml.indexOf("?") != -1) ? "&" : "?") + "pos=" + b + "&mask=" + encodeURIComponent(c);
    this._lasttext = c;
    if (this._load) {
        this._load = a
    } else {
        if (!this.callEvent("onDynXLS", [c, b])) {
            return
        }
        this.loadXML(a)
    }
};
dhtmlXCombo.prototype.disableAutocomplete = function () {
    this._autoDisabled = true
};
dhtmlXCombo.prototype.filterSelf = function (f) {
    var e = this.getComboText();
    if (this._xml) {
        this._lkmode = f;
        this._fetchOptions(0, e)
    }
    var c = new RegExp("([" + this.filterEntities.join("\\") + "])", "g");
    e = e.replace(c, "\\$1");
    var g = (this._anyPosition ? "" : "^") + e;
    var b = new RegExp(g, "i");
    this.filterAny = false;
    for (var a = 0; a < this.optionsArr.length; a++) {
        var d = b.test(this.optionsArr[a].content ? this.optionsArr[a].data()[1] : this.optionsArr[a].text);
        this.filterAny |= d;
        this.optionsArr[a].hide(!d)
    }
    if (!this.filterAny) {
        this.closeAll();
        this._activeMode = true
    } else {
        if (this.DOMlist.style.display != "block") {
            this.openSelect()
        }
        if (_isIE) {
            this._IEFix(true)
        }
    } if (!f && !this._autoDisabled) {
        this._correctSelection()
    } else {
        this.unSelectOption()
    }
};
dhtmlXCombo.prototype._IEFix = function (a) {
    this.DOMlistF.style.display = (a ? "block" : "none");
    this.DOMlistF.style.top = this.DOMlist.style.top;
    this.DOMlistF.style.left = this.DOMlist.style.left;
    this.DOMlistF.style.width = this.DOMlist.offsetWidth + "px";
    this.DOMlistF.style.height = this.DOMlist.offsetHeight + "px"
};
dhtmlXCombo.prototype.closeAll = function () {
    if (window.dhx_glbSelectAr) {
        for (var a = 0; a < dhx_glbSelectAr.length; a++) {
            if (dhx_glbSelectAr[a].DOMlist.style.display == "block") {
                dhx_glbSelectAr[a].DOMlist.style.display = "none";
                if (_isIE) {
                    dhx_glbSelectAr[a]._IEFix(false)
                }
            }
            dhx_glbSelectAr[a]._activeMode = false
        }
    }
};
dhtmlXCombo.prototype.changeOptionId = function (b, a) {
    (this.getOption(b) || {}).value = a
};

function dhtmlXRange(a, d, h) {
    var g = typeof (a) == "object" ? a : document.getElementById(a);
    try {
        g.focus()
    } catch (f) {}
    var c = g.value.length;
    d--;
    if (d < 0 || d > h || d > c) {
        d = 0
    }
    if (h > c) {
        h = c
    }
    if (d == h) {
        return
    }
    if (g.setSelectionRange) {
        g.setSelectionRange(d, h)
    } else {
        if (g.createTextRange) {
            var b = g.createTextRange();
            b.moveStart("character", d);
            b.moveEnd("character", h - c);
            try {
                b.select()
            } catch (f) {}
        }
    }
}
dhtmlXCombo_defaultOption = function () {
    this.init()
};
dhtmlXCombo_defaultOption.prototype.init = function () {
    this.value = null;
    this.text = "";
    this.selected = false;
    this.css = ""
};
dhtmlXCombo_defaultOption.prototype.select = function () {
    if (this.content) {
        this.content.className = "dhx_selected_option" + (dhtmlx.skin ? " combo_" + dhtmlx.skin + "_sel" : "")
    }
};
dhtmlXCombo_defaultOption.prototype.hide = function (a) {
    this.render().style.display = a ? "none" : ""
};
dhtmlXCombo_defaultOption.prototype.isHidden = function () {
    return (this.render().style.display == "none")
};
dhtmlXCombo_defaultOption.prototype.deselect = function () {
    if (this.content) {
        this.render()
    }
    this.content.className = ""
};
dhtmlXCombo_defaultOption.prototype.setValue = function (a) {
    this.value = a.value || "";
    this.text = a.text || "";
    this.css = a.css || "";
    this.content = null
};
dhtmlXCombo_defaultOption.prototype.render = function () {
    if (!this.content) {
        this.content = document.createElement("DIV");
        this.content._self = this;
        this.content.style.cssText = "width:100%; overflow:hidden;" + this.css;
        if (_isOpera || _isKHTML) {
            this.content.style.padding = "2px 0px 2px 0px"
        }
        this.content.innerHTML = this.text;
        this._ctext = (typeof this.content.textContent != "undefined") ? this.content.textContent : this.content.innerText
    }
    return this.content
};
dhtmlXCombo_defaultOption.prototype.data = function () {
    if (this.content) {
        return [this.value, this._ctext ? this._ctext : this.text]
    }
};
dhtmlXCombo_defaultOption.prototype.DrawHeader = function (a, b, d, c) {
    var e = document.createElement("DIV");
    e.style.width = d + "px";
    e.className = "dhx_combo_box " + (dhtmlx.skin || "");
    e._self = a;
    a.DOMelem = e;
    this._DrawHeaderInput(a, b, d, c);
    this._DrawHeaderButton(a, b, d);
    a.DOMParent.appendChild(a.DOMelem)
};
dhtmlXCombo_defaultOption.prototype._DrawHeaderInput = function (a, b, d, c) {
    var e = document.createElement("input");
    e.setAttribute("autocomplete", "off");
    e.type = "text";
    e.className = "dhx_combo_input";
    if (c) {
        e.tabIndex = c
    }
    e.style.width = d - 19 - (document.compatMode == "BackCompat" ? 0 : 3) + "px";
    a.DOMelem.appendChild(e);
    a.DOMelem_input = e;
    e = document.createElement("input");
    e.type = "hidden";
    e.name = b;
    a.DOMelem.appendChild(e);
    a.DOMelem_hidden_input = e;
    e = document.createElement("input");
    e.type = "hidden";
    e.name = (b || "").replace(/(\]?)$/, "_new_value$1");
    e.value = "true";
    a.DOMelem.appendChild(e);
    a.DOMelem_hidden_input2 = e
};
dhtmlXCombo_defaultOption.prototype._DrawHeaderButton = function (a, b, c) {
    var d = document.createElement("img");
    d.className = "dhx_combo_img";
    if (dhtmlx.image_path) {
        dhx_globalImgPath = dhtmlx.image_path
    }
    d.src = (window.dhx_globalImgPath ? dhx_globalImgPath : "") + "combo_select" + (dhtmlx.skin ? "_" + dhtmlx.skin : "") + ".gif";
    a.DOMelem.appendChild(d);
    a.DOMelem_button = d
};
dhtmlXCombo_defaultOption.prototype.RedrawHeader = function (a) {};
dhtmlXCombo_optionTypes["default"] = dhtmlXCombo_defaultOption;
dhtmlXCombo.prototype.dhx_Event = function () {
    this.dhx_SeverCatcherPath = "";
    this.attachEvent = function (original, catcher, CallObj) {
        CallObj = CallObj || this;
        original = "ev_" + original;
        if ((!this[original]) || (!this[original].addEvent)) {
            var z = new this.eventCatcher(CallObj);
            z.addEvent(this[original]);
            this[original] = z
        }
        return (original + ":" + this[original].addEvent(catcher))
    };
    this.callEvent = function (name, arg0) {
        if (this["ev_" + name]) {
            return this["ev_" + name].apply(this, arg0)
        }
        return true
    };
    this.checkEvent = function (name) {
        if (this["ev_" + name]) {
            return true
        }
        return false
    };
    this.eventCatcher = function (obj) {
        var dhx_catch = new Array();
        var m_obj = obj;
        var func_server = function (catcher, rpc) {
            catcher = catcher.split(":");
            var postVar = "";
            var postVar2 = "";
            var target = catcher[1];
            if (catcher[1] == "rpc") {
                postVar = '<?xml version="1.0"?><methodCall><methodName>' + catcher[2] + "</methodName><params>";
                postVar2 = "</params></methodCall>";
                target = rpc
            }
            var z = function () {};
            return z
        };
        var z = function () {
            if (dhx_catch) {
                var res = true
            }
            for (var i = 0; i < dhx_catch.length; i++) {
                if (dhx_catch[i] != null) {
                    var zr = dhx_catch[i].apply(m_obj, arguments);
                    res = res && zr
                }
            }
            return res
        };
        z.addEvent = function (ev) {
            if (typeof (ev) != "function") {
                if (ev && ev.indexOf && ev.indexOf("server:") == 0) {
                    ev = new func_server(ev, m_obj.rpcServer)
                } else {
                    ev = eval(ev)
                }
            }
            if (ev) {
                return dhx_catch.push(ev) - 1
            }
            return false
        };
        z.removeEvent = function (id) {
            dhx_catch[id] = null
        };
        return z
    };
    this.detachEvent = function (id) {
        if (id != false) {
            var list = id.split(":");
            this[list[0]].removeEvent(list[1])
        }
    }
};
(function () {
    dhtmlx.extend_api("dhtmlXCombo", {
        _init: function (a) {
            if (a.image_path) {
                dhx_globalImgPath = a.image_path
            }
            return [a.parent, a.name, (a.width || "100%"), a.type, a.index]
        }, filter: "filter_command",
        auto_height: "enableOptionAutoHeight",
        auto_position: "enableOptionAutoPositioning",
        auto_width: "enableOptionAutoWidth",
        xml: "loadXML",
        readonly: "readonly",
        items: "addOption"
    }, {
        filter_command: function (a) {
            if (typeof a == "string") {
                this.enableFilteringMode(true, a)
            } else {
                this.enableFilteringMode(a)
            }
        }
    })
})();
dhtmlXCombo.prototype.enableOptionAutoPositioning = function (b) {
    if (!this.ListAutoPosit) {
        this.ListAutoPosit = 1
    }
    this.attachEvent("onOpen", function () {
        this._setOptionAutoPositioning(b)
    });
    this.attachEvent("onXLE", function () {
        this._setOptionAutoPositioning(b)
    })
};
dhtmlXCombo.prototype._setOptionAutoPositioning = function (f) {
    if (typeof f != "undefined" && !convertStringToBoolean(f)) {
        return this.ListPosition = "Bottom", this.ListAutoPosit = 0, !0
    }
    var e = this.getPosition(this.DOMelem),
        h = this._getClientHeight() - e[1] - this.DOMelem.offsetHeight,
        g = this.autoHeight ? this.DOMlist.scrollHeight : parseInt(this.DOMlist.offsetHeight);
    this.ListPosition = h < g && e[1] > g ? "Top" : "Bottom";
    this._positList();
    _isIE && this._IEFix(!0)
};
dhtmlXCombo.prototype._getClientHeight = function () {
    return document.compatMode == "CSS1Compat" && !window.opera ? document.documentElement.clientHeight : document.body.clientHeight
};
dhtmlXCombo.prototype.setOptionWidth = function (b) {
    if (arguments.length > 0 && (this.DOMlist.style.width = b + "px", this.DOMlistF)) {
        this.DOMlistF.style.width = b + "px"
    }
};
dhtmlXCombo.prototype.setOptionHeight = function (b) {
    if (arguments.length > 0) {
        this.DOMlist.style.height = _isIE ? this.DOMlistF.style.height = b + "px" : b + "px";
        if (this.DOMlistF) {
            this.DOMlistF.style.height = this.DOMlist.style.height
        }
        this._positList();
        _isIE && this._IEFix(!0)
    }
};
dhtmlXCombo.prototype.enableOptionAutoWidth = function (b) {
    if (!this._listWidthConf) {
        this._listWidthConf = this.DOMlist.offsetWidth
    }
    arguments.length == 0 && (b = 1);
    if (convertStringToBoolean(b)) {
        this.autoOptionWidth = 1, this.awOnOpen = this.attachEvent("onOpen", function () {
            this._setOptionAutoWidth()
        }), this.awOnXLE = this.attachEvent("onXLE", function () {
            this._setOptionAutoWidth()
        })
    } else {
        if (typeof this.awOnOpen != "undefined") {
            this.autoOptionWidth = 0, this.detachEvent(this.awOnOpen), this.detachEvent(this.awOnXLE), this.setOptionWidth(this._listWidthConf)
        }
    }
};
dhtmlXCombo.prototype._setOptionAutoWidth = function () {
    var f = !this.ahOnOpen && this.DOMlist.scrollHeight > this.DOMlist.offsetHeight;
    this.setOptionWidth(1);
    for (var e = this.DOMlist.offsetWidth, h = 0; h < this.optionsArr.length; h++) {
        var g = _isFF ? this.DOMlist.childNodes[h].scrollWidth - 2 : this.DOMlist.childNodes[h].scrollWidth;
        if (g > e) {
            e = this.DOMlist.childNodes[h].scrollWidth
        }
    }
    e += f ? 18 : 0;
    this.setOptionWidth(this.DOMelem.offsetWidth > e ? this.DOMelem.offsetWidth : e + 2)
};
dhtmlXCombo.prototype.enableOptionAutoHeight = function (g, f) {
    if (!this._listHeightConf) {
        this._listHeightConf = this.DOMlist.style.height == "" ? 100 : parseInt(this.DOMlist.style.height)
    }
    arguments.length == 0 && (g = 1);
    this.autoHeight = convertStringToBoolean(g);
    var j = this;
    if (this.autoHeight) {
        var i = function () {
            window.setTimeout(function () {
                j._setOptionAutoHeight(g, f)
            }, 1)
        };
        this.ahOnOpen = this.attachEvent("onOpen", i);
        if (!this.awOnOpen) {
            this.ahOnXLE = this.attachEvent("onXLE", i)
        }
        var h;
        this.ahOnKey = this.attachEvent("onKeyPressed", function () {
            this._filter && (h && window.clearTimeout(h), window.setTimeout(function () {
                j.DOMlist.style.display == "block" && j._setOptionAutoHeight(g, f)
            }, 50))
        })
    } else {
        typeof this.ahOnOpen != "undefined" && (this.detachEvent(this.ahOnOpen), this.ahOnXLE && this.detachEvent(this.ahOnXLE), this.ahOnKey && this.detachEvent(this.ahOnKey), this.setOptionHeight(this._listHeightConf))
    }
};
dhtmlXCombo.prototype._setOptionAutoHeight = function (e, d) {
    if (convertStringToBoolean(e)) {
        this.setOptionHeight(1);
        var f = 0;
        this.optionsArr.length > 0 ? (f = this.DOMlist.scrollHeight > this.DOMlist.offsetHeight ? this.DOMlist.scrollHeight + 2 : this.DOMlist.offsetHeight, arguments.length > 1 && d && (d = parseInt(d), f = f > d ? d : f), this.setOptionHeight(f)) : this.DOMlist.style.display = "none"
    }
};
if (!window.dhtmlx) {
    dhtmlx = {}
}
dhtmlx.Template = {
    _cache: {},
    empty: function () {
        return ""
    }, setter: function (a) {
        return dhtmlx.Template.fromHTML(a)
    }, obj_setter: function (b) {
        var a = dhtmlx.Template.setter(b);
        var c = this;
        return function () {
            return a.apply(c, arguments)
        }
    }, fromHTML: function (a) {
        if (typeof a == "function") {
            return a
        }
        if (this._cache[a]) {
            return this._cache[a]
        }
        a = (a || "").toString();
        a = a.replace(/[\r\n]+/g, "\\n");
        a = a.replace(/\{obj\.([^}?]+)\?([^:]*):([^}]*)\}/g, '"+(obj.$1?"$2":"$3")+"');
        a = a.replace(/\{common\.([^}\(]*)\}/g, '"+common.$1+"');
        a = a.replace(/\{common\.([^\}\(]*)\(\)\}/g, '"+(common.$1?common.$1(obj):"")+"');
        a = a.replace(/\{obj\.([^}]*)\}/g, '"+obj.$1+"');
        a = a.replace(/#([a-z0-9_]+)#/gi, '"+obj.$1+"');
        a = a.replace(/\{obj\}/g, '"+obj+"');
        a = a.replace(/\{-obj/g, "{obj");
        a = a.replace(/\{-common/g, "{common");
        a = 'return "' + a + '";';
        return this._cache[a] = Function("obj", "common", a)
    }
};
dhtmlXCombo_htmlOption = function () {
    this.init()
};
dhtmlXCombo_htmlOption.prototype = new dhtmlXCombo_defaultOption;
dhtmlXCombo_htmlOption.prototype.setValue = function (a) {
    this.value = a.value || "";
    this.text = a.text || "";
    this.css = a.css || "";
    this.htmltemplate = a.htmltemplate || "";
    this.inputTextTemplate = a.inputTextTemplate || ""
};
dhtmlXCombo_htmlOption.prototype.render = function () {
    if (!this.content) {
        this.content = document.createElement("DIV");
        this.content._self = this;
        this.content.style.cssText = "width:100%; overflow:hidden;white-space:nowrap; " + this.css;
        var a = "";
        var b = this.text;
        if (this.htmltemplate) {
            b = dhtmlx.Template.obj_setter(this.htmltemplate).call(this.text, this.text)
        }
        a += '<div style="display:inline;vertical-align:middle;">' + b + "</div>";
        this.content.innerHTML = a;
        if (this.inputTextTemplate) {
            this._ctext = dhtmlx.Template.obj_setter(this.inputTextTemplate).call(this.text, this.text)
        } else {
            this._ctext = (typeof this.content.textContent != "undefined") ? this.content.textContent : this.content.innerText
        }
    }
    return this.content
};
dhtmlXCombo.prototype.setHTMLTemplate = function (a) {
    this.htmltemplate = a
};
dhtmlXCombo.prototype.setInputTextTemplate = function (a) {
    this.inputTextTemplate = a
};
dhtmlXCombo.prototype._addOption = function (a) {
    dOpt = new this._optionObject();
    this.optionsArr.push(dOpt);
    a.htmltemplate = this.htmltemplate;
    a.inputTextTemplate = this.inputTextTemplate;
    dOpt.setValue.apply(dOpt, [a]);
    this.redrawOptions()
};
dhtmlXCombo.prototype.setFilterNames = function (a) {
    if (a && a.length) {
        this.filterNames = a
    } else {
        alert(" dhtmlXCombo.dhtmlXCombo filtersName must be an array")
    }
};
dhtmlXCombo.prototype.getFilterNames = function () {
    return this.filterNames || []
};
dhtmlXCombo_optionTypes.html = dhtmlXCombo_htmlOption;
dhtmlXCombo.prototype.filterSelf = function (g) {
    var f = this.getComboText();
    if (this._xml) {
        this._lkmode = g;
        this._fetchOptions(0, f)
    }
    var d = new RegExp("([" + this.filterEntities.join("\\") + "])", "g");
    f = f.replace(d, "\\$1");
    var h = (this._anyPosition ? "" : "^") + f;
    var c = new RegExp(h, "i");
    this.filterAny = false;
    for (var b = 0; b < this.optionsArr.length; b++) {
        var e = null;
        if (typeof this.optionsArr[0].text == "object" && this.filterNames) {
            e = false;
            for (var a = 0; a < this.filterNames.length; a++) {
                e = c.test(this.optionsArr[b].text[this.filterNames[a]]);
                if (e) {
                    break
                }
            }
        } else {
            e = c.test(this.optionsArr[b].content ? this.optionsArr[b].data()[1] : this.optionsArr[b].text)
        }
        this.filterAny |= e;
        this.optionsArr[b].hide(!e)
    }
    if (!this.filterAny) {
        this.closeAll();
        this._activeMode = true
    } else {
        if (this.DOMlist.style.display != "block") {
            this.openSelect()
        }
        if (_isIE) {
            this._IEFix(true)
        }
    }
    this.unSelectOption()
};
if (!window.dhtmlx) {
    window.dhtmlx = {}
}(function () {
    var g = null;

    function c(u, s) {
        var t = u.callback;
        p(false);
        if (u.box.parentNode) {
            u.box.parentNode.removeChild(u.box)
        }
        g = u.box = null;
        if (t) {
            t(s)
        }
    }

    function r(t) {
        if (g) {
            t = t || event;
            var s = t.which || event.keyCode;
            if (dhtmlx.message.keyboard) {
                if (s == 13 || s == 32) {
                    c(g, true)
                }
                if (s == 27) {
                    c(g, false)
                }
            }
            if (t.preventDefault) {
                t.preventDefault()
            }
            return !(t.cancelBubble = true)
        }
    }
    if (document.attachEvent) {
        document.attachEvent("onkeydown", r)
    } else {
        document.addEventListener("keydown", r, true)
    }

    function p(t) {
        if (!p.cover) {
            p.cover = document.createElement("DIV");
            p.cover.onkeydown = r;
            p.cover.className = "dhx_modal_cover";
            document.body.appendChild(p.cover)
        }
        var s = document.body.scrollHeight;
        p.cover.style.display = t ? "inline-block" : "none"
    }

    function a(t, s) {
        return "<div class='dhtmlx_popup_button' result='" + s + "' ><div>" + t + "</div></div>"
    }

    function n(t) {
        if (!i.area) {
            i.area = document.createElement("DIV");
            i.area.className = "dhtmlx_message_area";
            i.area.style[i.position] = "5px";
            document.body.appendChild(i.area)
        }
        i.hide(t.id);
        var s = document.createElement("DIV");
        s.innerHTML = "<div>" + t.text + "</div>";
        s.className = "dhtmlx-info dhtmlx-" + t.type;
        s.onclick = function () {
            i.hide(t.id);
            t = null
        };
        if (i.position == "bottom" && i.area.firstChild) {
            i.area.insertBefore(s, i.area.firstChild)
        } else {
            i.area.appendChild(s)
        } if (t.expire > 0) {
            i.timers[t.id] = window.setTimeout(function () {
                i.hide(t.id)
            }, t.expire)
        }
        i.pull[t.id] = s;
        s = null;
        return t.id
    }

    function l(t, v, y) {
        var x = document.createElement("DIV");
        x.className = " dhtmlx_modal_box dhtmlx-" + t.type;
        x.setAttribute("dhxbox", 1);
        var s = "";
        if (t.width) {
            x.style.width = t.width
        }
        if (t.height) {
            x.style.height = t.height
        }
        if (t.title) {
            s += '<div class="dhtmlx_popup_title">' + t.title + "</div>"
        }
        s += '<div class="dhtmlx_popup_text"><span>' + (t.content ? "" : t.text) + '</span></div><div  class="dhtmlx_popup_controls">';
        if (v) {
            s += a(t.ok || "OK", true)
        }
        if (y) {
            s += a(t.cancel || "Cancel", false)
        }
        if (t.buttons) {
            for (var u = 0; u < t.buttons.length; u++) {
                s += a(t.buttons[u], u)
            }
        }
        s += "</div>";
        x.innerHTML = s;
        if (t.content) {
            var w = t.content;
            if (typeof w == "string") {
                w = document.getElementById(w)
            }
            if (w.style.display == "none") {
                w.style.display = ""
            }
            x.childNodes[t.title ? 1 : 0].appendChild(w)
        }
        x.onclick = function (B) {
            B = B || event;
            var A = B.target || B.srcElement;
            if (!A.className) {
                A = A.parentNode
            }
            if (A.className == "dhtmlx_popup_button") {
                var z = A.getAttribute("result");
                z = (z == "true") || (z == "false" ? false : z);
                c(t, z)
            }
        };
        t.box = x;
        if (v || y) {
            g = t
        }
        return x
    }

    function f(s) {
        if (s) {
            if (s.indexOf("双向核验") >= 0) {
                return true
            }
        }
        return false
    }

    function j(s, t, v) {
        var w = $("#defaultwarningAlert_id")[0];
        var u = null;
        if (w) {
            u = w;
            $("#content_defaultwarningAlert_title").html(s.title || "");
            $("#content_defaultwarningAlert_hearder").html(s.text || "");
            $("#content_defaultwarningAlert_body").html(s.body || "");
            $("#qd_closeDefaultWarningWindowDialog_id").html(s.ok || "确定")
        } else {
            u = $('<div id="defaultwarningAlert_id"><div class="mark"></div><div class="up-box w600" id="content_defaultwarningAlert_id" style="border:#909090 0 solid;color:#333;box-shadow:2px 2px 10px #909090;"><div class="up-box-hd" ><span id="content_defaultwarningAlert_title">' + (s.title || "") + '</span><a href="javascript:"id="gb_closeDefaultWarningWindowDialog_id">关闭</a></div><div class="up-box-bd"><div class="up-con clearfix"><span class="icon" id="alert_icon_id"></span> <div class="r-txt"><div class="tit" id="content_defaultwarningAlert_hearder" >' + (s.text || "") + '</div><P  id="content_defaultwarningAlert_body">' + (s.body || "") + '</P></div></div> <div class="lay-btn"><a href="javascript:" id="qd_closeDefaultWarningWindowDialog_id" class="btn92s">' + (s.ok || "确定") + "</a></div></div></div></div>")[0]
        }
        u.setAttribute("dhxbox", 1);
        $(u).css("z-index", "20000");
        if (navigator.appVersion.indexOf("MSIE 6") > -1) {} else {
            $(u).css("position", "fixed")
        }
        s.box = u;
        if (!s.hidden) {
            p(true)
        }
        document.body.appendChild(u);
        $("#alert_icon_id").removeClass().addClass("icon");
        if (f(s.text)) {
            $("#alert_icon_id").addClass("ico-sxhy02")
        } else {
            $("#alert_icon_id").addClass("i-warn")
        }
        $(u).css({
            left: ($(window).width() - $(u).outerWidth()) / 2 - 300,
            top: ($(window).height() - $(u).outerHeight()) / 2 - 110
        });
        if (navigator.appVersion.indexOf("MSIE 6") > -1) {
            $("#content_defaultwarningAlert_id").css({
                "margin-left": "-300px",
                left: "50%",
                "margin-top": "-110px",
                top: ($(window).height() - $(u).outerHeight()) / 2
            })
        }
        u.onkeydown = r;
        u.focus();
        if (s.hidden) {
            dhtmlx.modalbox.hide(u)
        }
        $("#qd_closeDefaultWarningWindowDialog_id").on("click", function (x) {
            c(s);
            if (x && x.preventDefault) {
                x.preventDefault()
            } else {
                window.event.returnValue = false
            }
        });
        $("#gb_closeDefaultWarningWindowDialog_id").on("click", function (x) {
            c(s);
            if (x && x.preventDefault) {
                x.preventDefault()
            } else {
                window.event.returnValue = false
            }
        });
        if (t || v) {
            g = s
        }
        return u
    }

    function e() {
        if ("pageYOffset" in window) {
            return window.pageYOffset
        } else {
            if (document.compatMode == "BackCompat") {
                return document.body.scrollTop
            } else {
                return document.documentElement.scrollTop
            }
        }
    }

    function d(s) {
        return j(s, true, false)
    }

    function b(s) {
        return j(s, true, true)
    }

    function m(s) {
        return q(s)
    }

    function q(s) {
        var t = $(s.targSrc)[0];
        t.setAttribute("dhxbox", 1);
        $(t).css("z-index", "20000");
        s.box = t;
        if (!s.hidden) {
            p(true)
        }
        document.body.appendChild(t);
        if (navigator.appVersion.indexOf("MSIE 6") > -1) {
            $(t).css("position", "absolute");
            $(t).css({
                "margin-left": "-300px",
                left: "50%",
                "margin-top": "-110px",
                top: ($(window).height() - $(t).outerHeight()) / 2
            })
        } else {
            $(t).css("position", "fixed");
            $(t).css({
                left: ($(window).width() - $(t).outerWidth()) / 2,
                top: ($(window).height() - $(t).outerHeight()) / 2
            })
        }
        t.onkeydown = r;
        t.focus();
        if (s.hidden) {
            dhtmlx.modalbox.hide(t)
        }
        return t
    }

    function k(t, s, u) {
        if (typeof t != "object") {
            if (typeof s == "function") {
                u = s;
                s = ""
            }
            t = {
                text: t,
                type: s,
                callback: u
            }
        }
        return t
    }

    function o(u, t, s, v) {
        if (typeof u != "object") {
            u = {
                text: u,
                type: t,
                expire: s,
                id: v
            }
        }
        u.id = u.id || i.uid();
        u.expire = u.expire || i.expire;
        return u
    }
    dhtmlx.alert = function () {
        var s = k.apply(this, arguments);
        s.type = s.type || "confirm";
        return d(s)
    };
    dhtmlx.confirm = function () {
        var s = k.apply(this, arguments);
        s.type = s.type || "alert";
        return b(s)
    };
    dhtmlx.modalbox = function () {
        var s = k.apply(this, arguments);
        s.type = s.type || "alert";
        return m(s)
    };
    dhtmlx.createWin = function () {
        var s = k.apply(this, arguments);
        s.type = s.type || "win";
        return h(s)
    };
    dhtmlx.modality = function (s) {
        p(s)
    };

    function h(u) {
        var v = $("#" + u.winId)[0];
        v.setAttribute("dhxbox", 1);
        $(v).css("z-index", "20000");
        if (navigator.appVersion.indexOf("MSIE 6") > -1) {} else {
            $(v).css("position", "fixed")
        }
        u.box = v;
        if (!u.hidden) {
            p(true)
        }
        document.body.appendChild(v);
        var s = $(window).width() / 2 - 300;
        var z = 0;
        if (e() > 0) {
            z = ($(window).height() / 2) - e() / 2
        } else {
            z = $(window).height() / 2 - 150
        }
        $(v).css("left", s + "px");
        $(v).css("top", z + "px");
        v.onkeydown = r;
        $(v).show();
        if (u.hidden) {
            dhtmlx.modalbox.hide(v)
        }
        if (u.closeWinId) {
            var w = u.closeWinId.length;
            for (var t = 0; t < w; t++) {
                $("#" + u.closeWinId[t]).unbind("click");
                $("#" + u.closeWinId[t]).on("click", function (y) {
                    var x = u.callback;
                    p(false);
                    $(u.box).hide();
                    g = u.box = null;
                    if (x) {
                        x()
                    }
                    if (y && y.preventDefault) {
                        y.preventDefault()
                    } else {
                        window.event.returnValue = false
                    }
                })
            }
        }
        if (u.okId) {
            $("#" + u.okId).unbind("click");
            $("#" + u.okId).on("click", function (y) {
                if (u.checkConfirm) {
                    if (u.checkConfirm()) {
                        var x = u.okCallBack;
                        p(false);
                        $(u.box).hide();
                        g = u.box = null;
                        if (x) {
                            x()
                        }
                    }
                } else {
                    var x = u.okCallBack;
                    p(false);
                    $(u.box).hide();
                    g = u.box = null;
                    if (x) {
                        x()
                    }
                } if (y && y.preventDefault) {
                    y.preventDefault()
                } else {
                    window.event.returnValue = false
                }
            })
        }
        return v
    }
    dhtmlx.modalbox.hide = function (s) {
        while (s && s.getAttribute && !s.getAttribute("dhxbox")) {
            s = s.parentNode
        }
        if (s) {
            s.parentNode.removeChild(s);
            p(false)
        }
    };
    var i = dhtmlx.message = function (v, u, t, w) {
        v = o.apply(this, arguments);
        v.type = v.type || "info";
        var s = v.type.split("-")[0];
        switch (s) {
        case "alert":
            return d(v);
        case "confirm":
            return b(v);
        case "modalbox":
            return m(v);
        case "win":
            return h(v);
        default:
            return n(v);
            break
        }
    };
    i.seed = (new Date()).valueOf();
    i.uid = function () {
        return i.seed++
    };
    i.expire = 4000;
    i.keyboard = true;
    i.position = "top";
    i.pull = {};
    i.timers = {};
    i.hideAll = function () {
        for (var s in i.pull) {
            i.hide(s)
        }
    };
    i.hide = function (t) {
        var s = i.pull[t];
        if (s && s.parentNode) {
            window.setTimeout(function () {
                s.parentNode.removeChild(s);
                s = null
            }, 2000);
            s.className += " hidden";
            if (i.timers[t]) {
                window.clearTimeout(i.timers[t])
            }
            delete i.pull[t]
        }
    }
})();
var uampassport = {};
(function () {
    $(document).ready(function () {
        var a = $.ajax;
        var d = c()["redirect"] || passport_okPage;
        var b = c()["isFromExtened"];
        uampassport.checkLogin = function () {
            var e = $.cookie("tk");
            if (e == null || e == undefined || e == "") {
                a({
                    type: "POST",
                    url: passport_authuam,
                    data: {
                        appid: passport_appId
                    },
                    xhrFields: {
                        withCredentials: true
                    },
                    dataType: "json",
                    success: function (f) {
                        if (f.result_code == "0") {
                            var g = f.newapptk || f.apptk;
                            uampassport.uampassport(g)
                        } else {
                            if (b == 1) {
                                window.location.href = d;
                                return
                            }
                            window.location.href = ctx + passport_loginPage
                        }
                    }, error: function () {}
                })
            } else {
                uampassport.uampassport(e)
            }
        };
        uampassport.uampassport = function (e) {
            a({
                type: "POST",
                url: ctx + passport_authclient,
                data: {
                    tk: e
                },
                datatype: "json",
                success: function (f) {
                    if (f.result_code == 0) {
                        window.location.href = d
                    } else {
                        if (b == 1) {
                            window.location.href = d;
                            return
                        }
                        window.location.href = ctx + passport_loginPage
                    }
                }, error: function () {}
            })
        };

        function c() {
            var h = [],
                g;
            var e = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&");
            for (var f = 0; f < e.length; f++) {
                g = e[f].split("=");
                h.push(g[0]);
                h[g[0]] = g[1]
            }
            return h
        }
    })
})();
/*!
 * 对jquery的ajax的封装，支持请求本地数据和请求远程http服务 该js必须放在jquery.js后面 同时还负责初始化各种js变量
 * ots_global.calendarLang 初始化calendar组件的国际化信息。
 */
var alertWarningMsg;
var alertWarningMsgByHeader;
var alertWarningMsgByTit_header;
(function () {
    var e = null;
    $(document).ready(function () {
        e = b()
    });
    var a = null;
    if (typeof globalRepeatSubmitToken != "undefined") {
        a = globalRepeatSubmitToken
    }
    var j = null;
    var l = "_json_att";
    var d = "_es_hiddenform";
    var k = "<form  method='post' id='" + d + "'><input type='hidden' name='" + l + "'></input></form>";
    var h = $.ajax;
    ots_global = {};
    $.ajax = function (o, n) {
        if (typeof o == "object") {
            n = o;
            o = undefined
        }
        n = n || {};
        var m = n.isAlert || true;
        if (n.success) {
            var p = n.success;
            n.success = function (y, s, x) {
                if (y && y.c_url) {
                    window[y.c_name] = y.c_url
                }
                if (y && y.validateMessagesShowId) {
                    var w = y.messages;
                    if (w && w.length > 0) {
                        var v = "";
                        for (var u = 0; u < w.length; u++) {
                            v += w[u] + "\n"
                        }
                        dhtmlx.alert({
                            title: w["message.info"],
                            ok: w["button.ok"],
                            text: v,
                            callback: function () {
                                if (y.url) {
                                    window.location = ctx + y.url
                                }
                            }
                        })
                    }
                    var z = y.validateMessages;
                    var v = "";
                    for (var t in z) {
                        v += t + " :" + z[t] + "</br>"
                    }
                    if (y.attributes) {
                        j = y.attributes
                    }
                    if (y.repeatSubmitToken && y.repeatSubmitToken != "") {
                        a = y.repeatSubmitToken
                    }
                    if (v) {
                        if (m) {
                            dhtmlx.alert({
                                title: w["message.info"],
                                ok: w["button.ok"],
                                text: v,
                                callback: function () {
                                    p.call(this, y, s, x)
                                }
                            })
                        } else {
                            $("#" + y.validateMessagesShowId).html(v).show();
                            p.call(this, y, s, x)
                        }
                    } else {
                        $("#" + y.validateMessagesShowId).html("").hide();
                        p.call(this, y, s, x)
                    }
                } else {
                    p.call(this, y, s, x)
                }
            }
        }
        var r = n.data || {};
        var q = true;
        if (n.isTakeParam == false) {
            q = false
        }
        if (q) {
            if (j) {
                r[l] = j
            } else {
                r[l] = $("input[name=_json_att]").val()
            }
        }
        if ("undefined" != typeof (a) && a != null) {
            r.REPEAT_SUBMIT_TOKEN = a
        }
        n.data = r;
        h.call(this, o, n)
    };
    if (typeof otsRedirect == "undefined") {
        otsRedirect = function (r, o, p, q) {
            p = p || {};
            if (r && r == "post") {
                if ($("#" + d).length == 0) {
                    $(document.body).append(k)
                }
                if (j) {
                    $("#" + d + " input[name='" + l + "']").val(j)
                }
                $("#" + d + " input[name='" + l + "'] ~ input").remove();
                if (a != null) {
                    $("#" + d).append("<input type='hidden' name='REPEAT_SUBMIT_TOKEN'></input>");
                    $("#" + d + " input[name='REPEAT_SUBMIT_TOKEN']").val(a)
                }
                if (p) {
                    for (var n in p) {
                        var m = "<input type='hidden' name='" + n + "'></input>";
                        $("#" + d).append(m);
                        $("#" + d + " input[name='" + n + "']").val(p[n])
                    }
                }
                if (q != null) {
                    $("#" + d).attr("target", q)
                } else {
                    $("#" + d).removeAttr("target")
                }
                $("#" + d).attr("action", o);
                $("#" + d).submit()
            } else {
                if (j) {
                    if (o.indexOf("?") > 0) {
                        o += "&" + l + "=" + j
                    } else {
                        o += "?" + l + "=" + j
                    }
                }
                if (p) {
                    for (var n in p) {
                        if (o.indexOf("?") > 0) {
                            o += "&" + n + "=" + p[n]
                        } else {
                            o += "?" + n + "=" + p[n]
                        }
                    }
                }
                switch (q) {
                case "_blank":
                    window.open(o);
                    break;
                default:
                    window.location.href = o
                }
            }
        }
    }(function () {
        var m = {
            dateformat: "%Y-%m-%d",
            monthesFNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            monthesSNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            daysFNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            daysSNames: ["日", "一", "二", "三", "四", "五", "六"],
            weekstart: 1
        };
        ots_global.calendarLang = ots_global.calendarLang || {};
        ots_global.calendarLang.zh_CN = m
    })();

    function b() {
        var m = new dhtmlXWindows();
        m.enableAutoViewport(true);
        m.setSkin("dhx_terrace");
        m.setImagePath(ctx + "resources/js/rich/windows/imgs/");
        return m
    }
    alertWarningMsgByHeader = function (m) {
        alertWarningMsg(messages["message.info"], m, "", messages["button.ok"])
    };
    alertWarningMsgByTit_header = function (m, n) {
        alertWarningMsg(m, n, "", messages["button.ok"])
    };
    alertWarningMsg = function (p, s, n) {
        i(p, s, n, messages["button.ok"]);
        $("#qd_closeDefaultWarningWindowDialog_id").click(function () {
            f()
        });
        $("#gb_closeDefaultWarningWindowDialog_id").click(function () {
            f()
        });
        var r = "defaultwarningAlert_id";
        var o = c(r);
        var m = $(window).width() / 2 - 300;
        var q = g() + ($(window).height() / 2 - 200);
        o.setDimension($("#content_" + r).width(), $("#content_" + r).height() + 10);
        $(".dhtmlx_window_active").height($("#content_" + r).height());
        $(".dhtmlx_window_active").css({
            left: m + "px",
            top: q + "px"
        })
    };

    function g() {
        if ("pageYOffset" in window) {
            return window.pageYOffset
        } else {
            if (document.compatMode == "BackCompat") {
                return document.body.scrollTop
            } else {
                return document.documentElement.scrollTop
            }
        }
    }

    function i(o, q, m, p) {
        var n = '<div id="defaultwarningAlert_id" style="display:none;" ><div class="mark"></div><div class="up-box w600" id="content_defaultwarningAlert_id"><div class="up-box-hd" ><span id="content_defaultwarningAlert_title">' + o + '</span><a href="#nogo"id="gb_closeDefaultWarningWindowDialog_id">关闭</a></div><div class="up-box-bd"><div class="up-con clearfix"><span class="icon i-warn"></span> <div class="r-txt"><div class="tit" id="content_defaultwarningAlert_hearder" >' + q + '</div><P  id="content_defaultwarningAlert_body">' + m + '</P></div></div> <div class="lay-btn"><a href="#nogo" id="qd_closeDefaultWarningWindowDialog_id" class="btn92s">' + p + "</a></div></div></div></div>";
        $("body").append(n)
    }

    function c(n) {
        var m = e.createWindow(n + "_", 50, 10, 660, 100);
        m.attachObject(n);
        m.clearIcon();
        m.denyResize();
        m.setModal(true);
        m.center();
        m.button("park").hide();
        m.button("minmax1").hide();
        m.hideHeader();
        return m
    }

    function f() {
        var m = "defaultwarningAlert_id";
        if (e.isWindow(m + "_")) {
            e.window(m + "_").close()
        }
    }
})();
var href_baseUrl_1 = "https://www.12306.cn/";
var href_path_1 = "index/";
var href_baseUrl_2 = "https://kyfw.12306.cn/";
var href_path_2 = "otn/";
var href_baseUrl_3 = "https://cx.12306.cn/";
var href_path_3 = "tlcx/";
var href_baseUrl_4 = "https://www.12306.cn/";
var href_path_4 = "mormhweb/";
var href_baseUrl_5 = "https://travel.12306.cn/";
var href_path_5 = "portal/";
var href_baseUrl_6 = "https://dynamic.12306.cn/";
var href_path_6 = "otn/";
var href_baseUrl_10 = "https://exservice.12306.cn/";
var href_path_10 = "excater/";
var refreshImg = null;
var _top_;
var isDebug = false;
var two_isOpenClick = ["93", "95", "97", "99"];
var other_isOpenClick = ["93", "98", "99", "91", "95", "97"];

function login_errorMsg(a) {
    $("#login_errorMsg").html(a).show()
}

function login_errorMsg_hide() {
    $("#login_errorMsg").html("").hide()
}
isCanGP = function (c, b) {
    if ("B" != c) {
        var a = two_isOpenClick.length;
        for (var d = 0; d < a; d++) {
            if (b == two_isOpenClick[d]) {
                return true
            }
        }
        return false
    } else {
        var a = other_isOpenClick.length;
        for (var d = 0; d < a; d++) {
            if (b == other_isOpenClick[d]) {
                return true
            }
        }
        return false
    }
};

function initQn() {
    if (qn_secStr) {
        $("#survey_link a").attr("href", qn_secStr);
        $("#survey_link").show()
    }
}

function initParams(c) {
    var b = new Object();
    var a = c.split("&");
    if (a.length >= 1) {
        b.linktypeid = a[0].split("=")[1]
    }
    if (a.length >= 2) {
        b.fromStationText = a[1].split("=")[1].split(",")[0];
        b.fromStation = a[1].split("=")[1].split(",")[1]
    }
    if (a.length >= 3) {
        b.toStationText = a[2].split("=")[1].split(",")[0];
        b.toStation = a[2].split("=")[1].split(",")[1]
    }
    if (a.length >= 4) {
        b.train_date = a[3].split("=")[1].split(",")[0];
        if (a[3].split("=")[1].split(",").length > 1) {
            b.back_train_date = a[3].split("=")[1].split(",")[1]
        }
    }
    if (a.length >= 5) {
        b.is_student = a[4].split("=")[1].split(",")[0];
        b.is_GDC = a[4].split("=")[1].split(",")[1];
        b.auto_query = a[4].split("=")[1].split(",")[2]
    }
    return b
}

function isLogin() {
    if ("undefined" != typeof (sessionInit) && (sessionInit) && (null != sessionInit)) {
        $("#login_user").attr("href", ctx + "view/index.html");
        $("#login_user").prev("span").html("您好，");
        $("#login_user").html(sessionInit);
        $("#regist_out").attr("href", ctx + "login/loginOut");
        $("#regist_out").html("退出")
    } else {
        $("#login_user").attr("href", ctx + "view/index.html");
        $("#login_user").prev("span").html("您好，请&nbsp");
        $("#login_user").html("登录");
        $("#regist_out").attr("href", ctx + "regist/init");
        $("#regist_out").html("注册")
    }
}

function loginAsyn(a) {
    if (a != null) {
        $("#login_user").attr("href", ctx + "view/index.html");
        $("#login_user").prev("span").html("意见反馈:<a class='cursor colorA' href='mailto:12306yjfk@rails.com.cn'>12306yjfk@rails.com.cn</a> 您好，");
        $("#login_user").html(a);
        $("#regist_out").attr("href", ctx + "login/loginOut");
        $("#regist_out").html("退出")
    } else {
        $("#login_user").attr("href", ctx + "view/index.html");
        $("#login_user").prev("span").html("意见反馈:<a class='cursor colorA' href='mailto:12306yjfk@rails.com.cn'>12306yjfk@rails.com.cn</a> 您好，请&nbsp");
        $("#login_user").html("登录");
        $("#regist_out").attr("href", ctx + "regist/init");
        $("#regist_out").html("注册")
    }
}

function _initGuideShow(b) {
    var a = $(".nav-list a");
    a.removeClass("on");
    $("#js-xd").find(".nav-list").show();
    $("#js-xd").unbind("mouseout");
    $("#js-xd").unbind("mouseover");
    $.each(a, function (c) {
        if (c == b) {
            $(a[c]).addClass("on");
            return
        }
    })
}

function checkHover(b, a) {
    if (getEvent(b).type == "mouseover") {
        return !contains(a, getEvent(b).relatedTarget || getEvent(b).fromElement) && !((getEvent(b).relatedTarget || getEvent(b).fromElement) === a)
    } else {
        return !contains(a, getEvent(b).relatedTarget || getEvent(b).toElement) && !((getEvent(b).relatedTarget || getEvent(b).toElement) === a)
    }
}

function getEvent(a) {
    return a || window.event
}

function contains(a, b) {
    if (a.contains) {
        return a != b && a.contains(b)
    } else {
        return !!(a.compareDocumentPosition(b) & 16)
    }
}

function initPageTitle(b) {
    var c = window.location.href;
    if (c.indexOf("/gonggao/") > -1) {
        b = 6
    } else {
        if (c.indexOf("/queryTrainInfo") > -1 || c.indexOf("/leftTicketPrice") > -1 || c.indexOf("/userCommon") > -1 || c.indexOf("/queryAgencySellTicket") > -1 || c.indexOf("/czxx") > -1 || c.indexOf("/zwdch") > -1 || c.indexOf("/zzzcx") > -1) {
            b = 7
        } else {
            if (c.indexOf("/leftTicket") > -1 || c.indexOf("/confirmPassenger") > -1) {
                b = 1
            }
        }
    }
    $(".nav .nav-item").eq(b).addClass("active");
    var d = $(".nav .nav-item");
    for (var a = 0; a < d.length; a++) {
        if (b != a) {
            d.eq(a).on("mouseenter", function () {
                $(this).addClass("active")
            }).on("mouseleave", function () {
                $(this).removeClass("active")
            })
        }
    }
}

function initNameNotice() {
    $("#name_rule").mouseenter(function (c) {
        var a = c.pageY + 10;
        var b = c.pageX;
        $(".name-tips").eq(0).css({
            top: a,
            left: b
        });
        $(".name-tips").eq(0).show()
    });
    $("#name_rule").mouseleave(function () {
        $(".name-tips").hide()
    })
}
clickCheckBoxName = function () {
    $("input[class='check']").each(function () {
        var c = $(this);
        var a = c.next("label").attr("for");
        var b = c.attr("id");
        if (null == b || "" == b || "undefined" == b) {
            var b = "checkbox_" + generateMixed();
            c.attr("id", b)
        }
        c.next("label").attr("for", b).css("cursor", "pointer")
    })
};
ret_res_info = function (e, c, g) {
    if (g == "over") {
        var f = new Array();
        var k = ticket_submit_order.ref_res_rules[c];
        var b;
        var h;
        var j;
        var a;
        for (var d = 0; d < k.length; d++) {
            if (k[d].title == "bt_15d") {
                b = k[d]
            } else {
                if (k[d].title == "48h_15d") {
                    h = k[d]
                } else {
                    if (k[d].title == "24h_48H") {
                        j = k[d]
                    } else {
                        if (k[d].title == "lt_24h") {
                            a = k[d]
                        }
                    }
                }
            }
        }
        f.push("<tr>");
        f.push("<td>" + b.refund_rule + "</td>");
        f.push("<td>" + b.res_rule + "</td>");
        f.push("<td>" + h.refund_rule + "</td>");
        f.push("<td>" + h.res_rule + "</td>");
        f.push("<td>" + j.refund_rule + "</td>");
        f.push("<td>" + j.res_rule + "</td>");
        f.push("<td>" + a.refund_rule + "</td>");
        f.push("<td>" + a.res_rule + "</td>");
        f.push("</tr>");
        $("#ret_res_info  tr:gt(1)").remove();
        $("#ret_res_info tbody").after(f.join(""));
        $("#ret_res_info").css("top", $(e).position().top + $(e).height() + 10);
        $("#ret_res_info").css("left", $(e).position().left);
        $("#ret_res_info").show()
    } else {
        $("#ret_res_info").hide()
    }
};

function generateMixed() {
    var b = "";
    var c = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for (var a = 0; a < 10; a++) {
        var d = Math.ceil(Math.random() * 61);
        b += c[d]
    }
    return b
}

function showHelpName() {
    $.ajax({
        url: "../login/existUser",
        type: "POST",
        success: function (a) {
            if (a.success) {
                sessionInit = a.name;
                if ("undefined" != typeof (sessionInit) && (sessionInit) && (null != sessionInit)) {
                    $("#login_user").attr("href", "../view/index.html");
                    $("#login_user").prev("span").html("意见反馈:<a class='cursor colorA' href='mailto:12306yjfk@rails.com.cn'>12306yjfk@rails.com.cn</a> 您好，");
                    $("#login_user").html(sessionInit);
                    $("#regist_out").attr("href", "../login/loginOut");
                    $("#regist_out").html("退出")
                } else {
                    $("#login_user").attr("href", "../view/index.html");
                    $("#login_user").prev("span").html("意见反馈:<a class='cursor colorA' href='mailto:12306yjfk@rails.com.cn'>12306yjfk@rails.com.cn</a> 您好，请&nbsp");
                    $("#login_user").html("登录");
                    $("#regist_out").attr("href", "../regist/init");
                    $("#regist_out").html("注册")
                }
            }
        }
    })
}

function controContentHeight() {
    var h = 0;
    var c = 0;
    if (window.attachEvent) {
        var b = navigator.appVersion;
        if (b.indexOf("MSIE 7.0") >= 0) {
            h = 53
        } else {
            h = 80;
            if (!document.getElementById("forget_password_id")) {
                c = 12
            }
        }
    } else {
        h = 78;
        if (!document.getElementById("forget_password_id")) {
            c = 15
        }
    }
    var f = 0;
    if (!$(".nav-list").is(":hidden")) {
        f = $(".nav-list").height()
    }
    var e = $(window).height();
    var d = $(".header").height();
    var a = $(".footer").height();
    var g = e - d - a - h + c - f;
    if (g > 400) {
        if ($("#scroll").css("display") == "block") {
            $(".content").css("min-height", g - 30)
        } else {
            $(".content").css("min-height", g)
        }
    }
}
jQuery.extend({
    dynamicLoadHref: function () {
        $('a[name="g_href"]').unbind("click").click(function () {
            var d = $(this).attr("data-redirect");
            var e = $(this).attr("data-type");
            var b = $(this).attr("data-href");
            var a = $(this).attr("data-target");
            var c = $(this).attr("data-param");
            if (d == "Y") {
                if (a == "_blank") {
                    if (e == 1) {
                        window.open(href_baseUrl_1 + href_path_1 + b + ((c && c != "") ? "&" + c : ""))
                    } else {
                        if (e == 2) {
                            window.open(href_baseUrl_2 + href_path_2 + b + ((c && c != "") ? "&" + c : ""))
                        } else {
                            if (e == 3) {
                                window.open(href_baseUrl_3 + href_path_3 + b + ((c && c != "") ? "&" + c : ""))
                            } else {
                                if (e == 4) {
                                    window.open(href_baseUrl_4 + href_path_4 + b + ((c && c != "") ? "&" + c : ""))
                                } else {
                                    if (e == 5) {
                                        window.open(href_baseUrl_5 + href_path_5 + b + ((c && c != "") ? "&" + c : ""))
                                    } else {
                                        if (e == 6) {
                                            window.open(href_baseUrl_6 + href_path_6 + b + ((c && c != "") ? "&" + c : ""))
                                        } else {
                                            if (e == 10) {
                                                window.open(href_baseUrl_10 + href_path_10 + b + ((c && c != "") ? "&" + c : ""))
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if (e == 1) {
                        window.location.href = href_baseUrl_1 + href_path_1 + b + ((c && c != "") ? "&" + c : "")
                    } else {
                        if (e == 2) {
                            window.location.href = href_baseUrl_2 + href_path_2 + b + ((c && c != "") ? "&" + c : "")
                        } else {
                            if (e == 3) {
                                window.location.href = href_baseUrl_3 + href_path_3 + b + ((c && c != "") ? "&" + c : "")
                            } else {
                                if (e == 4) {
                                    window.location.href = href_baseUrl_4 + href_path_4 + b + ((c && c != "") ? "&" + c : "")
                                } else {
                                    if (e == 5) {
                                        window.location.href = href_baseUrl_5 + href_path_5 + b + ((c && c != "") ? "&" + c : "")
                                    } else {
                                        if (e == 6) {
                                            window.location.href = href_baseUrl_6 + href_path_6 + b + ((c && c != "") ? "&" + c : "")
                                        } else {
                                            if (e == 10) {
                                                window.location.href = href_baseUrl_10 + href_path_10 + b + ((c && c != "") ? "&" + c : "")
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                if (a == "_blank") {
                    window.open(b)
                } else {
                    window.location.href = b
                }
            }
        })
    }, showNotice: function () {
        if ("undefined" == typeof (isShowNotice) || "N" != isShowNotice) {
            $("#scroll").css("display", "block");
            var c = "<li><a >“网上购票”可购买预售期内不晚于开车前30分钟的列车车票；“网上订票”可预订4至20日列车车票。</a></li>";
            if (noticeContent && "undefined" != typeof (noticeContent)) {
                var b = noticeContent.length;
                if (b > 0) {
                    for (var a = 0; a < b; a++) {
                        c += "<li><a>" + noticeContent[a] + "</a></li>"
                    }
                }
            }
            $("#scroll .notice_in ul").html(c)
        } else {
            if ("N" == isShowNotice) {
                $("#scroll").hide();
                $("div.ban-area").hide()
            }
        }
    }
});
$(function () {
    var d = 0;
    $(document).ready(function () {
        $.dynamicLoadHref();
        if ("undefined" == typeof (sessionInit)) {
            showHelpName()
        } else {}
        controContentHeight();
        $(".menu-list").on("mouseover", function (e) {
            if (checkHover(e, this)) {
                d = 1
            }
        }).on("mouseleave", function () {
            d = 0;
            $(".menu-list").hide()
        });
        $(".nav>ul>li>a").click(function () {
            $(".nav>ul>li").removeClass();
            $(this).parent().addClass("current")
        });
        $(".notice_in ul a").click(function () {
            otsRedirect("post", ctx + "index/showAnnouncement")
        });
        if ($(".phone-link").html() == undefined) {
            $(".login-info").prepend("<div class='phone-link'><a href='../appDownload/init'>手机版</a></div>")
        }
        b()
    });

    function b() {
        document.body.appendChild($('<a href="#" id="_return_top" class="return-top" title="返回顶部" style="display: block;"></a>')[0]);
        var e = !window.XMLHttpRequest;
        $("#_return_top").css({
            position: e ? "absolute" : "fixed",
            bottom: "30px",
            right: "30px"
        }).goToTop(5);
        $(window).on("scroll resize", function () {
            $("#_return_top").goToTop(5)
        })
    }
    $("#js-my").on("mouseover", function () {
        if (a) {
            clearTimeout(a)
        }
        $(".menu-list").show()
    });
    var a = null;
    $("#js-my").on("mouseout", function () {
        a = setTimeout(function () {
            if (d != 1) {
                d = 0;
                $(".menu-list").hide()
            }
        }, 120)
    });
    $("#js-xd").on("mouseover", function () {
        if (c) {
            clearTimeout(c)
        }
        $("#js-xd").addClass("nav-guide");
        $(this).find(".nav-list").show()
    });
    var c = null;
    $("#js-xd").on("mouseout", function (e) {
        var f = $(this);
        c = setTimeout(function () {
            f.find(".nav-list").hide()
        }, 120)
    });
    $(".pos-rel input").focus(function () {
        $(this).next().show();
        $(this).css("border", "1px solid #2D8DCF")
    });
    $(".pos-rel input").blur(function () {
        $(this).next().hide();
        $(this).css("border", "1px solid #CFCDC7")
    });
    $("#scroll>a:last").click(function () {
        $.ajax({
            url: ctx + "Notice/showNotice",
            type: "POST",
            success: function (e) {
                if (e.status) {
                    $("#scroll").hide();
                    $("div.ban-area").hide()
                }
            }
        })
    });
    if (!window.debug) {
        window.debug = function (f) {
            try {
                if (!window.console) {
                    window.console = {};
                    window.console.log = function () {
                        return
                    }
                }
                if (isDebug) {
                    window.console.log(f + " ")
                }
            } catch (g) {}
        }
    }
});
(function (a) {
    a.fn.goToTop = function (d) {
        var e = a(window);
        var c = a(this);
        var b = (e.scrollTop() > d) ? true : false;
        if (b) {
            c.stop().show()
        } else {
            c.stop().hide()
        }
        return this
    };
    a.fn.headerFloat = function () {
        var b = function (c) {
            var d = false;
            a(window).on("scroll resize", function () {
                var e = a(this).scrollTop();
                if (!d) {
                    d = c.position().left - 1
                }
                _top_ = c.position().top;
                if (e > _top_ + 30) {
                    if (!(navigator.appVersion.indexOf("MSIE 6") > -1)) {
                        a("#floatTable")[0].style.position = "fixed";
                        a("#floatTable")[0].style.top = 0;
                        a("#floatTable").css("z-index", "1900");
                        a("#floatTable").css("left", d)
                    } else {
                        a("#floatTable").css({
                            position: "absolute",
                            top: e,
                            left: d
                        })
                    }
                    a("#floatTable").show()
                } else {
                    a("#floatTable").css({
                        top: _top_
                    });
                    a("#floatTable").hide()
                }
            })
        };
        return a(this).each(function () {
            b(a(this))
        })
    }
})(jQuery);
var common_search_cookieArray = [];
var common_search_arrayHistory = [];
var common_search_searchhistory;
var common_search_recordCookie;
var common_search_flag = true;
var common_search_noresults;
var common_search_beforeValue = [];
var common_search_firstData;
var common_search_pageIndex = 0;
var common_search_last;
var common_search_searchInput;
var common_search_untilArray;
var common_search_firstArray;
var common_search_localLength;
var getSearchUrl = "https://search.12306.cn/search/v1/h5/search";
(function (a) {
    a(document).ready(function () {
        jQuery.support.cors = true;

        function i(m) {
            if (m[0].indexOf(m[1]) > -1) {
                m[0] = m[0].replace(m[1], '<span style="color:red;">' + m[1] + "</span>")
            }
            var l = m[2];
            m[4] += "<li url=" + m[3] + '><i class="icon icon-' + l + ' "> </i>' + m[0] + '<span class="list-txt"></span></li>';
            resList = m[4];
            return resList
        }
        a(".header-search .search-input").on("focus", function () {
            common_search_flag = true;
            common_search_beforeValue.splice(0, common_search_beforeValue.length);
            a(this).addClass("focus");
            a(".search-btn").css({
                background: "#2676E3"
            });
            a(".search-down").fadeOut();
            a(".search-input").val("");
            if (a(".search-input").val() == "") {
                common_search_pageIndex = 0
            }
            if (d("searchHistory")) {
                common_search_searchhistory = JSON.parse(d("searchHistory"));
                common_search_arrayHistory = common_search_searchhistory;
                common_search_cookieArray = common_search_arrayHistory;
                if (common_search_arrayHistory.length != 0) {
                    var l = "";
                    for (var m = 0; m <= common_search_arrayHistory.length - 1; m++) {
                        l += "<li url=" + common_search_arrayHistory[m].url + ">" + common_search_arrayHistory[m].innerText + "</li>"
                    }
                    a(".search-history-list").html(l);
                    a(".search-history").fadeIn()
                } else {
                    a(".search-history").fadeOut()
                }
            } else {
                if (common_search_arrayHistory != "") {
                    a(".search-history").fadeIn()
                } else {
                    a(".search-history").fadeOut()
                }
            }
            a(".search-btn")[0].onclick = function () {
                var q = a(".header-search .search-input").val();
                q = q.replace(/^ +| +$/g, "");
                if (q.length <= 0) {
                    return
                }
                var s = a(".search-input").val();
                var u = "[@`~!#$^&*()=|{}':;',\\[\\].<>《》/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘’";
                var o = s.length;
                for (var r = 0; r <= o - 1; r++) {
                    if (u.indexOf(s[r]) > -1) {
                        return
                    }
                }
                if (common_search_flag == true) {
                    k(s)
                }
                var p = a(".search-down-list li");
                if (common_search_noresults == "noresults") {} else {
                    if (p.length == 0) {
                        return
                    } else {
                        window.open(p.eq(0).attr("url"))
                    }
                }
                var n = {
                    innerText: s,
                    url: p.eq(0).attr("url")
                };
                common_search_cookieArray.unshift(n);
                common_search_recordCookie = common_search_cookieArray.slice(0, 10);
                b("searchHistory", JSON.stringify(common_search_recordCookie), 60);
                common_search_searchhistory = JSON.parse(d("searchHistory"));
                common_search_arrayHistory = common_search_searchhistory;
                a(".search-input").val("");
                var t = "";
                for (var r = 0; r <= common_search_arrayHistory.length; r++) {
                    for (var r = 0; r <= common_search_arrayHistory.length - 1; r++) {
                        t += "<li url=" + common_search_arrayHistory[r].url + ">" + common_search_arrayHistory[r].innerText + "</li>"
                    }
                    a(".search-history-list").html(t)
                }
            };
            a(".search-history-list")[0].onclick = function (o) {
                var o = o || window.event;
                var p = o.target || o.srcElement;
                if (p.nodeName.toLowerCase() === "li") {
                    if (p.getAttribute("url") == "undefined") {
                        return
                    } else {
                        var n = a(".search-down-list li");
                        window.open(p.getAttribute("url"))
                    }
                }
            };
            a(".history-clear").on("click", function () {
                common_search_cookieArray.splice(0, common_search_cookieArray.length);
                common_search_recordCookie = common_search_cookieArray.slice(0, 10);
                b("searchHistory", JSON.stringify(common_search_recordCookie), 60);
                common_search_searchhistory = JSON.parse(d("searchHistory"));
                common_search_arrayHistory = common_search_searchhistory;
                list = "";
                a(".search-history-list").html(common_search_arrayHistory)
            })
        });
        var j = navigator.userAgent;
        if (j.indexOf("Trident") > -1) {
            var e = navigator.appName;
            var h = navigator.appVersion;
            var f = h.split(";");
            var g = f && f.length > 1;
            var c = g ? f[1].replace(/[ ]/g, "") : "";
            document.onmousedown = function (r) {
                var r = r || window.event;
                if (c == "MSIE8.0" || c == "MSIE9.0" || c == "WOW64" || c == "MSIE10.0") {
                    var m = r.clientX;
                    var l = r.clientY;
                    var s = a("#search-input").offset().left;
                    var q = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                    var n = s + a("#search-input").outerWidth();
                    var t = a("#search-input").offset().top;
                    var o = a("#search-input").outerHeight();
                    var p = t + o + 204;
                    if (m < s || m > n || l < t || l > p) {
                        a(".search-down").fadeOut();
                        a(".search-history").fadeOut();
                        common_search_beforeValue.splice(0, common_search_beforeValue.length)
                    }
                }
            }
        } else {
            a(".header-search .search-input").on("blur", function () {
                a(".search-history").fadeOut();
                a(this).removeClass("focus");
                a(".search-btn").css({
                    "background-color": "#3B99FC"
                });
                a(".search-down").fadeOut();
                common_search_beforeValue.splice(0, common_search_beforeValue.length)
            })
        }
        a(".header-search .search-input").on("keyup", function (t) {
            if (t.keyCode == 8) {
                common_search_pageIndex = 0
            }
            a(".search-history").fadeOut();
            var n = /^[\u4e00-\u9fa5]+$/;
            common_search_last = t.timeStamp;
            if (t.keyCode != 16 && t.keyCode != 38 && t.keyCode != 40 && t.keyCode != 37 && t.keyCode != 39) {
                setTimeout(function () {
                    try {
                        if (common_search_last - F.timeStamp == 0) {
                            v = a(".search-input").val().toUpperCase();
                            if (v == "") {
                                a(".search-down-list").html("");
                                a(".search-down").fadeOut()
                            }
                            common_search_beforeValue.push(v);
                            var E = "[@`~!#$^&*()=|{}':;',\\[\\].<>《》/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘’";
                            var z = v.length;
                            for (var B = 0; B <= z - 1; B++) {
                                if (E.indexOf(v[B]) > -1) {
                                    a(".search-down-list").html("");
                                    a(".search-down").fadeOut();
                                    common_search_flag = false;
                                    return
                                } else {
                                    common_search_flag = true
                                }
                            }
                            var A = common_search_beforeValue.length;
                            if (v != "") {
                                if (v.indexOf(common_search_beforeValue[A - 2]) > -1) {
                                    a(".search-down-list").html("");
                                    common_search_firstArray = JSON.parse(common_search_firstData);
                                    common_search_localLength = common_search_firstArray.length;
                                    var G = "";
                                    var C = 0;
                                    for (var B = 0; B <= common_search_localLength - 1; B++) {
                                        if (common_search_firstArray[B].word.indexOf(v) > -1) {
                                            if (common_search_firstArray[B].type == "001") {
                                                C++;
                                                common_search_firstArray[B].word = common_search_firstArray[B].word.replace(v, '<span style="color:red;">' + v + "</span>");
                                                var D = "huochepiao";
                                                G += "<li url=" + common_search_firstArray[B].url + '><i class="icon icon-' + D + ' "> </i>' + common_search_firstArray[B].word + '<span class="list-txt"></span></li>'
                                            }
                                        }
                                    }
                                    if (C == 0 && common_search_flag == true) {
                                        k(v)
                                    }
                                    a(".search-down-list").html(G)
                                } else {
                                    if (common_search_flag == true) {
                                        k(v)
                                    }
                                }
                            }
                        }
                    } catch (F) {
                        v = a(".search-input").val().toUpperCase();
                        var E = "[@`~!#$^&*()=|{}':;',\\[\\].<>《》/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘’";
                        var z = v.length;
                        for (var B = 0; B <= z - 1; B++) {
                            if (E.indexOf(v[B]) > -1) {
                                a(".search-down-list").html("");
                                a(".search-down").fadeOut();
                                common_search_flag = false;
                                return
                            } else {
                                common_search_flag = true
                            }
                        }
                        if (v != "" && common_search_flag == true) {
                            k(v)
                        }
                    }
                }, 500)
            }
            var x = a(".search-down-list li");
            if (common_search_pageIndex == 1 && t.keyCode != 40) {
                common_search_pageIndex = 0
            }
            if (t.keyCode == 40) {
                if (common_search_pageIndex <= x.length - 1) {
                    common_search_pageIndex++;
                    for (var p = 0; p <= x.length - 1; p++) {
                        x.eq(p).css({
                            background: "",
                            color: "black"
                        });
                        x.eq(p).children().eq(0).css({
                            color: "#3B99FC"
                        })
                    }
                    x.eq(common_search_pageIndex - 1).css({
                        background: "#3B99FC",
                        color: "white"
                    });
                    x.eq(common_search_pageIndex - 1).children().eq(0).css({
                        color: "white"
                    });
                    a("#search-input").val(x.eq(common_search_pageIndex - 1)[0].innerText);
                    if (common_search_pageIndex >= 0 && common_search_pageIndex < 7) {
                        a(".search-down-list").scrollTop(0)
                    } else {
                        if (common_search_pageIndex != 6 && parseInt(common_search_pageIndex / 6) >= 1) {
                            var r = parseInt(common_search_pageIndex / 6) + 1;
                            var w = (r - 1) * 204 - 30;
                            a(".search-down-list").scrollTop(w)
                        }
                    }
                    x.eq(common_search_pageIndex - 1).click(function () {
                        window.open(x.eq(common_search_pageIndex - 1).attr("url"))
                    })
                }
            }
            if (t.keyCode == 38) {
                if (common_search_pageIndex > 0) {
                    common_search_pageIndex--;
                    for (var p = 0; p <= x.length - 1; p++) {
                        x.eq(p).css({
                            background: "",
                            color: "black"
                        });
                        x.eq(p).children().eq(0).css({
                            color: "#3B99FC"
                        })
                    }
                    x.eq(common_search_pageIndex - 1).css({
                        background: "#3B99FC",
                        color: "white"
                    });
                    x.eq(common_search_pageIndex - 1).children().eq(0).css({
                        color: "white"
                    });
                    a("#search-input").val(x.eq(common_search_pageIndex - 1)[0].innerText);
                    if (common_search_pageIndex >= 0 && common_search_pageIndex < 7) {
                        a(".search-down-list").scrollTop(0);
                        if (common_search_pageIndex == 0) {
                            common_search_pageIndex = 1
                        }
                    } else {
                        if (common_search_pageIndex != 6 && parseInt(common_search_pageIndex / 6) >= 1) {
                            var r = parseInt(common_search_pageIndex / 6) + 1;
                            var w = (r - 1) * 203.5 - 30;
                            a(".search-down-list").scrollTop(w)
                        }
                    }
                    x.eq(common_search_pageIndex - 1).on("click", function () {
                        window.open(x.eq(common_search_pageIndex).attr("url"))
                    })
                }
            }
            if (t.keyCode == 13) {
                var l;
                var y = a(".header-search .search-input").val();
                y = y.replace(/^ +| +$/g, "");
                if (y.length <= 0) {
                    return
                }
                var v = a(".search-input").val();
                if (common_search_pageIndex == 0) {
                    q(x.eq(0).attr("url"));
                    l = x.eq(0).attr("url")
                } else {
                    q(x.eq(common_search_pageIndex - 1).attr("url"));
                    l = x.eq(common_search_pageIndex - 1).attr("url")
                }
                var m = {
                    innerText: v,
                    url: l
                };
                var u = "[@`~!#$^&*()=|{}':;',\\[\\].<>《》/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘’";
                var o = v.length;
                for (var p = 0; p <= o - 1; p++) {
                    if (u.indexOf(v[p]) > -1) {
                        return
                    }
                }

                function q(z) {
                    if (z === undefined || z === "") {
                        return
                    } else {
                        window.open(z)
                    }
                }
                common_search_cookieArray.unshift(m);
                common_search_recordCookie = common_search_cookieArray.slice(0, 10);
                b("searchHistory", JSON.stringify(common_search_recordCookie), 60);
                common_search_searchhistory = JSON.parse(d("searchHistory"));
                common_search_arrayHistory = common_search_searchhistory;
                a(".search-input").val("")
            }
            var s = "";
            for (var p = 0; p <= common_search_arrayHistory.length - 1; p++) {
                s += "<li url=" + common_search_arrayHistory[p].url + ">" + common_search_arrayHistory[p].innerText + "</li>"
            }
            a(".search-history-list").html(s)
        });

        function k(l) {
            a.ajax({
                url: getSearchUrl,
                dataType: "jsonp",
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                type: "GET",
                timeout: 10000,
                cache: false,
                data: {
                    keyword: l,
                    suorce: "",
                    action: ""
                },
                success: function (q) {
                    var r = JSON.stringify(q.data);
                    localStorage.setItem("common_search_firstData", r);
                    common_search_firstData = localStorage.getItem("common_search_firstData");
                    var m = q.data.length;
                    if (m == 0) {
                        var p = [{
                            value: "城市",
                            ico: "place"
                        }, {
                            value: "车票",
                            ico: "jianpiao"
                        }, {
                            value: "正晚点",
                            ico: "time"
                        }, {
                            value: "起售时间",
                            ico: "selltime"
                        }, {
                            value: "检票口",
                            ico: "jianpiao"
                        }, {
                            value: "时刻表",
                            ico: "date"
                        }, {
                            value: "代售点",
                            ico: "train"
                        }, {
                            value: "交通查询",
                            ico: "zhanche"
                        }, {
                            value: "天气",
                            ico: "weather"
                        }, {
                            value: "问答",
                            ico: "wenda"
                        }, {
                            value: "服务",
                            ico: "fuwu"
                        }, {
                            value: "订单",
                            ico: "dingdanchaxun"
                        }];
                        var m = p.length;
                        var s = "";
                        for (var o = 0; o <= m - 1; o++) {
                            s += '<li><i class="icon icon-' + p[o].ico + ' "> </i>' + p[o].value + '<span class="list-txt"></span></li>'
                        }
                        a(".search-down-list").html(s);
                        a(".search-down").fadeIn();
                        common_search_noresults = "noresults";
                        return
                    }
                    var n = "";
                    for (var o = 0; o <= m - 1; o++) {
                        if (q.data[o].type == "001") {
                            var t = "huochepiao";
                            n = i([q.data[o].word, l, t, q.data[o].url, n])
                        } else {
                            if (q.data[o].type == "view") {
                                var t = "wenda";
                                n = i([q.data[o].word, l, t, q.data[o].url, n])
                            } else {
                                if (q.data[o].type == "002") {
                                    var t = "selltime";
                                    n = i([q.data[o].word, l, t, q.data[o].url, n])
                                } else {
                                    if (q.data[o].type == "003") {
                                        var t = "time";
                                        n = i([q.data[o].word, l, t, q.data[o].url, n])
                                    } else {
                                        if (q.data[o].type == "004") {
                                            var t = "selltime";
                                            n = i([q.data[o].word, l, t, q.data[o].url, n])
                                        } else {
                                            if (q.data[o].type == "006") {
                                                var t = "yupiao";
                                                n = i([q.data[o].word, l, t, q.data[o].url, n])
                                            } else {
                                                if (q.data[o].type == "100") {
                                                    var t = "train";
                                                    n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                } else {
                                                    if (q.data[o].type == "101") {
                                                        var t = "huochepiao";
                                                        n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                    } else {
                                                        if (q.data[o].type == "102") {
                                                            var t = "dingdanchaxun";
                                                            n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                        } else {
                                                            if (q.data[o].type == "103") {
                                                                var t = "dingdanchaxun";
                                                                n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                            } else {
                                                                if (q.data[o].type == "104") {
                                                                    var t = "user";
                                                                    n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                                } else {
                                                                    if (q.data[o].type == "105") {
                                                                        var t = "wenda";
                                                                        n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                                    } else {
                                                                        if (q.data[o].type == "106") {
                                                                            var t = "wenda";
                                                                            n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                                        } else {
                                                                            if (q.data[o].type == "107") {
                                                                                var t = "wenda";
                                                                                n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                                            } else {
                                                                                if (q.data[o].type == "108") {
                                                                                    var t = "wenda";
                                                                                    n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                                                } else {
                                                                                    if (q.data[o].type == "109") {
                                                                                        var t = "wenda";
                                                                                        n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                                                    } else {
                                                                                        if (q.data[o].type == "110") {
                                                                                            var t = "dingcan";
                                                                                            n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                                                        } else {
                                                                                            if (q.data[o].type == "111") {
                                                                                                var t = "user";
                                                                                                n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                                                            } else {
                                                                                                if (q.data[o].type == "112") {
                                                                                                    var t = "wenda";
                                                                                                    n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                                                                } else {
                                                                                                    if (q.data[o].type == "113") {
                                                                                                        var t = "wenda";
                                                                                                        n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                                                                    } else {
                                                                                                        if (q.data[o].type == "114") {
                                                                                                            var t = "wenda";
                                                                                                            n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                                                                        } else {
                                                                                                            if (q.data[o].type == "115") {
                                                                                                                var t = "fuwu";
                                                                                                                n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                                                                            } else {
                                                                                                                if (q.data[o].type == "116") {
                                                                                                                    var t = "fuwu";
                                                                                                                    n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                                                                                } else {
                                                                                                                    if (q.data[o].type == "117") {
                                                                                                                        var t = "fuwu";
                                                                                                                        n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                                                                                    } else {
                                                                                                                        if (q.data[o].type == "118") {
                                                                                                                            var t = "fuwu";
                                                                                                                            n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                                                                                        } else {
                                                                                                                            if (q.data[o].type == "119") {
                                                                                                                                var t = "dingdanchaxun";
                                                                                                                                n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                                                                                            } else {
                                                                                                                                if (q.data[o].type == "120") {
                                                                                                                                    var t = "xiangdao";
                                                                                                                                    n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                                                                                                } else {
                                                                                                                                    if (q.data[o].type == "121") {
                                                                                                                                        var t = "shanglv";
                                                                                                                                        n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                                                                                                    } else {
                                                                                                                                        if (q.data[o].type == "122") {
                                                                                                                                            var t = "user";
                                                                                                                                            n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                                                                                                        } else {
                                                                                                                                            if (q.data[o].type == "123") {
                                                                                                                                                var t = "user";
                                                                                                                                                n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                                                                                                            } else {
                                                                                                                                                if (q.data[o].type == "124") {
                                                                                                                                                    var t = "user";
                                                                                                                                                    n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                                                                                                                } else {
                                                                                                                                                    if (q.data[o].type == "125") {
                                                                                                                                                        var t = "fuwu";
                                                                                                                                                        n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                                                                                                                    } else {
                                                                                                                                                        if (q.data[o].type == "126") {
                                                                                                                                                            var t = "wenda";
                                                                                                                                                            n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                                                                                                                        } else {
                                                                                                                                                            if (q.data[o].type == "127") {
                                                                                                                                                                var t = "dingdanchaxun";
                                                                                                                                                                n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                                                                                                                            } else {
                                                                                                                                                                if (q.data[o].type == "128") {
                                                                                                                                                                    var t = "dingcan";
                                                                                                                                                                    n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                                                                                                                                } else {
                                                                                                                                                                    if (q.data[o].type == "129") {
                                                                                                                                                                        var t = "fuwu";
                                                                                                                                                                        n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                                                                                                                                    } else {
                                                                                                                                                                        if (q.data[o].type == "130") {
                                                                                                                                                                            var t = "user";
                                                                                                                                                                            n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                                                                                                                                        } else {
                                                                                                                                                                            if (q.data[o].type == "131") {
                                                                                                                                                                                var t = "dingdanchaxun";
                                                                                                                                                                                n = i([q.data[o].word, l, t, q.data[o].url, n])
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    a(".search-down-list").html(n);
                    a(".search-down").fadeIn();
                    a(".search-down-list").off("click", "li").on("click", "li", function () {
                        var x = {
                            innerText: a(this)[0].innerText,
                            url: a(this)[0].getAttribute("url")
                        };
                        if (x.url == "" || x.url == undefined || x.url == null) {
                            return
                        } else {
                            window.open(a(this).attr("url"))
                        }
                        common_search_cookieArray.unshift(x);
                        var w = common_search_cookieArray.slice(0, 10);
                        b("searchHistory", JSON.stringify(w), 60);
                        common_search_searchhistory = JSON.parse(d("searchHistory"));
                        common_search_arrayHistory = common_search_searchhistory;
                        var v = "";
                        for (var u = 0; u <= common_search_arrayHistory.length - 1; u++) {
                            v += "<li url=" + common_search_arrayHistory[u].url + ">" + common_search_arrayHistory[u].innerText + "</li>"
                        }
                        a(".search-history-list").html(v)
                    })
                }, error: function (m) {}
            })
        }

        function d(n) {
            var m = document.cookie.indexOf(n);
            var l = document.cookie.indexOf(";", m);
            return m == -1 ? "" : unescape(document.cookie.substring(m + n.length + 1, (l > m ? l : document.cookie.length)))
        }

        function b(s, r, q, p, n, o) {
            var m = document.domain;
            m = m.substring(m.indexOf(".") + 1, m.length);
            var l = new Date();
            l.setTime(l.getTime() + q * 1000);
            document.cookie = escape(s) + "=" + escape(r) + (p ? "; path=" + p : ";path=/") + (n ? "; domain=" + m : "; domain=" + m) + (o ? "; secure" : "") + (";expires=" + l)
        }
        a(".search-down .close").on("click", function () {
            a(".search-input").val("");
            a(this).parent().fadeOut();
            common_search_beforeValue.splice(0, common_search_beforeValue.length)
        })
    })
})(jQuery);