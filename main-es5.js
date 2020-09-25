(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.ts":
    /*!********************************!*\
      !*** ./src/app/app-routing.ts ***!
      \********************************/

    /*! exports provided: AppRoutes */

    /***/
    function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutes", function () {
        return AppRoutes;
      });
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login/login.component */
      "./src/app/login/login.component.ts");
      /* harmony import */


      var _layouts_product_layout_product_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./layouts/product-layout/product-layout.component */
      "./src/app/layouts/product-layout/product-layout.component.ts");

      var AppRoutes = [{
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]
      }, {
        path: 'app',
        component: _layouts_product_layout_product_layout_component__WEBPACK_IMPORTED_MODULE_1__["ProductLayoutComponent"],
        children: [// tslint:disable-next-line: max-line-length
        {
          path: 'dashboard',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | src-app-application-dashboard-dashboard-module */
            "src-app-application-dashboard-dashboard-module").then(__webpack_require__.bind(null,
            /*! src/app/application/dashboard/dashboard.module */
            "./src/app/application/dashboard/dashboard.module.ts")).then(function (m) {
              return m.DashboardModule;
            });
          }
        }, {
          path: 'vendor',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | src-app-application-vendor-vendor-module */
            [__webpack_require__.e("default~src-app-application-inventory-inventory-module~src-app-application-vendor-vendor-module"), __webpack_require__.e("src-app-application-vendor-vendor-module")]).then(__webpack_require__.bind(null,
            /*! src/app/application/vendor/vendor.module */
            "./src/app/application/vendor/vendor.module.ts")).then(function (m) {
              return m.VendorModule;
            });
          }
        }, {
          path: 'inventory',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | src-app-application-inventory-inventory-module */
            [__webpack_require__.e("default~src-app-application-inventory-inventory-module~src-app-application-vendor-vendor-module"), __webpack_require__.e("src-app-application-inventory-inventory-module")]).then(__webpack_require__.bind(null,
            /*! src/app/application/inventory/inventory.module */
            "./src/app/application/inventory/inventory.module.ts")).then(function (m) {
              return m.InventoryModule;
            });
          }
        }]
      }, {
        path: '**',
        redirectTo: ''
      }];
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'smartsewa-admin';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./login/login.component */
      "./src/app/login/login.component.ts");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app-routing */
      "./src/app/app-routing.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-select */
      "./node_modules/ng-select/__ivy_ngcc__/fesm2015/ng-select.js");
      /* harmony import */


      var src_app_core_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/core/interceptors/token.interceptor */
      "./src/app/core/interceptors/token.interceptor.ts");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
          useClass: src_app_core_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_13__["TokenInterceptor"],
          multi: true
        }, {
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_11__["HashLocationStrategy"]
        }],
        imports: [[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], ng_select__WEBPACK_IMPORTED_MODULE_12__["SelectModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_9__["AppRoutes"], {
          useHash: false
        }), ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]],
          imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], ng_select__WEBPACK_IMPORTED_MODULE_12__["SelectModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]],
            imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], ng_select__WEBPACK_IMPORTED_MODULE_12__["SelectModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_9__["AppRoutes"], {
              useHash: false
            }), ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot()],
            providers: [{
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
              useClass: src_app_core_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_13__["TokenInterceptor"],
              multi: true
            }, {
              provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"],
              useClass: _angular_common__WEBPACK_IMPORTED_MODULE_11__["HashLocationStrategy"]
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/app-settings.ts":
    /*!**************************************!*\
      !*** ./src/app/core/app-settings.ts ***!
      \**************************************/

    /*! exports provided: AppSettings */

    /***/
    function srcAppCoreAppSettingsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppSettings", function () {
        return AppSettings;
      });

      var AppSettings = function AppSettings() {
        _classCallCheck(this, AppSettings);
      };

      AppSettings.API_ENDPOINT = 'http://3.7.90.134/';
      /***/
    },

    /***/
    "./src/app/core/auth/auth.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/core/auth/auth.service.ts ***!
      \*******************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppCoreAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_core_services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/storage.service */
      "./src/app/core/services/storage.service.ts");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(storageService) {
          _classCallCheck(this, AuthService);

          this.storageService = storageService;
        }

        _createClass(AuthService, [{
          key: "getToken",
          value: function getToken() {
            // const data = this.storageService.getData('u_data');
            // return data.userData.token;
            return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjNmOGU0ZTMzMDg5Nzk1MjJmOWM5ZTkiLCJpZGVudGl0eSI6IiIsIm1vYmlsZSI6Ijg4NDA2MDc4NzkiLCJuYW1lIjoiSGFyc2hpdGEgIiwic2Vzc2lvbiI6IjVmNWRjNTBmNzA2MWZjMjk4YzNhNzNhMSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTU5OTk4MDgxNSwiZXhwIjoxNjA3NzU2ODE1fQ.ed3zGVO38ekrJ4prwyMX5nOF0ybPn2DAlaaP5FIqy4U';
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_core_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: src_app_core_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/interceptors/token.interceptor.ts":
    /*!********************************************************!*\
      !*** ./src/app/core/interceptors/token.interceptor.ts ***!
      \********************************************************/

    /*! exports provided: TokenInterceptor */

    /***/
    function srcAppCoreInterceptorsTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
        return TokenInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_core_services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/storage.service */
      "./src/app/core/services/storage.service.ts");
      /* harmony import */


      var src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/auth/auth.service */
      "./src/app/core/auth/auth.service.ts");

      var TokenInterceptor = /*#__PURE__*/function () {
        function TokenInterceptor(storageService, auth) {
          _classCallCheck(this, TokenInterceptor);

          this.storageService = storageService;
          this.auth = auth;
          this.token = '';
        }

        _createClass(TokenInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var data = this.storageService.getData('u_data');

            if (!!data && !!data.userData && !!data.userData.token && data.userData.token !== '') {
              request = request.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(this.auth.getToken()),
                  authkey: 'pikarhealthtech@123'
                }
              });
            } else {
              request = request.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(this.auth.getToken())
                }
              });
            }

            return next.handle(request);
          }
        }]);

        return TokenInterceptor;
      }();

      TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
        return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_core_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      };

      TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TokenInterceptor,
        factory: TokenInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: src_app_core_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]
          }, {
            type: src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/services/storage.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/core/services/storage.service.ts ***!
      \**************************************************/

    /*! exports provided: StorageService */

    /***/
    function srcAppCoreServicesStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return StorageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var StorageService = /*#__PURE__*/function () {
        function StorageService() {
          _classCallCheck(this, StorageService);
        }

        _createClass(StorageService, [{
          key: "setData",
          value: function setData(key, data) {
            localStorage.setItem(key, JSON.stringify(data));
          }
        }, {
          key: "getData",
          value: function getData(key) {
            return JSON.parse(localStorage.getItem(key));
          }
        }, {
          key: "removeData",
          value: function removeData(key) {
            localStorage.removeItem(key);
          }
        }, {
          key: "clear",
          value: function clear() {
            localStorage.clear();
          }
        }]);

        return StorageService;
      }();

      StorageService.ɵfac = function StorageService_Factory(t) {
        return new (t || StorageService)();
      };

      StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: StorageService,
        factory: StorageService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/services/toaster.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/core/services/toaster.service.ts ***!
      \**************************************************/

    /*! exports provided: ProductToasterService */

    /***/
    function srcAppCoreServicesToasterServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductToasterService", function () {
        return ProductToasterService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

      var ProductToasterService = /*#__PURE__*/function () {
        function ProductToasterService(toastr) {
          _classCallCheck(this, ProductToasterService);

          this.toastr = toastr;
        }

        _createClass(ProductToasterService, [{
          key: "showSuccess",
          value: function showSuccess(title, message) {
            this.toastr.success(message, title);
          }
        }, {
          key: "showError",
          value: function showError(title, message) {
            this.toastr.error(message, title);
          }
        }, {
          key: "showInfo",
          value: function showInfo(title, message) {
            this.toastr.info(message, title);
          }
        }, {
          key: "showWarning",
          value: function showWarning(title, message) {
            this.toastr.warning(message, title);
          }
        }]);

        return ProductToasterService;
      }();

      ProductToasterService.ɵfac = function ProductToasterService_Factory(t) {
        return new (t || ProductToasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]));
      };

      ProductToasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProductToasterService,
        factory: ProductToasterService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductToasterService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/layouts/product-layout/components/product-footer/product-footer.component.ts":
    /*!**********************************************************************************************!*\
      !*** ./src/app/layouts/product-layout/components/product-footer/product-footer.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: ProductFooterComponent */

    /***/
    function srcAppLayoutsProductLayoutComponentsProductFooterProductFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductFooterComponent", function () {
        return ProductFooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ProductFooterComponent = function ProductFooterComponent() {
        _classCallCheck(this, ProductFooterComponent);

        this.test = new Date();
      };

      ProductFooterComponent.ɵfac = function ProductFooterComponent_Factory(t) {
        return new (t || ProductFooterComponent)();
      };

      ProductFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductFooterComponent,
        selectors: [["app-product-footer"]],
        decls: 6,
        vars: 0,
        consts: [[1, "sticky-footer", "bg-white"], [1, "container", "my-auto"], [1, "copyright", "text-center", "my-auto"]],
        template: function ProductFooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Copyright \xA9 SmartSewa 2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductFooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-footer',
            templateUrl: 'product-footer.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/layouts/product-layout/components/product-header/product-header.component.ts":
    /*!**********************************************************************************************!*\
      !*** ./src/app/layouts/product-layout/components/product-header/product-header.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: ProductHeaderComponent */

    /***/
    function srcAppLayoutsProductLayoutComponentsProductHeaderProductHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductHeaderComponent", function () {
        return ProductHeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _core_services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/services/storage.service */
      "./src/app/core/services/storage.service.ts");
      /* harmony import */


      var _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/services/toaster.service */
      "./src/app/core/services/toaster.service.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var ProductHeaderComponent = /*#__PURE__*/function () {
        function ProductHeaderComponent(storageService, toastrService) {
          _classCallCheck(this, ProductHeaderComponent);

          this.storageService = storageService;
          this.toastrService = toastrService;
        }

        _createClass(ProductHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductHeaderComponent;
      }();

      ProductHeaderComponent.ɵfac = function ProductHeaderComponent_Factory(t) {
        return new (t || ProductHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ProductToasterService"]));
      };

      ProductHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductHeaderComponent,
        selectors: [["app-product-header"]],
        decls: 115,
        vars: 0,
        consts: [[1, "navbar", "navbar-expand", "navbar-light", "bg-white", "topbar", "mb-4", "static-top", "shadow"], ["id", "sidebarToggleTop", 1, "btn", "btn-link", "d-md-none", "rounded-circle", "mr-3"], [1, "fa", "fa-bars"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "dropdown", "no-arrow", "d-sm-none"], ["href", "#", "id", "searchDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "fa", "fa-search", "fa-fw"], ["aria-labelledby", "searchDropdown", 1, "dropdown-menu", "dropdown-menu-right", "p-3", "shadow", "animated--grow-in"], [1, "form-inline", "mr-auto", "w-100", "navbar-search"], [1, "input-group"], ["type", "text", "placeholder", "Search for...", "aria-label", "Search", "aria-describedby", "basic-addon2", 1, "form-control", "bg-light", "border-0", "small"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary"], [1, "fa", "fa-search", "fa-sm"], [1, "nav-item", "dropdown", "no-arrow", "mx-1"], ["href", "#", "id", "alertsDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "fa", "fa-bell", "fa-fw"], [1, "badge", "badge-danger", "badge-counter"], ["aria-labelledby", "alertsDropdown", 1, "dropdown-list", "dropdown-menu", "dropdown-menu-right", "shadow", "animated--grow-in"], [1, "dropdown-header"], ["href", "#", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "mr-3"], [1, "icon-circle", "bg-primary"], [1, "fa", "fa-files-o", "text-white"], [1, "small", "text-gray-500"], [1, "font-weight-bold"], [1, "icon-circle", "bg-success"], [1, "fa", "fa-user", "text-white"], [1, "icon-circle", "bg-warning"], ["href", "#", 1, "dropdown-item", "text-center", "small", "text-gray-500"], ["href", "#", "id", "messagesDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "fa", "fa-envelope", "fa-fw"], ["aria-labelledby", "messagesDropdown", 1, "dropdown-list", "dropdown-menu", "dropdown-menu-right", "shadow", "animated--grow-in"], [1, "dropdown-list-image", "mr-3"], ["src", "../../../../../assets/img/SS_Logo_Small.svg", "alt", "", 1, "rounded-circle", "bg-light"], [1, "status-indicator", "bg-success"], [1, "text-truncate"], [1, "status-indicator"], [1, "status-indicator", "bg-warning"], [1, "topbar-divider", "d-none", "d-sm-block"], [1, "nav-item", "dropdown", "no-arrow"], ["href", "#", "id", "userDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "mr-2", "d-none", "d-lg-inline", "text-gray-600", "small"], ["src", "../../../../../assets/img/SS_Logo_Small.svg", 1, "img-profile", "rounded-circle", "bg-light"], ["aria-labelledby", "userDropdown", 1, "dropdown-menu", "dropdown-menu-right", "shadow", "animated--grow-in"], ["href", "#", 1, "dropdown-item"], [1, "fa", "fa-user", "fa-sm", "fa-fw", "mr-2", "text-gray-400"], [1, "fa", "fa-cogs", "fa-sm", "fa-fw", "mr-2", "text-gray-400"], [1, "fa", "fa-list", "fa-sm", "fa-fw", "mr-2", "text-gray-400"], [1, "dropdown-divider"], ["href", "#", "data-toggle", "modal", "data-target", "#logoutModal", 1, "dropdown-item"], [1, "fa", "fa-sign-out-alt", "fa-sm", "fa-fw", "mr-2", "text-gray-400"]],
        template: function ProductHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "3+");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h6", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Notifications ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sep 1, 2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "This section is currently under development!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Sep 2, 2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " This section is currently under development! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Sep 3, 2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " This section is currently under development! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Please try later!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h6", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Message Center ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Hi there! I am still under maintainance.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Frontend Developer \xB7 18m");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Hi there! I am still under maintainance.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Backend Developer \xB7 1d");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Hi! We will notify you later, keep up the good work!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "SamrtSewa Team \xB7 4d");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Updating the messages...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Development Team \xB7 1w");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Please Try Later!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "SmartSewa Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Profile ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Settings ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Activity Log ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Logout ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductHeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-header',
            templateUrl: 'product-header.component.html'
          }]
        }], function () {
          return [{
            type: _core_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]
          }, {
            type: _core_services_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ProductToasterService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/layouts/product-layout/components/product-sidebar/product-sidebar.component.ts":
    /*!************************************************************************************************!*\
      !*** ./src/app/layouts/product-layout/components/product-sidebar/product-sidebar.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: ProductSidebarComponent */

    /***/
    function srcAppLayoutsProductLayoutComponentsProductSidebarProductSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductSidebarComponent", function () {
        return ProductSidebarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var _c0 = function _c0() {
        return ["./dashboard/"];
      };

      var _c1 = function _c1() {
        return ["./vendor/"];
      };

      var _c2 = function _c2() {
        return {
          pageSize: 50,
          currentPage: 1
        };
      };

      var _c3 = function _c3() {
        return ["./inventory/products/"];
      };

      var _c4 = function _c4() {
        return ["./inventory/diagnostics/"];
      };

      var _c5 = function _c5() {
        return ["./inventory/medicine/"];
      };

      var ProductSidebarComponent = /*#__PURE__*/function () {
        function ProductSidebarComponent() {
          _classCallCheck(this, ProductSidebarComponent);
        }

        _createClass(ProductSidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            $(document).ready(function () {
              // Toggle the side navigation
              $("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
                $("body").toggleClass("sidebar-toggled");
                $(".sidebar").toggleClass("toggled");

                if ($(".sidebar").hasClass("toggled")) {
                  $('.sidebar .collapse').collapse('hide');
                }

                ;
              }); // Close any open menu accordions when window is resized below 768px

              $(window).resize(function () {
                if ($(window).width() < 768) {
                  $('.sidebar .collapse').collapse('hide');
                }

                ; // Toggle the side navigation when window is resized below 480px

                if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
                  $("body").addClass("sidebar-toggled");
                  $(".sidebar").addClass("toggled");
                  $('.sidebar .collapse').collapse('hide');
                }

                ;
              }); // Prevent the content wrapper from scrolling when the fixed side navigation hovered over

              $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
                if ($(window).width() > 768) {
                  var e0 = e.originalEvent,
                      delta = e0.wheelDelta || -e0.detail;
                  this.scrollTop += (delta < 0 ? 1 : -1) * 30;
                  e.preventDefault();
                }
              });
            });
          }
        }]);

        return ProductSidebarComponent;
      }();

      ProductSidebarComponent.ɵfac = function ProductSidebarComponent_Factory(t) {
        return new (t || ProductSidebarComponent)();
      };

      ProductSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductSidebarComponent,
        selectors: [["app-product-sidebar"]],
        decls: 50,
        vars: 18,
        consts: [["id", "accordionSidebar", 1, "navbar-nav", "bg-primary", "sidebar", "sidebar-dark", "accordion", "toggled"], ["href", "", 1, "sidebar-brand", "d-flex", "align-items-center", "justify-content-center"], [1, "sidebar-brand-icon"], ["src", "../../../../../assets/img/SS_Logo_Small.svg", "alt", "SmartSewa Logo", 1, "w-25"], [1, "sidebar-brand-text", "mx-3"], ["src", "../../../../../assets/img/SS_Logo_White.svg", "alt", "SmartSewa Logo", 1, "w-100", "h-100"], [1, "text-center", "d-none", "d-md-inline"], ["id", "sidebarToggle", 1, "rounded-circle", "border-0"], [1, "sidebar-divider", "my-0"], ["routerLinkActive", "active", 1, "nav-item"], ["href", "#", 1, "nav-link", 3, "routerLink"], [1, "fa", "fa-desktop"], [1, "sidebar-divider"], ["href", "#", 1, "nav-link", "collapsed", 3, "routerLink", "queryParams"], [1, "fa", "fa-fw", "fa-cog"], ["href", "#", "data-toggle", "collapse", "data-target", "#collapseInventory", "aria-expanded", "true", "aria-controls", "collapseInventory", 1, "nav-link", "collapsed"], [1, "fa", "fa-fw", "fa-wrench"], ["id", "collapseInventory", "aria-labelledby", "headingUtilities", "data-parent", "#accordionSidebar", 1, "collapse"], [1, "py-2", "collapse-inner"], [1, "collapse-header"], ["href", "#", 1, "collapse-item", 3, "routerLink", "queryParams"], ["aria-hidden", "true", 1, "fa", "fa-list"], ["aria-hidden", "true", 1, "fa", "fa-pencil-square-o"], ["aria-hidden", "true", 1, "fa", "fa-eye"], ["href", "", 1, "nav-link"], [1, "fa", "fa-bar-chart"], [1, "fa", "fa-fw", "fa-table"], [1, "sidebar-divider", "d-none", "d-md-block"]],
        template: function ProductSidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Vendor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Inventory");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Inventory Components:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \xA0 Products");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \xA0 Diagnostics");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \xA0 Medicine");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "hr", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Requests");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Contents");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "hr", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c4))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c5))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductSidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-sidebar',
            templateUrl: 'product-sidebar.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/layouts/product-layout/product-layout.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/layouts/product-layout/product-layout.component.ts ***!
      \********************************************************************/

    /*! exports provided: ProductLayoutComponent */

    /***/
    function srcAppLayoutsProductLayoutProductLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductLayoutComponent", function () {
        return ProductLayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _components_product_sidebar_product_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/product-sidebar/product-sidebar.component */
      "./src/app/layouts/product-layout/components/product-sidebar/product-sidebar.component.ts");
      /* harmony import */


      var _components_product_header_product_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/product-header/product-header.component */
      "./src/app/layouts/product-layout/components/product-header/product-header.component.ts");
      /* harmony import */


      var _components_product_footer_product_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/product-footer/product-footer.component */
      "./src/app/layouts/product-layout/components/product-footer/product-footer.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var ProductLayoutComponent = /*#__PURE__*/function () {
        function ProductLayoutComponent(router) {
          _classCallCheck(this, ProductLayoutComponent);

          this.router = router;
          this.topPosToStartShowing = 100;
        }

        _createClass(ProductLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.router.navigateByUrl('/app/dashboard');
          }
        }, {
          key: "checkScroll",
          value: function checkScroll() {
            var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

            if (scrollPosition >= this.topPosToStartShowing) {
              this.isShow = true;
            } else {
              this.isShow = false;
            }
          } // TODO: Cross browsing

        }, {
          key: "gotoTop",
          value: function gotoTop() {
            window.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth'
            });
          }
        }]);

        return ProductLayoutComponent;
      }();

      ProductLayoutComponent.ɵfac = function ProductLayoutComponent_Factory(t) {
        return new (t || ProductLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      ProductLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductLayoutComponent,
        selectors: [["app-product-layout"]],
        hostBindings: function ProductLayoutComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ProductLayoutComponent_scroll_HostBindingHandler() {
              return ctx.checkScroll();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        decls: 26,
        vars: 1,
        consts: [["id", "page-top"], ["id", "wrapper"], ["id", "content-wrapper", 1, "d-flex", "flex-column"], ["id", "content"], [1, "scroll-to-top", "rounded", 3, "ngClass", "click"], [1, "fa", "fa-angle-up"], ["id", "logoutModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["href", "login.html", 1, "btn", "btn-primary"]],
        template: function ProductLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-product-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-product-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-product-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductLayoutComponent_Template_a_click_8_listener() {
              return ctx.gotoTop();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Ready to Leave?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Select \"Logout\" below if you are ready to end your current session.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isShow ? "scroll-active" : "scroll-inactive");
          }
        },
        directives: [_components_product_sidebar_product_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ProductSidebarComponent"], _components_product_header_product_header_component__WEBPACK_IMPORTED_MODULE_3__["ProductHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _components_product_footer_product_footer_component__WEBPACK_IMPORTED_MODULE_4__["ProductFooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvcHJvZHVjdC1sYXlvdXQvcHJvZHVjdC1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductLayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-layout',
            templateUrl: './product-layout.component.html',
            styleUrls: ['./product-layout.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, {
          checkScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/login/login.component.ts":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/login.service */
      "./src/app/login/services/login.service.ts");
      /* harmony import */


      var src_app_core_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/storage.service */
      "./src/app/core/services/storage.service.ts");
      /* harmony import */


      var src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/toaster.service */
      "./src/app/core/services/toaster.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function LoginComponent_div_19_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_19_div_1_Template, 2, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loginFormGroup.controls.username.errors.required);
        }
      }

      function LoginComponent_div_22_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_22_div_1_Template, 2, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loginFormGroup.controls.password.errors.required);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(formBuilder, loginService, storageService, toastrService, router) {
          var _this = this;

          _classCallCheck(this, LoginComponent);

          this.formBuilder = formBuilder;
          this.loginService = loginService;
          this.storageService = storageService;
          this.toastrService = toastrService;
          this.router = router;
          this.submitted = false;
          this.checkLoginFormValidation = false; // Below Method is used for login user

          this.onSubmit = function (data) {
            _this.router.navigate(['/app/vendor/'], {
              queryParams: {
                pageSize: 50,
                currentPage: 1
              }
            }); // console.log('in OnSubmit the Data is ', data);
            // this.submitted = true;
            // // stop here if form is invalid
            // if (this.loginFormGroup.invalid) {
            //     return;
            // }
            // if (this.loginFormGroup.valid) {
            //   if (data.valid === true) {
            //     this.loginService.loginUser(this.loginFormGroup.value).subscribe(
            //       response => {
            //         if (response.status === true) {
            //           console.log('The Response of the Login API is ', response)
            //           const responseData = response.response.data;
            //           if (!!response && !!response.status && response.status === true) {
            //             const userData = {
            //             }
            //             this.storageService.setData('u_data', response.data);
            //             this.toastrService.showSuccess('Success', 'Login Successfull !!!');
            //             this.router.navigateByUrl('/pharmacy/dashboard');
            //           }
            //         } else {
            //           this.toastrService.showError('Error', response.data.error);
            //         }
            //         // if ( response.status === this.responseCode.Success) {
            //         //   if (!!response && !!response.data && (response.data.isUserLogin === true || response.data.isLoginSuccessfull === true) ) {
            //         //     this.storageService.setData('u_data', response.data);
            //         //     this.toastrService.showSuccess('Success', 'Login Successfull !!!');
            //         //     this.router.navigateByUrl('/pharmacy/dashboard');
            //         //   } else {
            //         //     this.toastrService.showError('Error', response.data.userData.message);
            //         //   }
            //         // }
            //       },
            //       err => {
            //         console.error(err)
            //         this.toastrService.showError('Error', err.error.data.error);
            //           }
            //       );
            //   } else {
            //     this.checkLoginFormValidation = true;
            //   }
            // }

          };
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginFormGroup = this.formBuilder.group({
              username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
          }
        }, {
          key: "adminloginForm",
          value: function adminloginForm() {
            return this.loginFormGroup.controls;
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ProductToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 26,
        vars: 9,
        consts: [[1, "d-flex", "align-items-center", "min-vh-100", "bg-gradient-primary"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-xl-10", "col-lg-12", "col-md-9"], [1, "card", "o-hidden", "border-0", "shadow-lg", "my-5"], [1, "card-body", "p-0"], [1, "row"], [1, "col-lg-6", "d-none", "d-lg-block", "bg-login-image"], [1, "col-lg-6"], [1, "p-5"], [1, "col-12", "text-center"], ["src", "assets/img/logo.svg", "width", "150", "height", "100"], [1, "text-center"], [1, "h4", "text-gray-900", "mb-4"], [1, "form-signin", 3, "formGroup", "ngSubmit"], ["loginForm", "ngForm"], [1, "form-group"], ["type", "email", "placeholder", "Email", "id", "username", "name", "username", "formControlName", "username", 1, "form-control", "form-control-user", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "placeholder", "Password", "id", "password", "name", "password", "formControlName", "password", 1, "form-control", "form-control-user", 3, "ngClass"], ["type", "submit", 1, "btn", "btn-secondary", "btn-user", "btn-block"], [1, "invalid-feedback"], [4, "ngIf"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Admin Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_15_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

              return ctx.onSubmit(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_div_19_Template, 2, 1, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LoginComponent_div_22_Template, 2, 1, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Login ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.submitted && ctx.loginFormGroup.controls.username.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.loginFormGroup.controls.username.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.loginFormGroup.controls.password.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.loginFormGroup.controls.password.errors);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
          }, {
            type: src_app_core_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
          }, {
            type: src_app_core_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ProductToasterService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/login/services/login.service.ts":
    /*!*************************************************!*\
      !*** ./src/app/login/services/login.service.ts ***!
      \*************************************************/

    /*! exports provided: LoginService */

    /***/
    function srcAppLoginServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginService", function () {
        return LoginService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_core_app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/app-settings */
      "./src/app/core/app-settings.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var LoginService = function LoginService(http) {
        var _this2 = this;

        _classCallCheck(this, LoginService);

        this.http = http;
        this.baseUrl = src_app_core_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"].API_ENDPOINT;

        this.loginUser = function (data) {
          return _this2.http.post(_this2.baseUrl + 'web/api/login', data);
        };
      };

      LoginService.ɵfac = function LoginService_Factory(t) {
        return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LoginService,
        factory: LoginService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
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
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

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

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
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
      /*! /Users/kanishk/SmartSewa/smartsewa-admin/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map