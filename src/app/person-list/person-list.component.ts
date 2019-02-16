import { Component, OnInit } from '@angular/core';
import { Person } from '../models';
import { PersonsDataService } from '../services/persons-data.service';
import {PersonsService} from "../services/persons.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[];
  message: string;

  constructor(private data: PersonsDataService,
              private personsService: PersonsService,
              private router: Router) { }

  ngOnInit() {


    this.data.currentPersonList.subscribe(persons => this.persons = persons);
    const initList = [{
      pid: 10001,
      name: 'Petras',
      surname: 'Petrovicius',
      phone: '+37067878787',
      email: 'petrovic@p.lt',
      groups: ['SOS', 'Animals help']

    },
    {
      pid: 10002,
      name: 'Kazimieras',
      middleName: 'Jonas',
      surname: 'Petrauskas',
      groups: ['MOPT', 'Important stuff', 'Great day']

    },
    {
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
    }
    ];
    this.data.changePersonList(initList);
  }

  removePersonFromList($event) {
    console.log($event);
    this.personsService.removePerson($event.pid).subscribe(
      res =>{
        this.persons = this.persons.filter(item => item !== $event);
        this.data.changePersonList(this.persons);
      },
      err => {
        //show error
      }
    );
  }

  editPerson(person: Person) {
    console.log("edit");
    this.router.navigate(['update-person', person.pid]);
  }


  fetchUsers() {
    this.personsService.getPersons().subscribe(
      persons => {
        console.log(persons);
        this.data.changePersonList(persons)
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    )
  }

}
