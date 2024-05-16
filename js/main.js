let closeToggle = document.getElementById("close-toggle");
let sidebar = document.getElementById("sidebar");

closeToggle.onclick = function () {
  if (sidebar.classList.contains("close")) {
    sidebar.classList.remove("close");
  } else {
    sidebar.classList.add("close");
  }
};



function getStars(rating) {
  // تحويل التقييم إلى عدد صحيح
  rating = Math.round(rating);

  let stars = '';
  // إضافة نجمة صلبة لكل نقطة تقييم
  for (let i = 0; i < rating; i++) {
    stars += '<i class="fas fa-star y-star"></i>';

  }
  // إضافة نجمة فارغة للنقاط المتبقية
  for (let i = 0; i < (5 - rating); i++) {
    stars += '<i class="far fa-star d-star"></i>';

  }
  return stars;
}