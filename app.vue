<template>
  <div>123</div>
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';

const indexStore = useIndexStore();

if (process.server) {
  console.log(indexStore.getTodosUrl());
}

if (process.client) {
  console.log(indexStore.getV2ApiUrl());
}
</script>
