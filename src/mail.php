<?php

$to      = 'patryk.placzek@wp.pl';
$name    = $_POST['name'];
$email   = $_POST['email'];
$subject = 'Nowy e-mail od ' . $name . ' (' . $email . ')';
$message = $_POST['message'];
$headers = 'From: ' . $name . ' (' . $email . ')';
$headers .= 'Content-Type: text/html; charset=utf-8';

mail($to, $subject, $message, $headers);

?>

<!DOCTYPE html>
<html lang="pl">
	<head>
    <meta charset="UTF-8"/>
    <title>Portfolio Patryk Płaczek</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <link rel="icon" type="images/png" href="images/icon.png">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/style.css">
  </head>
  <body>
    <div class="opening">
      <svg width="400" height="400" id="svg_0">
        <g>
          <rect id="svg_1" height="385.99821" width="386.4982" y="6.50088" x="7.2509" stroke-width="12.5" stroke="#ffffff" fill="none"/>
          <line stroke-linecap="null" stroke-linejoin="null" id="svg_2" y2="354" x2="354" y1="46" x1="46" stroke-width="12.5" stroke="#ffffff" fill="none"/>
          <line stroke-linecap="null" stroke-linejoin="null" id="svg_3" y2="46" x2="354" y1="354" x1="46" fill-opacity="null" stroke-width="12.5" stroke="#ffffff" fill="none"/>
          <ellipse ry="36.50027" rx="36.50027" id="svg_4" cy="300" cx="200" stroke-width="12.5" fill="#ffffff"/>
          <text xml:space="preserve" text-anchor="start" font-family="Arvo, sans-serif" font-size="122" id="svg_5" y="242.39501" x="62" stroke-width="0" fill="#ffffff">P</text>
          <text xml:space="preserve" text-anchor="start" font-family="Arvo, sans-serif" font-size="122" id="svg_6" y="242.39501" x="262" stroke-width="0" fill="#ffffff">P</text>
          <ellipse ry="36.50027" rx="36.50027" id="svg_7" cy="100" cx="200" stroke-width="12.5" fill="#ffffff"/>
         </g>
       </svg>
    </div>
    <header class="header">
      <div class="row">
        <div class="logo col-3" id="logo">
          <img src="images/logo.png" alt="logo">
        </div>
        <div class="navbar menu col-6">
          <ul>
            <li>
              <a href="#section2">o mnie</a>
            </li>
            <li>
              <a href="#section3">portfolio</a>
            </li>
            <li>
              <a href="#section7">kontakt</a>
            </li>
          </ul>
        </div>
        <div class="navbar socials col-3">
          <ul>
            <li>
              <a href=""><i class="fab fa-linkedin-in"></i></a>
            </li>
            <li>
              <a href="">CV</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <nav class="navigation">
      <ul>
        <li><a href="#section1" class="nav-1 active"></a></li>
        <li><a href="#section2" class="nav-2"></a></li>
        <li><a href="#section3" class="nav-3"></a></li>
        <li><a href="#section4" class="nav-4"></a></li>
        <li><a href="#section5" class="nav-5"></a></li>
        <li><a href="#section6" class="nav-6"></a></li>
        <li><a href="#section7" class="nav-7"></a></li>
      </ul>
    </nav>
    <section class="homeArea section" id="section1">
      <div class="home-content">
        <h1>Patryk<br><span>Płaczek</span></h1>
        <p>Junior Web Developer</p>
      </div>
      <div class="image-wrapper">
        <img class="homeBackground" src="images/intro.png">
        <img class="LClock" src="images/LClock.png">
        <img class="SClock" src="images/SClock.png">
        <div class="yoda">
          <img class="arm" src="images/arm.png">
        </div>
        <img class="mouse" src="images/mouse.png">
        <img class="gif" src="images/gif1.gif">
        <div class="steam-container">
          <div class="squiggle-container squiggle-container-2">
            <div class="squiggle">
              <svg version="1.1" id="Layer_1"x="0px" y="0px"
                viewBox="0 0 28.1 80.6" style="enable-background:new 0 0 28.1 80.6;" xml:space="preserve">
              <path class="" fill="none" stroke="#fff" stroke-width="11" stroke-linecap="round" stroke-miterlimit="10" d="M22.6,75.1c-8-5.6-15.2-10.5-15.2-19.9c0-12.1,14.1-17.2,14.1-29.6c0-9.1-6.7-15.7-16-20.1"/>
              </svg>
            </div>
          </div>
          <div class="squiggle-container squiggle-container-3">
            <div class="squiggle">
              <svg version="1.1" id="Layer_1"x="0px" y="0px"
                viewBox="0 0 28.1 80.6" style="enable-background:new 0 0 28.1 80.6;" xml:space="preserve">
              <path class="" fill="none" stroke="#fff" stroke-width="11" stroke-linecap="round" stroke-miterlimit="10" d="M22.6,75.1c-8-5.6-15.2-10.5-15.2-19.9c0-12.1,14.1-17.2,14.1-29.6c0-9.1-6.7-15.7-16-20.1"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="aboutArea section" id="section2">
    </section>
    <section class="akantArea section" id="section3">

    </section>
    <section class="autoKomplexArea section" id="section4">

    </section>
    <section class="gallimoreArea section" id="section5">

    </section>
    <section class=" section" id="section6">

    </section>
    <section class="contactArea section" id="section7">
      <div class="container">
        <h2>KONTAKT</h2>
        <h3>Jeśli masz pytania lub po prostu chcesz pogadać. Pisz śmiało!</h3>
        <div class="socialsContact">
          <a href="https://www.linkedin.com/in/patryk-p%C5%82aczek-168980162/" class="social-info" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin-in"></i>
            <p class="hover-text">Patryk Płaczek</p>
          </a>
          <a href="https://github.com/Patkuss/" class="social-info" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i>
            <p class="hover-text">Patkuss</p>
          </a>
          <a href="tel:+48-797-956-606" class="social-info">
            <i class="fas fa-phone"></i>
            <p class="hover-text">797 956 606</p>
          </a>
          <a href="mailto:patryk.placzek@wp.pl" class="social-info">
            <i class="far fa-envelope"></i>
            <p class="hover-text">patryk.placzek@wp.pl</p>
          </a>
        </div>
        <form method="post" name="contactform" action="mail.php">
          <p class="name">
            <input name="name" type="text" class="feedback-input" placeholder="Imię" id="name" required>
          </p>
          <p class="email">
            <input name="email" type="email" class="feedback-input" id="email" placeholder="Email" required>
          </p>
          <p class="message">
            <textarea name="message" class="feedback-input" id="message" placeholder="Wiadomość" required></textarea>
          </p>
          <div class="submit">
            <button type="submit" class="submit-button">WYŚLIJ</button>
          </div>
        </form>
      </div>
    </section>
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js" integrity="sha512-8Wy4KH0O+AuzjMm1w5QfZ5j5/y8Q/kcUktK9mPUVaUoBvh3QPUZB822W/vy7ULqri3yR8daH3F58+Y8Z08qzeg==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.2/ScrollTrigger.min.js" integrity="sha512-YkmzZl/xoJ+yOJ5YaZ8kBmyQB0jpLQDQpErTSgDsdipDcE1al6Z8TZseXLJLf3it/kRrFRJEpGC2C/jBbIF+Ng==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.2/ScrollToPlugin.min.js" integrity="sha512-qFrVIKAX88m3zoxJzTl97rUnj5oNZkxDiomOwEuehxk+OMCQmJfwMGTWsLEw30VvIV2G2u0kbUcKEnIA9vj4qw==" crossorigin="anonymous"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="js/script.js"></script>
  </body>
</html>