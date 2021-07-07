import cskLogo from "../assets/csk.png";
import dcLogo from "../assets/DC.png";
import glLogo from "../assets/GL.png";
import kingLogo from "../assets/king.png";
import kkrLogo from "../assets/kkr.png";
import kochiLogo from "../assets/kochi.png";
import miLogo from "../assets/MI.svg";
import puneWLogo from "../assets/pune.png";
import rcbLogo from "../assets/rcb.png";
import rrLogo from "../assets/RR_logo.png";
import sunHydLogo from "../assets/sun_hyd.png";

export const getLogo = (teamName: string): string => {
  switch (teamName) {
    case "Rajasthan Royals":
      return rrLogo;
    case "Gujarat Lions":
      return glLogo;
    case "Delhi Capitals":
      return dcLogo;
    case "Kolkata Knight Riders":
      return kkrLogo;
    case "Chennai Super Kings":
      return cskLogo;
    case "Mumbai Indians":
      return miLogo;
    case "Kings XI Punjab":
      return kingLogo;
    case "Royal Challengers Bangalore":
      return rcbLogo;
    case "Sunrisers Hyderabad":
      return sunHydLogo;
    case "Kochi Tuskers Kerala":
      return kochiLogo;
    case "Rising Pune Supergiant":
      return puneWLogo;
    default:
      return "";
  }
};
