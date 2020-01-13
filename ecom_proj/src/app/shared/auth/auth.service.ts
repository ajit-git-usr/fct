import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HandleTokenService } from '../handleToken/handle-token.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private tokenService: HandleTokenService, private messageService: MessageService) { }
  // ...
  public isAuthenticated(): boolean {
    const token = this.tokenService.getToken();
    let jwtHelper = new JwtHelperService();
    // Check whether the token is expired and return
    // true or false
    if (!token) {
      return true;
    }
    let isExpired = jwtHelper.isTokenExpired(token);
    if (isExpired) {
      this.tokenService.removeToken();
      this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
    }
    return !isExpired;
  }
}
