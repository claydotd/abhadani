import React from "react";

interface DukeofWellingtonProps {
  width?: number;
  height?: number;
}

const DukeofWellington: React.FC<DukeofWellingtonProps> = ({
  width = 600,
  height = 400,
}) => {
  return (
    <div>
        <img src='https://ichef.bbci.co.uk/ace/standard/320/mcs/media/images/71051000/jpg/_71051828_71044344.jpg.webp' width={width} height={height} />
    </div>
  );
};

export default DukeofWellington;