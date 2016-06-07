import {Component} from 'angular2/core';
import {HeaderComponent} from './directives/header';
import {CounterComponent} from './directives/counter';
import {ContentComponent} from './directives/content';

@Component({
    selector: 'app',
    template: `
        <header (itemAdd)="onItemAdd($event)"></header>
        <counter  [listItems]='listItems' [selected]="selected"  [selectedRed]="selectedRed"  [selectedGreen]="selectedGreen" ></counter>
        <content  (selectedEmit)="selectedAdd($event)" [listItems]='listItems'></content>
    `,
    directives: [
        HeaderComponent,
        CounterComponent,
        ContentComponent
    ]

})
export class AppComponent {
    listItems = new Array<{title: string, text: string, complex: string, selected: boolean}>();
    selected = 0;
    selectedRed = 0;
    selectedGreen = 0;

    onItemAdd(item: {title: string, text: string}){
        this.listItems.push({title: item.title, text: item.text, complex: (Math.random() < 0.5)? 'green': '', selected: false});
    }
    selectedAdd(selectedObj: {selected: number, selectedRed: number, selectedGreen: number}){
        this.selected = selectedObj.selected;
        this.selectedRed = selectedObj.selectedRed;
        this.selectedGreen = selectedObj.selectedGreen;
    }
}
