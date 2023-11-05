import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

const notifications = [
  {
    id: 1,
    name: 'Julien Magnifice',
    content: 'I hope this message finds you all in high spirits as we continue to make incredible strides towards our goals',
    date: "2023-11-04 14:30:00",
    isFavourite: true
  },
  {
    id: 2,
    name: 'Marc Overmars',
    content: 'Hello my friend, how is it going? Tell me more about the latest project calls.',
    date: "2023-09-30 14:30:00",
    isFavourite: false
  },
  {
    id: 3,
    name: 'Kelvin Jones',
    content: 'Hey, here are the last design updates. Let me know your feedback and have a nice day!',
    date: "2023-01-14 14:30:00",
    isFavourite: false
  },
  {
    id: 4,
    name: 'Anna Johnson',
    content: 'Did you see the new works? I am very excited to present it on friday to our team. Let´s stay in contact.',
    date: "2023-12-04 14:30:00",
    isFavourite: false
  },
]

const notificationTypeList = [
  { name: 'All Messages', code: 'ALL' },
  { name: 'Fav. Messages', code: 'FAV' }
];

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  notifications: any[] = []
  notificationTypeControl = new FormControl('ALL');
  notificationTypeList: any[] = []

  ngOnInit(): void {
    this.notifications = notifications;
    this.notificationTypeList = notificationTypeList;
  }

  changeFavouriteNotification(idNotification: number): void {
    this.notifications.forEach(x => {
      if(idNotification == x.id) {
        x.isFavourite = !x.isFavourite;
      }
    })
  }

  resetNotificationList(): void {
    this.notifications = notifications;
  }

  changeNotificationList(codeNotification: string): void {
    switch (codeNotification) {
      case 'ALL':
        this.resetNotificationList();
        break;
      case 'FAV':
        this.notifications = this.notifications.filter(x => x.isFavourite);
        break;
      default:
        this.resetNotificationList();
        break;
    }
  }

}
