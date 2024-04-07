import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../Models/product.interface';
import { productState } from '../selector/product.selector';
import * as productActions from "../action/product.action";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products$  = this.store.select(productState); //selecting the action as we give in models


  addProduct()
  {
      const rnd = Date.now().toString();
      const product:Product = {
        id: rnd, name: 'product' + rnd,
        price:  100
      };
      this.store.dispatch(productActions.addProduct({product}));
  }
  removeProduct(id:string)
 {
      this.store.dispatch(productActions.removeProduct({id}));
 }
constructor(private store : Store< {products : ReadonlyArray <Product>}> ){}
}
