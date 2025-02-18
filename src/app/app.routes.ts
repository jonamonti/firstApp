import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
  {
    path: 'contacts',
    title: 'Contacts',
    component: ContactComponent
  },
  {
    path: 'products',
    title: 'Products',
    component: ProductsComponent
  }
];
