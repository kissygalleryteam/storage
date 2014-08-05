/**
 * @fileoverview
 * @author
 * @module storage
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     *
     * @class Storage
     * @constructor
     * @extends Base
     */
    function Storage(comConfig) {
        var self = this;
        //调用父类构造函数
        Storage.superclass.constructor.call(self, comConfig);
    }
    S.extend(Storage, Base, /** @lends Storage.prototype*/{

    }, {ATTRS : /** @lends Storage*/{

    }});
    return Storage;
}, {requires:['node', 'base']});



