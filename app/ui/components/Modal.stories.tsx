import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "./Button";
import { Text } from "./Text";

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex justify-center items-center">
      <Button primary onClick={() => setShowModal(true)} label="모달 열기" />
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <Text>모달</Text>
        <Button warning onClick={() => setShowModal(false)} label="모달 닫기" />
      </Modal>
    </div>
  );
};

export const Default = Template.bind({});
