import { Injectable} from '@angular/core';
import{Observable,throwError} from 'rxjs';
import {catchError,map} from 'rxjs/operators';
import {HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl:string='http://localhost:3000/api';
headers=new HttpHeaders().set('Content-Type','application/json');

  constructor( private http:HttpClient) { }
  getProducts(){
    return this.http.get("http://localhost:3000/products");
  }
  newProduct(item)
{
return this.http.post("http://localhost:3000/insert",{"product":item})
.subscribe(data =>{console.log(data)})
}
 //code for error 
 errorMgmt(error:HttpErrorResponse){
  let errorMessge='';
    if(error.error instanceof ErrorEvent){
     errorMessge=error.error.message //for clientiside err
     }else{
     errorMessge='Error Code:${error.status}\nMessage:${error.message}';
      }
      console.log(errorMessge);
      return throwError(errorMessge);
    }
//err ends
getProduct(id):Observable<any>{
  let url='http://localhost:3000/edit/${id}';
    return this.http.get(url,{headers:this.headers}).pipe(
       map((res:Response)=>{
             return res ||{}
        }),catchError(this.errorMgmt)
      )
    }

deleteProduct(id):Observable<any>{
  let url='http://localhost:3000/delete/${id}';
  return this.http.delete(url,{headers:this.headers}).pipe(
     catchError(this.errorMgmt)
   )}
 // debugger;
  // return this.http.delete("http://localhost:3000/products/delete/"+productId)
  // .subscribe(data=>{console.log("deleted")})




  updateProduct(id,data):Observable<any>{
    let url='http://localhost:3000/update/${id}';
    return this.http.put(url,data,{headers:this.headers}).pipe(
      catchError(this.errorMgmt)
    )
  }

}

  



