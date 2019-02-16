import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  personForm: FormGroup;
  person: any = {
    firstName: '',
    lastName: '',
    email: '',
    pid: ''
  };
  // name = new FormControl('', Validators.required);

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.personForm = this.formBuilder.group({
      "firstName": ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      "lastName": ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      "pid": ['', Validators.required],
      "email": ['', Validators.required]
    })
  }

  showPerson(){
    this.person.firstName = "asdasd";
    console.log("person", this.person);
  }

  onSubmit(){
    console.log(this.personForm);
    console.log(this.personForm.controls);
    console.log(this.personForm.value.firstName);
  }

}
