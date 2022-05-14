# TemplateRenderer

🔥 _Задача повышенной сложности_\
📚 _Закрепление материала_

<!--start_statement-->

Требуется реализовать компонент для динамического рендеринга шаблона в других компонентах.

Входные параметры:

- `template` - обязательный строковый параметр с шаблоном, который требуется отрендерить;
- `bindings` - объект с данными, передаваемыми в компонент;
- `components` - объект или массив для регистрации компонентов, используемых в шаблоне `template`, аналогично обычной
  опции `components`.

```html
<template-renderer template="<div>{{ foo }}</div>" :bindings="{ foo: 'bar' }" />

<!-- Рендерится как -->

<div>bar</div>
```

<img src="https://i.imgur.com/33Rjdyz.gif" alt="Example" />

### Функция compile

Для компиляции шаблона в render-функцию используется функция `compile`. К сожалению, эта функция не описана в
документации.

Функция `compile` принимает на вход строку с шаблоном и объект с параметрами
[compilerOptions](https://vuejs.org/api/options-rendering.html#compileroptions), а возвращает render-функцию.

```javascript
import { compile } from 'vue';

const template = '<div>{{ foo }}</div>';
const renderFunction = compile(template);
```

В этой функции могут использоваться данные из компонента. Во Vue функция `compile` используется для превращения опции
`template` в опцию `render`. Vue вызывает функцию из свойства `render`, привязывая ей контекст и передавая нужные данные
через параметры. По этой причине недостаточно просто вызывать эту функцию. Как минимум требуется передать контекст и
аргументы render-функции.

```javascript
export default defineComponent({
  render() {
    const renderFunction = compile(template);
    // Так нельзя.
    // Требуется привязать контекст и передать аргументы
    return renderFunction();
  },
});
```

**Другое решение** - создать на основе сгенерированной render-функции новый компонент, и частно рендерить его как
дочерний компонент. Это позволит использовать шаблон как полноценный шаблон компонента.

Реализация функции:
[в исходном коде](https://github.com/vuejs/core/blob/1070f127a78bfe7da6fe550cc272ef11a1f434a0/packages/compiler-dom/src/index.ts#L40).

### runtime compiler

По умолчанию и в `@vue/cli`, и в `vite` используется Vue версия без компилятора шаблонов.

В `@vue/cli` компилятор шаблонов включается во `vue.config.js` в параметре
[runtimeCompiler](https://cli.vuejs.org/config/#runtimecompiler).

В `vite` отдельного свойства для этого нет. Потребуется добавить `alias`, который бы импортировал `vue.esm-bundler.js`
вместо модуля по умолчанию `vue.runtime.esm-bundler.js`.

```javascript
export default defineConfig({
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  // ...
});
```

<!--end_statement-->

---

### Инструкция

📝 Для решения задачи отредактируйте файл: `components/TemplateRenderer.vue`.

🚀 Команда запуска для ручного тестирования: `npm run serve`;\
приложение будет доступно на [http://localhost:8080/09-rendering/02-TemplateRenderer](http://localhost:8080/09-rendering/02-TemplateRenderer).

✅ Доступно автоматическое тестирование: `npm test VNode`.
