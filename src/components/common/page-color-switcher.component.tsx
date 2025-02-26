"use client";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { useThemeProvider } from "providers/theme-context.provider";
import React, { useEffect, useState } from "react";

type TItemsColor = {
  elementClassName: string;
  color: string;
};

const itemsColor: TItemsColor[] = [
  {
    elementClassName: "blue-color-range",
    color: "#00a3e1",
  },
  {
    elementClassName: "green-color-range",
    color: "#6ac045",
  },
  {
    elementClassName: "red-color-range",
    color: "#E82A2A",
  },
  {
    elementClassName: "yellow-color-range",
    color: "#D1A71D",
  },
];

const PageColorSwitcher = () => {
  const [displayRange, setDisplayRange] = useState(false);
  const [colorRange, setColorRange] = useState("");
  const { themeSwitcher } = useThemeProvider();

  useEffect(() => {
    themeSwitcher(colorRange);
  }, [themeSwitcher, colorRange]);

  return (
    <div className="page-color-switcher-container">
      <button
        onClick={() => setDisplayRange((prev) => !prev)}
        className="cog-icon-container"
      >
        <Cog6ToothIcon height={30} width={30} />
      </button>
      {displayRange && (
        <div className="colors-range-container">
          <h4>Couleurs</h4>
          <ul>
            {itemsColor.map((itemColor) => (
              <li
                key={itemColor.elementClassName}
                className={itemColor.elementClassName}
                onClick={() => setColorRange(itemColor.color)}
              ></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PageColorSwitcher;
