import { Component } from '@angular/core';
import { DataService } from '../data.service'

@Component({
    selector: 'HelloWord', 
    templateUrl: './PrimerComponente.component.html', 
    styleUrls: ['./PrimerComponente.component.css']
})
export class HelloWord{
    title = 'Welcome to Angular';
    users = ['Victor', 'Miguel', 'Basurto', 'Juarez'];
    Activado: boolean = true;
    name: string = 'Rayan Ray';
    age: number=0; 
    address = {
        street : "H",
        city : "H"
    };
    hobbies = ['',];
    post : any = []

    constructor(private dataServec : DataService){
        this.age = 19; 
        this.address = {
            street: 'Santiago Ramirez',
            city: 'Torreón'
        };
        this.hobbies  = ['Read','Swimming','Write']

        this.dataServec.getData().subscribe(data => {
            this.post = data;
        });
    }

    seyHello(){
        alert("Hola");
    }

    deleteUser(user:any){
        for(let i = 0; i < this.users.length; i++){
            if(user == this.users[i]){
                this.users.splice(i, 1);
            }
        }
    }

    EnviarNombre(idNambe:any){
        this.users.push(idNambe.value); 
        idNambe.value=""; 
        idNambe.focus(); 

        return false; 
    }

}
