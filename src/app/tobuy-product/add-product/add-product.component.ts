
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Product } from 'src/app/model/product';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addForm: FormGroup;

  constructor(private productsService: ProductsService, private authService: AuthService) {
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
      const product = {name: productName, userId: this.authService.user.uid, added: new Date().toLocaleString(), isPurchased: false};
      productsList.push(product);
    });
    return productsList;
  }

  addField() {
    const arr = this.addForm.get('productName') as FormArray;
    arr.push(new FormControl(null, Validators.required));
  }

}
