import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { StatsService } from "./stats.service";
import { CardItemComponent } from './components/card-item/card-item.component';

@NgModule({
    imports: [HttpClientModule, BrowserModule],
    providers:[ StatsService],
    declarations: [CardItemComponent],
    exports: [CardItemComponent],
})
export class SharedModule{} 