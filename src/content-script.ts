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

    const inputElement = document.querySelector<HTMLInputElement>(
      hostConfig.query,
    );
    if (!inputElement) {
      return;
    }

    if (
      inputElement == document.activeElement ||
      document.activeElement instanceof HTMLInputElement ||
      document.activeElement instanceof HTMLTextAreaElement
    ) {
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
