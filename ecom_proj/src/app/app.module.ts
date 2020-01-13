import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorModule } from 'primeng/editor';
import { AppBoostrapModule } from './app-boostrap/app-boostrap.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplyLabelErrMsgsComponent } from './components/disply-label-err-msgs/disply-label-err-msgs.component';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// import { DataTableComponent } from './components/data-table/data-table.component';
import { ManageFilterComponent } from './components/manage-filter/manage-filter.component';
import { PDatatableModule } from './p-datatable/p-datatable.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardService } from './shared/auth/auth-guard.service';
// import { PDataTableComponent } from './components/p-data-table/p-data-table.component';
// import { LoaderComponent } from './components/loader/loader.component'
// import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { JwtModule } from '@auth0/angular-jwt';
import { UnderDevComponent } from './components/under-dev/under-dev.component';
import { HandleTokenService } from './shared/handleToken/handle-token.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { ScheduleJobComponent } from './components/schedule-job/schedule-job.component';
import { ReviewJobComponent } from './components/review-job/review-job.component';
import { UploadFileComponent } from '../../src/app/components/upload-file/upload-file.component';
import { DownloadFileComponent } from './components/download-file/download-file.component';
import { ManageJobsComponent } from './components/manage-jobs/manage-jobs.component';
import { ManageAssetsComponent } from './components/manage-assets/manage-assets.component';
import { ConfigureComponent } from './components/configure/configure.component';
import { OnlineComponent } from './components/online/online.component';


@NgModule({
  declarations: [AppComponent, LoginComponent, DisplyLabelErrMsgsComponent, HomeComponent, ManageFilterComponent, ManageJobsComponent, UnderDevComponent, ScheduleJobComponent, ReviewJobComponent, UploadFileComponent, DownloadFileComponent, ManageJobsComponent, ManageAssetsComponent, ConfigureComponent, OnlineComponent],
  imports: [BrowserModule,
    FormsModule,
    PDatatableModule,
    ReactiveFormsModule,
    AppBoostrapModule,
    BrowserAnimationsModule,
    EditorModule,
    // HttpModule,
    JwtModule,
    HttpClientModule,
    NgHttpLoaderModule,
    RouterModule.forRoot(
      [
        { path: 'login', component: LoginComponent },
        {
          path: 'home', component: HomeComponent, canActivate: [AuthGuardService], canActivateChild: [AuthGuardService], children: [
            { path: 'jobresults', component: ManageJobsComponent },
            { path: 'newschedule', component: ScheduleJobComponent },
            { path: 'reviewjob', component: ReviewJobComponent },
            { path: 'upload', component: UploadFileComponent },
            { path: 'online', component: OnlineComponent },

            { path: 'download', component: DownloadFileComponent },
            { path: 'assets', component: ManageAssetsComponent },
            { path: 'configure', component: ConfigureComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: '**', component: UnderDevComponent }
          ]
        },
        { path: '', redirectTo: '/login', pathMatch: 'full' },
        { path: '**', component: UnderDevComponent }
      ],

      { enableTracing: true } // <-- debugging purposes only
    )

  ],
  providers: [HandleTokenService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
