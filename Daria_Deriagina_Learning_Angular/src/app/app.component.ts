import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Investment } from './models/investment';
import {InvestmentListComponent} from "./investment-list/investment-list.component";
import { InvestmentListItemComponent } from './investment-list-item/investment-list-item.component';
import { InvestmentService } from './services/investment.service'; // Step 11: Import InvestmentService

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, InvestmentListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'Investment Calculator';
  selectedInvestment: Investment | undefined; // Step 12: Use to store the investment retrieved by the service

  // Step 11: Inject the InvestmentService into the constructor
  constructor(private investmentService: InvestmentService) {}

  // Step 12: Use ngOnInit to retrieve an investment item by ID
  ngOnInit(): void {
    this.investmentService.getInvestmentById(1).subscribe({
      next: (data: Investment | undefined) => this.selectedInvestment = data, // Step 12: Assign the fetched investment to selectedInvestment
      error: (err) => console.error('Error fetching investment', err),
      complete: () => console.log('Investment data fetch complete!')
    });
  }
}
