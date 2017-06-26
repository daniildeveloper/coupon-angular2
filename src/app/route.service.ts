import { RouterModule, Routes } from '@angular/router';

/**
 * array of routes
 */
const routeList: Array<Object> = [
    { path: '' }
];

/**
 * app routes
 */
export const routing = RouterModule.forRoot(routeList);

export const routes: Routes = routeList;

