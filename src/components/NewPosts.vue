<template>
  <div class="create-post">
    <div class="header-post">
      <button :title="message" class="btn-home">
        <router-link to="/"><img src="../assets/img/brain.svg" alt="Logo"></router-link>
      </button>
      <h1>New Post</h1>
    </div>

    <form>
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
    </form>

    <vue-editor v-model="content"></vue-editor>

    <div class="tags">
      <label class="step-name">Tags</label>
      <input type="text" v-model.trim="tags" placeholder="Add tags...">
      <div class="tag-output"></div>
    </div>

    <div class="select">
       <select v-model="selected" id="slct">
        <option disabled value="">Select a theme...</option>
        <option>Tech</option>
        <option>Politics</option>
        <option>Culture</option>
        <option>Other</option>
      </select>

      <span>{{ selected }}</span>
    </div>

    <div class="save">
      <button class="draft" @click="saveDraft">save draft</button>
      <button class="publication" @click="publish">publish</button>
    </div>
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
    margin-left: 15px;
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
    border-bottom: 1px solid map-get($colors, border);
    outline: none;

    &::placeholder {
      color: map-get($colors, primary);
      font-weight: 700;
    }
  }

  .form-asterisk {
    font-size: 1.8rem;
  }
}

.steps-post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
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

// .theme {
//   margin: 30px 0;

  // select {
  //   background-color: map-get($colors, border);
  //   border: none;
  //   padding: 10px;
  //   border-radius: 10px;
  //   font-size: 1.2rem;
  //   outline: none;
  //   margin-right: 10px;
  // }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0 !important;
    background: #2c3e50;
    background-image: none;
  }
  /* Custom Select */
  .select {
    position: relative;
    display: block;
    width: 20em;
    height: 3em;
    line-height: 3;
    background: #2c3e50;
    overflow: hidden;
    border-radius: .25em;
  }
  select {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0 0 0 .5em;
    color: #fff;
    cursor: pointer;
  }
  select::-ms-expand {
    display: none;
  }
  /* Arrow */
  .select::after {
    content: '\25BC';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 0 1em;
    background: #34495e;
    pointer-events: none;
  }
  /* Transition */
  .select:hover::after {
    color: #f39c12;
  }
  .select::after {
    -webkit-transition: .25s all ease;
    -o-transition: .25s all ease;
    transition: .25s all ease;
  }
// }
</style>
