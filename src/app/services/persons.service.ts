import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Person} from "../models";

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(private http: HttpClient) {
  }

  getPersons() {
    return this.http.get<Person[]>(`https://swedbank-demo.herokuapp.com/api/persons`)
  }
}
