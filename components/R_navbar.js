const My_navbar = () =>{
    return ` <div id="div_search">

    <div class="navbar_logo">
        <a href="index.html">
            <img src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png" alt="LOGO">
        </a>
    </div>

    <div class="nav_div_search_middle">
        <select class="search_select">
            <option value="">All categories</option>
            <option value="">MAKEUP</option>
            <option style="color: black; font-weight: bold;" value="">-FACE</option>
            <option value="">---BB cream</option>
            <option value="">---Blush</option>
            <option value="">---Bronzer</option>
            <option value="">---face primer</option>
            <option style="color: black; font-weight: bold;" value="">-EYE</option>
            <option value="">---Eye shadow</option>
            <option value="">---Eye kit</option>
            <option value="">---False eyelashes</option>
            <option style="color: black; font-weight: bold;" value="">-LIPS</option>
            <option value="">---Lipstick</option>
            <option value="">---Lip stain</option>
            <option value="">---Lip Plumber</option>
        </select>

        <input class="search_enter" type="text" placeholder="ENTER YOUR SEARCH">
        <div><img src="https://cdn.iconscout.com/icon/free/png-64/search-1436-527970.png" alt=""></div>
    </div>

    <div class="navbar_signup">
        <div>🖤</div>

        <div>
            <a href="login.html">
                <img src="https://cdn.iconscout.com/icon/free/png-64/user-1482-457815.png" alt="Login"> My Account
            </a>
        </div>
    </div>
</div>

<nav>
    <ul id="nav_menu">
        <li class="item"><a href="">MAKEUP</a></li>
        <li class="item"><a href="skin.html">SKIN</a></li>
        <li class="item"><a href="">HAIR</a></li>
        <li class="item"><a href="">PERSONAL CARE</a></li>
        <li class="item"><a href="">MOM & BABY CARE</a></li>
        <li class="item"><a href="fragrance.html">FRAGRANCE</a></li>
        <li class="item"><a href="ayurveda.html">AYURVEDA</a></li>
        <li class="item"><a href="">BRANDS</a></li>
        <li id="nav_cart" class="item"><a href="cart.html">👜MY CART</a></li>
    </ul>
</nav>`
}

export {My_navbar};
