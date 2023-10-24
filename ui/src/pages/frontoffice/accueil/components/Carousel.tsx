import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import AnnoncePopUp from "./AnnoncePopUp";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  // {
  //   imgPath: "/assets/images/b1.jpg",
  // },
  {
    imgPath: "/assets/images/001.jpg",
  },
  {
    imgPath: "/assets/images/002.jpg",
  },
  {
    imgPath: "/assets/images/003.jpg",
  },
  {
    imgPath: "/assets/images/004.jpg",
  },
  {
    imgPath: "/assets/images/005.jpg",
  },
  {
    imgPath: "/assets/images/006.jpg",
  },
];

const Carousel = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [openAnnonces, setOpenAnnonces] = useState(true);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const handleCloseAnnonces = () => {
    setOpenAnnonces(false);
  };

  return (
    <>
      <div className="flex flex-col gap-2 relative z-10">
        <div className="flex justify-center">
          <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
              interval={4000}
            >
              {images.map((step, index) => (
                <div key={index}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <div className="flex justify-center xl:h-[810px] w-full md:h-[432px] h-[210px]">
                      <img
                        className="w-full h-full object-cover"
                        src={step.imgPath}
                        alt={step.imgPath}
                      />
                    </div>
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <div
              className="flex justify-center"
              style={{ backgroundColor: "transparent" }}
            >
              <MobileStepper
                sx={{ background: "transparent" }}
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                  </Button>
                }
              />
            </div>
          </Box>
        </div>
        <div className="flex justify-center">
          <img src="/assets/images/img_aloalo.svg" alt="" />
        </div>
        {/* <div className="absolute z-20 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <SearchBar />
      </div> */}
      </div>
      <div className="absolute z-20 top-[400px] md:top-[450px] right-0">
        <img
          src="/assets/images/mionjo_soratra.png"
          alt="mionjoText"
          className="w-[200px] h-[150px] lg:w-[400px] lg:h-[250px] transform scale-125 origin-top-right"
        />
      </div>
      {openAnnonces && (
        <div className="absolute z-20">
          <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex h-full w-full items-center justify-center">
            <div className="blur-background absolute h-full w-full"></div>
          </div>
          <div className="fixed z-50 bg-blue/70 p-4 w-[200px] lg:w-72 top-6 lg:top-12 left-10">
            <button
              className="absolute right-4 top-2 text-white font-bold"
              onClick={() => setOpenAnnonces(false)}
            >
              X
            </button>
            <AnnoncePopUp />
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;
