import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../reducers/buff.reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  status$: Observable<State>;
  status: State;
  total = {
    atk: 0,
    dmg: 0
  };

  constructor(private store: Store<State>, private router: Router) {
    this.status$ = store.pipe(select('status'));
  }

  ngOnInit() {
    this.status$.subscribe((obs) => this.status = obs);
    this.status$.subscribe((obs) => {
      let atkVal: number;
      let dmgVal: number;
      if (obs.Buffs.length > 0) {
        for (const buff of obs.Buffs) {
          atkVal += buff.atk;
          dmgVal += buff.dmg;
        }
        this.total.atk = atkVal;
        this.total.dmg = dmgVal;
      } else {
        this.total.atk = 0;
        this.total.dmg = 0;
      }
    });
}

  goToRouteAdd() {
    this.router.navigateByUrl('add');
  }

}
