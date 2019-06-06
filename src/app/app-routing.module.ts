import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MyScenarioComponent } from './pages/my-scenario/my-scenario.component';
import { MyIdeasComponent } from './pages/my-ideas/my-ideas.component';
import { RateScenarioComponent } from './pages/rate-sceanrio/rate-sceanrio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  {
    path: 'connexion',
    component: LoginComponent
  },
  {
    path: 'mes-scenario',
    component: MyScenarioComponent
  },
  {
    path: 'mes-idees',
    component: MyIdeasComponent
  },
  {
    path: 'evaluer-scenario',
    component: RateScenarioComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
