import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'news-app';
  mArticles:Array<any>;
  mSources:Array<any>;
  constructor(private newsapi:NewsApiService){
    console.log('app component constructor called ');
  }
  ngOnInit(){
    //Loading Articles
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    //Loading News Sources
    this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
  }
  searchArticles(source){
    console.log('Selected source is: '+source);
    this.newsapi.getArticlesById(source).subscribe(data => this.mArticles = data['articles']);
  }
}
