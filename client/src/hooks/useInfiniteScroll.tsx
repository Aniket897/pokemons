import { useCallback, useRef } from "react";

interface UseInfiniteScrollOptions {
  isLoading: boolean;
  onIntersect: () => void;
}

const useInfiniteScroll = ({
  isLoading,
  onIntersect,
}: UseInfiniteScrollOptions) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading) return;

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && onIntersect && !isLoading) {
          onIntersect();
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [isLoading, onIntersect]
  );

  return { lastElementRef };
};

export default useInfiniteScroll;
