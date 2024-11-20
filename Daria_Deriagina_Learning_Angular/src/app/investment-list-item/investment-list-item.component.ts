
import { Component, Input } from '@angular/core';
import { Investment } from "../models/investment";
import {CurrencyPipe} from "@angular/common";
import {InvestmentDetailsPipe} from "../pipes/investment-details.pipe";
import {InterestRateColorPipe} from "../pipes/interest-rate-color.pipe";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";


@Component({
  selector: 'app-investment-list-item',
  standalone: true,
  templateUrl: './investment-list-item.component.html',
  imports: [
    CurrencyPipe, InvestmentDetailsPipe, InterestRateColorPipe, HoverHighlightDirective
  ],
  styleUrls: ['./investment-list-item.component.css']
})
export class InvestmentListItemComponent {
  @Input() investmentInput!: Investment;
  @Input() editInvestment!: (id: number) => void; // Accept edit function from parent
  @Input() deleteInvestment!: (id: number) => void;

  // onEdit() {
  //   this.editInvestment(this.investment.id);
  // }
  //
  // onDelete() {
  //   this.deleteInvestment(this.investment.id);
  // }
}
