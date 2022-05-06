<template>
  <section>
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
    <router-view />
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
