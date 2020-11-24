import { Component, HostListener, OnInit } from '@angular/core';
import { SearchService } from './service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchFilterData: Array<string>;
  filterDropDownList: boolean;
  selectedName: string = '';
  showSearchDetails: boolean;

  constructor(private searchService: SearchService) { }

  fetchData(searchText: string): void {
    this.searchService.getFilterList(searchText).subscribe(response => {
      this.filterDropDownList = response && response.length > 0 ? true : false;
      this.searchFilterData = response;
    });
  }

  selectFilter(selectedName: string): void {
    if (selectedName && selectedName.length > 0) {
      this.selectedName = selectedName;
      this.showSearchDetails = true;
    }
  }

  @HostListener('document:click', ['$event']) onDocumentClick(event: MouseEvent): void {
    this.filterDropDownList = false;
    this.searchFilterData = null;
  }

}
