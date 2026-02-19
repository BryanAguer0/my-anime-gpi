import { Directive, Input, input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive ({

    selector:'[appHasRole]'
    
})

export class HasRoleDirective{

    private currentUserRole:string='admin'

    constructor(private templateref:TemplateRef<any>, private viewcontainer:ViewContainerRef){


    }

    @Input()
    set appHasRole (role:string){
        this.viewcontainer.clear();
        if (this.currentUserRole === role) {
            this.viewcontainer.createEmbeddedView(this.templateref)
        }
    }
}