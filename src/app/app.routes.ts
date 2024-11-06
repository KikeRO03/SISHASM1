import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { authenticatedGuard } from './core/guards/authenticated.guard';
export const routes: Routes = [{
    path: 'login',
    loadComponent: () => import('./shared/components/login/login.component'),
    canActivate:[authenticatedGuard]
},

    {
        path:'',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
               {
                path: 'dashboard',
                loadComponent: () => import('./business/dashboard/dashboard.component'),
                canActivate:[authGuard]
            },
            {
                path: 'archivo_clinic',
                loadComponent: () => import('./business/archivo-clinic/archivo-clinic.component'),
                canActivate:[authGuard]

            },
            {
                path: 'archivo',
                loadComponent: () => import('./business/archivo/archivo.component'),
                canActivate:[authGuard]
                
            },
            {
                path: 'buscar_archivo',
                loadComponent: () => import('./business/archivo-clinic/components/busqueda/busqueda.component'),
                canActivate:[authGuard]
            },

            {
                path: 'vacaciones',
                loadComponent: () => import('./business/vacaciones/vacaciones.component'),
                canActivate:[authGuard]
            },

            {
                path: 'ausencias',
                loadComponent: () => import('./business/ausencias/ausencias.component'),
                canActivate:[authGuard]
            },


            {
                path: 'registro-cirugias',
                loadComponent: () => import('./business/registro-cirugias/registro-cirugias.component'),
                canActivate:[authGuard]
            },
            {
                path: 'busqueda-cirugias',
                loadComponent: () => import('./business/busqueda-cirugias/busqueda-cirugias.component'),
                canActivate:[authGuard]
            },   
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch:'full'
            },
            
        ]
    },
    {
        path: '**',
        redirectTo:'dashboard'
    }

   
];