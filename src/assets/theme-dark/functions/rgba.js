/**
=========================================================
* Shahzar React - v2.1.0
=========================================================

* Product Page: Shahzar/product/material-dashboard-react
* Copyright 2022 Shahzar(https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
  The rgba() function helps you to create a rgba color code, it uses the hexToRgb() function
  to convert the hex code into rgb for using it inside the rgba color format.
 */

// Shahzar React helper functions
import hexToRgb from "assets/theme-dark/functions/hexToRgb";

function rgba(color, opacity) {
  return `rgba(${hexToRgb(color)}, ${opacity})`;
}

export default rgba;
