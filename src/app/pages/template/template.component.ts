import { Component, OnInit } from '@angular/core';

declare function MAIN_INIT(): any; 

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit{

  ngOnInit() {
    setTimeout(() => {
      MAIN_INIT();
    }, 50);
  }

}
