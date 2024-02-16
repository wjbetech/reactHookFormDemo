export default function InputForm() {
	return (
		<div className="flex flex-col w-full min-h-screen space-y-2">
			<h1>React Hook Form Demo</h1>
			<form className="flex flex-col gap-2">
				<input
					className="p-2 rounded-md text-[16px]"
					type="email"
					placeholder="Email"
				/>
				<input
					className="p-2 rounded-md text-[16px]"
					type="password"
					placeholder="Password"
				/>
				<input
					className="p-2 rounded-md text-[16px]"
					type="password"
					placeholder="Confirm password"
				/>
				<button
					className="bg-green-700/100 rounded-md text-[18px] p-2 hover:bg-green-600/80"
					type="submit"
				>
					Submit
				</button>
			</form>
		</div>
	);
}
