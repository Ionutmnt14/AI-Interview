"use client";

import { signOut } from "@/lib/actions/auth.action";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  profileURL?: string;
}

const UserMenu = ({ profileURL }: UserMenuProps) => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/sign-in");
  };

  return (
    <div className="flex items-center gap-4">
      {profileURL && (
        <Image
          src={profileURL}
          alt="user-profile"
          width={40}
          height={40}
          className="rounded-full border-2 border-red-500"
        />
      )}
      <button
        onClick={handleLogout}
        className="btn-primary px-4 py-2 rounded-md bg-red-500 text-white"
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
