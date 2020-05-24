import { Component,Injector } from '@angular/core';
import{Customer}  from './CustomerApp.model'
import{BaseLogger} from '../Utility/CustomerApp.Logger'

@Component({
  
  templateUrl: './CustomerApp.CustomerView.html'
  // styleUrls: ['./app.component.css']
})
export class CustomerComponent 
{


title = 'CustomerApplication';
CustomerModel:Customer=new Customer();
CustomerModels:Array<Customer>=new  Array<Customer>();

logobject: BaseLogger=null;;

constructor(_Injector: Injector)
{
  this.logobject=_Injector.get("1");
  this.logobject.Log();
}

Add(){
 this. CustomerModels.push(this.CustomerModel);
 this.CustomerModel=new Customer();
}


//hasError(typeofvalidator:string,controlname:string) :
//boolean
//{

//return this.CustomerModel.formCustomerGroup.contains[controlname].
//hasError(typeofvalidator);

//}

}
