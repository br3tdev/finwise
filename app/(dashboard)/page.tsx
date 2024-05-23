import { UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="">
      <h1>Welcome to finwise dashboard</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
