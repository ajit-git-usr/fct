import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/http/http.service'
import { API_URL } from '../../../environments/environment';
import { map } from 'rxjs/operators';
// import { Response } from '@angular/http';
import { ServerResponse } from '../../models/serverResponse.model'
import { User } from '../../models/user.model';
import { HandleTokenService } from '../../shared/handleToken/handle-token.service';
import { Router } from '@angular/router';
import * as API_Link from '../../../assets/data/url.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userInfo: User;
  constructor(private http: HttpService, private tokenService: HandleTokenService, private router: Router) {
    this.userInfo = new User();
  }

  logout() {
    this.tokenService.removeToken();
    this.router.navigate(['/login']);
  }

  getLoggedUserInfo() {
    this.http.sendGettRequest(API_URL + (<any>API_Link).USER_INFO).subscribe(
      (response: ServerResponse<User>) => {
        if (response.responseCode === 5555) {
          // console.log(response.json());
          this.userInfo = response.results[0];
        } else {
          // TODO handle failure case
        }
      });
  }
  ngOnInit() {
    this.getLoggedUserInfo();
  }

}
