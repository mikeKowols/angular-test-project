import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Roboto; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
