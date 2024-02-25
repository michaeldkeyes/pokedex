<script setup lang="ts">
interface Props {
  stats: { name: string; value: number }[];
  backgroundColor: string;
  progressBarColor: string;
}

const props = defineProps<Props>();
</script>

<template>
  <p class="my-3 text-center text-xs font-bold">Base Stats</p>

  <div
    v-for="(stat, index) in props.stats"
    :key="index"
    class="flex items-center"
  >
    <p
      data-testid="stat-name"
      class="my-2 mr-2 min-w-11 border-r-[1px] border-solid border-grayscaleLight pr-2 text-right text-xs font-bold"
    >
      {{ stat.name }}
    </p>
    <p
      data-testid="stat-value"
      class="my-2 mr-2 min-w-5 text-xs text-grayScaleDark"
    >
      {{ stat.value }}
    </p>
    <progress
      class="h-1 flex-1 rounded-md"
      :value="stat.value"
      max="120"
    ></progress>
  </div>
</template>

<style lang="scss" scoped>
#stat-name {
  color: v-bind(backgroundColor);
}

progress[value] {
  appearance: none;
  border: none;
  width: 200px;
  margin: 0 10px;
  border-radius: 10em;
  background: v-bind(progressBarColor);

  //   progress[value]::-webkit-progress-bar {
  //   border-radius: 10em;
  //   background: var(--background);
  // }
  // progress[value]::-webkit-progress-value {
  //   border-radius: 10em;
  //   background: var(--color);
  // }

  &::-moz-progress-bar {
    //border-radius: 10em;
    background: v-bind(backgroundColor);
    //opacity: 1 !important;
  }
}
</style>
