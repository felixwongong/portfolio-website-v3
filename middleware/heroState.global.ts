export default defineNuxtRouteMiddleware((to, from) => {
  const { heroState } = useHeroState();

  console.log(heroState);
  if (to.path === "/blog") {
    heroState.value = false;
  } else {
    heroState.value = true;
  }
});
