import React from "react";
import "./ItemsComponent.scss";

export const ItemsComponent = () => {
	return (
		<div>
			<img />
			<p>This will be more detailed info of the item that was clicked</p>
			<span>Qty</span>
			<span>Location</span>
			<span>Notes</span>
			<span>Comments</span>
			{/* Shoud this be on a form or can I just use buttons? I want an option to delete an item and also an option to edit. If they click edit then it should bring up a popup modal for editing. */}
			<form>
				<button>Delete</button>
				<button>Edit</button>
			</form>
		</div>
	);
};
