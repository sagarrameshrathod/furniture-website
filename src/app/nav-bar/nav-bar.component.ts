import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent {
  
  categories: Array<any> = [
    {name:"Living Rooms"},
    {name:"Nursery Furniture"},
    {name:"Bedroom Furniture"},
    {name:"Kitchen & Dining Furniture"},
    {name:"Home Office Furniture"},
  ]

  featured: Array<any> = [
    {name: "Furniture deal"},
    {name: "Furniture deal"},
    {name: "Furniture deal"},
    {name: "Furniture deal"},
    {name: "Furniture deal"},
  ]

  pop:boolean = false;
  popup(){
    this.pop =! this.pop;
  }

  popMenu:boolean = false;
  popupMenu(){
    this.popMenu =! this.popMenu;
  }
}
