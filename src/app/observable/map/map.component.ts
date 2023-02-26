import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{

  sub1!: Subscription;
  sub2!: Subscription;
  msg1 = '';
  msg2:any;
  constructor(private designUtilityService: DesignUtilityService) {}

  ngOnInit(): void {

   // Ex -01
   const broadCastVideo = interval(1000);
    this.sub1 = broadCastVideo.pipe(map(data => 'video ' + data)).
    subscribe(res => {
     // console.log(res)
    this.msg1 = res
   })
   setTimeout(() => {
    this.sub1.unsubscribe();
   }, 10000);

   // Ex -02
   this.sub2 = broadCastVideo.pipe(map(data => data * 3))
   .subscribe(res => {
   // console.log(res)
   this.msg2 = res;
   })

   setTimeout(() => {
    this.sub2.unsubscribe();
   }, 10000);

   // Ex -03
  const members = from([
    {id: 1, name: 'Rahul'},
    {id: 2, name: 'Rohan'},
    {id: 3, name: 'Ajay'},
    {id: 4, name: 'Rausan'},
    {id: 5, name: 'Deepak'},
    {id: 6, name: 'Pankaj'},
    {id: 7, name: 'Vikash'},
   ])

   members.pipe(map(data => data.name))
   .subscribe(res => {
    console.log(res);
    this.designUtilityService.print(res,'elContainer')
   })

  }

}
