# Create first component

### To create component we use command as below:

ng generate component hello-world

which creates folder with basic files of component

### Basic component hah two parts:

##### 1 A Component decorator

##### 2 A component definition class

## Part One :

hello-world.component.ts - ts extend means typescript which we are using in angular. The only problem is that browsers do not know how to interpret TypeScript files but to solve this gap the ng werve command live-compiles the .ts to .js automatically.

### Decorator Dependecies @Component.

The component is impotred from @angular.core module which tells to our progrqam where to find the dependencies that we ate looking for in tis case we are telling the compiler that @angular.core defines and exports two JavaScript/TypeScript objects clled Component and OnInit - which is imported from the same module ant the OnInit helps to run code when we initialize the component.

##### Component Decorators:

After importintg our dependencies we are ceclaring the component

@Component and the ape in here defines decorator which we can think about them as about metadata added to our code.
When we use @Component on the HelloWorld class we ate decorating HelloWorld as a Component.

Let say that we want to be able to use this component in our markup by using a <app-hello-world> tag. To do that we configure the @Component and specigy yhe selector as app-hello-world as below:

@Component({

    selector: 'app-hello-world',

    // Template is only used when we want to implement any small object/element inline inside our app

    // template: `// <p> // hello-world works inline ! // </p> //`,

    templateUrl: './hello-world.component.html',
    styleUrls: ['./hello-world.component.css']

})

##### template

The template is a part where we can implement the code inliete to our application so it is not used for larger scripts jus in case we want to add small piede of code.
The good way to implement the display of our application is to use separate files of code which is implemented in .html file of the component and than called thanks to 'templateUrl'.
Note that template is needed to be defined in backticks (`...`).

##### templateUrl

The templateUrl show the application the path to file with code we want to be rendered on the application layout

##### styleUrl

StyleUrl is a part of decorator which shows the application path to styles of adequate component.
You may have noticed that this key is different from template in that it accepts an array as it’s argument. This is because we can load multiple stylesheets for a single component.
