import { Fireworks, FireworksHandlers } from "@fireworks-js/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import nft from "../assets/images/nft.png";
import reward from "../assets/images/reward.png";

const RewardClaim = () => {
  const [lvl_2Img, setLvl_2Img] = useState(false);
  const [isAnimationDone, setIsAnimationDone] = useState(() => lvl_2Img);
  const [showPfp, setShowPfp] = useState(() => lvl_2Img);
  const [showFireworks, setShowFireworks] = useState(() => lvl_2Img);

  const fireworksRef = useRef<FireworksHandlers | null>(null);

  const notifyOnDiscord = () => setLvl_2Img(true);

  useEffect(() => {
    const time = setTimeout(() => {
      fireworksRef.current?.stop();
    }, 30000);
    return () => {
      clearTimeout(time);
    };
  }, [lvl_2Img]);

  useEffect(() => {
    fireworksRef.current?.stop();
  }, []);

  useEffect(() => {
    let time: ReturnType<typeof setTimeout>;
    let time2: ReturnType<typeof setTimeout>;
    if (lvl_2Img) {
      time = setTimeout(() => {
        setLvl_2Img(false);
        setIsAnimationDone(false);
        setShowPfp(false);
        fireworksRef.current?.stop();
      }, 15000);
      time2 = setTimeout(() => {
        setIsAnimationDone(true);
        setShowPfp(true);
        fireworksRef.current?.start();
      }, 8000);
    }
    return () => {
      clearTimeout(time);
      clearTimeout(time2);
    };
  }, [lvl_2Img]);
  useEffect(() => {
    setLvl_2Img(false);
    setIsAnimationDone(false);
    setShowPfp(false);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <AnimatePresence>
        <Fireworks
          ref={fireworksRef}
          options={{
            hue: {
              min: 0,
              max: 345,
            },
            acceleration: 1.02,
            brightness: {
              min: 50,
              max: 80,
            },
            decay: {
              min: 0.015,
              max: 0.03,
            },
            delay: {
              min: 30,
              max: 60,
            },
            explosion: 5,
            flickering: 50,
            intensity: 30,
            friction: 0.97,
            gravity: 1.5,
            opacity: 0.5,
            particles: 60,
            traceLength: 3,
            traceSpeed: 10,
            rocketsPoint: {
              min: 50,
              max: 50,
            },
            lineWidth: {
              explosion: {
                max: 4,
                min: 1,
              },
              trace: {
                min: 0.1,
                max: 1,
              },
            },
            lineStyle: "round",
          }}
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "fixed",
            zIndex: 999,
            pointerEvents: "none",
          }}
        />
        <div className={`relative h-[512px] w-[512px] `}>
          <motion.img
            onClick={(e) => {
              e.stopPropagation();
              if (isAnimationDone && !showPfp) setShowPfp(true);
            }}
            initial={false}
            animate={
              showPfp
                ? {
                    rotateY: 180,
                    backfaceVisibility: "hidden",
                    transition: { duration: 0.8 },
                  }
                : isAnimationDone
                  ? {
                      rotateY: 0,
                      backfaceVisibility: "hidden",
                      opacity: 1,
                      transition: { duration: 0.8 },
                    }
                  : lvl_2Img
                    ? {
                        rotateY: [0, 180, 360, 720, 1440, 2880, 5760],
                        opacity: [1, 1, 1, 1, 0],
                        backfaceVisibility: "visible",
                        transition: {
                          duration: 7,
                          ease: "linear",
                        },
                      }
                    : { opacity: 1, rotateY: 0 }
            }
            src={reward}
            alt={reward}
            width={512}
            height={512}
            className={`${showPfp ? "" : " "}`}
          />
          {/*  */}
          <motion.img
            onClick={(e) => {
              e.stopPropagation();
              if (isAnimationDone && showPfp) setShowPfp(false);
            }}
            onAnimationComplete={() => {
              if (!showFireworks) {
                setIsAnimationDone(true);
                setShowPfp(true);
                fireworksRef.current?.start();
                setShowFireworks(true);
              }
            }}
            initial={false}
            animate={
              showPfp
                ? {
                    rotateY: 0,
                    backfaceVisibility: "hidden",
                    opacity: 1,
                    transition: { duration: 0.8 },
                  }
                : isAnimationDone
                  ? {
                      rotateY: 180,
                      backfaceVisibility: "hidden",
                      opacity: 1,
                      transition: { duration: 0.8 },
                    }
                  : lvl_2Img
                    ? {
                        backfaceVisibility: "visible",
                        rotateY: [1800, 0],
                        opacity: [0, 1],
                        transition: {
                          duration: 3,
                          ease: "easeOut",
                          delay: 5,
                        },
                      }
                    : { opacity: 0 }
            }
            src={nft}
            alt="NFT"
            width={512}
            height={512}
            className={`reward-image absolute inset-0 z-10 ${showPfp ? "show-pfp" : ""}`}
          />
        </div>

        <button
          className="golden fix-btn-mt"
          disabled={lvl_2Img}
          style={{ width: "100%" }}
          onClick={() => notifyOnDiscord()}
        >
          Claim Reward
        </button>
      </AnimatePresence>
    </div>
  );
};

export default RewardClaim;
