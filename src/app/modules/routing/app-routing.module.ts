import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../views/login/login.component';
import { SignUpComponent } from '../views/sign-up/sign-up.component';
import { AvailableGroupsComponent } from '../views/available-groups/available-groups.component';
import { MyGroupsComponent } from '../views/my-groups/my-groups.component';
import { UsersComponent } from '../views/users/users.component';
import { FollowersComponent } from '../views/followers/followers.component';
import { FollowingComponent } from '../views/following/following.component';
import { UserFeedComponent } from '../views/user-feed/user-feed.component';
import { PostDetailsComponent } from '../views/post-details/post-details.component';
import { FavoritePostsComponent } from '../views/favorite-posts/favorite-posts.component';
import { ProfileViewComponent } from '../views/profile-view/profile-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'available-groups', component: AvailableGroupsComponent },
  { path: 'my-groups', component: MyGroupsComponent },
  { path: 'users', children: [
    { path: '', component: UsersComponent },
    { path: ':username', component: ProfileViewComponent }
  ] },
  { path: 'followers', component: FollowersComponent },
  { path: 'following', component: FollowingComponent },
  { path: 'user-feed', component: UserFeedComponent },
  { path: 'post', children: [
    { path: 'favorites', component: FavoritePostsComponent },
    { path: ':id', component: PostDetailsComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
