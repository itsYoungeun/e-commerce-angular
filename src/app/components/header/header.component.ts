import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="flex justify-between items-center bg-slate-100 px-4 py-3 shadow-md">
      <span class="text-xl">My Store</span>
      <app-primary-button [label]="cart()" (btnClicked)="showButtonClicked()"/>
    </div>
  `,
  styles: ``
})
export class HeaderComponent {
  cart = signal('Cart');

  showButtonClicked() {
    console.log('button clicked')
  }
}
