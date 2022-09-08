import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from '../classes/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _httpClient: HttpClient) { }
  baseUsrl = 'http://localhost:2000/books';

  public addNewBook(book:Book): Observable<Book> {
    return this._httpClient.post<Book>(this.baseUsrl+'/add-book',book).pipe(resp=>resp);
  }

  public getAllBooks(): Observable<Book[]> {
    return this._httpClient.get<Book[]>(this.baseUsrl+'/all-books').pipe(map(resp => resp));
  }

  public updateBook(book:Book): Observable<Book>{
    return this._httpClient.put<Book>(this.baseUsrl+'/update-book/'+book.bookId,book).pipe(map (resp => resp));
  }

  public deleteBook(id:number): Observable<string> {
    return this._httpClient.delete<string>(this.baseUsrl+'/delete-book/'+ id);
  }

public getBook(bookId: number): Observable<Book> {
  return this._httpClient.get<Book>(this.baseUsrl+"/book/"+bookId).pipe(map(resp => resp));
}

 
}
