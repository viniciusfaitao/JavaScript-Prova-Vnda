(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");





const routes = [
    {
        path: '**',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");



swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_1__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_1__["Pagination"]]);
class HomeComponent {
    constructor() { }
    ngOnInit() {
        var galleryTop = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.gallery-top', {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["swiper"]], decls: 8, vars: 0, consts: [[1, "swiper-container", "gallery-top"], [1, "swiper-wrapper"], [1, "swiper-slide", "gallery-top", 2, "background-image", "url(https://i.pinimg.com/originals/69/12/0f/69120f098bbad51079ed14884673b211.jpg)"], [1, "swiper-slide", 2, "background-image", "url(https://i.pinimg.com/originals/c7/39/31/c739310899c3f9bce4bafbe9acb488bd.jpg)"], [1, "swiper-slide", 2, "background-image", "url(https://s1.1zoom.me/big0/959/Canada_Lake_Mountains_452119.jpg)"], [1, "swiper-pagination"], [1, "swiper-button-prev"], [1, "swiper-button-next"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".swiper-container[_ngcontent-%COMP%] {\n  top: 90px;\n  width: 100%;\n  height: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.swiper-slide[_ngcontent-%COMP%] {\n  background: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.swiper-button-next[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.swiper-button-prev[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7QUFJSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aXBlci1jb250YWluZXIgXHJcbiAgICB0b3A6IDkwcHhcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICBoZWlnaHQ6IDYwMHB4XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0b1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvXHJcblxyXG4uc3dpcGVyLXNsaWRlIFxyXG4gICAgYmFja2dyb3VuZDogbm8tcmVwZWF0XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXJcclxuXHJcbi5zd2lwZXItYnV0dG9uLW5leHRcclxuICAgIGNvbG9yOiAjZmZmXHJcblxyXG4uc3dpcGVyLWJ1dHRvbi1wcmV2XHJcbiAgICBjb2xvcjogI2ZmZlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector:  true && 'swiper',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
    myFunction() {
        var x = document.getElementById("dropdown-content");
        if (x.style.display === "inline-flex") {
            x.style.display = "none";
        }
        else {
            x.style.display = "inline-flex";
        }
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 54, vars: 0, consts: [[1, "desktop"], [1, "logo"], ["href", ""], ["src", "https://cdn.dribbble.com/users/2592071/screenshots/7327591/media/ddcddda1151bdabce519bfc559a8e250.png", "alt", ""], [1, "icons"], [1, "fas", "fa-search"], [1, "far", "fa-user-circle"], [1, "fas", "fa-shopping-basket"], [1, "mobile"], [1, "menu"], ["href", "javascript:void(0);", 1, "icon", 3, "click"], [1, "fa", "fa-bars"], [1, "mobileDropdown"], ["id", "dropdown-content"], [1, "fas", "fa-caret-up", "arrowUp"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "MENU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "MENU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "MENU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "MENU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nav", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_27_listener() { return ctx.myFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "MENU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "MENU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "MENU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "MENU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media (max-width: 750px) {\n  .desktop[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n\n  .mobileDropdown[_ngcontent-%COMP%] {\n    text-align: center;\n    border: 12px solid white;\n  }\n\n  .mobileDropdown[_ngcontent-%COMP%]   #dropdown-content[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .menu[_ngcontent-%COMP%] {\n    padding: 15px 15px 15px 25px;\n    font-size: 20px;\n  }\n  .menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: #fff;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    position: fixed;\n    top: -30px;\n    left: 50px;\n  }\n  .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 150px;\n  }\n\n  .icons[_ngcontent-%COMP%] {\n    font-size: large;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n  }\n  .icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #fff;\n  }\n  .icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    padding: 10px 25px 0 0;\n  }\n\n  .arrowUp[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 25px;\n    top: 47px;\n    font-size: xx-large;\n    color: #1B003D;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    background-color: #1B003D;\n    width: 100%;\n    position: fixed;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 9999;\n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style: none;\n    margin: 0;\n    padding: 30px 25px 30px 25px;\n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 14px;\n    text-decoration: none;\n  }\n}\n@media (min-width: 751px) {\n  .mobile[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    background-color: #1B003D;\n    width: 100%;\n    position: fixed;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 9999;\n  }\n  nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: -56px;\n  }\n  nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 260px;\n  }\n  nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n    font-size: x-large;\n    position: absolute;\n    top: 25px;\n    right: 50px;\n  }\n  nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #fff;\n  }\n  nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    padding: 10px 35px 0 0;\n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    text-align: center;\n    list-style: none;\n    margin: 0;\n    padding: 35px;\n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: inline;\n    font-size: 15px;\n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 14px;\n    text-decoration: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUk7SUFDSSxrQkFBQTtFQUFOOztFQUVFO0lBQ0ksa0JBQUE7SUFDQSx3QkFBQTtFQUNOOztFQUNFO0lBQ0ksYUFBQTtFQUVOOztFQUFFO0lBQ0ksNEJBQUE7SUFDQSxlQUFBO0VBR047RUFETTtJQUNJLHFCQUFBO0lBQ0EsV0FBQTtFQUdWOztFQURFO0lBQ0ksZUFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0VBSU47RUFGTTtJQUNJLGdCQUFBO0VBSVY7O0VBRkU7SUFDSSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7RUFLTjtFQUhNO0lBQ0ksV0FBQTtFQUtWO0VBSFU7SUFDSSxzQkFBQTtFQUtkOztFQUhFO0lBQ0ksa0JBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtFQU1OOztFQUpFO0lBRUkseUJBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUNBLE1BQUE7SUFDQSxRQUFBO0lBQ0EsT0FBQTtJQUNBLGFBQUE7RUFNTjtFQUpNO0lBQ0ksZ0JBQUE7SUFDQSxTQUFBO0lBQ0EsNEJBQUE7RUFNVjtFQUpVO0lBQ0ksZUFBQTtFQU1kO0VBSmM7SUFDSSxXQUFBO0lBQ0EsYUFBQTtJQUNBLHFCQUFBO0VBTWxCO0FBQ0Y7QUFGQTtFQUVJO0lBQ0ksa0JBQUE7RUFHTjs7RUFERTtJQW9CSSx5QkFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0EsTUFBQTtJQUNBLFFBQUE7SUFDQSxPQUFBO0lBQ0EsYUFBQTtFQWZOO0VBVk07SUFDSSxrQkFBQTtJQUNBLGFBQUE7RUFZVjtFQVZVO0lBQ0ksWUFBQTtFQVlkO0VBVk07SUFDSSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7RUFZVjtFQVZVO0lBQ0ksV0FBQTtFQVlkO0VBVmM7SUFDSSxzQkFBQTtFQVlsQjtFQUZNO0lBQ0ksa0JBQUE7SUFDQSxnQkFBQTtJQUNBLFNBQUE7SUFDQSxhQUFBO0VBSVY7RUFGVTtJQUNJLGVBQUE7SUFDQSxlQUFBO0VBSWQ7RUFGYztJQUNJLFdBQUE7SUFDQSxhQUFBO0lBQ0EscUJBQUE7RUFJbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYShtYXgtd2lkdGg6IDc1MHB4KVxyXG5cclxuICAgIC5kZXNrdG9wXHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuXHJcblxyXG4gICAgLm1vYmlsZURyb3Bkb3duXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICAgICAgYm9yZGVyOiAxMnB4IHNvbGlkIHdoaXRlXHJcblxyXG4gICAgLm1vYmlsZURyb3Bkb3duICNkcm9wZG93bi1jb250ZW50IFxyXG4gICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICBcclxuICAgIC5tZW51XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggMjVweFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweFxyXG4gICAgICAgICAgICBcclxuICAgICAgICBhXHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZlxyXG5cclxuICAgIC5sb2dvXHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkXHJcbiAgICAgICAgdG9wOiAtMzBweCAgXHJcbiAgICAgICAgbGVmdDogNTBweCAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICBpbWdcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNTBweFxyXG5cclxuICAgIC5pY29uc1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2VcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICAgICAgICB0b3A6IDEwcHhcclxuICAgICAgICByaWdodDogMTBweFxyXG5cclxuICAgICAgICBhXHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyNXB4IDAgMCBcclxuXHJcbiAgICAuYXJyb3dVcFxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgICAgIGxlZnQ6IDI1cHhcclxuICAgICAgICB0b3A6IDQ3cHhcclxuICAgICAgICBmb250LXNpemU6IHh4LWxhcmdlXHJcbiAgICAgICAgY29sb3I6ICMxQjAwM0RcclxuXHJcbiAgICBuYXZcclxuICAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUIwMDNEXHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWRcclxuICAgICAgICB0b3A6IDBcclxuICAgICAgICByaWdodDogMFxyXG4gICAgICAgIGxlZnQ6IDBcclxuICAgICAgICB6LWluZGV4OiA5OTk5XHJcblxyXG4gICAgICAgIHVsXHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmVcclxuICAgICAgICAgICAgbWFyZ2luOiAwXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMjVweCAzMHB4IDI1cHhcclxuXHJcbiAgICAgICAgICAgIGxpXHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHhcclxuXHJcbiAgICAgICAgICAgICAgICBhXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNHB4XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXHJcbiAgICAgICAgICAgICAgICAgICBcclxuXHJcblxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogNzUxcHgpXHJcblxyXG4gICAgLm1vYmlsZVxyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlblxyXG5cclxuICAgIG5hdlxyXG4gICAgICAgIC5sb2dvXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgICAgICAgICBib3R0b206IC01NnB4ICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGltZ1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2MHB4XHJcblxyXG4gICAgICAgIC5pY29uc1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHgtbGFyZ2VcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICAgICAgICAgIHRvcDogMjVweFxyXG4gICAgICAgICAgICByaWdodDogNTBweFxyXG5cclxuICAgICAgICAgICAgYVxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzVweCAwIDAgXHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxQjAwM0RcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZFxyXG4gICAgICAgIHRvcDogMFxyXG4gICAgICAgIHJpZ2h0OiAwXHJcbiAgICAgICAgbGVmdDogMFxyXG4gICAgICAgIHotaW5kZXg6IDk5OTlcclxuXHJcbiAgICAgICAgdWxcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmVcclxuICAgICAgICAgICAgbWFyZ2luOiAwXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDM1cHhcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxpXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmVcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweFxyXG5cclxuICAgICAgICAgICAgICAgIGFcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZlxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE0cHhcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Programar\Github\TesteVndaDevJR\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map