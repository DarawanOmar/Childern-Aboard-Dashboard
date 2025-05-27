"use client";

import React from "react";
import CustomDialog from "@/components/reusable/resusable-dialog";
import { LuCirclePlus } from "react-icons/lu";
import AddAdmin from "./add-admin";

function ModalAddAdmin() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen((prev) => !prev);
  };
  return (
    <CustomDialog
      open={open}
      onOpenChange={setOpen}
      icon={LuCirclePlus}
      text_button="ئادمین"
      classContent="max-w-2xl"
      title="زیادکردنی ئادمین"
      iconPlacement="left"
    >
      <AddAdmin handleClose={handleClose} />
    </CustomDialog>
  );
}

export default ModalAddAdmin;
