<template>
  <div id="footer">
    <div class="footer-dark">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3 item">
              <img
                src="/img/resources/footer/unv-logo.jpg"
                class="img-fluid rounded mx-auto d-block"
              />
            </div>
            <div class="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="http://adeneng-faculty.edu.ye/index.html">Home</a>
                </li>
                <li>
                  <a href="http://adeneng-faculty.edu.ye/about/campus.html">
                    Campus
                  </a>
                </li>
                <li><a href="/contact-us">Contact Us</a></li>
                <li>
                  <a href="/faq">(FAQ)</a>
                </li>
              </ul>
            </div>
            <div class="col-md-6 item text">
              <h3>Aden University Faculty of Engineering</h3>
              <p>
                The Faculty of Engineering at the University of Aden is one of
                the most prestigious engineering schools in Yemen. At the
                undergraduate level, it offers eight different majors. The
                faculty also offers some postgraduate programs.
              </p>
            </div>
            <div class="col item social">
              <a href="#"><i class="fa fa-facebook"></i></a
              ><a href="#"><i class="fa fa-twitter"></i></a
              ><a href="#"><i class="fa fa-whatsapp"></i></a
              ><a href="#"><i class="fa fa-instagram"></i></a>
            </div>
          </div>
          <p class="copyright">B5-IT/E © 2020</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
#footer {
  .footer-dark {
    padding: 30px 0;
    color: #fff;
    background-color: #28a745;
  }

  .footer-dark h3 {
    margin-top: 0;
    margin-bottom: 12px;
    font-weight: bold;
    font-size: 20px;
    color: #e9ecef;
  }

  .footer-dark ul {
    padding: 0;
    list-style: none;
    line-height: 1.6;
    font-size: 14px;
    margin-bottom: 0;
  }

  .footer-dark ul a {
    color: inherit;
    text-decoration: none;
    opacity: 0.6;
    font-size: 18px;
  }

  .footer-dark ul a:hover {
    opacity: 0.8;
  }

  @media (max-width: 767px) {
    .footer-dark .item:not(.social) {
      text-align: center;
      padding-bottom: 20px;
    }
  }

  .footer-dark .item.text {
    margin-bottom: 36px;
  }

  @media (max-width: 767px) {
    .footer-dark .item.text {
      margin-bottom: 0;
    }
  }

  .footer-dark .item.text p {
    opacity: 0.6;
    margin-bottom: 0;
  }

  .footer-dark .item.social {
    text-align: center;
  }

  @media (max-width: 991px) {
    .footer-dark .item.social {
      text-align: center;
      margin-top: 20px;
    }
  }

  .footer-dark .item.social > a {
    font-size: 20px;
    width: 36px;
    height: 36px;
    line-height: 36px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4);
    margin: 0 8px;
    color: #fff;
    opacity: 0.75;
  }

  .footer-dark .item.social > a:hover {
    opacity: 1;
  }

  .footer-dark .copyright {
    text-align: center;
    padding-top: 24px;
    font-size: 16px;
    margin-bottom: 0;
    font-weight: bold;
  }
}
</style>
