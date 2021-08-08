import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const vm = createApp({
  data() {
    return {
      number1: 0,
      number2: 0,
      operation: 'sum',
      result: 0,
    };
  },
  computed: {
    getResult() {
      let answer = 0;
      if (this.operation == 'sum') {
        answer = +this.number1 + +this.number2;
      } else if (this.operation == 'subtract') {
        answer = +this.number1 - +this.number2;
      } else if (this.operation == 'multiply') {
        answer = +this.number1 * +this.number2;
      } else if (this.operation == 'divide') {
        if (this.number2 == 0) {
          answer = 'На 0 делить нельзя';
        } else {
          answer = +this.number1 / +this.number2;
        }
      }
      return answer;
    },
  },
}).mount('#app');
