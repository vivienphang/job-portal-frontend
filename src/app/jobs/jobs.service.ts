import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  endpoint: string = 'http://localhost:3003';

  constructor(private http: HttpClient) {}

  // Method declaration here
  getAllListing() {
    let options = {}; // placeholder for token, header, etc
    console.log('running in getAll endpoint');
    return this.http.get(this.endpoint, options);
  }

  // getOneById(_id: number) {
  //   console.log('running in getOneById endpoint');
  //   return this.http.get(`$${this.endpoint}/${_id}`);
  // }
}
