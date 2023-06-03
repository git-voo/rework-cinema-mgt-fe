import { useNavigate } from "react-router-dom";

export default function GoTo(to, replace) {
  const navigate = useNavigate();
  if (!to) return false;

  navigate(to, { replace: replace });
}