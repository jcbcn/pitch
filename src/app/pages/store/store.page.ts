import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Card } from 'pitch-player-card/models/card';
import { HttpClient } from '@angular/common/http';
import { StoreHttpService } from './store.service';

@Component({
  selector: "app-store",
  templateUrl: "./store.page.html",
  styleUrls: ["./store.page.less"]
})
export class StoreComponent implements OnInit {
  cards: Card[] = [];

  constructor(private store: StoreHttpService) {}

  ngOnInit() {
  }

  click(id: string): void {
    if(this.cards[id] && this.cards[id].opened) return;
    this.store.openPack(id).subscribe(card => {
      this.cards[id] = card;
    });
  }
}
