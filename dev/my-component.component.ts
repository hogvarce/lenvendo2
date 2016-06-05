import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {TestComponent} from './test.component';

@Component({
    selector: 'my-component',
    template: `
        <p>Hi, my name is <span [style.color]="inputElement.value === 'yes' ? 'red' : ''">{{name}}</span>. Is my first component Angular 2!
            <span [class.is-awesome]="inputElement.value === 'yes'">It's so awesome!</span>
        </p>
        <br><br>
        <span>Is it awesome?</span>
        <input type="text" #inputElement (keyup)="0">
        <br><br>
        <button [disabled]="inputElement.value !== 'yes'">Only enable if 'yes' was entered.</button>
        <test></test>
    `,
    styleUrls: ['src/css/mycomponents.css'],
    directives: [TestComponent]
})
export class MyComponentComponent implements OnInit {
    name: string;

    ngOnInit():any {
        this.name = "Anton";
    }
}
