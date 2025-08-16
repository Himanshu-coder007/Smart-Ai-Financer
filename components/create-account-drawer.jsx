"use client";

import React, { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";

const CreateAccountDrawer = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>{children}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Create Account</DrawerTitle>
          </DrawerHeader>
          <div>
            <form>
              
            </form>
          </div>

        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default CreateAccountDrawer;
