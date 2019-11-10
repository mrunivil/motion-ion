import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: HomePage,
        children: [
            {
                path: 'map',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./map/map-tab.module').then(m => m.Tab1PageModule)
                    }
                ]
            },
            {
                path: 'drivers',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./drivers/drivers-tab.module').then(m => m.DriversTabPageModule)
                    }
                ]
            },
            {
                path: 'vehicles',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./vehicles/vehicles-tab.page.module').then(m => m.VehiclesTabPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/map',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/map',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomePageRoutingModule { }
