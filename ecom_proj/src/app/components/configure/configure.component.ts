import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../shared/http/http.service';
import { ServerResponse } from '../../models/serverResponse.model';
import * as labelsData from '../../../assets/data/form-labels.json';
import { ManageJob } from '../../models/managejob.model';
import * as API_Link from '../../../assets/data/url.json';
import { ColumnMenu } from '../../models/columnMenu.model';
import { DataTableService } from '../../shared/data-table/data-table.service';
import * as ResponseCodes from '../../../assets/data/responseCodes.json';
import { ConfigMail } from '../../models/configMail';

@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.css']
})
export class ConfigureComponent implements OnInit {
  bodyMail: String;
  configureForm: FormGroup;
  configureLabel: any;
  buttonsLabels: any;
  manageJobs: Array<ManageJob>;
  formDropdownList: any = {};
  statusMsg: String;
  submitted: Boolean;
  constructor(private formBuilder: FormBuilder, private http: HttpService, private dataTableService: DataTableService) { }

  initConfigureForm() {
    this.configureForm = this.formBuilder.group({
      type: ['', Validators.required],
      company: ['', Validators.required],
      environment: ['', Validators.required],
      format: ['', Validators.required],
      tomail: ['', Validators.required], status: ['', Validators.required],
      ccmail: [''],
      bccmail: [''],
      subject: ['', Validators.required],
      bodymail: ['']
    });
  }

  bindDropdownMenus() {
    let typeColumnSet: Set<ColumnMenu> = new Set<ColumnMenu>();
    let companyColumnSet: Set<ColumnMenu> = new Set<ColumnMenu>();
    let envColumnSet: Set<ColumnMenu> = new Set<ColumnMenu>();
    let statusColumnSet: Set<ColumnMenu> = new Set<ColumnMenu>();

    // Fixme
    for (let jobObj of this.manageJobs) {
      // if (!this.typeColumnSet.has(new ColumnMenu(jobObj.type, jobObj.type))) {
      typeColumnSet.add(new ColumnMenu(jobObj.type, jobObj.type));
      //   }
      companyColumnSet.add(new ColumnMenu(jobObj.company, jobObj.company));
      envColumnSet.add(new ColumnMenu(jobObj.environment, jobObj.environment));
      statusColumnSet.add(new ColumnMenu(jobObj.status, jobObj.status));
    }

    let format = [
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
    this.formDropdownList['environments'] = this.dataTableService.removeDuplicates(Array.from(envColumnSet.values()), 'label');;
    this.formDropdownList['status'] = this.dataTableService.removeDuplicates(Array.from(statusColumnSet.values()), 'label');;
  }

  ngOnInit() {
    this.configureLabel = <any>labelsData.default.configurations;
    this.buttonsLabels = <any>labelsData.default.buttonsText;
    this.initConfigureForm();
    this.fetchData((<any>API_Link).API + (<any>API_Link).MANAGE_FETCH_JOBS);
  }

  fetchData(url) {
    this.http.sendGettRequest(url).subscribe((res: ServerResponse<ManageJob>) => {
      console.log(res.results);
      this.manageJobs = res.results;
      this.bindDropdownMenus();
    });
  }
  get f() { return this.configureForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.configureForm.invalid) {
      this.statusMsg = '';
      return;
    }

    let configMail = new ConfigMail();
    configMail.EmailBCC = this.configureForm.value.bccmail;
    configMail.EmailCC = this.configureForm.value.ccmail;
    configMail.EmailFormat = this.configureForm.value.format;
    configMail.EmailTo = this.configureForm.value.tomail;
    configMail.Subject = this.configureForm.value.subject;
    configMail.Body = this.configureForm.value.bodymail;
    configMail.Enviornment = this.configureForm.value.environment;



    this.http.sendPostRequest((<any>API_Link).API + (<any>API_Link).CONFIGURE_ALERT_NOTIFICATIONS, configMail).subscribe((res: any) => {
      if (res.responseCode === ResponseCodes.default.SUCCESS) {
        this.statusMsg = "<span class='valid-feedback'>" + res.message + "</span>";
        this.initConfigureForm();
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

    console.log(this.configureForm.value);
  }

}
