<template>
  <div class="toasts">
    <template v-for="(toast, index) in toasts" :key="index">
      <div v-if="toast.show" class="toast" :class="toast.class">
        <ui-icon class="toast__icon" :icon="toast.icon" />
        <span>{{ toast.msg }}</span>
      </div>
    </template>
    <!-- <div lass="toast toast_success">
      <ui-icon class="toast__icon" icon="check-circle" />
      <span>Success Toast Example</span>
    </div>

    <div class="toast toast_error">
      <ui-icon class="toast__icon" icon="alert-circle" />
      <span>Error Toast Example</span>
    </div> -->
  </div>
</template>

<script>
import UiIcon from './UiIcon';

export default {
  name: 'TheToaster',
  components: { UiIcon },
  data() {
    return {
      toasts: [],
    };
  },
  methods: {
    cancel() {
      this.toasts.splice(0, 1);
    },
    success(message) {
      this.toasts.push({
        show: true,
        class: 'toast_success',
        msg: message,
        icon: 'check-circle',
      });
      setTimeout(() => {
        // console.log('s', id);
        this.cancel();
      }, 5000);
    },
    error(message) {
      this.toasts.push({
        show: true,
        class: 'toast_error',
        msg: message,
        icon: 'alert-circle',
      });
      setTimeout(() => {
        // console.log('e', id);
        this.cancel();
      }, 5000);
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
