import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
declare var $: any;

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = ['Merchant 1', 'Merchant 2', 'Merchant 3'];
  filteredOptions!: Observable<string[]>;
  unlockKeyGenerated:boolean = false;
  merchant!:any
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  click(){
    this.unlockKeyGenerated = true;
  }
  getPosts(e:any){
   this.merchant = e
    
  }
}
