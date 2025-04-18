import { useLanguage } from "@/context/language-context";

export function Logo() {
  return (
    <div className="flex items-center">
      <svg className="h-8 w-8 text-secondary-300" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0ZM10 3C10.552 3 11 3.448 11 4V5C11 5.552 10.552 6 10 6C9.448 6 9 5.552 9 5V4C9 3.448 9.448 3 10 3ZM15 8C15.552 8 16 8.448 16 9C16 9.552 15.552 10 15 10H14C13.448 10 13 9.552 13 9C13 8.448 13.448 8 14 8H15ZM7 14.5C7 13.672 6.328 13 5.5 13C4.672 13 4 13.672 4 14.5C4 15.328 4.672 16 5.5 16C6.328 16 7 15.328 7 14.5ZM16 14.5C16 13.672 15.328 13 14.5 13C13.672 13 13 13.672 13 14.5C13 15.328 13.672 16 14.5 16C15.328 16 16 15.328 16 14.5ZM8 9C8 7.895 8.895 7 10 7C11.105 7 12 7.895 12 9V13.5C12 14.881 10.881 16 9.5 16C8.119 16 7 14.881 7 13.5C7 12.119 8.119 11 9.5 11H10V9H8Z" />
      </svg>
      <span className="ml-2 text-xl font-semibold">DentalAuto</span>
    </div>
  );
}
