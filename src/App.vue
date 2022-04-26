<template>
  <a-layout>
    <a-layout>
      <a-layout-header class="layout" theme="dark">
        <div class="logo" />
        <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
        >
          <router-link to="/" v-slot="{ navigate }">
            <a-menu-item @click="navigate" key="1">Home</a-menu-item>
          </router-link>
          <router-link to="/about" v-slot="{ navigate }">
            <a-menu-item @click="navigate" key="2">About</a-menu-item>
          </router-link>
        </a-menu>
      </a-layout-header>
      <a-layout-content>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view/>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Buildheim ©2022 Created by <a href="https://github.com/dhershman1" target="_blank">Dustin Hershman</a>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup () {
    return {
      selectedKeys: ref(['1'])
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.ant-layout-content {
  background: $white;
}
</style>
