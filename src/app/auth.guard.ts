import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {

  const _ROUTER: Router = inject(Router);
  const token = sessionStorage.getItem('token')
  let decodedPayload
  const idUs = sessionStorage.getItem('id')
  const name = sessionStorage.getItem('name')
  if (token) {
    // Decodificar y analizar el payload del token JWT
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    decodedPayload = JSON.parse(window.atob(base64));
  
    // Ahora, 'decodedPayload' contiene la información del token decodificada
    console.log(decodedPayload);
  } else {
    // Manejar el caso en el que no se encuentra un token en el sessionStorage
    console.error('No se encontró un token en el sessionStorage');
  }
  

  if(idUs && name && decodedPayload.user_id == idUs && decodedPayload.username == name ){
    console.log('todo ok')
    return true;
  }else{
    return _ROUTER.navigate(['login']);
 
  }
  // console.log('state: ', state)
  // console.log('route: ', route)
  
};

