import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
//  Il faut définir la locale pour pouvoir utiliser le paramètre locale du pipe
//  Vous ne pourrez pas lui passer 'fr' en deuxième paramètre sinon
import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
registerLocaleData(localeFr, "fr");

@Component({
  selector: "my-app",
  template: `
    <p>Nous sommes le {{ today | date: "fullDate":"":"fr" }}.</p>
    <p>Nous sommes le {{ today | date: "short":"":"fr" }}.</p>
    <p>Nous sommes le {{ today | date: "long":"":"fr" }}.</p>
    <p>Il est {{ today | date: "mediumTime":"":"fr" }}.</p>
    <p>Il est {{ today | date: "H:mm":"":"fr" }}.</p>

    <hr />
    <p>Arrondi de pi : {{ pi | number: "1.2-2":"fr" }}</p>
  `
})
export class AppComponent {
  constructor() {}

  public today = Date.now();

  public pi = 3.141592;
}

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
