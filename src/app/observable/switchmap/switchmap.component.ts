import { Component, OnInit } from '@angular/core';
import { concatMap, delay, from, mergeMap, of, switchMap } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.scss']
})
export class SwitchmapComponent implements OnInit {

  constructor(private designUtilityService: DesignUtilityService) {}

  getData(data: any) {
    return of(data + ' Video Uploaded').pipe(delay(1000));
  }
  ngOnInit(): void {
    const source = from(['Tech','Comedy','News']);

    // Ex - 01 | MrgerMap
    source.pipe(
      mergeMap(data=> this.getData(data))
      )
    .subscribe(res => {
      this.designUtilityService.print(res, 'elContainer')
    })

    // Ex - 02 | ConcatMap
    source.pipe(
      concatMap(data=> this.getData(data))
      )
    .subscribe(res => {
      this.designUtilityService.print(res, 'elContainer2')
    })

    //Ex - 03 | switchMap

    source.pipe(
      switchMap(data=> this.getData(data))
      )
    .subscribe(res => {
      this.designUtilityService.print(res, 'elContainer3')
    })


  }

}
