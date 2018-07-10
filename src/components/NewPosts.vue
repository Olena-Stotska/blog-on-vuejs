<template>
  <div class="create-post">
    <div class="header-post">
      <button :title="message" class="btn-home">
        <router-link to="/"><img src="../assets/img/brain.svg" alt="Logo"></router-link>
      </button>
      <h1>New Post</h1>
    </div>

    <form ref="form">
      <label class="steps-post">
        <div class="step-name">Title<span class="form-asterisk">*</span></div>
        <transition name="fadeRight">
          <div class="validation" v-if="!isValidTitle">Write your publication name!</div>
        </transition>
        <input type="text" name="title" v-model.trim="title" v-validity="isValidTitle" placeholder="Your publication’s name" maxlength="100" required >
      </label>

      <label class="steps-post">
        <div class="step-name">Description<span class="form-asterisk">*</span></div>
        <transition name="fadeRight">
          <div class="validation" v-if="!isValidDescription">Write a short Description!</div>
        </transition>
        <input type="text" name="title" v-model.trim="description" v-validity="isValidDescription" placeholder="Short Description" maxlength="280" required >
      </label>

      <vue-editor v-model="content"></vue-editor>

      <div class="tags">
        <label class="step-name">Tags</label>
        <input type="text" v-model.trim="tags" placeholder="Add tags...">
        <div class="tag-output"></div>
      </div>

      <div class="theme">
         <select v-model="selected">
          <option disabled value="">Select a theme...</option>
          <option>Tech</option>
          <option>Politics</option>
          <option>Culture</option>
          <option>Other</option>
        </select>

        <span class="step-name">{{ selected }}</span>
      </div>

      <div class="save">
        <button class="draft" @click="saveDraft">Save draft</button>
        <button class="publication" @click="publish">Publish</button>
      </div>
    </form>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import { mapActions } from 'vuex'

export default {
  name: 'NewPosts',
  components: {
    VueEditor
  },
  data: () => ({
    message: 'To home',
    title: '',
    description: '',
    content: '',
    tags: [],
    selected: '',
    isDraft: false,
    isValidTitle: true,
    isValidDescription: true,
  }),
  methods: {
    ...mapActions(['createPost']),

    publish() {
      if (!this.$refs.form.checkValidity()) {
        return
      }

      this.createPost({
        title: this.title,
        description: this.description,
        content: this.content,
        tags: this.tags,
        selected: this.selected,
        draft: this.isDraft
      }).then(() => this.$router.push('/'))
    },

    saveDraft() {
      this.isDraft = true
      this.publish()
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.create-post {
  padding: 15px 10px;

}

.header-post {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    flex: 1;
    text-align: center;
  }
}

.btn-home {
  border: none;
  background-color: transparent;
  cursor: pointer;

  img {
    width: 60px;
    height: 60px;
  }
}

form {
  margin: 20px 0;

  input {
    font-size: 1rem;
    font-weight: 500;
    border: transparent;
    outline: none;
    width: 65%;
    border-bottom: 1px solid map-get($colors, primary);

    &::placeholder {
      color: map-get($colors, primary);
      font-weight: 700;
    }
  }

  .form-asterisk {
    font-size: 1.8rem;
  }
}

.validation {
  color: map-get($colors, error);
  animation-duration: 0.5s;
  position: absolute;
  top: -20px;
  right: 0;
}

.fadeRight-enter,
.fadeRight-enter-to {
  animation: fadeInRight 0.6s;
}

.fadeRight-leave,
.fadeRight-leave-to {
  animation: fadeOutRight 0.6s;
}

.steps-post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;
  position: relative;
}

.step-name {
  font-size: 1.2rem;
  font-weight: 700;
}

.tags {
  margin: 30px 0;

  .step-name {
    margin-right: 10px;
  }

  input {
    border: none;
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 10px;
    width: 100px;
    outline: none;
    background-color: map-get($colors, border);
  }
}

.theme {
  margin: 30px 0;

  select {
    border: none;
    padding: 10px;
    border-radius: 10px;
    font-size: 1.2rem;
    outline: none;
    margin-right: 10px;
    color: map-get($colors, primary);
    background-color: map-get($colors, border);
  }
}

.save {
  margin-bottom: 20px;

  button {
    padding: 8px 16px;
    font-size: 1.2rem;
    margin: 0 10px;
    border-radius: 4px;
    transition: all 0.5s;
    outline: none;
    background-color: transparent;
    color: map-get($colors, secondary);
    border: 1px solid map-get($colors, secondary);

    &:hover {
      color: map-get($colors, secondary-hover);
      border: 1px solid map-get($colors, secondary-hover);
    }
  }

  .draft {
    border: 1px solid #fff;
    color: map-get($colors, primary);

    &:hover {
      border: 1px solid map-get($colors, primary);
    }
  }
}

@media(min-width: #{map-get($breakpoints, small)}) {
  .create-post {
    padding: 25px;
  }

  form {
    margin: 30px 0;

    input {
      font-size: 1.4rem;
      width: 100%;
    }
  }

  .step-name {
    font-size: 1.4rem;
    width: 25%;
  }
}

@media(min-width: #{map-get($breakpoints, medium)}) {
  .create-post {
    width: 80%;
    margin: 0 auto;
  }
}
</style>
