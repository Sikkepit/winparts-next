import { createPortal } from "react-dom";
import "./toast.css";
import Icon from "../icon/Icon";

export default function Toast({ message }: { message: string }) {
	return createPortal(
		<div className={`toast toast--success`}>
			<div className="toast__icon-container">
				<Icon variant="checkmark" className="fill-white size-5" />
			</div>

			<div>{message}</div>
		</div>,
		document.body,
	);
}
