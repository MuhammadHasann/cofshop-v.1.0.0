const AnchorScrollTo = (event) => {
  event.preventDefault();
  const target = event.target;

  if (target && target.getAttribute("href")) {
    const targetId = target.getAttribute("href").substring(1);

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }
};

export default AnchorScrollTo;
