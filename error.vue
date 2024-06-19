<template>
    <NuxtLayout>
        error {{ characterState }}
    </NuxtLayout>
</template>

<script setup>
const {characterState, setState} = useCharacterState();

setState("Walk")
</script>