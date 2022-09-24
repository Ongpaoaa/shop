<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/addproduct">AddProduct</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({ initializeCart: "cart/initializeCart" }),
  },
  created() {
    this.initializeCart(this.$store);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
https://yt3.ggpht.com/Giie-MVMy5q9K-0XjYCZoyTKC8Fx27_QyIu5jH2va4SeJBKPCvJqBDoYQkWJcNl9tDkiX61WeF0=w544-c-h544-k-c0x00ffffff-no-l90-rj
