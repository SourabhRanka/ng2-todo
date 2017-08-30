import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list: string[] = [];
  name: string = '';
  done : boolean[] = [];
  addItem(item: string) {
    if (item === '') {
      return;
    }
    this.list.push(item);
    this.name = '';
  }

  reset() {
    this.list = [];
  }

  deleteItem(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  enterEventHandler(event) {
    if (event.which == 13) {
      this.addItem(this.name);
    }
  }
}
