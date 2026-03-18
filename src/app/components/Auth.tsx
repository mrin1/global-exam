"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useStore } from "../hooks/useStore";
import { LogIn, UserPlus, AlertCircle, CheckCircle2 } from "lucide-react";
import { schema } from "@/services/validation/auth.validation";
import { toast } from "sonner";

export default function Auth() {
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const { registerUser, allUsers, login } = useStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    if (isRegisterMode) {
      const exists = allUsers.find((u) => u.email === data.email);
      if (exists) return toast.error("This email is already registered!");

      registerUser(data);
      toast.success("Registration Successful! Please login now.")
      reset();
      setIsRegisterMode(false);
    } else {
      const found = allUsers.find(
        (u) => u.email === data.email && u.password === data.password,
      );
      if (found) {
        login(data.email);
        toast.success("Login successfully")
      } else {
        toast.error("Invalid Email or Password. Try Registering first!");
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-slate-50 px-4">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md border border-slate-100">
        <div className="text-center mb-10">
          <div className="inline-block p-3 bg-blue-600 rounded-2xl mb-4 text-white">
            {isRegisterMode ? <UserPlus size={32} /> : <LogIn size={32} />}
          </div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">
            {isRegisterMode ? "Create Account" : "Sign In"}
          </h2>
          <p className="text-slate-400 text-sm font-medium mt-1">
            {isRegisterMode
              ? "Register to start billing"
              : "Enter your credentials to continue"}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">
              Email Address
            </label>
            <input
              {...register("email")}
              className={`w-full p-4 border rounded-2xl outline-none transition-all ${errors.email ? "border-red-400 bg-red-50" : "focus:border-blue-500 bg-slate-50"}`}
              placeholder="name@company.com"
            />
            {errors.email && (
              <p className="text-red-500 text-[10px] font-bold mt-1 flex items-center gap-1">
                <AlertCircle size={12} />
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">
              Password
            </label>
            <input
              type="password"
              {...register("password")}
              className={`w-full p-4 border rounded-2xl outline-none transition-all ${errors.password ? "border-red-400 bg-red-50" : "focus:border-blue-500 bg-slate-50"}`}
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-500 text-[10px] font-bold mt-1 flex items-center gap-1">
                <AlertCircle size={12} />
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-lg shadow-lg shadow-blue-200 hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            {isRegisterMode ? "REGISTER NOW" : "LOGIN TO SYSTEM"}
          </button>
        </form>

        <div className="mt-8 text-center pt-6 border-t border-slate-100">
          <button
            onClick={() => {
              setIsRegisterMode(!isRegisterMode);
              reset();
            }}
            className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
          >
            {isRegisterMode
              ? "Already have an account? Login"
              : "Don't have an account? Register Free"}
          </button>
        </div>
      </div>
    </div>
  );
}
