import { Component, OnInit , NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatternValidator } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { register } from './register';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  Fname:string;
  lname:string;
  pname:string;
  degree:string;
  passout:number;
  course:string;
  duration:string;
  email:string;
  phone:number;
  caddr:string;
  paddr:string;
  city:string;
  state:string;
  zip:string;

  //Temp variables
  frmisvalid:boolean;
  constructor() {
    //  this.reg = new register({Fname:"",lname:"",pname:"", degree:"", passout: "", course: "" , duration: "", 
    //  email:"",phone:"",caddr:"",paddr:"",city:"",state:"",terms:""});
   }
   


  ngOnInit() {
     
  }

  chklength(inputelement: string):void{
    alert("1111111");
        if(inputelement=="Fname" && this.Fname.length>2){
          alert("1111111");
          this.frmisvalid=false;
        }else{
          alert("2222222");
          this.frmisvalid=true;
        }
  }

  validate (validateForm: NgForm):boolean {
      console.log('Successfully Submitted');
      console.log(validateForm);
      // if(validateForm.value.general.Fname.length>2){
      //     alert("Please shorten first name :"+validateForm.value.Academics.Passout.size);
      //     return this.frmisvalid = true;
      // }
      // if(validateForm.value.Academics.Passout.size>4){
      //   alert("Please shorten passout :"+validateForm.value.Academics.Passout.size);
      //   return this.frmisvalid = true;
      //   // let regexp = new RegExp('\\d{4}'),
      //   // test = regexp.test(validateForm.value.general.Passout);
      //   // alert(test + "");
      // }
      // if(validateForm.value.Courses.Phone.length>9){
      //   alert("Please shorten first name"+validateForm.value.Courses.Phone);
      //   return this.frmisvalid = true;
      // }
      

      // this.Fname = validateForm.value.general.Fname;
      // this.lname = validateForm.value.general.Lname;
      // this.pname = validateForm.value.general.Pname;
      // this.degree = validateForm.value.Academics.Degree;
      // this.passout = validateForm.value.Academics.Passout;
      // this.course = validateForm.value.Courses.Course;
      // this.duration = validateForm.value.Courses.Duration;
      // this.email = validateForm.value.Courses.email;
      // this.phone = validateForm.value.Courses.Phone;
      // this.caddr = validateForm.value.Address.CAddress;
      // this.paddr = validateForm.value.Address.PAddress;
      // this.city = validateForm.value.Address.City;
      // this.state = validateForm.value.Address.State;
      // this.zip = validateForm.value.Address.Zip;
      if(validateForm.valid){
        this.frmisvalid=true;
      }else{
        this.frmisvalid= !this.frmisvalid;
      }
      return this.frmisvalid;
   }
}
