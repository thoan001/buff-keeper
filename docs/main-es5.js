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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/buff-form/buff-form.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/buff-form/buff-form.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"buffForm\" (ngSubmit)=\"onSubmit()\">\r\n    <label>\r\n        Name:\r\n        <input type=\"text\" formControlName=\"name\" />\r\n    </label><br />\r\n    <label>\r\n        Attack:\r\n        <input type=\"number\" formControlName=\"atk\" />\r\n    </label><br />\r\n    <label>\r\n        Damage:\r\n        <input type=\"number\" formControlName=\"dmg\" />\r\n    </label><br />\r\n    <label>\r\n        Save:\r\n        <input type=\"number\" formControlName=\"saveVal\" />\r\n    </label><br />\r\n    <label>\r\n        Duration:\r\n        <input type=\"number\" formControlName=\"duration\" />\r\n    </label><br />\r\n    <label>\r\n        Active?<br />\r\n        <label>\r\n            <input type=\"radio\" name=\"active\" formControlName=\"active\" [value]=\"true\" />\r\n            Yes\r\n        </label>\r\n        <label>\r\n            <input type=\"radio\" name=\"active\" formControlName=\"active\" [value]=\"false\" />\r\n                No\r\n        </label>\r\n    </label><br />\r\n    <button type=\"submit\">Submit</button>\r\n</form>\r\n<button (click)=\"goToRouteMain()\">Go&nbsp;Back</button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/status/status.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/status/status.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Your status:</h3>\r\n<div *ngFor=\"let buff of status.Buffs; let i = index\">\r\n    <p>{{buff.name}}<br />\r\n        Attack:&nbsp;{{buff.atk.value}}&nbsp;Damage:&nbsp;{{buff.dmg.value}}&nbsp;Duration:&nbsp;{{buff.remaining}}&nbsp;\r\n        Active?&nbsp;{{buff.active}}&nbsp;\r\n    </p>\r\n    <button type=\"button\" (click)=\"toggleEffect(i)\">Toggle</button>\r\n    <button type=\"button\" (click)=\"removeBuff(i)\">Remove</button>\r\n</div>\r\n<div>\r\n    <span *ngIf=\"status.Buffs.length === 0\">\r\n        <p>No Buffs!</p>\r\n    </span>\r\n    <p>Total:&nbsp;<br>\r\n        <span>Attack:&nbsp;{{total.atk}}&nbsp;</span><span>Damage:&nbsp;{{total.dmg}}&nbsp;</span>\r\n        <span>Current&nbsp;Round:&nbsp;{{status.Round}}</span>\r\n    </p>\r\n\r\n</div>\r\n<button (click)=\"goToRouteAdd()\">Add&nbsp;Buff</button>\r\n<button (click)=\"incrementRound()\">Next Round</button>\r\n<button (click)=\"decrementRound()\">Previous Round</button>"

/***/ }),

/***/ "./src/app/actions/buff.actions.ts":
/*!*****************************************!*\
  !*** ./src/app/actions/buff.actions.ts ***!
  \*****************************************/
/*! exports provided: ActionTypes, AddBuff, IncrementRound, DecrementRound, ToggleEffect, RemoveBuff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBuff", function() { return AddBuff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncrementRound", function() { return IncrementRound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecrementRound", function() { return DecrementRound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleEffect", function() { return ToggleEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveBuff", function() { return RemoveBuff; });
/* harmony import */ var _status_buff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../status/buff */ "./src/app/status/buff.ts");

var ActionTypes;
(function (ActionTypes) {
    ActionTypes["AddBuff"] = "ADD_BUFF";
    ActionTypes["IncrementRound"] = "INCREMENT_ROUND";
    ActionTypes["DecrementRound"] = "DECREMENT_ROUND";
    ActionTypes["ToggleEffect"] = "TOGGLE_EFFECT";
    ActionTypes["RemoveBuff"] = "REMOVE_BUFF";
})(ActionTypes || (ActionTypes = {}));
var AddBuff = /** @class */ (function () {
    function AddBuff(payload) {
        this.payload = payload;
        this.type = ActionTypes.AddBuff;
    }
    AddBuff.ctorParameters = function () { return [
        { type: _status_buff__WEBPACK_IMPORTED_MODULE_0__["Buff"] }
    ]; };
    return AddBuff;
}());

var IncrementRound = /** @class */ (function () {
    function IncrementRound() {
        this.type = ActionTypes.IncrementRound;
    }
    return IncrementRound;
}());

var DecrementRound = /** @class */ (function () {
    function DecrementRound() {
        this.type = ActionTypes.DecrementRound;
    }
    return DecrementRound;
}());

var ToggleEffect = /** @class */ (function () {
    function ToggleEffect(payload) {
        this.payload = payload;
        this.type = ActionTypes.ToggleEffect;
    }
    ToggleEffect.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return ToggleEffect;
}());

var RemoveBuff = /** @class */ (function () {
    function RemoveBuff(payload) {
        this.payload = payload;
        this.type = ActionTypes.RemoveBuff;
    }
    RemoveBuff.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return RemoveBuff;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status/status.component */ "./src/app/status/status.component.ts");
/* harmony import */ var _buff_form_buff_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buff-form/buff-form.component */ "./src/app/buff-form/buff-form.component.ts");





var routes = [
    { path: '', component: _status_status_component__WEBPACK_IMPORTED_MODULE_3__["StatusComponent"] },
    { path: 'add', component: _buff_form_buff_form_component__WEBPACK_IMPORTED_MODULE_4__["BuffFormComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'buff-keeper-angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./status/status.component */ "./src/app/status/status.component.ts");
/* harmony import */ var _reducers_buff_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reducers/buff.reducer */ "./src/app/reducers/buff.reducer.ts");
/* harmony import */ var _buff_form_buff_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./buff-form/buff-form.component */ "./src/app/buff-form/buff-form.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _status_status_component__WEBPACK_IMPORTED_MODULE_7__["StatusComponent"],
                _buff_form_buff_form_component__WEBPACK_IMPORTED_MODULE_9__["BuffFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot({ status: _reducers_buff_reducer__WEBPACK_IMPORTED_MODULE_8__["reducer"] })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/buff-form/buff-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/buff-form/buff-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1ZmYtZm9ybS9idWZmLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/buff-form/buff-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/buff-form/buff-form.component.ts ***!
  \**************************************************/
/*! exports provided: BuffFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuffFormComponent", function() { return BuffFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _actions_buff_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/buff.actions */ "./src/app/actions/buff.actions.ts");






var BuffFormComponent = /** @class */ (function () {
    function BuffFormComponent(store, router, fb) {
        this.store = store;
        this.router = router;
        this.fb = fb;
        this.buffForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            atk: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dmg: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            saveVal: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            duration: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            active: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    BuffFormComponent.prototype.ngOnInit = function () {
    };
    BuffFormComponent.prototype.addBuff = function (buff) {
        this.store.dispatch(new _actions_buff_actions__WEBPACK_IMPORTED_MODULE_5__["AddBuff"](buff));
    };
    BuffFormComponent.prototype.goToRouteMain = function () {
        this.router.navigateByUrl('');
    };
    BuffFormComponent.prototype.onSubmit = function () {
        var buff = this.buffForm.value;
        var round$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('status'), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('Round'));
        var round;
        round$.subscribe(function (obs) { return round = obs; }).unsubscribe();
        this.addBuff({
            name: buff.name,
            atk: { value: buff.atk, type: '' },
            dmg: { value: buff.dmg, type: '' },
            save: [{ value: buff.save, category: '', type: '' }],
            duration: buff.duration,
            remaining: buff.duration,
            roundStarted: round,
            active: buff.active
        });
        this.goToRouteMain();
    };
    BuffFormComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    BuffFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buff-form',
            template: __webpack_require__(/*! raw-loader!./buff-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/buff-form/buff-form.component.html"),
            styles: [__webpack_require__(/*! ./buff-form.component.css */ "./src/app/buff-form/buff-form.component.css")]
        })
    ], BuffFormComponent);
    return BuffFormComponent;
}());



/***/ }),

/***/ "./src/app/reducers/buff.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/reducers/buff.reducer.ts ***!
  \******************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_buff_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/buff.actions */ "./src/app/actions/buff.actions.ts");


var initialState = {
    Buffs: [],
    Round: 1
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_buff_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].AddBuff:
            return Object.assign({}, state, {
                Buffs: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](state.Buffs, [
                    action.payload
                ])
            });
        case _actions_buff_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].IncrementRound:
            var buffDecreasing = state.Buffs;
            buffDecreasing.forEach(function (buff) {
                if (buff.active === true) {
                    if (buff.remaining > 1) {
                        buff.remaining = buff.remaining - 1;
                    }
                    else if (buff.remaining === 1) {
                        buff.remaining = buff.remaining - 1;
                        buff.active = false;
                    }
                }
                else if ((buff.active === false) && ((buff.roundStarted - 1) === state.Round)) {
                    buff.active = true;
                }
            });
            return Object.assign({}, state, {
                Buffs: buffDecreasing,
                Round: state.Round + 1
            });
        case _actions_buff_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].DecrementRound:
            if (state.Round > 1) {
                var buffIncreasing = state.Buffs;
                buffIncreasing.forEach(function (buff) {
                    if (buff.active === true) {
                        if ((buff.duration > buff.remaining) && ((buff.roundStarted) < state.Round)) {
                            buff.remaining = buff.remaining + 1;
                        }
                        else if ((buff.roundStarted) >= state.Round) {
                            buff.active = false;
                        }
                    }
                    else if ((buff.remaining === 0) && (state.Round === (buff.roundStarted + buff.duration))) {
                        buff.active = true;
                        buff.remaining = buff.remaining + 1;
                    }
                });
                return Object.assign({}, state, {
                    Buffs: buffIncreasing,
                    Round: state.Round - 1
                });
            }
            else {
                return state;
            }
        case _actions_buff_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].ToggleEffect:
            var toggleArray = state.Buffs;
            if (toggleArray[action.payload.id]) {
                toggleArray[action.payload.id] = Object.assign({}, toggleArray[action.payload.id], { active: !toggleArray[action.payload.id].active });
            }
            return Object.assign({}, state, {
                Buffs: toggleArray
            });
        case _actions_buff_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].RemoveBuff:
            var removeArray = state.Buffs;
            if (removeArray[action.payload.id]) {
                removeArray.splice(action.payload.id, 1);
            }
            return Object.assign({}, state, {
                Buffs: removeArray
            });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/status/buff.ts":
/*!********************************!*\
  !*** ./src/app/status/buff.ts ***!
  \********************************/
/*! exports provided: Buff, SAVE_CATEGORY, BONUS_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buff", function() { return Buff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_CATEGORY", function() { return SAVE_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BONUS_TYPE", function() { return BONUS_TYPE; });
var Buff = /** @class */ (function () {
    function Buff(name, atk, dmg, save, duration, remaining, roundStarted, active) {
        this.name = name;
        this.atk = atk;
        this.dmg = dmg;
        this.save = save;
        this.duration = duration;
        this.remaining = remaining;
        this.roundStarted = roundStarted;
        this.active = active;
    }
    Buff.ctorParameters = function () { return [
        { type: String },
        { type: undefined },
        { type: undefined },
        { type: Array },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Boolean }
    ]; };
    return Buff;
}());

var SAVE_CATEGORY = [
    'Fortitude', 'Reflex', 'Will'
];
var BONUS_TYPE = [
    'None', 'Alchemical', 'Armor', 'Circumstance', 'Competence', 'Deflection', 'Dodge',
    'Enhancement', 'Insight', 'Luck', 'Morale', 'Profane', 'Racial', 'Resistance', 'Sacred',
    'Shield', 'Size', 'Trait'
];


/***/ }),

/***/ "./src/app/status/status.component.css":
/*!*********************************************!*\
  !*** ./src/app/status/status.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXR1cy9zdGF0dXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/status/status.component.ts":
/*!********************************************!*\
  !*** ./src/app/status/status.component.ts ***!
  \********************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_buff_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/buff.actions */ "./src/app/actions/buff.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var StatusComponent = /** @class */ (function () {
    function StatusComponent(store, router) {
        this.store = store;
        this.router = router;
        this.status$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('status'));
    }
    StatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.status$.subscribe(function (obs) { return _this.status = obs; });
        this.status$.subscribe(function (obs) {
            var e_1, _a;
            var atkVal = 0;
            var dmgVal = 0;
            if (obs.Buffs.length > 0) {
                try {
                    for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](obs.Buffs), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var buff = _c.value;
                        if (buff.active) {
                            atkVal += buff.atk.value;
                            dmgVal = dmgVal + buff.dmg.value;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                _this.total = {
                    atk: atkVal,
                    dmg: dmgVal
                };
            }
            else {
                _this.total = {
                    atk: 0,
                    dmg: 0
                };
            }
        });
    };
    StatusComponent.prototype.goToRouteAdd = function () {
        this.router.navigateByUrl('add');
    };
    StatusComponent.prototype.incrementRound = function () {
        this.store.dispatch(new _actions_buff_actions__WEBPACK_IMPORTED_MODULE_3__["IncrementRound"]());
    };
    StatusComponent.prototype.decrementRound = function () {
        this.store.dispatch(new _actions_buff_actions__WEBPACK_IMPORTED_MODULE_3__["DecrementRound"]());
    };
    StatusComponent.prototype.toggleEffect = function (index) {
        this.store.dispatch(new _actions_buff_actions__WEBPACK_IMPORTED_MODULE_3__["ToggleEffect"]({ id: index }));
    };
    StatusComponent.prototype.removeBuff = function (index) {
        this.store.dispatch(new _actions_buff_actions__WEBPACK_IMPORTED_MODULE_3__["RemoveBuff"]({ id: index }));
    };
    StatusComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    StatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-status',
            template: __webpack_require__(/*! raw-loader!./status.component.html */ "./node_modules/raw-loader/index.js!./src/app/status/status.component.html"),
            styles: [__webpack_require__(/*! ./status.component.css */ "./src/app/status/status.component.css")]
        })
    ], StatusComponent);
    return StatusComponent;
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ton01\Documents\CordovaProjects\buff-keeper\buff-keeper-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map