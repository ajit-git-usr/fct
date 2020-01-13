import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as labelsData from '../../../assets/data/form-labels.json';
import { HttpService } from '../../shared/http/http.service';
import { API_URL } from '../../../environments/environment';
import * as API_Link from '../../../assets/data/url.json';
import * as reviewJobEvents from '../../../assets/data/app-data.json';
@Component({
  selector: 'app-review-job',
  templateUrl: './review-job.component.html',
  styleUrls: ['./review-job.component.css']
})
export class ReviewJobComponent implements OnInit {
  @Input() rowData;
  @Output() hideDialog: EventEmitter<any> = new EventEmitter();
  jobLabels: any;
  linkLabels: any;
  reviewJob: FormGroup;
  statusMsg: string;
  reviewJobEvents: any;
  constructor(private formBuilder: FormBuilder, private httpService: HttpService) { }

  hidepopUp() {
    this.hideDialog.emit();
  }

  download(fileName) {
    this.httpService.sendGetDownloadtRequest(API_URL + (<any>API_Link).DOWNLOAD, { fileName: fileName }).subscribe(res => {

      // TODO: hanld the download response
    });
  }

  approveJob(isApprove) {
    this.httpService.sendPostRequest(API_URL + (<any>API_Link).APPROVEREQUEST, { isApproved: isApprove, jobName: this.rowData.jobName }).subscribe(res => {
      if (res.responseCode === 5555) {
        this.statusMsg = "<span class='valid-feedback'>" + res.message + "</span>";
      } else {
        this.statusMsg = "<span class='required'>Something went wrong please try again!</span>";
      }
      setTimeout(function () {
        this.statusMsg = '';
      }.bind(this), 10000);

    });
  }

  ngOnInit() {
    this.jobLabels = <any>labelsData.default.scheduleJob;
    this.linkLabels = <any>labelsData.default.links;
    this.reviewJobEvents = (<any>reviewJobEvents).reviewJobEvents;
    console.log(reviewJobEvents);
    console.log(this.linkLabels);
    let stringToSplit = this.rowData.statusDate;
    let date = stringToSplit.split(" ");
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
  }

}
