import { Component, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards : Observable<({ title: string; cols: number; rows: number; content?: string; id : string }
    | { title: string; cols: number; rows: number; content?: undefined; id : string})[]>
    = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1, id : "1" },
          { title: 'Card 2', cols: 1, rows: 1, id : "2" },
          { title: 'Card 3', cols: 1, rows: 1, id : "3" },
          { title: 'Card 4', cols: 1, rows: 1, id : "4" }
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1, content: "Lorem ipsum matraca varia extensa", id : "1" },
        { title: 'Card 2', cols: 1, rows: 1, content: "ijsdbfibsdfipbsdifbsidubfidsbfibsdiofbsdiubfiosu", id : "2" },
        { title: 'Card 3', cols: 1, rows: 1, id : "3" },
        { title: 'Card 4', cols: 1, rows: 1, id : "4" }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }
}
