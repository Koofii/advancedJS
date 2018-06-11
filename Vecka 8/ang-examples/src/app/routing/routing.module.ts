import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunComponent } from './run/run.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  imports: [
    CommonModule,

    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'photos', pathMatch: 'full' },
      { path: 'photos', component: PhotosComponent },
      { path: 'users/:id', component: UserDetailsComponent },
      { path: 'users', component: UsersComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  exports: [RunComponent],
  declarations: [RunComponent, PhotosComponent, NotFoundComponent, UsersComponent, UserDetailsComponent]
})
export class RoutingModule { }
