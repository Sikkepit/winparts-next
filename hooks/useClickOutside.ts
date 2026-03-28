import { useEffect, RefObject } from "react";

export function useClickOutside<T extends HTMLElement>(ref: RefObject<T | null>, callbackFn: () => void): void {
	useEffect(() => {
		const listener = (event: MouseEvent | TouchEvent) => {
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return;
			}

			callbackFn();
		};

		document.addEventListener("click", listener);
		document.addEventListener("touchstart", listener);

		return () => {
			document.removeEventListener("click", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [ref, callbackFn]);
}
