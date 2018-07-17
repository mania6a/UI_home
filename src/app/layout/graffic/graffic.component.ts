import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-graffic',
  templateUrl: './graffic.component.html',
  styleUrls: ['./graffic.component.css']
})
export class GrafficComponent implements OnInit, AfterViewInit {
@ViewChild('canvas') canvas;
options = ['Last Year', '2016', '2015', '2014'];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.drawGraph(this.canvas.nativeElement);
  }

  drawGraph(canvas) {
    console.log(canvas);
    const window_height = window.innerHeight;
    const window_width = window.innerWidth;
    canvas.width = window_width / 1000 * 510;
    canvas.height = window_height / 700 * 230;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'rgb(231,234,240)';
    ctx.font = '0.9rem Arial';
    ctx.fillStyle = 'rgb(231,234,240)';
    let start_x = window_width / 1000 * 55;
    let start_y = window_height / 700 * 30;
    const end_x = window_width / 1000 * 487;
    const end_y = window_height / 700 * 220;

    // VERTICAL LINES
    for (let i = 7; i > 0; i--) {
      ctx.moveTo(start_x, start_y);
      ctx.lineTo(end_x, start_y);
      ctx.stroke();
      ctx.fillText(i * 100, window_width / 1000 * 16, start_y + window_height / 700 * 7);
      start_y += window_height / 22;
    }
    // HORIZONTAL LINES
    start_y = window_height / 700 * 30;
    for (let i = 0; i < 7; i++) {
      ctx.moveTo(start_x, start_y);
      ctx.lineTo(start_x, end_y);
      ctx.stroke();
      start_x += window_width / 1000 * 72;
    }


    ctx.lineWidth = 5;
    ctx.strokeStyle = 'rgb(79,127,255)';
    ctx.lineCap = 'round';

    const contr_x = [11, 57, 108, 154, 223, 270, 314, 377, 405, 482];
    const contr_y = [158, 141, 185, 106, 145, -35, 142, 95, 180, 129];
    const last_x = [28, 77, 132, 188, 239, 300, 348, 390, 453, 510];
    const last_y = [150, 153, 146, 134, 104, 99, 122, 140, 152, 154];

    ctx.beginPath();
    ctx.moveTo(0, window_height / 700 * 160);

    for (let i = 0; i < contr_x.length; i++) {
      ctx.quadraticCurveTo(window_width / 1000 * contr_x[i], window_height / 700 * contr_y[i],
        window_width / 1000 * last_x[i], window_height / 700 * last_y[i]);
    }
    ctx.stroke();
  }
}
