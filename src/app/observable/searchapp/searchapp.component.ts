import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { debounceTime, distinctUntilChanged, filter, pluck, switchMap } from 'rxjs';
import { Search } from 'src/app/model/search';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-searchapp',
  templateUrl: './searchapp.component.html',
  styleUrls: ['./searchapp.component.scss']
})
export class SearchappComponent implements AfterViewInit {

  searchResult!:any;
  searchResultCount:any;
  @ViewChild('searchForm') searchForm!: NgForm;
  constructor(private searchService: SearchService, private loadingService: LoadingBarService) {}

  ngAfterViewInit(): void {
    const fromValue = this.searchForm.valueChanges;
    fromValue?.pipe(
      // map(data => data.searchTerm),
      filter(()=> this.searchForm.valid!),
      pluck('searchTerm'),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(data => this.searchService.getSearchData(data))
      )
    .subscribe(res => {
      this.loadingService.start();
      console.log(res);
      this.searchResult = res;
      this.searchResultCount = Object.keys(res).length;
      this.loadingService.complete();
    })
  }

}
