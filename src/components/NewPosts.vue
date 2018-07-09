<template>
  <div>
    <form>
      <label class="steps-post">
        <div>Title<span class="form-asterisk">*</span></div>
        <transition name="fadeRight">
          <div class="validation" v-if="!isValidTitle">Write your publication name!</div>
        </transition>
        <input type="text" name="title" v-model.trim="title" v-validity="isValidTitle" placeholder="Your publication’s name" maxlength="100" required >
      </label>

      <label class="steps-post">
        <div>Description<span class="form-asterisk">*</span></div>
        <transition name="fadeRight">
          <div class="validation" v-if="!isValidDescription">Write a short Description!</div>
        </transition>
        <input type="text" name="title" v-model.trim="description" v-validity="isValidDescription" placeholder="Short Description" maxlength="280" required >
      </label>
    </form>

    <vue-editor v-model="content"></vue-editor>

    <input class="tag" type="text" v-model.trim="tags" placeholder="Add tags">

    <div class="theme">
       <select v-model="selected">
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
