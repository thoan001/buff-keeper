import { Component, OnInit } from '@angular/core';
import { Store, select} from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../reducers/buff.reducer';
import * as actions from '../actions/buff.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  status$: Observable<State>;
  status: State;
  total: {atk: number, dmg: number};

  constructor(private store: Store<State>, private router: Router) {
    this.status$ = store.pipe(select('status'));
  }

  ngOnInit() {
    this.status$.subscribe((obs) => this.status = obs);
    this.status$.subscribe((obs) => {
      let atkVal = 0;
      let dmgVal = 0;
      if (obs.Buffs.length > 0) {
        for (const buff of obs.Buffs) {
          if (buff.active) {
            atkVal += buff.atk.value;
            dmgVal = dmgVal + buff.dmg.value;
          }
        }
        this.total = {
          atk: atkVal,
          dmg: dmgVal
        };
      } else {
        this.total = {
          atk: 0,
          dmg: 0
        };
      }
    });
  }

  goToRouteAdd() {
    this.router.navigateByUrl('add');
  }

  incrementRound() {
    this.store.dispatch(new actions.IncrementRound());
  }

  decrementRound() {
    this.store.dispatch(new actions.DecrementRound());
  }

  toggleEffect(index: number) {
    this.store.dispatch(new actions.ToggleEffect({id: index}));
  }

  removeBuff(index: number) {
    this.store.dispatch(new actions.RemoveBuff({id: index}));
  }

}
