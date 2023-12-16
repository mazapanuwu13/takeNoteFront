import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
//Pages
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterUsComponent } from './page/register-us/register-us.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },

  // Ruta de inicio para redirigir a la página de inicio de sesión
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {path: "home", component: HomeComponent, pathMatch:"full", canActivate: [authGuard]},

  {path:"register", component: RegisterUsComponent, pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
