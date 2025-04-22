"use client";
import React from "react";
import Link from "next/link";
import MyCarousel from "@/Components/register/MyCarousel";
import Registrationform from "./Registrationform";

export default function Register() {
  return (
    <div className="bg-green-700 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8">
            <img src="./assets/logo.png" className="h-16 w-16" alt="logo" />
            <h1 className="text-2xl font-semibold mt-4">NeuroDrive</h1>
            <div className="mt-6">
              <MyCarousel />
            </div>
          </div>
          <div className="p-8 bg-gray-100">
            {/* <div className="text-right">
              <span className="text-sm">Already have an account?</span>
              <Link href="/Signin" className="text-blue-500 text-sm ml-2">
                Sign in
              </Link>
            </div> */}
            <div className="mt-[20vh]">
              <h2 className="text-xl font-semibold">Create a username</h2>
              <span className="text-gray-500 text-sm">
                Choose a username for your page.
              </span>
              <div className="my-2">
                <Registrationform />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
