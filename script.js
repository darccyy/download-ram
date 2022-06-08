var comments = [
    "God awful!",
    "Terrible!",
    "Real bad",
    "Bad",
    "Not good",
    "Decent",
  ],
  min = 3,
  max = 8;

async function test() {
  $("#display").text("Loading...");
  await F.sleep(800);
  var ram = getRAM();
  $("#display").text(
    `${ram}GB (${comments[Math.floor(((ram - min) / (max - min)) * comments.length)] || "idk"})`,
  );
}

function getRAM() {
  return F.round(
    new Math.seedrandom(getFingerprint())() * (max - min) + min,
    2,
  );
}

function getFingerprint() {
  // return new Array(20)
  //   .fill(null)
  //   .map(i => "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)])
  //   .join("");
  return (
    navigator.userAgent +
    navigator.buildID +
    navigator.languages +
    navigator.platform +
    navigator.doNotTrack +
    navigator.appName +
    navigator.maxTouchPoints +
    navigator.vendor +
    navigator.vendorSub +
    navigator.hardwareConcurrency +
    (navigator.onLine ? 1 : 0) +
    (navigator.pdfViewerEnabled ? 1 : 0) +
    (navigator.webdriver ? 1 : 0)
  );
}
