import { Component, Input } from '@angular/core';
import { ISeller } from '../models/seller.model';

@Component({
  selector: 'app-seller-details',
  templateUrl: './seller-details.component.html',
  styles: []
})
export class SellerDetailsComponent {
  @Input() seller: ISeller;
}
