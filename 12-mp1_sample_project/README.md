# Session Code

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio Website</title>
    <link rel="stylesheet" href="styles.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    />
  </head>
  <body>
    <main class="page">
      <header class="header-container">
        <nav class="nav-container">
          <h1 class="header-logo">adamkeyes</h1>
          <ul class="social-links">
            <li class="social-item">
              <i class="fa-brands fa-github fa-xl"></i>
            </li>
            <li class="social-item">
              <i class="fa-brands fa-facebook fa-xl"></i>
            </li>
            <li class="social-item">
              <i class="fa-brands fa-linkedin fa-xl"></i>
            </li>
            <li class="social-item">
              <i class="fa-brands fa-twitter fa-xl"></i>
            </li>
          </ul>
        </nav>

        <section class="hero-container">
          <img
            class="hero-img"
            src="https://i.pinimg.com/1200x/fd/28/b9/fd28b903e12ce2f828488f8da7367c4b.jpg"
            alt="A portrait image of Gal Gadot"
          />
          <div class="content">
            <h2 class="hero-title">
              Nice to meet you! I'm
              <span class="hero-title-name">Gal Gadot</span>.
            </h2>
            <p class="hero-text">
              Based in the UK, I'm a Wonderwoman developer passionate about
              building accessible web apps that users love.
            </p>
            <a class="hero-contact" href="#">CONTACT ME</a>
          </div>
        </section>
      </header>

      <hr />
    </main>

  </body>
</html>

- {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }

.page {
color: #ffffff;
background-color: #151515;
font-family: Verdana, Geneva, Tahoma, sans-serif;

padding: 2em;
}

.header-container {
display: flex;
flex-direction: column;
gap: 2em;
}

.nav-container {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2em;
}

.header-logo {
font-weight: 600;
}

.social-links {
list-style: none;
display: flex;
gap: 1.5em;
}

.hero-container {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 3em;
}

.hero-img {
width: 50%;
}

.hero-title {
font-size: 40px;
font-weight: 600;
}

.hero-title-name {
padding-bottom: 5px;
border-bottom: 5px solid #5fdaa3;
}

.hero-text {
font-size: 18px;
}

.content {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
gap: 2em;
}

.hero-contact {
color: #ffffff;
font-size: 20px;
text-decoration: none;
padding-bottom: 15px;
border-bottom: 2px solid #5fdaa3;
}

hr {
margin: 3em 0;
width: 100%;
}

@media only screen and (min-width: 401px) and (max-width: 960px) {
.nav-container {
flex-direction: row;
justify-content: space-between;
}

.hero-container {
flex-direction: row;
}

.hero-img {
order: 1;
}

.content {
text-align: left;
justify-content: start;
align-items: start;
}

.hero-title {
font-size: 32px;
}

.hero-text {
font-size: 16px;
}

.hero-contact {
font-size: 14px;
}
}
