import { Component, OnInit } from '@angular/core';
import { pwddata } from './pwddata';

@Component({
  selector: 'app-password-info',
  templateUrl: './password-info.component.html',
  styleUrls: ['./password-info.component.css']
})
export class PasswordInfoComponent implements OnInit {

  private pwd:pwddata;


  ngOnInit() {
    this.pwd = new pwddata({
      password: "" , confirmPwd: "",frmvalid:false,lenvalid:false,matchvalid:false});
  }  
  public onFormSubmit():boolean {    
      if(this.pwd.password.length<8){
        this.pwd.lenvalid=false;
        this.pwd.frmvalid=false;
        return this.pwd.frmvalid;
      }else{
        this.pwd.lenvalid=true;
      }
      if(this.pwd.password==this.pwd.confirmPwd){
        this.pwd.matchvalid=true;  
      }else{
        this.pwd.matchvalid=false;
        this.pwd.frmvalid=false;
        return this.pwd.frmvalid;
      }
      if(this.pwd.lenvalid && this.pwd.matchvalid){
            this.pwd.frmvalid=true;
      }
      console.log(this.pwd.lenvalid +"----"+this.pwd.matchvalid +"----"+this.pwd.frmvalid);
      return this.pwd.frmvalid;
  }
  public cleardata(){
    this.pwd.password="";
    this.pwd.confirmPwd="";
    this.pwd.lenvalid=false;
    this.pwd.matchvalid=false;
    this.pwd.frmvalid=false;
  } 
}
