// here we need to add/import Input
import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() name: string // added input annotation to pass the namew separately

  // name: string // added name property

  constructor () {
    // Remove code below to not display one name only
    // this.name = 'Antonio' // set the name
  }

  ngOnInit () {}
}
