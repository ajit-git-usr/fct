import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as labelsData from '../../../assets/data/form-labels.json';
import { HttpService } from '../../shared/http/http.service';
import { API_URL } from '../../../environments/environment';
import { ServerResponse } from '../../models/serverResponse.model';
import * as ResponseCodes from '../../../assets/data/responseCodes.json';
import * as API_Link from '../../../assets/data/url.json';

@Component({
  selector: 'app-schedule-job',
  templateUrl: './schedule-job.component.html',
  styleUrls: ['./schedule-job.component.css']
})
export class ScheduleJobComponent implements OnInit {
  @Input() formData;
  registerForm: FormGroup;
  submitted = false;
  jobLabels: any;
  statusMsg: string;
  types: any;
  companies: any;
  environments: any;

  constructor(private formBuilder: FormBuilder, private http: HttpService) { }

  initForm() {
    this.types = this.formData[0].columnList;
    this.companies = this.formData[1].columnList;
    this.environments = this.formData[2].columnList;

    this.registerForm = this.formBuilder.group({
      type: [this.types[1].value],
      company: [this.companies[1].value],
      environment: [this.environments[1].value],
      jobName: ['', Validators.required],
      date: [''], time: [''],
      runImmediately: ['false']
    });

  }


  ngOnInit() {
    this.jobLabels = <any>labelsData.default.scheduleJob;
    this.initForm();
    console.log(this)
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      this.statusMsg = '';
      return;
    }


    this.http.sendFileUploadPostRequest(API_URL + (<any>API_Link).SCHEDULE_JOB, this.registerForm.value).subscribe((res: ServerResponse<any>) => {
      if (res.responseCode === ResponseCodes.default.SUCCESS) {
        this.statusMsg = "<span class='valid-feedback'>" + res.message + "</span>";
        this.initForm();
      } else if (res.responseCode === ResponseCodes.default.DUPLICATE) {
        this.statusMsg = "<span class='required'>" + res.message + "</span>";
      } else {
        this.statusMsg = "<span class='required'>Something went wrong please try again!</span>";
      }
      this.submitted = false;
      setTimeout(function () {
        this.statusMsg = '';
      }.bind(this), 5000);
    });
    // alert(JSON.stringify(this.registerForm.value));
    // console.log(JSON.stringify(this.registerForm.value));
  }
}