import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/http/http.service';
import { ServerResponse } from '../../models/serverResponse.model';
import { ColumnMenu } from '../../models/columnMenu.model';
import { DataTableService } from '../../shared/data-table/data-table.service';
import * as API_Link from '../../../assets/data/url.json';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css']
})
export class OnlineComponent implements OnInit {
  manageOnline: any;
  cols: Array<any>;
  constructor(private http: HttpService, private dataTableService: DataTableService) { }

  ngOnInit() {
    this.fetch((<any>API_Link).API + (<any>API_Link).GET_PRODUCTS);
  }
  tableSort = this.dataTableService.tableSort;

  fetch(url) {
    // et params = new HttpParams().set("paramName", paramValue).set("paramName2", paramValueNext); //Create new HttpParams
    this.http.sendGettRequest(url).subscribe((res: ServerResponse<any>) => {
      console.log(res.results);
      let responseObj = <any>res.results;

      // console.log(responseObj, '00000');
      this.manageOnline = responseObj; //res.results;
      // yourArray.map((item: any) => item.id)
      this.cols = [
        { field: 'id', header: 'Product ID', isInput: true },
        { field: 'name', header: 'Product Name', isInput: true },
        { field: 'price', header: 'Price', isInput: true }
        // ,
        // { field: 'requestTime', header: 'Request Time', isNotVisible: true },
        // { field: 'fileSize', header: 'File Size', isInput: true },
        // { field: 'mode', header: 'Mode', isInput: true },
        // { field: 'orderedBy', header: 'Ordered By', isInput: true },
        // { field: 'active', header: 'Active', isInput: true },
        // { field: 'pages', header: 'Pages', isInput: true },
        // { field: 'createdDate', header: 'Created Date', isNotVisible: true },

      ];
    });

  }

}
