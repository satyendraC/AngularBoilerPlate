import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserManagementComponent } from './Components/user-management/user-management.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';


const routes: Routes = [
  {path: "", redirectTo:"/user", pathMatch:"full" },
  {path: "user", component: UserManagementComponent},
  {path: "dashboard", component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
