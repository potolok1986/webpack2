'use strict';
import CreateMenu from '../../../js/components/menu/menu';
import './index.scss';
import 'normalize.css';
import TestClass from '../../../js/components/testClass/testClass'

let menu = CreateMenu(['Главная', 'Обо мне', 'Портфолио', 'test'], 'menu');

let testClass = new TestClass("Alex");
testClass.sayHello();

document.body.appendChild(menu);