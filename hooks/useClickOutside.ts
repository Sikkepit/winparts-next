import { useEffect, RefObject } from "react";

export function useClickOutside<T extends HTMLElement>(ref: RefObject<T | null>, callbackFn: () => void): void {
	useEffect(() => {
		const listener = (event: MouseEvent | TouchEvent) => {
			const target = event.target as Node;

			// Applies to the remove button in the shoppingcart
			const itemGetsDeletedOnClick = !document.body.contains(target);

			if (!ref.current || itemGetsDeletedOnClick || ref.current.contains(target)) {
				return;
			}

			callbackFn();
		};

		document.addEventListener("click", listener);

		return () => {
			document.removeEventListener("click", listener);
		};
	}, [ref, callbackFn]);
}
