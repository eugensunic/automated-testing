function containsDeprecatedHtmlTags() {
  const obj = {
    applet: document.getElementsByTagName("applet"),
    basefont: document.getElementsByTagName("basefont"),
    center: document.getElementsByTagName("center"),
    dir: document.getElementsByTagName("dir"),
    embed: document.getElementsByTagName("embed"),
    font: document.getElementsByTagName("font"),
    isindex: document.getElementsByTagName("isindex"),
    listing: document.getElementsByTagName("listing"),
    menu: document.getElementsByTagName("menu"),
    plaintext: document.getElementsByTagName("plaintext"),
    s: document.getElementsByTagName("s"),
    strike: document.getElementsByTagName("strike"),
    u: document.getElementsByTagName("u"),
    xmp: document.getElementsByTagName("xmp")
  };
  return Object.values(obj).some(x => x.length);
}

function getDeprecatedHtmlTags() {}

function countDeprecatedHtmlAttributes() {
  const htmlBodyElements = document.body.getElementsByTagName("*");
  const forbiddenTags = [
    "align",
    "alink",
    "background",
    "bgcolor",
    "border",
    "clear",
    "height",
    "hspace",
    "language",
    "link",
    "nowrap",
    "start",
    "text",
    "type",
    "vlink",
    "vspace",
    "width"
  ];
  const deprecatedElementsCount = Array.from(htmlBodyElements).reduce(
    (acc_1, x) => {
      const elementTags = Object.values(x.attributes).map(x => x.localName);
      return (acc_1 += forbiddenTags.reduce(
        (acc_2, tag) => (elementTags.indexOf(tag) > -1 ? ++acc_2 : acc_2),
        0
      ));
    },
    0
  );
  return deprecatedElementsCount;
}

function getDeprecatedHtmlAttributes() {}

function hasDeprecatedHtmlAttributes() {
  return !!countDeprecatedHtmlAttributes();
}
/* 
link: https://www.tutorialspoint.com/html/html_deprecated_tags.htm

DEPRECATED HTML TAGS

<applet>	Deprecated. Specifies an applet	<object>
<basefont>	Deprecated. Specifies a base font	
<center>	Deprecated. Specifies centered text	text-align
<dir>	Deprecated. Specifies a directory list	
<embed>	Deprecated. Embeds an application in a document	<object>
<font>	Deprecated. Specifies text font, size, and color	font-family, font-size
<isindex>	Deprecated. Specifies a single-line input field	
<listing>	Deprecated. Specifies listing of items	<pre>
<menu>	Deprecated. Specifies a menu list	
<plaintext>	Deprecated. Specifies plaintext	<pre>
<s>	Deprecated. Specifies strikethrough text	text-decoration
<strike>	Deprecated. Specifies strikethrough text	text-decoration
<u>	Deprecated. Specifies underlined text	text-decoration
<xmp>	Deprecated.  


DEPRECATED HTML ATTRIBUTES

align	Specifies positioning of an element	text-align, float & vertical-align
alink	Specifies the color of an active link or selected link	active
background	Specifies background image	background-image
bgcolor	Specifies background color	background-color
border	Specifies a border width of any element	border-width
clear	Indicates how the browser should display the line after the <br /> element	clear
height	Specifies height of body and other elements	height
hspace	Specifies the amount of whitespace or padding that should appear left or right an element	padding
language	Specifies scripting language being used	type
link	Specifies the default color of all links in the document	link
nowrap	Prevents the text from wrapping within that table cell	white-space
start	Indicates the number at which a browser should start numbering a list	counter-reset
text	Specifies color of body text	color
type	Specifies the type of list in <li> tag	list-style-type
vlink	Specifies the color of visited links	visited
vspace	Specifies the amount of whitespace or padding that should appear above or below an element	padding
width	Specifies width of body and other elements	width

*/

// 12.) check deprecated html tags
