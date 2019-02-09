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
      surname: 'Petrovicius',
      phone: '+37067878787',
      email: 'petrovic@p.lt',
      groups: ['SOS', 'Animals help']

    },
    { pid: 10002,
      name: 'Kazimieras',
      middleName: 'Jonas',
      surname: 'Petrauskas',
      groups: ['MOPT', 'Important stuff', 'Great day']

    },
    { pid: 10003,
      name: 'Elena',
      middleName: 'Ieva',
      surname: 'Elenaite',
      phone: '+37067878787',

    },
    { pid: 10004,
      name: 'Irma',
      surname: 'Petroviciene',
      email: 'petrovic.irma@p.lt',
      groups: ['SOS']
    }
  ];
  }

}
