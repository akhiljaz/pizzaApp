import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  public small=0;
  public medium= 0;
  public large= 0;
  public xl= 0;
  public tomato=0;
  public onion=0;
  public bellpepper=0;
  public mashroom=0;
  public pineapple=0;
  public sausage =0;
  public pepperoni =0;
  public bbqChicken=0;
  constructor() { }

  ngOnInit() {
  }


  public orderPizza(){
    let total = this.small*5+this.medium*7+this.large*8+this.xl*9+this.tomato*1+this.onion*.5+this.bellpepper*1+this.mashroom*1.2+this.pineapple*.75+this.sausage*1+this.pepperoni*2+this.bbqChicken*3;
  
    alert("Total price is:"+total)
  }



}
