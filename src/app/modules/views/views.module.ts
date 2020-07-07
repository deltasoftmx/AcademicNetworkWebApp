import { NgModule } from '@angular/core';

import { AppComponentsModule } from '../app-components/app-components.module'; //All components that are not views.

import { LoginComponent } from './login/login.component';
import { PasswordFormComponent } from './password-form/password-form.component';



@NgModule({
  declarations: [
    LoginComponent,
    PasswordFormComponent,
  ],
  imports: [
    //MaterialModule,
    AppComponentsModule
  ],
  exports: [
    //MaterialModule,
    AppComponentsModule
  ]
})
export class ViewsModule { }
