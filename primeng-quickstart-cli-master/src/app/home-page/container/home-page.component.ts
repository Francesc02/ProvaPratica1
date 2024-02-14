import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CardModule } from "primeng/card";
import { ChiamateAPIService } from "src/app/services/chiamate-api.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent {
  film: unknown | null = null;
  query: string | undefined;

  constructor(
    public chiamateApi: ChiamateAPIService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.query = JSON.stringify(this.route.snapshot.queryParams["query"]);
    this.route.params.subscribe((params) => {
      this.query = params["query"];
    });
    console.log(this.query);

    if (this.query) {
      this.chiamateApi.searchFilm(this.query).subscribe((result) => {
        if (result.total_results == 0) {
          this.film = "Nessun film trovato, nome film non valido!";
        } else {
          this.film = result;
        }
        console.log(this.film);
      });
    } else {
      this.chiamateApi.getFilm().subscribe((result) => {
        this.film = result;
        console.log(this.film);
      });
    }
  }
}
