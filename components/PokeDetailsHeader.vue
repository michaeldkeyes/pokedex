<script setup lang="ts">
interface Props {
  name: string;
  id: number;
}

const props = defineProps<Props>();

const capitalizedName = computed(() => {
  const name = props.name;

  return name.charAt(0).toUpperCase() + name.slice(1);
});

const threeDigitId = computed(() => {
  return "#" + props.id.toString().padStart(3, "0");
});
</script>

<template>
  <header class="relative z-10 px-5 pb-6 pt-5">
    <div class="flex items-center justify-between gap-x-4">
      <div class="flex items-center gap-x-2">
        <NuxtLink to="/" class="max-h-8">
          <img
            id="back-btn"
            src="~/assets/back-to-home.svg"
            alt="back to home"
          />
        </NuxtLink>
      </div>
      <div>
        <h1 data-testid="name" class="text-2xl font-bold text-white">
          {{ capitalizedName }}
        </h1>
      </div>
      <div>
        <p data-testid="id" class="text-xs font-bold text-white">
          {{ threeDigitId }}
        </p>
      </div>
    </div>
  </header>
</template>
