import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { fromEvent, map, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.scss']
})
export class DebouncetimeComponent implements AfterViewInit {

  @ViewChild('myInput') myInput!: ElementRef;
  requestData:any = null;

  @ViewChild('myInput2') myInput2!: ElementRef;
  requestData2:any = null;
  constructor(private loadingBar: LoadingBarService) {}

  ngAfterViewInit(): void {
    // Ex - 01 (debounceTime)
   const searchTerm =  fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
    map(event => event.target.value),
    debounceTime(500)
   )
   searchTerm.subscribe(res => {
    console.log(res);
    this.requestData = res;
    this.loadingBar.start()
    setTimeout(() => {
      this.requestData = null;
      this.loadingBar.stop();
    }, 1000);
   })

    // Ex - 02 (DistinctUtilChanged)
    const searchTerm2 =  fromEvent<any>(this.myInput2.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(500),
      distinctUntilChanged()
     )
     searchTerm2.subscribe(res => {
      console.log(res);
      this.requestData2 = res;
      this.loadingBar.start()
      setTimeout(() => {
        this.requestData2 = null;
        this.loadingBar.stop();
      }, 1000);
     })
  }

}
