'use-strict';
{
    const $hdr_header_sub = document.getElementById('hdr_header_sub');
    $hdr_header_sub.insertAdjacentHTML('afterbegin' , `
    <header id="header" class="p-3 mb-4">
    <div class="header-container d-flex justify-content-between align-items-center">
      <div class="page-title">
      <h1><a class="fs-1 text-dark text-decoration-none p-3" href="../index.html">Sports Photo</a></h1>
    </div>
    <nav>
    <ul id="nav" class="sports-list d-flex list-unstyled pt-2">
      <li class="pe-3"><a href="#" class="sub-text fs-3 text-dark text-decoration-none">baseball</a>
      <ul class="list-unstyled">
        <li class="my-4"><a class="fs-6 text-dark text-decoration-none" href="baseball-tiger24-1-op.html">阪神タイガース
          <br>1軍オープン戦<br>
          2024</a></li>
        <li class="my-4"><a class="fs-6 text-dark text-decoration-none" href="th-other-baseball24-1-op.html">阪神以外
          <br>1軍オープン戦<br>
          2024</a></li>
        </ul>
      </li>
      <li class="pe-3"><a href="#" class="sub-text fs-3 text-dark text-decoration-none">volleyball</a>
        <ul class="list-unstyled">
          <li class="my-4"><a class="sub-text fs-6 text-dark text-decoration-none" href="jtmave23.html">JTマーヴェラス
            <br>2023~24</a></li>
          </ul>
        </li>
        <li class="pe-3"><a href="#" class="sub-text fs-3 text-dark text-decoration-none">figureskate</a>
          <ul class="list-unstyled">
            <li class="my-4"><a class="sub-text fs-6 text-dark text-decoration-none" href="zenja-figskate23.html">2023全日本
              <br>フィギアスケート<br>
              選手権</a></li>
            </ul>
          </li>
      <li class="pe-2"><a href="prof.html" class="fs-3 text-dark text-decoration-none">profile</a></li>
    </ul>
  </nav>
    <div class="burger p-4">
      <div class="line1 fw-normal mb-2"></div>
      <div class="line2 fw-normal mb-2"></div>
      <div class="line3 fw-normal mb-2"></div>
    </div>
  </div>
  </header>`);
}

{
    const $hdr_footer_sub = document.getElementById('hdr_footer_sub');
    $hdr_footer_sub.insertAdjacentHTML('afterbegin' , `
    <!-- footer -->
        <footer id="footer" class="text-center text-white bg-secondary pt-2 pb-2">
          <p>&copy;Shotaro Sports</p>
        </footer>`);
}

