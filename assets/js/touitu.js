'use-strict';
{
    const $hdr_header = document.getElementById('hdr_header');
    $hdr_header.insertAdjacentHTML('afterbegin' , `
    <div id="header" class="mb-3">
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary p-3">
  <div class="container-fluid">
    <h1><a href="index.html" class="fs-1 text-dark text-decoration-none"><i class="bi bi-camera me-2"></i>Like Sports</a></h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span><i class="bi bi-list"></i></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ps-4 list-unstyled">
      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle fs-3 text-dark text-decoration-none ps-1" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        baseball
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item fs-4 text-decoration-none" href="events/baseball-tiger24-1-op.html">阪神タイガース1軍'24<br>オープン戦</a></li>
        <li><a class="dropdown-item fs-4 text-decoration-none" href="events/th-other-baseball24-1-op.html">阪神以外1軍'24<br>オープン戦</a></li>
      </ul>
    </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle fs-3 text-dark text-decoration-none ps-1" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            volleyball
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item fs-4 text-decoration-none" href="events/jtmave23.html">JTマーヴェラス・'23~'24</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle fs-3 text-dark text-decoration-none ps-1" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            figureskate
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item fs-4 text-decoration-none" href="events/zenja-figskate92.html">第92回<br>全日本フィギアスケート</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-3 text-dark text-decoration-none ps-1" href="events/prof.html">profile</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>`);
}

{
    const $hdr_footer = document.getElementById('hdr_footer');
    $hdr_footer.insertAdjacentHTML('afterbegin' , `
    <!-- footer -->
        <footer id="footer" class="text-center text-white bg-secondary pt-2 pb-2">
          <p>&copy;Shotaro Sports</p>
        </footer>`);
}
