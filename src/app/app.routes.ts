import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
    {
        path:'',
        component:ProductListComponent
    },
    {
        path:"prduct-details/:id",
        component:ProductDetailsComponent
    },{
        path:'about-us',
        component:AboutUsComponent
    }
];
