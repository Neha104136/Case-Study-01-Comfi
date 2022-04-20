import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { decor } from './decor';
import { Observable } from 'rxjs';

@Injectable({

  providedIn: 'root'

})

export class decorService {

  constructor(private httpClient: HttpClient ) { }

  getAlldecor() : Observable<decor[]>{

    return this.httpClient.get<decor[]>("http://localhost:3000/decor",
    {
      headers: {

        "Access-Control-Allow-Origin": "*"

      }

    })

  }
}
