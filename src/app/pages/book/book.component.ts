import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  cant: number = 1;
  total: number = 0;

  book = []

  constructor(private BooksService: BooksService,  private AR: ActivatedRoute) { 
    //this.CalTotal();
  }

  ngOnInit(): void {
    this.AR.params
      .subscribe((params) => {
        console.log(params)
        this.GetBook(params.id)
      });
  }

  GetBook(idBook: String) {
    this.BooksService.getOne(idBook)
      .subscribe(
        (BookGetOne : any) => {
          console.log(BookGetOne)
          this.book = BookGetOne;
          this.CalTotal();
        },
        (error) => {
          console.error('Error accesediendo a los parametros ', error);
        }
      );
  }

  CalTotal() {
    this.total = this.cant * this.book[0].unitValue;
  }

}
