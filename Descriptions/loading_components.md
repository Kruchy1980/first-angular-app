# Loading Components into our application

To implement our component to our application we need to implement it into app.component.htlm file like below:
We need to use the tag/s of component we created to display whatever we compound in the adeoute .html files and in app we can use just tags of copmonent we have created.

### app.component.html:

<h1>
<!-- The title of the app implemented in double curly brackets -->

<!--called template tqgs is implemented from app.component.ts where it is created -->

{{title}}

<app-hello-world></app-hello-world>

<app-user-list></app-user-list>

<!-- here we adding the small component just for check if it is working  will be replaced later by app-user-list-->

<app-user-item></app-user-item>

</h1>

### Static and dynamic rendering

In applications the most important is to render elements dynamicaly. To do that we need to prepare firstly small elemente eg. for user list first we need to prepare the single person element as below:
That is the file user-item.component.html

<p>Hello {{name}}</p>

And add it to the app.component.html.

### User-item.component.ts

<!-- To make it work firstly we need to impont necessary modules into the file -->
<!-- // here we need to add/import Input -->

import { Component, OnInit, Input } from '@angular/core'

@Component({
selector: 'app-user-item',
templateUrl: './user-item.component.html',
styleUrls: ['./user-item.component.css']
})

export class UserItemComponent implements OnInit {
@Input() name: string

 <!-- // added input annotation to pass the name separately  just because the user item component is a child that the @Input decorator allow us pass in a value from the parent  from a parent template which is here the user-list component-->

// name: string // added name property

constructor () {

<!-- // Remove code below to not display one name only
// this.name = 'Antonio' // set the name just for check if it is working later remove-->

}

ngOnInit () {}

### Insert list of names:

In the angular we can iterate over the list of objects usint syntax \*ngFor so thanks to it we can repeat the same markup as is in the user-item for the collection of objects

### User-list-component.ts:

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

#### user-list-component.html:

<ul>
  <li *ngFor="let name of names">
    <!-- 1. render the user item to user list instead of text hello {{names}} -->
    <!-- Whenever we prepare input in item component now we nee to pass the attribute name as array to the item component which is a child component-->
    <app-user-item [name]='name'></app-user-item>
  </li>
</ul>
