import { Component, OnInit, TemplateRef } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { HttpService } from '../../shared/http/http.service';
import { DataTableService } from '../../shared/data-table/data-table.service';
import { API_URL } from '../../../environments/environment';
import { ColumnMenu } from '../../models/columnMenu.model';
import { ServerResponse } from '../../models/serverResponse.model';
import { ManageJob } from '../../models/managejob.model';
import * as API_Link from '../../../assets/data/url.json';
import { Router } from '@angular/router';
// import { Response } from '@angular/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-manage-jobs',
  templateUrl: './manage-jobs.component.html',
  styleUrls: ['./manage-jobs.component.css']
})
export class ManageJobsComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private http: HttpService, private modalService: BsModalService, private router: Router, private dataTableService: DataTableService) { }
  manageJobs: Array<ManageJob>;
  typeColumnSet: Set<ColumnMenu>;
  companyColumnSet: Set<ColumnMenu>;
  profileColumnSet: Set<ColumnMenu>;
  envColumnSet: Set<ColumnMenu>;
  statusColumnSet: Set<ColumnMenu>;
  cols: any[];
  selectedRow: any;
  msgs: any;

  ngOnInit() {
    this.typeColumnSet = new Set<ColumnMenu>();
    this.companyColumnSet = new Set<ColumnMenu>();
    this.profileColumnSet = new Set<ColumnMenu>();
    this.envColumnSet = new Set<ColumnMenu>();
    this.statusColumnSet = new Set<ColumnMenu>();
    this.selectedRow = {};
    // this.fetch('../../../assets/data/company.json');
    this.fetch(API_URL + (<any>API_Link).MANAGE_FETCH_JOBS);
  }

  openModal(template: TemplateRef<any>) {
    let config = {
      backdrop: true,
      ignoreBackdropClick: true,
      keyboard: false
    };
    this.modalRef = this.modalService.show(template, config);
  }

  // removeDuplicates(arr, prop) {
  //   return arr.filter((obj, pos, arr) => {
  //     return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
  //   });
  // }

  bindDropdownMenus() {

    this.typeColumnSet.add(new ColumnMenu('Any', null));
    this.companyColumnSet.add(new ColumnMenu('Any', null));
    this.profileColumnSet.add(new ColumnMenu('Any', null));
    this.envColumnSet.add(new ColumnMenu('Any', null));
    this.statusColumnSet.add(new ColumnMenu('Any', null));

    // this.typeColumnSet = this.removeDuplicates(this.manageJobs, 'type');
    // this.companyColumnSet = this.removeDuplicates(this.manageJobs, 'company');
    // this.profileColumnSet = this.removeDuplicates(this.manageJobs, 'profile');
    // this.envColumnSet = this.removeDuplicates(this.manageJobs, 'environment');
    // this.statusColumnSet = this.removeDuplicates(this.manageJobs, 'status');

    // Fixme
    for (let jobObj of this.manageJobs) {
      // if (!this.typeColumnSet.has(new ColumnMenu(jobObj.type, jobObj.type))) {
      this.typeColumnSet.add(new ColumnMenu(jobObj.type, jobObj.type));
      //   }
      this.companyColumnSet.add(new ColumnMenu(jobObj.company, jobObj.company));
      this.profileColumnSet.add(new ColumnMenu(jobObj.profile, jobObj.profile));
      this.envColumnSet.add(new ColumnMenu(jobObj.environment, jobObj.environment));
      this.statusColumnSet.add(new ColumnMenu(jobObj.status, jobObj.status));
    }
  }

  fetch(url) {
    // et params = new HttpParams().set("paramName", paramValue).set("paramName2", paramValueNext); //Create new HttpParams
    this.http.sendGettRequest(url).subscribe((res: ServerResponse<ManageJob>) => {

      for (let astData of res.results) {
        astData['results'] = "Results";
      }
      console.log(res.results);
      this.manageJobs = res.results;
      this.bindDropdownMenus();
      // yourArray.map((item: any) => item.id)
      let typeArr = Array.from(this.typeColumnSet.values());
      this.cols = [
        { field: 'type', header: 'Type', isInput: false, columnList: this.dataTableService.removeDuplicates(typeArr, 'label') },
        { field: 'company', header: 'Company', isInput: false, columnList: this.dataTableService.removeDuplicates(Array.from(this.companyColumnSet.values()), 'label') },
        { field: 'environment', header: 'Environment', isInput: false, columnList: this.dataTableService.removeDuplicates(Array.from(this.envColumnSet.values()), 'label') },
        { field: 'jobName', header: 'Job Name', isInput: true },
        { field: 'profile', header: 'Profile', isInput: false, columnList: this.dataTableService.removeDuplicates(Array.from(this.profileColumnSet.values()), 'label') },
        { field: 'order', header: 'Order', isInput: true },
        { field: 'jobId', header: 'Job ID', isInput: true },
        { field: 'status', header: 'Status', isInput: false, columnList: this.dataTableService.removeDuplicates(Array.from(this.statusColumnSet.values()), 'label') },
        { field: 'statusDate', header: 'Status date', isInput: true, isNotVisible: true },
        { field: 'results', header: ' ', isLink: true, isInput: true, isNotVisible: true, isNoSorting: true },
      ];
    });

  }

  showReviewJob(data, flag, template: TemplateRef<any>) {
    this.onRowSelect({ data: data }, template)
  }

  onRowSelect(event: any, template: TemplateRef<any>) {
    // this.msgs = [{ severity: 'info', summary: 'Car Selected', detail: 'Vin: ' + event.data.vin }];
    // console.log(event.data);
    // this.router.navigate(['/home']);
    this.selectedRow = event.data;
    this.openModal(template);
  }

  tableSort = this.dataTableService.tableSort;
  // tableSort(event: any) {
  //   event.data.sort((data, dataNext) => {

  //     let value = data[event.field];
  //     let valueNext = dataNext[event.field];
  //     let result = null;

  //     if (value == null && valueNext != null) {
  //       result = -1;
  //     }
  //     else if (value != null && valueNext == null) {
  //       result = 1;
  //     }
  //     else if (value == null && valueNext == null) {
  //       result = 0;
  //     }
  //     else if (event.field === "statusDate") {
  //       let date = new Date(value);
  //       let dateNext = new Date(valueNext);
  //       if (!isNaN(date.getTime()) && !isNaN(dateNext.getTime())) {
  //         result = (date.getTime() > dateNext.getTime()) ? 1 : -1;
  //       }
  //     }
  //     else if (typeof value === 'string' && typeof valueNext === 'string') {

  //       result = value.localeCompare(valueNext);
  //     }
  //     else {
  //       result = (value < valueNext) ? -1 : (value > valueNext) ? 1 : 0;
  //     }

  //     return (event.order * result);
  //   });
  // }


}
