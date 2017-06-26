import { ArrayType } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Base Api class
 */
@Injectable()
export class ApiServiceProvider {
    private ext = '.json';
    /**
     * where data contains
     */
    private dataFolder = './assets/data';

    /**
     * R file file where R is like in android R. Here can find all needed data
     */
    private Rfile = this.dataFolder + '/R' + this.ext;

    /**
     * where from get menu items
     */
    private menuItems = this.dataFolder + '/menuitems' + this.ext;

    /**
     * where from get coupon categories
     */
    private couponCategories = this.dataFolder + '/couponcategories' + this.ext;

    /**
     * where from get  all coupons
     */
    private coupons = this.dataFolder + '/coupons';

    /**
     * get availbale cities where coupons are to buy
     */
    private cities = this.dataFolder + '/cities' + this.ext;


    constructor(private _http: Http) {

    }

    /**
     * get support phone
     */
    getSupportPhone() {
        return this._http.get(this.Rfile)
            .map(
            res => {
                return res.json().supportPhone;
            }
            )
            ;
    }
    /**
     * While menu customizable is, we must have menu items Objects.
     */
    getMenuItems() {

        return this._http.get(this.menuItems).map(
            res => {
                return res.json();
            }
        );
    }

    /**
     * get coupon categories with icons and names
     * structure:
     * "categoryId: Integer": {
     *    "name": "name to display",
     *    "icon": "icon to display"
     * }
     */
    getCouponCategories() {
        return this._http
            .get(this.couponCategories)
            .map(res => res.json());
    }

    /**
     * get coupon categorie by id
     * @param id
     */
    getCouponCategorieById(id: number) {
        return this._http
            .get(this.couponCategories)
            .map(res => res.json()[id]);
    }

    /**
     * get all
     */
    getCoupons() {
        return this._http.get(this.coupons + this.ext + '')
            .map(res => res.json());
    }

    /**
     * get coupon info by id
     * @param id of coupon to search
     */
    getCoupon(id: Number) {
        return this._http.get(this.coupons + '/' + id + this.ext)
            .map(res => res.json());
    }

    /**
     * find coupon by string
     * @param query string with coupon must be finded
     * TODO:
     */
    findCouponByString(query: String) {
        return this.getCouponCategories();
    }

    /**
     * get availbale cities
     */
    getAvailbaleCities() {
        return this._http.get(this.cities)
            .map(res => res.json());
    }

    /**
     * get faq questions list
     */
    getFaqList(): Object[] {
        return [{}];
    }

}
