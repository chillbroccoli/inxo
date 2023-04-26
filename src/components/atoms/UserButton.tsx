import { UserButton as ClerkUserButton } from "@clerk/nextjs";

export function UserButton() {
  return (
    <ClerkUserButton
      appearance={{
        elements: {
          userButtonAvatarBox: "border border-gray-400",
        },
      }}
    />
  );
}
