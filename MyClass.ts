import { MyModel } from './MyModel.model';

class MyClass {
    doSomething(model: MyModel) {
        console.log('here is the model you passed in:', model);
    }   
}

export { MyClass };
