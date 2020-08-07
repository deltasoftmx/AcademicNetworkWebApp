import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/views/login/login.component';
import { SignUpComponent } from './modules/views/sign-up/sign-up.component';
import { AvailableGroupsComponent } from './modules/views/available-groups/available-groups.component';
import { MyGroupsComponent } from './modules/views/my-groups/my-groups.component';
import { UsersComponent } from './modules/views/users/users.component';
import { FollowersComponent } from './modules/views/followers/followers.component';
import { FollowingComponent } from './modules/views/following/following.component';
import { UserFeedComponent } from './modules/views/user-feed/user-feed.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'available-groups', component: AvailableGroupsComponent },
  { path: 'my-groups', component: MyGroupsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'followers', component: FollowersComponent },
  { path: 'following', component: FollowingComponent },
  { path: 'user-feed', component: UserFeedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
