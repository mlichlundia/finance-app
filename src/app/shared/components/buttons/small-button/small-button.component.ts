import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-small-button',
  templateUrl: './small-button.component.html',
  styleUrls: ['./small-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmallButtonComponent {}
