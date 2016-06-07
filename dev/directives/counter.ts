import {Component} from 'angular2/core';

@Component({
    selector: 'counter',
    templateUrl: '/templates/counter.tpl.html',
    inputs: [
        'listItems',
        'selected',
        'selectedRed',
        'selectedGreen'
    ]
})
export class CounterComponent {
    listItems = new Array<{title: string, text: string, complex: string, selected: boolean}>();
    selected = 0;
    selectedRed = 0;
    selectedGreen = 0;
}
