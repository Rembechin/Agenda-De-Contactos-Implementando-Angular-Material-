import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

interface User {
  uid: string;
  email: string;
  paswword: string;
  nombre: string;
  telefono: string;
  contactos?: any[];
}

@Injectable()
export class AuthService {

  user: Observable<User>;
  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {
    //// Get auth data, then get firestore user document || null
    this.user = this.afAuth.authState
    .switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return Observable.of(null);
      }
    });
  }

  btnRegistrar(usuario: User) {
    return this.afAuth.auth.createUserWithEmailAndPassword(usuario.email, usuario.paswword)
    .then(user => {
      this.router.navigate(['/']);
      usuario.uid = user.uid;
      return this.setUserDoc(usuario);
    })
    .catch(error => this.handleError(error));
  }

  private setUserDoc(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email || null,
      paswword: user.paswword,
      nombre: user.nombre,
      telefono: user.telefono,
      contactos: []
    };
    return userRef.set(data, { merge: true } );
  }
  private handleError(error) {
    console.error(error);
  }

  updateUser(usuario: User, data: any) {
    return this.afs.doc(`users/${usuario.uid}`).update(data);
}

  btnLogin(email: string, paswword: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, paswword).
    then(v => this.router.navigate(['/main']) )
    .catch(e => console.log());
  }

  Desconectar() {
    this.afAuth.auth.signOut().then(() => {
        this.router.navigate(['/']);
    });
  }

}

