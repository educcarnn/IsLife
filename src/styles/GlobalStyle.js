import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, b, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
/* -------------------- */

body {
    box-sizing: border-box;
    background-color: #F5F5F5;
    color: black;
    font-family: 'Inter', sans-serif;
}
button{
    cursor: pointer;
    background-color: red;
}
li{
    list-style: none;
}

:root{
    --rosa: #CE2D5D;
	--rosaBackground: #F9F1F1
    --pretoFonte: #121214;
	--backgroundCollor: #FFFFFF;
	--backgroundInputs: #f2f2f2;
	--pretoModal: #000000; 
   --cinza: #D9D9D9;
	--verde: #039914;


}

`;