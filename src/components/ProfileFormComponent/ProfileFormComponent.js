import React from "react";
import "./ProfileFormComponent.scss";

export const ProfileFormComponent = () => {
	return (
		<div>
			<span>Your details</span>
			<form>
				<label>First Name</label>
				<input type="text" name="firstName" />
				<label>Last Name</label>
				<input type="text" name="lastName" />
				<label>
					Private Profile?
					<select name="privateProfile">
						<option value="Yes">Yes</option>
						<option value="No">No</option>
					</select>
				</label>
			</form>
		</div>
	);
};
