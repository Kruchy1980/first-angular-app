import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { HelloWorldComponent } from './hello-world/hello-world.component'
import { UserItemComponent } from './user-item/user-item.component'
import { UserListComponent } from './user-list/user-list.component'

// ngModule system is used to not  booting all the components directly but after rebooting application thanks to ngModule it points the components we want to load.

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
