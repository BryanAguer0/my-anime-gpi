import { Routes } from '@angular/router';
import { Animelist } from './pages/private/animelist/animelist';
import { Animedetail } from './pages/private/animelist/animedetail/animedetail';
import { Notfound } from './shared/components/notfound/notfound';
import { isAutenticatedGuard } from './shared/guards/is-autenticated-guard';

export const routes: Routes = [
    {
        path : "private",
        loadChildren:() => import("./pages/private/private.routes").then((route) => route.privateRoutes),
        canActivate : [isAutenticatedGuard]
    },

    {
        path : "public",
        loadChildren:() => import("./pages/public/public.routes").then((route) => route.publicRoutes)
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
        path: "",
        redirectTo: "private",
        pathMatch: "full"
    },
        {
        path: "**",
        component: Notfound
    }
    
];
