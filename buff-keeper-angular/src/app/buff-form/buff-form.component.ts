import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers/buff.reducer';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import * as actions from '../actions/buff.actions';
import { Buff, SAVE_CATEGORY, BONUS_TYPE } from '../status/buff';

@Component({
  selector: 'app-buff-form',
  templateUrl: './buff-form.component.html',
  styleUrls: ['./buff-form.component.css']
})
export class BuffFormComponent implements OnInit {

  SAVE_CATEGORY = SAVE_CATEGORY;
  BONUS_TYPE = BONUS_TYPE;

  buffForm = this.fb.group({
    name: ['', Validators.required],
    atk: [0, Validators.required],
    atkType: ['None', Validators.required],
    dmg: [0, Validators.required],
    dmgType: ['None', Validators.required],
    saveVal: [0, Validators.required],
    saveType: ['None', Validators.required],
    duration: [0, Validators.required],
    active: [true, Validators.required]
  });

  constructor(private store: Store<State>, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
  }

  addBuff(buff: Buff) {
    this.store.dispatch(new actions.AddBuff(buff));
  }

  decrementValue(formControl: string) {
    this.buffForm.get(formControl).setValue(this.buffForm.get(formControl).value - 1);
  }

  incrementValue(formControl: string) {
    this.buffForm.get(formControl).setValue(this.buffForm.get(formControl).value + 1);
  }

  goToRouteMain() {
    this.router.navigateByUrl('');
  }

  onSubmit() {
    const buff = this.buffForm.value;
    const round$ = this.store.pipe(select('status'), select('Round'));
    let round: number;
    round$.subscribe((obs) => round = obs).unsubscribe();
    this.addBuff({
      name: buff.name,
      atk: {value: buff.atk, type: buff.atkType},
      dmg: {value: buff.dmg, type: buff.dmgType},
      save: [{value: buff.save, category: '', type: buff.saveType}],
      duration: ((buff.duration < 0) ? 0 : buff.duration),
      remaining: ((buff.duration < 0) ? 0 : buff.duration),
      roundStarted: round,
      active: buff.active
    });
    this.goToRouteMain();
  }
}
