import { useRouter } from "next/router";
import { getCsrfToken, getSession, signIn } from "next-auth/react";
import { useState, useRef } from "react";

import { toast } from "react-toastify";
import Link from "next/link";

export default function SignIn({ csrfToken }) {
  const router = useRouter();
  const [Logging, setLogging] = useState(false);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const Login = (evt) => {
    evt.preventDefault();
    setLogging(() => true);

    signIn("credentials", {
      ...{
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      },
      redirect: false,
    })
      .then(async ({ ok }) => {
        if (ok) {
          toast.success("You are now logged in.");
          router.push("/");
          return;
        }

        toast.error("Username or password incorrect.");
        setLogging(() => false);
      })
      .catch((e) => {
        toast.error("Username or password incorrect.");
        setLogging(() => false);
      });
  };

  return (
    <div className="bg-sky-50 h-[calc(100vh-150px)] p-16">
      <form
        className="flex flex-col items-center justify-center w-full max-w-xl gap-4 h-[450px] mx-auto bg-white rounded-lg shadow-lg shadow-slate-500/10 pb-6"
        onSubmit={Login}
      >
        <div className="max-w-[200px] w-full mb-6">
          <Link href="/" className="cursor-pointer">
            <img
              src="../logos/Logo - Full - Blue.svg"
              className="w-full h-full"
            />
          </Link>
        </div>

        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <div className="flex flex-col items-start w-full max-w-[75%]">
          <label className="mb-1 font-bold text-slate-500">User</label>
          <input
            className="w-full p-2 rounded bg-sky-50"
            name="username"
            type="text"
            ref={usernameRef}
          />
        </div>

        <div className="flex flex-col items-start w-full max-w-[75%]">
          <label className="mb-1 font-bold text-slate-500">Password</label>
          <input
            className="w-full p-2 rounded bg-sky-50"
            name="password"
            type="password"
            ref={passwordRef}
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-sky-400 to-sky-500 text-white font-bold py-2.5 w-full mt-3 max-w-[75%] rounded shadow-lg shadow-sky-500/20 flex justify-center items-center"
        >
          {Logging ? (
            <>
              <svg
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>{" "}
              Logging...
            </>
          ) : (
            "Log In"
          )}
        </button>
      </form>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }

  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
