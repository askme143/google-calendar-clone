export const DAY_IN_MILLIS = 24*60*60*1000;
export const WEEK_IN_MILLIS = 7*DAY_IN_MILLIS;


type WeekDay = "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" |"SAT";

export type {
  WeekDay,
};


export function getDatesOfWeek(date: Date): Date[] {
  // date.getDay() returns 0~6 match with SUN~SAT
  const currentDay = date.getDay();

  // MON~SUN is needed
  const startOffset = -((currentDay + 6) % 7);
  const offsets = Array(7).fill(0).map((_, idx) => idx + startOffset);
  const datesOfWeek = offsets.map((offset) => new Date(date.getTime() + offset * DAY_IN_MILLIS));

  return datesOfWeek;
}

export function movePrevWeek(date: Date): Date {
  return new Date(date.getTime() - WEEK_IN_MILLIS);
}

export function moveNextWeek(date: Date): Date {
  return new Date(date.getTime() + WEEK_IN_MILLIS);
}

export function compareWithToday(date: Date): number {
  const today = new Date();
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const tomorrowStart = new Date(todayStart.getTime() + DAY_IN_MILLIS);

  if (date < todayStart) {
    return -1;
  } else if (date < tomorrowStart) {
    return 0;
  } else {
    return 1;
  }
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
