import { Route, Routes } from "@angular/router";

export const privateRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import("./private").then((component) => component.Private),
        children: [
            {
                path: "home",
                loadChildren: () => import("./animelist/animelist.route").then((route) => route.routes)
                /*       component: Animelist,
                       children: [
                           {
                               path: "dettaglio",
                               component: Animedetail
                           }
                       ]*/
            },

            {
                path: "esercizi",
                loadComponent: () => import("./esercizio/esercizio").then((component) => component.Esercizio)
            },
            {
              path: "",
                redirectTo: "home",
                pathMatch : "full"
            }
        ]
    },

]

