//index.js:
 (globalThis || window || global)['__farm_default_namespace__'] = {__FARM_TARGET_ENV__: 'browser'};(function (modules, entryModule) {
            var cache = {};

            function dynamicRequire(id) {
              return Promise.resolve(require(id));
            }
          
            function require(id) {
              if (cache[id]) return cache[id].exports;
          
              var module = {
                id: id,
                exports: {}
              };
          
              modules[id](module, module.exports, require, dynamicRequire);
              cache[id] = module;
              return module.exports;
            }
          
            require(entryModule);
          })({"ec853507": function(module, exports, farmRequire, farmDynamicRequire) {
console.log("runtime/index.js")(globalThis || window || global)["__farm_default_namespace__"].__farm_module_system__.setPlugins([]);

},}, "ec853507");(function (modules) {
            for (var key in modules) {
              modules[key].__farm_resource_pot__ = 'index_6b9f.js';
                (globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.register(key, modules[key]);
            }
        })({"569704c1": function(module, exports, farmRequire, farmDynamicRequire) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = farmRequire("@swc/helpers/_/_interop_require_default");
var _b = /*#__PURE__*/ _interop_require_default._(farmRequire("f380ea31"));
function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
var a = null;
// Add methods to `MapCache`.
MapCache.prototype.clear = _b.default;
MapCache.prototype.clear = ()=>(a, _b.default);
var _default = MapCache;

},
"b5d64806": function(module, exports, farmRequire, farmDynamicRequire) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _interop_require_default = farmRequire("@swc/helpers/_/_interop_require_default");
var _a = /*#__PURE__*/ _interop_require_default._(farmRequire("569704c1"));
console.log(_a.default);

},
"f380ea31": function(module, exports, farmRequire, farmDynamicRequire) {
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
function mapCacheClear() {
    this.size = 0;
    this.__data__ = {};
}
var _default = mapCacheClear;

},});(globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.setInitialLoadedResources([]);(globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.setDynamicModuleResourcesMap({  });var farmModuleSystem = (globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__;farmModuleSystem.bootstrap();var entry = farmModuleSystem.require("b5d64806");