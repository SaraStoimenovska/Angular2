import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Item } from './item';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  selectedItem: Item;
  item: Item;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemsService.getItems()
                     .then(items => this.items = items);
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
  }

  addNewItem(name: string, author: string): void {
    if (!name && !author) { return; }
    this.itemsService.create(name, author)
      .then(item => {
        this.items.push(item);
        this.selectedItem = null;
      });
  }

  delete(item: Item): void {
    this.itemsService
        .delete(item.id)
        .then(() => {
          this.items = this.items.filter(h => h !== item);
          if (this.selectedItem === item) { this.selectedItem = null; }
        });
  }

  save(): void {
    this.itemsService.update(this.selectedItem).then(this.selectedItem = null);
  }

  cancel(): void {
    this.selectedItem = null;
  }
}
