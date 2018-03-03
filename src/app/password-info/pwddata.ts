export class pwddata {    
      password: string;
      confirmPwd: string;
      frmvalid:boolean;
      lenvalid:boolean;
      matchvalid:boolean;
    constructor(values: Object = {}) {
      //Constructor initialization
      Object.assign(this, values);
  }
 
}