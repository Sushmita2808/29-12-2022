import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  data={
    companyname:"",
    email:"",
    phone:"",
    machines:"",
    amount:""
  }

  constructor() { }

  ngOnInit(): void {
  }
  
  doSubmitFrom(){
    console.log(this.data);   
  }
  
  public getVal():void{
    
    alert(" Company Name : "+ this.data.companyname +
           "\n " + "Email : " + this.data.email +
           "\n " + "Phone Number : " + this.data.phone +
           "\n " + "Machine Type : " + this.data.machines +
           "\n " + "Amount : " + this.data.amount 
           );
  }
  
}
