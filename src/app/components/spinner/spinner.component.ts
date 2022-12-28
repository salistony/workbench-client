import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.less']
})
export class SpinnerComponent  {

  @Input() isFixed = false;
  @Input() isDark = localStorage.getItem('theme') === 'arya-blue'? true : false;

  constructor() { }
}
