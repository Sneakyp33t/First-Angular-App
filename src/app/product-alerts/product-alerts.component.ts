import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  constructor() { }
  @Input() product!: Product; // The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent.
  @Output() notify = new EventEmitter();
  ngOnInit(): void {
  }

}
