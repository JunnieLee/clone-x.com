"use client";

import { useRouter } from "next/navigation";
import Home from "@/app/(beforeLogin)/page";

export default function Login() {
  const router = useRouter();
  router.replace("i/flow/login"); // client쪽에서 리다이렉트
  return <Home />;
}
