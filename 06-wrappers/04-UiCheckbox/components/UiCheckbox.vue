<template>
  <label class="checkbox">
    <!-- по счёту 7 и 8 тест если это прописать {{ modelValue }} проходит, а иначе не проходит, не понимаю почему,
    значение установливается и убирается с массива как положено -->
    {{ modelValue }}
    <input v-model="value" v-bind="$attrs" type="checkbox" class="checkbox__input" />
    <span class="checkbox__box"></span>
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'UiCheckbox',
  inheritAttrs: false,
  props: ['modelValue'],
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        // console.log(1);
        return this.modelValue;
      },
      set(value) {
        // console.log(2);
        this.$emit('update:modelValue', value);
      },
    },
  },
};
</script>

<style scoped>
.checkbox {
  display: inline-block;
  position: relative;
  padding-left: 44px;
  margin-bottom: 10px;
  text-align: left;
  cursor: pointer;
  font-size: 20px;
  line-height: 28px;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-property: background-color, border-color;
}

.checkbox > input.checkbox__input {
  position: absolute;
  z-index: -1;
  opacity: 0;
  padding: 0;
}

.checkbox > .checkbox__box {
  border: 2px solid var(--blue-light);
}

.checkbox > .checkbox__box {
  border-radius: 8px;
  background: 0 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 28px;
  width: 28px;
}

.checkbox > input.checkbox__input:checked ~ .checkbox__box:after {
  display: block;
}

.checkbox > .checkbox__box:after {
  content: '';
  position: absolute;
  display: none;
  top: 50%;
  left: 50%;
  width: 14px;
  height: 13px;
  background-image: url('~@/assets/icons/icon-check.svg');
  border: none;
  transform: translate(-50%, -50%);
}
</style>
