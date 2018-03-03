export class register{

    //Form Inputs
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

    constructor(values: Object = {}) {
        //Constructor initialization
        Object.assign(this, values);
    }



}