<template>
  <div class="image-uploader">
    <label
      class="image-uploader__preview"
      :style="`--bg-url: url(${preview})`"
      :class="{ 'image-uploader__preview-loading': isUpload }"
      @click="removeFile($event)"
    >
      <span v-if="!!!preview && !isUpload" class="image-uploader__text">Загрузить изображение</span>
      <span v-else-if="isUpload" class="image-uploader__text">Загрузка...</span>
      <span v-else class="image-uploader__text">Удалить изображение</span>
      <input
        v-bind="$attrs"
        ref="fileupload"
        type="file"
        accept="image/*"
        class="image-uploader__input"
        @change="select"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'UiImageUploader',
  inheritAttrs: false,
  props: ['preview', 'uploader'],
  emits: ['upload', 'remove'],
  data() {
    return {
      isUpload: false,
    };
  },
  methods: {
    select(event) {
      this.isUpload = true;
      this.uploader(event.target.files[0]).then((response) => {
        this.$emit('upload', response);
        this.isUpload = false;
        // console.log(response);
      });
    },
    removeFile(e) {
      if (this.preview) {
        e.preventDefault();
        this.$refs.fileupload.value = null;
        this.$emit('remove');
      }
    },
    // remove() {},
    // upload() {},
  },
};
</script>

<style scoped>
.image-uploader {
}

.image-uploader__input {
  opacity: 0;
  height: 0;
}

.image-uploader__preview {
  --bg-url: var(--default-cover);
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), var(--bg-url);
  border: 2px solid var(--blue-light);
  border-radius: 8px;
  transition: 0.2s border-color;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 512px;
  height: 228px;
}

.image-uploader__text {
  color: var(--white);
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}

.image-uploader__preview:hover {
  border-color: var(--blue);
}

.image-uploader__preview.image-uploader__preview-loading {
  cursor: no-drop;
}
</style>
