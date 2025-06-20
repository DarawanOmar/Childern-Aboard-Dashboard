"use client";

import React from "react";
import CustomDialog from "@/components/reusable/resusable-dialog";
import { LuCirclePlus } from "react-icons/lu";
import AddUser from "./add-user";

function ModalAddUser() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen((prev) => !prev);
  };
  return (
    <CustomDialog
      open={open}
      onOpenChange={setOpen}
      icon={LuCirclePlus}
      text_button="بەکار‌هێنەر"
      classContent="max-w-2xl"
      title="زیادکردنی بەکار‌هێنەر"
      iconPlacement="left"
    >
      <AddUser handleClose={handleClose} />
    </CustomDialog>
  );
}

export default ModalAddUser;
