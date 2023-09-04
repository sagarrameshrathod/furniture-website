import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent {

  info:Array<any> = [
    {name: "About Us"},
    {name: "Terms & Coditions"},
    {name: "Security & Privacy"},
    {name: "Terms & Coditions"},
    {name: "Security & Privacy"},
  ]

  element:Array<any> = [
    {name: "column"},
    {name: "Accordion and Toggle"},
    {name: "Typography"},
    {name: "Pie Chart"},
    {name: "pricing Table"},
  ]

  help:Array<any> = [
    {name: "Cancelation & Return"},
    {name: "Pre Order Policy"},
    {name: "How to Order"},
    {name: "Frequent Query"},
    {name: "Contact Us"},
  ]
}
