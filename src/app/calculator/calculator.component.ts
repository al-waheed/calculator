import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
currentnumber = '';
  value: string;

  constructor() { }

  ngOnInit(): void {}

  screenDisplay(value){
    this.currentnumber += value;
    if(value === 'AC'){
      this.currentnumber = '';
    }
  }
     getAnswer(){
      this.value= this.currentnumber;
      this.value= eval(this.value);
      this.currentnumber =  this.value;
     }

}
