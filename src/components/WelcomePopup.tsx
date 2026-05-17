import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { images } from "@/config/images";

const SESSION_KEY = "cib_popup_shown";

export default function WelcomePopup() {
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem(SESSION_KEY)) {
      setVisible(true);
      sessionStorage.setItem(SESSION_KEY, "true");
      // trigger animation on next frame
      requestAnimationFrame(() => setAnimate(true));
    }
  }, []);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  const close = () => setVisible(false);

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[9998]"
        onClick={close}
        style={{
          backgroundColor: animate ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0)",
          transition: "background-color 200ms ease-out",
        }}
      />

      {/* Close button – fixed to viewport */}
      <button
        onClick={close}
        className="fixed z-[10000] flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        style={{
          top: "12px",
          right: "12px",
          width: "44px",
          height: "44px",
          minWidth: "44px",
          minHeight: "44px",
        }}
        aria-label="Cerrar"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Popup content */}
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
        style={{ padding: "clamp(12px, 5vw, 24px)" }}
      >
        <div
          className="pointer-events-auto"
          style={{
            maxWidth: "90vw",
            maxHeight: "90vh",
            opacity: animate ? 1 : 0,
            transform: animate ? "scale(1)" : "scale(0.95)",
            transition: "opacity 300ms ease-out, transform 300ms ease-out",
          }}
        >
          <button
            onClick={() => {
              close();
              navigate("/viajeros");
            }}
            className="block cursor-pointer border-0 bg-transparent p-0"
          >
            <img
              src={images.popup.viajeros}
              alt="Inglés para Viajeros"
              className="popup-img rounded-2xl shadow-2xl"
              draggable={false}
            />
          </button>
        </div>
      </div>

      <style>{`
        .popup-img {
          max-height: 75vh;
          max-width: 100%;
          object-fit: contain;
          display: block;
        }
        @media (max-width: 640px) {
          .popup-img {
            max-width: 92vw;
            max-height: 70vh;
          }
        }
      `}</style>
    </>
  );
}
