<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.app-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .container {
    width: 100%;
    height: 440px;
    margin-bottom: 10px;
    border: 1px solid red;
    background-color: antiquewhite;
  }
}

// Chrome隐藏滚动条
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

// span不能选中
h1, span, li {
  -webkit-user-select: none;
  user-select: none;
}
</style>
