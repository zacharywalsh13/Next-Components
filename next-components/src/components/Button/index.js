"use client";
import React from "react";

const KitButton = ({
    ButtonText = "Submit",
    onClick = () => {}, // Default function that does nothing
    color = "blue", // Default color
    size = "medium", // Default size
    weight = "medium", // Default weight
    radius = "full", // Default radius
    shadow = "medium", // Default shadow
  }) => {

  const colorMapping = {
      // Blues
      sky: "bg-sky-500 hover:bg-sky-700",
      blue: "bg-blue-500 hover:bg-blue-700",
      indigo: "bg-indigo-500 hover:bg-indigo-700",
      slate: "bg-slate-500 hover:bg-slate-700",
    
      // Reds
      red: "bg-red-500 hover:bg-red-700",
      rose: "bg-rose-500 hover:bg-rose-700",
    
      // Greens
      green: "bg-green-500 hover:bg-green-700",
      teal: "bg-teal-500 hover:bg-teal-700",
    
      // Yellows/Oranges
      yellow: "bg-yellow-500 hover:bg-yellow-700",
      orange: "bg-orange-500 hover:bg-orange-700",
      amber: "bg-amber-500 hover:bg-amber-700",
    
      // Purples
      purple: "bg-purple-500 hover:bg-purple-700",
      violet: "bg-violet-500 hover:bg-violet-700",
      fuchsia: "bg-fuchsia-500 hover:bg-fuchsia-700",
    
      // Greys
      gray: "bg-gray-500 hover:bg-gray-700",
      gray: "bg-gray-500 hover:bg-gray-700",
      neutral: "bg-neutral-500 hover:bg-neutral-700",
      stone: "bg-stone-500 hover:bg-stone-700",
    
      // Other colors
      pink: "bg-pink-500 hover:bg-pink-700",
      lime: "bg-lime-500 hover:bg-lime-700",
      cyan: "bg-cyan-500 hover:bg-cyan-700",
      emerald: "bg-emerald-500 hover:bg-emerald-700",
    };


  const sizeMapping = {
    extraSmall: "py-1 px-2 text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl",
    small: "py-1 px-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl",
    medium: "py-2 px-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl",
    large: "py-3 px-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl",
    extraLarge: "py-3.5 px-7 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl",
    extraExtraLarge: "py-4 px-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl",
  };
  
  const weightMapping = {
    thin: 'font-thin md:font-extralight',
    extraLight: 'font-extralight md:font-light',
    light: 'font-light md:font-normal',
    normal: 'font-normal md:font-medium',
    medium: 'font-medium md:font-semibold',
    semibold: 'font-semibold md:font-bold',
    bold: 'font-bold md:font-extrabold',
    extrabold: 'font-extrabold md:font-black',
    black: 'font-black',
  };

  const radiusMapping = {
    none: 'rounded-none md:rounded-sm',
    small: 'rounded-sm md:rounded-md',
    medium: 'rounded-md md:rounded-lg',
    large: 'rounded-lg md:rounded-full',
    full: 'rounded-full',
  };

  const shadowMapping = {
    none: 'shadow-none md:shadow-sm',
    small: 'shadow-sm md:shadow-md',
    medium: 'shadow-md md:shadow-lg',
    large: 'shadow-lg md:shadow-xl',
    xl: 'shadow-xl',
  };

  const colorClass = colorMapping[color] || 'bg-blue-500 hover:bg-blue-700 md:bg-blue-600 md:hover:bg-blue-800';
  const sizeClass = sizeMapping[size] || 'py-2 px-4 text-base md:py-3 md:px-6 md:text-lg';
  const weightClass = weightMapping[weight] || 'font-medium md:font-semibold';
  const radiusClass = radiusMapping[radius] || 'rounded-full';
  const shadowClass = shadowMapping[shadow] || 'shadow-md md:shadow-lg';

  return (
    <button
      onClick={onClick}
      className={`${colorClass} ${sizeClass} ${weightClass} ${radiusClass} ${shadowClass} transition duration-500 ease-in-out transform hover:-translate-y-0 hover:scale-10`}
    >
      {ButtonText}
    </button>
  );
};

export default KitButton;