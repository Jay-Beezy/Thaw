import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  columnDefs = [
    {
      field: 'daysOut',
      width: 125,
      cellStyle: { fontSize: '20px' },
    },
    {
      field: 'futureDate',
      width: 150,
      cellStyle: { fontSize: '20px' },
    },
  ];

  rowData = [
    { daysOut: '5', futureDate: this.daysAhead(5) },
    { daysOut: '6', futureDate: this.daysAhead(6) },
    { daysOut: '7', futureDate: this.daysAhead(7) },
    { daysOut: '8', futureDate: this.daysAhead(8) },
    { daysOut: '10', futureDate: this.daysAhead(10) },
    { daysOut: '14', futureDate: this.daysAhead(14) },
    { daysOut: '18', futureDate: this.daysAhead(18) },
    { daysOut: '21', futureDate: this.daysAhead(21) },
    { daysOut: '30', futureDate: this.daysAhead(30) },
    { daysOut: '40', futureDate: this.daysAhead(40) },
    { daysOut: '45', futureDate: this.daysAhead(45) },
    { daysOut: '90', futureDate: this.daysAhead(90) },
  ];

  getMonth(day) {
    if (day == 1) {
      return 'Jan';
    }
    if (day == 2) {
      return 'Feb';
    }
    if (day == 3) {
      return 'March';
    }
    if (day == 4) {
      return 'April';
    }
    if (day == 5) {
      return 'May';
    }
    if (day == 6) {
      return 'June';
    }
    if (day == 7) {
      return 'July';
    }
    if (day == 8) {
      return 'Aug';
    }
    if (day == 9) {
      return 'Sept';
    }
    if (day == 10) {
      return 'Oct';
    }
    if (day == 11) {
      return 'Nov';
    }
    if (day == 12) {
      return 'Dec';
    }
  }

  getBrand(day) {
    let Brand = [];
    if (day == 5) {
      Brand = [
        'Simple Joy Loaf Cake',
        'Sprouts Take & Bake',
        'Sprouts HotDog/Hamburger Buns',
        'Gonnella Rolls (Pretzel/Assorted)',
        'Cristal Bread',
        'Izzio',
        'Original Bagels',
        'Goglian Greca Pita',
        'Kontos Naan',
      ];
      return Brand;
    }
    if (day == 6) {
      Brand = ['Sprouts Plant Based Bread'];
    }
    if (day == 7) {
      Brand = ['Freedom Donuts', 'Atoria Lavash', 'Sprouts Family Bread'];
    }
    if (day == 8) {
      Brand = ['Ozery Rounds'];
    }
    if (day == 10) {
      Brand = [
        'Old Home Angel Cake',
        'Chocolate/Cream Cheese Brioche Swirl',
        'Cafe Valley Bundt Cake',
        'Lucky Spoon Cupcakes/Cake',
        'Sprouts Two-Bite Brownie, Cin Rolls, Macaroons',
        'Brioche Hotdog/Hamburger',
        'Brioche Raisin/Cheese',
        'Cinnamon/Croissant Bread',
        'Genius Bread',
      ];
    }
    if (day == 14) {
      Brand = [
        'Sprouts Scones',
        'Aunt Millies',
        'Canyonbake',
        'Food For Life',
        'My Bread',
        'Pasquier',
        'Sprouts Yellow Tortillas',
        'Panaji Naan',
      ];
    }
    if (day == 18) {
      Brand = ['Carbonaut', 'Little Northern Bakehouse'];
    }
    if (day == 21) {
      Brand = [
        'Individal Belgian Waffles',
        'Individal Rice Crispy',
        'Lucky Spoon Cookies/Brownies',
        'Sprouts Cupcakes',
        'Chef Frankie Bagel Squares',
        'The Real Coconut Wraps (Sana)',
        'Sprouts Wheat/White Tortillas',
      ];
    }
    if (day == 30) {
      Brand = [
        'Divies Cookie/Brownie',
        'Chef Shamy Butter',
        'Bakerly Crepes',
        'Richs Cauliflower Crust',
      ];
    }
  }

  daysAhead(day) {
    let targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + day);
    let current_day = targetDate.getDate();
    let current_month = targetDate.getMonth() + 1; //0 is January
    let current_year = targetDate.getFullYear();
    let testy = this.getMonth(current_month);
    let dateString = testy + ' ' + current_day; // + ' ' + current_year + '';
    return dateString;
  }
}
