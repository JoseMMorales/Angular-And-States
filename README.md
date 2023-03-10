# <div align="center">[![My Skills](https://skillicons.dev/icons?i=angular)](https://skillicons.dev) [![My Skills](https://skillicons.dev/icons?i=ts)](https://skillicons.dev) Angular And States[![My Skills](https://skillicons.dev/icons?i=rxjs)](https://skillicons.dev)[![My Skills](https://skillicons.dev/icons?i=bootstrap)](https://skillicons.dev)</div>

Communication in Angular is really important when building an Angular App, we usually communicate parent-children components adding Input/Output events on. However, when our App starts to grow either with routing or in number of components, we opt to go for services with RxJs to do this implementation.

These services are based on a Behavior Subject property and subscription ([AsObservable](https://rxjs.dev/api/index/class/Subject)) in order to get the data asynchronoulsy. But if the requirements increase due to reaction/service needed in several components this technique sometimes is quite difficult to maintain on a long-term basis.

That's why AppService has been built for, to avoid multiple injections of different services in any single component, it is acting as a bridge combining multiple behavior Subjects placed in different services.

---

</br>

### 💻 **State in Services** 💻

As I mentioned above, single services are needed to save state of each section, as you can see in the snapshot below Behavior Subject is setting the data in the [Behavior Subject](https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject) for later being called [AsObservable](https://rxjs.dev/api/index/class/Subject) at any level of the App.

<div align="center">
<img width="469" alt="service simple" src="https://user-images.githubusercontent.com/43299285/223772847-41dbd316-b054-4ca3-a18d-07f7f1366b2b.PNG">
</div>

</br>

### 💻 **Bridge Service** 💻

Centralizing all our Behavior Subjects will provide all states in the App just calling one service, we will provide a single entry creating AppService to expose customerAndBalance$ in a single object, which is very straight forward to handle when retrieving the data in any component.

<div align="center">
<img width="485" alt="service" src="https://user-images.githubusercontent.com/43299285/223952462-cd4f95e2-34e3-44b1-9152-3fdb98153db2.PNG">
</div>

</br>

### 💻 **Combining Observables** 💻

**CombineLatest** RxJs operator used to combine each service data in a single object which is going to be rendered in customer-message component. As returns an Observable async pipe has accompanied the data in the template to identify changes in the subscription.

<div align="center">
<img width="288" alt="combineLatest" src="https://user-images.githubusercontent.com/43299285/223765950-deb7b6c2-8237-4530-bcd6-e15b431b94fa.PNG">
</div>

</br>

### 💻 **Nesting Conditions in the template** 💻

**NgIf else, ng-container, ng-template** are structural directives applied in customer-message component to render part of the template depending which variable is providing the data to let the user know if any action is required. With this technique we can play with for different scenarios in order to show messages in the DOM.

<div align="center">
<img width="492" alt="render" src="https://user-images.githubusercontent.com/43299285/223949181-15fdb693-745d-461b-a6ef-71187d786a55.PNG">
</div>

</br>

### **How to clone**

- `git clone https://github.com/JoseMMorales/Angular-And-States.git`
- `cd Angular-And-States`
- `code .` if using VSCode

### **Technology**

<b>angular</b>: "14.2.0"</br>
<b>rxjs</b>: "7.5.0"</br>
<b>typescript</b>: "4.7"</br>
<b>bootstrap</b>: "5.2"</br>
<b>jasmine</b>: "4.3"</br>
<b>Karma</b>: "5.1"</br>

### **Author**

JoseMMorales
