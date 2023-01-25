/**
* Template Name: Medilab - v4.1.0
* Template URL: https://bootstrapmade.com/medilab-free-medical-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  let selectTopbar = select('#topbar')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.add('topbar-scrolled')
        }
      } else {
        selectHeader.classList.remove('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.remove('topbar-scrolled')
        }
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Gallery Lightbox 
   */
  const galelryLightbox = GLightbox({
    selector: '.galelry-lightbox'
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

})()

const fade_delay = 500;
let showNextQstnScreen = function(screen_id)
{
  if (screen_id == "screen-2")
  {
    $("#screen-1").fadeOut(fade_delay, function() {
      $("#screen-2").fadeIn(fade_delay);
    });
  }
  else if (screen_id == "screen-3")
  {
    if ($('input[name="age"]:checked').val() == undefined)
    {
      alert("Please select a value to proceed further");
    }
    else
    {
      $("#screen-2").fadeOut(fade_delay, function() {
        $("#screen-3").fadeIn(fade_delay);
      });
    }
  }
  else if (screen_id == "screen-4")
  {
    if ($('input[name="bmi"]:checked').val() == undefined)
    {
      alert("Please select a value to proceed further");
    }
    else
    {
      $("#screen-3").fadeOut(fade_delay, function() {
        $("#screen-4").fadeIn(fade_delay);
      });
    }
  }
  else if (screen_id == "screen-5")
  {
    if ($('input[name="waist"]:checked').val() == undefined)
    {
      alert("Please select a value to proceed further");
    }
    else
    {
      $("#screen-4").fadeOut(fade_delay, function() {
        $("#screen-5").fadeIn(fade_delay);
      });
    }
  }
  else if (screen_id == "screen-6")
  {
    if ($('input[name="activity"]:checked').val() == undefined)
    {
      alert("Please select a value to proceed further");
    }
    else
    {
      $("#screen-5").fadeOut(fade_delay, function() {
        $("#screen-6").fadeIn(fade_delay);
      });
    }
  }
  else if (screen_id == "screen-7")
  {
    if ($('input[name="eat-vegies"]:checked').val() == undefined)
    {
      alert("Please select a value to proceed further");
    }
    else
    {
      $("#screen-6").fadeOut(fade_delay, function() {
        $("#screen-7").fadeIn(fade_delay);
      });
    }
  }
  else if (screen_id == "screen-8")
  {
    if ($('input[name="meds-bp"]:checked').val() == undefined)
    {
      alert("Please select a value to proceed further");
    }
    else
    {
      $("#screen-7").fadeOut(fade_delay, function() {
        $("#screen-8").fadeIn(fade_delay);
      });
    }
  }
  else if (screen_id == "screen-9")
  {
    if ($('input[name="gluco-check"]:checked').val() == undefined)
    {
      alert("Please select a value to proceed further");
    }
    else
    {
      $("#screen-8").fadeOut(fade_delay, function() {
        $("#screen-9").fadeIn(fade_delay);
      });
    }
  }
  else if (screen_id == "screen-10")
  {
    if ($('input[name="family-hist"]:checked').val() == undefined)
    {
      alert("Please select a value to proceed further");
    }
    else
    {
      showResult();

      $("#screen-9").fadeOut(fade_delay, function() {
        $("#screen-10").fadeIn(fade_delay);
      });
    }
  }
}

let showPrevQstnScreen = function(screen_id)
{
  if (screen_id == "screen-1")
  {
    $("#screen-2").fadeOut(fade_delay, function() {
      $("#screen-1").fadeIn(fade_delay);
    });
  }
  else if (screen_id == "screen-2")
  {
    $("#screen-3").fadeOut(fade_delay, function() {
      $("#screen-2").fadeIn(fade_delay);
    });
  }
  else if (screen_id == "screen-3")
  {
    $("#screen-4").fadeOut(fade_delay, function() {
      $("#screen-3").fadeIn(fade_delay);
    });
  }
  else if (screen_id == "screen-4")
  {
    $("#screen-5").fadeOut(fade_delay, function() {
      $("#screen-4").fadeIn(fade_delay);
    });
  }
  else if (screen_id == "screen-5")
  {
    $("#screen-6").fadeOut(fade_delay, function() {
      $("#screen-5").fadeIn(fade_delay);
    });
  }
  else if (screen_id == "screen-6")
  {
    $("#screen-7").fadeOut(fade_delay, function() {
      $("#screen-6").fadeIn(fade_delay);
    });
  }
  else if (screen_id == "screen-7")
  {
    $("#screen-8").fadeOut(fade_delay, function() {
      $("#screen-7").fadeIn(fade_delay);
    });
  }
  else if (screen_id == "screen-8")
  {
    $("#screen-9").fadeOut(fade_delay, function() {
      $("#screen-8").fadeIn(fade_delay);
    });
  }
}

let calculateBMI = function()
{
  if (Number($("#bmi-cal-weight").val()) && ( (Number($("#bmi-cal-height").val()) && $('#height-unit').find(":selected").text() != "Inches" ) || ( $('#height-unit').find(":selected").text() == "Inches" && Number($("#bmi-cal-height-feet").val()) && Number($("#bmi-cal-height-inches").val() ))))
  {
    let height_for_calc = Number($("#bmi-cal-height").val());

    if ($('#height-unit').find(":selected").text() == "Inches")
    {
      height_for_calc = ( Number($("#bmi-cal-height-feet").val()) * 12 ) + Number($("#bmi-cal-height-inches").val())
      height_for_calc = (height_for_calc * 2.54);
    }
    
    let calculated_bmi = ( ( Number($("#bmi-cal-weight").val()) / height_for_calc / height_for_calc ) * 10000 );

    $("#bmi-result").text(calculated_bmi.toFixed(2).toString() + " kg/m2");

    if (calculated_bmi < 25)
    {
      $("#bmi-comment").text('Select Lower than 25 kg/m2');
    }
    else if (calculated_bmi >= 25 && calculated_bmi <= 30)
    {
      $("#bmi-comment").text('Select 25 - 30 kg/m2');
    }
    else{
      $("#bmi-comment").text('Select Higher than 30 kg/m2');
    }
  }
  else
  {
    $("#bmi-result").text('');
    $("#bmi-comment").text('');
  }
}

let showCmInchesInputs = function()
{
  if ($('#height-unit').find(":selected").text() == "Inches")
  {
    $("#inches-input").css('display', '');
    $("#bmi-cal-height").css('display', 'none');
  }
  else
  {
    $("#inches-input").css('display', 'none');
    $("#bmi-cal-height").css('display', '');
  }

  calculateBMI();
}

let showResult = function()
{
  let final_result = 0;

  final_result = Number($('input[name="age"]:checked').val());
  final_result = final_result + Number($('input[name="bmi"]:checked').val());
  final_result = final_result + Number($('input[name="waist"]:checked').val());
  final_result = final_result + Number($('input[name="activity"]:checked').val());
  final_result = final_result + Number($('input[name="eat-vegies"]:checked').val());
  final_result = final_result + Number($('input[name="meds-bp"]:checked').val());
  final_result = final_result + Number($('input[name="gluco-check"]:checked').val());
  final_result = final_result + Number($('input[name="family-hist"]:checked').val());

  if ((final_result / 25 * 100) <= 25)
  {
    $("#final-result-text").text("Low Risk");
    $("#result-image").attr("src", "/assets/img/questions-images/shutterstock_1495676003_3.jpg");
  }
  else if ((final_result / 25 * 100) <= 50)
  {
    $("#final-result-text").text("Moderate Risk");
    $("#result-image").attr("src", "/assets/img/questions-images/shutterstock_1495676003_2.jpg");
  }
  else if ((final_result / 25 * 100) <= 75)
  {
    $("#final-result-text").text("High Risk");
    $("#result-image").attr("src", "/assets/img/questions-images/shutterstock_1495676003_1.jpg");
  }
  else
  {
    $("#final-result-text").text("Very High Risk");
    $("#result-image").attr("src", "/assets/img/questions-images/shutterstock_1495676003_1.jpg");
  }
}

let doLogin = function()
{
  if ($('#signin-email').val() === "" || $('#signin-paswd').val() === "")
  {
    alert("Email and/or Password field cannot be left empty!")
  }
  else
  {
    var login_request = {
			username: $('#signin-email').val().toLowerCase(),
			password: $.MD5($('#signin-paswd').val())
		}
		
		$.ajax({ 
			type: "POST", 
			url: "./login.aspx/DoLogin",
			data: JSON.stringify(login_request),
			contentType: "application/json",
			dataType: "json", 
			
			success: function(data) {
				if (data.d.status == "success")
				{
					localStorage.setItem("uid", data.d.uid);
          $('#open_view').css("display", "none");
          $('#secure_view').css("display", "");
          $('#appointment-btn').css("display", "none");
          $('#account-nav-li').css("display", "");
          populatePatientsData();
				} 
				else
				{ 
					alert("Invalid username and/or password");
				} 
			}
		});
  }
}

let doSignup = function()
{
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if ($('#signup-email').val() === "" || $('#signup-mobile').val() === "" || $('#signup-paswd').val() === "" || $('#signup-re-paswd').val() === "")
  {
    alert("All fields are mandatory!");
  }
  else if ($('#signup-paswd').val() !== $('#signup-re-paswd').val())
  {
    alert("Password and Re-Password do not match.");
  }
  else if ($('#signup-mobile').val().length != 10 || isNaN($('#signup-mobile').val()))
  {
    alert("Invalid mobile number.");
  }
  else if (!re.test(String($('#signup-email').val()).toLowerCase()))
  {
    alert("Invalid email address.");
  }
  else
  {
    var signup_request = {
			email: $('#signup-email').val().toLowerCase(),
      mobile: $('#signup-mobile').val(),
			password: $.MD5($('#signup-paswd').val())
		}
		
		$.ajax({ 
			type: "POST", 
			url: "./login.aspx/DoSignUp",
			data: JSON.stringify(signup_request),
			contentType: "application/json",
			dataType: "json", 
			
			success: function(data) {
				if (data.d.status == "success")
				{
					localStorage.setItem("uid", data.d.uid);
          $('#open_view').css("display", "none");
          $('#secure_view').css("display", "");
          $('#appointment-btn').css("display", "none");
          $('#account-nav-li').css("display", "");
          populatePatientsData();
				} 
				else
				{ 
					alert("Invalid username and/or password");
				} 
			}
		});
  }
}

let doResetPassword = function()
{
  if ($('#signin-email').val() === "")
  {
    alert("Email field cannot be left empty!");
  }
  else
  {
    $.ajax({ 
			type: "POST", 
			url: "./login.aspx/DoResetPswd",
			data: JSON.stringify({ "email": $('#signin-email').val() }),
			contentType: "application/json",
			dataType: "json", 
			
			success: function(data) {
				if (data.d == "success")
				{
					alert("New password has been sent to you registered email.");
				} 
				else
				{ 
					alert("Sorry, we could not update your password. Please Try again!");
				} 
			}
		});
  }
}

let doLogout = function()
{
  localStorage.removeItem("uid");
  window.location.reload();
}

let doChangePassword = function()
{
  if ($('#cp-old-paswd').val() === "" || $('#cp-new-paswd').val() === "" || $('#cp-re-paswd').val() === "")
  {
    alert("All the fields are mandatory!");
  }
  else if ($('#cp-new-paswd').val() !== $('#cp-re-paswd').val())
  {
    alert("New Password and Re-Password must be same");
  }
  else if ($('#cp-old-paswd').val() === $('#cp-new-paswd').val())
  {
    alert("Old and New Password cannot be same");
  }
  else
  {
    var cp_request = {
			uid: localStorage.getItem('uid'),
      oldpaswd: $.MD5($('#cp-old-paswd').val()),
			newpaswd: $.MD5($('#cp-new-paswd').val())
		}
    
    $.ajax({ 
			type: "POST", 
			url: "./login.aspx/DoChangePswd",
			data: JSON.stringify(cp_request),
			contentType: "application/json",
			dataType: "json", 
			
			success: function(data) {
				if (data.d == "success")
				{
					alert("New password has been set.");
          $('#cp-modal-cont').css('display', 'none');
				} 
				else
				{ 
					alert("Sorry, your current password seems to be incorrect!");
				} 
			}
		});
  }
}

let populatePatientsData = function()
{
  $.ajax({ 
    type: "POST", 
    url: "./login.aspx/GetPatientData",
    data: JSON.stringify({ "uid": localStorage.getItem('uid') }),
    contentType: "application/json",
    dataType: "json", 
    
    success: function(data) {
      if (data.d.status == "success")
      {
        $('#ndf-cont').css('display', 'none');

        let table_data = data.d.data;
        let table_html_string = '<table style="margin-bottom: 20px;">';
        table_html_string = table_html_string + '<tr style="background-color: #166ab5; color: #ffffff; font-weight: bold;">';
        // table_html_string = table_html_string + '<th style="padding: 16px 10px 16px 20px; min-width: 180px;">Doctor Name</th>';
        // table_html_string = table_html_string + '<th style="padding: 16px 10px 16px 20px; min-width: 180px;">Doctor Code</th>';
        // table_html_string = table_html_string + '<th style="padding: 16px 10px 16px 20px; min-width: 180px;">Doctor Mobile No.</th>';
        table_html_string = table_html_string + '<th style="padding: 16px 10px 16px 20px; min-width: 180px;">Patient Name</th>';
        table_html_string = table_html_string + '<th style="padding: 16px 10px 16px 20px; min-width: 180px;">Patient Age</th>';
        table_html_string = table_html_string + '<th style="padding: 16px 10px 16px 20px; min-width: 180px;">Patient Gender</th>';
        table_html_string = table_html_string + '<th style="padding: 16px 10px 16px 20px; min-width: 180px;">Diabetic History</th>';
        table_html_string = table_html_string + '<th style="padding: 16px 10px 16px 20px; min-width: 180px;">Patient Code</th>';
        table_html_string = table_html_string + '<th style="padding: 16px 10px 16px 20px; min-width: 230px;">Patient Registration</th>';
        table_html_string = table_html_string + '<th style="padding: 16px 10px 16px 20px; min-width: 180px;">Patient Mobile No.</th>';
        table_html_string = table_html_string + '<th style="padding: 16px 10px 16px 20px; min-width: 180px;">HBA1C test % (3M)</th>';
        table_html_string = table_html_string + '<th style="padding: 16px 10px 16px 20px; min-width: 180px;">HBA1C test % (6M)</th>';
        table_html_string = table_html_string + '<th style="padding: 16px 10px 16px 20px; min-width: 180px;">HBA1C test % (9M)</th>';
        table_html_string = table_html_string + '<th style="padding: 16px 10px 16px 20px; min-width: 230px;">HbA1c Test % (12M)</th>';
        table_html_string = table_html_string + '</tr>';

        for (let itr1 = 0; itr1 < table_data.length; itr1++)
        {
          let row_bg_color = '#ffffff';

          if (itr1 % 2 == 1)
          {
            row_bg_color = '#f5f5f5;';
          }

          table_html_string = table_html_string + '<tr style="background-color: ' + row_bg_color + '; border-bottom: 1px solid #ccc;">';
          
          // table_html_string = table_html_string + '<td style="padding: 6px 10px 6px 10px;">' + table_data[itr1]['doctor_name'] + '</td>';
          // table_html_string = table_html_string + '<td style="padding: 6px 10px 6px 10px;">' + table_data[itr1]['doctor_code'] + '</td>';
          // table_html_string = table_html_string + '<td style="padding: 6px 10px 6px 10px;">' + table_data[itr1]['doctor_mobile'] + '</td>';
          table_html_string = table_html_string + '<td style="padding: 6px 10px 6px 10px;">' + table_data[itr1]['patient_name'] + '</td>';
          table_html_string = table_html_string + '<td style="padding: 6px 10px 6px 10px;">' + table_data[itr1]['patient_age'] + '</td>';
          table_html_string = table_html_string + '<td style="padding: 6px 10px 6px 10px;">' + table_data[itr1]['patient_gender'] + '</td>';
          table_html_string = table_html_string + '<td style="padding: 6px 10px 6px 10px;">' + table_data[itr1]['diabetic_history'] + '</td>';
          table_html_string = table_html_string + '<td style="padding: 6px 10px 6px 10px;">' + table_data[itr1]['patient_code'] + '</td>';
          table_html_string = table_html_string + '<td style="padding: 6px 10px 6px 10px;">' + table_data[itr1]['patient_registration'] + '</td>';
          table_html_string = table_html_string + '<td style="padding: 6px 10px 6px 10px;">' + table_data[itr1]['patient_mobile'] + '</td>';
          table_html_string = table_html_string + '<td style="padding: 6px 10px 6px 10px;">' + table_data[itr1]['hba1c_3m'] + '</td>';
          table_html_string = table_html_string + '<td style="padding: 6px 10px 6px 10px;">' + table_data[itr1]['hba1c_6m'] + '</td>';
          table_html_string = table_html_string + '<td style="padding: 6px 10px 6px 10px;">' + table_data[itr1]['hba1c_9m'] + '</td>';
          table_html_string = table_html_string + '<td style="padding: 6px 10px 6px 10px;">' + table_data[itr1]['hba1c_12m'] + '</td>';

          table_html_string = table_html_string + '</tr>';
        }

        table_html_string = table_html_string + '</table>';

        $('#pd-cont').html(table_html_string);
        $('#pd-cont').css('display', 'block');
      } 
      else
      {
        $('#pd-cont').css('display', 'none');
        $('#ndf-cont').css('display', 'block');
      } 
    }
  });
}

$( document ).ready(function() {
  if (localStorage.getItem("uid") !== null)
  {
    $('#open_view').css("display", "none");
    $('#secure_view').css("display", "");
    populatePatientsData();
    $('#appointment-btn').css("display", "none");
    $('#account-nav-li').css("display", "");
    // if (window.location.href.indexOf("login.aspx") > -1)
    // {
    //   populatePatientsData();
    //   $('#login-btn').text("Logout");
    // }
    // else
    // {
    //   $('#login-btn').text("View Panel");
    // }
  }
});