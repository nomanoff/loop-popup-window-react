import BoxOne from "./BoxOne";
import BoxTwo from "./BoxTwo";

const data = {
  boxes: {
    "box-1": {
      id: "box-1",
      content: <BoxOne />,
      window: "chat",
    },
    "box-2": {
      id: "box-2",
      content: <BoxTwo />,
      window: "matrix",
    },
  },
  container: {
    id: "container",
    boxIds: ["box-1", "box-2"],
  },
};

export default data;
