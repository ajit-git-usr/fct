import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandleTokenService {

  constructor() { }

  getToken() {
    return localStorage.getItem('tokenId');
  }

  setToken(token) {
    localStorage.setItem('tokenId', token);
  }

  removeToken(key?) {
    localStorage.removeItem(key || 'tokenId');
  }
}
