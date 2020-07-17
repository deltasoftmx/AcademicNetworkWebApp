import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { AppComponentsModule } from '../app-components/app-components.module'; //All components that are not views.

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AvailableGroupsComponent } from './available-groups/available-groups.component';




@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    AvailableGroupsComponent,
  ],
  imports: [
    //MaterialModule,
    AppComponentsModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    //MaterialModule,
    AppComponentsModule
  ]
})
export class ViewsModule { }
