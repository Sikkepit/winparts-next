import { useEffect, RefObject } from "react";

export function useClickOutside<T extends HTMLElement>(ref: RefObject<T | null>, callbackFn: () => void): void {
	useEffect(() => {
		const listener = (event: MouseEvent | TouchEvent) => {
			const target = event.target as Node;

			// Applicable to the remove button in the shoppingcart
			const itemGetsDeletedOnClick = !document.body.contains(target);

			if (!ref.current || itemGetsDeletedOnClick || ref.current.contains(target)) {
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
