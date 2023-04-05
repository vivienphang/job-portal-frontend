import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { JobsComponent } from './jobs.component';
import { JobsListingComponent } from './jobs-listing/jobs-listing.component';
import { JobsRoutingModule } from './jobs-routing.module';

@NgModule({
  declarations: [JobsComponent, JobsListingComponent],
  imports: [CommonModule, JobsRoutingModule, HttpClientModule],
})
export class JobsModule {}
