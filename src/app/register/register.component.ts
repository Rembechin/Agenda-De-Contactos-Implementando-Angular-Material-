import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
interface User {
  uid: string;
  email: string;
  paswword: string;
  nombre: string;
  telefono: string;
  contactos?: any[];
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario: User = {
    uid: '',
    email: '',
    paswword: '',
    nombre: '',
    telefono: ''
  };

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }
  register() {
    this.auth.btnRegistrar(this.usuario);
  }
}
