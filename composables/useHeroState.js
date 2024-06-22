const heroState = ref(true);

export function useHeroState() {
  const setState = (newState) => {
    heroState.value = newState;
  };

  const getValue = () => {
    return heroState.value;
  };

  return {
    heroState,
    setState,
    getValue,
  };
}
