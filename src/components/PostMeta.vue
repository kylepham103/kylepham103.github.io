<template>
  <div class="post-meta">
    <time
      :dateTime="post.date"
      itemprop="dateModified"
      :content="post.date"
    >{{ post.date }}</time>,
    <template v-if="post.timeToRead">
      <strong>{{ post.timeToRead }} min read</strong>.
    </template>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style lang="scss">
.post-meta {
  font-size: 0.8em;
  opacity: 0.8;
}
</style>
