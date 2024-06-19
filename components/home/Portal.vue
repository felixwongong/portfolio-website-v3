<template>
  <TitledSection title="Portal">
    <div class="flex flex-row flex-wrap md:w-3/4">
      <LinkCard
        v-for="(link, index) in links"
        :key="link.href"
        :fa="link.fa"
        :href="link.href"
        :hrefInfo="link.hrefInfo"
        v-motion="{
          initial: {
            y: 100,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              delay: index * 100,
            },
          },
        }"
      />
    </div>
  </TitledSection>
</template>
<script setup>
const links = ref([
  {
    fa: "fab fa-github",
    href: "https://github.com/felixwongong",
    hrefInfo: "All the project repo",
  },
  {
    fa: "fab fa-instagram",
    href: "https://www.instagram.com/cofylife/",
    hrefInfo: "Come and check my post!",
  },
  {
    fa: "fab fa-youtube",
    href: "https://www.youtube.com/channel/UCA09RZ_b5ojSlr-5Jnvw3iA",
    hrefInfo: "Some random videos",
  },
  {
    fa: "fab fa-itch-io",
    href: "https://yuenlfelix.itch.io/",
    hrefInfo: "My Games",
  },
  {
    fa: "fab fa-node-js",
    href: "https://cofy.dev/web-cv",
    hrefInfo: "Web Development CV",
  },
  {
    fa: "fa-regular fa-hand-lizard",
    href: "https://cofy.dev/game-cv",
    hrefInfo: "Game Development CV",
  },
]);
</script>
