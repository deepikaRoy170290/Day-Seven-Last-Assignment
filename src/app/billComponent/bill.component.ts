import { Component } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {
  boldHeading:string ="Over this new BillPay, you can now make online payments to over 260 billers across various categories including:"
  lists:any = [
    "Electricity Bills.","Telephone and Mobile Bills","Prepaid DTH/ Mobile Connection/ Data Card Recharge",
    "Gas Bills","Mutual Funds.","Insurance Premiums.","Subscriptions.","Contribution to Charities."
  ];
}
