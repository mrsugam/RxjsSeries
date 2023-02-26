import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Search } from '../model/search';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl = 'https://my-json-server.typicode.com/Uxtrendz/apis/VideoList';
  constructor(private http: HttpClient) { }

  getSearchData(searchTrem: any):Observable<Search> {
    return this.http.get<Search>(this.baseUrl+'?q='+ searchTrem)
  }
}
