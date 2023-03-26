import React, { useState } from "react";
import Logo from "../assets/code.png";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyCT-h9kvampYgIppJwxHhIBKYsstWS02UY",
  authDomain: "codeforce-d2cf3.firebaseapp.com",
  projectId: "codeforce-d2cf3",
  storageBucket: "codeforce-d2cf3.appspot.com",
  messagingSenderId: "99059156456",
  appId: "1:99059156456:web:ffa3df398bf64b2488905d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Register() {
  let redirect = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");

    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        toast.success("Registeration Successful");
        redirect("/")
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Invalid Username or Password");
      });
  };
  return (
    <div className="bg-random">
      <Toaster/>
      <section className="bg-black bg-opacity-50 h-screen flex items-center">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="bg-[#2d2d2d] relative mx-auto max-w-[525px] overflow-hidden rounded-2xl py-16 px-10 text-center sm:px-12 md:px-[60px]">
                <div className="mb-10 text-center md:mb-16">
                  <a href="/" className="mx-auto inline-block max-w-[160px]">
                    <img src={Logo} alt="logo" />
                  </a>
                  <h2 className="text-2xl font-semibold text-white">
                    Register your Account
                  </h2>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-2xl bg-[#3d3d3d] py-4 px-5 text-base text-white placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-2xl bg-[#3d3d3d] py-4 px-5 text-base text-white placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                    />
                  </div>
                  <div className="mb-10">
                    <button className="w-full cursor-pointer rounded-2xl border bg-primary py-3 px-5 text-base text-white transition hover:bg-white hover:text-black">
                      Sign Up
                    </button>
                  </div>
                </form>
                <p className="text-base text-[#adadad]">
                 Already have an account?{""}
                  <Link 
                    to="/"
                    className="text-primary hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
