import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements OnInit {
options = ['Last Year', '2016', '2015', '2014'];
colors = ['#25396e', '#5584ff', '#4b74e0', '#4164c2', '#3755a4'];
percentage = [23, 21, 12, 11, 33];
amount = '1,560';
operations = ['Websites', 'Logo', 'Social Media', 'Adwords', 'E-Commerce'];

@ViewChild('cont') cont;
  constructor() { }

  ngOnInit() {
    console.log(this.cont);
    this.makePie(this.percentage);
  }

  makePie(arr) {
    const angles = this.percentage.map(e => 180 - 360 * e / 100);
    let a = 0;
    const anglesRot = this.percentage.map(e => a += e / 100 * 360);
    for (let i = 0; i < this.percentage.length; i++) {
      this.cont.nativeElement.children[i].children[0].style.backgroundColor = this.colors[i];
      this.cont.nativeElement.children[i].children[0].style.transform = 'rotate(' + angles[i] + 'deg)';
      this.cont.nativeElement.children[i].style.transform = 'rotate(' + anglesRot[i] + 'deg)';
    }
  }

}
