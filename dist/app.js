// ------------------------
// Smooth Scroll for all anchor links
// ------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ------------------------
// Volunteer Role UI Handling
// ------------------------
const volunterWorking = document.querySelector("#volbut");
const volList = document.querySelector("#volList");
const formDiv = document.getElementById("volunteerForm");
const roleInput = document.getElementById("vrole");

let isVisible = false;

function volunter() {
  volList.style.border = "6px solid #BE5985";
  volList.innerHTML = `
  <h4 class="text-2xl mb-7 mt-10 font-bold text-center text-[#FDFAF6] transition duration-500 ease-in-out transform hover:scale-105 hover:text-[#FAF1E6]">
Every act counts, Select the path that resonates with you and be the spark that brings hope, making a meaningful impact in our mission.</h4>

<ol class="text-left text-xl list-inside max-w-screen px-6 pb-6 mx-auto flex flex-col gap-4 cursor-pointer">
  <li class="bg-[#F5F5F5] text-[#670D2F] font-bold px-3 py-2 border-2 border-black rounded-lg transition duration-300 hover:bg-[#F8E7F6] hover:scale-105"> <span class="font-bold text-black">1.Helper: </span> Someone who provides practical assistance in tasks like arranging events, guiding patients, or assisting families with daily needs.</li>
  <li class="bg-[#F5F5F5] text-[#670D2F] font-bold px-3 py-2 border-2 border-black rounded-lg transition duration-300 hover:bg-[#EFEFEF] hover:scale-105"> <span class="font-bold text-black">2.Supporter: </span> A person who stands with patients and families emotionally, socially, or financially.</li>
  <li class="bg-[#F5F5F5] text-[#670D2F] font-bold px-3 py-2 border-2 border-black rounded-lg transition duration-300 hover:bg-[#F4F8D3] hover:scale-105"> <span class="font-bold text-black">3.Contributor: </span> Someone who adds value by giving time, effort, skills, or resources.</li>
  <li class="bg-[#F5F5F5] text-[#670D2F] font-bold px-3 py-2 border-2 border-black rounded-lg transition duration-300 hover:bg-[#FFF4EA] hover:scale-105"> <span class="font-bold text-black">4.Caregiver: </span> A person who provides emotional or physical care.</li>
  <li class="bg-[#F5F5F5] text-[#670D2F] font-bold px-3 py-2 border-2 border-black rounded-lg transition duration-300 hover:bg-[#F8BDEB] hover:scale-105"> <span class="font-bold text-black">5.Companion: </span> A friendly presence for patients someone who spends time, listens, talks, or engages in activities to reduce loneliness.</li>
  <li class="bg-[#F5F5F5] text-[#670D2F] font-bold px-3 py-2 border-2 border-black rounded-lg transition duration-300 hover:bg-[#A6D0DD] hover:scale-105"> <span class="font-bold text-black">6.Advocate: </span> One who raises awareness, speaks for patients, and promotes their rights and needs.</li>
  <li class="bg-[#F5F5F5] text-[#670D2F] font-bold px-3 py-2 border-2 border-black rounded-lg transition duration-300 hover:bg-[#D9D7F1] hover:scale-105"> <span class="font-bold text-black">7.Donor of Time: </span> Shows volunteering is about giving time, not just money.</li>
  <li class="bg-[#F5F5F5] text-[#670D2F] font-bold px-3 py-2 border-2 border-black rounded-lg transition duration-300 hover:bg-[#EEEEEE] hover:scale-105"> <span class="font-bold text-black">8.Service Member: </span> Someone actively participating in organized community service.</li>
  <li class="bg-[#F5F5F5] text-[#670D2F] font-bold px-3 py-2 border-2 border-black rounded-lg transition duration-300 hover:bg-[#C4E1E6] hover:scale-105"> <span class="font-bold text-black">9.Community Worker: </span> A person working within society to uplift, guide, and support cancer patients.</li>
  <li class="bg-[#F5F5F5] text-[#670D2F] font-bold px-3 py-2 border-2 border-black rounded-lg transition duration-300 hover:bg-[#FFA900] hover:scale-105"> <span class="font-bold text-black">10.Humanitarian: </span> A broad, powerful word showing compassion and service to humanity.</li>
</ol>
  `;
}

volunterWorking.addEventListener("click", () => {
  if (!isVisible) {
    volunter();
    isVisible = true;
  } else {
    volList.innerHTML = "";   
    volList.style.border = "none"; 
    isVisible = false;
  }
});

// Show form when clicking on volunteer role
volList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    roleInput.value = e.target.textContent;
    formDiv.classList.remove("hidden");
  }
});

// ------------------------
// Blog Read More/Less
// ------------------------
const blogButton = document.querySelectorAll(".blogbut");
const blogContent = document.querySelectorAll(".blog-content");

blogButton.forEach((button, index) => {
  button.addEventListener("click", () => {
    const content = blogContent[index];
    if (content.classList.contains("hidden")) {
      content.classList.remove("hidden");
      button.textContent = "Read Less";
    } else {
      content.classList.add("hidden");
      button.textContent = "Read More";
    }
  });
});

// ------------------------
// Volunteer Form Submission to Backend
// ------------------------
const volunteerForm = document.getElementById("detailsForm");
volunteerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const data = {
    role: document.getElementById("vrole").value,
    name: document.getElementById("vname").value,
    age: document.getElementById("vage").value,
    email: document.getElementById("vemail").value,
    gender: document.getElementById("vgender").value
  };

  try {
    const res = await fetch("http://localhost:5000/api/volunteers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    alert(result.message || `Thank you ${data.name}! You have registered as a volunteer. 💖`);
    volunteerForm.reset();
    formDiv.classList.add("hidden");
  } catch (err) {
    alert("Error submitting form");
    console.error(err);
  }
});

// ------------------------
// Contact Form Submission to Backend
// ------------------------
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("username").value,
    email: document.getElementById("useremail").value,
    message: document.getElementById("suggestion").value
  };

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    alert(result.message || "Message submitted successfully!");
    contactForm.reset();
  } catch (err) {
    alert("Error submitting message");
    console.error(err);
  }
});
