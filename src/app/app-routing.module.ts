import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { RegisterComponent} from './register/register.component'
import { HeaderComponent} from './header/header.component'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent // default path comp
  },
  {
    path: 'dashboard',
    component: DashboardComponent   // path of dashboard comp
   },
   {
     path: 'login',
     component: LoginComponent    // path of login comp
   },
   {
     path: 'register',
     component: RegisterComponent // path of register comp
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
