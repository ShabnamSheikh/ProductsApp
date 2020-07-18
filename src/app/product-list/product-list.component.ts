import { Component, OnInit } from '@angular/core';
import { ProductModel} from './product.model';
import {ProductService} from '../product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 title:String = "Product List";
 products: ProductModel[];
 imageWidth: number = 50;
 imageMargin: number = 2;

 showImage: boolean = false;
  constructor(private productService: ProductService) {

   }
   toggleImage(): void{
     this.showImage = !this.showImage;
   }
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    })
  }
  removeProduct(products,index)
  {
    //console.log("productId received",productId);
    if(window.confirm('Are you sure to delete?')){
     this.productService.deleteProduct(products._id).subscribe((data)=>{
       this.products.splice(index,1);
     })}}
}
