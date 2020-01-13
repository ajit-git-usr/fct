import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-disply-label-err-msgs',
  templateUrl: './disply-label-err-msgs.component.html',
  styleUrls: ['./disply-label-err-msgs.component.css']
})
export class DisplyLabelErrMsgsComponent implements OnInit {
  @Input() errorMsg: string;
  @Input() displayError: boolean;
  constructor() { }

  ngOnInit() {
  }

}
