import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers/buff.reducer';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import * as actions from '../actions/buff.actions';
import { Buff, BONUS_TYPE } from '../status/buff';

@Component({
  selector: 'app-buff-form',
  templateUrl: './buff-form.component.html',
  styleUrls: ['./buff-form.component.css']
})
export class BuffFormComponent implements OnInit {

  BONUS_TYPE = BONUS_TYPE;

  buffForm = this.fb.group({
    name: ['', Validators.required],
    atk: [0, Validators.required],
    atkType: ['None', Validators.required],
    dmg: [0, Validators.required],
    dmgType: ['None', Validators.required],
    fortitude: [0, Validators.required],
    reflex: [0, Validators.required],
    will: [0, Validators.required],
    fortType: ['None', Validators.required],
    reflType: ['None', Validators.required],
    willType: ['None', Validators.required],
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
      save: {
        fortitude: {value: buff.fortitude, type: buff.fortType},
        reflex: {value: buff.reflex, type: buff.reflType},
        will: {value: buff.will, type: buff.willType}
      },
      duration: ((buff.duration < 0) ? 0 : buff.duration),
      remaining: ((buff.duration < 0) ? 0 : buff.duration),
      roundStarted: round,
      active: buff.active
    });
    this.goToRouteMain();
  }
}
