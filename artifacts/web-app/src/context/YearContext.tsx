import React, { createContext, useContext, useState, ReactNode } from "react";

type Year = "reception" | "year-1" | "year-2";

interface YearContextType {
  selectedYear: Year;
  setSelectedYear: (year: Year) => void;
}

const YearContext = createContext<YearContextType | undefined>(undefined);

export function YearProvider({ children }: { children: ReactNode }) {
  const [selectedYear, setSelectedYear] = useState<Year>("reception");

  return (
    <YearContext.Provider value={{ selectedYear, setSelectedYear }}>
      {children}
    </YearContext.Provider>
  );
}

export function useYear() {
  const context = useContext(YearContext);
  if (!context) {
    throw new Error("useYear must be used within YearProvider");
  }
  return context;
}
