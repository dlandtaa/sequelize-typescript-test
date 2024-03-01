const { Sequelize } = require('sequelize-typescript');
import { MyClass } from './MyClass';
import { MyModel } from './MyModel.model';

const sqlize = new Sequelize('a', 'b', 'c', {
    host: 'd',
    dialect: 'mysql',
    models: [
        MyModel
    ]
});

const myModel = new MyModel();
const myObj = new MyClass();
myObj.doSomething(myModel);
