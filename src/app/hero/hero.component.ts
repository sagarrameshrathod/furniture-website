import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.less']
})
export class HeroComponent {

  imgUrl:string =  "../../assets/Untitled-1.png";
  num: Array<any> = [
    {id: 1, img: "../../assets/Untitled-1.png"},
    {id: 2, img: "../../assets/ia_200000033.png"},
    {id: 3, img: "../../assets/Untitled-1.png"},
    {id: 4, img: "../../assets/ia_200000033.png"}
  ]

  getValue:String="";
  imgChange(ind:any){
    this.imgUrl = this.num[ind].img;
  }
}
