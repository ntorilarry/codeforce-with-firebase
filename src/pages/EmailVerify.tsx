import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Player } from "@lottiefiles/react-lottie-player";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

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

export default function EmailVerify() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <div>
          <div className="bg-random fixed inset-0 flex h-screen items-center justify-center overflow-hidden px-4 py-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="bg-[#2d2d2d] relative inline-flex w-full transform flex-col overflow-hidden rounded-xl bg-layer-3 text-left align-bottom shadow-2xl transition-all sm:my-8 sm:max-w-md sm:align-middle">
                <div className="flex h-16 flex-shrink-0 items-center justify-between px-6">
                  <h3 className="w-full text-white text-center text-lg font-semibold text-heading">
                    Email Verification
                  </h3>
                </div>

                <hr className="border-hr" />

                <div className="flex-1 px-6 py-5 text-center sm:py-6 sm:pb-8">
                  <Player
                    src="https://assets7.lottiefiles.com/packages/lf20_tv6zgylv.json"
                    className="player"
                    loop
                    autoplay
                    style={{ height: "250px", width: "250px" }}
                  />

                  <h4 className="mt-6 text-white text-2xl font-semibold text-heading">
                    You&apos;re all set!
                  </h4>

                  <p className="mt-6 text-white">
                    An Email Verification link has been
                    <span className="inline-block">to your email-address</span>
                  </p>

                  <a href="/"
                    type="button"
                    className="mt-8 inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-primary bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
                  >
                    Proceed to Login
                  </a>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Transition>
    </>
  );
}
