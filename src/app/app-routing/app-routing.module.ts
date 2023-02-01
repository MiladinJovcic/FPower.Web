import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from '../companies/companies.component';
import { CompanyDetailComponent } from '../company-detail/company-detail.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { JobComponent } from '../job/job.component';
import { JobsComponent } from '../jobs/jobs.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'detail', component: CompanyDetailComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'job', component: JobComponent },


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
