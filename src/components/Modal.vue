<template>
  <transition name="modal">
    <div class="modal-mask">
      <div @click.self="$emit('close')" class="modal-wrapper">
        <div class="modal-container">
          <button class="btn-close" @click="$emit('close')"></button>
          <div class="modal-body">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Modal'
  }
</script>

<style scoped lang="scss">
@import '../styles/variables.scss';

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  min-height: 100%;
  background-color: rgba(255, 255, 255, .85);
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9998;
}

.modal-container {
  width: 100%;
  height: 100%;
  margin: 0px auto;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  transition: all .3s ease;
  background-color: map-get($colors, bg-form);
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.btn-close {
  position: absolute;
  right: 20px;
  top: 13px;
  width: 20px;
  height: 20px;
  border: none;
  outline: none;
  background-color: transparent;

  &:hover {
    opacity: 1;
  }

  &:before, &:after {
    position: absolute;
    left: 9px;
    content: ' ';
    height: 20px;
    width: 2px;
    background-color: map-get($colors, primary);
    top: -3px;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
}

@media(min-width: #{map-get($breakpoints, small)}) {
  .modal-container {
    width: 60%;
    height: auto;
    padding: 20px 25px 25px 30px;
  }

  .btn-close {
    top: 15px;
    width: 30px;
    height: 30px;

    &:before, &:after {
      height: 30px;
      top: 5;
    }
  }
}

@media(min-width: #{map-get($breakpoints, medium)}) {
  .modal-container {
    width: 50%;
  }
}

@media(min-width: #{map-get($breakpoints, large)}) {
  .modal-container {
    width: 40%;
  }
}
</style>
