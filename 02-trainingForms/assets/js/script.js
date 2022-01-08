const ratings = document.querySelectorAll(".rating");

const ratingBoxes = document.querySelector(".ratingChart__step");
const lowRating = document.querySelector(".lowRating__step");
const midRating = document.querySelector(".midRating__step");
const highRating = document.querySelector(".highRating__step");

const trainingHeading = document.querySelector(".trainingHeading");
const trainingNameInput = document.querySelector(".trainingName");
const npsScoreInput = document.querySelector(".npsScore");

const lowRatingInput = document.querySelector(".lowRating__input");
const midRatingInput = document.querySelector(".midRating__input");
const highRatingInput = document.querySelector(".highRating__input");

const lowRatingBtn = document.querySelector(".lowRating__stepBtn");
const midRatingBtn = document.querySelector(".midRating__stepBtn");
const highRatingBtn = document.querySelector(".highRating__stepBtn");

const thankYou = document.querySelector(".ThankYou__step");

const learnMoreBtn = document.querySelector(".learnMoreBtn");

const numProgress = document.querySelector(".numProgress");
const progressValue = document.querySelector(".progressValue");

let activeSlide;

// functions

// updating the trainingName

let trainingName = location.href.split("training=")[1];

if (trainingName) {
  trainingName = trainingName.replaceAll("%20", " ");
  console.log(trainingName);
  trainingNameInput.value = trainingName;
  trainingHeading.textContent = `${trainingName} Survey`;
}

const postAndThankYou = () => {
  thankYou.classList.toggle("hidden");
  numProgress.textContent = 2;
  progressValue.style.width = "100%";
  postToGoogle();
};

ratings.forEach((rating) => {
  rating.addEventListener("click", (event) => {
    // updating the npsScore
    npsScoreInput.value = event.target.textContent;

    const rated = parseInt(event.target.textContent);
    if (rated < 7) {
      lowRating.classList.toggle("hidden");
      activeSlide = "low";
    } else if (rated > 8) {
      highRating.classList.toggle("hidden");
      activeSlide = "high";
    } else {
      midRating.classList.toggle("hidden");
      activeSlide = "mid";
    }

    numProgress.textContent = 1;
    progressValue.style.width = "50%";
    ratingBoxes.classList.toggle("hidden");
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;

  if (activeSlide === "low") {
    lowRatingBtn.style.opacity = 1;
    lowRatingBtn.style.transform = "translateY(0px)";
  }
  if (activeSlide === "mid") {
    midRatingBtn.style.opacity = 1;
    midRatingBtn.style.transform = "translateY(0px)";
  }
  if (activeSlide === "high") {
    highRatingBtn.style.opacity = 1;
    highRatingBtn.style.transform = "translateY(0px)";
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key !== "Backspace") return;

  console.log(lowRatingInput.value.length);

  if ((lowRatingInput.value.length = 1)) {
    lowRatingBtn.style.opacity = 0;
    lowRatingBtn.style.transform = "translateY(-40px)";
  }
  if ((midRatingInput.value.length = 1)) {
    midRatingBtn.style.opacity = 0;
    midRatingBtn.style.transform = "translateY(-40px)";
  }
  if ((highRatingInput.value.length = 1)) {
    highRatingBtn.style.opacity = 0;
    highRatingBtn.style.transform = "translateY(-40px)";
  }
});

lowRatingInput.addEventListener("input", () => {
  lowRatingBtn.style.opacity = 1;
  lowRatingBtn.style.transform = "translateY(0px)";
});
midRatingInput.addEventListener("input", () => {
  midRatingBtn.style.opacity = 1;
  midRatingBtn.style.transform = "translateY(0px)";
});
highRatingInput.addEventListener("input", () => {
  highRatingBtn.style.opacity = 1;
  highRatingBtn.style.transform = "translateY(0px)";
});

lowRatingBtn.addEventListener("click", () => {
  lowRating.classList.toggle("hidden");

  postAndThankYou();
});

midRatingBtn.addEventListener("click", () => {
  midRating.classList.toggle("hidden");
  postAndThankYou();
});

highRatingBtn.addEventListener("click", () => {
  highRating.classList.toggle("hidden");
  postAndThankYou();
});

learnMoreBtn.addEventListener("click", () => {
  location.href = "http://www.sage.exchange/blog";
});

// for sheet connection

// entry.1823724842: 1
// entry.1734149473: 2
// entry.1569876656: 3
// entry.251680733: 4
// entry.1253476587: 5

function postToGoogle() {
  var field1 = $(".trainingName").val();
  var field2 = $(".npsScore").val();
  var field3 = $(".lowRating__input").val();
  var field4 = $(".midRating__input").val();
  var field5 = $(".highRating__input").val();
  $.ajax({
    url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScgXpzt6jgmbXwKlq14mnltM_rVZUJByhi7TI_b_SJ4LmOLKg/formResponse?",
    data: {
      "entry.1823724842": field1,
      "entry.1734149473": field2,
      "entry.1569876656": field3,
      "entry.251680733": field4,
      "entry.1253476587": field5,
    },
    type: "POST",
    dataType: "xml",
    success: function () {},
    error: function () {},
  });
  return false;
}
