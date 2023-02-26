import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  dataArr = [
    {id :1, name: 'Rahul', gender: 'male'},
    {id :2, name: 'Priya', gender: 'female'},
    {id :3, name: 'Rani', gender: 'female'},
    {id :4, name: 'Rohan', gender: 'male'},
    {id :5, name: 'Raushan', gender: 'male'},
    {id :6, name: 'Sikha', gender: 'female'},
    {id :7, name: 'Anaya', gender: 'female'},
    {id :8, name: 'Deepak', gender: 'male'},
    {id :9, name: 'Chhavi', gender: 'female'},
    {id :10, name: 'Snshika', gender: 'female'},
    {id :11, name: 'Ajay', gender: 'male'},
  ]
  data:any;
  data2:any;
  data3:any;
  constructor() {}
  ngOnInit(): void {
    const source = from(this.dataArr);

   // Ex - 01 filter by length
   source.pipe(filter(val => val.name.length > 5),
    toArray())
   .subscribe(res => {
    console.log(res);
    this.data = res;
   })

   // Ex - 02 filter by gender
   source.pipe(filter(val => val.gender == 'male'),
    toArray())
   .subscribe(res => {
    console.log(res);
    this.data2 = res;
   })

   // Ex - 03 filter by nth item
   source.pipe(filter(member => member.id <= 6),
    toArray())
   .subscribe(res => {
    console.log(res);
    this.data3 = res;
   })
  }
}
