import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product-list/product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  title:string="Edit Product";
  angForm: any;
  actRoute: any;
  fb: any;
  submitted: boolean;
  constructor(private productService:ProductService,private router:Router) { }
  

  ngOnInit(): void {
  
  this.updateProduct();
  let id=this.actRoute.snapshort.paramMap.get('id');
  this.getProduct(id);
  alert(this.getProduct(id))
  this.angForm=this.fb.group({
 
  })
 
 }
 
  get myForm(){
      return this.angForm.controls;
  }
  getProduct(id){
      this.productService.getProduct(id).subscribe(data=>{
          this.angForm.setValue({
              productId:data['productId'],
              productName:data['productname'],
              productCod:data['productCode'],
              releseDate:data['releaseDate'],
              description:data['description'],
              price:data['price'],
              starRating:data['starRating'],
              ImageUrl:data['imageUrl']
          })
      });
  }
  updateProduct(){
 this.angForm=this.fb.group({
     productId:['',Validators.required],
     productName:['',Validators.required],
     productCode:['',Validators.required],
     releaseDate:['',Validators.required],
     description:['',Validators.required],
     price:['',Validators.required],
     starRating:['',Validators.required],
     ImageUrl:['',Validators.required]
 
 })
  }
  onSubmit(){
      this.submitted=true;
      
  }
}
