import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, RequiredValidator } from '@angular/forms';
import { ServerResponse } from '../../models/serverResponse.model';
import { HttpService } from '../../shared/http/http.service';
import { API_URL } from '../../../environments/environment';
import * as labelsData from '../../../assets/data/form-labels.json';
import * as ResponseCodes from '../../../assets/data/responseCodes.json';
import * as API_Link from '../../../assets/data/url.json';
@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  submitted = false;
  uploadForm: FormGroup;
  products: any;
  environment: any;
  files: any;
  uploadFileLables: any;
  selectedFileName: string;
  fileStatusMsg: string;

  constructor(private formBuilder: FormBuilder, private http: HttpService) { }

  initForm() {
    this.uploadForm = this.formBuilder.group({
      product: [this.products[0].value, Validators.required],
      environment: [this.environment[0].value, Validators.required],
      file: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.uploadFileLables = <any>labelsData.default.uploadFileLables;
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

  }


  get f() { return this.uploadForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.uploadForm.invalid) {
      this.fileStatusMsg = "<span class='required'> Please select a file.</span>";;
      return;
    }
    let formObj = this.uploadForm.value;
    formObj.file = this.files;
    let formData = new FormData();
    for (let index = 0; index < this.files.length; index++) {
      formData.append("files", this.files[index]);
    }
    formData.append('Content-Type', 'multipart/form-data');
    formData.append('Product', formObj.product);
    formData.append('Environment', formObj.environment);
    console.log(this.files);
    this.http.sendFileUploadPostRequest(API_URL + (<any>API_Link).UPLOAD_FILE, formData).subscribe((res: ServerResponse<any>) => {
      if (res.responseCode === ResponseCodes.default.SUCCESS) {

        this.fileStatusMsg = "<span class='valid-feedback'>" + res.message + "</span>";
        this.selectedFileName = '';
        this.initForm();
      } else if (res.responseCode === ResponseCodes.default.DUPLICATE) {
        // this.submitted = false;
        this.fileStatusMsg = "<span class='required'> " + res.message + "</span>";
      } else {
        this.fileStatusMsg = "<span class='required'>Something went wrong please try again.</span>";
      }
      this.submitted = false;

    }, err => {
      console.log(err);
    });
    // console.log(this.uploadForm.value)
  }

  uploadFile(event) {
    let fileSize = event.target.files[0].size / 1024 / 1024;
    if (fileSize > 5) {
      this.fileStatusMsg = '<span class="required">File size should not exceed 5MB.</span>';
      return;
    }
    this.fileStatusMsg = '';
    this.files = event.target.files;
    this.selectedFileName = this.files[0].name;
  }

}
