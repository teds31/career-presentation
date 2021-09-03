function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/ric/src/ric-polyfill.js":
  /*!**********************************************!*\
    !*** ./node_modules/ric/src/ric-polyfill.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesRicSrcRicPolyfillJs(module, exports) {
    /**
     * Created by Denis Radin aka PixelsCommander
     * http://pixelscommander.com
     *
     * Polyfill is build around the principe that janks are most harmful to UX when user is continously interacting with app.
     * So we are basically preventing operation from being executed while user interacts with interface.
     * Currently this implies scrolls, taps, clicks, mouse and touch movements.
     * The condition is pretty simple - if there were no interactions for 300 msec there is a huge chance that we are in idle.
     */
    var applyPolyfill = function applyPolyfill() {
      //By default we may assume that user stopped interaction if we are idle for 300 miliseconds
      var IDLE_ENOUGH_DELAY = 300;
      var timeoutId = null;
      var callbacks = [];
      var lastInteractionTime = Date.now();
      var deadline = {
        timeRemaining: IDLE_ENOUGH_DELAY
      };

      var isFree = function isFree() {
        return timeoutId === null;
      };

      var onContinousInteractionStarts = function onContinousInteractionStarts(interactionName) {
        deadline.timeRemaining = 0;
        lastInteractionTime = Date.now();

        if (!timeoutId) {
          timeoutId = setTimeout(timeoutCompleted, IDLE_ENOUGH_DELAY);
        }
      };

      var onContinousInteractionEnds = function onContinousInteractionEnds(interactionName) {
        clearTimeout(timeoutId);
        timeoutId = null;

        for (var i = 0; i < callbacks.length; i++) {
          executeCallback(callbacks[i]);
        }
      }; //Consider categorizing last interaction timestamp in order to add cancelling events like touchend, touchleave, touchcancel, mouseup, mouseout, mouseleave


      document.addEventListener('keydown', onContinousInteractionStarts.bind(this, 'keydown'));
      document.addEventListener('mousedown', onContinousInteractionStarts.bind(this, 'mousedown'));
      document.addEventListener('touchstart', onContinousInteractionStarts.bind(this, 'touchstart'));
      document.addEventListener('touchmove', onContinousInteractionStarts.bind(this, 'touchmove'));
      document.addEventListener('mousemove', onContinousInteractionStarts.bind(this, 'mousemove'));
      document.addEventListener('scroll', onContinousInteractionStarts.bind(this, 'scroll'), true);

      var timeoutCompleted = function timeoutCompleted() {
        var expectedEndTime = lastInteractionTime + IDLE_ENOUGH_DELAY;
        var delta = expectedEndTime - Date.now();

        if (delta > 0) {
          timeoutId = setTimeout(timeoutCompleted, delta);
        } else {
          onContinousInteractionEnds();
        }
      };

      var createCallbackObject = function createCallbackObject(callback, timeout) {
        var callbackObject = {
          callback: callback,
          timeoutId: null
        };
        callbackObject.timeoutId = timeout !== null ? setTimeout(executeCallback.bind(this, callbackObject), timeout) : null;
        return callbackObject;
      };

      var addCallback = function addCallback(callbackObject, timeout) {
        callbacks.push(callbackObject);
      };

      var executeCallback = function executeCallback(callbackObject) {
        var callbackIndex = callbacks.indexOf(callbackObject);

        if (callbackIndex !== -1) {
          callbacks.splice(callbacks.indexOf(callbackObject), 1);
        }

        callbackObject.callback(deadline);

        if (callbackObject.timeoutId) {
          clearTimeout(callbackObject.timeoutId);
          callbackObject.timeoutId = null;
        }
      };

      return function (callback, options) {
        var timeout = options && options.timeout || null;
        var callbackObject = createCallbackObject(callback, timeout);

        if (isFree()) {
          executeCallback(callbackObject);
        } else {
          addCallback(callbackObject);
        }
      };
    };

    if (!window.requestIdleCallback) {
      window.ricActivated = true;
      window.requestIdleCallback = applyPolyfill();
    }

    window.requestUserIdle = window.ricActivated && window.requestIdleCallback || applyPolyfill();
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _slidebean_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @slidebean/render */
    "./node_modules/@slidebean/render/__ivy_ngcc__/fesm2015/slidebean-render.js");

    function AppComponent_sb_slide_player_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sb-slide-player", 2);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hiRes", true)("embedded", true)("keyboardEnabled", true)("nonNativeFullScreenEnabled", false)("presentation", ctx_r0.presentation);
      }
    }

    function AppComponent_sb_evo_slide_player_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sb-evo-slide-player", 3);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("embedded", true)("keyboardEnabled", true)("nonNativeFullScreenEnabled", false)("presentation", ctx_r1.presentation);
      }
    }

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      try {
        var presentation = window['__sb__'].presentation;
        this.presentation = presentation;
      } catch (error) {
        console.error('Fatal: __sb__ not found in window');
        throw error;
      }
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 2,
      consts: [[3, "hiRes", "embedded", "keyboardEnabled", "nonNativeFullScreenEnabled", "presentation", 4, "ngIf"], [3, "embedded", "keyboardEnabled", "nonNativeFullScreenEnabled", "presentation", 4, "ngIf"], [3, "hiRes", "embedded", "keyboardEnabled", "nonNativeFullScreenEnabled", "presentation"], [3, "embedded", "keyboardEnabled", "nonNativeFullScreenEnabled", "presentation"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_sb_slide_player_0_Template, 1, 5, "sb-slide-player", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_sb_evo_slide_player_1_Template, 1, 4, "sb-evo-slide-player", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.presentation == null ? null : ctx.presentation.layoutId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.presentation == null ? null : ctx.presentation.layoutId));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _slidebean_render__WEBPACK_IMPORTED_MODULE_2__["SlidePlayerComponent"], _slidebean_render__WEBPACK_IMPORTED_MODULE_2__["EvoSlidePlayerComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\nsb-slide-player[_ngcontent-%COMP%], sb-evo-slide-player[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuc2Itc2xpZGUtcGxheWVyLFxuc2ItZXZvLXNsaWRlLXBsYXllciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _slidebean_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @slidebean/render */
    "./node_modules/@slidebean/render/__ivy_ngcc__/fesm2015/slidebean-render.js");
    /* harmony import */


    var _slidebean_pusher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @slidebean/pusher */
    "./node_modules/@slidebean/pusher/__ivy_ngcc__/fesm2015/slidebean-pusher.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _slidebean_pusher__WEBPACK_IMPORTED_MODULE_6__["PusherModule"].forRoot({
        key: '',
        authEndpoint: ''
      }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot(), _slidebean_render__WEBPACK_IMPORTED_MODULE_5__["RenderCommonModule"].forRoot(), _slidebean_render__WEBPACK_IMPORTED_MODULE_5__["RenderModule"], _slidebean_render__WEBPACK_IMPORTED_MODULE_5__["RenderEvoModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _slidebean_pusher__WEBPACK_IMPORTED_MODULE_6__["PusherModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _slidebean_render__WEBPACK_IMPORTED_MODULE_5__["RenderCommonModule"], _slidebean_render__WEBPACK_IMPORTED_MODULE_5__["RenderModule"], _slidebean_render__WEBPACK_IMPORTED_MODULE_5__["RenderEvoModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _slidebean_pusher__WEBPACK_IMPORTED_MODULE_6__["PusherModule"].forRoot({
            key: '',
            authEndpoint: ''
          }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot(), _slidebean_render__WEBPACK_IMPORTED_MODULE_5__["RenderCommonModule"].forRoot(), _slidebean_render__WEBPACK_IMPORTED_MODULE_5__["RenderModule"], _slidebean_render__WEBPACK_IMPORTED_MODULE_5__["RenderEvoModule"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var environment = {
      production: false
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/circleci/tmp/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map