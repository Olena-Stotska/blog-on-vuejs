<template>
  <div>
    <section class="post-scale">
      <div>Like what you read? Give Lachlan Miller a round of applause.</div>
      <p>From a quick cheer to a standing ovation, clap to show how much you enjoyed this story.</p>
    </section>
    <div class="post-action">
      <div class="clap-post">
        <button type="click" class="clap" @click="counterClap">
          <i class="icon-thumbs-up"></i>
        </button>
        <transition name="clap">
          <span class="counter" v-if="isCounter">+{{ counter }}</span>
        </transition>
        <span class="counter-like">{{ totalClap }}</span>
      </div>
      <div class="comment-to-post">
        <i class="icon-comment"></i>
        <span class="counter-comment"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Applause',
  data: () => ({
    counter: 0,
    isCounter: false,
    randomClap: Math.round(Math.random()*1000)
  }),
  computed: {
    totalClap() {
      return this.counter + this.randomClap
    }
  },
  methods: {
    counterClap() {
      this.isCounter = true
      this.hideCounter()
      return this.counter < 50 ? this.counter++ : null
    },
    hideCounter() {
      clearTimeout(this.timerId)
      this.timerId = setTimeout(() => {
        this.isCounter = false
      }, 400)
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';
@import '@/styles/animation.scss';

.post-scale,
.post-action {
  margin: 20px;
}

.post-scale {
  padding-top: 20px;
  border-top: 1px solid map-get($colors, border);

  div {
    font-size: 1.2rem;
    font-weight: 600;
  }

  p {
    font-size: 0.9rem;
    font-weight: 200;
  }
}

i {
  font-size: 1.8rem;
}

.post-action {
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .clap {
    position: relative;
    outline: 1px solid transparent;
    border-radius: 50%;
    border: 1px solid map-get($colors, border);
    width: 60px;
    height: 60px;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(1);
    transition: transform 2s;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      border-radius: 50%;
      width: 60px - 1px;
      height: 60px - 1px;
    }

    &:hover {
     cursor: pointer;
     border: 1px solid map-get($colors, secondary);
     transition: border-color 0.3s ease-in;

      &:after {
        animation: shockwave 1.5s ease-in infinite;
      }
    }

    &:active {
      transform: scale(1.1);
    }
  }

  .clap-post {
    display: flex;
    align-items: center;
    position: relative;

    .counter {
      width: 30px;
      height: 30px;
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: -40px;
      font-size: 0.9rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: map-get($colors, secondary);
    }

    span {
      margin-left: 15px;
      font-size: 1.2rem;
      color: map-get($colors, primary);
    }
  }

  .comment-to-post {
    color: map-get($colors, primary);
  }
}

.clap-enter,
.clap-enter-to {
  animation: fadeInUp 0.6s;
}

.clap-leave,
.clap-leave-to {
  animation: fadeOutUp 0.6s;
}

@media(min-width: #{map-get($breakpoints, small)}) {
  .post-scale,
  .post-action {
    margin: 20px 10% 0 10%;
  }

  .post-action {
    margin-bottom: 100px;
  }
}
</style>
