import { Dialog as HeadLessDialog } from "@headlessui/react";

const Dialog = ({ children, open, onClose, heading }) => {
  return (
    <div>
      <HeadLessDialog
        as="div"
        open={open}
        className="relative z-50"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black/25" />
        <HeadLessDialog.Panel className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-5 rounded-lg">
          <HeadLessDialog.Title as="h3" className="text-lg font-semibold mb-4">
            {heading}
          </HeadLessDialog.Title>
          <div>{children}</div>
        </HeadLessDialog.Panel>
      </HeadLessDialog>
    </div>
  );
};

export default Dialog;
