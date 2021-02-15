import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable, pipe } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Deal } from './users';



@Injectable()
export class DealService {
  // Define the routes we are going to interact with
  private publicDealsUrl = 'https://dealsapi1.herokuapp.com/api/deals/public';
  private privateDealsUrl = 'https://dealsapi1.herokuapp.com/api/deals/private';

  constructor(private http: HttpClient,

  ) { }

  // Implement a method to get the public deals
  getPublicDeals() {
    return this.http.get(this.publicDealsUrl)
      .pipe(
        map((data: Deal[]) => {
          return data;
        }), catchError(error => {
          return throwError('Something went wrong!');
        })
      )
  }


  // Implement a method to get the private deals
  getPrivateDeals() {
    return this.http
      .get<Deal[]>(this.privateDealsUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Implement a method to handle errors if any
  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return throwError(err.message || err);
  }

  purchase(item) {
    alert(`You bought the: ${item.name}`);
  }
}