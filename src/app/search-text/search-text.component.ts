import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-text',
  templateUrl: './search-text.component.html',
  styleUrls: ['./search-text.component.css']
})
export class SearchTextComponent implements OnInit {

searchText: string;

  constructor() { }

  ngOnInit() {
  }

}
