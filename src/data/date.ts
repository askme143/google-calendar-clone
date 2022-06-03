export const SECOND_IN_MILLIS = 1000;
export const MINUTE_IN_MILLIS = 60*SECOND_IN_MILLIS;
export const HOUR_IN_MILLIS = 60*MINUTE_IN_MILLIS;
export const DAY_IN_MILLIS = 24*HOUR_IN_MILLIS;
export const WEEK_IN_MILLIS = 7*DAY_IN_MILLIS;


type WeekDay = "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" |"SAT";

export type {
  WeekDay,
};


function getStartOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

// AM 00:00 of monday of the week
function getStartOfWeek(date: Date): Date {
  const daysBefore = -((date.getDay() + 6) % 7);
  const startOfDay = getStartOfDay(date);
  return new Date(startOfDay.getTime() + daysBefore * DAY_IN_MILLIS);
}

// MON~SUN
export function getDatesOfWeek(date: Date): Date[] {
  const startOfWeek = getStartOfWeek(date);
  const offsets = Array(7).fill(0).map((_, idx) => idx);
  const datesOfWeek = offsets.map((offset) => new Date(startOfWeek.getTime() + offset * DAY_IN_MILLIS));

  return datesOfWeek;
}

// Nearest futrue time where minute is multiple of 15.
export function getAlignedDate(date: Date): Date {
  const alignedUnit = 15*MINUTE_IN_MILLIS;
  const currentTime = date.getTime();

  return new Date(currentTime - (currentTime % alignedUnit) + alignedUnit);
}

export function movePrevWeek(date: Date): Date {
  return new Date(date.getTime() - WEEK_IN_MILLIS);
}

export function moveNextWeek(date: Date): Date {
  return new Date(date.getTime() + WEEK_IN_MILLIS);
}

export function compareWithToday(date: Date): number {
  const today = new Date();
  const todayStart = getStartOfDay(today);
  const tomorrowStart = new Date(todayStart.getTime() + DAY_IN_MILLIS);

  if (date < todayStart) {
    return -1;
  } else if (date < tomorrowStart) {
    return 0;
  } else {
    return 1;
  }
}

export function isSameWeek(dateA: Date, dateB: Date): boolean {
  return getStartOfWeek(dateA).getTime() === getStartOfWeek(dateB).getTime();
}

export function dayNumToWeekDay(num: number): WeekDay | undefined {
  switch (num) {
    case 0: {return "SUN";}
    case 1: {return "MON";}
    case 2: {return "TUE";}
    case 3: {return "WED";}
    case 4: {return "THU";}
    case 5: {return "FRI";}
    case 6: {return "SAT";}
    default: {return undefined;}
  }
}

export function toKorWeekDay(weekDay: WeekDay) {
  switch (weekDay) {
    case "SUN": {return "일";}
    case "MON": {return "월";}
    case "TUE": {return "화";}
    case "WED": {return "수";}
    case "THU": {return "목";}
    case "FRI": {return "금";}
    case "SAT": {return "토";}
  }
};

