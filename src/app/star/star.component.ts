import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'rating-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class RatingStarComponent implements OnInit {

  @Input() max: number;
  @Output() onRating = new EventEmitter<number>();

  public maxItem: any[];
  public ratedCount: number;

  constructor() {
    this.ratedCount = 2;
  }

  ngOnInit() {
    this.maxItem = [];
    for (let i = 0; i < this.max; i++) {
      this.maxItem.push(i + 1);
    }
  }

  public toggleRating(s: number): void {
    this.ratedCount = s;
    this.onRating.emit(this.ratedCount);
  }

}
