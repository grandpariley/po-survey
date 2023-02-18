import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
})
export class RankComponent {

  @Input() options: string[] = [];
}
