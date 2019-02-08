import { Component, OnInit } from '@angular/core';
import { Person } from '../models';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[];

  constructor() { }

  ngOnInit() {
    this.persons = [{ pid: 10001,
      name: 'Petras',
      middleName: 'Jonas',
      surname: 'Petrovicius',
      phone: '+37067878787',
      email: 'petrovic@p.lt'
      // groups: ['SOS', 'MOPT', 'Important stuff']

    },
    { pid: 10002,
      name: 'Kazimieras',
      middleName: 'Jonas',
      surname: 'Petrovicius',
      groups: ['SOS', 'MOPT', 'Important stuff']

    },
    { pid: 10003,
      name: 'Elena',
      middleName: 'Jonas',
      surname: 'Petrovicius',
      email: 'petrovic@p.lt',
      groups: ['SOS', 'MOPT', 'Important stuff']

    },
    { pid: 10004,
      name: 'Elena',
      middleName: 'Jonas',
      surname: 'Petrovicius',
      phone: '+37067878787',
      groups: ['SOS', 'MOPT', 'Important stuff']
    }
  ];
  }

}
