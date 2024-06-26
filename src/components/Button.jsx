

function Button({ label, iconUrl, backgroundColor, borderColor, textColor, fullWidth  }) {
  return (
    <button
      className={` flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${borderColor} ${textColor} `
        : " bg-coral-red text-white border-coral-red "
    } 
    rounded-full ${
      fullWidth && "w-full"
    }  hover:bg-coral-red hover:border
    `}
    >
      {label}
      {iconUrl && (
        <img src={iconUrl} alt="arrow" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
}

export default Button