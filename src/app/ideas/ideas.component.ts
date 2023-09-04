import { Component } from '@angular/core';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.less']
})
export class IdeasComponent {

  saleImg:string="../../assets/ia_300000024.png";
  saleImgLeft:string="../../assets/ia_100000115.png";
  price:any = 150;
  priceLeft:any = 255;

  num: Array<any> = [
    {price: 150, img: "../../assets/ia_300000024.png"},
    {price: 255, img: "../../assets/ia_100000115.png"},
  ]

  numLeft: Array<any> = [
    {price: 255, img: "../../assets/ia_100000115.png"},
    {price: 150, img: "../../assets/ia_300000024.png"},
  ]

  rightImg(ind:any){
    this.saleImg = this.num[ind].img;
    this.price = this.num[ind].price;
  }

  leftImg(ind:any){
    this.saleImgLeft = this.numLeft[ind].img;
    this.priceLeft = this.numLeft[ind].price;
  }
}
