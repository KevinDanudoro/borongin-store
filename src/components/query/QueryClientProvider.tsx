"use client";

import React from "react";
import type { FC, PropsWithChildren } from "react";
import {
  QueryClient,
  QueryClientProvider as Provider,
} from "@tanstack/react-query";

interface QueryClientProviderProps extends PropsWithChildren {}

const queryClient = new QueryClient();

const QueryClientProvider: FC<QueryClientProviderProps> = ({ children }) => {
  return <Provider client={queryClient}>{children}</Provider>;
};

export default QueryClientProvider;
