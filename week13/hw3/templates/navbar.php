<nav class="nav navbar">
  <div class="nav__left">
    <a href="index.php">
      <img src="https://image.flaticon.com/icons/svg/1665/1665577.svg" alt="Message Board" height="30">
    </a>
  </div>
  <ul class="nav__right">
    <li class="nav__item">
      <?php 
        if (isset($user) && !empty($user)) {
          echo "Hi $user";
        } else {
          echo "<a href='register.php'>Become a Member</a>";
        }
      ?>
    </li>
    <li class="nav__item">
      <?php
        if (isset($user) && !empty($user)) {
          echo "<a href='logout.php'>Sign Out</a>";
        } else {
          echo "<a href='login.php'>Sign In</a>";
        }
      ?>
    </li>
  </ul>
</nav>