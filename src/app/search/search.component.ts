import { Component, HostListener, OnInit } from '@angular/core';
import { SearchService } from './service/search.service';

interface Friend {
  name: string;
  age?: number;
  hasHouse: boolean;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchFilterData: Array<string>;
  filterDropDownList: boolean;
  selectedName: string = '';

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  fetchData(searchText: string): void {
    this.searchService.getFilterList(searchText).subscribe(response => {
      this.filterDropDownList = response && response.length > 0 ? true : false;
      this.searchFilterData = response;
      console.log(response);
    });
  }

  selectFilter(selectedName: string): void {
    this.selectedName = selectedName;
  }

  @HostListener('document:click', ['$event']) onDocumentClick(event: MouseEvent): void {
    this.filterDropDownList = false;
    this.searchFilterData = null;
}

}
