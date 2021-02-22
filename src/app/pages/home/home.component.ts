import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  gato = '';

  books = []

  constructor(private BooksService: BooksService) { }

  ngOnInit(): void {
    this.BooksService.getAll()
      .subscribe( (books: any) => {
        console.log('books', books)
        this.books = books;
      }, (error) => {
        console.error('Error get book ', error)
      })
  }

}
