import { useEffect, useState } from "react";
import { FaHandPointUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const getScrollTop = () =>
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    const onScroll = () => {
      setShow(getScrollTop() > 250);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => {
    (document.documentElement || document.body).scrollTo?.({ top: 0, behavior: "smooth" });
    window.scrollTo({ top: 0, behavior: "smooth" }); // fallback
  };

  if (!show) return null;

  return (
    <button className="scrollTopBtn" onClick={goTop} type="button" aria-label="Scroll to top">
      <FaHandPointUp size={20} />
    </button>
  );
}