import toast from "react-hot-toast";

export function ToastCustom(msg: string, type: string) {
  if (type === "success") {
    return toast.success(msg, {
      style: {
        border: "1px solid #353535",
        padding: "16px",
        color: "#353535",
      },
      iconTheme: {
        primary: "#353535",
        secondary: "#FFFAEE",
      },
    });
  }
  if (type === "error") {
    return toast.error(msg, {
      style: {
        border: "1px solid #353535",
        padding: "16px",
        color: "#353535",
      },
      iconTheme: {
        primary: "#353535",
        secondary: "#FFFAEE",
      },
    });
  }
}
