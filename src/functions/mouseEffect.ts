const mouseEffect = () => {
  function mousecursor() {
    const cursorInner = document.querySelector(
      ".cursor-inner"
    ) as HTMLElement | null;
    const cursorOuter = document.querySelector(
      ".cursor-outer"
    ) as HTMLElement | null;

    const o: boolean = false;

    window.onmousemove = function (s: MouseEvent) {
      if (!cursorInner || !cursorOuter) return;

      if (!o) {
        cursorOuter.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
      }

      cursorInner.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
    };

    const cursorPointer = document.querySelector(".cursor-pointer");
    if (cursorPointer && cursorInner && cursorOuter) {
      cursorPointer.addEventListener("mouseenter", function () {
        cursorInner.classList.add("cursor-hover");
        cursorOuter.classList.add("cursor-hover");
      });

      cursorPointer.addEventListener("mouseleave", function () {
        cursorInner.classList.remove("cursor-hover");
        cursorOuter.classList.remove("cursor-hover");
      });

      cursorInner.style.visibility = "visible";
      cursorOuter.style.visibility = "visible";
    }

    document.querySelectorAll("a").forEach((item) => {
      item.addEventListener("mouseenter", function () {
        if (!cursorInner || !cursorOuter) return;
        cursorInner.classList.add("cursor-hover");
        cursorOuter.classList.add("cursor-hover");
      });

      item.addEventListener("mouseleave", function () {
        if (!cursorInner || !cursorOuter) return;
        cursorInner.classList.remove("cursor-hover");
        cursorOuter.classList.remove("cursor-hover");
      });
    });

    if (cursorInner && cursorOuter) {
      cursorInner.style.visibility = "visible";
      cursorOuter.style.visibility = "visible";
    }
  }

  mousecursor();
};

export default mouseEffect;
