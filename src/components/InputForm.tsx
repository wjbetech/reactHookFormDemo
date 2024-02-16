import { useForm } from "react-hook-form";

export default function InputForm() {
	// register is a callback that applies validation rules
	// handleSubmit is a standard func that receives form data if valid
	// watch API watches specified inputs and returns their values,
	// useful for rendering input value and determining what to render
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		// default values can be beneficial in typescript,
		// your inputs must match the format of the default values
		defaultValues: {
			firstName: "John",
			lastName: "Smith",
		},
	});

	const firstName = watch("firstName");
	const lastName = watch("lastName");

	return (
		<form
			className="flex flex-col gap-4 w-[400px]"
			onSubmit={handleSubmit((data) => {
				console.log("Data submitted!", data);
			})}
		>
			<input
				{...register("firstName", {
					required: "Must enter a valid, 5+ char long first name",
					minLength: { value: 3, message: "Must be >= 5 characters long!" },
				})}
				type="text"
				className="rounded-md py-2 px-4 text-[16px]"
				placeholder="First name"
			/>
			{/* check for errors, check for firstName, pass the error message */}
			<p className="text-red-600 text-sm">{errors?.firstName?.message}</p>
			<input
				{...register("lastName", {
					required: "Must enter a valid, 5+ char long last name",
					minLength: { value: 3, message: "Must be >= 5 characters long!" },
				})}
				type="text"
				className="rounded-md py-2 px-4 text-[16px]"
				placeholder="Last name"
			/>
			{/* check for errors, check for lastName, pass the error message */}
			<p className="text-red-600 text-sm">{errors?.lastName?.message}</p>
			{/* an imperfect conditional render to demo the watch api */}
			<p>
				{firstName.length > 0 &&
					lastName.length > 0 &&
					`Hey, ${firstName} ${lastName}!`}
			</p>
			<button
				type="submit"
				className="bg-green-700 rounded-md text-[18px] py-2 px-4"
			>
				Submit
			</button>
		</form>
	);
}
