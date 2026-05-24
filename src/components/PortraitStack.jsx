import { useCallback, useRef, useState } from "react";

const INITIAL_PORTRAITS = [
  { id: "podcast", src: "/hugo-podcast.png", alt: "Hugo Oliveira" },
  { id: "photo", src: "/hugo-photo.png", alt: "Hugo Oliveira" },
];

const SWIPE_THRESHOLD = 40;
const DRAG_FACTOR = 0.45;
const FLY_OUT_X = 110;
const OPACITY_RANGE = SWIPE_THRESHOLD * 2.2;
const BACK_ROTATIONS = ["6deg", "-6deg"];

const PortraitStack = () => {
  const [deck, setDeck] = useState(INITIAL_PORTRAITS);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const dragStart = useRef({ pointerX: 0, pointerY: 0 });

  const canSwipe = deck.length > 1;

  const resetOffset = useCallback(() => setOffset({ x: 0, y: 0 }), []);

  const flyOut = useCallback(
    (direction, onComplete) => {
      setIsAnimating(true);
      setOffset({ x: direction === "left" ? -FLY_OUT_X : FLY_OUT_X, y: 0 });
      window.setTimeout(() => {
        onComplete();
        resetOffset();
        setIsAnimating(false);
      }, 220);
    },
    [resetOffset],
  );

  const advanceDeck = useCallback(
    (direction) => {
      if (!canSwipe || isAnimating) return;
      flyOut(direction, () => setDeck((current) => current.slice(1)));
    },
    [canSwipe, flyOut, isAnimating],
  );

  const handlePointerDown = (event) => {
    if (!canSwipe || isAnimating) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    dragStart.current = { pointerX: event.clientX, pointerY: event.clientY };
    setDragging(true);
  };

  const handlePointerMove = (event) => {
    if (!canSwipe || !dragging || isAnimating) return;
    const deltaX = event.clientX - dragStart.current.pointerX;
    const deltaY = event.clientY - dragStart.current.pointerY;
    setOffset({
      x: deltaX * DRAG_FACTOR,
      y: deltaY * DRAG_FACTOR * 0.25,
    });
  };

  const handlePointerUp = () => {
    if (!dragging || isAnimating) return;
    setDragging(false);

    if (!canSwipe) {
      resetOffset();
      return;
    }

    if (offset.x < -SWIPE_THRESHOLD) {
      advanceDeck("left");
      return;
    }
    if (offset.x > SWIPE_THRESHOLD) {
      advanceDeck("right");
      return;
    }
    resetOffset();
  };

  const handlePointerCancel = () => {
    setDragging(false);
    if (!isAnimating) resetOffset();
  };

  const handleKeyDown = (event) => {
    if (!canSwipe) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      advanceDeck("left");
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      advanceDeck("right");
    }
  };

  const dragProgress = canSwipe
    ? Math.min(Math.abs(offset.x) / OPACITY_RANGE, 1)
    : 0;
  const topOpacity = 1 - dragProgress * 0.75;
  const topRotation = canSwipe
    ? Math.max(-10, Math.min(10, offset.x * 0.08))
    : 0;
  const visibleCards = deck;

  return (
    <div className="mx-auto md:mr-8 md:mx-0">
      <div
        role="group"
        aria-roledescription="carousel"
        aria-label="Fotos do perfil"
        tabIndex={canSwipe ? 0 : -1}
        onKeyDown={handleKeyDown}
        className="relative h-[min(56vw,233px)] w-[min(42vw,175px)] touch-none outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg sm:h-[233px] sm:w-[175px]">
        {visibleCards.map((portrait, index) => {
          const isTop = index === 0;
          const backRotate =
            BACK_ROTATIONS[(index - 1) % BACK_ROTATIONS.length] ?? "0deg";

          let transform = `rotate(${index === 0 ? "0deg" : backRotate}) scale(${1 - index * 0.04})`;
          let opacity = 1;
          let zIndex = visibleCards.length - index;
          let transition = "transform 0.25s ease, opacity 0.25s ease";

          if (isTop && canSwipe) {
            transform = `translate(${offset.x}px, ${offset.y}px) rotate(${topRotation}deg)`;
            opacity = topOpacity;
            zIndex = 20;
            transition = dragging
              ? "none"
              : isAnimating
                ? "transform 0.2s ease-out, opacity 0.2s ease-out"
                : "transform 0.25s ease, opacity 0.25s ease";
          }

          if (index === 1 && canSwipe && (dragging || isAnimating || offset.x !== 0)) {
            opacity = 0.55 + dragProgress * 0.45;
          }

          return (
            <div
              key={portrait.id}
              className={`absolute inset-0 origin-bottom overflow-hidden rounded-lg bg-card ${
                isTop
                  ? canSwipe
                    ? "cursor-grab shadow-[0_10px_15px_-3px_rgb(0_0_0/0.3),0_4px_6px_-4px_rgb(0_0_0/0.3)] active:cursor-grabbing"
                    : "shadow-[0_10px_15px_-3px_rgb(0_0_0/0.3),0_4px_6px_-4px_rgb(0_0_0/0.3)]"
                  : "pointer-events-none"
              }`}
              style={{ transform, opacity, zIndex, transition }}
              onPointerDown={isTop && canSwipe ? handlePointerDown : undefined}
              onPointerMove={isTop && canSwipe ? handlePointerMove : undefined}
              onPointerUp={isTop && canSwipe ? handlePointerUp : undefined}
              onPointerCancel={isTop && canSwipe ? handlePointerCancel : undefined}>
              <img
                src={portrait.src}
                alt={isTop ? portrait.alt : ""}
                className="h-full w-full select-none object-cover object-center pointer-events-none"
                draggable={false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortraitStack;
