import { AdminGuard } from './services/admin.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { AuthGuard } from './services/auth.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserGuard } from './services/user.guard';

const routes: Routes = [
  {path: '', component: UserHomeComponent, canActivate:[AuthGuard, UserGuard]},
  {path: 'admin-home', component: AdminHomeComponent, canActivate:[AuthGuard, AdminGuard]},
  {path: 'user-home', component: UserHomeComponent, canActivate:[AuthGuard, UserGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: RegistrationComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
