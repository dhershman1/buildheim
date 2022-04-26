<template>
  <a-layout>
    <a-layout>
      <a-layout-header
        class="layout"
        theme="dark"
      >
        <div class="logo">
          <router-link
            v-slot="{ navigate }"
            to="/"
          >
            <a-typography-title
              :level="3"
              @click="navigate"
            >
              Buildheim
            </a-typography-title>
          </router-link>
        </div>
        <a-menu
          v-model:selectedKeys="selectedKeys"
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
        >
          <router-link
            v-slot="{ navigate }"
            to="/"
          >
            <a-menu-item
              key="1"
              @click="navigate"
            >
              Home
            </a-menu-item>
          </router-link>
          <router-link
            v-slot="{ navigate }"
            to="/about"
          >
            <a-menu-item
              key="2"
              @click="navigate"
            >
              About
            </a-menu-item>
          </router-link>
          <router-link
            v-slot="{ navigate }"
            to="/upload"
          >
            <a-menu-item
              key="3"
              @click="navigate"
            >
              Upload
            </a-menu-item>
          </router-link>
        </a-menu>
      </a-layout-header>
      <a-layout-content>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Buildheim ©2022 Created by <a
          href="https://github.com/dhershman1"
          target="_blank"
        >Dustin Hershman</a>
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
