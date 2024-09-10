import React from "react";

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
      <p className={`font-medium ${isHeader ? "text-xs" : "text-sm"}`}>{day}</p>
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
        <CalendarDay key={`day-${i}`} day={day} isHeader />
      )),
      ...Array(firstDayOfWeek)
        .fill(null)
        .map((_, i) => (
          <div key={`empty-${i}`} className="col-span-1 row-span-1 w-8 h-8" />
        )),
      ...Array(daysInMonth)
        .fill(null)
        .map((_, i) => <CalendarDay key={`day-${i + 1}`} day={i + 1} />),
    ];

    return days;
  };

  return (
    <div className="p-6 rounded-2xl col-span-7 row-span-5 h-[220px] border border-border-primary flex flex-col hover:bg-white group overflow-clip">
      <div className="grid grid-cols-12 gap-5 h-full">
        <div className="col-span-3 text-balance">
          <h2 className="text-base font-semibold mb-4">Book a call with me</h2>
          <p className="mb-2 text-text-secondary">
            I&apos;d love to chat even if there&apos;s no agenda!
          </p>
          <a href={bookingLink} target="_blank">
            <span className="text-purple-primary/50 group-hover:text-purple-primary text-sm">
              Book a call
            </span>
          </a>
        </div>
        <div className="col-span-9 relative">
          <div className="group">
            <div className="rounded-[20px] border border-border-primary p-2 w-[550px] h-[278px]">
              <div
                className="border-2 h-full rounded-xl border-[#A5AEB81F]/10 bg-[#EDEEF0] p-3"
                style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
              >
                <div className="flex space-x-2 items-center">
                  <p className="text-gray-500 text-sm">
                    <span className="font-medium">{currentMonth}</span>,{" "}
                    <span className="text-text-tertiary">{currentYear}</span>
                  </p>
                  <span className="h-1 w-1 rounded-full bg-text-tertiary">
                    ⋅
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
    </div>
  );
}
