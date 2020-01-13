import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../../shared/http/http.service';
import { Router } from '@angular/router';
import { ServerResponse } from '../../models/serverResponse.model'
import { User } from '../../models/user.model';
import { AuthService } from '../../shared/auth/auth.service';
import { HandleTokenService } from '../../shared/handleToken/handle-token.service';
import { API_URL } from '../../../environments/environment';
import * as API_Link from '../../../assets/data/url.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isValidCredentials: boolean;

  constructor(private tokenService: HandleTokenService, private fb: FormBuilder, private http: HttpService, private router: Router, private auth: AuthService) {
    this.loginForm = fb.group({
      email: ['user1@gmail.com', Validators.required],
      password: ['123', [Validators.required]],
      keepSignin: [false]
    });
  }

  onSubmit(): void {
    console.log(this.loginForm);
    let usrFormValues: User = this.loginForm.value;
    // ------
    this.router.navigate(['/home']);

    //----

    this.http.sendPostRequest(API_URL + (<any>API_Link).LOGIN, usrFormValues).subscribe((res: ServerResponse<User>) => {

      if (res.responseCode === 5555) {
        this.isValidCredentials = false;
        if (res.results.length && res.results[0].tokenId) {
          // localStorage.setItem('tokenId', 'Bearer ' + res.results.tokenId);
          this.tokenService.setToken('Bearer ' + res.results[0].tokenId);
          this.router.navigate(['/home']);
        }

      } else if (res.responseCode === 2222) {
      }
      let self = this;
      this.isValidCredentials = true;
      setTimeout(function () {
        self.isValidCredentials = false;
      }, 5000);
    }, (err) => {
      this.isValidCredentials = false;
      console.log(err);
    });
  }

  isFieldValid(field: string) {
    return !this.loginForm.get(field).valid && this.loginForm.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }



  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['home']);
    }
  }

}
