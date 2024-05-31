import { useOpenAccount } from "@/features/accounts/hooks/use-open-account";

export interface IAccountColumnProps {
  account: string;
  accountId: string;
}

export default function AccountColumn({
  account,
  accountId,
}: IAccountColumnProps) {
  const { onOpen: onOpenAccount } = useOpenAccount();

  const onClick = () => {
    onOpenAccount(accountId);
  };

  return (
    <div
      onClick={onClick}
      className="flex items-center cursor-pointer hover:underline"
    >
      {account}
    </div>
  );
}
