import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CouponsComponent } from './coupons/coupons.component';
import { CouponComponent } from './coupon/coupon.component';
import { NewsComponent } from './news/news.component';
import { NewsSingleComponent } from './news-single/news-single.component';
import { PromoComponent } from './promo/promo.component';
import { FaqComponent } from './faq/faq.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';

/**
 * array of routes
 */
const routeList: Array<Object> = [
    { path: '', component: MainpageComponent },
    { path: 'coupons', component: CouponsComponent },
    { path: 'coupons/:id', component: CouponComponent },
    { path: 'news', component: NewsComponent },
    { path: 'news/:id', component: NewsSingleComponent },
    { path: 'promo/:slug', component: PromoComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'my', component: BuyerComponent },
    { path: 'cabinet', component: SellerComponent }
];

/**
 * app routes
 */
export const routing = RouterModule.forRoot(routeList);

export const routes: Routes = routeList;

