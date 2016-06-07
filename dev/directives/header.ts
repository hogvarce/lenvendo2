import {Component, EventEmitter} from 'angular2/core';

@Component({
    selector: 'header',
    templateUrl: '/templates/header.tpl.html',
    outputs: [
        'itemAdd'
    ]
})
export class HeaderComponent {
    item = {
        title: "Заголовок",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    };
    itemAdd = new EventEmitter<{title: string, text: string}>();
    onClick(){
        this.itemAdd.emit(this.item);
    }
}
