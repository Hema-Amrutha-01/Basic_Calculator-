import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Trail1Component } from './trail1/trail1.component';
import { Trail2Component } from './trail2/trail2.component';
import { Trail3Component } from './trail3/trail3.component';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RegistrationComponent } from './registration/registration.component';
import { DataSharingService } from './data-sharing.service';
import { HomeComponent } from './home/home.component';


const routes:Routes=[


{path:'header',component:HeaderComponent},
{path:'trail1',component:Trail1Component},
{path:'trail2',component:Trail2Component},
{path:'trail3',component:Trail3Component},
{path:'login',component:LoginComponent},
{path:'calculator',component:CalculatorComponent},
{path:'registration',component:RegistrationComponent},
{path:'home' , component:HomeComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Trail1Component,
    Trail2Component,
    Trail3Component,
    LoginComponent,
    CalculatorComponent,
    RegistrationComponent,
    HomeComponent ,

  ],
  imports: [
    BrowserModule,
   FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [DataSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
