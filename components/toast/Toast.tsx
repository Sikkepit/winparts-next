import { RefObject, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./toast.css";

export type ToastRefType = {
	showMessage: (message: string) => void;
};

export default function Toast({ ref }: { ref: RefObject<ToastRefType | null> }) {
	const [showToast, setShowToast] = useState(false);
	const [message, setMessage] = useState<string>("");

	const timer = useRef<NodeJS.Timeout | null>(null);

	const showMessage = (newMessage: string) => {
		if (timer.current) {
			clearTimeout(timer.current);
			timer.current = null;
		}

		setShowToast(false);

		setTimeout(() => {
			setMessage(newMessage);
			setShowToast(true);

			// Nested timeout so the second assignment of setShowToast gets called on the next tick
			timer.current = setTimeout(() => {
				setShowToast(false);
				timer.current = null;
			}, 4000);
		}, 0);
	};

	useImperativeHandle(ref, () => {
		return {
			showMessage,
		};
	});

	if (!showToast) return null;

	return createPortal(
		<div className={`toast toast--success`}>
			<div className="toast__icon-container">
				<Checkmark />
			</div>

			<div>{message}</div>
		</div>,
		document.body,
	);
}

function Checkmark() {
	return (
		<svg className="fill-white size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
			<path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" />
		</svg>
	);
}
