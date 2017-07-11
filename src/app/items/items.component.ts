import { Component, OnInit, DoCheck, IterableDiffers } from '@angular/core';

import { Location } from '@angular/common';

import { Item } from './item';
import { ItemsService } from './items.service';

import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css', './dragula.css'],
})
export class ItemsComponent implements OnInit, DoCheck {
  items: Item[] = [];
  selectedItem: Item;
  item: Item;
  startIndex;
  endIndex;
  dragItem;
  dropItem;
  differ: any;

  constructor(private itemsService: ItemsService,
              private dragulaService: DragulaService,
              differs: IterableDiffers) {
                this.differ = differs.find([]).create(null);

                dragulaService.drag.subscribe((value) => {
                  this.onDrag(value.slice(1));
                });

                dragulaService.drop.subscribe((value) => {
                  this.onDrop(value.slice(1));
                });

              }

  ngDoCheck() {
    const changes = this.differ.diff(this.items);
    if (changes) {
    console.log('new change'); // for splitting up changes
      changes.forEachAddedItem(r => console.log('added ', r.item));
      changes.forEachRemovedItem(r => console.log('removed ', r.item))
      changes.forEachMovedItem(r => console.log('moved ', r.item))
    }
  }

    private onDrag(args) {
        let [el, parent] = args;
        let index = this.getElementIndex(el);
        this.dragItem = this.items[index];
        this.startIndex = index;
    }

    private onDrop(args) {
        let [el, parent] = args;
        let index = this.getElementIndex(el);
        this.dropItem = this.items[index];
        this.endIndex = index + 1;
        this.makeChanges(this.startIndex, this.endIndex);
    }

    private makeChanges(startIndex, endIndex) {
      if (startIndex - endIndex < 0) {    // moving element down
        let indexDown = startIndex;
        let tmp = this.items[indexDown];
        for (indexDown = startIndex; indexDown < endIndex-1; indexDown ++) {
          let cnt = indexDown + 1;
          this.items[indexDown].order = indexDown;
          this.items[indexDown] = this.items[cnt];
        }
        this.items[indexDown] = tmp;
      } else {                      // moving element up
        let indexUp = startIndex;
        let tmp = this.items[indexUp];
        tmp.order = endIndex;
        for (indexUp = startIndex; indexUp >= endIndex; indexUp --) {
          let cnt = indexUp - 1;
          this.items[indexUp].order = cnt;
          this.items[indexUp] = this.items[cnt];
        }
        this.items[indexUp] = tmp;
      }
    }

    private getElementIndex(el: any) {
        return [].slice.call(el.parentElement.children).indexOf(el);
    }

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
