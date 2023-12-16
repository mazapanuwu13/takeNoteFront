import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import jwt from 'jsonwebtoken'


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  login(email: string, pass: string): Promise<any> {
    const url = `${this.apiUrl}validateUser`; 
    const body = { email: email, password: pass };

    return this.http.post(url, body).toPromise();
  }

  registerUser(email: string, password: string, username: string ): Promise<any> {
    const url = `${this.apiUrl}registrar`; 
    const body = { 
      email: email,
      password: password,
      username:username
    };

    return this.http.post(url, body).toPromise();
  }

  // registerUser(userData: { email: string, username: string, password: string }): Promise<any> {
  //   // Configurar los encabezados
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  //   // Hacer la solicitud HTTP POST
  //   return this.http.post(this.apiUrl, userData, { headers })
  //     .toPromise()
  //     .then(response => response)
  //     .catch(error => Promise.reject(error));
  // }


  isAuthenticated(): boolean {
    const token = sessionStorage.getItem('tonek');

    if (token) {
      // try {
      //   const decodedToken = jwt.verify(token, 'takeNote') as any;

      //   // Verifica la fecha de expiración
      //   const isTokenExpired = new Date(decodedToken.exp * 1000) < new Date();
      //   console.log('decodedToken: ', )

      //   return !isTokenExpired;
      // } catch (error) {
      //   // Maneja errores de verificación (puede ser un token inválido o expirado)
      //   return false;
      // }
      return true
    }

    return false;
  }
  
}
