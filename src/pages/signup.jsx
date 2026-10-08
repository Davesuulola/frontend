import { useForm } from 'react-hook-form';

const Signup = () => {
  const { register, handleSubmit, getValues, formState: { errors, isSubmitting }, } = useForm();
//the getValues function is used to retrieve the current value of the password field for validation purposes in the confirm password field.
//The formState object provides information about the form's state, including any validation errors and whether the form is currently being submitted.

const onSubmit = async (data) => {
    console.log(data);

    // Placeholder for the backend request. Remove the delay when the API is connected.
    //setTimeout is used to simulate a delay in the form submission process, mimicking the time it would take to send data to a backend server and receive a response. This is useful for testing the user experience during form submission.
    await new Promise((resolve) => setTimeout(resolve, 1200));
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start bg-black px-4 py-6 sm:justify-center sm:px-6 sm:py-10">
      <div className="w-full max-w-4xl rounded bg-white p-5 shadow-md sm:p-8">

<div className="mb-6 flex items-center justify-center gap-2 rounded bg-[#f5f5f5] px-4 py-3 text-center text-sm text-gray-700">
          <h2 className="mb-4 text-3xl font-semibold">Sign Up</h2>
</div>

        <form className="signup-form grid grid-cols-1 gap-x-6 gap-y-4 lg:grid-cols-2" onSubmit={handleSubmit(onSubmit)} noValidate>
          
          <div className="flex w-full flex-col">
            <label className="mb-2 block font-semibold text-gray-700" htmlFor="firstName">First Name</label>
            <input id="firstName" className="signup-input" placeholder="Enter your first name" type="text" {...register('firstName', { required: true })} required />
            <p className="error-message">Please enter your first name.</p>
          </div>

          <div className="flex w-full flex-col">
            <label className="mb-2 block font-semibold text-gray-700" htmlFor="lastName">Last Name</label>
            <input id="lastName" className="signup-input" placeholder="Enter your last name" type="text" {...register('lastName', { required: true })} required />
            <p className="error-message">Please enter your last name.</p>
          </div>

          <div className="flex w-full flex-col">
            <label className="mb-2 block font-semibold text-gray-700" htmlFor="email">Email</label>
            <input id="email" className="signup-input" placeholder="Enter your email" type="email" {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })} required />
            <p className="error-message">Please enter a valid email address.</p>
          </div>

          <div className="flex w-full flex-col">
            <label className="mb-2 block font-semibold text-gray-700" htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              className="signup-input"
              placeholder="Enter your phone number"
              type="tel"
              inputMode="tel"
              {...register('phone', {
                required: true,
                pattern: {
                  value: /^\+?[\d\s().-]+$/,
                  message: 'Enter a valid phone number.',
                },
                onChange: (event) => {
                  event.target.value = event.target.value.replace(/[^\d+()\s.-]/g, '');
                },
              })}
              required
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600" role="alert">
                {errors.phone.type === 'required'
                  ? 'Please enter your phone number.'
                  : 'Enter a valid phone number.'}
              </p>
            )}
          </div>

          <div className="flex w-full flex-col">
            <label className="mb-2 block font-semibold text-gray-700" htmlFor="password">Password</label>
            <input id="password" className="signup-input" placeholder="Enter your password" type="password" minLength="8" {...register('password', { required: true, minLength: 8 })} required />
            <p className="error-message">Enter a password with at least 8 characters.</p>
          </div>

          <div className="flex w-full flex-col">
            <label className="mb-2 block font-semibold text-gray-700" htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              className="signup-input"
              placeholder="Confirm your password"
              type="password"
              {...register('confirmPassword', {
                required: 'Please confirm your password.',
                validate: (value) =>
                  value === getValues('password') || 'Passwords do not match.',
              })}
              required
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600" role="alert">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div className="flex w-full flex-col lg:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              className={`mt-6 rounded px-4 py-2 text-white transition-colors ${
                isSubmitting
                  ? 'cursor-not-allowed bg-gray-400'
                  : 'bg-black hover:bg-gray-800'
              }`}
            >
              {isSubmitting ? 'Creating account…' : 'Sign Up'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
