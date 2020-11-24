import {
  Component, Input, Output, EventEmitter
} from '@angular/core';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnChanges {
  @Input() totalItems;
  @Input() pageSize;
  @Output() pageChanged = new EventEmitter();
  pages: any[];
  currentPage = 1;
  page: number;

  ngOnChanges(): void {
    this.currentPage = 1;

    const pagesCount = Math.ceil(this.totalItems / this.pageSize);
    this.pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      this.pages.push(i);
    }
  }

  changePage(page): void {
    this.currentPage = page;
    this.pageChanged.emit(page);
  }

  onClickPrevious(): void {
    if (this.currentPage === 1) {
      return;
    }

    this.currentPage--;
    this.pageChanged.emit(this.currentPage);
  }

  onClickNext(): void {
    if (this.currentPage === this.pages.length) {
      return;
    }

    this.currentPage++;
    this.pageChanged.emit(this.currentPage);
  }
}
