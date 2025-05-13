import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Smoothly scrolls to the element with the specified ID
 * @param elementId - The ID of the element to scroll to (without the # prefix)
 * @param options - Optional scroll behavior options
 */
export function smoothScroll(
  elementId: string,
  options: ScrollIntoViewOptions = {}
) {
  // Default options with smooth behavior
  const defaultOptions: ScrollIntoViewOptions = {
    behavior: "smooth",
    block: "start",
    ...options,
  };

  // Remove the # if it was included
  const id = elementId.startsWith("#") ? elementId.substring(1) : elementId;

  // Find the element
  const element = document.getElementById(id);

  // Scroll to it if found
  if (element) {
    // Use scrollIntoView first
    element.scrollIntoView(defaultOptions);

    // Then adjust for header height (approximately 80px)
    setTimeout(() => {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }, 10);

    return true;
  }

  return false;
}

/**
 * Handles clicks on anchor links with smooth scrolling
 * @param event - The click event
 */
export function handleSmoothScroll(event: React.MouseEvent<HTMLAnchorElement>) {
  const target = event.currentTarget;
  const href = target.getAttribute("href");

  // Only handle anchor links (those starting with #)
  if (href && href.startsWith("#")) {
    event.preventDefault();
    smoothScroll(href);
  }
}
