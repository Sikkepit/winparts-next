import { useEffect } from "react";

export function useKeydown(key: string, callbackFn: () => void): void {
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.key === key) callbackFn();
		};

		document.addEventListener("keydown", handler);

		return () => document.removeEventListener("keydown", handler);
	}, [key, callbackFn]);
}
