"use client";

import React from "react";
import CustomDialog from "@/components/reusable/resusable-dialog";
import { LuCirclePlus } from "react-icons/lu";
import AddAlphaBet from "./add-alpha-bet";

function ModalAddAlphaBet() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen((prev) => !prev);
  };
  return (
    <CustomDialog
      open={open}
      onOpenChange={setOpen}
      icon={LuCirclePlus}
      text_button="ئەلف و بێ"
      classContent="max-w-2xl"
      title="زیادکردنی ئەلف و بێ"
      iconPlacement="left"
    >
      <AddAlphaBet handleClose={handleClose} />
    </CustomDialog>
  );
}

export default ModalAddAlphaBet;
