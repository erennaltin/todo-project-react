import * as React from "react";

function SvgUpcoming(props) {
  return (
    <svg
      height="1em"
      viewBox="0 0 512 512"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M452 40h-24V0h-40v40H124V0H84v40H60C26.914 40 0 66.914 0 100v352c0 33.086 26.914 60 60 60h392c33.086 0 60-26.914 60-60V100c0-33.086-26.914-60-60-60zM60 80h24v40h40V80h264v40h40V80h24c11.027 0 20 8.973 20 20v48H40v-48c0-11.027 8.973-20 20-20zm392 392H60c-11.027 0-20-8.973-20-20V188h432v264c0 11.027-8.973 20-20 20zm-136-42h120V310H316zm40-80h40v40h-40zm0 0" />
    </svg>
  );
}

export default SvgUpcoming;
