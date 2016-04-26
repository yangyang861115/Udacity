//$("#main").append("Yang Yang");
//[string].replace([old], [new]);
//var formattedName = HTMLheaderName.replace("%data%", "Yang Yang");
//var formattedRole = HTMLheaderRole.replace("%data%", "MIS Student");
//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);
//s.toUpperCase()  s.slice(start, [end]) s.join(" ") s.split(" ") 
//arr.slice(start, [end])   arr.length arr.pop() arr.push()
var charEscape = function (_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};


//bio information
var bio = {
    "name": "Yang Yang",
    "role": "MIS Student",
    "contact_info": {
        "mobile": "812-3613408",
        "email": "yangyang861115@gmail.com",
        "github": "yangyang861115",
        "location": "San Jose, CA",
        "blog": "www.yangyangsite.com"
    },
    "bioPic": "images/me.png",
    "message": "Welcome to my page!",
    "skills": ["HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "AngularJS", "PHP", "SQL", "Unix", "Python", "Java", "Github"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.message);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);


var formattedContactGeneric = HTMLcontactGeneric.replace("%data%", bio.contact_info.email)
    .replace("%contact%", "general contact");
$("#topContacts").append(formattedContactGeneric);


var formattedMobile = HTMLmobile.replace("%data%", bio.contact_info.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contact_info.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact_info.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contact_info.blog);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact_info.location);
var contacts = formattedMobile+ formattedEmail + formattedGithub + formattedBlog+formattedLocation;
$("#topContacts").append(contacts);
$("#footerContacts").append(contacts);


if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var idx in bio.skills) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[idx]);
        $("#skills").append(formattedSkills);
    }

}

//work experience
var work = {
    "jobs": [
        {
            "job_description": "Upgraded an old version website for event registrations into a single page web application with a new protocol that uses Model View Controller architecture by AngularJS, Bootstrap and PHP. Upgraded the website into a responsive and user friendly website by using Bootstrap and JQuery",
            "employer": "Campus Crusade for Christ (Cru)",
            "starts": "December 2015",
            "years": "6 months",
            "city": "Bloomington, IN",
            "title": "Web Developer"
    },
        {
            "job_description": "Assist students and faculty with using technology equipment, troubleshoot user problems. Maintain the Information Commons space",
            "employer": "School of Informatics and Computing, Indiana University Bloomington",
            "starts": "January 2015",
            "years": "1.5 years",
            "city": "Bloomington, IN",
            "title": "ILS Technology Consultant"
    },
        {
            "job_description": "Developed official website for IU SALSA lab by using HTML, CSS, JavaScript. http://salsaproj.indiana.edu/Salsahpc. Helped web page owner evaluate, update, and maintain web content",
            "employer": "School of Informatics and Computing, Indiana University Bloomington",
            "starts": "January 2015",
            "years": "6 months",
            "city": "Bloomington, IN",
            "title": "Web Front End Developer"
    },
        {
            "job_description": "Provided financial services to banking customers. Collected customer feedback and made process changes to exceed customer satisfaction goals",
            "employer": "Industrial and Commercial Bank",
            "starts": "August 2009",
            "years": "2 years",
            "city": "Suzhou, Jiangsu, China",
            "title": "Banker"
    }

]
};

function displayWork() {
    for (var i in work.jobs) {

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].years);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].city);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].job_description);
        var job = formattedEmployer + formattedWorkTitle + formattedWorkDates + formattedWorkLocation + formattedWorkDescription;

        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(job);
        //$("#workExperience .work-entry").last().html(job);
    }
}
displayWork();

//education

var education = {
    "schools": [
        {
            "schoolName": "Indiana University Bloomington",
            "dates": "January 2015 - July 2016",
            "degree": "Master",
            "major": "Information Science",
            "city": "Bloomington, IN"

        }, {
            "schoolName": "Nanjing Audit University",
            "dates": "August 2005 - July 2009",
            "degree": "Bachelor",
            "major": "Auditing",
            "city": "Nanjing, Jiangsu, China"
        }],
    "onlineCourses": [
        {
            "title": "JavaScript Crash Course",
            "school": "Udacity",
            "dates": "2016",
            "url": "https://classroom.udacity.com/courses/ud804"
        }
    ]
};

for (var i in education.schools) {

    var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].schoolName);
    var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].city);
    var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
    var school = formattedschoolName + formattedschoolDegree + formattedschoolDates + formattedschoolLocation + formattedschoolMajor;
    $("#education").append(HTMLschoolStart);
    $("#education .education-entry").last().html(school);
}

//projects
var projects = {
    projects: [
        {
            "title": "sample project 1",
            "dates": "2016",
            "description": "lorem sdlfj ldfk",
            "images": ["images/p1-1.jpg", "images/p1-2.jpg"]
        },
        {
            "title": "sample project 2",
            "dates": "2016",
            "description": "lorem sdlfj dsafsfsa ldfk",
            "images": ["images/p2-1.jpg", "images/p2-2.gif"]
        }
   ]
};

projects.display = function () {
    for (var i in projects.projects) {
        var project = projects.projects[i];
        $("#projects").append(HTMLprojectStart);

        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedprojectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.description);
        
        
        var p = formattedprojectTitle + formattedprojectDates + formattedprojectDescription;
        if(project.images.length > 0) {
            for (var j in project.images) {
                var img = project.images[j];
                var formattedprojectImage = HTMLprojectImage.replace("%data%", img);
                p += formattedprojectImage;
            }
        }
        
        $(".project-entry:last").append(p);
    }
}

projects.display();

$("#main").append(internationalizeButton);

function inName(name) {
    console.log(name);
    var first = name.trim().split(" ")[0];
    var last = name.trim().split(" ")[1];
    var f = first.slice(0, 1).toUpperCase() + first.slice(1).toLowerCase();
    var l = last.toUpperCase();
    return f + " " + l;
}


$("#mapDiv").append(googleMap);