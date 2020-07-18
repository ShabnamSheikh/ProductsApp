import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { NgModule } from '@angular/core';
import{EditProductComponent}from './edit-product/edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'',component:ProductListComponent},
   {path:'add',component:NewProductComponent},
   {path:'edit-product/:id',component:EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ReactiveFormsModule],
  exports: [RouterModule,
           FormsModule,
            ReactiveFormsModule]
})
export class AppRoutingModule { }
