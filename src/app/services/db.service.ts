import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  validador: boolean = false;

  constructor(private router: Router) { }

  userLog = '';
  passLog = '';

  user = localStorage.getItem('user');
  password = localStorage.getItem("password");

  canActivate() {
    if(this.validador) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

  validarCredenciales( userLog, passLog) {
    if(userLog == this.user && passLog == this.password) {
      this.validador = true;
      this.router.navigate(['home']);
      localStorage.removeItem(this.password)
      return true;
    } else {
      return false;
    }
  }
}