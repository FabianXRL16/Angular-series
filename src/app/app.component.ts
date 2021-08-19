import { Component } from "@angular/core";

type Serie = {
  id: Number;
  name: String;
  available: Number;
  quantity: number;
  img: String;
};
type Series = Array<Serie>;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  category: String = "Series";
  series: Series = [
    {
      id: 1,
      name: "Game of Thrones",
      available: 10,
      quantity: 0,
      img: "https://m.media-amazon.com/images/I/91DjGXn7jXL._AC_SL1500_.jpg"
    },
    {
      id: 2,
      name: "Breaking Bad",
      available: 8,
      quantity: 0,
      img: "https://es.web.img3.acsta.net/pictures/18/04/04/22/52/3191575.jpg"
    },
    {
      id: 3,
      name: "Mr. Robot",
      available: 8,
      quantity: 0,
      img: "https://i.blogs.es/6dfa2f/mrrobot/450_1000.jpg"
    },
    {
      id: 4,
      name: "Suits",
      available: 6,
      quantity: 0,
      img: "https://es.web.img2.acsta.net/pictures/14/03/28/10/18/433386.jpg"
    },
    {
      id: 5,
      name: "Lucifer",
      available: 7,
      quantity: 0,
      img:
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2017/02/lucifer-serie-tv-cartel.jpg?itok=uC0s67xh"
    },
    {
      id: 6,
      name: "The Witcher",
      available: 6,
      quantity: 0,
      img:
        "https://i0.wp.com/hipertextual.com/wp-content/uploads/2019/12/hipertextual-the-witcher-2019676960-scaled.jpg?fit=1200%2C875&ssl=1"
    },
    {
      id: 7,
      name: "Peaky Blinders",
      available: 2,
      quantity: 0,
      img:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tommy-shelby-cillian-murphy-peaky-blinders-1569234705.jpg?crop=0.736xw:0.493xh;0.262xw,0.0238xh&resize=480:*"
    },
    {
      id: 8,
      name: "Gambito de Dama",
      available: 8,
      quantity: 0,
      img:
        "https://www.lavozdetarija.com/wp-content/uploads/2020/11/The-Queen%C2%B4s-Gambit-e1604803445514.jpg"
    }
  ];
  changeAvailable(name :String, e :Boolean) {
    const i :number = this.series.findIndex((serie) => serie.name === name);
    e ? this.series[i].quantity++ : this.series[i].quantity--;
  }
}
