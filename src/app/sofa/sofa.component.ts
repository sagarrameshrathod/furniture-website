import { Component, AfterViewInit, ElementRef } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-sofa',
  templateUrl: './sofa.component.html',
  styleUrls: ['./sofa.component.less']
})
export class SofaComponent implements AfterViewInit  {

  sofaImg:string="../../assets/ia_200000033.png";
  price:any = 280;

  num: Array<any> = [
    {price: 280, img: "../../assets/ia_200000033.png"},
    {price: 375, img: "../../assets/blue-sofa.png"},
    {price: 845, img: "../../assets/red-sofa.png"},
  ]

  orange(val:any){
    this.sofaImg = this.num[val].img;
    this.price = this.num[val].price;
  }

  blue(val:any){
    this.sofaImg = this.num[val].img;
    this.price = this.num[val].price;
  }

  red(val:any){
    this.sofaImg = this.num[val].img;
    this.price = this.num[val].price;
  }

  constructor(private elementRef: ElementRef) {}

    ngAfterViewInit(): void {
        const sliderElement = $('.sofa-slide');


        sliderElement.slick({
            autoplay: false,
            // autoplaySpeed: 3000,
            dots: false,
            infinite: true,
            speed: 100,
            slidesToShow: 1,
            adaptiveHeight: true,
            prevArrow : '#prev',
            nextArrow: '#next'
        });
  }
}
