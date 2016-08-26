# JQuery Stage 01

        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
        <script>

What are jQuery selectors?
=================
jQuery selectors are one of the most important aspects of the jQuery library. These selectors use familiar CSS syntax to allow page authors to quickly and easily identify any set of page elements to operate upon with the jQuery library methods. Understanding jQuery selectors is the key to using the jQuery library most effectively. This reference card puts the power of jQuery selectors at your very fingertips.

A jQuery statement typically follows the syntax pattern:

    $(selector).methodName();

The selector is a string expression that identifies the set of DOM elements that will be collected into a matched set to be operated upon by the jQuery methods.

Many of the jQuery operations can also be chained:

    $(selector).method1().method2().method3();

As an example, let's say that we want to hide the DOM element with the id value of goAway and to add class name incognito:

    $("#goAway").hide().addClass("incognito");

Applying the methods is easy. Constructing the selector expressions is where the cleverness lies.

The wrapped set created by the application of a selector can be treated as a JavaScript array for convenience. It is particularly useful to use array indexing to directly access elements within the wrapped set.

For example:

    var element = $("img")[0];

will set the variable element to the first element in the matched set.

Types of jQuery Selectors
================
There are three categories of jQuery selectors: Basic CSS selectors, Positional selectors, and Custom jQuery selectors.

The Basic Selectors are known as "find selectors" as they are used to find elements within the DOM. The Positional and Custom Selectors are "filter selectors" as they filter a set of elements (which defaults to the entire set of elements in the DOM).

Basic CSS Selectors
=============
These selectors follow standard CSS3 syntax and semantics.
--------------------------------------------------------------------

        * 	Matches any element.
        E 	Matches all elements with tag name E.

        E F 	Matches all elements with tag name F that are descendants of E.

        E>F 	Matches all elements with tag name F that are direct children of E.

        E+F 	Matches all elements with tag name F that are immediately preceded by a sibling of tag name E.

        E~F 	Matches all elements with tag name F that are preceded by any sibling of tag name E.

        E:has(F) 	Matches all elements with tag name E that have at least one descendant with tag name F.

        E.c 	Matches all elements E that possess a class name of c. Omitting E is identical to *.c.

        E#i 	Matches all elements E that possess an id value of i. Omitting E is identical to *#i.

        E[a] 	Matches all elements E that posses an attribute a of any value.

        E[a=v] 	Matches all elements E that posses an attribute a whose value is exactly v.

        E[a^=v] 	Matches all elements E that posses an attribute a whose value starts with v.

        E[a$=v] 	Matches all elements E that posses an attribute a whose value ends with v.

        E[a*=v] 	Matches all elements E that posses an attribute a whose value contains v.

Examples
-----------
    $("div") selects all <div> elements

    $("fieldset a") selects all <a> elements within <fieldset> elements

    $("li>p") selects all <p> elements that are direct children of <li> elements

    $("div~p") selects all <div> elements that are preceded by a <p> element

    $("p:has(b)") selects all <p> elements that contain a <b> element

    $("div.someClass") selects all <div> elements with a class name of someClass

    $(".someClass") selects all elements with class name someClass

    $("#testButton") selects the element with the id value of testButton

    $("img[alt]") selects all <img> elements that possess an alt attribute

    $("a[href$=.pdf]") selects all <a> elements that possess an href attribute that ends in .pdf

    $("button[id*=test]") selects all buttons whose id attributes contain test

You can create the union of multiple disparate selectors by listing them, separated by commas, in a single call to $().

    For example, the following matches all <div> and <p> elements:

    $("div,p")

    While the following, matches all <div> elements with a title attribute, and all <img> elements with alt attributes:

    $("div[title],img[alt]")

Positional Selectors
============
These selectors match based upon positional relationships between elements. These selectors can be appended to any base selector (which we"ll denote by B) to filter the matches based upon position. If B is omitted, it is assumed to be * (the pool of all elements).

    B:first 	Selects the first element on the page matching the base selector B.

    B:last 	Selects the last element on the page matching the base selector B.

    B:first-child 	Selects all elements from B that are first children.

    B:last-child 	Selects all elements from B that are last children.

    B:only-child 	Selects all elements from B that are only children.

    B:nth-child(n) 	Selects all elements from B that are n-th ordinal children. Starts at 1.

    B:nth-child(odd|even) 	Selects all elements from B that are even or odd ordinal children. The first child is considered odd (ordinal 1).

    B:nth-child(Xn+Y) 	Selects all elements from B that match the formula. X denotes an ordinal multiplier, while Y denotes an offset. Y may be omitted if 0. See the following examples.

    B:even 	Selects the even elements within the set of elements defined by B.

    B:odd 	Selects the odd elements within the set of elements defined by B.

    B:eq(n) 	Selects the n-th element within the set of elements defined by B. Starts at 0.

    B:gt(n) 	Selects elements within the set of elements defined by B that follow the n-th element (exclusive). Starts at 0.

    B:lt(n) 	Selects elements within the set of elements defined by B that precede the n-th element (exclusive). Starts at 0.

Examples
-----------
    $("p:first") selects the first element on the page

    $("img[src$=.png]:first") selects the first <img> element on the page that has a src attribute ending in .png

    $("button.small:last") selects the last <button> element on the page that has a class name of small

    $("li:first-child") selects all <li> elements that are first children within their lists

    $("a:only-child") selects all <a> elements that are the only element within their parent

    $("li:nth-child(2)") selects all <li> elements that are the second item within their lists

    $("tr:nth-child(odd)") selects all odd <tr> elements within a table

    $("div:nth-child(5n)") selects every 5th <div> element

    $("div:nth-child(5n+1)") selects the element after every 5th <div> element

    $(".someClass:eq(1)") selects the second element with a class name of someClass

    $(".someClass:gt(1)") selects all but the first two elements with a class name of someClass

    $(".someClass:lt(4)") selects the first four elements with a class name of someClass

Note that the :nth-child selectors begin counting at 1, while the :eq, :gt and :lt selectors begin with 0.

jQuery Custom Selectors
================
These selectors are provided by jQuery to allow for commonly used, or just plain handy, selections that were not anticipated by the CSS Specification. Like the Positional Selectors, these selectors filter a base matching set (which we denote with B). Omitting B is interpreted as the set of all elements. These selectors may be combined; see the examples for some powerful selector combinations.

        B:animated 	Selects elements from the base set B that are currently under animated control via one of the jQuery animation methods.

        B:button 	Selects elements of B that are of any button type; that is: button, input[type=submit], input[type=reset] or input[type=button].

        B:checkbox 	Selects elements of B that are of type input[type=checkbox].

        B:enabled 	Selects form elements from B that are in enabled state.

        B:file 	Selects elements of B that are of type input[type=file].

        B:header 	Selects elements from B that are of the header types: that is <h1> through <h6>.

        B:hidden 	Selects elements of B that are hidden.

        B:image 	Selects elements of B that are of type input[type=image].

        B:input 	Selects form input elements from B; that is, <input>, <select>, <textarea> and <button> elements.

        B:not(f) 	Selects elements of B that do not match the filter selector specified by f. A filter selector is any selector beginning with : (colon), A base set B cannot be specified as part of f.

        B:parent 	Selects elements of B that are parents of non-empty element children.

        B:password 	Selects elements of B that are of type input[type=password].

        B:radio 	Selects elements of B that are of type input[type=radio].

        B:reset 	Selects elements of B that are of type input[type=reset] or button[type=reset].

        B:selected 	Selects elements of B that are in selected state. Only <option> elements posses this state.

        B:submit 	Selects elements of B that are of type input[type=submit] or button[type=submit].

        B:text 	Selects elements of B that are of type input[type=text].

        B:visible 	Selects form elements from B that are not hidden.

Examples
-----------
    $("img:animated") selects all <img> elements that are undergoing animation

    $(":button:hidden") selects all button type elements that are hidden

    $("input[name=myRadioGroup]:radio:checked") selects all radio elements with the name attribute value of myRadioGroup that are checked

    $(":text:disabled") selects all text fields that are disabled

    $("#xyz p :header") selects all header type elements within <p> elements that are within an element with an id value of xyz. Note the space before :header that prevents it from binding directly to the p.

    $("option:not(:selected)") selects all unselected <option> elements

    $("#myForm button:not(.someClass)") selects all buttons from the <form> with the id of myForm that do not possess the class name someClass.

    $("select[name=choices] :selected") selects the selected <option> elements within the <select> element named choices.

    $("p:contains(coffee)") selects all <p> elements that contain the text coffee

Used either separately, or in combination, the jQuery selectors give you a great deal of power to easily create a set of elements that you wish to operate upon with the jQuery methods.

MENU01
======
        <h1>Simple Flat Menu</h1>

        <div class="content">
          <div class="mainBar">
            <div class="liked">Liked</div>
            <div class="listen">Listen</div>
            <div class="cog fa fa-cog"></div>
          </div>
          <div class="menu">
            <a href="#">Messages</a>
            <a href="#">Dashboard</a>
            <a href="#">Recent Activity</a>
            <a href="#">Unlike</a>
          </div>
        </div>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

        <script>
        $('.cog').on('click', function () {
            $('.menu').stop().fadeToggle('fast');
        });
        </script>

  menu2
  =====

              <header class="navbar navbar-fixed-top">
                  <div class="navbar-inner">
              		<div class="container">

                          <!-- Mobile toggle button -->
                          <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                          </button>

                          <!-- Logo -->
                          <a class="brand" href="#"><b>LOGO</b></a>

                          <!-- Navigation -->
                          <nav class="nav-collapse collapse">
                              <ul class="nav">

              				    <li><a href="#top">Home</a></li>
                                  <li class="dropdown">
                                      <a href="#" class="dropdown-toggle" data-toggle="dropdown">Mega Menu <b class="caret"></b></a>

              						<ul class="dropdown-menu mega-menu">

              						    <li class="mega-menu-column">
              						    <ul>
              						        <li class="nav-header">Mega menu 1</li>
              						        <img src="http://placehold.it/150x120">
              								<li><a href="#">Mega-menu link</a></li>
              						        <li><a href="#">Mega-menu link</a></li>
              						        <li><a href="#">Mega-menu link</a></li>
              						        <li><a href="#">Mega-menu link</a></li>
              						        <li><a href="#">Mega-menu link</a></li>
              						        <li><a href="#">Mega-menu link</a></li>
              						    </ul>
              						    </li>

              						    <li class="mega-menu-column">
              						    <ul>
              						    <li class="nav-header">Mega menu 2</li>
              						        <img src="http://placehold.it/150x120">
              								<li><a href="#">Mega-menu link</a></li>
              						        <li><a href="#">Mega-menu link</a></li>
              						        <li><a href="#">Mega-menu link</a></li>
              						        <li><a href="#">Mega-menu link</a></li>
              						        <li><a href="#">Mega-menu link</a></li>
              						        <li><a href="#">Mega-menu link</a></li>
              						    </ul>
              						    </li>

              						    <li class="mega-menu-column">
              						    <ul>
              						    <li class="nav-header">Mega menu 3</li>
              						        <img src="http://placehold.it/150x120">
              								<li><a href="#">Mega-menu link</a></li>
              						        <li><a href="#">Mega-menu link</a></li>
              						        <li><a href="#">Mega-menu link</a></li>
              						        <li><a href="#">Mega-menu link</a></li>
              						        <li><a href="#">Mega-menu link</a></li>
              						        <li><a href="#">Mega-menu link</a></li>
              						    </ul>
              						    </li>

              						</ul><!-- dropdown-menu -->

              					</li><!-- /.dropdown -->

                                  <li><a href="#about">About Us</a></li>
                                  <li><a href="#pricing">Our Pricing</a></li>
                                  <li><a href="#team">Our Team</a></li>
                                  <li><a href="#contact">Contact</a></li>

              				</ul><!-- /.nav -->
                          </nav><!--/.nav-collapse -->

                      </div><!-- /.container -->
                  </div><!-- /.nav-inner -->
              </header>
              <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script><script src='http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.2/js/bootstrap.min.js'></script>
              <script>
              jQuery(document).ready(function () {
                  $('.dropdown').hover(function () {
                      $('.dropdown-menu', this).fadeIn('fast');
                  }, function () {
                      $('.dropdown-menu', this).fadeOut('fast');
                  });
              });

menu3
=====

        <div id="toggle">
          <div class="one"></div>
          <div class="two"></div>
          <div class="three"></div>
        </div>

        <div id="menu">
          Hello, I'm a menu!
        </div>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
        <script>
        $('#toggle').click(function () {
            $(this).toggleClass('on');
            $('#menu').slideToggle();
        });

        </script>


class
====

        <h1>Toggle.</h1>
        <a href="#" class="toggle toggle--on"></a>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
        <script>
        $('.toggle').click(function (e) {
            var toggle = this;
            e.preventDefault();
            $(toggle).toggleClass('toggle--on').toggleClass('toggle--off').addClass('toggle--moving');
            setTimeout(function () {
                $(toggle).removeClass('toggle--moving');
            }, 200);
        });

        </script>

tabs
====

        <div class="container">

        	<ul class="tabs">
        		<li class="tab-link current" data-tab="tab-1">Tab One</li>
        		<li class="tab-link" data-tab="tab-2">Tab Two</li>
        		<li class="tab-link" data-tab="tab-3">Tab Three</li>
        		<li class="tab-link" data-tab="tab-4">Tab Four</li>
        	</ul>

        	<div id="tab-1" class="tab-content current">
        		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        	</div>
        	<div id="tab-2" class="tab-content">
        		 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        	</div>
        	<div id="tab-3" class="tab-content">
        		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        	</div>
        	<div id="tab-4" class="tab-content">
        		Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        	</div>

        </div><!-- container -->
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
        <script>$(document).ready(function () {
            $('ul.tabs li').click(function () {
                var tab_id = $(this).attr('data-tab');
                $('ul.tabs li').removeClass('current');
                $('.tab-content').removeClass('current');
                $(this).addClass('current');
                $('#' + tab_id).addClass('current');
            });
        });

        </script>


tabs1
====
        <ul id="toggle_nav">
        <li>
          <a href="#">ITEM 1</a>
          <ul>
            <li>
              <a href="#">sub 1</a>
            </li>
            <li>
              <a href="#">sub 2</a>
            </li>
            <li>
              <a href="#">sub 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">ITEM 2</a>
          <ul>
            <li>
              <a href="#">sub 1</a>
            </li>
            <li>
              <a href="#">sub 2</a>
            </li>
            <li>
              <a href="#">sub 3</a>
            </li>
          </ul>
        </li>
        </ul>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
        <script>

        $('#toggle_nav li ul').hide();
        $('#toggle_nav > li > a').on('click', function (e) {
          if ($(this).parent().has('ul')) {
              e.preventDefault();
          }
          var speed = 300;
          if (!$(this).hasClass('active')) {
              $('#toggle_nav li ul').slideUp(speed);
              $('#toggle_nav li a').removeClass('active');
              $(this).next('ul').slideDown(speed);
              $(this).addClass('active');
          } else if ($(this).hasClass('active')) {
              $(this).removeClass('active');
              $(this).next('ul').slideUp(speed);
          }
        });

        </script>

tabs3
====

        <div class="tab">

        	<ul class="tabs">
        		<li><a href="#">Tab01</a></li>
        		<li><a href="#">Tab02</a></li>
        		<li><a href="#">Tab03</a></li>
        	</ul> <!-- / tabs -->

        	<div class="tab_content">

        		<div class="tabs_item">
        			<img src="http://d13yacurqjgara.cloudfront.net/users/5411/screenshots/1413345/wellv2.png">
        			<h4>Tab 01 Neque ipsum dolor.</h4>
        			<p>Consectetur adipisicing elit. Neque, repellat facilis totam ab eos distinctio sint atque maiores! Dignissimos, molestiae, rem accusantium iure vitae voluptatum voluptas repudiandae deserunt dolore quis! Quisquam mollitia eius sed.</p>
        		</div> <!-- / tabs_item -->

        		<div class="tabs_item">
        			<img class="alignleft max_width" alt="tabs_shortcode2" src="http://d13yacurqjgara.cloudfront.net/users/424765/screenshots/1412407/ezyinsights.jpg">
        			<h4>Tab02 Maiores, suscipit</h4>
        			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, suscipit, eaque asperiores neque numquam nam possimus dolorem ipsa aspernatur reiciendis?</p>
        		</div> <!-- / tabs_item -->

        		<div class="tabs_item">
        			<img src="http://d13yacurqjgara.cloudfront.net/users/347667/screenshots/1412641/untitled-1.jpg">
        			<h4>Tab03</h4>
        			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, excepturi, minima, corporis deserunt quia quae sit officiis labore inventore autem a delectus consequuntur voluptatem modi eligendi similique sed nam vitae.</p>
        		</div> <!-- / tabs_item -->

        	</div> <!-- / tab_content -->
        </div> <!-- / tab -->
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
        <script>$(document).ready(function () {
            (function ($) {
                $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
                $('.tab ul.tabs li a').click(function (g) {
                    var tab = $(this).closest('.tab'), index = $(this).closest('li').index();
                    tab.find('ul.tabs > li').removeClass('current');
                    $(this).closest('li').addClass('current');
                    tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
                    tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
                    g.preventDefault();
                });
            }(jQuery));
        });

        </script>

accordeon
=======

        <div class="container">

          <section>
          <h1> The Sexy Toggle FAQ Accordio<span>n</span></h1>

          </section>
        <div class="toggle">
        	<div class="toggle-title ">
        		<h3>
        		<i></i>
        		<span class="title-name">What is the universe made of?</span>
        		</h3>
        	</div>
        	<div class="toggle-inner">
        		<p>Astronomers face an embarrassing conundrum: they don't know what 95% of the universe is made of. Atoms, which form everything we see around us, only account for a measly 5%. Over the past 80 years it has become clear that the substantial remainder is comprised of two shadowy entities – dark matter and dark energy. The former, first discovered in 1933, acts as an invisible glue, binding galaxies and galaxy clusters together. Unveiled in 1998, the latter is pushing the universe's expansion to ever greater speeds. Astronomers are closing in on the true identities of these unseen interlopers.</p>
        	</div>
        	</div><!-- END OF TOGGLE -->


        	<div class="toggle">
        		<div class="toggle-title ">
        			<h3>
        			<i></i>
        			<span class="title-name">How did life begin?</span>
        			</h3>
        		</div>

        		<div class="toggle-inner">
        			<p>Four billion years ago, something started stirring in the primordial soup. A few simple chemicals got together and made biology – the first molecules capable of replicating themselves appeared. We humans are linked by evolution to those early biological molecules. But how did the basic chemicals present on early Earth spontaneously arrange themselves into something resembling life? How did we get DNA? What did the first cells look like? More than half a century after the chemist Stanley Miller proposed his "primordial soup" theory, we still can't agree about what happened. Some say life began in hot pools near volcanoes, others that it was kick-started by meteorites hitting the sea.</p>
        		</div>
        		</div><!-- END OF TOGGLE -->

        		<div class="toggle">
        			<div class="toggle-title  ">
        				<h3>
        				<i></i>
        				<span class="title-name"> Are we alone in the universe?</span>
        				</h3>
        			</div>

        			<div class="toggle-inner">
        				<p>Perhaps not. Astronomers have been scouring the universe for places where water worlds might have given rise to life, from Europa and Mars in our solar system to planets many light years away. Radio telescopes have been eavesdropping on the heavens and in 1977 a signal bearing the potential hallmarks of an alien message was heard. Astronomers are now able to scan the atmospheres of alien worlds for oxygen and water. The next few decades will be an exciting time to be an alien hunter with up to 60bn potentially habitable planets in our Milky Way alone.</p>
        			</div>

        			</div><!-- END OF TOGGLE -->



        		<div class="toggle">
        			<div class="toggle-title  ">
        				<h3>
        				<i></i>
        				<span class="title-name"> What makes us human?</span>
        				</h3>
        			</div>

        			<div class="toggle-inner">
        				<p>Just looking at your DNA won't tell you – the human genome is 99% identical to a chimpanzee's and, for that matter, 50% to a banana's. We do, however, have bigger brains than most animals – not the biggest, but packed with three times as many neurons as a gorilla (86bn to be exact). A lot of the things we once thought distinguishing about us – language, tool-use, recognising yourself in the mirror – are seen in other animals. Perhaps it's our culture – and its subsequent effect on our genes (and vice versa) – that makes the difference. Scientists think that cooking and our mastery of fire may have helped us gain big brains. But it's possible that our capacity for co-operation and skills trade is what really makes this a planet of humans and not apes.</p>
        			</div>

        			</div><!-- END OF TOGGLE -->



        		<div class="toggle">
        			<div class="toggle-title ">
        				<h3>
        				<i></i>
        				<span class="title-name">  What's at the bottom of a black hole?</span>
        				</h3>
        			</div>

        			<div class="toggle-inner">
        				<p>It's a question we don't yet have the tools to answer. Einstein's general relativity says that when a black hole is created by a dying, collapsing massive star, it continues caving in until it forms an infinitely small, infinitely dense point called a singularity. But on such scales quantum physics probably has something to say too. Except that general relativity and quantum physics have never been the happiest of bedfellows – for decades they have withstood all attempts to unify them. However, a recent idea – called M-Theory – may one day explain the unseen centre of one of the universe's most extreme creations.</p>
        			</div>

        			</div><!-- END OF TOGGLE -->




        		<div class="toggle">
        			<div class="toggle-title ">
        				<h3>
        				<i></i>
        				<span class="title-name">Why do we dream?</span>
        				</h3>
        			</div>

        			<div class="toggle-inner">
        				<p>We spend around a third of our lives sleeping. Considering how much time we spend doing it, you might think we'd know everything about it. But scientists are still searching for a complete explanation of why we sleep and dream. Subscribers to Sigmund Freud's views believed dreams were expressions of unfulfilled wishes – often sexual – while others wonder whether dreams are anything but the random firings of a sleeping brain. Animal studies and advances in brain imaging have led us to a more complex understanding that suggests dreaming could play a role in memory, learning and emotions. Rats, for example, have been shown to replay their waking experiences in dreams, apparently helping them to solve complex tasks such as navigating mazes.</p>
        			</div>

        			</div><!-- END OF TOGGLE -->



          		<div class="toggle">
        			<div class="toggle-title ">
        				<h3>
        				<i></i>
        				<span class="title-name">Why is there stuff?</span>
        				</h3>
        			</div>

        			<div class="toggle-inner">
        				<p>You really shouldn't be here. The "stuff" you're made of is matter, which has a counterpart called antimatter differing only in electrical charge. When they meet, both disappear in a flash of energy. Our best theories suggest that the big bang created equal amounts of the two, meaning all matter should have since encountered its antimatter counterpart, scuppering them both and leaving the universe awash with only energy. Clearly nature has a subtle bias for matter otherwise you wouldn't exist. Researchers are sifting data from experiments like the Large Hadron Collider trying to understand why, with supersymmetry and neutrinos the two leading contenders.</p>
        			</div>

        			</div><!-- END OF TOGGLE -->


        		</div>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

        <script>

        if (jQuery('.toggle .toggle-title').hasClass('active')) {
            jQuery('.toggle .toggle-title.active').closest('.toggle').find('.toggle-inner').show();
        }
        jQuery('.toggle .toggle-title').click(function () {
            if (jQuery(this).hasClass('active')) {
                jQuery(this).removeClass('active').closest('.toggle').find('.toggle-inner').slideUp(200);
            } else {
                jQuery(this).addClass('active').closest('.toggle').find('.toggle-inner').slideDown(200);
            }
        });

        </script>
