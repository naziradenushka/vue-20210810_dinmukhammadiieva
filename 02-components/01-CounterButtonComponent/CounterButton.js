import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props: {
    count: {
      default: 0,
    },
  },
  // props: ['count'],
  emits: ['update:count'],
  data() {
    return {
      counter: this.count,
    };
  },
  computed: {
    value: {
      get() {
        return this.count;
      },
      set(value) {
        this.$emit('update:count', value);
      },
    },
  },
  watch: {
    value(newValue, oldValue) {
      this.counter = oldValue + 1;
    }
  },
  // Компонент должен иметь входной параметр

  // Шаблон лучше держать максимально простым, а логику выносить в методы

  // Шаблон потребуется отредактировать
  template: `<button @click="value=++counter" type="button">{{ value }}</button>`,
});
