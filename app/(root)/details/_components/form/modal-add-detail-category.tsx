"use client";

import React from "react";
import CustomDialog from "@/components/reusable/resusable-dialog";
import { LuCirclePlus } from "react-icons/lu";
import AddDetailCategories from "./add-detail-category";

function ModalAddDetailCategories() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen((prev) => !prev);
  };
  return (
    <CustomDialog
      open={open}
      onOpenChange={setOpen}
      icon={LuCirclePlus}
      text_button="دیتەیڵ کاتیگۆری "
      classContent="max-w-3xl"
      title="زیادکردنی دیتەیڵ کاتیگۆری "
      iconPlacement="left"
    >
      <AddDetailCategories handleClose={handleClose} />
    </CustomDialog>
  );
}

export default ModalAddDetailCategories;
