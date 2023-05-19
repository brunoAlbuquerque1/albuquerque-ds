import { html } from "lit";
import "./index";

export default {
  title: "Components/Typography",
};

type Props = {
  label: string;
};

export const XDisplay = ({ label }: Props) => {
  return html`
    <dsc-typography component="display" size="x-display">
      ${label}
    </dsc-typography>
  `;
};
XDisplay.args = {
  label: "XDisplay",
};

export const Display = ({ label }: Props) => {
  return html`
    <dsc-typography component="display" size="display">
      ${label}
    </dsc-typography>
  `;
};
Display.args = {
  label: "Display",
};

export const HeadingXLarge = ({ label }: Props) => {
  return html`
    <dsc-typography component="heading" size="x-large">
      ${label}
    </dsc-typography>
  `;
};
HeadingXLarge.args = {
  label: "HeadingXLarge",
};

export const HeadingLarge = ({ label }: Props) => {
  return html`
    <dsc-typography component="heading" size="large"> ${label} </dsc-typography>
  `;
};
HeadingLarge.args = {
  label: "HeadingLarge",
};

export const HeadingMedium = ({ label }: Props) => {
  return html`
    <dsc-typography component="heading" size="medium">
      ${label}
    </dsc-typography>
  `;
};
HeadingMedium.args = {
  label: "HeadingMedium",
};

export const HeadingSmall = ({ label }: Props) => {
  return html`
    <dsc-typography component="heading" size="small"> ${label} </dsc-typography>
  `;
};
HeadingSmall.args = {
  label: "HeadingSmall",
};

export const SubtitleLarge = ({ label }: Props) => {
  return html`
    <dsc-typography component="subtitle" size="large">
      ${label}
    </dsc-typography>
  `;
};
SubtitleLarge.args = {
  label: "SubtitleLarge",
};

export const ParagraphLarge = ({ label }: Props) => {
  return html`
    <dsc-typography component="paragraph" size="large">
      ${label}
    </dsc-typography>
  `;
};
ParagraphLarge.args = {
  label: "ParagraphLarge",
};

export const Caption = ({ label }: Props) => {
  return html`
    <dsc-typography component="caption"> ${label} </dsc-typography>
  `;
};
Caption.args = {
  label: "Caption",
};
