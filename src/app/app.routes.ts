import { Routes } from '@angular/router';
import { Animelist } from './pages/private/animelist/animelist';
import { Animedetail } from './pages/private/animelist/animedetail/animedetail';
import { Notfound } from './shared/components/notfound/notfound';

export const routes: Routes = [
    {
        path: "home",
        loadChildren: () => import("./pages/private/animelist/animelist.route").then((route) => route.routes)
 /*       component: Animelist,
        children: [
            {
                path: "dettaglio",
                component: Animedetail
            }
        ]*/
    },
/*    {
        path: "home/anime-list",
        component: Animelist
    },*/
/*    {
        path: "dettaglio",
        component: Animedetail
    },*/
    {
        path: "esercizi",
        loadComponent: () => import("./pages/private/esercizio/esercizio").then((component) => component.Esercizio)
    },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
        {
        path: "**",
        component: Notfound
    }
    
];
