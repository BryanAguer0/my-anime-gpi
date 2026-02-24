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