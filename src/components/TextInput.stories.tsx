import { Meta, StoryObj } from "@storybook/react";
import { EnvelopeSimple } from "phosphor-react";
import { TextInput, TextInputRootProps } from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <EnvelopeSimple />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your e-mail" />,
    ],
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {
  argTypes: {
    children: {
      table: { disable: true },
    },
  },
};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="Type your e-mail" />,
  },
  argTypes: {
    children: {
      table: { disable: true },
    },
  },
};
