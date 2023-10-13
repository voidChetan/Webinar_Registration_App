import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AllListComponent } from './pages/all-list/all-list.component';

const routes: Routes = [
  {
    path: '*',
    redirectTo:'registration',
    pathMatch:'full'
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'List',
    component: AllListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
