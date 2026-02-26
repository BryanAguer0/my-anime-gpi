import { Routes } from "@angular/router";
import { Animedetail } from "./animedetail";

export const routes: Routes =[
    {
        path: ":anime-id",
        component: Animedetail
    }
]