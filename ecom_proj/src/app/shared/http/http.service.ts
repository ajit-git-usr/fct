import { Injectable } from '@angular/core';
// import { Http, Headers, Response } from '@angular/http';
// import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ServerResponse } from '../../models/serverResponse.model';
// import { SpinnerVisibilityService } from 'ng-http-loader';
import { catchError, retry, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { MessageService } from 'primeng/components/common/messageservice';
import { HandleTokenService } from '../../shared/handleToken/handle-token.service';
import { HttpParamsOptions } from '@angular/common/http/src/params';
// import { ServerResponse } from '../../models/serverResponse.model';

@Injectable({
  providedIn: 'root'

})
export class HttpService {


  constructor(private http: HttpClient, private tokenService: HandleTokenService, private messageService: MessageService) { }

  getHeaders() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.tokenService.getToken() || ''
      }),
      params: null
    };
    return httpOptions;
  }


  handle401Error(error?: any) {
    if (error.status === 401) {
      // this.spinner.hide();
      this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
    }
    return error;
  }

  sendFileUploadPostRequest(url, data): Observable<ServerResponse<any>> {
    var headers = {
      headers: new HttpHeaders({
        'Authorization': this.tokenService.getToken() || '',
        // 'enctype': 'multipart/form-data'
      })
    }

    // this.spinner.show();
    return this.http.post(url, data, headers)
      .pipe(map((response: any) => {
        console.log(response);
        // this.spinner.hide();
        return response;
      }), catchError(error => {
        this.handle401Error(error);
        return error;
      }))
  }

  sendPostRequest(url, data): Observable<ServerResponse<any>> {
    var headers = this.getHeaders();
    // this.spinner.show();
    return this.http.post(url, data, headers)
      .pipe(map((response: any) => {
        console.log(response);
        // this.spinner.hide();
        return response;
      }), catchError(error => {
        this.handle401Error(error);
        return error;
      }))
  }


  sendGetDownloadtRequest(url, params?): Observable<Blob> {
    var prms = new HttpParams()
    prms = prms.append('fileName', params.fileName);
    // prms = prms.append('secondParameter', parameters.valueTwo);
    var headers = {
      responseType: 'blob' as 'blob',
      params: prms,
      headers: new HttpHeaders({
        'Authorization': this.tokenService.getToken() || '',
        'content-type': 'application/octet-stream',
        // 'Content-Disposition': 'attachment; picture.png'
        // Content-Disposition: attachment; filename="picture.png"
        // 'enctype': 'multipart/form-data',

      })

    };

    // Begin assigning parameters

    // this.spinner.show();
    return this.http.get(url, headers).pipe(map((response: any) => {
      // console.log(response.json());
      // this.spinner.hide();
      let blob: Blob = new Blob([response], { type: response.type }); // replace the type by whatever type is your response:

      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob, params.fileName);
      } else {
        var blobURL = (window.URL).createObjectURL(blob);
        var anchor = document.createElement("a");
        anchor.download = params.fileName;
        anchor.href = blobURL;
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
      }


      return response;
    }), catchError(error => {
      this.handle401Error(error);
      return error;
    }))
  }



  sendGettRequest(url, params?): Observable<ServerResponse<any>> {
    var headers = this.getHeaders();
    let prms = new HttpParams();

    // Begin assigning parameters
    // prms = prms.append('firstParameter', parameters.valueOne);
    // prms = prms.append('secondParameter', parameters.valueTwo);
    // this.spinner.show();
    return this.http.get(url, headers).pipe(map((response: any) => {
      // console.log(response.json());
      // this.spinner.hide();
      return response;
    }), catchError(error => {
      this.handle401Error(error);
      return error;
    }))
  }


  sendDeleteRequest(url, params?): Observable<ServerResponse<any>> {
    var headers = this.getHeaders();
    let prms = new HttpParams();
    prms = prms.append('fileName', params.fileName);
    // Begin assigning parameters
    // prms = prms.append('firstParameter', parameters.valueOne);
    // prms = prms.append('secondParameter', parameters.valueTwo);
    // this.spinner.show();
    headers.params = prms;
    return this.http.delete(url, headers).pipe(map((response: any) => {
      // console.log(response.json());
      // this.spinner.hide();
      return response;
    }), catchError(error => {
      this.handle401Error(error);
      return error;
    }))
  }

}
