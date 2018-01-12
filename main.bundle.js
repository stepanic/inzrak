webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers__ = __webpack_require__("../../../../../src/app/containers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_app_containers_module__ = __webpack_require__("../../../../../src/app/containers/app-containers.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Routes configuration
var appRoutes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["f" /* HomeComponent */],
        data: {
            language: 'en',
            config: {
                hr: ''
            }
        }
    },
    // hr - Home is default root page
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["f" /* HomeComponent */],
        data: {
            language: 'hr',
            config: {
                en: 'home'
            }
        }
    },
    {
        path: 'information',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["g" /* InformationsComponent */],
        data: {
            language: 'en',
            config: {
                hr: 'informacije'
            }
        }
    },
    {
        path: 'informacije',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["g" /* InformationsComponent */],
        data: {
            language: 'hr',
            config: {
                en: 'information'
            }
        }
    },
    {
        path: 'documents',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["c" /* DocumentsComponent */],
        data: {
            language: 'en',
            config: {
                hr: 'dokumenti'
            }
        }
    },
    {
        path: 'documents/:slug',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["b" /* DocumentDetailComponent */],
        data: {
            language: 'en',
            config: {
                hr: 'dokumenti'
            }
        }
    },
    {
        path: 'dokumenti',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["c" /* DocumentsComponent */],
        data: {
            language: 'hr',
            config: {
                en: 'documents'
            }
        }
    },
    {
        path: 'dokumenti/:slug',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["b" /* DocumentDetailComponent */],
        data: {
            language: 'hr',
            config: {
                en: 'documents'
            }
        }
    },
    {
        path: 'events',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["e" /* EventsComponent */],
        data: {
            language: 'en',
            config: {
                hr: 'dogadaji'
            }
        }
    },
    {
        path: 'events/:slug',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["d" /* EventDetailComponent */],
        data: {
            language: 'en',
            config: {
                hr: 'dogadaji'
            }
        }
    },
    {
        path: 'dogadaji',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["e" /* EventsComponent */],
        data: {
            language: 'hr',
            config: {
                en: 'events'
            }
        }
    },
    {
        path: 'dogadaji/:slug',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["d" /* EventDetailComponent */],
        data: {
            language: 'hr',
            config: {
                en: 'events'
            }
        }
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["a" /* ContactComponent */],
        data: {
            language: 'en',
            config: {
                hr: 'kontakt'
            }
        }
    },
    {
        path: 'kontakt',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["a" /* ContactComponent */],
        data: {
            language: 'hr',
            config: {
                en: 'contact'
            }
        }
    },
    {
        path: 'news',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["h" /* NewsComponent */],
        data: {
            language: 'en',
            config: {
                hr: 'novosti'
            }
        }
    },
    {
        path: 'news/:slug',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["i" /* NewsDetailComponent */],
        data: {
            language: 'en',
            config: {
                hr: 'novosti'
            }
        }
    },
    {
        path: 'novosti',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["h" /* NewsComponent */],
        data: {
            language: 'hr',
            config: {
                en: 'news'
            }
        }
    },
    {
        path: 'novosti/:slug',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["i" /* NewsDetailComponent */],
        data: {
            language: 'hr',
            config: {
                en: 'news'
            }
        }
    },
    // redirect all other requests to root page
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__containers_app_containers_module__["a" /* AppContainersModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(appRoutes),
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"wrapper container\">\n    <router-outlet></router-outlet>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  margin-top: 100px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_logger__ = __webpack_require__("../../../../ng2-logger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(translate, router) {
        this.translate = translate;
        this.router = router;
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('hr');
        this.logger = __WEBPACK_IMPORTED_MODULE_1_ng2_logger__["Log"].create('AppComponent');
        // if (environment.production) {
        //   Log.setProductionMode();
        //   Log.onlyLevel(Level.ERROR, Level.WARN);
        // }
        this.logger.i('environment=' + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].name);
        router.events.subscribe(function (event) {
            // scroll to top on route change
            if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* NavigationEnd */]) {
                window.scrollTo(0, 0);
            }
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_recaptcha__ = __webpack_require__("../../../../ng-recaptcha/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_recaptcha_forms__ = __webpack_require__("../../../../ng-recaptcha/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_recaptcha_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_recaptcha_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_formly__ = __webpack_require__("../../../../ng-formly/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_bootstrap_collapse__ = __webpack_require__("../../../../ng2-bootstrap/collapse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_image_gallery__ = __webpack_require__("../../../../angular2-image-gallery/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_image_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_image_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__plugins_formly_types__ = __webpack_require__("../../../../../src/app/plugins/formly/types/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_app_services_module__ = __webpack_require__("../../../../../src/app/services/app-services.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__containers_app_containers_module__ = __webpack_require__("../../../../../src/app/containers/app-containers.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_app_pipes_module__ = __webpack_require__("../../../../../src/app/pipes/app-pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__plugins_formly_app_formly_module__ = __webpack_require__("../../../../../src/app/plugins/formly/app-formly.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_11__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["BrowserAnimationsModule"],
            __WEBPACK_IMPORTED_MODULE_2_ng_recaptcha__["RecaptchaModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3_ng_recaptcha_forms__["RecaptchaFormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_6_ng_formly__["c" /* FormlyModule */].forRoot({
                types: [{
                        name: 'captcha', component: __WEBPACK_IMPORTED_MODULE_13__plugins_formly_types__["a" /* FormlyFieldCaptcha */], wrappers: ['fieldset', 'label']
                    }]
            }),
            __WEBPACK_IMPORTED_MODULE_6_ng_formly__["b" /* FormlyBootstrapModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_14__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_17__containers_app_containers_module__["a" /* AppContainersModule */],
            __WEBPACK_IMPORTED_MODULE_16__services_app_services_module__["a" /* AppServicesModule */],
            __WEBPACK_IMPORTED_MODULE_18__pipes_app_pipes_module__["a" /* AppPipesModule */],
            __WEBPACK_IMPORTED_MODULE_19__plugins_formly_app_formly_module__["a" /* AppFormlyModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_12_angular2_image_gallery__["Angular2ImageGalleryModule"],
            __WEBPACK_IMPORTED_MODULE_9_ng2_bootstrap_collapse__["a" /* CollapseModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_7__angular_http__["Http"]]
                }
            })
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-top\">\n  <div class=\"container\" >\n    <div class=\"row\" >\n      <div class=\"col-md-3 col-sm-6 logo-wrapper mzoip\" >\n        <a href=\"http://www.mzoip.hr/\" target=\"_blank\" >\n          <img src=\"assets/img/mzoip-footer.png\" class=\"img-responsive\">\n        </a>\n      </div>\n      <div class=\"col-md-3 col-sm-6 logo-wrapper ekonerg\" >\n        <a href=\"http://www.ekonerg.hr/\" target=\"_blank\" >\n          <img src=\"assets/img/ekonerg-footer.png\" class=\"img-responsive\">\n        </a>\n      </div>\n      <div class=\"col-md-3 col-sm-6 logo-wrapper safu\" >\n        <a href=\"http://www.safu.hr/\" target=\"_blank\" >\n          <img src=\"assets/img/safu-footer.png\" class=\"img-responsive\">\n        </a>\n      </div>\n      <div class=\"col-md-3 col-sm-6 logo-wrapper eu\" >\n        <a href=\"https://europa.eu/\" target=\"_blank\" >\n          <img src=\"assets/img/eu-footer.png\" class=\"img-responsive\">\n        </a>\n        <div class=\"description\">{{ 'FOOTER.EU.description' | translate }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"footer-middle\">\n  <div class=\"container\" >\n    <div [innerHTML]=\"'FOOTER.DISCLAIMER' | translate\" class=\"disclaimer\" ></div>\n  </div>\n</div>\n<div class=\"footer-bottom\">\n  <div class=\"container\" >\n    <div [innerHTML]=\"'FOOTER.COPYRIGHT' | translate\" class=\"copyright\" ></div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.footer-top {\n  padding-bottom: 30px;\n  padding-top: 30px;\n  border-top: 1px solid #e7e7e7; }\n  div.footer-top div.col-md-3 {\n    text-align: center; }\n    div.footer-top div.col-md-3 img {\n      display: inline-block;\n      max-height: 110px; }\n  @media (min-width: 768px) and (max-width: 991px) {\n    div.footer-top div.col-md-3 {\n      padding-bottom: 20px; } }\n\ndiv.footer-middle {\n  border-top: 1px solid #e7e7e7;\n  border-bottom: 1px solid #e7e7e7;\n  background-color: #f8f8f8; }\n  div.footer-middle div.disclaimer {\n    padding-bottom: 10px;\n    padding-top: 10px;\n    font-size: 11px; }\n\ndiv.footer-bottom {\n  color: #f8f8f8;\n  background-color: #098040;\n  font-size: 12px; }\n  div.footer-bottom div.copyright {\n    text-align: center;\n    padding-top: 20px;\n    padding-bottom: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav class=\"navbar navbar-default navbar-fixed-top navbar-custom\">\n    <div class=\"container\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header page-scroll\">\n            <button type=\"button\"\n                class=\"navbar-toggle\"\n                (click)=\"isCollapsedMenu = !isCollapsedMenu\">\n                    <span class=\"sr-only\">Toggle navigation</span> {{ 'MENU' | translate }} <i class=\"fa fa-bars\"></i>\n                </button>\n\n            <a class=\"navbar-brand\"\n                [routerLink]=\"['HOME.path' | translate]\"><img src=\"assets/svg/logo.svg\"\n                    class=\"rounded img-responsive\"></a>\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"navbar-collapse\"\n            [collapse]=\"isCollapsedMenu\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a [routerLink]=\"['INFORMATIONS.path' | translate]\" (click)=\"isCollapsedMenu = true\" >{{ 'INFORMATIONS.title' | translate }}</a>\n                </li>\n\n                <li>\n                    <a [routerLink]=\"['NEWS.path' | translate]\" (click)=\"isCollapsedMenu = true\" >{{ 'NEWS.title' | translate }}</a>\n                </li>\n\n                <li>\n                    <a [routerLink]=\"['DOCUMENTS.path' | translate]\" (click)=\"isCollapsedMenu = true\" >{{ 'DOCUMENTS.title' | translate }}</a>\n                </li>\n\n                <li>\n                    <a [routerLink]=\"['EVENTS.path' | translate]\" (click)=\"isCollapsedMenu = true\" >{{ 'EVENTS.title' | translate }}</a>\n                </li>\n\n                <li>\n                    <a [routerLink]=\"['CONTACT.path' | translate]\" (click)=\"isCollapsedMenu = true\" >{{ 'CONTACT.title' | translate }}</a>\n                </li>\n\n                <li class=\"change-language\">\n                    <a [ngClass]=\"{'active' : currentLanguage === 'hr'}\"\n                       (click)=\"changeLanguage('hr'); isCollapsedMenu = true\">HR</a>\n                    |\n                    <a [ngClass]=\"{'active' : currentLanguage === 'en'}\"\n                       (click)=\"changeLanguage('en'); isCollapsedMenu = true\">EN</a>\n                </li>\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container-fluid -->\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav.navbar div.navbar-header a.navbar-brand {\n  min-height: 80px; }\n  nav.navbar div.navbar-header a.navbar-brand img {\n    max-height: 100%;\n    max-width: 100%;\n    width: 83px; }\n\nnav.navbar div.navbar-header button.navbar-toggle {\n  margin-top: 20px; }\n\nnav.navbar ul.nav {\n  margin-top: 15px; }\n  nav.navbar ul.nav li.change-language {\n    color: #777; }\n    nav.navbar ul.nav li.change-language a {\n      cursor: pointer;\n      display: inline-block;\n      padding-left: 5px;\n      padding-right: 5px; }\n    nav.navbar ul.nav li.change-language a.active {\n      font-weight: bold; }\n    nav.navbar ul.nav li.change-language a:first-child {\n      padding-left: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(translate, router, route) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.route = route;
        // it is closed by defualt
        this.isCollapsedMenu = true;
        this.currentLanguage = translate.defaultLang;
        translate.onLangChange.subscribe(function (event) {
            _this.currentLanguage = event.lang;
        });
    }
    /**
     * Change language
     * @param language is 'en' OR 'hr'
     */
    HeaderComponent.prototype.changeLanguage = function (language) {
        // 1. change language
        this.translate.use(language);
        this.currentLanguage = language;
        // 2. go to complement state in changed language
        this.router.navigate(['/' + this.routeData.config[language]]);
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]; })
            .subscribe(function (event) {
            var currentRoute = _this.route.root;
            while (currentRoute.children[0] !== undefined) {
                currentRoute = currentRoute.children[0];
            }
            _this.routeData = currentRoute.snapshot.data;
        });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/app-containers.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppContainersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_formly__ = __webpack_require__("../../../../ng-formly/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_recaptcha__ = __webpack_require__("../../../../ng-recaptcha/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_recaptcha_forms__ = __webpack_require__("../../../../ng-recaptcha/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_recaptcha_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng_recaptcha_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_image_gallery__ = __webpack_require__("../../../../angular2-image-gallery/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_image_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_image_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_app_pipes_module__ = __webpack_require__("../../../../../src/app/pipes/app-pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12____ = __webpack_require__("../../../../../src/app/containers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__informations_i18n_informations_hr_informations_hr_component__ = __webpack_require__("../../../../../src/app/containers/informations/i18n/informations-hr/informations-hr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__informations_i18n_informations_en_informations_en_component__ = __webpack_require__("../../../../../src/app/containers/informations/i18n/informations-en/informations-en.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__documents_i18n_documents_hr_documents_hr_component__ = __webpack_require__("../../../../../src/app/containers/documents/i18n/documents-hr/documents-hr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__documents_i18n_documents_en_documents_en_component__ = __webpack_require__("../../../../../src/app/containers/documents/i18n/documents-en/documents-en.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__events_i18n_events_hr_events_hr_component__ = __webpack_require__("../../../../../src/app/containers/events/i18n/events-hr/events-hr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__events_i18n_events_en_events_en_component__ = __webpack_require__("../../../../../src/app/containers/events/i18n/events-en/events-en.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__news_news_detail_news_detail_component__ = __webpack_require__("../../../../../src/app/containers/news/news-detail/news-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__events_event_detail_event_detail_component__ = __webpack_require__("../../../../../src/app/containers/events/event-detail/event-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__documents_document_detail_document_detail_component__ = __webpack_require__("../../../../../src/app/containers/documents/document-detail/document-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// Angular2ImageGalleryModule is much better gallery component
// import { Ng2ImageGalleryModule } from 'ng2-image-gallery';












var AppContainersModule = (function () {
    function AppContainersModule() {
    }
    return AppContainersModule;
}());
AppContainersModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_11__pipes_app_pipes_module__["a" /* AppPipesModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_ng_formly__["c" /* FormlyModule */],
            __WEBPACK_IMPORTED_MODULE_3_ng_formly__["b" /* FormlyBootstrapModule */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng_recaptcha__["RecaptchaModule"],
            __WEBPACK_IMPORTED_MODULE_7_ng_recaptcha_forms__["RecaptchaFormsModule"],
            __WEBPACK_IMPORTED_MODULE_8_angular2_moment__["MomentModule"],
            // Ng2ImageGalleryModule,
            __WEBPACK_IMPORTED_MODULE_10_angular2_image_gallery__["Angular2ImageGalleryModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12____["f" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12____["g" /* InformationsComponent */],
            __WEBPACK_IMPORTED_MODULE_12____["c" /* DocumentsComponent */],
            __WEBPACK_IMPORTED_MODULE_12____["e" /* EventsComponent */],
            __WEBPACK_IMPORTED_MODULE_12____["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_13__informations_i18n_informations_hr_informations_hr_component__["a" /* InformationsHrComponent */],
            __WEBPACK_IMPORTED_MODULE_14__informations_i18n_informations_en_informations_en_component__["a" /* InformationsEnComponent */],
            __WEBPACK_IMPORTED_MODULE_15__documents_i18n_documents_hr_documents_hr_component__["a" /* DocumentsHrComponent */],
            __WEBPACK_IMPORTED_MODULE_16__documents_i18n_documents_en_documents_en_component__["a" /* DocumentsEnComponent */],
            __WEBPACK_IMPORTED_MODULE_17__events_i18n_events_hr_events_hr_component__["a" /* EventsHrComponent */],
            __WEBPACK_IMPORTED_MODULE_18__events_i18n_events_en_events_en_component__["a" /* EventsEnComponent */],
            __WEBPACK_IMPORTED_MODULE_12____["h" /* NewsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__news_news_detail_news_detail_component__["a" /* NewsDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_20__events_event_detail_event_detail_component__["a" /* EventDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_21__documents_document_detail_document_detail_component__["a" /* DocumentDetailComponent */]
        ]
    })
], AppContainersModule);

//# sourceMappingURL=app-containers.module.js.map

/***/ }),

/***/ "../../../../../src/app/containers/base.container.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseContainer; });
var BaseContainer = (function () {
    function BaseContainer(route, translate) {
        var _this = this;
        this.route = route;
        this.translate = translate;
        this.language = this.translate.currentLang;
        translate.onLangChange.subscribe(function (event) {
            _this.language = event.lang;
        });
        if (this.route.data) {
            this.route.data.subscribe(function (data) {
                if (data.language) {
                    _this.translate.use(data.language);
                }
            });
        }
    }
    return BaseContainer;
}());

//# sourceMappingURL=base.container.js.map

/***/ }),

/***/ "../../../../../src/app/containers/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" >\n  <div class=\"col-md-6\" >\n    \n    <address>\n      <div class=\"title\">{{ 'CONTACT.DATA.p1.title' | translate }}</div>\n      <div class=\"name\">{{ 'CONTACT.DATA.p1.name' | translate }}</div>\n      <div class=\"organization\">{{ 'CONTACT.DATA.p1.organization' | translate }}</div>\n      <div class=\"address\">{{ 'CONTACT.DATA.p1.address' | translate }}</div>\n      <div class=\"email\">\n        <strong>{{ 'CONTACT.DATA.p1.email.title' | translate }}</strong>\n        <a href=\"mailto:{{ 'CONTACT.DATA.p1.email.value' | translate }}\">\n          {{ 'CONTACT.DATA.p1.email.value' | translate }}\n        </a>\n      </div>\n      <div class=\"tel\">\n        <strong>{{ 'CONTACT.DATA.p1.tel.title' | translate }}</strong>\n        {{ 'CONTACT.DATA.p1.tel.value' | translate }}\n      </div>\n      <div class=\"fax\">\n        <strong>{{ 'CONTACT.DATA.p1.fax.title' | translate }}</strong>\n        {{ 'CONTACT.DATA.p1.fax.value' | translate }}\n      </div>\n    </address>\n\n    <address>\n      <div class=\"title\">{{ 'CONTACT.DATA.p2.title' | translate }}</div>\n      <div class=\"name\">{{ 'CONTACT.DATA.p2.name' | translate }}</div>\n      <div class=\"organization\">{{ 'CONTACT.DATA.p2.organization' | translate }}</div>\n      <div class=\"address\">{{ 'CONTACT.DATA.p2.address' | translate }}</div>\n      <div class=\"email\">\n        <strong>{{ 'CONTACT.DATA.p2.email.title' | translate }}</strong>\n        <a href=\"mailto:{{ 'CONTACT.DATA.p2.email.value' | translate }}\">\n          {{ 'CONTACT.DATA.p2.email.value' | translate }}\n        </a>\n      </div>\n      <div class=\"tel\">\n        <strong>{{ 'CONTACT.DATA.p2.tel.title' | translate }}</strong>\n        {{ 'CONTACT.DATA.p2.tel.value' | translate }}\n      </div>\n      <div class=\"fax\">\n        <strong>{{ 'CONTACT.DATA.p2.fax.title' | translate }}</strong>\n        {{ 'CONTACT.DATA.p2.fax.value' | translate }}\n      </div>\n    </address>\n\n  </div>\n  <div class=\"col-md-6 contact-form\" >\n\n    <h2>{{ 'CONTACT.FORM.TITLE' | translate }}</h2>\n\n    <div [hidden]=\"formState !== 'IN_PROGRESS'\" class=\"loader\" >\n      <p>{{ 'CONTACT.FORM.LOADER' | translate }}</p>\n      <img src=\"assets/svg/loader.svg\" />\n    </div>\n\n    <div [hidden]=\"formState !== 'SUCCESS'\" class=\"loader\" >\n      <p>{{ 'CONTACT.FORM.MESSAGE_IS_SENT' | translate }}</p>\n    </div>\n\n    <div [hidden]=\"formState !== 'ERROR'\" class=\"loader\" >\n      <p>{{ 'CONTACT.FORM.MESSAGE_IS_NOT_SENT' | translate }}</p>\n    </div>\n\n    <form class=\"formly\" role=\"form\" [hidden]=\"formState !== 'DEFAULT'\" [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\n        <formly-form [model]=\"model\" [fields]=\"formFields\">\n            <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!isFormValid\" >\n              {{ 'CONTACT.FORM.SEND' | translate }}\n            </button>\n        </formly-form>\n    </form>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/containers/contact/contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "address div {\n  padding-bottom: 10px; }\n\naddress div.title {\n  font-size: 1.5em; }\n\naddress div.name {\n  font-weight: bold;\n  font-size: 1.2em; }\n\ndiv.contact-form {\n  margin-bottom: 20px; }\n  div.contact-form h2 {\n    margin-top: 0;\n    margin-bottom: 20px; }\n  div.contact-form div.loader img {\n    height: 80px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_container__ = __webpack_require__("../../../../../src/app/containers/base.container.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ContactComponent = ContactComponent_1 = (function (_super) {
    __extends(ContactComponent, _super);
    function ContactComponent(route, translate, mailService, chRef) {
        var _this = _super.call(this, route, translate) || this;
        _this.route = route;
        _this.translate = translate;
        _this.mailService = mailService;
        _this.chRef = chRef;
        _this.form = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({});
        _this.model = ContactComponent_1.model;
        _this.isInProgress = false;
        _this.isFormValid = true;
        _this.formState = 'DEFAULT';
        _this.translate.get('CONTACT').subscribe(function (CONTACT) {
            _this.formFields = [{
                    className: 'contact',
                    fieldGroup: [
                        {
                            className: 'name',
                            key: 'name',
                            type: 'input',
                            templateOptions: {
                                required: true,
                                type: 'text',
                                label: CONTACT.FORM.FIELDS.name.label,
                                placeholder: CONTACT.FORM.FIELDS.name.placeholder
                            },
                            validators: {
                                required: function (control) { return !__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required(control); }
                            },
                            validation: {
                                show: true,
                                messages: {
                                    required: CONTACT.FORM.FIELDS.name.validation.required
                                },
                            },
                        },
                        {
                            className: 'company',
                            key: 'company',
                            type: 'input',
                            templateOptions: {
                                type: 'text',
                                label: CONTACT.FORM.FIELDS.company.label,
                                placeholder: CONTACT.FORM.FIELDS.company.placeholder
                            },
                            validators: {},
                            validation: {
                                show: true,
                                messages: {},
                            }
                        },
                        {
                            className: 'email',
                            key: 'email',
                            type: 'input',
                            templateOptions: {
                                required: true,
                                type: 'email',
                                label: CONTACT.FORM.FIELDS.email.label,
                                placeholder: CONTACT.FORM.FIELDS.email.placeholder
                            },
                            validators: {
                                required: function (control) { return !__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required(control); },
                                email: function (control) {
                                    // tslint:disable-next-line:max-line-length
                                    return !__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern(/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/)(control);
                                }
                            },
                            validation: {
                                show: true,
                                messages: {
                                    required: CONTACT.FORM.FIELDS.email.validation.required,
                                    email: CONTACT.FORM.FIELDS.email.validation.email
                                },
                            }
                        },
                        {
                            className: 'subject',
                            key: 'subject',
                            type: 'input',
                            templateOptions: {
                                required: true,
                                type: 'text',
                                label: CONTACT.FORM.FIELDS.subject.label,
                                placeholder: CONTACT.FORM.FIELDS.subject.placeholder
                            },
                            validators: {
                                required: function (control) { return !__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required(control); }
                            },
                            validation: {
                                show: true,
                                messages: {
                                    required: CONTACT.FORM.FIELDS.subject.validation.required
                                },
                            }
                        },
                        {
                            className: 'message',
                            key: 'message',
                            type: 'textarea',
                            templateOptions: {
                                required: true,
                                label: CONTACT.FORM.FIELDS.message.label,
                                placeholder: CONTACT.FORM.FIELDS.message.placeholder,
                                rows: 6
                            },
                            validators: {
                                required: function (control) {
                                    return !__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required(control);
                                }
                            },
                            validation: {
                                show: true,
                                messages: {
                                    required: CONTACT.FORM.FIELDS.message.validation.required
                                },
                            }
                        },
                        {
                            className: 'captcha',
                            key: 'captcha',
                            type: 'captcha',
                            templateOptions: {
                                label: CONTACT.FORM.FIELDS.captcha.label,
                                siteKey: __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].reCaptcha.siteKey
                            },
                            validators: {},
                            validation: {
                                show: true,
                                messages: {},
                            }
                        },
                    ]
                }];
        });
        return _this;
    }
    /**
     * Read from static model, static has fresh data
     * Write to instance model, instance will update UI
     * static/instance combination is used to keep model data between routes change
     */
    ContactComponent.prototype.submitForm = function () {
        var _this = this;
        // protect multiple parallel requests
        if (this.formState === 'IN_PROGRESS') {
            return;
        }
        this.setFormState('IN_PROGRESS');
        // Read source
        // ContactComponent.model
        var subject = 'IPA INZRAK - Kontakt forma: ' + ContactComponent_1.model.subject;
        var name = ContactComponent_1.model.name;
        var company = ContactComponent_1.model.company;
        var email = ContactComponent_1.model.email;
        var captcha = ContactComponent_1.model.captcha;
        var message = "\n      <p>Ova poruka je poslana koriste\u0107i kontakt formu na web stranici <a href=\"http//www.ipa-inzrak.info\" >www.ipa-inzrak.info</a></p>\n      <p><b>Ime i prezime:</b><br>" + name + "</p>\n      <p><b>Tvrtka:</b><br>" + (company || '-') + "</p>\n      <p><b>Email adresa:</b><br><a href=\"mailto:" + email + "\" >" + email + "</a></p>\n      <p><b>Naslov:</b><br>" + (subject || '-') + "</p>\n      <p><b>Poruka:</b><br>" + (ContactComponent_1.model.message.split('\n').join('<br>') || '-') + "</p>\n    ";
        // send email
        this.mailService.send(name, email, subject, message, captcha).then(function (result) {
            // Write target
            // reset this.model
            _this.model = {
                name: '',
                company: '',
                email: '',
                subject: '',
                message: '',
                captcha: ''
            };
            _this.setFormState('SUCCESS');
        }, function (error) {
            _this.setFormState('ERROR');
            setTimeout(function () {
                _this.setFormState('DEFAULT');
            }, 7000);
        });
    };
    /**
     * Change form state and force to detect changes
     * @param formState is state key
     */
    ContactComponent.prototype.setFormState = function (formState) {
        this.formState = formState;
        this.chRef.detectChanges();
    };
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.ngDoCheck = function () {
        var _this = this;
        // check every field, if one filed is invalid than whole form is invalid
        if (this.formFields && this.formFields[0] && this.formFields[0].fieldGroup) {
            var group = this.formFields[0].fieldGroup;
            this.isFormValid = true;
            // captcha is special field
            // TODO(stepanic): refactor over validators
            if (!ContactComponent_1.model.captcha) {
                this.isFormValid = false;
            }
            group.forEach(function (config) {
                if (config.formControl) {
                    // console.log(config.key, config.formControl.valid, config.formControl);
                    if (!config.formControl.valid) {
                        _this.isFormValid = false;
                    }
                }
            });
        }
    };
    return ContactComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_container__["a" /* BaseContainer */]));
ContactComponent.model = {};
ContactComponent = ContactComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/containers/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/contact/contact.component.scss")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].Default
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services__["b" /* MailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services__["b" /* MailService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object])
], ContactComponent);

var ContactComponent_1, _a, _b, _c, _d;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/documents/document-detail/document-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\" >\n  <div *ngIf=\"!item\" class=\"not-found\">{{ 'DOCUMENTS.notFound' | translate }}</div>\n\n  <div *ngIf=\"item\" class=\"detail\">\n    <h2 class=\"title\">{{item.titleDetail || item.title}}</h2>\n    <!--<div class=\"date\" *ngIf=\"item.language === 'hr'\" >{{ item.date | amDateFormat: 'DD.MM.YYYY.' }}</div>-->\n    <!--<div class=\"date\" *ngIf=\"item.language === 'en'\" >{{ item.date | amDateFormat: 'D MMMM YYYY' }}</div>-->\n    <!--<div class=\"image\" *ngIf=\"item.images.main\" ><img [src]=\"item.images.path + item.images.main\" class=\"img-responsive\" /></div>-->\n    <div class=\"body\">\n      <div *ngFor=\"let bodyElement of item.body\" >\n        <div *ngIf=\"bodyElement.type === 'html'\" [innerHTML]=\"bodyElement.data.html\" ></div>\n        <gallery \n            *ngIf=\"bodyElement.type === 'gallery'\"\n            [flexBorderSize]=\"10\" \n            [flexImageSize]=\"5\"\n            [galleryName]=\"bodyElement.data.galleryName\" \n            (viewerChange)=\"isGalleryOpened($event)\">\n        </gallery>\n      </div>\n    </div> \n\n    \n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/containers/documents/document-detail/document-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.detail {\n  margin-bottom: 40px; }\n  div.detail h2.title {\n    text-transform: uppercase; }\n  div.detail div.date {\n    font-size: 1.0em;\n    text-align: right;\n    margin-bottom: 20px;\n    font-weight: bold; }\n  div.detail div.image img {\n    width: 100%;\n    margin-bottom: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/documents/document-detail/document-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_container__ = __webpack_require__("../../../../../src/app/containers/base.container.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DocumentDetailComponent = (function (_super) {
    __extends(DocumentDetailComponent, _super);
    function DocumentDetailComponent(route, translate, dataService) {
        var _this = _super.call(this, route, translate) || this;
        _this.route = route;
        _this.translate = translate;
        _this.dataService = dataService;
        _this.galleryImages = new Array();
        _this.route.params.subscribe(function (params) {
            console.log(params.slug);
            var slug = params.slug;
            _this.item = _this.dataService.getDocument(slug);
            console.log('tu sam', _this.item, params.slug);
            // Change language depend on news language
            if (_this.item && _this.item.language) {
                _this.translate.use(_this.item.language);
            }
            // if (this.item && this.item.images && this.item.images.gallery) {
            //   this.item.images.gallery.forEach(galleryImage => {
            //     this.galleryImages.push({
            //       thumbnail: this.item.images.path + galleryImage.thumbnail,
            //       image: this.item.images.path + galleryImage.image
            //     })
            //   });
            // }
        });
        return _this;
    }
    DocumentDetailComponent.prototype.isGalleryOpened = function (event) {
        console.log('gallery event', event);
    };
    DocumentDetailComponent.prototype.ngOnInit = function () {
    };
    return DocumentDetailComponent;
}(__WEBPACK_IMPORTED_MODULE_4__base_container__["a" /* BaseContainer */]));
DocumentDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-document-detail',
        template: __webpack_require__("../../../../../src/app/containers/documents/document-detail/document-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/documents/document-detail/document-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* DataService */]) === "function" && _c || Object])
], DocumentDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=document-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/documents/documents.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\" >\n  <h2 class=\"title\">{{ 'DOCUMENTS.PAGE.title' | translate }}</h2>\n\n  <app-documents-hr *ngIf=\"language === 'hr'\"></app-documents-hr>\n  <app-documents-en *ngIf=\"language === 'en'\"></app-documents-en>\n</div>"

/***/ }),

/***/ "../../../../../src/app/containers/documents/documents.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/documents/documents.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_container__ = __webpack_require__("../../../../../src/app/containers/base.container.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DocumentsComponent = (function (_super) {
    __extends(DocumentsComponent, _super);
    function DocumentsComponent(route, translate) {
        var _this = _super.call(this, route, translate) || this;
        _this.route = route;
        _this.translate = translate;
        return _this;
    }
    DocumentsComponent.prototype.ngOnInit = function () {
    };
    return DocumentsComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_container__["a" /* BaseContainer */]));
DocumentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-documents',
        template: __webpack_require__("../../../../../src/app/containers/documents/documents.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/documents/documents.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _b || Object])
], DocumentsComponent);

var _a, _b;
//# sourceMappingURL=documents.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/documents/i18n/documents-en/documents-en.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Activity 1.1.2</h4>\n<ul>\n    <li>\n      <a class=\"inactive\">\n        Report on current state of air quality monitoring and greenhouse gas emissions trading system in the Republic of Croatia\n      </a>\n    </li>\n</ul>\n<h4>Activity 1.2.1</h4>\n<ul>\n    <li>\n      <a class=\"inactive\">\n        Handbook for environmental protection inspectors and other project target groups for the control of implementation of legislation (national and EU) related to air quality monitoring and greenhouse gas emissions trading system\n      </a>\n    </li>\n</ul>\n<h4>Activity 2.1.1</h4>\n<ul>\n    <li>\n      <a href=\"assets/materials/Upitnik_za_analizu_potreba_za_obukom.xlsx\" >\n        Questionnaire for analysis of training needs of project target groups\n      </a>\n    </li>\n    <li>\n      <a href=\"assets/materials/provedena-analiza-potreba-za-obukom-predstavnika-ciljnih-skupina/Izvjesce_o_rezultatima_analize_potreba_za_obukom.pdf\" target=\"_blank\">\n        Report on analysis of training needs\n      </a>\n    </li>\n</ul>\n<h4>Activity 2.1.2</h4>\n<ul>\n    <li>\n      <a href=\"assets/materials/najava-odrzavanja-obuke/Training_schedule.xlsx\" target=\"_blank\">\n        Training schedule\n      </a>\n    </li>\n    <li>\n      <a routerLink=\"/documents/training-programme-for-all-project-target-groups\">\n        Training programme (divided in 3 modules) for all project target groups\n      </a>\n    </li>\n</ul>\n<h4>Activity 2.2.2</h4>\n<ul>\n    <li>\n      <a class=\"inactive\">\n        Training materials for AQM1 module\n      </a>\n    </li>\n    <li>\n      <a class=\"inactive\">\n        Training materials for AQM2 module\n      </a>\n    </li>\n    <li>\n      <a class=\"inactive\">\n        Training materials for ETS module\n      </a>\n    </li>\n</ul>\n<h4>Activity 2.3.1</h4>\n<ul>\n    <li>\n      <a class=\"inactive\">\n        The report of the first study visit\n      </a>\n    </li>\n    <li>\n      <a class=\"inactive\">\n        The report on the second study visit\n      </a>\n    </li>\n</ul>\n<h4>Activity 2.3.3</h4>\n<ul>\n    <li>\n      <a routerLink=\"/documents/working-materials-for-the-first-one-day-workshop\" >\n        Working materials for the first one-day workshop\n      </a>\n    </li>\n    <li>\n      <a class=\"inactive\">\n        Working materials for the second one-day workshop\n      </a>\n    </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/containers/documents/i18n/documents-en/documents-en.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/documents/i18n/documents-en/documents-en.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsEnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocumentsEnComponent = (function () {
    function DocumentsEnComponent() {
    }
    DocumentsEnComponent.prototype.ngOnInit = function () {
    };
    return DocumentsEnComponent;
}());
DocumentsEnComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-documents-en',
        template: __webpack_require__("../../../../../src/app/containers/documents/i18n/documents-en/documents-en.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/documents/i18n/documents-en/documents-en.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DocumentsEnComponent);

//# sourceMappingURL=documents-en.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/documents/i18n/documents-hr/documents-hr.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Aktivnost 1.1.2</h4>\n<ul>\n    <li>\n      <a class=\"inactive\">\n        Izvješće o trenutnom stanju u Republici Hrvatskoj vezane uz praćenje kvalitete zraka i sustava trgovanja emisijskim jedinicama stakleničkih plinova\n      </a>\n    </li>\n</ul>\n<h4>Aktivnost 1.2.1</h4>\n<ul>\n    <li>\n      <a class=\"inactive\">\n        Priručnik za inspektore zaštite okoliša i ostale ciljne skupine projekta za kontrolu provedbe propisa (nacionalnih i EU) vezanih za praćenje kvalitete zraka i sustava trgovanja emisijskim jedinicama stakleničkih plinova\n      </a>\n    </li>\n</ul>\n<h4>Aktivnost 2.1.1</h4>\n<ul>\n    <li>\n      <a href=\"assets/materials/Upitnik_za_analizu_potreba_za_obukom.xlsx\" >\n        Upitnik za analizu potreba za obukom ciljnih skupina projekta\n      </a>\n    </li>\n    <li>\n      <a href=\"assets/materials/provedena-analiza-potreba-za-obukom-predstavnika-ciljnih-skupina/Izvjesce_o_rezultatima_analize_potreba_za_obukom.pdf\" target=\"_blank\">\n        Izvješće o provedenoj analizi potreba za obukom\n      </a>\n    </li>\n</ul>\n<h4>Aktivnost 2.1.2</h4>\n<ul>\n    <li>\n      <a href=\"assets/materials/najava-odrzavanja-obuke/Terminski_plan_obuke.xlsx\" target=\"_blank\">\n        Raspored održavanja obuke\n      </a>\n    </li>\n    <li>\n      <a routerLink=\"/dokumenti/program-obuke-za-sve-ciljne-skupine-projekta\">\n        Program obuke (u 3 modula) za sve ciljne skupine projekta\n      </a>\n    </li>\n</ul>\n<h4>Aktivnost 2.2.2</h4>\n<ul>\n    <li>\n        <a routerLink=\"/dokumenti/materijali-za-obuku-modula-PKZ1\">\n        Materijali za obuku modula PKZ1\n      </a>\n    </li>\n    <li>\n        <a class=\"inactive\">\n        Materijali za obuku modula PKZ2\n      </a>\n    </li>\n    <li>\n        <a class=\"inactive\">\n        Materijali za obuku modula STE\n      </a>\n    </li>\n</ul>\n<h4>Aktivnost 2.3.1</h4>\n<ul>\n    <li>\n      <a class=\"inactive\">\n        Izvje&scaron;taj o prvoj studijskoj posjeti\n      </a>\n    </li>\n    <li>\n      <a class=\"inactive\">\n        Izvje&scaron;taj o drugoj studijskoj posjeti\n      </a>\n    </li>\n</ul>\n<h4>Aktivnost 2.3.3</h4>\n<ul>\n    <li>\n      <a routerLink=\"/dokumenti/materijali-za-prvu-jednodnevnu-radionicu\">\n        Materijali za prvu jednodnevnu radionicu\n      </a>\n    </li>\n    <li>\n      <a class=\"inactive\">\n        Materijali za drugu jednodnevnu radionicu\n      </a>\n    </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/containers/documents/i18n/documents-hr/documents-hr.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/documents/i18n/documents-hr/documents-hr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsHrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocumentsHrComponent = (function () {
    function DocumentsHrComponent() {
    }
    DocumentsHrComponent.prototype.ngOnInit = function () {
    };
    return DocumentsHrComponent;
}());
DocumentsHrComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-documents-hr',
        template: __webpack_require__("../../../../../src/app/containers/documents/i18n/documents-hr/documents-hr.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/documents/i18n/documents-hr/documents-hr.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DocumentsHrComponent);

//# sourceMappingURL=documents-hr.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/events/event-detail/event-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\" >\n  <div *ngIf=\"!item\" class=\"not-found\">{{ 'EVENTS.notFound' | translate }}</div>\n\n  <div *ngIf=\"item\" class=\"detail\">\n    <h2 class=\"title\">{{item.titleDetail || item.title}}</h2>\n    <!--<div class=\"date\" *ngIf=\"item.language === 'hr'\" >{{ item.date | amDateFormat: 'DD.MM.YYYY.' }}</div>-->\n    <!--<div class=\"date\" *ngIf=\"item.language === 'en'\" >{{ item.date | amDateFormat: 'D MMMM YYYY' }}</div>-->\n    <!--<div class=\"image\" *ngIf=\"item.images.main\" ><img [src]=\"item.images.path + item.images.main\" class=\"img-responsive\" /></div>-->\n    <div class=\"body\">\n      <div *ngFor=\"let bodyElement of item.body\" >\n        <div *ngIf=\"bodyElement.type === 'html'\" [innerHTML]=\"bodyElement.data.html\" ></div>\n        <gallery \n            *ngIf=\"bodyElement.type === 'gallery'\"\n            [flexBorderSize]=\"10\" \n            [flexImageSize]=\"5\"\n            [galleryName]=\"bodyElement.data.galleryName\" \n            (viewerChange)=\"isGalleryOpened($event)\">\n        </gallery>\n      </div>\n    </div> \n\n    \n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/containers/events/event-detail/event-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.detail {\n  margin-bottom: 40px; }\n  div.detail div.date {\n    font-size: 1.0em;\n    text-align: right;\n    margin-bottom: 20px;\n    font-weight: bold; }\n  div.detail div.image img {\n    width: 100%;\n    margin-bottom: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/events/event-detail/event-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_container__ = __webpack_require__("../../../../../src/app/containers/base.container.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventDetailComponent = (function (_super) {
    __extends(EventDetailComponent, _super);
    function EventDetailComponent(route, translate, dataService) {
        var _this = _super.call(this, route, translate) || this;
        _this.route = route;
        _this.translate = translate;
        _this.dataService = dataService;
        _this.galleryImages = new Array();
        _this.route.params.subscribe(function (params) {
            console.log(params.slug);
            var slug = params.slug;
            _this.item = _this.dataService.getEvent(slug);
            console.log('tu sam', _this.item);
            // Change language depend on news language
            if (_this.item && _this.item.language) {
                _this.translate.use(_this.item.language);
            }
            // if (this.item && this.item.images && this.item.images.gallery) {
            //   this.item.images.gallery.forEach(galleryImage => {
            //     this.galleryImages.push({
            //       thumbnail: this.item.images.path + galleryImage.thumbnail,
            //       image: this.item.images.path + galleryImage.image
            //     })
            //   });
            // }
        });
        return _this;
    }
    EventDetailComponent.prototype.isGalleryOpened = function (event) {
        console.log('gallery event', event);
    };
    EventDetailComponent.prototype.ngOnInit = function () {
    };
    return EventDetailComponent;
}(__WEBPACK_IMPORTED_MODULE_4__base_container__["a" /* BaseContainer */]));
EventDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-event-detail',
        template: __webpack_require__("../../../../../src/app/containers/events/event-detail/event-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/events/event-detail/event-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* DataService */]) === "function" && _c || Object])
], EventDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=event-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/events/events.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\" >\n  <h2 class=\"title\">{{ 'EVENTS.PAGE.title' | translate }}</h2>\n\n  <app-events-hr *ngIf=\"language === 'hr'\"></app-events-hr>\n  <app-events-en *ngIf=\"language === 'en'\"></app-events-en>\n</div>"

/***/ }),

/***/ "../../../../../src/app/containers/events/events.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/events/events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_container__ = __webpack_require__("../../../../../src/app/containers/base.container.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventsComponent = (function (_super) {
    __extends(EventsComponent, _super);
    function EventsComponent(route, translate) {
        var _this = _super.call(this, route, translate) || this;
        _this.route = route;
        _this.translate = translate;
        return _this;
    }
    EventsComponent.prototype.ngOnInit = function () {
    };
    return EventsComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_container__["a" /* BaseContainer */]));
EventsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-events',
        template: __webpack_require__("../../../../../src/app/containers/events/events.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/events/events.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _b || Object])
], EventsComponent);

var _a, _b;
//# sourceMappingURL=events.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/events/i18n/events-en/events-en.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Events presenting the project</h4>\n<ul>\n    <li>\n      <a routerLink=\"/news/opening-ceremony-of-the-project\">\n        Opening ceremony of the project\n      </a>\n    </li>\n    <li>\n      <a class=\"inactive\">\n        Ceremony of presenting project results\n      </a>\n    </li>\n</ul>\n<h4>Activity 1.1.1</h4>\n<ul>\n    <li>\n      <a routerLink=\"/events/schedule-of-meetings-held-with-target-groups\">\n        Meetings with target groups for the purpose of analyzing the current situation\n      </a>\n    </li>\n</ul>\n<h4>Activity 2.1.1</h4>\n<ul>\n    <li>\n      <a routerLink=\"/news/analysis-of-training-needs-of-target-groups-representatives-conducted\">\n        Filling in the questionnaire for training needs\n      </a>\n    </li>\n</ul>\n<h4>Activity 2.2.2</h4>\n<ul>\n    <li>\n      <a class=\"inactive\">\n        Training the representatives of target groups\n      </a>\n    </li>\n</ul>\n<h4>Activity 2.3.1</h4>\n<ul>\n    <li>\n      <a class=\"inactive\">\n        The first study visit\n      </a>\n    </li>\n    <li>\n      <a class=\"inactive\">\n        The second study visit\n      </a>\n    </li>\n</ul>\n<h4>Activity 2.3.3</h4>\n<ul>\n    <li>\n      <a routerLink=\"/news/interesting-professional-discussions-at-one-day-workshop\">\n        The first one-day workshop\n      </a>\n    </li>\n    <li>\n      <a class=\"inactive\">\n        The second one-day workshop\n      </a>\n    </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/containers/events/i18n/events-en/events-en.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/events/i18n/events-en/events-en.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsEnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventsEnComponent = (function () {
    function EventsEnComponent() {
    }
    EventsEnComponent.prototype.ngOnInit = function () {
    };
    return EventsEnComponent;
}());
EventsEnComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-events-en',
        template: __webpack_require__("../../../../../src/app/containers/events/i18n/events-en/events-en.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/events/i18n/events-en/events-en.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], EventsEnComponent);

//# sourceMappingURL=events-en.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/events/i18n/events-hr/events-hr.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Događaji predstavljanja projekta</h4>\n<ul>\n    <li>\n      <a routerLink=\"/novosti/svecanost-otvaranja-projekta\" >\n        Svečanost otvaranja projekta\n      </a>\n    </li>\n    <li>\n      <a class=\"inactive\">\n        Svečanost predstavljanja rezultata projekta\n      </a>\n    </li>\n</ul>\n<h4>Aktivnost 1.1.1</h4>\n<ul>\n    <li>\n      <a routerLink=\"/dogadaji/raspored-odrzanih-sastanaka-s-ciljnim-skupinama\">\n        Sastanci s ciljnim skupinama za potrebe analize trenutnog stanja\n      </a>\n    </li>\n</ul>\n<h4>Aktivnost 2.1.1</h4>\n<ul>\n    <li>\n      <a routerLink=\"/novosti/provedena-analiza-potreba-za-obukom-predstavnika-ciljnih-skupina\">\n        Ispunjavanje upitnika o potrebama za obukom\n      </a>\n    </li>\n</ul>\n<h4>Aktivnost 2.2.2</h4>\n<ul>\n    <li>\n      <a class=\"inactive\">\n        Obuka predstavnika ciljnih skupina\n      </a>\n    </li>\n</ul>\n<h4>Aktivnost 2.3.1</h4>\n<ul>\n    <li>\n      <a class=\"inactive\">\n        Prva studijska posjeta\n      </a>\n    </li>\n    <li>\n      <a class=\"inactive\">\n        Druga studijska posjeta\n      </a>\n    </li>\n</ul>\n<h4>Aktivnost 2.3.3</h4>\n<ul>\n    <li>\n      <a routerLink=\"/novosti/zanimljive-strucne-rasprave-na-jednodnevnoj-radionici\">\n        Prva jednodnevna radionica\n      </a>\n    </li>\n    <li>\n      <a class=\"inactive\">\n        Druga jednodnevna radionica\n      </a>\n    </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/containers/events/i18n/events-hr/events-hr.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/events/i18n/events-hr/events-hr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsHrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventsHrComponent = (function () {
    function EventsHrComponent() {
    }
    EventsHrComponent.prototype.ngOnInit = function () {
    };
    return EventsHrComponent;
}());
EventsHrComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-events-hr',
        template: __webpack_require__("../../../../../src/app/containers/events/i18n/events-hr/events-hr.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/events/i18n/events-hr/events-hr.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], EventsHrComponent);

//# sourceMappingURL=events-hr.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n    <div class=\"jumbotron\"><h3 [innerHTML]=\"'HOME.WELCOME.title' | translate\"></h3></div>\n</div>\n\n<div class=\"news\">\n    <app-news [howMany]=\"3\"></app-news>\n</div>\n\n<div class=\"intro\">\n    <div class=\"jumbotron\">\n        <p>{{ 'HOME.INTRO.p1' | translate }}</p>\n        <p>{{ 'HOME.INTRO.p2' | translate }}</p>\n        <p>{{ 'HOME.INTRO.p3' | translate }}</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/containers/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.title {\n  color: white; }\n  div.title div.jumbotron {\n    background-color: #07456c; }\n    div.title div.jumbotron h3 {\n      line-height: 1.5em;\n      font-weight: normal;\n      text-align: center; }\n      @media (min-width: 992px) {\n        div.title div.jumbotron h3 {\n          padding: 1em 2em; } }\n      @media (max-width: 991px) {\n        div.title div.jumbotron h3 {\n          font-size: 18px; } }\n\n@media (max-width: 991px) {\n  div.intro div.jumbotron p {\n    font-size: 18px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_container__ = __webpack_require__("../../../../../src/app/containers/base.container.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent(route, translate) {
        var _this = _super.call(this, route, translate) || this;
        _this.route = route;
        _this.translate = translate;
        return _this;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_container__["a" /* BaseContainer */]));
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/containers/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/containers/home/home.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__informations_informations_component__ = __webpack_require__("../../../../../src/app/containers/informations/informations.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__informations_informations_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__documents_documents_component__ = __webpack_require__("../../../../../src/app/containers/documents/documents.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__documents_documents_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_events_component__ = __webpack_require__("../../../../../src/app/containers/events/events.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__events_events_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__("../../../../../src/app/containers/contact/contact.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__news_news_component__ = __webpack_require__("../../../../../src/app/containers/news/news.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__news_news_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__news_news_detail_news_detail_component__ = __webpack_require__("../../../../../src/app/containers/news/news-detail/news-detail.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_6__news_news_detail_news_detail_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__events_event_detail_event_detail_component__ = __webpack_require__("../../../../../src/app/containers/events/event-detail/event-detail.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__events_event_detail_event_detail_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__documents_document_detail_document_detail_component__ = __webpack_require__("../../../../../src/app/containers/documents/document-detail/document-detail.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_8__documents_document_detail_document_detail_component__["a"]; });









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/containers/informations/i18n/informations-en/informations-en.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>User institutions</h4>\n<p>The beneficiary institution and the key user of this project is the Ministry of Environment and Energy.</p>\n<p>&nbsp;</p>\n<h4>The project is implemented</h4>\n<p>EKONERG – Energy Research and Environmental Protection Institute Ltd.</p>\n<p>&nbsp;</p>\n<h4>The overall object of the project</h4>\n<p>Improving air quality monitoring and greenhouse gas emissions trading system aiming at climate change mitigation and improving the overall state of the environment and reduction of air pollution in the Republic of Croatia.</p>\n<p>&nbsp;</p>\n<h4>The purpose of the project</h4>\n<p>The purpose of the project is to improve environmental inspection with a view to effective supervision of air quality monitoring and all entities in accordance with the requirements of the emissions trading system to achieve better air quality in the Republic of Croatia.</p>\n<p>&nbsp;</p>\n<h4>The target groups of the project</h4>\n<p>The target groups of the project are:</p>\n<ul>\n    <li>Directorate for inspectional affairs - Ministry of Environment and Energy,</li>\n    <li>Directorate for climate activities, sustainable development and protection of soil, air and sea - the Ministry of Environment and Energy,</li>\n    <li>Croatian agency for the environment and nature,</li>\n    <li>representatives of the industrial sector including accredited verifiers,</li>\n    <li>representatives of local self-governmental units.</li>\n</ul>\n<p>&nbsp;</p>\n<h4>The value of the project</h4>\n<p>The project is funded by the European Union under the IPA 2013 for Croatia in the amount of 382,500 euros and co-financed by the Republic of Croatia in the amount of 42,500 euros.</p>\n<p>&nbsp;</p>\n<h4>Project duration</h4>\n<p>The project started on 20 February 2017.</p>\n<p>The project implementation period is 16 months, until 20 June 2018.</p>\n<p>&nbsp;</p>\n<h4>Expected results</h4>\n<p>Expected results are:</p>\n<ul>\n    <li>Analysis and report on the current situation in the Republic of Croatia related to air quality monitoring and greenhouse gas emissions trading system including recommendations for application and control of the implementation of all legal and institutional conditions related to air quality monitoring and emissions trading system.</li>\n    <li>Developed and distributed Handbook for inspectors and the target groups for the implementation of regulations on air quality monitoring and greenhouse gas emissions trading system in English and Croatian language.</li>\n    <li>Training programme designed for all involved target groups.</li>\n    <li>Training programme conducted.</li>\n    <li>Capacities of the environmental inspection strengthened through workshops and through two study visits to the European Union Member States.</li>\n    <li>Video about control procedures of implementation in the field of air quality monitoring and greenhouse gas emissions trading system.</li>\n    <li>Designed, established and regularly updated project web-site in English and Croatian language.</li>\n</ul>\n<p>&nbsp;</p>\n<h4>Project activities</h4>\n<p>The activities to be undertaken to achieve the expected results of the project:</p>\n<ul>\n    <li>Conducting the analysis of current situation in the Republic of Croatia related to air quality monitoring and greenhouse gas emissions trading system.</li>\n    <li>Finalization of the report on current situation in the Republic of Croatia, including recommendations to improve implementation and implementation control of all legislative and institutional conditions related to air quality monitoring and greenhouse gas emissions trading system.</li>\n    <li>Development of Handbook for environmental inspectors and other project target groups for the control of implementing regulations on air quality monitoring and greenhouse gas emissions trading system in Croatian and English language.</li>\n    <li>Conducting the analysis of training needs based on questionnaires for all project target groups with the Report on outcomes of the analysis.</li>\n    <li>Development of training programme for all project target groups.</li>\n    <li>Preparation, printing and distribution of training working materials and implementation of the training programme for all included participants.</li>\n    <li>Performing two study visits to EU member states for the purpose of transfer of knowledge and good practice related to air quality monitoring and greenhouse gas emissions trading system.</li>\n    <li>Preparation of working materials for workshops and holding two one-day workshops for the representatives of beneficiary institution and all other project target groups.</li>\n    <li>Production of educational video on the roles of individual project target groups and acting of environmental inspectors during the implementation control in the field of air quality monitoring and greenhouse gas emissions trading system.</li>\n    <li>Designing, establishment and regular updating of the project web-site.</li>\n</ul>\n<p>&nbsp;</p>\n<h4>Relevant links</h4>\n<ul>\n    <li>Ministry of Environment and Energy - Home (<a href=\"http://www.mzoip.hr\" target=\"_blank\" >www.mzoip.hr</a>)</li>\n    <li>Ministry of Environment and Energy - Directorate for Inspectional Affairs (<a href=\"http://www.mzoip.hr/hr/inspekcija.html\" target=\"_blank\" >www.mzoip.hr/hr/inspekcija.html</a>)</li>\n    <li>Croatian agency for the environment and nature (<a href=\"http://www.azo.hr\" target=\"_blank\" >www.azo.hr</a>)</li>\n    <li>EU air protection policy (<a href=\"http://ec.europa.eu/environment/air/index_en.htm\" target=\"_blank\" >ec.europa.eu/environment/air/index_en.htm</a>)</li>\n    <li>EU emissions trading system policy (<a href=\"https://ec.europa.eu/clima/policies/ets_en\" target=\"_blank\" >ec.europa.eu/clima/policies/ets_en</a>)</li>\n    <li>Central finance and contracting agency (<a href=\"http://www.safu.hr\" target=\"_blank\" >www.safu.hr</a>)</li>\n    <li>EKONERG – energy research and environmental protection institute (<a href=\"http://www.ekonerg.hr\" target=\"_blank\" >www.ekonerg.hr</a>)</li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/containers/informations/i18n/informations-en/informations-en.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/informations/i18n/informations-en/informations-en.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationsEnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InformationsEnComponent = (function () {
    function InformationsEnComponent() {
    }
    InformationsEnComponent.prototype.ngOnInit = function () {
    };
    return InformationsEnComponent;
}());
InformationsEnComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-informations-en',
        template: __webpack_require__("../../../../../src/app/containers/informations/i18n/informations-en/informations-en.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/informations/i18n/informations-en/informations-en.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], InformationsEnComponent);

//# sourceMappingURL=informations-en.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/informations/i18n/informations-hr/informations-hr.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Korisnička institucija</h4>\n<p>Korisnička institucija, odnosno glavni korisnik ovog projekta, je Ministarstvo za&scaron;tite okoli&scaron;a i energetike.</p>\n<p>&nbsp;</p>\n<h4>Projekt provodi</h4>\n<p>EKONERG &ndash; institut za energetiku i za&scaron;titu okoli&scaron;a d.o.o.</p>\n<p>&nbsp;</p>\n<h4>Opći cilj projekta&nbsp;</h4>\n<p>Pobolj&scaron;anje praćenja kvalitete zraka i sustava trgovanja emisijskim jedinicama stakleničkih plinova s ciljem ublažavanja klimatskih promjena i pobolj&scaron;anja cjelokupnog stanja okoli&scaron;a i smanjenja oneči&scaron;ćenja zraka u Republici Hrvatskoj.</p>\n<p>&nbsp;</p>\n<h4>Svrha projekta</h4>\n<p>Svrha projekta je unapređenje inspekcije za&scaron;tite okoli&scaron;a s ciljem učinkovitog nadzora praćenja kvalitete zraka i svih subjekata prema obvezama u sustavu trgovanja emisijskim jedinicama stakleničkih plinova kako bi se postigla bolja kvaliteta zraka u Republici Hrvatskoj.</p>\n<p>&nbsp;</p>\n<h4>Ciljne skupine projekta</h4>\n<p>Ciljne skupine projekta su:</p>\n<ul>\n    <li>Uprava za inspekcijske poslove - Ministarstvo za&scaron;tite okoli&scaron;a i energetike,</li>\n    <li>Uprava za klimatske aktivnosti, održivi razvoj i za&scaron;titu zraka, tla i mora - Ministarstvo za&scaron;tite okoli&scaron;a i energetike,</li>\n    <li>Hrvatska agencija za okoli&scaron; i prirodu,</li>\n    <li>predstavnici industrijskog sektora uključujući akreditirane verifikatore,</li>\n    <li>predstavnici jedinica lokalne samouprave.</li>\n</ul>\n<p>&nbsp;</p>\n<h4>Vrijednost projekta</h4>\n<p>Projekt financira Europska unija u okviru Programa IPA 2013 za Hrvatsku u iznosu 382.500 EUR i sufinancira Republika Hrvatska u iznosu od 42.500 EUR.</p>\n<p>&nbsp;</p>\n<h4>Trajanje projekta</h4>\n<p>Provedba projekta započela je 20. veljače 2017. godine.</p>\n<p>Razdoblje provedbe aktivnosti na projektu je 16 mjeseci, do 20.6.2018. godine.</p>\n<p>&nbsp;</p>\n<h4>Očekivani rezultati</h4>\n<p>Očekivani rezultati projekta su:</p>\n<ul>\n    <li>Izrađena analiza i Izvje&scaron;će o trenutnom stanju u Republici Hrvatskoj u vezi s praćenjem kvalitete zraka i sustavom trgovanja emisijskim jedinicama stakleničkih plinova uključujući i preporuke za primjenu i kontrolu provedbe svih zakonskih i institucionalnih uvjeta vezanih za praćenje kvalitete zraka i sustava trgovanja emisijskim jedinicama stakleničkih plinova.</li>\n    <li>Izrađen i distribuiran Priručnik za inspektore i ciljne skupine za provedbu propisa o praćenju kvalitete zraka i sustava trgovanja emisijskim jedinicama stakleničkih plinova na engleskom i hrvatskom jeziku.&nbsp;</li>\n    <li>Dizajniran program obuke za sve uključene ciljne skupine.</li>\n    <li>Proveden program obuke.&nbsp;</li>\n    <li>Ojačani kapaciteti inspekcije za&scaron;tite okoli&scaron;a kroz radionice i putem dvaju studijskih posjeta u države članice Europske unije.&nbsp;</li>\n    <li>Proizveden film o postupcima kontrole provedbe u području praćenja kvalitete zraka i trgovanja emisijskim jedinicama stakleničkih plinova.</li>\n    <li>Dizajnirana, uspostavljena i redovito ažurirana web-stranica projekta na engleskom i hrvatskom jeziku.</li>\n</ul>\n<p>&nbsp;</p>\n<h4>Aktivnosti na projektu</h4>\n<p>Aktivnosti koje će se poduzeti kako bi se postigli očekivani rezultati projekta:</p>\n<ul>\n    <li>Provođenje analize trenutnog stanja u Republici Hrvatskoj vezane uz praćenje kvalitete zraka i sustava trgovanja emisijskim jedinicama stakleničkih plinova.</li>\n    <li>Izrada Izvje&scaron;ća o trenutnom stanju u Republici Hrvatskoj, uključujući i preporuke u svrhu unaprjeđenja provedbe i kontrole provedbe svih zakonskih i institucionalnih uvjeta vezanih za praćenje kvalitete zraka i sustava trgovanja emisijskim jedinicama stakleničkih plinova.</li>\n    <li>Izrada Priručnika za inspektore za&scaron;tite okoli&scaron;a i ostale ciljne skupine projekta za kontrolu provedbe propisa vezanih za praćenje kvalitete zraka i sustava trgovanja emisijskim jedinicama stakleničkih plinova na hrvatskom i engleskom jeziku.</li>\n    <li>Izrada analize potreba za obukom putem Upitnika za sve ciljne skupine projekta te izrada Izvje&scaron;ća o rezultatima provedene analize.</li>\n    <li>Izrada programa obuke za sve ciljne skupine projekta.</li>\n    <li>Priprema, tiskanje i podjela materijala obuke i provedba programa obuke za uključene sudionike.</li>\n    <li>Provođenje dvije studijske posjete u države članice EU u svrhu prijenosa znanja i dobre prakse vezano za praćenje kvalitete zraka i sustav trgovanja emisijskim jedinicama stakleničkih plinova.</li>\n    <li>Priprema materijala za radionice i provedba dvije jednodnevne radionice za predstavnike korisničke institucije i sve ostale ciljne skupine projekta.</li>\n    <li>Proizvodnja edukacijskog filma o ulogama pojedinih ciljnih skupina projekta i postupanju inspektora za&scaron;tite okoli&scaron;a prilikom kontrole provedbe u području praćenja kvalitete zraka i trgovanja emisijskim jedinicama stakleničkih plinova.</li>\n    <li>Dizajniranje, uspostava te redovno ažuriranje web stranice projekta.</li>\n</ul>\n<p>&nbsp;</p>\n<h4>Relevantne poveznice</h4>\n<ul>\n    <li>Ministarstvo zaštite okoliša i energetike &ndash; početna stranica (<a href=\"http://www.mzoip.hr\" target=\"_blank\" >www.mzoip.hr</a>)</li>\n    <li>Ministarstvo zaštite okoliša &ndash; Uprava za inspekcijske poslove (<a href=\"http://www.mzoip.hr/hr/inspekcija.html\" target=\"_blank\" >www.mzoip.hr/hr/inspekcija.html</a>)</li>\n    <li>Hrvatska agencija za okoliš i prirodu (<a href=\"http://www.azo.hr\" target=\"_blank\" >www.azo.hr</a>)</li>\n    <li>Politika zaštite zraka EU (<a href=\"http://ec.europa.eu/environment/air/index_en.htm\" target=\"_blank\" >ec.europa.eu/environment/air/index_en.htm</a>)</li>\n    <li>Sustav trgovanja emisijskim jedinicama EU (<a href=\"https://ec.europa.eu/clima/policies/ets_en\" target=\"_blank\" >ec.europa.eu/clima/policies/ets_en</a>)</li>\n    <li>Središnja agencija za financiranje i ugovaranje (<a href=\"http://www.safu.hr\" target=\"_blank\" >www.safu.hr</a>)</li>\n    <li>EKONERG – institut za energetiku i zaštitu okoliša (<a href=\"http://www.ekonerg.hr\" target=\"_blank\" >www.ekonerg.hr</a>)</li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/containers/informations/i18n/informations-hr/informations-hr.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/informations/i18n/informations-hr/informations-hr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationsHrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InformationsHrComponent = (function () {
    function InformationsHrComponent() {
    }
    InformationsHrComponent.prototype.ngOnInit = function () {
    };
    return InformationsHrComponent;
}());
InformationsHrComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-informations-hr',
        template: __webpack_require__("../../../../../src/app/containers/informations/i18n/informations-hr/informations-hr.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/informations/i18n/informations-hr/informations-hr.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], InformationsHrComponent);

//# sourceMappingURL=informations-hr.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/informations/informations.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\" >\n    <h2 class=\"title\">{{ 'INFORMATIONS.PAGE.title' | translate }}</h2>\n\n    <app-informations-hr *ngIf=\"language === 'hr'\"></app-informations-hr>\n    <app-informations-en *ngIf=\"language === 'en'\"></app-informations-en>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/containers/informations/informations.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/informations/informations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_container__ = __webpack_require__("../../../../../src/app/containers/base.container.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InformationsComponent = (function (_super) {
    __extends(InformationsComponent, _super);
    function InformationsComponent(route, translate) {
        var _this = _super.call(this, route, translate) || this;
        _this.route = route;
        _this.translate = translate;
        return _this;
    }
    InformationsComponent.prototype.ngOnInit = function () {
    };
    return InformationsComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_container__["a" /* BaseContainer */]));
InformationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-informations',
        template: __webpack_require__("../../../../../src/app/containers/informations/informations.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/informations/informations.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _b || Object])
], InformationsComponent);

var _a, _b;
//# sourceMappingURL=informations.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/news/news-detail/news-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\" >\n  <div *ngIf=\"!item\" class=\"not-found\">{{ 'NEWS.notFound' | translate }}</div>\n\n  <div *ngIf=\"item\" class=\"detail\">\n    <h2 class=\"title\">{{item.titleDetail || item.title}}</h2>\n    <div class=\"date\" *ngIf=\"item.language === 'hr'\" >{{ item.date | amDateFormat: 'DD.MM.YYYY.' }}</div>\n    <div class=\"date\" *ngIf=\"item.language === 'en'\" >{{ item.date | amDateFormat: 'D MMMM YYYY' }}</div>\n    <div class=\"image\" *ngIf=\"item.images.main\" ><img [src]=\"item.images.path + item.images.main\" class=\"img-responsive\" /></div>\n    <div class=\"body\">\n      <div *ngFor=\"let bodyElement of item.body\" >\n        <div *ngIf=\"bodyElement.type === 'html'\" [innerHTML]=\"bodyElement.data.html | safeHtml\" ></div>\n        <gallery\n            *ngIf=\"bodyElement.type === 'gallery'\"\n            [flexBorderSize]=\"10\"\n            [flexImageSize]=\"5\"\n            [galleryName]=\"bodyElement.data.galleryName\"\n            (viewerChange)=\"isGalleryOpened($event)\">\n        </gallery>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/containers/news/news-detail/news-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.detail {\n  margin-bottom: 40px; }\n  div.detail div.date {\n    font-size: 1.0em;\n    text-align: right;\n    margin-bottom: 20px;\n    font-weight: bold; }\n  div.detail div.image img {\n    width: 100%;\n    margin-bottom: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/news/news-detail/news-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_container__ = __webpack_require__("../../../../../src/app/containers/base.container.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewsDetailComponent = (function (_super) {
    __extends(NewsDetailComponent, _super);
    function NewsDetailComponent(route, translate, dataService) {
        var _this = _super.call(this, route, translate) || this;
        _this.route = route;
        _this.translate = translate;
        _this.dataService = dataService;
        _this.galleryImages = new Array();
        _this.route.params.subscribe(function (params) {
            console.log(params.slug);
            var slug = params.slug;
            _this.item = _this.dataService.getNewsDetail(slug);
            // Change language depend on news language
            if (_this.item && _this.item.language) {
                _this.translate.use(_this.item.language);
            }
            if (_this.item && _this.item.images && _this.item.images.gallery) {
                _this.item.images.gallery.forEach(function (galleryImage) {
                    _this.galleryImages.push({
                        thumbnail: _this.item.images.path + galleryImage.thumbnail,
                        image: _this.item.images.path + galleryImage.image
                    });
                });
            }
        });
        return _this;
    }
    NewsDetailComponent.prototype.isGalleryOpened = function (event) {
        console.log('gallery event', event);
    };
    NewsDetailComponent.prototype.ngOnInit = function () {
    };
    return NewsDetailComponent;
}(__WEBPACK_IMPORTED_MODULE_4__base_container__["a" /* BaseContainer */]));
NewsDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-news-detail',
        template: __webpack_require__("../../../../../src/app/containers/news/news-detail/news-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/news/news-detail/news-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* DataService */]) === "function" && _c || Object])
], NewsDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=news-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\" >\n    <h2 class=\"title\">{{ 'NEWS.PAGE.title' | translate }}</h2>\n\n    <div class=\"row\" >\n      <div class=\"col-xs-12\" *ngIf=\"news.length === 0\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">{{ 'NEWS.empty' | translate }}</h3>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-6 col-md-4\" *ngFor=\"let item of news; let i = index\" >\n\n        <div class=\"panel panel-default\" *ngIf=\"i < howMany || howMany === undefined\" >\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">{{ item.title }}</h3>\n          </div>\n          <div class=\"panel-body\">\n            <div class=\"date\" *ngIf=\"item.language === 'hr'\" >{{ item.date | amDateFormat: 'DD.MM.YYYY.' }}</div>\n            <div class=\"date\" *ngIf=\"item.language === 'en'\" >{{ item.date | amDateFormat: 'D MMMM YYYY' }}</div>\n            <div class=\"image\" ><img class=\"img-responsive img-rounded\" [src]=\"item.images.path + item.images.intro\" /></div>\n            <div class=\"intro\" [innerHTML]=\"item.intro\" ></div>\n            <div class=\"slug\" *ngIf=\"item.slug\" >\n              <a [routerLink]=\"['NEWS.path' | translate, item.slug]\" class=\"btn btn-primary btn-read-more\" role=\"button\">\n                {{ 'NEWS.PAGE.more' | translate }}\n              </a>\n            </div>\n            <div class=\"slug\" *ngIf=\"!item.slug && item.url\" >\n              <a [attr.href]=\"item.url\" target=\"_blank\" class=\"btn btn-primary btn-read-more\" role=\"button\">\n                {{ 'NEWS.PAGE.more' | translate }}\n              </a>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <!--<pre>{{news | json}}</pre>-->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/containers/news/news.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.page {\n  margin-bottom: 0; }\n  div.page div.row div.panel {\n    min-height: 470px; }\n    div.page div.row div.panel h3.panel-title {\n      min-height: 51px; }\n  div.page div.row div.panel-body div.date {\n    font-size: 1.0em;\n    text-align: right;\n    font-weight: bold;\n    margin-bottom: 10px; }\n  div.page div.row div.panel-body div.image img {\n    width: 100%;\n    margin-bottom: 10px; }\n  div.page div.row div.panel-body div.intro {\n    margin-bottom: 10px; }\n  div.page div.row div.panel-body div.slug {\n    text-align: right; }\n    @media screen and (min-width: 768px) {\n      div.page div.row div.panel-body div.slug a.btn-read-more {\n        position: absolute;\n        left: 30px;\n        right: 30px;\n        bottom: 35px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/containers/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_container__ = __webpack_require__("../../../../../src/app/containers/base.container.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewsComponent = (function (_super) {
    __extends(NewsComponent, _super);
    function NewsComponent(dataService, chRef, translate, route) {
        var _this = _super.call(this, route, translate) || this;
        _this.dataService = dataService;
        _this.chRef = chRef;
        _this.translate = translate;
        _this.route = route;
        _this.news = dataService.getNews(translate.currentLang || translate.defaultLang);
        _this.subscriptionForLangChange = _this.translate.onLangChange.subscribe(function (event) {
            _this.news = dataService.getNews(event.lang);
        });
        return _this;
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent.prototype.ngOnDestroy = function () {
        this.subscriptionForLangChange.unsubscribe();
    };
    return NewsComponent;
}(__WEBPACK_IMPORTED_MODULE_4__base_container__["a" /* BaseContainer */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], NewsComponent.prototype, "howMany", void 0);
NewsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-news',
        template: __webpack_require__("../../../../../src/app/containers/news/news.component.html"),
        styles: [__webpack_require__("../../../../../src/app/containers/news/news.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], NewsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=news.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/document.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Document; });
var Document = (function () {
    function Document() {
    }
    return Document;
}());

//# sourceMappingURL=document.js.map

/***/ }),

/***/ "../../../../../src/app/models/event.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
var Event = (function () {
    function Event() {
    }
    return Event;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ "../../../../../src/app/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__news__ = __webpack_require__("../../../../../src/app/models/news.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__news__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event__ = __webpack_require__("../../../../../src/app/models/event.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__event__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__document__ = __webpack_require__("../../../../../src/app/models/document.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__document__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/models/news.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return News; });
var News = (function () {
    function News() {
    }
    return News;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/app-pipes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__safe_html_pipe__ = __webpack_require__("../../../../../src/app/pipes/safe-html.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppPipesModule = (function () {
    function AppPipesModule() {
    }
    return AppPipesModule;
}());
AppPipesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__safe_html_pipe__["a" /* SafeHtmlPipe */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__safe_html_pipe__["a" /* SafeHtmlPipe */]
        ]
    })
], AppPipesModule);

//# sourceMappingURL=app-pipes.module.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/safe-html.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (value, args) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    };
    return SafeHtmlPipe;
}());
SafeHtmlPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'safeHtml'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], SafeHtmlPipe);

var _a;
//# sourceMappingURL=safe-html.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/plugins/formly/app-formly.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppFormlyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_formly__ = __webpack_require__("../../../../ng-formly/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_recaptcha__ = __webpack_require__("../../../../ng-recaptcha/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_recaptcha_forms__ = __webpack_require__("../../../../ng-recaptcha/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_recaptcha_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_recaptcha_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__types__ = __webpack_require__("../../../../../src/app/plugins/formly/types/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppFormlyModule = (function () {
    function AppFormlyModule() {
    }
    return AppFormlyModule;
}());
AppFormlyModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2_ng_formly__["c" /* FormlyModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4_ng_recaptcha__["RecaptchaModule"],
            __WEBPACK_IMPORTED_MODULE_5_ng_recaptcha_forms__["RecaptchaFormsModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__types__["a" /* FormlyFieldCaptcha */]
        ]
    })
], AppFormlyModule);

//# sourceMappingURL=app-formly.module.js.map

/***/ }),

/***/ "../../../../../src/app/plugins/formly/types/captcha.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormlyFieldCaptcha; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_formly__ = __webpack_require__("../../../../ng-formly/lib/src/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FormlyFieldCaptcha = (function (_super) {
    __extends(FormlyFieldCaptcha, _super);
    // tslint:disable-next-line:component-class-suffix
    function FormlyFieldCaptcha() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FormlyFieldCaptcha;
}(__WEBPACK_IMPORTED_MODULE_1_ng_formly__["a" /* FieldType */]));
FormlyFieldCaptcha = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // tslint:disable-next-line:component-selector
        selector: 'formly-field-captcha',
        template: "\n    <re-captcha\n        [formlyAttributes]=\"field\"\n        [(ngModel)]=\"model[field.key]\"\n        [ngClass]=\"{'form-control-danger': valid}\"\n        name=\"captcha\"\n        (resolved)=\"to.resolved && to.resolved($event)\"\n        required\n        siteKey=\"{{to.siteKey}}\"\n    ></re-captcha>\n    ",
    })
    // tslint:disable-next-line:component-class-suffix
], FormlyFieldCaptcha);

//# sourceMappingURL=captcha.js.map

/***/ }),

/***/ "../../../../../src/app/plugins/formly/types/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__captcha__ = __webpack_require__("../../../../../src/app/plugins/formly/types/captcha.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__captcha__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/plugins/parse/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Parse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_parse__ = __webpack_require__("../../../../parse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_parse__);
// import Parse SDK JS library

var Parse = __WEBPACK_IMPORTED_MODULE_0_parse__;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/services/app-services.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppServicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_data_service__ = __webpack_require__("../../../../../src/app/services/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mail_mail_service__ = __webpack_require__("../../../../../src/app/services/mail/mail.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppServicesModule = (function () {
    function AppServicesModule() {
    }
    return AppServicesModule;
}());
AppServicesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["HttpModule"]
        ],
        declarations: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__data_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_4__mail_mail_service__["a" /* MailService */]
        ]
    })
], AppServicesModule);

//# sourceMappingURL=app-services.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/data/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__("../../../../../src/app/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.initNews();
        this.initEvents();
        this.initDocuments();
    }
    /**
     * Find all news by language
     * @param language is News property
     */
    DataService.prototype.getNews = function (language) {
        var news = new Array();
        this.news.forEach(function (item) {
            if (item.language === language) {
                news.push(item);
            }
        });
        return news;
    };
    /**
     * Find one or undefined News by slug
     * @param slug is unique news identifier
     */
    DataService.prototype.getNewsDetail = function (slug) {
        return this.news.filter(function (item) { return item.slug === slug; })[0];
    };
    /**
     * Find one or undefined Document by slug
     * @param slug is unique document identifier
     */
    DataService.prototype.getDocument = function (slug) {
        return this.documents.filter(function (item) { return item.slug === slug; })[0];
    };
    /**
     * Init collection of documents
     */
    DataService.prototype.initDocuments = function () {
        this.documents = new Array();
        var document = new __WEBPACK_IMPORTED_MODULE_2__models__["a" /* Document */]();
        document.title = 'Program obuke (u 3 modula) za sve ciljne skupine projekta';
        document.slug = 'program-obuke-za-sve-ciljne-skupine-projekta';
        document.language = 'hr';
        document.body = [
            {
                type: 'html',
                data: {
                    html: "\n          <ul>\n            <li>\n              <a href=\"assets/materials/program-obuke-za-sve-ciljne-skupine-projekta/Program_obuke_modul_PKZ1.xlsx\" target=\"_blank\" >\n                Program_obuke_modul_PKZ1.xlsx\n              </a>\n            </li>\n          </ul>\n          "
                }
            }
        ];
        this.documents.push(document);
        document = new __WEBPACK_IMPORTED_MODULE_2__models__["a" /* Document */]();
        document.title = 'Training programme (divided in 3 modules) for all project target groups';
        document.slug = 'training-programme-for-all-project-target-groups';
        document.language = 'en';
        document.body = [
            {
                type: 'html',
                data: {
                    html: "\n          <ul>\n            <li>\n              <a href=\"assets/materials/program-obuke-za-sve-ciljne-skupine-projekta/Program_obuke_modul_PKZ1.xlsx\" target=\"_blank\" >\n                Training_programme_module_PKZ1.xlsx\n              </a>\n            </li>\n          </ul>\n          "
                }
            }
        ];
        this.documents.push(document);
        document = new __WEBPACK_IMPORTED_MODULE_2__models__["a" /* Document */]();
        document.title = 'MATERIJALI ZA PRVU JEDNODNEVNU RADIONICU';
        document.slug = 'materijali-za-prvu-jednodnevnu-radionicu';
        document.language = 'hr';
        document.body = [
            {
                type: 'html',
                data: {
                    html: "\n          <ul>\n            <li>\n              <a href=\"assets/materials/poziv-predstavnicima-ciljnih-skupina-na-jednodnevnu-radionicu/Moderatori_i_panelisti.pdf\" target=\"_blank\" >\n                Moderatori_i_panelisti.pdf\n              </a>\n            </li>\n            <li>\n              <a href=\"assets/materials/poziv-predstavnicima-ciljnih-skupina-na-jednodnevnu-radionicu/Panel_rasprava_ETS.pdf\" target=\"_blank\" >\n                Panel_rasprava_ETS.pdf\n              </a>\n            </li>\n            <li>\n              <a href=\"assets/materials/poziv-predstavnicima-ciljnih-skupina-na-jednodnevnu-radionicu/Panel_rasprava_PKZ.pdf\" target=\"_blank\" >\n                Panel_rasprava_PKZ.pdf\n              </a>\n            </li>\n          </ul>\n          "
                }
            }
        ];
        this.documents.push(document);
        document = new __WEBPACK_IMPORTED_MODULE_2__models__["a" /* Document */]();
        document.title = 'Materijali za obuku modula PKZ1';
        document.slug = 'materijali-za-obuku-modula-PKZ1';
        document.language = 'hr';
        document.body = [
            {
                type: 'html',
                data: {
                    html: "\n          <ul>\n            <li>\n              <a href=\"assets/materials/materijali-za-obuku-modula-PKZ1/TEMA_1_Oneciscenje_atmosfere_1.1_do_1.3_(G).pptx\" target=\"_blank\" >\n                TEMA_1_Oneciscenje_atmosfere_1.1_do_1.3_(G).pptx\n              </a>\n            </li>\n            <li>\n              <a href=\"assets/materials/materijali-za-obuku-modula-PKZ1/TEMA_1_Oneciscenje_atmosfere_1.4_meteo.pptx\" target=\"_blank\" >\n                TEMA_1_Oneciscenje_atmosfere_1.4_meteo.pptx\n              </a>\n            </li>\n            <li>\n              <a href=\"assets/materials/materijali-za-obuku-modula-PKZ1/TEMA_1_Oneciscenje_atmosfere_1.5_do_1.7.pptx\" target=\"_blank\" >\n                TEMA_1_Oneciscenje_atmosfere_1.5_do_1.7.pptx\n              </a>\n            </li>\n            <li>\n              <a href=\"assets/materials/materijali-za-obuku-modula-PKZ1/TEMA_1_Oneciscenje_atmosfere_1.8_do_1.10.pptx\" target=\"_blank\" >\n                TEMA_1_Oneciscenje_atmosfere_1.8_do_1.10.pptx\n              </a>\n            </li>\n            <li>\n              <a href=\"assets/materials/materijali-za-obuku-modula-PKZ1/TEMA_2_Oneciscujuce_tvari_1_SO2_CO_NO2.pptx\" target=\"_blank\" >\n                TEMA_2_Oneciscujuce_tvari_1_SO2_CO_NO2.pptx\n              </a>\n            </li>\n            <li>\n              <a href=\"assets/materials/materijali-za-obuku-modula-PKZ1/TEMA_2_Oneciscujuce_tvari_2_O3_B_Diox_H2S_TRS.pptx\" target=\"_blank\" >\n                TEMA_2_Oneciscujuce_tvari_2_O3_B_Diox_H2S_TRS.pptx\n              </a>\n            </li>\n            <li>\n              <a href=\"assets/materials/materijali-za-obuku-modula-PKZ1/TEMA_2_Oneciscujuce_tvari_3_PM.pptx\" target=\"_blank\" >\n                TEMA_2_Oneciscujuce_tvari_3_PM.pptx\n              </a>\n            </li>\n            <li>\n              <a href=\"assets/materials/materijali-za-obuku-modula-PKZ1/TEMA_2_Oneciscujuce_tvari_4_PM_analize.pptx\" target=\"_blank\" >\n                TEMA_2_Oneciscujuce_tvari_4_PM_analize.pptx\n              </a>\n            </li>\n            <li>\n              <a href=\"assets/materials/materijali-za-obuku-modula-PKZ1/TEMA_3_Uloga_monitoringa_3.1_do_3.3_(G).pptx\" target=\"_blank\" >\n                TEMA_3_Uloga_monitoringa_3.1_do_3.3_(G).pptx\n              </a>\n            </li>\n            <li>\n              <a href=\"assets/materials/materijali-za-obuku-modula-PKZ1/TEMA_4_Mreze_4.1_do_4.5_(G).pptx\" target=\"_blank\" >\n                TEMA_4_Mreze_4.1_do_4.5_(G).pptx\n              </a>\n            </li>\n            <li>\n              <a href=\"assets/materials/materijali-za-obuku-modula-PKZ1/TEMA_5_Dizajn_mreza_5.1_do_5.4.pptx\" target=\"_blank\" >\n                TEMA_5_Dizajn_mreza_5.1_do_5.4.pptx\n              </a>\n            </li>\n            <li>\n              <a href=\"assets/materials/materijali-za-obuku-modula-PKZ1/TEMA_6_QAQC_6.1_do_6.4.pptx\" target=\"_blank\" >\n                TEMA_6_QAQC_6.1_do_6.4.pptx\n              </a>\n            </li>\n            <li>\n              <a href=\"assets/materials/materijali-za-obuku-modula-PKZ1/TEMA_7_Upravljanje_podatcima.pptx\" target=\"_blank\" >\n                TEMA_7_Upravljanje_podatcima.pptx\n              </a>\n            </li>\n            <li>\n              <a href=\"assets/materials/materijali-za-obuku-modula-PKZ1/TEMA_8_Postaje_za_pracenje_kvalitete_zraka_8.1_do_8.3.pptx\" target=\"_blank\" >\n                TEMA_8_Postaje_za_pracenje_kvalitete_zraka_8.1_do_8.3.pptx\n              </a>\n            </li>\n            <li>\n              <a href=\"assets/materials/materijali-za-obuku-modula-PKZ1/TEMA_12_Vrste_podataka_12.1_do_12.4.pptx\" target=\"_blank\" >\n                TEMA_12_Vrste_podataka_12.1_do_12.4.pptx\n              </a>\n            </li>\n            <li>\n              <a href=\"assets/materials/materijali-za-obuku-modula-PKZ1/TEMA_13_Izvjestavanje_prema_propisima_RH_13.1_do_13.5.pptx\" target=\"_blank\" >\n                TEMA_13_Izvjestavanje_prema_propisima_RH_13.1_do_13.5.pptx\n              </a>\n            </li>\n          </ul>\n          "
                }
            }
        ];
        this.documents.push(document);
        document = new __WEBPACK_IMPORTED_MODULE_2__models__["a" /* Document */]();
        document.title = 'WORKING MATERIALS FOR THE FIRST ONE DAY WORKSHOP';
        document.slug = 'working-materials-for-the-first-one-day-workshop';
        document.language = 'en';
        document.body = [
            {
                type: 'html',
                data: {
                    html: "\n          <ul>\n            <li>\n              <a href=\"assets/materials/poziv-predstavnicima-ciljnih-skupina-na-jednodnevnu-radionicu/Moderatori_i_panelisti.pdf\" target=\"_blank\" >\n                Moderators_and_panelists.pdf\n              </a>\n            </li>\n            <li>\n              <a href=\"assets/materials/poziv-predstavnicima-ciljnih-skupina-na-jednodnevnu-radionicu/Panel_rasprava_ETS.pdf\" target=\"_blank\" >\n                Panel_discussion_ETS.pdf\n              </a>\n            </li>\n            <li>\n              <a href=\"assets/materials/poziv-predstavnicima-ciljnih-skupina-na-jednodnevnu-radionicu/Panel_rasprava_PKZ.pdf\" target=\"_blank\" >\n                Panel_discussion_AQM.pdf\n              </a>\n            </li>\n          </ul>\n          "
                }
            }
        ];
        this.documents.push(document);
    };
    /**
     * Find one or undefined Event by slug
     * @param slug is unique event identifier
     */
    DataService.prototype.getEvent = function (slug) {
        return this.events.filter(function (item) { return item.slug === slug; })[0];
    };
    /**
     * Init collection of events
     */
    DataService.prototype.initEvents = function () {
        this.events = new Array();
        var event = new __WEBPACK_IMPORTED_MODULE_2__models__["b" /* Event */]();
        event.title = 'RASPORED ODRŽANIH SASTANAKA S CILJNIM SKUPINAMA';
        event.slug = 'raspored-odrzanih-sastanaka-s-ciljnim-skupinama';
        event.language = 'hr';
        event.body = [
            {
                type: 'html',
                data: {
                    html: "\n            <table class=\"table table-responsive table-event-detail\">\n              <thead>\n                <tr class=\"active\">\n                  <th>DATUM</th>\n                  <th>CILJNA SKUPINA</th>\n                  <th>PODRU\u010CJE</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr class=\"warning\">\n                  <td scope=\"row\">11.04.</td>\n                  <td>MZOE, Uprava za inspekcijske poslove (1. sastanak)</td>\n                  <td>PKZ, STE</td>\n                <tr>\n                <tr class=\"\">\n                  <td scope=\"row\">19.04.</td>\n                  <td>HAOP</td>\n                  <td>PKZ</td>\n                <tr>\n                <tr class=\"warning\">\n                  <td scope=\"row\">25.04.</td>\n                  <td>HAOP</td>\n                  <td>STE</td>\n                <tr>\n                <tr class=\"\">\n                  <td scope=\"row\">04.05.</td>\n                  <td>MZOE, Uprava za klimatske aktivnosti, odr\u017Eivi razvoj i za\u0161titu zraka, tla i mora</td>\n                  <td>STE</td>\n                <tr>\n                <tr class=\"warning\">\n                  <td scope=\"row\">10.05.</td>\n                  <td>predstavnici industrijskog sektora i akreditirani verifikatori</td>\n                  <td>PKZ, STE</td>\n                <tr>\n                <tr class=\"\">\n                  <td scope=\"row\">15.05.</td>\n                  <td>MZOE, Uprava za inspekcijske poslove (2. sastanak)</td>\n                  <td>PKZ, STE</td>\n                <tr>\n                <tr class=\"warning\">\n                  <td scope=\"row\">29.05.</td>\n                  <td>MZOE, Uprava za klimatske aktivnosti, odr\u017Eivi razvoj i za\u0161titu zraka, tla i mora</td>\n                  <td>PKZ</td>\n                <tr>\n              </tbody>\n            </table>\n\n            <p><u>Kratice:</u></p>\n\n            <ul>\n              <li>MZOE: Ministarstvo za\u0161tite okoli\u0161a i energetike</li>\n              <li>HAOP: Hrvatska agencija za okoli\u0161 i prirodu</li>\n              <li>PKZ: pra\u0107enje kakvo\u0107e zraka</li>\n              <li>STE: sustav trgovanja emisijskim jedinicama stakleni\u010Dkih plinova</li>\n            </ul>\n          "
                }
            }
        ];
        this.events.push(event);
        event = new __WEBPACK_IMPORTED_MODULE_2__models__["b" /* Event */]();
        event.title = 'SCHEDULE OF MEETINGS HELD WITH TARGET GROUPS';
        event.slug = 'schedule-of-meetings-held-with-target-groups';
        event.language = 'en';
        event.body = [
            {
                type: 'html',
                data: {
                    html: "\n            <table class=\"table table-responsive table-event-detail\">\n              <thead>\n                <tr class=\"active\">\n                  <th>DATE</th>\n                  <th>TARGET GROUP</th>\n                  <th>SCOPE</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr class=\"warning\">\n                  <td scope=\"row\">11 April</td>\n                  <td>MEE, Directorate for inspectional affairs (1st meeting)</td>\n                  <td>AQM, ETS</td>\n                <tr>\n                <tr class=\"\">\n                  <td scope=\"row\">19 April</td>\n                  <td>CAEN</td>\n                  <td>AQM</td>\n                <tr>\n                <tr class=\"warning\">\n                  <td scope=\"row\">25 April</td>\n                  <td>CAEN</td>\n                  <td>ETS</td>\n                <tr>\n                <tr class=\"\">\n                  <td scope=\"row\">4 May</td>\n                  <td>MEE, Directorate for climate activities, sustainable development and protection of soil, air and sea</td>\n                  <td>ETS</td>\n                <tr>\n                <tr class=\"warning\">\n                  <td scope=\"row\">10 May</td>\n                  <td>representatives of the industrial sector including accredited verifiers</td>\n                  <td>AQM, ETS</td>\n                <tr>\n                <tr class=\"\">\n                  <td scope=\"row\">15 May</td>\n                  <td>MEE, Directorate for inspectional affairs (2nd meeting)</td>\n                  <td>AQM, ETS</td>\n                <tr>\n                <tr class=\"warning\">\n                  <td scope=\"row\">29 May</td>\n                  <td>MEE, Directorate for climate activities, sustainable development and protection of soil, air and sea</td>\n                  <td>AQM</td>\n                <tr>\n              </tbody>\n            </table>\n\n            <p><u>Abbreviations:</u></p>\n\n            <ul>\n              <li>MEE: The Ministry of Environment and Energy</li>\n              <li>CAEN: Croatian Agency for the Environment and Nature</li>\n              <li>AQM: air quality monitoring</li>\n              <li>ETS: greenhouse gas emissions trading system</li>\n            </ul>\n          "
                }
            }
        ];
        this.events.push(event);
    };
    DataService.prototype.initNews = function () {
        this.news = new Array();
        var item = null;
        item = new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* News */]();
        item.title = 'ZAVRŠEN PRVI MODUL OBUKE, NAJAVA POČETKA DRUGOG MODULA';
        item.date = __WEBPACK_IMPORTED_MODULE_3_moment__('15.01.2018.', 'DD.MM.YYYY.');
        item.intro = 'Obuka prvog modula (PKZ 1) održana je u skladu s terminskim planom za sve skupine u Opatiji, Splitu, Osijeku i Zagrebu.';
        item.body = [
            {
                type: 'html',
                data: {
                    html: "\n            <p>Obuka prvog modula (PKZ1) odr\u017Eala se u razdoblju izme\u0111u 6. studenog 2017. godine i 12.\n      sije\u010Dnja 2018. godine. Obuka je odr\u017Eana sukladno rasporedu, u pet skupina na \u010Detiri lokacije: u\n      Opatiji, Splitu, Osijeku i Zagrebu (dvije skupine). Ni\u017Ee su prikazane odabrane fotografije s\n      radionica.</p>\n            <p>Drugi modul obuke (PKZ2) zapo\u010Dinje 15. sije\u010Dnja. Obuka drugog modula te ujedno i obuka u\n      podru\u010Dju pra\u0107enja kvalitete zraka zavr\u0161ava 16. velja\u010De 2018. godine. Nakon toga zapo\u010Dinje\n      obuka u podru\u010Dju sustava trgovanja emisijskim jedinicama stakleni\u010Dkih plinova.</p>\n          "
                }
            },
            {
                type: 'gallery',
                data: {
                    galleryName: 'zavrsen-prvi-modul-obuke-najava-pocetka-drugog-modula'
                }
            },
        ];
        item.slug = 'zavrsen-prvi-modul-obuke-najava-pocetka-drugog-modula';
        item.images = {
            path: 'assets/img/gallery/zavrsen-prvi-modul-obuke-najava-pocetka-drugog-modula',
            intro: '/intro.jpg'
        };
        item.language = 'hr';
        this.news.push(item);
        item = new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* News */]();
        item.title = 'NAJAVA ODRŽAVANJA OBUKE';
        item.date = __WEBPACK_IMPORTED_MODULE_3_moment__('26.09.2017.', 'DD.MM.YYYY.');
        item.intro = 'Objavljen je raspored održavanja obuke predstavnika svih ciljnih skupina projekta po modulima i lokacijama.';
        item.body = [];
        item.url = 'assets/materials/najava-odrzavanja-obuke/Terminski_plan_obuke.xlsx';
        item.images = {
            path: 'assets/materials/najava-odrzavanja-obuke',
            intro: '/1.jpg'
        };
        item.language = 'hr';
        this.news.push(item);
        item = new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* News */]();
        item.title = 'PROVEDENA ANALIZA POTREBA ZA OBUKOM PREDSTAVNIKA CILJNIH SKUPINA';
        // item.titleDetail = 'STRUČNA PANEL RASPRAVA',
        item.date = __WEBPACK_IMPORTED_MODULE_3_moment__('20.09.2017.', 'DD.MM.YYYY.');
        item.intro = 'Provedena analiza temeljem anketnih upitnika i objavljeno Izvješće o rezultatima analize potreba za obukom predstavnika ciljnih skupina';
        item.body = [
            {
                type: 'html',
                data: {
                    html: "\n            <p>U razdoblju od 25. kolovoza do 6. rujna 2017. godine provedeno je anketiranje predstavnika svih ciljnih skupina u okviru analize potreba za obukom. Anketni upitnik distribuiran je ispitanicima putem elektroni\u010Dke po\u0161te. U upitniku su predstavnici ciljnih skupina imali mogu\u0107nost ocijeniti va\u017Enost i postaviti prioritete me\u0111u temama koje \u0107e biti obra\u0111ene na obuci u podru\u010Dju pra\u0107enja kvalitete zraka i u sustavu trgovanja emisijskim jedinicama stakleni\u010Dkih plinova. Ispitanici su tako\u0111er imali mogu\u0107nost predlo\u017Eiti dodatne teme prakti\u010Dnog dijela obuke, kao i bilo koju drugu temu iz podru\u010Dja koju smatraju va\u017Enom za obukom.</p>\n\n            <p>Popunjeni anketni upitnik dostavilo je oko 60 % od 160 ispitanika. Ispitanici su ispravno razumjeli dane upute i upitnici su korektno popunjeni. Rezultati o prioritetima tema za obuku su dobiveni tako da je izra\u010Dunata prosje\u010Dna ocjena temeljem ocjena preuzetih iz svih popunjenih upitnika, i to za svaku temu koju su ispitanici ocjenjivali. Budu\u0107i da je u listu za podru\u010Dje PKZ ocjenjivano 16 tema, kao rezultat je dobiveno 16 prosje\u010Dnih ocjena. U listu za podru\u010Dje STE dobiveno je 9 prosje\u010Dnih ocjena, budu\u0107i da je ocjenjivano ukupno 9 tema.</p>\n\n            <p>Kao kona\u010Dni rezultat obrade podataka iz anketnih upitnika dobiveni su skale prioriteta tema u podru\u010Dju pra\u0107enja kvalitete zraka i u sustavu trgovanja emisijskim jedinicama stakleni\u010Dkih plinova.</p>\n\n            <p align=\"center\"><img src=\"assets/materials/provedena-analiza-potreba-za-obukom-predstavnika-ciljnih-skupina/inline/hr/graph-1.png\" style=\"max-width: 600px; width: 100%\" /></p>\n\n            <p align=\"center\"><img src=\"assets/materials/provedena-analiza-potreba-za-obukom-predstavnika-ciljnih-skupina/inline/hr/graph-2.png\" style=\"max-width: 600px; width: 100%\" /></p>\n\n            <p>Detaljnije informacije o opisanom postupku analize potreba za obukom i rezultatima analize mogu se prona\u0107i u <a href=\"assets/materials/provedena-analiza-potreba-za-obukom-predstavnika-ciljnih-skupina/Izvjesce_o_rezultatima_analize_potreba_za_obukom.pdf\" target=\"_blank\" >Izvje\u0161\u0107u o rezultatima analize potreba za obukom</a>.</p>\n\n            <p>Izvje\u0161\u0107u se mo\u017Ee pristupiti i putem stranice Dokumenti. Temeljem rezultata analize potreba za obukom izradit \u0107e se program obuke koja \u0107e se provesti za predstavnike svih ciljnih skupina u razdoblju od studenog 2017. godine do o\u017Eujka 2018. godine.</p>\n          "
                }
            }
        ];
        item.slug = 'provedena-analiza-potreba-za-obukom-predstavnika-ciljnih-skupina';
        item.images = {
            path: 'assets/img/gallery/provedena-analiza-potreba-za-obukom-predstavnika-ciljnih-skupina',
            intro: '/inline/thumbnail.jpg',
        };
        item.language = 'hr';
        this.news.push(item);
        item = new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* News */]();
        item.title = 'ZANIMLJIVE STRUČNE RASPRAVE NA JEDNODNEVNOJ RADIONICI';
        item.titleDetail = 'STRUČNA PANEL RASPRAVA',
            item.date = __WEBPACK_IMPORTED_MODULE_3_moment__('30.05.2017.', 'DD.MM.YYYY.');
        item.intro = 'Stručnjaci razmijenili mišljenja na panel raspravi i odgovarali na pitanja sudionika radionice.';
        item.body = [
            {
                type: 'html',
                data: {
                    html: "\n            <p>U \u010Detvrtak 25. svibnja 2017. godine u Europskom domu u Zagrebu odr\u017Eana je jednodnevna radionica na kojoj je sudjelovalo oko 50 predstavnika ciljnih skupina projekta.</p>\n            <p>Radionica je odr\u017Eana u formi interaktivne panel rasprave na kojoj su stru\u010Dnjaci iz razli\u010Ditih ciljnih skupina razmjenjivali mi\u0161ljenja i odgovarali na pitanja ostalih sudionika koji su pratili raspravu.</p>\n            <p>Tema prijepodnevne panel rasprave bio je sustav trgovanja emisijskim jedinicama stakleni\u010Dkih plinova u Republici Hrvatskoj. U raspravi su sudjelovali predstavnici Ministarstva za\u0161tite okoli\u0161a i energetike, Hrvatske agencije za okoli\u0161 i prirodu, industrijskog sektora i akreditiranih verifikatora. Raspravljalo se o ulozi pojedinih ciljnih skupina u sustavu trgovanja emisijskim jedinicama stakleni\u010Dkih plinova te o ulozi i ciljevima inspekcijskog nadzora u sustavu trgovanja. Sudionici su opisali svoja iskustva u dosada\u0161njem radu vezano za provedbu inspekcijskog nadzora, kao i iskustva u razmjeni dokumenata i informacija izme\u0111u svih sudionika u sustavu trgovanja.<br>Zaklju\u010Deno je da su propisi o sustavu trgovanja vrlo precizni i detaljni te da su uloge pojedinih skupina sudionika jasno definirane. Nadalje, inspekcijski nadzor provodi se u sustavu koji u sebi ve\u0107 ima ugra\u0111ene mehanizme kontrole \u2013 od interne kontrole operatera, preko provjere verifikatora do provjere Hrvatske agencije za okoli\u0161 i prirodu. Dosad provedeni inspekcijski nadzori nisu zadirali u ispravnost podataka u izvje\u0161\u0107u o emisijama, kao \u0161to je to slu\u010Daj u nekim dr\u017Eavama \u010Dlanicama Europske unije. Dosada\u0161nju suradnju izme\u0111u sudionika u sustavu u smislu razmjene dokumenata i informacija sudionici rasprave su ocijenili kvalitetnom.</p>\n            <p>U poslijepodnevnoj panel raspravi okupljeni su stru\u010Dnjaci za podru\u010Dje pra\u0107enja kvalitete zraka. U ovoj raspravi su sudjelovali predstavnici Hrvatske agencije za okoli\u0161 i prirodu, stru\u010Dnog udru\u017Eenja za za\u0161titu zraka, referentnih laboratorija te industrijskog sektora. Stru\u010Dnjaci su razmijenili mi\u0161ljenja u vezi trenutnog stanja u Republici Hrvatskoj u lancu koji povezuje one\u010Di\u0161\u0107iva\u010De, inspektore za\u0161tite okoli\u0161a, nadle\u017Enu upravu ministarstva, laboratorije za pra\u0107enje kvalitete zraka, nadle\u017Ene jedinice lokalne samouprave i Hrvatsku agenciju za okoli\u0161 i prirodu. Raspravljalo se tako\u0111er o mogu\u0107nostima prakti\u010Dne implementacije zakonskih propisa te o potrebama za dodatnim usavr\u0161avanjem svih dionika u procesu za\u0161tite i pobolj\u0161anja kvalitete zraka, kao i o mogu\u0107oj ulozi stru\u010Dnih udruga, referentnih i ispitnih laboratorija u funkciji unaprje\u0111enja sustava pra\u0107enja kvalitete zraka. Glavni zaklju\u010Dci rasprave su da se odvija kvalitetna komunikacija izme\u0111u sudionika u sustavu pra\u0107enja kvalitete zraka, da je potrebno dati ve\u0107e zna\u010Denje prakti\u010Dnoj implementaciji pojedinih zakonskih odredbi te da su prepoznate potrebe dodatnog usavr\u0161avanja dionika.</p>\n            <p>Sudionici oba panela imali su priliku \u010Duti neposredno od stru\u010Dnjaka mi\u0161ljenja o aktualnom stanju u Republici Hrvatskoj i postaviti pitanja. Odgovaraju\u0107i na pitanja stru\u010Dnjaci su razvijali dodatne rasprave, omogu\u0107iv\u0161i sudionicima jo\u0161 detaljniji uvid u aktualno stanje u podru\u010Dju sustava trgovanja emisijskim jedinicama stakleni\u010Dkih plinova i u podru\u010Dju pra\u0107enja kvalitete zraka u Republici Hrvatskoj.</p>\n            <p>Ministarstvo za\u0161tite okoli\u0161a i energetike i EKONERG bi ovom prilikom jo\u0161 jednom \u017Eeljeli zahvaliti svim sudionicima na sudjelovanju, a posebno stru\u010Dnjacima panel rasprava na vrijednom doprinosu koji su dali uspje\u0161noj provedbi projekta.</p>\n\n            <h3>Fotografije</h3>\n          "
                }
            },
            {
                type: 'gallery',
                data: {
                    galleryName: 'zanimljive-strucne-rasprave-na-jednodnevnoj-radionici'
                }
            },
            {
                type: 'html',
                data: {
                    html: "\n          <h3>Materijali</h3>\n          <ul>\n            <li>\n              <a href=\"/novosti/poziv-predstavnicima-ciljnih-skupina-na-jednodnevnu-radionicu\" >\n                Poziv na radionicu\n              </a>\n            </li>\n            <li>\n              <a href=\"assets/materials/poziv-predstavnicima-ciljnih-skupina-na-jednodnevnu-radionicu/Moderatori_i_panelisti.pdf\" target=\"_blank\" >\n                Moderatori_i_panelisti.pdf\n              </a>\n            </li>\n            <li>\n              <a href=\"assets/materials/poziv-predstavnicima-ciljnih-skupina-na-jednodnevnu-radionicu/Panel_rasprava_ETS.pdf\" target=\"_blank\" >\n                Panel_rasprava_ETS.pdf\n              </a>\n            </li>\n            <li>\n              <a href=\"assets/materials/poziv-predstavnicima-ciljnih-skupina-na-jednodnevnu-radionicu/Panel_rasprava_PKZ.pdf\" target=\"_blank\" >\n                Panel_rasprava_PKZ.pdf\n              </a>\n            </li>\n          </ul>\n          "
                }
            }
        ];
        item.slug = 'zanimljive-strucne-rasprave-na-jednodnevnoj-radionici';
        item.images = {
            path: 'assets/img/gallery/zanimljive-strucne-rasprave-na-jednodnevnoj-radionici',
            intro: '/medium/1.jpg',
            main: '/large/1.jpg'
        };
        item.language = 'hr';
        this.news.push(item);
        item = new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* News */]();
        item.title = 'POZIV PREDSTAVNICIMA CILJNIH SKUPINA NA JEDNODNEVNU RADIONICU';
        item.date = __WEBPACK_IMPORTED_MODULE_3_moment__('15.05.2017.', 'DD.MM.YYYY.');
        item.intro = 'Pozivamo Vas na sudjelovanje na radionici - panel raspravi koja će se održati u četvrtak 25. svibnja 2017. godine u Europskom domu u Zagrebu.';
        item.body = [
            {
                type: 'html',
                data: {
                    html: "\n            <p>Pozivamo sve predstavnike ciljnih skupina projekta na jednodnevnu radionicu koja \u0107e se odr\u017Eati u \u010Detvrtak 25. svibnja 2017. godine u Europskom domu u Zagrebu, Juri\u0161i\u0107eva 1/1 s po\u010Detkom u 10 sati.</p>\n            <p>Radionica \u0107e se odr\u017Eati kao interaktivna panel rasprava, \u0161to zna\u010Di da \u0107e se na njoj okupiti panel stru\u010Dnjaka koji \u0107e raspravljati o glavnim temama projekta, a sudjelovanje u raspravi je tako\u0111er omogu\u0107eno svim ostalim sudionicima radionice. Cilj rasprave je potaknuti razmjenu mi\u0161ljenja izme\u0111u predstavnika svih ciljnih skupina projekta.</p>\n            <p>Radionica je podijeljena u dva dijela: u prvom dijelu \u0107e se raspravljati o sustavu trgovanja emisijskim jedinicama stakleni\u010Dkih plinova u Republici Hrvatskoj, a tema drugog dijela je pra\u0107enje kvalitete zraka u Republici Hrvatskoj.</p>\n            <p>Program radionice je sljede\u0107i:</p>\n\n            <table class=\"table table-responsive table-news-detail\">\n              <thead>\n                <tr class=\"active\">\n                  <th>TERMIN</th>\n                  <th>TEMA DNEVNOG REDA</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr class=\"warning\">\n                  <td scope=\"row\">9:30 - 10:00</td>\n                  <td>Registracija sudionika i kava dobrodo\u0161lice</td>\n                <tr>\n                <tr class=\"\">\n                  <td scope=\"row\">10:00 - 10:05</td>\n                  <td>Pozdravni govor, predstavljanje ciljeva i tema rasprave te voditelja panela</td>\n                <tr>\n                <tr class=\"\">\n                  <td scope=\"row\">10:05 - 12:00</td>\n                  <td>Sustav trgovanja emisijskim jedinicama u Republici Hrvatskoj</td>\n                <tr>\n                <tr class=\"warning\">\n                  <td scope=\"row\">12:00 - 13:00</td>\n                  <td>Pauza za ru\u010Dak</td>\n                <tr>\n                <tr class=\"\">\n                  <td scope=\"row\">13:00 - 14:00</td>\n                  <td>Pra\u0107enje kvalitete zraka u Republici Hrvatskoj</td>\n                <tr>\n                <tr class=\"warning\">\n                  <td scope=\"row\">14:00 - 14:05</td>\n                  <td>Pauza za poslu\u017Eivanje kave</td>\n                <tr>\n                <tr class=\"\">\n                  <td scope=\"row\">14:05 - 15:00</td>\n                  <td>Pra\u0107enje kvalitete zraka u Republici Hrvatskoj \u2013 nastavak uz kavu</td>\n                <tr>\n              </tbody>\n            </table>\n\n            <p>U uvodnom dijelu radionice sudionicima \u0107e se obratiti gospo\u0111a Anita Pokrovac Patekar, voditeljica projekta u ime Ministarstva za\u0161tite okoli\u0161a i energetike i gospodin Goran Janekovi\u0107, voditelj projekta u ime EKONERG \u2013 Instituta za energetiku i za\u0161titu okoli\u0161a. Voditelj prvog panela je gospo\u0111a Valentina Delija \u2013 Ru\u017Ei\u0107, a drugog panela gospodin Bojan Abramovi\u0107, oboje stru\u010Dnjaci EKONERG \u2013 Instituta za energetiku i za\u0161titu okoli\u0161a.</p>\n\n            <p>Nadamo se \u0161to ve\u0107em odazivu i kvalitetnoj raspravi koja \u0107e doprinijeti unaprje\u0111enju inspekcije za\u0161tite okoli\u0161a i postizanju op\u0107enitog cilja projekta, a to je pobolj\u0161anje pra\u0107enja kvalitete zraka i sustava trgovanja emisijskim jedinicama stakleni\u010Dkih plinova u Republici Hrvatskoj.</p>\n\n            <h3>Materijali</h3>\n            <ul>\n              <li>\n                <a href=\"assets/materials/poziv-predstavnicima-ciljnih-skupina-na-jednodnevnu-radionicu/Poziv_na_radionicu.pdf\" target=\"_blank\" >\n                  Poziv_na_radionicu.pdf\n                </a>\n              </li>\n            </ul>\n          "
                }
            }
        ];
        item.slug = 'poziv-predstavnicima-ciljnih-skupina-na-jednodnevnu-radionicu';
        item.images = {
            path: 'assets/news',
            intro: '/thought.jpg'
        };
        item.language = 'hr';
        this.news.push(item);
        item = new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* News */]();
        item.title = 'ODRŽANA SVEČANOST OTVARANJA PROJEKTA';
        item.date = __WEBPACK_IMPORTED_MODULE_3_moment__('04.04.2017.', 'DD.MM.YYYY.');
        item.intro = 'U ponedjeljak 3. travnja 2017. u Europskom domu u Zagrebu održana je svečanost otvaranja projekta.';
        item.body = [
            {
                type: 'html',
                data: {
                    html: "\n            <p>U ponedjeljak 3. travnja 2017. godine u Europskom domu u Zagrebu odr\u017Eana je sve\u010Danost otvorenja projekta. Na sve\u010Danosti je sudjelovalo oko 90 uzvanika iz tijela javne uprave, ostalih ustanova, industrije, zrakoplovstva, dru\u0161tava za komunalne djelatnosti te predstavnici medija.</p>\n            <p>Na sve\u010Danosti su se uzvanicima pozdravnim govorima obratili gospo\u0111a Sandra Bu\u0107an ispred Uprave za inspekcijske poslove Ministarstva za\u0161tite okoli\u0161a i energetike, gospodin Zdravko Mu\u017Eek, direktor EKONERG-a i gospodin Mislav Sovulj, pomo\u0107nik ravnatelja Sredi\u0161nje agencije za financiranje i ugovaranje programa i projekata EU.</p>\n            <p>Prezentaciju o projektnim aktivnostima koje \u0107e se provesti za ostvarivanje o\u010Dekivanih rezultata projekta odr\u017Eao je gospodin Goran Janekovi\u0107, voditelj projekta EKONERG-a, a prezentaciju o o\u010Dekivanim koristima od projekta odr\u017Eala je gospo\u0111a Anita Pokrovac Patekar, voditeljica projekta MZOE.</p>\n            <p>\u010Cast da odr\u017Ei zavr\u0161nu rije\u010D na sve\u010Danosti pripala je gospodinu \u017Deljku Bigovi\u0107u, dr\u017Eavnom tajniku u Ministarstvu za\u0161tite okoli\u0161a i energetike.</p>\n            <p>Nakon odr\u017Eanih govora i prezentacija svi uzvanici su pozvani na dru\u017Eenje i kratki domjenak.</p>\n\n            <h3>Fotografije</h3>\n          "
                }
            },
            {
                type: 'gallery',
                data: {
                    galleryName: 'svecanost-otvaranja-projekta'
                }
            },
            {
                type: 'html',
                data: {
                    html: "\n          <h3>Materijali</h3>\n          <ul>\n            <li>\n              <a href=\"assets/materials/svecanost-otvaranja-projekta/1_Pozivnica_i_program_INZRAK.pdf\" target=\"_blank\" >\n                1_Pozivnica_i_program_INZRAK.pdf\n              </a>\n            </li>\n            <li>\n              <a href=\"assets/materials/svecanost-otvaranja-projekta/2_Obavijest_o_odrzanoj_svecanosti.pdf\" target=\"_blank\" >\n                2_Obavijest_o_odrzanoj_svecanosti.pdf\n              </a>\n            </li>\n            <li>\n              <a href=\"assets/materials/svecanost-otvaranja-projekta/3_Prezentacija_Pregled_projektnih_aktivnosti.pdf\" target=\"_blank\" >\n                3_Prezentacija_Pregled_projektnih_aktivnosti.pdf\n              </a>\n            </li>\n            <li>\n              <a href=\"assets/materials/svecanost-otvaranja-projekta/4_Prezentacija_Ocekivane_koristi_od_projekta.pdf\" target=\"_blank\" >\n                4_Prezentacija_Ocekivane_koristi_od_projekta.pdf\n              </a>\n            </li>\n          </ul>\n          "
                }
            },
            {
                type: 'html',
                data: {
                    html: "\n          <h3>Iz drugih medija</h3>\n          <ul>\n            <li>\n              <a href=\"http://www.croenergo.eu/Otvoren-projekt-jacanja-inspekcije-zastite-okolisa-radi-ucinkovite-kontrole-pracenja-kakvoce-zraka-32016.aspx\" target=\"_blank\" >\n                CROENERGO.EU\n              </a>\n            </li>\n            <li>\n              <a href=\"https://www.energypress.net/predstavljen-projekt-jacanja-inspekcije-zastite-okolisa/\" target=\"_blank\" >\n                Energypress.net\n              </a>\n            </li>\n            <li>\n              <a href=\"http://www.index.hr/vijesti/clanak/eu-ce-financirati-edukaciju-inspekcije-zastite-okolisa/961108.aspx\" target=\"_blank\" >\n                Index-HR\n              </a>\n            </li>\n            <li>\n              <a href=\"https://www.energetskiportal.rs/hrvatska-od-sutra-pocinje-zestoku-borbu-protiv-zagadenja-vazduha/\" target=\"_blank\" >\n                Energetski portal Srbije\n              </a>\n            </li>\n            <li>\n              <a href=\"http://www.porta3.mk/od-vchera-hrvatska-zapochna-golem-proekt-protiv-zagadeniot-vozduh/\" target=\"_blank\" >\n                Porta 3\n              </a>\n            </li>\n          </ul>\n          "
                }
            }
        ];
        item.slug = 'svecanost-otvaranja-projekta';
        item.images = {
            path: 'assets/gallery/svecanost-otvaranja-projekta',
            intro: '/medium/10.jpg',
            main: '/large/10.jpg',
            gallery: [
                { thumbnail: '/small/1.jpg', image: '/large/1.jpg' },
                { thumbnail: '/small/2.jpg', image: '/large/2.jpg' },
                { thumbnail: '/small/3.jpg', image: '/large/3.jpg' },
                { thumbnail: '/small/4.jpg', image: '/large/4.jpg' },
                { thumbnail: '/small/5.jpg', image: '/large/5.jpg' },
                { thumbnail: '/small/6.jpg', image: '/large/6.jpg' },
                { thumbnail: '/small/7.jpg', image: '/large/7.jpg' },
                { thumbnail: '/small/8.jpg', image: '/large/8.jpg' },
                { thumbnail: '/small/9.jpg', image: '/large/9.jpg' },
                { thumbnail: '/small/11.jpg', image: '/large/11.jpg' },
                { thumbnail: '/small/12.jpg', image: '/large/12jpg' },
            ]
        };
        item.language = 'hr';
        this.news.push(item);
        // English
        item = new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* News */]();
        item.title = 'THE FIRST TRAINING MODULE COMPLETED, ANNOUNCEMENT OF BEGINNING OF THE SECOND MODULE';
        item.date = __WEBPACK_IMPORTED_MODULE_3_moment__('15.01.2018.', 'DD.MM.YYYY.');
        item.intro = 'The training under the first module (AQM 1) has been held according to time schedule for all groups in Opatija, Split, Osijek and Zagreb.';
        item.body = [
            {
                type: 'html',
                data: {
                    html: "\n            <p>Training under the first module (AQM1) was held in the period from 6 November 2017 until 12\n            January 2018. The training took place according to time schedule in five groups on four\n            locations: in Opatija, Split, Osijek and Zagreb (two groups). Selected photos taken during the\n            workshops are displayed below.</p>\n            <p>The training under the second module (AQM2) begins on 15 January. The training under the\n            second module, and at the same time the training in the field of air quality monitoring, ends on\n            16 February 2018. The training in the field of emissions trading system will begin after that.</p>\n          "
                }
            },
            {
                type: 'gallery',
                data: {
                    galleryName: 'zavrsen-prvi-modul-obuke-najava-pocetka-drugog-modula'
                }
            },
        ];
        item.slug = 'the-first-training-module-completed-announcement-of-beginning-of-the-second-module';
        item.images = {
            path: 'assets/img/gallery/zavrsen-prvi-modul-obuke-najava-pocetka-drugog-modula',
            intro: '/intro.jpg'
        };
        item.language = 'en';
        this.news.push(item);
        item = new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* News */]();
        item.title = 'ANNOUNCEMENT OF TRAINING COURSE';
        item.date = __WEBPACK_IMPORTED_MODULE_3_moment__('26.09.2017.', 'DD.MM.YYYY.');
        item.intro = 'Training schedule for representatives of all project target groups by modules and locations was published.';
        item.body = [];
        item.url = 'assets/materials/najava-odrzavanja-obuke/Training_schedule.xlsx';
        item.images = {
            path: 'assets/materials/najava-odrzavanja-obuke',
            intro: '/1.jpg'
        };
        item.language = 'en';
        this.news.push(item);
        item = new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* News */]();
        item.title = 'Analysis of training needs of target groups representatives conducted';
        item.date = __WEBPACK_IMPORTED_MODULE_3_moment__('20.09.2017.', 'DD.MM.YYYY.');
        item.intro = 'Analysis was conducted based on questionnaires and Report on analysis of training needs of target groups representatives was published.';
        item.body = [
            {
                type: 'html',
                data: {
                    html: "\n            <p>In the period from August 25 until September 6, 2017 a survey was conducted within the scope\n            of the analysis of training needs covering representatives of all target groups. The survey\n            questionnaire was distributed to respondents via electronic mail. By filling in the questionnaires\n            representatives of target groups had the opportunity to evaluate the importance and set priorities\n            of topics to be addressed on training in the field of air quality monitoring and greenhouse gas\n            emissions trading system. Respondents also had the opportunity to suggest additional topics for\n            practical training, as well as any other topic belonging to the subject matter they considered\n            relevant for the training.</p>\n\n            <p>A completed survey questionnaire was submitted by about 60% of all 160 respondents. The\n            respondents correctly understood the given instructions and questionnaires were correctly filled\n            in. The training priority scores were obtained by calculating the average grade based on the\n            grades taken from all the completed questionnaires, for each topic that was evaluated by the\n            respondents. Since there were 16 topics rated in the \u201Cair quality monitoring\u201D sheet, 16 average\n            scores were obtained. There were 9 average scores obtained in the \u201Cemissions trading system\u201D\n            sheet, since a total of 9 topics were rated.</p>\n\n            <p>As the final result of processing survey questionnaire data, priority scales of topics were\n            obtained in the area of air quality monitoring and in the greenhouse gas emissions trading\n            system.</p>\n\n            <p align=\"center\"><img src=\"assets/materials/provedena-analiza-potreba-za-obukom-predstavnika-ciljnih-skupina/inline/en/graph-1.png\" style=\"max-width: 600px; width: 100%\" /></p>\n\n            <p align=\"center\"><img src=\"assets/materials/provedena-analiza-potreba-za-obukom-predstavnika-ciljnih-skupina/inline/en/graph-2.png\" style=\"max-width: 600px; width: 100%\" /></p>\n\n            <p>More detailed information on the described process of analysis of training needs and the results\n            of the analysis can be found in the <a href=\"assets/materials/provedena-analiza-potreba-za-obukom-predstavnika-ciljnih-skupina/Izvjesce_o_rezultatima_analize_potreba_za_obukom.pdf\" target=\"_blank\" >Report on the results of training needs analysis</a>.</p>\n\n            <p>The report can also be accessed from the Documents page. Based on the results of training\n            needs analysis, a training programme will be set up for the training of representatives of all\n            target groups in the period from November 2017 to March 2018.</p>\n          "
                }
            }
        ];
        item.slug = 'analysis-of-training-needs-of-target-groups-representatives-conducted';
        item.images = {
            path: 'assets/img/gallery/provedena-analiza-potreba-za-obukom-predstavnika-ciljnih-skupina',
            intro: '/inline/thumbnail.jpg',
        };
        item.language = 'en';
        this.news.push(item);
        item = new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* News */]();
        item.title = 'Interesting professional discussions at one-day workshop';
        item.titleDetail = 'EXPERT PANEL DISCUSSION',
            item.date = __WEBPACK_IMPORTED_MODULE_3_moment__('30.05.2017.', 'DD.MM.YYYY.');
        item.intro = 'Experts exchanged opinions on the panel discussions and answered questions of the workshop participants.';
        item.body = [
            {
                type: 'html',
                data: {
                    html: "\n            <p>On Thursday 25th May 2017, a one-day workshop was held in European house in Zagreb attended by about 50 representatives of project target groups.</p>\n            <p>The workshop was held in the form of an interactive panel discussion where experts from different target groups exchanged opinions and answered questions of other participants of the discussion.</p>\n            <p>The topic of the morning panel discussion was the greenhouse gas emissions trading system in the Republic of Croatia. Representatives of the Ministry of Environment and Energy, Croatian Agency for the Environment and Nature, industrial sector and accredited verifiers all took part in the discussion. They discussed the role of individual target groups in the greenhouse gas emissions trading system and the role and goals of inspection in the trading system. The participants described their experience in previous work related to inspection implementation, as well as experience in exchange of documents and information among all participants of the trading system. It was concluded after the discussion that emissions trading regulations are generally very precise and detailed and the roles of individual groups of participants are very clearly defined. Furthermore, the inspection is being carried out in a system which already has built in control mechanisms \u2013 starting from the operator\u2019s internal controls, through verification checks and ending with the review of the Croatian Agency for the Environment and Nature. The inspections carried out so far did not refer to the correctness of data in emission reports, as is the case in some European Union member states. The existing co-operation between the participants of the system in terms of document and information exchange has been evaluated as high-quality by the panel participants.</p>\n            <p>In the afternoon panel discussion experts in the field of air quality monitoring were gathered. Representatives of Croatian Agency for the Environment and Nature and of professional association for air protection, reference laboratories and industrial sector participated in this discussion. The experts exchanged their opinions related to the current state in the Republic of Croatia in the chain linking pollutants, environmental inspectors, competent ministry directorate, laboratories for air quality monitoring, competent local authorities and Croatian Agency for the Environment and Nature. The discussion also included possibilities of practical implementation of legislation, needs for additional training of all participants in the process of air quality protection and improvement, as well as potential role of professional associations, reference and testing laboratories with the aim to improve the air quality monitoring system. The main conclusions of the discussion were that communication among participants in the air quality monitoring system is high-quality, that the importance of the practical implementation of certain legal provisions should be given greater importance and the need for further training of stakeholders is recognized.</p>\n            <p>Participants of both panels had the opportunity to hear directly from the experts on the current state in the Republic of Croatia and ask questions in relation to that. Experts continued developing discussions further by responding to the questions, enabling participants to gain more detailed insight into the current state in the greenhouse gas emissions trading system and the field of air quality monitoring in the Republic of Croatia.</p>\n            <p>Ministry of Environment and Energy, and EKONERG would herewith like to express their gratitude once again to all participants for their participation, and especially to panel discussion experts for their valuable contribution to successful project implementation.</p>\n\n            <h3>Gallery</h3>\n          "
                }
            },
            {
                type: 'gallery',
                data: {
                    galleryName: 'zanimljive-strucne-rasprave-na-jednodnevnoj-radionici'
                }
            },
            {
                type: 'html',
                data: {
                    html: "\n            <h3>Documents</h3>\n            <ul>\n              <li>\n                <a href=\"/novosti/invitation-to-representatives-of-target-groups-to-one-day-workshop\" >\n                  Invitation to workshop\n                </a>\n              </li>\n            </ul>\n          "
                }
            }
        ];
        item.slug = 'interesting-professional-discussions-at-one-day-workshop';
        item.images = {
            path: 'assets/img/gallery/zanimljive-strucne-rasprave-na-jednodnevnoj-radionici',
            intro: '/medium/1.jpg',
            main: '/large/1.jpg'
        };
        item.language = 'en';
        this.news.push(item);
        item = new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* News */]();
        item.title = 'Invitation to representatives of target groups to one-day workshop';
        item.date = __WEBPACK_IMPORTED_MODULE_3_moment__('15.05.2017.', 'DD.MM.YYYY.');
        item.intro = 'We would like to invite to you to participate in the workshop – panel discussion which will be held on Thursday 25 May 2017 in European house in Zagreb.';
        item.body = [
            {
                type: 'html',
                data: {
                    html: "\n            <p>We would like to invite all representatives of project target groups to a one-day workshop on Thursday 25 May 2017 in European house in Zagreb, Juri\u0161i\u0107eva 1/1 at 10:00 a.m.</p>\n            <p>The workshop will be held as interactive panel discussion, which means that there will be a panel of experts discussing the main topics of the project. All other workshop participants can also take part in the discussion. The discussion aims at inducing exchange of opinions among representatives of all project target groups.</p>\n            <p>The workshop is divided into two parts: first part will discuss the greenhouse gas emissions trading system in the Republic of Croatia. The topic of the second part is air quality monitoring in the Republic of Croatia.</p>\n            <p>Workshop programme is as follows:</p>\n\n            <table class=\"table table-responsive table-news-detail\">\n              <thead>\n                <tr class=\"active\">\n                  <th>TIME</th>\n                  <th>TOPICS ON THE AGENDA</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr class=\"warning\">\n                  <td scope=\"row\">9:30 - 10:00</td>\n                  <td>Registration of participants and welcome coffee</td>\n                <tr>\n                <tr class=\"\">\n                  <td scope=\"row\">10:00 - 10:05</td>\n                  <td>Welcome speech, presentation of goals and topics of discussion and of panel leaders</td>\n                <tr>\n                <tr class=\"\">\n                  <td scope=\"row\">10:05 - 12:00</td>\n                  <td>Greenhouse gas emissions trading system in the Republic of Croatia</td>\n                <tr>\n                <tr class=\"warning\">\n                  <td scope=\"row\">12:00 - 13:00</td>\n                  <td>Lunch break</td>\n                <tr>\n                <tr class=\"\">\n                  <td scope=\"row\">13:00 - 14:00</td>\n                  <td>Air quality monitoring in the Republic of Croatia</td>\n                <tr>\n                <tr class=\"warning\">\n                  <td scope=\"row\">14:00 - 14:05</td>\n                  <td>Coffee serving break</td>\n                <tr>\n                <tr class=\"\">\n                  <td scope=\"row\">14:05 - 15:00</td>\n                  <td>Air quality monitoring in the Republic of Croatia \u2013 continued with coffee</td>\n                <tr>\n              </tbody>\n            </table>\n\n            <p>Ms. Anita Pokrovac Patekar, project leader on behalf of the Ministry of Environment and Energy, and Mr. Goran Janekovi\u0107, project leader on behalf of EKONERG Energy Research and Environmental Protection Institute, will address the participants in the workshop introduction.</p>\n\n            <p>Leader of the first panel is Ms. Valentina Delija \u2013 Ru\u017Ei\u0107 and of the second one Mr. Bojan Abramovi\u0107, who are both experts of EKONERG Energy Research and Environmental Protection Institute.</p>\n\n            <p>We are looking forward to a large number of participants and a high-quality discussion that will contribute to environmental inspection improvement and also to achieving the general goal of the project, which is improvement of air quality monitoring and of the greenhouse gas emissions trading system in the Republic of Croatia.</p>\n          "
                }
            }
        ];
        item.slug = 'invitation-to-representatives-of-target-groups-to-one-day-workshop';
        item.images = {
            path: 'assets/news',
            intro: '/thought.jpg'
        };
        item.language = 'en';
        this.news.push(item);
        item = new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* News */]();
        item.title = 'Opening ceremony of the project held in Zagreb';
        item.date = __WEBPACK_IMPORTED_MODULE_3_moment__('04.04.2017.', 'DD.MM.YYYY.');
        item.intro = 'Opening ceremony of the project was held in European house in Zagreb on Monday April 3';
        item.body = [
            {
                type: 'html',
                data: {
                    html: "\n            <p>Opening ceremony of the project was held in European house in Zagreb on Monday April 3. About 90 participants from public administration, government institutions, industry, aviation, local utility companies and media representatives attended the ceremony.</p>\n            <p>Mrs Sandra Bu\u0107an, the Head of the Sector for inspectoral affairs and improvement of work, Ministry of Environment and Energy, Mr. Zdravko Mu\u017Eek, general manager of EKONERG and Mr. Mislav Sovulj, Assistant Director of the Central Finance and Contracting Agency for EU programmes and projects addressed the audience by greeting speech at the ceremony.</p>\n            <p>Presentation on project activities to be carried out to achieve the expected results of the project was held by Mr. Goran Janekovi\u0107, project leader on behalf of EKONERG and presentation on the expected benefits of the project was held by Mrs. Anita Pokrovac Patekar, project leader on behalf of the Ministry of Environment and Energy.</p>\n            <p>The honour to hold the closing speech at the ceremony was given to Mr. \u017Deljko Bigovi\u0107, State Secretary at the Ministry of Environment and Energy.</p>\n            <p>After the speeches and presentations all guests were invited to gather for a snack.</p>\n\n            <h3>Photos</h3>\n          "
                }
            },
            {
                type: 'gallery',
                data: {
                    galleryName: 'svecanost-otvaranja-projekta'
                }
            },
            {
                type: 'html',
                data: {
                    html: "\n          <h3>From other media</h3>\n          <ul>\n            <li>\n              <a href=\"http://www.croenergo.eu/Otvoren-projekt-jacanja-inspekcije-zastite-okolisa-radi-ucinkovite-kontrole-pracenja-kakvoce-zraka-32016.aspx\" target=\"_blank\" >\n                CROENERGO.EU\n              </a>\n            </li>\n            <li>\n              <a href=\"https://www.energypress.net/predstavljen-projekt-jacanja-inspekcije-zastite-okolisa/\" target=\"_blank\" >\n                Energypress.net\n              </a>\n            </li>\n            <li>\n              <a href=\"http://www.index.hr/vijesti/clanak/eu-ce-financirati-edukaciju-inspekcije-zastite-okolisa/961108.aspx\" target=\"_blank\" >\n                Index-HR\n              </a>\n            </li>\n            <li>\n              <a href=\"https://www.energetskiportal.rs/hrvatska-od-sutra-pocinje-zestoku-borbu-protiv-zagadenja-vazduha/\" target=\"_blank\" >\n                Energetski portal Srbije\n              </a>\n            </li>\n            <li>\n              <a href=\"http://www.porta3.mk/od-vchera-hrvatska-zapochna-golem-proekt-protiv-zagadeniot-vozduh/\" target=\"_blank\" >\n                Porta 3\n              </a>\n            </li>\n          </ul>\n          "
                }
            }
        ];
        item.slug = 'opening-ceremony-of-the-project';
        item.images = {
            path: 'assets/gallery/svecanost-otvaranja-projekta',
            intro: '/medium/10.jpg',
            main: '/large/10.jpg',
            gallery: [
                { thumbnail: '/small/1.jpg', image: '/large/1.jpg' },
                { thumbnail: '/small/2.jpg', image: '/large/2.jpg' },
                { thumbnail: '/small/3.jpg', image: '/large/3.jpg' },
                { thumbnail: '/small/4.jpg', image: '/large/4.jpg' },
                { thumbnail: '/small/5.jpg', image: '/large/5.jpg' },
                { thumbnail: '/small/6.jpg', image: '/large/6.jpg' },
                { thumbnail: '/small/7.jpg', image: '/large/7.jpg' },
                { thumbnail: '/small/8.jpg', image: '/large/8.jpg' },
                { thumbnail: '/small/9.jpg', image: '/large/9.jpg' },
                { thumbnail: '/small/11.jpg', image: '/large/11.jpg' },
                { thumbnail: '/small/12.jpg', image: '/large/12jpg' },
            ]
        };
        item.language = 'en';
        this.news.push(item);
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mail_mail_service__ = __webpack_require__("../../../../../src/app/services/mail/mail.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__mail_mail_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_service__ = __webpack_require__("../../../../../src/app/services/data/data.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__data_data_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/services/mail/mail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugins_parse__ = __webpack_require__("../../../../../src/app/plugins/parse/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MailService = (function () {
    function MailService(http) {
        this.http = http;
    }
    MailService.prototype.send = function (name, from, subject, message, captcha) {
        var data = {
            sender: name,
            from: from,
            subject: subject,
            message: message,
            captcha: captcha
        };
        return __WEBPACK_IMPORTED_MODULE_2__plugins_parse__["a" /* Parse */].Cloud.run('mail', data);
    };
    return MailService;
}());
MailService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], MailService);

var _a;
//# sourceMappingURL=mail.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    name: 'stage',
    production: false,
    reCaptcha: {
        siteKey: '6Lfl-hwUAAAAAC72V3E96WtnBGml21X0JOs60R5X'
    },
    Parse: {
        appId: 'ipa-inzrak',
        serverUrl: 'http://api.ipa-inzrak.info/parse'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_plugins_parse__ = __webpack_require__("../../../../../src/app/plugins/parse/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
// setup Parse
__WEBPACK_IMPORTED_MODULE_2__app_plugins_parse__["a" /* Parse */].initialize(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].Parse.appId);
__WEBPACK_IMPORTED_MODULE_2__app_plugins_parse__["a" /* Parse */].serverURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].Parse.serverUrl;
// bootstrap Angular application
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map