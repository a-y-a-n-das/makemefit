"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";


export default  function SignupForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const res = await fetch("/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (res?.ok) {
            const data = await res.json();
            console.log("User created:", data);

            await signIn("credentials", {
                email,
                password,
                redirect: true,
                callbackUrl: "/dashboard",
            });

        } else {
            alert("Invalid credentials");
        }
    }

    return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
