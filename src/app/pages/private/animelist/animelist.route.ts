import { Routes } from "@angular/router";
import { Animelist } from "./animelist";

export const routes: Routes =[
    {
        path: "",
        component: Animelist
    },
    {
        path: "anime-detail",
        loadChildren: () => import("./animedetail/animedetail.route").then((route) => route.routes)
    },
    {
        path: "",
        redirectTo: "",
        pathMatch: "full"
    }
]