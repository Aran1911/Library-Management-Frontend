import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/classes/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  book: Book = new Book (0,"","",0.0);
  constructor(private _service:BookService, private _activatedRoute:ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    let bookId:number = 0;
    this._activatedRoute.params.subscribe(data => {
      bookId = data['id'] ;
      /*console.log("Book id to be update:"+bookId);*/
      this._service.getBook(bookId).subscribe(resp =>{
        this.book = resp;
      })
    })
  }

  onsubmit(): void{
    console.log(this.book);
    this._service.updateBook(this.book).subscribe(data=>{
      alert("Book updated sucessfully");
      this._router.navigateByUrl("/dashboard/admin/viewAll");
      this.book = new Book (0,"","",0.0);
    },
    error => {
      alert("Book details updation is failed")
  })
  }  
}
