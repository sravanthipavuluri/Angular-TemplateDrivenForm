import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ErrorsComponent } from './errors/errors.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { TdformComponent } from './tdform/tdform.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { PasswordInfoComponent } from './password-info/password-info.component';

const appRoutes: Routes = [
  { path: '',redirectTo: '/home',pathMatch: 'full'},
  {path:'home' , component:GeneralInfoComponent},
  {path:'contact',component:ContactInfoComponent},
  {path:'password' ,component:PasswordInfoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ErrorsComponent,
    RegistrationFormComponent,
    TdformComponent,
    GeneralInfoComponent,
    ContactInfoComponent,
    PasswordInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
