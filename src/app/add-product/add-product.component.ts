import { ProductsService } from './../services/products.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product';
import { FormGroup, FormArray, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';

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
    const productsArr = this.addForm.get('productName').value as [string];
    productsArr.forEach(productName => {
      const product = {name: productName, created: new Date().toLocaleString(), isPurchased: false};
      productsList.push(product);
    });
    return productsList;
  }

  addField() {
    const arr = this.addForm.get('productName') as FormArray;
    arr.push(new FormControl(null, Validators.required));
  }

}
