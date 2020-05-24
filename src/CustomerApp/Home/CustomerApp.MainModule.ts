import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{RouterModule} from '@angular/router';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import { HomeComponent } from './CustomerApp.HomeComponent';
import { CustomerModule } from '../Customer/CustomerApp.CustomerModule';
import { SupplierModule } from '../Supplier/CustomerApp.SupplierModule';
import{ConsoleLogger,BaseLogger, DbLogger} from '../Utility/CustomerApp.Logger';

var providercall:any=[];
providercall.push({ provide:"1",
  useClass:ConsoleLogger});
  providercall.push({ provide:"2",
  useClass:DbLogger});
providercall.push({ provide:BaseLogger,
  useClass:DbLogger});


@NgModule({
  declarations: [
    MasterPageComponent,HomeComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),BrowserModule,FormsModule,
  //  CustomerModule,SupplierModule
  ],
  providers: [
    providercall

  ],
  bootstrap: [MasterPageComponent]
})

export class MainModule {

 }
