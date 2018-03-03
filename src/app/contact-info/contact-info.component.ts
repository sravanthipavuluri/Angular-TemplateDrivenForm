import { Component, OnInit } from '@angular/core';
import { contact } from './contact';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  private conts:contact;

  ngOnInit() {
    this.conts = new contact({
      phoneno: "",addr:""});
  }

  public onFormSubmit(signupForm:HTMLFormElement) {   
      console.log( signupForm.value);   
      console.log( signupForm.value.basicgrp.phone);      
      console.log( signupForm.value.basicgrp.addr);
  }
}
