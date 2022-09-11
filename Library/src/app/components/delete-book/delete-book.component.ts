import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/classes/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css'],
})
export class DeleteBookComponent implements OnInit {
  book: Book = new Book(0, '', '', 0.0);
  bookId: number = 0;
  constructor(
    private _service: BookService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((data) => {
      this.bookId = data['id'];
      // console.log('Book id to be delete');

      this._service.deleteBook(this.bookId).subscribe(
        (data) => {
          alert('Book details deleted');
          this._router.navigateByUrl('/dashboard/admin/viewAll');
        },
        (error) => {
          alert('Error occured: ' + error.message);
        }
      );
    });
  }
}