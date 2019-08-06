import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers/buff.reducer';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import * as actions from '../actions/buff.actions';
import { Buff } from '../status/buff';

@Component({
  selector: 'app-buff-form',
  templateUrl: './buff-form.component.html',
  styleUrls: ['./buff-form.component.css']
})
export class BuffFormComponent implements OnInit {

  buffForm = this.fb.group({
    name: ['', Validators.required],
    atk: [0, Validators.required],
    dmg: [0, Validators.required],
    saveVal: [0, Validators.required],
    duration: [0, Validators.required],
    active: [true, Validators.required]
  });

  constructor(private store: Store<State>, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
  }

  addBuff(buff: Buff) {
    // TODO: fix
    this.store.dispatch(new actions.AddBuff(buff));
  }

  goToRouteMain() {
    this.router.navigateByUrl('');
  }

  onSubmit() {
    const buff = this.buffForm.value;
    this.addBuff({
      name: buff.name,
      atk: {value: buff.atk, type: ''},
      dmg: {value: buff.dmg, type: ''},
      save: [{value: buff.save, category: '', type: ''}],
      duration: buff.duration,
      remaining: buff.duration,
      active: buff.active
    });
    this.goToRouteMain();
  }
}
