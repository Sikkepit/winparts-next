import { useEffect } from "react";

export function useKeydown(key: string, callbackFn: () => void): void {
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.key === key) callbackFn();
		};

		window.addEventListener("keydown", handler);

		return () => window.removeEventListener("keydown", handler);
	}, [key, callbackFn]);
}
