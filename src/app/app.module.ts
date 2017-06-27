import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { ApiServiceProvider } from './api.service';
import { routing } from './route.service';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FaqComponent } from './faq/faq.component';
import { NewsComponent } from './news/news.component';
import { NewsSingleComponent } from './news-single/news-single.component';
import { CouponsComponent } from './coupons/coupons.component';
import { CouponComponent } from './coupon/coupon.component';
import { PayComponent } from './pay/pay.component';
import { SellerComponent } from './seller/seller.component';
import { BuyerComponent } from './buyer/buyer.component';
import { PromoComponent } from './promo/promo.component';
import { ThanksComponent } from './thanks/thanks.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CouponCategoriesComponent } from './coupon-categories/coupon-categories.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LatestViewsComponent } from './latest-views/latest-views.component';
import { BannerComponent } from './banner/banner.component';
import { SearchComponent } from './search/search.component';

// bootstrap modules
import { CarouselModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent,
    MainpageComponent,
    FaqComponent,
    NewsComponent,
    NewsSingleComponent,
    CouponsComponent,
    CouponComponent,
    PayComponent,
    SellerComponent,
    BuyerComponent,
    PromoComponent,
    ThanksComponent,
    NotfoundComponent,
    CouponCategoriesComponent,
    SidebarComponent,
    LatestViewsComponent,
    BannerComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CarouselModule.forRoot(),
  ],
  providers: [HeaderComponent, ApiServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
