import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'feeding-times-list',
  templateUrl: './feeding-times-list.component.html',
  styleUrls: ['./feeding-times-list.component.css']
})
export class FeedingTimesListComponent implements OnInit {

  feedingTimes: FirebaseListObservable<any[]>;
  lastAdded : any[];
  

  private db: AngularFireDatabase;

  constructor(db: AngularFireDatabase) {
    this.db = db;
   }

  ngOnInit() {
    this.feedingTimes = this.db.list('/feeding-times',{
      query:{
        limitToLast: 1
      }
    });
    this.db.list('/feeding-times',{
      query:{
        limitToLast: 11
      }
    }).subscribe(result=>{
      result.reverse().splice(0,1);
      this.lastAdded = result;
    });
  }

  getClass(i){
    return "last-"+i;
  }

}
