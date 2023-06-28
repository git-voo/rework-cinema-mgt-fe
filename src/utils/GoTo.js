// import { useNavigate } from "react-router-dom";

// export default function GoTo(to, replace) {
//   const navigate = useNavigate();
//   if (!to) return false;

//   navigate(to, { replace: replace });
// }



// import { useNavigate } from "react-router-dom";

// export default function GoTo(to, replace) {
//   const navigate = useNavigate();
//   if (!to) return null;

//   const handleClick = () => {
//     navigate(to, { replace });
//   };

//   return handleClick;
// }



export default function GoTo(callback) {
  return (to, replace) => {
    if (!to) return;

    callback(to, { replace });
  };
}

// export const GoTo = useGoTo()