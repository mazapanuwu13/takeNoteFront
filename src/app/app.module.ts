import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
//Pages
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import {LoginComponent} from './page/login/login.component'
// ?
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { ToolBarComponent } from './components/tool-bar/tool-bar.component'; 

//Components - Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import { RegisterUsComponent } from './page/register-us/register-us.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolBarComponent,
    LoginComponent,
    RegisterUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    //Peticion
    HttpClientModule,
    //Components - Angular Material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
