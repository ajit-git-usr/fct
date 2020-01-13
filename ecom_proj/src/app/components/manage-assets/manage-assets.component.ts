import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/http/http.service';
import { ServerResponse } from '../../models/serverResponse.model';
import { ColumnMenu } from '../../models/columnMenu.model';
import { DataTableService } from '../../shared/data-table/data-table.service';
import * as API_Link from '../../../assets/data/url.json';
// import { API_URL } from '../../../environments/environment';

@Component({
  selector: 'app-manage-assets',
  templateUrl: './manage-assets.component.html',
  styleUrls: ['./manage-assets.component.css']
})
export class ManageAssetsComponent implements OnInit {
  manageAssets: any;
  cols: Array<any>;
  typeColumnSet: Set<ColumnMenu>;
  companyColumnSet: Set<ColumnMenu>;
  statusColumnSet: Set<ColumnMenu>;


  constructor(private http: HttpService, private dataTableService: DataTableService) { }

  ngOnInit() {
    this.typeColumnSet = new Set<ColumnMenu>();
    this.companyColumnSet = new Set<ColumnMenu>();
    this.statusColumnSet = new Set<ColumnMenu>();
    // this.fetch('../../../assets/data/assets.json');
    this.fetch((<any>API_Link).API + (<any>API_Link).FILTER_MANAGE_ASSETS);

  }

  bindDropdownMenus() {

    this.typeColumnSet.add(new ColumnMenu('Any', null));
    this.companyColumnSet.add(new ColumnMenu('Any', null));
    this.statusColumnSet.add(new ColumnMenu('Any', null));

    // this.typeColumnSet = this.removeDuplicates(this.manageJobs, 'type');
    // this.companyColumnSet = this.removeDuplicates(this.manageJobs, 'company');
    // this.profileColumnSet = this.removeDuplicates(this.manageJobs, 'profile');
    // this.envColumnSet = this.removeDuplicates(this.manageJobs, 'environment');
    // this.statusColumnSet = this.removeDuplicates(this.manageJobs, 'status');

    // Fixme
    for (let asstObj of this.manageAssets) {
      // if (!this.typeColumnSet.has(new ColumnMenu(jobObj.type, jobObj.type))) {
      this.typeColumnSet.add(new ColumnMenu(asstObj.type, asstObj.type));
      //   }
      this.companyColumnSet.add(new ColumnMenu(asstObj.company, asstObj.company));
      this.statusColumnSet.add(new ColumnMenu(asstObj.status, asstObj.status));
    }
  }

  fetch(url) {
    // et params = new HttpParams().set("paramName", paramValue).set("paramName2", paramValueNext); //Create new HttpParams
    this.http.sendGettRequest(url).subscribe((res: ServerResponse<any>) => {
      console.log(res.results);
      let responseObj = <any>res.results;
      for (let astData of responseObj) {
        astData['download'] = "Download";
        astData['delete'] = "Delete";
      }
      // console.log(responseObj, '00000');
      this.manageAssets = responseObj; //res.results;
      this.bindDropdownMenus();
      // yourArray.map((item: any) => item.id)
      this.cols = [
        { field: 'fileName', header: 'File name', isInput: true },
        { field: 'type', header: 'Type', isInput: false, columnList: this.dataTableService.removeDuplicates(Array.from(this.typeColumnSet.values()), 'label') },
        { field: 'company', header: 'Company', isInput: false, columnList: this.dataTableService.removeDuplicates(Array.from(this.companyColumnSet.values()), 'label') },
        { field: 'createdDate', header: 'Uploaded Date', isInput: true },
        { field: 'status', header: 'Status', isInput: false, columnList: this.dataTableService.removeDuplicates(Array.from(this.statusColumnSet.values()), 'label') },
        { field: 'download', header: ' ', isLink: true, isInput: true, isNotVisible: true, isNoSorting: true, width: '10%' },
        { field: 'delete', header: ' ', isLink: true, isInput: true, isNotVisible: true, isNoSorting: true, width: '10%' }
      ];
    });

  }


  downloadOrDeleteAsset(fileName, flag) {
    if (flag == 'download') {
      this.http.sendGetDownloadtRequest((<any>API_Link).API + (<any>API_Link).DOWNLOAD, { 'fileName': fileName }).subscribe(res => {
        // TODO: Download response
      });
    } else if (flag == 'delete') {

      this.http.sendDeleteRequest((<any>API_Link).API + (<any>API_Link).DELETE_ASSETS, { 'fileName': fileName }).subscribe(res => {
        // TODO: Download response
      });
    }
  }

  tableSort = this.dataTableService.tableSort;
}
