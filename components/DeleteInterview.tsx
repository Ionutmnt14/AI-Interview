"use client";

import { deleteInterviewById } from "@/lib/actions/general.action";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "./ui/button";

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    const result = await deleteInterviewById(id);
    if (result.success) {
      router.refresh();
      toast.success("Interview deleted succsessfully.");
    } else {
      toast.error("Failed to delete the interview.");
    }
  };

  return (
    <Button className="delete-btn mx-1">
      <Image
        src="/delete.svg"
        alt="delete-btn"
        width={0}
        height={0}
        className="size-5"
        onClick={handleDelete}
      />
    </Button>
  );
};

export default DeleteButton;
