import SignUpForm from "@/components/forms/auth/sign-up-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up to chatspace",
};

export default function SignUpPage() {
  return <SignUpForm />;
}
