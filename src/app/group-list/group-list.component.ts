import { Component, OnInit } from '@angular/core';
import { PersonsDataService } from '../services/persons-data.service';
import { Person } from '../models';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  persons: Person[];
  groups = [];

  constructor(private data: PersonsDataService) { }

  ngOnInit() {
    this.data.currentPersonList.subscribe(personList => {
      this.persons = personList;                          // for overall list
      this.groups = this.getUpdatedGroups(personList); // for unique list
    });
  }

  getUpdatedGroups(personList) {
    const updatedGroups = [];
    personList.forEach(person => {
      if (person.groups) {
        person.groups.forEach(
          group => {
            if (!updatedGroups.includes(group)) {
              updatedGroups.push(group);
            }
          }
        );
      }
    });
    return updatedGroups;
  }

  changeList() {
    const newList = [{
      pid: 10003,
      name: 'Elena',
      middleName: 'Ieva',
      surname: 'Elenaite',
      phone: '+37067878787',
    },
    {
      pid: 10004,
      name: 'Irma',
      surname: 'Petroviciene',
      email: 'petrovic.irma@p.lt',
      groups: ['SOS']
    }];
    this.data.changePersonList(newList);
  }

}
