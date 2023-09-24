"use client";

import { useState } from "react";

export default function AuthForm({ handleSubmit }) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   return (
      <form
         onSubmit={(e) => {
            handleSubmit(e, email, password);
         }}
      >
         <label>
            <span>Email:</span>
            <input
               required
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
         </label>

         <label>
            <span>Password:</span>
            <input
               required
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
         </label>

         <button className="btn-primary">Submit</button>
      </form>
   );
}
