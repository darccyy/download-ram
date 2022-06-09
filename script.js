console.log("This is [not] a Scam!");
var min = 3, // Minimum ram value
  max = 8, // Maximum ram value
  comments = [
    // Description of ram value
    "God awful!",
    "Terrible!",
    "Real bad",
    "Bad",
    "Not good",
    "Decent",
  ];

// Run test on button click, load
async function test() {
  $("#display").text("Loading...");
  await F.sleep(800);
  var ram = getRAM();
  $("#display").text(`${ram}GB (${getComment(ram)})`);

  showDownload();
}

// Unhide download link
function showDownload() {
  $("#download").attr("show", true);
}

// Get comment from ram value
function getComment(ram) {
  return comments[
    Math.floor(((ram - min) / (max - min)) * (comments.length - 1))
  ];
}

// Get ram value from fingerprint
function getRAM() {
  return F.round(
    new Math.seedrandom(getFingerprint())() * (max - min) + min,
    2,
  );
}

// Get fingerprint from user data
function getFingerprint() {
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
