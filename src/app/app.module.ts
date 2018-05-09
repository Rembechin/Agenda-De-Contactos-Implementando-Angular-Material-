import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import {CoreModule} from './core/core.module';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';//2do Corte
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';//Angular Animations
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';//Angular Material
import {DataSource} from '@angular/cdk/collections'

import { AppComponent } from './app.component';

import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CoreModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase, 'agenda-de-contacto'), // importa firebase / aplicación necesaria para todo
    AngularFirestoreModule, // importa firebase / firerestore, solo es necesario para las características de la base de datos
    AngularFireAuthModule, // importa firebase / auth, solo es necesario para las funciones de autenticación,
    AngularFireStorageModule,
    AppRoutingModule, 
    
    BrowserAnimationsModule,//Importa Angular Animations
    MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
