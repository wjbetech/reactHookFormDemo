// import useForm and typing utility FieldValues
import { useForm } from "react-hook-form";

// zod
import { zodResolver } from "@hookform/resolvers/zod";
import { TSignUpSchema, signUpSchema } from "../schemas/signUpSchema";

// our actual form component
export default function InputFormTwo() {

  // define out useForm functionality
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<TSignUpSchema>({
		defaultValues: {
			email: "johnsmith@gmail.com",
			password: "badpassword",
			confirmPassword: "badpassword",
		},
    resolver: zodResolver(signUpSchema)
	});

  // sometimes this is made a util
  const onSubmit = async (data: TSignUpSchema) => {
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
				{...register("email", )}
				type="email"
				className="rounded-md py-2 px-4 text-[16px]"
				placeholder="Email"
			/>
			<p className="text-red-600 text-sm">
				{errors?.email && "Must enter a valid email address"}
			</p>

      {/* password input */}
			<input
				{...register("password", )}
				type="password"
				className="rounded-md py-2 px-4 text-[16px]"
				placeholder="Password"
			/>
			<p className="text-red-600 text-sm">{errors?.password?.message}</p>

      {/* confirm password input */}
			<input
				{...register("confirmPassword", )}
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
