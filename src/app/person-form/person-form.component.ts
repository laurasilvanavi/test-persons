import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PersonsService} from "../services/persons.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonsDataService} from "../services/persons-data.service";
import {Person} from "../models";
import {GroupService} from "../services/group.service";
import {Group} from "../models/group";
import {CustomValidator} from "../utils/custom-validators";

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  isEditForm : boolean;
  person : Person;
  personId : number;
  isReady : boolean = false;
  groups : Group[];

  personForm: FormGroup;
  // Template Driven:
  // person: any = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   pid: ''
  // };
  // name = new FormControl('', Validators.required);

  constructor(private formBuilder: FormBuilder,
              private personsService: PersonsService,
              private route: ActivatedRoute,
              private data: PersonsDataService,
              private router: Router,
              private groupService: GroupService) {
    this.route.params.subscribe(params => {
      this.personId = +params['id'];
      console.log(+params['id'], !!+params['id'], params['id']);
      this.isEditForm = !!+params['id'] || params['id'];
    } )
  }

  ngOnInit(): void {
    this.getGroups();
    if(this.isEditForm) {
      this.personsService.getPerson(this.personId).subscribe(
        person => {
          this.createForm(person);
        },
        err => {
          this.router.navigate(['persons']);
        },
        () => {
          this.isReady = true;
        }

      )
      // this.data.currentPersonList.subscribe(persons => {
      //   if(!persons.some(person => person.pid === this.personId)) {
      //     console.log('sry');
      //     // this.router.navigate(['about']);
      //   }
      //   console.log(this.personId);
      //
      // });
    } else {
      this.createForm();
      this.isReady = true;
    }
  }

  createForm(person?: Person) {
    this.personForm = this.formBuilder.group({
      "name": [person ? person.name : '', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      "surname": [person ? person.surname : '', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      "pid": [person ? person.pid : '', Validators.required],
      "email": [person ? person.email : '', [Validators.required, CustomValidator.isValidEmailFormat]]
    })
  }
  // Template driven:
  // showPerson(){
  //   this.person.firstName = "asdasd";
  //   console.log("person", this.person);
  // }

  addUser() {
    console.log(this.personForm);
    console.log(this.personForm.controls);
    console.log(this.personForm.value.firstName);
    this.personsService.addPerson(this.personForm.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      },
      () => {
        console.log('finally')
      }
    );
  }

  getGroups() {
    this.groupService.getGroups().subscribe(
      groups => {
        console.log(groups);
        this.groups = groups;
      }
    )
  }

  updatePerson() {
    console.log('updating');
    this.personsService.updatePerson(this.personForm.value).subscribe(
      res => {
        console.log('gg');
      },
      err => {
        console.log('sry')
      }
    )
  }

}
