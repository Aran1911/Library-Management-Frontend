import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/classes/book';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-books',
  templateUrl: './view-all-books.component.html',
  styleUrls: ['./view-all-books.component.css']
})
export class ViewAllBooksComponent implements OnInit {

  books: Book[] = [];

  bookToUpdate = {
    bookId: 0,
    title: "",
    authorName: "",
    cost: 0.00
  }

  constructor(private bookService: BookService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(
      (resp) => {
        console.log(resp);
        this.books = resp;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  deleteBook(book: any) {
    this.bookService.deleteBook(book.bookId).subscribe(
      (resp) => {
        console.log(resp);
        alert("Book deleted");
        this.router.navigateByUrl("viewAll");
        this.reloadCurrentPage();
      },
      (err) => {
        console.log(err);
        alert("Book deletion failed");
      }
    )
  }

  reloadCurrentPage() {
    window.location.reload();
  }

}
