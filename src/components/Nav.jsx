import React from "react";

/* * The navigation bar in the header is slightly different from the one in the footer
   * so I am not able to accurately reproduce the mockup in this regard. 
*/
export default function NavBar() {
    return (
        // give the <nav> the attributes aria-label="Main Navigation" and role="navigation"
        <nav class="nav" aria-label="Main Navigation" role="navigation">
             {/* Wrap each link in an anchor tag.
             Wrap each anchor tag in a list item.
             Wrap all of the list item tags in an unordered list tag. */}
            <ul>
                {/* <li><a href="#">Home</a></li> */}
                <li><a href="#">Women's</a></li>
                <li><a href="#">Men's</a></li>
                <li><a href="#">On The Street</a></li>
                <li><a href="#">The Catwalk</a></li>
                <li><a href="#">AdWatch</a></li>
                <li><a href="#">About</a></li>
                {/* <li><a href="#">Tips</a></li> */}
            </ul>
        </nav>
        
    )
}