<template>
  <label class="file-upload">
    <div class="file-block">
      <div class="step-name">Image</div>
      <div class="icon-block" v-if="!image">
        <i class="icon-camera"></i>
        <input type="file" round class="upload-img" @change="onFileChange" />
      </div>
      <div v-else class="uploaded-img">
        <img class="img" :src="image"/>
        <button type="click" class="delete-img" @click="deleteImage">Delete Image</button>
      </div>
    </div>
  </label>
</template>

<script>
export default {
  name: 'UploadFile',
  data: () => ({
    image: ''
  }),
  methods: {
    onFileChange(event) {
      const files = event.target.files || event.dataTransfer.files

      if (!files.length) {
        return
      }

      this.createImage(files[0])
    },

    createImage(file) {
      const reader = new FileReader()

      reader.onload = (event) => {
        this.image = event.target.result
        this.$emit('uploadedImage', this.image)
      }

      reader.readAsDataURL(file)
    },

    deleteImage() {
      this.image = ''
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.file-block {
  display: flex;
  margin: 40px 0;

  .uploaded-img {
    width: 100%;
    margin-left: 20px;

    img {
      width: 100%;
      height: auto;
    }

    button {
      margin: 10px 0 0 0;
    }
  }

  .icon-block {
    position: relative;
    width: 80px;
    height: 80px;
    margin-left: 20px;
    border: 3px solid #9E9E9E;
    border-radius: 15px;
    background-color: #f0f0f0;

    i {
      position: absolute;
      top: 0;
      left: 0;
      margin-left: -3px;
      margin-top: 1px;
      width: 100%;
      height: 100%;
      font-size: 4rem;
      color: #9E9E9E;
    }
  }

  .upload-img {
    opacity: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
}

.step-name {
  font-size: 1.2rem;
  font-weight: 700;
}

@media(min-width: #{map-get($breakpoints, small)}) {
  .step-name {
    font-size: 1.4rem;
    width: 25%;
  }
}
</style>
