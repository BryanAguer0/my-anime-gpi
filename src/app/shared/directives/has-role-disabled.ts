import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({

    selector:'[appHasRoleDisabled]'

})

export class HasRoleDisabled{

    private currentuserrole:string='user'

    constructor(private elementref:ElementRef, private renderer:Renderer2){

    }

    @Input()
    set appHasRoleDisabled(requiredrole:string){

        const hasrole=this.currentuserrole==requiredrole
        if (!hasrole){
            this.renderer.setStyle(this.elementref.nativeElement, 'cursor', 'not-allowed')
            this.renderer.setStyle(this.elementref.nativeElement, 'opacity', '0.5')
            this.renderer.setStyle(this.elementref.nativeElement, 'pointer-events', 'none')
            
        } else {
            this.renderer.removeStyle(this.elementref.nativeElement,'cursor')
            this.renderer.removeStyle(this.elementref.nativeElement, 'opacity')
            this.renderer.removeStyle(this.elementref.nativeElement, 'pointer-events')

        }
    }
}