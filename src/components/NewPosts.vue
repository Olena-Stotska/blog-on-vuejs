<template>
  <div class="container">
    <h1 class="title">New Post</h1>

    <form ref="form" @submit.prevent>
      <label class="steps-post">
        <div class="step-name">Title<span class="form-asterisk">*</span></div>
        <transition name="fadeRight">
          <div class="validation" v-if="!isValidTitle">Write your publication name!</div>
        </transition>
        <input type="text" name="title" v-model.trim="post.title" v-validity="isValidTitle" placeholder="Your publication’s name" maxlength="100" required >
      </label>

      <label class="steps-post">
        <div class="step-name">Description<span class="form-asterisk">*</span></div>
        <transition name="fadeRight">
          <div class="validation" v-if="!isValidDescription">Write a short Description!</div>
        </transition>
        <input type="text" name="title" v-model.trim="post.description" v-validity="isValidDescription" placeholder="Short Description" maxlength="280" required >
      </label>

      <UploadFile @uploadedImage="setImage" />

      <vue-editor v-model="post.content"></vue-editor>

      <div class="tags">
        <label class="step-name">Tags
          <input @keydown.enter.prevent="addTags" type="text" v-model.trim="post.tag" placeholder="Add tags...">
        </label>
        <div class="block-tag">
          <div class="tag-output" v-for="tag in post.tags" :key="tag">
            {{ tag }}
            <button type="button" class="delete-tag" @click="deleteTag(tag)">x</button>
          </div>
        </div>
      </div>

      <div class="theme">
         <select v-model="post.topic">
          <option disabled value="">Select a topic...</option>
          <option>Tech</option>
          <option>Politics</option>
          <option>Culture</option>
          <option>Other</option>
        </select>

        <span class="step-name">{{ post.topic }}</span>
      </div>

      <div class="save">
        <button class="draft" @click="saveDraft">Save draft</button>
        <button class="publication" @click="publish">Publish</button>
      </div>
    </form>
  </div>
</template>

<script>
import UploadFile from './UploadFile'

import { VueEditor } from 'vue2-editor'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'NewPosts',
  components: {
    VueEditor,
    UploadFile
  },
  data: () => ({
    post: {
      title: '',
      description: '',
      content: '',
      tag: '',
      tags: [],
      topic: '',
      image: '',
      draft: false
    },
    isValidTitle: true,
    isValidDescription: true,
  }),
  computed: {
    ...mapGetters(['getPostById'])
  },
  watch: {
    $route: {
      immediate: true,
      handler(value) {
        const article = this.getPostById(value.params.id)

        this.post = article[0]
      }
    }
  },
  methods: {
    ...mapActions(['createPost']),

    publish() {
      if (!this.$refs.form.checkValidity()) {
        return
      }

      this.createPost({ ...this.post })
        .then(() => this.$router.push({ name: 'drafts'}))
    },

    saveDraft() {
      this.post.draft = true
      this.publish()
    },

    addTags() {
      const tag = this.post.tag[0].toUpperCase() + this.post.tag.slice(1).toLowerCase()
      this.post.tag = ''

      if(!tag || this.post.tags.includes(tag)) {
        return
      }

      this.post.tags.push(tag)
    },

    deleteTag(tag) {
      const indexTag = this.post.tags.indexOf(tag)
      this.post.tags.splice(indexTag, 1)
    },

    setImage(image) {
      this.post.image = image
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

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
  position: absolute;
  top: -20px;
  right: 0;
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

  .tag-output {
    padding: 5px 10px;
    margin: 10px 10px 0 0;
    display: inline-flex;
    font-size: 1.2rem;
    border-radius: 10px;
    font-weight: 700;
    color: map-get($colors, primary);
    background-color: map-get($colors, border);
  }

  button {
    padding: 0 10px;
    border: none;
    padding-right: 0;
    color: map-get($colors, primary);
    background-color: transparent;
    text-shadow: 1px 1px 1px map-get($colors, primary);

    &:hover {
      color: map-get($colors, primary-hover);
    }

    &:active {
      text-shadow: none;
    }
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
    margin: 0 10px;
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
</style>
