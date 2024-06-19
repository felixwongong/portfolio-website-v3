  const characterState = ref('Walk'); // Default state

export function useCharacterState() {
  const setState = (newState) => {
    characterState.value = newState;
  };

  const getValue = () => {
    return characterState.value;
  };

  return {
    characterState,
    setState,
    getValue,
  };
}