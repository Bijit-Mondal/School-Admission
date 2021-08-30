//navbar contents
preContents = ['Home','About',"Contact Us"];
contents = ['Academics','Admission','Administration','Resources','Facilities'];
postContents = ['Library','Online Study Portal','Online Exam Portal'];


//mobile adding
const sidenav = document.getElementById('mobile-demo');

//sidenavPreContent adding
for(i=0; i< preContents.length; i++){
  sidenavPreContent = `<li class="tab hina_mincho"><a href="${preContents[i]}">${preContents[i]}</a></li>`;
  sidenav.innerHTML += sidenavPreContent;
}
//content adding
for(i=0; i< contents.length; i++){
  var sidenavContent = `<li class="tab hina_mincho">`+
    `<div class="collapsible-header" style="margin-left:17px;">${contents[i]}</div>`+
    `<div class="collapsible-body glass_mobile">`+
      `<ul class="${contents[i].toLowerCase()}">`+
      `</ul>`+
      `</div>`+
    `</li>`
    sidenav.innerHTML += sidenavContent;
}

//post content adding
for(i=0; i< postContents.length; i++){
  sidenavPostContent = `<li class="tab hina_mincho"><a href="${postContents[i]}">${postContents[i]}</a></li>`;
  sidenav.innerHTML += sidenavPostContent;
}



//desktop adding
const desktopnav = document.getElementById('desktop-view');

//desktopnav precontent adding
for(i=0; i< preContents.length; i++){
  desktopnavPreContent = `<li class="tab hina_mincho"><a class="grey-text text-darken-3" href="${preContents[i]}">${preContents[i]}</a></li>`;
  desktopnav.innerHTML += desktopnavPreContent;
}
//content adding
for(i=0; i<contents.length; i++){
  desktopnavContent = `<li class="tab hina_mincho"><a class="dropdown-trigger grey-text text-darken-3" href="#" data-target="${contents[i].toLowerCase()}" >${contents[i]}</a></li>`;
  desktopnav.innerHTML += desktopnavContent;
}
//postcontent adding
for(i=0; i< postContents.length; i++){
  desktopnavPostContent = `<li class="tab hina_mincho"><a class="grey-text text-darken-3" href="${postContents[i]}">${postContents[i]}</a></li>`;
  desktopnav.innerHTML += desktopnavPostContent;
}



//academics contents
const academics = document.querySelectorAll('.academics');

const academicsContent = `<li class="hina_mincho"><a class="grey-text text-darken-3" href="#!"><i class="material-icons">location_city</i>Institutes</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!"><i class="material-icons">location_on</i>Centers</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!"><i class="material-icons">group</i>Faculty List</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!"><i class="material-icons">assignment</i>UG Syllabus</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!"><i class="material-icons">assignment</i>PG Syllabus</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!"><i class="material-icons">group_work</i>Project</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!"><i class="material-icons">message</i>Ordinaces</a></li>`;
for (i = 0; i < academics.length; i++) {
    academics[i].innerHTML = academicsContent;
}


//admission contents
const admission = document.querySelectorAll('.admission');

const admissionContent = `<li class="hina_mincho"><a class="grey-text text-darken-3" href="#!"><i class="material-icons">assignment_ind</i>Admissions</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!"><i class="material-icons">build</i>Courses</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!"><i class="material-icons">local_airport</i>International Students</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!"><i class="material-icons">assignment</i>Syllabus</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!"><i class="material-icons">monetization_on</i>Hostel fee Structure</a></li>`;
for (i = 0; i < admission.length; i++) {
    admission[i].innerHTML = admissionContent;
}

//administration contents
const administration = document.querySelectorAll('.administration');

const administrationContent = `<li class="hina_mincho"><a class="grey-text text-darken-3" href="#!">Visitor (Paridarshaka)</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!">Chancellor (Acharya)</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!">Rector (Pradhana)</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!">Vice Chancellor (Upacharya)</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!">Pro-Vice-Chancellor</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!">Director & Principals</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!">Proctor</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!">Registar</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!">Finance Officer</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!">Dean Of Welfare</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!">Advisor to Foreign Student</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!">University Oficers</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!">Library Officers</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!">Organogram</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!">IQAC</a></li>`;
for (i = 0; i < administration.length; i++) {
    administration[i].innerHTML = administrationContent;
}

//Resources content
const resources = document.querySelectorAll('.resources');

const resourcesContent = `<li class="hina_mincho"><a class="grey-text text-darken-3" href="#!"><i class="material-icons">replay</i>Old Online Classes</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!"><i class="material-icons">video_library</i>Videos</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!"><i class="material-icons">music_note</i>Music Board</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!"><i class="material-icons">assignment</i>E-Magazines</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!"><i class="material-icons">school</i>Publication</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!"><i class="material-icons">web</i>Administative Resources</a></li>`;
for (i = 0; i < resources.length; i++) {
    resources[i].innerHTML = resourcesContent;
}


//services content
const facilities = document.querySelectorAll('.facilities');

const facilitiesContent = `<li class="hina_mincho"><a class="grey-text text-darken-3" href="#!"><i class="material-icons">home</i>Hostel</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!"><i class="material-icons">sentiment_dissatisfied</i>Disability Support</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!"><i class="material-icons">directions_bus</i>Transport</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!"><i class="material-icons">face</i>Cafeteria</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!"><i class="material-icons">school</i>Placement Cell</a></li>
  <li class="hina_mincho"><a class="grey-text text-darken-3" href="#!"><i class="material-icons">airline_seat_flat</i>Hospital</a></li>`;
for (i = 0; i < facilities.length; i++) {
    facilities[i].innerHTML = facilitiesContent;
}
