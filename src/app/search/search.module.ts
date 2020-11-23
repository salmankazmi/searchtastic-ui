import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search.component';
import { SearchService } from './service/search.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SearchComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        HttpClientModule
    ],
    exports: [
        SearchComponent
    ],
    providers: [
        SearchService
    ]
}) export class SearchModule { }
