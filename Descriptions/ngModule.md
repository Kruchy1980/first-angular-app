# ngModule

ngModule system is used to not booting all the components directly but after rebooting application thanks to ngModule it points the components we want to load.

### app.module.ts

##### That is only the meat part of ng Module without imports.

@NgModule({ <!-- decorqator which adds metadata to the class immediately following and in this case it is AppModule-->

<!-- The decorator has 4 keys as :
1. declaration,
2. imports,
3. providers,
4. bootstrap -->

declarations: [
AppComponent,
HelloWorldComponent,
UserItemComponent,
UserListComponent
],
imports:
[BrowserModule],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule {}

### Modules descriptions

##### 1. declarations

Declarations specifies components that are defined in this module which is an impomtqnt idea in Angular -

# We need to declare components in a NgModule before we cam use them in our templates

We can compare the NgModule as a 'package' and declarations states what components are --owned by-- this module. fortunately by using ng generate to create new componentsthe tool gererate this automatically.

##### 2. imports

Imports describes which dependencies this module has. We're creating a browser app so we want to import the BrowserModule so if our module depends on otner modules we can list them here. It is good to place them in the app.module.ts if we are going to use them in our templates or with dependency injection.

##### 3. providers

Providers are used for dependency injection, So to make a serbice availible to be injected throughout out application, we will add it here.

##### 4. bootstrap

Bootstrap tells Angular that when this module is used to bootstrap an app we need to load the AppComponent as the top-level component

##### ng will look at the file angular.json to find the entry point to our app. Let’s trace how ng finds the components we just built.

• angular.json specifies a "main" file, which in this case is main.ts
• main.ts is the entry-point for our app and it bootstraps our application
• The bootstrap process boots an Angular module – we haven’t talked about
modules yet, but we will in a minute
• We use the AppModule to bootstrap the app. AppModule is specified in src/ap-
p/app.module.ts
• AppModule specifies which component to use as the top-level component. In this
case it is AppComponent
• AppComponent has <app-user-list> tags in the template and this renders our
list of users.
