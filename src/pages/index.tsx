import * as React from "react";
import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import RectangleComponent1 from "../components/rectangle-component1";
import AcCursusEx from "../components/ac-cursus-ex";
import SitEgetTincidunt from "../components/sit-eget-tincidunt";
import GetInTouch from "../components/get-in-touch";
import FrameComponent from "../components/frame-component";
import CryptosIcon1 from "../components/cryptos-icon1";
import * as styles from "./index.module.css";
const AboutUs: FunctionComponent = () => {
  return (
    <div className={styles.aboutUs}>
      <img className={styles.stack11Icon} alt="" src="/stack1-1@2x.png" />
      <RectangleComponent1 />
      <div className={styles.aboutUsChild} />
      <div className={styles.aboutUsItem} />
      <div className={styles.aboutUsInner} />
      <b className={styles.aboutUs1}>About us</b>
      <b className={styles.members}>Members</b>
      <div className={styles.acCursusExContainer}>
        <AcCursusEx />
        <p className={styles.blankLine}>&nbsp;</p>
        <SitEgetTincidunt />
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine2}>&nbsp;</p>
      </div>
      <div className={styles.angelLopez}>Angel Lopez</div>
      <div className={styles.carlosSanchez}>Carlos Sanchez</div>
      <div className={styles.jonathanOcampo}>Jonathan Ocampo</div>
      <b className={styles.ceofounder}>CEO/Founder</b>
      <b className={styles.cto}>CTO</b>
      <b className={styles.cso}>CSO</b>
      <div className={styles.crasDonecEx}>
        “Cras Donec ex quis lorem. consectetur tincidunt lorem”
      </div>
      <div className={styles.crasDonecEx1}>
        “Cras Donec ex quis lorem. consectetur tincidunt lorem”
      </div>
      <div className={styles.crasDonecEx2}>
        “Cras Donec ex quis lorem. consectetur tincidunt lorem”
      </div>
      <GetInTouch getInTouch="Get in touch" />
      <Button
        className={styles.frameButton}
        sx={{ width: 337 }}
        variant="outlined"
        color="primary"
      >
        Contact us
      </Button>
      <div className={styles.acCursusExContainer1}>
        <AcCursusEx acCursusExInViverraGravidAccentColor="unset" />
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine2}>&nbsp;</p>
      </div>
      <img className={styles.treesIcon1} alt="" src="/treesicon-1@2x.png" />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-1@2x.png" />
      <img className={styles.aboutUsChild1} alt="" src="/ellipse-2@2x.png" />
      <img className={styles.aboutUsChild2} alt="" src="/ellipse-3@2x.png" />
      <img
        className={styles.twitter11Icon}
        alt=""
        src="/013twitter1-1@2x.png"
      />
      <img
        className={styles.twitter12Icon}
        alt=""
        src="/013twitter1-1@2x.png"
      />
      <img
        className={styles.twitter13Icon}
        alt=""
        src="/013twitter1-1@2x.png"
      />
      <img className={styles.github1Icon} alt="" src="/039github-1@2x.png" />
      <img className={styles.github2Icon} alt="" src="/039github-1@2x.png" />
      <img className={styles.github3Icon} alt="" src="/039github-1@2x.png" />
      <img
        className={styles.instagram1Icon}
        alt=""
        src="/034instagram-1@2x.png"
      />
      <img
        className={styles.instagram2Icon}
        alt=""
        src="/034instagram-1@2x.png"
      />
      <img
        className={styles.instagram3Icon}
        alt=""
        src="/034instagram-1@2x.png"
      />
      <GetInTouch
        getInTouch="Give us a coffee"
        getInTouchTop="4096px"
        getInTouchLeft="696px"
        getInTouchColor="#000"
        getInTouchTextAlign="center"
        getInTouchFontSize="64px"
        getInTouchTextShadow="0px 0px 0px rgba(255, 255, 255, 0.01)"
        getInTouchAlignContent="unset"
      />
      <div className={styles.ifYoudLikeContainer}>
        <AcCursusEx />
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine2}>&nbsp;</p>
      </div>
      <div className={styles.rectangleDiv} />
      <GetInTouch
        getInTouch="0xc351155C80aCD043BD5F8FE7ffc8536af1fF9375"
        getInTouchTop="4396px"
        getInTouchLeft="555px"
        getInTouchColor="#000"
        getInTouchTextAlign="center"
        getInTouchFontSize="32px"
        getInTouchTextShadow="unset"
      />
      <FrameComponent />
      <img className={styles.leave51Icon} alt="" src="/leave5-1@2x.png" />
      <img className={styles.leave52Icon} alt="" src="/leave5-2@2x.png" />
      <img className={styles.leave56Icon} alt="" src="/leave5-1@2x.png" />
      <img className={styles.leave58Icon} alt="" src="/leave5-1@2x.png" />
      <img className={styles.leave57Icon} alt="" src="/leave5-2@2x.png" />
      <img className={styles.leave59Icon} alt="" src="/leave5-2@2x.png" />
      <img className={styles.leave43Icon} alt="" src="/leave4-3@2x.png" />
      <img className={styles.leave31Icon} alt="" src="/leave3-1@2x.png" />
      <img className={styles.leave33Icon} alt="" src="/leave3-3@2x.png" />
      <img className={styles.leave32Icon} alt="" src="/leave3-2@2x.png" />
      <img className={styles.leave54Icon} alt="" src="/leave5-4@2x.png" />
      <img className={styles.leave55Icon} alt="" src="/leave5-5@2x.png" />
      <img className={styles.leave44Icon} alt="" src="/leave4-3@2x.png" />
      <img className={styles.leave45Icon} alt="" src="/leave4-3@2x.png" />
      <img className={styles.leave46Icon} alt="" src="/leave4-6@2x.png" />
      <CryptosIcon1 />
    </div>
  );
};

export default AboutUs;
