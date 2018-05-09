import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string;
  pass: string;

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.auth.btnLogin(this.user, this.pass);
  }
}
