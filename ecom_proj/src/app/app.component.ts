import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Spinkit } from 'ng-http-loader';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    ``
  ]
})
export class AppComponent {
  public modalRef: BsModalRef;
  spinkit = Spinkit;
  constructor() {

  }

}
