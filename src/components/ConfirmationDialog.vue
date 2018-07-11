<template>
  <div>
    <Modal @close="$emit('cancel')">
      <div>
        <h3>You definitely want to delete the story?</h3>
        <button class="confirm" @click.stop="$emit('confirm')">Yes</button>
        <button class="cencel" @click.stop="$emit('cancel')">No</button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from './Modal'

export default {
  name: 'ConfirmationDialog',
  components: {
    Modal
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin-top: 25px;
}

.confirm {
  margin-right: 10px;
}
</style>
