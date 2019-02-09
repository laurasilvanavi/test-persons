import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Person } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PersonsDataService {

  private personList = new BehaviorSubject<Person[]>([]);
  currentPersonList = this.personList.asObservable();

  changePersonList(list: Person[]) {
    this.personList.next(list);
  }

  constructor() { }
}
