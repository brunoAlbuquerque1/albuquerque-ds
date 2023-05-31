import { html } from "lit";
import "./index";

export default {
  title: "Components/Typography",
};

const colors = [
  "primary-pure", "primary-light","primary-medium", "primary-dark",
  "secondary-pure", "secondary-light","secondary-medium", "secondary-dark",
  "feedback-success-pure","feedback-success-high", "feedback-success-medium", "feedback-success-low",
  "feedback-error-pure", "feedback-error-high", "feedback-error-medium", "feedback-error-low",
  "feedback-alert-pure", "feedback-alert-high", "feedback-alert-medium", "feedback-alert-low",
  "neutral-pure", "neutral-high", "neutral-medium", "neutral-low",
]

// Display Story
export const Display = ({ size, content, color }) => {
  return html`
    <dsb-typography color="${color}" component="display" .size="${size}">
      ${content}
    </dsb-typography>
  `;
};
Display.args = {
  content: "Display",
  size: "display",
  color: "secondary-pure"
};
Display.argTypes = {
  content: {
    name: "Content",
    description: "Indica o texto que será exibido no display",
    table: {
      category: "Custom Inputs",
      type: { summary: "string" },
      defaultValue: { summary: "" },
    },
  },
  size: {
    name: "Size",
    description: "Indica o tamanho do display que será renderizado",
    table: {
      category: "Modifiers",
      type: { summary: "string" },
      defaultValue: { summary: "display" },
    },
    control: "select",
    options: ["display", "x-display"],
  },
  color: {
    name: "Color",
    description: "Indica a cor do texto",
    table: {
      category: "Modifiers",
      type: { summary: "string" },
      defaultValue: { summary: "primary-pure" },
    },
    control: "select",
    options: colors
  }
};
Display.parameters = {
  docs: {
    source: {
      code: `<dsb-typography color="secondary-80" component="display" size="display">[Content]</dsb-typography>`,
    },
  },
};

// Heading Story
export const Heading = ({ size, variant, content, color }) => {
  return html`
    <dsb-typography
      color="${color}"
      component="heading"
      .size="${size}"
      .variant="${variant}"
    >
      ${content}
    </dsb-typography>
  `;
};
Heading.args = {
  content: "Heading",
  size: "display",
  variant: "h1",
  color: "secondary-pure"
};
Heading.argTypes = {
  content: {
    name: "Content",
    description: "Indica o texto que será exibido no heading",
    table: {
      category: "Custom Inputs",
      type: { summary: "string" },
      defaultValue: { summary: "" },
    },
  },
  size: {
    name: "Size",
    description: "Indica o tamanho do heading que será renderizado",
    table: {
      category: "Modifiers",
      type: { summary: "string" },
      defaultValue: { summary: "small" },
    },
    control: "select",
    options: ["small", "medium", "large", "x-large"],
  },
  variant: {
    name: "Variant",
    description: "Indica a variant da tag heading que será renderizado",
    table: {
      category: "Modifiers",
      type: { summary: "string" },
      defaultValue: { summary: "h1" },
    },
    control: "select",
    options: ["h1", "h2", "h3", "h4", "h5", "h6"],
  },
  color: {
    name: "Color",
    description: "Indica a cor do texto",
    table: {
      category: "Modifiers",
      type: { summary: "string" },
      defaultValue: { summary: "primary-pure" },
    },
    control: "select",
    options: colors
  }
};
Heading.parameters = {
  docs: {
    source: {
      code: `<dsb-typography color="secondary-80" variant="h1" component="heading" size="large">[Content]</dsb-typography>`,
    },
  },
};

// Subtitle Story
export const Subtitle = ({ size, content, color }) => {
  return html`
    <dsb-typography color="${color}" component="subtitle" .size="${size}">
      ${content}
    </dsb-typography>
  `;
};
Subtitle.args = {
  content: "Subtitle",
  size: "large",
  color: "secondary-pure"
};
Subtitle.argTypes = {
  content: {
    name: "Content",
    description: "Indica o texto que será exibido no subtitle",
    table: {
      category: "Custom Inputs",
      type: { summary: "string" },
      defaultValue: { summary: "" },
    },
  },
  size: {
    name: "Size",
    description: "Indica o tamanho do subtitle que será renderizado",
    table: {
      category: "Modifiers",
      type: { summary: "string" },
      defaultValue: { summary: "large" },
    },
    control: "select",
    options: ["small", "medium", "large"],
  },
  color: {
    name: "Color",
    description: "Indica a cor do texto",
    table: {
      category: "Modifiers",
      type: { summary: "string" },
      defaultValue: { summary: "primary-pure" },
    },
    control: "select",
    options: colors
  }
};
Subtitle.parameters = {
  docs: {
    source: {
      code: `<dsb-typography color="secondary-80" component="subtitle" size="large">[Content]</dsb-typography>`,
    },
  },
};

// Paragraph Story
export const Paragraph = ({ content, size, color }) => {
  return html`
    <dsb-typography color="${color}" component="paragraph" .size="${size}">
      ${content}
    </dsb-typography>
  `;
};
Paragraph.args = {
  content: "Paragraph",
  color: "secondary-pure"
};
Paragraph.argTypes = {
  content: {
    name: "Content",
    description: "Indica o texto que será exibido no paragraph",
    table: {
      category: "Custom Inputs",
      type: { summary: "string" },
      defaultValue: { summary: "" },
    },
  },
  size: {
    name: "Size",
    description: "Indica o tamanho do paragraph que será renderizado",
    table: {
      category: "Modifiers",
      type: { summary: "string" },
      defaultValue: { summary: "large" },
    },
    control: "select",
    options: ["x-small", "small", "small-bold", "large"],
  },
  color: {
    name: "Color",
    description: "Indica a cor do texto",
    table: {
      category: "Modifiers",
      type: { summary: "string" },
      defaultValue: { summary: "primary-pure" },
    },
    control: "select",
    options: colors
  }
};
Paragraph.parameters = {
  docs: {
    source: {
      code: `<dsb-typography color="secondary-80" component="paragraph" size="large">[Content]</dsb-typography>`,
    },
  },
};

// Label Story
export const Label = ({ content, size, color }) => {
  return html`
    <dsb-typography color="${color}" component="label" .size="${size}">
      ${content}
    </dsb-typography>
  `;
};
Label.args = {
  content: "Label",
  color: "secondary-pure"
};
Label.argTypes = {
  content: {
    name: "Content",
    description: "Indica o texto que será exibido no label",
    table: {
      category: "Custom Inputs",
      type: { summary: "string" },
      defaultValue: { summary: "" },
    },
  },
  size: {
    name: "Size",
    description: "Indica o tamanho do label que será renderizado",
    table: {
      category: "Modifiers",
      type: { summary: "string" },
      defaultValue: { summary: "large" },
    },
    control: "select",
    options: ["x-small", "small", "small-bold", "large"],
  },
  color: {
    name: "Color",
    description: "Indica a cor do texto",
    table: {
      category: "Modifiers",
      type: { summary: "string" },
      defaultValue: { summary: "primary-pure" },
    },
    control: "select",
    options: colors
  }
};
Label.parameters = {
  docs: {
    source: {
      code: `<dsb-typography color="secondary-80" component="label" size="large">[Content]</dsb-typography>`,
    },
  },
};

// Caption Story
export const Caption = ({ content, color }) => {
  return html`
    <dsb-typography color="${color}" component="caption">
      ${content}
    </dsb-typography>
  `;
};
Caption.args = {
  content: "Caption",
  color: "secondary-pure"
};
Caption.argTypes = {
  content: {
    name: "Content",
    description: "Indica o texto que será exibido no caption",
    table: {
      category: "Custom Inputs",
      type: { summary: "string" },
      defaultValue: { summary: "" },
    },
  },
  color: {
    name: "Color",
    description: "Indica a cor do texto",
    table: {
      category: "Modifiers",
      type: { summary: "string" },
      defaultValue: { summary: "primary-pure" },
    },
    control: "select",
    options: colors
  }
};
Caption.parameters = {
  docs: {
    source: {
      code: `<dsb-typography color="secondary-80" component="caption">[Content]</dsb-typography>`,
    },
  },
};
