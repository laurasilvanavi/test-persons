import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/models';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  @Input() person: Person;
  @Output() selectedPersonEvent = new EventEmitter<Person>();
  @Output() editPersonEvent = new EventEmitter<Person>();

  constructor() { }

  ngOnInit() {
  }

  passSelectedPerson(person) {
    this.selectedPersonEvent.emit(person);
  }

  editPerson(person) {
    this.editPersonEvent.emit(person);
  }

}
