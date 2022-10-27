import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

  products: any
  filtercategory: any
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.viewAllproduct().subscribe(data => {
      // console.log(data);
      this.products = data
    })
  }

  filter(category: any) {
    this.filtercategory = this.products.filter((item: any) => {
      if (item.categoryId == category || category == '') {
        return item
      }
    })
  }
}
