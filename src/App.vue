<template>
  <section class="container">
    <header class="navbar">
      <router-link to="/">
        Home
      </router-link>
      <router-link to="/about">
        About
      </router-link>
      <router-link to="/upload">
        Upload
      </router-link>
      <router-link to="/profile">
        Profile
      </router-link>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>
        Made with &#128151; by <a
          href="https://github.com/dhershman1"
          target="_blank"
        >Dustin Hershman</a> &copy; 2022
      </p>
    </footer>
  </section>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.logo {
  float: left;
  width: 120px;
  height: 32px;
  margin: 16px 24px 16px 0;
  .ant-typography {
    color: $white;
  }
}

.ant-layout-content {
  background: $white;
}
</style>
