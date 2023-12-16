import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  private apiUrl = 'http://localhost:3000/notas';

  constructor(private http: HttpClient) { }

  createNote(title: string,  description:string,is_processed:boolean, user_id:any): Promise<any> {
    // Obtener el token de la sesión
    const token = sessionStorage.getItem('token');

    // Configurar los encabezados con el token
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    let noteData = {
      title:title,
      description: description,
      is_processed:false, 
      user_id:user_id
    }

    // Hacer la solicitud HTTP POST con los encabezados
    return this.http.post(this.apiUrl, noteData, { headers }).toPromise();
  }
  
  editNote(title:string, description:string, user_id:any, noteId:string): Promise<any> {
    console.log('desc: ', description)
    // Obtener el token de la sesión
    const token = sessionStorage.getItem('token');

    // Configurar los encabezados con el token
    const headers = new HttpHeaders().set('Authorization', `${token}`);

    const data = {
      title:title,
      description:description,
      is_processed:false,
      user_id:user_id,
      noteId:noteId
    }
    // Construir la URL para la edición de la nota
    // const editUrl = `${this.apiUrl}/${data}`;

    // Hacer la solicitud HTTP PUT con los encabezados
    return this.http.put(this.apiUrl, data, { headers }).toPromise();
  }
  
  deleteNote(noteId: number, userId: any): Promise<any> {
    // Obtener el token de la sesión
    const token = sessionStorage.getItem('token');

    // Configurar los encabezados con el token
    const headers = new HttpHeaders().set('Authorization', `${token}`);

    // Construir la URL para la eliminación de la nota
    const deleteUrl = `${this.apiUrl}?nota_id=${noteId}&user_id=${userId}`;

    // Hacer la solicitud HTTP DELETE con los encabezados
    return this.http.delete(deleteUrl, { headers }).toPromise();
  }

  getNotes(userId: number): Promise<any> {
    const url = `${this.apiUrl}?user_id=${userId}`;
    console.log('url: ', url)

    // Obtener el token de la sesión
    const token = sessionStorage.getItem('token');

    // Configurar los encabezados con el token
    const headers = new HttpHeaders().set('Authorization', `${token}`);

    // Hacer la solicitud HTTP con los encabezados
    return this.http.get(url, { headers }).toPromise();
  }





  
  
}
