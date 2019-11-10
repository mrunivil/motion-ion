import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'driver',
        loadChildren: () => import('./pages/details/driver/driver.module').then(m => m.DriverPageModule)
    },
    {
        path: 'vehicle',
        loadChildren: () => import('./pages/details/vehicle/vehicle.module').then(m => m.VehiclePageModule)
    },
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
