import { test } from 'vitest';
import { MyModel } from './MyModel.model';
import { MyClass } from './MyClass';

test('generate D2 task ids', async () => {
    const model = new MyModel();
    const myObject = new MyClass();
    myObject.doSomething(model);
});
