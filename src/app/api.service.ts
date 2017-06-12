import { ArrayType } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';

/**
 * Base Api class
 */
@Injectable()
export class ApiServiceProvider {
    /**
     * get support phone
     */
    getSupportPhone(): string {
        return '';
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

    // getCoup/
}
