import {Component, EventEmitter} from 'angular2/core';

@Component({
    selector: 'content',
    templateUrl: '/templates/content.tpl.html',
    inputs: [
        'listItems'
    ],
    outputs: [
        'selectedEmit'
    ]
})
export class ContentComponent {
    listItems = new Array<{title: string, text: string, complex: string, selected: boolean}>();
    selected = 0;
    selectedRed = 0;
    selectedGreen = 0;
    selectedEmit = new EventEmitter<{selected: number, selectedRed: number, selectedGreen: number}>();

    onChangeColor(item){
        if (item.complex) {
            item.complex = (item.complex == 'green') ? 'red': 'green';
            if (item.selected) {
                if (item.complex == 'red') {
                    this.selectedRed++;
                    if (this.selectedGreen > 0) this.selectedGreen--;
                }
                else {
                    this.selectedGreen++;
                    if (this.selectedRed > 0) this.selectedRed--;
                }
            }
        }
    }

    onSelected(item){
        if (item.selected){
            this.selected++;
            if (item.complex != '' && item.complex == 'red') {
                this.selectedRed++;
            }
            if (item.complex != '' && item.complex == 'green'){
                this.selectedGreen++;
            }

        }
        else
        {
            if (this.selected > 0)
                this.selected--;
            if (item.complex != '' && item.complex == 'red')
                if (this.selectedRed > 0) this.selectedRed--;
            if (item.complex != '' && item.complex == 'green')
                if (this.selectedGreen > 0) this.selectedGreen--;
        }
        this.selectedEmit.emit({
            selected: this.selected,
            selectedRed: this.selectedRed,
            selectedGreen: this.selectedGreen
        });
    }

    onSelect(item){
        var self = this;
        var _clickCounter = 0,
            _clickDelay = 200,
            _clickTimer;
        if( ++_clickCounter === 1 ) {
            _clickTimer = setTimeout( function() {
                _clickCounter = 0;
                item.selected = (item.selected) ? false: true;
                self.onSelected(item);
                }, _clickDelay );
        } else {
            clearInterval( _clickTimer );
            _clickCounter = 0;
        }


    }

    onRemove(item){
        if (item.complex != '') {
            if (confirm('Вы точно этого хотите?'))
                this.listItems.splice(this.listItems.indexOf(item), 1);
        } else {
            this.listItems.splice(this.listItems.indexOf(item), 1);
        }
        if (item.selected) {
            if (this.selected > 0) this.selected--;
            if (item.complex) {
                if (item.complex == 'red')
                    if (this.selectedRed > 0) this.selectedRed--;
                if (item.complex == 'green')
                    if (this.selectedGreen > 0) this.selectedGreen--;
            }
            this.selectedEmit.emit({
                selected: this.selected,
                selectedRed: this.selectedRed,
                selectedGreen: this.selectedGreen
            });
        }
    }
}
