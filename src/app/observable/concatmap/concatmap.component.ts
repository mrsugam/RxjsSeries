import { Component, OnInit } from '@angular/core';
import { from, of, map, concatAll, delay, concatMap, mergeMap } from 'rxjs'
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.scss']
})
export class ConcatmapComponent implements OnInit {

  constructor(private designUtilityService: DesignUtilityService) {}

  getData(data: any) {
    return of(data + ' Video Uploaded').pipe(delay(2000));
  }
  ngOnInit(): void {
    const source = from(['Tech','Comedy','News']);

    // Ex - 01 | Map

    source.pipe(map(res => this.getData(res)))
    .subscribe(res => {
      this.designUtilityService.print(res, 'elContainer')
    })

    // Ex - 02 | mergeMap

    source.pipe(
      mergeMap(res => this.getData(res))
      )
    .subscribe(res => {
      this.designUtilityService.print(res, 'elContainer2')
    })

    // Ex - 02 | map + concatAll

    source.pipe(
      concatMap(res => this.getData(res))
      )
    .subscribe(res => {
      this.designUtilityService.print(res, 'elContainer3')
    })
  }

}
