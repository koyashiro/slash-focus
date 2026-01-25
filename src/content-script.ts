import { hostConfigs } from "./host-configs";

(() => {
  const SLASH_KEY = "/";

  const hostConfig = hostConfigs[window.location.hostname];
  if (!hostConfig) {
    return;
  }

  document.addEventListener("keydown", (e) => {
    if (e.key !== SLASH_KEY) {
      return;
    }

    const activeElement = document.activeElement;
    if (
      activeElement instanceof HTMLInputElement ||
      activeElement instanceof HTMLTextAreaElement ||
      (activeElement instanceof HTMLElement && activeElement.isContentEditable)
    ) {
      return;
    }

    const inputElement = document.querySelector<HTMLInputElement>(
      hostConfig.query,
    );
    if (!inputElement) {
      return;
    }

    e.preventDefault();
    inputElement.focus();
    inputElement.setSelectionRange(
      inputElement.value.length,
      inputElement.value.length,
    );
  });
})();
