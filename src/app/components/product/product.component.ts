import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [NgIf, NgOptimizedImage],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product: Product = {
    title: '',
    price: 0,
    images: [],
    id: 0
  };

}
