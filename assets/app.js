(function () {
  "use strict";

  document.documentElement.classList.add("js");

  const eventTime = new Date("2026-09-12T06:30:00+07:00").getTime();
  const eventEnd = new Date("2026-09-12T23:59:59+07:00").getTime();
  const countdown = document.getElementById("countdown");
  const fields = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
  };

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  function updateCountdown() {
    const now = Date.now();
    const distance = eventTime - now;

    if (distance <= 0) {
      countdown.innerHTML = now <= eventEnd
        ? '<p class="countdown-message">Hôm nay là ngày tốt nghiệp! 🎓</p>'
        : '<p class="countdown-message">Cảm ơn gia đình đã cùng Linh tạo nên một ngày thật đẹp.</p>';
      return false;
    }

    const total = Math.floor(distance / 1000);
    fields.days.textContent = pad(Math.floor(total / 86400));
    fields.hours.textContent = pad(Math.floor((total % 86400) / 3600));
    fields.minutes.textContent = pad(Math.floor((total % 3600) / 60));
    fields.seconds.textContent = pad(total % 60);
    return true;
  }

  if (updateCountdown()) {
    const timer = window.setInterval(function () {
      if (!updateCountdown()) window.clearInterval(timer);
    }, 1000);
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach(function (item) { item.classList.add("visible"); });
  } else {
    const observer = new IntersectionObserver(function (entries, currentObserver) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -7%", threshold: 0.08 });

    revealItems.forEach(function (item) { observer.observe(item); });
  }

    const saveButton = document.getElementById("save-calendar");
  const shareButton = document.getElementById("share-link");
  const toast = document.getElementById("toast");
  let toastTimer;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("show");
    }, 2800);
  }

  if (saveButton) {
    saveButton.addEventListener("click", function () {
      const content = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Cao Hoang Linh//Graduation Invitation//VI",
        "CALSCALE:GREGORIAN",
        "BEGIN:VEVENT",
        "UID:graduation-cao-hoang-linh-20260912@invitation",
        "DTSTAMP:20260908T000000Z",
        "DTSTART:20260911T233000Z",
        "DTEND:20260912T043000Z",
        "SUMMARY:Lễ tốt nghiệp • Cao Hoàng Linh",
        "LOCATION:Trường Đại học FPT Đà Nẵng",
        "DESCRIPTION:Tham dự Lễ tốt nghiệp Kỹ sư phần mềm của Cao Hoàng Linh.",
        "END:VEVENT",
        "BEGIN:VEVENT",
        "UID:graduation-lunch-cao-hoang-linh-20260912@invitation",
        "DTSTAMP:20260908T000000Z",
        "DTSTART:20260912T050000Z",
        "DTEND:20260912T070000Z",
        "SUMMARY:Bữa cơm trưa cùng gia đình • Cao Hoàng Linh",
        "DESCRIPTION:Cùng gia đình dùng bữa trưa sau Lễ tốt nghiệp.",
        "END:VEVENT",
        "END:VCALENDAR",
      ].join("\r\n");

      const url = URL.createObjectURL(new Blob([content], { type: "text/calendar;charset=utf-8" }));
      const link = document.createElement("a");
      link.href = url;
      link.download = "le-tot-nghiep-cao-hoang-linh.ics";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(function () { URL.revokeObjectURL(url); }, 1000);

      showToast("Đã tải lịch về thiết bị 📅");
    });
  }

  if (shareButton) {
    shareButton.addEventListener("click", async function () {
      const shareData = {
        title: "Thư Mời Lễ Tốt Nghiệp • Cao Hoàng Linh",
        text: "Trân trọng kính mời gia đình tham dự Lễ tốt nghiệp Kỹ sư phần mềm của Cao Hoàng Linh vào ngày 12/09/2026!",
        url: window.location.href,
      };

      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        try {
          await navigator.share(shareData);
          return;
        } catch (error) {
          if (error.name !== "AbortError") {
            copyToClipboard();
          }
        }
      } else {
        copyToClipboard();
      }

      function copyToClipboard() {
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(window.location.href).then(function () {
            showToast("Đã sao chép liên kết thiệp mời 🔗");
          }).catch(function () {
            fallbackCopy();
          });
        } else {
          fallbackCopy();
        }
      }

      function fallbackCopy() {
        const input = document.createElement("input");
        input.value = window.location.href;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        input.remove();
        showToast("Đã sao chép liên kết thiệp mời 🔗");
      }
    });
  }
})();
