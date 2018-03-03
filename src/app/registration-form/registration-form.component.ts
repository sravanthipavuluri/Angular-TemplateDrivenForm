import { Component, OnInit } from '@angular/core';
import { User } from './../User';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
 //Property for the gender
 private gender: string[];
 //Property for the user
 private user:User;
 
  ngOnInit() {
    this.gender =  ['Male', 'Female', 'Others'];
    //Create a new user object
    this.user = new User({
        email:"", password: { pwd: "" , confirm_pwd: ""}, 
        gender: this.gender[0], terms: false});
    
    // this.user = new User({
    //   //initialized with some data
    //   email:"thisisfromthemodel@example.com", 
    //   password: { pwd: "" , confirm_pwd: ""}, 
    //   gender: this.gender[0]
       
    //   });
  }

    public onFormSubmit({ value, valid}: { value: User, valid: boolean }) {
      this.user = value;
      console.log( this.user);
      console.log("valid: " + valid);
  }
}
