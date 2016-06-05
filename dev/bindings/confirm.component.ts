import {Component, EventEmitter} from 'angular2/core';

@Component({
    selector: 'my-confirm',
    template: `
        <h1>You submitted the following details. Is this correct?</h1>
        <p>Your name is <span class="highlight">{{name}}</span> and your age is <span class="highlight">{{age}}</span> years old</p>
        <p>Please, click on 'confirm'. If you have any changes make change:</p>
        <div>
            <label for="name">Your name</label>
            <input type="text" id="name" [(ngModel)]="myself.name" (keyup)="onKeyup()" />
        </div>
        <div>
            <label for="age">Your age</label>
            <input type="text" id="age" [(ngModel)]="myself.age" (keyup)="onKeyup()" />
        </div>
        <div>Filled out: {{isFilled ? 'yes': 'no'}}</div>
        <div>Valid: {{isValid ? 'yes': 'no'}}</div>
        <br>
        <button [disabled]="!isValid" (click)="onConfirm()">Confirm</button>
    `,
    inputs: ['myself'],
    outputs: ['confirmed']
})

export class ConfirmComponent {
    myself = {
        name: '',
        age: ''
    };
    isFilled = false;
    isValid = false;
    confirmed = new EventEmitter<(name: string, age: string)>();

    onKeyup(){
        if (this.myself.name != ''  &&  this.myself.age != '') {
             this.isFilled = true;
        } else {
            this.isFilled = false;
        }

        if (this.myself.name != ''  &&  /^\d+$/.test(this.myself.age)) {
             this.isValid = true;
        } else {
            this.isValid = false;
        }
    }

    onConfirm(){
        this.confirmed.emit(this.myself);
    }
}
