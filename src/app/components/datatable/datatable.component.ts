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
  @Output() loadMore = new EventEmitter<any>(true);

  public selectedColumn = null;
  public sort = null;
  public page = 1;
  public pageSize = 3;

  constructor() { }

  ngOnInit() {
    this.fetchData.emit({
      orderBy: this.selectedColumn,
      orderType: this.sort,
      page: this.page,
      pageSize: this.pageSize
    });
  }

  toggleOrderColumn(property) {
    this.selectedColumn = property;
    this.sort = (this.sort === 'desc' || this.sort === null) ? 'asc' : 'desc';
    this.fetchData.emit({
      orderBy: this.selectedColumn,
      orderType: this.sort,
      page: this.page,
      pageSize: this.pageSize
    });
  }

  handleLoadMore() {
    this.loadMore.emit({
      orderBy: this.selectedColumn,
      orderType: this.sort,
      page: (this.pageSize / 3) + 1,
      pageSize: 3,
    });

    this.pageSize += 3;
  }
}
