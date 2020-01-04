import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  names: string[] // create array of strings

  constructor () {
    this.names = ['Antonio', 'Carlos', 'Jakub', 'Genovefa'] // preapared array with names as strings
  }

  ngOnInit () {}
}
