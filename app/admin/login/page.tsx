"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { browserSupabase } from "@/lib/supabase-auth";

export default function LoginPage() { const router = useRouter(); const [error, setError] = useState(""); const [loading, setLoading] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setLoading(true); setError(""); const form = new FormData(event.currentTarget); const { error } = await browserSupabase().auth.signInWithPassword({ email: String(form.get("email")), password: String(form.get("password")) }); if (error) { setError("Nesprávny e-mail alebo heslo."); setLoading(false); return; } router.replace("/admin"); router.refresh(); }
  return <main className="grid min-h-screen place-items-center bg-background p-6"><form onSubmit={submit} className="w-full max-w-md rounded-2xl border bg-card p-8 shadow-sm"><h1 className="text-2xl font-bold">Správa blogu</h1><p className="mt-2 text-sm text-muted-foreground">Prihláste sa ako správca.</p><label className="mt-6 block text-sm font-medium">E-mail<input required name="email" type="email" className="mt-1 w-full rounded-md border bg-background p-2" /></label><label className="mt-4 block text-sm font-medium">Heslo<input required name="password" type="password" className="mt-1 w-full rounded-md border bg-background p-2" /></label>{error ? <p className="mt-4 text-sm text-destructive">{error}</p> : null}<button disabled={loading} className="mt-6 w-full rounded-md bg-primary p-2 font-semibold text-primary-foreground">{loading ? "Prihlasovanie…" : "Prihlásiť sa"}</button></form></main>;
}
