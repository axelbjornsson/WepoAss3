import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SellersService } from './sellers.service';
import { SellersComponent } from './sellers/sellers.component';
import { JumboSellersComponent } from './sellers/jumbo-sellers/jumbo-sellers.component';
import { ListSellersComponent } from './sellers/list-sellers/list-sellers.component';
import { SellerComponent } from './seller/seller.component';
import { ListProductsComponent } from './seller/list-products/list-products.component';
import { DetailsSellerComponent } from './seller/details-seller/details-seller.component';
import { CardProductComponent } from './seller/list-products/card-product/card-product.component';
import { SellerDialogComponent } from './dialogs/seller-dialog/seller-dialog.component';
import { ProductDialogComponent } from './dialogs/product-dialog/product-dialog.component';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

@NgModule({
  declarations: [
    AppComponent,
    SellersComponent,
    JumboSellersComponent,
    ListSellersComponent,
    SellerComponent,
    ListProductsComponent,
    DetailsSellerComponent,
    CardProductComponent,
    SellerDialogComponent,
    ProductDialogComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'sellers',
      pathMatch: 'full'
    }, {
      path: 'sellers',
      component: SellersComponent
    }, {
      path: 'sellers/:id',
      component: SellerComponent
    }, {
      path: '**',
      redirectTo: '/sellers'
    }]),
    RouterModule,
  ],
  providers: [SellersService],
  bootstrap: [AppComponent],
  entryComponents: [SellerDialogComponent, ProductDialogComponent]
})
export class AppModule { }
