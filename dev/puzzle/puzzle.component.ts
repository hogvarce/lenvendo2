import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
@Component({
    selector: 'puzzle',
    template: `
        <section class="setup">
            <h2>Game setup</h2>
            Enter your name please:
            <input type="text" #name (keyup)="0">
        </section>
        <section
            [ngClass] = "{
                puzzle: true,
                solved: switch1.value == switch1Num && switch2.value == switch2Num && switch3.value == switch3Num && switch4.value == switch4Num
            }"
            [ngStyle]="{
                display: name.value === '' ? 'none' : 'block'
            }">
            <h2>The Puzzle |
            {{(switch1.value == switch1Num && switch2.value == switch2Num && switch3.value == switch3Num && switch4.value == switch4Num) ? 'SOLVED' : 'NOT SOLVED'}}
            </h2>
            <p>Ok, welcome <span class="name">{{name.value}}</span></p>
            <br>
            Swith 1:
            <input type="text" #switch1 (keyup)="0"><br>
            Swith 2:
            <input type="text" #switch2 (keyup)="0"><br>
            Swith 3:
            <input type="text" #switch3 (keyup)="0"><br>
            Swith 4:
            <input type="text" #switch4 (keyup)="0"><br>
        </section>
        <h2
            [hidden]="switch1.value != switch1Num || switch2.value != switch2Num || switch3.value != switch3Num || switch4.value != switch4Num">
            Congratulatiuons {{name.value}}, you did it!
        </h2>
    `
})

export class PuzzleComponent implements OnInit{
    switch1Num: number;
    switch2Num: number;
    switch3Num: number;
    switch4Num: number;
    ngOnInit(){
        this.switch1Num = Math.round(Math.random());
        this.switch2Num = Math.round(Math.random());
        this.switch3Num = Math.round(Math.random());
        this.switch4Num = Math.round(Math.random());

        console.log(this.switch1Num);
        console.log(this.switch2Num);
        console.log(this.switch3Num);
        console.log(this.switch4Num);
    }

}
