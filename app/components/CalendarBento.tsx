import React from "react";
import { BentoCard } from "./BentoCard";

const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const CalendarDay: React.FC<{ day: number | string; isHeader?: boolean }> = ({
  day,
  isHeader,
}) => {
  const randomBgWhite =
    !isHeader && Math.random() < 0.3
      ? "bg-white/75 text-text-secondary hover:bg-white"
      : "text-text-tertiary";

  return (
    <div
      className={`col-span-1 row-span-1 w-8 h-8 flex items-center justify-center ${
        isHeader ? "" : "rounded"
      } ${randomBgWhite}`}
    >
      <span className={`font-medium ${isHeader ? "text-xs" : "text-sm"}`}>
        {day}
      </span>
    </div>
  );
};

export function CalendarBento() {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();
  const firstDayOfMonth = new Date(currentYear, currentDate.getMonth(), 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = new Date(
    currentYear,
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const bookingLink = `https://cal.com/braydon-coyer-8ayx8q/30min?month=${currentYear}-${(
    currentDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}`;

  const renderCalendarDays = () => {
    let days: React.ReactNode[] = [
      ...dayNames.map((day, i) => (
        <CalendarDay key={`header-${day}`} day={day} isHeader />
      )),
      ...Array(firstDayOfWeek).map((_, i) => (
        <div
          key={`empty-start-${i}`}
          className="col-span-1 row-span-1 w-8 h-8"
        />
      )),
      ...Array(daysInMonth)
        .fill(null)
        .map((_, i) => <CalendarDay key={`date-${i + 1}`} day={i + 1} />),
    ];

    return days;
  };

  return (
    <BentoCard height="h-[220px]" linkTo={bookingLink}>
      <div className="grid grid-cols-12 gap-5 h-full group">
        <div className="col-span-3 text-balance">
          <h2 className="text-base font-medium mb-4">Book a call with me</h2>
          <p className="mb-2 text-text-secondary">
            I&apos;d love to chat even if there&apos;s no agenda!
          </p>
        </div>
        <div className="group-hover:top-5 group-hover:-right-12 absolute -right-14 top-7 transition-all ease-out duration-500">
          <div>
            <div className="rounded-[20px] border border-border-primary group-hover:border-indigo-400 trnasition-colors duration-100 p-2 w-[550px] h-[278px]">
              <div
                className="border-2 h-full rounded-xl border-[#A5AEB81F]/10 bg-[#EDEEF0] p-3"
                style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
              >
                <div className="flex space-x-2 items-center">
                  <p className="text-gray-500 text-sm">
                    <span className="font-medium">
                      {currentMonth}, {currentYear}
                    </span>
                  </p>
                  <span className="h-1 w-1 rounded-full bg-text-tertiary">
                    &nbsp;
                  </span>
                  <p className="text-text-tertiary text-xs">30 min call</p>
                </div>
                <div className="grid grid-cols-7 grid-rows-5 gap-2 px-4 mt-4">
                  {renderCalendarDays()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
