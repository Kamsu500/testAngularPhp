import { YService } from './y.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myTest';

  data = [];

  constructor(private service: YService)
  {
    this.service.getBooks().subscribe(data => {
    this.data.push(data);
    console.log(this.data);
    }, error => console.error(error));
  }

  onSubmit(form: NgForm){
    const title = form.value.title;
    const description = form.value.description;
    const published = form.value.published;

    this.service.addArticle(title, description, published).subscribe((res: any) => {
      console.log(res);
    },
    (err)=>{
      console.log(err);
    });
  }
}

