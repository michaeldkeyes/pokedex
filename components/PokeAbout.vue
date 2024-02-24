<script setup lang="ts">
interface Props {
  abilities: { ability: { name: string } }[];
  flavorText: string;
  height: number;
  weight: number;
}

const props = defineProps<Props>();

const weight = computed(() => {
  return props.weight / 10 + "kg";
});

const height = computed(() => {
  return props.height / 10 + "m";
});
</script>

<template>
  <p class="my-3 text-center text-xs font-bold">About</p>
  <div class="flex min-h-20 items-end">
    <div
      class="relative flex-1 text-center before:absolute before:inset-y-0 before:right-0 before:m-auto before:h-full before:w-[1px] before:bg-grayscaleLight"
    >
      <div class="flex items-center justify-center gap-2 px-5 py-2 text-center">
        <img class="text-center" src="~/assets/weight.svg" alt="weight" />
        <p class="my-2 text-center text-xs">{{ weight }}</p>
      </div>
      <p class="my-2 text-center text-xxs text-grayscaleMedium">Weight</p>
    </div>
    <div
      class="relative flex-1 text-center before:absolute before:inset-y-0 before:right-0 before:m-auto before:h-full before:w-[1px] before:bg-grayscaleLight"
    >
      <div class="flex items-center justify-center gap-2 px-5 py-2 text-center">
        <img
          class="rotate-90 text-center"
          src="~/assets/height.svg"
          alt="height"
        />
        <p class="my-2 text-center text-xs">{{ height }}</p>
      </div>
      <p class="my-2 text-center text-xxs text-grayscaleMedium">Height</p>
    </div>
    <div class="relative flex-1 text-center">
      <div class="flex flex-col items-center justify-center gap-0 px-1 py-2">
        <p
          v-for="(ability, index) in abilities"
          :key="index"
          class="my-2 break-all text-center text-xs capitalize"
        >
          {{ ability.ability.name }}
        </p>
      </div>
      <p class="my-2 text-center text-xxs text-grayscaleMedium">Abilities</p>
    </div>
  </div>
  <p class="my-2 text-xs text-grayScaleDark">
    {{ flavorText }}
  </p>
</template>
