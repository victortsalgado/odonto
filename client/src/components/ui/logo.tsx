import { useLanguage } from "@/context/language-context";

export function Logo() {
  return (
    <div className="flex items-center">
      <svg className="h-8 w-8 text-secondary-300" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0ZM16.5 11H13.5C13.224 11 13 10.776 13 10.5V7.5C13 7.224 13.224 7 13.5 7H16.5C16.776 7 17 7.224 17 7.5V10.5C17 10.776 16.776 11 16.5 11ZM10.5 17H7.5C7.224 17 7 16.776 7 16.5V13.5C7 13.224 7.224 13 7.5 13H10.5C10.776 13 11 13.224 11 13.5V16.5C11 16.776 10.776 17 10.5 17ZM10.5 11H7.5C7.224 11 7 10.776 7 10.5V7.5C7 7.224 7.224 7 7.5 7H10.5C10.776 7 11 7.224 11 7.5V10.5C11 10.776 10.776 11 10.5 11Z" />
      </svg>
      <span className="ml-2 text-xl font-semibold">CreativeTrack</span>
    </div>
  );
}
