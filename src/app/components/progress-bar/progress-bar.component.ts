import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styles: [
    `
      .progress-bar-container,
      .progress {
        height: 20px;
      }

      .progress-bar-container {
        width: 100%;
      }
    `,
  ],
})
export class ProgressBarComponent implements OnInit /*, OnChanges */ {
  @Input() backgroundColor: string;
  @Input() progressColor: "blue";
  private $progress = 50;
  style ="width: 100px; height: 100px"
  @Input()
  get progress(): number {
    return this.$progress;
  }
  set progress(value: number) {
    if (typeof value !== 'number') {
      const progress = Number(value);
      if (Number.isNaN(progress)) {
        this.$progress = 0;
      } else {
        this.$progress = progress;
      }
    } else {
      this.$progress = value;
    }
  }

  constructor() {}

  // ngOnChanges(changes: SimpleChanges) {
  //   if ('progress' in changes) {
  //     if (typeof changes['progress'].currentValue !== 'number') {
  //       const progress = Number(changes['progress'].currentValue);
  //       if (Number.isNaN(progress)) {
  //         this.progress = 0;
  //       } else {
  //         this.progress = progress;
  //       }
  //     }
  //   }
  // }

  ngOnInit() {}
}
