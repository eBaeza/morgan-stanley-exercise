import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  @Input() data;
  @Input() columns = [];
  @Output() fetchData = new EventEmitter<any>(true);

  public selectedColumn = null;
  public sort = null;

  constructor() { }

  ngOnInit() {
    this.fetchData.emit({
      orderBy: this.selectedColumn,
      orderType: this.sort,
    });
  }

  toggleOrderColumn(property) {
    this.selectedColumn = property;
    this.sort = (this.sort === 'desc' || this.sort === null) ? 'asc' : 'desc';
    this.fetchData.emit({
      orderBy: this.selectedColumn,
      orderType: this.sort,
    });
  }
}
