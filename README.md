## Проект

SPA для управления проектами и заданиями, есть scrum доска. Стек - React, TypeScript, Redux - Toolkit, Webpack, TailwindCSS.

----

## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start:dev - запуск сервера + frontend проекта в dev режиме
```

----

## Скрипты

- `npm run start` - Запуск frontend проекта на webpack dev server
- `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend
- `npm run start:dev:server` - Запуск backend сервера
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:analyze` - Сборка в prod режиме, с анализом бандла
- `npm run lint` - Проверка ts файлов линтером
- `npm run lint:fix` - Исправление ts файлов линтером
- `npm run test:unit` - Запуск unit тестов с jest
- `npm run storybook` - запуск Storybook
- `npm run storybook:build` - Сборка storybook билда

----

## Архитектура проекта

Проект написан в соответствии с методологией Feature Sliced Design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Линтинг

В проекте используется eslint для проверки typescript кода.

##### Запуск линтеров

- `npm run lint` - Проверка ts файлов линтером
- `npm run lint:fix` - Исправление ts файлов линтером

----

## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run storybook`

Пример:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```
----

## Конфигурация проекта

Вся конфигурация хранится в /config
- /config/webpack - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

----

### Работа с данными

Взаимодействие с данными осуществляется с помощью Redux - Toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

----

## Сущности (entities)

- Project
- Task

## Фичи (features)

- CreateProjectForm
- EditableTaskForm
- TaskListFilter

## Виджеты (widgets)

- EmptyTable
- Navbar
- PaginationContainer
- TaskListHeader

## Страницы (pages)

- MainPage
- NotFoundPage
- ProjectBoardPage
- ProjectDetailsPage
- ProjectListPage
- ProjectPage
- ProjectTaskListPage
- ProjectTeamPage