import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsListingComponent } from './jobs-listing/jobs-listing.component';
import { JobsComponent } from './jobs.component';

const routes: Routes = [
  {
    path: '',
    component: JobsComponent,
    children: [
      {
        path: '',
        component: JobsListingComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsRoutingModule {}
