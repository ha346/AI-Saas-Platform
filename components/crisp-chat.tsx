"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("f3b50818-2029-4e8c-9ee4-78c45bb76e11");
  }, []);

  return null;
};
