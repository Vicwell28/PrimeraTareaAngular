import { Component } from '@angular/core';

@Component({
    selector: 'HelloWord', 
    templateUrl: './PrimerComponente.component.html', 
    styleUrls: ['./PrimerComponente.component.css']
})
export class HelloWord{
    title = 'Welcome to Angular'
    users = ['Victor', 'Miguel', 'Basurto', 'Juarez']
}
