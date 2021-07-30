import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProgramComponent } from './program/program.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: '', component:LoginComponent},
  {path: 'program', component:ProgramComponent},
  {path: 'users', component:UsersComponent},
  {path: '**', redirectTo: '',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
