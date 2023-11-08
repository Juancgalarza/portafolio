import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  ngOnInit() {
    const options = {
      strings: ['Developer', 'Designer', 'Engineer', 'DataManager'],
      typeSpeed: 100,
      backSpeed: 50,
      startDelay: 500,
      backDelay: 1500,
      loop: true,
    };

    const typed = new Typed('.typed', options);
  }

}
