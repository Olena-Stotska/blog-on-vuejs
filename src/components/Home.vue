<template>
  <nav class="nav-bar">
    <div class="tags controls">
      <ul class="breadcrumbs">
        <li class="filter"><a href="#">Home</a></li>
        <li class="filter"><a href="#">Tech</a></li>
        <li class="filter"><a href="#">Politics</a></li>
        <li class="filter"><a href="#">Culture</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";


.breadcrumbs {
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    margin-left: 15px;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: map-get($colors, primary);

    &:first-child {
      margin-left: 0;
    }
  }
}

@media(min-width: #{map-get($breakpoints, small)}) {
  .breadcrumbs {
    li {
      margin-left: 24px;
    }
  }
}
</style>
