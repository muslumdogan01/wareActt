export async function subscribeEmail(email: string) {
    const res = await fetch("/api/gf-subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, hp: "" }),
    });
    return res.json() as Promise<{ok:boolean; error?:string}>;
  }
  