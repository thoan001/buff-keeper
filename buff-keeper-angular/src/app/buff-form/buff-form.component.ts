import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers/buff.reducer';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import * as actions from '../actions/buff.actions';
import { Buff } from '../status/buff';

@Component({
  selector: 'app-buff-form',
  templateUrl: './buff-form.component.html',
  styleUrls: ['./buff-form.component.css']
})
export class BuffFormComponent implements OnInit {

  buffForm = new FormGroup({
    name: new FormControl(''),
    atk: new FormControl(0),
    dmg: new FormControl(0),
    save: new FormControl(0),
    duration: new FormControl(0),
    active: new FormControl(true)
  });

  constructor(private store: Store<State>, private router: Router) { }

  ngOnInit() {
  }

  addBuff(buff: Buff) {
    this.store.dispatch(new actions.AddBuff(buff));
  }

  goToRouteMain() {
    this.router.navigateByUrl('');
  }
}
