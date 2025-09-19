// Smooth Scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Volunteer Role UI Handling
const volunterWorking = document.querySelector("#volbut");
const volList = document.querySelector("#volList");
const formDiv = document.getElementById("volunteerForm");
const roleInput = document.getElementById("vrole");

let isVisible = false;

function volunter() {
  volList.style.border = "6px solid #BE5985";
  volList.innerHTML = `
    <h4 class="text-2xl mb-7 mt-10 font-bold text-center text-[#FDFAF6] transition duration-500 ease-in-out transform hover:scale-105 hover:text-[#FAF1E6]">
      Every act counts, Select the path that resonates with you and be the spark that brings hope, making a meaningful impact in our mission.
    </h4>

    <ol class="text-left text-xl list-inside max-w-screen px-6 pb-6 mx-auto flex flex-col gap-4 cursor-pointer">
      <li data-description="Someone who provides practical assistance in tasks like arranging events, guiding patients, or assisting families with daily needs." class="bg-[#F5F5F5] text-[#670D2F] font-bold px-3 py-2 border-2 border-black rounded-lg transition duration-300 hover:bg-[#F8E7F6] hover:scale-105">
        <span class="font-bold text-black">Helper: </span> Someone who provides practical assistance in tasks like arranging events, guiding patients, or assisting families with daily needs.
      </li>
      <li data-description="A person who stands with patients and families emotionally, socially, or financially." class="bg-[#F5F5F5] text-[#670D2F] font-bold px-3 py-2 border-2 border-black rounded-lg transition duration-300 hover:bg-[#EFEFEF] hover:scale-105">
        <span class="font-bold text-black">Supporter: </span> A person who stands with patients and families emotionally, socially, or financially.
      </li>
      <li data-description="Someone who adds value by giving time, effort, skills, or resources." class="bg-[#F5F5F5] text-[#670D2F] font-bold px-3 py-2 border-2 border-black rounded-lg transition duration-300 hover:bg-[#F4F8D3] hover:scale-105">
        <span class="font-bold text-black">Contributor: </span> Someone who adds value by giving time, effort, skills, or resources.
      </li>
      <li data-description="A person who provides emotional or physical care." class="bg-[#F5F5F5] text-[#670D2F] font-bold px-3 py-2 border-2 border-black rounded-lg transition duration-300 hover:bg-[#FFF4EA] hover:scale-105">
        <span class="font-bold text-black">Caregiver: </span> A person who provides emotional or physical care.
      </li>
      <li data-description="A friendly presence for patients; someone who spends time, listens, talks, or engages in activities to reduce loneliness." class="bg-[#F5F5F5] text-[#670D2F] font-bold px-3 py-2 border-2 border-black rounded-lg transition duration-300 hover:bg-[#F8BDEB] hover:scale-105">
        <span class="font-bold text-black">Companion: </span> A friendly presence for patients someone who spends time, listens, talks, or engages in activities to reduce loneliness.
      </li>
      <li data-description="One who raises awareness, speaks for patients, and promotes their rights and needs." class="bg-[#F5F5F5] text-[#670D2F] font-bold px-3 py-2 border-2 border-black rounded-lg transition duration-300 hover:bg-[#A6D0DD] hover:scale-105">
        <span class="font-bold text-black">Advocate: </span> One who raises awareness, speaks for patients, and promotes their rights and needs.
      </li>
      <li data-description="Shows volunteering is about giving time, not just money." class="bg-[#F5F5F5] text-[#670D2F] font-bold px-3 py-2 border-2 border-black rounded-lg transition duration-300 hover:bg-[#D9D7F1] hover:scale-105">
        <span class="font-bold text-black">Donor of Time: </span> Shows volunteering is about giving time, not just money.
      </li>
      <li data-description="Someone actively participating in organized community service." class="bg-[#F5F5F5] text-[#670D2F] font-bold px-3 py-2 border-2 border-black rounded-lg transition duration-300 hover:bg-[#EEEEEE] hover:scale-105">
        <span class="font-bold text-black">Service Member: </span> Someone actively participating in organized community service.
      </li>
      <li data-description="A person working within society to uplift, guide, and support cancer patients." class="bg-[#F5F5F5] text-[#670D2F] font-bold px-3 py-2 border-2 border-black rounded-lg transition duration-300 hover:bg-[#C4E1E6] hover:scale-105">
        <span class="font-bold text-black">Community Worker: </span> A person working within society to uplift, guide, and support cancer patients.
      </li>
      <li data-description="A broad, powerful word showing compassion and service to humanity." class="bg-[#F5F5F5] text-[#670D2F] font-bold px-3 py-2 border-2 border-black rounded-lg transition duration-300 hover:bg-[#FFA900] hover:scale-105">
        <span class="font-bold text-black">Humanitarian: </span> A broad, powerful word showing compassion and service to humanity.
      </li>
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
    const fullText = e.target.textContent;
    const roleShort = fullText.split(":")[0].trim();
    roleInput.value = roleShort;

    const descriptionInput = document.getElementById("vdescription");
    descriptionInput.value = e.target.dataset.description;

    formDiv.classList.remove("hidden");
  }
});

// Blog Read More/Less
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

// Volunteer Form Submission to Backend
const volunteerForm = document.getElementById("detailsForm");
volunteerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    role: document.getElementById("vrole").value,
    role_description: document.getElementById("vdescription").value,
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

// Contact Form Submission to Backend
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

// Donation Form Submission to Backend
const donationForm = document.getElementById("donationForm");

donationForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const donor_name = document.getElementById("donorName").value.trim();
  const donor_email = document.getElementById("donorEmail").value.trim();
  const donation_amount = parseFloat(document.getElementById("donationAmount").value);

  if (!donor_name || !donor_email || !donation_amount) {
    alert("Please fill all fields");
    return;
  }

  if (donation_amount <= 0 || donation_amount > 150) {
    alert("Donation amount must be between ₹1 and ₹150.");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/donations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ donor_name, donor_email, donation_amount })
    });

    const result = await res.json();

    if (res.ok) {
      alert(`Thank you, ${donor_name}! Your donation of ₹${donation_amount} is successful. Receipt will be sent to your email: ${donor_email}.`);
      donationForm.reset();
    } else {
      alert(result.message || "Error saving donation. Please try again.");
    }
  } catch (err) {
    alert("Error connecting to server. Please try again.");
    console.error(err);
  }
});
