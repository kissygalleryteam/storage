/*
combined files : 

kg/storage/2.0.0/conf
kg/storage/2.0.0/util

*/
/**
 * 工具栏配置文件
 *
 * @author luics (鬼道)
 * @date 2013-07-25
 */
//CASE js编码应该utf8
KISSY.add('kg/storage/2.0.0/conf', function() {
    /**
     * CASE 不能使用 ks-debug，巨大的坑，多谢 @游侠 提醒
     */
    var DEBUG = location.href.indexOf('if-debug=1') > -1;
    var DEBUG_LOG = location.href.indexOf('if-debug-log=1') > -1;
    var arr = 'http://gm.mmstat.com'; // log.mmstat.com
    var MINER = 'http://log.mmstat.com/ued.2.0.0.2?type=9&_gm:id=storage&v=2.0.0';

    /**
     * 需要 Conf 的理由：
     * 1. 全局防止命名冲突
     * 2. 集中管理事件、状态值，便于形成文档，方便多人维护
     */
    var Conf = {
        DEBUG: DEBUG,
        DEBUG_LOG: DEBUG_LOG,
        // 其他配置
        SAM_PV: 1 / 1000,
        TIMEOUT_STORAGE: 3 * 1000,
        PROXY: 'http://www.tmall.com/go/act/stp-tm.php',
        PROXY_TMALL: 'http://www.tmall.com/go/act/stp-tm.php',
        PROXY_TAOBAO: 'http://www.taobao.com/go/act/stp-tb.php',
        // 用于标识 xd 实例
        XD_TOKEN: '__ga_xd_token',
        // UIDs 保存本次通信双方的 id
        UID_FROM: '__ga_xd_from11', // 区别于1.0，避免干扰到1.0
        UID_TO: '__ga_xd_to11',
        M: {
            G: MINER + '&t=g',
            P: MINER + '&t=p'
        },
        ARR: {// 黄金令箭埋点
            ST_SET: arr + '/tmallbrand.999.5',
            ST_GET: arr + '/tmallbrand.999.6',
            ST_RM: arr + '/tmallbrand.999.7',
            ST_CL: arr + '/tmallbrand.999.8'
        },
        K: {// Key
            // param
            ONLOAD: 'onload',
            PROXY: 'proxy',
            PREFIX: 'prefix',
            XD_TIMEOUT: 'xdTimeout',
            IFRAME_TIMEOUT: 'iframeTimeout',
            // other
            IFRAME: 'iframe',
            TOKEN: 'token',
            XD: 'xd',
            CALLBACK_LIST: 'callbackList',
            CACHED_ACTION_LIST: 'cachedActionList',
            PROXY_READY: 'proxyReady'
        }
    };

    return Conf;
});


/**
 * Util library
 * 工具库
 *
 * @author luics (鬼道)
 * @date 2013-07-25
 */

KISSY.add('kg/storage/2.0.0/util', function(S, Conf) {

    var Seed = {
        /**
         * 封装 window.console.log 开关控制 log 是否打印
         */
        log: function() {
            if (!Conf.DEBUG_LOG) {
                return;
            }

            // var con = window.console; 赋值有风险？
            // 遇到过 var $ = document.querySelectorAll, 之后$为undefined $()
            // CASE IE 9, 遇到了 apply  undefined 问题
            if (window.console && window.console.log && window.console.log.apply) {
                window.console.log.apply(window.console, arguments);
            }
        },
        /**
         * 字符串格式化
         *
         * Usage：
         *   fm('{0}-{1}', 1, '2') // 结果：1-2
         *   fm('{0}-{1}-{0}', 1, '2') // 结果：1-2-1
         *
         * @returns {string}
         */
        fm: function() {
            if (arguments.length == 0) {
                return '';
            }
            else if (arguments.length == 1) {
                return arguments[0];
            }

            var res = arguments[0], i;
            for (i = 1; i < arguments.length; ++i) {
                var re = new RegExp('\\{' + (i - 1) + '\\}', 'g');
                res = res.replace(re, arguments[i]);
            }
            // TODO 性能优化版本
            return res;
        }
    };

    var U = Seed;

    /**
     * 黄金令箭埋点
     */
    U.sendLog = function(url) {
        U.send(U.fm(Conf.M.G, encodeURIComponent(location.href)));
        U.send(url);
    };

    /**
     * 黄金令箭埋点
     * @param {string} url
     */
    U.send = function(url) {
        if (!url) {
            return;
        }
        var id = "__st_" + (+new Date) + Math.random();
        var img = new Image();
        window[id] = img;
        img.src = U.fm('{0}{1}r{2}=1', url, (url.indexOf('?') > -1 ? '&' : '?'), +new Date);
        img.onload = function() {
            window[id] = null;
        }
    };

    var RND = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    /**
     * 获取随机字符串
     * @param {number} length 串长度
     */
    U.getRndStr = function(length) {
        var rnd = [];
        var len = RND.length, r;
        for (var i = 0; i < length; ++i) {
            r = RND.charAt(Math.floor(Math.random() * len));
            rnd.push(r);
        }
        return rnd.join('');
    };

    // end  
    return U;
}, {requires: [
    './conf'
]});

