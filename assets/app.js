(function () {
  "use strict";

  document.documentElement.classList.add("js");

  const eventTime = new Date("2026-09-12T06:30:00+07:00").getTime();
  const countdown = document.getElementById("countdown");
  const units = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
  };

  function twoDigits(value) {
    return String(value).padStart(2, "0");
  }

  function updateCountdown() {
    const difference = eventTime - Date.now();

    if (difference <= 0) {
      const eventDayEnd = new Date("2026-09-12T23:59:59+07:00").getTime();
      countdown.innerHTML =
        Date.now() <= eventDayEnd
          ? '<p class="countdown-message">Hôm nay là ngày tốt nghiệp! 🎓</p>'
          : '<p class="countdown-message">Cảm ơn gia đình đã cùng Linh tạo nên một ngày thật đẹp.</p>';
      return false;
    }

    const totalSeconds = Math.floor(difference / 1000);
    units.days.textContent = twoDigits(Math.floor(totalSeconds / 86400));
    units.hours.textContent = twoDigits(Math.floor((totalSeconds % 86400) / 3600));
    units.minutes.textContent = twoDigits(Math.floor((totalSeconds % 3600) / 60));
    units.seconds.textContent = twoDigits(totalSeconds % 60);
    return true;
  }

  if (updateCountdown()) {
    const countdownTimer = window.setInterval(function () {
      if (!updateCountdown()) window.clearInterval(countdownTimer);
    }, 1000);
  }

  const revealItems = document.querySelectorAll(".reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  } else {
    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });
  }

  const calendarButton = document.getElementById("calendar-button");
  const toast = document.getElementById("toast");
  let toastTimer;

  function createCalendarFile() {
    const calendar = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Cao Hoang Linh//Graduation Invitation//VI",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      "UID:graduation-cao-hoang-linh-20260912@invitation",
      "DTSTAMP:20260906T000000Z",
      "DTSTART:20260911T233000Z",
      "SUMMARY:Lễ tốt nghiệp • Cao Hoàng Linh",
      "LOCATION:Trường Đại học FPT Đà Nẵng",
      "DESCRIPTION:Tham dự Lễ tốt nghiệp chuyên ngành Kỹ sư phần mềm của Cao Hoàng Linh.",
      "END:VEVENT",
      "BEGIN:VEVENT",
      "UID:graduation-lunch-cao-hoang-linh-20260912@invitation",
      "DTSTAMP:20260906T000000Z",
      "DTSTART:20260912T050000Z",
      "SUMMARY:Bữa cơm trưa cùng gia đình • Cao Hoàng Linh",
      "DESCRIPTION:Cùng gia đình dùng bữa trưa sau Lễ tốt nghiệp.",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([calendar], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "le-tot-nghiep-cao-hoang-linh.ics";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 1000);

    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 2800);
  }

  calendarButton.addEventListener("click", createCalendarFile);
})();
