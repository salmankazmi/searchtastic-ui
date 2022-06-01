import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

const api = `${environment.apiUrl}`;

const FILTER_LIST_URL = api + '/complete/searchNames';
const FILTER_DETAILS_URL = api + '/complete/search';

@Injectable()
export class SearchService {

  constructor(
    private http: HttpClient) {
  }

  public getFilterList(searchString: string): Observable<any> {
    const params = new HttpParams().set('q', searchString);
    return this.http.get(FILTER_LIST_URL, { params });
  }

  public getSelectedTextDetails(searchString: string, page?: string): Observable<any> {
    if (!page) {
      page = '0';
    }
    const params = new HttpParams().set('q', searchString).set('page', page);
    return this.http.get(FILTER_DETAILS_URL, { params });
  }
}
