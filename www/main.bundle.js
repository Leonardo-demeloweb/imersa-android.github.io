webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/components.module": [
		"../../../../../src/app/components/components.module.ts",
		"components.module"
	],
	"./dashboard/dashboard.module": [
		"../../../../../src/app/dashboard/dashboard.module.ts",
		"dashboard.module"
	],
	"./forms/forms.module": [
		"../../../../../src/app/forms/forms.module.ts",
		"forms.module"
	],
	"./pages/pages.module": [
		"../../../../../src/app/pages/pages.module.ts",
		"pages.module"
	],
	"./tables/tables.module": [
		"../../../../../src/app/tables/tables.module.ts",
		"tables.module"
	],
	"./timeline/timeline.module": [
		"../../../../../src/app/timeline/timeline.module.ts",
		"timeline.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/angular-videoplayer/angular-videoplayer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-product {\n    margin-top: 170px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/angular-videoplayer/angular-videoplayer.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"col-md-6 col-md-offset-3\">\n    <div class=\"card card-product\">\n        <div class=\"card-image\" data-header-animation=\"true\">\n          <vg-player>\n            <vg-controls>\n              <vg-play-pause></vg-play-pause>\n              <vg-time-display></vg-time-display>\n              <vg-mute></vg-mute>\n              <vg-volume></vg-volume>\n              <vg-scrub-bar>\n                <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\n                <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\n              </vg-scrub-bar>\n              <vg-fullscreen></vg-fullscreen>\n            </vg-controls>\n\n            <video #myVideoRef src=\"http://static.videogular.com/assets/videos/videogular.mp4\"\n            [vgMedia]=\"myVideoRef\">\n          </video>\n          </vg-player>\n        </div>\n        <div class=\"card-content\">\n            <div class=\"card-actions\">\n                <button type=\"button\" class=\"btn btn-danger btn-simple fix-broken-card\">\n                    <i class=\"material-icons\">build</i> Fix Header!\n                </button>\n                <button type=\"button\" class=\"btn btn-default btn-simple\" rel=\"tooltip\" data-placement=\"bottom\" title=\"View\">\n                    <i class=\"material-icons\">art_track</i>\n                </button>\n                <button type=\"button\" class=\"btn btn-success btn-simple\" rel=\"tooltip\" data-placement=\"bottom\" title=\"Edit\">\n                    <i class=\"material-icons\">edit</i>\n                </button>\n                <button type=\"button\" class=\"btn btn-danger btn-simple\" rel=\"tooltip\" data-placement=\"bottom\" title=\"Remove\">\n                    <i class=\"material-icons\">close</i>\n                </button>\n            </div>\n            <h4 class=\"card-title\">\n                <a href=\"#pablo\">Cozy 5 Stars Apartment</a>\n            </h4>\n            <div class=\"card-description\">\n                The place is close to Barceloneta Beach and bus stop just 2 min by walk and...\n            </div>\n        </div>\n        <div class=\"card-footer\">\n            <div class=\"price\">\n                <h4>$899/night</h4>\n            </div>\n            <div class=\"stats pull-right\">\n                <p class=\"category\"><i class=\"material-icons\">place</i> Barcelona, Spain</p>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/angular-videoplayer/angular-videoplayer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularVideoplayerComponent; });
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

var AngularVideoplayerComponent = (function () {
    function AngularVideoplayerComponent() {
    }
    AngularVideoplayerComponent.prototype.ngOnInit = function () {
    };
    AngularVideoplayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-angular-videoplayer',
            template: __webpack_require__("../../../../../src/app/angular-videoplayer/angular-videoplayer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/angular-videoplayer/angular-videoplayer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AngularVideoplayerComponent);
    return AngularVideoplayerComponent;
}());

//# sourceMappingURL=angular-videoplayer.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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

var AppComponent = (function () {
    function AppComponent(elRef) {
        this.elRef = elRef;
    }
    AppComponent.prototype.ngOnInit = function () {
        $.material.init();
        var body = document.getElementsByTagName('body')[0];
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            body.classList.add('perfect-scrollbar-on');
        }
        else {
            body.classList.add('perfect-scrollbar-off');
        }
        $.material.init();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-app',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_module__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_footer_footer_module__ = __webpack_require__("../../../../../src/app/shared/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_navbar_navbar_module__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layouts_admin_admin_layout_component__ = __webpack_require__("../../../../../src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layouts_auth_auth_layout_component__ = __webpack_require__("../../../../../src/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard_admin__ = __webpack_require__("../../../../../src/app/guards/auth.guard.admin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_register_service__ = __webpack_require__("../../../../../src/app/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_host_service__ = __webpack_require__("../../../../../src/app/services/host.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_local_storage_service__ = __webpack_require__("../../../../../src/app/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_momento_service__ = __webpack_require__("../../../../../src/app/services/momento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_conteudo_service__ = __webpack_require__("../../../../../src/app/services/conteudo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_videoplayer_angular_videoplayer_component__ = __webpack_require__("../../../../../src/app/angular-videoplayer/angular-videoplayer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_videogular2_core__ = __webpack_require__("../../../../videogular2/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_videogular2_controls__ = __webpack_require__("../../../../videogular2/controls.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_videogular2_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_videogular2_controls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__galeria_galeria_component__ = __webpack_require__("../../../../../src/app/galeria/galeria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__resumo_galeria_resumo_galeria_component__ = __webpack_require__("../../../../../src/app/resumo-galeria/resumo-galeria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__cadastro_depoimentos_cadastro_depoimentos_component__ = __webpack_require__("../../../../../src/app/cadastro-depoimentos/cadastro-depoimentos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__lista_depoimento_lista_depoimento_component__ = __webpack_require__("../../../../../src/app/lista-depoimento/lista-depoimento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angular_font_awesome_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/angular-font-awesome.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 // this is needed!





























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_30__app_routing__["a" /* AppRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_module__["a" /* SidebarModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_navbar_navbar_module__["a" /* NavbarModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_footer_footer_module__["a" /* FooterModule */],
                __WEBPACK_IMPORTED_MODULE_23_videogular2_core__["VgCoreModule"],
                __WEBPACK_IMPORTED_MODULE_24_videogular2_controls__["VgControlsModule"],
                __WEBPACK_IMPORTED_MODULE_29_angular_font_awesome_angular_font_awesome__["a" /* AngularFontAwesomeModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__layouts_admin_admin_layout_component__["a" /* AdminLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_11__layouts_auth_auth_layout_component__["a" /* AuthLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_22__angular_videoplayer_angular_videoplayer_component__["a" /* AngularVideoplayerComponent */],
                __WEBPACK_IMPORTED_MODULE_25__galeria_galeria_component__["a" /* GaleriaComponent */],
                __WEBPACK_IMPORTED_MODULE_26__resumo_galeria_resumo_galeria_component__["a" /* ResumoGaleriaComponent */],
                __WEBPACK_IMPORTED_MODULE_27__cadastro_depoimentos_cadastro_depoimentos_component__["a" /* CadastroDepoimentosComponent */],
                __WEBPACK_IMPORTED_MODULE_28__lista_depoimento_lista_depoimento_component__["a" /* ListaDepoimentoComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__services_register_service__["a" /* RegisterService */],
                __WEBPACK_IMPORTED_MODULE_15__services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_16__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_17__services_host_service__["a" /* HostService */],
                __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard_admin__["a" /* AuthGuardAdmin */],
                __WEBPACK_IMPORTED_MODULE_18__services_local_storage_service__["a" /* LocalStorageService */],
                __WEBPACK_IMPORTED_MODULE_19__services_momento_service__["a" /* MomentoService */],
                __WEBPACK_IMPORTED_MODULE_20__services_conteudo_service__["a" /* ConteudoService */],
                __WEBPACK_IMPORTED_MODULE_21__services_file_service__["a" /* FileService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_admin_admin_layout_component__ = __webpack_require__("../../../../../src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_auth_auth_layout_component__ = __webpack_require__("../../../../../src/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_admin__ = __webpack_require__("../../../../../src/app/guards/auth.guard.admin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_videoplayer_angular_videoplayer_component__ = __webpack_require__("../../../../../src/app/angular-videoplayer/angular-videoplayer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__galeria_galeria_component__ = __webpack_require__("../../../../../src/app/galeria/galeria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resumo_galeria_resumo_galeria_component__ = __webpack_require__("../../../../../src/app/resumo-galeria/resumo-galeria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cadastro_depoimentos_cadastro_depoimentos_component__ = __webpack_require__("../../../../../src/app/cadastro-depoimentos/cadastro-depoimentos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lista_depoimento_lista_depoimento_component__ = __webpack_require__("../../../../../src/app/lista-depoimento/lista-depoimento.component.ts");









var AppRoutes = [
    {
        path: '',
        redirectTo: 'tables/datatables.net',
        pathMatch: 'full',
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_admin__["a" /* AuthGuardAdmin */]]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__layouts_admin_admin_layout_component__["a" /* AdminLayoutComponent */],
        children: [
            {
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_admin__["a" /* AuthGuardAdmin */]]
            }, {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule'
            }, {
                path: 'forms',
                loadChildren: './forms/forms.module#Forms',
                canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_admin__["a" /* AuthGuardAdmin */]]
            }, {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard_admin__["a" /* AuthGuardAdmin */]]
            },
            {
                path: '',
                loadChildren: './timeline/timeline.module#TimelineModule'
            },
            {
                path: 'app-angular-videoplayer',
                component: __WEBPACK_IMPORTED_MODULE_4__angular_videoplayer_angular_videoplayer_component__["a" /* AngularVideoplayerComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]]
            }, {
                path: 'app-galeria',
                component: __WEBPACK_IMPORTED_MODULE_5__galeria_galeria_component__["a" /* GaleriaComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]]
            }, {
                path: 'app-resumo-galeria',
                component: __WEBPACK_IMPORTED_MODULE_6__resumo_galeria_resumo_galeria_component__["a" /* ResumoGaleriaComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]]
            }, {
                path: 'app-cadastro-depoimentos',
                component: __WEBPACK_IMPORTED_MODULE_7__cadastro_depoimentos_cadastro_depoimentos_component__["a" /* CadastroDepoimentosComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]]
            }, {
                path: 'app-lista-depoimento',
                component: __WEBPACK_IMPORTED_MODULE_8__lista_depoimento_lista_depoimento_component__["a" /* ListaDepoimentoComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]]
            },
        ]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__layouts_auth_auth_layout_component__["a" /* AuthLayoutComponent */],
        children: [{
                path: 'pages',
                loadChildren: './pages/pages.module#PagesModule'
            }]
    }
];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/cadastro-depoimentos/cadastro-depoimentos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-imersa {\n    background-color: #a3dbc9;\n    color: #FFFFFF;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cadastro-depoimentos/cadastro-depoimentos.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content-undo\">\n    <div class=\"container-fluid\">\n\n        <div class=\"row\">\n          <div class=\"col-md-offset-9 col-md-1 col-xs-offset-9 col-xs-1\">\n            <button class=\"btn btn-round btn-just-icon btn-undo\" data-placement=\"left\" (click)=\"goToDepoimentos()\">\n               <i class=\"material-icons\">undo</i>\n            </button>\n          </div>\n        </div>\n\n        <div class=\"col-sm-8 col-sm-offset-2\">\n            <!--      Wizard container        -->\n            <div class=\"wizard-container\">\n                <div class=\"card wizard-card\" data-color=\"green-imersa\" id=\"wizardProfile\">\n                    <form action=\"\" method=\"\">\n                        <!--        You can switch \" data-color=\"purple\" \"  with one of the next bright colors: \"green\", \"orange\", \"red\", \"blue\"       -->\n                        <div class=\"wizard-header\">\n                            <h3 class=\"wizard-title\">\n                                Cadastro de depoimentos\n                            </h3>\n                        </div>\n                        <div class=\"wizard-navigation\">\n                            <ul>\n                                <li>\n                                    <a href=\"#sobre\" data-toggle=\"tab\">Depoente</a>\n                                </li>\n                                <li>\n                                    <a href=\"#evento\" data-toggle=\"tab\">Depoimento</a>\n                                </li>\n                            </ul>\n                        </div>\n                        <div class=\"tab-content\">\n                            <div class=\"tab-pane\" id=\"sobre\">\n                                <div class=\"row\">\n                                    <h4 class=\"info-text\"> Informações do Depoente</h4>\n                                    <div class=\"col-sm-4 col-sm-offset-1\">\n                                        <div class=\"picture-container\">\n                                          <legend>Avatar</legend>\n                                          <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n                                              <div class=\"fileinput-new thumbnail img-circle\">\n                                                  <img src=\"../../assets/img/placeholder.jpg\" alt=\"...\">\n                                              </div>\n                                              <div class=\"fileinput-preview fileinput-exists thumbnail img-circle\"></div>\n                                              <div>\n                                                  <span class=\"btn btn-round btn-imersa btn-file\">\n                                                      <span class=\"fileinput-new\">Add imagem de perfil</span>\n                                                      <span class=\"fileinput-exists\">Trocar</span>\n                                                      <input type=\"file\" name=\"...\" />\n                                                  </span>\n                                                  <br />\n                                                  <a href=\"#\" class=\"btn btn-danger btn-round fileinput-exists\" data-dismiss=\"fileinput\"><i class=\"fa fa-times\"></i> Remover</a>\n                                              </div>\n                                          </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">\n                                                <i class=\"material-icons\">face</i>\n                                            </span>\n                                            <div class=\"form-group label-floating\">\n                                                <label class=\"control-label\">Nome/ Sobrenome\n                                                    <small>(requerido)</small>\n                                                </label>\n                                                <input name=\"firstname\" type=\"text\" class=\"form-control\">\n                                            </div>\n                                        </div>\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">\n                                                <i class=\"material-icons\">title</i>\n                                            </span>\n                                            <div class=\"form-group label-floating\">\n                                                <label class=\"control-label\">Título\n                                                    <small>(requerido)</small>\n                                                </label>\n                                                <input name=\"titulo\" type=\"text\" class=\"form-control\">\n                                            </div>\n                                        </div>\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">\n                                                <i class=\"material-icons\">today</i>\n                                            </span>\n                                            <div class=\"form-group label-floating\">\n                                                <label class=\"control-label\">Data\n                                                    <small>(requerido)</small>\n                                                </label>\n                                                <input name=\"data\" type=\"text\" class=\"form-control\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"tab-pane\" id=\"evento\">\n                              <div class=\"row\">\n                                  <h4 class=\"info-text\"> Informações do Depoente</h4>\n                                  <div class=\"col-sm-4 col-sm-offset-1\">\n                                      <div class=\"picture-container\">\n                                        <legend>Foto/ Vídeo</legend>\n                                        <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n                                            <div class=\"fileinput-new thumbnail img-circle\">\n                                                <img src=\"../../assets/img/placeholder.jpg\" alt=\"...\">\n                                            </div>\n                                            <div class=\"fileinput-preview fileinput-exists thumbnail img-circle\"></div>\n                                            <div>\n                                                <span class=\"btn btn-round btn-imersa btn-file\">\n                                                    <span class=\"fileinput-new\">Add arquivo ào depoimento</span>\n                                                    <span class=\"fileinput-exists\">Trocar</span>\n                                                    <input type=\"file\" name=\"...\" />\n                                                </span>\n                                                <br />\n                                                <a href=\"#\" class=\"btn btn-danger btn-round fileinput-exists\" data-dismiss=\"fileinput\"><i class=\"fa fa-times\"></i> Remover</a>\n                                            </div>\n                                        </div>\n                                      </div>\n                                  </div>\n                                  <div class=\"col-sm-6\">\n                                      <div class=\"input-group\">\n                                          <span class=\"input-group-addon\">\n                                              <i class=\"material-icons\">description</i>\n                                          </span>\n                                          <div class=\"form-group label-floating\">\n                                              <textarea class=\"form-control\" placeholder=\"Depoimento\" rows=\"5\"></textarea>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div>\n                            </div>\n                        </div>\n                        <div class=\"wizard-footer\">\n                            <div class=\"pull-right\">\n                                <input type='button' class='btn btn-next btn-fill btn-imersa btn-wd' name='next' value='Próximo' />\n                                <input type='button' class='btn btn-finish btn-fill btn-imersa btn-wd' name='finish' value='Finalizar' />\n                            </div>\n                            <div class=\"pull-left\">\n                                <input type='button' class='btn btn-previous btn-fill btn-default btn-wd' name='previous' value='Anterior' />\n                            </div>\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <!-- wizard container -->\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/cadastro-depoimentos/cadastro-depoimentos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroDepoimentosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CadastroDepoimentosComponent = (function () {
    function CadastroDepoimentosComponent(router) {
        this.router = router;
    }
    CadastroDepoimentosComponent.prototype.readURL = function (input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
            };
            reader.readAsDataURL(input.files[0]);
        }
    };
    CadastroDepoimentosComponent.prototype.ngOnInit = function () {
        // Code for the Validator
        var $validator = $('.wizard-card form').validate({
            rules: {
                firstname: {
                    required: true,
                    minlength: 3
                },
                titulo: {
                    required: true,
                    minlength: 3
                },
                data: {
                    required: true,
                    minlength: 3,
                }
            },
            errorPlacement: function (error, element) {
                $(element).parent('div').addClass('has-error');
            }
        });
        // Wizard Initialization
        $('.wizard-card').bootstrapWizard({
            'tabClass': 'nav nav-pills',
            'nextSelector': '.btn-next',
            'previousSelector': '.btn-previous',
            onNext: function (tab, navigation, index) {
                var $valid = $('.wizard-card form').valid();
                if (!$valid) {
                    $validator.focusInvalid();
                    return false;
                }
            },
            onInit: function (tab, navigation, index) {
                // check number of tabs and fill the entire row
                var $total = navigation.find('li').length;
                var $width = 100 / $total;
                var $wizard = navigation.closest('.wizard-card');
                var $display_width = $(document).width();
                if ($display_width < 600 && $total > 3) {
                    $width = 50;
                }
                navigation.find('li').css('width', $width + '%');
                var $first_li = navigation.find('li:first-child a').html();
                var $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
                $('.wizard-card .wizard-navigation').append($moving_div);
                // this.refreshAnimation($wizard, index);
                var total_steps = $wizard.find('li').length;
                var move_distance = $wizard.width() / total_steps;
                var step_width = move_distance;
                move_distance *= index;
                var $current = index + 1;
                if ($current === 1) {
                    move_distance -= 8;
                }
                else if ($current === total_steps) {
                    move_distance += 8;
                }
                $wizard.find('.moving-tab').css('width', step_width);
                $('.moving-tab').css({
                    'transform': 'translate3d(' + move_distance + 'px, 0, 0)',
                    'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
                });
                $('.moving-tab').css('transition', 'transform 0s');
            },
            onTabClick: function (tab, navigation, index) {
                var $valid = $('.wizard-card form').valid();
                if (!$valid) {
                    return false;
                }
                else {
                    return true;
                }
            },
            onTabShow: function (tab, navigation, index) {
                var $total = navigation.find('li').length;
                var $current = index + 1;
                var $wizard = navigation.closest('.wizard-card');
                // If it's the last tab then hide the last button and show the finish instead
                if ($current >= $total) {
                    $($wizard).find('.btn-next').hide();
                    $($wizard).find('.btn-finish').show();
                }
                else {
                    $($wizard).find('.btn-next').show();
                    $($wizard).find('.btn-finish').hide();
                }
                var button_text = navigation.find('li:nth-child(' + $current + ') a').html();
                setTimeout(function () {
                    $('.moving-tab').text(button_text);
                }, 150);
                var checkbox = $('.footer-checkbox');
                if (index !== 0) {
                    $(checkbox).css({
                        'opacity': '0',
                        'visibility': 'hidden',
                        'position': 'absolute'
                    });
                }
                else {
                    $(checkbox).css({
                        'opacity': '1',
                        'visibility': 'visible'
                    });
                }
                // this.refreshAnimation($wizard, index);
                var total_steps = $wizard.find('li').length;
                var move_distance = $wizard.width() / total_steps;
                var step_width = move_distance;
                move_distance *= index;
                $current = index + 1;
                if ($current === 1) {
                    move_distance -= 8;
                }
                else if ($current === total_steps) {
                    move_distance += 8;
                }
                $wizard.find('.moving-tab').css('width', step_width);
                $('.moving-tab').css({
                    'transform': 'translate3d(' + move_distance + 'px, 0, 0)',
                    'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
                });
            }
        });
        // Prepare the preview for profile picture
        $('#wizard-picture').change(function () {
            this.readURL(this);
        });
        $('[data-toggle="wizard-radio"]').click(function () {
            var wizard = $(this).closest('.wizard-card');
            wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
            $(this).addClass('active');
            $(wizard).find('[type="radio"]').removeAttr('checked');
            $(this).find('[type="radio"]').attr('checked', 'true');
        });
        $('[data-toggle="wizard-checkbox"]').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).find('[type="checkbox"]').removeAttr('checked');
            }
            else {
                $(this).addClass('active');
                $(this).find('[type="checkbox"]').attr('checked', 'true');
            }
        });
        $('.set-full-height').css('height', 'auto');
    };
    CadastroDepoimentosComponent.prototype.ngOnChanges = function (changes) {
        var input = $(this);
        var target = null;
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
            };
            reader.readAsDataURL(input.files[0]);
        }
    };
    CadastroDepoimentosComponent.prototype.ngAfterViewInit = function () {
        $('.wizard-card').each(function () {
            var $wizard = $(this);
            var index = $wizard.bootstrapWizard('currentIndex');
            // this.refreshAnimation($wizard, index);
            var total_steps = $wizard.find('li').length;
            var move_distance = $wizard.width() / total_steps;
            var step_width = move_distance;
            move_distance *= index;
            var $current = index + 1;
            if ($current === 1) {
                move_distance -= 8;
            }
            else if ($current === total_steps) {
                move_distance += 8;
            }
            $wizard.find('.moving-tab').css('width', step_width);
            $('.moving-tab').css({
                'transform': 'translate3d(' + move_distance + 'px, 0, 0)',
                'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
            });
            $('.moving-tab').css({
                'transition': 'transform 0s'
            });
        });
    };
    CadastroDepoimentosComponent.prototype.goToDepoimentos = function () {
        this.router.navigate(['app-lista-depoimento']);
    };
    CadastroDepoimentosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cadastro-depoimentos',
            template: __webpack_require__("../../../../../src/app/cadastro-depoimentos/cadastro-depoimentos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cadastro-depoimentos/cadastro-depoimentos.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
    ], CadastroDepoimentosComponent);
    return CadastroDepoimentosComponent;
    var _a;
}());

//# sourceMappingURL=cadastro-depoimentos.component.js.map

/***/ }),

/***/ "../../../../../src/app/galeria/galeria.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n\n.card {\n    display: inline-block;\n    position: relative;\n    width: 100%;\n    margin: 25px 0;\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n    border-radius: 6px;\n    color: rgba(0,0,0, 0.87);\n    background: transparent;\n}\n.btn .material-icons {\n    vertical-align: middle;\n    font-size: 17px;\n    top: 10px;\n    position: relative;\n}\n\n.card-header {\n  text-align: center;\n}\n\nbody{\n  background: #fff;\n  color: #fff;\n  padding: 40px;\n  font-family: sans-serif;\n  max-width: 960px;\n  margin: 0 auto;\n}\n\n.gallery{\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\n[class*='thumbnail-']{\n  background: transparent;\n  width: 33.33%;\n  height: 30vw;\n  max-height: 30vw;\n  float: left;\n  padding: 5px 5px 3px 5px !important;\n  cursor: zoom-in;\n}\n\n[class*='thumbnail-'] img{\n  max-width: 100%;\n  height: auto;\n  min-height: 30vw;\n  background-repeat: no-repeat;\n\n}\n\n@media screen and (min-width: 990px) {\n  [class*='thumbnail-']{\n    height: 10vw !important;\n    max-height: 10vw !important;\n  }\n\n  [class*='thumbnail-'] img{\n    min-height: 10vw !important;\n  }\n\n  .gallery {\n    margin: 0 10vw 0 10vw !important;\n  }\n\n}\n\n[class*='large-']{\n  background: #fff;\n  width: 90%;\n  margin: 0 auto;\n  display: none;\n}\n\n[class*='large-'] img{\n  width: 100%;\n  max-width: 100%;\n  margin: 0 auto;\n}\n\n.prev{\n  color: #fff;\n  font-size: 60px;\n  position: absolute;\n  top: 45%;\n  left: 10px;\n  float: left;\n}\n\n.next{\n  color: #fff;\n  font-size: 60px;\n  position: absolute;\n  top: 45%;\n  right: 10px;\n  float: right;\n}\n\n.close{\n  color: #fff;\n  font-size: 30px;\n  position: absolute;\n  top: 5px;\n  cursor: zoom-out;\n  text-shadow: 2px 2px #000;\n  padding-left: 15px;\n  padding-top: 10px;\n}\n\n[class*='thumbnail-']{\n  overflow: hidden;\n  padding: 0;\n  position: relative;\n  cursor: zoom-in;\n}\n\n[class*='thumbnail-']:hover img{\n  transition: .3s linear;\n  transition-delay: 300ms;\n  -webkit-transform: /* rotate(5deg) */ scale(1.4);\n          transform: /* rotate(5deg) */ scale(1.4);\n}\n\n[class*='thumbnail-'] > .caption{\n  display: none;\n  position: absolute;\n  bottom: 0;\n  padding: 15px;\n  width: 100%;\n  background-color: black;\n  color: white;\n  opacity: 0.8;\n}\n\n[class*='thumbnail-']:hover > .caption{\n  display: block;\n\n}\n\n.icon-back {\n    vertical-align: middle;\n    top: 0px !important;\n    position: relative;\n}\n\n@media screen and (max-width: 990px) {\n  .margin-btn-back {\n    margin-left: 83vw !important;\n  }\n}\n\n@media screen and (min-width: 990px) {\n  .margin-btn-back {\n    margin-left: 75vw !important;\n  }\n}\n\n\n@media screen and (max-width:480px){\n  .caption h3{\n    font-size: 12px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/galeria/galeria.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content-gallery sem-padding\" >\n  <div class=\"container-fluid\">\n    <!--<div class=\"header text-center\">\n      <h3 class=\"title\">Galeria de conteúdo dos momentos</h3>\n    </div>-->\n\n    <div class=\"row\">\n      <div class=\"col-md-offset-11 col-md-1 col-xs-offset-9 col-xs-1\">\n        <button class=\"btn btn-round btn-just-icon btn-undo margin-btn-back\" data-placement=\"left\" (click)=\"goToResumoGallery()\">\n         <i class=\"material-icons icon-back\">undo</i>\n       </button>\n     </div>\n   </div>\n\n   <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card back-transp\">\n        <div class=\"card-content sem-padding\">\n          <div id=\"typography\">\n            <div class=\"row\" >\n              <div class=\"gallery\">\n\n                <div *ngFor=\"let c of conteudos; index as i; first as isFirst; last as isLast\">\n\n                  {{ isLast === true ? configureGalleryAfterConteudosLoaded() : null}}\n\n                  <!-- Início núcleo atômico-vídeo thumbnail-->\n\n                  <div class=\"thumbnail- wow fadeInLeft\" *ngIf=\"c.tipoConteudo==1\">\n                    <img [src]=\"getUrlThumbsVideo(c)\" alt=\"\" />\n                    <div class=\"caption\">\n                      <h3 class=\"wow fadeInUp\">{{c.titulo}}</h3>\n                    </div>\n                  </div>\n\n                  <!-- Término núcleo atômico-vídeo thumbnail-->\n\n                  <!-- Início núcleo atômico-vídeo full + comentários-->\n\n                  <div class=\"large- wow bounceInLeft\" *ngIf=\"c.tipoConteudo==1\">\n                    <vg-player>\n                      <vg-controls>\n                        <vg-play-pause [id]=\"i\"  (click)=\"playVideoFlag()\"></vg-play-pause>\n                        <vg-time-display></vg-time-display>\n                        <vg-mute></vg-mute>\n                        <vg-volume></vg-volume>\n                        <vg-scrub-bar>\n                          <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\n                          <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\n                        </vg-scrub-bar>\n                        <vg-fullscreen></vg-fullscreen>\n                      </vg-controls>\n                      <video #myVideoRef [src]=\"getUrlConteudo(c)\"\n                      [vgMedia]=\"myVideoRef\">\n                    </video>\n                  </vg-player>\n                  <span class=\"close\" (click)=\"stopVideo(i)\">✕</span>\n                  <h3>{{c.titulo}}</h3>\n\n                </div>\n                <!-- Término núcleo atômico-vídeo full + comentários-->\n\n\n\n\n                <!-- Início núcleo atômico-imagem thumbnail-->\n                <div class=\"thumbnail- wow fadeInDown\" *ngIf=\"c.tipoConteudo==0\">\n                  <img [src]=\"getUrlConteudo(c)\" alt=\"\" />\n                  <div class=\"caption\">\n                    <h3 class=\"wow fadeInUp\">{{c.titulo}}</h3>\n                  </div>\n                </div>\n\n                <!-- Término núcleo atômico-imagem thumbnail-->\n\n                <!-- Início núcleo atômico-imagem full + comentários-->\n\n                <div class=\"large- wow bounceInDown\" *ngIf=\"c.tipoConteudo==0\">\n                  <img [src]=\"getUrlConteudo(c)\" alt=\"\" />\n                  <span class=\"close\">X</span>\n                  <h3>{{c.titulo}}</h3>\n                </div>\n\n                <!-- Término núcleo atômico-imagem full + comentários-->\n\n              </div>\n\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/galeria/galeria.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaleriaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_conteudo_service__ = __webpack_require__("../../../../../src/app/services/conteudo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_momento_service__ = __webpack_require__("../../../../../src/app/services/momento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_host_service__ = __webpack_require__("../../../../../src/app/services/host.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GaleriaComponent = (function () {
    function GaleriaComponent(conteudoService, momentoService, userService, hostService, router) {
        this.conteudoService = conteudoService;
        this.momentoService = momentoService;
        this.userService = userService;
        this.hostService = hostService;
        this.router = router;
        this.conteudosConfigurados = false;
        this.videoPlayingFlag = false;
    }
    GaleriaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.momentoService.getMomentoById(+localStorage.getItem("currentIdMomentoToGallery")).subscribe(function (momentoResponse) {
            _this.momentoAtual = JSON.parse(JSON.parse(JSON.stringify(momentoResponse))._body);
            _this.conteudoService.getConteudosByMomento(_this.momentoAtual).subscribe(function (conteudosResponse) {
                _this.conteudos = JSON.parse(JSON.parse(JSON.stringify(conteudosResponse))._body);
                console.log("Conteudo da Galeria:");
                console.log(_this.conteudos);
            }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
    };
    GaleriaComponent.prototype.showHide = function (el) {
        var display = document.getElementById(el).style.display;
        if (display == "none")
            document.getElementById(el).style.display = 'block';
        else
            document.getElementById(el).style.display = 'none';
    };
    GaleriaComponent.prototype.configureThumbsAndLarges = function () {
        $(document).ready(function () {
            $("[class^='thumbnail-']").click(function () {
                $("[class^='thumbnail-']").slideToggle("fast");
                $(this).next("[class^='large-']").slideToggle();
            });
            $(".close").click(function () {
                $("[class^='large-']:visible").toggle();
                $("[class^='thumbnail-']").fadeToggle("fast");
                ;
            });
        });
    };
    GaleriaComponent.prototype.configureGalleryAfterConteudosLoaded = function () {
        if (!this.conteudosConfigurados) {
            this.configureThumbsAndLarges();
            this.conteudosConfigurados = true;
        }
    };
    GaleriaComponent.prototype.playVideoFlag = function () {
        this.videoPlayingFlag = true;
    };
    GaleriaComponent.prototype.stopVideo = function (id) {
        if (this.videoPlayingFlag) {
            document.getElementById(id).click();
            this.videoPlayingFlag = false;
        }
    };
    GaleriaComponent.prototype.ngAfterViewInit = function () {
        this.configureThumbsAndLarges();
        /*      this.testeVideo1 = document.getElementById('0').click();
        */
    };
    GaleriaComponent.prototype.getUrlThumbsVideo = function () {
        return "assets/img/thumbnail-video.png";
    };
    GaleriaComponent.prototype.getUrlConteudo = function (conteudo) {
        if (conteudo) {
            /*console.log("UrL"+this.hostService.host + this.momentoAtual.urlFoto);*/
            return this.hostService.host + conteudo.url;
        }
        return "assets/img/login-imersa.png";
    };
    GaleriaComponent.prototype.goToResumoGallery = function (momento) {
        localStorage.setItem("currentIdMomentoToResumoGallery", this.momentoAtual.momentoId.toString());
        localStorage.setItem("currentEmailUserEdit", this.momentoAtual.user.email);
        this.router.navigate(['/app-resumo-galeria']);
    };
    GaleriaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-galeria',
            template: __webpack_require__("../../../../../src/app/galeria/galeria.component.html"),
            styles: [__webpack_require__("../../../../../src/app/galeria/galeria.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_conteudo_service__["a" /* ConteudoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_conteudo_service__["a" /* ConteudoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_momento_service__["a" /* MomentoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_momento_service__["a" /* MomentoService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_host_service__["a" /* HostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_host_service__["a" /* HostService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _e || Object])
    ], GaleriaComponent);
    return GaleriaComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=galeria.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.admin.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardAdmin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardAdmin = (function () {
    function AuthGuardAdmin(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    AuthGuardAdmin.prototype.canActivate = function () {
        if (this.loginService.checkAdmin()) {
            // It´s admin so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/pages/login']);
        return false;
    };
    AuthGuardAdmin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */]) === "function" && _b || Object])
    ], AuthGuardAdmin);
    return AuthGuardAdmin;
    var _a, _b;
}());

//# sourceMappingURL=auth.guard.admin.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.loginService.checkLogin()) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/pages/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */]) === "function" && _b || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());

//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/admin/admin-layout.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\">\n    <div class=\"sidebar\" data-active-color=\"purple\" data-background-color=\"white\" data-image=\"../assets/img/login-imersa-white.png\">\n        <app-sidebar-cmp></app-sidebar-cmp>\n        <div class=\"sidebar-background\" style=\"background-image: url(assets/img/login-imersa-white.png)\"></div>\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar-cmp></app-navbar-cmp>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"!isMap()\">\n            <app-footer-cmp></app-footer-cmp>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layouts/admin/admin-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__md_md_module__ = __webpack_require__("../../../../../src/app/md/md.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminLayoutComponent = (function () {
    function AdminLayoutComponent(router, location) {
        this.router = router;
        this.location = location;
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]; }).subscribe(function (event) {
            _this.navbar.sidebarClose();
        });
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            var $main_panel = $('.main-panel');
            $main_panel.perfectScrollbar();
        }
        this.navItems = [
            { type: __WEBPACK_IMPORTED_MODULE_2__md_md_module__["b" /* NavItemType */].NavbarLeft, title: 'Dashboard', iconClass: 'fa fa-dashboard' },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__md_md_module__["b" /* NavItemType */].NavbarRight,
                title: '',
                iconClass: 'fa fa-bell-o',
                numNotifications: 5,
                dropdownItems: [
                    { title: 'Notification 1' },
                    { title: 'Notification 2' },
                    { title: 'Notification 3' },
                    { title: 'Notification 4' },
                    { title: 'Another Notification' }
                ]
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__md_md_module__["b" /* NavItemType */].NavbarRight,
                title: '',
                iconClass: 'fa fa-list',
                dropdownItems: [
                    { iconClass: 'pe-7s-mail', title: 'Messages' },
                    { iconClass: 'pe-7s-help1', title: 'Help Center' },
                    { iconClass: 'pe-7s-tools', title: 'Settings' },
                    'separator',
                    { iconClass: 'pe-7s-lock', title: 'Lock Screen' },
                    { iconClass: 'pe-7s-close-circle', title: 'Log Out' }
                ]
            },
            { type: __WEBPACK_IMPORTED_MODULE_2__md_md_module__["b" /* NavItemType */].NavbarLeft, title: 'Search', iconClass: 'fa fa-search' },
            { type: __WEBPACK_IMPORTED_MODULE_2__md_md_module__["b" /* NavItemType */].NavbarLeft, title: 'Account' },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__md_md_module__["b" /* NavItemType */].NavbarLeft,
                title: 'Dropdown',
                dropdownItems: [
                    { title: 'Action' },
                    { title: 'Another action' },
                    { title: 'Something' },
                    { title: 'Another action' },
                    { title: 'Something' },
                    'separator',
                    { title: 'Separated link' },
                ]
            },
            { type: __WEBPACK_IMPORTED_MODULE_2__md_md_module__["b" /* NavItemType */].NavbarLeft, title: 'Log out' }
        ];
    };
    AdminLayoutComponent.prototype.isMap = function () {
        if (this.location.prepareExternalUrl(this.location.path()) === '/maps/fullscreen') {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sidebar'),
        __metadata("design:type", Object)
    ], AdminLayoutComponent.prototype, "sidebar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__["a" /* NavbarComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__["a" /* NavbarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__["a" /* NavbarComponent */]) === "function" && _a || Object)
    ], AdminLayoutComponent.prototype, "navbar", void 0);
    AdminLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__("../../../../../src/app/layouts/admin/admin-layout.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _c || Object])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=admin-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/auth/auth-layout.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/layouts/auth/auth-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthLayoutComponent = (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__("../../../../../src/app/layouts/auth/auth-layout.component.html")
        })
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());

//# sourceMappingURL=auth-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/lista-depoimento/lista-depoimento.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lista-depoimento/lista-depoimento.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n        <div class=\"row\">\n        \t <div class=\"col-md-offset-10 col-xs-offset-6\">\n                 <button class=\"btn btn-round btn-just-icon btn-imersa pull-left\" rel=\"tooltip\" title=\"Add Conteudo\" data-placement=\"left\" (click)=\"goToCadastroDepoimentos()\" style=\"margin-left: 25px; margin-right: 25px;\">\n                    <i class=\"material-icons\">add</i>\n                 </button>\n                 <button class=\"btn btn-round btn-just-icon btn-undo\" data-placement=\"left\" (click)=\"goToTimeline()\">\n\t               <i class=\"material-icons\">undo</i>\n\t            </button>\n             </div>\n\t\t\t\t<!-- Card Aberto - Inicio -->\n            \t<div class=\"col-md-12\">\n                    <div class=\"card card-dep\">\n                        <div class=\"card-content\">\n\n                        \t<div class=\"row\">\n\t                        \t<div class=\"user\">\n\t                        \t\t<div class=\"col-md-2 col-xs-3\">\n\t\t\t\t\t\t                <div class=\"photo img-user-dep\">\n\t\t\t\t\t\t                \t<img class=\"img-user-dep\" src=\"assets/img/placeholder.jpg\"/>\n\t\t\t\t\t\t                </div>\n\t\t\t\t\t\t            </div>\n\t\t\t\t\t\t            <div class=\"col-md-8 col-xs-7\">\n\t\t\t\t\t            \t\t<h4 class=\"card-title bold\">Mari Fernandes</h4>\n\t\t\t\t\t            \t\t<div class=\"text-dep\">\n\t\t\t\t                            Minha melhor amiga se casou...\n\t\t\t\t                        </div>\n\t\t\t\t\t            \t</div>\n\t\t\t\t\t            \t<div class=\"col-md-2 col-xs-1\">\n\t\t\t\t\t            \t\t<small>17 Jan</small>\n\t\t\t\t\t            \t</div>\n\t\t\t\t\t        \t</div>\n\t\t\t\t\t        </div>\n\n\t\t\t\t\t\t\t<div class=\"row\"><br>\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<img class=\"img-conteudo-dep\" src=\"assets/img/image_placeholder.jpg\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-xs-5\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" value=\"\" placeholder=\"Depoimento em texto\" class=\"form-control\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-2 col-xs-1\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-simple\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">chat_bubble</i>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-2 col-xs-1\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-simple\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">favorite</i>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-2 col-xs-1\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-simple\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">bookmark</i>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-2 col-xs-1\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-simple\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">share</i>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\n                        </div>\n                    </div>\n                </div>\n                <!-- Card Aberto -- Fim -->\n\n                <!-- Card Fechado - Inicio -->\n            \t<div class=\"col-md-12\">\n                    <div class=\"card card-dep\">\n                        <div class=\"card-content\">\n\n                        \t<div class=\"row\">\n\t                        \t<div class=\"user\">\n\t                        \t\t<div class=\"col-md-2 col-xs-3\">\n\t\t\t\t\t\t                <div class=\"photo img-user-dep\">\n\t\t\t\t\t\t                \t<img class=\"img-user-dep\" src=\"assets/img/placeholder.jpg\"/>\n\t\t\t\t\t\t                </div>\n\t\t\t\t\t\t            </div>\n\t\t\t\t\t\t            <div class=\"col-md-8 col-xs-7\">\n\t\t\t\t\t            \t\t<h4 class=\"card-title bold\">Ju Almeida</h4>\n\t\t\t\t\t            \t\t<div class=\"text-dep\">\n\t\t\t\t                            Nossos snaps da festa\n\t\t\t\t                        </div>\n\t\t\t\t\t            \t</div>\n\t\t\t\t\t            \t<div class=\"col-md-2 col-xs-1\">\n\t\t\t\t\t            \t\t<small>17 Jan</small>\n\t\t\t\t\t            \t</div>\n\t\t\t\t\t        \t</div>\n\t\t\t\t\t        </div>\n\n                        </div>\n                    </div>\n                </div>\n                <!-- Card Fechado - Fim -->\n\n                <!-- Card Fechado - Inicio -->\n            \t<div class=\"col-md-12\">\n                    <div class=\"card card-dep\">\n                        <div class=\"card-content\">\n\n                        \t<div class=\"row\">\n\t                        \t<div class=\"user\">\n\t                        \t\t<div class=\"col-md-2 col-xs-3\">\n\t\t\t\t\t\t                <div class=\"photo img-user-dep\">\n\t\t\t\t\t\t                \t<img class=\"img-user-dep\" src=\"assets/img/placeholder.jpg\"/>\n\t\t\t\t\t\t                </div>\n\t\t\t\t\t\t            </div>\n\t\t\t\t\t\t            <div class=\"col-md-8 col-xs-7\">\n\t\t\t\t\t            \t\t<h4 class=\"card-title bold\">Tio Ronaldo</h4>\n\t\t\t\t\t            \t\t<div class=\"text-dep\">\n\t\t\t\t                            Um beijo para minha sobrinha linda\n\t\t\t\t                        </div>\n\t\t\t\t\t            \t</div>\n\t\t\t\t\t            \t<div class=\"col-md-2 col-xs-1\">\n\t\t\t\t\t            \t\t<small>16 Jan</small>\n\t\t\t\t\t            \t</div>\n\t\t\t\t\t        \t</div>\n\t\t\t\t\t        </div>\n\n                        </div>\n                    </div>\n                </div>\n                <!-- Card Fechado - Fim -->\n        </div>\n        <!-- end row -->\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/lista-depoimento/lista-depoimento.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaDepoimentoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListaDepoimentoComponent = (function () {
    function ListaDepoimentoComponent(router) {
        this.router = router;
    }
    ListaDepoimentoComponent.prototype.ngOnInit = function () {
        this.emailLocal = localStorage.getItem("currentEmailUserEdit");
    };
    ListaDepoimentoComponent.prototype.goToCadastroDepoimentos = function () {
        this.router.navigate(['/app-cadastro-depoimentos']);
    };
    ListaDepoimentoComponent.prototype.goToTimeline = function () {
        localStorage.setItem("currentEmailUserEdit", this.emailLocal);
        this.router.navigate(['/observador/timeline']);
    };
    ListaDepoimentoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lista-depoimento',
            template: __webpack_require__("../../../../../src/app/lista-depoimento/lista-depoimento.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lista-depoimento/lista-depoimento.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
    ], ListaDepoimentoComponent);
    return ListaDepoimentoComponent;
    var _a;
}());

//# sourceMappingURL=lista-depoimento.component.js.map

/***/ }),

/***/ "../../../../../src/app/md/md-chart/md-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/md/md-chart/md-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"header\">\n    <h4 class=\"title\">{{ title }}</h4>\n    <p class=\"category\">{{ subtitle }}</p>\n  </div>\n  <div class=\"content\">\n    <div [attr.id]=\"chartId\" class=\"ct-chart {{ chartClass }}\"></div>\n\n    <div class=\"footer\">\n      <div class=\"legend\">\n        <span *ngFor=\"let item of legendItems\">\n          <i [ngClass]=\"item.imageClass\"></i> {{ item.title }}\n        </span>\n      </div>\n      <hr *ngIf=\"withHr\">\n      <div class=\"stats\">\n        <i [ngClass]=\"footerIconClass\"></i> {{ footerText }}\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/md/md-chart/md-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ChartType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartType;
(function (ChartType) {
    ChartType[ChartType["Pie"] = 0] = "Pie";
    ChartType[ChartType["Line"] = 1] = "Line";
    ChartType[ChartType["Bar"] = 2] = "Bar";
})(ChartType || (ChartType = {}));
var MdChartComponent = (function () {
    var MdChartComponent = MdChartComponent_1 = function MdChartComponent() {
    };
    MdChartComponent.prototype.ngOnInit = function () {
        this.chartId = "md-chart-" + MdChartComponent_1.currentId++;
    };
    MdChartComponent.prototype.ngAfterViewInit = function () {
        switch (this.chartType) {
            case ChartType.Pie:
                new __WEBPACK_IMPORTED_MODULE_1_chartist__["Pie"]("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
            case ChartType.Line:
                new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
            case ChartType.Bar:
                new __WEBPACK_IMPORTED_MODULE_1_chartist__["Bar"]("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
        }
    };
    MdChartComponent.currentId = 1;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "subtitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "chartClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], MdChartComponent.prototype, "chartType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MdChartComponent.prototype, "chartData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MdChartComponent.prototype, "chartOptions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], MdChartComponent.prototype, "chartResponsive", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "footerIconClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "footerText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], MdChartComponent.prototype, "legendItems", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], MdChartComponent.prototype, "withHr", void 0);
    MdChartComponent = MdChartComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-md-chart',
            template: __webpack_require__("../../../../../src/app/md/md-chart/md-chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/md/md-chart/md-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MdChartComponent);
    return MdChartComponent;
    var MdChartComponent_1;
}());

//# sourceMappingURL=md-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/md/md-table/md-table.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"content table-responsive\">\n    <table class=\"table\">\n      <tbody>\n          <tr *ngFor=\"let row of data.dataRows\">\n            <!-- <td *ngFor=\"let cell of row\">{{ cell }}</td> -->\n            <td>\n                <div class=\"flag\">\n                    <img src=\"../../../assets/img/flags/{{row[0]}}.png\" alt=\"\">\n                </div>\n            </td>\n            <td>\n                {{row[1]}}\n            </td>\n            <td class=\"text-right\">\n                {{row[2]}}\n            </td>\n            <td class=\"text-right\">\n                {{row[3]}}\n            </td>\n          </tr>\n      </tbody>\n    </table>\n\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/md/md-table/md-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdTableComponent; });
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

var MdTableComponent = (function () {
    function MdTableComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "subtitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "cardClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MdTableComponent.prototype, "data", void 0);
    MdTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-md-table',
            template: __webpack_require__("../../../../../src/app/md/md-table/md-table.component.html"),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], MdTableComponent);
    return MdTableComponent;
}());

//# sourceMappingURL=md-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/md/md.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NavItemType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__md_table_md_table_component__ = __webpack_require__("../../../../../src/app/md/md-table/md-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__md_chart_md_chart_component__ = __webpack_require__("../../../../../src/app/md/md-chart/md-chart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NavItemType;
(function (NavItemType) {
    NavItemType[NavItemType["Sidebar"] = 1] = "Sidebar";
    NavItemType[NavItemType["NavbarLeft"] = 2] = "NavbarLeft";
    NavItemType[NavItemType["NavbarRight"] = 3] = "NavbarRight"; // Right-aligned link on navbar in desktop mode, shown above sidebar items on collapsed sidebar in mobile mode
})(NavItemType || (NavItemType = {}));
var MdModule = (function () {
    function MdModule() {
    }
    MdModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__md_table_md_table_component__["a" /* MdTableComponent */],
                __WEBPACK_IMPORTED_MODULE_4__md_chart_md_chart_component__["a" /* MdChartComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__md_table_md_table_component__["a" /* MdTableComponent */],
                __WEBPACK_IMPORTED_MODULE_4__md_chart_md_chart_component__["a" /* MdChartComponent */]
            ]
        })
    ], MdModule);
    return MdModule;
}());

//# sourceMappingURL=md.module.js.map

/***/ }),

/***/ "../../../../../src/app/models/momento.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Momento; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__("../../../../../src/app/models/user.ts");

var Momento = (function () {
    function Momento() {
        this.user = new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */]();
    }
    return Momento;
}());

//# sourceMappingURL=momento.js.map

/***/ }),

/***/ "../../../../../src/app/models/tipo_evento.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipoEvento; });
var TipoEvento;
(function (TipoEvento) {
    TipoEvento[TipoEvento["casamento"] = 0] = "casamento";
    TipoEvento[TipoEvento["disney"] = 1] = "disney";
    TipoEvento[TipoEvento["formatura"] = 2] = "formatura";
})(TipoEvento || (TipoEvento = {}));
//# sourceMappingURL=tipo_evento.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tipo_evento__ = __webpack_require__("../../../../../src/app/models/tipo_evento.ts");

var User = (function () {
    function User() {
        this.isAdmin = true;
        this.tipoEvento = __WEBPACK_IMPORTED_MODULE_0__tipo_evento__["a" /* TipoEvento */].casamento;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/resumo-galeria/resumo-galeria.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n\n.card {\n    display: inline-block;\n    position: relative;\n    width: 100%;\n    margin: 25px 0;\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n    border-radius: 6px;\n    color: rgba(0,0,0, 0.87);\n    background: #fff;\n}\n.btn .material-icons {\n    vertical-align: middle;\n    font-size: 17px;\n    top: 10px;\n    position: relative;\n}\n\n.card-header {\n  text-align: center;\n}\n\nbody{\n  background: #fff;\n  color: #fff;\n  padding: 40px;\n  font-family: sans-serif;\n  max-width: 960px;\n  margin: 0 auto;\n}\n\n.gallery{\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\n[class*='thumbnail-']{\n  background: transparent;\n  width: 33.33%;\n  height: 30vw;\n  max-height: 30vw;\n  float: left;\n  padding: 5px 5px 3px 5px !important;\n}\n\n[class*='thumbnail-'] img{\n  max-width: 100%;\n  height: auto;\n  min-height: 30vw;\n  background-repeat: no-repeat;\n\n}\n\n@media screen and (min-width: 990px) {\n  [class*='thumbnail-']{\n    height: 13vw !important;\n    max-height: 13vw !important;\n  }\n\n  [class*='thumbnail-'] img{\n    min-height: 13vw !important;\n  }\n\n  .gallery {\n    margin: 0 3vw 0 3vw !important;\n  }\n\n}\n\n[class*='large-']{\n  background: #fff;\n  width: 90%;\n  margin: 0 auto;\n  display: none;\n}\n\n[class*='large-'] img{\n  width: 100%;\n  max-width: 100%;\n  margin: 0 auto;\n}\n\n.prev{\n  color: #fff;\n  font-size: 60px;\n  position: absolute;\n  top: 45%;\n  left: 10px;\n  float: left;\n}\n\n.next{\n  color: #fff;\n  font-size: 60px;\n  position: absolute;\n  top: 45%;\n  right: 10px;\n  float: right;\n}\n\n.close{\n  color: #fff;\n  font-size: 30px;\n  position: absolute;\n  top: 5px;\n  float: right;\n  cursor: zoom-out;\n  text-shadow: 2px 2px #000;\n  padding-left: 15px;\n  padding-top: 10px;\n}\n\n[class*='thumbnail-']{\n  overflow: hidden;\n  padding: 0;\n  position: relative;\n}\n\n[class*='thumbnail-'] > .caption{\n  display: none;\n  position: absolute;\n  bottom: 0;\n  padding: 15px;\n  width: 100%;\n  background-color: black;\n  color: white;\n  opacity: 0.8;\n}\n\n[class*='thumbnail-']:hover > .caption{\n  display: block;\n\n}\n\n@media screen and (max-width:480px){\n  .caption h3{\n    font-size: 12px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/resumo-galeria/resumo-galeria.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <!--<div class=\"header text-center\">\n      <h3 class=\"title\">Galeria de conteúdo dos momentos</h3>\n    </div>-->\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-content\">\n              <h3 class=\"text-center\">{{momento.titulo}}</h3><br>\n            <div id=\"typography\">\n              <div class=\"row\" >\n                <div class=\"gallery\">\n\n                  <div *ngFor=\"let c of conteudos; index as i; first as isFirst; last as isLast\">\n\n                    {{ isLast === true ? configureGalleryAfterConteudosLoaded() : null}}\n\n                    <!-- Início núcleo atômico-vídeo thumbnail-->\n\n                    <div class=\"thumbnail- wow fadeInLeft\" *ngIf=\"c.tipoConteudo==1\">\n                      <img [src]=\"getUrlThumbsVideo(c)\" alt=\"\" />\n                    </div>\n\n                    <!-- Término núcleo atômico-vídeo thumbnail-->\n\n\n\n\n                  <!-- Início núcleo atômico-imagem thumbnail-->\n                  <div class=\"thumbnail-wow fadeInDown\" *ngIf=\"c.tipoConteudo==0\">\n                    <img [src]=\"getUrlConteudo(c)\" alt=\"\" />\n                  </div>\n\n                  <!-- Término núcleo atômico-imagem thumbnail-->\n\n                </div>\n\n              </div>\n\n            </div>\n          </div>\n\n          <div class=\"row\">\n              <br><h5 class=\"text-center\">{{momento.descricao}}</h5><br>\n              <input type=\"button\" class=\"btn btn-default btn-lg pull-left\" name=\"back\" value=\"Voltar\" (click)=\"goToTimeline()\"/>\n              <input type=\"button\" class=\"btn btn-primary btn-lg pull-right\" name=\"next\" value=\"Entrar\"\n              (click)=\"goToGallery()\"/>\n          </div>\n\n        </div>\n\n  </div>\n</div>\n</div>\n</div>\n</div>\n\n<div class=\"gallery-footer\">\n  <div class=\"row\">\n    <div class=\"btn-group btn-group-justified\">\n        <a class=\"btn btn-icon-pad\"> <img src=\"assets/img/icon-gallery-footer-imersa.png\" height=\"35px\" />  </a>\n        <a class=\"btn btn-icon-pad\" (click)=\"goToListaDepoimentos()\"> <img src=\"assets/img/icon-gallery-footer-bottle.png\" height=\"35px\" /> </a>\n        <a class=\"btn btn-icon-pad\"> <img src=\"assets/img/icon-gallery-footer-map.png\" height=\"35px\" /> </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/resumo-galeria/resumo-galeria.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumoGaleriaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_momento__ = __webpack_require__("../../../../../src/app/models/momento.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_conteudo_service__ = __webpack_require__("../../../../../src/app/services/conteudo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_momento_service__ = __webpack_require__("../../../../../src/app/services/momento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_host_service__ = __webpack_require__("../../../../../src/app/services/host.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_local_storage_service__ = __webpack_require__("../../../../../src/app/services/local-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ResumoGaleriaComponent = (function () {
    function ResumoGaleriaComponent(conteudoService, momentoService, hostService, router, userService, localStorageService) {
        this.conteudoService = conteudoService;
        this.momentoService = momentoService;
        this.hostService = hostService;
        this.router = router;
        this.userService = userService;
        this.localStorageService = localStorageService;
        this.conteudosConfigurados = false;
        this.conteudos = [];
        this.momento = new __WEBPACK_IMPORTED_MODULE_1__models_momento__["a" /* Momento */]();
    }
    ResumoGaleriaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.momentoService.getMomentoById(+localStorage.getItem("currentIdMomentoToResumoGallery")).subscribe(function (momentoResponse) {
            _this.momento = JSON.parse(JSON.parse(JSON.stringify(momentoResponse))._body);
            _this.conteudoService.getConteudosByMomento(_this.momento).subscribe(function (conteudosResponse) {
                var ateSeisConteudos = JSON.parse(JSON.parse(JSON.stringify(conteudosResponse))._body);
                for (var i = 0; i < ateSeisConteudos.length; i++) {
                    _this.conteudos.push(ateSeisConteudos[i]);
                    if (i == 5)
                        break;
                }
            }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
    };
    ResumoGaleriaComponent.prototype.configureGalleryAfterConteudosLoaded = function () {
        if (!this.conteudosConfigurados) {
            this.conteudosConfigurados = true;
        }
    };
    ResumoGaleriaComponent.prototype.getUrlThumbsVideo = function () {
        return "assets/img/thumbnail-video.png";
    };
    ResumoGaleriaComponent.prototype.getUrlConteudo = function (conteudo) {
        if (conteudo) {
            return this.hostService.host + conteudo.url;
        }
        return "assets/img/login-imersa.png";
    };
    ResumoGaleriaComponent.prototype.goToGallery = function () {
        localStorage.setItem("currentIdMomentoToGallery", this.momento.momentoId.toString());
        this.router.navigate(['/app-galeria']);
    };
    ResumoGaleriaComponent.prototype.goToTimeline = function () {
        var _this = this;
        this.userService.getUserByEmail(localStorage.getItem("currentEmailUserEdit")).subscribe(function (userResponse) {
            var user = JSON.parse(JSON.parse(JSON.stringify(userResponse))._body);
            _this.localStorageService.userEditAtual = user;
            localStorage.setItem("currentEmailUserEdit", user.email);
            _this.localStorageService.componente_metodo = { componente: 'DataTableComponent',
                metodo: 'goToTimeline' };
            _this.router.navigate(['/observador/timeline']);
        }, function (error) { return console.log(error); });
    };
    ResumoGaleriaComponent.prototype.goToListaDepoimentos = function () {
        this.router.navigate(['/app-lista-depoimento']);
    };
    ResumoGaleriaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-resumo-galeria',
            template: __webpack_require__("../../../../../src/app/resumo-galeria/resumo-galeria.component.html"),
            styles: [__webpack_require__("../../../../../src/app/resumo-galeria/resumo-galeria.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_conteudo_service__["a" /* ConteudoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_conteudo_service__["a" /* ConteudoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_momento_service__["a" /* MomentoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_momento_service__["a" /* MomentoService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_host_service__["a" /* HostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_host_service__["a" /* HostService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_local_storage_service__["a" /* LocalStorageService */]) === "function" && _f || Object])
    ], ResumoGaleriaComponent);
    return ResumoGaleriaComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=resumo-galeria.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/conteudo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConteudoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_host_service__ = __webpack_require__("../../../../../src/app/services/host.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConteudoService = (function () {
    function ConteudoService(http, hostService) {
        this.http = http;
        this.hostService = hostService;
    }
    ConteudoService.prototype.saveConteudo = function (conteudo) {
        var url = this.hostService.host + "rest/super/conteudo/save";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(url, JSON.stringify(conteudo), { headers: headers });
    };
    ConteudoService.prototype.getConteudoById = function (conteudoId) {
        var url = this.hostService.host + "rest/super/conteudo/getByID";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(url, JSON.stringify(conteudoId), { headers: headers });
    };
    ConteudoService.prototype.getConteudosByMomento = function (momento) {
        var url = this.hostService.host + "rest/simple/conteudo/conteudos";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(url, JSON.stringify(momento), { headers: headers });
    };
    ConteudoService.prototype.deleteConteudoById = function (conteudoId) {
        var tokenUrl1 = this.hostService.host + "rest/super/conteudo/deleteById";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl1, JSON.stringify(conteudoId), { headers: headers1 });
    };
    ConteudoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_host_service__["a" /* HostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_host_service__["a" /* HostService */]) === "function" && _b || Object])
    ], ConteudoService);
    return ConteudoService;
    var _a, _b;
}());

//# sourceMappingURL=conteudo.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_host_service__ = __webpack_require__("../../../../../src/app/services/host.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_local_storage_service__ = __webpack_require__("../../../../../src/app/services/local-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FileService = (function () {
    function FileService(http, hostService, localStorageService) {
        this.http = http;
        this.hostService = hostService;
        this.localStorageService = localStorageService;
        this.fileIsInside = false;
        this.fileMomentoIsInside = false;
        this.fileConteudoIsInside = false;
        this.fileIsUploaded = false;
        this.fileOwner = [];
        this.filesToUpload = [];
    }
    FileService.prototype.resetService = function () {
        this.filesToUpload = [];
        this.fileIsUploaded = false;
        this.fileIsInside = false;
        this.fileOwner = [];
        this.fileMomentoIsInside = false;
        this.fileConteudoIsInside = false;
    };
    FileService.prototype.fileNameCheck = function (filename, ouwner, fileInput) {
        if (ouwner == 'momento' || ouwner == 'usuario') {
            return this.fileNameCheckFoto(filename, fileInput);
        }
        else {
            return this.fileNameCheckFotoEVideo(filename, fileInput);
        }
    };
    FileService.prototype.fileNameCheckFoto = function (filename, fileInput) {
        if (/\.(jpg)$/i.test(filename) || /\.(jpeg)$/i.test(filename) || /\.(png)$/i.test(filename)) {
            this.fileMomentoIsInside = true;
            return true;
        }
        else {
            return false;
        }
    };
    FileService.prototype.fileNameCheckFotoEVideo = function (filename, fileInput) {
        if (/\.(jpg)$/i.test(filename) || /\.(jpeg)$/i.test(filename) || /\.(png)$/i.test(filename)
            || /\.(mpeg)$/i.test(filename) || /\.(mpg)$/i.test(filename) || /\.(mp4)$/i.test(filename)) {
            this.fileConteudoIsInside = true;
            return true;
        }
        else {
            return false;
        }
    };
    FileService.prototype.fileChangeEvent = function (fileInput, ouwner) {
        if (this.fileNameCheck(fileInput.target.files[0].name, ouwner, fileInput)) {
            this.filesToUpload = fileInput.target.files;
            this.fileIsInside = true;
            this.fileIsUploaded = true;
        }
        else {
            this.fileIsInside = false;
        }
    };
    FileService.prototype.fileChangeEventWizard = function (fileInput, ouwner) {
        if (this.fileNameCheck(fileInput.target.files[0].name, ouwner, fileInput)) {
            this.filesToUpload.push(fileInput.target.files[0]);
            this.fileIsInside = true;
            this.fileOwner.push(ouwner);
            this.fileIsUploaded = true;
            return true;
        }
        else {
            this.fileIsInside = false;
            return false;
        }
    };
    FileService.prototype.upload = function () {
        return this.makeFileRequest(this.hostService.host + "rest/super/file/upload", this.fileOwner, this.filesToUpload, this.fileIsInside);
    };
    FileService.prototype.makeFileRequest = function (url, params, files, fileIsInside) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            console.log(files.length);
            for (var i = 0; i < files.length; i++) {
                formData.append(params[i], files[i], files[i].name);
                console.log(files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        fileIsInside = false;
                        localStorage.setItem("nomesArquivosSalvosTemp", xhr.response);
                        resolve();
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));
            xhr.send(formData);
        });
    };
    FileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_host_service__["a" /* HostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_host_service__["a" /* HostService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_local_storage_service__["a" /* LocalStorageService */]) === "function" && _c || Object])
    ], FileService);
    return FileService;
    var _a, _b, _c;
}());

//# sourceMappingURL=file.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/host.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostService; });
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

var HostService = (function () {
    /*	host: string = "http://localhost:8080/imersa_backend-beta/" */
    /*host: string = "http://192.168.0.3:9000/imersa/";*/
    function HostService() {
        /*host: string = "http://localhost:900S0/"*/
        /*host: string = "http://localhost:9000/imersa/"*/
        /*host: string = "http://192.168.0.20:9000/imersa/";*/
        /*	host: string = "http://localhost:9000/"*/
        /*host: string = "http://localhost:8080/"*/
        /*host: string = "http://localhost:7089/" */
        /*host: string = "http://localhost:8080/imersa_backend-req4/"*/
        this.host = "http://ykssistemas.dyndns.org:50001/imersa/";
    }
    HostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HostService);
    return HostService;
}());

//# sourceMappingURL=host.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/local-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalStorageService = (function () {
    function LocalStorageService(userService) {
        var _this = this;
        this.userService = userService;
        //eliminar substituindo por localstoage pois perde o estado quando autaliza página
        this.componente_metodo = {
            componente: '', metodo: ''
        };
        this.userService.getUserByEmail(localStorage.getItem("currentEmail")).subscribe(function (user) {
            _this.userLogado = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        }, function (error) { return console.log(error); });
    }
    LocalStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
    ], LocalStorageService);
    return LocalStorageService;
    var _a;
}());

//# sourceMappingURL=local-storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_host_service__ = __webpack_require__("../../../../../src/app/services/host.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = (function () {
    function LoginService(http, userService, hostService) {
        this.http = http;
        this.userService = userService;
        this.hostService = hostService;
        this.userLogado = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]();
        this.isAdminLocal = false;
    }
    LoginService.prototype.sendCredential = function (model) {
        var tokenUrl1 = this.hostService.host + "login";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(tokenUrl1, JSON.stringify(model), { headers: headers1 });
    };
    LoginService.prototype.sendToken = function (token) {
        var tokenUrl2 = this.hostService.host + "rest/simple/user/token";
        var getHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + token });
        return this.http.get(tokenUrl2, { headers: getHeaders });
    };
    LoginService.prototype.logout = function () {
        localStorage.setItem("token", "");
        localStorage.setItem("currentUserName", '');
        localStorage.setItem("currentIsAdmin", '');
    };
    LoginService.prototype.checkLogin = function () {
        if (localStorage.getItem("currentEmail") != null && localStorage.getItem("currentEmail") != '' && localStorage.getItem("token") != null && localStorage.getItem("token") != '') {
            return true;
        }
        else {
            return false;
        }
    };
    LoginService.prototype.checkAdmin = function () {
        if (localStorage.getItem("currentIsAdmin") == "true" && this.checkLogin()) {
            return true;
        }
        else {
            return false;
        }
    };
    LoginService.prototype.checkAdminObservable = function (email) {
        var _this = this;
        var tokenUrl = this.hostService.host + "rest/simple/user/email";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl, email, { headers: headers }).map(function (userResponse) {
            var user = JSON.parse(JSON.parse(JSON.stringify(userResponse))._body);
            return (user.isAdmin && _this.checkLogin());
        });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_host_service__["a" /* HostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_host_service__["a" /* HostService */]) === "function" && _c || Object])
    ], LoginService);
    return LoginService;
    var _a, _b, _c;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/momento.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_host_service__ = __webpack_require__("../../../../../src/app/services/host.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MomentoService = (function () {
    function MomentoService(http, hostService) {
        this.http = http;
        this.hostService = hostService;
    }
    MomentoService.prototype.saveMomento = function (momento) {
        var url = this.hostService.host + "rest/super/momento/save";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(url, JSON.stringify(momento), { headers: headers });
    };
    MomentoService.prototype.getMomentosByUser = function (user) {
        var url = this.hostService.host + "rest/simple/momento/momentos";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(url, JSON.stringify(user), { headers: headers });
    };
    MomentoService.prototype.getMomentoById = function (momentoId) {
        var url = this.hostService.host + "rest/simple/momento/getById";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(url, JSON.stringify(momentoId), { headers: headers });
    };
    MomentoService.prototype.deleteMomentoById = function (momentoId) {
        var tokenUrl1 = this.hostService.host + "rest/super/momento/deleteById";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl1, JSON.stringify(momentoId), { headers: headers1 });
    };
    MomentoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_host_service__["a" /* HostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_host_service__["a" /* HostService */]) === "function" && _b || Object])
    ], MomentoService);
    return MomentoService;
    var _a, _b;
}());

//# sourceMappingURL=momento.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_host_service__ = __webpack_require__("../../../../../src/app/services/host.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterService = (function () {
    function RegisterService(http, hostService) {
        this.http = http;
        this.hostService = hostService;
    }
    RegisterService.prototype.sendUser = function (user) {
        var url = this.hostService.host + "super/register";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(user), { headers: headers1 });
    };
    RegisterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_host_service__["a" /* HostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_host_service__["a" /* HostService */]) === "function" && _b || Object])
    ], RegisterService);
    return RegisterService;
    var _a, _b;
}());

//# sourceMappingURL=register.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_host_service__ = __webpack_require__("../../../../../src/app/services/host.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http, hostService) {
        var _this = this;
        this.http = http;
        this.hostService = hostService;
        this.getUserByEmail(localStorage.getItem("currentEmail")).subscribe(function (user) {
            _this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        });
    }
    UserService.prototype.saveUser = function (user) {
        var url = this.hostService.host + "super/register";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(user), { headers: headers1 });
    };
    UserService.prototype.updateUser = function (user) {
        var url = this.hostService.host + "rest/super/user/update";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(url, JSON.stringify(user), { headers: headers });
    };
    UserService.prototype.getUserByEmail = function (email) {
        var tokenUrl = this.hostService.host + "rest/simple/user/email";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl, email, { headers: headers });
    };
    UserService.prototype.getAllUsers = function () {
        var tokenUrl = this.hostService.host + "rest/super/user/users";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl, '', { headers: headers });
    };
    UserService.prototype.deleteUserById = function (userId) {
        var tokenUrl1 = this.hostService.host + "rest/super/user/deleteById";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl1, JSON.stringify(userId), { headers: headers1 });
    };
    UserService.prototype.getUserById = function (userId) {
        var tokenUrl1 = this.hostService.host + "rest/simple/user/id";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl1, JSON.stringify(userId), { headers: headers1 });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_host_service__["a" /* HostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_host_service__["a" /* HostService */]) === "function" && _b || Object])
    ], UserService);
    return UserService;
    var _a, _b;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <!--<nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"#\">\n                        Painel de controle\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Imersa\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Cadastro\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Blog\n                    </a>\n                </li>\n            </ul>\n        </nav>-->\n        <p class=\"copyright pull-right\" style=\"color: #000000;\">\n            &copy;\n            {{test | date: 'yyyy'}}\n            YKS-Sistemas, feito com amor equipe dev..\n        </p>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
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

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer-cmp',
            template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]]
        })
    ], FooterModule);
    return FooterModule;
}());

//# sourceMappingURL=footer.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav #navbar class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container-fluid\">\n        <!--<div class=\"navbar-minimize\">\n            <button id=\"minimizeSidebar\" class=\"btn btn-round btn-white btn-fill btn-just-icon\">\n                <i class=\"material-icons visible-on-sidebar-regular\">more_vert</i>\n                <i class=\"material-icons visible-on-sidebar-mini\">view_list</i>\n            </button>\n        </div>-->\n        <div class=\"navbar-header\" style=\"color: #ffffff; font-weight: bold;\">\n            <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <!--<a class=\"navbar-brand\" href=\"{{getPath()}}\"> {{getTitle()}} </a>-->\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <div *ngIf=\"isMobileMenu()\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                   <!--<li>\n                        <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                            <i class=\"material-icons\">dashboard</i>\n                            <p class=\"hidden-lg hidden-md\">Painel de controle</p>\n                        </a>\n                    </li>\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                            <i class=\"material-icons\">notifications</i>\n                            <span class=\"notification\">5</span>\n                            <p class=\"hidden-lg hidden-md\">\n                                Notifications\n                                <b class=\"caret\"></b>\n                            </p>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li>\n                                <a href=\"#\">Mike John responded to your email</a>\n                            </li>\n                            <li>\n                                <a href=\"#\">You have 5 new tasks</a>\n                            </li>\n                            <li>\n                                <a href=\"#\">You're now friend with Andrew</a>\n                            </li>\n                            <li>\n                                <a href=\"#\">Another Notification</a>\n                            </li>\n                            <li>\n                                <a href=\"#\">Another One</a>\n                            </li>\n                        </ul>\n                    </li>-->\n                    <li class=\"separator hidden-lg hidden-md\"></li>\n                </ul>\n                <!--<form class=\"navbar-form navbar-right\" role=\"search\">\n                    <div class=\"form-group form-search is-empty\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                        <span class=\"material-input\"></span>\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                        <i class=\"material-icons\">search</i>\n                        <div class=\"ripple-container\"></div>\n                    </button>\n                </form>-->\n            </div>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};
var NavbarComponent = (function () {
    function NavbarComponent(location, renderer, element, loginService, router) {
        this.renderer = renderer;
        this.element = element;
        this.loginService = loginService;
        this.router = router;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        if ($('body').hasClass('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        if ($('body').hasClass('hide-sidebar')) {
            misc.hide_sidebar_active = true;
        }
        $('#minimizeSidebar').click(function () {
            if (misc.sidebar_mini_active === true) {
                $('body').removeClass('sidebar-mini');
                misc.sidebar_mini_active = false;
            }
            else {
                setTimeout(function () {
                    $('body').addClass('sidebar-mini');
                    misc.sidebar_mini_active = true;
                }, 300);
            }
            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function () {
                window.dispatchEvent(new Event('resize'));
            }, 180);
            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function () {
                clearInterval(simulateWindowResize);
            }, 1000);
        });
        $('#hideSidebar').click(function () {
            if (misc.hide_sidebar_active === true) {
                setTimeout(function () {
                    $('body').removeClass('hide-sidebar');
                    misc.hide_sidebar_active = false;
                }, 300);
                setTimeout(function () {
                    $('.sidebar').removeClass('animation');
                }, 600);
                $('.sidebar').addClass('animation');
            }
            else {
                setTimeout(function () {
                    $('body').addClass('hide-sidebar');
                    // $('.sidebar').addClass('animation');
                    misc.hide_sidebar_active = true;
                }, 300);
            }
            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function () {
                window.dispatchEvent(new Event('resize'));
            }, 180);
            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function () {
                clearInterval(simulateWindowResize);
            }, 1000);
        });
    };
    NavbarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() < 991) {
            return false;
        }
        return true;
    };
    ;
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        for (var i = 0; i < this.listTitles.length; i++) {
            if (this.listTitles[i].type === "link" && this.listTitles[i].path === titlee) {
                return this.listTitles[i].title;
            }
            else if (this.listTitles[i].type === "sub") {
                for (var j = 0; j < this.listTitles[i].children.length; j++) {
                    var subtitle = this.listTitles[i].path + '/' + this.listTitles[i].children[j].path;
                    if (subtitle === titlee) {
                        return this.listTitles[i].children[j].title;
                    }
                }
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.getPath = function () {
        return this.location.prepareExternalUrl(this.location.path());
    };
    NavbarComponent.prototype.logout = function () {
        if (this.loginService.checkLogin()) {
            this.loginService.logout();
            this.router.navigate(['/pages/login'], { queryParams: {} });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('app-navbar-cmp'),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "button", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar-cmp',
            template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_login_service__["a" /* LoginService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavbarModule = (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]]
        })
    ], NavbarModule);
    return NavbarModule;
}());

//# sourceMappingURL=navbar.module.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n        <div class=\"logo\">\n            <div class=\"logo-normal\">\n                <a class=\"simple-text\">\n                    IMERSA\n                </a>\n            </div>\n\n            <div class=\"logo-img\">\n                <img src=\"assets/img/imersa-logo.png\"/>\n            </div>\n        </div>\n\n\n        <div class=\"sidebar-wrapper\">\n\n            <div class=\"user\">\n                <div class=\"photo\">\n                    <img [src]=\"getUrlFotoUser()\" />\n                </div>\n                <div class=\"info\">\n                    <a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\n                        <span>\n                            {{nomeSobrenomeUsuario}}\n                            <b class=\"caret\" *ngIf=\"!isAdmin\"></b>\n                        </span>\n                    </a>\n                    <div class=\"collapse\" id=\"collapseExample\" *ngIf=\"!isAdmin\">\n                        <ul class=\"nav\">\n                            <li>\n                                <a href=\"javascript:void(0)\" (click)=\"goToTimeline()\">\n                                    <span class=\"sidebar-mini\">T</span>\n                                    <span class=\"sidebar-normal\">Minha TimeLine</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <!--<div *ngIf=\"isNotMobileMenu()\">\n                <form class=\"navbar-form navbar-right\" role=\"search\">\n                    <div class=\"form-group form-search is-empty\">\n                        <input class=\"form-control\" placeholder=\"Search\" type=\"text\">\n                        <span class=\"material-input\"></span>\n                        <span class=\"material-input\"></span>\n                    </div>\n                    <button class=\"btn btn-white btn-round btn-just-icon\" type=\"submit\">\n                        <i class=\"material-icons\">search</i>\n                        <div class=\"ripple-container\"></div>\n                    </button>\n                </form>\n                <ul class=\"nav nav-mobile-menu\">\n                    <li class=\"\">\n                        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#pablo\" aria-expanded=\"false\">\n                            <i class=\"material-icons\">dashboard</i>\n                            <p class=\"hidden-lg hidden-md\">Dashboard</p>\n                        <div class=\"ripple-container\"></div></a>\n                    </li>\n                    <li class=\"dropdown\">\n                        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" aria-expanded=\"false\">\n                            <i class=\"material-icons\">notifications</i>\n                            <span class=\"notification\">5</span>\n                            <p class=\"hidden-lg hidden-md\">\n                                Notifications\n                                <b class=\"caret\"></b>\n                            </p>\n                        <div class=\"ripple-container\"></div></a>\n                        <ul class=\"dropdown-menu\">\n                            <li>\n                                <a href=\"#\">Mike John responded to your email</a>\n                            </li>\n                            <li>\n                                <a href=\"#\">You have 5 new tasks</a>\n                            </li>\n                            <li>\n                                <a href=\"#\">You're now friend with Andrew</a>\n                            </li>\n                            <li>\n                                <a href=\"#\">Another Notification</a>\n                            </li>\n                            <li>\n                                <a href=\"#\">Another One</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"\">\n                        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#pablo\" aria-expanded=\"false\">\n                            <i class=\"material-icons\">person</i>\n                            <p class=\"hidden-lg hidden-md\">Profile</p>\n                        <div class=\"ripple-container\"></div></a>\n                    </li>\n                    <li class=\"separator hidden-lg hidden-md\"></li>\n                </ul>\n            </div>-->\n            <div class=\"nav-container\">\n                <ul class=\"nav\">\n                    <li routerLinkActive=\"active\" *ngFor=\"let menuitem of menuItems\">\n                        <!--If is a single link-->\n                        <a [routerLink]=\"[menuitem.path]\" *ngIf=\"menuitem.type === 'link'\">\n                            <i class=\"material-icons\">{{menuitem.icontype}}</i>\n                            <p>{{menuitem.title}}</p>\n                        </a>\n                        <!--If it have a submenu-->\n                        <a data-toggle=\"collapse\" href=\"#{{menuitem.title}}\" *ngIf=\"menuitem.type === 'sub'\">\n                            <i class=\"material-icons\">{{menuitem.icontype}}</i>\n                            <p>{{menuitem.title}}<b class=\"caret\"></b></p>\n                        </a>\n\n                        <!--Display the submenu items-->\n                        <div id=\"{{menuitem.title}}\" class=\"collapse\" *ngIf=\"menuitem.type === 'sub'\">\n                            <ul class=\"nav\">\n                                <li routerLinkActive=\"active\" *ngFor=\"let childitem of menuitem.children\">\n                                    <a [routerLink]=\"[menuitem.path, childitem.path]\">\n                                        <span class=\"sidebar-mini\">{{childitem.ab}}</span>\n                                        <span class=\"sidebar-normal\">{{childitem.title}}</span>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\" (click)=\"logout()\">\n                            <i class=\"material-icons\">exit_to_app</i>\n                            <span class=\"sidebar-normal\">Logout</span>\n                        </a>\n                    </li>\n                   <!--  <li>\n                        <a href=\"#\">\n                            <i class=\"material-icons\">school</i>\n                            <p>Documentation</p>\n                        </a>\n                    </li> -->\n                </ul>\n            </div>\n\n        </div>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_host_service__ = __webpack_require__("../../../../../src/app/services/host.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_local_storage_service__ = __webpack_require__("../../../../../src/app/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
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





//Menu Items
var ROUTES;
//Menu Items
/*export const ROUTES: RouteInfo[] = [{
    path: '/tables/datatables.net',
    title: 'Consultar Clientes',
    type: 'link',
    icontype: 'dashboard'
},
{
    path: '/forms/wizard',
    title: 'Cadastrar Clientes',
    type: 'link',
    icontype: 'content_paste'
    },{
        path: '/components',
        title: 'Components',
        type: 'sub',
        icontype: 'apps',
        children: [
            {path: 'buttons', title: 'Buttons', ab:'B'},
            {path: 'grid', title: 'Grid System', ab:'GS'},
            {path: 'panels', title: 'Panels', ab:'P'},
            {path: 'sweet-alert', title: 'Sweet Alert', ab:'SA'},
            {path: 'notifications', title: 'Notifications', ab:'N'},
            {path: 'icons', title: 'Icons', ab:'I'},
            {path: 'typography', title: 'Typography', ab:'T'}
        ]
    }*/ /*,{
    path: '/forms',
    title: 'Clientes',
    type: 'sub',
    icontype: 'content_paste',
    children: [
        {path: 'regular', title: 'Regular Forms', ab:'RF'},
        {path: 'extended', title: 'Extended Forms', ab:'EF'},
        {path: 'validation', title: 'Validation Forms', ab:'VF'},
        {path: 'wizard', title: 'Cadastrar', ab:'W'}
    ]
}*/ /*,{
    path: '/tables',
    title: 'Tables',
    type: 'sub',
    icontype: 'grid_on',
    children: [
        {path: 'regular', title: 'Regular Tables', ab:'RT'},
        {path: 'extended', title: 'Extended Tables', ab:'ET'},
        {path: 'datatables.net', title: 'Datatables.net', ab:'DT'}
    ]
},{
    path: '/maps',
    title: 'Maps',
    type: 'sub',
    icontype: 'place',
    children: [
        {path: 'google', title: 'Google Maps', ab:'GM'},
        {path: 'fullscreen', title: 'Full Screen Map', ab:'FSM'},
        {path: 'vector', title: 'Vector Map', ab:'VM'}
    ]
},{
    path: '/widgets',
    title: 'Widgets',
    type: 'link',
    icontype: 'widgets'

},{
    path: '/charts',
    title: 'Charts',
    type: 'link',
    icontype: 'timeline'

},{
    path: '/calendar',
    title: 'Calendar',
    type: 'link',
    icontype: 'date_range'
},{
    path: '/pages',
    title: 'Pages',
    type: 'sub',
    icontype: 'image',
    children: [
        {path: 'pricing', title: 'Pricing', ab:'P'},
        {path: 'timeline', title: 'Timeline Page', ab:'TP'},
        {path: 'login', title: 'Login Page', ab:'LP'},
        {path: 'register', title: 'Register Page', ab:'RP'},
        {path: 'lock', title: 'Lock Screen Page', ab:'LSP'},
        {path: 'user', title: 'User Page', ab:'UP'}
    ]
}
];*/
var SidebarComponent = (function () {
    function SidebarComponent(hostService, localStorageService, loginService, router) {
        this.hostService = hostService;
        this.localStorageService = localStorageService;
        this.loginService = loginService;
        this.router = router;
    }
    SidebarComponent.prototype.isNotMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent.prototype.ngOnInit = function () {
        this.isAdmin = (localStorage.getItem("currentIsAdmin") == "true");
        console.log("teste is admin sidebar");
        console.log(this.isAdmin);
        this.nomeSobrenomeUsuario = localStorage.getItem("currentNome") + ' ' + localStorage.getItem("currentSobrenome");
        if (this.loginService.checkAdmin())
            ROUTES = [{
                    path: '/tables/datatables.net',
                    title: 'Consultar Clientes',
                    type: 'link',
                    icontype: 'dashboard'
                },
                {
                    path: '/forms/wizard',
                    title: 'Cadastrar Clientes',
                    type: 'link',
                    icontype: 'content_paste'
                }
            ];
        else
            ROUTES = [];
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            var $sidebar = $('.sidebar-wrapper');
            $sidebar.perfectScrollbar();
            // if we are on windows OS we activate the perfectScrollbar function
            $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
            $('html').addClass('perfect-scrollbar-on');
        }
        else {
            $('html').addClass('perfect-scrollbar-off');
        }
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.getUrlFotoUser = function () {
        if (this.localStorageService.userLogado)
            return this.hostService.host + this.localStorageService.userLogado.urlFoto;
        else
            return "";
    };
    SidebarComponent.prototype.goToTimeline = function () {
        this.router.navigate(['/observador/timeline'], { queryParams: {} });
    };
    SidebarComponent.prototype.logout = function () {
        if (this.loginService.checkLogin()) {
            this.loginService.logout();
            this.router.navigate(['/pages/login'], { queryParams: {} });
        }
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-cmp',
            template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_host_service__["a" /* HostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_host_service__["a" /* HostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_local_storage_service__["a" /* LocalStorageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
    ], SidebarComponent);
    return SidebarComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]]
        })
    ], SidebarModule);
    return SidebarModule;
}());

//# sourceMappingURL=sidebar.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map