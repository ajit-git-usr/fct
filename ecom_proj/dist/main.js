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

/***/ "./src/app/app-boostrap/app-boostrap.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/app-boostrap/app-boostrap.module.ts ***!
  \*****************************************************/
/*! exports provided: AppBoostrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBoostrapModule", function() { return AppBoostrapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppBoostrapModule = /** @class */ (function () {
    function AppBoostrapModule() {
    }
    AppBoostrapModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot()
            ],
            exports: [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"]]
        })
    ], AppBoostrapModule);
    return AppBoostrapModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<spinner [backgroundColor]=\"'#ff0000'\" [spinner]=\"spinkit.skWave\" [debounceDelay]=\"100\" [minDuration]=\"300\">\r\n</spinner>"

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
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-http-loader */ "./node_modules/ng-http-loader/fesm5/ng-http-loader.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.spinkit = ng_http_loader__WEBPACK_IMPORTED_MODULE_1__["Spinkit"];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [
                ""
            ]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/editor */ "./node_modules/primeng/editor.js");
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_boostrap_app_boostrap_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-boostrap/app-boostrap.module */ "./src/app/app-boostrap/app-boostrap.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_disply_label_err_msgs_disply_label_err_msgs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/disply-label-err-msgs/disply-label-err-msgs.component */ "./src/app/components/disply-label-err-msgs/disply-label-err-msgs.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_manage_filter_manage_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/manage-filter/manage-filter.component */ "./src/app/components/manage-filter/manage-filter.component.ts");
/* harmony import */ var _p_datatable_p_datatable_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./p-datatable/p-datatable.module */ "./src/app/p-datatable/p-datatable.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/auth/auth-guard.service */ "./src/app/shared/auth/auth-guard.service.ts");
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-http-loader */ "./node_modules/ng-http-loader/fesm5/ng-http-loader.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _components_under_dev_under_dev_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/under-dev/under-dev.component */ "./src/app/components/under-dev/under-dev.component.ts");
/* harmony import */ var _shared_handleToken_handle_token_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/handleToken/handle-token.service */ "./src/app/shared/handleToken/handle-token.service.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_schedule_job_schedule_job_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/schedule-job/schedule-job.component */ "./src/app/components/schedule-job/schedule-job.component.ts");
/* harmony import */ var _components_review_job_review_job_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/review-job/review-job.component */ "./src/app/components/review-job/review-job.component.ts");
/* harmony import */ var _src_app_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../src/app/components/upload-file/upload-file.component */ "./src/app/components/upload-file/upload-file.component.ts");
/* harmony import */ var _components_download_file_download_file_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/download-file/download-file.component */ "./src/app/components/download-file/download-file.component.ts");
/* harmony import */ var _components_manage_jobs_manage_jobs_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/manage-jobs/manage-jobs.component */ "./src/app/components/manage-jobs/manage-jobs.component.ts");
/* harmony import */ var _components_manage_assets_manage_assets_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/manage-assets/manage-assets.component */ "./src/app/components/manage-assets/manage-assets.component.ts");
/* harmony import */ var _components_configure_configure_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/configure/configure.component */ "./src/app/components/configure/configure.component.ts");
/* harmony import */ var _components_online_online_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/online/online.component */ "./src/app/components/online/online.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { HttpModule } from '@angular/http';


// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// import { DataTableComponent } from './components/data-table/data-table.component';




// import { PDataTableComponent } from './components/p-data-table/p-data-table.component';
// import { LoaderComponent } from './components/loader/loader.component'
// import { HttpClientModule } from '@angular/common/http';













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _components_disply_label_err_msgs_disply_label_err_msgs_component__WEBPACK_IMPORTED_MODULE_8__["DisplyLabelErrMsgsComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _components_manage_filter_manage_filter_component__WEBPACK_IMPORTED_MODULE_11__["ManageFilterComponent"], _components_manage_jobs_manage_jobs_component__WEBPACK_IMPORTED_MODULE_24__["ManageJobsComponent"], _components_under_dev_under_dev_component__WEBPACK_IMPORTED_MODULE_17__["UnderDevComponent"], _components_schedule_job_schedule_job_component__WEBPACK_IMPORTED_MODULE_20__["ScheduleJobComponent"], _components_review_job_review_job_component__WEBPACK_IMPORTED_MODULE_21__["ReviewJobComponent"], _src_app_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_22__["UploadFileComponent"], _components_download_file_download_file_component__WEBPACK_IMPORTED_MODULE_23__["DownloadFileComponent"], _components_manage_jobs_manage_jobs_component__WEBPACK_IMPORTED_MODULE_24__["ManageJobsComponent"], _components_manage_assets_manage_assets_component__WEBPACK_IMPORTED_MODULE_25__["ManageAssetsComponent"], _components_configure_configure_component__WEBPACK_IMPORTED_MODULE_26__["ConfigureComponent"], _components_online_online_component__WEBPACK_IMPORTED_MODULE_27__["OnlineComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _p_datatable_p_datatable_module__WEBPACK_IMPORTED_MODULE_12__["PDatatableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _app_boostrap_app_boostrap_module__WEBPACK_IMPORTED_MODULE_4__["AppBoostrapModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                primeng_editor__WEBPACK_IMPORTED_MODULE_3__["EditorModule"],
                // HttpModule,
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__["JwtModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                ng_http_loader__WEBPACK_IMPORTED_MODULE_15__["NgHttpLoaderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
                    {
                        path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], canActivate: [_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuardService"]], canActivateChild: [_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuardService"]], children: [
                            { path: 'jobresults', component: _components_manage_jobs_manage_jobs_component__WEBPACK_IMPORTED_MODULE_24__["ManageJobsComponent"] },
                            { path: 'newschedule', component: _components_schedule_job_schedule_job_component__WEBPACK_IMPORTED_MODULE_20__["ScheduleJobComponent"] },
                            { path: 'reviewjob', component: _components_review_job_review_job_component__WEBPACK_IMPORTED_MODULE_21__["ReviewJobComponent"] },
                            { path: 'upload', component: _src_app_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_22__["UploadFileComponent"] },
                            { path: 'online', component: _components_online_online_component__WEBPACK_IMPORTED_MODULE_27__["OnlineComponent"] },
                            { path: 'download', component: _components_download_file_download_file_component__WEBPACK_IMPORTED_MODULE_23__["DownloadFileComponent"] },
                            { path: 'assets', component: _components_manage_assets_manage_assets_component__WEBPACK_IMPORTED_MODULE_25__["ManageAssetsComponent"] },
                            { path: 'configure', component: _components_configure_configure_component__WEBPACK_IMPORTED_MODULE_26__["ConfigureComponent"] },
                            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                            { path: '**', component: _components_under_dev_under_dev_component__WEBPACK_IMPORTED_MODULE_17__["UnderDevComponent"] }
                        ]
                    },
                    { path: '', redirectTo: '/login', pathMatch: 'full' },
                    { path: '**', component: _components_under_dev_under_dev_component__WEBPACK_IMPORTED_MODULE_17__["UnderDevComponent"] }
                ], { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [_shared_handleToken_handle_token_service__WEBPACK_IMPORTED_MODULE_18__["HandleTokenService"], primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_19__["MessageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/configure/configure.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/configure/configure.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label{\n    font-weight: 400;\n}"

/***/ }),

/***/ "./src/app/components/configure/configure.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/configure/configure.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"col-md-2\">\n      </div>\n      <div class=\"col-md-10\">\n        <h4 style=\" color: #068ff6;\">{{configureLabel.alertHeading}}</h4>\n      </div>\n    </div>\n\n  </div>\n  <form [formGroup]=\"configureForm\" (ngSubmit)=\"onSubmit()\">\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"col-md-2\">\n\n        </div>\n\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-4\">\n            <label for=\"company\" [ngClass]=\"{ 'required': submitted && f.company.errors }\">{{configureLabel.company}}</label>\n            <select required class=\"form-control\" formControlName='company' id=\"company\">\n              <ng-container *ngFor=\"let option of formDropdownList['companies']\">\n                <option *ngIf=\"option.value\" [ngValue]=\"option.value\">{{option.label}}</option>\n              </ng-container>\n            </select>\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label [ngClass]=\"{ 'required': submitted && f.format.errors }\" for=\" format \">{{configureLabel.format}}</label>\n            <select required class=\"form-control \" formControlName=\"format\" id=\"format \">\n              <ng-container *ngFor=\"let option of formDropdownList[ 'formats'] \">\n                <option *ngIf=\"option.value \" [ngValue]=\"option.value \">{{option.label}}</option>\n              </ng-container>\n            </select>\n            <!-- <input type=\"password \" class=\"form-control \" id=\"inputPassword4 \" placeholder=\"Password \"> -->\n          </div>\n        </div>\n\n        <div class=\"col-md-2 \">\n\n        </div>\n      </div>\n\n    </div>\n\n\n    <div class=\"row \">\n      <div class=\"col-md-12 \">\n        <div class=\"col-md-2 \">\n\n        </div>\n\n        <div class=\"form-row \">\n          <div class=\"form-group col-md-4 \">\n            <label for=\"type \" [ngClass]=\"{ 'required': submitted && f.type.errors }\">{{configureLabel.type}}</label>\n            <select required class=\"form-control \" formControlName=\"type\" id=\"type \">\n              <ng-container *ngFor=\"let option of formDropdownList[ 'types'] \">\n                <option *ngIf=\"option.value \" [ngValue]=\"option.value \">{{option.label}}</option>\n              </ng-container>\n            </select>\n          </div>\n          <div class=\"form-group col-md-4 \">\n            <label for=\"TOmail \" [ngClass]=\"{ 'required': submitted && f.tomail.errors }\">{{configureLabel.tomail}}</label>\n\n            <input type=\"text \" required formControlName=\"tomail\" placeholder=\"abc@gmail.com \" class=\"form-control \" id=\"TOmail \">\n          </div>\n        </div>\n        <div class=\"col-md-2 \">\n\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"row \">\n      <div class=\"col-md-12 \">\n        <div class=\"col-md-2 \">\n\n        </div>\n\n        <div class=\"form-row \">\n          <div class=\"form-group col-md-4 \">\n            <label for=\"status \" [ngClass]=\"{ 'required': submitted && f.status.errors }\">{{configureLabel.status}}</label>\n            <select class=\"form-control \" required formControlName=\"status\" id=\"status \">\n              <ng-container *ngFor=\"let option of formDropdownList[ 'status'] \">\n                <option *ngIf=\"option.value \" [ngValue]=\"option.value \">{{option.label}}</option>\n              </ng-container>\n            </select>\n          </div>\n          <div class=\"form-group col-md-4 \">\n            <label for=\"CCmail \">{{configureLabel.ccmail}}</label>\n            <input type=\"text \" class=\"form-control \" formControlName=\"ccmail\" id=\"CCmail \" placeholder=\"abc@gmail.com,bcd@gmail.com \">\n          </div>\n        </div>\n        <div class=\"col-md-2 \">\n\n        </div>\n      </div>\n\n    </div>\n\n\n    <div class=\"row \">\n      <div class=\"col-md-12 \">\n        <div class=\"col-md-2 \">\n\n        </div>\n\n        <div class=\"form-row \">\n          <div class=\"form-group col-md-4 \">\n            <label for=\"environment \" [ngClass]=\"{ 'required': submitted && f.environment.errors }\">{{configureLabel.environment}}</label>\n            <select class=\"form-control \" required formControlName='environment' id=\"environment \">\n              <ng-container *ngFor=\"let option of formDropdownList[ 'environments'] \">\n                <option *ngIf=\"option.value \" [ngValue]=\"option.value \">{{option.label}}</option>\n              </ng-container>\n            </select>\n          </div>\n          <div class=\"form-group col-md-4 \">\n            <label for=\"BCCmail \">{{configureLabel.bccmail}}</label>\n            <input type=\"text \" class=\"form-control \" formControlName='bccmail' placeholder=\"abc@gmail.com, bcd@gmail.com\n              \"\n              id=\"BCCmail \">\n          </div>\n        </div>\n        <div class=\"col-md-2 \">\n\n        </div>\n      </div>\n\n    </div>\n\n\n    <div class=\"row \">\n      <div class=\"col-md-12 \">\n        <div class=\"col-md-2 \">\n\n        </div>\n\n        <div class=\"form-row \">\n\n          <div class=\"form-group col-md-8 \">\n            <label for=\"mailSubject \" [ngClass]=\"{ 'required': submitted && f.subject.errors }\">{{configureLabel.subject}}</label>\n            <input type=\"text \" required class=\"form-control \" formControlName=\"subject\" id=\"mailSubject \">\n          </div>\n        </div>\n        <div class=\"col-md-2 \">\n\n        </div>\n      </div>\n\n    </div>\n\n\n\n\n\n    <div class=\"row \">\n      <div class=\"col-md-12 \">\n        <div class=\"col-md-2 \">\n\n        </div>\n\n        <div class=\"form-row \">\n\n          <div class=\"form-group col-md-8 \">\n            <label for=\"mailSubject \">{{configureLabel.bodymail}}</label>\n            <p-editor formControlName=\"bodymail\" [style]=\"{ 'height': '200px'} \"></p-editor>\n            <br />\n\n            <div [(innerHTML)]=\"statusMsg\"></div>\n          </div>\n        </div>\n        <div class=\"col-md-2 \">\n\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"row \">\n      <div class=\"col-md-12 \">\n        <div class=\"col-md-2 \">\n\n        </div>\n        <div class=\"form-group col-md-8 t-align-right \" style=\"margin-top: 2rem; \">\n\n          <button class=\"btn app-back-color white-text \" style=\"outline:none ; padding: 3px 18px; margin-right: 10px\n              \"\n            type=\"submit \">{{buttonsLabels.save}}</button>\n          <button class=\"btn app-back-color white-text \" type=\"button \" style=\"outline:none ; padding: 3px 18px; margin-right:\n              10px \">{{buttonsLabels.sendTestNotifications}}</button>\n          <button class=\"btn app-back-color white-text \" type=\"button \" (click)=\"initConfigureForm() \" style=\"outline:none\n              ; padding: 3px 18px; \">{{buttonsLabels.clear}}</button>\n        </div>\n        <div class=\"col-md-2 \">\n\n        </div>\n      </div>\n\n    </div>\n\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/configure/configure.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/configure/configure.component.ts ***!
  \*************************************************************/
/*! exports provided: ConfigureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigureComponent", function() { return ConfigureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/http/http.service */ "./src/app/shared/http/http.service.ts");
/* harmony import */ var _assets_data_form_labels_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/data/form-labels.json */ "./src/assets/data/form-labels.json");
var _assets_data_form_labels_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/Object.assign({}, _assets_data_form_labels_json__WEBPACK_IMPORTED_MODULE_3__, {"default": _assets_data_form_labels_json__WEBPACK_IMPORTED_MODULE_3__});
/* harmony import */ var _assets_data_url_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/data/url.json */ "./src/assets/data/url.json");
var _assets_data_url_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/Object.assign({}, _assets_data_url_json__WEBPACK_IMPORTED_MODULE_4__, {"default": _assets_data_url_json__WEBPACK_IMPORTED_MODULE_4__});
/* harmony import */ var _models_columnMenu_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/columnMenu.model */ "./src/app/models/columnMenu.model.ts");
/* harmony import */ var _shared_data_table_data_table_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/data-table/data-table.service */ "./src/app/shared/data-table/data-table.service.ts");
/* harmony import */ var _assets_data_responseCodes_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/data/responseCodes.json */ "./src/assets/data/responseCodes.json");
var _assets_data_responseCodes_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/Object.assign({}, _assets_data_responseCodes_json__WEBPACK_IMPORTED_MODULE_7__, {"default": _assets_data_responseCodes_json__WEBPACK_IMPORTED_MODULE_7__});
/* harmony import */ var _models_configMail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/configMail */ "./src/app/models/configMail.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ConfigureComponent = /** @class */ (function () {
    function ConfigureComponent(formBuilder, http, dataTableService) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.dataTableService = dataTableService;
        this.formDropdownList = {};
    }
    ConfigureComponent.prototype.initConfigureForm = function () {
        this.configureForm = this.formBuilder.group({
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            environment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            format: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tomail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required], status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ccmail: [''],
            bccmail: [''],
            subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            bodymail: ['']
        });
    };
    ConfigureComponent.prototype.bindDropdownMenus = function () {
        var typeColumnSet = new Set();
        var companyColumnSet = new Set();
        var envColumnSet = new Set();
        var statusColumnSet = new Set();
        // Fixme
        for (var _i = 0, _a = this.manageJobs; _i < _a.length; _i++) {
            var jobObj = _a[_i];
            // if (!this.typeColumnSet.has(new ColumnMenu(jobObj.type, jobObj.type))) {
            typeColumnSet.add(new _models_columnMenu_model__WEBPACK_IMPORTED_MODULE_5__["ColumnMenu"](jobObj.type, jobObj.type));
            //   }
            companyColumnSet.add(new _models_columnMenu_model__WEBPACK_IMPORTED_MODULE_5__["ColumnMenu"](jobObj.company, jobObj.company));
            envColumnSet.add(new _models_columnMenu_model__WEBPACK_IMPORTED_MODULE_5__["ColumnMenu"](jobObj.environment, jobObj.environment));
            statusColumnSet.add(new _models_columnMenu_model__WEBPACK_IMPORTED_MODULE_5__["ColumnMenu"](jobObj.status, jobObj.status));
        }
        var format = [
            {
                id: "html",
                label: "HTML",
                value: "html"
            }, {
                id: "pdf",
                label: "PDF",
                value: "pdf"
            },
            {
                id: "xml",
                label: "XML",
                value: "xml"
            }
        ];
        this.formDropdownList['companies'] = this.dataTableService.removeDuplicates(Array.from(companyColumnSet.values()), 'label');
        this.formDropdownList['formats'] = format;
        this.formDropdownList['types'] = this.dataTableService.removeDuplicates(Array.from(typeColumnSet.values()), 'label');
        this.formDropdownList['environments'] = this.dataTableService.removeDuplicates(Array.from(envColumnSet.values()), 'label');
        ;
        this.formDropdownList['status'] = this.dataTableService.removeDuplicates(Array.from(statusColumnSet.values()), 'label');
        ;
    };
    ConfigureComponent.prototype.ngOnInit = function () {
        this.configureLabel = _assets_data_form_labels_json__WEBPACK_IMPORTED_MODULE_3__.configurations;
        this.buttonsLabels = _assets_data_form_labels_json__WEBPACK_IMPORTED_MODULE_3__.buttonsText;
        this.initConfigureForm();
        this.fetchData(_assets_data_url_json__WEBPACK_IMPORTED_MODULE_4__["API"] + _assets_data_url_json__WEBPACK_IMPORTED_MODULE_4__["MANAGE_FETCH_JOBS"]);
    };
    ConfigureComponent.prototype.fetchData = function (url) {
        var _this = this;
        this.http.sendGettRequest(url).subscribe(function (res) {
            console.log(res.results);
            _this.manageJobs = res.results;
            _this.bindDropdownMenus();
        });
    };
    Object.defineProperty(ConfigureComponent.prototype, "f", {
        get: function () { return this.configureForm.controls; },
        enumerable: true,
        configurable: true
    });
    ConfigureComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.configureForm.invalid) {
            this.statusMsg = '';
            return;
        }
        var configMail = new _models_configMail__WEBPACK_IMPORTED_MODULE_8__["ConfigMail"]();
        configMail.EmailBCC = this.configureForm.value.bccmail;
        configMail.EmailCC = this.configureForm.value.ccmail;
        configMail.EmailFormat = this.configureForm.value.format;
        configMail.EmailTo = this.configureForm.value.tomail;
        configMail.Subject = this.configureForm.value.subject;
        configMail.Body = this.configureForm.value.bodymail;
        configMail.Enviornment = this.configureForm.value.environment;
        this.http.sendPostRequest(_assets_data_url_json__WEBPACK_IMPORTED_MODULE_4__["API"] + _assets_data_url_json__WEBPACK_IMPORTED_MODULE_4__["CONFIGURE_ALERT_NOTIFICATIONS"], configMail).subscribe(function (res) {
            if (res.responseCode === _assets_data_responseCodes_json__WEBPACK_IMPORTED_MODULE_7__.SUCCESS) {
                _this.statusMsg = "<span class='valid-feedback'>" + res.message + "</span>";
                _this.initConfigureForm();
            }
            else if (res.responseCode === _assets_data_responseCodes_json__WEBPACK_IMPORTED_MODULE_7__.DUPLICATE) {
                _this.statusMsg = "<span class='required'>" + res.message + "</span>";
            }
            else {
                _this.statusMsg = "<span class='required'>Something went wrong please try again!</span>";
            }
            _this.submitted = false;
            setTimeout(function () {
                this.statusMsg = '';
            }.bind(_this), 5000);
        });
        console.log(this.configureForm.value);
    };
    ConfigureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-configure',
            template: __webpack_require__(/*! ./configure.component.html */ "./src/app/components/configure/configure.component.html"),
            styles: [__webpack_require__(/*! ./configure.component.css */ "./src/app/components/configure/configure.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _shared_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _shared_data_table_data_table_service__WEBPACK_IMPORTED_MODULE_6__["DataTableService"]])
    ], ConfigureComponent);
    return ConfigureComponent;
}());



/***/ }),

/***/ "./src/app/components/disply-label-err-msgs/disply-label-err-msgs.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/disply-label-err-msgs/disply-label-err-msgs.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-msg {\r\n    color: #a94442;\r\n  }"

/***/ }),

/***/ "./src/app/components/disply-label-err-msgs/disply-label-err-msgs.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/disply-label-err-msgs/disply-label-err-msgs.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"displayError\">\r\n  <!-- <span class=\"glyphicon glyphicon-remove form-control-feedback \"></span> -->\r\n  <span class=\"sr-only\">(error)</span>\r\n  <div class=\"error-msg\">\r\n    {{errorMsg }}\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/disply-label-err-msgs/disply-label-err-msgs.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/disply-label-err-msgs/disply-label-err-msgs.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DisplyLabelErrMsgsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplyLabelErrMsgsComponent", function() { return DisplyLabelErrMsgsComponent; });
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

var DisplyLabelErrMsgsComponent = /** @class */ (function () {
    function DisplyLabelErrMsgsComponent() {
    }
    DisplyLabelErrMsgsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DisplyLabelErrMsgsComponent.prototype, "errorMsg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DisplyLabelErrMsgsComponent.prototype, "displayError", void 0);
    DisplyLabelErrMsgsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-disply-label-err-msgs',
            template: __webpack_require__(/*! ./disply-label-err-msgs.component.html */ "./src/app/components/disply-label-err-msgs/disply-label-err-msgs.component.html"),
            styles: [__webpack_require__(/*! ./disply-label-err-msgs.component.css */ "./src/app/components/disply-label-err-msgs/disply-label-err-msgs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DisplyLabelErrMsgsComponent);
    return DisplyLabelErrMsgsComponent;
}());



/***/ }),

/***/ "./src/app/components/download-file/download-file.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/download-file/download-file.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mySign-up{\n    padding: 0;\n    /* width: 50%; */\n    border: 1px solid lightgray;\n    display: block;\n}\n.pageHead{\n   \n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    font-size: 20px;\n    color: #068ff6;\n    font-weight: 600;\n    text-align: center;\n    /* color: #068ff6; */\n}\n.list-group{\n    height: 400px;\n    overflow: auto;\n}\n.list-group li{\n    cursor: pointer;\n    font-size: 16px;\n}\n.list-group li span.download{\n    right: 8px;\n    top: 9px;\n    position: absolute;\n    font-size: 25px;\n}\n.list-group li:hover{\n    background: #efe5e5;\n}\n.no-files{\n    text-align: center;\n    font-size: 16px;\n    font-weight: bold;\n}"

/***/ }),

/***/ "./src/app/components/download-file/download-file.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/download-file/download-file.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"col-md-3\">\n\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"signup-form mySign-up\" style=\"padding: 0;\">\n          <div class=\"pageHead\" *ngIf=\"fileList.length\">Download your files </div>\n\n          <ul class=\"list-group\" *ngIf=\"fileList.length\">\n            <li class=\"list-group-item\" (click)=\"downloadFile(file)\" *ngFor=\"let file of fileList\">\n              <span [ngClass]=\"getFileIcon(file)\"></span> {{file.fileName}}\n              <span *ngIf=\"file.size\">({{file.size}})</span>\n              <span class=\"glyphicon glyphicon-download download \"></span>\n            </li>\n\n          </ul>\n          <div class=\"no-files\" *ngIf=\"!fileList.length\">\n            <span>No files to download!</span>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n\n\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/download-file/download-file.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/download-file/download-file.component.ts ***!
  \*********************************************************************/
/*! exports provided: DownloadFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadFileComponent", function() { return DownloadFileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/http/http.service */ "./src/app/shared/http/http.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _assets_data_responseCodes_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/data/responseCodes.json */ "./src/assets/data/responseCodes.json");
var _assets_data_responseCodes_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/Object.assign({}, _assets_data_responseCodes_json__WEBPACK_IMPORTED_MODULE_3__, {"default": _assets_data_responseCodes_json__WEBPACK_IMPORTED_MODULE_3__});
/* harmony import */ var _assets_data_url_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/data/url.json */ "./src/assets/data/url.json");
var _assets_data_url_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/Object.assign({}, _assets_data_url_json__WEBPACK_IMPORTED_MODULE_4__, {"default": _assets_data_url_json__WEBPACK_IMPORTED_MODULE_4__});
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DownloadFileComponent = /** @class */ (function () {
    function DownloadFileComponent(http) {
        this.http = http;
        this.fileList = [];
        this.fileIcons = {
            ".txt": "fa fa-file-text-o",
            ".pdf": "fa fa-file-pdf-o",
            ".doc": "fa fa-file-word-o",
            ".docx": "fa fa-file-word-o",
            ".xls": "fa fa-file-excel-o",
            ".xlsx": "fa fa-file-excel-o",
            ".png": "fa fa-file-image-o",
            ".jpeg": "fa fa-file-image-o",
            ".jpg": "fa fa-file-image-o",
            ".gif": "fa fa-file-o",
            ".csv": "fa fa-file-o",
            ".zip": "fa fa-file-zip-o"
        };
    }
    DownloadFileComponent.prototype.ngOnInit = function () {
        this.fetchListOfFiles();
    };
    DownloadFileComponent.prototype.getFileIcon = function (file) {
        var fileTokens = file.fileName.split('.');
        return this.fileIcons['.' + fileTokens[fileTokens.length - 1]];
    };
    DownloadFileComponent.prototype.downloadFile = function (file) {
        console.log(file);
        this.http.sendGetDownloadtRequest(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + _assets_data_url_json__WEBPACK_IMPORTED_MODULE_4__["DOWNLOAD"], { 'fileName': file.fileName }).subscribe(function (res) {
            // TODO: Download response
        });
    };
    DownloadFileComponent.prototype.fetchListOfFiles = function () {
        var _this = this;
        this.http.sendGettRequest(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + _assets_data_url_json__WEBPACK_IMPORTED_MODULE_4__["FECTH_DOWNLOAD_FILES"]).subscribe(function (res) {
            if (res.responseCode === _assets_data_responseCodes_json__WEBPACK_IMPORTED_MODULE_3__.SUCCESS) {
                _this.fileList = res.results;
            }
            // if (res.responseCode === ResponseCodes.default.SUCCESS) {
            //   this.statusMsg = "<span class='valid-feedback'>" + res.message + "</span>";
            // } else {
            //   this.statusMsg = "<span class='required'>Something went wrong please try again!</span>";
            // }
            // setTimeout(function () {
            //   this.statusMsg = '';
            // }.bind(this), 10000);
        });
    };
    DownloadFileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-download-file',
            template: __webpack_require__(/*! ./download-file.component.html */ "./src/app/components/download-file/download-file.component.html"),
            styles: [__webpack_require__(/*! ./download-file.component.css */ "./src/app/components/download-file/download-file.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], DownloadFileComponent);
    return DownloadFileComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\r\n    max-height: 160px;\r\n    /* padding-bottom: 5px; */\r\n  }\r\n  .h-120{\r\n    height: 120px;;\r\n  }\r\n  .c-cursor{\r\n  cursor: pointer;\r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container h-120\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n      <div>\r\n        <a class=\"navbar-brand\">\r\n          <img src=\"assets/img/iStar.png\" class=\"logo \">\r\n        </a>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 \">\r\n    </div>\r\n    <div class=\"col-md-3 \">\r\n      <ul class=\"nav navbar-nav \">\r\n        <li class=\"active \">\r\n          <a routerLink=\"undeDev\">\r\n            <span class=\"glyphicon glyphicon-user \"></span> {{userInfo.userName}}\r\n          </a>\r\n        </li>\r\n        <li class=\"active c-cursor\" (click)=\"logout()\">\r\n          <a>\r\n            <span class=\"glyphicon glyphicon-log-out \"></span> LOGOUT\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container-fluid \">\r\n  <div class=\"row \">\r\n    <nav class=\"navbar navbar-default \">\r\n      <div class=\"container \">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li dropdown>\r\n            <a dropdownToggle class=\"dropdown-toggle \" role=\"button \">\r\n              <span class=\"glyphicon glyphicon-th\"> </span> MANAGE\r\n              <span class=\"caret \"></span>\r\n            </a>\r\n            <ul *dropdownMenu class=\"dropdown-menu \">\r\n              <li routerLinkActive=\"active\">\r\n                <a routerLink=\"jobresults\">Jobs</a>\r\n              </li>\r\n              <li role=\"separator \" class=\"divider \"></li>\r\n              <li routerLinkActive=\"active\">\r\n                <a routerLink=\"online\"> Online</a>\r\n              </li>\r\n              <li role=\"separator \" class=\"divider \"></li>\r\n              <li routerLinkActive=\"active\">\r\n                <a routerLink=\"undeDev\"> Schedule</a>\r\n              </li>\r\n              <li role=\"separator\" class=\"divider \"></li>\r\n              <li routerLinkActive=\"active\">\r\n                <a routerLink=\"assets\">Assets</a>\r\n              </li>\r\n\r\n            </ul>\r\n          </li>\r\n          <li class=\"\" routerLinkActive=\"active\">\r\n            <a routerLink=\"configure\">\r\n              <span class=\"glyphicon glyphicon-wrench\"></span> CONFIGURE\r\n            </a>\r\n          </li>\r\n          <li class=\"\" routerLinkActive=\"active\">\r\n            <a routerLink=\"upload\">\r\n              <span class=\"glyphicon glyphicon-upload\"></span> UPLOAD\r\n            </a>\r\n          </li>\r\n\r\n          <li class=\"\" routerLinkActive=\"active\">\r\n            <a routerLink=\"download\">\r\n              <span class=\"glyphicon glyphicon-download\"></span> DOWNLOAD\r\n            </a>\r\n          </li>\r\n          <!-- <li class=\"\">\r\n            <a routerLink=\"/home/dummy\" routerLinkActive=\"active\">\r\n              <span class=\"glyphicon glyphicon-download\"></span> Dummy\r\n            </a>\r\n          </li> -->\r\n\r\n\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n  <div class=\"container \">\r\n    <div class=\"row \">\r\n      <router-outlet>\r\n      </router-outlet>\r\n    </div>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/http/http.service */ "./src/app/shared/http/http.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _shared_handleToken_handle_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/handleToken/handle-token.service */ "./src/app/shared/handleToken/handle-token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _assets_data_url_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/data/url.json */ "./src/assets/data/url.json");
var _assets_data_url_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/Object.assign({}, _assets_data_url_json__WEBPACK_IMPORTED_MODULE_6__, {"default": _assets_data_url_json__WEBPACK_IMPORTED_MODULE_6__});
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, tokenService, router) {
        this.http = http;
        this.tokenService = tokenService;
        this.router = router;
        this.userInfo = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    HomeComponent.prototype.logout = function () {
        this.tokenService.removeToken();
        this.router.navigate(['/login']);
    };
    HomeComponent.prototype.getLoggedUserInfo = function () {
        var _this = this;
        this.http.sendGettRequest(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + _assets_data_url_json__WEBPACK_IMPORTED_MODULE_6__["USER_INFO"]).subscribe(function (response) {
            if (response.responseCode === 5555) {
                // console.log(response.json());
                _this.userInfo = response.results[0];
            }
            else {
                // TODO handle failure case
            }
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getLoggedUserInfo();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _shared_handleToken_handle_token_service__WEBPACK_IMPORTED_MODULE_4__["HandleTokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form label.error{\r\n    color:red;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n}\r\n.logo {\r\n    /* max-height: 30px;\r\n    padding-bottom: 5px; */\r\n  }\r\n.m-t-100{\r\n    margin-top:100px;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar \">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\">\r\n        <img src=\"assets/img/iStar.png\" class=\"logo\">\r\n      </a>\r\n      <!-- <span class=\"navbar-brand\">LOGO</span> -->\r\n    </div>\r\n    <div class=\"col-md-8\"></div>\r\n    <ul class=\"nav navbar-nav navbar-left\">\r\n      <li class=\"active\">\r\n        <a href=\"#\">\r\n          <span class=\"glyphicon glyphicon-lock\"></span> Login\r\n        </a>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container m-t-100\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n          <span class=\"glyphicon glyphicon-lock\"></span> Login</div>\r\n        <div class=\"panel-body\">\r\n          <form class=\"form-horizontal\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"loginForm\" role=\"form\">\r\n            <div class=\"form-group\" [ngClass]=\"displayFieldCss('email')\">\r\n              <label for=\"userName\" class=\"col-sm-3 control-label\">\r\n                Email</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"email\" id=\"userName\" required>\r\n                <app-disply-label-err-msgs [displayError]=\"isFieldValid('email')\" errorMsg=\"Please enter email.\">\r\n                </app-disply-label-err-msgs>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"displayFieldCss('password')\">\r\n              <label for=\"password\" class=\"col-sm-3 control-label\">\r\n                Password</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"password\" required>\r\n                <app-disply-label-err-msgs [displayError]=\"isFieldValid('password')\" errorMsg=\"Please enter password.\">\r\n                </app-disply-label-err-msgs>\r\n\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <!-- <div class=\"col-sm-offset-3\"></div> -->\r\n              <div class=\"col-sm-offset-3 col-sm-6\">\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" formControlName=\"keepSignin\" id=\"keepSignin\" /> Keep me signed in\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-3 t-align-right\">\r\n                <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-success btn-sm\">\r\n                  Login</button>\r\n              </div>\r\n\r\n            </div>\r\n            <!-- <div class=\"form-group last\">\r\n\r\n            </div> -->\r\n          </form>\r\n          <app-disply-label-err-msgs [displayError]=\"isValidCredentials\" errorMsg=\"Please enter valid credentials.\">\r\n          </app-disply-label-err-msgs>\r\n\r\n        </div>\r\n        <div class=\"panel-footer\">\r\n          <a href=\"\"> Forgot password?</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- <app-loader *ngIf=\"isLoading\"></app-loader> -->"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/http/http.service */ "./src/app/shared/http/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _shared_handleToken_handle_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/handleToken/handle-token.service */ "./src/app/shared/handleToken/handle-token.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _assets_data_url_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/data/url.json */ "./src/assets/data/url.json");
var _assets_data_url_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/Object.assign({}, _assets_data_url_json__WEBPACK_IMPORTED_MODULE_7__, {"default": _assets_data_url_json__WEBPACK_IMPORTED_MODULE_7__});
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
    function LoginComponent(tokenService, fb, http, router, auth) {
        this.tokenService = tokenService;
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.auth = auth;
        this.loginForm = fb.group({
            email: ['user1@gmail.com', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['123', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            keepSignin: [false]
        });
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.loginForm);
        var usrFormValues = this.loginForm.value;
        this.http.sendPostRequest(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["API_URL"] + _assets_data_url_json__WEBPACK_IMPORTED_MODULE_7__["LOGIN"], usrFormValues).subscribe(function (res) {
            if (res.responseCode === 5555) {
                _this.isValidCredentials = false;
                if (res.results.length && res.results[0].tokenId) {
                    // localStorage.setItem('tokenId', 'Bearer ' + res.results.tokenId);
                    _this.tokenService.setToken('Bearer ' + res.results[0].tokenId);
                    _this.router.navigate(['/home']);
                }
            }
            else if (res.responseCode === 2222) {
            }
            var self = _this;
            _this.isValidCredentials = true;
            setTimeout(function () {
                self.isValidCredentials = false;
            }, 5000);
        }, function (err) {
            _this.isValidCredentials = false;
            console.log(err);
        });
    };
    LoginComponent.prototype.isFieldValid = function (field) {
        return !this.loginForm.get(field).valid && this.loginForm.get(field).touched;
    };
    LoginComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    LoginComponent.prototype.ngOnInit = function () {
        if (this.auth.isAuthenticated()) {
            this.router.navigate(['home']);
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [_shared_handleToken_handle_token_service__WEBPACK_IMPORTED_MODULE_5__["HandleTokenService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _shared_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/manage-assets/manage-assets.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/manage-assets/manage-assets.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/manage-assets/manage-assets.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/manage-assets/manage-assets.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-table #dt [columns]=\"cols\" [value]=\"manageAssets\" [paginator]=\"true\" [rows]=\"10\" (sortFunction)=\"tableSort($event)\" [customSort]=\"true\">\n  <ng-template pTemplate=\"caption\">\n\n    <div class=\"d-block\">\n      <div class=\"d-inlline col-md-2 t-heading t-align-left\">\n        Manage Assets\n      </div>\n      <div class=\"d-inlline pos-left-relative-85\">\n        <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n        <input style=\"width:auto\" type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\">\n      </div>\n\n    </div>\n  </ng-template>\n  <ng-template pTemplate=\"header\" let-columns>\n    <tr>\n      <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n        {{col.header}}\n        <p-sortIcon *ngIf=\"!col.isNoSorting\" [field]=\"col.field\"></p-sortIcon>\n      </th>\n      <!-- <th>\n        Download\n      </th>\n      <th>\n        Delete\n      </th> -->\n    </tr>\n    <tr>\n      <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\n        <p-dropdown *ngIf=\"!col.isInput && !col.isNotVisible\" [options]=\"col.columnList\" [style]=\"{'width':'100%'}\" (onChange)=\"dt.filter($event.value, col.field, 'equals')\"></p-dropdown>\n        <input *ngIf=\"col.isInput && !col.isNotVisible\" class=\"form-control\" type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\n      </th>\n    </tr>\n\n  </ng-template>\n\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n    <tr [pSelectableRow]=\"rowData\">\n      <td *ngFor=\"let col of columns\">\n        <span *ngIf=\"!col.isLink\">{{rowData[col.field]}}</span>\n        <span *ngIf=\"col.isLink\" style=\"color:blue; cursor: pointer;\" (click)=\"downloadOrDeleteAsset(rowData['filename'], col.field)\">\n          {{rowData[col.field]}}\n        </span>\n      </td>\n\n    </tr>\n  </ng-template>\n\n</p-table>"

/***/ }),

/***/ "./src/app/components/manage-assets/manage-assets.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/manage-assets/manage-assets.component.ts ***!
  \*********************************************************************/
/*! exports provided: ManageAssetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAssetsComponent", function() { return ManageAssetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/http/http.service */ "./src/app/shared/http/http.service.ts");
/* harmony import */ var _models_columnMenu_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/columnMenu.model */ "./src/app/models/columnMenu.model.ts");
/* harmony import */ var _shared_data_table_data_table_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/data-table/data-table.service */ "./src/app/shared/data-table/data-table.service.ts");
/* harmony import */ var _assets_data_url_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/data/url.json */ "./src/assets/data/url.json");
var _assets_data_url_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/Object.assign({}, _assets_data_url_json__WEBPACK_IMPORTED_MODULE_4__, {"default": _assets_data_url_json__WEBPACK_IMPORTED_MODULE_4__});
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { API_URL } from '../../../environments/environment';
var ManageAssetsComponent = /** @class */ (function () {
    function ManageAssetsComponent(http, dataTableService) {
        this.http = http;
        this.dataTableService = dataTableService;
        this.tableSort = this.dataTableService.tableSort;
    }
    ManageAssetsComponent.prototype.ngOnInit = function () {
        this.typeColumnSet = new Set();
        this.companyColumnSet = new Set();
        this.statusColumnSet = new Set();
        // this.fetch('../../../assets/data/assets.json');
        this.fetch(_assets_data_url_json__WEBPACK_IMPORTED_MODULE_4__["API"] + _assets_data_url_json__WEBPACK_IMPORTED_MODULE_4__["FILTER_MANAGE_ASSETS"]);
    };
    ManageAssetsComponent.prototype.bindDropdownMenus = function () {
        this.typeColumnSet.add(new _models_columnMenu_model__WEBPACK_IMPORTED_MODULE_2__["ColumnMenu"]('Any', null));
        this.companyColumnSet.add(new _models_columnMenu_model__WEBPACK_IMPORTED_MODULE_2__["ColumnMenu"]('Any', null));
        this.statusColumnSet.add(new _models_columnMenu_model__WEBPACK_IMPORTED_MODULE_2__["ColumnMenu"]('Any', null));
        // this.typeColumnSet = this.removeDuplicates(this.manageJobs, 'type');
        // this.companyColumnSet = this.removeDuplicates(this.manageJobs, 'company');
        // this.profileColumnSet = this.removeDuplicates(this.manageJobs, 'profile');
        // this.envColumnSet = this.removeDuplicates(this.manageJobs, 'environment');
        // this.statusColumnSet = this.removeDuplicates(this.manageJobs, 'status');
        // Fixme
        for (var _i = 0, _a = this.manageAssets; _i < _a.length; _i++) {
            var asstObj = _a[_i];
            // if (!this.typeColumnSet.has(new ColumnMenu(jobObj.type, jobObj.type))) {
            this.typeColumnSet.add(new _models_columnMenu_model__WEBPACK_IMPORTED_MODULE_2__["ColumnMenu"](asstObj.type, asstObj.type));
            //   }
            this.companyColumnSet.add(new _models_columnMenu_model__WEBPACK_IMPORTED_MODULE_2__["ColumnMenu"](asstObj.company, asstObj.company));
            this.statusColumnSet.add(new _models_columnMenu_model__WEBPACK_IMPORTED_MODULE_2__["ColumnMenu"](asstObj.status, asstObj.status));
        }
    };
    ManageAssetsComponent.prototype.fetch = function (url) {
        var _this = this;
        // et params = new HttpParams().set("paramName", paramValue).set("paramName2", paramValueNext); //Create new HttpParams
        this.http.sendGettRequest(url).subscribe(function (res) {
            console.log(res.results);
            var responseObj = res.results;
            for (var _i = 0, responseObj_1 = responseObj; _i < responseObj_1.length; _i++) {
                var astData = responseObj_1[_i];
                astData['download'] = "Download";
                astData['delete'] = "Delete";
            }
            // console.log(responseObj, '00000');
            _this.manageAssets = responseObj; //res.results;
            _this.bindDropdownMenus();
            // yourArray.map((item: any) => item.id)
            _this.cols = [
                { field: 'fileName', header: 'File name', isInput: true },
                { field: 'type', header: 'Type', isInput: false, columnList: _this.dataTableService.removeDuplicates(Array.from(_this.typeColumnSet.values()), 'label') },
                { field: 'company', header: 'Company', isInput: false, columnList: _this.dataTableService.removeDuplicates(Array.from(_this.companyColumnSet.values()), 'label') },
                { field: 'createdDate', header: 'Uploaded Date', isInput: true },
                { field: 'status', header: 'Status', isInput: false, columnList: _this.dataTableService.removeDuplicates(Array.from(_this.statusColumnSet.values()), 'label') },
                { field: 'download', header: ' ', isLink: true, isInput: true, isNotVisible: true, isNoSorting: true, width: '10%' },
                { field: 'delete', header: ' ', isLink: true, isInput: true, isNotVisible: true, isNoSorting: true, width: '10%' }
            ];
        });
    };
    ManageAssetsComponent.prototype.downloadOrDeleteAsset = function (fileName, flag) {
        if (flag == 'download') {
            this.http.sendGetDownloadtRequest(_assets_data_url_json__WEBPACK_IMPORTED_MODULE_4__["API"] + _assets_data_url_json__WEBPACK_IMPORTED_MODULE_4__["DOWNLOAD"], { 'fileName': fileName }).subscribe(function (res) {
                // TODO: Download response
            });
        }
        else if (flag == 'delete') {
            this.http.sendDeleteRequest(_assets_data_url_json__WEBPACK_IMPORTED_MODULE_4__["API"] + _assets_data_url_json__WEBPACK_IMPORTED_MODULE_4__["DELETE_ASSETS"], { 'fileName': fileName }).subscribe(function (res) {
                // TODO: Download response
            });
        }
    };
    ManageAssetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-assets',
            template: __webpack_require__(/*! ./manage-assets.component.html */ "./src/app/components/manage-assets/manage-assets.component.html"),
            styles: [__webpack_require__(/*! ./manage-assets.component.css */ "./src/app/components/manage-assets/manage-assets.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _shared_data_table_data_table_service__WEBPACK_IMPORTED_MODULE_3__["DataTableService"]])
    ], ManageAssetsComponent);
    return ManageAssetsComponent;
}());



/***/ }),

/***/ "./src/app/components/manage-filter/manage-filter.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/manage-filter/manage-filter.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .form-control{\r\n    width:100% !important;\r\n}\r\n\r\n/* .w-155-px{\r\n    width: 155px !important;\r\n}\r\n.m-l-32{\r\n    margin-left:32px;\r\n}\r\n.m-t-15{\r\n    margin-top:15px;\r\n}\r\n.m-l-5{\r\n    margin-left: 5px;\r\n}\r\n.m-l-23{\r\n    margin-left: 23px;\r\n}\r\n.m-l-neg-25{\r\n    margin-left: -25px;\r\n}\r\n.m-r-neg-25{\r\n    margin-right: -25px;\r\n}  */\r\nselect.form-control,\r\ninput.form-control{\r\n    width:140px !important;\r\n}\r\n.m-t-15{\r\n    margin-top:15px;\r\n}\r\n.form-inline label{\r\n    width:90px;\r\n    text-align: right;\r\n    padding-right: 10px;\r\n}\r\n.p-l-0{\r\n    padding-left: 0px;\r\n}\r\n.m-r-neg-30{\r\n    margin-right: -30px;\r\n}\r\n.w-90{\r\n    width:90px;\r\n}\r\n.btn-pos{\r\n    position: relative;\r\n    top:50px;\r\n}"

/***/ }),

/***/ "./src/app/components/manage-filter/manage-filter.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/manage-filter/manage-filter.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline\" action=\"/action_page.php\">\r\n  <div class=\"row m-l-neg-25\">\r\n    <div class=\"col-md-3 p-l-0 m-r-neg-30\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\">\r\n          <!-- <div class=\"col-md-3\"> -->\r\n          <label for=\"type\">Type</label>\r\n          <!-- </div> -->\r\n          <!-- <div class=\"col-md-9\"> -->\r\n          <select class=\"form-control\" id=\"type\">\r\n            <option>any</option>\r\n            <option>2</option>\r\n            <option>3</option>\r\n            <option>4</option>\r\n          </select>\r\n          <!-- </div> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12 m-t-15\">\r\n        <div class=\"form-group\">\r\n          <!-- <div class=\"col-md-4\"> -->\r\n          <label for=\"company\">Company</label>\r\n          <!-- </div> -->\r\n          <!-- <div class=\"col-md-8\"> -->\r\n          <select class=\"form-control w-155-px\" id=\"company\">\r\n            <option>any</option>\r\n            <option>2</option>\r\n            <option>3</option>\r\n            <option>4</option>\r\n          </select>\r\n          <!-- </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 p-l-0 m-r-neg-30\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\">\r\n          <!-- <div class=\"col-md-4\"> -->\r\n          <label for=\"jobName\">Job</label>\r\n          <!-- </div> -->\r\n          <!-- <div class=\"col-md-8\"> -->\r\n          <input type=\"text\" class=\"form-control\" id=\"jobName\" name=\"jobName\">\r\n          <!-- </div> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12  m-t-15\">\r\n        <div class=\"form-group\">\r\n          <!-- <div class=\"col-md-4\"> -->\r\n          <label for=\"profile\">Profile</label>\r\n          <!-- </div> -->\r\n          <!-- <div class=\"col-md-8\"> -->\r\n          <select class=\"form-control w-155-px\" id=\"profile\">\r\n            <option>any</option>\r\n            <option>2</option>\r\n            <option>3</option>\r\n            <option>4</option>\r\n          </select>\r\n          <!-- </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-3 p-l-0 m-r-neg-30\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\">\r\n          <!-- <div class=\"col-md-4\"> -->\r\n          <label for=\"oder\">Order #</label>\r\n          <!-- </div> -->\r\n          <!-- <div class=\"col-md-8\"> -->\r\n          <input type=\"text\" class=\"form-control\" id=\"order\" name=\"order\">\r\n          <!-- </div> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12  m-t-15\">\r\n        <div class=\"form-group\">\r\n          <!-- <div class=\"col-md-4\"> -->\r\n          <label for=\"jobId\">Job ID</label>\r\n          <!-- </div> -->\r\n          <!-- <div class=\"col-md-8\"> -->\r\n          <input type=\"text\" class=\"form-control\" id=\"jobId\" name=\"jobId\">\r\n          <!-- </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-3 p-l-0 m-r-neg-30\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\">\r\n          <!-- <div class=\"col-md-4\"> -->\r\n          <label for=\"environment\">Environment</label>\r\n          <!-- </div> -->\r\n          <!-- <div class=\"col-md-8\"> -->\r\n          <select class=\"form-control\" id=\"environment\">\r\n            <option>any</option>\r\n            <option>2</option>\r\n            <option>3</option>\r\n            <option>4</option>\r\n          </select>\r\n          <!-- </div> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12  m-t-15\">\r\n        <div class=\"form-group\">\r\n          <!-- <div class=\"col-md-3\"> -->\r\n          <label for=\"status\">Satus</label>\r\n          <!-- </div> -->\r\n          <!-- <div class=\"col-md-9\"> -->\r\n          <select class=\"form-control \" id=\"status\">\r\n            <option>any</option>\r\n            <option>2</option>\r\n            <option>3</option>\r\n            <option>4</option>\r\n          </select>\r\n          <!-- </div> -->\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"w-90 col-md-3 m-r-neg-30\">\r\n      <!-- <div class=\"col-md-offset-12\">\r\n        <button type=\"submit\" class=\"btn btn-default m-l-32\">Search</button>\r\n      </div> -->\r\n      <div class=\"col-md-12\">\r\n        <button type=\"submit\" class=\"btn btn-primary btn-pos\">Search</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"row m-t-15 m-l-neg-25 m-r-neg-25\">\r\n    <!-- <div class=\"col-md-3\">\r\n\r\n    </div> -->\r\n    <!-- \r\n    <div class=\"col-md-3\">\r\n  \r\n    </div> -->\r\n    <!-- \r\n    <div class=\"col-md-3\">\r\n\r\n    </div> -->\r\n    <!-- <div class=\"col-md-3\">\r\n\r\n\r\n   \r\n    </div> -->\r\n  </div>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/components/manage-filter/manage-filter.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/manage-filter/manage-filter.component.ts ***!
  \*********************************************************************/
/*! exports provided: ManageFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageFilterComponent", function() { return ManageFilterComponent; });
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

var ManageFilterComponent = /** @class */ (function () {
    function ManageFilterComponent() {
    }
    ManageFilterComponent.prototype.ngOnInit = function () {
    };
    ManageFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-filter',
            template: __webpack_require__(/*! ./manage-filter.component.html */ "./src/app/components/manage-filter/manage-filter.component.html"),
            styles: [__webpack_require__(/*! ./manage-filter.component.css */ "./src/app/components/manage-filter/manage-filter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManageFilterComponent);
    return ManageFilterComponent;
}());



/***/ }),

/***/ "./src/app/components/manage-jobs/manage-jobs.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/manage-jobs/manage-jobs.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .d-block{\n    display: block;\n}\n.d-inlline{\n    display: inline;\n}\n.t-heading{\n    position: relative;\n    left: -13px;\n    margin-top: 5px;\n}\n.new-schedule-job-pos{\n    position: relative;\n    top: 35px;\n    left:52px;\n\n}\n.pos-left-relative-85{\n    left: -85px;\n    position: relative;\n}\n.pageTitle{\n    text-align: center;\n    font-size: 20px;\n    font-weight: bold;\n    color:#068ff6;\n\n}\n.model-header{\n    padding-bottom: 0px;\n}\n.margin-top-2point5{\n    margin-top: -2.5rem;\n} */"

/***/ }),

/***/ "./src/app/components/manage-jobs/manage-jobs.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/manage-jobs/manage-jobs.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" (click)=\"openModal(scheduleJobTemplate)\"\n  class=\"col-md-offset-10 btn white-text new-schedule-job-pos z-index-9 app-back-color\">\n  New Schedule Job</button>\n\n<p-table #dt [columns]=\"cols\" [value]=\"manageJobs\" [paginator]=\"true\" [rows]=\"10\" (sortFunction)=\"tableSort($event)\"\n  [customSort]=\"true\">\n  <ng-template pTemplate=\"caption\">\n\n    <div class=\"d-block\">\n      <div class=\"d-inlline col-md-2 t-heading t-align-left\">\n        Job Results\n      </div>\n      <div class=\"d-inlline pos-left-relative-85\">\n        <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n        <input style=\"width:auto\" type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\"\n          (input)=\"dt.filterGlobal($event.target.value, 'contains')\">\n      </div>\n\n    </div>\n  </ng-template>\n  <ng-template pTemplate=\"header\" let-columns>\n    <tr>\n      <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n        {{col.header}}\n        <p-sortIcon *ngIf=\"!col.isLink\" [field]=\"col.field\"></p-sortIcon>\n      </th>\n    </tr>\n    <tr>\n      <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\n        <p-dropdown *ngIf=\"!col.isInput && !col.isNotVisible\" [options]=\"col.columnList\" [style]=\"{'width':'100%'}\"\n          (onChange)=\"dt.filter($event.value, col.field, 'equals')\"></p-dropdown>\n        <input *ngIf=\"col.isInput && !col.isNotVisible\" class=\"form-control\" type=\"text\"\n          (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\n      </th>\n    </tr>\n  </ng-template>\n\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n    <tr [pSelectableRow]=\"rowData\">\n      <td *ngFor=\"let col of columns\">\n        <span *ngIf=\"!col.isLink\">{{rowData[col.field]}}</span>\n        <span *ngIf=\"col.isLink\" style=\"color:blue; cursor: pointer;\"\n          (click)=\"showReviewJob(rowData, col.field, reviewJobTemplate)\">\n          {{rowData[col.field]}}\n        </span>\n      </td>\n    </tr>\n  </ng-template>\n\n</p-table>\n\n\n<!-- Modal -->\n<ng-template #scheduleJobTemplate>\n  <div class=\"modal-header\" data-backdrop=\"static\" data-keyboard=\"false\" style=\"text-align: center\">\n    <h4 class=\"modal-title\">\n      <div class=\"pageTitle\">Schedule Job</div>\n    </h4>\n    <button type=\"button\" class=\"close pull-right margin-top-2point5\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <app-schedule-job [(formData)]=\"cols\"></app-schedule-job>\n  </div>\n\n</ng-template>\n\n<ng-template #reviewJobTemplate>\n  <div class=\"modal-header\" style=\"text-align: center\">\n    <h4 class=\"modal-title\">\n      <div class=\"pageTitle\">Review Job</div>\n    </h4>\n    <button type=\"button\" class=\"close pull-right margin-top-2point5\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <app-review-job [(rowData)]=\"selectedRow\" (hideDialog)=\"modalRef.hide()\"></app-review-job>\n  </div>\n\n</ng-template>"

/***/ }),

/***/ "./src/app/components/manage-jobs/manage-jobs.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/manage-jobs/manage-jobs.component.ts ***!
  \*****************************************************************/
/*! exports provided: ManageJobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageJobsComponent", function() { return ManageJobsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/http/http.service */ "./src/app/shared/http/http.service.ts");
/* harmony import */ var _shared_data_table_data_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data-table/data-table.service */ "./src/app/shared/data-table/data-table.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_columnMenu_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/columnMenu.model */ "./src/app/models/columnMenu.model.ts");
/* harmony import */ var _assets_data_url_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/data/url.json */ "./src/assets/data/url.json");
var _assets_data_url_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/Object.assign({}, _assets_data_url_json__WEBPACK_IMPORTED_MODULE_5__, {"default": _assets_data_url_json__WEBPACK_IMPORTED_MODULE_5__});
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { Response } from '@angular/http';

var ManageJobsComponent = /** @class */ (function () {
    function ManageJobsComponent(http, modalService, router, dataTableService) {
        this.http = http;
        this.modalService = modalService;
        this.router = router;
        this.dataTableService = dataTableService;
        this.tableSort = this.dataTableService.tableSort;
    }
    ManageJobsComponent.prototype.ngOnInit = function () {
        this.typeColumnSet = new Set();
        this.companyColumnSet = new Set();
        this.profileColumnSet = new Set();
        this.envColumnSet = new Set();
        this.statusColumnSet = new Set();
        this.selectedRow = {};
        // this.fetch('../../../assets/data/company.json');
        this.fetch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + _assets_data_url_json__WEBPACK_IMPORTED_MODULE_5__["MANAGE_FETCH_JOBS"]);
    };
    ManageJobsComponent.prototype.openModal = function (template) {
        var config = {
            backdrop: true,
            ignoreBackdropClick: true,
            keyboard: false
        };
        this.modalRef = this.modalService.show(template, config);
    };
    // removeDuplicates(arr, prop) {
    //   return arr.filter((obj, pos, arr) => {
    //     return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    //   });
    // }
    ManageJobsComponent.prototype.bindDropdownMenus = function () {
        this.typeColumnSet.add(new _models_columnMenu_model__WEBPACK_IMPORTED_MODULE_4__["ColumnMenu"]('Any', null));
        this.companyColumnSet.add(new _models_columnMenu_model__WEBPACK_IMPORTED_MODULE_4__["ColumnMenu"]('Any', null));
        this.profileColumnSet.add(new _models_columnMenu_model__WEBPACK_IMPORTED_MODULE_4__["ColumnMenu"]('Any', null));
        this.envColumnSet.add(new _models_columnMenu_model__WEBPACK_IMPORTED_MODULE_4__["ColumnMenu"]('Any', null));
        this.statusColumnSet.add(new _models_columnMenu_model__WEBPACK_IMPORTED_MODULE_4__["ColumnMenu"]('Any', null));
        // this.typeColumnSet = this.removeDuplicates(this.manageJobs, 'type');
        // this.companyColumnSet = this.removeDuplicates(this.manageJobs, 'company');
        // this.profileColumnSet = this.removeDuplicates(this.manageJobs, 'profile');
        // this.envColumnSet = this.removeDuplicates(this.manageJobs, 'environment');
        // this.statusColumnSet = this.removeDuplicates(this.manageJobs, 'status');
        // Fixme
        for (var _i = 0, _a = this.manageJobs; _i < _a.length; _i++) {
            var jobObj = _a[_i];
            // if (!this.typeColumnSet.has(new ColumnMenu(jobObj.type, jobObj.type))) {
            this.typeColumnSet.add(new _models_columnMenu_model__WEBPACK_IMPORTED_MODULE_4__["ColumnMenu"](jobObj.type, jobObj.type));
            //   }
            this.companyColumnSet.add(new _models_columnMenu_model__WEBPACK_IMPORTED_MODULE_4__["ColumnMenu"](jobObj.company, jobObj.company));
            this.profileColumnSet.add(new _models_columnMenu_model__WEBPACK_IMPORTED_MODULE_4__["ColumnMenu"](jobObj.profile, jobObj.profile));
            this.envColumnSet.add(new _models_columnMenu_model__WEBPACK_IMPORTED_MODULE_4__["ColumnMenu"](jobObj.environment, jobObj.environment));
            this.statusColumnSet.add(new _models_columnMenu_model__WEBPACK_IMPORTED_MODULE_4__["ColumnMenu"](jobObj.status, jobObj.status));
        }
    };
    ManageJobsComponent.prototype.fetch = function (url) {
        var _this = this;
        // et params = new HttpParams().set("paramName", paramValue).set("paramName2", paramValueNext); //Create new HttpParams
        this.http.sendGettRequest(url).subscribe(function (res) {
            for (var _i = 0, _a = res.results; _i < _a.length; _i++) {
                var astData = _a[_i];
                astData['results'] = "Results";
            }
            console.log(res.results);
            _this.manageJobs = res.results;
            _this.bindDropdownMenus();
            // yourArray.map((item: any) => item.id)
            var typeArr = Array.from(_this.typeColumnSet.values());
            _this.cols = [
                { field: 'type', header: 'Type', isInput: false, columnList: _this.dataTableService.removeDuplicates(typeArr, 'label') },
                { field: 'company', header: 'Company', isInput: false, columnList: _this.dataTableService.removeDuplicates(Array.from(_this.companyColumnSet.values()), 'label') },
                { field: 'environment', header: 'Environment', isInput: false, columnList: _this.dataTableService.removeDuplicates(Array.from(_this.envColumnSet.values()), 'label') },
                { field: 'jobName', header: 'Job Name', isInput: true },
                { field: 'profile', header: 'Profile', isInput: false, columnList: _this.dataTableService.removeDuplicates(Array.from(_this.profileColumnSet.values()), 'label') },
                { field: 'order', header: 'Order', isInput: true },
                { field: 'jobId', header: 'Job ID', isInput: true },
                { field: 'status', header: 'Status', isInput: false, columnList: _this.dataTableService.removeDuplicates(Array.from(_this.statusColumnSet.values()), 'label') },
                { field: 'statusDate', header: 'Status date', isInput: true, isNotVisible: true },
                { field: 'results', header: ' ', isLink: true, isInput: true, isNotVisible: true, isNoSorting: true },
            ];
        });
    };
    ManageJobsComponent.prototype.showReviewJob = function (data, flag, template) {
        this.onRowSelect({ data: data }, template);
    };
    ManageJobsComponent.prototype.onRowSelect = function (event, template) {
        // this.msgs = [{ severity: 'info', summary: 'Car Selected', detail: 'Vin: ' + event.data.vin }];
        // console.log(event.data);
        // this.router.navigate(['/home']);
        this.selectedRow = event.data;
        this.openModal(template);
    };
    ManageJobsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-jobs',
            template: __webpack_require__(/*! ./manage-jobs.component.html */ "./src/app/components/manage-jobs/manage-jobs.component.html"),
            styles: [__webpack_require__(/*! ./manage-jobs.component.css */ "./src/app/components/manage-jobs/manage-jobs.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _shared_data_table_data_table_service__WEBPACK_IMPORTED_MODULE_2__["DataTableService"]])
    ], ManageJobsComponent);
    return ManageJobsComponent;
}());



/***/ }),

/***/ "./src/app/components/online/online.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/online/online.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/online/online.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/online/online.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-table #dt [columns]=\"cols\" [value]=\"manageOnline\" [paginator]=\"true\" sortField=\"createdDate\" [sortOrder]=\"-1\"\n  [rows]=\"10\" (sortFunction)=\"tableSort($event)\" [customSort]=\"true\">\n  <ng-template pTemplate=\"caption\">\n\n    <div class=\"d-block\">\n      <div class=\"d-inlline col-md-2 t-heading t-align-left\">\n        Online\n      </div>\n      <div class=\"d-inlline pos-left-relative-85\">\n        <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n        <input style=\"width:auto\" type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\"\n          (input)=\"dt.filterGlobal($event.target.value, 'contains')\">\n      </div>\n\n    </div>\n  </ng-template>\n  <ng-template pTemplate=\"header\" let-columns>\n    <tr>\n      <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n        {{col.header}}\n        <p-sortIcon *ngIf=\"!col.isNoSorting\" [field]=\"col.field\"></p-sortIcon>\n      </th>\n      <!-- <th>\n        Download\n      </th>\n      <th>\n        Delete\n      </th> -->\n    </tr>\n    <tr>\n      <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\n        <p-dropdown *ngIf=\"!col.isInput && !col.isNotVisible\" [options]=\"col.columnList\" [style]=\"{'width':'100%'}\"\n          (onChange)=\"dt.filter($event.value, col.field, 'equals')\"></p-dropdown>\n        <input *ngIf=\"col.isInput && !col.isNotVisible\" class=\"form-control\" type=\"text\"\n          (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\n      </th>\n    </tr>\n\n  </ng-template>\n\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n    <tr [pSelectableRow]=\"rowData\">\n      <td *ngFor=\"let col of columns\">\n        <span *ngIf=\"!col.isLink\">{{rowData[col.field]}}</span>\n\n      </td>\n\n    </tr>\n  </ng-template>\n\n</p-table>"

/***/ }),

/***/ "./src/app/components/online/online.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/online/online.component.ts ***!
  \*******************************************************/
/*! exports provided: OnlineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineComponent", function() { return OnlineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/http/http.service */ "./src/app/shared/http/http.service.ts");
/* harmony import */ var _shared_data_table_data_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data-table/data-table.service */ "./src/app/shared/data-table/data-table.service.ts");
/* harmony import */ var _assets_data_url_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/data/url.json */ "./src/assets/data/url.json");
var _assets_data_url_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/Object.assign({}, _assets_data_url_json__WEBPACK_IMPORTED_MODULE_3__, {"default": _assets_data_url_json__WEBPACK_IMPORTED_MODULE_3__});
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OnlineComponent = /** @class */ (function () {
    function OnlineComponent(http, dataTableService) {
        this.http = http;
        this.dataTableService = dataTableService;
        this.tableSort = this.dataTableService.tableSort;
    }
    OnlineComponent.prototype.ngOnInit = function () {
        this.fetch(_assets_data_url_json__WEBPACK_IMPORTED_MODULE_3__["API"] + _assets_data_url_json__WEBPACK_IMPORTED_MODULE_3__["GET_ORDERS"]);
    };
    OnlineComponent.prototype.fetch = function (url) {
        var _this = this;
        // et params = new HttpParams().set("paramName", paramValue).set("paramName2", paramValueNext); //Create new HttpParams
        this.http.sendGettRequest(url).subscribe(function (res) {
            console.log(res.results);
            var responseObj = res.results;
            // console.log(responseObj, '00000');
            _this.manageOnline = responseObj; //res.results;
            // yourArray.map((item: any) => item.id)
            _this.cols = [
                { field: 'orderId', header: 'Order ID', isInput: true },
                { field: 'proofType', header: 'Proof Type', isInput: true },
                { field: 'policyOrQuote', header: 'Policy or Quote', isInput: true },
                { field: 'requestTime', header: 'Request Time', isNotVisible: true },
                { field: 'fileSize', header: 'File Size', isInput: true },
                { field: 'mode', header: 'Mode', isInput: true },
                { field: 'orderedBy', header: 'Ordered By', isInput: true },
                { field: 'active', header: 'Active', isInput: true },
                { field: 'pages', header: 'Pages', isInput: true },
                { field: 'createdDate', header: 'Created Date', isNotVisible: true },
            ];
        });
    };
    OnlineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-online',
            template: __webpack_require__(/*! ./online.component.html */ "./src/app/components/online/online.component.html"),
            styles: [__webpack_require__(/*! ./online.component.css */ "./src/app/components/online/online.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _shared_data_table_data_table_service__WEBPACK_IMPORTED_MODULE_2__["DataTableService"]])
    ], OnlineComponent);
    return OnlineComponent;
}());



/***/ }),

/***/ "./src/app/components/review-job/review-job.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/review-job/review-job.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".required{\r\n    color:red;\r\n  }\r\n  .margin-top-0px{\r\n      margin-top: 0;\r\n      margin-bottom: 0;\r\n      margin-bottom: 0.5rem;\r\n  }\r\n  .custom-dropdown{\r\n      height: 3rem;min-height: 0;margin-top: 7px;\r\n  }\r\n  .formFields-height{\r\n      height: 3rem;min-height: 0;margin-top: 7px;\r\n  }\r\n  .pageTitle{\r\n      text-align: center;\r\n      font-size: 20px;\r\n      font-weight: bold;\r\n      color:#068ff6;\r\n      margin-bottom: 1rem;\r\n      margin-top: 0.7rem;\r\n  }\r\n  .pageHeader{\r\n      background-color: #068ff6;\r\n      /* height: 3rem; */\r\n      color: #fff;\r\n      padding-top: 2px;\r\n      padding-left: 20px;\r\n      font-size: 16px;\r\n      font-weight: normal;\r\n      /* margin-top: 3rem; */\r\n  }\r\n  .form-control:focus {\r\n      border-color:#068ff6;\r\n  }\r\n  .signup-form {\r\n      width: 55rem;\r\n      /* margin: 0 auto; */\r\n      padding: 30px 0;\r\n  }\r\n  .signup-form form {\r\n      color: #999;\r\n      border-radius: 3px;\r\n      margin-bottom: 15px;\r\n      background: #fff;\r\n      /* box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3); */\r\n      padding: 30px;\r\n  }\r\n  .signup-form label {\r\n      font-weight: normal;\r\n      font-size: 14px;\r\n  }\r\n  a:link, a:visited,a.hover,a.active {\r\n      text-decoration: underline;\r\n      color: crimson;\r\n      margin-right: 1rem;\r\n  }\r\n  .link-row{\r\n      margin-bottom: 2rem;\r\n      text-align: center;\r\n      margin-top: 2rem;\r\n  }\r\n  .link-row span{\r\n    text-decoration: underline;\r\n    padding: 10px;\r\n    color: #980202;\r\n    font-weight: 500;\r\n    cursor: pointer;\r\n  }"

/***/ }),

/***/ "./src/app/components/review-job/review-job.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/review-job/review-job.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"signup-form m-l-1rem\" style=\"padding: 0;\">\r\n      <form [formGroup]=\"reviewJob\" class=\"form-horizontal\" style=\"padding: 0;padding-bottom: 1rem;padding-top: 1rem;\">\r\n        <!-- <div class=\"pageTitle\">Review Job</div> -->\r\n        <div class=\"pageHeader\">Job Information</div>\r\n        <div class=\"form-group margin-top-0px\">\r\n          <label class=\"control-label col-xs-4 col-md-4\" style=\"margin-top: 11px;padding-top: 0px;color: #777;\">{{jobLabels.Type}}\r\n          </label>\r\n          <div class=\"col-xs-6 col-md-6\">\r\n            <input type=\"text\" formControlName=\"type\" class=\"form-control formFields-height\" />\r\n            <!-- <div *ngIf=\"submitted && f.jobName.errors\" class=\"invalid-feedback required\">\r\n              <div *ngIf=\"f.jobName.errors.required\">Job Name is required</div>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group margin-top-0px\">\r\n          <label class=\"control-label col-xs-4 col-md-4\" style=\"margin-top: 11px;padding-top: 0px;color: #777;\">{{jobLabels.Company}}\r\n          </label>\r\n          <div class=\"col-xs-6 col-md-6\">\r\n            <input type=\"text\" formControlName=\"company\" class=\"form-control formFields-height\" />\r\n            <!-- <div *ngIf=\"submitted && f.jobName.errors\" class=\"invalid-feedback required\">\r\n                <div *ngIf=\"f.jobName.errors.required\">Job Name is required</div>\r\n              </div> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group margin-top-0px\">\r\n          <label class=\"control-label col-xs-4 col-md-4\" style=\"margin-top: 11px;padding-top: 0px;color: #777;\">{{jobLabels.jobId}}\r\n          </label>\r\n          <div class=\"col-xs-6 col-md-6\">\r\n            <input type=\"text\" formControlName=\"jobID\" class=\"form-control formFields-height\" />\r\n            <!-- <div *ngIf=\"submitted && f.jobName.errors\" class=\"invalid-feedback required\">\r\n                  <div *ngIf=\"f.jobName.errors.required\">Job Name is required</div>\r\n                </div> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group margin-top-0px\">\r\n          <label class=\"control-label col-xs-4 col-md-4\" style=\"margin-top: 11px;padding-top: 0px;color: #777;\">{{jobLabels.jobName}}\r\n          </label>\r\n          <div class=\"col-xs-6 col-md-6\">\r\n            <input type=\"text\" formControlName=\"jobName\" class=\"form-control formFields-height\" />\r\n            <!-- <div *ngIf=\"submitted && f.jobName.errors\" class=\"invalid-feedback required\">\r\n                    <div *ngIf=\"f.jobName.errors.required\">Job Name is required</div>\r\n                  </div> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group margin-top-0px\">\r\n          <label class=\"control-label col-xs-4 col-md-4\" style=\"margin-top: 11px;padding-top: 0px;color: #777;\">{{jobLabels.scheduleDate}}\r\n          </label>\r\n          <div class=\"col-xs-6 col-md-6\">\r\n            <input type=\"text\" formControlName=\"statusDate\" class=\"form-control formFields-height\" />\r\n            <!-- <div *ngIf=\"submitted && f.jobName.errors\" class=\"invalid-feedback required\">\r\n                      <div *ngIf=\"f.jobName.errors.required\">Job Name is required</div>\r\n                    </div> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group margin-top-0px\">\r\n          <label class=\"control-label col-xs-4 col-md-4\" style=\"margin-top: 11px;padding-top: 0px;color: #777;\">{{jobLabels.scheduleTime}}\r\n          </label>\r\n          <div class=\"col-xs-6 col-md-6\">\r\n            <input type=\"text\" formControlName=\"statusTime\" class=\"form-control formFields-height\" />\r\n            <!-- <div *ngIf=\"submitted && f.jobName.errors\" class=\"invalid-feedback required\">\r\n                        <div *ngIf=\"f.jobName.errors.required\">Job Name is required</div>\r\n                      </div> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group margin-top-0px\">\r\n          <label class=\"control-label col-xs-4 col-md-4\" style=\"margin-top: 11px;padding-top: 0px;color: #777;\">{{jobLabels.currentStatus}}\r\n          </label>\r\n          <div class=\"col-xs-6 col-md-6\">\r\n            <input type=\"text\" formControlName=\"currentStatus\" class=\"form-control formFields-height\" />\r\n            <!-- <div *ngIf=\"submitted && f.jobName.errors\" class=\"invalid-feedback required\">\r\n                          <div *ngIf=\"f.jobName.errors.required\">Job Name is required</div>\r\n                        </div> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group margin-top-0px\">\r\n          <label class=\"control-label col-xs-4 col-md-4\" style=\"margin-top: 11px;padding-top: 0px;color: #777;\">{{jobLabels.Environment}}\r\n          </label>\r\n          <div class=\"col-xs-6 col-md-6\">\r\n            <input type=\"text\" formControlName=\"environment\" class=\"form-control formFields-height\" />\r\n            <!-- <div *ngIf=\"submitted && f.jobName.errors\" class=\"invalid-feedback required\">\r\n                            <div *ngIf=\"f.jobName.errors.required\">Job Name is required</div>\r\n                          </div> -->\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row link-row\">\r\n          <span (click)=\"download('production.xls')\">{{linkLabels.productionSummary}}</span>\r\n          <span (click)=\"download('controlreport.xls')\">{{linkLabels.controlReport}}</span>\r\n          <span (click)=\"download('downloadProof.xls')\">{{linkLabels.downloadProofs}}</span>\r\n          <span (click)=\"approveJob(true)\">{{linkLabels.Approve}}</span>\r\n          <span (click)=\"approveJob(false)\">{{linkLabels.cancelJob}}</span>\r\n\r\n        </div>\r\n        <div style=\"border: 1px solid #ddd;\">\r\n          <table class=\"table table-striped\" style=\"margin-bottom: 0;\">\r\n            <thead>\r\n              <tr class=\"pageHeader\">\r\n                <th style=\"padding-top: 0;padding-bottom: 0;padding-left: 2rem;\">Job Events</th>\r\n                <th style=\"padding-top: 0;padding-bottom: 0; padding-left: 2rem;\">Event Date</th>\r\n                <th style=\"padding-top: 0;padding-bottom: 0;padding-left: 2rem;\">User</th>\r\n              </tr>\r\n            </thead>\r\n          </table>\r\n          <div style=\"width:100%;overflow:auto; max-height:100px;\">\r\n            <table class=\"table table-striped\">\r\n              <tbody>\r\n                <tr *ngFor=\"let option of reviewJobEvents\">\r\n                  <td>{{option.jobEvents}}</td>\r\n                  <td>{{option.eventDate}}</td>\r\n                  <td>{{option.user}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"h-30 t-align-center padding-all m-t-10\">\r\n            <span [(innerHTML)]=\"statusMsg\"></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group text-center\" style=\"margin-top: 2rem;text-align: right;\">\r\n          <button class=\"btn btn-primary\" (click)=\"hidepopUp()\" style=\"outline:none;margin-right: 3.5rem !important;padding: 3px 18px; background-color: #068ff6;\">Close</button>\r\n        </div>\r\n        <!-- <div class=\"text-center\" style=\"margin-top: 1rem;\">\r\n          <button type=\"button\" class=\"btn btn-primary\">Close</button>\r\n        </div> -->\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/review-job/review-job.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/review-job/review-job.component.ts ***!
  \***************************************************************/
/*! exports provided: ReviewJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewJobComponent", function() { return ReviewJobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _assets_data_form_labels_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/data/form-labels.json */ "./src/assets/data/form-labels.json");
var _assets_data_form_labels_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/Object.assign({}, _assets_data_form_labels_json__WEBPACK_IMPORTED_MODULE_2__, {"default": _assets_data_form_labels_json__WEBPACK_IMPORTED_MODULE_2__});
/* harmony import */ var _shared_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/http/http.service */ "./src/app/shared/http/http.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _assets_data_url_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/data/url.json */ "./src/assets/data/url.json");
var _assets_data_url_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/Object.assign({}, _assets_data_url_json__WEBPACK_IMPORTED_MODULE_5__, {"default": _assets_data_url_json__WEBPACK_IMPORTED_MODULE_5__});
/* harmony import */ var _assets_data_app_data_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/data/app-data.json */ "./src/assets/data/app-data.json");
var _assets_data_app_data_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/Object.assign({}, _assets_data_app_data_json__WEBPACK_IMPORTED_MODULE_6__, {"default": _assets_data_app_data_json__WEBPACK_IMPORTED_MODULE_6__});
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReviewJobComponent = /** @class */ (function () {
    function ReviewJobComponent(formBuilder, httpService) {
        this.formBuilder = formBuilder;
        this.httpService = httpService;
        this.hideDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ReviewJobComponent.prototype.hidepopUp = function () {
        this.hideDialog.emit();
    };
    ReviewJobComponent.prototype.download = function (fileName) {
        this.httpService.sendGetDownloadtRequest(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + _assets_data_url_json__WEBPACK_IMPORTED_MODULE_5__["DOWNLOAD"], { fileName: fileName }).subscribe(function (res) {
            // TODO: hanld the download response
        });
    };
    ReviewJobComponent.prototype.approveJob = function (isApprove) {
        var _this = this;
        this.httpService.sendPostRequest(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + _assets_data_url_json__WEBPACK_IMPORTED_MODULE_5__["APPROVEREQUEST"], { isApproved: isApprove, jobName: this.rowData.jobName }).subscribe(function (res) {
            if (res.responseCode === 5555) {
                _this.statusMsg = "<span class='valid-feedback'>" + res.message + "</span>";
            }
            else {
                _this.statusMsg = "<span class='required'>Something went wrong please try again!</span>";
            }
            setTimeout(function () {
                this.statusMsg = '';
            }.bind(_this), 10000);
        });
    };
    ReviewJobComponent.prototype.ngOnInit = function () {
        this.jobLabels = _assets_data_form_labels_json__WEBPACK_IMPORTED_MODULE_2__.scheduleJob;
        this.linkLabels = _assets_data_form_labels_json__WEBPACK_IMPORTED_MODULE_2__.links;
        this.reviewJobEvents = _assets_data_app_data_json__WEBPACK_IMPORTED_MODULE_6__["reviewJobEvents"];
        console.log(_assets_data_app_data_json__WEBPACK_IMPORTED_MODULE_6___namespace);
        console.log(this.linkLabels);
        var stringToSplit = this.rowData.statusDate;
        var date = stringToSplit.split(" ");
        this.reviewJob = this.formBuilder.group({
            type: [{ value: this.rowData.type, disabled: true }],
            company: [{ value: this.rowData.company, disabled: true }],
            environment: [{ value: this.rowData.environment, disabled: true }],
            jobID: [{ value: this.rowData.jobID, disabled: true }],
            currentStatus: [{ value: this.rowData.status, disabled: true }],
            jobName: [{ value: this.rowData.jobName, disabled: true }],
            statusDate: [{ value: date[0], disabled: true }],
            statusTime: [{ value: date[1] + " " + date[2], disabled: true }]
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReviewJobComponent.prototype, "rowData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ReviewJobComponent.prototype, "hideDialog", void 0);
    ReviewJobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review-job',
            template: __webpack_require__(/*! ./review-job.component.html */ "./src/app/components/review-job/review-job.component.html"),
            styles: [__webpack_require__(/*! ./review-job.component.css */ "./src/app/components/review-job/review-job.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _shared_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], ReviewJobComponent);
    return ReviewJobComponent;
}());



/***/ }),

/***/ "./src/app/components/schedule-job/schedule-job.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/schedule-job/schedule-job.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.margin-top-0px{\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    margin-bottom: 0.5rem;\r\n}\r\n.custom-dropdown{\r\n    height: 3rem;min-height: 0;margin-top: 7px;\r\n}\r\n.formFields-height{\r\n    height: 3rem;min-height: 0;margin-top: 7px;\r\n}\r\n.pageHeader{\r\n    background-color: #068ff6;\r\n    /* height: 3rem; */\r\n    color: #fff;\r\n    padding-top: 2px;\r\n    padding-left: 20px;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    /* margin-top: 3rem; */\r\n}\r\n.form-control:focus {\r\n    border-color:#068ff6;\r\n}\r\n.signup-form {\r\n    width: 50rem;\r\n    margin-left:35px;\r\n    padding: 30px 0;\r\n}\r\n.signup-form form {\r\n    color: #999;\r\n    border-radius: 3px;\r\n    margin-bottom: 15px;\r\n    background: #fff;\r\n    /* box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3); */\r\n    padding: 30px;\r\n}\r\n.signup-form label {\r\n    font-weight: normal;\r\n    font-size: 14px;\r\n}\r\na:link, a:visited,a.hover,a.active {\r\n    text-decoration: underline;\r\n    color: crimson;\r\n    margin-right: 1rem;\r\n}\r\n.link-row-custom{\r\n    margin-bottom: 2rem;\r\n    text-align: center;\r\n    margin-top: 2rem;\r\n}\r\n.switch {\r\n    position: absolute;\r\n    width: 12rem;\r\n    height:2.5rem;\r\n    text-align: center;\r\n    /* background:#068ff6; */\r\n    transition: all 0.2s ease;\r\n    border-radius: 25px;\r\n    border: 1px solid #068ff6;\r\n  }\r\n/* .switch span {\r\n    position: absolute;\r\n    width: 20px;\r\n    height: 4px;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin: -2px 0px 0px -4px;\r\n    background: #fff;\r\n    display: block;\r\n    transform: rotate(-45deg);\r\n    transition: all 0.2s ease;\r\n  }\r\n  .switch span:after {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    width: 4px;\r\n    height: 12px;\r\n    margin-top: -8px;\r\n    background: #fff;\r\n    transition: all 0.2s ease;\r\n  }  */\r\ninput[type=radio] {\r\n    display: none;\r\n  }\r\n.switch label {\r\n    cursor: pointer;\r\n    color:#068ff6;\r\n    width: 6rem;\r\n    line-height: 2.5rem;\r\n    transition: all 0.2s ease;\r\n  }\r\nlabel[for=yes] {\r\n    position: absolute;\r\n    left: 0px;\r\n    /* height: 20px; */\r\n  }\r\nlabel[for=no] {\r\n    position: absolute;\r\n    right: 0px;\r\n  }\r\n/* #no:checked ~ .switch span {\r\n    background: #fff;\r\n    margin-left: -8px;\r\n  }\r\n  #no:checked ~ .switch span:after {\r\n    background: #fff;\r\n    height: 20px;\r\n    margin-top: -8px;\r\n    margin-left: 8px;\r\n  } */\r\n#yes:checked ~ .switch label[for=yes] {\r\n    color: #fff;\r\n    background-color:#068ff6;    \r\n    /* height: 23px; */\r\n    line-height: 2.3rem;\r\n  }\r\n#no:checked ~ .switch label[for=no] {\r\n    color: #fff;\r\n    background-color:#068ff6;\r\n    line-height: 2.3rem;\r\n  }\r\n "

/***/ }),

/***/ "./src/app/components/schedule-job/schedule-job.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/schedule-job/schedule-job.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"signup-form\" style=\"padding: 0;\">\r\n      <form [formGroup]=\"registerForm\" class=\"form-horizontal\" (ngSubmit)=\"onSubmit()\" style=\"padding: 0;padding-bottom: 1rem;padding-top: 1rem;\">\r\n\r\n        <div class=\"pageHeader\">Job Configuration</div>\r\n        <div class=\"form-group margin-top-0px\">\r\n          <label class=\"control-label col-xs-4 col-md-4\" style=\"margin-top: 11px;padding-top: 0px;color: #777;\">{{jobLabels.Type}}</label>\r\n          <div class=\"col-xs-6 col-md-6\">\r\n            <span class=\"input-group-btn\">\r\n              <select class=\"form-control formFields-height custom-dropdown\" formControlName=\"type\" [ngClass]=\"{ 'is-invalid': submitted && f.type.errors }\">\r\n                <!-- <option value=\"\">Select</option> -->\r\n                <ng-container *ngFor=\"let option of types\">\r\n                  <option *ngIf=\"option.value\" [ngValue]=\"option.value\">{{option.label}}</option>\r\n                </ng-container>\r\n              </select>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group margin-top-0px\">\r\n          <label class=\"control-label col-xs-4 col-md-4\" style=\"margin-top: 11px;padding-top: 0px;color: #777;\">{{jobLabels.Company}}</label>\r\n          <div class=\"col-xs-6 col-md-6\">\r\n            <span class=\"input-group-btn\">\r\n              <select class=\"form-control formFields-height custom-dropdown\" formControlName=\"company\" [ngClass]=\"{ 'is-invalid': submitted && f.company.errors }\">\r\n                <!-- <option value=\"\">Select</option> -->\r\n                <ng-container *ngFor=\"let option of companies\">\r\n                  <option *ngIf=\"option.value\" [ngValue]=\"option.value\">{{option.label}}</option>\r\n                </ng-container>\r\n              </select>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"pageHeader\">Job Information</div>\r\n        <div class=\"form-group margin-top-0px\">\r\n          <label class=\"control-label col-xs-4 col-md-4\" style=\"margin-top: 11px;padding-top: 0px;color: #777;\">{{jobLabels.Environment}}</label>\r\n          <div class=\"col-xs-6 col-md-6\">\r\n            <span class=\"input-group-btn\">\r\n              <select class=\"form-control formFields-height custom-dropdown\" formControlName=\"environment\" [ngClass]=\"{ 'is-invalid': submitted && f.environment.errors }\">\r\n                <!-- <option value=\"\">Select</option> -->\r\n                <ng-container *ngFor=\"let option of environments\">\r\n                  <option *ngIf=\"option.value\" [ngValue]=\"option.value\">{{option.label}}</option>\r\n                </ng-container>\r\n              </select>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group margin-top-0px\">\r\n          <label class=\"control-label col-xs-4 col-md-4\" style=\"margin-top: 11px;padding-top: 0px;color: #777;\">{{jobLabels.jobName}}\r\n            <span class=\"required\">*</span>\r\n          </label>\r\n          <div class=\"col-xs-6 col-md-6\">\r\n            <input type=\"text\" formControlName=\"jobName\" class=\"form-control formFields-height\" [ngClass]=\"{ 'is-invalid': submitted && f.jobName.errors }\"\r\n            />\r\n            <div *ngIf=\"submitted && f.jobName.errors\" class=\"invalid-feedback required\">\r\n              <div *ngIf=\"f.jobName.errors.required\">Job Name is required</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=false class=\"form-group margin-top-0px\">\r\n          <label class=\"control-label col-xs-4 col-md-4\" style=\"margin-top: 11px;padding-top: 0px;color: #777;\">Copy Type:</label>\r\n\r\n        </div>\r\n\r\n        <div *ngIf=false class=\"form-group margin-top-0px\">\r\n          <label class=\"control-label col-xs-4 col-md-4\" style=\"margin-top: 11px;padding-top: 0px;color: #777;\">Statement Period:</label>\r\n\r\n        </div>\r\n\r\n        <div class=\"pageHeader\">Job Scheduling</div>\r\n        <div class=\"form-group margin-top-0px\">\r\n          <label class=\"control-label col-xs-4 col-md-4\" style=\"margin-top: 0.5rem;padding-top: 0px;color: #777;\">{{jobLabels.runImmediately}}</label>\r\n          <div class=\"col-xs-6 col-md-6\" style=\"margin-top: 0.5rem;\">\r\n            <div class=\"toggle-radio\">\r\n              <input type=\"radio\" value=\"true\" formControlName=\"runImmediately\" id=\"yes\">\r\n              <input type=\"radio\" value=\"false\" formControlName=\"runImmediately\" id=\"no\" [checked]=\"true\">\r\n              <div class=\"switch\">\r\n                <label for=\"yes\" style=\"border-bottom-left-radius: 12px;border-top-left-radius: 12px;\">Yes</label>\r\n                <label for=\"no\" style=\"border-bottom-right-radius: 12px;border-top-right-radius: 12px;\">No</label>\r\n                <span></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group margin-top-0px\">\r\n          <label class=\"control-label col-xs-4 col-md-4\" style=\"margin-top: 1.5rem;padding-top: 0px;color: #777;\">{{jobLabels.scheduleDate}}</label>\r\n          <div class=\"col-xs-6 col-md-6 m-t-1rem\">\r\n            <p-calendar formControlName=\"date\" [utc]='true' [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"2000:2030\" [showIcon]=\"true\"></p-calendar>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group margin-top-0px\">\r\n          <label class=\"control-label col-xs-4 col-md-4\" style=\"margin-top: 1rem;padding-top: 0px;color: #777;\">{{jobLabels.scheduleTime}}</label>\r\n          <div class=\"col-xs-6 col-md-6 m-t-0-5rem\">\r\n            <p-calendar formControlName=\"time\" [utc]='true' [hourFormat]=\"12\" [timeOnly]=\"true\"></p-calendar>\r\n          </div>\r\n        </div>\r\n        <div class=\"row t-align-center\">\r\n          <div [(innerHTML)]=\"statusMsg\"></div>\r\n        </div>\r\n        <div class=\"form-group t-align-right\" style=\"margin-top: 2rem;\">\r\n          <button class=\"btn app-back-color white-text\" style=\"outline:none;margin-right: 10.5rem !important;padding: 3px 18px; \">Save</button>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/schedule-job/schedule-job.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/schedule-job/schedule-job.component.ts ***!
  \*******************************************************************/
/*! exports provided: ScheduleJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleJobComponent", function() { return ScheduleJobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _assets_data_form_labels_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/data/form-labels.json */ "./src/assets/data/form-labels.json");
var _assets_data_form_labels_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/Object.assign({}, _assets_data_form_labels_json__WEBPACK_IMPORTED_MODULE_2__, {"default": _assets_data_form_labels_json__WEBPACK_IMPORTED_MODULE_2__});
/* harmony import */ var _shared_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/http/http.service */ "./src/app/shared/http/http.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _assets_data_responseCodes_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/data/responseCodes.json */ "./src/assets/data/responseCodes.json");
var _assets_data_responseCodes_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/Object.assign({}, _assets_data_responseCodes_json__WEBPACK_IMPORTED_MODULE_5__, {"default": _assets_data_responseCodes_json__WEBPACK_IMPORTED_MODULE_5__});
/* harmony import */ var _assets_data_url_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/data/url.json */ "./src/assets/data/url.json");
var _assets_data_url_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/Object.assign({}, _assets_data_url_json__WEBPACK_IMPORTED_MODULE_6__, {"default": _assets_data_url_json__WEBPACK_IMPORTED_MODULE_6__});
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ScheduleJobComponent = /** @class */ (function () {
    function ScheduleJobComponent(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.submitted = false;
    }
    ScheduleJobComponent.prototype.initForm = function () {
        this.types = this.formData[0].columnList;
        this.companies = this.formData[1].columnList;
        this.environments = this.formData[2].columnList;
        this.registerForm = this.formBuilder.group({
            type: [this.types[1].value],
            company: [this.companies[1].value],
            environment: [this.environments[1].value],
            jobName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            date: [''], time: [''],
            runImmediately: ['false']
        });
    };
    ScheduleJobComponent.prototype.ngOnInit = function () {
        this.jobLabels = _assets_data_form_labels_json__WEBPACK_IMPORTED_MODULE_2__.scheduleJob;
        this.initForm();
        console.log(this);
    };
    Object.defineProperty(ScheduleJobComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    ScheduleJobComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.registerForm.invalid) {
            this.statusMsg = '';
            return;
        }
        this.http.sendFileUploadPostRequest(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + _assets_data_url_json__WEBPACK_IMPORTED_MODULE_6__["SCHEDULE_JOB"], this.registerForm.value).subscribe(function (res) {
            if (res.responseCode === _assets_data_responseCodes_json__WEBPACK_IMPORTED_MODULE_5__.SUCCESS) {
                _this.statusMsg = "<span class='valid-feedback'>" + res.message + "</span>";
                _this.initForm();
            }
            else if (res.responseCode === _assets_data_responseCodes_json__WEBPACK_IMPORTED_MODULE_5__.DUPLICATE) {
                _this.statusMsg = "<span class='required'>" + res.message + "</span>";
            }
            else {
                _this.statusMsg = "<span class='required'>Something went wrong please try again!</span>";
            }
            _this.submitted = false;
            setTimeout(function () {
                this.statusMsg = '';
            }.bind(_this), 5000);
        });
        // alert(JSON.stringify(this.registerForm.value));
        // console.log(JSON.stringify(this.registerForm.value));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ScheduleJobComponent.prototype, "formData", void 0);
    ScheduleJobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schedule-job',
            template: __webpack_require__(/*! ./schedule-job.component.html */ "./src/app/components/schedule-job/schedule-job.component.html"),
            styles: [__webpack_require__(/*! ./schedule-job.component.css */ "./src/app/components/schedule-job/schedule-job.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _shared_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], ScheduleJobComponent);
    return ScheduleJobComponent;
}());



/***/ }),

/***/ "./src/app/components/under-dev/under-dev.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/under-dev/under-dev.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/components/under-dev/under-dev.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/under-dev/under-dev.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Under development\r\n</p>"

/***/ }),

/***/ "./src/app/components/under-dev/under-dev.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/under-dev/under-dev.component.ts ***!
  \*************************************************************/
/*! exports provided: UnderDevComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderDevComponent", function() { return UnderDevComponent; });
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

var UnderDevComponent = /** @class */ (function () {
    function UnderDevComponent() {
    }
    UnderDevComponent.prototype.ngOnInit = function () {
    };
    UnderDevComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-under-dev',
            template: __webpack_require__(/*! ./under-dev.component.html */ "./src/app/components/under-dev/under-dev.component.html"),
            styles: [__webpack_require__(/*! ./under-dev.component.css */ "./src/app/components/under-dev/under-dev.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UnderDevComponent);
    return UnderDevComponent;
}());



/***/ }),

/***/ "./src/app/components/upload-file/upload-file.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/upload-file/upload-file.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"file\"] {\r\n    display: none;\r\n}\r\n\r\n.custom-file-upload {\r\n    display: inline-block;\r\n    color: #fff;\r\n    padding: 6px 12px;\r\n    cursor: pointer;\r\n    background-color:#068ff6;\r\n    padding: 4px 12px;\r\n    margin-top: 0.5rem;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n.mySign-up{\r\n    padding: 0;\r\n    /* width: 50%; */\r\n    border: 1px solid lightgray;\r\n}\r\n\r\n.pageHead{\r\n    margin-top: 3rem;\r\n    font-size: 20px;\r\n    color: #068ff6;\r\n    font-weight: 600;\r\n    text-align: center;\r\n    /* color: #068ff6; */\r\n}\r\n\r\n.font-weight-0{\r\n    font-weight: 400;\r\n}\r\n\r\n.formFields-height{\r\n    font-size:14px;margin-top: 0.5rem;height: 30px;\r\n}\r\n\r\n.margin-top-1{\r\n    margin-top:0.5rem;\r\n}\r\n\r\n.selected-file {\r\n    height: 30px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/upload-file/upload-file.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/upload-file/upload-file.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"col-md-3\">\r\n\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"signup-form mySign-up\" style=\"padding: 0;\">\r\n          <div class=\"pageHead\">Upload Extract </div>\r\n          <form [formGroup]=\"uploadForm\" class=\"form-horizontal\" enctype=\"multipart/form-data\" (ngSubmit)=\"onSubmit()\" style=\"padding: 0;padding-bottom: 1rem;padding-top: 1rem;\">\r\n\r\n\r\n            <div class=\"form-group margin-top-0px\">\r\n              <label class=\"font-weight-0 control-label col-xs-4 col-md-4\" style=\"margin-top: 11px;padding-top: 0px;color: #777;\">{{uploadFileLables.product}}\r\n\r\n              </label>\r\n              <div class=\"col-xs-6 col-md-6\">\r\n                <span class=\"input-group-btn\">\r\n                  <select class=\"form-control formFields-height custom-dropdown\" formControlName=\"product\" [ngClass]=\"{ 'is-invalid': submitted && f.product.errors }\">\r\n                    <!-- <option value=\"\">Select</option> -->\r\n                    <option *ngFor=\"let option of products\" [ngValue]=\"option.value\">{{option.label}}</option>\r\n                  </select>\r\n                </span>\r\n                <div *ngIf=\"submitted && f.product.errors\" class=\"invalid-feedback required\">\r\n                  <div *ngIf=\"f.product.errors.required\">Product is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group margin-top-0px\">\r\n              <label class=\"font-weight-0 control-label col-xs-4 col-md-4\" style=\"margin-top: 11px;padding-top: 0px;color: #777;\">{{uploadFileLables.environment}}\r\n              </label>\r\n              <div class=\"col-xs-6 col-md-6\">\r\n                <span class=\"input-group-btn\">\r\n                  <select class=\"form-control formFields-height custom-dropdown\" formControlName=\"environment\" [ngClass]=\"{ 'is-invalid': submitted && f.environment.errors }\">\r\n                    <!-- <option value=\"\">Select</option> -->\r\n                    <option *ngFor=\"let option of environment\" [ngValue]=\"option.value\">{{option.label}}</option>\r\n                  </select>\r\n                </span>\r\n                <div *ngIf=\"submitted && f.environment.errors\" class=\"invalid-feedback required\">\r\n                  <div *ngIf=\"f.environment.errors.required\">Environment is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group margin-top-0px\">\r\n              <label class=\"font-weight-0 control-label col-xs-4 col-md-4\" style=\"margin-top: 11px;padding-top: 0px;color: #777;\">{{uploadFileLables.selectFile}}\r\n                <span class=\"required\">*</span>\r\n              </label>\r\n              <div class=\"col-xs-6 col-md-6\">\r\n                <label for=\"file-upload\" class=\"custom-file-upload\">\r\n                  <i class=\"fa fa-cloud-upload\"></i> Browse\r\n                </label>\r\n                <input (change)=\"uploadFile($event)\" id=\"file-upload\" formControlName=\"file\" type=\"file\" [ngClass]=\"{ 'is-invalid': submitted && f.file.errors }\"\r\n                />\r\n                <div class=\"selected-file\" title=\"{{selectedFileName}}\"> {{selectedFileName}}</div>\r\n                <!-- <div *ngIf=\"submitted && f.file.errors\" class=\"invalid-feedback required\">\r\n                      <div *ngIf=\"f.file.errors.required\">Please select a file.</div>\r\n                    </div> -->\r\n                <div *ngIf=\"fileStatusMsg\">\r\n                  <div innerHTML=\"{{fileStatusMsg}}\"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-12 form-group\" style=\"margin-left: 0.1rem;\">\r\n              <div class=\"col-md-8\"></div>\r\n              <div class=\"col-md-4\">\r\n                <button class=\"btn app-back-color white-text\" style=\"outline:none;padding: 3px 18px; \">Upload</button>\r\n\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"p-5rem p-bottom-0\">\r\n              <h4>Note:</h4>\r\n              <p>\r\n                Browser will allow you to select file from computer There is validation process built in which not allow you to upload file\r\n                with a dublicate name .selected desired file.\r\n              </p>\r\n            </div>\r\n\r\n            <!-- <label for=\"file-upload\" class=\"custom-file-upload\">\r\n                  <i class=\"fa fa-cloud-upload\"></i> Custom Upload\r\n                </label> -->\r\n            <!-- <input id=\"file-upload\" type=\"file\" /> -->\r\n\r\n            <!-- <div class=\"form-group text-center\" style=\"margin-top: 2rem;text-align: right;\">\r\n                  <button [disabled]=\"loading\" class=\"btn btn-primary\" style=\"outline:none;margin-right: 10.5rem !important;padding: 3px 18px; background-color: #068ff6;\">Save</button>\r\n                </div> -->\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/upload-file/upload-file.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/upload-file/upload-file.component.ts ***!
  \*****************************************************************/
/*! exports provided: UploadFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileComponent", function() { return UploadFileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/http/http.service */ "./src/app/shared/http/http.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _assets_data_form_labels_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/data/form-labels.json */ "./src/assets/data/form-labels.json");
var _assets_data_form_labels_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/Object.assign({}, _assets_data_form_labels_json__WEBPACK_IMPORTED_MODULE_4__, {"default": _assets_data_form_labels_json__WEBPACK_IMPORTED_MODULE_4__});
/* harmony import */ var _assets_data_responseCodes_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/data/responseCodes.json */ "./src/assets/data/responseCodes.json");
var _assets_data_responseCodes_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/Object.assign({}, _assets_data_responseCodes_json__WEBPACK_IMPORTED_MODULE_5__, {"default": _assets_data_responseCodes_json__WEBPACK_IMPORTED_MODULE_5__});
/* harmony import */ var _assets_data_url_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/data/url.json */ "./src/assets/data/url.json");
var _assets_data_url_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/Object.assign({}, _assets_data_url_json__WEBPACK_IMPORTED_MODULE_6__, {"default": _assets_data_url_json__WEBPACK_IMPORTED_MODULE_6__});
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UploadFileComponent = /** @class */ (function () {
    function UploadFileComponent(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.submitted = false;
    }
    UploadFileComponent.prototype.initForm = function () {
        this.uploadForm = this.formBuilder.group({
            product: [this.products[0].value, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            environment: [this.environment[0].value, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            file: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    UploadFileComponent.prototype.ngOnInit = function () {
        this.uploadFileLables = _assets_data_form_labels_json__WEBPACK_IMPORTED_MODULE_4__.uploadFileLables;
        this.products = [
            {
                label: 'Tax',
                value: 'tax'
            },
            {
                label: 'Perl',
                value: 'perl'
            },
            {
                label: 'Python',
                value: 'python'
            },
            {
                label: 'Font',
                value: 'font'
            }
        ];
        this.environment = [
            {
                label: 'Production',
                value: 'production'
            },
            {
                label: 'Development',
                value: 'developement'
            },
            {
                label: 'Testing',
                value: 'testing'
            }
        ];
        this.initForm();
    };
    Object.defineProperty(UploadFileComponent.prototype, "f", {
        get: function () { return this.uploadForm.controls; },
        enumerable: true,
        configurable: true
    });
    UploadFileComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.uploadForm.invalid) {
            this.fileStatusMsg = "<span class='required'> Please select a file.</span>";
            ;
            return;
        }
        var formObj = this.uploadForm.value;
        formObj.file = this.files;
        var formData = new FormData();
        for (var index = 0; index < this.files.length; index++) {
            formData.append("files", this.files[index]);
        }
        formData.append('Content-Type', 'multipart/form-data');
        formData.append('Product', formObj.product);
        formData.append('Environment', formObj.environment);
        console.log(this.files);
        this.http.sendFileUploadPostRequest(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + _assets_data_url_json__WEBPACK_IMPORTED_MODULE_6__["UPLOAD_FILE"], formData).subscribe(function (res) {
            if (res.responseCode === _assets_data_responseCodes_json__WEBPACK_IMPORTED_MODULE_5__.SUCCESS) {
                _this.fileStatusMsg = "<span class='valid-feedback'>" + res.message + "</span>";
                _this.selectedFileName = '';
                _this.initForm();
            }
            else if (res.responseCode === _assets_data_responseCodes_json__WEBPACK_IMPORTED_MODULE_5__.DUPLICATE) {
                // this.submitted = false;
                _this.fileStatusMsg = "<span class='required'> " + res.message + "</span>";
            }
            else {
                _this.fileStatusMsg = "<span class='required'>Something went wrong please try again.</span>";
            }
            _this.submitted = false;
        }, function (err) {
            console.log(err);
        });
        // console.log(this.uploadForm.value)
    };
    UploadFileComponent.prototype.uploadFile = function (event) {
        var fileSize = event.target.files[0].size / 1024 / 1024;
        if (fileSize > 5) {
            this.fileStatusMsg = '<span class="required">File size should not exceed 5MB.</span>';
            return;
        }
        this.fileStatusMsg = '';
        this.files = event.target.files;
        this.selectedFileName = this.files[0].name;
    };
    UploadFileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-file',
            template: __webpack_require__(/*! ./upload-file.component.html */ "./src/app/components/upload-file/upload-file.component.html"),
            styles: [__webpack_require__(/*! ./upload-file.component.css */ "./src/app/components/upload-file/upload-file.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _shared_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], UploadFileComponent);
    return UploadFileComponent;
}());



/***/ }),

/***/ "./src/app/models/columnMenu.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/columnMenu.model.ts ***!
  \********************************************/
/*! exports provided: ColumnMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnMenu", function() { return ColumnMenu; });
// export interface SetItem {
//     equals(other: ColumnMenu): boolean;
// }
var ColumnMenu = /** @class */ (function () {
    function ColumnMenu(label, value, id) {
        if (id === void 0) { id = null; }
        this.label = label;
        this.value = value;
        this.id = id;
    }
    return ColumnMenu;
}());

// export class SetColumnMenu<T extends ColumnMenu> extends Set<T>{
//     // public SetColumnMenu() {
//     //     super();
//     //     return new Set();
//     // }
//     add(value: T): this {
//         let found = false;
//         this.forEach(item => {
//             if (value === item) {
//                 found = true;
//             }
//         });
//         if (!found) {
//             super.add(value);
//         }
//         return this;
//     }
// }


/***/ }),

/***/ "./src/app/models/configMail.ts":
/*!**************************************!*\
  !*** ./src/app/models/configMail.ts ***!
  \**************************************/
/*! exports provided: ConfigMail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigMail", function() { return ConfigMail; });
/* harmony import */ var _managejob_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./managejob.model */ "./src/app/models/managejob.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ConfigMail = /** @class */ (function (_super) {
    __extends(ConfigMail, _super);
    function ConfigMail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ConfigMail;
}(_managejob_model__WEBPACK_IMPORTED_MODULE_0__["ManageJob"]));



/***/ }),

/***/ "./src/app/models/managejob.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/managejob.model.ts ***!
  \*******************************************/
/*! exports provided: ManageJob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageJob", function() { return ManageJob; });
var ManageJob = /** @class */ (function () {
    function ManageJob() {
    }
    return ManageJob;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
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

/***/ "./src/app/p-datatable/p-datatable.module.ts":
/*!***************************************************!*\
  !*** ./src/app/p-datatable/p-datatable.module.ts ***!
  \***************************************************/
/*! exports provided: PDatatableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PDatatableModule", function() { return PDatatableModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/growl */ "./node_modules/primeng/growl.js");
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_growl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PDatatableModule = /** @class */ (function () {
    function PDatatableModule() {
    }
    PDatatableModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_2__["TableModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"],
                primeng_multiselect__WEBPACK_IMPORTED_MODULE_4__["MultiSelectModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"],
                primeng_growl__WEBPACK_IMPORTED_MODULE_6__["GrowlModule"],
                primeng_messages__WEBPACK_IMPORTED_MODULE_7__["MessagesModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_8__["MessageModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"]
            ],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_table__WEBPACK_IMPORTED_MODULE_2__["TableModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_4__["MultiSelectModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"], primeng_growl__WEBPACK_IMPORTED_MODULE_6__["GrowlModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_7__["MessagesModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_8__["MessageModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"]]
        })
    ], PDatatableModule);
    return PDatatableModule;
}());



/***/ }),

/***/ "./src/app/shared/auth/auth-guard.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/auth/auth-guard.service.ts ***!
  \***************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGuardService.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/shared/auth/auth.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/auth/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _handleToken_handle_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handleToken/handle-token.service */ "./src/app/shared/handleToken/handle-token.service.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(tokenService, messageService) {
        this.tokenService = tokenService;
        this.messageService = messageService;
    }
    // ...
    AuthService.prototype.isAuthenticated = function () {
        var token = this.tokenService.getToken();
        var jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]();
        // Check whether the token is expired and return
        // true or false
        if (!token) {
            return false;
        }
        var isExpired = jwtHelper.isTokenExpired(token);
        if (isExpired) {
            this.tokenService.removeToken();
            this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
        }
        return !isExpired;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_handleToken_handle_token_service__WEBPACK_IMPORTED_MODULE_2__["HandleTokenService"], primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/data-table/data-table.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/data-table/data-table.service.ts ***!
  \*********************************************************/
/*! exports provided: DataTableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableService", function() { return DataTableService; });
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

var DataTableService = /** @class */ (function () {
    function DataTableService() {
    }
    DataTableService.prototype.removeDuplicates = function (arr, prop) {
        return arr.filter(function (obj, pos, arr) {
            return arr.map(function (mapObj) { return mapObj[prop]; }).indexOf(obj[prop]) === pos;
        });
    };
    DataTableService.prototype.tableSort = function (event) {
        event.data.sort(function (data, dataNext) {
            var value = data[event.field];
            var valueNext = dataNext[event.field];
            var result = null;
            if (value == null && valueNext != null) {
                result = -1;
            }
            else if (value != null && valueNext == null) {
                result = 1;
            }
            else if (value == null && valueNext == null) {
                result = 0;
            }
            else if (event.field === "statusDate") {
                var date = new Date(value);
                var dateNext = new Date(valueNext);
                if (!isNaN(date.getTime()) && !isNaN(dateNext.getTime())) {
                    result = (date.getTime() > dateNext.getTime()) ? 1 : -1;
                }
            }
            else if (typeof value === 'string' && typeof valueNext === 'string') {
                result = value.localeCompare(valueNext);
            }
            else {
                result = (value < valueNext) ? -1 : (value > valueNext) ? 1 : 0;
            }
            return (event.order * result);
        });
    };
    DataTableService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataTableService);
    return DataTableService;
}());



/***/ }),

/***/ "./src/app/shared/handleToken/handle-token.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/handleToken/handle-token.service.ts ***!
  \************************************************************/
/*! exports provided: HandleTokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleTokenService", function() { return HandleTokenService; });
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

var HandleTokenService = /** @class */ (function () {
    function HandleTokenService() {
    }
    HandleTokenService.prototype.getToken = function () {
        return localStorage.getItem('tokenId');
    };
    HandleTokenService.prototype.setToken = function (token) {
        localStorage.setItem('tokenId', token);
    };
    HandleTokenService.prototype.removeToken = function (key) {
        localStorage.removeItem(key || 'tokenId');
    };
    HandleTokenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HandleTokenService);
    return HandleTokenService;
}());



/***/ }),

/***/ "./src/app/shared/http/http.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/http/http.service.ts ***!
  \*********************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_handleToken_handle_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/handleToken/handle-token.service */ "./src/app/shared/handleToken/handle-token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { SpinnerVisibilityService } from 'ng-http-loader';




// import { ServerResponse } from '../../models/serverResponse.model';
var HttpService = /** @class */ (function () {
    function HttpService(http, tokenService, messageService) {
        this.http = http;
        this.tokenService = tokenService;
        this.messageService = messageService;
    }
    HttpService.prototype.getHeaders = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.tokenService.getToken() || ''
            }),
            params: null
        };
        return httpOptions;
    };
    HttpService.prototype.handle401Error = function (error) {
        if (error.status === 401) {
            // this.spinner.hide();
            this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
        }
        return error;
    };
    HttpService.prototype.sendFileUploadPostRequest = function (url, data) {
        var _this = this;
        var headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.tokenService.getToken() || '',
            })
        };
        // this.spinner.show();
        return this.http.post(url, data, headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            console.log(response);
            // this.spinner.hide();
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            _this.handle401Error(error);
            return error;
        }));
    };
    HttpService.prototype.sendPostRequest = function (url, data) {
        var _this = this;
        var headers = this.getHeaders();
        // this.spinner.show();
        return this.http.post(url, data, headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            console.log(response);
            // this.spinner.hide();
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            _this.handle401Error(error);
            return error;
        }));
    };
    HttpService.prototype.sendGetDownloadtRequest = function (url, params) {
        var _this = this;
        var prms = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        prms = prms.append('fileName', params.fileName);
        // prms = prms.append('secondParameter', parameters.valueTwo);
        var headers = {
            responseType: 'blob',
            params: prms,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.tokenService.getToken() || '',
                'content-type': 'application/octet-stream',
            })
        };
        // Begin assigning parameters
        // this.spinner.show();
        return this.http.get(url, headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            // console.log(response.json());
            // this.spinner.hide();
            var blob = new Blob([response], { type: response.type }); // replace the type by whatever type is your response:
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(blob, params.fileName);
            }
            else {
                var blobURL = (window.URL).createObjectURL(blob);
                var anchor = document.createElement("a");
                anchor.download = params.fileName;
                anchor.href = blobURL;
                document.body.appendChild(anchor);
                anchor.click();
                anchor.remove();
            }
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            _this.handle401Error(error);
            return error;
        }));
    };
    HttpService.prototype.sendGettRequest = function (url, params) {
        var _this = this;
        var headers = this.getHeaders();
        var prms = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        // Begin assigning parameters
        // prms = prms.append('firstParameter', parameters.valueOne);
        // prms = prms.append('secondParameter', parameters.valueTwo);
        // this.spinner.show();
        return this.http.get(url, headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            // console.log(response.json());
            // this.spinner.hide();
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            _this.handle401Error(error);
            return error;
        }));
    };
    HttpService.prototype.sendDeleteRequest = function (url, params) {
        var _this = this;
        var headers = this.getHeaders();
        var prms = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        prms = prms.append('fileName', params.fileName);
        // Begin assigning parameters
        // prms = prms.append('firstParameter', parameters.valueOne);
        // prms = prms.append('secondParameter', parameters.valueTwo);
        // this.spinner.show();
        headers.params = prms;
        return this.http.delete(url, headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            // console.log(response.json());
            // this.spinner.hide();
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            _this.handle401Error(error);
            return error;
        }));
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_handleToken_handle_token_service__WEBPACK_IMPORTED_MODULE_4__["HandleTokenService"], primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/assets/data/app-data.json":
/*!***************************************!*\
  !*** ./src/assets/data/app-data.json ***!
  \***************************************/
/*! exports provided: reviewJobEvents, default */
/***/ (function(module) {

module.exports = {"reviewJobEvents":[{"jobEvents":"Download Proofs","eventDate":"2018.04.25 01:25:PM","user":"System"},{"jobEvents":"Awaiting Approval","eventDate":"2018.04.25 01:25:PM","user":"System"},{"jobEvents":"Files Received-Processing","eventDate":"2018.04.25 01:25:PM","user":"System"},{"jobEvents":"Files Received-Queued","eventDate":"2018.04.25 01:25:PM","user":"System"}]};

/***/ }),

/***/ "./src/assets/data/form-labels.json":
/*!******************************************!*\
  !*** ./src/assets/data/form-labels.json ***!
  \******************************************/
/*! exports provided: scheduleJob, links, uploadFileLables, configurations, buttonsText, default */
/***/ (function(module) {

module.exports = {"scheduleJob":{"Type":"Type:","Company":"Company:","jobId":"Job ID:","Environment":"Environment:","jobName":"Job name:","Copy":"Copy:","Statement Period":"Statement period:","runImmediately":"Run immediately:","scheduleDate":"Schedule date:","scheduleTime":"Schedule time:","statusDate":"Status date:","statusTime":"Status time:","currentStatus":"Current status:"},"links":{"productionSummary":"Production Summary","controlReport":"Control Report","downloadProofs":"Download Proofs","Approve":"Approve","cancelJob":"Cancel Job"},"uploadFileLables":{"product":"Product:","environment":"Environment:","selectFile":"Select a File:"},"configurations":{"alertHeading":"Alerts & Notifications","company":"Company:","format":"Format:","type":"Type:","tomail":"TO:","status":"Status/Event:","ccmail":"CC:","environment":"Environment:","bccmail":"BCC:","subject":"Subject:","bodymail":"Body:"},"buttonsText":{"save":"Save","clear":"Clear","close":"Close","sendTestNotifications":"Send Test Notification"}};

/***/ }),

/***/ "./src/assets/data/responseCodes.json":
/*!********************************************!*\
  !*** ./src/assets/data/responseCodes.json ***!
  \********************************************/
/*! exports provided: SUCCESS, DUPLICATE, default */
/***/ (function(module) {

module.exports = {"SUCCESS":5555,"DUPLICATE":3333};

/***/ }),

/***/ "./src/assets/data/url.json":
/*!**********************************!*\
  !*** ./src/assets/data/url.json ***!
  \**********************************/
/*! exports provided: API, MANAGE_FETCH_JOBS, LOGIN, USER_INFO, SCHEDULE_JOB, UPLOAD_FILE, DOWNLOAD, DELETE_ASSETS, APPROVEREQUEST, FECTH_DOWNLOAD_FILES, CONFIGURE_ALERT_NOTIFICATIONS, FILTER_MANAGE_ASSETS, GET_ORDERS, default */
/***/ (function(module) {

module.exports = {"API":"http://localhost:51872/api/","MANAGE_FETCH_JOBS":"Manage/FilterManageJobs","LOGIN":"Login/Login","USER_INFO":"User/GetUserInfo","SCHEDULE_JOB":"Manage/SaveScheduleJob","UPLOAD_FILE":"UploadFile/UploadFiles","DOWNLOAD":"UploadFile/DownloadFile","DELETE_ASSETS":"UploadFile/DeleteFile","APPROVEREQUEST":"Manage/ApproveRequest","FECTH_DOWNLOAD_FILES":"UploadFile/FetchListOfFiles","CONFIGURE_ALERT_NOTIFICATIONS":"Config/SavConfigAlerts","FILTER_MANAGE_ASSETS":"Manage/FilterManageAssets","GET_ORDERS":"Orders/GetOrders"};

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony import */ var _assets_data_url_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/data/url.json */ "./src/assets/data/url.json");
var _assets_data_url_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/Object.assign({}, _assets_data_url_json__WEBPACK_IMPORTED_MODULE_0__, {"default": _assets_data_url_json__WEBPACK_IMPORTED_MODULE_0__});
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

var environment = {
    production: false
};
var API_URL = _assets_data_url_json__WEBPACK_IMPORTED_MODULE_0__["API"];


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/udayk/My_ChildPlay/jobcanada/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map