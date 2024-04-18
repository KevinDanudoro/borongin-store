"use client";

import { store } from "@/store";
import React from "react";
import type { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";

interface ReduxProviderProps extends PropsWithChildren {}

const ReduxProvider: FC<ReduxProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
