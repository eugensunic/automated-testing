// i.e style
function countHtmlTagAttribute(attributeName) {
  const htmlBodyElements = document.body.getElementsByTagName("*");

  return Array.from(htmlBodyElements).reduce((acc_1, x) => {
    console.log(Object.values(x.attributes).map(y => y.localName));
    return (
      acc_1 +
      Object.values(x.attributes)
        .map(y => y.localName)
        .reduce((acc_2, z) => (z === attributeName ? 1 : 0), 0)
    );
  }, 0);
}

function getHtmlTagAttribute() {}
