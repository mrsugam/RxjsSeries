import { Component, OnInit } from '@angular/core';
import { from, map, toArray, pluck } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  data:any;
  data2:any;
  users = [
    {
      name: 'Rahul',
      skill: 'Angular',
      job: {
        title: 'Accessbilty Tester',
        exp: '5 Years'
      }
    },
    {
      name: 'Rohan',
      skill: 'HTML5',
      job: {
        title: 'Mannual Tester',
        exp: '2 Years'
      }
    },
    {
      name: 'Akash',
      skill: 'CSS3',
      job: {
        title: 'Frontend Developer',
        exp: '8 Years'
      }
    },
    {
      name: 'Monu',
      skill: 'javaScript',
      job: {
        title: 'VLSI Developer',
        exp: '3 Years'
      }
    },
  ]
  constructor() {}
  ngOnInit(): void {

    //Ex -01
    from(this.users).pipe(
      // map(data => data.name)
      pluck('name')
      ,toArray())
    .subscribe(res => {
      console.log(res);
      this.data = res;
    })

    //Ex - 02
    from(this.users).pipe(
      // map(data => data.name)
      pluck('job','title')
      ,toArray())
    .subscribe(res => {
      console.log(res);
      this.data2 = res;
    })
  }
}
