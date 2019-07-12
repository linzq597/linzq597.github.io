(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-c1e547ce"],{

/***/ "0ce9":
/*!***********************************************************!*\
  !*** ./src/views/Navigation.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Navigation.vue?vue&type=script&lang=js& */ "28f3");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "28f3":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Navigation.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// 	// @ is an alias to /src
// import Slideshow from "@/components/Slideshow.vue";
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "navigation",
  data: function data() {
    return {
      todos: [{
        title: '推荐音乐',
        isActive: true,
        path: {
          name: 'videos'
        }
      }, {
        title: '排行榜',
        isActive: false,
        path: {
          name: 'my'
        }
      }, {
        title: '搜索',
        isActive: false,
        path: {
          name: 'search'
        }
      }]
    };
  },
  methods: {
    go: function go(item) {
      if (item.isActive) {
        return;
      }

      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].isActive) {
          this.todos[i].isActive = false;
          break;
        }
      }

      item.isActive = true;
      this.$router.push(item.path);
    }
  }
});

/***/ }),

/***/ "74ae":
/*!**********************************!*\
  !*** ./src/views/Navigation.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navigation_vue_vue_type_template_id_7779f81e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=7779f81e&scoped=true& */ "a4ec");
/* harmony import */ var _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue?vue&type=script&lang=js& */ "0ce9");
/* empty/unused harmony star reexport *//* harmony import */ var _Navigation_vue_vue_type_style_index_0_id_7779f81e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation.vue?vue&type=style&index=0&id=7779f81e&scoped=true&lang=less& */ "9824");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navigation_vue_vue_type_template_id_7779f81e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navigation_vue_vue_type_template_id_7779f81e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7779f81e",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "750a":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12df9ee4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Navigation.vue?vue&type=template&id=7779f81e&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navigation"},[_vm._m(0),_c('div',{staticClass:"navtbs"},_vm._l((_vm.todos),function(item,index){return _c('div',{key:index,staticClass:"bt",class:{'tab-active':item.isActive},on:{"click":function($event){return _vm.go(item)}}},[_vm._v(_vm._s(item.title))])}),0),_c('router-view')],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tbs"},[_c('div',{staticClass:"music"},[_c('img',{attrs:{"src":__webpack_require__(/*! ../../public/wyyimg/music.png */ "e20e"),"alt":""}}),_c('span',[_vm._v("网易云音乐")])]),_c('div',{staticClass:"app"},[_c('div',{staticClass:"zt"},[_vm._v("\n\t\t\t\t下载APP\n\t\t\t")])])])}]



/***/ }),

/***/ "9824":
/*!********************************************************************************************!*\
  !*** ./src/views/Navigation.vue?vue&type=style&index=0&id=7779f81e&scoped=true&lang=less& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_7779f81e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../node_modules/css-loader??ref--10-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--10-oneOf-1-2!../../node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Navigation.vue?vue&type=style&index=0&id=7779f81e&scoped=true&lang=less& */ "b0f9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_7779f81e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_7779f81e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_7779f81e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_7779f81e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_7779f81e_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a4ec":
/*!*****************************************************************************!*\
  !*** ./src/views/Navigation.vue?vue&type=template&id=7779f81e&scoped=true& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_12df9ee4_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_7779f81e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12df9ee4-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Navigation.vue?vue&type=template&id=7779f81e&scoped=true& */ "750a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_12df9ee4_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_7779f81e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_12df9ee4_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_7779f81e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "b0f9":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Navigation.vue?vue&type=style&index=0&id=7779f81e&scoped=true&lang=less& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e20e":
/*!*********************************!*\
  !*** ./public/wyyimg/music.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACd0lEQVRYR92XTYhOYRTHf392GvkKMRYkygZJNkqDUpoZZqaEbEyGMpSNhbJnY6dEPqIkLHzOSL7JTkosSGwoRL4WUshfp56rO3eMabrvnZGzfHufc373POc553/EEJuGOD5/BLA9DtgELALmARNKgL4BDgB7Jb0v+ukFYHsJcAYYBbwGnpYIHkdnApOAT8AqSdfy/noA2J4OPAJ+ACsk3SoZHNsRoxPYAxiYLelZ5rcIcBJYDTRKulQ2eP687UagC7ghaWkvANvjgbivLkkraxk882U7AAKkXtKr+P13Bmy3prtvl3S0IoDNwD6gTdLZIsAG4BDQLClIa262m4ELwEZJEatHBjqAg0CTpO6BRE+FthVYCIwEWiV9K/qw3QRcrAIgc/w1BVgr6edgAmTZWybpal/ZqzIDGUCDpNv/P4DtiVGsQB0QXzw/FXD1GbA9DbgDTMml+gMwFqgWwPbwNCumpv7+Foj+0ZZgKgeId34X2CVpZ67Fno5JNxgZWA7EkFon6UQOYAewG1gg6V5lr8B2PfACuAy0SPpuOwrxIRC1USfpS2UA4dh29PC49yfAldANQNTEMUnr/9bCa9KIbI8Ajke/zwWL6+iU9LlygNy9x4uYCzyXFHKrX+svA4MxjrOh1SHpcHEctwAhErZICtFQc7PdDhxJ4/pcESA620ugW1KQ1txsn0+SbLKkaGI99wLb14GQ5QMWJf3R5kTpKUlrsv8XVfEM4AEwDNge+k1SSOlSZrshSbEo3Dl9yvL0zhcncToaiDQ9LhUdZqXNKl5KiNGbeX99rWZjgG1AqNgya9k74H6anvslfSx+zL+5nJZM+YCO/wIoCHEw/2pV8AAAAABJRU5ErkJggg=="

/***/ })

}]);
//# sourceMappingURL=chunk-c1e547ce.b04c99df.js.map