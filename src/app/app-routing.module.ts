import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/views/login/login.component';
import { SignUpComponent } from './modules/views/sign-up/sign-up.component';
import { AvailableGroupsComponent } from './modules/views/available-groups/available-groups.component';
import { MyGroupsComponent } from './modules/views/my-groups/my-groups.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'available-groups', component: AvailableGroupsComponent },
  { path: 'my-groups', component: MyGroupsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
