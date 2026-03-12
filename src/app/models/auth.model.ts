import { HttpErrorResponse } from "@angular/common/http";
import { IToken } from "./token.model";
import { User } from "./user";

export interface AuthState {
    user:User|undefined,
    token:IToken|undefined,
    errors:undefined|string;
    loading:boolean;
}