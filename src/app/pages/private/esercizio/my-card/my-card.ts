import { Component } from "@angular/core";
import { HasRoleDisabled } from "../../../../shared/directives/has-role-disabled";

@Component({
    selector:'app-my-card',
    imports:[HasRoleDisabled],
    template:`
    <div [appHasRoleDisabled]="'admin'" class = 'card'>
        <div class = 'card-header'>
            <ng-content select = '[card-header]'> 

            </ng-content>        
        </div>
        <div class = 'card-body'> 
            <ng-content> 

            </ng-content>
        </div>
        <div class = 'card-footer'> 
            <ng-content select = '[card-footer]'> 

            </ng-content> 
            <ng-content select = 'app-like'> 

            </ng-content> 
        </div>
    </div>
    `,
    styles:[`
        .card { border: 1px solid #ccc; padding: 1rem; border-radius: 5px; }
        .card-header, .card-footer { font-weight: bold; }
        .card-body { margin: 1rem 0; } 
    `]
})

export class MyCard{

}