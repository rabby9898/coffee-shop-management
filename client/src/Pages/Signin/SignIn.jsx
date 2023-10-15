import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
        const user = {
          email,
          lastLoggedAt: res.user?.metadata?.lastSignInTime,
        };
        fetch(
          "https://server-ifb9ch42p-fajle-rabbys-projects.vercel.app/user",
          {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })

      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="text-center py-10 w-[700px] mx-auto">
        <h1 className="text-4xl text-black font-bold">Sign In Your Account</h1>
      </div>
      <form onSubmit={handleSignIn} className="w-[600px] mx-auto">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-xl font-semibold">Email</span>
          </label>
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full focus:border focus:border-red-950 focus:outline-none"
            name="email"
          />
          <label className="label">
            <span className="label-text text-xl font-semibold">Password</span>
          </label>
          <input
            type="text"
            placeholder="Password"
            className="input input-bordered w-full focus:border focus:border-red-950 focus:outline-none"
            name="password"
          />
        </div>
        <input
          type="submit"
          value="Sign In"
          className="bg-white w-full border border-yellow-900 rounded-xl py-3 my-5"
        />
      </form>
    </div>
  );
};

export default SignIn;
