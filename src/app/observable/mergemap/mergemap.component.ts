import { Component, OnInit } from '@angular/core';
import { from, map, of, mergeAll, mergeMap } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.scss']
})
export class MergemapComponent implements OnInit {

  constructor(private designUtilityService: DesignUtilityService) {}

  getData(data: any) {
    return of(data + ' Video Uploaded');
  }
  ngOnInit(): void {
    const source = from(['Tech','Comedy','News']);

    //Ex - 01 Map
    source.pipe(map(res=> this.getData(res)))
    .subscribe(res => {
      res.subscribe(res2 => {
        this.designUtilityService.print(res2, 'elContainer')
      })

    })

    //Ex - 02 Map + MergeAll
    source.pipe(
      map(res=> this.getData(res)),
      mergeAll()
      )
    .subscribe(res => {
      this.designUtilityService.print(res, 'elContainer2')
    })


    //Ex - 03 mergeMap
    source.pipe(
      mergeMap(res=> this.getData(res))
      )
    .subscribe(res => {
      console.log(res);
      this.designUtilityService.print(res, 'elContainer3')
    })
  }

}
