import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-jobs-listing',
  templateUrl: './jobs-listing.component.html',
  styleUrls: ['./jobs-listing.component.scss'],
})
export class JobsListingComponent implements OnInit {
  listing: any;

  constructor(private jobs: JobsService) {}

  ngOnInit(): void {
    this.getJobsListing();
  }

  // Using service declared in Jobs Service
  getJobsListing() {
    this.jobs.getAllListing().subscribe((res) => {
      this.listing = res;
      console.log('this is response:', this.listing);
    });
  }
  // getOneJob(_id: number) {
  //   this.jobs.navigate(['/jobs/get-one-job'], { queryParams: { id: _id } });
  // }
}
