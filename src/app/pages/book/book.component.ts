import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  cant: number = 1;
  total: number = 0;

  book = [
    {
      _id: 1,
      cover: 'assets/images/book.jpg',
      name: 'The Arrivals',
      description: `Cupidatat laborum deserunt enim veniam amet consequat tempor veniam nulla tempor id dolor mollit. Voluptate non quis sit ea Lorem est magna consectetur. In enim veniam veniam consequat officia incididunt do laborum. Reprehenderit sint amet quis ea do do in culpa irure do proident.`,
        unitValue: 50000
    }]

  constructor() {
    this.CalTotal();
  }

  ngOnInit(): void {
  }

  CalTotal() {
    this.total = this.cant * this.book[0].unitValue;
  }

}
