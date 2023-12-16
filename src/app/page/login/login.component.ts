import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginService } from '../../service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  emailLog: string = '';
  password: string = '';
  userName:string = '';

  constructor(
    private loginService: LoginService,
    private router:Router
    ){ }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  login(email:string, password:string){
    console.log('email: ', email, 'passw: ', password)
    this.loginService.login(email, password).then((data:any) => {
      let responseData = data;
      if(data.status){
        sessionStorage.setItem('token',data.token)
        sessionStorage.setItem('id',data.idUs)
        sessionStorage.setItem('name',data.name)
        console.log('responseData: ', responseData)
        this.router.navigate(['home'])
      }
    
      // console.log(sessionStorage.getItem('token'))
    })
  }

}
