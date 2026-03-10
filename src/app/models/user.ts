export interface UserCredentials {
    email : string
    password : string
}
export interface RegisterFormData {
  name : string;
  surname : string;
  age : number;
  date: string;
  email : string;
  password : string;
}
export interface RegisterFormSignalData {
  name : string;
  surname : string;
  age : number;
  date: string;
  email : string;
  password : string;
  repeatPassword: string;
}
export class User {

    id: number
    name: string
    surname: string

    constructor(object?: any) {
        this.id = object?.id ?? 0
        this.name = object?.name ?? ""
        this.surname = object?.surname ?? ""
    }
}
