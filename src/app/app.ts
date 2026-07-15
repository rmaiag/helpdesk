import { Component, NgModule, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatButtonModule,MatButtonToggleModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('helpdesk');
}
