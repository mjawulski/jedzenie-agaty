import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'add-feeding-time',
  templateUrl: './add-feeding-time.component.html',
  styleUrls: ['./add-feeding-time.component.css']
})
export class AddFeedingTimeComponent implements OnInit {
  message = "Dodaj nowe karmienie";

  private db: AngularFireDatabase;
  feedingTimesDb: FirebaseListObservable<any[]>;

  drinkValue;
  drinkValues = [
    { amount: "cyc", name: "cyc" },
    { amount: "5", name: "5 ml." },
    { amount: "10", name: "10 ml." },
    { amount: "15", name: "15 ml." },
    { amount: "20", name: "20 ml." },
    { amount: "25", name: "25 ml." },
    { amount: "30", name: "30 ml." },
    { amount: "35", name: "35 ml." },
    { amount: "40", name: "40 ml." },
    { amount: "45", name: "45 ml." },
    { amount: "50", name: "50 ml." }
  ];

  feedingTime;
  feedingTimes = [
    { amount: "0", name: "Teraz" },
    { amount: "15", name: "15 minut temu" },
    { amount: "30", name: "30 minut temu" },
    { amount: "45", name: "45 minut temu" },
    { amount: "60", name: "Godzinę temu" }
  ];

  constructor(db: AngularFireDatabase) {
    this.db = db;
  }

  ngOnInit() {
  }

  addFeedingTime() {
    this.feedingTimesDb = this.db.list('/feeding-times');
    var feedingTimeInUTCSeconds = (Math.round(new Date().getTime()/1000.0))-this.feedingTime*60;
    let newRecord = {
      "time": feedingTimeInUTCSeconds,
      "type": "-",
      "value": this.drinkValue
    };
    this.feedingTimesDb.push(newRecord);

    this.message = "Dodano!";
  }
}
