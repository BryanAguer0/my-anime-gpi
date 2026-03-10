import { Routes } from "@angular/router";

export const authRoutes : Routes = [
    {
        path : "",
        children : [
            {
                path : "login",
                loadComponent : () => import("./login/login").then((component)=> component.Login)
            },
            {
              path: "register",
              loadComponent : () => import("./register/register").then((component)=> component.Register)
            },
            {
                path : "",
                redirectTo : "login",
                pathMatch : "full"
            }
        ]

    }
]
