export default defineNuxtRouteMiddleware((to, from) => {
  const { heroState } = useHeroState();

  if (to.path === "/blog") {
    heroState.value = false;
  } else {
    heroState.value = true;
  }
});
