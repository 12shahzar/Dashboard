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

// Shahzar React base styles
import typography from "assets/theme/base/typography";

// Shahzar React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { size } = typography;

const dialogTitle = {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.xl,
    },
  },
};

export default dialogTitle;
