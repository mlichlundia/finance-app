import { Component, Input } from '@angular/core';

enum EProgressColor {
  GREEN = 'green',
  YELLOW = 'yellow',
  RED = 'red'
}


@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  @Input() target!: number;
  @Input() progress!: number;

  public get percent(): number {
    return this.progress * 100 / this.target;
  }

  public get modeClass(): EProgressColor {
    if (this.percent > 90) return EProgressColor.RED;
    if (this.percent > 75) return EProgressColor.YELLOW;
    return EProgressColor.GREEN;
  }
}
