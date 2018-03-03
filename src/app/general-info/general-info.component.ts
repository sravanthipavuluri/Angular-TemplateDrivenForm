import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    public onFormSubmit(signupForm:HTMLFormElement) {   
      console.log( signupForm.value);   
      console.log( signupForm.value.basicgrp.fname);      
  }

}
