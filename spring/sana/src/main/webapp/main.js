(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    color: white;\n\tbackground: rgba(0, 0, 0, 0.5);\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<!-- <app-landing></app-landing> -->\n<!-- <app-story></app-story> -->"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _story_zipcodes_zipcodes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./story/zipcodes/zipcodes.component */ "./src/app/story/zipcodes/zipcodes.component.ts");
/* harmony import */ var _story_planoptions_planoptions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./story/planoptions/planoptions.component */ "./src/app/story/planoptions/planoptions.component.ts");
/* harmony import */ var _story_familydemographic_familydemographic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./story/familydemographic/familydemographic.component */ "./src/app/story/familydemographic/familydemographic.component.ts");
/* harmony import */ var _story_summary_summary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./story/summary/summary.component */ "./src/app/story/summary/summary.component.ts");
/* harmony import */ var _story_healthdemographic_healthdemographic_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./story/healthdemographic/healthdemographic.component */ "./src/app/story/healthdemographic/healthdemographic.component.ts");
/* harmony import */ var _story_story_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./story/story.component */ "./src/app/story/story.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _landing_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./landing/login/login.component */ "./src/app/landing/login/login.component.ts");
/* harmony import */ var _landing_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./landing/register/register.component */ "./src/app/landing/register/register.component.ts");
/* harmony import */ var _routing_route_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routing/route.module */ "./src/app/routing/route.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _story_zipcodes_zipcodes_component__WEBPACK_IMPORTED_MODULE_5__["ZipcodesComponent"],
                _story_planoptions_planoptions_component__WEBPACK_IMPORTED_MODULE_6__["PlanoptionsComponent"],
                _story_familydemographic_familydemographic_component__WEBPACK_IMPORTED_MODULE_7__["FamilydemographicComponent"],
                _story_summary_summary_component__WEBPACK_IMPORTED_MODULE_8__["SummaryComponent"],
                _story_healthdemographic_healthdemographic_component__WEBPACK_IMPORTED_MODULE_9__["HealthdemographicComponent"],
                _story_story_component__WEBPACK_IMPORTED_MODULE_10__["StoryComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_11__["LandingComponent"],
                _landing_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _landing_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _routing_route_module__WEBPACK_IMPORTED_MODULE_14__["RouteModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-login *ngIf=\"this.ls.viewLogin\"></app-login>\n<app-register *ngIf=\"!this.ls.viewLogin\"></app-register>"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_landing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/landing.service */ "./src/app/services/landing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingComponent = /** @class */ (function () {
    function LandingComponent(us, ls) {
        this.us = us;
        this.ls = ls;
        this.viewLogin = this.ls.getView();
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_landing_service__WEBPACK_IMPORTED_MODULE_2__["LandingService"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/landing/login/login.component.css":
/*!***************************************************!*\
  !*** ./src/app/landing/login/login.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#login-block {\n    text-align: center;\n}\n\n#login-block > div {\n    background-color: white;\n    border-radius: 10px;\n}\n\n#login-block h1 {\n    margin: 25px auto 0 auto;\n}\n\n#login-block input {\n    text-align: center;\n    border: 1px solid grey;\n    border-radius: 7px;\n}\n\n#login-block input {\n    font-size: 20px;\n    margin-bottom: 10px;\n    padding: 5px 10px;\n    width: 85%;\n}\n\n#login-submit {\n    margin: 25px auto 15px auto;\n}\n\n#login-register {\n    margin-bottom: 35px;\n}\n\nhr {\n    color: darkslategrey !important;\n    background-color: darkslategrey;\n    border-color: darkslategrey;\n    width: 88%;\n    margin-bottom: 45px;\n}\n\n/**********************************************\n****** BUTTONS STYLING ***********************/\n\n#login-submit button {\n    font-size: 20px;\n\tcolor: steelblue;\n    border: 2px solid steelblue;\n    border-radius: 5px;\n    background: none;\n    margin: 25px auto 15px auto;\n    padding: 5px 10px;\n}\n\n#login-submit button:hover {\n    color: navy;\n    border-color: navy;\n    transition: all 0.3s ease 0s;\n}\n\n#login-register button {\n    font-size: 14px;\n\tcolor: grey;\n\tborder: none;\n    background: none;\n    border-radius: 15px;\n}\n\n#login-register button:hover {\n    color: orange;\n    border: 0.5px solid orange;\n\ttransition: all 0.3s ease 0s;\n}"

/***/ }),

/***/ "./src/app/landing/login/login.component.html":
/*!****************************************************!*\
  !*** ./src/app/landing/login/login.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div id=\"login-block\" class=\"row\">\n\t\t<div class=\"col-md-4 offset-md-4 col-sm-6 offset-sm-3 col-xs-12\" >\n\t\t\t<div><h1>WELCOME</h1></div>\n\t\t\t<div><hr></div>\n\t\t\t<!-- <div><input type=\"text\" [(ngModel)]=\"email\" placeholder=\"Email\"></div>\n\t\t\t<div><input type=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\"></div> -->\n\t\t\t<div><input type=\"text\" [(ngModel)]=\"this.ls.email\" placeholder=\"Email\"></div>\n\t\t\t<div><input type=\"password\" [(ngModel)]=\"this.ls.password\" placeholder=\"Password\"></div>\n\t\t\t<div id=\"login-submit\" class=\"col-12\"><button routerLink=\"/story\">SUBMIT</button></div>\n\t\t\t<div id=\"login-register\" class=\"col-12\"><button (click)=\"changeView()\">REGISTER</button></div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/landing/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/landing/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_landing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/landing.service */ "./src/app/services/landing.service.ts");
/* harmony import */ var _services_ajaxstuff_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ajaxstuff.service */ "./src/app/services/ajaxstuff.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(us, ls, as) {
        this.us = us;
        this.ls = ls;
        this.as = as;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.changeView = function () {
        this.ls.changeView();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/landing/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/landing/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_landing_service__WEBPACK_IMPORTED_MODULE_2__["LandingService"],
            _services_ajaxstuff_service__WEBPACK_IMPORTED_MODULE_3__["AjaxstuffService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/landing/register/register.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing/register/register.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#register-block {\n    text-align: center;\n}\n\n#register-block > div {\n    background-color: white;\n    border-radius: 10px;\n}\n\n#register-block h1 {\n    margin: 0 auto;\n}\n\n#register-block input {\n    text-align: center;\n    border: 1px solid grey;\n    border-radius: 7px;\n}\n\n#register-block input {\n    font-size: 20px;\n    margin-bottom: 10px;\n    padding: 5px 10px;\n    width: 85%;\n}\n\n#register-submit {\n    margin: 15px auto 25px auto;\n}\n\n#register-goback {\n    text-align: left;\n}\n\nhr {\n    color: darkslategrey !important;\n    background-color: darkslategrey;\n    border-color: darkslategrey;\n    width: 88%;\n    margin-bottom: 45px;\n}\n\n/**********************************************\n****** BUTTONS STYLING ***********************/\n\n#register-submit button {\n    font-size: 20px;\n\tcolor: steelblue;\n    border: 2px solid steelblue;\n    border-radius: 5px;\n    background: none;\n    margin: 25px auto 15px auto;\n    padding: 5px 10px;\n}\n\n#register-submit button:hover {\n    color: navy;\n    border-color: navy;\n    transition: all 0.3s ease 0s;\n}\n\n#register-goback button {\n    font-size: 14px;\n\tcolor: grey;\n\tborder: none;\n    background: none;\n    border-radius: 15px;\n}\n\n#register-goback button:hover {\n    color: orange;\n\ttransition: all 0.3s ease 0s;\n}"

/***/ }),

/***/ "./src/app/landing/register/register.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing/register/register.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div id=\"register-block\" class=\"row\">\n      <div class=\"col-md-4 offset-md-4 col-xs-12\" >\n        <div id=\"register-goback\"><button (click)=\"changeView()\">&laquo; Go Back</button></div>\n        <div><h1>Register</h1></div>\n        <div><hr></div>\n        <div><input type=\"text\" [(ngModel)]=\"email\" placeholder=\"Email\"></div>\n        <div><input type=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\"></div>\n        <div><input type=\"text\" [(ngModel)]=\"firstname\" placeholder=\"First Name\"></div>\n        <div><input type=\"text\" [(ngModel)]=\"lastname\" placeholder=\"Last Name\"></div>\n        <div id=\"register-submit\"><button (click)=\"registerSubmit()\">Make Account</button></div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/landing/register/register.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing/register/register.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_landing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/landing.service */ "./src/app/services/landing.service.ts");
/* harmony import */ var _services_ajaxstuff_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ajaxstuff.service */ "./src/app/services/ajaxstuff.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(us, ls, as) {
        this.us = us;
        this.ls = ls;
        this.as = as;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerSubmit = function () {
        this.as.makeAccount(this.email, this.password, this.firstname, this.lastname);
    };
    RegisterComponent.prototype.changeView = function () {
        this.ls.changeView();
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/landing/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/landing/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_landing_service__WEBPACK_IMPORTED_MODULE_2__["LandingService"],
            _services_ajaxstuff_service__WEBPACK_IMPORTED_MODULE_3__["AjaxstuffService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/routing/route.module.ts":
/*!*****************************************!*\
  !*** ./src/app/routing/route.module.ts ***!
  \*****************************************/
/*! exports provided: RouteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteModule", function() { return RouteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _story_story_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../story/story.component */ "./src/app/story/story.component.ts");
/* harmony import */ var _services_landing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/landing.service */ "./src/app/services/landing.service.ts");
/* harmony import */ var _services_logout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/logout.service */ "./src/app/services/logout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"], canActivate: [_services_logout_service__WEBPACK_IMPORTED_MODULE_6__["LogoutService"]] },
    { path: 'story', component: _story_story_component__WEBPACK_IMPORTED_MODULE_4__["StoryComponent"], canActivate: [_services_landing_service__WEBPACK_IMPORTED_MODULE_5__["LandingService"]] }
];
var RouteModule = /** @class */ (function () {
    function RouteModule() {
    }
    RouteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_services_landing_service__WEBPACK_IMPORTED_MODULE_5__["LandingService"]]
        })
    ], RouteModule);
    return RouteModule;
}());



/***/ }),

/***/ "./src/app/services/ajaxstuff.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/ajaxstuff.service.ts ***!
  \***********************************************/
/*! exports provided: AjaxstuffService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxstuffService", function() { return AjaxstuffService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AjaxstuffService = /** @class */ (function () {
    //url: string = "http://localhost:3000";
    function AjaxstuffService(http, us) {
        this.http = http;
        this.us = us;
        // PLEASE MODIFY THIS URL
        this.url = "/sana/request";
    }
    // THE FUNCTIONS BELOW ARE FOR THE HTTP AJAX CALLS
    // GET THE USER OBJECT 
    AjaxstuffService.prototype.getUser = function (input_email, input_password) {
        var obj = {
            email: input_email,
            password: input_password
        };
        this.http.post(this.url + "/user/login", obj).toPromise().then(function (data) {
            console.log(data);
            // DO SOMETHING REGARDING UserService
            // LIKE this.us.sanauser = data;
        }).catch(function (p) { return console.log(p); });
    };
    // REGISTER AN ACCOUNT
    // NEED A WAY TO SEE IF THE ACCOUNT WAS MADE
    AjaxstuffService.prototype.makeAccount = function (input_email, input_password, input_firstname, input_lastname) {
        var obj = {
            email: input_email,
            password: input_password,
            firstname: input_firstname,
            lastname: input_lastname
        };
        this.http.post(this.url + "/user/register", obj).toPromise().then(function (data) {
            // check if data is null for bad inputs
            console.log(data);
        }).catch(function (p) { return console.log(p); });
    };
    // UPDATE THE ENTIRE USER
    AjaxstuffService.prototype.updateUser = function (user) {
        this.http.post(this.url + "/user/update", user).toPromise().then(function (data) {
            console.log(data);
        }).catch(function (p) { return console.log(p); });
    };
    AjaxstuffService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AjaxstuffService);
    return AjaxstuffService;
}());



/***/ }),

/***/ "./src/app/services/landing.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/landing.service.ts ***!
  \*********************************************/
/*! exports provided: LandingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingService", function() { return LandingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_ajaxstuff_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ajaxstuff.service */ "./src/app/services/ajaxstuff.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LandingService = /** @class */ (function () {
    function LandingService(us, as) {
        this.us = us;
        this.as = as;
        this.viewLogin = true;
    }
    LandingService.prototype.getView = function () {
        return this.viewLogin;
    };
    LandingService.prototype.changeView = function () {
        this.viewLogin = !this.viewLogin;
    };
    // FOR THE LOG-IN PAGE TO GET TO STORY
    LandingService.prototype.canActivate = function (route, state) {
        //FIGURE OUT SOMETHING TO GET THE USER
        console.log("email: " + this.email);
        console.log("password: " + this.password);
        this.us.sanauser = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        // REPLACE BELOW WITH SETTING UP this.us.sanauser 
        this.as.getUser(this.email, this.password);
        return true;
    };
    LandingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_ajaxstuff_service__WEBPACK_IMPORTED_MODULE_2__["AjaxstuffService"]])
    ], LandingService);
    return LandingService;
}());



/***/ }),

/***/ "./src/app/services/logout.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/logout.service.ts ***!
  \********************************************/
/*! exports provided: LogoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutService", function() { return LogoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_ajaxstuff_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ajaxstuff.service */ "./src/app/services/ajaxstuff.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutService = /** @class */ (function () {
    function LogoutService(us, as) {
        this.us = us;
        this.as = as;
    }
    LogoutService.prototype.canActivate = function (route, state) {
        if (this.us.sanauser) {
            // MAKE UPDATE OF CURRENT STATUS
            this.as.updateUser(this.us.sanauser);
            // THEN SET USER TO NULL
            this.us.sanauser = null;
        }
        this.us.current = 1;
        return true;
    };
    LogoutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_ajaxstuff_service__WEBPACK_IMPORTED_MODULE_2__["AjaxstuffService"]])
    ], LogoutService);
    return LogoutService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = /** @class */ (function () {
    function UserService() {
        this.current = 1;
    }
    // A LOT OF GETTERS AND SETTERS
    // USER INFO
    UserService.prototype.getId = function () {
        return this.sanauser.id;
    };
    UserService.prototype.setId = function (n) {
        this.sanauser.id = n;
    };
    UserService.prototype.getEmail = function () {
        return this.sanauser.email;
    };
    UserService.prototype.setEmail = function (str) {
        this.sanauser.email = str;
    };
    UserService.prototype.getFirstname = function () {
        return this.sanauser.firstname;
    };
    UserService.prototype.setFirstname = function (str) {
        this.sanauser.firstname = str;
    };
    UserService.prototype.getLastname = function () {
        return this.sanauser.lastname;
    };
    UserService.prototype.setLastname = function (str) {
        this.sanauser.lastname = str;
    };
    UserService.prototype.getPassword = function () {
        return this.sanauser.password;
    };
    UserService.prototype.setPassword = function (str) {
        this.sanauser.password = str;
    };
    // STORY CHOICE INFO
    UserService.prototype.getZipcode = function () {
        return this.sanauser.zipcode;
    };
    UserService.prototype.setZipcode = function (str) {
        this.sanauser.zipcode = str;
    };
    UserService.prototype.getSpouse = function () {
        return this.sanauser.spouse;
    };
    UserService.prototype.setSpouse = function (n) {
        this.sanauser.spouse = n;
    };
    UserService.prototype.getChildren = function () {
        return this.sanauser.children;
    };
    UserService.prototype.setChildren = function (n) {
        this.sanauser.children = n;
    };
    UserService.prototype.getAge = function () {
        return this.sanauser.age;
    };
    UserService.prototype.setAge = function (str) {
        this.sanauser.age = str;
    };
    UserService.prototype.getGender = function () {
        return this.sanauser.gender;
    };
    UserService.prototype.setGender = function (str) {
        this.sanauser.gender = str;
    };
    UserService.prototype.getSmoker = function () {
        return this.sanauser.smoker;
    };
    UserService.prototype.setSmoker = function (n) {
        this.sanauser.smoker = n;
    };
    UserService.prototype.getHBP = function () {
        return this.sanauser.hbp;
    };
    UserService.prototype.setHBP = function (n) {
        this.sanauser.hbp = n;
    };
    UserService.prototype.getDiabetes = function () {
        return this.sanauser.diabetes;
    };
    UserService.prototype.setDiabetes = function (n) {
        this.sanauser.diabetes = n;
    };
    UserService.prototype.getSurgery = function () {
        return this.sanauser.surgery;
    };
    UserService.prototype.setSurgery = function (n) {
        this.sanauser.surgery = n;
    };
    UserService.prototype.getAllergy = function () {
        return this.sanauser.allergy;
    };
    UserService.prototype.setAllergy = function (n) {
        this.sanauser.allergy = n;
    };
    UserService.prototype.getPlanMult = function () {
        return this.sanauser.plan_mult;
    };
    UserService.prototype.setPlanMult = function (n) {
        this.sanauser.plan_mult = n;
    };
    UserService.prototype.getPlanBonus = function () {
        return this.sanauser.plan_bonus;
    };
    UserService.prototype.setPlanBonus = function (n) {
        this.sanauser.plan_bonus = n;
    };
    UserService.prototype.getQuote = function () {
        return this.sanauser.quote_total;
    };
    UserService.prototype.setQuote = function (n) {
        this.sanauser.quote_total = n;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/story/familydemographic/familydemographic.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/story/familydemographic/familydemographic.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    text-align: center;\n    padding: 20px 0;\n    color: white;\n\tbackground: rgba(0, 0, 0, 0.35);\n}\n\n.dropdown {\n    margin-top: 25px;\n    margin-bottom: 15px;\n}\n\n.dropdown label {\n    margin: 25px auto 15px;\n    text-align: center;\n}\n\n/* @media screen and (max-width: 768px) {\n    .dropdown {\n        max-width: 60%;\n    }\n} */\n\n.buttonwrapper {\n\ttext-align: center;\n\tpadding: 35px 0px 40px;\n}\n\n.buttonwrapper button {\n    margin: 0 3px;\n}\n"

/***/ }),

/***/ "./src/app/story/familydemographic/familydemographic.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/story/familydemographic/familydemographic.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div id=\"familydemo-container\" class=\"row\">\n\t\t<div class=\"col-12\">\n\t\t\t<h2>Guest and Associates</h2>\n\t\t</div>\n\n\t\t<div class=\"col-md-2 offset-md-3 dropdown\">\n\t\t\t<label for=\"sel1\">Primary Guest: </label>\n\t\t\t<select class=\"form-control\" id=\"sel1\">\n\t\t\t\t<option>1</option>\n\t\t\t</select>\n\t\t</div>\n\n\t\t<div class=\"col-md-2 dropdown\">\n\t\t\t<label for=\"sel2\">Spouse: {{selectedSpouse['id']}} </label>\n\t\t\t<select class=\"form-control\" id=\"sel2\" [(ngModel)]=\"selectedSpouse\">\n\t\t\t\t<option *ngFor=\"let numSpouse of spouseOptions\" [ngValue]=\"numSpouse\">{{numSpouse.text}}</option>\n\t\t\t</select>\n\t\t</div>\n\n\t\t<div class=\"col-md-2 dropdown\">\n\t\t\t<label for=\"sel3\">Children: {{selectedChild['id']}}</label>\n\t\t\t<select class=\"form-control\" id=\"sel3\" [(ngModel)]=\"selectedChild\">\n\t\t\t\t<option *ngFor=\"let numChild of childrenOptions\" [ngValue]=\"numChild\">{{numChild.text}}</option>\n\t\t\t</select>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n        <div class=\"col-12 buttonwrapper\">\n            <button class=\"btn btn-primary btn-lg\" (click)=\"goBack()\">Back</button>\n            <button class=\"btn btn-primary btn-lg\" (click)=\"goNext()\">Next</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/story/familydemographic/familydemographic.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/story/familydemographic/familydemographic.component.ts ***!
  \************************************************************************/
/*! exports provided: FamilydemographicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilydemographicComponent", function() { return FamilydemographicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FamilydemographicComponent = /** @class */ (function () {
    function FamilydemographicComponent(us) {
        this.us = us;
        this.spouseOptions = [
            { id: 0, text: "0" },
            { id: 1, text: "1" }
        ];
        this.childrenOptions = [
            { id: 0, text: "0" },
            { id: 1, text: "1" },
            { id: 2, text: "2" },
            { id: 3, text: "3" },
            { id: 4, text: "4+" }
        ];
        this.selectedSpouse = this.spouseOptions[0];
        this.selectedChild = this.childrenOptions[0];
    }
    FamilydemographicComponent.prototype.ngOnInit = function () {
    };
    FamilydemographicComponent.prototype.goNext = function () {
        if (!this.selectedSpouse && !this.selectedChild) {
            return;
        }
        this.us.setSpouse(this.selectedSpouse['id']);
        this.us.setChildren(this.selectedChild['id']);
        console.log(this.us.getSpouse());
        console.log(this.us.getChildren());
        // if (this.us.getSpouse() !== this.selectedSpouse['id']) {
        // 	this.us.setSpouse(this.selectedSpouse['id']);
        // 	// http update
        // }
        // if (this.us.getChildren() !== this.selectedChild['id']) {
        // 	this.us.setChildren(this.selectedChild['id']);
        // 	// http update
        // }
        this.us.current += 1;
    };
    FamilydemographicComponent.prototype.goBack = function () {
        this.us.current -= 1;
    };
    FamilydemographicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-familydemographic',
            template: __webpack_require__(/*! ./familydemographic.component.html */ "./src/app/story/familydemographic/familydemographic.component.html"),
            styles: [__webpack_require__(/*! ./familydemographic.component.css */ "./src/app/story/familydemographic/familydemographic.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], FamilydemographicComponent);
    return FamilydemographicComponent;
}());



/***/ }),

/***/ "./src/app/story/healthdemographic/healthdemographic.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/story/healthdemographic/healthdemographic.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    color: white;\n    background: rgba(0, 0, 0, 0.35);\n    padding-bottom: 30px;\n}\n\n#health-header {\n    margin-bottom: 20px;\n    text-align: center;\n}\n\n.row > div {\n    margin-bottom: 20px;\n}\n\nlabel {\n    display: block;\n    margin-bottom: -4px;\n}\n\nlabel span {\n    margin-left: 10px;\n}\n\n.error-msg {\n    color: gold;\n    font-size: 20px;\n    text-align: center;\n}\n\n.buttonwrapper {\n    text-align: center;\n}\n\n.buttonwrapper button {\n\tmargin: 0 3px;\n}"

/***/ }),

/***/ "./src/app/story/healthdemographic/healthdemographic.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/story/healthdemographic/healthdemographic.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\t<div class=\"row\">\n\n\t\t<div id=\"health-header\" class=\"col-12\">\n\t\t\t<h2>Information and History</h2>\n\t\t</div>\n\n\t\t<div class=\"col-md-3 offset-md-2 col-xs-5 offset-xs-1\">\n\t\t\t<div>Age:</div>\n\t\t\t<label>\n\t\t\t\t<input type=\"radio\" name=\"age\" value=\"age_0_17\" (click)=\"onAgeChange(ageMinor.value)\" #ageMinor>\n\t\t\t\t<span>0-17</span>\n\t\t\t</label>\n\t\t\t<label>\n\t\t\t\t<input type=\"radio\" name=\"age\" value=\"age_18_20\" (click)=\"onAgeChange(ageYoung.value)\" #ageYoung>\n\t\t\t\t<span>18-20</span>\n\t\t\t</label>\n\t\t\t<label>\n\t\t\t\t<input type=\"radio\" name=\"age\" value=\"age_21_40\" (click)=\"onAgeChange(ageMature.value)\" #ageMature>\n\t\t\t\t<span>21-40</span>\n\t\t\t</label>\n\t\t\t<label>\n\t\t\t\t<input type=\"radio\" name=\"age\" value=\"age_40_plus\" (click)=\"onAgeChange(ageSenior.value)\" #ageSenior>\n\t\t\t\t<span>40 years or old</span>\n\t\t\t</label>\n\t\t</div>\n\n\t\t<div class=\"col-md-3 col-xs-5\">\n\t\t\t<div>Gender:</div>\n\t\t\t<label>\n\t\t\t\t<input type=\"radio\" name=\"gender\" value=\"male\" (click)=\"onGenderChange(genderMale.value)\" #genderMale>\n\t\t\t\t<span>Male</span>\n\t\t\t</label>\n\t\t\t<label>\n\t\t\t\t<input type=\"radio\" name=\"gender\" value=\"female\" (click)=\"onGenderChange(genderFemale.value)\" #genderFemale>\n\t\t\t\t<span>Female</span>\n\t\t\t</label>\n\t\t</div>\n\n\t\t<div class=\"col-md-3 col-xs-5 offset-xs-1\">\n\t\t\t<div>Smoker:</div>\n\t\t\t<label>\n\t\t\t\t<input type=\"radio\" name=\"smoker\" value=\"1\" (click)=\"onSmokerChange(smokerYes.value)\" #smokerYes>\n\t\t\t\t<span>Yes</span>\n\t\t\t</label>\n\t\t\t<label>\n\t\t\t\t<input type=\"radio\" name=\"smoker\" value=\"0\" (click)=\"onSmokerChange(smokerNo.value)\" #smokerNo>\n\t\t\t\t<span>No</span>\n\t\t\t</label>\n\t\t</div>\n\n\t\t<div class=\"col-md-3 offset-md-2 col-xs-5\">\n\t\t\t<div>High Blood Pressure:</div>\n\t\t\t<label>\n\t\t\t\t<input type=\"radio\" name=\"blood\" value=\"1\" (click)=\"onHBPChange(bloodYes.value)\" #bloodYes>\n\t\t\t\t<span>Yes</span>\n\t\t\t</label>\n\t\t\t<label>\n\t\t\t\t<input type=\"radio\" name=\"blood\" value=\"0\" (click)=\"onHBPChange(bloodNo.value)\" #bloodNo>\n\t\t\t\t<span>No</span>\n\t\t\t</label>\n\t\t</div>\n\n\t\t<div class=\"col-md-3 col-xs-5 offset-xs-1\">\n\t\t\t<div>Diabetic:</div>\n\t\t\t<label>\n\t\t\t\t<input type=\"radio\" name=\"diabetic\" value=\"1\" (click)=\"onDiabeticChange(diabeticYes.value)\" #diabeticYes>\n\t\t\t\t<span>Yes</span>\n\t\t\t</label>\n\t\t\t<label>\n\t\t\t\t<input type=\"radio\" name=\"diabetic\" value=\"0\" (click)=\"onDiabeticChange(diabeticNo.value)\" #diabeticNo>\n\t\t\t\t<span>No</span>\n\t\t\t</label>\n\t\t</div>\n\n\t\t<div class=\"col-md-3 col-xs-5\">\n\t\t\t<div>Previous Surgery</div>\n\t\t\t<label>\n\t\t\t\t<input type=\"radio\" name=\"surgery\" value=\"1\" (click)=\"onSurgeryChange(surgeryYes.value)\" #surgeryYes>\n\t\t\t\t<span>Yes</span>\n\t\t\t</label>\n\t\t\t<label>\n\t\t\t\t<input type=\"radio\" name=\"surgery\" value=\"0\" (click)=\"onSurgeryChange(surgeryNo.value)\" #surgeryNo>\n\t\t\t\t<span>No</span>\n\t\t\t</label>\n\t\t</div>\n\n\t\t<div class=\"col-md-3 offset-md-2 col-xs-5 offset-xs-1\">\n\t\t\t<div>Allergies</div>\n\t\t\t<label>\n\t\t\t\t<input type=\"radio\" name=\"allergy\" value=\"1\" (click)=\"onAllergyChange(allergyYes.value)\" #allergyYes>\n\t\t\t\t<span>Yes</span>\n\t\t\t</label>\n\t\t\t<label>\n\t\t\t\t<input type=\"radio\" name=\"allergy\" value=\"0\" (click)=\"onAllergyChange(allergyNo.value)\" #allergyNo>\n\t\t\t\t<span>No</span>\n\t\t\t</label>\n\t\t</div>\n\t</div>\n\n\t<div [hidden]=\"!error\" class=\"row error-msg\">\n\t\t<div class=\"col-12\"><span>* Please fill out all options</span></div>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-12 buttonwrapper\">\n\t\t\t<button class=\"btn btn-primary btn-lg\" (click)=\"goBack()\">Back</button>\n\t\t\t<button class=\"btn btn-primary btn-lg\" (click)=\"goNext()\">Next</button>\n\t\t</div>\n\t</div>\n\n</div>"

/***/ }),

/***/ "./src/app/story/healthdemographic/healthdemographic.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/story/healthdemographic/healthdemographic.component.ts ***!
  \************************************************************************/
/*! exports provided: HealthdemographicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthdemographicComponent", function() { return HealthdemographicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HealthdemographicComponent = /** @class */ (function () {
    function HealthdemographicComponent(us) {
        this.us = us;
        // for checking inputs
        this.error = false;
    }
    HealthdemographicComponent.prototype.ngOnInit = function () {
    };
    HealthdemographicComponent.prototype.onAgeChange = function (inp) {
        this.age = inp;
    };
    HealthdemographicComponent.prototype.onGenderChange = function (inp) {
        this.gender = inp;
    };
    HealthdemographicComponent.prototype.onSmokerChange = function (inp) {
        this.smoker = +inp;
    };
    HealthdemographicComponent.prototype.onHBPChange = function (inp) {
        this.hbp = +inp;
    };
    HealthdemographicComponent.prototype.onDiabeticChange = function (inp) {
        this.diabetic = +inp;
    };
    HealthdemographicComponent.prototype.onSurgeryChange = function (inp) {
        this.surgery = +inp;
    };
    HealthdemographicComponent.prototype.onAllergyChange = function (inp) {
        this.allergy = +inp;
    };
    HealthdemographicComponent.prototype.goNext = function () {
        console.log(this.age);
        console.log(this.gender);
        console.log(this.smoker);
        console.log(this.hbp);
        console.log(this.diabetic);
        console.log(this.surgery);
        console.log(this.allergy);
        this.us.setAge(this.age);
        this.us.setGender(this.gender);
        this.us.setSmoker(this.smoker);
        this.us.setHBP(this.hbp);
        this.us.setDiabetes(this.diabetic);
        this.us.setSurgery(this.surgery);
        this.us.setAllergy(this.allergy);
        if (!this.optionCheck()) {
            this.us.current += 1;
        }
    };
    HealthdemographicComponent.prototype.goBack = function () {
        this.us.current -= 1;
    };
    // RETURN TRUE IF SOMETHING ISN'T FILLED OUT
    // RETURN FALSE IF EVERYTHING IS FILLED OUT
    HealthdemographicComponent.prototype.optionCheck = function () {
        if (this.age === undefined ||
            this.gender === undefined ||
            this.smoker === undefined ||
            this.hbp === undefined ||
            this.diabetic === undefined ||
            this.surgery === undefined ||
            this.allergy === undefined) {
            this.error = true;
            return true;
        }
        else {
            this.error = false;
            return false;
        }
    };
    HealthdemographicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-healthdemographic',
            template: __webpack_require__(/*! ./healthdemographic.component.html */ "./src/app/story/healthdemographic/healthdemographic.component.html"),
            styles: [__webpack_require__(/*! ./healthdemographic.component.css */ "./src/app/story/healthdemographic/healthdemographic.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], HealthdemographicComponent);
    return HealthdemographicComponent;
}());



/***/ }),

/***/ "./src/app/story/planoptions/planoptions.component.css":
/*!*************************************************************!*\
  !*** ./src/app/story/planoptions/planoptions.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**************************************/\n/****** PLAN OPTIONS STYLING **********/\n.container {\n    color: white;\n    background: rgba(0, 0, 0, 0.35);\n    padding-bottom: 70px;\n}\n#planoption-block select {\n\tborder-radius: 7px;\n}\n#planoption-block span {\n\tfont-size: 24px;\n\tmargin-right: 20px;\n}\n#planoption-block > div {\n\tmargin-top: 35px;\n}\n.row > div {\n\ttext-align: center;\n}\n.gold-plan, .plat-plan, .medi-plan {\n\tmargin-bottom: 15px;\n}\n/************************************************\n******** BUTTONS STYLING************************/\n.gold-plan button, .plat-plan button, .medi-plan button {\n\tbox-sizing: border-box;\n\tbox-shadow: 3px 5px #222222;\n\n\tmargin-bottom: 0px;\n\tmin-width: 90%;\n\theight: 100px;\n}\n.gold-plan button:active, .plat-plan button:active, .medi-plan button:active {\n\t-webkit-transform: translateY(4px);\n\t        transform: translateY(4px);\n\ttransition: all 0.3s ease 0s;\n}\n.gold-plan button:hover {\n\tbackground-color: orange;\n}\n.plat-plan button:hover {\n\tbackground-color: pink;\n}\n.medi-plan button:hover {\n\tbackground-color: dodgerblue;\n}\n.gold-plan button {\n\tbackground-color: gold;\n}\n.plat-plan button {\n\tbackground-color: silver;\n}\n.medi-plan button {\n\tbackground-color: skyblue;\n}\n/******** END OF BUTTONS STYLING *****************\n*************************************************/\n/************************************************\n*** PLANOPTION-DESCRIPTION AND BACK/NEXT BUTTON*/\n#planoption-desc {\n\tfont-size: 20px;\n\tmargin-bottom: 20px;\n}\n.buttonwrapper button {\n\tmargin: 0 3px;\n}\n/*** END OF PLAN OPTIONS STYLING ********/\n/****************************************/\n"

/***/ }),

/***/ "./src/app/story/planoptions/planoptions.component.html":
/*!**************************************************************!*\
  !*** ./src/app/story/planoptions/planoptions.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div id=\"planoption-block\" class=\"row\">\n\t\t<div class=\"col-12\">\n\t\t\t<span>Plan Options</span>\n\t\t\t<select [(ngModel)]=\"selectedPlan\">\n\t\t\t\t<option value=\"gold\">Gold Plan</option>\n\t\t\t\t<option value=\"plat\">Platinum Plan</option>\n\t\t\t\t<option value=\"medi\">Medicare</option>\n\t\t\t</select>\n\t\t</div>\n\n\t\t<div class=\"row col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 col-xs-12\">\n\t\t\t<div *ngIf=\"selectedPlan==='gold'\" class=\"gold-plan col-lg-5 offset-lg-1 col-md-4 offset-md-2 col-sm-12 col-xs-12\">\n\t\t\t\t<div>\n\t\t\t\t\t<button class=\"btn\" (click)=\"planVal(1)\">\n\t\t\t\t\t\t<div>Gold 6 Months</div>\n\t\t\t\t\t\t<div>### per Month</div>\n\t\t\t\t\t</button >\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"selectedPlan==='gold'\" class=\"gold-plan col-lg-5 col-md-4 col-sm-12 col-xs-12\">\n\t\t\t\t<div>\n\t\t\t\t\t<button class=\"btn\" (click)=\"planVal(2)\">\n\t\t\t\t\t\t<div>Gold 12 Months</div>\n\t\t\t\t\t\t<div>### per Month</div>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"selectedPlan==='plat'\" class=\"plat-plan col-lg-5 offset-lg-1 col-md-4 offset-md-2 col-sm-12 col-xs-12\">\n\t\t\t\t<div>\n\t\t\t\t\t<button class=\"btn\" (click)=\"planVal(3)\">\n\t\t\t\t\t\t<div>Platinum 6 Months</div>\n\t\t\t\t\t\t<div>### per Month</div>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\n\t\t\t<div *ngIf=\"selectedPlan==='plat'\" class=\"plat-plan col-lg-5 col-md-4 col-sm-12 col-xs-12\">\n\t\t\t\t<div>\n\t\t\t\t\t<button class=\"btn\" (click)=\"planVal(4)\">\n\t\t\t\t\t\t<div>Platinum 12 Months</div>\n\t\t\t\t\t\t<div>### per Month</div>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"selectedPlan==='medi'\" class=\"medi-plan col-lg-5 offset-lg-1 col-md-4 offset-md-2 col-sm-12 col-xs-12\">\n\t\t\t\t<div>\n\t\t\t\t\t<button class=\"btn\" (click)=\"planVal(5)\">\n\t\t\t\t\t\t<div>Medicare 6 Months</div>\n\t\t\t\t\t\t<div>### per Month</div>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"selectedPlan==='medi'\" class=\"medi-plan col-lg-5 col-md-4 col-sm-12 col-xs-12\">\n\t\t\t\t<div>\n\t\t\t\t\t<button class=\"btn\" (click)=\"planVal(6)\">\n\t\t\t\t\t\t<div>Medicare 12 Months</div>\n\t\t\t\t\t\t<div>### per Month</div>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div id=\"planoption-desc\" class=\"col-12\">\n\t\t\t{{selectedDescription}}\n\t\t</div>\t\n\n\t</div>\n\n\t<div class=\"row\">\n        <div class=\"col-12 buttonwrapper\">\n            <button class=\"btn btn-primary btn-lg\" (click)=\"goBack()\">Back</button>\n            <button class=\"btn btn-success btn-lg\" (click)=\"goSummary()\">Summary</button>\n        </div>\n\t</div>\n\n</div>"

/***/ }),

/***/ "./src/app/story/planoptions/planoptions.component.ts":
/*!************************************************************!*\
  !*** ./src/app/story/planoptions/planoptions.component.ts ***!
  \************************************************************/
/*! exports provided: PlanoptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanoptionsComponent", function() { return PlanoptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlanoptionsComponent = /** @class */ (function () {
    function PlanoptionsComponent(us, http) {
        this.us = us;
        this.http = http;
        this.selectedPlan = "gold";
    }
    PlanoptionsComponent.prototype.ngOnInit = function () {
    };
    PlanoptionsComponent.prototype.planVal = function (n) {
        // MODIFY plan_bonus
        if (n === 1 || n === 3 || n === 5) {
            this.plan_bonus = 0.5;
        }
        else {
            this.plan_bonus = 0;
        }
        // MODIFY plan_mult
        if (this.selectedPlan === "gold") {
            this.plan_mult = 1.1;
        }
        else if (this.selectedPlan === "plat") {
            this.plan_mult = 1.2;
        }
        else {
            this.plan_mult = 1;
        }
        // ADD A DESCRIPTION FOR THE PLAN SELECTED, BINDED TO 'selectedDescription'
        switch (n) {
            case 1:
                this.selectedDescription = "You selected The Gold Plan for 6 months";
                break;
            case 2:
                this.selectedDescription = "You selected The Gold Plan for 12 months";
                break;
            case 3:
                this.selectedDescription = "You selected The Platinum Plan for 6 months";
                break;
            case 4:
                this.selectedDescription = "You selected The Platinum Plan for 12 months";
                break;
            case 5:
                this.selectedDescription = "You selected Medicare for 6 months";
                break;
            case 6:
                this.selectedDescription = "You selected Medicare for 12 months";
                break;
        }
        this.us.setPlanBonus(this.plan_bonus);
        this.us.setPlanMult(this.plan_mult);
        console.log(this.us.getPlanBonus());
        console.log(this.us.getPlanMult());
    };
    PlanoptionsComponent.prototype.goSummary = function () {
        if (this.plan_mult === undefined) {
            this.selectedDescription = "Please select a plan";
            return;
        }
        this.us.setPlanMult(this.plan_mult);
        this.us.setPlanBonus(this.plan_bonus);
        console.log(this.us.getPlanMult());
        console.log(this.us.getPlanBonus());
        console.log(this.us.sanauser);
        this.us.current += 1;
    };
    PlanoptionsComponent.prototype.goBack = function () {
        this.us.current -= 1;
    };
    PlanoptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-planoptions',
            template: __webpack_require__(/*! ./planoptions.component.html */ "./src/app/story/planoptions/planoptions.component.html"),
            styles: [__webpack_require__(/*! ./planoptions.component.css */ "./src/app/story/planoptions/planoptions.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PlanoptionsComponent);
    return PlanoptionsComponent;
}());



/***/ }),

/***/ "./src/app/story/story.component.css":
/*!*******************************************!*\
  !*** ./src/app/story/story.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    background: rgba(0, 0, 0, 0.35);\n    padding-bottom: 25px;\n}\n\n#logout-button-block {\n    margin-top: 10px;\n}"

/***/ }),

/***/ "./src/app/story/story.component.html":
/*!********************************************!*\
  !*** ./src/app/story/story.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div id=\"logout-button-block\" class=\"col-12\">\n            <button class=\"btn btn-secondary btn-lg\" routerLink=\"/landing\">Log Out</button>\n        </div>\n    </div>\n</div>\n\n<app-zipcodes [hidden]=\"this.us.current !== 1\"></app-zipcodes>\n<app-familydemographic [hidden]=\"this.us.current !== 2\"></app-familydemographic>\n<app-healthdemographic [hidden]=\"this.us.current !== 3\"></app-healthdemographic>\n<app-planoptions [hidden]=\"this.us.current !== 4\"></app-planoptions>\n<app-summary *ngIf=\"this.us.current ===5\"></app-summary>"

/***/ }),

/***/ "./src/app/story/story.component.ts":
/*!******************************************!*\
  !*** ./src/app/story/story.component.ts ***!
  \******************************************/
/*! exports provided: StoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryComponent", function() { return StoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StoryComponent = /** @class */ (function () {
    function StoryComponent(us) {
        this.us = us;
        this.current = 1;
    }
    StoryComponent.prototype.ngOnInit = function () {
    };
    StoryComponent.prototype.goNext = function () {
        this.current++;
    };
    StoryComponent.prototype.goBack = function () {
        this.current--;
    };
    StoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-story',
            template: __webpack_require__(/*! ./story.component.html */ "./src/app/story/story.component.html"),
            styles: [__webpack_require__(/*! ./story.component.css */ "./src/app/story/story.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], StoryComponent);
    return StoryComponent;
}());



/***/ }),

/***/ "./src/app/story/summary/summary.component.css":
/*!*****************************************************!*\
  !*** ./src/app/story/summary/summary.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#summary-container {\n    color: white;\n    background: rgba(0, 0, 0, 0.35);\n    padding-bottom: 35px;\n}\n\n#summary-container > .row > div {\n    margin: 30px auto;\n}\n\n.row h2 {\n    text-align: center;\n}\n\n#summary-container button {\n    margin-top: 25px;\n    transition: all 0.3s ease 0s;\n}\n\n#summary-container button:hover {\n    background-color: darkgrey;\n}\n\n#summary-container button:active {\n    -webkit-transform: translateY(4px);\n            transform: translateY(4px);\n}\n\n.buttonwrapper {\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/story/summary/summary.component.html":
/*!******************************************************!*\
  !*** ./src/app/story/summary/summary.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"summary-container\" class=\"container mx-auto\">\n\n\t<div class=\"row\">\n\t\t<div class=\"col-12\">\n\t\t\t<h2>Quote Plan Summary</h2>\n\t\t</div>\n\t\t<div class=\"col-md-5 offset-md-1\">\n\t\t\t<p>{{summary}}</p>\n\t\t</div>\n\n\t\t<div class=\"col-md-5\">\n\t\t\t<div class=\"col-2 centeredbox\">\n\t\t\t\t<button type=\"button\" class=\"btn\" value=\"View Quote in PDF\">View Quote in PDF</button>\n\t\t\t</div>\n\t\t\t<div class=\"col-2 centeredbox\">\n\t\t\t\t<button type=\"button\" class=\"btn \" value=\"Print Quote\">Print Quote</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row buttonwrapper\">\n\t\t<div class=\"col-12\">\n\t\t\t<button class=\"btn btn-primary btn-lg\" (click)=\"goBack()\">Back</button>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/story/summary/summary.component.ts":
/*!****************************************************!*\
  !*** ./src/app/story/summary/summary.component.ts ***!
  \****************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SummaryComponent = /** @class */ (function () {
    function SummaryComponent(us) {
        this.us = us;
        this.summary = "\n\t\nzipcode " + (this.us.getZipcode()) + "\n\t\nspouse " + (this.us.getSpouse()) + "\n\t\nchildren " + (this.us.getChildren()) + "\n\t\nage " + (this.us.getAge()) + "\n\t\ngender " + (this.us.getGender()) + "\n\t\nsmoker " + (this.us.getSmoker()) + "\n\t\nhbp " + (this.us.getHBP()) + "\n\tdiabetes " + (this.us.getDiabetes()) + "\n\t\nsurgery " + (this.us.getSurgery()) + "\n\t\nallergy " + (this.us.getAllergy()) + "\n\t\nplan_mult " + (this.us.getPlanMult()) + "\n\t\nplan_bonus " + (this.us.getPlanBonus());
    }
    SummaryComponent.prototype.ngOnInit = function () {
    };
    SummaryComponent.prototype.goBack = function () {
        this.us.current -= 1;
    };
    SummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-summary',
            template: __webpack_require__(/*! ./summary.component.html */ "./src/app/story/summary/summary.component.html"),
            styles: [__webpack_require__(/*! ./summary.component.css */ "./src/app/story/summary/summary.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ }),

/***/ "./src/app/story/zipcodes/zipcodes.component.css":
/*!*******************************************************!*\
  !*** ./src/app/story/zipcodes/zipcodes.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**************************************/\n/****** ZIPCODE STYLING ***************/\n.container {\n    color: white;\n\tbackground: rgba(0, 0, 0, 0.35);\n}\n#zipcode-block > div {\n\tmargin: 20px auto;\n}\n#zipcode-block {\n\ttext-align: center;\n}\n#zipcode-block select {\n\tfont-size: 30px;\n\tborder-radius: 7px;\n\tpadding: 5px 50px;\n}\n.buttonwrapper {\n\ttext-align: center;\n\tpadding: 35px 0px 40px;\n}"

/***/ }),

/***/ "./src/app/story/zipcodes/zipcodes.component.html":
/*!********************************************************!*\
  !*** ./src/app/story/zipcodes/zipcodes.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div id=\"zipcode-block\" class=\"row\">\n\t\t<div class=\"col-12\">\n\t\t\t<h3>Find affordable insurance in your area</h3>\n\t\t</div>\n\n\t\t<div class=\"col-12\">\n\t\t\t<select [(ngModel)]=\"currentzip\">\n\t\t\t\t<option *ngFor=\"let zip of zipcodes\" [value]=\"zip\">{{zip}}</option>\n\t\t\t</select>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-12 buttonwrapper\">\n\t\t\t<button class=\"btn btn-primary btn-lg\" (click)=\"goNext()\">Next</button>\n\t\t</div>\n\t</div>\n\t\n</div>"

/***/ }),

/***/ "./src/app/story/zipcodes/zipcodes.component.ts":
/*!******************************************************!*\
  !*** ./src/app/story/zipcodes/zipcodes.component.ts ***!
  \******************************************************/
/*! exports provided: ZipcodesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipcodesComponent", function() { return ZipcodesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ZipcodesComponent = /** @class */ (function () {
    function ZipcodesComponent(us) {
        this.us = us;
        this.zipcodes = [
            "10001",
            "10011",
            "10018",
            "10019",
            "14606",
            "14602",
            "14610",
            "13478"
        ];
        this.currentzip = this.zipcodes[0];
    }
    ZipcodesComponent.prototype.ngOnInit = function () {
    };
    ZipcodesComponent.prototype.goNext = function () {
        if (this.us.getZipcode() !== this.currentzip) {
            this.us.setZipcode(this.currentzip);
            // http update
        }
        console.log(this.us.getZipcode());
        this.us.current += 1;
    };
    ZipcodesComponent.prototype.goBack = function () {
    };
    ZipcodesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-zipcodes',
            template: __webpack_require__(/*! ./zipcodes.component.html */ "./src/app/story/zipcodes/zipcodes.component.html"),
            styles: [__webpack_require__(/*! ./zipcodes.component.css */ "./src/app/story/zipcodes/zipcodes.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], ZipcodesComponent);
    return ZipcodesComponent;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\orink\Desktop\Sana-Angular-ajaxstuff\Sana-Angular-ajaxstuff\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map