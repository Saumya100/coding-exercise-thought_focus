import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleDataService {

  private url = 'https://reqres.in/api/users';
  
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private client: HttpClient) { }

  getSampleData(): any{
    return this.client.get(this.url, {headers: this.headers}).pipe(
      map((res: Response) =>{
        return res;
      }),
      catchError((err: HttpErrorResponse) => {
        return Observable.throw(err);
      })
    )
  }

  
}
