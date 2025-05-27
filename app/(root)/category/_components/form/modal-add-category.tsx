"use client";

import React from "react";
import CustomDialog from "@/components/reusable/resusable-dialog";
import { LuCirclePlus } from "react-icons/lu";
import AddCategories from "./add-category";

function ModalAddCategories() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen((prev) => !prev);
  };
  return (
    <CustomDialog
      open={open}
      onOpenChange={setOpen}
      icon={LuCirclePlus}
      className="max-sm:w-full"
      text_button="کاتیگۆری"
      classContent="max-w-3xl"
      title="زیادکردنی کاتیگۆری"
      iconPlacement="left"
    >
      <AddCategories handleClose={handleClose} />
    </CustomDialog>
  );
}

export default ModalAddCategories;
