var bio = {
  "name": "Rick Sanchez",
  "role": "Web Developer",
  "contacts": {
    "mobile": "(123) 555-4567",
    "email": "tiny.rick@ shleemail.com",
    "github": "ricksanchez",
    "twitter": "https://twitter.com/ galacticgrandpa",
    "location": "Castle Rock, Maine"
  },
  "welcomeMessage": "Peace among worlds!",
  "skills": [
    "Interdimensional Physics",
    "Xenobiology",
    "Quantum Engineering",
    "Roy: A Life Well Lived"
  ],
  "biopic": "images/rick.jpg",
  "display": function() {
    $("#header").prepend(HTMLbio);
    $("#bio").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#bio").append(HTMLnameplate);
    $("#nameplate").append(HTMLheaderName.replace("%data%", bio.name));
    $("#nameplate").append(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    $("#header").append(HTMLheaderBody);
    $("#header-body").append(HTMLheaderItem);
    $("#header-body").append(HTMLheaderItem);
    $(".header-item:first").append(HTMLskillsStart);
    for (i = 0; i < bio.skills.length; i++){
      $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
    $(".header-item:last").append(HTMLcontactStart);
    $("#main").append(HTMLarticle);
    $("article:last").addClass("lightgrey");
    $("article:last").append(HTMLcontactsFooter);
    $(".contacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $(".contacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $(".contacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $(".contacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $(".contacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#main").prepend(HTMLarticle);
    $("article:first").append(HTMLmapHeader);
  }
};

var work = {
  "jobs": [{
      "employer": "The Flesh Curtains",
      "title": "Bass Guitarist",
      "location": "Galactic Federation Homeworld",
      "dates": "1971-1974",
      "description": "Power Metal band formed with my best buds Birdperson and Squanchy."
    },
    {
      "employer": "Rick Industries",
      "title": "CEO",
      "location": "Castle Rock, Maine",
      "dates": "1975-Present",
      "description": "Mind your own business!"
    }
  ],
  "display": function() {
    $("#main").prepend(HTMLarticle);
    $("article:first").addClass("lightgrey");
    $("article:first").append(HTMLworkHeader);
    for (i = 0; i < work.jobs.length; i++){
      $("article:first").append(HTMLworkStart);
      $(".work-entry:last").append((HTMLworkEmployer.replace("%data%", work.jobs[i].employer)) + (HTMLworkTitle.replace("%data%", work.jobs[i].title)));
      $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
      $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
      $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
    }
  }
};

var projects = {
  "projects": [{
      "title": "Portal Gun",
      "dates": "1995",
      "description": "I made a handheld p- *buuUUURRP* -ortal device.",
      "images": [
        "images/portalGun.jpg",
        "images/portal.jpg"
      ]
    },
    {
      "title": "Neutrino Bomb",
      "dates": "2015",
      "description": "This bomb radiates a lethal dose of neutrinos throughout the entire earth in a fraction of a second.",
      "images": [
        "images/neutrinoBomb.jpg",
      ]
    }
  ],
  "display": function() {
    $("#main").prepend(HTMLarticle);
    $("article:first").append(HTMLprojectHeader);
    for (i = 0; i < projects.projects.length; i++){
      $("article:first").append(HTMLprojectStart);
      $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
      $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
      $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
      for (j = 0; j < projects.projects[i].images.length; j++){
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
      }
    }
  }
};


var education = {
  "schools": [{
      "name": "Cony High School",
      "location": "Augusta, Maine",
      "degree": "High School Diploma",
      "majors": [
        "General Studies"
      ],
      "dates": "1966-1970",
      "url": "http://www.augustaschools.org/schools/cony/"
    },
    {
      "name": "Galactic University",
      "location": "Galactic Federation Homeworld",
      "degree": "BS",
      "majors": [
        "Interdimensional Physics"
      ],
      "dates": "1970-1974",
      "url": "http://www.galacticschools.org/schools/GU/"
    }
  ],
  "onlineCourses": [{
    "title": "Portals and You",
    "school": "Galactic University",
    "location": "Galactic Federation Homeworld",
    "dates": "1995",
    "url": "http://www.galacticschools.org/courses/GU-portals/"
  }],
  "display": function() {
    $("#main").prepend(HTMLarticle);
    $("article:first").addClass("lightgrey");
    $("article:first").append(HTMLeducationHeader);
    for (i = 0; i < education.schools.length; i++){
      $("article:first").append(HTMLschoolStart);
      $(".education-entry:last").append((HTMLschoolName.replace("%data%", education.schools[i].name)) + (HTMLschoolDegree.replace("%data%", education.schools[i].degree)));
      $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
      $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
      for(j = 0; j < education.schools[i].majors.length; j++){
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]));
      }
    }
    $("article:first").append(HTMLonlineClasses);
    for (i = 0; i < education.onlineCourses.length; i++){
      $("article:first").append((HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title)) + (HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school)));
      $("article:first").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));
      $("article:first").append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
    }
  }
};

bio.display();
education.display();
projects.display();
work.display();

$("#mapDiv").append(googleMap);
