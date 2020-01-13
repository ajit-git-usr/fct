import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/http/http.service';
import { API_URL } from '../../../environments/environment';
import * as ResponseCodes from '../../../assets/data/responseCodes.json';
import * as API_Link from '../../../assets/data/url.json';
@Component({
  selector: 'app-download-file',
  templateUrl: './download-file.component.html',
  styleUrls: ['./download-file.component.css']
})
export class DownloadFileComponent implements OnInit {
  statusMsg: String;
  fileList: any[] = [];
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.fetchListOfFiles();
  }
  fileIcons = {
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
  }

  getFileIcon(file): string {
    let fileTokens = file.fileName.split('.');
    return this.fileIcons['.' + fileTokens[fileTokens.length - 1]]
  }

  downloadFile(file) {
    console.log(file);
    this.http.sendGetDownloadtRequest(API_URL + (<any>API_Link).DOWNLOAD, { 'fileName': file.fileName }).subscribe(res => {
      // TODO: Download response
    });
  }

  fetchListOfFiles() {
    this.http.sendGettRequest(API_URL + (<any>API_Link).FECTH_DOWNLOAD_FILES).subscribe(res => {
      if (res.responseCode === ResponseCodes.default.SUCCESS) {
        this.fileList = res.results;
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
  }

}
