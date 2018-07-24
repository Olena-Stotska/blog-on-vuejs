<template>
  <div>
    <section class="post-scale">
      <div>Like what you read? Give Lachlan Miller a round of applause.</div>
      <p>From a quick cheer to a standing ovation, clap to show how much you enjoyed this story.</p>
    </section>
    <div class="post-action">
      <div class="clap-post">
        <button type="click" class="clap" @click="counterClap">
          <svg :class="{ checked: isCounter }" xmlns="http://www.w3.org/2000/svg" viewBox="-549 338 100.1 125">
            <path d="M-471.2 366.8c1.2 1.1 1.9 2.6 2.3 4.1.4-.3.8-.5 1.2-.7
                    1-1.9.7-4.3-1-5.9-2-1.9-5.2-1.9-7.2.1l-.2.2c1.8.1 3.6.9 4.9
                    2.2zm-28.8 14c.4.9.7 1.9.8 3.1l16.5-16.9c.6-.6 1.4-1.1 2.1-1.5
                    1-1.9.7-4.4-.9-6-2-1.9-5.2-1.9-7.2.1l-15.5 15.9c2.3 2.2 3.1 3 4.2
                    5.3zm-38.9 39.7c-.1-8.9 3.2-17.2 9.4-23.6l18.6-19c.7-2
                    .5-4.1-.1-5.3-.8-1.8-1.3-2.3-3.6-4.5l-20.9 21.4c-10.6
                    10.8-11.2 27.6-2.3 39.3-.6-2.6-1-5.4-1.1-8.3z"/>
            <path d="M-527.2 399.1l20.9-21.4c2.2 2.2 2.7 2.6 3.5 4.5.8 1.8 1
                    5.4-1.6 8l-11.8 12.2c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7
                    0l34-35c1.9-2 5.2-2.1 7.2-.1 2 1.9 2 5.2.1 7.2l-24.7
                    25.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l28.5-29.3c2-2
                    5.2-2 7.1-.1 2 1.9 2 5.1.1 7.1l-28.5 29.3c-.5.5-.4 1.2 0
                    1.7.5.5 1.2.4 1.7 0l24.7-25.3c1.9-2 5.1-2.1 7.1-.1 2 1.9
                    2 5.2.1 7.2l-24.7 25.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7
                    0l14.6-15c2-2 5.2-2 7.2-.1 2 2 2.1 5.2.1 7.2l-27.6 28.4c-11.6
                    11.9-30.6 12.2-42.5.6-12-11.7-12.2-30.8-.6-42.7m18.1-48.4l-.7
                    4.9-2.2-4.4m7.6.9l-3.7 3.4 1.2-4.8m5.5 4.7l-4.8 1.6 3.1-3.9"/>
          </svg>
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
      }, 500)
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

    svg {
      width: 40px;
      fill: none;
      stroke: map-get($colors, secondary);
      stroke-width: 2px;

      &.checked {
        fill: map-get($colors, secondary);
        stroke: #fff;
        stroke-width: 1px;
      }
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

  .post-scale {
    div {
      font-size: 1.4rem;
    }

    p {
      font-size: 1rem;
    }
  }
}
</style>
