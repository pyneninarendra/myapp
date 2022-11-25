import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  allProductsURL: string = 'https://fakestoreapi.com/products'
  constructor(private http: HttpClient) { }

  getAllData(){
    return this.http.get(this.allProductsURL)
  }
}
