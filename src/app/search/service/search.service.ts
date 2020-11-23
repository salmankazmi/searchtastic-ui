import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const FILTER_LIST_URL = 'http://localhost:8080/complete/searchNames';
const APPLY_FILTER_URL = '/db/queryBuilder/applyFilter';

@Injectable()
export class SearchService {

  constructor(
    private http: HttpClient) {
  }

  public getFilterList(seachString: string): Observable<any> {
    const params = new HttpParams().set('q', seachString);
    return this.http.get(FILTER_LIST_URL, { params });
  }
}
