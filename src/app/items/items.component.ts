import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Item } from './item';
import { ItemsService } from './items.service';

import { DragulaService } from 'ng2-dragula';

// import { DragulaService } from 'ng2-dragula/components/dragula.provider'


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css', './dragula.css'],
})
export class ItemsComponent implements OnInit {
  items: Item[];
  selectedItem: Item;
  item: Item;
  startIndex;
  endIndex;
  dragItem;
  dropItem;

  constructor(private itemsService: ItemsService,
              private dragulaService: DragulaService) {

                dragulaService.drag.subscribe((value) => {
                  this.onDrag(value.slice(1));
                });

                dragulaService.drop.subscribe((value) => {
                  this.onDrop(value.slice(1));
                });

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
      } else {
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
      // let cnt = this.startIndex - this.endIndex;
      // let flag;
      // let start, end;
      // if (cnt < 0) {
      //   cnt--;
      //   flag = -1;
      //   start = startIndex;
      //   end = endIndex;
      //   this.items[startIndex].order = end;
      //   console.log(start + " " + end);
      //   // this.items[startIndex] = this.items[end + 1]; /// ------------------
      // }
      // else {
      //   flag = 1;
      //   start = endIndex - 1;
      //   end = startIndex + 1;
      //   this.items[startIndex].order = start;
      //   // console.log(this.items[startIndex].order + " " + this.items[startIndex].name);
      //   // this.items[startIndex] = this.items[start]; // -------------
      // }
      // if (flag == -1) {
      //   end --;
      // }
      // else {
      //   // start += 1;
      //   // end --;
      //   // end ++;
      // }
      // for (let indexDown = start; indexDown < end; indexDown++) {
          
      //   if (flag === -1) {
      //     this.items[indexDown].order --;
      //     let tmp = this.items[indexDown];
      //     // console.log(tmp);
      //     this.items[indexDown] = this.items[indexDown + 1]; // ---------
      //     this.items[indexDown + 1] = tmp;
      //     //  indexDown++;
      //   } else {
          
      //   console.log(" ************ ");
      //     console.log(start + " - " + end)
          
      //     this.items[indexDown].order ++;
      //     console.log(this.items[indexDown].order + " " + this.items[indexDown].name);
      //     let tmp = this.items[indexDown- 1];
      //     this.items[indexDown] = this.items[indexDown + 1];
      //     this.items[indexDown - 1] = tmp;
      //     // console.log(this.items[indexDown - 1].name + " + " + this.items[indexDown].name + " " + this.items[indexDown + 1].name + " ***");
      //     // this.items[indexDown] = this.items[indexDown - 1]; // ---------
      //     // this.items[indexDown - 1] = tmp;
      //     //  this.items[indexDown] = this.items[indexDown++]; // ---------
      //     //  indexDown--;
      // }
      //   // else {

      //   // }
      // }
      for (let i = 0; i < this.items.length; i ++) {
         console.log(this.items[i]);
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
