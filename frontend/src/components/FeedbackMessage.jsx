import React from "react";

const FeedbackMessage = ({ message, type = "error" }) => {
  const colorClass = type === "success" ? "text-green-500" : "text-red-500";
  return message ? <p className={`mt-2 text-sm ${colorClass}`}>{message}</p> : null;
};

export default FeedbackMessage;
