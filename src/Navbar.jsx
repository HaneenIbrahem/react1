export default function Navbar(){
    return (
        <header>
    <nav class="navbar">
      <div class="navbar-left">
        <a href="#" class="logo">
          <span>To Go Beauty</span>
        </a>
      </div>
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li class="dropdown">
          <a href="#">Categories</a>
          <ul class="dropdown-content">
            <li><a href="shop.html">Blush</a></li>
            <li><a href="shop.html">Bronzer</a></li>
            <li><a href="shop.html">Eyebrow</a></li>
            <li><a href="shop.html">Eyeliner</a></li>
            <li><a href="shop.html">Eyeshadow</a></li>
            <li><a href="shop.html">Foundation</a></li>
            <li><a href="shop.html">Lip liner</a></li>
            <li><a href="shop.html">Lipstick</a></li>
            <li><a href="shop.html">Mascara</a></li>
            <li><a href="shop.html">Nail polish</a></li>
          </ul>
        </li>
        <li><a href="about-us.html">About Us</a></li>
        <li><a href="contact-us.html">Contact Us</a></li>
      </ul>
      <div class="navbar-right">
        <input type="text" placeholder="Search..." />
        <a href="#" class="cart-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          </svg>
          <span class="cart-count">0</span>
        </a>
      </div>
    </nav>
  </header>
    )
    

}