"use client";

import { useRef } from "react";

export default function CreateModal() {
	const inputRef = useRef(null);
	function handleInputFile(e) {
		e.preventDefault();
		inputRef.current.click();
	}
	return (
		<dialog id="createPost" className="modal">
			<center className="modal-box">
				<h3 className="font-bold text-md">Create new post</h3>
				<p className="py-4">Drag photos/videos here</p>
				<form>
					<input
						ref={inputRef}
						type="file"
						name="post"
						id="post"
						className="hidden"
					/>
					<button className="btn btn-info btn-md" onClick={handleInputFile}>
						Select from computer
					</button>
				</form>
			</center>
			<form method="dialog" className="modal-backdrop">
				<button>close</button>
			</form>
		</dialog>
	);
}
