import { Component, OnInit ,Input} from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-errors',
  template: `
  <ul *ngIf="showErrors()">
    <li style="color: red" *ngFor="let error of errors()">{{error}}</li>
  </ul>`,
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {
  private static readonly messages = {};
//   private static readonly messages = {
//     'required': () => 'Required', //Required validation error
//     'minlength': (params) => 'The min number of characters is ' + params.requiredLength, //minimum length validation error
//     'maxlength': (params) => 'The max allowed number of characters is ' + params.requiredLength, //maximum length validation error
//     'pattern': (params) => 'The required pattern is: ' + params.requiredPattern, //pattern matching validation error,
//     ‘age’: (params) => params.message // It custom validator method will learn this below steps.
// };

  constructor() { }
  ngOnInit(){
    
  }

  @Input()  private control: AbstractControlDirective | AbstractControl;
  
  showErrors(): boolean {
    return this.control && this.control.errors &&(this.control.dirty || this.control.touched);  
  }
  
  errors(): string[] {
    return Object.keys(this.control.errors).map(field => this.getMessage(field, this.control.errors[field]));
  }
  
  private getMessage(type: string, params: any) {
    return ErrorsComponent.messages[type](params);
  }
}
