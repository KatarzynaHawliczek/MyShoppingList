import { ProductsService } from './../services/products.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addForm: FormGroup;

  constructor(private productsService: ProductsService) {
   }

  ngOnInit() {
    this.addForm = this.initForm();
  }

  initForm() {
    return new FormGroup({
      productName: new FormArray([new FormControl(null, Validators.required)])
    });
  }

  add() {
    const productsList = this.createProductList();
    this.productsService.add(productsList);
    this.addForm = this.initForm();
  }

  createProductList(): Array<Product> {
    const productsList = new Array<Product>();
    const productsArr = <[string]>this.addForm.get('productName').value;
    productsArr.forEach(productName => {
      const product = {name: productName, created: new Date().toLocaleString(), isPurchased: false};
      productsList.push(product);
    });
    return productsList;
  }

  addField() {
    const arr = <FormArray>this.addForm.get('productName');
    arr.push(new FormControl(null, Validators.required));
  }

}
