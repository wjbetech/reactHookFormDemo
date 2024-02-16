// import useForm and typing utility FieldValues
import { FieldValues, useForm } from "react-hook-form";

// our actual form component
export default function InputFormTwo() {

  // define out useForm functionality
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
		getValues,
	} = useForm({
		defaultValues: {
			email: "johnsmith@gmail.com",
			password: "badpassword",
			confirmPassword: "badpassword",
		},
	});

  // sometimes this is made a util
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    await new Promise((res) => setTimeout(res, 1000));
    reset();
  }

	return (
    
    // our form component
		<form
			className="flex flex-col gap-4 w-[400px]"
      // handleSubmit takes data which validates accordingly
			onSubmit={handleSubmit(onSubmit)}
		>
      
      {/* email input */}
			<input
				{...register("email", {
					required: "Must enter a valid email address",
				})}
				type="email"
				className="rounded-md py-2 px-4 text-[16px]"
				placeholder="Email"
			/>
			<p className="text-red-600 text-sm">
				{errors?.email && "Must enter a valid email address"}
			</p>

      {/* password input */}
			<input
				{...register("password", {
					required: "Must enter a valid password",
					minLength: { 
            value: 8, 
            message: "Password must be at least 8 characters" 
          },
				})}
				type="password"
				className="rounded-md py-2 px-4 text-[16px]"
				placeholder="Password"
			/>
			<p className="text-red-600 text-sm">{errors?.password?.message}</p>

      {/* confirm password input */}
			<input
				{...register("confirmPassword", {
					required: "Must enter the same valid, 5+ char long password",
					minLength: { 
            value: 5, 
            message: "Must be >= 5 characters long!" 
          },
          // validate passwords matching using a value
          validate: (value) => 
            value === getValues("password") || "Passwords must match"
				})}
				type="password"
				className="rounded-md py-2 px-4 text-[16px]"
				placeholder="Confirm password"
			/>
			<p className="text-red-600 text-sm">{errors?.confirmPassword?.message}</p>
			<button
        // isSubmitting dynamically returns the state of submitting
        disabled={isSubmitting}
				type="submit"
				className="bg-green-700 rounded-md text-[18px] py-2 px-4"
			>
				Submit
			</button>
		</form>
	);
}
