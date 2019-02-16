import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Person} from "../models";

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(private http: HttpClient) {
  }

  createAuthorizationHeader(headers: HttpHeaders) {
    headers.append('Content-Type', 'application/json');
  }

  getPersons() {
    return this.http.get<Person[]>(`https://swedbank-demo.herokuapp.com/api/persons`)
  }

  getPerson(id) {
    return this.http.get<Person>(`https://swedbank-demo.herokuapp.com/api/persons/${id}`)
  }

  addPerson(person: Person) {
    const headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.post(`https://swedbank-demo.herokuapp.com/api/persons`,
      person, {headers})
  }

  updatePerson(person: Person) {
    const headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.put(`https://swedbank-demo.herokuapp.com/api/persons`,
      person, {headers})
  }

  removePerson(id: number) {
    const headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.delete(`https://swedbank-demo.herokuapp.com/api/persons/${id}`, {headers})
  }
}
