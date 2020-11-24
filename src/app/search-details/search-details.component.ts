import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from '../search/service/search.service';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit {

  @Input() selectedText: string;
  searchResult: Array<any>;
  totalPages: number;
  pageSize: number;
  totalItems: number;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.fetchSelectedDataDetails();
  }

  fetchSelectedDataDetails(page?: string): void {
    this.searchService.getSelectedTextDetails(this.selectedText.substring(0, 2), page).subscribe(response => {
      this.searchResult = response.content;
      this.totalPages = response.totalPages;
      this.totalItems = response.totalElements;
      this.pageSize = response.size;
    });
  }

  onPageChange(event: any): void {
    if (event) {
      event = +event - 1;
    }
    this.fetchSelectedDataDetails(event);
  }

}
