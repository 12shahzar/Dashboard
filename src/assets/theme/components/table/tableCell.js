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
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

// Shahzar React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { borderWidth } = borders;
const { light } = colors;

const tableCell = {
  styleOverrides: {
    root: {
      padding: `${pxToRem(12)} ${pxToRem(16)}`,
      borderBottom: `${borderWidth[1]} solid ${light.main}`,
    },
  },
};

export default tableCell;
