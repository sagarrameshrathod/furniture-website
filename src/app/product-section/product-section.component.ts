import { Component } from '@angular/core';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.less']
})
export class ProductSectionComponent {

  navBar: Array<any> = [
    {name: "SOFA"},
    {name: "LIGHT"},
    {name: "CHAIR"},
    {name: "WARDROBE"},
    {name: "ALL"}
  ]

  product:Array<any> = [
    {
      new: "New",
      img: "../../assets/ia_300000020.png",
      name: "Patio Arm Chair",
      price: 15
    },
    {
      new: "New",
      img: "../../assets/ia_300000014.png",
      name: "Patio Arm Chair",
      price: 150
    },
    {
      new: "-45%",
      img: "../../assets/ia_300000019.png",
      name: "Patio Arm Chair",
      price: 250
    },{
      new: "New",
      img: "../../assets/ia_300000005.png",
      name: "Patio Arm Chair",
      price: 158
    },
    {
      new: "-25%",
      img: "../../assets/ia_300000021.png",
      name: "Patio Arm Chair",
      price: 150
    },
    {
      new: "New",
      img: "../../assets/ia_300000015.png",
      name: "Patio Arm Chair",
      price: 175
    },
    {
      new: "New",
      img: "../../assets/ia_400000240.png",
      name: "Patio Arm Chair",
      price: 150
    },
    {
      new: "New",
      img: "../../assets/ia_300000008.png",
      name: "Patio Arm Chair",
      price: 150
    },
    {
      new: "-75%",
      img: "../../assets/ia_300000006.png",
      name: "Patio Arm Chair",
      price: 150
    }
  ]

  color: Array<any> = [
    {color: "red"},
    {color: "red"},
    {color: "red"},
    {color: "red"},
    {color: "red"},
    {color: "red"},
    {color: "red"},
    {color: "red"},
  ]

  material: Array<any> = [
    {name: "Metal"},
    {name: "Wodden"},
    {name: "Fabric"},
    {name: "Foam"},
    {name: "Natural Skin"},
    {name: "Synthetic fiber"},
  ]
}
