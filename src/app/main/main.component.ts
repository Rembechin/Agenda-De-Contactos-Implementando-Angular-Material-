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
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  usuario: User = {
    uid: '',
    email: '',
    paswword: '',
    nombre: '',
    telefono: ''
  };

  userLogin: User;
  constructor(public auth: AuthService) { }

  ngOnInit() {
    // cargo toda la lista de contacto
    this.auth.user.subscribe(u => this.cargarUsuario(u));
  }

  cargarUsuario(u: User) {
    if (u) {
      this.userLogin = u;
    }
  }
  agregar() {
    this.userLogin.contactos.push(this.usuario);
    this.auth.updateUser(this.userLogin, {contactos: this.userLogin.contactos})
    .catch(e => console.log(e) );
  }

  salir() {
    this.auth.Desconectar();
  }
}