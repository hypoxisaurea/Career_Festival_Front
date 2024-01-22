import React from "react";
import {
  DetailContainer,
  Thumbnail,
  Menu,
  HorizontalDivider,
  InfoContainer,
  FileContainer,
  PlaceContainer,
  Subtitle,
} from "./EventDetailStyle";

function EventDetail() {
  return (
    <DetailContainer>
      <Thumbnail />
      <Menu />
      <HorizontalDivider />
      <InfoContainer />
      <HorizontalDivider />
      <FileContainer />
      <PlaceContainer>
        <Subtitle>행사위치</Subtitle>
      </PlaceContainer>
    </DetailContainer>
  );
}

export default EventDetail;
