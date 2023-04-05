import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';

const routes: Routes = [
  // testing routes here instead of in jobs-listing component
  {
    path: ' ',
    loadChildren: () => import('./jobs/jobs.module').then((m) => m.JobsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
