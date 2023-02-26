import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { ConcatmapComponent } from './observable/concatmap/concatmap.component';
import { Concatmap2Component } from './observable/concatmap2/concatmap2.component';
import { ContactComponent } from './observable/contact/contact.component';
import { CustomComponent } from './observable/custom/custom.component';
import { DebouncetimeComponent } from './observable/debouncetime/debouncetime.component';
import { ExhaustMapComponent } from './observable/exhaust-map/exhaust-map.component';
import { FilterComponent } from './observable/filter/filter.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ListComponent } from './observable/list/list.component';
import { MapComponent } from './observable/map/map.component';
import { MergeComponent } from './observable/merge/merge.component';
import { MergemapComponent } from './observable/mergemap/mergemap.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';
import { RetryComponent } from './observable/retry/retry.component';
import { SearchappComponent } from './observable/searchapp/searchapp.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { SwitchmapComponent } from './observable/switchmap/switchmap.component';
import { TakeComponent } from './observable/take/take.component';
import { TapComponent } from './observable/tap/tap.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  {path: 'promise', component: PromiseComponent},
  {path: 'observable', component: ObservableComponent, children: [
    {path: '', component: ListComponent},
    {path: 'fromEvent', component: FromEventComponent},
    {path: 'interval', component: IntervalComponent},
    {path: 'of-from', component: OfFromComponent},
    {path: 'to-array', component: ToArrayComponent},
    {path: 'custom-observable', component: CustomComponent},
    {path: 'map', component: MapComponent},
    {path: 'pluck', component: PluckComponent},
    {path: 'filter', component: FilterComponent},
    {path: 'tap', component: TapComponent},
    {path: 'take', component: TakeComponent},
    {path: 'retry', component: RetryComponent},
    {path: 'debouncetime', component: DebouncetimeComponent},
    {path: 'subject', component: SubjectComponent},
    {path: 'replay-subject', component: ReplaySubjectComponent},
    {path: 'async-subject', component: AsyncSubjectComponent},
    {path: 'concat', component: ContactComponent},
    {path: 'merge', component: MergeComponent},
    {path: 'mergemap', component: MergemapComponent},
    {path: 'concatmap', component: ConcatmapComponent},
    {path: 'mobile-notification', component: Concatmap2Component},
    {path: 'switchmap', component: SwitchmapComponent},
    {path: 'searchapp', component: SearchappComponent},
    {path: 'exhaust-map', component: ExhaustMapComponent},
  ]},
  {path: '**', redirectTo: 'promise'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
