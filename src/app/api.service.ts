import { ArrayType } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Base Api class
 */
@Injectable()
export class ApiServiceProvider {
    /**
     * where data contains
     */
    private dataFolder = './assets/data';

    /**
     * R file file where R is like in android R. Here can find all needed data
     */
    private Rfile = this.dataFolder + '/R.json';


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
     * While menu customizable is, we must have menu items Objects
     */
    getMenuItems(): [Array<String>] {
        return [['']];
    }

    /**
     * get coupon categories with icons and names
     */
    getCouponCategories(): Object[] {
        return [{}];
    }

    /**
     * get coupon categorie by id
     * @param id
     */
    getCouponCategorieById(id: number): Object {
        return {};
    }

    /**
     * get coupons chunks
     */
    getCoupons(): Object[] {
        return [{}];
    }

    /**
     * get coupon info by id
     * @param id of coupon to search
     */
    getCoupon(id: number): Object {
        return {};
    }

    /**
     * find coupon by string
     * @param query string with coupon must be finded
     */
    findCouponByString(query: string): Object[] {
        return [{}];
    }

    /**
     * get availbale cities
     */
    getavailbaleCities(): Object[] {
        return [{}];
    }

    /**
     * get faq questions list
     */
    getFaqList(): Object[] {
        return [{}];
    }

}
