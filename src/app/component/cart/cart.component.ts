import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products:any=[];
  public grandTotal:number=0;
  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.cartservice.getProducts()
    .subscribe(res=>{
      this.products=res;
      this.grandTotal=this.cartservice.getTotalPrice(); //grandTotal
    })
  }

  //Removing Single Item
  removeItem(item:any){
    if(confirm('Are you sure to Delete?'))
    this.cartservice.removeCartItem(item);
    alert("Item deleted Sucessfully");
  }

emptycart(){
  if(confirm('Are you sure to Empty the Cart?'))
  this.cartservice.removeAllCart();
}


}
