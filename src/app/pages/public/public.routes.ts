import { Route, Routes } from "@angular/router";

export const publicRoutes : Routes = [
    {
        path : "auth",
        loadChildren : () => import ("./auth/auth.routes").then((routes)=> routes.authRoutes)
    },
    {
        path: "",
        redirectTo : "auth",
        pathMatch : "full"
    }
]
