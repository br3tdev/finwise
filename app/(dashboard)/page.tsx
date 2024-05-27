"use client";

import { useNewAccount } from "@/features/accounts/hooks/use-new-account";

import { Button } from "@/components/ui/button";

export default function Home() {
  const { onOpen } = useNewAccount();

  return (
    <div>
      <Button variant={"outline"} onClick={onOpen}>
        Add new account
      </Button>
    </div>
  );
}
