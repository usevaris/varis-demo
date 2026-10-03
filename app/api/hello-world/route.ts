// Matches ISO 8601 date-times such as 2026-10-03T08:30:00Z or 2026-10-03T08:30:00.000-07:00
const ISO_DATE_TIME = /^\d{4}-\d{2}-\d{2}T(\d{2}):\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:?\d{2})?$/;

function getPartOfDay(hour: number) {
  if (hour >= 5 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "afternoon";
  if (hour >= 17 && hour < 21) return "evening";
  return "night";
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city")?.trim();
  const time = searchParams.get("time");

  if (!city) {
    return Response.json({ error: "city is required" }, { status: 400 });
  }

  const match = time ? ISO_DATE_TIME.exec(time) : null;
  if (!time || !match || Number.isNaN(Date.parse(time))) {
    return Response.json(
      { error: "time must be an ISO 8601 date-time, e.g. 2026-10-03T08:30:00-07:00" },
      { status: 400 },
    );
  }

  // Use the hour as written in the string (the caller's local time), not the
  // server's time zone, so "08:00-07:00" is morning wherever this runs.
  const hour = Number(match[1]);
  const partOfDay = getPartOfDay(hour);

  return Response.json({
    message: `Hello, ${city}. Isn't it such a lovely ${partOfDay} today?`,
  });
}
