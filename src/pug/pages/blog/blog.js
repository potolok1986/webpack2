'use strict';
import CreateMenu from '../../../js/components/menu/menu';
import './blog.scss'
import 'normalize.css';

var menu = CreateMenu(['Главная', 'Обо мне'], 'menu');
document.body.appendChild(menu);
