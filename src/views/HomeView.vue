<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <p>Home View</p>
    <preview-card>
      <template #preview-content>
        <h1>Tavern Build</h1>
        <h2>It's a Tavern! Whoa!</h2>
        <p>Something something, booze and unlimited power!</p>
      </template>
    </preview-card>
  </div>
</template>

<script>
import PreviewCard from '@/components/PreviewCard'

export default {
  name: 'HomeView',
  components: {
    PreviewCard
  }
}
</script>

    PreviewCard
