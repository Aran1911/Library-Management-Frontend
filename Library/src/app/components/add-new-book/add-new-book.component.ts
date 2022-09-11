import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/classes/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css'],
})
export class AddNewBookComponent implements OnInit {
  book: Book = new Book(0, '', '', 0.0);
  constructor(private _service: BookService, private _router: Router) {}

  ngOnInit(): void {}

  onsubmit(): void {
    console.log(this.book);
    this._service.addNewBook(this.book).subscribe(
      (data) => {
        alert('Book added sucessfully');
        this.book = new Book(0, '', '', 0.0);
        this._router.navigateByUrl('/dashboard/admin/viewAll');
      },
      (error) => {
        alert('Book adding process is failed');
      }
    );
  }
}
