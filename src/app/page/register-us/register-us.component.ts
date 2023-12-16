import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginService } from '../../service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-us',
  templateUrl: './register-us.component.html',
  styleUrl: './register-us.component.css'
})
export class RegisterUsComponent {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  name:string = '';
  emailLog: string = '';
  password: string = '';
  confimEmail: string = '';
  confimPassword: string = '';

  constructor(
    private loginService: LoginService,
    private router: Router
  ){}
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  register(){
    let message = '';
    let ok = 0;
    console.log(this.name)
    if(this.password.trim() == this.confimPassword.trim() && this.password.trim() != ''){
      console.log('2')
      ok +=1;
    }else{
      message = 'Las contrasenas no coinciden';
    }
  
    if(this.emailLog.trim() == this.confimEmail.trim() && this.emailLog.trim() != ''){
      console.log('1')
      ok +=1;
      
    }else{
      message = 'Verifique que los email sean coincidentes';
    }
    
    
   
    console.log('ok', ok)

    if(this.name.trim() != ''){
      console.log('3')
      ok +=1;
    
    }else{
      message = 'Intriduzca nombre de usuario';
    }



    if(ok == 3){
      this.loginService.registerUser(this.emailLog, this.password, this.name).then((data:any) =>{
        let responseData = data;
        console.log('data: ', responseData)
        window.alert(responseData.message);
        this.router.navigate(['login'])
      }).catch((e)=>{
        // let error = e.error.err
        console.log(e.error.error)
        window.alert(e.error.error);

      })
    }else{
      window.alert(message);
      // console.log(message)
    }
    
  }
}
