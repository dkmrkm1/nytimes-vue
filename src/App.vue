<template>
  <div>
    <div class="header">
      <router-link to="/">
        top
      </router-link>
    </div>
    <div class="about">
      <router-link to="about">
        about
      </router-link>
    </div>
    <div class="contact">
      <router-link to="contact">
        contact
      </router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
}
h1 {
  font-size: 1.5rem;
}
</style>
