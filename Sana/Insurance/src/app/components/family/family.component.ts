import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
  childrenOptions: Array<Object> = [
    { id: 0, text: "zero" },
    { id: 1, text: "one" },
    { id: 2, text: "two" },
    { id: 3, text: "three" },
    { id: 4, text: "four or more" }
  ];
  spouseOptions: Array<Object> = [
    { id: 0, text: "zero" },
    { id: 1, text: "one" }
  ];

  selectedChild = this.childrenOptions[0];
  selectedSpouse = this.spouseOptions[0];
  constructor() { }

  ngOnInit() {
  }

  doStuff(){
    console.log("do stuff here");
  }

}
