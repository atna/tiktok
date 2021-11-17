<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <router-link to="/">
          <img src="./assets/logo.svg" alt="Tik Tok" width="118" height="42">
        </router-link>
      </div>
    </div>
  </header>
  <router-view/>
</template>

<style lang="scss">
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
}

.header {
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;
  top: 0;
  height: 60px;
  margin-bottom: 32px;
  background: #fff;
  box-shadow: 1px 1px rgb(0 0 0 / 12%);

  &__container {
    flex-grow: 1;
    max-width: 960px;
    padding: 0 16px;
  }
}

a {
  text-decoration: none;
  color: inherit;

  &:hover {
    color: rgba(254, 44, 85, 1.0);
  }
}

.placeholder-shimmer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
  animation-duration: 1.25s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #F6F6F6;
  background: linear-gradient(to right, #F6F6F6 8%, #F0F0F0 18%, #F6F6F6 33%);
  background-size: 800px 104px;
}

@keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0
  }
  100% {
    background-position: 468px 0
  }
}
</style>
