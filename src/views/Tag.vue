<template>
  <TagCard
    v-for="tag,index in tags"
    :key="index"
    :name="tag.name"
    :url="tag.url"
    :tag="tag.tag"
    :count="tag.count"
  ></TagCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TagCard from '@/components/TagCard.vue'
import { getTags } from '@/api'

const tags = ref<AppTagCardProps[] | undefined>(undefined)

getTags().then(data => {
  tags.value = data
})

</script>