import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../reducers/buff.reducer';
import * as actions from '../actions/buff.actions';
import { Router } from '@angular/router';
import { Buff, BONUS_TYPE } from './buff';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  status$: Observable<State>;
  status: State;
  total: { atk: number, dmg: number, save: number };

  constructor(private store: Store<State>, private router: Router) {
    this.status$ = store.pipe(select('status'));
  }

  ngOnInit() {
    this.status$.subscribe((obs) => this.status = obs);
    this.status$.subscribe((obs) => {
      /* let atkVal = 0;
      let dmgVal = 0; */
      if (obs.Buffs.length > 0) {
        /* for (const buff of obs.Buffs) {
          if (buff.active) {
            atkVal += buff.atk.value;
            dmgVal = dmgVal + buff.dmg.value;
          }
        }
        this.total = {
          atk: atkVal,
          dmg: dmgVal
        }; */
        this.total = this.calculateTotal(obs.Buffs);
      } else {
        this.total = {
          atk: 0,
          dmg: 0,
          save: 0
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
    this.store.dispatch(new actions.ToggleEffect({ id: index }));
  }

  removeBuff(index: number) {
    this.store.dispatch(new actions.RemoveBuff({ id: index }));
  }

  calculateTotal(buffList: Buff[]) {
    let totalAtk = 0;
    let totalDmg = 0;
    let totalSave = 0;

    const calculatedList: Buff[] = buffList.filter((buff) => buff.active);

    for (const bonus of BONUS_TYPE) {
      // Note: Negative status types will always have the 'None' type, allowing these values to safely be initialized to 0
      let maxAtk = 0;
      let maxDmg = 0;
      let maxSave = 0;

      if ((bonus === 'None') || (bonus === 'Dodge') || (bonus === 'Natural')) {
        calculatedList.map((buff) => {
          if (buff.atk.type === bonus) {
            totalAtk += buff.atk.value;
          }
          if (buff.dmg.type === bonus) {
            totalDmg += buff.dmg.value;
          }
          // temporarily setting to array 0 for a while
          if (buff.save[0].type === bonus) {
            totalSave += buff.save[0].value;
          }
        });
      } else {
        for (const buff of calculatedList) {
          if ((buff.atk.type === bonus) && (buff.atk.value > maxAtk)) {
            maxAtk = buff.atk.value;
          }
          if ((buff.dmg.type === bonus) && (buff.dmg.value > maxDmg)) {
            maxDmg = buff.dmg.value;
          }
          if ((buff.save[0].type === bonus) && (buff.save[0].value > maxSave)) {
            maxSave = buff.save[0].value;
          }
        }

        totalAtk += maxAtk;
        totalDmg += maxDmg;
        totalSave += maxSave;
      }

    }

    return { atk: totalAtk, dmg: totalDmg, save: totalSave };
  }

}
