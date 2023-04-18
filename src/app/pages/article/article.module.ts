import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { DetailsArticleComponent } from './details-article/details-article.component';
import { CreateArticleComponent } from './create-article/create-article.component';



@NgModule({
  declarations: [
    ListArticlesComponent,
    DetailsArticleComponent,
    CreateArticleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ArticleModule { }
