// تحقق من وجود الرمز المميز في المتصفح
if (!localStorage.getItem("token")) {
  // إذا لم يكن الرمز المميز موجودًا، أضف نموذج تسجيل الدخول إلى الوثيقة
  document.body.innerHTML += `
  <div class="login-form-container show">
  <div class="fas fa-times" id="close-login-btn"></div>
  <form action="">
    <h3>sign in</h3>
    <span>username</span>
    <input type="email" name="email" class="box" placeholder="enter your email" id="">
    <span>password</span>
    <input type="password" name="password" class="box" placeholder="enter your password" id="">
    <div class="checkbox">
      <input type="checkbox" name="" id="remmember-me">
      <label for="remmember-me">remmember me</label>
    </div>
    <div class="message-serv2"></div>
    <input type="submit" value="sign in">
  </form>
</div>

  `;
}

// function signIn() {
document
  .querySelector(".login-form-container form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    // استخدم FormData لجمع البيانات من النموذج
    const formData = new FormData(this);
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(
      JSON.stringify({
        email,
        password,
      })
    );

    const response = await fetch(
      "https://gara4ko-p8wm.onrender.com/api/v1/auth/signIn",
      {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),

        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log("#===>token", data.token);
    if (data?.success) {
      localStorage.setItem("token", JSON.stringify(data.token));
      location.reload();
    } else {
      console.log(data);
      document.querySelector(".message-serv2").innerText =
        "wrong email or password";
    }
  });

// }

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

  let stars = "";
  // إضافة نجمة صلبة لكل نقطة تقييم
  for (let i = 0; i < rating; i++) {
    stars += '<i class="fas fa-star y-star"></i>';
  }
  // إضافة نجمة فارغة للنقاط المتبقية
  for (let i = 0; i < 5 - rating; i++) {
    stars += '<i class="far fa-star d-star"></i>';
  }
  return stars;
}
