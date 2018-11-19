import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [CustomersComponent, ListComponent, AddComponent, EditComponent, ViewComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CustomersComponent
  ]
})
export class CustomersModule { }
