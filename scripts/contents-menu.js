/*
 *  Generates a floating navigation block from the <h2 /> headings in the main <article />:
 *
 *  <div.floating-contents-container>
 *      <div.floating-contents-padder>
 *          <div.floating-contents-menu>
 *              <h2 />
 *              <h2 />
 *              <h2 />
 *          </div>
 *          <div.show-hide-header />
 *      </div>
 *  </div>
 *
 */
function generateNavigation() {
    // outer container element
    var floatingContentsContainer = document.createElement('div');
    floatingContentsContainer.classList.add("floating-contents-container");

    // padding container in floatingContentsContainer
    var navContainerPadder = document.createElement('div');
    navContainerPadder.classList.add("floating-contents-padder");

    // menu container
    var navContainer = navContainer = document.createElement('div');
    navContainer.classList.add("floating-contents-menu");

    // menu header - toggles visibility
    var showButton = document.createElement('h3');
    showButton.classList.add("show-hide-header");
    showButton.innerHTML = "<span>Contents</span><span class='plus-icon'>+</span><span class='minus-icon'>-</span>"

    floatingContentsContainer.appendChild(navContainerPadder);
    navContainerPadder.appendChild(navContainer);
    navContainerPadder.appendChild(showButton);

    var title = document.createElement('h2');
    title.innerHTML = '&nbsp;';
    navContainer.appendChild(title);

    $(document.body).prepend(floatingContentsContainer);

    // map article subheadings to navigation items
    Array.from($('article h1')).forEach(function (articleHeading) {
        var headingLink = document.createElement('h3');

        headingLink.innerHTML = articleHeading.innerHTML;
        headingLink.onclick = function () {
            var offset = $(articleHeading)[0].getBoundingClientRect().y;
            var scrollY = $('html,body').scrollTop();

            $('html,body').animate({
                scrollTop: offset - 80 + scrollY
            }, 400);
        };

        navContainer.appendChild(headingLink);
    });

    $(showButton).click(function () {
        if (document.body.classList.contains('contents-hidden')) {
            document.body.classList.remove('contents-hidden');
        } else {
            document.body.classList.add('contents-hidden');
        }
    });

    var currentScrollValue = 0;
    var previousScrollValue = 0;

    var SCROLL_OFFSET = 680;

    $(document).scroll(function (e) {
        currentScrollValue = $(document).scrollTop();
        window.requestAnimationFrame(function () {
            if (currentScrollValue > SCROLL_OFFSET && previousScrollValue <= SCROLL_OFFSET) {
                floatingContentsContainer.classList.add('fxed');
            } else if (currentScrollValue < SCROLL_OFFSET && previousScrollValue >= SCROLL_OFFSET) {
                floatingContentsContainer.classList.remove('fxed');
            }
            previousScrollValue = currentScrollValue;
        });
    });
}

$(generateNavigation);
