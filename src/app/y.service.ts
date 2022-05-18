import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YService {
  apiUrl = 'http://127.0.0.1:8080/api.php';

  constructor(private http: HttpClient) { }
  getBooks()
  {
    return this.http.get(`${this.apiUrl}`);
  }

  addArticle(titre: string, description: string , published: boolean)
  {
    const data = { titre : titre, description : description, published : published}

    return this.http.post(`${this.apiUrl}`, data);
  }
}
