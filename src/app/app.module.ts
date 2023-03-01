import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompaniesComponent } from './companies/companies.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JobsComponent } from './jobs/jobs.component';
import { JobComponent } from './job/job.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyDetailComponent,
    CompaniesComponent,
    MessagesComponent,
    DashboardComponent,
    JobsComponent,
    JobComponent,
    BlogComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
